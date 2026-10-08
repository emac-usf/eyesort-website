import type { DocHeading } from "@/lib/docs-content";

export function DocsTableOfContents({ headings }: { headings: DocHeading[] }) {
  if (headings.length < 2) return null;

  return (
    <aside className="hidden w-56 shrink-0 xl:block" aria-label="On this page">
      <nav className="sticky top-24 border-l border-slate-200 pl-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
          On this page
        </p>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li key={heading.id} className={heading.depth === 3 ? "pl-3" : undefined}>
              <a href={`#${heading.id}`} className="text-slate-600 hover:text-sky-700">
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
