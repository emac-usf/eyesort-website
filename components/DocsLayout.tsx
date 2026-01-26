import { DocsSidebar } from "./DocsSidebar";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex gap-8">
        <DocsSidebar />
        <div className="flex-1 min-w-0">
          <article className="prose prose-slate max-w-none">
            {children}
          </article>
        </div>
      </div>
    </div>
  );
}

