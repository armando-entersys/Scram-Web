import React from "react";
import type { Metadata } from "next";
import LandingLayout from "@/components/Landing/LandingLayout";
import MainBannerAdsTalleres from "@/components/scram/AdsTalleresLanding/MainBannerAdsTalleres";
import FeaturesAdsTalleres from "@/components/scram/AdsTalleresLanding/FeaturesAdsTalleres";
import PartnerStyleTwo from "@/components/scram/PartnerStyleTwo";
import Partner from "@/components/scram/Partner";
import ContactInfoAdsTalleres from "@/components/scram/AdsTalleresLanding/ContactInfoAdsTalleres";
import GoogleMapLanding from "@/components/scram/Contact/GoogleMapLanding";
import Team from "@/components/scram/Team";
import PlyrVideo from "@/components/scram/Layout/PlyrVideo";
import Gallery1 from "@/components/scram/Gallery1";
import { getLandingConfig } from "@/config/landings";

const LANDING_SLUG = 'l-ads-talleres';
const config = getLandingConfig(LANDING_SLUG);

// Metadata SEO optimizada
export const metadata: Metadata = {
  title: config?.title || 'Marketing para Talleres',
  description: config?.description || 'Sistema efectivo de adquisición de clientes',
  keywords: config?.keywords?.join(', '),
  robots: config?.robots || 'noindex',

  openGraph: {
    title: config?.title || 'Marketing para Talleres',
    description: config?.description || 'Sistema efectivo de adquisición de clientes',
    type: 'website',
    locale: 'es_MX',
  },

  twitter: {
    card: 'summary_large_image',
    title: config?.title || 'Marketing para Talleres',
    description: config?.description || 'Sistema efectivo de adquisición de clientes',
  },
};

const Page: React.FC = () => {
  // Videos optimizados
  const videoSrc = 'https://storage.googleapis.com/ehupi-landing-pages/scram-data-center/tv-crf31.mp4';
  const posterSrc = 'https://storage.googleapis.com/ehupi-landing-pages/scram-data-center/tv.webp';

  return (
    <LandingLayout landingSlug={LANDING_SLUG}>
      {/* Hero Banner */}
      <MainBannerAdsTalleres />
      <br />

      {/* Clientes/Partners */}
      <PartnerStyleTwo />
      <br />

      {/* Características del servicio */}
      <FeaturesAdsTalleres />
      <br />

      {/* Video testimonial */}
      <div className="container text-center">
        <h4>Entrevista a Alejandro Ramírez, CEO de Scram en Cadena Internacional TV</h4>
        <PlyrVideo src={videoSrc} poster={posterSrc} />
      </div>
      <br />

      {/* Partners */}
      <Partner />
      <br />

      {/* Equipo */}
      <Team />
      <br />

      {/* Galería de proyectos */}
      <Gallery1 />

      {/* Información de contacto */}
      <ContactInfoAdsTalleres />
      <br />

      {/* Mapa */}
      <GoogleMapLanding />
    </LandingLayout>
  );
};

export default Page;
