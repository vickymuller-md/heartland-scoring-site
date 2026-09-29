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
    "TypeScript implementation of the HEARTLAND proposed framework pending validation: ten weighted criteria, 0–18 points, three tiers. Synthetic demonstration; Zod required.",
  openGraph: {
    title: "heartland-scoring · Risk score engine for rural heart failure",
    description:
      "HEARTLAND proposed framework pending validation: ten weighted criteria, 0–18 points, three tiers. Synthetic demonstration with a TypeScript package; Zod required.",
    url: "https://scoring.heartlandprotocol.org",
    siteName: "HEARTLAND Scoring",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "heartland-scoring · Risk score engine for rural heart failure",
    description:
      "TypeScript implementation of the HEARTLAND proposed framework pending validation. Synthetic demonstration, ten weighted criteria; Zod required.",
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
      <body className="min-h-screen flex flex-col bg-terminal font-editorial text-cool antialiased selection:bg-alert/40">
        {children}
      </body>
    </html>
  );
}
