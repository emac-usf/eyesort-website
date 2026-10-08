import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 text-center">
      <h1 className="mb-4 text-6xl font-bold text-slate-950">404</h1>
      <h2 className="mb-6 text-2xl font-semibold text-slate-800">Page not found</h2>
      <p className="mx-auto mb-8 max-w-md text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/docs"
          className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-800 transition-colors hover:border-sky-500 hover:text-sky-700"
        >
          Browse Docs
        </Link>
      </div>
    </div>
  );
}
