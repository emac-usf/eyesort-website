import Link from "next/link";
import { LINKS } from "@/lib/links";

export const metadata = {
  title: "Contact – EyeSort",
  description: "Find the EyeSort support policy and project contact routes.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-slate-900">
      <header>
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          Compatibility page
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Contact and support</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          Support routes, maintainer roles, affiliations, and the project&apos;s contact
          policy are maintained on About.
        </p>
      </header>

      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-semibold">Choose a support route</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          Report bugs and unexpected results in GitHub Issues so they can be tracked
          publicly. Use About for the complete reporting checklist and the email policy
          for research or collaboration inquiries.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={LINKS.githubIssues}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-sky-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-sky-700"
          >
            Open GitHub Issues
          </a>
          <Link
            href="/about#support"
            className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-800 transition-colors hover:border-sky-600 hover:text-sky-700"
          >
            Read support and contact policy
          </Link>
        </div>
      </section>

    </div>
  );
}

