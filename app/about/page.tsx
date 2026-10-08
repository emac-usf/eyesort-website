import Link from "next/link";
import { AUTHORS, LINKS } from "@/lib/links";

export const metadata = {
  title: "About – EyeSort",
  description:
    "Learn about EyeSort, the project team, funding, acknowledgements, and support policy.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 text-slate-900">
      <header className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          Project and people
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">About EyeSort</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          EyeSort is a free, open-source EEGLAB plugin for behavior-contingent labeling
          of synchronized EEG and eye-tracking fixation events in reading experiments.
        </p>
      </header>

      <section className="border-b border-slate-200 py-12">
        <h2 className="text-3xl font-bold">Purpose</h2>
        <div className="mt-5 grid gap-8 md:grid-cols-2">
          <p className="leading-relaxed text-slate-700">
            EyeSort maps already-detected fixations onto user-defined regions in
            single-line text, then applies criteria such as region pass, fixation class,
            neighboring region, and saccade direction. It writes canonical labels and
            contextual metadata back to the EEGLAB event structure.
          </p>
          <p className="leading-relaxed text-slate-700">
            The project is intended to make behavior-specific event selection easier to
            inspect, repeat, and share. It operates between synchronization and analysis;
            it does not perform synchronization, eye-event detection, artifact correction,
            EEG preprocessing, or temporal-overlap correction.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 py-12">
        <h2 className="text-3xl font-bold">Project team</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
          The creators are affiliated with the University of South Florida. Roles and
          affiliations below follow the project manuscript.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {AUTHORS.map((author) => (
            <article key={author.email} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{author.name}</h3>
              <p className="mt-2 font-medium text-sky-700">{author.contribution}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{author.affiliation}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-slate-200 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Lab and affiliation</h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              EyeSort is developed and maintained by the Eye Movements &amp; Cognition
              Lab in the Department of Psychology at the University of South Florida.
              The lab studies cognitive processes in reading and visual perception using
              eye-tracking and electrophysiological methods.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold">Funding</h3>
            <p className="mt-3 leading-relaxed text-slate-700">
              This work was supported by the National Science Foundation under award{" "}
              <strong>BCS-2341665</strong>.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <a
            href={LINKS.labWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sky-700 hover:text-sky-800"
          >
            Visit the Eye Movements &amp; Cognition Lab →
          </a>
        </div>
      </section>

      <section id="support" className="scroll-mt-24 border-b border-slate-200 py-12">
        <h2 className="text-3xl font-bold">Support and contact policy</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold">Bugs and unexpected results</h3>
            <p className="mt-3 leading-relaxed text-slate-700">
              Open a GitHub issue first so the report, diagnosis, and resolution remain
              visible and reproducible. Include EyeSort, MATLAB, EEGLAB, and operating
              system versions; steps to reproduce; the exact error; and a minimal
              non-sensitive example or configuration when possible.
            </p>
            <a
              href={LINKS.githubIssues}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-lg bg-sky-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-sky-700"
            >
              Open a GitHub issue
            </a>
          </article>
          <article className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold">Research and collaboration</h3>
            <p className="mt-3 leading-relaxed text-slate-700">
              For research-use questions or collaboration inquiries that do not belong
              in the public issue tracker, contact the lab through Sara Milligan. Email
              is not the preferred channel for bug reports or feature tracking.
            </p>
            <a
              href={`mailto:${LINKS.contactEmail}`}
              className="mt-5 inline-flex rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-800 transition-colors hover:border-sky-600 hover:text-sky-700"
            >
              Email Sara Milligan
            </a>
          </article>
        </div>
      </section>

      <section className="border-b border-slate-200 py-12">
        <h2 className="text-3xl font-bold">Acknowledgements</h2>
        <div className="mt-5 space-y-4 leading-relaxed text-slate-700">
          <p>
            EyeSort builds on the EEGLAB event and dataset framework. Its optional BDF
            output supports workflows using ERPLAB&apos;s BINLISTER. Cite those projects
            separately when your analysis uses them.
          </p>
          <p>
            The project thanks Maria Belen Aburto, Emily Akers, Allyson Copeland, and
            Heather Sheridan for early testing and feedback, and Steve Luck and an
            anonymous reviewer for manuscript feedback.
          </p>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold">Open-source project</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
          EyeSort is distributed under the GNU General Public License v3.0 or later.
          Downloads, the user manual, citation guidance, source code, and the full
          license are collected on the Resources page.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/resources"
            className="inline-flex rounded-lg bg-sky-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-sky-700"
          >
            Browse resources
          </Link>
          <a
            href={LINKS.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-800 transition-colors hover:border-sky-600 hover:text-sky-700"
          >
            View source
          </a>
        </div>
      </section>
    </div>
  );
}
