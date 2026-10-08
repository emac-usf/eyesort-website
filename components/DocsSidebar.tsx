"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { docsNav } from "@/lib/docs-nav";
import { LINKS } from "@/lib/links";

export function DocsSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navigation = (
    <nav aria-label="Documentation navigation" className="space-y-6">
      {docsNav.map((section) => (
        <div key={section.title}>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
            {section.title}
          </h2>
          <ul className="space-y-1">
            {section.items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`block rounded px-3 py-1.5 text-sm transition-colors ${
                      active
                        ? "border border-sky-200 bg-sky-100 font-medium text-sky-800"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <div className="border-t border-slate-200 pt-4">
        <a
          href={LINKS.userManual}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded px-3 py-2 text-sm font-medium text-sky-700 hover:bg-sky-50"
        >
          EyeSort 1.0 Manual (PDF)
        </a>
      </div>
    </nav>
  );

  return (
    <>
      <div className="mb-6 md:hidden">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-docs-navigation"
          className="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-900"
        >
          Documentation menu
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        {open && (
          <div id="mobile-docs-navigation" className="mt-2 max-h-[70vh] overflow-y-auto rounded-lg border border-slate-200 bg-white p-4 shadow-lg">
            {navigation}
          </div>
        )}
      </div>
      <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-64 shrink-0 overflow-y-auto border-r border-slate-200 pb-8 pr-5 md:block">
        {navigation}
      </aside>
    </>
  );
}

