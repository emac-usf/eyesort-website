// app/resources/page.tsx

export default function ResourcesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Resources</h1>
      <p className="text-slate-300 mb-4">
        Links to code, documentation, datasets, and related tools.
      </p>

      <ul className="space-y-3 text-slate-300">
        <li>
          <a
            href="https://github.com/..." // TODO: replace with real link
            className="text-sky-400 hover:underline"
            target="_blank"
          >
            EyeSort GitHub repository
          </a>
        </li>
        <li>
          <a
            href="https://osf.io/..." // TODO: replace with OSF/preprint link
            className="text-sky-400 hover:underline"
            target="_blank"
          >
            Methods paper / OSF preprint
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sky-400 hover:underline"
          >
            Example datasets (coming soon)
          </a>
        </li>
      </ul>
    </main>
  );
}

