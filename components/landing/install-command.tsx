"use client";

import { useState } from "react";

const COMMAND = "npm install heartland-scoring";

/**
 * InstallCommand — the primary hero CTA. Acts as both a visual
 * code chip and a one-click copy affordance. Uses the system clipboard
 * with a graceful fallback for older browsers.
 */
export function InstallCommand() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(COMMAND);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = COMMAND;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // no-op; the user can still select manually
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy install command"
      className="group inline-flex max-w-full items-center gap-3 overflow-hidden rounded-xl border border-grid bg-panel px-5 py-4 text-left font-mono text-[14.5px] text-cool transition-colors hover:border-cool/40"
    >
      <span aria-hidden className="select-none text-alert">
        $
      </span>
      <span className="truncate">{COMMAND}</span>
      <span
        aria-live="polite"
        className={
          "ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full border border-grid px-2.5 py-1 font-editorial text-[11.5px] tracking-tight transition-colors " +
          (copied ? "border-signal/40 bg-signal/10 text-signal" : "bg-terminal text-stone group-hover:text-cool")
        }
      >
        {copied ? (
          <>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3"
              aria-hidden
            >
              <path d="M3 8 L 7 12 L 13 4" />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3"
              aria-hidden
            >
              <rect x="4.5" y="4.5" width="8" height="9" rx="1.5" />
              <path d="M3 11 V 3.5 a 1 1 0 0 1 1 -1 H 10" />
            </svg>
            Copy
          </>
        )}
      </span>
    </button>
  );
}
