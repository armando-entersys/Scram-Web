import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/scram/Layout/Navbar";
import Footer from "@/components/scram/Layout/Footer";
import MainBannerLicenciamiento from '@/components/scram/LicenciamientoLanding/MainBannerLicenciamiento';
import FeaturesLicenciamiento from '@/components/scram/LicenciamientoLanding/FeaturesLicenciamiento';
import Partners from '@/components/scram/PartnerStyleTwo';
import { ServiceSchema, BreadcrumbSchema } from "@/components/scram/SEO/SchemaOrg";
import { SERVICES_SEO, SITE_CONFIG } from "@/config/seo";
import EnhancedSEO from "@/components/SEO/EnhancedSEO";
import FAQSchema from "@/components/SEO/FAQSchema";
import AnalyzeeScript from "@/components/Analytics/AnalyzeeScript";
import { ciberseguridadServices, ciberseguridadFAQs, organizationData } from "@/config/siteData";

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
      {/* Enhanced SEO for AI Crawlers */}
      <EnhancedSEO
        pageType="service"
        title="Ciberseguridad Empresarial y Licenciamiento de Software"
        description="Protección completa contra ransomware, malware y amenazas cibernéticas. Auditorías de seguridad, firewalls Next-Gen, SOC 24/7. Licencias originales Microsoft, Oracle, IBM, Cisco, VMware, Fortinet. Partners certificados con más de 25 años de experiencia."
        url="https://www.scram2k.com/licenciamiento-seguridad-cibernetica"
        imageUrl="https://www.scram2k.com/images/scram/servicios/licenciamiento.webp"
        services={ciberseguridadServices}
        faqs={ciberseguridadFAQs}
        breadcrumbs={[
          { name: "Servicios", url: "https://www.scram2k.com/#servicios" },
          { name: "Ciberseguridad", url: "https://www.scram2k.com/licenciamiento-seguridad-cibernetica" }
        ]}
        rating={organizationData.rating}
        certifications={organizationData.certifications}
        features={[
          "Auditorías de seguridad con pentesting",
          "Firewall de nueva generación (Next-Gen)",
          "SOC y monitoreo 24/7",
          "Respaldo automatizado 3-2-1",
          "Cumplimiento ISO 27001",
          "Respuesta a incidentes"
        ]}
      />

      {/* Schema.org para SEO (legacy - mantener por compatibilidad) */}
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

      {/* Analytics Script - Solo en producción */}
      <AnalyzeeScript />

      <Navbar />
      <br /><br /><br /><br /><br />
      <MainBannerLicenciamiento />
      <br />
      <Partners />
      <br />
      <FeaturesLicenciamiento />
      <br />

      {/* FAQ Section for AI Optimization */}
      <FAQSchema
        faqs={ciberseguridadFAQs}
        title="Preguntas Frecuentes - Ciberseguridad"
        description="Respuestas a las preguntas más comunes sobre protección cibernética empresarial"
        showVisual={true}
      />

      <Footer />
    </>
  );
};

export default Page;
