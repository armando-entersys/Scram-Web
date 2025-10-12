"use client";

import React from "react";
import { SITE_CONFIG } from "@/config/seo";

// Schema.org Organization - Para optimización de IA y motores de búsqueda
export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    "name": SITE_CONFIG.name,
    "legalName": SITE_CONFIG.legalName,
    "url": SITE_CONFIG.url,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_CONFIG.url}/images/scram/logo.png`,
      "width": 110,
      "height": 36
    },
    "foundingDate": `${SITE_CONFIG.foundingYear}-01-01`,
    "description": SITE_CONFIG.description,
    "slogan": SITE_CONFIG.slogan,
    "email": SITE_CONFIG.contact.email,
    "telephone": SITE_CONFIG.contact.phone.mexico,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.locations[0].address.street,
      "addressLocality": SITE_CONFIG.locations[0].address.city,
      "addressRegion": SITE_CONFIG.locations[0].address.state,
      "postalCode": SITE_CONFIG.locations[0].address.postalCode,
      "addressCountry": SITE_CONFIG.locations[0].address.countryCode
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE_CONFIG.locations[0].geo.latitude,
      "longitude": SITE_CONFIG.locations[0].geo.longitude
    },
    "sameAs": [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.twitter,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.linkedin
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": SITE_CONFIG.contact.phone.mexico,
        "contactType": "customer service",
        "areaServed": ["MX", "US"],
        "availableLanguage": ["Spanish", "English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": SITE_CONFIG.contact.phone.whatsapp,
        "contactType": "customer service",
        "contactOption": "TollFree",
        "areaServed": "MX"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Schema.org LocalBusiness - Para SEO local y GEO optimization
export const LocalBusinessSchema = () => {
  const locations = SITE_CONFIG.locations.map((location, index) => ({
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#location-${index}`,
    "name": `${SITE_CONFIG.name} - ${location.name}`,
    "image": `${SITE_CONFIG.url}/images/scram/logo.png`,
    "telephone": location.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.address.street,
      "addressLocality": location.address.city,
      "addressRegion": location.address.state,
      "postalCode": location.address.postalCode,
      "addressCountry": location.address.countryCode
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.geo.latitude,
      "longitude": location.geo.longitude
    },
    "url": SITE_CONFIG.url,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(locations) }}
    />
  );
};

// Schema.org Service - Para servicios específicos
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  provider?: string;
  areaServed?: string[];
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  url,
  serviceType,
  provider = SITE_CONFIG.name,
  areaServed = ["MX", "US"]
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "name": name,
    "description": description,
    "url": `${SITE_CONFIG.url}${url}`,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "@id": `${SITE_CONFIG.url}/#organization`
    },
    "areaServed": areaServed.map(code => ({
      "@type": "Country",
      "name": code === "MX" ? "Mexico" : "United States"
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${name} Services`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": name
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Schema.org BreadcrumbList - Para navegación
interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${SITE_CONFIG.url}${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Schema.org FAQPage - Para preguntas frecuentes
interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Schema.org WebSite - Para búsqueda en el sitio
export const WebSiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    "url": SITE_CONFIG.url,
    "name": SITE_CONFIG.name,
    "description": SITE_CONFIG.description,
    "publisher": {
      "@id": `${SITE_CONFIG.url}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_CONFIG.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "es-MX"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Componente principal que incluye todos los schemas necesarios
export const GlobalSchemas = () => {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebSiteSchema />
    </>
  );
};

export default GlobalSchemas;
