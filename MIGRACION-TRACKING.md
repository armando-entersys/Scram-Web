# Guía de Migración de Herramientas de Tracking

## 📊 IDs Actuales (de la empresa anterior)

### Google Analytics
- **ID actual**: `G-ZJ0CTKBKNP`
- **Archivo**: `src/components/scram/Layout/ClientScripts.tsx` (línea 55)

### Google Ads
- **ID actual**: `AW-949839800`
- **Archivo**: `src/components/scram/Layout/ClientScripts.tsx` (línea 56)

### Meta Pixel (Facebook)
- **ID actual**: Variable dinámico (se pasa como prop `metaPixelId`)
- **Archivo**: `src/components/scram/Layout/ClientScripts.tsx` (línea 30)

### Smartlook
- **IDs actuales por página**:
  - Landing Clínicas: `aa000406eb9aec80894eb48f0e6ab0114fd0e447`
- **Archivos**: Múltiples páginas en `src/app/l-*`

### Analyzee
- **IDs actuales**:
  - Principal: `WJ9shmvFDGySBxuQvEoh`
  - Centro de datos: `FHr0QW7Eq4GEH8Kby09V`
  - Piezas industriales: `TLkcx3fkKTqBpqesGvYI`
- **Archivos**: `src/app/page.tsx` y landing pages

---

## 🔧 PASO 1: Crear Tus Nuevas Cuentas

### 1. Google Analytics 4 (GA4)

**Crear cuenta:**
1. Ve a https://analytics.google.com/
2. Crea una cuenta nueva con tu email
3. Nombre de cuenta: "Scram Consulting"
4. Crea una propiedad:
   - Nombre: "Scram Web"
   - Zona horaria: México
   - Moneda: MXN (Peso Mexicano)
5. Obtén tu **ID de medición** (formato: `G-XXXXXXXXXX`)

**Configuración recomendada:**
- Habilitar "Señales de Google"
- Habilitar "Informes de eventos mejorados"
- Configurar conversiones: contacto, llamadas, WhatsApp

---

### 2. Google Ads

**Crear cuenta:**
1. Ve a https://ads.google.com/
2. Crea cuenta nueva
3. Configura tu primera campaña (puedes pausarla después)
4. Ve a "Herramientas y configuración" → "Medición" → "Conversiones"
5. Crea acciones de conversión:
   - Contacto por formulario
   - Clic en WhatsApp
   - Llamada telefónica
6. Obtén tu **ID de conversión** (formato: `AW-XXXXXXXXXX`)

**Nota**: Si no vas a usar Google Ads inmediatamente, puedes omitir esto.

---

### 3. Meta Pixel (Facebook/Instagram Ads)

**Crear pixel:**
1. Ve a https://business.facebook.com/
2. Crea un Business Manager si no tienes
3. Ve a "Configuración de empresa" → "Orígenes de datos" → "Píxeles"
4. Crea un nuevo pixel
5. Nombre: "Scram Web Pixel"
6. Obtén tu **Pixel ID** (número de 15 dígitos)

**Eventos a configurar:**
- PageView (automático)
- Contact (formulario)
- Lead (WhatsApp)

---

### 4. Smartlook (Grabación de sesiones)

**Crear cuenta:**
1. Ve a https://www.smartlook.com/
2. Crea cuenta gratuita (hasta 3,000 sesiones/mes)
3. Crea un nuevo proyecto: "Scram Web"
4. Obtén tu **Project Key** (formato largo alfanumérico)
5. Región: EU (Europa) o US según prefieras

**Configuración recomendada:**
- Habilitar grabación de sesiones
- Configurar mapas de calor
- Crear embudos de conversión

**Nota**: La cuenta gratuita puede ser suficiente para empezar.

---

### 5. Analyzee (Opcional)

**Problema identificado:**
Analyzee parece ser una herramienta custom o menos conocida.

**Opciones:**
- **Opción A (Recomendada)**: Eliminar Analyzee y usar solo Google Analytics
- **Opción B**: Si quieres mantenerlo, necesitas contactar a Analyzee para crear tu cuenta
- **Opción C**: Reemplazar con Hotjar (alternativa popular)

**Para usar Hotjar en su lugar:**
1. Ve a https://www.hotjar.com/
2. Crea cuenta gratuita
3. Obtén tu Tracking Code
4. Reemplaza las referencias de Analyzee

---

