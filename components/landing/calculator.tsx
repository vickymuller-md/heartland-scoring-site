"use client";

import { useEffect, useMemo, useState } from "react";
import {
  calculateRiskScore,
  RISK_VARIABLES,
  type RiskInput,
  type RiskResult,
} from "heartland-scoring";

const INITIAL_INPUT: RiskInput = {
  ageOver75: false,
  priorHfHospitalization: false,
  egfrBelow45: false,
  elevatedNatriuretic: false,
  sbpBelow100: false,
  diabetes: false,
  lvefBelow30: false,
  ckmStage3or4: false,
  distanceOver50Miles: false,
  livesAloneOrLimitedSupport: false,
};

const TIER_STYLES: Record<
  RiskResult["tier"],
  {
    chipBg: string;
    chipText: string;
    chipBorder: string;
    accentText: string;
    accentBg: string;
    label: string;
  }
> = {
  low: {
    chipBg: "bg-sage/10",
    chipText: "text-sage-deep",
    chipBorder: "border-sage/30",
    accentText: "text-sage-deep",
    accentBg: "bg-sage",
    label: "Low risk",
  },
  moderate: {
    chipBg: "bg-amber/10",
    chipText: "text-amber-deep",
    chipBorder: "border-amber/30",
    accentText: "text-amber-deep",
    accentBg: "bg-amber",
    label: "Moderate risk",
  },
  high: {
    chipBg: "bg-alert/10",
    chipText: "text-alert-deep",
    chipBorder: "border-alert/40",
    accentText: "text-alert-deep",
    accentBg: "bg-alert",
    label: "High risk",
  },
};

/**
 * Calculator — the centerpiece. Uses the published npm package directly
 * (no local fork), so the live result is provably the same logic anyone
 * gets with `npm install heartland-scoring`. Two-column layout: checkbox
 * grid on the left, "pathology report"-style output on the right.
 */
