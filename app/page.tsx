// app/page.tsx

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            EyeSort
          </h1>
          <p className="text-lg text-slate-300 mb-6 max-w-2xl">
            EyeSort is a MATLAB-based toolbox integrated with EEGLAB for
            eye-tracking/EEG co-registration research. It maps fixations and
            saccades onto predefined regions, derives pass structure, and
            recodes EEG events so ERPs can be time-locked to specific reading
            behaviors.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/..." // TODO: replace with real repo
              className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 transition font-medium"
              target="_blank"
            >
              View on GitHub
            </a>
            <a
              href="/docs"
              className="px-5 py-2.5 rounded-xl border border-slate-600 hover:border-sky-400 hover:text-sky-300 transition font-medium"
            >
              Get Started
            </a>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
            <h2 className="text-xl font-semibold mb-2">Region-based mapping</h2>
            <p className="text-sm text-slate-300">
              Map fixations and saccades onto predefined text regions and derive
              pass structure, entry/exit patterns, and revisit behavior.
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
            <h2 className="text-xl font-semibold mb-2">Transparent labeling</h2>
            <p className="text-sm text-slate-300">
              Automatically label EEG events based on reading behavior while
              preserving a clear, human-readable description of the logic.
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
            <h2 className="text-xl font-semibold mb-2">Scalable workflows</h2>
            <p className="text-sm text-slate-300">
              Reduce ad-hoc scripts and one-off bin descriptors with a toolbox
              designed for reproducible, multi-experiment pipelines.
            </p>
          </div>
        </section>

        <section className="border border-slate-800 rounded-2xl p-6 bg-slate-900/40">
          <h2 className="text-2xl font-semibold mb-3">In collaboration with</h2>
          <p className="text-sm text-slate-300 mb-1">
            Eye Movements &amp; Cognition Lab (EMaC), University of South Florida
          </p>
          <p className="text-sm text-slate-300">
            Developed by Brandon Snyder in collaboration with Dr. Sara Milligan and
            Dr. Elizabeth Schotter.
          </p>
        </section>
      </div>
    </main>
  );
}
