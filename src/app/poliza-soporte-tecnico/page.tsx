import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/scram/Layout/Navbar";
import Footer from "@/components/scram/Layout/Footer";
import MainBannerSoporte from '@/components/scram/SoporteTecnicoLanding/MainBannerSoporte';
import FeaturesSoporte from '@/components/scram/SoporteTecnicoLanding/FeaturesSoporte';
import Partners from '@/components/scram/PartnerStyleTwo';
import { ServiceSchema, BreadcrumbSchema } from "@/components/scram/SEO/SchemaOrg";
import { SERVICES_SEO, SITE_CONFIG } from "@/config/seo";
import Script from "next/script";

// SEO Metadata optimizado para IA y CTR
export const metadata: Metadata = {
  title: SERVICES_SEO["soporte-tecnico"].title,
  description: SERVICES_SEO["soporte-tecnico"].description,
  keywords: SERVICES_SEO["soporte-tecnico"].keywords,

  openGraph: {
    title: SERVICES_SEO["soporte-tecnico"].title,
    description: SERVICES_SEO["soporte-tecnico"].description,
    url: `${SITE_CONFIG.url}${SERVICES_SEO["soporte-tecnico"].canonicalUrl}`,
    type: "website",
    images: [
      {
        url: "/images/scram/servicios/soporte2.webp",
        width: 1200,
        height: 630,
        alt: "Póliza de Soporte Técnico Empresarial"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: SERVICES_SEO["soporte-tecnico"].title,
    description: SERVICES_SEO["soporte-tecnico"].description,
  },

  alternates: {
    canonical: SERVICES_SEO["soporte-tecnico"].canonicalUrl,
  }
};

const Page: React.FC = () => {
  return (
    <>
      {/* Schema.org para SEO */}
      <ServiceSchema
        name="Póliza de Soporte Técnico Empresarial"
        description="Mantenimiento preventivo y correctivo, soporte remoto y en sitio. 3 planes: Negocios, Pyme, Empresarial. Respuesta: 4-24 horas"
        url="/poliza-soporte-tecnico"
        serviceType="Professional Service"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Servicios", url: "/#servicios" },
          { name: "Póliza de Soporte Técnico", url: "/poliza-soporte-tecnico" }
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
      <MainBannerSoporte />
      <br />
      <Partners />
      <br />
      <FeaturesSoporte />
      <br />
      <Footer />
    </>
  );
};

export default Page;