export function Calculator() {
  const [input, setInput] = useState<RiskInput>(INITIAL_INPUT);

  const result = useMemo(() => calculateRiskScore(input), [input]);

  function toggle(key: keyof RiskInput) {
    setInput((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function reset() {
    setInput(INITIAL_INPUT);
  }

  return (
    <section
      id="calculator"
      className="border-b border-grid bg-panel"
      aria-labelledby="calculator-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="font-editorial text-[12.5px] uppercase tracking-[0.18em] text-alert">
              Live calculator
            </p>
            <h2
              id="calculator-heading"
              className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-editorial font-semibold leading-[1.05] tracking-[-0.02em] text-cool"
            >
              Running the package,{" "}
              <span className="font-display italic font-normal text-cool/70">
                right here, right now.
              </span>
            </h2>
            <p className="mt-6 max-w-md font-editorial text-[15.5px] leading-relaxed text-cool/70">
              This panel imports <code className="font-mono text-[13px]">calculateRiskScore</code>{" "}
              from <code className="font-mono text-[13px]">heartland-scoring@1.0.0</code> exactly
              as a consumer would. Every tick below triggers the same pure
              function the package ships.
            </p>

            <button
              type="button"
              onClick={reset}
              className="mt-8 inline-flex items-center gap-2 font-editorial text-[13.5px] font-medium text-cool/70 transition-colors hover:text-alert"
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
                aria-hidden
              >
                <path d="M2.5 4 V 8 H 6.5" />
                <path d="M 13 9 a 5 5 0 1 1 -1.2 -4.1 L 13 6" />
              </svg>
              Reset all variables
            </button>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <fieldset className="rounded-2xl border border-grid bg-terminal p-3">
                  <legend className="sr-only">Clinical variables</legend>
                  <ul className="divide-y divide-grid">
                    {RISK_VARIABLES.map((v) => {
                      const checked = input[v.key];
                      const id = `hs-var-${v.key}`;
                      return (
                        <li key={v.key}>
                          <label
                            htmlFor={id}
                            className="flex cursor-pointer items-start gap-3 px-3 py-3.5 transition-colors hover:bg-panel rounded-xl"
                          >
                            <span
                              className={
                                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors " +
                                (checked
                                  ? "border-alert bg-alert text-terminal"
                                  : "border-grid-hi bg-panel text-transparent")
                              }
                              aria-hidden
                            >
                              <svg
                                viewBox="0 0 16 16"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-3 w-3"
                              >
                                <path d="M3 8 L 7 12 L 13 4" />
                              </svg>
                            </span>
                            <input
                              id={id}
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggle(v.key)}
                              className="sr-only"
                            />
                            <div className="min-w-0 flex-1">
                              <div className="flex items-baseline justify-between gap-3">
                                <p className="font-editorial text-[14.5px] font-medium leading-snug text-cool">
                                  {v.label}
                                </p>
                                <span className="shrink-0 font-mono text-[11px] tracking-tight text-stone">
                                  +{v.points}
                                </span>
                              </div>
                              <p className="mt-0.5 font-editorial text-[12.5px] text-cool/60">
                                {v.category}
                              </p>
                            </div>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </fieldset>
              </div>

              <div className="lg:col-span-2">
                <ResultCard result={result} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultCard({ result }: { result: RiskResult }) {
  const style = TIER_STYLES[result.tier];
  const percent = Math.min(100, (result.totalScore / result.maxScore) * 100);

  // Remount the score number on every change to replay the count animation.
  // Cheap and legible; no refs.
  const [mountKey, setMountKey] = useState(0);
  useEffect(() => {
    setMountKey((k) => k + 1);
  }, [result.totalScore]);

  return (
    <div
      aria-live="polite"
      className="sticky top-24 rounded-2xl border border-grid bg-terminal p-6"
    >
      <div className="flex items-center justify-between">
        <p className="font-editorial text-[11.5px] uppercase tracking-[0.18em] text-stone">
          HEARTLAND-RS
        </p>
        <span
          className={
            "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-editorial text-[11.5px] font-medium " +
            style.chipBg +
            " " +
            style.chipText +
            " " +
            style.chipBorder
          }
        >
          <span
            aria-hidden
            className={"h-1.5 w-1.5 rounded-full " + style.accentBg + " hs-live"}
          />
          {style.label}
        </span>
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span
          key={mountKey}
          className={
            "hs-count-in font-editorial text-7xl font-semibold leading-none tracking-[-0.02em] " +
            style.accentText
          }
        >
          {result.totalScore}
        </span>
        <span className="font-editorial text-[18px] font-medium text-cool/50">
          /{result.maxScore}
        </span>
      </div>
      <p className="mt-2 font-editorial text-[12.5px] text-cool/65">
        points of a possible {result.maxScore}
      </p>

      <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-grid">
        <div
          className={"h-full " + style.accentBg + " transition-[width] duration-500 ease-out"}
          style={{ width: `${percent}%` }}
          aria-hidden
        />
      </div>

      <dl className="mt-7 space-y-4 border-t border-grid pt-6">
        <PathwayField label="Follow-up" value={result.carePathway.followUp} />
        <PathwayField label="Monitoring" value={result.carePathway.monitoring} />
        <PathwayField label="Support" value={result.carePathway.support} />
      </dl>

      <p className="mt-6 font-editorial text-[13px] leading-relaxed text-cool/70">
        {result.carePathway.description}
      </p>

      <p className="mt-6 border-t border-grid pt-4 font-mono text-[10.5px] uppercase tracking-[0.1em] text-stone">
        Pragmatic heuristic — not validated against outcomes
      </p>
    </div>
  );
}

function PathwayField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-editorial text-[11px] uppercase tracking-[0.16em] text-stone">
        {label}
      </dt>
      <dd className="mt-1 font-editorial text-[14px] leading-snug text-cool">
        {value}
      </dd>
    </div>
  );
}
