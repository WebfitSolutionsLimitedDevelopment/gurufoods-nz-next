import { useState, useEffect } from "react";
import "@/App.css";
import { MessageCircle, ChevronDown, MapPin, Phone, Mail, ArrowRight, Check, Leaf, Award, Heart } from "lucide-react";

const WHATSAPP_NUMBER = "64221299323";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const LOGO_URL = "https://customer-assets.emergentagent.com/job_62416cca-d046-4848-bda5-c4e608fa1190/artifacts/wbqhupnn_guru%20food%20logo.png";

// Images from design guidelines
const IMAGES = {
  hero: "https://static.prod-images.emergentagent.com/jobs/62416cca-d046-4848-bda5-c4e608fa1190/images/b55962b6e1c6b7bc384f72f1e8c06a3a61ec9d7e7defc282cae5dec7fa5d03ec.png",
  texture: "https://static.prod-images.emergentagent.com/jobs/62416cca-d046-4848-bda5-c4e608fa1190/images/1c6391e30f6b1068f33346a056055a6cbf8dc204e348ef731306ea7340d14638.png",
  yogurt: "https://static.prod-images.emergentagent.com/jobs/62416cca-d046-4848-bda5-c4e608fa1190/images/4233d18109b2f7fa0bf09c5131c24d88f1c6f61744ed0ed46b1e5be08c1482dd.png",
  ginger: "https://static.prod-images.emergentagent.com/jobs/62416cca-d046-4848-bda5-c4e608fa1190/images/5ea0351c72d54bb7142e2aabaf6748f74cd8bd1a3e5d04fad63a096078c8f7aa.png",
  paneer1: "https://images.unsplash.com/photo-1767114915936-745dd372f1d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBpbmRpYW4lMjBkaXNofGVufDB8fHx8MTc3NTcyNzQ4MHww&ixlib=rb-4.1.0&q=85",
  paneer2: "https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwyfHxwYW5lZXIlMjBpbmRpYW4lMjBkaXNofGVufDB8fHx8MTc3NTcyNzQ4MHww&ixlib=rb-4.1.0&q=85",
  yogurtBowl: "https://images.unsplash.com/photo-1590085345642-cc15c79a9607?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHlvZ3VydCUyMGJlcnJpZXMlMjBib3dsfGVufDB8fHx8MTc3NTcyNzQ4MHww&ixlib=rb-4.1.0&q=85",
  auckland: "https://images.unsplash.com/photo-1595125990323-885cec5217ff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxhdWNrbGFuZCUyMG5ldyUyMHplYWxhbmQlMjBjaXR5fGVufDB8fHx8MTc3NTcyNzQ4MHww&ixlib=rb-4.1.0&q=85",
};

