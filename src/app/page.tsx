import React from "react";
import Navbar from '../components/scram/Layout/Navbar'
import MainBanner from '../components/scram/MainBanner2';
import PartnerStyleTwo from "../components/scram/PartnerStyleTwo";
import ServicesStyle2 from "../components/scram/ServicesStyle2";
import Team from "../components/scram/Team";
import FunFactsArea from "../components/scram/FunFactsArea";
import RecentWorks from "../components/scram/Common/RecentWorks";
import Feedback from "../components/scram/Feedback";
import Partner from "../components/scram/Partner";
import BlogPost from "../components/scram/Common/BlogPost";
import Footer from "../components/scram/Layout/Footer";
import EnhancedSEO from "@/components/SEO/EnhancedSEO";
import FAQSchema from "@/components/SEO/FAQSchema";
import { homepageFAQs, organizationData } from "@/config/siteData";

export const metadata = {
  title: 'Scram Consulting - Proveedor de Soluciones IT & Marketing',
  description: 'Desde 1997: Desarrolo Web/Apps, IA, Infraestructura, Redes, Google ADS, Asistencia Técnica, Conectividad, Hardware, Servidores, Data Centers, Cloud, Automatización de Procesos, Estandarización, Seguridad Cibernética, Licenciamiento, Consultoría, Inteligencia Artificial.'
};

export default function Home() {

  return (
    <>
    {/* Enhanced SEO for AI Crawlers */}
    <EnhancedSEO
      pageType="about"
      title="SCRAM Consulting - Soluciones IT Integrales desde 1997"
      description="Proveedor líder de soluciones IT en México y Estados Unidos. Desarrollo de software, ciberseguridad, infraestructura, hardware industrial y soporte técnico 24/7. Más de 25 años de experiencia con clientes como FEMSA, Grupo Modelo y Chedraui."
      url="https://www.scram2k.com"
      imageUrl="https://www.scram2k.com/images/scram/logo.png"
      faqs={homepageFAQs}
      rating={organizationData.rating}
      certifications={organizationData.certifications}
      features={[
        "25+ años de experiencia",
        "500+ proyectos completados",
        "Soporte técnico 24/7",
        "Presencia en México y Estados Unidos",
        "Tiempo de respuesta < 2 horas"
      ]}
    />

    {/* Analytics Script - Solo en producción */}
      <AnalyzeeScript />

      <Navbar />

      <MainBanner />

      <PartnerStyleTwo/>

      { /*<ServicesArea />*/ }

      <ServicesStyle2 />

      { /*<OurFeatures />*/ }



      <FunFactsArea />
      <Partner />

      { /*RecentWorks />*/ }


      { /*<Feedback /> */ }



      { /*<BlogPost />*/ }
      <Team />

      {/* FAQ Section for AI Optimization */}
      <FAQSchema
        faqs={homepageFAQs}
        title="Preguntas Frecuentes"
        description="Respuestas rápidas a las preguntas más comunes sobre SCRAM Consulting y nuestros servicios"
        showVisual={true}
      />

      <Footer />
    </>
  );
}
