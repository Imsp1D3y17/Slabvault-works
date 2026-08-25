import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlabVault",
  description: "A neon-dramatic digital vault for graded card collectibles.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col bg-obsidian text-white">
        {/* SlabVault Brand Kit v1.0 fonts — React 19 hoists these <link>
            elements into <head> and dedupes them (see globals.css for why
            this replaces a CSS @import). The next-lines below disable
            no-page-custom-font, a Pages Router rule (warns to move fonts
            into pages/_document.js) that doesn't apply here: this is the
            App Router root layout, so these fonts already load globally. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://api.fontshare.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Fraunces:ital,opsz@1,9..144&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=general-sans@400,500,600&display=swap"
        />
        {children}
      </body>
    </html>
  );
}
