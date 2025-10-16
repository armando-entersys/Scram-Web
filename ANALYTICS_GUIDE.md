# Guía del Sistema de Analytics - Scram Consulting

## Resumen

Tu sitio web ahora cuenta con un **sistema centralizado de analytics** que monitorea todas las interacciones de usuarios y conversiones de forma automática.

## 🎯 Herramientas de Tracking Activas

### 1. **Google Tag Manager (GTM)** - Principal
- **ID**: GTM-M8NP53HC
- **Función**: Gestor central de todas las etiquetas de tracking
- **Estado**: ✅ Activo
- **Dashboard**: https://tagmanager.google.com/

### 2. **Google Analytics 4 (GA4)**
- **ID**: G-B3RZRYRWWW
- **Función**: Analytics principal del sitio
- **Estado**: ✅ Activo
- **Dashboard**: https://analytics.google.com/

### 3. **Google Ads**
- **ID**: AW-949839800
- **Función**: Tracking de conversiones de campañas
- **Estado**: ✅ Activo
- **Dashboard**: https://ads.google.com/

### 4. **Meta Pixel (Facebook/Instagram)**
- **Estado**: ⚙️ Configurado (sin ID activo)
- **Función**: Tracking para Facebook/Instagram Ads
- **Nota**: Agregar ID cuando inicies campañas en Meta

### 5. **Analyzee**
- **IDs activos**:
  - Principal: WJ9shmvFDGySBxuQvEoh
  - Centro de datos: FHr0QW7Eq4GEH8Kby09V
  - Piezas industriales: TLkcx3fkKTqBpqesGvYI
- **Estado**: ✅ Activo

### 6. **Smartlook**
- **ID Landing Clínicas**: aa000406eb9aec80894eb48f0e6ab0114fd0e447
- **Función**: Grabación de sesiones de usuarios
- **Estado**: ✅ Activo (solo landing clínicas)

---

## 📊 Eventos que se Trackean Automáticamente

### Eventos de Navegación
- ✅ Vistas de página (todas las páginas)
- ✅ Scroll depth (profundidad de scroll)

### Eventos de Conversión
- ✅ Envío de formulario de contacto
- ✅ Éxito en envío de formulario
- ✅ Errores en formulario

### Eventos de Interacción
- ✅ Clics en WhatsApp
- ✅ Clics en teléfono
- ✅ Clics en email
- ✅ Vistas de servicios

### Eventos de Medios
- ✅ Reproducción de videos
- ✅ Video completado

---

## 🛠️ Cómo Usar el Sistema de Analytics

### Opción 1: Hook de React (Recomendado)

```tsx
'use client';
import { useAnalytics, EventType } from '@/lib/analytics';

export default function MiComponente() {
  const { trackEvent } = useAnalytics();

  const handleClick = () => {
    trackEvent(EventType.CONTACT_FORM_SUBMIT, {
      service_category: 'Desarrollo Web',
      contact_method: 'form',
    });
  };

  return <button onClick={handleClick}>Contactar</button>;
}
```

### Opción 2: Funciones Helper (Más Simple)

```tsx
'use client';
import { trackWhatsAppClick, trackContactFormSuccess } from '@/lib/analytics';

// Trackear clic en WhatsApp
<button onClick={() => trackWhatsAppClick('Ciberseguridad')}>
  WhatsApp
</button>

// Trackear éxito de formulario
const handleSubmit = async (data) => {
  const result = await sendForm(data);
  if (result.success) {
    trackContactFormSuccess('contact-page', 'Infraestructura IT');
  }
};
```

### Opción 3: Instancia Directa

```tsx
import { analytics } from '@/lib/analytics';

analytics.trackEvent('custom_event', {
  event_category: 'engagement',
  event_label: 'video_play',
  value: 1,
});
```

---

## 📝 Ejemplos de Uso Común

### 1. Trackear Formulario de Contacto

```tsx
'use client';
import { trackContactFormSubmit, trackContactFormSuccess } from '@/lib/analytics';

export default function ContactForm() {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Trackear envío
    trackContactFormSubmit('contact-page', 'General');

    try {
      const response = await fetch('/api/contact', { /* ... */ });

      if (response.ok) {
        // Trackear éxito (automáticamente se registra como conversión)
        trackContactFormSuccess('contact-page', 'General');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}
```

