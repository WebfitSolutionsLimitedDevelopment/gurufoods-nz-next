"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { LOGO_URL, WHATSAPP_LINK, NAV_LINKS } from "@/lib/constants";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      data-testid="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-effect shadow-sm border-b border-[#1A1A1A]/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" data-testid="logo-link" className="relative h-14 w-28">
            <Image
              src={LOGO_URL}
              alt="Guru Foods NZ"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                data-testid={`nav-${link.name.toLowerCase().replace(" ", "-")}`}
                className="font-outfit text-sm font-medium text-[#1A1A1A] hover:text-[#F2A900] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-whatsapp-btn"
              className="inline-flex items-center gap-2 bg-[#F2A900] text-[#1A1A1A] font-medium px-6 py-3 rounded-full hover:bg-[#D99700] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-btn"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-[#1A1A1A] transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-0.5 bg-[#1A1A1A] transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-[#1A1A1A] transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div data-testid="mobile-menu" className="md:hidden py-4 border-t border-[#1A1A1A]/10 bg-[#FAF9F6]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 font-outfit text-[#1A1A1A] hover:text-[#F2A900] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#F2A900] text-[#1A1A1A] font-medium px-6 py-3 rounded-full"
            >
              <MessageCircle className="w-4 h-4" />
              Order Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
