"use client"

import React from "react"
import Script from 'next/script'
import AosAnimation from "@/components/scram/Layout/AosAnimation"
import { trackingConfig } from "@/config/tracking"

type ClientScriptsProps = {
  metaPixelId?: string
}

const ClientScripts = ({ metaPixelId }: ClientScriptsProps) => {
  // Usar el metaPixelId pasado como prop, o el configurado en trackingConfig
  const pixelId = metaPixelId || trackingConfig.metaPixel.pixelId
  const gaId = trackingConfig.googleAnalytics.measurementId
  const adsId = trackingConfig.googleAds.conversionId

  console.log("MetaID:"+pixelId)

  return (
    <>
      {/* Meta Pixel (Facebook) - Solo si hay pixelId configurado */}
      {pixelId && (
        <>
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${pixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}

      {/* Google Analytics & Google Ads */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        async
      />
      <Script
        id="ga-script"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
            gtag('config', '${adsId}');
            console.log("Google TAG");
          `,
        }}
      />

      {/* Función de conversión de Google Ads */}
      <Script
        id="gtag-script"
        dangerouslySetInnerHTML={{
          __html: `
            function gtag_report_conversion(send_to) {
              ${pixelId ? "fbq('track', 'Contact')" : ""}
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': send_to,
                  'event_callback': callback
              });
              return false;
            }
          `,
        }}
      />
      <AosAnimation />
    </>
  )
}

export default ClientScripts
