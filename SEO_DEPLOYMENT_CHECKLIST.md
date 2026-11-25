# Rider Call Taxi – SEO Production Deployment Checklist
**Domain:** `https://ridercalltaxi.com`  
**Target Release:** Production Launch (Phase 10 Sign-Off)  
**Framework:** Angular 19+ Client-Side Application with Three.js 3D Engine  
**Release Readiness:** 100% Pass (Pre-Deployment Technical Checklist Validated)

---

## 1. Pre-Deployment Technical Checklist

| Item | Validation Method | Target Requirement | Status |
|------|-------------------|--------------------|--------|
| **Angular Compilation** | `ng build --configuration production` | Exit Code 0, 0 compiler errors | **PASSED** |
| **Initial Bundle Size** | Build output inspection | Initial transfer ≤ 150 kB (Actual: 125.14 kB) | **PASSED** |
| **Public Route Coverage** | Automated DevTools crawl | All 24 routes resolve with valid view | **PASSED** |
| **H1 Tag Structure** | DOM node audit | Exactly 1 `<h1>` per route, 0 missing, 0 duplicates | **PASSED** |
| **Title Tags** | Document title audit | 24 unique titles with target keywords & brand | **PASSED** |
| **Meta Descriptions** | `<meta name="description">` | 24 unique action descriptions (120–180 chars) | **PASSED** |
| **Canonical Link Tags** | `<link rel="canonical">` | 100% self-referencing canonical URLs | **PASSED** |
| **Robots Directives** | `<meta name="robots">` | `index, follow, max-image-preview:large` | **PASSED** |
| **Structured Data** | Script tag `#route-dynamic-jsonld` | Clean parse, valid JSON-LD, 0 syntax errors | **PASSED** |
| **XML Sitemap** | XML schema parser | Valid XML, 24 canonical URLs, 0 redirects | **PASSED** |
| **Robots.txt** | Crawler compliance check | Allows public crawl, points to sitemap.xml | **PASSED** |
| **GSC Verification Token** | Static file presence | `public/googlea39f7081c1b2b951.html` exists | **PASSED** |
| **Phone Link Formatting** | Anchor tag regex | All phone links use `tel:+919363015586` or `tel:+919363715586` | **PASSED** |
| **WhatsApp CTAs** | Anchor tag regex | Valid link: `https://wa.me/919363015586` | **PASSED** |
| **Broken Image Audit** | Image naturalWidth check | 0 broken images across all 24 views | **PASSED** |
| **360 Turntable Frame Paths** | Data service inspection | Root-relative paths `/assets/car-360/...` | **PASSED** |
| **Mobile Responsiveness** | Viewport 390x844 test | Sticky bar visible, 0 horizontal scroll | **PASSED** |
| **Three.js Optimization** | IntersectionObserver test | Pauses rendering when scrolled off-screen | **PASSED** |

---

## 2. Production Build Execution Instructions

Execute the production build locally or on your CI/CD server:

```powershell
# 1. Install production dependencies (if running clean environment)
npm install

# 2. Compile optimized production distribution
npx ng build --configuration production
```

The output files will be compiled into:
```
dist/rider-car-taxi-poc/browser/
```
This directory contains `index.html`, hashed JavaScript bundles, CSS stylesheets, WebP images, 3D assets, `sitemap.xml`, `robots.txt`, and the Google verification file.

---

## 3. Web Server & Reverse Proxy Configuration

Because Rider Call Taxi is an Angular Single Page Application with client-side HTML5 routing (`PathLocationStrategy`), your production web server must be configured to route all non-file requests to `/index.html`.

