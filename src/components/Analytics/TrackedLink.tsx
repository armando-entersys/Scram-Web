"use client";

import React from 'react';
import Link from 'next/link';
import { advancedAnalytics } from '@/lib/analytics-advanced';
import { analytics, EventType, trackWhatsAppClick, trackPhoneClick, trackEmailClick } from '@/lib/analytics';

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  trackingLabel?: string;
  trackingCategory?: string;
  serviceName?: string;
  className?: string;
  target?: string;
  rel?: string;
}

/**
 * Link con tracking automático
 * Detecta automáticamente WhatsApp, teléfono y email
 */
export const TrackedLink: React.FC<TrackedLinkProps> = ({
  href,
  children,
  trackingLabel,
  trackingCategory = 'link',
  serviceName,
  className,
  target,
  rel,
}) => {
  const handleClick = () => {
    const label = trackingLabel || href;

    // Detectar tipo de link
    if (href.includes('wa.me') || href.includes('whatsapp')) {
      trackWhatsAppClick(serviceName);
      advancedAnalytics.trackJourneyStep('whatsapp_click', {
        service: serviceName,
        href,
      });
    } else if (href.startsWith('tel:')) {
      const phone = href.replace('tel:', '');
      trackPhoneClick(phone, serviceName);
      advancedAnalytics.trackJourneyStep('phone_click', {
        phone,
        service: serviceName,
      });
    } else if (href.startsWith('mailto:')) {
      trackEmailClick(serviceName);
      advancedAnalytics.trackJourneyStep('email_click', {
        service: serviceName,
        href,
      });
    } else {
      // Link normal
      analytics.trackEvent(EventType.CUSTOM, {
        event_category: trackingCategory,
        event_label: label,
        service_name: serviceName,
      });

      advancedAnalytics.trackJourneyStep('link_click', {
        href,
        label,
        service: serviceName,
      });
    }
  };

  // Si es link externo, usar <a>, si no usar Next Link
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.includes('wa.me');

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={className}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};
