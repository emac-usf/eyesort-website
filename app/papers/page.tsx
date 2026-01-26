import { LINKS } from "@/lib/links";

export const metadata = {
  title: "Papers & Citation – EyeSort",
  description: "How to cite EyeSort in your research",
};

export default function PapersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Papers & Citation
        </h1>
        <p className="text-lg text-slate-600">
          If you use EyeSort in your research, please cite it as follows
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">How to Cite</h2>
        
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">
            Plain Text
          </h3>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="text-slate-900 font-mono text-sm leading-relaxed">
              Snyder, B., Milligan, S., & Schotter, E. (2025). EyeSort: Region-aware
              eye-tracking event labeling for EEGLAB (Version 0.4.9) [Computer software].
              Eye Movements & Cognition Lab, University of South Florida.
              https://github.com/emac-usf/EyeSort
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">
            BibTeX
          </h3>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <pre className="text-slate-900 font-mono text-sm overflow-x-auto">
{`@software{eyesort2025,
  author = {Snyder, Brandon and Milligan, Sara and Schotter, Elizabeth},
  title = {{EyeSort}: Region-aware eye-tracking event labeling for {EEGLAB}},
  year = {2025},
  version = {0.4.9},
  organization = {Eye Movements \\& Cognition Lab, University of South Florida},
  url = {https://github.com/emac-usf/EyeSort},
  note = {GPL-3.0-or-later}
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Methods & Background
        </h2>
        <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
          <p className="text-slate-700 mb-4">
            For technical details about EyeSort's methodology, labeling system, and
            validation, please refer to our documentation and the EyeSort User Manual.
          </p>
          <div className="flex gap-4">
            <a
              href={LINKS.userManual}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-colors shadow-sm"
            >
              User Manual (PDF)
            </a>
            <a
              href="/docs"
              className="inline-flex items-center px-4 py-2 border-2 border-slate-300 hover:border-slate-400 text-slate-900 font-medium rounded-lg transition-colors"
            >
              Documentation
            </a>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Related Publications
        </h2>
        <div className="space-y-6">
          <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              EyeSort: An EEGLAB-integrated toolbox for behavioral categorization of eye fixation events in EEG-EM co-registered data
            </h3>
            <p className="text-slate-600 mb-4">
              Snyder, B., Milligan, S., & Schotter, E. (2025)
            </p>
            <a
              href="https://www.researchgate.net/publication/397322985_EyeSort_an_EEGLAB-integrated_toolbox_for_behavioral_categorization_of_eye_fixation_events_in_EEG-EM_co-registered_data"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-colors shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Preprint on ResearchGate
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Source Code</h2>
        <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
          <p className="text-slate-700 mb-4">
            EyeSort is open-source software released under the GNU General Public
            License v3.0 or later.
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
              View on GitHub
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
    </div>
  );
}

