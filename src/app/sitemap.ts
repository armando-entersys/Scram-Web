import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const currentDate = new Date();

  // Páginas principales
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Servicios (alta prioridad para SEO)
  const services = [
    'arquitectura-software-apps-plataformas-web',
    'soluciones-seguridad-electronica',
    'licenciamiento-seguridad-cibernetica',
    'equipamiento-hardware-soluciones-industriales',
    'infraestructura-soluciones-conectividad',
    'poliza-soporte-tecnico',
  ];

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.95, // Alta prioridad para servicios
  }));

  return [...routes, ...serviceRoutes];
}
