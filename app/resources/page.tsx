import Link from "next/link";
import { LINKS } from "@/lib/links";
import { CITATION, RELEASE } from "@/lib/site";

export const metadata = {
  title: "Resources – EyeSort",
  description: `Download EyeSort ${RELEASE.version}, sample files, the user manual, citation information, and project resources.`,
};

const publishedDate = new Date(`${RELEASE.published}T00:00:00`).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

const resourceLinkClass =
  "inline-flex rounded-lg bg-sky-600 px-4 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-sky-700";
const secondaryLinkClass =
  "inline-flex rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-800 transition-colors hover:border-sky-600 hover:text-sky-700";

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 text-slate-900">
      <header className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          EyeSort {RELEASE.version}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Resources</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Find the plugin, sample materials, manual, release history, citation status,
          source code, and license in one place. The files below serve different purposes;
          download the plugin ZIP itself to install EyeSort.
        </p>
      </header>

      <nav
        aria-label="Resources on this page"
        className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5"
      >
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
          <li><a href="#downloads" className="text-sky-700 hover:text-sky-800">Downloads</a></li>
          <li><a href="#sample-data" className="text-sky-700 hover:text-sky-800">Sample data</a></li>
          <li><a href="#manual" className="text-sky-700 hover:text-sky-800">User manual</a></li>
          <li><a href="#releases" className="text-sky-700 hover:text-sky-800">Releases</a></li>
          <li><a href="#citation" className="text-sky-700 hover:text-sky-800">Citation</a></li>
          <li><a href="#source-license" className="text-sky-700 hover:text-sky-800">Source and license</a></li>
        </ul>
      </nav>

      <section id="downloads" className="scroll-mt-24 border-b border-slate-200 py-12">
        <h2 className="text-3xl font-bold">Download EyeSort</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl border-2 border-sky-200 bg-sky-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-800">
              Plugin installer
            </p>
            <h3 className="mt-2 text-2xl font-bold">EyeSort {RELEASE.version} plugin ZIP</h3>
            <p className="mt-3 leading-relaxed text-slate-700">
              Download <code>{RELEASE.pluginAsset}</code>. It unpacks to an{" "}
              <code>eyesort1.0</code> folder; place that folder directly inside
              EEGLAB&apos;s <code>plugins</code> directory, launch EEGLAB, and confirm the
              EyeSort menu appears.
            </p>
            <a href={LINKS.pluginZip} className={`${resourceLinkClass} mt-5`}>
              Download {RELEASE.pluginAsset}
            </a>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Before your own data
            </p>
            <h3 className="mt-2 text-2xl font-bold">Run the known-compatible example</h3>
            <p className="mt-3 leading-relaxed text-slate-700">
              Use the compatibility bundle with the quickstart to verify the installation
              and learn the menu sequence before changing field names, triggers, or text
              geometry.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={LINKS.sampleDataset} className={resourceLinkClass}>
                Download sample bundle
              </a>
              <Link href="/tutorials/quickstart" className={secondaryLinkClass}>
                Open quickstart
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section id="sample-data" className="scroll-mt-24 border-b border-slate-200 py-12">
        <h2 className="text-3xl font-bold">Sample data and configurations</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold">Release compatibility bundle</h3>
            <p className="mt-3 leading-relaxed text-slate-700">
              <code>{RELEASE.sampleAsset}</code> is the release-hosted bundle for
              practicing the EyeSort 1.0 workflow. It is separate from the plugin ZIP and
              should not be placed in EEGLAB&apos;s plugin directory.
            </p>
            <a href={LINKS.sampleDataset} className={`${secondaryLinkClass} mt-5`}>
              Download compatibility files
            </a>
          </article>
          <article className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold">OSF project record</h3>
            <p className="mt-3 leading-relaxed text-slate-700">
              The OSF record is the canonical open destination for example data and
              configuration materials. Consult its record metadata for the files,
              version, citation, and terms provided there.
            </p>
            <a
              href={LINKS.osfProject}
              target="_blank"
              rel="noopener noreferrer"
              className={`${secondaryLinkClass} mt-5`}
            >
              Open OSF record
            </a>
          </article>
        </div>
      </section>

      <section id="manual" className="scroll-mt-24 border-b border-slate-200 py-12">
        <h2 className="text-3xl font-bold">Documentation and user manual</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
          The EyeSort {RELEASE.version} User Manual is the versioned long-form guide for installation,
          input preparation, GUI steps, scripting, quality control, and troubleshooting.
          The web documentation provides shorter task-oriented guidance.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={LINKS.userManual}
            target="_blank"
            rel="noopener noreferrer"
            className={resourceLinkClass}
          >
            Open EyeSort {RELEASE.version} User Manual
          </a>
          <Link href="/docs" className={secondaryLinkClass}>
            Browse web documentation
          </Link>
        </div>
        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Known PDF errata</p>
          <p className="mt-2">
            Read “GLP-3.0” as “GPL-3.0-or-later,” use lowercase
            <code className="mx-1">region_pass_number</code>, and read the cache filename as
            <code className="ml-1">last_text_ia_config.mat</code>. The web documentation
            reflects the verified 1.0 source when wording differs.
          </p>
        </div>
      </section>

      <section id="releases" className="scroll-mt-24 border-b border-slate-200 py-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <h2 className="text-3xl font-bold">Release record</h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              EyeSort {RELEASE.version} was published {publishedDate}. GitHub Releases contains the
              authoritative release notes, attached assets, and prior versions. Historical
              news posts on this site may describe pre-1.0 builds and should not be treated
              as the current download.
            </p>
          </div>
          <a
            href={LINKS.githubReleases}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryLinkClass}
          >
            View all releases
          </a>
        </div>
      </section>

      <section id="citation" className="scroll-mt-24 border-b border-slate-200 py-12">
        <h2 className="text-3xl font-bold">Citation and manuscript status</h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <article>
            <h3 className="text-xl font-semibold">Cite the software now</h3>
            <p className="mt-3 text-slate-700">
              Until a formal manuscript citation is posted, cite the exact software
              version used and include an access date when required by your style guide.
            </p>
            <pre tabIndex={0} className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-800">
              {CITATION.software}
            </pre>
            <h4 className="mt-6 font-semibold text-slate-900">BibTeX</h4>
            <pre tabIndex={0} className="mt-3 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-800">
              {CITATION.bibtex}
            </pre>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Manuscript
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              {CITATION.title}
            </h3>
            <p className="mt-3 text-slate-700">
              {CITATION.authors} The project does not currently list a journal DOI or
              version-of-record citation. An earlier public preprint record is available
              for background; cite the software release until a formal article citation
              is published.
            </p>
            <a
              href={LINKS.manuscriptPreprint}
              target="_blank"
              rel="noopener noreferrer"
              className={`${secondaryLinkClass} mt-5`}
            >
              View public preprint record
            </a>
          </article>
        </div>
      </section>

      <section id="source-license" className="scroll-mt-24 py-12">
        <h2 className="text-3xl font-bold">Source code and license</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
          EyeSort is open-source software distributed under the GNU General Public License
          v3.0 or later. The plugin repository is the source for code, issue tracking, and
          the complete license text.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={LINKS.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className={resourceLinkClass}
          >
            View plugin repository
          </a>
          <a
            href={`${LINKS.githubRepo}/blob/main/LICENSE`}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryLinkClass}
          >
            Read GPL-3.0-or-later license
          </a>
          <a
            href={LINKS.githubIssues}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryLinkClass}
          >
            Report an issue
          </a>
        </div>
      </section>
    </div>
  );
}
