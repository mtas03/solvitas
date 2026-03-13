import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solvitas.AI | You describe the vision. We deploy the reality.",
  description:
    "Solvitas.AI is an elite team of AI experts vibe-coding bespoke micro-apps and full-stack solutions at high speed. No templates. No corporate lag. Just clean, production-grade code.",
  keywords: [
    "AI consultancy",
    "vibe coding",
    "custom micro-apps",
    "Claude Code development",
    "bespoke software",
  ],
  themeColor: "#000000",
  openGraph: {
    title: "Solvitas.AI | You describe the vision. We deploy the reality.",
    description:
      "Solvitas.AI is an elite team of AI experts vibe-coding bespoke micro-apps and full-stack solutions at high speed. No templates. No corporate lag. Just clean, production-grade code.",
    locale: "en_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvitas.AI | You describe the vision. We deploy the reality.",
    description:
      "Solvitas.AI is an elite team of AI experts vibe-coding bespoke micro-apps and full-stack solutions at high speed. No templates. No corporate lag. Just clean, production-grade code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased bg-white text-zinc-900`}>
        {/* Grain overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[9999]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            opacity: 0.035,
          }}
        />
        {children}
      </body>
    </html>
  );
}
