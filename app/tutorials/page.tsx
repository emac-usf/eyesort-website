import Link from "next/link";
import { getAllMdxMetadata } from "@/lib/mdx";

export const metadata = {
  title: "Tutorials – EyeSort",
  description:
    "Outcome-based EyeSort tutorials for installation checks, sample data, and complete workflows.",
};

export default function TutorialsIndexPage() {
  const tutorials = getAllMdxMetadata("tutorials")
    .filter((t) => t.slug !== "index")
    .sort((a, b) => {
      // Sort by date if available, otherwise by title
      const dateA = String(a.frontmatter.date || "");
      const dateB = String(b.frontmatter.date || "");
      return dateB.localeCompare(dateA);
    });

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 text-slate-900">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          Learn by completing a workflow
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Tutorials</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Tutorials connect complete outcomes across several EyeSort steps. Use the
          documentation when you need a focused explanation of one task, field, or
          output.
        </p>
      </header>

      <section className="mt-10 grid gap-5 md:grid-cols-3" aria-labelledby="start-heading">
        <h2 id="start-heading" className="sr-only">Prepare for a tutorial</h2>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="font-semibold">1. Install EyeSort 1.0</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Get the plugin ZIP and confirm the EyeSort menu appears in EEGLAB.
          </p>
          <Link href="/resources#downloads" className="mt-4 inline-block font-semibold text-sky-700 hover:text-sky-800">
            Get the plugin →
          </Link>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="font-semibold">2. Download sample files</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Begin with the known-compatible release bundle before using your own data.
          </p>
          <Link href="/resources#sample-data" className="mt-4 inline-block font-semibold text-sky-700 hover:text-sky-800">
            Find sample data →
          </Link>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="font-semibold">3. Keep reference nearby</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Use the web documentation or versioned PDF manual for details and diagnosis.
          </p>
          <Link href="/docs" className="mt-4 inline-block font-semibold text-sky-700 hover:text-sky-800">
            Browse documentation →
          </Link>
        </div>
      </section>

      <section className="mt-12" aria-labelledby="available-heading">
        <h2 id="available-heading" className="text-2xl font-bold">Available tutorials</h2>
        <div className="mt-6 space-y-6">
        {tutorials.length === 0 ? (
          <p className="text-slate-600">
            No tutorials are available yet. Use the documentation and user manual for
            the current workflow.
          </p>
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
      </section>
    </div>
  );
}

