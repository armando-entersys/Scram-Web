/**
 * Sistema centralizado de Analytics y Tracking
 * Gestiona todos los eventos de analytics de forma unificada
 */

import { trackingConfig } from '@/config/tracking';

// Declaración de tipos para window
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    smartlook: (...args: any[]) => void;
  }
}

/**
 * Tipos de eventos que podemos trackear
 */
export enum EventType {
  // Eventos de navegación
  PAGE_VIEW = 'page_view',

  // Eventos de conversión
  CONTACT_FORM_SUBMIT = 'contact_form_submit',
  CONTACT_FORM_SUCCESS = 'contact_form_success',
  CONTACT_FORM_ERROR = 'contact_form_error',

  // Eventos de interacción
  WHATSAPP_CLICK = 'whatsapp_click',
  PHONE_CLICK = 'phone_click',
  EMAIL_CLICK = 'email_click',

  // Eventos de producto/servicio
  SERVICE_VIEW = 'service_view',
  SERVICE_INQUIRY = 'service_inquiry',

  // Eventos de descarga
  DOWNLOAD_BROCHURE = 'download_brochure',
  DOWNLOAD_CATALOG = 'download_catalog',

  // Eventos de video
  VIDEO_PLAY = 'video_play',
  VIDEO_COMPLETE = 'video_complete',

  // Eventos de scroll
  SCROLL_DEPTH = 'scroll_depth',

  // Eventos personalizados
  CUSTOM = 'custom_event',
}

/**
 * Parámetros de evento
 */
export interface EventParams {
  // Identificadores
  event_category?: string;
  event_label?: string;
  value?: number;

  // Información de contacto
  contact_method?: 'whatsapp' | 'phone' | 'email' | 'form';
  service_name?: string;
  service_category?: string;

  // Información de conversión
  conversion_value?: number;
  currency?: string;

  // Información adicional
  page_path?: string;
  page_title?: string;

  // Custom params
  [key: string]: any;
}

/**
 * Clase principal de Analytics
 */
export class Analytics {
  private static instance: Analytics;
  private isInitialized = false;

  private constructor() {}

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  /**
   * Inicializa el sistema de analytics
   */
  initialize() {
    if (this.isInitialized) return;

    // Solo habilitar en producción o si está explícitamente habilitado
    if (typeof window === 'undefined') return;

    this.isInitialized = true;
    console.log('📊 Analytics initialized');
  }

  /**
   * Trackea un evento en todas las plataformas configuradas
   */
  trackEvent(eventType: EventType | string, params?: EventParams) {
    if (!this.isInitialized || typeof window === 'undefined') return;

    const eventName = eventType.toString();

    // Google Analytics / Tag Manager
    this.trackGoogleAnalytics(eventName, params);

    // Meta Pixel (Facebook)
    this.trackMetaPixel(eventName, params);

    // Log en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Event tracked:', eventName, params);
    }
  }

  /**
   * Trackea un evento en Google Analytics
   */
  private trackGoogleAnalytics(eventName: string, params?: EventParams) {
    if (typeof window.gtag === 'undefined') return;

    try {
      window.gtag('event', eventName, {
        ...params,
        send_to: trackingConfig.googleAnalytics.measurementId,
      });
    } catch (error) {
      console.error('Error tracking Google Analytics event:', error);
    }
  }

  /**
   * Trackea un evento en Meta Pixel
   */
  private trackMetaPixel(eventName: string, params?: EventParams) {
    if (typeof window.fbq === 'undefined') return;

    try {
      // Mapear eventos personalizados a eventos estándar de Facebook
      const fbEventMap: Record<string, string> = {
        [EventType.CONTACT_FORM_SUBMIT]: 'Contact',
        [EventType.CONTACT_FORM_SUCCESS]: 'Lead',
        [EventType.WHATSAPP_CLICK]: 'Contact',
        [EventType.PHONE_CLICK]: 'Contact',
        [EventType.EMAIL_CLICK]: 'Contact',
        [EventType.SERVICE_VIEW]: 'ViewContent',
        [EventType.SERVICE_INQUIRY]: 'Lead',
      };

      const fbEventName = fbEventMap[eventName] || 'CustomEvent';

      window.fbq('track', fbEventName, params);
    } catch (error) {
      console.error('Error tracking Meta Pixel event:', error);
    }
  }

  /**
   * Trackea una conversión de Google Ads
   */
  trackConversion(conversionLabel: string, value?: number) {
    if (typeof window.gtag === 'undefined') return;

    try {
      const conversionId = trackingConfig.googleAds.conversionId;

      window.gtag('event', 'conversion', {
        send_to: `${conversionId}/${conversionLabel}`,
        value: value || 0,
        currency: 'MXN',
      });
    } catch (error) {
      console.error('Error tracking conversion:', error);
    }
  }

  /**
   * Trackea una vista de página
   */
  trackPageView(path?: string, title?: string) {
    if (typeof window === 'undefined') return;

    const pageParams = {
      page_path: path || window.location.pathname,
      page_title: title || document.title,
    };

    // Google Analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', pageParams);
    }

    // Meta Pixel
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'PageView');
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Page view tracked:', pageParams);
    }
  }
}

/**
 * Instancia singleton de Analytics
 */
export const analytics = Analytics.getInstance();

/**
 * Hook de React para usar analytics
 */
export const useAnalytics = () => {
  return {
    trackEvent: (eventType: EventType | string, params?: EventParams) =>
      analytics.trackEvent(eventType, params),
    trackConversion: (label: string, value?: number) =>
      analytics.trackConversion(label, value),
    trackPageView: (path?: string, title?: string) =>
      analytics.trackPageView(path, title),
  };
};

/**
 * Helpers de tracking para eventos comunes
 */
export const trackWhatsAppClick = (serviceCategory?: string) => {
  analytics.trackEvent(EventType.WHATSAPP_CLICK, {
    contact_method: 'whatsapp',
    service_category: serviceCategory,
  });
};

export const trackPhoneClick = (phoneNumber: string, serviceCategory?: string) => {
  analytics.trackEvent(EventType.PHONE_CLICK, {
    contact_method: 'phone',
    event_label: phoneNumber,
    service_category: serviceCategory,
  });
};

export const trackEmailClick = (serviceCategory?: string) => {
  analytics.trackEvent(EventType.EMAIL_CLICK, {
    contact_method: 'email',
    service_category: serviceCategory,
  });
};

export const trackContactFormSubmit = (formName: string, serviceCategory?: string) => {
  analytics.trackEvent(EventType.CONTACT_FORM_SUBMIT, {
    event_category: 'contact',
    event_label: formName,
    service_category: serviceCategory,
  });
};

export const trackContactFormSuccess = (formName: string, serviceCategory?: string) => {
  analytics.trackEvent(EventType.CONTACT_FORM_SUCCESS, {
    event_category: 'contact',
    event_label: formName,
    service_category: serviceCategory,
  });

  // También trackear como conversión
  analytics.trackConversion('contact_form_success', 1);
};

export const trackServiceView = (serviceName: string, serviceCategory: string) => {
  analytics.trackEvent(EventType.SERVICE_VIEW, {
    event_category: 'service',
    service_name: serviceName,
    service_category: serviceCategory,
  });
};
