import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const certMono = JetBrains_Mono({
  variable: "--font-cert-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SlabVault",
  description: "A neon-dramatic digital vault for graded card collectibles.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${certMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-white">
        {children}
      </body>
    </html>
  );
}
