import Image from "next/image";
import { Leaf, Award, Heart, Check } from "lucide-react";
import { IMAGES } from "@/lib/constants";

const benefits = [
  {
    icon: Leaf,
    title: "NZ-Made Freshness",
    description: "Made fresh in New Zealand, not imported. Better taste, better quality, every time."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Crafted with care using traditional methods and the finest local ingredients."
  },
  {
    icon: Heart,
    title: "Community Trusted",
    description: "Loved by Indian households across Auckland. Real families, real trust."
  },
  {
    icon: Check,
    title: "Daily Use Perfect",
    description: "Designed for authentic Indian cooking. From curry nights to weekend feasts."
  },
];

export function WhyChooseSection() {
  return (
    <section id="why-us" data-testid="why-choose-section" className="py-20 lg:py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative w-full h-[500px]">
              <Image
                src={IMAGES.auckland}
                alt="Auckland, New Zealand"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-[#1A1A1A] p-6">
              <p className="text-[#F2A900] font-playfair text-2xl font-semibold">Proudly Made in</p>
              <p className="text-white font-playfair text-3xl font-bold">New Zealand</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#F2A900] mb-4">
              Why Choose Us
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-8 leading-tight">
              Fresh Beats Imported. Always.
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-[#F2A900]/10 rounded-full flex items-center justify-center text-[#F2A900]">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-outfit text-lg font-semibold text-[#1A1A1A] mb-1">{benefit.title}</h3>
                      <p className="font-outfit text-[#4B4B4B] font-light">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
