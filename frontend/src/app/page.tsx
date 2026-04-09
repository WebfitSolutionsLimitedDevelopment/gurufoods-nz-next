"use client";

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ProductsSection } from "@/components/ProductsSection";
import { InspirationSection } from "@/components/InspirationSection";
import { WhereToBuySection } from "@/components/WhereToBuySection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <main className="bg-[#FAF9F6]">
      <Navigation />
      <HeroSection />
      <MarqueeSection />
      <WhyChooseSection />
      <ProductsSection />
      <InspirationSection />
      <WhereToBuySection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}
