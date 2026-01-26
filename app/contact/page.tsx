import { LINKS, AUTHORS } from "@/lib/links";

export const metadata = {
  title: "Contact – EyeSort",
  description: "Get help and support for EyeSort",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact & Support</h1>
        <p className="text-lg text-slate-600">
          Get help with EyeSort or reach out to the development team
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Report Issues or Request Features
        </h2>
        <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
          <p className="text-slate-700 mb-4">
            Found a bug or have a feature request? Please open an issue on our GitHub
            repository. This is the fastest way to get help and track progress.
          </p>
          <div className="flex gap-4">
            <a
              href={LINKS.githubIssues}
              target="_blank"
              rel="noopener noreferrer"
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              Report an Issue
            </a>
            <a
              href={LINKS.githubDiscussions}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-slate-300 hover:border-slate-400 text-slate-900 font-medium rounded-lg transition-colors"
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Start a Discussion
            </a>
          </div>
        </div>

        <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">
            When reporting issues, please include:
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
            <li>EyeSort version number</li>
            <li>MATLAB and EEGLAB versions</li>
            <li>Operating system</li>
            <li>Steps to reproduce the issue</li>
            <li>Error messages (if any)</li>
            <li>Relevant configuration files or screenshots</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Email Contact</h2>
        <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
          <p className="text-slate-700 mb-4">
            For general questions or collaboration inquiries, you can reach out to the
            development team:
          </p>
          <div className="space-y-3">
            {AUTHORS.map((author) => (
              <div key={author.email} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-slate-100 rounded-full">
                  <svg
                    className="w-5 h-5 text-slate-600"
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
                  <p className="text-slate-900 font-medium">{author.name}</p>
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
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Eye Movements & Cognition Lab
        </h2>
        <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
          <p className="text-slate-700 mb-4">
            EyeSort is developed and maintained by the Eye Movements & Cognition Lab at
            the University of South Florida.
          </p>
          <div className="flex gap-4">
            <a
              href={LINKS.labWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border-2 border-slate-300 hover:border-slate-400 text-slate-900 font-medium rounded-lg transition-colors"
            >
              Lab Website
            </a>
            <a
              href={LINKS.githubOrg}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-slate-300 hover:border-slate-400 text-slate-900 font-medium rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub Organization
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

