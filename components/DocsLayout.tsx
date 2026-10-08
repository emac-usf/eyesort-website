import { DocsSidebar } from "./DocsSidebar";
import { DocsBreadcrumbs } from "./DocsBreadcrumbs";
import { DocsPager } from "./DocsPager";
import { DocsTableOfContents } from "./DocsTableOfContents";
import { DocsVersionBanner } from "./DocsVersionBanner";
import type { DocHeading } from "@/lib/docs-content";
import { getDocNavigation } from "@/lib/docs-nav";

export function DocsLayout({
  children,
  href,
  title,
  headings,
  lastVerified,
}: {
  children: React.ReactNode;
  href: string;
  title: string;
  headings: DocHeading[];
  lastVerified?: string;
}) {
  const navigation = getDocNavigation(href);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="md:flex md:gap-8">
        <DocsSidebar />
        <div className="min-w-0 flex-1">
          <DocsBreadcrumbs section={navigation.current?.section} title={title} />
          <DocsVersionBanner lastVerified={lastVerified} />
          <article className="prose max-w-none">
            {children}
          </article>
          <DocsPager previous={navigation.previous} next={navigation.next} />
        </div>
        <DocsTableOfContents headings={headings} />
      </div>
    </div>
  );
}

