import { getAllMdxMetadata } from "@/lib/mdx";
import Link from "next/link";

export const metadata = {
  title: "News Archive – EyeSort",
  description: "Historical EyeSort release posts and project updates.",
};

export default function NewsPage() {
  const news = getAllMdxMetadata("news")
    .filter((n) => n.slug !== "index")
    .sort((a, b) => {
      const dateA = String(a.frontmatter.date || "");
      const dateB = String(b.frontmatter.date || "");
      return dateB.localeCompare(dateA);
    });

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-slate-900">
      <header>
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          Project archive
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">News and updates</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          Historical announcements are preserved here for context. Some posts describe
          pre-1.0 builds and are not the current release record.
        </p>
      </header>

      <aside className="mt-8 rounded-lg border border-sky-200 bg-sky-50 p-5" aria-label="Current release">
        <p className="text-slate-700">
          EyeSort 1.0 is the current published release. Use Resources for authoritative
          downloads, release notes, and version status.
        </p>
        <Link href="/resources#releases" className="mt-3 inline-block font-semibold text-sky-700 hover:text-sky-800">
          View the current release →
        </Link>
      </aside>

      <section className="mt-10" aria-labelledby="archive-heading">
        <h2 id="archive-heading" className="text-2xl font-bold">Archived posts</h2>
        <div className="mt-6 space-y-6">
        {news.length === 0 ? (
          <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
            <p className="text-slate-600">No archived updates are available.</p>
          </div>
        ) : (
          news.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              className="block p-6 bg-white border border-slate-200 rounded-lg hover:border-sky-600 transition-colors shadow-sm"
            >
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-xl font-semibold text-slate-900">
                  {item.frontmatter.title}
                </h2>
                {item.frontmatter.version && (
                  <span className="ml-4 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700 border border-sky-200">
                    Archive: {item.frontmatter.version}
                  </span>
                )}
              </div>
              {item.frontmatter.date && (
                <p className="text-sm text-slate-500 mb-2">{String(item.frontmatter.date)}</p>
              )}
              {item.frontmatter.description && (
                <p className="text-slate-600">{item.frontmatter.description}</p>
              )}
            </Link>
          ))
        )}
        </div>
      </section>
    </div>
  );
}

