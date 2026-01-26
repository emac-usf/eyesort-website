import { LINKS, AUTHORS } from "@/lib/links";

export const metadata = {
  title: "About – EyeSort",
  description: "Learn about the EyeSort project, team, and research lab",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">About EyeSort</h1>
        <p className="text-lg text-slate-600">
          Region-aware eye-tracking event labeling for EEGLAB
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">What is EyeSort?</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-700 leading-relaxed">
            EyeSort is an EEGLAB plugin that integrates text/pixel interest areas with
            synchronized eye-tracking events and builds robust, reproducible label codes
            for ERP binning. It provides a guided GUI workflow for researchers to:
          </p>
          <ul className="space-y-2 text-slate-700">
            <li>Load single or multiple EEG datasets with synchronized eye-tracking data</li>
            <li>
              Define interest areas using text-based sentences or pixel regions for reading
              studies
            </li>
            <li>
              Label fixations and saccades with rich, flexible criteria including region,
              pass, fixation type, and saccade direction
            </li>
            <li>
              Auto-generate BINLISTER Bin Descriptor Files (BDF) from labeled event codes
            </li>
            <li>Save labeled datasets for downstream ERP analysis workflows</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Why EyeSort?</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-700 leading-relaxed">
            Researchers studying reading or visual processing with co-registered eye-tracking
            and EEG face unique challenges in event labeling. Traditional approaches require
            manual coding or custom scripts that are difficult to reproduce and share.
          </p>
          <p className="text-slate-700 leading-relaxed">
            EyeSort addresses these challenges by providing a systematic, reproducible
            framework for defining interest areas, identifying complex eye-movement patterns
            (first fixations, regressions, passes), and generating standardized event codes
            that integrate seamlessly with EEGLAB's ERPLAB toolbox.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Development Team</h2>
        <div className="space-y-4">
          {AUTHORS.map((author) => (
            <div
              key={author.email}
              className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-lg shadow-sm"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full flex-shrink-0">
                <svg
                  className="w-6 h-6 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{author.name}</h3>
                <a
                  href={`mailto:${author.email}`}
                  className="text-sky-600 hover:text-sky-700 text-sm"
                >
                  {author.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Eye Movements & Cognition Lab
        </h2>
        <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
          <p className="text-slate-700 leading-relaxed mb-4">
            EyeSort is developed and maintained by the Eye Movements & Cognition Lab in the
            Department of Psychology at the University of South Florida. Our lab investigates
            the cognitive processes underlying reading and visual perception using eye-tracking
            and electrophysiological methods.
          </p>
          <a
            href={LINKS.labWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-colors shadow-sm"
          >
            Visit Lab Website
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Open Source</h2>
        <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
          <p className="text-slate-700 leading-relaxed mb-4">
            EyeSort is free and open-source software released under the GNU General Public
            License v3.0 or later. We welcome contributions, bug reports, and feature
            requests from the research community.
          </p>
          <div className="flex gap-4">
            <a
              href={LINKS.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium rounded-lg transition-colors border border-slate-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View Source on GitHub
            </a>
            <a
              href={LINKS.githubRepo + "/blob/main/LICENSE"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border-2 border-slate-300 hover:border-slate-400 text-slate-900 font-medium rounded-lg transition-colors"
            >
              License (GPL-3.0)
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Copyright</h2>
        <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
          <p className="text-slate-600 text-sm leading-relaxed">
            Copyright © 2025 Eye Movements & Cognition Lab, University of South Florida
            <br />
            Copyright © 2025 Brandon Snyder, Sara Milligan, Elizabeth Schotter
          </p>
        </div>
      </section>
    </div>
  );
}
