import React from "react";
import Navbar from "../../components/scram/Layout/Navbar";
import Footer from "../../components/scram/Layout/Footer";
import PageBanner from "../../components/scram/Common/PageBanner";
import ContactInfo from "../../components/scram/Contact/ContactInfo";
import GoogleMap from "../../components/scram/Contact/GoogleMap";
import ContactForm from "../../components/scram/Contact/ContactForm";
import Gallery1 from "@/components/scram/Gallery1";
import EnhancedSEO from "@/components/SEO/EnhancedSEO";
import FAQSchema from "@/components/SEO/FAQSchema";
import { contactFAQs, organizationData } from "@/config/siteData";

export default function Page() {
  return (
    <>
      {/* Enhanced SEO for AI Crawlers */}
      <EnhancedSEO
        pageType="about"
        title="Contacto - SCRAM Consulting"
        description="Contáctanos para soluciones IT empresariales. Oficinas en CDMX, Estado de México y Texas USA. WhatsApp: +52 999 388 2606. Respuesta garantizada en menos de 2 horas. Atención 24/7 para emergencias técnicas."
        url="https://www.scram2k.com/contact"
        faqs={contactFAQs}
        breadcrumbs={[
          { name: "Contacto", url: "https://www.scram2k.com/contact" }
        ]}
        rating={organizationData.rating}
        certifications={organizationData.certifications}
        features={[
          "Respuesta en menos de 2 horas",
          "Soporte técnico 24/7",
          "Diagnóstico gratuito",
          "Visitas sin costo en CDMX y EdoMex",
          "Cobertura en toda la República Mexicana"
        ]}
      />

      <Navbar />

      <PageBanner pageTitle="Contacto" />


      <ContactInfo />

      <GoogleMap />

      {/* FAQ Section for AI Optimization */}
      <FAQSchema
        faqs={contactFAQs}
        title="Preguntas Frecuentes - Contacto"
        description="Cómo ponerte en contacto con SCRAM Consulting"
        showVisual={true}
      />

      <Footer />
    </>
  );
};
