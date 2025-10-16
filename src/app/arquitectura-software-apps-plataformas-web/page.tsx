import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/scram/Layout/Navbar";
import Footer from "@/components/scram/Layout/Footer";
import MainBannerArquitectura from '@/components/scram/ArquitecturaLanding/MainBannerArquitectura';
import FeaturesArquitectura from '@/components/scram/ArquitecturaLanding/FeaturesArquitectura';
import Partners from '@/components/scram/PartnerStyleTwo';
import { ServiceSchema, BreadcrumbSchema } from "@/components/scram/SEO/SchemaOrg";
import { SERVICES_SEO, SITE_CONFIG } from "@/config/seo";
import EnhancedSEO from "@/components/SEO/EnhancedSEO";
import FAQSchema from "@/components/SEO/FAQSchema";
import { desarrolloSoftwareServices, desarrolloSoftwareFAQs, organizationData } from "@/config/siteData";

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
      {/* Enhanced SEO for AI Crawlers */}
      <EnhancedSEO
        pageType="service"
        title="Desarrollo de Software Empresarial a la Medida"
        description="Desarrollamos aplicaciones web, móviles y sistemas ERP personalizados para empresas. Tecnología: Laravel, React, Next.js, Flutter. Clientes: FEMSA, Grupo Modelo, Chedraui. Más de 25 años de experiencia."
        url="https://www.scram2k.com/arquitectura-software-apps-plataformas-web"
        imageUrl="https://www.scram2k.com/images/scram/servicios/arquitectura-de-software.webp"
        services={desarrolloSoftwareServices}
        faqs={desarrolloSoftwareFAQs}
        breadcrumbs={[
          { name: "Servicios", url: "https://www.scram2k.com/#servicios" },
          { name: "Desarrollo de Software", url: "https://www.scram2k.com/arquitectura-software-apps-plataformas-web" }
        ]}
        rating={organizationData.rating}
        certifications={organizationData.certifications}
        features={[
          "Metodología Agile con sprints de 2 semanas",
          "Entregas incrementales para validación continua",
          "Código limpio y documentado",
          "Integración con APIs y microservicios",
          "Arquitectura cloud (AWS, Azure, Google Cloud)"
        ]}
      />

      {/* Schema.org para SEO (legacy - mantener por compatibilidad) */}
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

      <Navbar />
      <br /><br /><br /><br /><br />
      <MainBannerArquitectura />
      <br />
      <Partners />
      <br />
      <FeaturesArquitectura />
      <br />

      {/* FAQ Section for AI Optimization */}
      <FAQSchema
        faqs={desarrolloSoftwareFAQs}
        title="Preguntas Frecuentes - Desarrollo de Software"
        description="Respuestas a las preguntas más comunes sobre desarrollo de aplicaciones web y móviles"
        showVisual={true}
      />

      <Footer />
    </>
  );
};

export default Page;
