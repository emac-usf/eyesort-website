"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LINKS } from "@/lib/links";
import type { DocsSearchEntry } from "@/lib/docs-content";
import { DocsSearch } from "./DocsSearch";

const NAV = [
  { href: "/docs", label: "Documentation" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/resources", label: "Resources" },
  { href: "/papers", label: "Papers" },
  { href: "/about", label: "About" },
];

export function Navbar({
  version,
  searchEntries,
}: {
  version: string;
  searchEntries: DocsSearchEntry[];
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
            EyeSort
          </Link>
          <span className="rounded border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
            v{version}
          </span>
        </div>

        <nav aria-label="Primary navigation" className="hidden items-center gap-5 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-sky-700" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <DocsSearch entries={searchEntries} />
          <a
            href={LINKS.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition-colors hover:text-slate-900"
            aria-label="GitHub repository"
          >
            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href={LINKS.pluginZip}
            className="hidden rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-700 sm:inline-flex"
          >
            Download {version}
          </a>
          <button
            type="button"
            className="inline-flex rounded-lg border border-slate-300 p-2 text-slate-700 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18 18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {NAV.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 font-medium ${
                    active ? "bg-sky-50 text-sky-700" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a href={LINKS.pluginZip} className="mt-2 rounded-lg bg-sky-600 px-3 py-2 text-center font-semibold text-white">
              Download EyeSort {version}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

