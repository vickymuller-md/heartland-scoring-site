/**
 * QuickStart — full working example as a styled "pathology report"-like
 * code block. Hand-tokenized so we ship zero JS for highlighting and the
 * block renders identically across SSR and client. Pairs with the adjacent
 * "what this returns" callouts.
 */

type Token = { t: string; c?: string };

const TOK = {
  keyword: "text-alert",
  type: "text-signal",
  string: "text-amber",
  number: "text-amber",
  comment: "text-stone italic",
  punct: "text-cool/50",
  prop: "text-cool",
  func: "text-cool",
  ident: "text-cool",
} as const;

const LINES: Token[][] = [
  [
    { t: "import", c: TOK.keyword },
    { t: " " },
    { t: "{", c: TOK.punct },
    { t: " " },
    { t: "calculateRiskScore", c: TOK.func },
    { t: ", " },
    { t: "type ", c: TOK.keyword },
    { t: "RiskResult", c: TOK.type },
    { t: " " },
    { t: "}", c: TOK.punct },
    { t: " " },
    { t: "from", c: TOK.keyword },
    { t: " " },
    { t: "'heartland-scoring'", c: TOK.string },
    { t: ";", c: TOK.punct },
  ],
  [],
  [
    { t: "const", c: TOK.keyword },
    { t: " " },
    { t: "result", c: TOK.ident },
    { t: ": ", c: TOK.punct },
    { t: "RiskResult", c: TOK.type },
    { t: " = " },
    { t: "calculateRiskScore", c: TOK.func },
    { t: "({", c: TOK.punct },
  ],
  [
    { t: "  ageOver75", c: TOK.prop },
    { t: ": ", c: TOK.punct },
    { t: "true", c: TOK.keyword },
    { t: ",", c: TOK.punct },
  ],
  [
    { t: "  priorHfHospitalization", c: TOK.prop },
    { t: ": ", c: TOK.punct },
    { t: "true", c: TOK.keyword },
    { t: ",", c: TOK.punct },
  ],
  [
    { t: "  egfrBelow45", c: TOK.prop },
    { t: ": ", c: TOK.punct },
    { t: "false", c: TOK.keyword },
    { t: ",", c: TOK.punct },
    { t: "  " },
    { t: "// Cr 1.3 mg/dL", c: TOK.comment },
  ],
  [
    { t: "  elevatedNatriuretic", c: TOK.prop },
    { t: ": ", c: TOK.punct },
    { t: "true", c: TOK.keyword },
    { t: ",", c: TOK.punct },
    { t: "  " },
    { t: "// BNP 812 pg/mL", c: TOK.comment },
  ],
  [
    { t: "  sbpBelow100", c: TOK.prop },
    { t: ": ", c: TOK.punct },
    { t: "false", c: TOK.keyword },
    { t: ",", c: TOK.punct },
  ],
  [
    { t: "  diabetes", c: TOK.prop },
    { t: ": ", c: TOK.punct },
    { t: "true", c: TOK.keyword },
    { t: ",", c: TOK.punct },
  ],
  [
    { t: "  lvefBelow30", c: TOK.prop },
    { t: ": ", c: TOK.punct },
    { t: "true", c: TOK.keyword },
    { t: ",", c: TOK.punct },
    { t: "  " },
    { t: "// echo 26%", c: TOK.comment },
  ],
  [
    { t: "  ckmStage3or4", c: TOK.prop },
    { t: ": ", c: TOK.punct },
    { t: "false", c: TOK.keyword },
    { t: ",", c: TOK.punct },
  ],
  [
    { t: "  distanceOver50Miles", c: TOK.prop },
    { t: ": ", c: TOK.punct },
    { t: "true", c: TOK.keyword },
    { t: ",", c: TOK.punct },
  ],
  [
    { t: "  livesAloneOrLimitedSupport", c: TOK.prop },
    { t: ": ", c: TOK.punct },
    { t: "true", c: TOK.keyword },
    { t: ",", c: TOK.punct },
  ],
  [{ t: "});", c: TOK.punct }],
  [],
  [
    { t: "result.totalScore", c: TOK.ident },
    { t: "   " },
    { t: "// 12", c: TOK.comment },
  ],
  [
    { t: "result.tier", c: TOK.ident },
    { t: "         " },
    { t: "// 'high'", c: TOK.comment },
  ],
  [
    { t: "result.carePathway.followUp", c: TOK.ident },
    { t: " " },
    { t: "// 'Cardiology input before discharge; ...'", c: TOK.comment },
  ],
];

export function QuickStart() {
  return (
    <section
      id="quickstart"
      className="border-b border-grid bg-terminal"
      aria-labelledby="quickstart-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="font-editorial text-[12.5px] uppercase tracking-[0.18em] text-alert">
              Quick start
            </p>
            <h2
              id="quickstart-heading"
              className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-editorial font-semibold leading-[1.05] tracking-[-0.02em] text-cool"
            >
              A complete example,{" "}
              <span className="font-display italic font-normal text-cool/70">
                in one import.
              </span>
            </h2>
            <p className="mt-6 max-w-md font-editorial text-[15.5px] leading-relaxed text-cool/70">
              Pure TypeScript, zero runtime dependencies, ESM + CJS dual
              output. Works in Next.js, Remix, Astro, Node, Bun, Deno, edge
              runtimes, and every modern bundler.
            </p>

            <ul className="mt-8 space-y-4 font-editorial text-[14.5px] text-cool/80">
              <FeatureLine>
                <b>Zero deps.</b> Zod is optional and lives behind a peer
                dependency for input validation.
              </FeatureLine>
              <FeatureLine>
                <b>Typed end-to-end.</b> <code className="font-mono text-[13px]">RiskInput</code>,{" "}
                <code className="font-mono text-[13px]">RiskResult</code>, and{" "}
                <code className="font-mono text-[13px]">CarePathway</code>{" "}
                all exported.
              </FeatureLine>
              <FeatureLine>
                <b>Tree-shakeable.</b> Bring only the symbols you need —{" "}
                <code className="font-mono text-[13px]">classifyTier</code>,{" "}
                <code className="font-mono text-[13px]">RISK_VARIABLES</code>,{" "}
                <code className="font-mono text-[13px]">CARE_PATHWAYS</code>.
              </FeatureLine>
            </ul>
          </div>

          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-grid bg-panel shadow-sm">
              <div className="flex items-center justify-between border-b border-grid bg-terminal-deep px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-alert/80" aria-hidden />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber/80" aria-hidden />
                  <span className="h-2.5 w-2.5 rounded-full bg-signal/80" aria-hidden />
                </div>
                <p className="font-mono text-[11.5px] tracking-tight text-cool/55">
                  index.ts
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone">
                  v1.0.0
                </p>
              </div>

              <pre className="overflow-x-auto px-5 py-6 text-[13.5px] leading-[1.75]">
                <code className="font-mono">
                  {LINES.map((line, i) => (
                    <div key={i} className="flex">
                      <span
                        aria-hidden
                        className="w-8 shrink-0 select-none pr-3 text-right text-cool/30"
                      >
                        {i + 1}
                      </span>
                      <span className="min-w-0">
                        {line.length === 0 ? (
                          <span>&nbsp;</span>
                        ) : (
                          line.map((tok, j) => (
                            <span key={j} className={tok.c}>
                              {tok.t}
                            </span>
                          ))
                        )}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>

            <p className="mt-4 text-center font-editorial text-[12.5px] text-stone">
              Same code works verbatim in React Server Components, API
              routes, or a plain Node script.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureLine({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden
        className="mt-[9px] h-1 w-3 shrink-0 rounded-full bg-alert"
      />
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}
