#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const appDir = path.join(root, "app");
const contentDir = path.join(root, "content");
const docsNavPath = path.join(contentDir, "docs.nav.ts");
const errors = [];

function toPosix(filePath) {
  return filePath.split(path.sep).join("/");
}

function relative(filePath) {
  return toPosix(path.relative(root, filePath));
}

function walk(directory, predicate) {
  if (!fs.existsSync(directory)) return [];

  return fs
    .readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return walk(fullPath, predicate);
      return predicate(fullPath) ? [fullPath] : [];
    });
}

function report(filePath, message, line) {
  errors.push(`${relative(filePath)}${line ? `:${line}` : ""} — ${message}`);
}

function parseFrontmatter(filePath, source) {
  const lines = source.split(/\r?\n/);
  if (lines[0]?.trim() !== "---") {
    report(filePath, "missing opening frontmatter delimiter", 1);
    return { data: {}, body: source, bodyStartLine: 1 };
  }

  const closingIndex = lines.findIndex(
    (line, index) => index > 0 && line.trim() === "---",
  );
  if (closingIndex < 0) {
    report(filePath, "missing closing frontmatter delimiter", 1);
    return { data: {}, body: "", bodyStartLine: lines.length + 1 };
  }

  const data = {};
  for (let index = 1; index < closingIndex; index += 1) {
    const match = lines[index].match(/^([A-Za-z][\w-]*):(?:\s*(.*))?$/);
    if (!match) continue;

    const [, key, rawValue = ""] = match;
    data[key] = rawValue.trim().replace(/^(['"])(.*)\1$/, "$2");
  }

  return {
    data,
    body: lines.slice(closingIndex + 1).join("\n"),
    bodyStartLine: closingIndex + 2,
  };
}

function checkRequiredFrontmatter(filePath, section, data) {
  const requiredBySection = {
    docs: ["title", "description", "lastUpdated", "lastVerified"],
    tutorials: ["title", "description", "lastUpdated", "lastVerified"],
    news: ["title", "description", "date"],
  };
  const required = requiredBySection[section] ?? ["title", "description"];

  for (const field of required) {
    if (!data[field]) {
      report(filePath, `frontmatter field "${field}" is required`);
    }
  }

  const dateFields = ["date", "lastUpdated", "lastVerified"];
  for (const field of dateFields) {
    if (!data[field]) continue;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data[field])) {
      report(filePath, `frontmatter field "${field}" must use YYYY-MM-DD`);
      continue;
    }

    const parsed = new Date(`${data[field]}T00:00:00Z`);
    if (Number.isNaN(parsed.valueOf()) || parsed.toISOString().slice(0, 10) !== data[field]) {
      report(filePath, `frontmatter field "${field}" is not a valid date`);
    }
  }
}

function checkBodyHeadings(filePath, body, bodyStartLine) {
  const lines = body.split(/\r?\n/);
  let fence = null;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})/);

    if (fenceMatch) {
      const marker = fenceMatch[1][0];
      if (!fence) fence = marker;
      else if (fence === marker) fence = null;
      continue;
    }
    if (fence) continue;

    if (/^\s{0,3}#(?:\s+|$)/.test(line) || /<h1(?:\s|>)/i.test(line)) {
      report(
        filePath,
        "body must not contain an H1; the page template renders the frontmatter title",
        bodyStartLine + index,
      );
    }

    if (
      index > 0 &&
      /^\s*=+\s*$/.test(line) &&
      lines[index - 1].trim() &&
      !/^\s*</.test(lines[index - 1])
    ) {
      report(
        filePath,
        "body must not contain a setext H1; use an H2 or lower heading",
        bodyStartLine + index,
      );
    }
  }
}

function routeForContent(filePath) {
  const contentPath = toPosix(path.relative(contentDir, filePath));
  const parts = contentPath.replace(/\.mdx$/, "").split("/");
  const section = parts.shift();
  const slug = parts.join("/");
  return normalizeRoute(`/${section}${slug === "index" ? "" : `/${slug}`}`);
}

function routeForAppPage(filePath) {
  const routePath = toPosix(path.relative(appDir, path.dirname(filePath)));
  const parts = routePath
    .split("/")
    .filter((part) => part && !part.startsWith("(") && !part.startsWith("@"));

  if (parts.some((part) => part.startsWith("[") && part.endsWith("]"))) {
    return null;
  }
  return normalizeRoute(`/${parts.join("/")}`);
}

