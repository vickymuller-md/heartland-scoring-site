import Link from "next/link";
import { HeartLineMark } from "./heart-mark";

/**
 * Masthead — navigation bar mirroring the wordmark from
 * app.heartlandprotocol.org. Adds package-specific links (npm, GitHub)
 * and a persistent tag showing the shipping version.
 */
export function Masthead() {
  return (
    <header className="border-b border-grid bg-terminal/85 backdrop-blur supports-[backdrop-filter]:bg-terminal/70 sticky top-0 z-40">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-5">
        <Link href="/" className="group flex items-center gap-2.5">
          <HeartLineMark className="h-7 w-7 text-alert transition-transform group-hover:scale-105" />
          <span className="font-editorial text-[18px] font-semibold tracking-tight text-cool">
            Heartland Scoring
          </span>
          <span className="ml-1 hidden rounded-full border border-grid bg-panel px-2 py-0.5 font-mono text-[10.5px] tracking-tight text-cool/70 sm:inline-flex">
            v1.0.0
          </span>
        </Link>

        <nav className="hidden items-center gap-8 font-editorial text-[14px] text-cool/80 md:flex">
          <Link href="#calculator" className="hover:text-alert transition-colors">
            Calculator
          </Link>
          <Link href="#reference" className="hover:text-alert transition-colors">
            Reference
          </Link>
          <a
            href="https://app.heartlandprotocol.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-alert transition-colors"
          >
            The App
          </a>
          <a
            href="https://doi.org/10.5281/zenodo.18566403"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-alert transition-colors"
          >
            Research
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/vickymuller-md/heartland-scoring"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-grid bg-panel px-4 py-2.5 font-editorial text-[13.5px] font-medium text-cool/85 transition-colors hover:border-cool/40 hover:text-cool sm:inline-flex"
          >
            GitHub
            <span className="text-[11px] text-stone">↗</span>
          </a>
          <a
            href="https://www.npmjs.com/package/heartland-scoring"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-cool px-5 py-2.5 font-editorial text-[13.5px] font-medium text-terminal transition-colors hover:bg-alert hover:text-cool"
          >
            npm install
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
