import Image from "next/image";
import { IMAGES } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" data-testid="about-section" className="py-20 lg:py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#F2A900] mb-4">
              Our Story
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-6 leading-tight">
              Bringing Authentic Taste to New Zealand
            </h2>
            <p className="font-outfit text-[#4B4B4B] text-lg mb-6 leading-relaxed">
              Guru Foods is a New Zealand based company specializing in the production of high quality paneer and yogurt. 
              We understand the importance of fresh, authentic dairy products in Indian cuisine.
            </p>
            <p className="font-outfit text-[#4B4B4B] text-lg mb-8 leading-relaxed">
              Our mission is simple: to serve Indian households in New Zealand with products that taste like home. 
              No imports, no compromises - just fresh, quality dairy made right here in Aotearoa.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-[#1A1A1A]/10 pt-8">
              <div>
                <p className="font-playfair text-3xl font-bold text-[#F2A900]">100%</p>
                <p className="font-outfit text-[#4B4B4B] text-sm">Vegetarian</p>
              </div>
              <div>
                <p className="font-playfair text-3xl font-bold text-[#F2A900]">Fresh</p>
                <p className="font-outfit text-[#4B4B4B] text-sm">Made Daily</p>
              </div>
              <div>
                <p className="font-playfair text-3xl font-bold text-[#F2A900]">NZ</p>
                <p className="font-outfit text-[#4B4B4B] text-sm">Made Local</p>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[500px]">
            <Image
              src={IMAGES.paneer2}
              alt="Guru Foods Products"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
