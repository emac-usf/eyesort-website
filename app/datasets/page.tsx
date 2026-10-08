import Link from "next/link";

export const metadata = {
  title: "Sample Data – EyeSort",
  description: "Find EyeSort sample data and compatibility files in Resources.",
};

export default function DatasetsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-slate-900">
      <header>
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          Compatibility page
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Sample data</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          EyeSort sample downloads now live in Resources, where the release compatibility
          bundle is clearly separated from the canonical OSF project record.
        </p>
      </header>

      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-semibold">Choose the right resource</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          Use the release-hosted compatibility ZIP for a first run. Use the OSF record
          for the open example-data and configuration record. File descriptions, links,
          and citation guidance are maintained together on Resources.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/resources#sample-data"
            className="rounded-lg bg-sky-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-sky-700"
          >
            View sample resources
          </Link>
          <Link
            href="/tutorials/quickstart"
            className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-800 transition-colors hover:border-sky-600 hover:text-sky-700"
          >
            Run the quickstart
          </Link>
        </div>
      </section>
    </div>
  );
}

