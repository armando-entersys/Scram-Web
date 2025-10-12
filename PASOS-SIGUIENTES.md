# 🚀 Pasos Siguientes para Migrar el Tracking

## ✅ Lo que ya está hecho:

1. ✅ Identificadas todas las herramientas de tracking
2. ✅ Creada documentación completa en `MIGRACION-TRACKING.md`
3. ✅ Creado archivo de configuración centralizado: `src/config/tracking.ts`
4. ✅ Creado ejemplo de variables de entorno: `.env.local.example`
5. ✅ Actualizado `ClientScripts.tsx` para usar configuración centralizada

---

## 📋 Lo que DEBES hacer ahora:

### PASO 1: Crear tus cuentas (estimado: 2-3 horas)

Sigue la guía en `MIGRACION-TRACKING.md` para crear:

1. **Google Analytics 4** (PRIORITARIO)
   - URL: https://analytics.google.com/
   - Tiempo: ~15 minutos
   - Obtendrás: ID formato `G-XXXXXXXXXX`

2. **Google Ads** (si usas publicidad)
   - URL: https://ads.google.com/
   - Tiempo: ~20 minutos
   - Obtendrás: ID formato `AW-XXXXXXXXXX`

3. **Meta Pixel** (si usas Facebook/Instagram Ads)
   - URL: https://business.facebook.com/
   - Tiempo: ~15 minutos
   - Obtendrás: Número de 15 dígitos

4. **Smartlook** (grabación de sesiones - OPCIONAL)
   - URL: https://www.smartlook.com/
   - Tiempo: ~10 minutos
   - Plan gratuito disponible

