// app/layout.tsx

import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "EyeSort – Eye-tracking/EEG Toolbox",
  description:
    "EyeSort is a MATLAB-based EEGLAB toolbox for eye-tracking/EEG co-registration research.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
          <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg">
              EyeSort
            </Link>
            <div className="flex gap-4 text-sm">
              <Link href="/docs" className="hover:text-sky-400">
                Docs
              </Link>
              <Link href="/methods" className="hover:text-sky-400">
                Methods
              </Link>
              <Link href="/resources" className="hover:text-sky-400">
                Resources
              </Link>
              <Link href="/about" className="hover:text-sky-400">
                About
              </Link>
            </div>
          </nav>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
