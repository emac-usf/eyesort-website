// app/docs/page.tsx

export default function DocsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Getting Started</h1>
      <p className="text-slate-300 mb-4">
        This page will walk you through installing EyeSort, setting up your
        EEGLAB environment, and running a basic analysis pipeline.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Requirements</h2>
      <ul className="list-disc list-inside text-slate-300 space-y-1">
        <li>MATLAB (version X or later)</li>
        <li>EEGLAB (version Y or later)</li>
        <li>Synchronized eye-tracking and EEG data (e.g., via EYE-EEG)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Installation</h2>
      <p className="text-slate-300 mb-2">
        Download the EyeSort toolbox from the GitHub repository and add it
        to your MATLAB path. Then launch EEGLAB and open the EyeSort GUI
        from the EEGLAB menu.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Basic workflow</h2>
      <ol className="list-decimal list-inside text-slate-300 space-y-1">
        <li>Load your synchronized EEG + eye-tracking dataset in EEGLAB.</li>
        <li>Define text regions and mapping files for your stimuli.</li>
        <li>Open EyeSort and configure your region and pass definitions.</li>
        <li>Run the labeling pipeline and export recoded event markers.</li>
        <li>Use the new markers to compute ERPs for specific reading behaviors.</li>
      </ol>

      <p className="text-slate-400 mt-6 text-sm">
        (Later you can replace this text with detailed step-by-step
        instructions, screenshots, and links to the methods paper.)
      </p>
    </main>
  );
}

