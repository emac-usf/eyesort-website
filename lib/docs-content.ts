import { getAllMdxMetadata, getMdxSource } from "./mdx";

export interface DocHeading {
  depth: 2 | 3;
  text: string;
  id: string;
}

export interface DocsSearchEntry {
  href: string;
  title: string;
  description: string;
  headings: string[];
  aliases: string[];
  text: string;
}

function plainText(value: string) {
  return value
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/[`*_>#|~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value: string) {
  return plainText(value)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function extractHeadings(content: string): DocHeading[] {
  const seen = new Map<string, number>();

  return content
    .split("\n")
    .map((line) => {
      const match = /^(##|###)\s+(.+?)\s*$/.exec(line);
      if (!match) return null;

      const text = plainText(match[2]);
      const base = slugify(text);
      const count = seen.get(base) ?? 0;
      seen.set(base, count + 1);

      return {
        depth: match[1].length as 2 | 3,
        text,
        id: count === 0 ? base : `${base}-${count}`,
      };
    })
    .filter((heading): heading is DocHeading => heading !== null);
}

export function buildDocsSearchIndex(): DocsSearchEntry[] {
  return getAllMdxMetadata("docs").flatMap((document) => {
    const source = getMdxSource("docs", document.slugParts);
    if (!source) return [];

    const aliases = Array.isArray(source.frontmatter.aliases)
      ? source.frontmatter.aliases
      : [];

    return [
      {
        href: document.href,
        title: source.frontmatter.title ?? "Untitled",
        description: source.frontmatter.description ?? "",
        headings: extractHeadings(source.content).map((heading) => heading.text),
        aliases,
        text: plainText(source.content).slice(0, 2500),
      },
    ];
  });
}
