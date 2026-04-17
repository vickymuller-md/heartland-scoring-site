import { Masthead } from "@/components/landing/masthead";
import { Hero } from "@/components/landing/hero";
import { Abstract } from "@/components/landing/abstract";
import { QuickStart } from "@/components/landing/quickstart";
import { Calculator } from "@/components/landing/calculator";
import { Reference } from "@/components/landing/reference";
import { Colophon } from "@/components/landing/colophon";

export default function Home() {
  return (
    <div className="bg-terminal font-editorial text-cool antialiased">
      <Masthead />
      <Hero />
      <Abstract />
      <QuickStart />
      <Calculator />
      <Reference />
      <Colophon />
    </div>
  );
}