### 2. Trackear Clic en WhatsApp

```tsx
'use client';
import { trackWhatsAppClick, getWhatsAppUrl } from '@/lib/analytics';
import { trackingConfig } from '@/config/tracking';

export default function WhatsAppButton({ service }: { service: string }) {
  const handleClick = () => {
    trackWhatsAppClick(service);
  };

  const whatsappUrl = getWhatsAppUrl(
    `Hola, me interesa el servicio de ${service}`,
    trackingConfig.whatsapp.number
  );

  return (
    <a href={whatsappUrl} onClick={handleClick} target="_blank">
      Contactar por WhatsApp
    </a>
  );
}
```

### 3. Trackear Vista de Servicio

```tsx
'use client';
import { useEffect } from 'react';
import { trackServiceView } from '@/lib/analytics';

export default function ServicePage() {
  useEffect(() => {
    trackServiceView('MVP Software Factory', 'Desarrollo');
  }, []);

  return <div>{/* contenido */}</div>;
}
```

### 4. Trackear Clic en Teléfono

```tsx
'use client';
import { trackPhoneClick } from '@/lib/analytics';

export default function PhoneLink() {
  return (
    <a
      href="tel:+525511130259"
      onClick={() => trackPhoneClick('+52 55 1113 0259', 'Soporte Técnico')}
    >
      +52 55 1113 0259
    </a>
  );
}
```

---

## 🎨 Configuración por Landing Page

Para landing pages que necesiten tracking específico (Analyzee o Smartlook custom):

```tsx
import AnalyticsProvider from '@/components/Analytics/AnalyticsProvider';

export default function LandingPage() {
  return (
    <AnalyticsProvider
      analyzeeId="TU_ID_CUSTOM"
      smartlookId="TU_SMARTLOOK_ID"
      metaPixelId="TU_PIXEL_ID"
    >
      {/* Contenido de la landing */}
    </AnalyticsProvider>
  );
}
```

---

## 📈 Dashboards y Reportes

### Google Analytics 4
- **URL**: https://analytics.google.com/
- **Ver**: Tiempo real, usuarios, conversiones, embudos

### Google Tag Manager
- **URL**: https://tagmanager.google.com/
- **Ver**: Tags activos, triggers, variables

### Google Ads
- **URL**: https://ads.google.com/
- **Ver**: Conversiones, ROI, campañas

### Smartlook
- **URL**: https://app.smartlook.com/
- **Ver**: Grabaciones de sesiones, mapas de calor

---

## 🔧 Variables de Entorno

Todas las variables están centralizadas en `.env.production`:

```bash
# Analytics principal (REQUERIDO)
NEXT_PUBLIC_GA_ID=G-B3RZRYRWWW
NEXT_PUBLIC_GTM_ID=GTM-M8NP53HC

# Ads y conversiones (OPCIONAL)
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-949839800
NEXT_PUBLIC_META_PIXEL_ID=

# Herramientas adicionales (OPCIONAL)
NEXT_PUBLIC_SMARTLOOK_KEY=
NEXT_PUBLIC_ANALYZEE_ID=WJ9shmvFDGySBxuQvEoh

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=529993882606
```

---

## 🚀 Mejores Prácticas

### 1. Nombrar Eventos de Forma Consistente
```tsx
// ✅ Bueno
trackEvent(EventType.CONTACT_FORM_SUBMIT, { service_category: 'Desarrollo' });

// ❌ Malo
trackEvent('form_enviado', { tipo: 'dev' });
```

### 2. Incluir Contexto en los Eventos
```tsx
// ✅ Bueno
trackWhatsAppClick('Ciberseguridad - Landing Page Empresas');

// ❌ Malo
trackWhatsAppClick();
```

### 3. Trackear Conversiones con Valor
```tsx
// ✅ Bueno - incluye valor estimado
analytics.trackConversion('lead_qualified', 1000);

// ⚠️ Aceptable - sin valor
analytics.trackConversion('lead_qualified');
```

