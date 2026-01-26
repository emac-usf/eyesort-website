import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

type Section = "docs" | "tutorials" | "news";

export interface Frontmatter {
  title?: string;
  description?: string;
  lastUpdated?: string;
  date?: string;
  version?: string;
  [key: string]: string | undefined;
}

export function getMdxPath(section: Section, slugParts: string[]) {
  const slug = slugParts.length ? slugParts.join("/") : "index";
  return path.join(process.cwd(), "content", section, `${slug}.mdx`);
}

export function getMdxSource(section: Section, slugParts: string[]) {
  const filePath = getMdxPath(section, slugParts);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);

  return {
    content,
    frontmatter: data as Frontmatter,
    filePath,
  };
}

export async function RenderMdx({ content }: { content: string }) {
  return MDXRemote({
    source: content,
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

