import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/scram/Layout/Navbar";
import Footer from "@/components/scram/Layout/Footer";
import MainBannerSeguridadSimple from '@/components/scram/SeguridadElectronicaLanding/MainBannerSeguridadSimple';
import FeaturesSeguridad from '@/components/scram/SeguridadElectronicaLanding/FeaturesSeguridad';
import CasoExitoHertz from '@/components/scram/SeguridadElectronicaLanding/CasoExitoHertz';
import Partners from '@/components/scram/PartnerStyleTwo';
import EnhancedSEO from "@/components/SEO/EnhancedSEO";
import FAQSchema from "@/components/SEO/FAQSchema";
import { ServiceSchema, BreadcrumbSchema } from "@/components/scram/SEO/SchemaOrg";
import { SERVICES_SEO, SITE_CONFIG } from "@/config/seo";
import { seguridadElectronicaServices, seguridadElectronicaFAQs, organizationData } from "@/config/siteData";
import Script from "next/script";

// SEO Metadata optimizado para IA y CTR
export const metadata: Metadata = {
  title: SERVICES_SEO["seguridad-electronica"].title,
  description: SERVICES_SEO["seguridad-electronica"].description,
  keywords: SERVICES_SEO["seguridad-electronica"].keywords,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.legalName,

  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    title: SERVICES_SEO["seguridad-electronica"].title,
    description: SERVICES_SEO["seguridad-electronica"].description,
    url: `${SITE_CONFIG.url}${SERVICES_SEO["seguridad-electronica"].canonicalUrl}`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/scram/servicios/cctv.webp`,
        width: 1200,
        height: 630,
        alt: "Soluciones de Seguridad Electrónica con IA - SCRAM Consulting"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    site: SITE_CONFIG.twitter.site,
    creator: SITE_CONFIG.twitter.creator,
    title: SERVICES_SEO["seguridad-electronica"].title,
    description: SERVICES_SEO["seguridad-electronica"].description,
    images: [`${SITE_CONFIG.url}/images/scram/servicios/cctv.webp`]
  },

  alternates: {
    canonical: `${SITE_CONFIG.url}${SERVICES_SEO["seguridad-electronica"].canonicalUrl}`,
    languages: {
      'es-MX': `${SITE_CONFIG.url}${SERVICES_SEO["seguridad-electronica"].canonicalUrl}`,
    }
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

const Page: React.FC = () => {
  return (
    <>
      {/* Enhanced SEO for AI Crawlers */}
      <EnhancedSEO
        pageType="service"
        title="Soluciones de Seguridad Electrónica con IA"
        description="Videovigilancia inteligente 4K con IA, control de acceso biométrico, monitoreo 24/7, detección facial. Desde 1997. Cliente destacado: Hertz México con 75% reducción en incidentes."
        url="https://www.scram2k.com/soluciones-seguridad-electronica"
        imageUrl="https://www.scram2k.com/images/scram/servicios/cctv.webp"
        services={seguridadElectronicaServices}
        faqs={seguridadElectronicaFAQs}
        breadcrumbs={[
          { name: "Home", url: "https://www.scram2k.com" },
          { name: "Servicios", url: "https://www.scram2k.com/#servicios" },
          { name: "Seguridad Electrónica", url: "https://www.scram2k.com/soluciones-seguridad-electronica" }
        ]}
        rating={organizationData.rating}
        certifications={organizationData.certifications}
        features={[
          "Videovigilancia 4K con IA",
          "Control de acceso biométrico",
          "Monitoreo 24/7 en tiempo real",
          "Detección facial y reconocimiento",
          "Almacenamiento híbrido (local + nube)",
          "Apps móviles iOS y Android",
          "Instalación en 1-14 días",
          "Garantía 1-3 años",
          "Soporte técnico 24/7",
          "ROI en 12 meses"
        ]}
      />

      {/* Legacy Schema.org for compatibility */}
      <ServiceSchema
        name="Soluciones de Seguridad Electrónica"
        description="Videovigilancia inteligente con IA, controles de acceso biométricos, monitoreo 24/7. Cliente destacado: Hertz México"
        url="/soluciones-seguridad-electronica"
        serviceType="Professional Service"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Servicios", url: "/#servicios" },
          { name: "Seguridad Electrónica", url: "/soluciones-seguridad-electronica" }
        ]}
      />

      <Script
        strategy="beforeInteractive"
        async
        id="analyzeeprincipal"
        src="https://cdn.analyzee.io/sdk/WJ9shmvFDGySBxuQvEoh.js"
        dangerouslySetInnerHTML={{ __html: '' }}
      />

      <Navbar />
      <br /><br /><br /><br /><br />
      <MainBannerSeguridadSimple />
      <br />
      <Partners />
      <br />
      <FeaturesSeguridad />
      <br />
      <CasoExitoHertz />
      <br />

      {/* FAQ Section with Visual Display */}
      <FAQSchema
        faqs={seguridadElectronicaFAQs}
        title="Preguntas Frecuentes - Seguridad Electrónica"
        description="Encuentra respuestas a las dudas más comunes sobre nuestros sistemas de videovigilancia, control de acceso y seguridad electrónica"
        showVisual={true}
      />
      <br />

      <Footer />
    </>
  );
};

export default Page;
