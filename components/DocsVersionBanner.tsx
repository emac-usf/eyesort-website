import Link from "next/link";
import { RELEASE } from "@/lib/site";

export function DocsVersionBanner({ lastVerified }: { lastVerified?: string }) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-950">
      <span>
        Applies to EyeSort {RELEASE.version}
        {lastVerified ? ` · Verified ${lastVerified}` : ""}
      </span>
      <Link href="/resources#releases" className="font-semibold underline">
        Release notes
      </Link>
    </div>
  );
}
