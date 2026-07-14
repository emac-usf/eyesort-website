import Link from "next/link";
import { LINKS } from "@/lib/links";
import { getLatestVersion } from "@/lib/version";

export default async function HomePage() {
  const version = await getLatestVersion();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              EyeSort
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto">
              Region-aware eye-tracking event labeling for EEGLAB
            </p>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Integrate text/pixel interest areas with synchronized eye-tracking events
              and build robust, reproducible label codes for ERP binning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={LINKS.latestRelease}
                className="px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-700 transition font-semibold text-white shadow-lg"
              >
                Download v{version}
              </a>
              <Link
                href="/docs"
                className="px-6 py-3 rounded-lg border-2 border-slate-300 hover:border-sky-600 hover:text-sky-700 transition font-semibold"
              >
                Get Started
              </Link>
              <a
                href={LINKS.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border-2 border-slate-300 hover:border-slate-400 transition font-semibold"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is EyeSort */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">What is EyeSort?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-700 leading-relaxed mb-4">
                EyeSort is an EEGLAB plugin that provides a guided GUI workflow for
                researchers studying reading and visual processing with co-registered
                eye-tracking and EEG data.
              </p>
              <p className="text-slate-700 leading-relaxed">
                It systematically labels fixations and saccades based on spatial regions,
                temporal passes, fixation types, and saccade directions—then generates
                standardized event codes that integrate seamlessly with ERPLAB.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700">Load single or multiple EEG datasets with synchronized eye-tracking</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700">Define interest areas using text-based sentences or pixel regions</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700">Label fixations and saccades with flexible criteria</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700">Auto-generate BINLISTER Bin Descriptor Files</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700">Save labeled datasets for ERP analysis workflows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why EyeSort */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Why EyeSort?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Systematic & Reproducible</h3>
              <p className="text-slate-700">
                Replace ad-hoc scripts with a standardized workflow. Save and share
                configurations to ensure consistent analysis across datasets and labs.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Flexible Criteria</h3>
              <p className="text-slate-700">
                Label events based on region, pass (first/second/third+), fixation type
                (single, first, last), saccade direction, and more.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">ERPLAB Integration</h3>
              <p className="text-slate-700">
                Generated BDF files work seamlessly with ERPLAB's binlister, enabling
                smooth transitions from labeling to ERP analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Requirements</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Software</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                    MATLAB (R2018b or later recommended)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                    EEGLAB (2021.0 or later)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Data Prerequisites</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                    Synchronized EEG + eye-tracking events
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                    Fixation and saccade events in EEG.event
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                    Position information (X coordinates)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download & Install */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Download & Install</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Latest Release</h3>
              <p className="text-slate-700 mb-4">
                Download EyeSort v{version} from GitHub Releases
              </p>
              <a
                href={LINKS.latestRelease}
                className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download v{version}
              </a>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Installation Guide</h3>
              <ol className="space-y-2 text-slate-700 text-sm mb-4">
                <li>1. Download and extract EyeSort</li>
                <li>2. Copy to EEGLAB plugins directory</li>
                <li>3. Launch EEGLAB in MATLAB</li>
                <li>4. Verify EyeSort menu appears</li>
              </ol>
              <Link
                href="/docs/installation"
                className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium"
              >
                Full Installation Instructions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Getting Started</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/docs/first-run"
              className="p-6 bg-white border border-slate-200 hover:border-sky-600 rounded-xl transition-colors shadow-sm"
            >
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">First Run Guide</h3>
              <p className="text-slate-600 text-sm">
                Walk through your first time using EyeSort with sample data
              </p>
            </Link>
            <Link
              href="/tutorials/quickstart"
              className="p-6 bg-white border border-slate-200 hover:border-sky-600 rounded-xl transition-colors shadow-sm"
            >
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Quickstart Tutorial</h3>
              <p className="text-slate-600 text-sm">
                Complete the full workflow from data loading to labeled output
              </p>
            </Link>
            <Link
              href="/datasets"
              className="p-6 bg-white border border-slate-200 hover:border-sky-600 rounded-xl transition-colors shadow-sm"
            >
              <div className="text-3xl mb-3">💾</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Sample Dataset</h3>
              <p className="text-slate-600 text-sm">
                Download test data to practice the EyeSort workflow
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* How to Cite */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">How to Cite</h2>
          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            <p className="text-slate-700">Waiting on publication</p>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Support</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Documentation</h3>
              <p className="text-slate-600 text-sm mb-4">
                Comprehensive guides, tutorials, and reference materials
              </p>
              <Link
                href="/docs"
                className="text-sky-600 hover:text-sky-700 text-sm font-medium"
              >
                Browse Docs →
              </Link>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Report Issues</h3>
              <p className="text-slate-600 text-sm mb-4">
                Found a bug or have a feature request? Open an issue on GitHub
              </p>
              <a
                href={LINKS.githubIssues}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-700 text-sm font-medium"
              >
                GitHub Issues →
              </a>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Contact Us</h3>
              <p className="text-slate-600 text-sm mb-4">
                Questions or collaboration inquiries? Reach out to the team
              </p>
              <Link
                href="/contact"
                className="text-sky-600 hover:text-sky-700 text-sm font-medium"
              >
                Contact Info →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Info */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              Eye Movements & Cognition Lab
            </h2>
            <p className="text-slate-700 mb-2">University of South Florida</p>
            <p className="text-slate-600 text-sm mb-6">
              Developed by Brandon Snyder, Sara Milligan, and Elizabeth Schotter
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={LINKS.githubOrg}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                GitHub
              </a>
              <span className="text-slate-400">•</span>
              <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">
                About
              </Link>
              <span className="text-slate-400">•</span>
              <a
                href={LINKS.githubRepo + "/blob/main/LICENSE"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                GPL-3.0 License
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
