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
    alternates: { canonical: `/news/${slug.join("/")}` },
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
        className="mb-8 inline-flex items-center text-sm text-sky-700 hover:text-sky-900"
      >
        ← Back to News
      </Link>

      <article className="prose max-w-none">
        <header className="mb-8 border-b border-slate-200 pb-5">
          <div className="flex items-start justify-between mb-2">
            <h1 className="mb-0 text-4xl font-bold text-slate-950">
              {source.frontmatter.title}
            </h1>
            {source.frontmatter.version && (
              <span className="ml-4 rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800">
                {source.frontmatter.version}
              </span>
            )}
          </div>
          {source.frontmatter.date && (
            <p className="text-slate-500 mt-2">{String(source.frontmatter.date)}</p>
          )}
          {source.frontmatter.description && (
            <p className="mt-4 text-lg text-slate-600">
              {source.frontmatter.description}
            </p>
          )}
        </header>
        <RenderMdx content={source.content} />
        <footer className="mt-12 border-t border-slate-200 pt-6">
          <a
            href={editUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-sky-700"
          >
            <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit this page on GitHub
          </a>
        </footer>
      </article>
    </div>
  );
}

