import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig, person } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], display: "swap" });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"], display: "swap" });

// [ADD CONTENT] — replace with the real production domain once deployed on Vercel.
const siteUrl = "https://usmanazfar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.seo.title,
    template: `%s — ${person.name}`,
  },
  description: siteConfig.seo.description,
  keywords: [
    "Usman Azfar",
    "AI Engineer",
    "Machine Learning Researcher",
    "Edge AI",
    "Dependable AI",
    "Software Engineer",
    "PUCIT",
    "HelmX",
  ],
  authors: [{ name: person.name, url: siteUrl }],
  creator: person.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: person.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.theme.background,
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
