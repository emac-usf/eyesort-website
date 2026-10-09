import Link from "next/link";

export const metadata = {
  title: "Papers – EyeSort",
  description:
    "The EyeSort methods manuscript and related publications that mention or use EyeSort.",
};

type Paper = {
  title: string;
  authors: string;
  year: string;
  venue: string;
  href: string;
  linkLabel: string;
};

const methodsManuscript: Paper = {
  title:
    "EyeSort: An EEGLAB-integrated toolbox for behavioral categorization of eye fixation events in EEG-EM co-registered data",
  authors: "Snyder, B., Milligan, S., & Schotter, E.",
  year: "2025",
  venue: "Preprint",
  href: "https://www.researchgate.net/publication/397322985_EyeSort_an_EEGLAB-integrated_toolbox_for_behavioral_categorization_of_eye_fixation_events_in_EEG-EM_co-registered_data",
  linkLabel: "View preprint on ResearchGate",
};

const relatedPublications: Paper[] = [
  {
    title: "Looking inside and beyond eye fixations in reading",
    authors: "Schotter, E. R., & Payne, B. R.",
    year: "2026",
    venue: "Trends in Cognitive Sciences",
    href: "https://www.sciencedirect.com/science/article/abs/pii/S1364661326000343",
    linkLabel: "View on ScienceDirect",
  },
];

function PaperCard({ paper }: { paper: Paper }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold leading-snug">{paper.title}</h3>
      <p className="mt-3 text-slate-700">
        {paper.authors} ({paper.year})
      </p>
      <p className="mt-1 text-sm text-slate-500">{paper.venue}</p>
      <a
        href={paper.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-sky-700"
      >
        {paper.linkLabel}
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 4h6m0 0v6m0-6L10 14M5 6v13h13v-5"
          />
        </svg>
      </a>
    </article>
  );
}

export default function PapersPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 text-slate-900">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          Research
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Papers</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          The dedicated EyeSort manuscript, followed by related publications.
        </p>
      </header>

      <section aria-labelledby="eyesort-manuscript" className="mt-12">
        <h2 id="eyesort-manuscript" className="text-2xl font-semibold">
          EyeSort Manuscript
        </h2>
        <div className="mt-6">
          <PaperCard paper={methodsManuscript} />
        </div>
        <aside className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold">Citing EyeSort</h3>
          <p className="mt-2 leading-relaxed text-slate-700">
            The official citation will be determined after publication.
          </p>
          <Link
            href="/resources#citation"
            className="mt-4 inline-block font-semibold text-sky-700 hover:text-sky-800"
          >
            View citation status →
          </Link>
        </aside>
      </section>

      <section aria-labelledby="related-publications" className="mt-16">
        <h2 id="related-publications" className="text-2xl font-semibold">
          Related Publications
        </h2>
        <div className="mt-6 space-y-6">
          {relatedPublications.map((paper) => (
            <PaperCard key={paper.title} paper={paper} />
          ))}
        </div>
      </section>
    </div>
  );
}
