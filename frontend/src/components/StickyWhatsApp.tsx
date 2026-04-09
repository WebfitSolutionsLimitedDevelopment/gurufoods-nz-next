import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export function StickyWhatsApp() {
  return (
    <Link
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="sticky-whatsapp-btn"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" fill="white" />
    </Link>
  );
}
