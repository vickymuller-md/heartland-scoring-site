import {
  RISK_VARIABLES,
  CARE_PATHWAYS,
  COMPARISON_TABLE_DATA,
} from "heartland-scoring";

const CATEGORY_STYLES: Record<string, string> = {
  Clinical: "bg-alert/10 text-alert-deep border-alert/20",
  Laboratory: "bg-signal/10 text-signal-deep border-signal/20",
  Cardiac: "bg-amber/10 text-amber-deep border-amber/20",
  Comorbidity: "bg-cool/5 text-cool/80 border-cool/15",
  "Social/Geographic": "bg-sage/10 text-sage-deep border-sage/25",
};

/**
 * Reference — combines the three reference tables (variables, care
 * pathways, comparison) into one contiguous "technical documentation"
 * section that mirrors the app landing's "Modules" section in density
 * and structure.
 */
export function Reference() {
  return (
    <section
      id="reference"
      className="border-b border-grid bg-terminal"
      aria-labelledby="reference-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="font-editorial text-[12.5px] uppercase tracking-[0.18em] text-alert">
              Reference
            </p>
            <h2
              id="reference-heading"
              className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-editorial font-semibold leading-[1.05] tracking-[-0.02em] text-cool"
            >
              Ten variables,{" "}
              <span className="font-display italic font-normal text-cool/70">
                three pathways,
              </span>{" "}
              one protocol.
            </h2>
            <p className="mt-6 max-w-md font-editorial text-[15.5px] leading-relaxed text-cool/70">
              Every value below is exported by the package at runtime. The
              tables on this page are generated from{" "}
              <code className="font-mono text-[13px]">RISK_VARIABLES</code>,{" "}
              <code className="font-mono text-[13px]">CARE_PATHWAYS</code>, and{" "}
              <code className="font-mono text-[13px]">COMPARISON_TABLE_DATA</code>{" "}
              — not hardcoded.
            </p>
          </div>
          <div className="md:col-span-7" />
        </div>

        {/* Variables */}
        <div className="mt-16">
          <div className="flex items-baseline justify-between gap-4 border-b border-grid pb-4">
            <h3 className="font-editorial text-[17px] font-semibold tracking-tight text-cool">
              Risk variables
            </h3>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone">
              Protocol v3.3 · Table 1
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-editorial text-[14px]">
              <thead>
                <tr className="border-b border-grid text-left text-cool/70">
                  <th className="py-3 pr-4 text-[11.5px] font-medium uppercase tracking-[0.14em]">
                    Variable
                  </th>
                  <th className="py-3 pr-4 text-[11.5px] font-medium uppercase tracking-[0.14em]">
                    Category
                  </th>
                  <th className="py-3 pr-4 text-[11.5px] font-medium uppercase tracking-[0.14em]">
                    Key
                  </th>
                  <th className="py-3 pl-4 text-right text-[11.5px] font-medium uppercase tracking-[0.14em]">
                    Points
                  </th>
                </tr>
              </thead>
              <tbody>
                {RISK_VARIABLES.map((v) => (
                  <tr
                    key={v.key}
                    className="border-b border-grid/60 last:border-b-0 transition-colors hover:bg-panel"
                  >
                    <td className="py-4 pr-4 align-top">
                      <p className="font-medium text-cool">{v.label}</p>
                      <p className="mt-0.5 text-[13px] text-cool/60">
                        {v.description}
                      </p>
                    </td>
                    <td className="py-4 pr-4 align-top">
                      <span
                        className={
                          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11.5px] " +
                          (CATEGORY_STYLES[v.category] ||
                            "bg-cool/5 text-cool/80 border-cool/15")
                        }
                      >
                        {v.category}
                      </span>
                    </td>
                    <td className="py-4 pr-4 align-top">
                      <code className="font-mono text-[12.5px] text-cool/75">
                        {v.key}
                      </code>
                    </td>
                    <td className="py-4 pl-4 text-right align-top">
                      <span className="font-mono text-[14px] font-medium text-alert">
                        +{v.points}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="bg-panel">
                  <td className="py-4 pr-4 font-editorial text-[12.5px] uppercase tracking-[0.12em] text-cool/70">
                    Maximum possible score
                  </td>
                  <td colSpan={2} />
                  <td className="py-4 pl-4 text-right">
                    <span className="font-mono text-[14px] font-semibold text-cool">
                      18
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Care pathways */}
        <div className="mt-24">
          <div className="flex items-baseline justify-between gap-4 border-b border-grid pb-4">
            <h3 className="font-editorial text-[17px] font-semibold tracking-tight text-cool">
              Care pathways by tier
            </h3>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone">
              Protocol v3.3 · §1.2
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
            {(["low", "moderate", "high"] as const).map((tier) => (
              <PathwayCard key={tier} tier={tier} />
            ))}
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-24">
          <div className="flex items-baseline justify-between gap-4 border-b border-grid pb-4">
            <h3 className="font-editorial text-[17px] font-semibold tracking-tight text-cool">
              HEARTLAND vs existing scores
            </h3>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone">
              Protocol v3.3 · Table 6
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-editorial text-[14px]">
              <thead>
                <tr className="border-b border-grid text-left text-cool/70">
                  <th className="py-3 pr-4 text-[11.5px] font-medium uppercase tracking-[0.14em]">
                    Characteristic
                  </th>
                  <th className="py-3 pr-4 text-[11.5px] font-medium uppercase tracking-[0.14em]">
                    MAGGIC
                  </th>
                  <th className="py-3 pr-4 text-[11.5px] font-medium uppercase tracking-[0.14em]">
                    GWTG-HF
                  </th>
                  <th className="py-3 pr-4 text-[11.5px] font-medium uppercase tracking-[0.14em]">
                    SHFM
                  </th>
                  <th className="py-3 pr-4 text-[11.5px] font-medium uppercase tracking-[0.14em] text-alert">
                    HEARTLAND
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE_DATA.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-grid/60 last:border-b-0 transition-colors hover:bg-panel"
                  >
                    <td className="py-4 pr-4 font-medium text-cool">
                      {row.characteristic}
                    </td>
                    <td className="py-4 pr-4 text-cool/70">{row.maggic}</td>
                    <td className="py-4 pr-4 text-cool/70">{row.gwtgHf}</td>
                    <td className="py-4 pr-4 text-cool/70">{row.shfm}</td>
                    <td className="py-4 pr-4 font-medium text-cool">
                      {row.heartland}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl font-editorial text-[13.5px] leading-relaxed text-cool/60">
            HEARTLAND is a pragmatic heuristic designed for clinical
            decision support at the point of discharge — it is not a direct
            competitor to mortality-prognostic scores. The comparison above
            describes structural differences, not relative predictive
            performance.
          </p>
        </div>
      </div>
    </section>
  );
}

function PathwayCard({ tier }: { tier: "low" | "moderate" | "high" }) {
  const pathway = CARE_PATHWAYS[tier];
  const tone = {
    low: {
      chipBg: "bg-sage/10",
      chipText: "text-sage-deep",
      chipBorder: "border-sage/30",
      bar: "bg-sage",
      scoreLabel: "0–4 points",
    },
    moderate: {
      chipBg: "bg-amber/10",
      chipText: "text-amber-deep",
      chipBorder: "border-amber/30",
      bar: "bg-amber",
      scoreLabel: "5–8 points",
    },
    high: {
      chipBg: "bg-alert/10",
      chipText: "text-alert-deep",
      chipBorder: "border-alert/40",
      bar: "bg-alert",
      scoreLabel: "9–18 points",
    },
  }[tier];

  return (
    <article className="rounded-2xl border border-grid bg-panel p-6 transition-colors hover:border-cool/40">
      <div className={"h-1 w-10 rounded-full " + tone.bar} aria-hidden />
      <div className="mt-5 flex items-baseline justify-between gap-3">
        <p className="font-editorial text-[17px] font-semibold capitalize tracking-tight text-cool">
          {pathway.tier}
        </p>
        <span
          className={
            "inline-flex rounded-full border px-2.5 py-0.5 font-editorial text-[11.5px] " +
            tone.chipBg +
            " " +
            tone.chipText +
            " " +
            tone.chipBorder
          }
        >
          {tone.scoreLabel}
        </span>
      </div>

      <p className="mt-3 font-editorial text-[14px] leading-relaxed text-cool/75">
        {pathway.description}
      </p>

      <dl className="mt-5 space-y-3 border-t border-grid pt-5">
        <Row label="Follow-up" value={pathway.followUp} />
        <Row label="Monitoring" value={pathway.monitoring} />
        <Row label="Support" value={pathway.support} />
      </dl>
    </article>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-editorial text-[11px] uppercase tracking-[0.14em] text-stone">
        {label}
      </dt>
      <dd className="mt-0.5 font-editorial text-[13.5px] leading-snug text-cool">
        {value}
      </dd>
    </div>
  );
}
