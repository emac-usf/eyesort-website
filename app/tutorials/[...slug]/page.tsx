import { notFound } from "next/navigation";
import { getMdxSource, RenderMdx, listMdxFiles } from "@/lib/mdx";
import Link from "next/link";
import { LINKS } from "@/lib/links";

export async function generateStaticParams() {
  const files = listMdxFiles("tutorials");
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
  const source = getMdxSource("tutorials", slug);

  if (!source) {
    return { title: "Not Found" };
  }

  return {
    title: `${source.frontmatter.title} – EyeSort Tutorial`,
    description: source.frontmatter.description,
  };
}

export default async function TutorialPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const source = getMdxSource("tutorials", slug);

  if (!source) {
    notFound();
  }

  const editUrl = `${LINKS.githubWebsiteRepo}/edit/main/content/tutorials/${slug.join("/")}.mdx`;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/tutorials"
        className="inline-flex items-center text-sm text-sky-400 hover:text-sky-300 mb-8"
      >
        ← Back to Tutorials
      </Link>

      <article className="prose prose-invert prose-slate max-w-none">
        <header className="mb-8 pb-4 border-b border-slate-800">
          <h1 className="text-4xl font-bold text-slate-100 mb-2">
            {source.frontmatter.title}
          </h1>
          {source.frontmatter.description && (
            <p className="text-lg text-slate-400">{source.frontmatter.description}</p>
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

