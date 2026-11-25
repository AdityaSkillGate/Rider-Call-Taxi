# Rider Call Taxi – Google Integration & Tracking Guide
**Domain:** `https://ridercalltaxi.com`  
**Target Services:** Google Search Console (GSC), Google Analytics 4 (GA4), Bing Webmaster Tools, Google Business Profile (GBP)  
**Implementation Architecture:** Secure dataLayer Event Dispatch (`AnalyticsService`) + Zero-Credential Frontend Safety  
**Audit Status:** Codebase Ready for Production Verification & Data Flow

---

## 1. Google Search Console (GSC) Setup & Verification

Google Search Console provides primary indexing telemetry, crawl health, Core Web Vitals field data, and search query impressions.

### 1.1 Ownership Verification Strategy
Two independent verification methods have been prepared in the codebase:
1. **HTML File Verification (Primary):**
   - File Path: `public/googlea39f7081c1b2b951.html`
   - Content: `google-site-verification: googlea39f7081c1b2b951.html`
   - Production URL: `https://ridercalltaxi.com/googlea39f7081c1b2b951.html`
2. **HTML Meta Tag Verification (Fallback):**
   - Embedded directly in `src/index.html`:
     ```html
     <meta name="google-site-verification" content="googlea39f7081c1b2b951" />
     ```

### 1.2 Sitemap Submission Procedure
Once deployed to production:
1. Navigate to **Google Search Console** (`search.google.com/search-console`).
2. Select property `https://ridercalltaxi.com/`.
3. In the left navigation, click **Sitemaps** under "Indexing".
4. In the "Add a new sitemap" input, enter:
   ```
   sitemap.xml
   ```
5. Click **Submit**. Verify status changes to green `Success` (24 discovered URLs).

### 1.3 High-Priority URL Inspection & Indexing Queue
Upon sitemap submission, submit the top 8 priority URLs for immediate manual inspection and priority crawling via the GSC URL Inspection tool:
1. `https://ridercalltaxi.com/` (Homepage)
2. `https://ridercalltaxi.com/call-taxi-sankarankovil` (Central Local Hub)
3. `https://ridercalltaxi.com/taxi-service-tenkasi` (Tenkasi Hub)
4. `https://ridercalltaxi.com/taxi-service-tirunelveli` (Tirunelveli Hub)
5. `https://ridercalltaxi.com/local-taxi-service` (Core Service)
6. `https://ridercalltaxi.com/outstation-taxi` (High-Value Outstation)
7. `https://ridercalltaxi.com/pricing` (Tariffs & Rate Card)
8. `https://ridercalltaxi.com/contact` (NAP & Dispatch)

---

## 2. Google Analytics 4 (GA4) Architecture

Conversion tracking is engineered through Angular's `AnalyticsService` (`src/app/core/services/analytics.service.ts`), which pushes structured event payloads to the global `window.dataLayer`.

