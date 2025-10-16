# 📊 Guía de Implementación - Sistema de Analytics Avanzado

## Descripción General

Sistema completo de analytics profesional para tomar decisiones de marketing basadas en datos. Incluye:

- ✅ **User Journey Tracking** - Rastrea el camino completo del usuario
- ✅ **Attribution Tracking** - Identifica qué canal generó cada conversión
- ✅ **Lead Scoring Automático** - Califica la calidad de cada lead (0-100)
- ✅ **Scroll Depth & Engagement** - Mide el interés real de los visitantes
- ✅ **Form Abandonment** - Identifica dónde abandonan los formularios
- ✅ **UTM Parameter Capture** - Captura automáticamente parámetros de campaña
- ✅ **Conversion Value Tracking** - Estima el valor de cada conversión
- ✅ **Multi-Platform Tracking** - Google Analytics, Google Ads, Analyzee

---

## 🚀 Quickstart - Uso Básico

### 1. Tracking Automático (Ya Funciona)

El tracking básico se activa automáticamente en producción:

```typescript
// ✅ Ya está configurado en tu sitio:
// - Page views
// - Scroll depth (25%, 50%, 75%, 90%, 100%)
// - Time on page
// - Link clicks
// - UTM parameters capture
// - Session data
```

### 2. Tracking de Formularios

**Reemplaza tus formularios normales con `TrackedForm`:**

```tsx
import { TrackedForm } from '@/components/Analytics/TrackedForm';

// Antes:
<form onSubmit={handleSubmit}>
  {/* campos */}
</form>

// Después:
<TrackedForm
  formId="contact-form-homepage"
  serviceName="desarrollo-software"
  onSubmit={handleSubmit}
>
  {/* campos */}
</TrackedForm>
```

**¿Qué hace automáticamente?**
- 📝 Rastrea qué campos rellena el usuario
- ⚠️  Detecta abandono de formulario
- 🎯 Calcula lead score (0-100)
- 📊 Asigna atribución de canal (Google Ads, orgánico, etc.)
- 💰 Estima valor de conversión
- 🗺️ Guarda el journey completo del usuario

### 3. Tracking de Botones y Links

**Usa componentes con tracking:**

```tsx
import { TrackedButton } from '@/components/Analytics/TrackedButton';
import { TrackedLink } from '@/components/Analytics/TrackedLink';

// Botón con tracking
<TrackedButton
  trackingLabel="Solicitar Demo"
  serviceName="desarrollo-software"
  estimatedValue={50000}
  onClick={() => openModal()}
>
  Solicitar Demo Gratis
</TrackedButton>

// Link con tracking (detecta WhatsApp, teléfono, email automáticamente)
<TrackedLink
  href="https://wa.me/529993882606"
  serviceName="ciberseguridad"
>
  Contactar por WhatsApp
</TrackedLink>
```

---

## 📈 Métricas Capturadas

### Lead Scoring (0-100 puntos)

Cada lead recibe un score basado en:

| Factor | Puntos | Descripción |
|--------|--------|-------------|
| **Datos de contacto** | 40 pts | Email (10), Teléfono (10), Empresa (15), Mensaje (10) |
| **Engagement** | 40 pts | Tiempo en sitio >3min (20), Scroll >75% (15), Clics >3 (5) |
| **Journey** | 10 pts | Más de 10 pasos en el journey |
| **Fuente** | 10 pts | Google orgánico (15), Google Ads (10), etc. |
| **Servicio** | 20 pts | Servicios de alto valor (software, infra) |

