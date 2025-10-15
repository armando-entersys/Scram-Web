// Configuración centralizada para todas las landing pages
// Optimizado para SEO, conversión y tracking

export interface LandingConfig {
  // Metadata SEO
  title: string;
  description: string;
  keywords?: string[];
  robots?: 'index' | 'noindex';
  canonicalUrl?: string;

  // Analytics
  analyzeeId?: string;
  smartlookId?: string;
  metaPixelId?: string;

  // Google Ads
  conversionLabel?: string;

  // WhatsApp
  whatsappMessage?: string;
  whatsappClickEvent?: string;

  // Contenido
  category: 'ads' | 'service' | 'product';
  serviceType?: string;
}

export const LANDINGS_CONFIG: Record<string, LandingConfig> = {
  // ============================================
  // LANDINGS DE GOOGLE ADS (por industria)
  // ============================================

  'l-ads-clinicas': {
    title: 'Marketing ADS Especializado en Centros Médicos y Estéticos | Scram',
    description: 'Sistema efectivo de adquisición de pacientes desde 1997. Ecosistema de marketing digital que atrae pacientes de calidad. Máquina imparable de generación de citas.',
    keywords: [
      'marketing clínicas',
      'google ads centros médicos',
      'marketing centros estéticos',
      'adquisición pacientes',
      'publicidad clínicas México',
      'marketing digital salud'
    ],
    robots: 'noindex',
    analyzeeId: 'WJ9shmvFDGySBxuQvEoh', // ID específico si lo tiene
    smartlookId: 'aa000406eb9aec80894eb48f0e6ab0114fd0e447',
    conversionLabel: '73OWCNeAmNQZELjP9cQD',
    whatsappMessage: 'Hola, me interesa el sistema de adquisición de pacientes para mi clínica',
    whatsappClickEvent: 'whatsapp_ads_clinicas',
    category: 'ads',
    serviceType: 'Marketing Digital - Sector Salud',
  },

  'l-ads-fabricantes': {
    title: 'Sistema de Adquisición de Clientes para Fabricantes | Marketing Industrial',
    description: 'Ecosistema de marketing digital diseñado para atraer clientes industriales al menor costo. Desde 1997 ayudando a fabricantes a crecer.',
    keywords: [
      'marketing fabricantes',
      'google ads industria',
      'marketing industrial',
      'adquisición clientes B2B',
      'publicidad manufactura México'
    ],
    robots: 'noindex',
    analyzeeId: 'pzcTs6st16tNfOt8GMnG',
    conversionLabel: '73OWCNeAmNQZELjP9cQD',
    whatsappMessage: 'Hola, me interesa el sistema de adquisición de clientes para mi empresa de manufactura',
    whatsappClickEvent: 'whatsapp_ads_fabricantes',
    category: 'ads',
    serviceType: 'Marketing Digital - Sector Industrial',
  },

  'l-ads-talleres': {
    title: 'Marketing Digital para Talleres Mecánicos y Automotrices | Google Ads',
    description: 'Sistema efectivo de adquisición de clientes para talleres. Atrae más vehículos a tu taller con marketing digital especializado.',
    keywords: [
      'marketing talleres mecánicos',
      'google ads automotriz',
      'publicidad talleres',
      'adquisición clientes talleres',
      'marketing automotriz México'
    ],
    robots: 'noindex',
    analyzeeId: 'n7t5IqYISenu0WcsSzqo',
    conversionLabel: '73OWCNeAmNQZELjP9cQD',
    whatsappMessage: 'Hola, me interesa el sistema de adquisición de clientes para mi taller',
    whatsappClickEvent: 'whatsapp_ads_talleres',
    category: 'ads',
    serviceType: 'Marketing Digital - Sector Automotriz',
  },

  'l-ads-sistema-de-adquisicion-de-clientes': {
    title: 'Sistema Efectivo de Adquisición de Clientes | CRM y Marketing Automation',
    description: 'Ecosistema completo de marketing digital: Google Ads + CRM + Automatización. Convierte visitantes en clientes automáticamente.',
    keywords: [
      'sistema adquisición clientes',
      'CRM marketing',
      'marketing automation México',
      'embudo ventas digital',
      'generación leads'
    ],
    robots: 'noindex',
    conversionLabel: '73OWCNeAmNQZELjP9cQD',
    whatsappMessage: 'Hola, me interesa implementar un sistema de adquisición de clientes',
    whatsappClickEvent: 'whatsapp_ads_sistema',
    category: 'ads',
    serviceType: 'Marketing Digital - Sistema Completo',
  },

  // ============================================
  // LANDINGS DE SERVICIOS
  // ============================================

  'l-mvp-software-factory': {
    title: 'Software Factory para Startups | Desarrollo Rápido de MVPs | Scram',
    description: 'Creación de MVP, arquitectura de software y plataformas web. Desarrollo ágil para startups y empresas en México y USA. Desde 1997.',
    keywords: [
      'software factory México',
      'desarrollo MVP',
      'startup development',
      'desarrollo ágil',
      'plataforma web personalizada',
      'arquitectura software'
    ],
    robots: 'noindex',
    conversionLabel: 'sxBRCJDwu94ZELjP9cQD',
    whatsappMessage: 'Hola, me interesa desarrollar un MVP para mi startup',
    whatsappClickEvent: 'whatsapp_mvp_factory',
    category: 'service',
    serviceType: 'Desarrollo de Software',
  },

  'l-mvp-dashboard': {
    title: 'Desarrollo de Dashboards Empresariales | Visualización de Datos | Scram',
    description: 'Dashboards personalizados con visualización de datos en tiempo real. Business Intelligence y análisis de datos para empresas.',
    keywords: [
      'desarrollo dashboard',
      'business intelligence México',
      'visualización datos',
      'dashboard empresarial',
      'analytics personalizado'
    ],
    robots: 'noindex',
    whatsappMessage: 'Hola, me interesa desarrollar un dashboard para mi empresa',
    whatsappClickEvent: 'whatsapp_mvp_dashboard',
    category: 'service',
    serviceType: 'Business Intelligence',
  },

  'l-licenciamiento': {
    title: 'Licenciamiento de Software Empresarial | Microsoft, Oracle, Cisco | Scram',
    description: 'Licencias originales de software: Microsoft, Oracle, IBM, Cisco, VMware. Partner autorizado. Soporte y asesoría incluida.',
    keywords: [
      'licenciamiento software México',
      'Microsoft partner',
      'Oracle licencias',
      'Cisco distribuidor',
      'VMware autorizado',
      'software empresarial'
    ],
    robots: 'noindex',
    whatsappMessage: 'Hola, necesito cotizar licencias de software para mi empresa',
    whatsappClickEvent: 'whatsapp_licenciamiento',
    category: 'product',
    serviceType: 'Licenciamiento Software',
  },

  'l-piezas-industriales': {
    title: 'Piezas Industriales y Automatización | +15,000 SKUs | Scram',
    description: 'Más de 15,000 piezas industriales: automatización, robótica, control industrial. Marcas: Siemens, ABB, Bosch, Schneider. Entrega rápida.',
    keywords: [
      'piezas industriales México',
      'automatización industrial',
      'robótica industrial',
      'control industrial',
      'Siemens distribuidor',
      'ABB México'
    ],
    robots: 'noindex',
    analyzeeId: 'TLkcx3fkKTqBpqesGvYI',
    whatsappMessage: 'Hola, busco piezas industriales para mi planta',
    whatsappClickEvent: 'whatsapp_piezas',
    category: 'product',
    serviceType: 'Hardware Industrial',
  },

  'l-redes-corporativas-cableado-estructurado': {
    title: 'Cableado Estructurado Certificado | Redes Corporativas | Scram',
    description: 'Instalación de cableado estructurado certificado, fibra óptica, redes LAN/WAN. Cisco Partner. Garantía de por vida.',
    keywords: [
      'cableado estructurado México',
      'redes corporativas',
      'fibra óptica instalación',
      'Cisco partner certificado',
      'infraestructura IT',
      'redes empresariales'
    ],
    robots: 'noindex',
    whatsappMessage: 'Hola, necesito cotizar cableado estructurado para mi empresa',
    whatsappClickEvent: 'whatsapp_redes',
    category: 'service',
    serviceType: 'Infraestructura IT',
  },

  'l-refacciones-hardware-it-centro-de-datos-industrial': {
    title: 'Refacciones Hardware IT | Centro de Datos Industrial | Scram',
    description: 'Refacciones y hardware para centros de datos: servidores, storage, networking. HP, Dell, Lenovo, Cisco. Soporte 24/7.',
    keywords: [
      'refacciones IT México',
      'hardware centro datos',
      'servidores HP Dell',
      'storage empresarial',
      'networking Cisco',
      'soporte data center'
    ],
    robots: 'noindex',
    whatsappMessage: 'Hola, necesito refacciones para mi centro de datos',
    whatsappClickEvent: 'whatsapp_refacciones',
    category: 'product',
    serviceType: 'Hardware Data Center',
  },

  'l-soluciones-para-centro-de-datos-servidores': {
    title: 'Soluciones para Centros de Datos | Servidores Empresariales | Scram',
    description: 'Diseño, construcción e implementación de centros de datos. Servidores, storage, virtualización. Proyectos llave en mano.',
    keywords: [
      'centro de datos México',
      'servidores empresariales',
      'data center construcción',
      'virtualización VMware',
      'infraestructura crítica',
      'proyecto llave en mano'
    ],
    robots: 'noindex',
    analyzeeId: 'FHr0QW7Eq4GEH8Kby09V',
    whatsappMessage: 'Hola, necesito asesoría para mi proyecto de centro de datos',
    whatsappClickEvent: 'whatsapp_datacenter',
    category: 'service',
    serviceType: 'Data Center',
  },

  'l-ads-seguridad-electronica': {
    title: 'Soluciones de Seguridad Electrónica con IA | CCTV Empresarial Estado de México',
    description: 'Videovigilancia inteligente con IA, control de acceso biométrico y vehicular, monitoreo 24/7. Diagnóstico gratuito en Cuautitlán Izcalli, Huehuetoca, Atizapán. Protege tu operación con SCRAM.',
    keywords: [
      'seguridad electrónica Estado de México',
      'CCTV empresarial Cuautitlán Izcalli',
      'videovigilancia con IA Huehuetoca',
      'control de acceso biométrico Atizapán',
      'cámaras seguridad empresas',
      'monitoreo 24/7 industrial',
      'sistema videovigilancia empresarial',
      'control vehicular empresas',
      'seguridad electrónica Tepotzotlán',
      'instalación CCTV industrial'
    ],
    robots: 'noindex',
    conversionLabel: '73OWCNeAmNQZELjP9cQD',
    whatsappMessage: 'Hola, me interesa un diagnóstico gratuito de seguridad electrónica para mi empresa',
    whatsappClickEvent: 'whatsapp_ads_seguridad',
    category: 'ads',
    serviceType: 'Seguridad Electrónica Empresarial',
  },
};

// Helper para obtener configuración de una landing
export const getLandingConfig = (slug: string): LandingConfig | undefined => {
  return LANDINGS_CONFIG[slug];
};

// Helper para obtener todas las landings de una categoría
export const getLandingsByCategory = (category: 'ads' | 'service' | 'product'): Record<string, LandingConfig> => {
  return Object.entries(LANDINGS_CONFIG)
    .filter(([_, config]) => config.category === category)
    .reduce((acc, [slug, config]) => ({ ...acc, [slug]: config }), {});
};

// Helper para obtener mensaje de WhatsApp personalizado
export const getWhatsAppMessage = (landingSlug: string, customMessage?: string): string => {
  const config = getLandingConfig(landingSlug);
  return customMessage || config?.whatsappMessage || 'Hola, me gustaría obtener más información sobre sus servicios.';
};
