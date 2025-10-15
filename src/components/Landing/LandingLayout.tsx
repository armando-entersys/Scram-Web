"use client";

import React from 'react';
import Image from 'next/image';
import logo from '/public/images/scram/logo.png';
import whatsapp from '/public/images/scram/whatsapp.svg';
import ButtonWhatsapp from '@/components/scram/Layout/ButtonWhatsapp';
import AnalyticsProvider from '@/components/Analytics/AnalyticsProvider';
import { trackingConfig } from '@/config/tracking';
import { getWhatsAppMessage, getLandingConfig } from '@/config/landings';

interface LandingLayoutProps {
  children: React.ReactNode;
  landingSlug: string;
  showWhatsappButton?: boolean;
}

/**
 * Layout optimizado para landing pages
 * Incluye analytics, SEO y estructura común
 */
export default function LandingLayout({
  children,
  landingSlug,
  showWhatsappButton = true,
}: LandingLayoutProps) {
  const config = getLandingConfig(landingSlug);

  // Configuración de analytics específica de esta landing
  const analyzeeId = config?.analyzeeId;
  const smartlookId = config?.smartlookId;
  const metaPixelId = config?.metaPixelId;

  // Configuración de WhatsApp
  const whatsappMessage = config?.whatsappMessage;
  const whatsappEvent = config?.whatsappClickEvent || `whatsapp_${landingSlug}`;
  const conversionLabel = config?.conversionLabel || '73OWCNeAmNQZELjP9cQD';
  const whatsappNumber = trackingConfig.whatsapp.number;

  return (
    <AnalyticsProvider
      analyzeeId={analyzeeId}
      smartlookId={smartlookId}
      metaPixelId={metaPixelId}
    >
      {/* Logo */}
      <div className="container logo-landing">
        <Image src={logo} alt="Scram Consulting" width={110} height={36} priority />
      </div>

      {/* Contenido de la landing */}
      {children}

      {/* Botón flotante de WhatsApp */}
      {showWhatsappButton && (
        <ButtonWhatsapp
          className="whatsapp"
          p="w"
          nu={whatsappNumber}
          href={`?click=${whatsappEvent}`}
          send_to={`AW-949839800/${conversionLabel}`}
        >
          ¿Tienes alguna consulta? <Image src={whatsapp} alt="WhatsApp" />
        </ButtonWhatsapp>
      )}
    </AnalyticsProvider>
  );
}
