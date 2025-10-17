import React from "react";
import type { Metadata } from "next";
import LandingLayout from "@/components/Landing/LandingLayout";
import MainBannerSeguridad from "@/components/scram/SeguridadElectronicaLanding/MainBannerSeguridad";
import FeaturesSeguridad from "@/components/scram/SeguridadElectronicaLanding/FeaturesSeguridad";
import PartnerStyleTwo from "@/components/scram/PartnerStyleTwo";
import Partner from "@/components/scram/Partner";
import ContactInfoSeguridad from "@/components/scram/SeguridadElectronicaLanding/ContactInfoSeguridad";
import GoogleMapLanding from "@/components/scram/Contact/GoogleMapLanding";
import Team from "@/components/scram/Team";
import PlyrVideo from "@/components/scram/Layout/PlyrVideo";
import Gallery1 from "@/components/scram/Gallery1";
import FAQSchema from "@/components/SEO/FAQSchema";
import CasoExitoHertz from "@/components/scram/SeguridadElectronicaLanding/CasoExitoHertz";
import GeoBanner from "@/components/scram/SeguridadElectronicaLanding/GeoBanner";
import { getLandingConfig } from "@/config/landings";

const LANDING_SLUG = 'l-ads-seguridad-electronica';
const config = getLandingConfig(LANDING_SLUG);

