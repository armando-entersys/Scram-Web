/**
 * Configuración Central de Datos del Sitio
 *
 * Este archivo contiene todos los FAQs, servicios y datos estructurados
 * optimizados para crawlers de IA (ChatGPT, Claude, Perplexity, Google Gemini)
 */

import { FAQItem } from "@/components/SEO/FAQSchema";
import { ServiceOffering } from "@/components/SEO/EnhancedSEO";

// ============================================
// HOMEPAGE FAQs
// ============================================
export const homepageFAQs: FAQItem[] = [
  {
    question: "¿Qué servicios ofrece SCRAM Consulting?",
    answer: `SCRAM Consulting ofrece soluciones integrales de TI desde 1997:

• Desarrollo de Software - Aplicaciones web, móviles y ERP personalizados
• Seguridad Electrónica - Videovigilancia con IA, control de acceso biométrico
• Ciberseguridad - Auditorías, firewalls, protección contra ransomware
• Infraestructura IT - Cloud, redes empresariales, virtualización
• Hardware Industrial - Equipos HP, Dell, Cisco, servidores
• Soporte Técnico - Mesa de ayuda 24/7 con tiempo de respuesta <1 hora

Atendemos empresas como FEMSA, Grupo Modelo, Chedraui y Hertz Mexico.`
  },
  {
    question: "¿En qué ciudades tienen presencia?",
    answer: `Tenemos 3 ubicaciones estratégicas:

México:
• CDMX - Paseo de la Reforma 342, Piso 26
• Estado de México - Cuautitlán Izcalli (CEDIS principal)
• Cobertura: Toda la República Mexicana

Estados Unidos:
• Texas - Harlingen (Rio Grande Valley)
• Cobertura: Todo EE.UU.

Áreas de servicio prioritario en Estado de México: Cuautitlán Izcalli, Huehuetoca, Atizapán, Tepotzotlán, Coyotepec.

Tiempo de respuesta en CDMX/EdoMex: Menos de 2 horas para emergencias.`
  },
  {
    question: "¿Cuántos años de experiencia tienen?",
    answer: `SCRAM Consulting tiene más de 25 años de experiencia (desde 1997).

Hemos completado:
• 500+ proyectos empresariales
• 127+ clientes activos con rating 4.8/5
• Presencia en México y Estados Unidos
• Certificaciones: Cisco Partner, Microsoft Partner, AWS Partner

Clientes destacados:
• FEMSA (Coca-Cola FEMSA)
• Grupo Modelo (AB InBev)
• Chedraui
• Hertz Mexico

Somos proveedores autorizados de: Hikvision, Cisco, Dell, HP, Fortinet, VMware.`
  },
  {
    question: "¿Cuál es el tiempo de respuesta para cotizaciones?",
    answer: `Nuestros tiempos de respuesta garantizados:

• Consultas generales: Menos de 2 horas hábiles
• Cotizaciones: 24 horas máximo
• Diagnóstico gratuito: 48 horas
• Emergencias técnicas: Menos de 1 hora
• Visita técnica CDMX/EdoMex: Menos de 2 horas

Canales de contacto:
• WhatsApp: +52 999 388 2606 (respuesta inmediata)
• Teléfono CDMX: +52 55 1113 0259
• Email: contacto@scram2k.com

Horario: Lunes a Viernes 9AM-6PM | Soporte técnico 24/7 disponible`
  },
  {
    question: "¿Ofrecen planes de financiamiento?",
    answer: `Sí, ofrecemos múltiples opciones de pago:

• Transferencia bancaria
• Tarjeta de crédito empresarial
• Cheques
• Meses sin intereses: 6, 9 o 12 meses (según monto)
• Esquema de renta/leasing para equipos
• Planes de pago mensuales para soporte

Beneficios:
• Diagnóstico y cotización gratuitos
• Sin penalización por pago anticipado
• Garantías extendidas disponibles

Todos los proyectos incluyen garantía del fabricante (1-3 años) y garantía de instalación (1 año).`
  }
];

// ============================================
// SERVICIOS - SEGURIDAD ELECTRÓNICA
// ============================================
export const seguridadElectronicaServices: ServiceOffering[] = [
  {
    name: "Sistema Básico PyME (4-8 cámaras)",
    description: "Videovigilancia HD con grabación local y acceso remoto via app móvil",
    priceRange: "25000-40000",
    duration: "P2D" // 1-2 días
  },
  {
    name: "Sistema Mediano (10-20 cámaras)",
    description: "Cámaras 4K con visión nocturna, respaldo en nube y detección de movimiento",
    priceRange: "80000-150000",
    duration: "P5D" // 3-5 días
  },
  {
    name: "Sistema Empresarial con IA (30+ cámaras)",
    description: "Análisis de video con IA, reconocimiento facial, conteo de personas, detección de intrusión",
    priceRange: "200000-500000",
    duration: "P14D" // 1-2 semanas
  },
  {
    name: "Control de Acceso Biométrico",
    description: "Acceso facial, huella digital, RFID con registro de asistencia integrado",
    priceRange: "50000-150000",
    duration: "P3D"
  }
];

