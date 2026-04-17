import { Masthead, Colophon } from "@heartland/ui";
import { Hero } from "@/components/landing/hero";
import { Abstract } from "@/components/landing/abstract";
import { QuickStart } from "@/components/landing/quickstart";
import { Calculator } from "@/components/landing/calculator";
import { Reference } from "@/components/landing/reference";

export default function Home() {
  return (
    <div className="bg-terminal font-editorial text-cool antialiased">
      <Masthead
        currentSite="scoring"
        navItems={[
          { label: "Quickstart", href: "#quickstart" },
          { label: "Calculator", href: "#calculator" },
        ]}
        cta={{
          label: "View on GitHub",
          href: "https://github.com/vickymuller-md/heartland-scoring",
          external: true,
        }}
      />
      <Hero />
      <Abstract />
      <QuickStart />
      <Calculator />
      <Reference />
      <Colophon
        currentSite="scoring"
        description="Dependency-free TypeScript package implementing the HEARTLAND Risk Score. Ten binary clinical variables, three care tiers, integratable into any EHR or research platform."
        extraBlocks={[
          {
            title: "Package",
            links: [
              {
                label: "npm install",
                href: "https://www.npmjs.com/package/heartland-scoring",
                external: true,
              },
              {
                label: "GitHub",
                href: "https://github.com/vickymuller-md/heartland-scoring",
                external: true,
              },
              {
                label: "Changelog",
                href: "https://github.com/vickymuller-md/heartland-scoring/blob/main/CHANGELOG.md",
                external: true,
              },
            ],
          },
        ]}
      />
    </div>
  );
}
