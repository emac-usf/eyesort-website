// app/layout.tsx

import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "EyeSort – Region-aware eye-tracking event labeling for EEGLAB",
  description:
    "EyeSort is an EEGLAB plugin that integrates text/pixel interest areas with synchronized eye-tracking events and builds robust, reproducible label codes for ERP binning.",
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
    description:
      "EEGLAB plugin for integrating eye-tracking events with EEG data for reading research",
    url: "https://eyesort.usf.edu", // TODO: Update with actual domain
    siteName: "EyeSort",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EyeSort – Eye-tracking event labeling for EEGLAB",
    description:
      "EEGLAB plugin for integrating eye-tracking events with EEG data for reading research",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
