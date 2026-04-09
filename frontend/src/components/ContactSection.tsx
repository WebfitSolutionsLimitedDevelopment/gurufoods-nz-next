import Link from "next/link";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" data-testid="contact-section" className="py-20 lg:py-32 bg-[#E8DCC4]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#F2A900] mb-4">
          Get in Touch
        </p>
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-6">
          Ready to Order?
        </h2>
        <p className="font-outfit text-[#4B4B4B] text-lg mb-8 max-w-2xl mx-auto">
          Whether you&apos;re a customer, retailer, or want to partner with us - we&apos;d love to hear from you. 
          All enquiries welcome on WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-whatsapp-btn"
            className="inline-flex items-center justify-center gap-2 bg-[#F2A900] text-[#1A1A1A] font-medium px-8 py-4 rounded-full hover:bg-[#D99700] transition-colors text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </Link>
          <Link
            href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hi! I'm interested in bulk/wholesale pricing for my store.")}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-wholesale-btn"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-[#1A1A1A] border border-[#1A1A1A] font-medium px-8 py-4 rounded-full hover:bg-[#1A1A1A] hover:text-white transition-colors text-lg"
          >
            Wholesale Enquiry
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center text-[#4B4B4B]">
          <Link href="tel:+64221299323" className="flex items-center justify-center gap-2 hover:text-[#F2A900] transition-colors">
            <Phone className="w-5 h-5" />
            <span className="font-outfit">+64 22 129 9323</span>
          </Link>
          <Link href="mailto:info@gurufoods.co.nz" className="flex items-center justify-center gap-2 hover:text-[#F2A900] transition-colors">
            <Mail className="w-5 h-5" />
            <span className="font-outfit">info@gurufoods.co.nz</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
