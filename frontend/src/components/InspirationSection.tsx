import Image from "next/image";
import { INSPIRATION_DISHES } from "@/lib/constants";

export function InspirationSection() {
  return (
    <section id="inspiration" data-testid="inspiration-section" className="py-20 lg:py-32 bg-[#E8DCC4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#F2A900] mb-4">
            Food Inspiration
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-4">
            Create Delicious Moments
          </h2>
          <p className="font-outfit text-[#4B4B4B] text-lg max-w-2xl mx-auto">
            From everyday meals to special occasions, our products bring authentic Indian flavors to your kitchen.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {INSPIRATION_DISHES.map((dish, idx) => (
            <div
              key={idx}
              data-testid={`inspiration-${idx}`}
              className="relative group overflow-hidden cursor-pointer"
            >
              <div className="relative w-full h-48 sm:h-64 lg:h-80">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="font-playfair text-white text-xl p-4">
                  {dish.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
