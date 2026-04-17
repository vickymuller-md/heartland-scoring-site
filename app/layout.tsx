import type { Metadata } from "next";
import { Inter, Geist, Sora, Instrument_Serif, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "@heartland/ui/css/theme.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scoring.heartlandprotocol.org"),
  title: "heartland-scoring · Risk score engine for rural heart failure",
  description:
    "A dependency-free TypeScript package that implements the HEARTLAND Risk Score — ten binary clinical variables, three care tiers, care pathway recommendations. Part of the peer-reviewed HEARTLAND Protocol.",
  openGraph: {
    title: "heartland-scoring · Risk score engine for rural heart failure",
    description:
      "A dependency-free TypeScript package that implements the HEARTLAND Risk Score. Ten variables, three tiers, care pathway recommendations.",
    url: "https://scoring.heartlandprotocol.org",
    siteName: "HEARTLAND Scoring",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "heartland-scoring · Risk score engine for rural heart failure",
    description:
      "A dependency-free TypeScript package implementing the HEARTLAND Risk Score.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        inter.className,
        geist.variable,
        sora.variable,
        instrumentSerif.variable,
        geistMono.variable,
      )}
    >
      <body className="min-h-screen bg-terminal text-cool antialiased selection:bg-alert/40">
        {children}
      </body>
    </html>
  );
}