### 4. No Sobre-Trackear
```tsx
// ❌ Malo - demasiados eventos
onClick={() => {
  trackEvent('button_hover');
  trackEvent('button_click');
  trackEvent('button_release');
}}

// ✅ Bueno - solo lo importante
onClick={() => trackEvent('cta_click', { button_name: 'Contactar' })}
```

---

## 🔍 Verificar que Todo Funciona

### 1. En Desarrollo (Localhost)

Abre la consola del navegador (F12) y busca:
```
📊 Analytics initialized
📊 Event tracked: contact_form_submit {...}
📊 Page view tracked: {...}
```

### 2. En Google Analytics (Tiempo Real)

1. Ve a https://analytics.google.com/
2. Selecciona tu propiedad (Scram Web)
3. Ve a **Informes** > **Tiempo real**
4. Abre tu sitio en otra pestaña
5. Deberías ver tu visita en tiempo real

### 3. En Google Tag Manager

1. Ve a https://tagmanager.google.com/
2. Modo **Preview**
3. Verifica que los tags se disparan correctamente

---

## 🐛 Solución de Problemas

### No veo eventos en Google Analytics

1. **Verifica las variables de entorno**:
   ```bash
   echo $NEXT_PUBLIC_GA_ID
   echo $NEXT_PUBLIC_GTM_ID
   ```

2. **Reinicia el servidor**:
   ```bash
   npm run dev
   ```

3. **Revisa la consola del navegador** (F12):
   - Busca errores de GTM o Analytics
   - Verifica que los scripts se carguen

### Los eventos no se registran como conversiones

1. **Configura conversiones en Google Analytics**:
   - Ve a **Admin** > **Eventos** > **Marcar como conversión**

2. **Verifica el valor del evento**:
   ```tsx
   // Asegúrate de incluir conversion_value
   trackContactFormSuccess('form', 'servicio', 100);
   ```

### Meta Pixel no funciona

1. **Verifica que hayas agregado el ID**:
   ```bash
   NEXT_PUBLIC_META_PIXEL_ID=TU_PIXEL_ID
   ```

2. **Usa Meta Pixel Helper** (extensión Chrome):
   - Instala: https://chrome.google.com/webstore
   - Verifica que el pixel se dispare

---

## 📚 Tipos de Eventos Disponibles

```typescript
enum EventType {
  // Navegación
  PAGE_VIEW = 'page_view',

  // Conversión
  CONTACT_FORM_SUBMIT = 'contact_form_submit',
  CONTACT_FORM_SUCCESS = 'contact_form_success',
  CONTACT_FORM_ERROR = 'contact_form_error',

  // Interacción
  WHATSAPP_CLICK = 'whatsapp_click',
  PHONE_CLICK = 'phone_click',
  EMAIL_CLICK = 'email_click',

  // Servicios
  SERVICE_VIEW = 'service_view',
  SERVICE_INQUIRY = 'service_inquiry',

  // Descargas
  DOWNLOAD_BROCHURE = 'download_brochure',
  DOWNLOAD_CATALOG = 'download_catalog',

  // Video
  VIDEO_PLAY = 'video_play',
  VIDEO_COMPLETE = 'video_complete',

  // Scroll
  SCROLL_DEPTH = 'scroll_depth',

  // Custom
  CUSTOM = 'custom_event',
}
```

---

## 📞 Soporte

Si necesitas ayuda con analytics:

1. **Google Analytics**: https://support.google.com/analytics
2. **Google Tag Manager**: https://support.google.com/tagmanager
3. **Meta Business**: https://www.facebook.com/business/help
4. **Smartlook**: https://help.smartlook.com/

---

## ✅ Checklist de Implementación

- [x] Google Tag Manager configurado
- [x] Google Analytics 4 activo
- [x] Google Ads tracking activo
- [x] Sistema de eventos personalizado creado
- [x] Variables de entorno centralizadas
- [x] Analyzee configurado
- [x] Smartlook en landing clínicas
- [ ] Meta Pixel configurado (pendiente agregar ID)
- [ ] Conversiones configuradas en GA4
- [ ] Objetivos definidos en Google Ads
- [ ] Testing de eventos en producción

---

**Última actualización**: 2025-10-15
**Versión**: 2.0.0
