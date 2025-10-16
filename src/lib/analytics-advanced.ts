/**
 * Sistema Avanzado de Analytics y Tracking
 * Para decisiones de marketing profesionales basadas en datos
 */

import { analytics, EventType } from './analytics';

// ============================================
// TIPOS Y INTERFACES
// ============================================

export interface LeadData {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  source?: string;
  medium?: string;
  campaign?: string;
  score?: number;
}

export interface UserJourney {
  sessionId: string;
  steps: JourneyStep[];
  startTime: number;
  lastActivityTime: number;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  referrer?: string;
  landingPage?: string;
  converted?: boolean;
  conversionValue?: number;
}

export interface JourneyStep {
  timestamp: number;
  page: string;
  action: string;
  metadata?: Record<string, any>;
}

export interface EngagementMetrics {
  scrollDepth: number;
  timeOnPage: number;
  interactionsCount: number;
  videosWatched: string[];
  linksClicked: string[];
  formFieldsFilled: string[];
}

// ============================================
// ADVANCED ANALYTICS CLASS
// ============================================

export class AdvancedAnalytics {
  private static instance: AdvancedAnalytics;
  private journey: UserJourney | null = null;
  private engagement: EngagementMetrics = {
    scrollDepth: 0,
    timeOnPage: 0,
    interactionsCount: 0,
    videosWatched: [],
    linksClicked: [],
    formFieldsFilled: [],
  };
  private sessionStartTime: number = 0;
  private maxScrollDepth: number = 0;
  private engagementInterval: NodeJS.Timeout | null = null;

  private constructor() {}

  static getInstance(): AdvancedAnalytics {
    if (!AdvancedAnalytics.instance) {
      AdvancedAnalytics.instance = new AdvancedAnalytics();
    }
    return AdvancedAnalytics.instance;
  }

  // ============================================
  // INICIALIZACIÓN
  // ============================================

  initialize() {
    if (typeof window === 'undefined') return;

    this.sessionStartTime = Date.now();
    this.initializeJourney();
    this.setupScrollTracking();
    this.setupEngagementTracking();
    this.setupFormTracking();
    this.captureUTMParameters();

    console.log('🚀 Advanced Analytics initialized');
  }

  // ============================================
  // USER JOURNEY TRACKING
  // ============================================

  private initializeJourney() {
    const sessionId = this.getOrCreateSessionId();
    const utmParams = this.getUTMParameters();

    this.journey = {
      sessionId,
      steps: [],
      startTime: Date.now(),
      lastActivityTime: Date.now(),
      ...utmParams,
      referrer: document.referrer || 'direct',
      landingPage: window.location.pathname,
      converted: false,
    };

    this.trackJourneyStep('session_start', {
      referrer: this.journey.referrer,
      landingPage: this.journey.landingPage,
    });

    // Guardar en localStorage
    this.saveJourney();
  }

  trackJourneyStep(action: string, metadata?: Record<string, any>) {
    if (!this.journey) return;

    const step: JourneyStep = {
      timestamp: Date.now(),
      page: window.location.pathname,
      action,
      metadata,
    };

    this.journey.steps.push(step);
    this.journey.lastActivityTime = Date.now();
    this.saveJourney();

    // Enviar a Google Analytics
    analytics.trackEvent(EventType.CUSTOM, {
      event_category: 'user_journey',
      event_label: action,
      ...metadata,
    });
  }

  private getOrCreateSessionId(): string {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }

  private saveJourney() {
    if (!this.journey) return;
    try {
      localStorage.setItem('user_journey', JSON.stringify(this.journey));
    } catch (error) {
      console.warn('Failed to save journey:', error);
    }
  }

  getJourney(): UserJourney | null {
    return this.journey;
  }

  // ============================================
  // UTM TRACKING & ATTRIBUTION
  // ============================================