// Metadata SEO optimizada para Google Ads
export const metadata: Metadata = {
  title: config?.title || 'Soluciones de Seguridad Electrónica con IA | SCRAM',
  description: config?.description || 'Videovigilancia inteligente, control biométrico y monitoreo 24/7',
  keywords: config?.keywords?.join(', '),
  robots: config?.robots || 'noindex',

  openGraph: {
    title: config?.title || 'Soluciones de Seguridad Electrónica con IA',
    description: config?.description || 'Videovigilancia inteligente, control biométrico y monitoreo 24/7',
    type: 'website',
    locale: 'es_MX',
    images: [
      {
        url: '/images/scram/servicios/cctv-og.webp',
        width: 1200,
        height: 630,
        alt: 'Seguridad Electrónica SCRAM',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: config?.title || 'Soluciones de Seguridad Electrónica con IA',
    description: config?.description || 'Videovigilancia inteligente, control biométrico y monitoreo 24/7',
  },
};

const Page: React.FC = () => {
  // Videos optimizados
  const videoSrc = 'https://storage.googleapis.com/scram-landings/scram-general/scram-general-1c-crf23.mp4';
  const posterSrc = 'https://storage.googleapis.com/scram-landings/scram-general/poster-video-general.webp';

  // FAQ optimizado para AI Crawlers
  const securityFAQs = [
    {
      question: "¿Cuanto cuesta un sistema de videovigilancia para mi empresa?",
      answer: "El costo varia segun el numero de camaras y funcionalidades requeridas.\n\n• Sistema basico PyME (4-8 camaras): Desde $25,000 MXN\n• Sistema mediano (10-20 camaras): Desde $80,000 MXN\n• Sistema empresarial con IA (30+ camaras): Desde $200,000 MXN\n\nIncluye: Equipos, instalacion, configuracion y capacitacion.\nOfrecemos diagnostico gratuito y cotizacion personalizada en menos de 24 horas."
    },
    {
      question: "¿Cuanto tiempo tarda la instalacion del sistema de seguridad?",
      answer: "Los tiempos de instalacion varian segun el tamaño del proyecto:\n\n• Instalacion basica (4-8 camaras): 1-2 dias habiles\n• Instalacion mediana (10-20 camaras): 3-5 dias habiles\n• Instalacion empresarial (30+ camaras): 1-2 semanas\n\nTodos los proyectos incluyen configuracion completa, pruebas de funcionamiento y capacitacion del personal."
    },
    {
      question: "¿Que garantia y soporte ofrecen?",
      answer: "Todos nuestros sistemas incluyen garantias completas:\n\n• Garantia del fabricante: 1-3 años segun equipo\n• Garantia de instalacion: 1 año\n• Soporte tecnico: 24/7 disponible\n• Mantenimiento preventivo: Trimestral incluido primer año\n• Tiempo de respuesta: Menos de 2 horas para emergencias en CDMX y Estado de Mexico\n\nNuestro equipo de ingenieros certificados garantiza el optimo funcionamiento de tu inversion."
    },
    {
      question: "¿Puedo ver las camaras desde mi celular o computadora?",
      answer: "Si, absolutamente. Todos nuestros sistemas incluyen acceso remoto completo:\n\n• Aplicacion movil para iOS y Android\n• Acceso via navegador web desde cualquier computadora\n• Visualizacion en tiempo real\n• Reproduccion de grabaciones historicas\n• Notificaciones push de alertas\n• Acceso desde cualquier lugar del mundo con internet\n\nLa configuracion del acceso remoto esta incluida en la instalacion."
    },
    {
      question: "¿Las camaras funcionan de noche o en condiciones de poca luz?",
      answer: "Si, todas nuestras camaras incluyen tecnologia de vision nocturna:\n\n• Vision nocturna infrarroja (IR): Alcance 20-100 metros\n• Camaras ColorVu: Vision nocturna a todo color\n• Sensores de imagen de alta sensibilidad\n• Funcionamiento en condiciones de iluminacion minima\n\nLas camaras capturan imagenes claras 24/7, sin importar las condiciones de iluminacion."
    },
    {
      question: "¿Que incluye el sistema de Inteligencia Artificial?",
      answer: "Nuestros sistemas con IA incluyen funciones avanzadas de deteccion:\n\n• Deteccion inteligente de movimiento (filtra falsas alarmas)\n• Reconocimiento facial de empleados y visitantes\n• Conteo automatico de personas y ocupacion\n• Deteccion de intrusion en zonas restringidas\n• Alerta de objetos abandonados\n• Reconocimiento de placas vehiculares (LPR)\n• Deteccion de comportamiento sospechoso\n• Analisis de patrones de movimiento\n\nLa IA reduce falsos positivos en un 95% y mejora significativamente la seguridad preventiva."
    },
    {
      question: "¿Cuanto tiempo se guardan las grabaciones?",
      answer: "El tiempo de almacenamiento es configurable segun tus necesidades:\n\n• Almacenamiento local: 30-90 dias (configurable)\n• Almacenamiento en la nube: 30-365 dias segun plan\n• Respaldo automatico para eventos criticos\n• Cumplimiento con requisitos legales mexicanos (minimo 30 dias recomendado)\n\nLa capacidad de almacenamiento se diseña especificamente para cada proyecto."
    },
    {
      question: "¿Que retorno de inversion (ROI) puedo esperar?",
      answer: "Nuestros clientes experimentan beneficios medibles:\n\n• Reduccion de perdidas por robo: 60-80%\n• Aumento de productividad: 30-40%\n• Reduccion de incidentes: 70-75%\n• ROI tipico: 8-14 meses\n\nCaso de exito comprobado: Hertz Mexico redujo incidentes de seguridad en 75% durante el primer año de implementacion.\n\nLa inversion se recupera rapidamente mediante la prevencion de perdidas y mejora operativa."
    }
  ];

  return (
    <LandingLayout landingSlug={LANDING_SLUG}>
      {/* Geo Banner - Solo para visitantes en zona de servicio */}
      <GeoBanner />

      {/* 1. Hero Banner con CTA principal */}
      <MainBannerSeguridad />

      {/* 2. Trust Badges - Prueba Social */}
      <PartnerStyleTwo />

      {/* 3. Video Demostrativo - Multimedia Priority */}
      <section className="video-section ptb-80" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title text-left">
                <h2>Mira Como Protegemos a Empresas Lideres</h2>
                <p>Conoce nuestras soluciones de seguridad electronica con IA en accion. Video de instalaciones reales en empresas mexicanas.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <PlyrVideo videoSrc={videoSrc} posterSrc={posterSrc} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Servicios con Imagenes Reales */}
      <FeaturesSeguridad />

      {/* 5. Galeria de Proyectos - Visual Social Proof */}
      <Gallery1 />

      {/* 6. Caso de Exito con Testimonio Visual Mejorado */}
      <CasoExitoHertz />

      {/* 7. FAQ con CTA Final */}
      <FAQSchema
        faqs={securityFAQs.slice(0, 5)}
        title="Preguntas Frecuentes"
        description="Respuestas rapidas a las dudas mas comunes"
      />

      {/* 8. Contacto con Zonas de Servicio */}
      <ContactInfoSeguridad />

      {/* Schema.org enriquecido para AI Crawlers y SEO */}

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://www.scram2k.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Servicios",
                "item": "https://www.scram2k.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Seguridad Electronica",
                "item": "https://www.scram2k.com/l-ads-seguridad-electronica"
              }
            ]
          }),
        }}
      />

      {/* Enhanced LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SCRAM Consulting - Seguridad Electronica Empresarial",
            "alternateName": "SCRAM",
            "description": "Proveedor lider de soluciones de seguridad electronica empresarial en Estado de Mexico. Especialistas en videovigilancia con IA, control de acceso biometrico, monitoreo 24/7 y sistemas anti-robo hormiga. Mas de 25 años de experiencia protegiendo empresas como FEMSA, Grupo Modelo y Hertz Mexico.",
            "image": [
              "https://www.scram2k.com/images/scram/logo.png",
              "https://www.scram2k.com/images/scram/servicios/cctv.webp",
              "https://www.scram2k.com/images/scram/servicios/cctv-og.webp"
            ],
            "@id": "https://www.scram2k.com/l-ads-seguridad-electronica",
            "url": "https://www.scram2k.com/l-ads-seguridad-electronica",
            "telephone": ["+52-55-1113-0259", "+52-55-1113-0936", "+52-999-388-2606"],
            "email": "contacto@scram2k.com",
            "priceRange": "$25,000 - $500,000 MXN",
            "currenciesAccepted": "MXN",
            "paymentAccepted": "Transferencia bancaria, Tarjeta de credito, Cheque, Meses sin intereses",
            "foundingDate": "1997",
            "slogan": "Transformamos Ideas en Realidades Tangibles",
            "knowsLanguage": ["Spanish", "English"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Pinguicas Lote 16, Manzana 138",
              "addressLocality": "Cuautitlan Izcalli",
              "addressRegion": "Estado de Mexico",
              "postalCode": "54760",
              "addressCountry": "MX"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.641667,
              "longitude": -99.210556
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Cuautitlan Izcalli"
              },
              {
                "@type": "City",
                "name": "Huehuetoca"
              },
              {
                "@type": "City",
                "name": "Atizapan de Zaragoza"
              },
              {
                "@type": "City",
                "name": "Tepotzotlan"
              },
              {
                "@type": "City",
                "name": "Coyotepec"
              },
              {
                "@type": "City",
                "name": "Bosque de Morelos"
              },
              {
                "@type": "State",
                "name": "Estado de Mexico"
              },
              {
                "@type": "City",
                "name": "Ciudad de Mexico"
              }
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "14:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "sameAs": [
              "https://www.facebook.com/scram2k",
              "https://x.com/scramnet",
              "https://www.linkedin.com/company/scram2k/",
              "https://www.instagram.com/scramnet/"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Seguridad Electronica",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Videovigilancia con IA",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Sistema de Videovigilancia Basico",
                        "description": "Sistema de 4-8 camaras HD con grabacion local y acceso remoto",
                        "provider": {
                          "@type": "Organization",
                          "name": "SCRAM Consulting"
                        }
                      },
                      "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "25000",
                        "priceCurrency": "MXN",
                        "valueAddedTaxIncluded": true
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Sistema de Videovigilancia con IA",
                        "description": "Sistema empresarial de 30+ camaras con analisis de video IA, reconocimiento facial y deteccion de eventos",
                        "provider": {
                          "@type": "Organization",
                          "name": "SCRAM Consulting"
                        }
                      },
                      "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "200000",
                        "priceCurrency": "MXN",
                        "valueAddedTaxIncluded": true
                      }
                    }
                  ]
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Control de Acceso Biometrico",
                    "description": "Sistema de control de acceso con reconocimiento facial, huella digital y acceso vehicular",
                    "provider": {
                      "@type": "Organization",
                      "name": "SCRAM Consulting"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Monitoreo y Soporte 24/7",
                    "description": "Servicio de monitoreo remoto 24/7 con soporte tecnico y mantenimiento preventivo",
                    "provider": {
                      "@type": "Organization",
                      "name": "SCRAM Consulting"
                    }
                  }
                }
              ]
            },
            "makesOffer": {
              "@type": "Offer",
              "name": "Diagnostico de Seguridad Gratuito",
              "description": "Evaluacion gratuita de necesidades de seguridad y cotizacion personalizada en menos de 24 horas",
              "price": "0",
              "priceCurrency": "MXN"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+52-55-1113-0259",
                "contactType": "customer service",
                "areaServed": "MX",
                "availableLanguage": ["Spanish", "English"],
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              },
              {
                "@type": "ContactPoint",
                "telephone": "+52-999-388-2606",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "MX",
                "availableLanguage": ["Spanish", "English"]
              },
              {
                "@type": "ContactPoint",
                "telephone": "+52-55-1113-0259",
                "contactType": "technical support",
                "areaServed": "MX",
                "availableLanguage": ["Spanish", "English"],
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "opens": "00:00",
                  "closes": "23:59"
                }
              }
            ],
            "keywords": "seguridad electronica Estado de Mexico, CCTV empresarial, videovigilancia con IA, control de acceso biometrico, monitoreo 24/7, camaras de seguridad empresas, sistema anti robo hormiga, seguridad industrial, control vehicular, reconocimiento facial empresarial"
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SCRAM Consulting",
            "legalName": "Scram S.A. de C.V.",
            "url": "https://www.scram2k.com",
            "logo": "https://www.scram2k.com/images/scram/logo.png",
            "foundingDate": "1997",
            "founders": [],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Paseo de la Reforma 342, Piso 26",
              "addressLocality": "Ciudad de Mexico",
              "addressRegion": "CDMX",
              "postalCode": "06600",
              "addressCountry": "MX"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+52-55-1113-0259",
              "contactType": "sales",
              "email": "contacto@scram2k.com",
              "areaServed": ["MX", "US"],
              "availableLanguage": ["Spanish", "English"]
            },
            "sameAs": [
              "https://www.facebook.com/scram2k",
              "https://x.com/scramnet",
              "https://www.linkedin.com/company/scram2k/",
              "https://www.instagram.com/scramnet/"
            ],
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": "50-100"
            },
            "award": "Proveedor certificado Hikvision, Partner Cisco, Microsoft Partner",
            "knowsAbout": [
              "Seguridad Electronica",
              "Videovigilancia",
              "Control de Acceso",
              "Inteligencia Artificial",
              "Ciberseguridad",
              "Desarrollo de Software",
              "Infraestructura IT"
            ]
          }),
        }}
      />
    </LandingLayout>
  );
};

export default Page;
