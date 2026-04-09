import {
  Navigation,
  HeroSection,
  MarqueeSection,
  WhyChooseSection,
  ProductsSection,
  InspirationSection,
  WhereToBuySection,
  AboutSection,
  ContactSection,
  Footer,
  StickyWhatsApp,
} from "@/components";

export default function Home() {
  return (
    <main className="bg-[--color-bone]">
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
