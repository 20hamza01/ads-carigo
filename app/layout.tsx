import type { Metadata } from "next";
import { Noto_Kufi_Arabic, Play } from "next/font/google";
import "./globals.css";

const play = Play({
  variable: "--font-play",
  weight: ["400", "700"],
  subsets: ["cyrillic"],
});

const noto = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title:
    "Carigo | Louez une voiture à Casablanca - Aéroport & partout en ville.",
  description:
    "Louez une voiture à Casablanca, Aéroport & partout en ville. Explorer le Maroc est maintenant simple et rapide – Rent a Car in Casablanca, Airport & Citywide. Exploring Morocco is now fast and easy.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${play.variable} ${noto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
