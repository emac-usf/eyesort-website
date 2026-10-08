import fs from "node:fs";
import path from "node:path";
import { parse as parseYaml } from "yaml";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { mdxComponents } from "@/components/mdx";

type Section = "docs" | "tutorials" | "news";

export interface Frontmatter {
  title?: string;
  description?: string;
  lastUpdated?: string;
  lastVerified?: string;
  date?: string;
  version?: string;
  aliases?: string[];
  [key: string]: string | string[] | undefined;
}

function parseFrontmatter(raw: string) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(raw);
  if (!match) return { content: raw, data: {} };

  return {
    content: raw.slice(match[0].length),
    data: (parseYaml(match[1]) ?? {}) as Frontmatter,
  };
}

export function getMdxPath(section: Section, slugParts: string[]) {
  const slug = slugParts.length ? slugParts.join("/") : "index";
  return path.join(process.cwd(), "content", section, `${slug}.mdx`);
}

export function getMdxSource(section: Section, slugParts: string[]) {
  const filePath = getMdxPath(section, slugParts);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = parseFrontmatter(raw);

  return {
    content,
    frontmatter: data,
    filePath,
  };
}

export async function RenderMdx({ content }: { content: string }) {
  return MDXRemote({
    source: content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: {
                className: ["anchor"],
              },
            },
          ],
        ],
      },
    },
  });
}

/**
 * List all MDX files in a section directory
 */
export function listMdxFiles(section: Section): string[] {
  const dirPath = path.join(process.cwd(), "content", section);
  
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const files: string[] = [];
  
  function readDir(dir: string, prefix = "") {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        readDir(path.join(dir, entry.name), prefix + entry.name + "/");
      } else if (entry.name.endsWith(".mdx")) {
        const filename = entry.name.replace(/\.mdx$/, "");
        files.push(prefix + filename);
      }
    }
  }
  
  readDir(dirPath);
  return files;
}

/**
 * Get metadata for all MDX files in a section
 */
export function getAllMdxMetadata(section: Section) {
  const files = listMdxFiles(section);
  
  return files.map((file) => {
    const slugParts = file === "index" ? [] : file.split("/");
    const source = getMdxSource(section, slugParts);
    
    return {
      slug: file,
      slugParts,
      frontmatter: source?.frontmatter || {},
      href: `/${section}${file === "index" ? "" : "/" + file}`,
    };
  });
}

