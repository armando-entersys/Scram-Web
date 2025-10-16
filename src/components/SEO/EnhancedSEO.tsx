"use client";

import React from "react";

export interface ServiceOffering {
  name: string;
  description: string;
  priceRange?: string;
  duration?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

interface EnhancedSEOProps {
  pageType: "service" | "landing" | "product" | "about";
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  services?: ServiceOffering[];
  faqs?: FAQItem[];
  breadcrumbs?: Array<{ name: string; url: string }>;
  rating?: {
    value: number;
    count: number;
  };
  certifications?: string[];
  features?: string[];
}

/**
 * Componente EnhancedSEO
 *
 * Genera Schema.org estructurado optimizado para crawlers de IA (ChatGPT, Claude, Perplexity, Google Gemini)
 *
 * Características:
 * - BreadcrumbList para jerarquía de navegación
 * - FAQPage para preguntas frecuentes
 * - Service/Product para ofertas de servicios
 * - Organization con ratings y certificaciones
 * - Optimizado para búsqueda conversacional
 */
const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  pageType,
  title,
  description,
  url,
  imageUrl,
  services = [],
  faqs = [],
  breadcrumbs = [],
  rating,
  certifications = [],
  features = []
}) => {

  // BreadcrumbList Schema
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.scram2k.com"
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": crumb.name,
        "item": crumb.url
      }))
    ]
  } : null;

  // FAQPage Schema
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Service Schema
  const serviceSchema = services.length > 0 && pageType === "service" ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "SCRAM Consulting",
      "url": "https://www.scram2k.com"
    },
    ...(imageUrl && { "image": imageUrl }),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Servicios de ${title}`,
      "itemListElement": services.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          ...(service.duration && { "duration": service.duration })
        },
        ...(service.priceRange && {
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": service.priceRange,
            "priceCurrency": "MXN"
          }
        })
      }))
    },
    ...(rating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": rating.value,
        "reviewCount": rating.count,
        "bestRating": "5",
        "worstRating": "1"
      }
    }),
    "areaServed": {
      "@type": "Country",
      "name": "Mexico"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": url,
      "availableLanguage": ["es", "en"]
    },
    "serviceType": title,
    ...(features.length > 0 && {
      "additionalProperty": features.map(feature => ({
        "@type": "PropertyValue",
        "name": feature
      }))
    })
  } : null;

  // WebPage Schema with enhanced metadata
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    ...(imageUrl && { "image": imageUrl }),
    "inLanguage": "es-MX",
    "isPartOf": {
      "@type": "WebSite",
      "name": "SCRAM Consulting",
      "url": "https://www.scram2k.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SCRAM Consulting",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.scram2k.com/images/scram/logo.png"
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  // Organization Schema (enhanced)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SCRAM Consulting",
    "legalName": "Scram S.A. de C.V.",
    "url": "https://www.scram2k.com",
    "logo": "https://www.scram2k.com/images/scram/logo.png",
    "foundingDate": "1997",
    "description": "Proveedor integral de soluciones IT en México. Especialistas en desarrollo de software, ciberseguridad, infraestructura, hardware industrial y soporte técnico profesional.",
    "slogan": "Transformamos Ideas en Realidades Tangibles",
    "telephone": ["+52-55-1113-0259", "+52-999-388-2606"],
    "email": "contacto@scram2k.com",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Paseo de la Reforma 342, Piso 26",
        "addressLocality": "Ciudad de México",
        "addressRegion": "CDMX",
        "postalCode": "06600",
        "addressCountry": "MX"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Pinguicas Lote 16, Manzana 138",
        "addressLocality": "Cuautitlán Izcalli",
        "addressRegion": "Estado de México",
        "postalCode": "54760",
        "addressCountry": "MX"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Mexico"
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    ...(rating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": rating.value,
        "reviewCount": rating.count,
        "bestRating": "5"
      }
    }),
    "sameAs": [
      "https://www.facebook.com/scram2k",
      "https://x.com/scramnet",
      "https://www.linkedin.com/company/scram2k/",
      "https://www.instagram.com/scramnet/"
    ],
    ...(certifications.length > 0 && {
      "award": certifications.join(", ")
    }),
    "knowsAbout": [
      "Desarrollo de Software",
      "Ciberseguridad",
      "Infraestructura IT",
      "Seguridad Electrónica",
      "Soporte Técnico",
      "Hardware Industrial"
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "50-100"
    }
  };

  return (
    <>
      {/* BreadcrumbList Schema */}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      {/* FAQPage Schema */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Service Schema */}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
};

export default EnhancedSEO;