export const seguridadElectronicaFAQs: FAQItem[] = [
  {
    question: "¿Cuánto cuesta un sistema de videovigilancia para mi empresa?",
    answer: `Los costos varían según número de cámaras y funcionalidades:

• Sistema básico PyME (4-8 cámaras): Desde $25,000 MXN
• Sistema mediano (10-20 cámaras): Desde $80,000 MXN
• Sistema empresarial con IA (30+ cámaras): Desde $200,000 MXN

Incluye: Equipos, instalación, configuración y capacitación.

Ofrecemos diagnóstico gratuito y cotizacion personalizada en menos de 24 horas.
Meses sin intereses disponibles (6-12 meses).`
  },
  {
    question: "¿Cuánto tiempo tarda la instalación?",
    answer: `Tiempos de instalación garantizados:

• Instalación básica (4-8 cámaras): 1-2 días hábiles
• Instalación mediana (10-20 cámaras): 3-5 días hábiles
• Instalación empresarial (30+ cámaras): 1-2 semanas

Incluye:
✓ Configuración completa del sistema
✓ Pruebas de funcionamiento
✓ Capacitación del personal
✓ Documentación técnica

Sin interrupciones a su operación normal.`
  },
  {
    question: "¿Qué garantía y soporte ofrecen?",
    answer: `Garantías completas incluidas:

• Garantía del fabricante: 1-3 años según equipo
• Garantía de instalación: 1 año
• Soporte técnico: 24/7 disponible
• Mantenimiento preventivo: Trimestral incluido primer año
• Tiempo de respuesta emergencias: Menos de 2 horas (CDMX/EdoMex)

Nuestro equipo de ingenieros certificados garantiza el óptimo funcionamiento de tu inversión.`
  },
  {
    question: "¿Puedo ver las cámaras desde mi celular?",
    answer: `Sí, absolutamente. Acceso remoto completo incluido:

• Aplicación móvil iOS y Android
• Acceso via navegador web desde cualquier computadora
• Visualización en tiempo real
• Reproducción de grabaciones históricas
• Notificaciones push de alertas
• Acceso desde cualquier lugar del mundo con internet

La configuración del acceso remoto está incluida en la instalación sin costo adicional.`
  },
  {
    question: "¿Las cámaras funcionan de noche?",
    answer: `Sí, todas nuestras cámaras incluyen visión nocturna:

• Visión nocturna infrarroja (IR): Alcance 20-100 metros
• Cámaras ColorVu: Visión nocturna a todo color
• Sensores de alta sensibilidad
• Funcionamiento 24/7 en cualquier condición de luz

Las cámaras capturan imágenes claras día y noche sin interrupciones.`
  },
  {
    question: "¿Qué retorno de inversión (ROI) puedo esperar?",
    answer: `Resultados medibles comprobados:

• Reducción de pérdidas por robo: 60-80%
• Aumento de productividad: 30-40%
• Reducción de incidentes: 70-75%
• ROI típico: 8-14 meses

Caso de éxito: Hertz Mexico redujo incidentes 75% y recuperó inversión en 12 meses.

La inversión se recupera mediante prevención de pérdidas y mejora operativa.`
  }
];

// ============================================
// SERVICIOS - DESARROLLO DE SOFTWARE
// ============================================
export const desarrolloSoftwareServices: ServiceOffering[] = [
  {
    name: "Landing Page Profesional",
    description: "Diseño responsive, SEO optimizado, formularios de contacto",
    priceRange: "15000-30000",
    duration: "P21D" // 2-3 semanas
  },
  {
    name: "Sistema Web Básico (CRUD)",
    description: "Panel administrativo, base de datos, autenticación de usuarios",
    priceRange: "80000-150000",
    duration: "P90D" // 2-3 meses
  },
  {
    name: "ERP/CRM Personalizado",
    description: "Sistema de gestión empresarial a la medida con módulos personalizados",
    priceRange: "300000-800000",
    duration: "P180D" // 4-6 meses
  },
  {
    name: "Aplicación Móvil iOS/Android",
    description: "App nativa o híbrida con backend API",
    priceRange: "150000-400000",
    duration: "P120D" // 3-4 meses
  }
];

