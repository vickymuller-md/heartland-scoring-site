import { HeroIllustration } from "./heart-mark";
import { InstallCommand } from "./install-command";

/**
 * Hero — package-first framing. Headline names the package identity,
 * sub-headline states what it is, and the primary action is the install
 * command itself (copy button). Illustration mirrors the cream-blob
 * motif from the app landing for visual consistency.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-16 md:pb-32 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7 hs-reveal">
            <p className="inline-flex items-center gap-2 rounded-full border border-grid bg-panel px-3.5 py-1.5 font-editorial text-[12px] tracking-tight text-cool/80">
              <span className="h-1.5 w-1.5 rounded-full bg-signal hs-live" aria-hidden />
              Peer-reviewed in Cureus · MIT licensed · Zero runtime deps
            </p>

            <h1 className="mt-7 text-[clamp(2.5rem,6vw,5rem)] font-editorial font-semibold leading-[1.04] tracking-[-0.025em] text-cool">
              The HEARTLAND Risk Score,{" "}
              <span className="font-display italic font-normal text-alert">
                as a package.
              </span>
            </h1>

            <p className="mt-7 max-w-xl font-editorial text-[17px] leading-[1.65] text-cool/75 md:text-[18px]">
              A pure TypeScript implementation of the ten-variable risk
              heuristic from the peer-reviewed HEARTLAND Protocol. Designed
              for EHR vendors, clinical decision-support platforms, and
              research tools that want the scoring engine without adopting
              the full reference app.
            </p>

            <div className="mt-10">
              <InstallCommand />
            </div>

            <div className="mt-10 flex flex-col items-start gap-x-10 gap-y-4 sm:flex-row sm:items-center">
              <a
                href="#calculator"
                className="group inline-flex items-center gap-2 font-editorial text-[15px] font-medium text-cool/85 transition-colors hover:text-alert"
              >
                Try the calculator
                <span className="transition-transform group-hover:translate-x-1">
                  ↓
                </span>
              </a>
              <a
                href="#quickstart"
                className="group inline-flex items-center gap-2 font-editorial text-[15px] font-medium text-cool/85 transition-colors hover:text-alert"
              >
                Quick start
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <p className="mt-12 max-w-md font-editorial text-[12.5px] leading-relaxed text-stone">
              Clinical decision-support tool, not a medical device. Not
              FDA-cleared. Built for licensed clinicians. Pragmatic heuristic
              — formal prospective validation is a defined research objective.
            </p>
          </div>

          <div className="md:col-span-5 hs-reveal" style={{ animationDelay: "120ms" }}>
            <div className="relative">
              <HeroIllustration className="mx-auto h-auto w-full max-w-[480px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