### 2.1 Head Script Initialization (`src/index.html`)
The dataLayer bootstrap is safely declared before script loading:
```html
<!-- Google Analytics 4 (GA4) Initialization -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  // Replace G-XXXXXXXXXX with production GA4 Measurement ID in deployment
  gtag('config', 'G-XXXXXXXXXX', {
    send_page_view: false // Managed dynamically by Angular Router NavigationEnd
  });
</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### 2.2 Event Taxonomy & Conversion Tracking Matrix

Every high-intent booking interaction across the application emits a custom GA4 event:

| Event Name | Trigger Condition | Parameters Captured | GA4 Goal Type |
|------------|-------------------|---------------------|---------------|
| `phone_call_click` | User taps/clicks any `tel:+919363015586` or `tel:+919363715586` | `phoneNumber`, `source` (`header`, `hero`, `footer`, `sticky_mobile`, `about`, `contact`, `location_hub`) | **Primary Conversion** |
| `whatsapp_enquiry_click` | User clicks WhatsApp booking button | `source` (`hero`, `header`, `drawer`, `sticky_bar`, `floating_btn`, `location_hub`), `bookingContext` | **Primary Conversion** |
| `booking_form_submission` | User submits fare calculator or ride inquiry | `tripType` (`oneway`, `roundtrip`), `pickup`, `drop`, `carType` (`sedan`, `suv`), `estimatedDistance` | **Primary Conversion** |
| `service_page_view` | User navigates to any of the 8 dedicated service pages | `serviceSlug`, `serviceName` | Secondary Engagement |
| `tariff_view` | User opens pricing breakdown or changes vehicle tab | `category` (`sedan`, `suv`, `outstation`) | Secondary Engagement |
| `location_hub_view` | User views Sankarankovil, Tenkasi, or Tirunelveli page | `locationSlug`, `city` | Secondary Engagement |

### 2.3 Angular Service Implementation (`analytics.service.ts`)
```typescript
trackPhoneCall(phoneNumber: string, source: 'header' | 'hero' | 'footer' | 'sticky_mobile' | 'contact' | 'about'): void {
  this.pushEvent('phone_call_click', {
    phoneNumber,
    source,
    event_category: 'Conversion',
    event_label: `Call from ${source}`
  });
}

trackWhatsAppClick(source: 'hero' | 'header' | 'drawer' | 'sticky_bar' | 'floating_btn', context?: string): void {
  this.pushEvent('whatsapp_enquiry_click', {
    source,
    booking_context: context || 'general',
    event_category: 'Conversion',
    event_label: `WhatsApp from ${source}`
  });
}
```

### 2.4 Recommended GA4 Custom Dimensions
In GA4 Admin ➔ **Custom Definitions** ➔ **Create Custom Dimension**:
- `cta_source` (Event scope, parameter: `source`)
- `trip_type` (Event scope, parameter: `tripType`)
- `vehicle_type` (Event scope, parameter: `carType`)

---

## 3. Bing Webmaster Tools Integration

Bing powers Windows search, Microsoft Edge default search, and Copilot generative answers.

### 3.1 Verification Methods
1. **Google Search Console Import (Recommended):**
   - Log in to Bing Webmaster Tools (`bing.com/webmasters`).
   - Click "Import from Google Search Console".
   - Automatically imports domain verification, sitemaps, and URL properties with 1 click.
2. **Meta Tag (Fallback):**
   - Add `<meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_TOKEN" />` to `src/index.html`.
3. **Submit Sitemap:**
   - In Bing Webmaster Tools, submit `https://ridercalltaxi.com/sitemap.xml`.

---

## 4. Google Business Profile (GBP) Alignment

To maximize local pack dominance in Sankarankovil and surrounding regions, align the live GBP profile with website data:

| GBP Field | Website Verified Value |
|-----------|------------------------|
| **Business Name** | `Rider Call Taxi` |
| **Address** | `757A/7, First Floor, MPM Complex, NGO Colony, Rajapalayam Main Road (Opp. Panchayat Union Office), Sankarankovil, Tamil Nadu 627756` |
| **Primary Phone** | `+91 9363015586` |
| **Secondary Phone** | `+91 9363715586` |
| **Primary Category** | `Taxi Service` |
| **Website URL** | `https://ridercalltaxi.com/` |
| **Booking URL** | `https://wa.me/919363015586` |
| **Hours** | Open 24 Hours / 7 Days a week |
| **Service Areas** | Sankarankovil, Tenkasi, Tirunelveli, Rajapalayam, Kovilpatti, Courtallam, Kadayanallur |

---

## 5. Security & Privacy Safeguards
- **Zero API Secrets in Code:** No service account JSONs, private API keys, or database credentials exist in source control.
- **Client Anonymization:** GA4 IP anonymization is enabled by default in gtag.js.
- **Zero Third-Party Ad Bloat:** Free of third-party ad networks, trackers, or unvetted external scripts.
