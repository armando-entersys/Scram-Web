import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/scram/Layout/Navbar";
import Footer from "@/components/scram/Layout/Footer";
import MainBannerIndustrial from '@/components/scram/IndustrialLanding/MainBannerIndustrial';
import FeaturesIndustrial from '@/components/scram/IndustrialLanding/FeaturesIndustrial';
import Partners from '@/components/scram/PartnerStyleTwo';
import { ServiceSchema, BreadcrumbSchema } from "@/components/scram/SEO/SchemaOrg";
import { SERVICES_SEO, SITE_CONFIG } from "@/config/seo";
import Script from "next/script";

// SEO Metadata optimizado para IA y CTR
export const metadata: Metadata = {
  title: SERVICES_SEO["hardware-industrial"].title,
  description: SERVICES_SEO["hardware-industrial"].description,
  keywords: SERVICES_SEO["hardware-industrial"].keywords,

  openGraph: {
    title: SERVICES_SEO["hardware-industrial"].title,
    description: SERVICES_SEO["hardware-industrial"].description,
    url: `${SITE_CONFIG.url}${SERVICES_SEO["hardware-industrial"].canonicalUrl}`,
    type: "website",
    images: [
      {
        url: "/images/scram/servicios/fabrica.webp",
        width: 1200,
        height: 630,
        alt: "Equipamiento Hardware y Soluciones Industriales"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: SERVICES_SEO["hardware-industrial"].title,
    description: SERVICES_SEO["hardware-industrial"].description,
  },

  alternates: {
    canonical: SERVICES_SEO["hardware-industrial"].canonicalUrl,
  }
};

const Page: React.FC = () => {
  return (
    <>
      {/* Schema.org para SEO */}
      <ServiceSchema
        name="Equipamiento, Hardware y Soluciones Industriales"
        description="Más de 15,000 piezas de tecnología IT y equipos industriales. Marcas: HP, Dell, Lenovo, Siemens, ABB, Bosch"
        url="/equipamiento-hardware-soluciones-industriales"
        serviceType="Hardware Store"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Servicios", url: "/#servicios" },
          { name: "Hardware Industrial", url: "/equipamiento-hardware-soluciones-industriales" }
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
      <MainBannerIndustrial />
      <br />
      <Partners />
      <br />
      <FeaturesIndustrial />
      <br />
      <Footer />
    </>
  );
};

export default Page;
