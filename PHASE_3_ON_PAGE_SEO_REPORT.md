# Rider Call Taxi – Phase 3: Advanced On-Page SEO Implementation Report

**Website:** [https://ridercalltaxi.com/](https://ridercalltaxi.com/)  
**Business:** Rider Call Taxi  
**Headquarters:** 757A/7, First Floor, MPM Complex, NGO Colony, Rajapalayam Main Road (Opp. Panchayat Union Office), Sankarankovil – 627756, Tenkasi District, Tamil Nadu, India  
**Date:** November 23, 2026  
**Status:** Completed & Live Verified in Angular Dev Server  

---

## 1. Executive Summary

In Phase 3 of the **Rider Call Taxi Master SEO Project**, we executed comprehensive on-page optimization across all public pages of the Angular application. Every route now features a unique SEO title, a unique high-conversion meta description, a single keyword-targeted `<h1>`, a strict semantic heading hierarchy (`H1 -> H2 -> H3 -> H4`), contextual internal links, descriptive image alt attributes, and native Tamil keyword integration.

Additionally, all legacy `₹14/KM` promotional copy across the hero section, trust badges, inquiry forms, and multi-tier footer has been harmonized with the client's official slab tariff structure:
- **Sedan:** ₹120 Base Fare (first 3 km); Day Rate (7 AM – 7 PM): ₹28/km; Night Rate (7 PM – 7 AM): ₹30/km.
- **Sedan Round Trip:** Day Package ₹450 (first 20 km, ₹15/km, ₹80/hr waiting); Night Package ₹530 (first 20 km, ₹17/km, ₹100/hr waiting).
- **SUV / MUV:** ₹180 Base Fare (first 3 km); Day Rate: ₹36/km; Night Rate: ₹38/km.
- **SUV Round Trip:** Day Package ₹600 (first 20 km, ₹19/km, ₹100/hr waiting); Night Package ₹680 (first 20 km, ₹21/km, ₹120/hr waiting).

---

## 2. Keyword Mapping & Route Metadata Table

| Route | Primary Target Keywords | SEO Page Title | Meta Description | Canonical URL | Primary H1 (English / Tamil) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`/` (Homepage)** | `Call Taxi in Sankarankovil`, `Taxi Service in Sankarankovil`, `Sankarankovil Cab Service` | Rider Call Taxi \| Call Taxi Service in Sankarankovil | Book Rider Call Taxi in Sankarankovil for local travel, outstation trips, one-way drops, airport transfers and comfortable taxi services. Call or WhatsApp us 24/7. | `https://ridercalltaxi.com/` | `Reliable & 24/7 Call Taxi Service in Sankarankovil` / `சங்கரன்கோவிலில் நம்பகமான 24/7 கால் டாக்ஸி சேவை` |
| **`/services`** | `Local Taxi Service`, `Outstation Taxi Service`, `One Way Drop Taxi`, `Round Trip Taxi`, `Airport Taxi`, `Car Rental`, `Corporate Taxi`, `Tour Packages` | Taxi Services in Sankarankovil \| Local, Outstation & Airport Cabs | Comprehensive 24/7 taxi services by Rider Call Taxi: local rides, one-way drop taxis, round trips, Madurai airport transfers, corporate travel & temple tour packages. | `https://ridercalltaxi.com/services` | `Comprehensive Taxi Services in Sankarankovil & Tamil Nadu` / `சங்கரன்கோவில் மற்றும் தமிழ்நாடு முழுவதும் விரிவான டாக்ஸி சேவைகள்` |
| **`/pricing`** | `Taxi Fare from Sankarankovil`, `One Way Taxi Fare`, `Outstation Taxi Tariff` | Taxi Fare from Sankarankovil \| Outstation & One Way Taxi Tariff | Transparent taxi fare from Sankarankovil. Sedan rates from ₹120 base (first 3 km) then ₹28/km Day / ₹30/km Night. 20 KM round trip packages from ₹450 with zero surge fees. | `https://ridercalltaxi.com/pricing` | `Transparent & Affordable Taxi Fares from Sankarankovil` / `நேர்மையான, வெளிப்படையான சங்கரன்கோவில் டாக்ஸி கட்டணம்` |
| **`/fleet`** | `Taxi Cars in Sankarankovil`, `Car Rental with Driver` | Taxi Cars in Sankarankovil \| Commercial Car Rental with Driver | Clean, sanitized commercial taxi cars in Sankarankovil with 360° interactive view. Tata Altroz, Swift Dzire, Toyota Glanza, Ertiga 7-seater, and Tavera 9-seater MUV. | `https://ridercalltaxi.com/fleet` | `Taxi Cars in Sankarankovil \| Commercial Car Rental with Driver` / `சங்கரன்கோவில் வாடகை கார்கள் \| அனுபவமிக்க ஓட்டுநருடன் சொகுசு டாக்ஸி` |
| **`/about`** | `Rider Call Taxi Sankarankovil`, `Top Call Taxi in Sankarankovil` | About Us \| Rider Call Taxi Sankarankovil – Reliable Travel Partner | Meet Rider Call Taxi, Sankarankovil's trusted 24/7 cab service. Police-verified drivers, 5-star NCAP safety ratings, transparent per-km billing, and hospitality across Tamil Nadu. | `https://ridercalltaxi.com/about` | `About Rider Call Taxi \| Top Call Taxi in Sankarankovil` / `சங்கரன்கோவிலின் முதன்மை கால் டாக்ஸி சேவை \| ரைடர் கால் டாக்ஸி` |
| **`/contact`** | `Rider Call Taxi Contact Number`, `Call Taxi Booking Sankarankovil` | Rider Call Taxi Contact Number \| 24/7 Call Taxi Booking Sankarankovil | Contact Rider Call Taxi Sankarankovil. 24/7 dispatch hotlines: +91 9363015586 / +91 9363715586. WhatsApp booking available. Office at MPM Complex, NGO Colony, Rajapalayam Main Road. | `https://ridercalltaxi.com/contact` | `Rider Call Taxi Contact Number \| 24/7 Call Taxi Booking Sankarankovil` / `ரைடர் கால் டாக்ஸி தொடர்பு எண் \| 24/7 டாக்ஸி முன்பதிவு சங்கரன்கோவில்` |

---

## 3. Heading Structure & Semantic Fixes

Before Phase 3, several pages jumped directly from `<h1>` to `<h3>` or from `<h3>` to `<h5>`, violating accessibility and search engine heading hierarchies. The following structural improvements were implemented:

1. **Services Page (`/services`):**
   - Added `<h2>`: `Local Taxi, Outstation Cabs & Airport Drop Services` (`உள்ளூர், வெளியூர் மற்றும் ஏர்போர்ட் டாக்ஸி சேவைகள்`) before the service grid.
   - Changed feature list headers from `<h5>` to `<h4>`: `Included In This Service` (`இச்சேவையில் அடங்கிய வசதிகள்`).
   - Added contextual internal links banner linking to `/pricing`, `/fleet`, and `/contact`.
2. **Pricing Page (`/pricing`):**
   - Added `<h2>`: `Detailed Taxi Tariff & Vehicle Rate Cards` (`வாகன வாரியான டாக்ஸி கட்டண அட்டவணை`) above the category cards.
   - Cleaned heading hierarchy for the official dual-card structure (`Sedan Rates` and `SUV Rates`).
3. **Fleet Page (`/fleet`):**
   - Updated `<h1>` to target `Taxi Cars in Sankarankovil | Commercial Car Rental with Driver`.
   - Maintained verified image alt tags (`Rider Call Taxi [Car Name] ([Reg No]) cab service in Sankarankovil`).
   - Added contextual internal links banner linking to `/pricing` and `/contact`.
4. **Contact Page (`/contact`):**
   - Updated `<h1>` to target `Rider Call Taxi Contact Number | 24/7 Call Taxi Booking Sankarankovil`.
   - Added `<h2>`: `24/7 Dispatch Hotlines & Office Contact Channels` (`24/7 தொலைபேசி & வாட்ஸ்அப் உதவி மையம்`) before the contact cards grid.
5. **About Page (`/about`):**
   - Updated `<h1>` to target `About Rider Call Taxi | Top Call Taxi in Sankarankovil`.

---

## 4. Tamil SEO Integration

Tamil keywords are natively integrated into the bilingual `TranslationService`:
- `சங்கரன்கோவில் கால் டாக்ஸி` (Sankarankovil Call Taxi)
- `சங்கரன்கோவில் டாக்ஸி சேவை` (Sankarankovil Taxi Service)
- `தென்காசி கார் வாடகை` (Tenkasi Car Rental)
- `திருநெல்வேலி கால் டாக்ஸி` (Tirunelveli Call Taxi)
- `ராஜபாளையம் டாக்ஸி` (Rajapalayam Taxi)

When the user switches language via the interactive toggle, all semantic headings (`<h1>`, `<h2>`, `<h3>`), navigation links, badges, and trust indicators seamlessly reflect accurate Tamil search terms without keyword stuffing.

---

## 5. Elimination of Legacy Tariff Copy

All traces of obsolete `₹14/KM` promotional copy were updated across the application:
1. **Homepage Hero Trust Badge:**
   - English: `From ₹120` • `Base Rate (First 3 KM)` (previously `1 KM = ₹14`).
   - Tamil: `₹120 முதல்` • `குறைந்த ஆரம்ப கட்டணம்`.
2. **Hero Subtitle & Booking Form:**
   - Replaced fixed ₹14 text with transparent, slab-based fare descriptions.
3. **Footer Badges:**
   - Line 42: `💰 ₹120 Base Rate (3 KM)` (previously `₹14/KM`).
   - Line 105: `💰 ₹120 Base Tariff (3 KM)` (previously `₹14/KM`).

---

## 6. Live Validation & Browser Testing

Using Chrome DevTools MCP:
- Navigated across all 6 routes (`/`, `/services`, `/pricing`, `/fleet`, `/about`, `/contact`).
- Verified:
  - Each route returns `h1Count === 1`.
  - Document titles match route configuration.
  - Single normalized `<link rel="canonical">` per page.
  - Zero images missing `alt` attributes (`imagesWithoutAlt === 0`).
  - Dynamic JSON-LD `#route-dynamic-jsonld` updates with `BreadcrumbList` on every route.
  - Mobile viewport (375x667) verifies glass-card transparency, Three.js 3D background animation visibility, responsive click targets, and bottom floating action bars.

---

## 7. Changed Files Summary

1. `src/index.html` — Updated homepage title, meta description, keywords, Open Graph, Twitter cards, and geo meta tags.
2. `src/app/app.routes.ts` — Route-level SEO definitions, dynamic titles, meta descriptions, keywords, canonical URLs, and BreadcrumbList schemas.
3. `src/app/shared/services/translation.service.ts` — Updated hero trust badges, subtitles, form perks, and footer copy in both English and Tamil.
4. `src/app/core/footer/footer.component.html` — Updated tariff badges from `₹14/KM` to `₹120 Base Rate (3 KM)`.
5. `src/app/pages/services/services.component.html` — Optimized H1, added H2 header, fixed H4 heading levels, and added contextual internal links.
6. `src/app/pages/pricing/pricing.component.html` — Optimized H1, added H2 header, and verified slab tariff structure.
7. `src/app/pages/fleet/fleet.component.html` — Optimized H1, verified image alts, and added contextual internal links.
8. `src/app/pages/about/about.component.html` — Optimized H1 and mission statement copy.
9. `src/app/pages/contact/contact.component.html` — Optimized H1 and added H2 section header.