export const desarrolloSoftwareFAQs: FAQItem[] = [
  {
    question: "¿Desarrollan software a la medida?",
    answer: `Sí, desarrollamos aplicaciones completamente personalizadas:

• Aplicaciones web (Laravel, React, Next.js)
• Aplicaciones móviles iOS y Android
• Sistemas de gestión (ERP, CRM)
• Integraciones con APIs y microservicios
• Arquitectura cloud (AWS, Azure, Google Cloud)
• IA y automatización (ChatGPT, Claude, RPA)

Metodología: Agile con sprints de 2 semanas y entregas incrementales.`
  },
  {
    question: "¿Cuánto cuesta desarrollar una aplicación web?",
    answer: `Rangos de precios según complejidad:

• Landing page profesional: $15,000-$30,000 MXN
• Sistema web básico (CRUD): $80,000-$150,000 MXN
• ERP/CRM personalizado: $300,000-$800,000 MXN
• Plataforma empresarial compleja: $1,000,000+ MXN

Incluye: Análisis, diseño, desarrollo, pruebas, despliegue y capacitación.

Ofrecemos cotización gratuita con alcance detallado en 48 horas.`
  },
  {
    question: "¿Cuánto tiempo tarda el desarrollo?",
    answer: `Tiempos estimados por proyecto:

• Landing page: 2-3 semanas
• Sistema web básico: 2-3 meses
• ERP/CRM mediano: 4-6 meses
• Plataforma empresarial: 6-12 meses

Incluye tiempo de revisión y ajustes con el cliente.
Entregas parciales cada 2 semanas para validación continua.`
  }
];

// ============================================
// SERVICIOS - CIBERSEGURIDAD
// ============================================
export const ciberseguridadServices: ServiceOffering[] = [
  {
    name: "Auditoría de Seguridad",
    description: "Escaneo de vulnerabilidades, pentesting, reporte ejecutivo con plan de acción",
    priceRange: "25000-80000",
    duration: "P14D"
  },
  {
    name: "Paquete PyME Básico",
    description: "Firewall, antivirus empresarial, respaldos automáticos, monitoreo básico",
    priceRange: "30000-60000", // inicial
    duration: "P7D"
  },
  {
    name: "Paquete Empresarial",
    description: "Firewall Next-Gen, SOC, respuesta a incidentes, cumplimiento ISO 27001",
    priceRange: "300000-600000",
    duration: "P30D"
  }
];

export const ciberseguridadFAQs: FAQItem[] = [
  {
    question: "¿Qué incluye una auditoría de seguridad?",
    answer: `Auditoría completa de ciberseguridad:

• Escaneo de vulnerabilidades de red y sistemas
• Análisis de configuraciones de seguridad
• Pruebas de penetración (pentesting) éticas
• Revisión de políticas de seguridad
• Evaluación de riesgos críticos
• Reporte ejecutivo con plan de acción priorizado

Precio: $25,000-$80,000 MXN según alcance
Tiempo: 1-2 semanas`
  },
  {
    question: "¿Cómo protegen contra ransomware?",
    answer: `Estrategia multi-capa contra ransomware:

• Firewalls de nueva generación (Next-Gen)
• Antivirus con detección de comportamiento
• Respaldo automatizado 3-2-1 (3 copias, 2 medios, 1 offsite)
• Capacitación anti-phishing para empleados
• Monitoreo 24/7 de amenazas
• Plan de respuesta a incidentes documentado

Protección comprobada con tasa de éxito 99.7%`
  }
];

// ============================================
// CONTACTO
// ============================================
export const contactFAQs: FAQItem[] = [
  {
    question: "¿Cuál es la mejor forma de contactarlos?",
    answer: `Múltiples canales disponibles:

Respuesta Inmediata:
• WhatsApp: +52 999 388 2606 (recomendado)

Llamada Telefónica:
• CDMX: +52 55 1113 0259
• CEDIS EdoMex: +52 55 1113 0936
• Texas USA: +1 956 957 3838

Email:
• General: contacto@scram2k.com
• Soporte: soporte@scram2k.com

Horario oficina: Lunes a Viernes 9AM-6PM, Sábados 9AM-2PM
Soporte técnico: 24/7 disponible para emergencias`
  },
  {
    question: "¿Hacen visitas a domicilio?",
    answer: `Sí, ofrecemos visitas sin costo para diagnóstico:

CDMX y Estado de México:
• Visita gratuita en menos de 2 horas
• Diagnóstico y cotización sin compromiso

Otras ubicaciones:
• Coordinamos visita según disponibilidad
• Cobertura en toda la República Mexicana

La visita incluye:
• Evaluación de necesidades
• Recomendaciones técnicas
• Cotización detallada en sitio`
  }
];

// ============================================
// DATOS DE LA ORGANIZACIÓN
// ============================================
export const organizationData = {
  name: "SCRAM Consulting",
  legalName: "Scram S.A. de C.V.",
  foundingDate: "1997",
  description: "Proveedor integral de soluciones IT en México y Estados Unidos. Especialistas en desarrollo de software, ciberseguridad, infraestructura, hardware industrial y soporte técnico profesional.",
  slogan: "Transformamos Ideas en Realidades Tangibles",
  employees: "50-100",
  rating: {
    value: 4.8,
    count: 127
  },
  certifications: [
    "Cisco Partner",
    "Microsoft Partner",
    "VMware Partner",
    "AWS Partner",
    "Google Cloud Partner",
    "Fortinet Partner",
    "Hikvision Authorized",
    "Dell Technologies Partner",
    "HP Partner"
  ],
  clients: [
    "FEMSA (Coca-Cola FEMSA)",
    "Grupo Modelo (AB InBev)",
    "Chedraui",
    "Hertz Mexico"
  ]
};