  private captureUTMParameters() {
    const utmParams = this.getUTMParameters();

    if (Object.keys(utmParams).length > 0) {
      // Guardar UTMs en localStorage (persiste durante 30 días)
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);

      localStorage.setItem('utm_params', JSON.stringify({
        ...utmParams,
        timestamp: Date.now(),
        expiry: expiryDate.getTime(),
      }));

      // Trackear nueva campaña
      analytics.trackEvent(EventType.CUSTOM, {
        event_category: 'campaign',
        event_label: 'utm_capture',
        utm_source: utmParams.utmSource,
        utm_medium: utmParams.utmMedium,
        utm_campaign: utmParams.utmCampaign,
        utm_term: utmParams.utmTerm,
        utm_content: utmParams.utmContent,
      });
    }
  }

  private getUTMParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utmSource: urlParams.get('utm_source') || undefined,
      utmMedium: urlParams.get('utm_medium') || undefined,
      utmCampaign: urlParams.get('utm_campaign') || undefined,
      utmTerm: urlParams.get('utm_term') || undefined,
      utmContent: urlParams.get('utm_content') || undefined,
    };
  }

  getAttributionData() {
    try {
      const stored = localStorage.getItem('utm_params');
      if (!stored) return null;

      const data = JSON.parse(stored);

      // Verificar si no ha expirado
      if (data.expiry && Date.now() > data.expiry) {
        localStorage.removeItem('utm_params');
        return null;
      }

      return data;
    } catch {
      return null;
    }
  }

  // ============================================
  // SCROLL DEPTH TRACKING
  // ============================================

  private setupScrollTracking() {
    const thresholds = [25, 50, 75, 90, 100];
    const tracked = new Set<number>();

    const trackScroll = () => {
      const scrollPercentage = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      );

      this.maxScrollDepth = Math.max(this.maxScrollDepth, scrollPercentage);
      this.engagement.scrollDepth = this.maxScrollDepth;

      thresholds.forEach(threshold => {
        if (scrollPercentage >= threshold && !tracked.has(threshold)) {
          tracked.add(threshold);

          analytics.trackEvent(EventType.SCROLL_DEPTH, {
            event_category: 'engagement',
            event_label: `${threshold}%`,
            value: threshold,
            page_path: window.location.pathname,
          });

          this.trackJourneyStep('scroll_depth', { depth: threshold });
        }
      });
    };

    let scrollTimeout: NodeJS.Timeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(trackScroll, 150);
    });
  }

  // ============================================
  // ENGAGEMENT TRACKING
  // ============================================

  private setupEngagementTracking() {
    // Time on page
    this.engagementInterval = setInterval(() => {
      this.engagement.timeOnPage = Math.round((Date.now() - this.sessionStartTime) / 1000);

      // Trackear cada 30 segundos
      if (this.engagement.timeOnPage % 30 === 0 && this.engagement.timeOnPage > 0) {
        analytics.trackEvent(EventType.CUSTOM, {
          event_category: 'engagement',
          event_label: 'time_on_page',
          value: this.engagement.timeOnPage,
        });
      }
    }, 1000);

    // Click tracking
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;

      if (target.tagName === 'A') {
        const href = (target as HTMLAnchorElement).href;
        this.engagement.linksClicked.push(href);
        this.engagement.interactionsCount++;

        this.trackJourneyStep('link_click', {
          href,
          text: target.textContent?.trim(),
        });
      }
    });

    // Visibility change (tab switching)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.trackJourneyStep('tab_hidden', {
          timeOnPage: this.engagement.timeOnPage,
          scrollDepth: this.engagement.scrollDepth,
        });
      } else {
        this.trackJourneyStep('tab_visible', {});
      }
    });

    // Before unload
    window.addEventListener('beforeunload', () => {
      this.trackEngagementSummary();
    });
  }

  private trackEngagementSummary() {
    analytics.trackEvent(EventType.CUSTOM, {
      event_category: 'engagement',
      event_label: 'session_summary',
      time_on_page: this.engagement.timeOnPage,
      scroll_depth: this.engagement.scrollDepth,
      interactions: this.engagement.interactionsCount,
      links_clicked: this.engagement.linksClicked.length,
    });
  }

  // ============================================
  // FORM TRACKING & ABANDONMENT
  // ============================================

  private setupFormTracking() {
    // Track form field interactions
    document.addEventListener('focusin', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        const fieldName = (target as HTMLInputElement).name || (target as HTMLInputElement).id || 'unknown';

        if (!this.engagement.formFieldsFilled.includes(fieldName)) {
          this.engagement.formFieldsFilled.push(fieldName);

          this.trackJourneyStep('form_field_focus', {
            field: fieldName,
            formId: (target as HTMLInputElement).form?.id || 'unknown',
          });
        }
      }
    });

    // Track form submissions
    document.addEventListener('submit', (e) => {
      const form = e.target as HTMLFormElement;
      const formId = form.id || form.name || 'unknown_form';

      this.trackJourneyStep('form_submit', {
        formId,
        fieldsCount: this.engagement.formFieldsFilled.length,
      });
    });
  }

  trackFormAbandonment(formId: string, fieldsFilled: string[]) {
    analytics.trackEvent(EventType.CUSTOM, {
      event_category: 'form',
      event_label: 'abandonment',
      form_id: formId,
      fields_filled: fieldsFilled.length,
      fields_list: fieldsFilled.join(','),
    });

    this.trackJourneyStep('form_abandoned', {
      formId,
      fieldsFilled,
    });
  }

  // ============================================
  // LEAD TRACKING & SCORING
  // ============================================

  trackLead(leadData: LeadData) {
    const attribution = this.getAttributionData();
    const score = this.calculateLeadScore(leadData);

    const enrichedLeadData = {
      ...leadData,
      score,
      source: attribution?.utmSource || leadData.source || 'direct',
      medium: attribution?.utmMedium || leadData.medium || 'none',
      campaign: attribution?.utmCampaign || leadData.campaign || 'none',
      journey_steps: this.journey?.steps.length || 0,
      time_to_convert: this.engagement.timeOnPage,
      scroll_depth: this.engagement.scrollDepth,
      interactions: this.engagement.interactionsCount,
    };

    // Marcar journey como convertido
    if (this.journey) {
      this.journey.converted = true;
      this.journey.conversionValue = score;
      this.saveJourney();
    }

    // Track en Google Analytics
    analytics.trackEvent(EventType.CONTACT_FORM_SUCCESS, {
      event_category: 'lead',
      event_label: enrichedLeadData.service || 'general',
      value: score,
      lead_score: score,
      lead_source: enrichedLeadData.source,
      lead_medium: enrichedLeadData.medium,
      lead_campaign: enrichedLeadData.campaign,
    });

    // Track conversion en Google Ads
    analytics.trackConversion('lead_submission', score);

    this.trackJourneyStep('lead_converted', enrichedLeadData);

    console.log('🎯 Lead tracked:', enrichedLeadData);
    return enrichedLeadData;
  }

  private calculateLeadScore(leadData: LeadData): number {
    let score = 50; // Base score

    // Datos de contacto completos
    if (leadData.name) score += 5;
    if (leadData.email) score += 10;
    if (leadData.phone) score += 10;
    if (leadData.company) score += 15;
    if (leadData.message && leadData.message.length > 20) score += 10;

    // Engagement score
    if (this.engagement.timeOnPage > 60) score += 10;
    if (this.engagement.timeOnPage > 180) score += 10;
    if (this.engagement.scrollDepth > 50) score += 5;
    if (this.engagement.scrollDepth > 75) score += 10;
    if (this.engagement.interactionsCount > 3) score += 5;

    // Journey score
    if (this.journey && this.journey.steps.length > 5) score += 10;
    if (this.journey && this.journey.steps.length > 10) score += 10;

    // Source quality
    const attribution = this.getAttributionData();
    if (attribution?.utmSource === 'google') score += 10;
    if (attribution?.utmMedium === 'cpc') score += 5;
    if (attribution?.utmMedium === 'organic') score += 15;

    // Service-specific scoring
    const highValueServices = [
      'desarrollo-software',
      'ciberseguridad',
      'infraestructura',
      'soporte-empresarial',
    ];
    if (leadData.service && highValueServices.some(s => leadData.service?.includes(s))) {
      score += 20;
    }

    return Math.min(score, 100); // Cap at 100
  }

  // ============================================
  // CONVERSION VALUE TRACKING
  // ============================================

  trackServiceInquiry(serviceName: string, estimatedValue?: number) {
    const value = estimatedValue || this.estimateServiceValue(serviceName);

    analytics.trackEvent(EventType.SERVICE_INQUIRY, {
      event_category: 'service',
      event_label: serviceName,
      value,
      service_name: serviceName,
    });

    this.trackJourneyStep('service_inquiry', {
      service: serviceName,
      estimatedValue: value,
    });

    return value;
  }

  private estimateServiceValue(serviceName: string): number {
    const serviceValues: Record<string, number> = {
      'desarrollo-software': 50000,
      'arquitectura-software': 50000,
      'ciberseguridad': 30000,
      'licenciamiento': 25000,
      'infraestructura': 40000,
      'hardware': 20000,
      'soporte-tecnico': 15000,
      'seguridad-electronica': 25000,
    };

    const matchedService = Object.keys(serviceValues).find(key =>
      serviceName.toLowerCase().includes(key)
    );

    return matchedService ? serviceValues[matchedService] : 10000;
  }

  // ============================================
  // HELPERS
  // ============================================

  getEngagementMetrics(): EngagementMetrics {
    return { ...this.engagement };
  }

  cleanup() {
    if (this.engagementInterval) {
      clearInterval(this.engagementInterval);
    }
  }
}

// ============================================
// SINGLETON EXPORT
// ============================================

export const advancedAnalytics = AdvancedAnalytics.getInstance();

// ============================================
// REACT HOOKS
// ============================================

export const useAdvancedAnalytics = () => {
  return {
    trackLead: (leadData: LeadData) => advancedAnalytics.trackLead(leadData),
    trackServiceInquiry: (service: string, value?: number) =>
      advancedAnalytics.trackServiceInquiry(service, value),
    trackFormAbandonment: (formId: string, fields: string[]) =>
      advancedAnalytics.trackFormAbandonment(formId, fields),
    trackJourneyStep: (action: string, metadata?: Record<string, any>) =>
      advancedAnalytics.trackJourneyStep(action, metadata),
    getEngagementMetrics: () => advancedAnalytics.getEngagementMetrics(),
    getJourney: () => advancedAnalytics.getJourney(),
    getAttribution: () => advancedAnalytics.getAttributionData(),
  };
};
