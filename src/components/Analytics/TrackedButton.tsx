"use client";

import React from 'react';
import { advancedAnalytics } from '@/lib/analytics-advanced';
import { analytics, EventType } from '@/lib/analytics';

interface TrackedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  trackingLabel: string;
  trackingCategory?: string;
  serviceName?: string;
  estimatedValue?: number;
}

/**
 * Botón con tracking automático de clics
 */
export const TrackedButton: React.FC<TrackedButtonProps> = ({
  trackingLabel,
  trackingCategory = 'button',
  serviceName,
  estimatedValue,
  onClick,
  children,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Track el evento
    analytics.trackEvent(EventType.CUSTOM, {
      event_category: trackingCategory,
      event_label: trackingLabel,
      service_name: serviceName,
      value: estimatedValue,
    });

    // Track en journey
    advancedAnalytics.trackJourneyStep('button_click', {
      label: trackingLabel,
      category: trackingCategory,
      service: serviceName,
    });

    // Si es un servicio, track service inquiry
    if (serviceName) {
      advancedAnalytics.trackServiceInquiry(serviceName, estimatedValue);
    }

    // Llamar al onClick original si existe
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};
