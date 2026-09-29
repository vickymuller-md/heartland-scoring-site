import { Masthead, Colophon } from "@heartland/ui";
import { Hero } from "@/components/landing/hero";
import { Abstract } from "@/components/landing/abstract";
import { QuickStart } from "@/components/landing/quickstart";
import { Calculator } from "@/components/landing/calculator";
import { Reference } from "@/components/landing/reference";
import { SCORING_VERSION } from "@/lib/package-info";

export default function Home() {
  return (
    <>
      <Masthead
        currentSite="scoring"
        version={`v${SCORING_VERSION}`}
        navItems={[
          { label: "Quickstart", href: "#quickstart" },
          { label: "Calculator", href: "#calculator" },
        ]}
        secondaryCta={{
          label: "GitHub",
          href: "https://github.com/vickymuller-md/heartland-scoring",
          external: true,
        }}
        cta={{
          label: "npm install",
          href: "https://www.npmjs.com/package/heartland-scoring",
          external: true,
        }}
      />
      <main className="flex-1">
        <Hero />
        <Abstract />
        <QuickStart />
        <Calculator packageVersion={SCORING_VERSION} />
        <Reference />
      </main>
      <Colophon
        currentSite="scoring"
        version={`v${SCORING_VERSION}`}
        description="TypeScript implementation of the HEARTLAND proposed framework pending validation. Ten weighted criteria, 0–18 points, three tiers. Synthetic demonstration; integration requires local verification. Zod is required by the package entry point."
        extraBlocks={[
          {
            title: "Package",
            links: [
              { label: "Software archive v1.0.0 (historical)", href: "https://doi.org/10.5281/zenodo.19634995", external: true },
              { label: "Toolkit v3.3 archive", href: "https://doi.org/10.5281/zenodo.19101219", external: true },
              { label: "Underlying Cureus article", href: "https://doi.org/10.7759/cureus.104817", external: true },
              { label: "npm install", href: "https://www.npmjs.com/package/heartland-scoring", external: true },
              { label: "GitHub", href: "https://github.com/vickymuller-md/heartland-scoring", external: true },
              { label: "Changelog", href: "https://github.com/vickymuller-md/heartland-scoring/blob/main/CHANGELOG.md", external: true },
              { label: "Software Heritage (package)", href: "https://archive.softwareheritage.org/swh:1:snp:bcad7b62a3b296e9fd1074edc88e94f8f9d19319/", external: true },
              { label: "Site source archive", href: "https://archive.softwareheritage.org/swh:1:snp:d065da40d3ef68cdb8bbd33ca18125a712bbc3ce/", external: true },
            ],
          },
        ]}
      />
    </>
  );
}
