import Link from "next/link";

export function DocsBreadcrumbs({
  section,
  title,
}: {
  section?: string;
  title: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/docs">Documentation</Link></li>
        {section && (
          <>
            <li aria-hidden="true">/</li>
            <li>{section}</li>
          </>
        )}
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-slate-900">{title}</li>
      </ol>
    </nav>
  );
}
