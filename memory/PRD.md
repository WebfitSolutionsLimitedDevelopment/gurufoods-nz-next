# Guru Foods NZ - Product Requirements Document

## Project Overview
**Brand:** Guru Foods NZ  
**Type:** Commercial Marketing Website  
**Tech Stack:** Next.js 16 + TypeScript + Tailwind CSS v4  
**Date:** January 2026

## Core Message
- Fresh paneer and yoghurt made in New Zealand
- Suitable for daily Indian cooking
- Trusted by local community
- Better freshness than imported products

## User Personas
1. **Indian Households** - Looking for fresh, quality dairy for daily cooking
2. **Retailers/Store Owners** - Wholesale/bulk enquiries
3. **Community Members** - Seeking NZ-made vegetarian options

## Core Requirements (Static)
- WhatsApp-first enquiry model (+64221299323)
- NZ-made positioning
- Premium, appetising visual design
- Mobile responsive
- SEO-ready with Next.js App Router

## What's Been Implemented (Jan 2026)

### ✅ Phase 1 - MVP Complete (Modern Stack)
- [x] Next.js 16 with App Router & TypeScript
- [x] Tailwind CSS v4
- [x] Hero Section with prominent WhatsApp CTA
- [x] Marquee trust badges (100% Vegetarian, NZ Made, Gelatin Free, etc.)
- [x] Why Choose Us section with trust indicators
- [x] Products Section (Paneer, Yoghurt, Cream, Ginger Paste)
- [x] Food Inspiration gallery
- [x] Where to Buy section
- [x] About section with brand story
- [x] Contact section with dual CTAs (customer + wholesale)
- [x] Footer with navigation links
- [x] Sticky WhatsApp button (bottom-right)
- [x] Mobile responsive navigation with hamburger menu
- [x] Premium design with Playfair Display + Outfit fonts
- [x] Brand colors (Gold #F2A900, Charcoal #1A1A1A, Bone White #FAF9F6)
- [x] Next.js Image optimization
- [x] SEO metadata

### Technical Stack
- Frontend: Next.js 16 + React 19 + TypeScript
- Styling: Tailwind CSS v4
- Icons: Lucide React
- Backend: FastAPI (minimal, for future features)
- Database: MongoDB (configured, not yet used)

## File Structure
```
/app/frontend/src/
├── app/
│   ├── globals.css
│   ├── layout.tsx (fonts, metadata)
│   └── page.tsx (client component)
├── components/
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── MarqueeSection.tsx
│   ├── WhyChooseSection.tsx
│   ├── ProductsSection.tsx
│   ├── InspirationSection.tsx
│   ├── WhereToBuySection.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── StickyWhatsApp.tsx
│   └── index.ts
└── lib/
    └── constants.ts
```

## Prioritized Backlog

### P0 - Critical (None - MVP Complete)

### P1 - High Priority
- [ ] Product catalog management (admin)
- [ ] Store locator with actual locations
- [ ] Google Analytics integration

### P2 - Medium Priority
- [ ] Customer testimonials section
- [ ] Recipe blog/articles
- [ ] Newsletter signup

### P3 - Nice to Have
- [ ] Multi-language support (Hindi/Gujarati)
- [ ] Event calendar for tasting sessions
- [ ] Social media feed integration

## Next Tasks
1. Add actual store locations if provided
2. Consider adding customer testimonials
3. SEO optimization for local NZ search