// Navigation Component
const Navigation = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Why Us", href: "#why-us" },
    { name: "Inspiration", href: "#inspiration" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

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
          <a href="#" data-testid="logo-link" className="flex items-center">
            <img
              src={LOGO_URL}
              alt="Guru Foods NZ"
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-testid={`nav-${link.name.toLowerCase().replace(" ", "-")}`}
                className="font-outfit text-sm font-medium text-[#1A1A1A] hover:text-[#F2A900] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-whatsapp-btn"
              className="inline-flex items-center gap-2 bg-[#F2A900] text-[#1A1A1A] font-medium px-6 py-3 rounded-full hover:bg-[#D99700] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-btn"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-[#1A1A1A] transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-full h-0.5 bg-[#1A1A1A] transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-full h-0.5 bg-[#1A1A1A] transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div data-testid="mobile-menu" className="md:hidden py-4 border-t border-[#1A1A1A]/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 font-outfit text-[#1A1A1A] hover:text-[#F2A900] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#F2A900] text-[#1A1A1A] font-medium px-6 py-3 rounded-full"
            >
              <MessageCircle className="w-4 h-4" />
              Order Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${IMAGES.hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#F2A900] mb-6">
            Premium NZ Made Products
          </p>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Freshness Rooted in Tradition
          </h1>
          <p className="font-outfit text-lg sm:text-xl text-white/90 font-light mb-8 leading-relaxed">
            New Zealand's finest paneer, yoghurt, and dairy products. Made fresh daily for Indian households who deserve the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-btn"
              className="inline-flex items-center justify-center gap-2 bg-[#F2A900] text-[#1A1A1A] font-medium px-8 py-4 rounded-full hover:bg-[#D99700] transition-colors text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </a>
            <a
              href="#products"
              data-testid="hero-explore-btn"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white font-medium px-8 py-4 rounded-full hover:bg-white hover:text-[#1A1A1A] transition-colors text-lg"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};

// Marquee Section
const MarqueeSection = () => {
  const items = [
    "100% VEGETARIAN",
    "NZ MADE",
    "GELATIN FREE",
    "GLUTEN FREE",
    "TRUSTED LOCALLY",
    "FRESH DAILY",
  ];

  return (
    <section data-testid="marquee-section" className="bg-[#1A1A1A] py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
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
};

// Why Choose Us Section
const WhyChooseSection = () => {
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "NZ-Made Freshness",
      description: "Made fresh in New Zealand, not imported. Better taste, better quality, every time."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Crafted with care using traditional methods and the finest local ingredients."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Trusted",
      description: "Loved by Indian households across Auckland. Real families, real trust."
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: "Daily Use Perfect",
      description: "Designed for authentic Indian cooking. From curry nights to weekend feasts."
    },
  ];

  return (
    <section id="why-us" data-testid="why-choose-section" className="py-20 lg:py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <img
              src={IMAGES.auckland}
              alt="Auckland, New Zealand"
              className="w-full h-[500px] object-cover"
            />
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
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#F2A900]/10 rounded-full flex items-center justify-center text-[#F2A900]">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-outfit text-lg font-semibold text-[#1A1A1A] mb-1">{benefit.title}</h3>
                    <p className="font-outfit text-[#4B4B4B] font-light">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Products Section
const ProductsSection = () => {
  const products = [
    {
      name: "Fresh Paneer",
      tagline: "Soft, fresh, perfect for everyday cooking",
      description: "Our signature paneer is made fresh daily using traditional methods. Ideal for tikka, butter masala, palak paneer and more.",
      image: IMAGES.paneer1,
      reverse: false,
    },
    {
      name: "Creamy Yoghurt",
      tagline: "NZ made, 100% vegetarian, gelatin free, gluten-free",
      description: "Packed with natural goodness. Pairs perfectly with fresh berries, oats, and a sprinkle of happiness. Great for raita, lassi, and desserts.",
      image: IMAGES.yogurt,
      reverse: true,
    },
    {
      name: "Fresh Cream",
      tagline: "Rich, velvety, perfect for Indian sweets",
      description: "Premium quality cream for your favorite Indian desserts. Makes every dish richer and more indulgent.",
      image: IMAGES.yogurtBowl,
      reverse: false,
    },
    {
      name: "Ginger Paste",
      tagline: "Freshly ground, aromatic, ready to use",
      description: "Save time without compromising on taste. Our ginger paste is made from fresh ginger, perfect for authentic Indian flavors.",
      image: IMAGES.ginger,
      reverse: true,
    },
  ];

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
          {products.map((product, idx) => (
            <div
              key={idx}
              data-testid={`product-${product.name.toLowerCase().replace(" ", "-")}`}
              className={`grid lg:grid-cols-2 gap-12 items-center ${product.reverse ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className={`${product.reverse ? "lg:order-2" : ""}`}>
                <div className="relative overflow-hidden hover-scale">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${product.reverse ? "lg:order-1" : ""}`}>
                <h3 className="font-playfair text-3xl sm:text-4xl font-semibold text-[#1A1A1A] mb-4">
                  {product.name}
                </h3>
                <p className="text-[#F2A900] font-outfit font-medium text-lg mb-4">
                  {product.tagline}
                </p>
                <p className="font-outfit text-[#4B4B4B] font-light text-lg mb-8 leading-relaxed">
                  {product.description}
                </p>
                <a
                  href={`${WHATSAPP_LINK}?text=Hi! I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`product-${product.name.toLowerCase().replace(" ", "-")}-cta`}
                  className="inline-flex items-center gap-2 bg-[#F2A900] text-[#1A1A1A] font-medium px-8 py-4 rounded-full hover:bg-[#D99700] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Food Inspiration Section
const InspirationSection = () => {
  const dishes = [
    { name: "Paneer Tikka", image: IMAGES.paneer1 },
    { name: "Berry Yogurt Bowl", image: IMAGES.yogurtBowl },
    { name: "Palak Paneer", image: IMAGES.paneer2 },
    { name: "Creamy Raita", image: IMAGES.yogurt },
    { name: "Paneer Curry", image: IMAGES.paneer1 },
    { name: "Lassi", image: IMAGES.yogurt },
  ];

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
          {dishes.map((dish, idx) => (
            <div
              key={idx}
              data-testid={`inspiration-${idx}`}
              className="relative group overflow-hidden cursor-pointer"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-48 sm:h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                <p className="font-playfair text-white text-xl p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {dish.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Where to Buy Section
const WhereToBuySection = () => {
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
            <a
              href={`${WHATSAPP_LINK}?text=Hi! Where can I buy Guru Foods products near me?`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="where-to-buy-whatsapp-btn"
              className="inline-flex items-center gap-2 bg-[#F2A900] text-[#1A1A1A] font-medium px-8 py-4 rounded-full hover:bg-[#D99700] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Ask for Store Locations
            </a>
          </div>

          <div className="relative">
            <div
              className="w-full h-[400px] bg-cover bg-center"
              style={{ backgroundImage: `url(${IMAGES.texture})` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-playfair text-6xl lg:text-8xl font-bold text-[#F2A900]">NZ</p>
                  <p className="font-outfit text-white text-xl tracking-wider">Made Fresh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
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

          <div className="relative">
            <img
              src={IMAGES.paneer2}
              alt="Guru Foods Products"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
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
          Whether you're a customer, retailer, or want to partner with us - we'd love to hear from you. 
          All enquiries welcome on WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-whatsapp-btn"
            className="inline-flex items-center justify-center gap-2 bg-[#F2A900] text-[#1A1A1A] font-medium px-8 py-4 rounded-full hover:bg-[#D99700] transition-colors text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
          <a
            href={`${WHATSAPP_LINK}?text=Hi! I'm interested in bulk/wholesale pricing for my store.`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-wholesale-btn"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-[#1A1A1A] border border-[#1A1A1A] font-medium px-8 py-4 rounded-full hover:bg-[#1A1A1A] hover:text-white transition-colors text-lg"
          >
            Wholesale Enquiry
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center text-[#4B4B4B]">
          <a href="tel:+64221299323" className="flex items-center justify-center gap-2 hover:text-[#F2A900] transition-colors">
            <Phone className="w-5 h-5" />
            <span className="font-outfit">+64 22 129 9323</span>
          </a>
          <a href="mailto:info@gurufoods.co.nz" className="flex items-center justify-center gap-2 hover:text-[#F2A900] transition-colors">
            <Mail className="w-5 h-5" />
            <span className="font-outfit">info@gurufoods.co.nz</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-[#1A1A1A] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <img src={LOGO_URL} alt="Guru Foods NZ" className="h-16 w-auto brightness-0 invert" />
            <p className="font-outfit text-white/60 text-sm mt-4">
              Premium NZ-made dairy products for Indian households.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#products" className="font-outfit text-white/80 hover:text-[#F2A900] transition-colors">Products</a>
              <a href="#why-us" className="font-outfit text-white/80 hover:text-[#F2A900] transition-colors">Why Us</a>
              <a href="#about" className="font-outfit text-white/80 hover:text-[#F2A900] transition-colors">About</a>
              <a href="#contact" className="font-outfit text-white/80 hover:text-[#F2A900] transition-colors">Contact</a>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-right">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp-btn"
              className="inline-flex items-center gap-2 bg-[#F2A900] text-[#1A1A1A] font-medium px-6 py-3 rounded-full hover:bg-[#D99700] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Order Now
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="font-outfit text-white/40 text-sm">
            © {new Date().getFullYear()} Guru Foods NZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Sticky WhatsApp Button
const StickyWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="sticky-whatsapp-btn"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-gold"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" fill="white" />
    </a>
  );
};

// Main App Component
function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App bg-[#FAF9F6]">
      <Navigation scrolled={scrolled} />
      <HeroSection />
      <MarqueeSection />
      <WhyChooseSection />
      <ProductsSection />
      <InspirationSection />
      <WhereToBuySection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}

export default App;
