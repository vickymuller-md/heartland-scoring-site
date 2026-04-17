/**
 * Abstract — "Why extract the scoring engine?"
 * Mirrors the stat-card layout from app.heartlandprotocol.org so the
 * ecosystem reads as one design family. Numbers here are structural
 * (package-level) rather than epidemiological.
 */
export function Abstract() {
  return (
    <section className="border-y border-grid bg-panel">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-editorial text-[12.5px] uppercase tracking-[0.18em] text-alert">
            Why extract the scoring engine
          </p>
          <h2 className="mt-5 text-[clamp(1.85rem,3.5vw,2.85rem)] font-editorial font-semibold leading-[1.15] tracking-[-0.015em] text-cool">
            Existing risk scores omit distance to care and social support.{" "}
            <span className="font-display italic font-normal text-alert">
              HEARTLAND keeps them.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <StatCard
            value="10"
            heading="binary variables"
            note="Age, prior admission, eGFR, BNP, SBP, diabetes, LVEF, CKM stage, distance, social support."
          />
          <StatCard
            value="3"
            heading="tiered pathways"
            note="Low, moderate, and high risk map to explicit follow-up, monitoring, and support decisions."
            accent
          />
          <StatCard
            value="0"
            heading="runtime dependencies"
            note="Pure scoring functions. Optional Zod peer dependency for input validation."
          />
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center font-editorial text-[15.5px] leading-relaxed text-cool/75">
          MAGGIC is prognostic. GWTG-HF is a registry. SHFM is a survival
          calculator. None is a scoring engine designed for rural primary
          care — with <span className="text-cool">distance to cardiology</span>{" "}
          and <span className="text-cool">social support</span> as first-class
          variables. <span className="text-cool">This package is.</span>
        </p>

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          <Disclaimer heading="Professional use only">
            This package implements a scoring heuristic intended for
            healthcare professionals as a clinical decision-support resource.
            It does not provide medical diagnoses, treatment recommendations
            for individual patients, or replace clinical judgment. Not
            intended for direct patient care. Not FDA-cleared.
          </Disclaimer>
          <Disclaimer heading="Heuristic under development">
            The HEARTLAND Risk Stratification Framework is a proposed tool
            under development. It has not been prospectively validated against
            clinical outcomes data. Formal validation through registry data
            is a defined research objective.
          </Disclaimer>
        </div>
      </div>
    </section>
  );
}

function Disclaimer({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <aside
      role="note"
      aria-label="Clinical decision support disclaimer"
      className="rounded-2xl border border-grid bg-terminal p-6"
    >
      <p className="font-editorial text-[12.5px] uppercase tracking-[0.14em] text-alert">
        {heading}
      </p>
      <p className="mt-3 font-editorial text-[14px] leading-relaxed text-cool/75">
        {children}
      </p>
    </aside>
  );
}

function StatCard({
  value,
  heading,
  note,
  accent,
}: {
  value: string;
  heading: string;
  note: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-grid bg-terminal p-8 transition-colors hover:border-cool/40">
      <p
        className={
          "font-editorial text-6xl font-semibold leading-none tracking-[-0.02em] md:text-7xl " +
          (accent ? "text-alert" : "text-cool")
        }
      >
        {value}
      </p>
      <p className="mt-5 font-editorial text-[15.5px] font-medium text-cool">
        {heading}
      </p>
      <p className="mt-1.5 font-editorial text-[14px] leading-relaxed text-cool/65">
        {note}
      </p>
    </div>
  );
}
