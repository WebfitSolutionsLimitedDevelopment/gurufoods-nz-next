// WhatsApp configuration
export const WHATSAPP_NUMBER = "64221299323";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

// Logo
export const LOGO_URL = "https://customer-assets.emergentagent.com/job_62416cca-d046-4848-bda5-c4e608fa1190/artifacts/wbqhupnn_guru%20food%20logo.png";

// Images
export const IMAGES = {
  hero: "https://static.prod-images.emergentagent.com/jobs/62416cca-d046-4848-bda5-c4e608fa1190/images/b55962b6e1c6b7bc384f72f1e8c06a3a61ec9d7e7defc282cae5dec7fa5d03ec.png",
  texture: "https://static.prod-images.emergentagent.com/jobs/62416cca-d046-4848-bda5-c4e608fa1190/images/1c6391e30f6b1068f33346a056055a6cbf8dc204e348ef731306ea7340d14638.png",
  yogurt: "https://static.prod-images.emergentagent.com/jobs/62416cca-d046-4848-bda5-c4e608fa1190/images/4233d18109b2f7fa0bf09c5131c24d88f1c6f61744ed0ed46b1e5be08c1482dd.png",
  ginger: "https://static.prod-images.emergentagent.com/jobs/62416cca-d046-4848-bda5-c4e608fa1190/images/5ea0351c72d54bb7142e2aabaf6748f74cd8bd1a3e5d04fad63a096078c8f7aa.png",
  paneer1: "https://images.unsplash.com/photo-1767114915936-745dd372f1d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBpbmRpYW4lMjBkaXNofGVufDB8fHx8MTc3NTcyNzQ4MHww&ixlib=rb-4.1.0&q=85",
  paneer2: "https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwyfHxwYW5lZXIlMjBpbmRpYW4lMjBkaXNofGVufDB8fHx8MTc3NTcyNzQ4MHww&ixlib=rb-4.1.0&q=85",
  yogurtBowl: "https://images.unsplash.com/photo-1590085345642-cc15c79a9607?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHlvZ3VydCUyMGJlcnJpZXMlMjBib3dsfGVufDB8fHx8MTc3NTcyNzQ4MHww&ixlib=rb-4.1.0&q=85",
  auckland: "https://images.unsplash.com/photo-1595125990323-885cec5217ff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxhdWNrbGFuZCUyMG5ldyUyMHplYWxhbmQlMjBjaXR5fGVufDB8fHx8MTc3NTcyNzQ4MHww&ixlib=rb-4.1.0&q=85",
} as const;

// Navigation links
export const NAV_LINKS = [
  { name: "Products", href: "#products" },
  { name: "Why Us", href: "#why-us" },
  { name: "Inspiration", href: "#inspiration" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
] as const;

// Products data
export const PRODUCTS = [
  {
    name: "Fresh Paneer",
    tagline: "Soft, fresh, perfect for everyday cooking",
    description: "Our signature paneer is made fresh daily using traditional methods. Ideal for tikka, butter masala, palak paneer and more.",
    image: IMAGES.paneer1,
  },
  {
    name: "Creamy Yoghurt",
    tagline: "NZ made, 100% vegetarian, gelatin free, gluten-free",
    description: "Packed with natural goodness. Pairs perfectly with fresh berries, oats, and a sprinkle of happiness. Great for raita, lassi, and desserts.",
    image: IMAGES.yogurt,
  },
  {
    name: "Fresh Cream",
    tagline: "Rich, velvety, perfect for Indian sweets",
    description: "Premium quality cream for your favorite Indian desserts. Makes every dish richer and more indulgent.",
    image: IMAGES.yogurtBowl,
  },
  {
    name: "Ginger Paste",
    tagline: "Freshly ground, aromatic, ready to use",
    description: "Save time without compromising on taste. Our ginger paste is made from fresh ginger, perfect for authentic Indian flavors.",
    image: IMAGES.ginger,
  },
] as const;

// Trust badges
export const TRUST_BADGES = [
  "100% VEGETARIAN",
  "NZ MADE",
  "GELATIN FREE",
  "GLUTEN FREE",
  "TRUSTED LOCALLY",
  "FRESH DAILY",
] as const;

// Food inspiration dishes
export const INSPIRATION_DISHES = [
  { name: "Paneer Tikka", image: IMAGES.paneer1 },
  { name: "Berry Yogurt Bowl", image: IMAGES.yogurtBowl },
  { name: "Palak Paneer", image: IMAGES.paneer2 },
  { name: "Creamy Raita", image: IMAGES.yogurt },
  { name: "Paneer Curry", image: IMAGES.paneer1 },
  { name: "Lassi", image: IMAGES.yogurt },
] as const;
