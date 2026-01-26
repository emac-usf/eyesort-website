import { DATASETS } from "@/content/datasets";

export const metadata = {
  title: "Datasets – EyeSort",
  description: "Sample datasets for testing and learning EyeSort",
};

export default function DatasetsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Test Datasets</h1>
        <p className="text-lg text-slate-600">
          Download sample datasets to test your EyeSort installation and learn the workflow
        </p>
      </header>

      <div className="space-y-8">
        {DATASETS.map((dataset, idx) => (
          <article
            key={idx}
            className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              {dataset.title}
            </h2>
            <p className="text-slate-700 mb-4">{dataset.description}</p>

            <div className="mb-4">
              <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-2">
                Contents
              </h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                {dataset.contents.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <div className="space-y-1">
                <p className="text-xs text-slate-500">License: {dataset.license}</p>
                {dataset.cite && (
                  <p className="text-xs text-slate-500">Citation: {dataset.cite}</p>
                )}
              </div>
              <a
                href={dataset.downloadUrl}
                className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-colors shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

