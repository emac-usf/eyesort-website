// app/layout.tsx

import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getLatestVersion } from "@/lib/version";
import { buildDocsSearchIndex } from "@/lib/docs-content";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "EyeSort – Region-aware eye-tracking event labeling for EEGLAB",
  description: SITE.description,
  keywords: [
    "EyeSort",
    "EEGLAB",
    "eye-tracking",
    "ERP",
    "ERPLAB",
    "reading research",
    "event labeling",
    "interest areas",
    "MATLAB",
  ],
  authors: [
    { name: "Brandon Snyder" },
    { name: "Sara Milligan" },
    { name: "Elizabeth Schotter" },
  ],
  openGraph: {
    title: "EyeSort – Region-aware eye-tracking event labeling for EEGLAB",
    description: SITE.description,
    url: SITE.url,
    siteName: "EyeSort",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EyeSort – Eye-tracking event labeling for EEGLAB",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon-v2.ico", type: "image/x-icon" }],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const version = await getLatestVersion();
  const searchEntries = buildDocsSearchIndex();

  return (
    <html lang="en">
      <body className="bg-white text-slate-900 flex flex-col min-h-screen">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar version={version} searchEntries={searchEntries} />
        <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
