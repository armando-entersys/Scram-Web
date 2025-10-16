import React from "react";
import type { Metadata } from "next";
import LandingLayout from "@/components/Landing/LandingLayout";
import MainBannerAdsClinicas from "@/components/scram/AdsClinicasLanding/MainBannerAdsClinicas";
import FeaturesAdsClinicas from "@/components/scram/AdsClinicasLanding/FeaturesAdsClinicas";
import PartnerStyleTwo from "@/components/scram/PartnerStyleTwo";
import Partner from "@/components/scram/Partner";
import ContactInfoAdsClinicas from "@/components/scram/AdsClinicasLanding/ContactInfoAdsClinicas";
import GoogleMapLanding from "@/components/scram/Contact/GoogleMapLanding";
import Team from "@/components/scram/Team";
import PlyrVideo from "@/components/scram/Layout/PlyrVideo";
import Gallery1 from "@/components/scram/Gallery1";
import { getLandingConfig } from "@/config/landings";

const LANDING_SLUG = 'l-ads-clinicas';
const config = getLandingConfig(LANDING_SLUG);

// Metadata SEO optimizada
export const metadata: Metadata = {
  title: config?.title || 'Marketing ADS para Clínicas',
  description: config?.description || 'Sistema efectivo de adquisición de pacientes',
  keywords: config?.keywords?.join(', '),
  robots: config?.robots || 'noindex',

  openGraph: {
    title: config?.title || 'Marketing ADS para Clínicas',
    description: config?.description || 'Sistema efectivo de adquisición de pacientes',
    type: 'website',
    locale: 'es_MX',
  },

  twitter: {
    card: 'summary_large_image',
    title: config?.title || 'Marketing ADS para Clínicas',
    description: config?.description || 'Sistema efectivo de adquisición de pacientes',
  },
};

const Page: React.FC = () => {
  // Videos optimizados
  const videoSrc = 'https://storage.googleapis.com/scram-landings/scram-general/scram-general-1c-crf23.mp4';
  const posterSrc = 'https://storage.googleapis.com/scram-landings/scram-general/poster-video-general.webp';

  return (
    <LandingLayout landingSlug={LANDING_SLUG}>
      {/* Hero Banner */}
      <MainBannerAdsClinicas />
      <br />

      {/* Clientes/Partners */}
      <PartnerStyleTwo />
      <br />

      {/* Características del servicio */}
      <FeaturesAdsClinicas />
      <br />

      {/* Video testimonial */}
      <div className="container text-center">
        <h4>En SCRAM creemos que las mejores soluciones surgen de la confianza</h4>
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
      <ContactInfoAdsClinicas />
      <br />

      {/* Mapa */}
      <GoogleMapLanding />
    </LandingLayout>
  );
};

export default Page;
