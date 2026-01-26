import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-slate-100 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-300 mb-6">Page Not Found</h2>
      <p className="text-slate-400 mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved.
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
          className="px-6 py-3 rounded-lg border border-slate-700 hover:border-sky-500 text-slate-200 font-medium transition-colors"
        >
          Browse Docs
        </Link>
      </div>
    </div>
  );
}
