import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { PRODUCTS, WHATSAPP_LINK } from "@/lib/constants";

export function ProductsSection() {
  return (
    <section id="products" data-testid="products-section" className="py-20 lg:py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#F2A900] mb-4">
            Our Products
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A]">
            Quality You Can Taste
          </h2>
        </div>

        <div className="space-y-24">
          {PRODUCTS.map((product, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={idx}
                data-testid={`product-${product.name.toLowerCase().replace(" ", "-")}`}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div className={isReversed ? "lg:order-2" : ""}>
                  <div className="relative w-full h-[400px] lg:h-[500px] hover-scale">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={isReversed ? "lg:order-1" : ""}>
                  <h3 className="font-playfair text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-4">
                    {product.name}
                  </h3>
                  <p className="text-[#F2A900] font-outfit font-medium text-lg mb-4">
                    {product.tagline}
                  </p>
                  <p className="font-outfit text-[#4B4B4B] font-light text-lg mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  <Link
                    href={`${WHATSAPP_LINK}?text=Hi! I'm interested in ${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`product-${product.name.toLowerCase().replace(" ", "-")}-cta`}
                    className="inline-flex items-center gap-2 bg-[#F2A900] text-[#1A1A1A] font-medium px-8 py-4 rounded-full hover:bg-[#D99700] transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enquire on WhatsApp
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
