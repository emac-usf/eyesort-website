import { notFound } from "next/navigation";
import { getMdxSource, RenderMdx, listMdxFiles } from "@/lib/mdx";
import Link from "next/link";
import { LINKS } from "@/lib/links";

export async function generateStaticParams() {
  const files = listMdxFiles("news");
  return files
    .filter((file) => file !== "index")
    .map((file) => ({
      slug: file.split("/"),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const source = getMdxSource("news", slug);

  if (!source) {
    return { title: "Not Found" };
  }

  return {
    title: `${source.frontmatter.title} – EyeSort News`,
    description: source.frontmatter.description,
  };
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const source = getMdxSource("news", slug);

  if (!source) {
    notFound();
  }

  const editUrl = `${LINKS.githubWebsiteRepo}/edit/main/content/news/${slug.join("/")}.mdx`;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/news"
        className="inline-flex items-center text-sm text-sky-400 hover:text-sky-300 mb-8"
      >
        ← Back to News
      </Link>

      <article className="prose prose-invert prose-slate max-w-none">
        <header className="mb-8 pb-4 border-b border-slate-800">
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-4xl font-bold text-slate-100 mb-0">
              {source.frontmatter.title}
            </h1>
            {source.frontmatter.version && (
              <span className="ml-4 rounded-full bg-sky-900/30 px-3 py-1 text-sm font-medium text-sky-300">
                {source.frontmatter.version}
              </span>
            )}
          </div>
          {source.frontmatter.date && (
            <p className="text-slate-500 mt-2">{String(source.frontmatter.date)}</p>
          )}
          {source.frontmatter.description && (
            <p className="text-lg text-slate-400 mt-4">
              {source.frontmatter.description}
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
      </article>
    </div>
  );
}

