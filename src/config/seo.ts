// Configuración SEO Global para SCRAM Consulting
// Optimizado para IA, motores de búsqueda y CTR

export const SITE_CONFIG = {
  name: "Scram Consulting",
  legalName: "Scram S.A. de C.V.",
  foundingYear: 1997,
  slogan: "Transformamos Ideas en Realidades Tangibles",
  tagline: "Simplificando la tecnología desde 1997",
  url: "https://www.scram2k.com",
  domain: "scram2k.com",

  description: "Scram Consulting: Proveedor integral de soluciones IT en México y Estados Unidos. Especialistas en desarrollo de software, ciberseguridad, infraestructura, hardware industrial y soporte técnico desde 1997. Más de 25 años sirviendo a empresas como FEMSA, Grupo Modelo y Chedraui.",

  keywords: [
    // Servicios principales
    "arquitectura de software México",
    "desarrollo de aplicaciones empresariales",
    "plataformas web clase mundial",
    "seguridad electrónica empresarial",
    "videovigilancia inteligente IA",
    "ciberseguridad México",
    "licenciamiento software empresarial",
    "firewall empresarial",
    "hardware industrial México",
    "equipamiento tecnológico empresas",
    "infraestructura IT",
    "cableado estructurado certificado",
    "soporte técnico empresarial",
    "póliza de mantenimiento IT",

    // Localización geográfica
    "servicios IT CDMX",
    "soluciones tecnológicas Estado de México",
    "proveedor IT Texas",
    "tecnología empresarial Cuautitlán Izcalli",

    // Marcas y partners
    "Microsoft partner México",
    "Oracle licenciamiento",
    "Cisco certificado",
    "VMware partner",
    "Fortinet distribuidor",

    // Industrias objetivo
    "soluciones IT manufactura",
    "tecnología sector retail",
    "IT servicios profesionales",
    "infraestructura IT financiero"
  ],

  author: "Scram Consulting",
  language: "es-MX",
  locale: "es_MX",

  // Open Graph & Social Media
  openGraph: {
    type: "website",
    siteName: "Scram Consulting",
    locale: "es_MX",
    localeAlternate: ["en_US"]
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@scramnet",
    creator: "@scramnet"
  },

  // Datos de contacto
  contact: {
    email: "contacto@scram2k.com",
    phone: {
      mexico: "+52 55 1113 0259",
      mexicoAlt1: "+52 55 1113 0936",
      mexicoAlt2: "+52 55 9757 1610",
      usa: "+1 956 957 3838",
      whatsapp: "+52 999 388 2606"
    }
  },

  // Ubicaciones físicas (para GEO optimization)
  locations: [
    {
      name: "Oficinas CDMX",
      type: "headquarters",
      address: {
        street: "Paseo de la Reforma 342, Piso 26",
        neighborhood: "Juarez",
        city: "Ciudad de México",
        state: "CDMX",
        postalCode: "06600",
        country: "México",
        countryCode: "MX"
      },
      geo: {
        latitude: 19.428472,
        longitude: -99.161389
      },
      phone: "+52 55 1113 0259"
    },
    {
      name: "Centro de Distribución (CEDIS)",
      type: "warehouse",
      address: {
        street: "Pingüicas Lote 16, Manzana 138",
        neighborhood: "Bosques de Morelos",
        city: "Cuautitlán Izcalli",
        state: "Estado de México",
        postalCode: "54760",
        country: "México",
        countryCode: "MX"
      },
      geo: {
        latitude: 19.641667,
        longitude: -99.210556
      },
      phone: "+52 55 1113 0936"
    },
    {
      name: "Oficina USA",
      type: "branch",
      address: {
        street: "1727 E Tyler Ave",
        city: "Harlingen",
        state: "Texas",
        postalCode: "78550",
        country: "United States",
        countryCode: "US"
      },
      geo: {
        latitude: 26.190833,
        longitude: -97.696111
      },
      phone: "+1 956 957 3838"
    }
  ],

  // Redes sociales
  social: {
    facebook: "https://www.facebook.com/scram2k",
    twitter: "https://x.com/scramnet",
    instagram: "https://www.instagram.com/scramnet/",
    linkedin: "https://www.linkedin.com/company/scram2k/"
  },

  // Horarios de atención
  businessHours: {
    monday: "09:00-18:00",
    tuesday: "09:00-18:00",
    wednesday: "09:00-18:00",
    thursday: "09:00-18:00",
    friday: "09:00-18:00",
    saturday: "Closed",
    sunday: "Closed"
  }
};

