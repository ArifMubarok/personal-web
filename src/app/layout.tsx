import type { Metadata } from "next";
import { Alex_Brush, Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import RevealObserver from "@/components/RevealObserver";

const inter = Inter({ subsets: ["latin"], variable: "--nf-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--nf-playfair",
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--nf-mono", display: "swap" });
const brush = Alex_Brush({ subsets: ["latin"], weight: "400", variable: "--nf-brush", display: "swap" });

export const metadata: Metadata = {
  title: "Arif Rahman Mubarok — Software Engineer",
  description:
    "Software Engineer specializing in Malaysia's IRB-compliant e-Invoice integration and large-scale retail systems (POS, ERP, Loyalty) for clients in Indonesia and Malaysia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${mono.variable} ${brush.variable} h-full`}
    >
      <body className="min-h-full">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-full bg-ink px-4 py-3 text-[15px] font-semibold text-bg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
