import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/scram/Layout/Navbar";
import Footer from "@/components/scram/Layout/Footer";
import MainBannerArquitectura from '@/components/scram/ArquitecturaLanding/MainBannerArquitectura';
import FeaturesArquitectura from '@/components/scram/ArquitecturaLanding/FeaturesArquitectura';
import Partners from '@/components/scram/PartnerStyleTwo';
import { ServiceSchema, BreadcrumbSchema } from "@/components/scram/SEO/SchemaOrg";
import { SERVICES_SEO, SITE_CONFIG } from "@/config/seo";
import Script from "next/script";

// SEO Metadata optimizado para IA y CTR
export const metadata: Metadata = {
  title: SERVICES_SEO["arquitectura-software"].title,
  description: SERVICES_SEO["arquitectura-software"].description,
  keywords: SERVICES_SEO["arquitectura-software"].keywords,

  openGraph: {
    title: SERVICES_SEO["arquitectura-software"].title,
    description: SERVICES_SEO["arquitectura-software"].description,
    url: `${SITE_CONFIG.url}${SERVICES_SEO["arquitectura-software"].canonicalUrl}`,
    type: "website",
    images: [
      {
        url: "/images/scram/servicios/arquitectura-de-software.webp",
        width: 1200,
        height: 630,
        alt: "Arquitectura de Software empresarial"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: SERVICES_SEO["arquitectura-software"].title,
    description: SERVICES_SEO["arquitectura-software"].description,
  },

  alternates: {
    canonical: SERVICES_SEO["arquitectura-software"].canonicalUrl,
  }
};

const Page: React.FC = () => {
  return (
    <>
      {/* Schema.org para SEO */}
      <ServiceSchema
        name="Arquitectura de Software, Apps y Plataformas Web"
        description="Desarrollo de aplicaciones empresariales escalables y seguras con tecnología de clase mundial. Clientes: FEMSA, Grupo Modelo, Chedraui"
        url="/arquitectura-software-apps-plataformas-web"
        serviceType="Software Development"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Servicios", url: "/#servicios" },
          { name: "Arquitectura de Software", url: "/arquitectura-software-apps-plataformas-web" }
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
      <MainBannerArquitectura />
      <br />
      <Partners />
      <br />
      <FeaturesArquitectura />
      <br />
      <Footer />
    </>
  );
};

export default Page;
