import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, Check, Heart } from "lucide-react";
import { IMAGES, WHATSAPP_LINK } from "@/lib/constants";

export function WhereToBuySection() {
  return (
    <section id="where-to-buy" data-testid="where-to-buy-section" className="py-20 lg:py-32 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#F2A900] mb-4">
              Where to Buy
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              Find Us Near You
            </h2>
            <p className="font-outfit text-white/80 text-lg mb-8 leading-relaxed">
              Guru Foods products are available at all Indian grocery shops across Auckland. 
              Look for us in the fresh dairy section.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-white">
                <MapPin className="w-5 h-5 text-[#F2A900]" />
                <span className="font-outfit">Available across Auckland</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-[#F2A900]" />
                <span className="font-outfit">All Indian Grocery Shops</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Heart className="w-5 h-5 text-[#F2A900]" />
                <span className="font-outfit">Trusted by Local Community</span>
              </div>
            </div>
            <Link
              href={`${WHATSAPP_LINK}?text=Hi! Where can I buy Guru Foods products near me?`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="where-to-buy-whatsapp-btn"
              className="inline-flex items-center gap-2 bg-[#F2A900] text-[#1A1A1A] font-medium px-8 py-4 rounded-full hover:bg-[#D99700] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Ask for Store Locations
            </Link>
          </div>

          <div className="relative w-full h-[400px]">
            <Image
              src={IMAGES.texture}
              alt="Premium texture"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-playfair text-6xl lg:text-8xl font-bold text-[#F2A900]">NZ</p>
                <p className="font-outfit text-white text-xl tracking-wider">Made Fresh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
