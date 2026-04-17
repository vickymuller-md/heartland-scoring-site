import Link from "next/link";
import { HeartLineMark } from "./heart-mark";

/**
 * Colophon — footer mirroring the app landing's structure (brand block +
 * three column groups + legal strip). Link sets are adjusted for the
 * package audience: research, package, and contact.
 */
export function Colophon() {
  return (
    <footer className="border-t border-grid bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        {/* Citation */}
        <div className="mb-14 rounded-2xl border border-grid bg-panel p-6 md:p-8">
          <p className="font-editorial text-[11.5px] uppercase tracking-[0.18em] text-alert">
            How to cite
          </p>
          <p className="mt-3 font-editorial text-[14.5px] leading-relaxed text-cool/85 md:text-[15px]">
            Muller Ferreira, V. (2026).{" "}
            <span className="font-display italic text-cool">
              heartland-scoring: Risk Score Engine for Rural Heart Failure
              Management
            </span>{" "}
            (v1.0.0). Zenodo.{" "}
            <a
              href="https://doi.org/10.5281/zenodo.18566403"
              target="_blank"
              rel="noopener noreferrer"
              className="text-alert underline decoration-alert/30 underline-offset-4 hover:decoration-alert"
            >
              https://doi.org/10.5281/zenodo.18566403
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <HeartLineMark className="h-7 w-7 text-alert" />
              <span className="font-editorial text-[18px] font-semibold tracking-tight text-cool">
                Heartland Scoring
              </span>
            </Link>
            <p className="mt-4 max-w-md font-editorial text-[14.5px] leading-relaxed text-cool/70">
              A standalone TypeScript implementation of the risk
              stratification heuristic from the HEARTLAND Protocol. Part of
              an open-source ecosystem for rural heart failure care.
            </p>
            <p className="mt-6 font-editorial text-[12.5px] leading-relaxed text-stone">
              Built by Vicky Muller Ferreira, MD. For licensed clinicians
              only. Not a medical device. Not for direct patient care. No
              patient health information is ever collected.
            </p>
          </div>

          <FooterBlock title="Research">
            <FooterLink
              href="https://doi.org/10.5281/zenodo.18566403"
              external
            >
              Zenodo deposit
            </FooterLink>
            <FooterLink href="https://doi.org/10.17605/OSF.IO/YUSGH" external>
              OSF deposit
            </FooterLink>
            <FooterLink href="https://www.cureus.com/" external>
              Cureus article
            </FooterLink>
            <FooterLink
              href="https://orcid.org/0009-0009-1099-5690"
              external
            >
              ORCID profile
            </FooterLink>
          </FooterBlock>

          <FooterBlock title="Package">
            <FooterLink
              href="https://www.npmjs.com/package/heartland-scoring"
              external
            >
              npmjs.com
            </FooterLink>
            <FooterLink
              href="https://github.com/vickymuller-md/heartland-scoring"
              external
            >
              Source code
            </FooterLink>
            <FooterLink
              href="https://github.com/vickymuller-md/heartland-scoring/blob/main/CHANGELOG.md"
              external
            >
              Changelog
            </FooterLink>
            <FooterLink
              href="https://github.com/vickymuller-md/heartland-scoring/blob/main/LICENSE"
              external
            >
              MIT License
            </FooterLink>
          </FooterBlock>

          <FooterBlock title="Contact">
            <FooterLink href="mailto:vickymuller@heartlandprotocol.org">
              vickymuller@heartlandprotocol.org
            </FooterLink>
            <FooterLink
              href="https://app.heartlandprotocol.org"
              external
            >
              The full app
            </FooterLink>
            <li className="font-editorial text-[14.5px] text-cool/85">
              Vicky Muller Ferreira,{" "}
              <span className="text-stone">MD</span>
            </li>
          </FooterBlock>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-grid pt-6 font-editorial text-[12.5px] text-stone md:flex-row md:items-center md:justify-between">
          <p>© 2026 Vicky Muller Ferreira, MD · Released under MIT</p>
          <p>
            <span className="font-mono">heartland-scoring</span> v1.0.0 ·
            open source
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="md:col-span-2 lg:col-span-2">
      <p className="mb-4 font-editorial text-[12.5px] uppercase tracking-[0.18em] text-cool">
        {title}
      </p>
      <ul className="space-y-3 font-editorial text-[14.5px]">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <li>
      <Link
        href={href}
        {...externalProps}
        className="inline-flex items-baseline gap-1 text-cool/80 transition-colors hover:text-alert"
      >
        {children}
        {external && (
          <span className="text-[11px] text-stone" aria-hidden>
            ↗
          </span>
        )}
      </Link>
    </li>
  );
}
