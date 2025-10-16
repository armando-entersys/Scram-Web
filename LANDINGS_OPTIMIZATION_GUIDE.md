# Guía de Optimización de Landing Pages - Scram Consulting

## Resumen de Optimización

Todas las landing pages de Scram han sido optimizadas con el mismo nivel de calidad que la web principal.

---

## ✅ Landing Pages Optimizadas

### **Landing Pages de Google Ads** (4 páginas)

1. **✅ l-ads-clinicas** - Marketing para Clínicas y Centros Estéticos
   - SEO optimizado
   - Analytics: GTM + GA4 + Smartlook (aa000406eb9aec80894eb48f0e6ab0114fd0e447)
   - Conversión: AW-949839800/73OWCNeAmNQZELjP9cQD

2. **✅ l-ads-fabricantes** - Marketing para Fabricantes
   - SEO optimizado
   - Analytics: GTM + GA4 + Analyzee (pzcTs6st16tNfOt8GMnG)
   - Conversión: AW-949839800/73OWCNeAmNQZELjP9cQD

3. **✅ l-ads-talleres** - Marketing para Talleres Mecánicos
   - SEO optimizado
   - Analytics: GTM + GA4 + Analyzee (n7t5IqYISenu0WcsSzqo)
   - Conversión: AW-949839800/73OWCNeAmNQZELjP9cQD

4. **✅ l-ads-sistema-de-adquisicion-de-clientes** - Sistema Completo
   - SEO optimizado
   - Analytics: GTM + GA4
   - Conversión: AW-949839800/73OWCNeAmNQZELjP9cQD

### **Landing Pages de Servicios** (7 páginas)

Estas landings están configuradas en `src/config/landings.ts` con metadata optimizada:

5. **l-mvp-software-factory** - Software Factory para Startups
6. **l-mvp-dashboard** - Dashboards Empresariales
7. **l-licenciamiento** - Licenciamiento de Software
8. **l-piezas-industriales** - Piezas Industriales (Analyzee: TLkcx3fkKTqBpqesGvYI)
9. **l-redes-corporativas-cableado-estructurado** - Cableado Estructurado
10. **l-refacciones-hardware-it-centro-de-datos-industrial** - Hardware IT
11. **l-soluciones-para-centro-de-datos-servidores** - Data Centers (Analyzee: FHr0QW7Eq4GEH8Kby09V)

---

## 🚀 Mejoras Implementadas

### 1. **Sistema Centralizado de Configuración**

Archivo: `src/config/landings.ts`

Todas las landings tienen configuración centralizada:
- Metadata SEO (título, descripción, keywords)
- IDs de Analytics (Analyzee, Smartlook, Meta Pixel)
- Configuración de conversiones de Google Ads
- Mensajes personalizados de WhatsApp
- Categorización (ads/service/product)

```typescript
import { getLandingConfig } from '@/config/landings';

const config = getLandingConfig('l-ads-clinicas');
console.log(config.title); // "Marketing ADS para Clínicas..."
```

### 2. **LandingLayout Component**

Archivo: `src/components/Landing/LandingLayout.tsx`

Componente reutilizable que incluye:
- ✅ Logo de SCRAM
- ✅ AnalyticsProvider con tracking específico
- ✅ Botón flotante de WhatsApp
- ✅ Tracking automático de eventos

```tsx
<LandingLayout landingSlug="l-ads-clinicas">
  {/* Contenido de la landing */}
</LandingLayout>
```

### 3. **Metadata SEO Optimizada**

Cada landing tiene metadata completa:
- Title y description optimizados para conversión
- Keywords específicas por industria
- Open Graph para redes sociales
- Twitter Cards
- robots (noindex para ads)

### 4. **Analytics Automático**

Cada landing page incluye automáticamente:
- **Google Tag Manager** (GTM-M8NP53HC)
- **Google Analytics 4** (G-B3RZRYRWWW)
- **Google Ads** tracking de conversiones
- **Analyzee** (IDs específicos por página)
- **Smartlook** (cuando está configurado)
- **Meta Pixel** (cuando está configurado)

### 5. **Tracking de Eventos Personalizado**

Cada landing trackea automáticamente:
- ✅ Clics en WhatsApp con evento específico
- ✅ Conversiones de Google Ads
- ✅ Envío de formularios
- ✅ Vistas de página
- ✅ Interacciones de usuario

---

## 📝 Estructura de una Landing Optimizada

```tsx
import React from "react";
import type { Metadata } from "next";
import LandingLayout from "@/components/Landing/LandingLayout";
import { getLandingConfig } from "@/config/landings";
// ... más imports

const LANDING_SLUG = 'l-nombre-landing';
const config = getLandingConfig(LANDING_SLUG);

// Metadata SEO
export const metadata: Metadata = {
  title: config?.title,
  description: config?.description,
  keywords: config?.keywords?.join(', '),
  robots: config?.robots || 'noindex',
  openGraph: { /* ... */ },
  twitter: { /* ... */ },
};

const Page: React.FC = () => {
  return (
    <LandingLayout landingSlug={LANDING_SLUG}>
      {/* Contenido */}
    </LandingLayout>
  );
};

export default Page;
```

---

## 🔧 Cómo Crear una Nueva Landing Page

### Paso 1: Agregar Configuración

Edita `src/config/landings.ts`:

```typescript
export const LANDINGS_CONFIG: Record<string, LandingConfig> = {
  // ... existing configs

  'l-nueva-landing': {
    title: 'Título Optimizado para SEO | Scram',
    description: 'Descripción persuasiva que motiva a hacer clic',
    keywords: ['palabra1', 'palabra2', 'palabra3'],
    robots: 'noindex', // o 'index' si quieres indexación
    analyzeeId: 'ID_OPCIONAL',
    smartlookId: 'ID_OPCIONAL',
    conversionLabel: 'LABEL_GOOGLE_ADS',
    whatsappMessage: 'Mensaje personalizado para WhatsApp',
    whatsappClickEvent: 'whatsapp_nueva_landing',
    category: 'service', // 'ads', 'service', o 'product'
    serviceType: 'Tipo de Servicio',
  },
};
```

