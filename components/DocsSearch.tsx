"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { DocsSearchEntry } from "@/lib/docs-content";

export function DocsSearch({ entries }: { entries: DocsSearchEntry[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        dialogRef.current?.showModal();
        window.setTimeout(() => inputRef.current?.focus(), 0);
      }
    }

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return entries.slice(0, 8);

    return entries
      .filter((entry) =>
        [
          entry.title,
          entry.description,
          entry.headings.join(" "),
          entry.aliases.join(" "),
          entry.text,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalized)
      )
      .slice(0, 12);
  }, [entries, query]);

  function openSearch() {
    dialogRef.current?.showModal();
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }

  function closeSearch() {
    dialogRef.current?.close();
    setQuery("");
  }

  return (
    <>
      <button
        type="button"
        onClick={openSearch}
        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:border-sky-500 hover:text-sky-700"
        aria-label="Search documentation"
      >
        <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
        </svg>
        <span className="hidden lg:inline">Search</span>
        <kbd className="hidden rounded bg-slate-100 px-1.5 text-xs text-slate-500 xl:inline">⌘K</kbd>
      </button>

      <dialog ref={dialogRef} className="docs-search-dialog" onClick={(event) => {
        if (event.target === dialogRef.current) closeSearch();
      }}>
        <div className="overflow-hidden rounded-xl bg-white shadow-2xl">
          <div className="flex items-center gap-3 border-b border-slate-200 p-4">
            <label htmlFor="docs-search" className="sr-only">Search documentation</label>
            <input
              ref={inputRef}
              id="docs-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search BDF, interest areas, event fields…"
              className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
            />
            <button type="button" onClick={closeSearch} className="rounded px-2 py-1 text-sm text-slate-600 hover:bg-slate-100">
              Close
            </button>
          </div>
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {results.length ? (
              <ul>
                {results.map((entry) => (
                  <li key={entry.href}>
                    <Link
                      href={entry.href}
                      onClick={closeSearch}
                      className="block rounded-lg p-3 hover:bg-sky-50"
                    >
                      <span className="block font-semibold text-slate-900">{entry.title}</span>
                      <span className="mt-1 block text-sm text-slate-600">{entry.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="p-6 text-center text-slate-600">No documentation matched that search.</p>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
