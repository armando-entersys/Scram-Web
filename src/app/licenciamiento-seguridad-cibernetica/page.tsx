import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/scram/Layout/Navbar";
import Footer from "@/components/scram/Layout/Footer";
import MainBannerLicenciamiento from '@/components/scram/LicenciamientoLanding/MainBannerLicenciamiento';
import FeaturesLicenciamiento from '@/components/scram/LicenciamientoLanding/FeaturesLicenciamiento';
import Partners from '@/components/scram/PartnerStyleTwo';
import { ServiceSchema, BreadcrumbSchema } from "@/components/scram/SEO/SchemaOrg";
import { SERVICES_SEO, SITE_CONFIG } from "@/config/seo";
import Script from "next/script";

// SEO Metadata optimizado para IA y CTR
export const metadata: Metadata = {
  title: SERVICES_SEO["licenciamiento-ciberseguridad"].title,
  description: SERVICES_SEO["licenciamiento-ciberseguridad"].description,
  keywords: SERVICES_SEO["licenciamiento-ciberseguridad"].keywords,

  openGraph: {
    title: SERVICES_SEO["licenciamiento-ciberseguridad"].title,
    description: SERVICES_SEO["licenciamiento-ciberseguridad"].description,
    url: `${SITE_CONFIG.url}${SERVICES_SEO["licenciamiento-ciberseguridad"].canonicalUrl}`,
    type: "website",
    images: [
      {
        url: "/images/scram/servicios/licenciamiento.webp",
        width: 1200,
        height: 630,
        alt: "Licenciamiento y Seguridad Cibernética"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: SERVICES_SEO["licenciamiento-ciberseguridad"].title,
    description: SERVICES_SEO["licenciamiento-ciberseguridad"].description,
  },

  alternates: {
    canonical: SERVICES_SEO["licenciamiento-ciberseguridad"].canonicalUrl,
  }
};

const Page: React.FC = () => {
  return (
    <>
      {/* Schema.org para SEO */}
      <ServiceSchema
        name="Licenciamiento y Seguridad Cibernética"
        description="Licencias originales de Microsoft, Oracle, IBM, Cisco, VMware, Fortinet. Protección contra malware, ransomware y amenazas digitales"
        url="/licenciamiento-seguridad-cibernetica"
        serviceType="Computer Security Service"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Servicios", url: "/#servicios" },
          { name: "Licenciamiento y Ciberseguridad", url: "/licenciamiento-seguridad-cibernetica" }
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
      <MainBannerLicenciamiento />
      <br />
      <Partners />
      <br />
      <FeaturesLicenciamiento />
      <br />
      <Footer />
    </>
  );
};

export default Page;
