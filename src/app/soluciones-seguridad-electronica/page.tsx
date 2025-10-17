import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/scram/Layout/Navbar";
import Footer from "@/components/scram/Layout/Footer";
import MainBannerSeguridadSimple from '@/components/scram/SeguridadElectronicaLanding/MainBannerSeguridadSimple';
import FeaturesSeguridad from '@/components/scram/SeguridadElectronicaLanding/FeaturesSeguridad';
import Partners from '@/components/scram/PartnerStyleTwo';
import { ServiceSchema, BreadcrumbSchema } from "@/components/scram/SEO/SchemaOrg";
import { SERVICES_SEO, SITE_CONFIG } from "@/config/seo";
import Script from "next/script";

// SEO Metadata optimizado para IA y CTR
export const metadata: Metadata = {
  title: SERVICES_SEO["seguridad-electronica"].title,
  description: SERVICES_SEO["seguridad-electronica"].description,
  keywords: SERVICES_SEO["seguridad-electronica"].keywords,

  openGraph: {
    title: SERVICES_SEO["seguridad-electronica"].title,
    description: SERVICES_SEO["seguridad-electronica"].description,
    url: `${SITE_CONFIG.url}${SERVICES_SEO["seguridad-electronica"].canonicalUrl}`,
    type: "website",
    images: [
      {
        url: "/images/scram/servicios/cctv.webp",
        width: 1200,
        height: 630,
        alt: "Soluciones de Seguridad Electrónica con IA"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: SERVICES_SEO["seguridad-electronica"].title,
    description: SERVICES_SEO["seguridad-electronica"].description,
  },

  alternates: {
    canonical: SERVICES_SEO["seguridad-electronica"].canonicalUrl,
  }
};

const Page: React.FC = () => {
  return (
    <>
      {/* Schema.org para SEO */}
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
      <Footer />
    </>
  );
};

export default Page;
