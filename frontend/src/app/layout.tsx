import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guru Foods NZ | Fresh Paneer & Yoghurt Made in New Zealand",
  description: "Premium NZ-made paneer, yoghurt, cream and ginger paste. 100% vegetarian, gelatin-free, gluten-free. Fresh dairy products for Indian households in Auckland.",
  keywords: ["paneer nz", "yoghurt auckland", "indian dairy", "fresh paneer", "vegetarian dairy", "guru foods"],
  openGraph: {
    title: "Guru Foods NZ | Fresh Paneer & Yoghurt",
    description: "Premium NZ-made dairy products for Indian households",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
