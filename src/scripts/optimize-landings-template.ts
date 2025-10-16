/**
 * Template para optimizar landing pages
 * Este archivo sirve como referencia para optimizar cada landing
 */

export const generateLandingPage = (params: {
  slug: string;
  mainBannerComponent: string;
  featuresComponent?: string;
  contactComponent?: string;
  hasVideo?: boolean;
  hasTeam?: boolean;
  hasGallery?: boolean;
  hasMap?: boolean;
}) => {
  const {
    slug,
    mainBannerComponent,
    featuresComponent,
    contactComponent,
    hasVideo = true,
    hasTeam = true,
    hasGallery = true,
    hasMap = true,
  } = params;

  return `import React from "react";
import type { Metadata } from "next";
import LandingLayout from "@/components/Landing/LandingLayout";
import ${mainBannerComponent} from "@/components/scram/${mainBannerComponent}";
${featuresComponent ? `import ${featuresComponent} from "@/components/scram/${featuresComponent}";` : ''}
import PartnerStyleTwo from "@/components/scram/PartnerStyleTwo";
import Partner from "@/components/scram/Partner";
${contactComponent ? `import ${contactComponent} from "@/components/scram/${contactComponent}";` : ''}
${hasMap ? `import GoogleMapLanding from "@/components/scram/Contact/GoogleMapLanding";` : ''}
${hasTeam ? `import Team from "@/components/scram/Team";` : ''}
${hasVideo ? `import PlyrVideo from "@/components/scram/Layout/PlyrVideo";` : ''}
${hasGallery ? `import Gallery1 from "@/components/scram/Gallery1";` : ''}
import { getLandingConfig } from "@/config/landings";

const LANDING_SLUG = '${slug}';
const config = getLandingConfig(LANDING_SLUG);

// Metadata SEO optimizada
export const metadata: Metadata = {
  title: config?.title || 'Scram Consulting',
  description: config?.description || 'Soluciones IT desde 1997',
  keywords: config?.keywords?.join(', '),
  robots: config?.robots || 'noindex',

  openGraph: {
    title: config?.title || 'Scram Consulting',
    description: config?.description || 'Soluciones IT desde 1997',
    type: 'website',
    locale: 'es_MX',
  },

  twitter: {
    card: 'summary_large_image',
    title: config?.title || 'Scram Consulting',
    description: config?.description || 'Soluciones IT desde 1997',
  },
};

const Page: React.FC = () => {
  ${hasVideo ? `// Videos optimizados
  const videoSrc = 'https://storage.googleapis.com/scram-landings/scram-general/scram-general-1c-crf23.mp4';
  const posterSrc = 'https://storage.googleapis.com/scram-landings/scram-general/poster-video-general.webp';
` : ''}
  return (
    <LandingLayout landingSlug={LANDING_SLUG}>
      {/* Hero Banner */}
      <${mainBannerComponent} />
      <br />

      {/* Clientes/Partners */}
      <PartnerStyleTwo />
      <br />

      ${featuresComponent ? `{/* Características del servicio */}
      <${featuresComponent} />
      <br />
` : ''}
      ${hasVideo ? `{/* Video testimonial */}
      <div className="container text-center">
        <h4>En SCRAM creemos que las mejores soluciones surgen de la confianza</h4>
        <PlyrVideo src={videoSrc} poster={posterSrc} />
      </div>
      <br />
` : ''}
      {/* Partners */}
      <Partner />
      <br />

      ${hasTeam ? `{/* Equipo */}
      <Team />
      <br />
` : ''}
      ${hasGallery ? `{/* Galería de proyectos */}
      <Gallery1 />
` : ''}
      ${contactComponent ? `{/* Información de contacto */}
      <${contactComponent} />
      <br />
` : ''}
      ${hasMap ? `{/* Mapa */}
      <GoogleMapLanding />` : ''}
    </LandingLayout>
  );
};

export default Page;
`;
};

// Configuración de componentes por landing
export const LANDING_COMPONENTS = {
  'l-ads-fabricantes': {
    mainBannerComponent: 'AdsFabricantesLanding/MainBannerAdsFabricantes',
    featuresComponent: 'AdsFabricantesLanding/FeaturesAdsFabricantes',
    contactComponent: 'AdsFabricantesLanding/ContactInfoAdsFabricantes',
  },
  'l-ads-talleres': {
    mainBannerComponent: 'AdsTalleresLanding/MainBannerAdsTalleres',
    featuresComponent: 'AdsTalleresLanding/FeaturesAdsTalleres',
    contactComponent: 'AdsTalleresLanding/ContactInfoAdsTalleres',
  },
  'l-ads-sistema-de-adquisicion-de-clientes': {
    mainBannerComponent: 'AdsLanding/MainBannerAds',
    featuresComponent: 'AdsLanding/FeaturesAds',
    contactComponent: 'AdsLanding/ContactInfoAds',
  },
  'l-mvp-software-factory': {
    mainBannerComponent: 'MvpLanding/MainBannerMvp',
    featuresComponent: 'MvpLanding/FeaturesMvp',
    contactComponent: 'MvpLanding/ContactInfoMvp',
  },
  'l-mvp-dashboard': {
    mainBannerComponent: 'MvpDashboardLanding/MainBannerMvpDashboard',
    featuresComponent: 'MvpDashboardLanding/FeaturesMvpDashboard',
    contactComponent: 'MvpDashboardLanding/ContactInfoMvpDashboard',
  },
  'l-licenciamiento': {
    mainBannerComponent: 'LicenciamientoLanding/MainBannerLicenciamiento',
    featuresComponent: 'LicenciamientoLanding/FeaturesLicenciamiento',
    contactComponent: 'LicenciamientoLanding/ContactInfoLicenciamiento',
  },
  'l-piezas-industriales': {
    mainBannerComponent: 'IndustrialLanding/MainBannerIndustrial',
    featuresComponent: 'IndustrialLanding/FeaturesIndustrial',
    contactComponent: 'IndustrialLanding/ContactInfoIndustrial',
  },
  'l-redes-corporativas-cableado-estructurado': {
    mainBannerComponent: 'RedesLanding/MainBannerRedes',
    featuresComponent: 'RedesLanding/FeaturesRedes',
    contactComponent: 'RedesLanding/ContactInfoRedes',
  },
  'l-refacciones-hardware-it-centro-de-datos-industrial': {
    mainBannerComponent: 'RefaccionesLanding/MainBannerRefacciones',
    featuresComponent: 'RefaccionesLanding/FeaturesRefacciones',
    contactComponent: 'RefaccionesLanding/ContactInfoRefacciones',
  },
  'l-soluciones-para-centro-de-datos-servidores': {
    mainBannerComponent: 'CentrodedatosLanding/MainBannerCentrodedatos',
    featuresComponent: 'CentrodedatosLanding/FeaturesCentrodedatos',
    contactComponent: 'CentrodedatosLanding/ContactInfoCentrodedatos',
  },
};
