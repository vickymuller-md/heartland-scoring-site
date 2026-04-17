/**
 * HeartLineMark — soft hand-drawn heart silhouette with a subtle ECG line.
 * Mirrors the wordmark from app.heartlandprotocol.org for brand consistency.
 */
export function HeartLineMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 28 C 6 20 3 12 8 7 C 12 3 16 5 18 8 C 20 5 24 3 28 7 C 33 12 30 20 18 28 Z" />
      <path d="M5 17 H 12 L 14 12 L 16 22 L 18 17 H 24" strokeWidth="1.4" />
    </svg>
  );
}

/**
 * BraceletIllustration — soft anchor for the hero.
 * Replaces the stethoscope from the app landing with a motif that reads
 * "developer tool" rather than "patient care": a stylized terminal card
 * showing the signature quick-start snippet, laid over a hand-drawn
 * landscape horizon and a small ECG trace.
 */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 520"
      fill="none"
      aria-hidden="true"
    >
      {/* Cream blob backdrop */}
      <ellipse
        cx="270"
        cy="270"
        rx="240"
        ry="232"
        fill="currentColor"
        opacity="0.55"
        className="text-panel-hi"
      />

      {/* Rolling-hill horizon */}
      <path
        d="M 20 390 Q 130 350 260 380 T 510 370"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-cool/35"
      />
      <path
        d="M 20 430 Q 150 395 280 420 T 510 413"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="text-cool/20"
      />

      {/* Terminal / package card, slightly tilted */}
      <g transform="translate(85 110) rotate(-4 175 120)">
        {/* Card body */}
        <rect
          x="0"
          y="0"
          width="350"
          height="240"
          rx="18"
          fill="currentColor"
          className="text-panel"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeOpacity="0.25"
        />
        {/* Card header strip */}
        <rect
          x="0"
          y="0"
          width="350"
          height="36"
          rx="18"
          fill="currentColor"
          className="text-terminal-deep"
        />
        <rect
          x="0"
          y="18"
          width="350"
          height="18"
          fill="currentColor"
          className="text-terminal-deep"
        />
        {/* Traffic dots */}
        <circle cx="20" cy="18" r="4.5" fill="currentColor" className="text-alert" />
        <circle cx="36" cy="18" r="4.5" fill="currentColor" className="text-amber" />
        <circle cx="52" cy="18" r="4.5" fill="currentColor" className="text-signal" />
        {/* File name */}
        <text
          x="175"
          y="22.5"
          textAnchor="middle"
          className="fill-cool/65"
          fontFamily="ui-monospace, monospace"
          fontSize="11.5"
        >
          index.ts
        </text>

        {/* Code lines (decorative) */}
        <g fontFamily="ui-monospace, monospace" fontSize="13">
          <text x="24" y="76" className="fill-cool/50">
            1
          </text>
          <text x="50" y="76" className="fill-alert">
            import
          </text>
          <text x="108" y="76" className="fill-cool">
            {" "}
            {"{"} calculateRiskScore {"}"}
          </text>
          <text x="24" y="100" className="fill-cool/50">
            2
          </text>
          <text x="50" y="100" className="fill-cool/75">
            from
          </text>
          <text x="88" y="100" className="fill-signal">
            {" '"}heartland-scoring&apos;
          </text>
          <text x="24" y="136" className="fill-cool/50">
            3
          </text>
          <text x="24" y="160" className="fill-cool/50">
            4
          </text>
          <text x="50" y="160" className="fill-alert">
            const
          </text>
          <text x="96" y="160" className="fill-cool">
            {" "}result ={" "}
          </text>
          <text x="182" y="160" className="fill-cool">
            calculateRiskScore(
          </text>
          <text x="24" y="184" className="fill-cool/50">
            5
          </text>
          <text x="74" y="184" className="fill-cool/75">
            input,
          </text>
          <text x="24" y="208" className="fill-cool/50">
            6
          </text>
          <text x="50" y="208" className="fill-cool">
            );
          </text>
        </g>
      </g>

      {/* ECG trace overlay (subtle, bottom-right) */}
      <g transform="translate(300 388)">
        <path
          d="M 0 20 H 28 L 36 10 L 42 30 L 48 0 L 56 42 L 62 20 H 100 L 108 10 L 114 30 L 120 0 L 128 42 L 134 20 H 170"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="text-alert"
        />
      </g>
    </svg>
  );
}
