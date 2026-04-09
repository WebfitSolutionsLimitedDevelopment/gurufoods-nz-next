import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { LOGO_URL, WHATSAPP_LINK } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer data-testid="footer" className="bg-[#1A1A1A] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <div className="relative h-16 w-32">
              <Image
                src={LOGO_URL}
                alt="Guru Foods NZ"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="font-outfit text-white/60 text-sm mt-4">
              Premium NZ-made dairy products for Indian households.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#products" className="font-outfit text-white/80 hover:text-[#F2A900] transition-colors">Products</Link>
              <Link href="#why-us" className="font-outfit text-white/80 hover:text-[#F2A900] transition-colors">Why Us</Link>
              <Link href="#about" className="font-outfit text-white/80 hover:text-[#F2A900] transition-colors">About</Link>
              <Link href="#contact" className="font-outfit text-white/80 hover:text-[#F2A900] transition-colors">Contact</Link>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-right">
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp-btn"
              className="inline-flex items-center gap-2 bg-[#F2A900] text-[#1A1A1A] font-medium px-6 py-3 rounded-full hover:bg-[#D99700] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Order Now
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="font-outfit text-white/40 text-sm">
            © {currentYear} Guru Foods NZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
