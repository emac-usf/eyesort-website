import Link from "next/link";
import { LINKS } from "@/lib/links";
import { RELEASE } from "@/lib/site";

const workflow = [
  "1. Load EEG Dataset(s)",
  "2. Setup Interest Areas → Text-Based Sentence Contents and Interest Areas",
  "Inspect Parsed Regions (optional)",
  "3. Import IA Columns to Events (optional)",
  "4. Eye-Tracking Event Labeling",
  "Generate BINLISTER BDF File (optional)",
  "Modify Event Code Format (optional)",
  "Export a processing history script (optional)",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-700">
            EyeSort {RELEASE.version} for EEGLAB
          </p>
          <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Turn synchronized fixation events into reproducible, analysis-ready EEG
            event markers.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            EyeSort maps fixations onto text-defined interest areas, applies
            behavior-contingent labels, and preserves traceable event metadata for
            downstream analysis.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/tutorials/quickstart"
              className="rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-sky-700"
            >
              Start with sample data
            </Link>
            <a
              href={LINKS.pluginZip}
              className="rounded-lg border-2 border-slate-300 px-6 py-3 font-semibold text-slate-900 transition-colors hover:border-sky-600 hover:text-sky-700"
            >
              Download {RELEASE.version}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200" aria-labelledby="scope-heading">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 id="scope-heading" className="text-3xl font-bold text-slate-900">
                Where EyeSort fits
              </h2>
              <p className="mt-4 leading-relaxed text-slate-700">
                EyeSort operates after EEG and eye-tracking synchronization and eye-event
                detection, and before FRP, ERP, or deconvolution analysis. It labels
                fixation events using region, pass, fixation-class, neighboring-region,
                and incoming or outgoing saccade-direction criteria.
              </p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Deliberate scope
              </h3>
              <p className="mt-3 leading-relaxed text-slate-700">
                EyeSort does not synchronize modalities, detect fixations, repair blinks
                or missing eye data, clean eye-tracker data, preprocess EEG, separate
                temporally overlapping neural activity, or replace deconvolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate-200 bg-slate-50"
        aria-labelledby="fit-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 id="fit-heading" className="text-3xl font-bold text-slate-900">
            Check your data fit
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            EyeSort 1.0 is for reading researchers working with co-registered EEG and
            eye-tracking data whose eye events and trial markers are already available
            in EEGLAB.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">You will need</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                <li>Continuous EEGLAB <code>.set</code> files</li>
                <li>Synchronized fixation and saccade events in <code>EEG.event</code></li>
                <li>Horizontal fixation and saccade position fields</li>
                <li>Item, condition, and trial-boundary triggers</li>
                <li>A tab-delimited stimulus and interest-area file</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-300 bg-slate-900 p-6 text-white shadow-sm">
              <h3 className="text-xl font-semibold">EyeSort 1.0 design envelope</h3>
              <p className="mt-4 leading-relaxed text-slate-200">
                The current text geometry is designed for single-line sentence displays
                using a fixed-width font, uniform pixels per character, and consistently
                named regions across the relevant trials. Region assignment uses horizontal
                X coordinates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200" aria-labelledby="workflow-heading">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 id="workflow-heading" className="text-3xl font-bold text-slate-900">
            A workflow that matches the plugin
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            The sequence below follows the EyeSort menu. Optional steps can be added when
            your analysis needs them.
          </p>
          <ol className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, index) => (
              <li
                key={step}
                className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium text-slate-800 shadow-sm"
              >
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-sky-700">
                  Stage {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="border-b border-slate-200 bg-slate-50"
        aria-labelledby="outputs-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 id="outputs-heading" className="text-3xl font-bold text-slate-900">
            What you get
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Processed datasets", "Labeled *_processed.set/.fdt files and optional *_eyesort_ia.set intermediates."],
              ["Traceable event metadata", "Canonical EyeSort codes, original event types, regions, words, passes, and label descriptions."],
              ["Run summaries", "Optional labeling-summary CSV output with per-dataset and total counts."],
              ["BINLISTER definitions", "An optional BDF, typically eyesort_bins.txt, grouped from labeled events."],
              ["Reusable configurations", "Saved text-IA and label-queue configuration files."],
              ["Portable replay", "An exported MATLAB processing script with the sidecars needed to rerun a batch."],
            ].map(([title, description]) => (
              <article
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200" aria-labelledby="useful-heading">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 id="useful-heading" className="text-3xl font-bold text-slate-900">
            Built for reviewable decisions
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Diagnose before labeling", "Preflight checks surface trigger, condition/item, and interest-area mismatches before they become silent zero-match results."],
              ["Repeat the same logic", "Saved label queues, configurations, batch processing, EEGLAB history, and replay scripts make the applied criteria inspectable."],
              ["Keep options downstream", "Display formats are reversible when original event types are present, while canonical codes support optional ERPLAB/BINLISTER handoff and other analyses."],
            ].map(([title, description]) => (
              <article key={title}>
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate-200 bg-slate-50"
        aria-labelledby="orientation-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 id="orientation-heading" className="text-3xl font-bold text-slate-900">
            Versioned, documented, and open
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                Current release
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">EyeSort {RELEASE.version}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Published {new Date(`${RELEASE.published}T00:00:00`).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                })}.
              </p>
              <Link
                href="/resources"
                className="mt-5 inline-block font-semibold text-sky-700 hover:text-sky-800"
              >
                Downloads and release record →
              </Link>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                Methods
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Manual and manuscript
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Use the versioned manual for the complete workflow. The citation is to be
                determined after publication.
              </p>
              <Link
                href="/resources#citation"
                className="mt-5 inline-block font-semibold text-sky-700 hover:text-sky-800"
              >
                View citation status →
              </Link>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                Sample target
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                A labeled processed dataset
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                The sample workflow leads to a <code>*_processed.set</code> dataset with
                canonical EyeSort codes and traceable fixation metadata.
              </p>
              <Link
                href="/tutorials/quickstart"
                className="mt-5 inline-block font-semibold text-sky-700 hover:text-sky-800"
              >
                Run the sample workflow →
              </Link>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                Maintainers
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Eye Movements &amp; Cognition Lab
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Brandon Snyder, Sara Milligan, and Elizabeth R. Schotter at the
                University of South Florida.
              </p>
              <Link
                href="/about"
                className="mt-5 inline-block font-semibold text-sky-700 hover:text-sky-800"
              >
                Project roles and support →
              </Link>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm">
            <Link href="/docs" className="font-semibold text-sky-700 hover:text-sky-800">
              Browse documentation
            </Link>
            <a
              href={LINKS.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-700 hover:text-sky-800"
            >
              Inspect the source code
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-900" aria-labelledby="install-heading">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 id="install-heading" className="text-3xl font-bold text-white">
            Install and run the sample workflow
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Start with the known-compatible files before adapting EyeSort to your own
            event fields and stimuli.
          </p>
          <Link
            href="/tutorials/quickstart"
            className="mt-8 inline-flex rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-sky-400"
          >
            Open the quickstart
          </Link>
        </div>
      </section>
    </div>
  );
}