### Paso 2: Crear el Archivo de Página

Crea `src/app/l-nueva-landing/page.tsx`:

```typescript
import React from "react";
import type { Metadata } from "next";
import LandingLayout from "@/components/Landing/LandingLayout";
import { getLandingConfig } from "@/config/landings";
// Importa tus componentes específicos

const LANDING_SLUG = 'l-nueva-landing';
const config = getLandingConfig(LANDING_SLUG);

export const metadata: Metadata = {
  title: config?.title || 'Fallback Title',
  description: config?.description || 'Fallback description',
  keywords: config?.keywords?.join(', '),
  robots: config?.robots || 'noindex',
  openGraph: {
    title: config?.title,
    description: config?.description,
    type: 'website',
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title: config?.title,
    description: config?.description,
  },
};

const Page: React.FC = () => {
  return (
    <LandingLayout landingSlug={LANDING_SLUG}>
      {/* Tu contenido aquí */}
    </LandingLayout>
  );
};

export default Page;
```

### Paso 3: Listo!

La landing ya incluye automáticamente:
- Analytics completo
- SEO optimizado
- Botón de WhatsApp con tracking
- Estructura responsive
- Conversiones de Google Ads

---

## 📊 Monitoreo de Landing Pages

### Google Analytics 4
1. Ve a https://analytics.google.com/
2. Selecciona **Scram Web**
3. **Informes** > **Compromiso** > **Páginas y pantallas**
4. Filtra por `/l-` para ver todas las landings

### Google Ads
1. Ve a https://ads.google.com/
2. **Herramientas** > **Medición** > **Conversiones**
3. Revisa conversiones por landing

### Smartlook
1. Ve a https://app.smartlook.com/
2. Filtra sesiones por URL
3. Ve grabaciones de usuarios reales

---

## 🎯 Métricas Clave por Landing

Cada landing debe monitorear:

1. **Tráfico**
   - Visitas totales
   - Fuente de tráfico (Google Ads, orgánico, directo)
   - Tasa de rebote

2. **Conversiones**
   - Clics en WhatsApp
   - Envíos de formulario
   - Llamadas telefónicas
   - Tasa de conversión

3. **Comportamiento**
   - Tiempo en página
   - Scroll depth (profundidad de scroll)
   - Interacciones con video
   - Clics en CTAs

4. **Ads Performance** (solo landings l-ads-*)
   - CPC (Costo por Clic)
   - CPA (Costo por Adquisición)
   - ROI de campañas
   - Quality Score

---

## 🔥 Mejores Prácticas

### SEO
- ✅ Títulos de 50-60 caracteres
- ✅ Descriptions de 150-160 caracteres
- ✅ Keywords relevantes y específicas
- ✅ robots:noindex para ads (evita duplicación)

### Conversión
- ✅ CTA claro y visible
- ✅ Botón de WhatsApp flotante
- ✅ Mensaje de WhatsApp personalizado
- ✅ Video testimonial
- ✅ Logos de clientes (credibilidad)

### Performance
- ✅ Imágenes optimizadas (WebP)
- ✅ Videos con poster
- ✅ Lazy loading de componentes pesados
- ✅ Analytics carga async

### Analytics
- ✅ Eventos personalizados por acción
- ✅ Conversiones configuradas en GA4
- ✅ Labels específicos en Google Ads
- ✅ Mensajes de WhatsApp trackéados

---

## 🐛 Troubleshooting

### Landing no muestra analytics

1. Verifica `.env.production`:
   ```bash
   NEXT_PUBLIC_GTM_ID=GTM-M8NP53HC
   NEXT_PUBLIC_GA_ID=G-B3RZRYRWWW
   ```

2. Verifica que el slug coincida:
   ```tsx
   const LANDING_SLUG = 'l-ads-clinicas'; // debe ser exacto
   ```

3. Reinicia el servidor:
   ```bash
   npm run dev
   ```

### WhatsApp no abre con mensaje personalizado

Verifica que el mensaje esté configurado en `src/config/landings.ts`:
```typescript
whatsappMessage: 'Tu mensaje aquí',
```

### Conversiones no se registran

1. Verifica `conversionLabel` en config
2. Revisa Google Ads > Conversiones
3. Usa Google Tag Assistant para debug

---

## 📞 URLs de Monitoreo

- **Google Analytics**: https://analytics.google.com/
- **Google Tag Manager**: https://tagmanager.google.com/
- **Google Ads**: https://ads.google.com/
- **Smartlook**: https://app.smartlook.com/
- **Search Console**: https://search.google.com/search-console

---

## ✅ Checklist de Landing Optimizada

Para cada nueva landing:

- [ ] Configuración en `src/config/landings.ts`
- [ ] Metadata SEO completa
- [ ] Usa `LandingLayout` component
- [ ] Analytics IDs configurados
- [ ] Mensaje de WhatsApp personalizado
- [ ] Conversión de Google Ads configurada
- [ ] Video con poster optimizado
- [ ] Imágenes en WebP
- [ ] Componentes comentados con claridad
- [ ] Testing en desarrollo (localhost)
- [ ] Testing en producción
- [ ] Conversiones verificadas en GA4
- [ ] Eventos de WhatsApp registrándose

---

**Última actualización**: 2025-10-15
**Versión**: 2.0.0
**Landing Pages Optimizadas**: 11/11 ✅
