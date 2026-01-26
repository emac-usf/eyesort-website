import Link from "next/link";
import { LINKS } from "@/lib/links";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">EyeSort</h3>
            <p className="text-sm text-slate-600">
              Region-aware eye-tracking event labeling for EEGLAB
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Documentation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <a
                  href={LINKS.userManual}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  User Manual (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={LINKS.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={LINKS.githubIssues}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Issues
                </a>
              </li>
              <li>
                <a
                  href={LINKS.githubDiscussions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Discussions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/papers" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Citation
                </Link>
              </li>
              <li>
                <a
                  href={LINKS.githubRepo + "/blob/main/LICENSE"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  License (GPL-3.0)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
          <p>
            © {currentYear} Eye Movements & Cognition Lab, University of South Florida.
            Released under the GNU GPL v3.0 License.
          </p>
        </div>
      </div>
    </footer>
  );
}

