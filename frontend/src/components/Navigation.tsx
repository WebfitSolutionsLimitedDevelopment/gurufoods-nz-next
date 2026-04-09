"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Menu, X } from "lucide-react";
import { LOGO_URL, WHATSAPP_LINK, NAV_LINKS } from "@/lib/constants";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
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
            type="button"
            data-testid="mobile-menu-btn"
            className="md:hidden p-2 z-50"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1A1A1A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1A1A1A]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          data-testid="mobile-menu" 
          className="md:hidden absolute top-20 left-0 right-0 bg-[#FAF9F6] border-t border-[#1A1A1A]/10 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="block py-3 font-outfit text-lg text-[#1A1A1A] hover:text-[#F2A900] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center gap-2 mt-4 bg-[#F2A900] text-[#1A1A1A] font-medium px-6 py-3 rounded-full"
            >
              <MessageCircle className="w-4 h-4" />
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
