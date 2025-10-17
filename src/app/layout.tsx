// src/app/layout.tsx
import React from "react";
import type { Metadata } from "next";
import "../../public/css/bootstrap.min.css";
import "../../public/css/boxicons.min.css";
import "../../public/css/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "../../public/css/style.css";
// Global Responsive Style
import "../../public/css/responsive.css";

import "./globals.css";

import { Poppins } from "next/font/google";

import GoTop from "@/components/scram/Layout/GoTop";
import AosAnimation from "@/components/scram/Layout/AosAnimation";
import GlobalSchemas from "@/components/scram/SEO/SchemaOrg";
import { SITE_CONFIG, ROBOTS_CONFIG } from "@/config/seo";
import AnalyticsProvider from "@/components/Analytics/AnalyticsProvider";
import VersionChecker from "@/components/VersionChecker";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// Metadata SEO optimizada para IA y motores de búsqueda
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.slogan}`,
    template: `%s | ${SITE_CONFIG.name}`
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.legalName,

  robots: ROBOTS_CONFIG,

  // Open Graph optimizado para redes sociales
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.slogan}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/images/scram/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name
      }
    ]
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: SITE_CONFIG.twitter.site,
    creator: SITE_CONFIG.twitter.creator,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.slogan}`,
    description: SITE_CONFIG.description,
    images: ["/images/scram/og-image.png"]
  },

  // Información de contacto y ubicación
  other: {
    "contact:email": SITE_CONFIG.contact.email,
    "contact:phone_number": SITE_CONFIG.contact.phone.mexico,
    "geo.region": "MX-CMX",
    "geo.placename": "Ciudad de México",
    "geo.position": `${SITE_CONFIG.locations[0].geo.latitude};${SITE_CONFIG.locations[0].geo.longitude}`,
    "ICBM": `${SITE_CONFIG.locations[0].geo.latitude}, ${SITE_CONFIG.locations[0].geo.longitude}`
  },

  // Alternativas de idioma
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      'es-MX': SITE_CONFIG.url,
      'en-US': `${SITE_CONFIG.url}/en`
    }
  },

  // Verificación de buscadores
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  // Solo cargar analytics en producción
  const isProduction = process.env.NODE_ENV === 'production';
  const analyzeeProjectId = process.env.NEXT_PUBLIC_ANALYZEE_PROJECT_ID || 'lpN2yQcxDRgaxK4iwHU1';
  const smartlookKey = process.env.NEXT_PUBLIC_SMARTLOOK_KEY;

  return (
    <html lang="es-MX">
      <head>
        <GlobalSchemas />
        {/* Analyzee Analytics */}
        {isProduction && (
          <script
            async
            src={`https://cdn.analyzee.io/sdk/${analyzeeProjectId}.js`}
          />
        )}
        {/* Smartlook Session Recording */}
        {isProduction && smartlookKey && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.smartlook||(function(d) {
                  var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
                  var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
                  c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
                })(document);
                smartlook('init', '${smartlookKey}', { region: 'eu' });
              `,
            }}
          />
        )}
      </head>
      <body className={poppins.className}>
        <VersionChecker />
        <AnalyticsProvider>
          {children}
          <AosAnimation />
        </AnalyticsProvider>
      </body>
    </html>
  );
}

export default RootLayout;
