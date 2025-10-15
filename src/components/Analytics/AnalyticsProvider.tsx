"use client";

import React, { useEffect } from 'react';
import Script from 'next/script';
import { trackingConfig } from '@/config/tracking';
import { analytics } from '@/lib/analytics';

interface AnalyticsProviderProps {
  children?: React.ReactNode;
  metaPixelId?: string;
  analyzeeId?: string;
  smartlookId?: string;
}

/**
 * Proveedor central de Analytics
 * Carga todos los scripts de tracking necesarios
 */
export default function AnalyticsProvider({
  children,
  metaPixelId,
  analyzeeId,
  smartlookId,
}: AnalyticsProviderProps) {
  const gaId = trackingConfig.googleAnalytics.measurementId;
  const gtmId = trackingConfig.googleTagManager.containerId;
  const adsId = trackingConfig.googleAds.conversionId;
  const pixelId = metaPixelId || trackingConfig.metaPixel.pixelId;

  // Inicializar analytics cuando el componente se monta
  useEffect(() => {
    analytics.initialize();
  }, []);

  return (
    <>
      {/* Google Tag Manager (Principal - carga todo) */}
      {gtmId && gtmId !== 'GTM-XXXXXXX' && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* Google Analytics (Fallback si no hay GTM) */}
      {gaId && gaId !== 'G-XXXXXXXXXX' && !gtmId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
                ${adsId && adsId !== 'AW-XXXXXXXXXX' ? `gtag('config', '${adsId}');` : ''}
              `,
            }}
          />
        </>
      )}

      {/* Meta Pixel (Facebook) */}
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
              alt=""
            />
          </noscript>
        </>
      )}

      {/* Analyzee (si se especifica un ID custom) */}
      {analyzeeId && (
        <Script
          id={`analyzee-${analyzeeId}`}
          strategy="beforeInteractive"
          async
          src={`https://cdn.analyzee.io/sdk/${analyzeeId}.js`}
        />
      )}

      {/* Smartlook (si se especifica un ID custom) */}
      {smartlookId && (
        <Script
          id={`smartlook-${smartlookId}`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.smartlook||(function(d) {
                var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
                var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
                c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
                })(document);
                smartlook('init', '${smartlookId}', { region: 'eu' });
            `,
          }}
        />
      )}

      {/* Función global de conversión de Google Ads */}
      {adsId && adsId !== 'AW-XXXXXXXXXX' && (
        <Script
          id="gtag-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(send_to, value) {
                ${pixelId ? "if(typeof fbq !== 'undefined') fbq('track', 'Contact');" : ""}
                if(typeof gtag !== 'undefined') {
                  gtag('event', 'conversion', {
                    'send_to': send_to,
                    'value': value || 0,
                    'currency': 'MXN'
                  });
                }
                return false;
              }
            `,
          }}
        />
      )}

      {children}
    </>
  );
}
