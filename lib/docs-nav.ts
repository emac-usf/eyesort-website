import { DOCS_NAV } from "@/content/docs.nav";

export interface DocNavItem {
  title: string;
  href: string;
}

export interface DocNavSection {
  title: string;
  items: DocNavItem[];
}

export const docsNav = DOCS_NAV as DocNavSection[];

export function flattenDocsNav(): Array<DocNavItem & { section: string }> {
  return docsNav.flatMap((section) =>
    section.items.map((item) => ({ ...item, section: section.title }))
  );
}

export function getDocNavigation(href: string) {
  const pages = flattenDocsNav();
  const index = pages.findIndex((page) => page.href === href);

  return {
    current: index >= 0 ? pages[index] : undefined,
    previous: index > 0 ? pages[index - 1] : undefined,
    next: index >= 0 && index < pages.length - 1 ? pages[index + 1] : undefined,
  };
}
