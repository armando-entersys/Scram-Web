import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/scram/Layout/Navbar";
import Footer from "@/components/scram/Layout/Footer";
import MainBannerRedes from '@/components/scram/RedesLanding/MainBannerRedes';
import FeaturesRedes from '@/components/scram/RedesLanding/FeaturesRedes';
import Partners from '@/components/scram/PartnerStyleTwo';
import { ServiceSchema, BreadcrumbSchema } from "@/components/scram/SEO/SchemaOrg";
import { SERVICES_SEO, SITE_CONFIG } from "@/config/seo";
import Script from "next/script";

// SEO Metadata optimizado para IA y CTR
export const metadata: Metadata = {
  title: SERVICES_SEO["infraestructura-conectividad"].title,
  description: SERVICES_SEO["infraestructura-conectividad"].description,
  keywords: SERVICES_SEO["infraestructura-conectividad"].keywords,

  openGraph: {
    title: SERVICES_SEO["infraestructura-conectividad"].title,
    description: SERVICES_SEO["infraestructura-conectividad"].description,
    url: `${SITE_CONFIG.url}${SERVICES_SEO["infraestructura-conectividad"].canonicalUrl}`,
    type: "website",
    images: [
      {
        url: "/images/scram/servicios/conectividad.webp",
        width: 1200,
        height: 630,
        alt: "Infraestructura y Soluciones de Conectividad"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: SERVICES_SEO["infraestructura-conectividad"].title,
    description: SERVICES_SEO["infraestructura-conectividad"].description,
  },

  alternates: {
    canonical: SERVICES_SEO["infraestructura-conectividad"].canonicalUrl,
  }
};

const Page: React.FC = () => {
  return (
    <>
      {/* Schema.org para SEO */}
      <ServiceSchema
        name="Infraestructura y Soluciones de Conectividad"
        description="Cableado estructurado certificado, fibra óptica, redes LAN/WAN, construcción de centros de datos. Partners: Cisco, Panduit, Belden"
        url="/infraestructura-soluciones-conectividad"
        serviceType="Professional Service"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Servicios", url: "/#servicios" },
          { name: "Infraestructura y Conectividad", url: "/infraestructura-soluciones-conectividad" }
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
      <MainBannerRedes />
      <br />
      <Partners />
      <br />
      <FeaturesRedes />
      <br />
      <Footer />
    </>
  );
};

export default Page;
