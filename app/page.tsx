import { Masthead, Colophon } from "@heartland/ui";
import { Hero } from "@/components/landing/hero";
import { Abstract } from "@/components/landing/abstract";
import { QuickStart } from "@/components/landing/quickstart";
import { Calculator } from "@/components/landing/calculator";
import { Reference } from "@/components/landing/reference";

export default function Home() {
  return (
    <>
      <Masthead
        currentSite="scoring"
        version="v1.0.0"
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
        <Calculator />
        <Reference />
      </main>
      <Colophon
        currentSite="scoring"
        version="v1.0.0"
        description="Dependency-free TypeScript package implementing the HEARTLAND Risk Score. Ten binary clinical variables, three care tiers, integratable into any EHR or research platform."
        extraBlocks={[
          {
            title: "Package",
            links: [
              { label: "npm install", href: "https://www.npmjs.com/package/heartland-scoring", external: true },
              { label: "GitHub", href: "https://github.com/vickymuller-md/heartland-scoring", external: true },
              { label: "Changelog", href: "https://github.com/vickymuller-md/heartland-scoring/blob/main/CHANGELOG.md", external: true },
            ],
          },
        ]}
      />
    </>
  );
}