function normalizeRoute(route) {
  let normalized = route.split(/[?#]/, 1)[0] || "/";
  try {
    normalized = decodeURIComponent(normalized);
  } catch {
    // Leave malformed URI sequences intact so they fail route lookup.
  }
  normalized = normalized.replace(/\/{2,}/g, "/");
  if (normalized.length > 1) normalized = normalized.replace(/\/$/, "");
  return normalized;
}

function lineNumberAt(source, offset) {
  return source.slice(0, offset).split(/\r?\n/).length;
}

function extractInternalLinks(filePath, source, sourceRoute, startLine) {
  const found = [];
  const patterns = [
    /(?<!!)\[[^\]]*]\(\s*(?:<([^>]+)>|([^) \t]+))(?:\s+["'][^"']*["'])?\s*\)/g,
    /(?:href|to)\s*=\s*["']([^"']+)["']/g,
  ];

  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) {
      const target = match[1] || match[2];
      if (!target || target.startsWith("#") || /^[A-Za-z][A-Za-z\d+.-]*:/.test(target)) {
        continue;
      }

      let route;
      if (target.startsWith("/")) {
        route = normalizeRoute(target);
      } else {
        route = normalizeRoute(path.posix.resolve(path.posix.dirname(sourceRoute), target));
      }

      found.push({
        filePath,
        line: startLine + lineNumberAt(source, match.index) - 1,
        target,
        route,
      });
    }
  }

  return found;
}

const mdxFiles = walk(contentDir, (filePath) => filePath.endsWith(".mdx"));
const contentRoutes = new Set(mdxFiles.map(routeForContent));
const appPages = walk(appDir, (filePath) => /\/page\.(?:js|jsx|ts|tsx)$/.test(toPosix(filePath)));
const appRoutes = new Set(appPages.map(routeForAppPage).filter(Boolean));
const validRoutes = new Set([...appRoutes, ...contentRoutes]);
const links = [];

for (const filePath of mdxFiles) {
  const source = fs.readFileSync(filePath, "utf8");
  const section = toPosix(path.relative(contentDir, filePath)).split("/")[0];
  const { data, body, bodyStartLine } = parseFrontmatter(filePath, source);

  checkRequiredFrontmatter(filePath, section, data);
  checkBodyHeadings(filePath, body, bodyStartLine);
  links.push(...extractInternalLinks(filePath, body, routeForContent(filePath), bodyStartLine));
}

for (const link of links) {
  if (!validRoutes.has(link.route)) {
    report(
      link.filePath,
      `internal link "${link.target}" does not resolve to an app or MDX route`,
      link.line,
    );
  }
}

if (!fs.existsSync(docsNavPath)) {
  report(docsNavPath, "docs navigation file is missing");
} else {
  const navSource = fs.readFileSync(docsNavPath, "utf8");
  const navRoutes = [];
  const hrefPattern = /\bhref\s*:\s*["'](\/docs(?:\/[^"'?#]*)?)["']/g;

  for (const match of navSource.matchAll(hrefPattern)) {
    navRoutes.push(normalizeRoute(match[1]));
  }

  const seen = new Set();
  for (const route of navRoutes) {
    if (seen.has(route)) {
      report(docsNavPath, `duplicate docs navigation route "${route}"`);
    }
    seen.add(route);

    if (!contentRoutes.has(route)) {
      report(docsNavPath, `navigation route "${route}" has no matching MDX file`);
    }
  }

  for (const route of [...contentRoutes].filter((item) => item.startsWith("/docs/")).sort()) {
    if (!seen.has(route)) {
      const expectedFile = path.join(contentDir, `${route.slice(1)}.mdx`);
      report(expectedFile, `docs page "${route}" is missing from content/docs.nav.ts`);
    }
  }
}

if (errors.length) {
  console.error(`Content verification failed with ${errors.length} error${errors.length === 1 ? "" : "s"}:\n`);
  for (const error of errors.sort()) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(
    `Content verification passed: ${mdxFiles.length} MDX files, ${validRoutes.size} routes, ${links.length} internal links.`,
  );
}