## 🔄 PASO 2: Actualizar el Código

### Opción A: Usar Variables de Entorno (RECOMENDADO)

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TU_NUEVO_ID

# Google Ads
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-TU_NUEVO_ID

# Meta Pixel
NEXT_PUBLIC_META_PIXEL_ID=TU_PIXEL_ID

# Smartlook
NEXT_PUBLIC_SMARTLOOK_KEY=tu_project_key

# Analyzee (o Hotjar)
NEXT_PUBLIC_ANALYZEE_ID=tu_nuevo_id
```

**Ventajas:**
- Fácil de cambiar sin tocar código
- Más seguro
- Puedes tener diferentes IDs para desarrollo/producción

---

### Opción B: Editar Directamente

Reemplaza los IDs en estos archivos:

1. **Google Analytics & Ads**: `src/components/scram/Layout/ClientScripts.tsx`
   - Línea 55: Cambia `G-ZJ0CTKBKNP` por tu nuevo ID
   - Línea 56: Cambia `AW-949839800` por tu nuevo ID

2. **Meta Pixel**: Pasa tu nuevo ID como prop en cada página

3. **Smartlook**: Busca y reemplaza los IDs en páginas landing

4. **Analyzee**: Busca y reemplaza en todas las páginas

---

## 📝 PASO 3: Lista de Archivos a Modificar

### Google Analytics & Ads
- `src/components/scram/Layout/ClientScripts.tsx`

### Meta Pixel
- Cada página que llame a `<ClientScripts metaPixelId="..." />`

### Smartlook
- `src/app/l-ads-clinicas/page.tsx`
- `src/app/l-ads-fabricantes/page.tsx`
- `src/app/l-ads-talleres/page.tsx`
- Y otras landing pages con Smartlook

### Analyzee
- `src/app/page.tsx`
- `src/app/marketing-google-ads-meta/page.tsx`
- `src/app/mvp-software-factory/page.tsx`
- `src/app/licenciamiento/page.tsx`
- `src/app/piezas-industriales/page.tsx`
- `src/app/redes-corporativas-cableado-estructurado/page.tsx`
- `src/app/soluciones-para-centro-de-datos-servidores/page.tsx`
- Todas las landing pages `src/app/l-*`

---

## ⚠️ RECOMENDACIONES IMPORTANTES

### Antes de Cambiar IDs:

1. **Verifica acceso a las cuentas actuales**
   - Intenta acceder a Google Analytics con el ID actual
   - Si no tienes acceso, los datos históricos se perderán
   - Contacta a la empresa anterior para solicitar transferencia

2. **Período de transición**
   - Considera tener ambos IDs (viejo y nuevo) durante 1-2 semanas
   - Esto te permite comparar datos y asegurar que el nuevo tracking funciona

3. **Testing**
   - Después de cambiar IDs, prueba en local
   - Usa Google Tag Assistant para verificar que los eventos se envían
   - Revisa en tiempo real en Google Analytics

---

## 🚀 PLAN DE ACCIÓN SUGERIDO

### Semana 1: Preparación
- [ ] Crear cuenta Google Analytics
- [ ] Crear cuenta Google Ads (si usas ads)
- [ ] Crear cuenta Meta Business (si usas Facebook Ads)
- [ ] Crear cuenta Smartlook
- [ ] Decidir sobre Analyzee/Hotjar

### Semana 2: Implementación
- [ ] Crear archivo `.env.local` con nuevos IDs
- [ ] Modificar código para usar variables de entorno
- [ ] Probar en local

### Semana 3: Deploy y Monitoreo
- [ ] Deploy a producción
- [ ] Verificar tracking en tiempo real
- [ ] Configurar alertas y conversiones
- [ ] Documentar accesos

---

## 📞 Soporte Técnico

Si necesitas ayuda con alguno de estos servicios:

- **Google Analytics**: https://support.google.com/analytics
- **Google Ads**: https://support.google.com/google-ads
- **Meta Business**: https://www.facebook.com/business/help
- **Smartlook**: https://help.smartlook.com/

---

## 🔐 Seguridad

**Nunca compartas públicamente:**
- IDs de tracking (son públicos pero mejor no difundirlos)
- API Keys o Secrets
- Credenciales de acceso

**Buenas prácticas:**
- Usa autenticación de 2 factores en todas las cuentas
- Documenta quién tiene acceso a cada cuenta
- Revisa periódicamente los accesos
