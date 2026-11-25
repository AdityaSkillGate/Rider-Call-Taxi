# Rider Call Taxi – Phase 4: Technical SEO & Structured Data Implementation Report

**Website:** [https://ridercalltaxi.com/](https://ridercalltaxi.com/)  
**Business:** Rider Call Taxi  
**Headquarters:** 757A/7, First Floor, MPM Complex, NGO Colony, Rajapalayam Main Road (Opp. Panchayat Union Office), Sankarankovil – 627756, Tenkasi District, Tamil Nadu, India  
**Date:** November 23, 2026  
**Status:** Completed & Live Verified in Angular Dev Server  

---

## 1. Executive Summary

In Phase 4 of the **Rider Call Taxi Master SEO Project**, we engineered and validated the technical SEO and structured data foundation. The site now features:
- A standardized **XML Sitemap** without artificial frequencies, reflecting the exact canonical route inventory with genuine `lastmod` dates.
- An optimal **Robots.txt** that allows public search engine crawling of all core pages and assets while declaring the HTTPS sitemap.
- A connected **Schema.org `@graph` architecture** uniting `WebSite`, `TaxiService`/`LocalBusiness`/`Organization`, `WebPage`, `AboutPage`, `ItemPage`, `ContactPage`, `Service`, `BreadcrumbList`, and `FAQPage`.
- Complete **Social Metadata** with high-resolution 1024x1024 branded Open Graph and Twitter Card tags.
- Verified **HTTP response codes** and zero console errors across all 6 core public routes.

---

## 2. XML Sitemap Validation (Section 4.1)

**File Path:** `public/sitemap.xml`  
**Endpoint:** `https://ridercalltaxi.com/sitemap.xml`  
**Status:** HTTP 200 OK (`Content-Type: text/xml`)  

### Technical Checklist:
- **XML Syntax:** Fully conforms to the [Sitemaps.org protocol 0.9](https://www.sitemaps.org/schemas/sitemap/0.9).
- **HTTPS Enforcement:** All `<loc>` elements strictly use `https://ridercalltaxi.com`.
- **No Redirected or Broken URLs:** All 6 endpoints resolve to live public components.
- **No Trailing Slash Inconsistencies:** Root uses trailing slash (`https://ridercalltaxi.com/`); subpages use clean path format (`/services`, `/pricing`, `/fleet`, `/about`, `/contact`) matching the single canonical tag.
- **No Artificial Frequency Signals:** Removed artificial `<changefreq>daily/weekly</changefreq>` and `<priority>` tags, which are ignored or downweighted by modern search engines, preserving accurate `<lastmod>2026-11-23</lastmod>` release timestamps.
- **Zero Private / Admin Routes:** Only canonical public routes are exposed.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ridercalltaxi.com/</loc>
    <lastmod>2026-11-23</lastmod>
  </url>
  <url>
    <loc>https://ridercalltaxi.com/services</loc>
    <lastmod>2026-11-23</lastmod>
  </url>
  <url>
    <loc>https://ridercalltaxi.com/pricing</loc>
    <lastmod>2026-11-23</lastmod>
  </url>
  <url>
    <loc>https://ridercalltaxi.com/fleet</loc>
    <lastmod>2026-11-23</lastmod>
  </url>
  <url>
    <loc>https://ridercalltaxi.com/about</loc>
    <lastmod>2026-11-23</lastmod>
  </url>
  <url>
    <loc>https://ridercalltaxi.com/contact</loc>
    <lastmod>2026-11-23</lastmod>
  </url>
</urlset>
```

---

## 3. Robots.txt Validation (Section 4.2)

**File Path:** `public/robots.txt`  
**Endpoint:** `https://ridercalltaxi.com/robots.txt`  
**Status:** HTTP 200 OK (`Content-Type: text/plain`)  

### Technical Checklist:
- **Public Crawling:** `User-agent: *` with `Allow: /` ensures Googlebot, Bingbot, and other verified web crawlers can access HTML, CSS, JS, fonts, and 3D assets.
- **Sitemap Location:** Full canonical HTTPS URL declared: `Sitemap: https://ridercalltaxi.com/sitemap.xml`.
- **No Sensitive Leakage:** No staging, private configuration, or administrative folders are exposed.

```txt
User-agent: *
Allow: /

Sitemap: https://ridercalltaxi.com/sitemap.xml
```

---

## 4. JSON-LD Structured Data: Schema.org `@graph` Architecture (Section 4.3)

Rather than maintaining isolated JSON-LD script blocks, we established an `@graph` architecture with consistent `@id` node anchors.

### 4.1 Global Entities (Defined in `src/index.html`)

1. **`WebSite` Entity (`#website`):**
   - `@id`: `https://ridercalltaxi.com/#website`
   - Name: `Rider Call Taxi`
   - Publisher: Reference to `https://ridercalltaxi.com/#organization`
   - Languages: `["en-IN", "ta-IN"]`
2. **`TaxiService` / `LocalBusiness` / `Organization` Entity (`#organization`):**
   - `@id`: `https://ridercalltaxi.com/#organization`
   - Legal Name: `Rider Call Taxi`
   - URL: `https://ridercalltaxi.com/`
   - Logo: `https://ridercalltaxi.com/images/logo.png`
   - Telephones: `+91-9363015586`, `+91-9363715586`
   - Email: `ridercalltaxi@gmail.com`
   - Price Range: `₹₹`
   - Currencies: `INR`
   - Payment Accepted: `Cash, UPI, Google Pay, PhonePe, Net Banking`
   - Postal Address: `757A/7, First Floor, MPM Complex, NGO Colony, Rajapalayam Main Road (Opp. Panchayat Union Office)`, `Sankarankovil`, `Tamil Nadu 627756`, `IN`
   - Geo Coordinates: `9.1726`, `77.5356`
   - Opening Hours: 24/7 (`00:00` to `23:59`, Monday through Sunday)
   - Actual Service Areas: `Sankarankovil`, `Tenkasi`, `Tirunelveli`, `Rajapalayam`, `Karivalam`, `Courtallam`, `Kovilpatti`
   - Service Catalog: Real offerings with updated slab tariffs (Sedans from ₹120 base for 3 km; SUVs from ₹180 base).
   - **Compliance:** Absolutely no fabricated aggregate ratings (`aggregateRating`) or falsified reviews.
3. **`WebPage` Entity (`#webpage`):**
   - Represents the homepage, linked to `#website` and `#organization`.
4. **`FAQPage` Entity (`#faq`):**
   - Encapsulates 5 real questions and answers displayed in the on-page accordion, fully compliant with Google Search Central guidelines.

### 4.2 Route-Specific Dynamic Structured Data (Managed by `SeoService`)

When users or search engine crawlers navigate public routes, `SeoService` dynamically injects and updates `#route-dynamic-jsonld`:
- **`/about`:** `@graph` containing `BreadcrumbList` (Home > About Us) and `AboutPage` referencing `#organization`.
- **`/services`:** `@graph` containing `BreadcrumbList` (Home > Services), `ItemPage`, and 3 discrete `Service` entities (`Local Taxi Service in Sankarankovil`, `Outstation Taxi & One-Way Drop Cab`, and `Airport Taxi Transfer Service`) with `provider: {"@id": "https://ridercalltaxi.com/#organization"}`.
- **`/fleet`:** `@graph` containing `BreadcrumbList` (Home > Fleet) and `WebPage` detailing verified commercial vehicles.
- **`/pricing`:** `@graph` containing `BreadcrumbList` (Home > Pricing & Tariffs) and `WebPage` detailing Day/Night slab structures.
- **`/contact`:** `@graph` containing `BreadcrumbList` (Home > Contact Us) and `ContactPage` with `mainEntity: {"@id": "https://ridercalltaxi.com/#organization"}`.

---

## 5. Social Metadata & Branded Assets (Section 4.4)

### Metadata Implementation:
- `og:type`: `website`
- `og:site_name`: `Rider Call Taxi`
- `og:locale`: `en_IN`
- `og:url`: `https://ridercalltaxi.com/` (dynamically updated per route)
- `og:title` & `og:description`: Page-specific high-CTR copy
- `og:image`: `https://ridercalltaxi.com/images/logo.png`
- `og:image:secure_url`: `https://ridercalltaxi.com/images/logo.png`
- `og:image:type`: `image/png`
- `og:image:width`: `1024`
- `og:image:height`: `1024`
- `og:image:alt`: `Rider Call Taxi - Sankarankovil Temple Gopuram & Taxi Emblem`
- `twitter:card`: `summary_large_image`
- `twitter:title` & `twitter:description`: Synced per route
- `twitter:image`: `https://ridercalltaxi.com/images/logo.png`
- `twitter:image:alt`: `Rider Call Taxi - Sankarankovil Call Taxi Service`

---

## 6. Live Technical SEO Validation Suite (Section 4.5)

Validation was executed live on the Angular application using Chrome DevTools MCP:

| Test Parameter | Expected Value | Observed Result | Status |
| :--- | :--- | :--- | :--- |
| **Sitemap HTTP Code** | 200 OK | `200 OK` (text/xml) | **PASS** |
| **Robots.txt HTTP Code** | 200 OK | `200 OK` (text/plain) | **PASS** |
| **Single `<link rel="canonical">`** | 1 per page | 1 per page on all routes | **PASS** |
| **Canonical URL Format** | `https://ridercalltaxi.com/<path>` | Exact match on `/`, `/services`, `/pricing`, `/fleet`, `/about`, `/contact` | **PASS** |
| **JSON-LD Script Count on Home** | 1 unified script | 1 unified `<script type="application/ld+json">` with `@graph` | **PASS** |
| **JSON-LD Syntax** | Valid JSON | `JSON.parse()` successful without errors | **PASS** |
| **Dynamic Schema Lifecycle** | Injects on route change | `#route-dynamic-jsonld` updates instantly on navigation | **PASS** |
| **Open Graph Image Resolution** | Valid absolute URL | `1024x1024` PNG at `https://ridercalltaxi.com/images/logo.png` | **PASS** |
| **Geo Meta Tags** | IN-TN / Sankarankovil | `geo.region`, `geo.placename`, `geo.position` present | **PASS** |
| **Browser Console Errors** | 0 errors | 0 errors | **PASS** |

---

## 7. Changed Files Summary

1. `src/index.html` — Implemented `@graph` structured data architecture (`WebSite`, `TaxiService`/`LocalBusiness`/`Organization`, `WebPage`, `FAQPage`), and complete Open Graph / Twitter image dimensions and alt text.
2. `public/sitemap.xml` — Cleaned XML sitemap, verified HTTPS URLs, removed artificial frequency directives, and standardized `lastmod`.
3. `public/robots.txt` — Verified crawler access and sitemap reference.
4. `src/app/app.routes.ts` — Implemented `@graph` route-level structured data including `BreadcrumbList`, `AboutPage`, `ItemPage`, `ContactPage`, and `Service` schemas.
5. `src/app/core/services/seo.service.ts` — Verified dynamic schema injection and normalized canonical URL management.
