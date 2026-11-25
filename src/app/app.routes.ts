import { Routes } from '@angular/router';
import { RouteSeoConfig } from './core/services/seo.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Rider Call Taxi | Call Taxi Service in Sankarankovil',
    data: {
      seo: {
        title: 'Rider Call Taxi | Call Taxi Service in Sankarankovil',
        description: 'Book Rider Call Taxi in Sankarankovil for local travel, outstation trips, one-way drops, airport transfers and comfortable taxi services. Call or WhatsApp us 24/7.',
        keywords: 'Call Taxi in Sankarankovil, Taxi Service in Sankarankovil, Sankarankovil Cab Service, சங்கரன்கோவில் கால் டாக்ஸி, சங்கரன்கோவில் டாக்ஸி சேவை, outstation taxi Sankarankovil, one way drop taxi Sankarankovil, Tenkasi district call taxi',
        canonical: 'https://ridercalltaxi.com/',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Rider Call Taxi | Call Taxi Service in Sankarankovil',
        ogDescription: 'Book Rider Call Taxi in Sankarankovil for local travel, outstation trips, one-way drops, airport transfers and comfortable taxi services. Call or WhatsApp us 24/7.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image'
      } as RouteSeoConfig
    }
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us | Rider Call Taxi Sankarankovil – Reliable Travel Partner',
    data: {
      seo: {
        title: 'About Us | Rider Call Taxi Sankarankovil – Reliable Travel Partner',
        description: 'Meet Rider Call Taxi, Sankarankovil\'s trusted 24/7 cab service. Police-verified drivers, 5-star NCAP safety ratings, transparent per-km billing, and hospitality across Tamil Nadu.',
        keywords: 'about Rider Call Taxi, taxi company Sankarankovil, trusted cab service Tenkasi, verified chauffeurs, சங்கரன்கோவில் டாக்ஸி நிறுவனம், Rajapalayam main road travels',
        canonical: 'https://ridercalltaxi.com/about',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'About Us | Rider Call Taxi Sankarankovil – Reliable Travel Partner',
        ogDescription: 'Serving Sankarankovil, Tenkasi, and Tirunelveli with 10,000+ completed rides, police-verified drivers, and 24/7 customer assistance.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/about#breadcrumb',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://ridercalltaxi.com/'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'About Us',
                  'item': 'https://ridercalltaxi.com/about'
                }
              ]
            },
            {
              '@type': 'AboutPage',
              '@id': 'https://ridercalltaxi.com/about#webpage',
              'url': 'https://ridercalltaxi.com/about',
              'name': 'About Us | Rider Call Taxi Sankarankovil – Reliable Travel Partner',
              'isPartOf': {
                '@id': 'https://ridercalltaxi.com/#website'
              },
              'about': {
                '@id': 'https://ridercalltaxi.com/#organization'
              },
              'description': 'Meet Rider Call Taxi, Sankarankovil\'s trusted 24/7 cab service. Police-verified drivers, 5-star NCAP safety ratings, transparent per-km billing, and hospitality across Tamil Nadu.',
              'inLanguage': 'en-IN'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Taxi Services in Sankarankovil | Local, Outstation & Airport Cabs',
    data: {
      seo: {
        title: 'Taxi Services in Sankarankovil | Local, Outstation & Airport Cabs',
        description: 'Comprehensive 24/7 taxi services by Rider Call Taxi: local rides, one-way drop taxis, round trips, Madurai airport transfers, corporate travel & temple tour packages.',
        keywords: 'Local Taxi Service, Outstation Taxi Service, One Way Drop Taxi, Round Trip Taxi, Airport Taxi, Car Rental, Corporate Taxi, Tour Packages, தென்காசி கார் வாடகை, திருநெல்வேலி கால் டாக்ஸி',
        canonical: 'https://ridercalltaxi.com/services',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Taxi Services in Sankarankovil | Local, Outstation & Airport Cabs',
        ogDescription: 'From 10-minute local pickups to Madurai airport drops and Courtallam / Tiruchendur pilgrimage packages. Call +91 9363015586.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/services#breadcrumb',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://ridercalltaxi.com/'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Services',
                  'item': 'https://ridercalltaxi.com/services'
                }
              ]
            },
            {
              '@type': 'ItemPage',
              '@id': 'https://ridercalltaxi.com/services#webpage',
              'url': 'https://ridercalltaxi.com/services',
              'name': 'Taxi Services in Sankarankovil | Local, Outstation & Airport Cabs',
              'isPartOf': {
                '@id': 'https://ridercalltaxi.com/#website'
              },
              'description': 'Comprehensive 24/7 taxi services by Rider Call Taxi: local rides, one-way drop taxis, round trips, Madurai airport transfers, corporate travel & temple tour packages.',
              'inLanguage': 'en-IN'
            },
            {
              '@type': 'Service',
              '@id': 'https://ridercalltaxi.com/services#localservice',
              'name': 'Local City Rides in Sankarankovil',
              'serviceType': 'Local Taxi Service',
              'provider': {
                '@id': 'https://ridercalltaxi.com/#organization'
              },
              'areaServed': {
                '@type': 'City',
                'name': 'Sankarankovil'
              },
              'description': '10-minute doorstep pickup for local errands, hospital visits, and railway station drops in Sankarankovil.'
            },
            {
              '@type': 'Service',
              '@id': 'https://ridercalltaxi.com/services#outstationservice',
              'name': 'Outstation Taxi & One-Way Drop Cab',
              'serviceType': 'Intercity Taxi Service',
              'provider': {
                '@id': 'https://ridercalltaxi.com/#organization'
              },
              'areaServed': [
                { '@type': 'City', 'name': 'Madurai' },
                { '@type': 'City', 'name': 'Tirunelveli' },
                { '@type': 'AdministrativeArea', 'name': 'Tenkasi' },
                { '@type': 'City', 'name': 'Chennai' }
              ],
              'description': 'One-way drop and round-trip taxi service connecting Sankarankovil to all Tamil Nadu destinations with transparent slab rates from ₹120 base.'
            },
            {
              '@type': 'Service',
              '@id': 'https://ridercalltaxi.com/services#airportservice',
              'name': 'Airport Taxi Transfer Service',
              'serviceType': 'Airport Shuttle Service',
              'provider': {
                '@id': 'https://ridercalltaxi.com/#organization'
              },
              'areaServed': [
                { '@type': 'City', 'name': 'Madurai Airport (IXM)' },
                { '@type': 'City', 'name': 'Tuticorin Airport (TCR)' },
                { '@type': 'City', 'name': 'Trivandrum Airport (TRV)' }
              ],
              'description': 'Punctual 24/7 airport drops and pickups with flight tracking and polite commercial chauffeurs.'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'fleet',
    loadComponent: () => import('./pages/fleet/fleet.component').then(m => m.FleetComponent),
    title: 'Taxi Cars in Sankarankovil | Commercial Car Rental with Driver',
    data: {
      seo: {
        title: 'Taxi Cars in Sankarankovil | Commercial Car Rental with Driver',
        description: 'Clean, sanitized commercial taxi cars in Sankarankovil with 360° interactive view. Tata Altroz, Swift Dzire, Toyota Glanza, Ertiga 7-seater, and Tavera 9-seater MUV.',
        keywords: 'Taxi Cars in Sankarankovil, Car Rental with Driver, 7 seater taxi Sankarankovil, Ertiga cab, Tavera rental Tenkasi, சங்கரன்கோவில் வாடகை கார்',
        canonical: 'https://ridercalltaxi.com/fleet',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Taxi Cars in Sankarankovil | Commercial Car Rental with Driver',
        ogDescription: 'Inspect our commercial fleet in full 360° rotation. Insured, AC-equipped, sanitized cars with professional chauffeurs.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/fleet#breadcrumb',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://ridercalltaxi.com/'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Fleet',
                  'item': 'https://ridercalltaxi.com/fleet'
                }
              ]
            },
            {
              '@type': 'WebPage',
              '@id': 'https://ridercalltaxi.com/fleet#webpage',
              'url': 'https://ridercalltaxi.com/fleet',
              'name': 'Taxi Cars in Sankarankovil | Commercial Car Rental with Driver',
              'isPartOf': {
                '@id': 'https://ridercalltaxi.com/#website'
              },
              'about': {
                '@id': 'https://ridercalltaxi.com/#organization'
              },
              'description': 'Clean, sanitized commercial taxi cars in Sankarankovil with 360° interactive view. Tata Altroz, Swift Dzire, Toyota Glanza, Ertiga 7-seater, and Tavera 9-seater MUV.',
              'inLanguage': 'en-IN'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent),
    title: 'Taxi Fare from Sankarankovil | Outstation & One Way Taxi Tariff',
    data: {
      seo: {
        title: 'Taxi Fare from Sankarankovil | Outstation & One Way Taxi Tariff',
        description: 'Transparent taxi fare from Sankarankovil. Sedan rates from ₹120 base (first 3 km) then ₹28/km Day / ₹30/km Night. 20 KM round trip packages from ₹450 with zero surge fees.',
        keywords: 'Taxi Fare from Sankarankovil, One Way Taxi Fare, Outstation Taxi Tariff, சங்கரன்கோவில் டாக்ஸி கட்டணம், cab charges Tenkasi, Sankarankovil to Madurai taxi fare',
        canonical: 'https://ridercalltaxi.com/pricing',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Taxi Fare from Sankarankovil | Outstation & One Way Taxi Tariff',
        ogDescription: 'Official rate card for Sankarankovil: Sedans, SUVs, and Outstation cabs. Day & Night transparent billing with included travel times.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/pricing#breadcrumb',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://ridercalltaxi.com/'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Pricing & Tariffs',
                  'item': 'https://ridercalltaxi.com/pricing'
                }
              ]
            },
            {
              '@type': 'WebPage',
              '@id': 'https://ridercalltaxi.com/pricing#webpage',
              'url': 'https://ridercalltaxi.com/pricing',
              'name': 'Taxi Fare from Sankarankovil | Outstation & One Way Taxi Tariff',
              'isPartOf': {
                '@id': 'https://ridercalltaxi.com/#website'
              },
              'about': {
                '@id': 'https://ridercalltaxi.com/#organization'
              },
              'description': 'Transparent taxi fare from Sankarankovil. Sedan rates from ₹120 base (first 3 km) then ₹28/km Day / ₹30/km Night. 20 KM round trip packages from ₹450 with zero surge fees.',
              'inLanguage': 'en-IN'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Rider Call Taxi Contact Number | 24/7 Call Taxi Booking Sankarankovil',
    data: {
      seo: {
        title: 'Rider Call Taxi Contact Number | 24/7 Call Taxi Booking Sankarankovil',
        description: 'Contact Rider Call Taxi Sankarankovil. 24/7 dispatch hotlines: +91 9363015586 / +91 9363715586. WhatsApp booking available. Office at MPM Complex, NGO Colony, Rajapalayam Main Road.',
        keywords: 'Rider Call Taxi Contact Number, Call Taxi Booking Sankarankovil, book taxi Sankarankovil, 24 hours call taxi Tenkasi, WhatsApp cab booking Sankarankovil',
        canonical: 'https://ridercalltaxi.com/contact',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Rider Call Taxi Contact Number | 24/7 Call Taxi Booking Sankarankovil',
        ogDescription: 'Call +91 9363015586 or WhatsApp for instant taxi dispatch across Sankarankovil, Tenkasi, and Tirunelveli district.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/contact#breadcrumb',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://ridercalltaxi.com/'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Contact Us',
                  'item': 'https://ridercalltaxi.com/contact'
                }
              ]
            },
            {
              '@type': 'ContactPage',
              '@id': 'https://ridercalltaxi.com/contact#webpage',
              'url': 'https://ridercalltaxi.com/contact',
              'name': 'Rider Call Taxi Contact Number | 24/7 Call Taxi Booking Sankarankovil',
              'isPartOf': {
                '@id': 'https://ridercalltaxi.com/#website'
              },
              'mainEntity': {
                '@id': 'https://ridercalltaxi.com/#organization'
              },
              'description': 'Contact Rider Call Taxi Sankarankovil. 24/7 dispatch hotlines: +91 9363015586 / +91 9363715586. WhatsApp booking available. Office at MPM Complex, NGO Colony, Rajapalayam Main Road.',
              'inLanguage': 'en-IN'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'call-taxi-sankarankovil',
    loadComponent: () => import('./pages/locations/location-detail.component').then(m => m.LocationDetailComponent),
    title: 'Call Taxi in Sankarankovil | Rider Call Taxi #1 24/7 Cab Service',
    data: {
      locationSlug: 'call-taxi-sankarankovil',
      seo: {
        title: 'Call Taxi in Sankarankovil | Rider Call Taxi #1 24/7 Cab Service',
        description: 'Book Rider Call Taxi in Sankarankovil. Headquartered at MPM Complex on Rajapalayam Main Road. 10-minute doorstep pickup, local temple trips, outstation drops & Madurai airport cabs. Call +91 9363015586.',
        keywords: 'Call Taxi in Sankarankovil, Sankarankovil cab service, taxi service Sankarankovil, Sankarankovil travels, சங்கரன்கோவில் கால் டாக்ஸி, Madurai airport drop Sankarankovil',
        canonical: 'https://ridercalltaxi.com/call-taxi-sankarankovil',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Call Taxi in Sankarankovil | Rider Call Taxi #1 24/7 Cab Service',
        ogDescription: '10-minute doorstep pickup in Sankarankovil, local temple darshan, outstation drops to Madurai and Tirunelveli with verified drivers and transparent fares from ₹120 base.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/call-taxi-sankarankovil#breadcrumb',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://ridercalltaxi.com/'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Call Taxi in Sankarankovil',
                  'item': 'https://ridercalltaxi.com/call-taxi-sankarankovil'
                }
              ]
            },
            {
              '@type': 'ItemPage',
              '@id': 'https://ridercalltaxi.com/call-taxi-sankarankovil#webpage',
              'url': 'https://ridercalltaxi.com/call-taxi-sankarankovil',
              'name': 'Call Taxi in Sankarankovil | Rider Call Taxi #1 24/7 Cab Service',
              'isPartOf': {
                '@id': 'https://ridercalltaxi.com/#website'
              },
              'description': 'Official headquarters & central dispatch of Rider Call Taxi in Sankarankovil with 10-minute local pickup and outstation drops.',
              'inLanguage': 'en-IN'
            },
            {
              '@type': 'Service',
              '@id': 'https://ridercalltaxi.com/call-taxi-sankarankovil#service',
              'name': 'Sankarankovil Call Taxi Service',
              'serviceType': 'Taxi Service',
              'provider': {
                '@id': 'https://ridercalltaxi.com/#organization'
              },
              'areaServed': {
                '@type': 'City',
                'name': 'Sankarankovil'
              },
              'description': '24/7 commercial taxi service in Sankarankovil with 10-minute pickup, airport drops, and outstation trips starting from ₹120 base fare.'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'taxi-service-tenkasi',
    loadComponent: () => import('./pages/locations/location-detail.component').then(m => m.LocationDetailComponent),
    title: 'Taxi Service in Tenkasi | Reliable Cabs & Courtallam Tour Taxi',
    data: {
      locationSlug: 'taxi-service-tenkasi',
      seo: {
        title: 'Taxi Service in Tenkasi | Reliable Cabs & Courtallam Tour Taxi',
        description: 'Reliable taxi service in Tenkasi by Rider Call Taxi. Fast cab dispatch for Tenkasi Junction, Courtallam waterfalls, Kasi Viswanathar temple & outstation drops. Call +91 9363015586.',
        keywords: 'Taxi Service in Tenkasi, Tenkasi call taxi, Courtallam cab service, Courtallam tour taxi, Tenkasi to Madurai cab, தென்காசி கார் வாடகை, தென்காசி டாக்ஸி',
        canonical: 'https://ridercalltaxi.com/taxi-service-tenkasi',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Taxi Service in Tenkasi | Reliable Cabs & Courtallam Tour Taxi',
        ogDescription: 'Prompt cabs for Tenkasi Railway Junction, Courtallam waterfalls season tours, Shenkottai, and Trivandrum Airport drops. Call +91 9363015586.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/taxi-service-tenkasi#breadcrumb',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://ridercalltaxi.com/'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Taxi Service in Tenkasi',
                  'item': 'https://ridercalltaxi.com/taxi-service-tenkasi'
                }
              ]
            },
            {
              '@type': 'ItemPage',
              '@id': 'https://ridercalltaxi.com/taxi-service-tenkasi#webpage',
              'url': 'https://ridercalltaxi.com/taxi-service-tenkasi',
              'name': 'Taxi Service in Tenkasi | Reliable Cabs & Courtallam Tour Taxi',
              'isPartOf': {
                '@id': 'https://ridercalltaxi.com/#website'
              },
              'description': 'District taxi service for Tenkasi, Courtallam, and Shenkottai coordinated by Rider Call Taxi.',
              'inLanguage': 'en-IN'
            },
            {
              '@type': 'Service',
              '@id': 'https://ridercalltaxi.com/taxi-service-tenkasi#service',
              'name': 'Tenkasi & Courtallam Cab Service',
              'serviceType': 'Taxi Service',
              'provider': {
                '@id': 'https://ridercalltaxi.com/#organization'
              },
              'areaServed': [
                {
                  '@type': 'City',
                  'name': 'Tenkasi'
                },
                {
                  '@type': 'City',
                  'name': 'Courtallam'
                }
              ],
              'description': 'Punctual taxi transfers for Tenkasi Junction, Courtallam waterfalls circuit tours, and outstation drops.'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'taxi-service-tirunelveli',
    loadComponent: () => import('./pages/locations/location-detail.component').then(m => m.LocationDetailComponent),
    title: 'Taxi Service in Tirunelveli | Outstation Drop Taxi & Local Cabs',
    data: {
      locationSlug: 'taxi-service-tirunelveli',
      seo: {
        title: 'Taxi Service in Tirunelveli | Outstation Drop Taxi & Local Cabs',
        description: 'Prompt taxi service connecting Tirunelveli, Sankarankovil & South Tamil Nadu. Verified drivers for Tirunelveli Junction, Medical College, Nellaippar Temple & airport drops. Call +91 9363015586.',
        keywords: 'Taxi Service in Tirunelveli, Tirunelveli call taxi, Tirunelveli to Sankarankovil cab, Nellai taxi service, Tirunelveli outstation drop taxi, திருநெல்வேலி டாக்ஸி',
        canonical: 'https://ridercalltaxi.com/taxi-service-tirunelveli',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Taxi Service in Tirunelveli | Outstation Drop Taxi & Local Cabs',
        ogDescription: 'Intercity and outstation drop taxi connecting Tirunelveli Junction, TVMCH, Sankarankovil, and Tuticorin Airport. Call +91 9363015586.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/taxi-service-tirunelveli#breadcrumb',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://ridercalltaxi.com/'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Taxi Service in Tirunelveli',
                  'item': 'https://ridercalltaxi.com/taxi-service-tirunelveli'
                }
              ]
            },
            {
              '@type': 'ItemPage',
              '@id': 'https://ridercalltaxi.com/taxi-service-tirunelveli#webpage',
              'url': 'https://ridercalltaxi.com/taxi-service-tirunelveli',
              'name': 'Taxi Service in Tirunelveli | Outstation Drop Taxi & Local Cabs',
              'isPartOf': {
                '@id': 'https://ridercalltaxi.com/#website'
              },
              'description': 'Intercity outstation cabs connecting Tirunelveli and Sankarankovil with transparent slab rates.',
              'inLanguage': 'en-IN'
            },
            {
              '@type': 'Service',
              '@id': 'https://ridercalltaxi.com/taxi-service-tirunelveli#service',
              'name': 'Tirunelveli Highway Corridor Taxi Service',
              'serviceType': 'Intercity Taxi Service',
              'provider': {
                '@id': 'https://ridercalltaxi.com/#organization'
              },
              'areaServed': {
                '@type': 'City',
                'name': 'Tirunelveli'
              },
              'description': 'Reliable highway taxi connecting Tirunelveli Junction, Medical College, Tuticorin Airport, and Sankarankovil.'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'local-taxi-service',
    loadComponent: () => import('./pages/service-pages/service-page-detail.component').then(m => m.ServicePageDetailComponent),
    title: 'Local Taxi Service in Sankarankovil | Rider Call Taxi 24/7 Doorstep Cabs',
    data: {
      serviceSlug: 'local-taxi-service',
      seo: {
        title: 'Local Taxi Service in Sankarankovil | Rider Call Taxi 24/7 Doorstep Cabs',
        description: 'Book 24/7 local taxi service in Sankarankovil with 10-minute doorstep pickup. Safe rides for railway station, temple darshan, hospital visits & town errands from ₹120.',
        keywords: 'local taxi service, local taxi sankarankovil, sankarankovil cab, local car rental sankarankovil, sankaranarayanar temple taxi, சங்கரன்கோவில் உள்ளூர் டாக்ஸி',
        canonical: 'https://ridercalltaxi.com/local-taxi-service',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Local Taxi Service in Sankarankovil | Rider Call Taxi 24/7 Doorstep Cabs',
        ogDescription: '10-minute rapid doorstep cab arrival across Sankarankovil town and NGO Colony starting from ₹120. Call +91 9363015586.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/local-taxi-service#breadcrumb',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://ridercalltaxi.com/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://ridercalltaxi.com/services' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Local Taxi Service', 'item': 'https://ridercalltaxi.com/local-taxi-service' }
              ]
            },
            {
              '@type': 'ItemPage',
              '@id': 'https://ridercalltaxi.com/local-taxi-service#webpage',
              'url': 'https://ridercalltaxi.com/local-taxi-service',
              'name': 'Local Taxi Service in Sankarankovil | Rider Call Taxi 24/7 Doorstep Cabs',
              'isPartOf': { '@id': 'https://ridercalltaxi.com/#website' },
              'description': '24/7 doorstep local cab service across Sankarankovil, Kalappakulam, and Karivalam with transparent metre billing.',
              'inLanguage': 'en-IN'
            },
            {
              '@type': 'Service',
              '@id': 'https://ridercalltaxi.com/local-taxi-service#service',
              'name': 'Local Taxi Service in Sankarankovil',
              'serviceType': 'Point to point local taxi service',
              'provider': { '@id': 'https://ridercalltaxi.com/#organization' },
              'areaServed': { '@type': 'City', 'name': 'Sankarankovil' },
              'description': 'Prompt doorstep local taxi pickups in Sankarankovil for railway stations, temple visits, hospital emergencies, and shopping errands from ₹120 base fare.'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'outstation-taxi',
    loadComponent: () => import('./pages/service-pages/service-page-detail.component').then(m => m.ServicePageDetailComponent),
    title: 'Outstation Taxi Service from Sankarankovil | Intercity Cabs Tamil Nadu',
    data: {
      serviceSlug: 'outstation-taxi',
      seo: {
        title: 'Outstation Taxi Service from Sankarankovil | Intercity Cabs Tamil Nadu',
        description: 'Reliable outstation taxi service from Sankarankovil to Chennai, Madurai, Coimbatore, Bangalore & all Tamil Nadu districts. Yellow-board AC cabs with verified drivers.',
        keywords: 'outstation taxi, outstation taxi sankarankovil, intercity cab tamil nadu, sankarankovil to chennai cab, sankarankovil to bangalore taxi, வெளியூர் டாக்ஸி சேவை',
        canonical: 'https://ridercalltaxi.com/outstation-taxi',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Outstation Taxi Service from Sankarankovil | Intercity Cabs Tamil Nadu',
        ogDescription: 'Intercity outstation cabs from Sankarankovil across Tamil Nadu, Kerala & South India with verified drivers and 24/7 GPS dispatch.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/outstation-taxi#breadcrumb',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://ridercalltaxi.com/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://ridercalltaxi.com/services' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Outstation Taxi Service', 'item': 'https://ridercalltaxi.com/outstation-taxi' }
              ]
            },
            {
              '@type': 'ItemPage',
              '@id': 'https://ridercalltaxi.com/outstation-taxi#webpage',
              'url': 'https://ridercalltaxi.com/outstation-taxi',
              'name': 'Outstation Taxi Service from Sankarankovil | Intercity Cabs Tamil Nadu',
              'isPartOf': { '@id': 'https://ridercalltaxi.com/#website' },
              'description': 'Outstation intercity cabs from Sankarankovil to all Tamil Nadu destinations.',
              'inLanguage': 'en-IN'
            },
            {
              '@type': 'Service',
              '@id': 'https://ridercalltaxi.com/outstation-taxi#service',
              'name': 'Outstation Taxi Service from Sankarankovil',
              'serviceType': 'Outstation Intercity Taxi Service',
              'provider': { '@id': 'https://ridercalltaxi.com/#organization' },
              'areaServed': { '@type': 'AdministrativeArea', 'name': 'Tamil Nadu' },
              'description': 'Comfortable outstation road travel connecting Sankarankovil to Madurai, Chennai, Coimbatore, Bangalore, and all south Indian hubs.'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'one-way-taxi',
    loadComponent: () => import('./pages/service-pages/service-page-detail.component').then(m => m.ServicePageDetailComponent),
    title: 'One Way Taxi Service Sankarankovil | Affordable One-Way Drop Cabs',
    data: {
      serviceSlug: 'one-way-taxi',
      seo: {
        title: 'One Way Taxi Service Sankarankovil | Affordable One-Way Drop Cabs',
        description: 'Save money with Rider Call Taxi one-way drop service from Sankarankovil. Pay only for one-side travel with zero return fare. Starting at ₹28/km for AC Sedans.',
        keywords: 'one way taxi, one way drop taxi sankarankovil, one side cab, sankarankovil to madurai one way, sankarankovil to chennai one way taxi, ஒன் வே டாக்ஸி',
        canonical: 'https://ridercalltaxi.com/one-way-taxi',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'One Way Taxi Service Sankarankovil | Affordable One-Way Drop Cabs',
        ogDescription: 'Pay only for the distance you travel with zero return fares. AC Sedan at ₹28/km and SUV at ₹36/km. Call +91 9363015586.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/one-way-taxi#breadcrumb',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://ridercalltaxi.com/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://ridercalltaxi.com/services' },
                { '@type': 'ListItem', 'position': 3, 'name': 'One Way Taxi Service', 'item': 'https://ridercalltaxi.com/one-way-taxi' }
              ]
            },
            {
              '@type': 'ItemPage',
              '@id': 'https://ridercalltaxi.com/one-way-taxi#webpage',
              'url': 'https://ridercalltaxi.com/one-way-taxi',
              'name': 'One Way Taxi Service Sankarankovil | Affordable One-Way Drop Cabs',
              'isPartOf': { '@id': 'https://ridercalltaxi.com/#website' },
              'description': 'Economical one-way drop taxi service from Sankarankovil with transparent per-KM pricing.',
              'inLanguage': 'en-IN'
            },
            {
              '@type': 'Service',
              '@id': 'https://ridercalltaxi.com/one-way-taxi#service',
              'name': 'One Way Drop Taxi Service',
              'serviceType': 'One-way intercity taxi drop',
              'provider': { '@id': 'https://ridercalltaxi.com/#organization' },
              'areaServed': { '@type': 'AdministrativeArea', 'name': 'Tamil Nadu' },
              'description': 'Point-to-point one way drop taxi across Tamil Nadu with zero deadhead return billing.'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'round-trip-taxi',
    loadComponent: () => import('./pages/service-pages/service-page-detail.component').then(m => m.ServicePageDetailComponent),
    title: 'Round Trip Taxi Service Sankarankovil | Same-Day & Multi-Day Return Cabs',
    data: {
      serviceSlug: 'round-trip-taxi',
      seo: {
        title: 'Round Trip Taxi Service Sankarankovil | Same-Day & Multi-Day Return Cabs',
        description: 'Budget-friendly round trip taxi service from Sankarankovil. Economical per-km rates from ₹15/km for Sedans with flexible waiting options for hospital and family visits.',
        keywords: 'round trip taxi, round trip cab sankarankovil, two way taxi, same day return taxi, outstation round trip tamil nadu, ரவுண்ட் டிரிப் டாக்ஸி',
        canonical: 'https://ridercalltaxi.com/round-trip-taxi',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Round Trip Taxi Service Sankarankovil | Same-Day & Multi-Day Return Cabs',
        ogDescription: 'Save 40%+ on same-day return trips with Sedan packages from ₹15/km and SUV packages from ₹19/km. Call +91 9363015586.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/round-trip-taxi#breadcrumb',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://ridercalltaxi.com/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://ridercalltaxi.com/services' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Round Trip Taxi Service', 'item': 'https://ridercalltaxi.com/round-trip-taxi' }
              ]
            },
            {
              '@type': 'ItemPage',
              '@id': 'https://ridercalltaxi.com/round-trip-taxi#webpage',
              'url': 'https://ridercalltaxi.com/round-trip-taxi',
              'name': 'Round Trip Taxi Service Sankarankovil | Same-Day & Multi-Day Return Cabs',
              'isPartOf': { '@id': 'https://ridercalltaxi.com/#website' },
              'description': 'Same-day and multi-day round trip taxi services with economical rates and driver waiting options.',
              'inLanguage': 'en-IN'
            },
            {
              '@type': 'Service',
              '@id': 'https://ridercalltaxi.com/round-trip-taxi#service',
              'name': 'Round Trip Taxi Service',
              'serviceType': 'Round-trip return taxi service',
              'provider': { '@id': 'https://ridercalltaxi.com/#organization' },
              'areaServed': { '@type': 'AdministrativeArea', 'name': 'Tamil Nadu' },
              'description': 'Economical two-way round trip taxi service from Sankarankovil starting at ₹15/km for Sedans.'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'airport-transfer',
    loadComponent: () => import('./pages/service-pages/service-page-detail.component').then(m => m.ServicePageDetailComponent),
    title: 'Airport Taxi Transfer Sankarankovil | Madurai, Tuticorin & Trivandrum Cabs',
    data: {
      serviceSlug: 'airport-transfer',
      seo: {
        title: 'Airport Taxi Transfer Sankarankovil | Madurai, Tuticorin & Trivandrum Cabs',
        description: 'Punctual 24/7 airport taxi transfers from Sankarankovil and Tenkasi to Madurai Airport (IXM), Tuticorin (TCR) & Trivandrum (TRV). Flight tracking & luggage carriers.',
        keywords: 'airport taxi sankarankovil, madurai airport taxi, tuticorin airport cab, trivandrum airport taxi tenkasi, flight transfer cab, ஏர்போர்ட் டாக்ஸி சர்வீஸ்',
        canonical: 'https://ridercalltaxi.com/airport-transfer',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Airport Taxi Transfer Sankarankovil | Madurai, Tuticorin & Trivandrum Cabs',
        ogDescription: 'Guaranteed punctual airport pickups and drops to Madurai (120 km), Tuticorin (85 km), and Trivandrum (140 km). Call +91 9363015586.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/airport-transfer#breadcrumb',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://ridercalltaxi.com/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://ridercalltaxi.com/services' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Airport Transfer Service', 'item': 'https://ridercalltaxi.com/airport-transfer' }
              ]
            },
            {
              '@type': 'ItemPage',
              '@id': 'https://ridercalltaxi.com/airport-transfer#webpage',
              'url': 'https://ridercalltaxi.com/airport-transfer',
              'name': 'Airport Taxi Transfer Sankarankovil | Madurai, Tuticorin & Trivandrum Cabs',
              'isPartOf': { '@id': 'https://ridercalltaxi.com/#website' },
              'description': 'Direct airport transfers connecting Sankarankovil with Madurai, Tuticorin, and Trivandrum International Airports.',
              'inLanguage': 'en-IN'
            },
            {
              '@type': 'Service',
              '@id': 'https://ridercalltaxi.com/airport-transfer#service',
              'name': 'Airport Taxi Transfer Service',
              'serviceType': 'Airport ground transportation service',
              'provider': { '@id': 'https://ridercalltaxi.com/#organization' },
              'areaServed': [
                { '@type': 'Airport', 'name': 'Madurai Airport', 'iataCode': 'IXM' },
                { '@type': 'Airport', 'name': 'Tuticorin Airport', 'iataCode': 'TCR' },
                { '@type': 'Airport', 'name': 'Thiruvananthapuram International Airport', 'iataCode': 'TRV' }
              ],
              'description': 'Reliable airport taxi transfers from Sankarankovil to Madurai, Tuticorin, and Trivandrum airports with luggage roof carrier and flight delay tracking.'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'car-rental',
    loadComponent: () => import('./pages/service-pages/service-page-detail.component').then(m => m.ServicePageDetailComponent),
    title: 'Car Rental with Driver in Sankarankovil | Daily & Hourly Chauffeur Cabs',
    data: {
      serviceSlug: 'car-rental',
      seo: {
        title: 'Car Rental with Driver in Sankarankovil | Daily & Hourly Chauffeur Cabs',
        description: 'Rent a car with professional driver in Sankarankovil. Clean hatchbacks, sedans & 7-seater SUVs for full-day family events, business errands, and custom itineraries.',
        keywords: 'car rental sankarankovil, car rental with driver tenkasi, chauffeur car rental, wedding car rental sankarankovil, daily cab hire, கார் வாடகை சங்கரன்கோவில்',
        canonical: 'https://ridercalltaxi.com/car-rental',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Car Rental with Driver in Sankarankovil | Daily & Hourly Chauffeur Cabs',
        ogDescription: 'Hire sanitized, AC commercial taxis with vetted chauffeurs for weddings, family functions, and day hire in Sankarankovil. Call +91 9363015586.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/car-rental#breadcrumb',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://ridercalltaxi.com/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://ridercalltaxi.com/services' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Car Rental Service', 'item': 'https://ridercalltaxi.com/car-rental' }
              ]
            },
            {
              '@type': 'ItemPage',
              '@id': 'https://ridercalltaxi.com/car-rental#webpage',
              'url': 'https://ridercalltaxi.com/car-rental',
              'name': 'Car Rental with Driver in Sankarankovil | Daily & Hourly Chauffeur Cabs',
              'isPartOf': { '@id': 'https://ridercalltaxi.com/#website' },
              'description': 'Private chauffeur car rental services in Sankarankovil for weddings, family gatherings, and full-day itineraries.',
              'inLanguage': 'en-IN'
            },
            {
              '@type': 'Service',
              '@id': 'https://ridercalltaxi.com/car-rental#service',
              'name': 'Car Rental with Chauffeur',
              'serviceType': 'Chauffeur-driven car rental',
              'provider': { '@id': 'https://ridercalltaxi.com/#organization' },
              'areaServed': { '@type': 'City', 'name': 'Sankarankovil' },
              'description': 'Full-day and hourly car rental with courteous, verified professional drivers across Tenkasi and Tirunelveli.'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'corporate-travel',
    loadComponent: () => import('./pages/service-pages/service-page-detail.component').then(m => m.ServicePageDetailComponent),
    title: 'Corporate Travel & Business Taxi Services | Rider Call Taxi Sankarankovil',
    data: {
      serviceSlug: 'corporate-travel',
      seo: {
        title: 'Corporate Travel & Business Taxi Services | Rider Call Taxi Sankarankovil',
        description: 'Executive corporate travel, business taxi rentals, and staff transport services across Tenkasi & Tirunelveli districts. GST billing, verified chauffeurs & punctual pickups.',
        keywords: 'corporate travel sankarankovil, business taxi tenkasi, corporate cab rental, executive travel tirunelveli, GST invoice taxi, நிறுவன டாக்ஸி சேவை',
        canonical: 'https://ridercalltaxi.com/corporate-travel',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Corporate Travel & Business Taxi Services | Rider Call Taxi Sankarankovil',
        ogDescription: 'Punctual executive cabs with monthly GST invoicing, corporate rates, and priority dispatch for business travelers. Call +91 9363015586.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/corporate-travel#breadcrumb',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://ridercalltaxi.com/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://ridercalltaxi.com/services' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Corporate Travel', 'item': 'https://ridercalltaxi.com/corporate-travel' }
              ]
            },
            {
              '@type': 'ItemPage',
              '@id': 'https://ridercalltaxi.com/corporate-travel#webpage',
              'url': 'https://ridercalltaxi.com/corporate-travel',
              'name': 'Corporate Travel & Business Taxi Services | Rider Call Taxi Sankarankovil',
              'isPartOf': { '@id': 'https://ridercalltaxi.com/#website' },
              'description': 'Executive business transportation with automated billing and verified drivers.',
              'inLanguage': 'en-IN'
            },
            {
              '@type': 'Service',
              '@id': 'https://ridercalltaxi.com/corporate-travel#service',
              'name': 'Corporate Travel Taxi Service',
              'serviceType': 'Corporate transportation service',
              'provider': { '@id': 'https://ridercalltaxi.com/#organization' },
              'areaServed': { '@type': 'AdministrativeArea', 'name': 'Tamil Nadu' },
              'description': 'Corporate travel, executive airport transfers, and business visit taxi arrangements with GST compliant billing.'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'tour-packages',
    loadComponent: () => import('./pages/service-pages/service-page-detail.component').then(m => m.ServicePageDetailComponent),
    title: 'Holiday Tour Packages & Temple Cabs | Rider Call Taxi Sankarankovil',
    data: {
      serviceSlug: 'tour-packages',
      seo: {
        title: 'Holiday Tour Packages & Temple Cabs | Rider Call Taxi Sankarankovil',
        description: 'Custom holiday and spiritual tour packages from Sankarankovil. Courtallam Waterfalls, Navatirupathi, Tiruchendur Murugan Temple, Kanyakumari & Rameshwaram cabs.',
        keywords: 'tour packages sankarankovil, courtallam tour cab, tiruchendur temple taxi, navatirupathi cab package, kanyakumari taxi tour, ஆன்மீக சுற்றுலா கார்',
        canonical: 'https://ridercalltaxi.com/tour-packages',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Holiday Tour Packages & Temple Cabs | Rider Call Taxi Sankarankovil',
        ogDescription: 'Spiritual pilgrimage circuits and scenic hill station tours across Courtallam, Tiruchendur, Rameshwaram, and Kanyakumari. Call +91 9363015586.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/tour-packages#breadcrumb',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://ridercalltaxi.com/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://ridercalltaxi.com/services' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Tour Packages', 'item': 'https://ridercalltaxi.com/tour-packages' }
              ]
            },
            {
              '@type': 'ItemPage',
              '@id': 'https://ridercalltaxi.com/tour-packages#webpage',
              'url': 'https://ridercalltaxi.com/tour-packages',
              'name': 'Holiday Tour Packages & Temple Cabs | Rider Call Taxi Sankarankovil',
              'isPartOf': { '@id': 'https://ridercalltaxi.com/#website' },
              'description': 'Curated temple circuit and leisure vacation holiday tour packages with transparent taxi tariffs.',
              'inLanguage': 'en-IN'
            },
            {
              '@type': 'Service',
              '@id': 'https://ridercalltaxi.com/tour-packages#service',
              'name': 'Tour Packages and Pilgrimage Cabs',
              'serviceType': 'Tourism and holiday taxi packages',
              'provider': { '@id': 'https://ridercalltaxi.com/#organization' },
              'areaServed': { '@type': 'AdministrativeArea', 'name': 'Tamil Nadu' },
              'description': 'Custom multi-day and single-day temple tours and holiday travel covering Courtallam, Tiruchendur, Navatirupathi, Madurai, and Kanyakumari.'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog-list.component').then(m => m.BlogListComponent),
    title: 'Tamil Nadu Travel Guides & Taxi Tips | Rider Call Taxi Blog',
    data: {
      seo: {
        title: 'Tamil Nadu Travel Guides & Taxi Tips | Rider Call Taxi Blog',
        description: 'Expert travel guides, highway distance charts, outstation booking tips, and transparent taxi fare comparisons for Sankarankovil, Tenkasi, Tirunelveli and Madurai.',
        keywords: 'taxi blog tamil nadu, sankarankovil travel guide, tenkasi cab tips, outstation taxi advice, one way vs round trip taxi fare, டாக்ஸி பயண வழிகாட்டி',
        canonical: 'https://ridercalltaxi.com/blog',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Tamil Nadu Travel Guides & Taxi Tips | Rider Call Taxi Blog',
        ogDescription: 'Original road trip guides, accurate highway distances, verified fare calculations, and tips for safe cab travel across southern Tamil Nadu.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'website',
        twitterCard: 'summary_large_image',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://ridercalltaxi.com/blog#breadcrumb',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://ridercalltaxi.com/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Travel Guides', 'item': 'https://ridercalltaxi.com/blog' }
              ]
            },
            {
              '@type': 'CollectionPage',
              '@id': 'https://ridercalltaxi.com/blog#webpage',
              'url': 'https://ridercalltaxi.com/blog',
              'name': 'Tamil Nadu Travel Guides & Taxi Tips | Rider Call Taxi Blog',
              'isPartOf': { '@id': 'https://ridercalltaxi.com/#website' },
              'description': 'Collection of original travel guides, distance charts, and taxi booking advice from Rider Call Taxi.',
              'inLanguage': 'en-IN'
            },
            {
              '@type': 'Blog',
              '@id': 'https://ridercalltaxi.com/blog#blog',
              'name': 'Rider Call Taxi Travel Blog',
              'url': 'https://ridercalltaxi.com/blog',
              'publisher': { '@id': 'https://ridercalltaxi.com/#organization' },
              'description': 'Useful travel guides and local taxi advice for Sankarankovil, Tenkasi, and Tirunelveli.'
            }
          ]
        }
      } as RouteSeoConfig
    }
  },
  {
    path: 'blog/how-to-book-taxi-sankarankovil',
    loadComponent: () => import('./pages/blog/blog-post.component').then(m => m.BlogPostComponent),
    title: 'How to Book a Taxi in Sankarankovil | Rider Call Taxi Guide',
    data: {
      postSlug: 'how-to-book-taxi-sankarankovil',
      seo: {
        title: 'How to Book a Taxi in Sankarankovil | Rider Call Taxi Guide',
        description: 'Learn how to book a 24/7 taxi in Sankarankovil within 10 minutes. Phone call and WhatsApp booking instructions, verified vehicle options, and transparent tariff rates.',
        keywords: 'how to book taxi in sankarankovil, sankarankovil cab booking, rider call taxi phone number, sankarankovil taxi booking',
        canonical: 'https://ridercalltaxi.com/blog/how-to-book-taxi-sankarankovil',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'How to Book a Taxi in Sankarankovil | Rider Call Taxi Guide',
        ogDescription: 'Step-by-step guide to booking reliable local cabs and outstation taxis in Sankarankovil with transparent per-KM billing.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'article',
        twitterCard: 'summary_large_image'
      } as RouteSeoConfig
    }
  },
  {
    path: 'blog/sankarankovil-to-tenkasi-taxi-guide',
    loadComponent: () => import('./pages/blog/blog-post.component').then(m => m.BlogPostComponent),
    title: 'Sankarankovil to Tenkasi Taxi Guide | Fare, Distance & Route',
    data: {
      postSlug: 'sankarankovil-to-tenkasi-taxi-guide',
      seo: {
        title: 'Sankarankovil to Tenkasi Taxi Guide | Fare, Distance & Route',
        description: 'Travel from Sankarankovil to Tenkasi (34 km) in 45-50 mins with Rider Call Taxi. Check Sedan & SUV fares, Courtallam waterfalls trip tips, and booking info.',
        keywords: 'sankarankovil to tenkasi taxi, sankarankovil to courtallam cab, tenkasi taxi fare, sankarankovil to tenkasi distance',
        canonical: 'https://ridercalltaxi.com/blog/sankarankovil-to-tenkasi-taxi-guide',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Sankarankovil to Tenkasi Taxi Guide | Fare, Distance & Route',
        ogDescription: 'Travel from Sankarankovil to Tenkasi and Courtallam waterfalls with verified cabs and transparent fares.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'article',
        twitterCard: 'summary_large_image'
      } as RouteSeoConfig
    }
  },
  {
    path: 'blog/sankarankovil-to-tirunelveli-taxi-guide',
    loadComponent: () => import('./pages/blog/blog-post.component').then(m => m.BlogPostComponent),
    title: 'Sankarankovil to Tirunelveli Taxi Guide | Route, Fare & Distance',
    data: {
      postSlug: 'sankarankovil-to-tirunelveli-taxi-guide',
      seo: {
        title: 'Sankarankovil to Tirunelveli Taxi Guide | Route, Fare & Distance',
        description: 'Book a taxi from Sankarankovil to Tirunelveli (56 km, 75 mins). Transparent fares for Tirunelveli Junction, Medical College High Ground, and Nellaiyappar Temple.',
        keywords: 'sankarankovil to tirunelveli taxi, sankarankovil to nellai cab, sankarankovil to tirunelveli distance, tirunelveli taxi fare',
        canonical: 'https://ridercalltaxi.com/blog/sankarankovil-to-tirunelveli-taxi-guide',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Sankarankovil to Tirunelveli Taxi Guide | Route, Fare & Distance',
        ogDescription: 'Reliable taxi service between Sankarankovil and Tirunelveli Junction, Medical College, and New Bus Stand.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'article',
        twitterCard: 'summary_large_image'
      } as RouteSeoConfig
    }
  },
  {
    path: 'blog/outstation-taxi-booking-tips',
    loadComponent: () => import('./pages/blog/blog-post.component').then(m => m.BlogPostComponent),
    title: 'Outstation Taxi Booking Tips: 7 Must-Know Secrets | Rider Call Taxi',
    data: {
      postSlug: 'outstation-taxi-booking-tips',
      seo: {
        title: 'Outstation Taxi Booking Tips: 7 Must-Know Secrets | Rider Call Taxi',
        description: 'Top 7 tips for booking an outstation cab in Tamil Nadu: RTO yellow plates, transparent toll billing, day vs night slabs, and avoiding advance payment fraud.',
        keywords: 'outstation taxi booking tips, outstation cab tips tamil nadu, safe taxi booking, yellow board vs white board taxi',
        canonical: 'https://ridercalltaxi.com/blog/outstation-taxi-booking-tips',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Outstation Taxi Booking Tips: 7 Must-Know Secrets | Rider Call Taxi',
        ogDescription: 'Learn essential tips for safe and transparent outstation cab travel in Tamil Nadu.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'article',
        twitterCard: 'summary_large_image'
      } as RouteSeoConfig
    }
  },
  {
    path: 'blog/one-way-vs-round-trip-taxi',
    loadComponent: () => import('./pages/blog/blog-post.component').then(m => m.BlogPostComponent),
    title: 'One-Way vs Round-Trip Taxi: Which Saves More? | Rider Call Taxi',
    data: {
      postSlug: 'one-way-vs-round-trip-taxi',
      seo: {
        title: 'One-Way vs Round-Trip Taxi: Which Saves More? | Rider Call Taxi',
        description: 'Should you book a one-way drop or a round-trip cab? Compare per-KM rates, waiting charges, and real examples from Sankarankovil with Rider Call Taxi.',
        keywords: 'one way taxi vs round trip taxi, one way drop taxi tamil nadu, cheap outstation taxi, taxi fare comparison',
        canonical: 'https://ridercalltaxi.com/blog/one-way-vs-round-trip-taxi',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'One-Way vs Round-Trip Taxi: Which Saves More? | Rider Call Taxi',
        ogDescription: 'Honest fare breakdown comparing one-way drop taxis vs round-trip packages for Tamil Nadu routes.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'article',
        twitterCard: 'summary_large_image'
      } as RouteSeoConfig
    }
  },
  {
    path: 'blog/airport-transfer-booking-guide',
    loadComponent: () => import('./pages/blog/blog-post.component').then(m => m.BlogPostComponent),
    title: 'Airport Taxi Transfer Guide: Madurai, Tuticorin & Trivandrum | Rider Call Taxi',
    data: {
      postSlug: 'airport-transfer-booking-guide',
      seo: {
        title: 'Airport Taxi Transfer Guide: Madurai, Tuticorin & Trivandrum | Rider Call Taxi',
        description: 'Book 24/7 airport taxi from Sankarankovil to Madurai Airport (IXM - 120 km), Tuticorin (TCR - 85 km), and Trivandrum (TRV - 140 km). Clean AC cabs & on-time pickup.',
        keywords: 'airport taxi sankarankovil, madurai airport taxi from sankarankovil, tuticorin airport cab, trivandrum airport taxi tenkasi',
        canonical: 'https://ridercalltaxi.com/blog/airport-transfer-booking-guide',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogTitle: 'Airport Taxi Transfer Guide: Madurai, Tuticorin & Trivandrum | Rider Call Taxi',
        ogDescription: 'Stress-free airport pickups and transfers from Sankarankovil to all South Tamil Nadu airports.',
        ogImage: 'https://ridercalltaxi.com/images/logo.png',
        ogType: 'article',
        twitterCard: 'summary_large_image'
      } as RouteSeoConfig
    }
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./pages/blog/blog-post.component').then(m => m.BlogPostComponent),
    title: 'Travel Guide | Rider Call Taxi Sankarankovil',
    data: {
      seo: {
        title: 'Travel Guide | Rider Call Taxi Sankarankovil',
        description: 'Read comprehensive travel guides, route distances, and taxi booking tips from Rider Call Taxi.',
        canonical: 'https://ridercalltaxi.com/blog',
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        ogType: 'article'
      } as RouteSeoConfig
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
