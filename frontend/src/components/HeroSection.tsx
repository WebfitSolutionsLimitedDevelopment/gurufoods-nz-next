import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, ChevronDown } from "lucide-react";
import { IMAGES, WHATSAPP_LINK } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center"
    >
      {/* Background Image */}
      <Image
        src={IMAGES.hero}
        alt="Fresh ingredients on kitchen counter"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#F2A900] mb-6">
            Premium NZ Made Products
          </p>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Freshness Rooted in Tradition
          </h1>
          <p className="font-outfit text-lg sm:text-xl text-white/90 font-light mb-8 leading-relaxed">
            New Zealand&apos;s finest paneer, yoghurt, and dairy products. Made fresh daily for Indian households who deserve the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-btn"
              className="inline-flex items-center justify-center gap-2 bg-[#F2A900] text-[#1A1A1A] font-medium px-8 py-4 rounded-full hover:bg-[#D99700] transition-colors text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </Link>
            <Link
              href="#products"
              data-testid="hero-explore-btn"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white font-medium px-8 py-4 rounded-full hover:bg-white hover:text-[#1A1A1A] transition-colors text-lg"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
}
