import Link from "next/link";
import { getAllMdxMetadata } from "@/lib/mdx";

export const metadata = {
  title: "Tutorials – EyeSort",
  description: "Step-by-step tutorials for using EyeSort with your eye-tracking and EEG data",
};

export default function TutorialsIndexPage() {
  const tutorials = getAllMdxMetadata("tutorials")
    .filter((t) => t.slug !== "index")
    .sort((a, b) => {
      // Sort by date if available, otherwise by title
      const dateA = a.frontmatter.date || "";
      const dateB = b.frontmatter.date || "";
      return dateB.localeCompare(dateA);
    });

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Tutorials</h1>
        <p className="text-lg text-slate-600">
          Step-by-step guides to help you get the most out of EyeSort
        </p>
      </header>

      <div className="space-y-6">
        {tutorials.length === 0 ? (
          <p className="text-slate-600">No tutorials available yet. Check back soon!</p>
        ) : (
          tutorials.map((tutorial) => (
            <Link
              key={tutorial.slug}
              href={tutorial.href}
              className="block p-6 bg-white border border-slate-200 rounded-lg hover:border-sky-600 transition-colors shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {tutorial.frontmatter.title}
              </h2>
              {tutorial.frontmatter.description && (
                <p className="text-slate-600">{tutorial.frontmatter.description}</p>
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

