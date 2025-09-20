import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diaspora Gabon Afrique - Campagne Électorale Zone Afrique",
  description: "Site officiel de la campagne électorale pour la représentation de la diaspora gabonaise en Afrique. Ensemble pour une voix forte et unie.",
  keywords: "Gabon, diaspora, Afrique, élections, campagne, représentation",
  authors: [{ name: "Équipe Diaspora Gabon Afrique" }],
  openGraph: {
    title: "Diaspora Gabon Afrique - Campagne Électorale Zone Afrique",
    description: "Site officiel de la campagne électorale pour la représentation de la diaspora gabonaise en Afrique. Ensemble pour une voix forte et unie.",
    type: "website",
    locale: "fr_FR",
    siteName: "Diaspora Gabon Afrique",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diaspora Gabon Afrique - Campagne Électorale Zone Afrique",
    description: "Site officiel de la campagne électorale pour la représentation de la diaspora gabonaise en Afrique. Ensemble pour une voix forte et unie.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