### 3.1 Nginx Configuration (`/etc/nginx/sites-available/ridercalltaxi.com`)
```nginx
server {
    listen 80;
    server_name ridercalltaxi.com www.ridercalltaxi.com;
    return 301 https://ridercalltaxi.com$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.ridercalltaxi.com;
    ssl_certificate /etc/letsencrypt/live/ridercalltaxi.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ridercalltaxi.com/privkey.pem;
    return 301 https://ridercalltaxi.com$request_uri;
}

server {
    listen 443 ssl http2;
    server_name ridercalltaxi.com;

    root /var/www/ridercalltaxi/dist/rider-car-taxi-poc/browser;
    index index.html;

    # SSL hardening
    ssl_certificate /etc/letsencrypt/live/ridercalltaxi.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ridercalltaxi.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;

    # Gzip / Brotli Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    # Caching: Long-term cache for hashed JS/CSS assets
    location ~* \.(?:css(\.map)?|js(\.map)?|webp|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }

    # Caching: Short/no-cache for index.html & service worker
    location = /index.html {
        expires -1;
        add_header Cache-Control "no-store, no-cache, must-revalidate";
    }

    # SPA Routing Fallback
    location / {
        try_files $uri $uri/ /index.html;
    }

    # XML Sitemap & Robots direct pass
    location = /sitemap.xml {
        try_files $uri =404;
    }
    location = /robots.txt {
        try_files $uri =404;
    }
}
```

### 3.2 Apache Configuration (`.htaccess`)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  
  # Redirect www to non-www HTTPS
  RewriteCond %{HTTPS} off [OR]
  RewriteCond %{HTTP_HOST} ^www\.ridercalltaxi\.com$ [NC]
  RewriteRule ^(.*)$ https://ridercalltaxi.com/$1 [L,R=301]

  # SPA fallback to index.html
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 4. Day-1 Post-Deployment Launch Protocol

Immediately following upload and web server restart:

### Step 1: Live Status Code & Canonical Verification
Run a curl or terminal check on top routes to ensure 200 OK responses:
```bash
curl -I https://ridercalltaxi.com/
curl -I https://ridercalltaxi.com/call-taxi-sankarankovil
curl -I https://ridercalltaxi.com/services
curl -I https://ridercalltaxi.com/pricing
curl -I https://ridercalltaxi.com/sitemap.xml
curl -I https://ridercalltaxi.com/robots.txt
```

### Step 2: Google Search Console Domain Verification
1. Open Google Search Console.
2. Select property `https://ridercalltaxi.com/`.
3. Click "Verify Ownership" (HTML file or meta tag will instantly succeed).
4. Go to **Sitemaps** ➔ Enter `sitemap.xml` ➔ Click **Submit**.

### Step 3: Priority URL Submission
Submit the top 8 pages using **URL Inspection** ➔ **Request Indexing**:
- `/`
- `/call-taxi-sankarankovil`
- `/taxi-service-tenkasi`
- `/taxi-service-tirunelveli`
- `/local-taxi-service`
- `/outstation-taxi`
- `/pricing`
- `/contact`

### Step 4: Real-Time GA4 Event Flow Check
1. Open Google Analytics ➔ **Realtime Overview**.
2. Visit `https://ridercalltaxi.com/` on a mobile device or browser.
3. Tap the "Call Now" button ➔ Verify `phone_call_click` appears in Realtime events.
4. Tap the "WhatsApp Booking" button ➔ Verify `whatsapp_enquiry_click` fires.
5. Fill out the fare estimation form ➔ Verify `booking_form_submission` fires.

---

## 5. Manual Actions Requiring Business Owner Attention

The following final actions require account credentials or administrative access:

1. **Replace GA4 Measurement ID:**
   - In `src/index.html` (lines 249 & 254), replace `G-XXXXXXXXXX` with the client's production GA4 Measurement ID (from Google Analytics Admin ➔ Data Streams).
2. **Google Business Profile (GBP) Verification:**
   - Ensure the official Google Business Profile is verified at `757A/7, First Floor, MPM Complex, NGO Colony, Rajapalayam Main Road, Sankarankovil – 627756`.
   - Update website URL to `https://ridercalltaxi.com/`.
3. **Bing Webmaster Tools 1-Click Import:**
   - Log in to `bing.com/webmasters` and click "Import from Google Search Console".
4. **Local Directory Submissions:**
   - Submit standardized business listings to JustDial, IndiaMART, and Sulekha as detailed in [LOCAL_SEO_REPORT.md](file:///c:/Users/hp/Downloads/Rider-car-taxi-POC-main/LOCAL_SEO_REPORT.md).
