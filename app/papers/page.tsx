import Link from "next/link";

export const metadata = {
  title: "Papers & Citation – EyeSort",
  description: "Find EyeSort citation and manuscript information in Resources.",
};

export default function PapersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-slate-900">
      <header>
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          Compatibility page
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Papers and citation</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          Current software citation guidance, manuscript status, the user manual, and
          release information are now maintained together in Resources.
        </p>
      </header>

      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-semibold">Use the current record</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          Resources distinguishes the EyeSort 1.0 software citation from the manuscript
          preprint and does not imply a journal publication or DOI that the project has
          not posted.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/resources#citation"
            className="rounded-lg bg-sky-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-sky-700"
          >
            View citation and manuscript
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-800 transition-colors hover:border-sky-600 hover:text-sky-700"
          >
            Meet the project team
          </Link>
        </div>
      </section>

    </div>
  );
}