**Ejemplo de Lead:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@empresa.com",
  "phone": "+52 55 1234 5678",
  "company": "Empresa XYZ",
  "service": "desarrollo-software",
  "score": 85,  // ← Lead de alta calidad
  "source": "google",
  "medium": "cpc",
  "campaign": "software-desarrollo-2025",
  "time_to_convert": 245,  // segundos
  "scroll_depth": 85,
  "journey_steps": 12
}
```

### Datos de Attribution

Captura y persiste (30 días) los parámetros UTM:

```
?utm_source=google
&utm_medium=cpc
&utm_campaign=software-2025-q1
&utm_term=desarrollo+software+cdmx
&utm_content=anuncio-a
```

**Se usa para:**
- Saber qué campaña generó cada lead
- Calcular ROI por canal
- Optimizar inversión publicitaria

### User Journey

Rastrea cada acción del usuario:

```json
{
  "sessionId": "session_1234567890_abc123",
  "steps": [
    { "timestamp": 1234567890, "page": "/", "action": "session_start" },
    { "timestamp": 1234567895, "page": "/", "action": "scroll_depth", "metadata": { "depth": 25 } },
    { "timestamp": 1234567920, "page": "/servicios/desarrollo-software", "action": "link_click" },
    { "timestamp": 1234567945, "page": "/servicios/desarrollo-software", "action": "service_inquiry" },
    { "timestamp": 1234568100, "page": "/contacto", "action": "form_field_focus", "metadata": { "field": "email" } },
    { "timestamp": 1234568150, "page": "/contacto", "action": "lead_converted" }
  ],
  "converted": true,
  "conversionValue": 85
}
```

---

## 🎯 Casos de Uso - Decisiones de Marketing

### 1. ¿Qué canal genera más leads calificados?

```typescript
// En Google Analytics > Informes > Adquisición > Tráfico
// Filtrar por: lead_score >= 70
// Métricas: source/medium, conversions, avg_lead_score
```

**Ejemplo de insights:**
- `google/cpc`: 45 leads, score promedio 78 ✅
- `google/organic`: 30 leads, score promedio 85 ✅✅
- `facebook/cpc`: 60 leads, score promedio 45 ⚠️

**Decisión:** Aumentar presupuesto en Google (orgánico y pagado), reducir Facebook.

### 2. ¿En qué punto abandonan el formulario?

```typescript
// En Google Analytics > Eventos > form_abandoned
// Dimensiones: form_id, fields_filled
```

**Ejemplo de insights:**
- 40% abandonan después de rellenar solo "nombre"
- 25% abandonan en campo "teléfono"

**Decisión:**
- Hacer el teléfono opcional
- Agregar mensaje de "Solo te tomará 30 segundos"

### 3. ¿Qué servicios generan más consultas?

```typescript
// En Google Analytics > Eventos > service_inquiry
// Métricas: count, estimated_value
```

**Ejemplo de insights:**
- Desarrollo Software: 120 consultas, valor est. $6M MXN
- Ciberseguridad: 90 consultas, valor est. $2.7M MXN
- Hardware: 150 consultas, valor est. $3M MXN

**Decisión:** Crear campaña específica para Desarrollo de Software (mayor valor).

### 4. ¿Cuál es el journey típico antes de convertir?

```typescript
// Análisis manual de user_journey en localStorage
// o usando Google Analytics > Explorar > Path Exploration
```

**Ejemplo de patrón común:**
1. Llegan desde Google Ads
2. Visitan homepage
3. Hacen scroll hasta el 75%
4. Visitan página de servicios
5. Hacen clic en WhatsApp o Formulario

**Decisión:** Optimizar el scroll depth de homepage, agregar CTA's más visibles.

---

## 🔧 Configuración Avanzada

### Smartlook - Session Recording

Para ver grabaciones de sesiones y heatmaps:

1. **Crear cuenta en Smartlook**: https://www.smartlook.com/
2. **Obtener Project Key**
3. **Agregar a `.env.production`:**

```bash
NEXT_PUBLIC_SMARTLOOK_KEY=tu_project_key_aqui
```

4. **Actualizar AnalyticsProvider:**

El sistema ya está listo, solo necesitas la key.

### Google Tag Manager - Eventos Personalizados

Configura eventos personalizados en GTM:

```javascript
// Evento: lead_scored
dataLayer.push({
  'event': 'lead_scored',
  'lead_score': 85,
  'lead_source': 'google',
  'service': 'desarrollo-software'
});
```

### Lead Scoring Personalizado

Modifica los valores en `src/lib/analytics-advanced.ts`:

```typescript
// Línea 280 - calculateLeadScore()
const highValueServices = [
  'desarrollo-software',  // +20 pts
  'ciberseguridad',       // +20 pts
  'tu-servicio-premium',  // +30 pts (nuevo)
];
```

---

## 📊 Dashboards Recomendados

### Google Analytics 4

**1. Dashboard de Attribution**
- Fuente/Medio
- Conversiones
- Lead Score Promedio
- Valor de Conversión

**2. Dashboard de Engagement**
- Tiempo Promedio en Sitio
- Scroll Depth Promedio
- Páginas por Sesión
- Bounce Rate

**3. Dashboard de Formularios**
- Form Submissions
- Form Abandonments
- Fields Filled Average
- Conversion Rate por Form

### Google Ads

**Columnas Personalizadas:**
- Cost per Lead
- Lead Score Average
- Conversion Value
- ROI (valor conversión / costo)

---

## 🐛 Troubleshooting

### Los eventos no aparecen en Google Analytics

1. Verifica que estés en producción (`NODE_ENV=production`)
2. Abre DevTools > Console, busca: `🚀 Advanced Analytics initialized`
3. Verifica GTM Container ID en `.env.production`
4. Espera 24-48h para datos en GA4

### Lead Score siempre es bajo

Revisa los factores:
- ¿El formulario captura email, teléfono, empresa?
- ¿Los usuarios hacen scroll >50%?
- ¿El tiempo en sitio es >60 segundos?

### Attribution muestra "direct" siempre

- Asegúrate de usar parámetros UTM en todas tus campañas
- Formato: `?utm_source=google&utm_medium=cpc&utm_campaign=nombre`

---

## 📚 Referencia Rápida

### Eventos Automáticos

| Evento | Cuándo se dispara | Datos capturados |
|--------|-------------------|------------------|
| `session_start` | Usuario llega al sitio | UTMs, referrer, landing page |
| `scroll_depth` | 25%, 50%, 75%, 90%, 100% | Profundidad, página |
| `link_click` | Click en cualquier link | URL, texto del link |
| `form_field_focus` | Usuario enfoca campo de form | Campo, form ID |
| `form_submit_attempt` | Usuario envía formulario | Campos rellenados |
| `lead_converted` | Formulario exitoso | Lead completo + score |
| `service_inquiry` | Click en servicio | Servicio, valor estimado |
| `whatsapp_click` | Click en WhatsApp | Servicio asociado |
| `phone_click` | Click en teléfono | Número, servicio |

### Componentes Disponibles

```typescript
import { TrackedForm } from '@/components/Analytics/TrackedForm';
import { TrackedButton } from '@/components/Analytics/TrackedButton';
import { TrackedLink } from '@/components/Analytics/TrackedLink';
import { useAdvancedAnalytics } from '@/lib/analytics-advanced';
```

### Hooks

```typescript
const {
  trackLead,
  trackServiceInquiry,
  trackFormAbandonment,
  trackJourneyStep,
  getEngagementMetrics,
  getJourney,
  getAttribution,
} = useAdvancedAnalytics();
```

---

## ✅ Checklist de Implementación

- [x] Sistema de tracking instalado
- [x] Google Analytics 4 configurado
- [x] Google Tag Manager configurado
- [x] Google Ads tracking configurado
- [x] Analyzee configurado
- [ ] Reemplazar formularios con `TrackedForm`
- [ ] Reemplazar botones críticos con `TrackedButton`
- [ ] Agregar `TrackedLink` a WhatsApp y teléfonos
- [ ] Configurar Smartlook (opcional)
- [ ] Crear dashboards en Google Analytics
- [ ] Configurar alertas de conversiones
- [ ] Entrenar equipo en uso de métricas

---

## 🚀 Próximos Pasos

1. **Hoy**: Reemplazar formulario de contacto principal con `TrackedForm`
2. **Esta semana**: Implementar tracking en todos los CTA's importantes
3. **Este mes**: Crear dashboards en Google Analytics
4. **Mensual**: Revisar lead scores y optimizar scoring
5. **Trimestral**: Análisis de ROI por canal y ajuste de presupuesto

---

## 📞 Soporte

Si necesitas ayuda con la implementación, consulta:
- `src/lib/analytics-advanced.ts` - Sistema principal
- `src/components/Analytics/` - Componentes de tracking
- Esta guía

**Logs útiles:**
```javascript
// Ver journey del usuario actual
console.log(advancedAnalytics.getJourney());

// Ver métricas de engagement
console.log(advancedAnalytics.getEngagementMetrics());

// Ver attribution data
console.log(advancedAnalytics.getAttributionData());
```
