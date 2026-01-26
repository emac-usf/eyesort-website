import { notFound } from "next/navigation";
import Link from "next/link";
import { getMdxSource, RenderMdx, listMdxFiles } from "@/lib/mdx";
import { DocsLayout } from "@/components/DocsLayout";
import { LINKS } from "@/lib/links";

export async function generateStaticParams() {
  const files = listMdxFiles("docs");
  return files.map((file) => ({
    slug: file === "index" ? [] : file.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const source = getMdxSource("docs", slug);

  if (!source) {
    return { title: "Not Found" };
  }

  return {
    title: `${source.frontmatter.title} – EyeSort Documentation`,
    description: source.frontmatter.description,
  };
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const source = getMdxSource("docs", slug);

  if (!source) {
    notFound();
  }

  const editUrl = `${LINKS.githubWebsiteRepo}/edit/main/content/docs/${slug.length ? slug.join("/") : "index"}.mdx`;

  return (
    <DocsLayout>
      <header className="mb-8 pb-4 border-b border-slate-800">
        <h1 className="text-4xl font-bold text-slate-100 mb-2">
          {source.frontmatter.title}
        </h1>
        {source.frontmatter.description && (
          <p className="text-lg text-slate-400">{source.frontmatter.description}</p>
        )}
        {source.frontmatter.lastUpdated && (
          <p className="text-sm text-slate-500 mt-2">
            Last updated: {String(source.frontmatter.lastUpdated)}
          </p>
        )}
      </header>
      <RenderMdx content={source.content} />
      <footer className="mt-12 pt-6 border-t border-slate-800">
        <a
          href={editUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit this page on GitHub
        </a>
      </footer>
    </DocsLayout>
  );
}

