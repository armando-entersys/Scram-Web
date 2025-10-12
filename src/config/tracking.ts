// src/config/tracking.ts
// Configuración centralizada de todas las herramientas de tracking

export const trackingConfig = {
  // Google Analytics 4
  googleAnalytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-ZJ0CTKBKNP',
  },

  // Google Ads
  googleAds: {
    conversionId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-949839800',
  },

  // Meta Pixel (Facebook)
  metaPixel: {
    pixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
  },

  // Smartlook
  smartlook: {
    projectKey: process.env.NEXT_PUBLIC_SMARTLOOK_KEY || '',
    region: 'eu' as const, // 'eu' o 'us'
  },

  // Analyzee (o alternativa)
  analyzee: {
    // IDs por página/sección
    main: process.env.NEXT_PUBLIC_ANALYZEE_ID || 'WJ9shmvFDGySBxuQvEoh',
    datacenter: process.env.NEXT_PUBLIC_ANALYZEE_DATACENTER || 'FHr0QW7Eq4GEH8Kby09V',
    piezas: process.env.NEXT_PUBLIC_ANALYZEE_PIEZAS || 'TLkcx3fkKTqBpqesGvYI',
  },

  // WhatsApp Business
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '529993882606',
  },

  // Smartlook IDs por landing page
  smartlookLandings: {
    clinicas: process.env.NEXT_PUBLIC_SMARTLOOK_CLINICAS || 'aa000406eb9aec80894eb48f0e6ab0114fd0e447',
    fabricantes: process.env.NEXT_PUBLIC_SMARTLOOK_FABRICANTES || '',
    talleres: process.env.NEXT_PUBLIC_SMARTLOOK_TALLERES || '',
  },
};

// Helper para verificar si el tracking está habilitado
export const isTrackingEnabled = () => {
  return process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_ENABLE_TRACKING === 'true';
};

// Helper para obtener URL de Analyzee
export const getAnalyzeeUrl = (pageId?: string) => {
  const id = pageId || trackingConfig.analyzee.main;
  return `https://cdn.analyzee.io/sdk/${id}.js`;
};
