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
import Script from "next/script";

export const metadata = {
  title: 'Scram Consulting - Proveedor de Soluciones IT & Marketing',
  description: 'Desde 1997: Desarrolo Web/Apps, IA, Infraestructura, Redes, Google ADS, Asistencia Técnica, Conectividad, Hardware, Servidores, Data Centers, Cloud, Automatización de Procesos, Estandarización, Seguridad Cibernética, Licenciamiento, Consultoría, Inteligencia Artificial.'
};

export default function Home() {

  return (
    <>
    <Script
        strategy="beforeInteractive"
        id="analyzeeprincipal"
        async
        src="https://cdn.analyzee.io/sdk/WJ9shmvFDGySBxuQvEoh.js"
        dangerouslySetInnerHTML={{ __html: '' }}
      />
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

      <Footer />
    </>
  );
}