5. **Decidir sobre Analyzee**
   - ¿Mantener? → Contacta a Analyzee para nueva cuenta
   - ¿Eliminar? → Usa solo Google Analytics
   - ¿Reemplazar? → Considera Hotjar (https://www.hotjar.com/)

---

### PASO 2: Configurar variables de entorno (5 minutos)

```bash
# En la raíz del proyecto, crea el archivo .env.local
cp .env.local.example .env.local
```

Luego edita `.env.local` con tus nuevos IDs:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TU_NUEVO_ID
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-TU_NUEVO_ID
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
NEXT_PUBLIC_SMARTLOOK_KEY=tu_project_key
# ... etc
```

---

### PASO 3: Reiniciar el servidor (1 minuto)

```bash
# Detener el servidor actual (Ctrl+C)
# Luego reiniciar
npm run dev
```

Esto cargará las nuevas variables de entorno.

---

### PASO 4: Verificar que funciona (15 minutos)

1. **Abre tu sitio local**: http://localhost:3001

2. **Verifica Google Analytics**:
   - Abre Google Analytics
   - Ve a "Informes" → "Tiempo real"
   - Deberías ver tu visita activa

3. **Verifica con Chrome DevTools**:
   ```
   F12 → Network → Filtrar por "gtag" o "analytics"
   Busca peticiones a:
   - google-analytics.com
   - facebook.net (si usas Meta Pixel)
   ```

4. **Instala Google Tag Assistant** (extensión Chrome):
   - https://chrome.google.com/webstore
   - Busca "Tag Assistant Legacy"
   - Te mostrará si los tags están funcionando

---

### PASO 5: Deploy a producción (cuando estés listo)

#### Si usas Vercel:

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega todas las variables del `.env.local`:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_GOOGLE_ADS_ID`
   - etc.
4. Redeploy el proyecto

#### Si usas otro hosting:

Consulta la documentación de tu proveedor para agregar variables de entorno.

---

## ⚠️ IMPORTANTE: Período de Transición

**Recomendación**: Mantén ambos sistemas (viejo y nuevo) durante 1-2 semanas.

### Opción A: Transición suave (RECOMENDADA)

Deja los IDs antiguos como fallback en `src/config/tracking.ts`:

```typescript
export const trackingConfig = {
  googleAnalytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-ZJ0CTKBKNP', // ← ID viejo como fallback
  },
  // ...
}
```

Así si no configuras el `.env.local`, seguirá usando los IDs viejos.

### Opción B: Transición inmediata

Reemplaza directamente los IDs en `src/config/tracking.ts`:

```typescript
export const trackingConfig = {
  googleAnalytics: {
    measurementId: 'G-TU_NUEVO_ID', // ← Tu nuevo ID hardcodeado
  },
  // ...
}
```

---

## 🔍 Verificación Post-Deploy

Después de hacer deploy a producción:

### 1. Verifica Google Analytics (Tiempo Real)
- Abre https://analytics.google.com/
- Ve a Informes → Tiempo real
- Visita tu sitio en producción
- Deberías verte en "Usuarios actualmente"

### 2. Verifica Google Ads (si aplica)
- Abre https://ads.google.com/
- Ve a Herramientas → Conversiones
- Haz clic en "Detalles" de tu conversión
- Debería mostrar estado "Registrando conversiones"

### 3. Verifica Meta Pixel (si aplica)
- Abre https://business.facebook.com/
- Ve a Eventos del Píxel
- Deberías ver eventos "PageView" llegando

### 4. Verifica Smartlook (si aplica)
- Abre https://app.smartlook.com/
- Deberías ver sesiones grabándose

---

## 🆘 Solución de Problemas

### "No veo datos en Google Analytics"

**Posibles causas**:
1. El ID está mal escrito → Verifica el ID en `.env.local`
2. El servidor no se reinició → Reinicia con `npm run dev`
3. Bloqueador de anuncios → Desactiva AdBlock para probar
4. Variables de entorno no se leyeron → Verifica con `console.log(trackingConfig)`

### "Error de compilación después de cambios"

```bash
# Limpia la caché de Next.js
rm -rf .next
npm run dev
```

### "No se cargan las variables de entorno"

En Next.js, las variables deben empezar con `NEXT_PUBLIC_` para estar disponibles en el cliente.

---

## 📊 Comparación de Datos

Durante la transición, compara los datos:

| Métrica | Sistema Viejo | Sistema Nuevo |
|---------|--------------|---------------|
| Visitas diarias | ? | ? |
| Tasa de rebote | ? | ? |
| Conversiones | ? | ? |
| Páginas más visitadas | ? | ? |

Si los números son similares (±10%), el tracking funciona correctamente.

---

## 🔐 Accesos y Seguridad

### Documenta todos los accesos:

**Google Analytics**
- Email: _______________
- Contraseña: [Usar gestor de contraseñas]
- 2FA: ✅ Activado

**Google Ads**
- Email: _______________
- Contraseña: [Usar gestor de contraseñas]
- 2FA: ✅ Activado

**Meta Business**
- Email: _______________
- Contraseña: [Usar gestor de contraseñas]
- 2FA: ✅ Activado

**Smartlook**
- Email: _______________
- Contraseña: [Usar gestor de contraseñas]
- 2FA: ✅ Activado

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas:

1. **Revisa la documentación**: `MIGRACION-TRACKING.md`
2. **Verifica la consola del navegador**: F12 → Console
3. **Consulta los logs del servidor**: Terminal donde corre `npm run dev`
4. **Contacta soporte de cada plataforma** (enlaces en MIGRACION-TRACKING.md)

---

## ✨ Mejoras Futuras (Opcional)

Una vez que el tracking funcione:

### 1. Implementar Google Tag Manager
- Gestiona todos los tags desde una interfaz
- Más fácil agregar/quitar herramientas sin tocar código

### 2. Configurar eventos personalizados
- Clics en botones específicos
- Scroll depth
- Tiempo en página
- Formularios completados

### 3. Configurar embudos de conversión
- Analiza dónde abandonan los usuarios
- Optimiza el flujo de conversión

### 4. A/B Testing
- Prueba diferentes versiones de páginas
- Usa Google Optimize (gratuito)

---

## 🎯 Resumen de Archivos Creados

```
scram-web-main/
├── MIGRACION-TRACKING.md          ← Guía completa paso a paso
├── PASOS-SIGUIENTES.md            ← Este archivo
├── .env.local.example             ← Plantilla de variables de entorno
├── .env.local                     ← TU archivo (crear, no en git)
└── src/
    ├── config/
    │   └── tracking.ts            ← Configuración centralizada
    └── components/scram/Layout/
        └── ClientScripts.tsx      ← ACTUALIZADO (usa tracking.ts)
```

---

## ✅ Checklist Final

Antes de considerar completada la migración:

- [ ] Cuentas creadas en todas las plataformas necesarias
- [ ] Archivo `.env.local` creado con tus IDs
- [ ] Servidor reiniciado (`npm run dev`)
- [ ] Tracking verificado en local (Google Analytics tiempo real)
- [ ] Variables de entorno configuradas en producción
- [ ] Deploy realizado
- [ ] Tracking verificado en producción
- [ ] Datos fluyendo correctamente (esperar 24-48 horas)
- [ ] Accesos documentados de forma segura
- [ ] 2FA activado en todas las cuentas

---

**¡Éxito con la migración!** 🚀
