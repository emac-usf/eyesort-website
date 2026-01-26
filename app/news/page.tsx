import { getAllMdxMetadata } from "@/lib/mdx";
import Link from "next/link";

export const metadata = {
  title: "News & Updates – EyeSort",
  description: "Latest releases, updates, and news about EyeSort",
};

export default function NewsPage() {
  const news = getAllMdxMetadata("news")
    .filter((n) => n.slug !== "index")
    .sort((a, b) => {
      const dateA = a.frontmatter.date || "";
      const dateB = b.frontmatter.date || "";
      return dateB.localeCompare(dateA);
    });

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">News & Updates</h1>
        <p className="text-lg text-slate-600">
          Latest releases, features, and announcements
        </p>
      </header>

      <div className="space-y-6">
        {news.length === 0 ? (
          <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
            <p className="text-slate-600">No news updates yet. Check back soon!</p>
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
                    {item.frontmatter.version}
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
    </div>
  );
}