// Configuración SEO por servicio
export const SERVICES_SEO = {
  "arquitectura-software": {
    title: "Arquitectura de Software, Apps y Plataformas Web | Scram Consulting",
    description: "Desarrollo de aplicaciones empresariales de clase mundial en México y Estados Unidos. Plataformas web escalables, seguras y adaptadas a su negocio. +25 años de experiencia. Clientes: FEMSA, Grupo Modelo.",
    keywords: "arquitectura de software, desarrollo de aplicaciones, plataformas web, software empresarial, desarrollo web México, apps empresariales",
    h1: "Arquitectura de Software, Apps y Plataformas Web",
    canonicalUrl: "/arquitectura-software-apps-plataformas-web",
    schema: "SoftwareApplication"
  },

  "seguridad-electronica": {
    title: "Soluciones de Seguridad Electrónica con IA | CCTV Empresarial México",
    description: "Videovigilancia inteligente con IA, controles de acceso biométricos y monitoreo 24/7. Protección empresarial con tecnología de última generación. Caso de éxito: Hertz México.",
    keywords: "seguridad electrónica, videovigilancia IA, CCTV empresarial, control de acceso biométrico, cámaras seguridad México, monitoreo empresarial",
    h1: "Soluciones de Seguridad Electrónica con Inteligencia Artificial",
    canonicalUrl: "/soluciones-seguridad-electronica",
    schema: "SecuritySystem"
  },

  "licenciamiento-ciberseguridad": {
    title: "Licenciamiento Software y Ciberseguridad Empresarial | Microsoft, Oracle, Cisco",
    description: "Licencias originales de Microsoft, Oracle, IBM, Cisco, VMware, Fortinet. Protección contra malware, ransomware y amenazas digitales. Firewall empresarial y gestión de licenciamiento.",
    keywords: "licenciamiento software, ciberseguridad México, firewall empresarial, Microsoft partner, Oracle licencias, Fortinet distribuidor, protección ransomware",
    h1: "Licenciamiento y Seguridad Cibernética",
    canonicalUrl: "/licenciamiento-seguridad-cibernetica",
    schema: "ComputerStore"
  },

  "hardware-industrial": {
    title: "Equipamiento Hardware y Soluciones Industriales | 15,000+ Piezas",
    description: "Más de 15,000 piezas: equipos de automatización, robótica, computadoras, servidores, impresión. Marcas: HP, Dell, Lenovo, Siemens, ABB, Bosch. Distribuidor autorizado.",
    keywords: "hardware industrial, equipamiento tecnológico, automatización industrial, robótica, computadoras empresariales, servidores, HP Dell Lenovo distribuidor",
    h1: "Equipamiento, Hardware y Soluciones Industriales",
    canonicalUrl: "/equipamiento-hardware-soluciones-industriales",
    schema: "HardwareStore"
  },

  "infraestructura-conectividad": {
    title: "Infraestructura IT y Cableado Estructurado Certificado | Centros de Datos",
    description: "Cableado estructurado certificado, fibra óptica, redes LAN/WAN, construcción de centros de datos. Partners: Cisco, Panduit, Belden. Instalación profesional garantizada.",
    keywords: "cableado estructurado, fibra óptica, infraestructura IT, centros de datos, redes empresariales, LAN WAN, Cisco partner certificado",
    h1: "Infraestructura y Soluciones de Conectividad",
    canonicalUrl: "/infraestructura-soluciones-conectividad",
    schema: "ProfessionalService"
  },

  "soporte-tecnico": {
    title: "Póliza de Soporte Técnico IT | 3 Planes Empresariales | Scram Consulting",
    description: "Soporte técnico empresarial remoto y en sitio. 3 planes: Negocios, Pyme, Empresarial. Respuesta 4-24 hrs. Hardware, software, redes. Minimice costos de mantenimiento.",
    keywords: "soporte técnico empresarial, póliza mantenimiento IT, soporte remoto, asistencia técnica México, mantenimiento preventivo IT",
    h1: "Póliza de Soporte Técnico Empresarial",
    canonicalUrl: "/poliza-soporte-tecnico",
    schema: "TechSupport"
  }
};

// CTR Optimization - Títulos y descripciones optimizados
export const CTR_PATTERNS = {
  powerWords: [
    "Certificado", "Garantizado", "Profesional", "Experto", "Líder",
    "Confiable", "Rápido", "Seguro", "Clase Mundial", "Innovador"
  ],

  urgencyWords: [
    "Ahora", "Hoy", "Inmediato", "Rápido", "24/7"
  ],

  credibilityIndicators: [
    "+25 años", "Desde 1997", "15,000+ piezas", "Clientes: FEMSA",
    "Partner oficial", "Certificado"
  ],

  locationModifiers: [
    "México", "CDMX", "Estado de México", "Texas", "Cuautitlán Izcalli"
  ]
};

// Robots configuration
export const ROBOTS_CONFIG = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

// Verification codes
export const VERIFICATION = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
};
