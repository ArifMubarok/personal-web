import type { Metadata } from "next";
import "./globals.css";
import RevealObserver from "@/components/RevealObserver";

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
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        <a
          href="#main-content"
          className="fixed left-4 z-[100] -translate-y-20 px-4 py-3 text-[15px] font-medium transition-transform focus:translate-y-0"
          style={{ top: 16, background: "var(--ink)", color: "var(--accent-ink)" }}
        >
          Skip to content
        </a>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
