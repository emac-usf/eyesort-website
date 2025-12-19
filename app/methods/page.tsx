// app/methods/page.tsx

export default function MethodsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Methods &amp; Theory</h1>
      <p className="text-slate-300 mb-4">
        EyeSort is built around region-based mapping of fixations and saccades,
        pass structure, and behavior-driven event recoding. This page summarizes
        the theoretical rationale and methodological details behind the toolbox.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Region mapping</h2>
      <p className="text-slate-300 mb-4">
        Describe how sentences are segmented into regions (e.g., pre-target,
        target, post-target), how fixations are assigned, and how ambiguous
        cases are handled.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Pass structure</h2>
      <p className="text-slate-300 mb-4">
        Explain how EyeSort defines first-pass reading, regressions,
        re-reading, skipping, and other patterns derived from fixation
        sequences.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        ERP event recoding
      </h2>
      <p className="text-slate-300 mb-4">
        Summarize how EyeSort uses pass and region information to recode EEG
        events so that ERPs can be time-locked to specific behaviors, rather
        than raw stimulus or response onsets.
      </p>

      <p className="text-slate-400 mt-6 text-sm">
        (Later you can link to your methods paper / preprint here and add
        figures or diagrams that illustrate the processing pipeline.)
      </p>
    </main>
  );
}

