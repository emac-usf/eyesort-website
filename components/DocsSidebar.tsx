"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOCS_NAV } from "@/content/docs.nav";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto pr-4 pb-8 border-r border-slate-200">
      <nav className="space-y-6">
        {DOCS_NAV.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block text-sm py-1 px-3 rounded transition-colors ${
                        active
                          ? "bg-sky-100 text-sky-700 font-medium border border-sky-200"
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
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
      </nav>
    </aside>
  );
}

