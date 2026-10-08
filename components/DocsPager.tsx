import Link from "next/link";
import type { DocNavItem } from "@/lib/docs-nav";

export function DocsPager({
  previous,
  next,
}: {
  previous?: DocNavItem;
  next?: DocNavItem;
}) {
  if (!previous && !next) return null;

  return (
    <nav aria-label="Documentation pagination" className="mt-12 grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-2">
      {previous ? (
        <Link rel="prev" href={previous.href} className="rounded-lg border border-slate-200 p-4 hover:border-sky-400">
          <span className="block text-xs uppercase tracking-wide text-slate-500">Previous</span>
          <span className="font-semibold text-slate-900">{previous.title}</span>
        </Link>
      ) : <span />}
      {next && (
        <Link rel="next" href={next.href} className="rounded-lg border border-slate-200 p-4 text-right hover:border-sky-400">
          <span className="block text-xs uppercase tracking-wide text-slate-500">Next</span>
          <span className="font-semibold text-slate-900">{next.title}</span>
        </Link>
      )}
    </nav>
  );
}
