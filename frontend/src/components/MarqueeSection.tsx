import { TRUST_BADGES } from "@/lib/constants";

export function MarqueeSection() {
  const items = [...TRUST_BADGES, ...TRUST_BADGES, ...TRUST_BADGES, ...TRUST_BADGES];
  
  return (
    <section data-testid="marquee-section" className="bg-[#1A1A1A] py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {items.map((item, idx) => (
          <span
            key={idx}
            className="mx-8 text-[#F2A900] font-outfit text-sm tracking-[0.15em] font-medium"
          >
            {item} •
          </span>
        ))}
      </div>
    </section>
  );
}
