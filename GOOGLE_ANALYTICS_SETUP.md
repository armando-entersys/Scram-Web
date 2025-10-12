# Configuración de Google Analytics 4 (GA4)

Esta guía te ayudará a configurar Google Analytics 4 en tu sitio web de Scram Consulting.

## ✅ Archivos Ya Creados

Los siguientes archivos ya están configurados en tu proyecto:

- `src/components/GoogleAnalytics.tsx` - Componente de Google Analytics
- `src/config/analytics.ts` - Configuración de Analytics
- `src/app/layout.tsx` - Layout actualizado con GA4
- `.env.local.example` - Archivo de ejemplo para variables de entorno

## 📋 Pasos para Configuración

### 1. Crear Cuenta de Google Analytics 4

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en **"Admin"** (ícono de engranaje en la esquina inferior izquierda)
4. Crea una nueva **Cuenta**:
   - Nombre de cuenta: `Scram Consulting`
   - Marca todas las casillas de compartir datos
   - Clic en **"Siguiente"**

5. Crea una nueva **Propiedad**:
   - Nombre de la propiedad: `Scram Web`
   - Zona horaria: `(GMT-06:00) Ciudad de México`
   - Moneda: `Peso mexicano (MXN)`
   - Clic en **"Siguiente"**

6. Información del negocio:
   - Sector: `Informática y tecnología`
   - Tamaño: Selecciona el tamaño de tu empresa
   - Clic en **"Siguiente"**

7. Objetivos empresariales:
   - Marca: `Generar clientes potenciales`
   - Clic en **"Crear"**

8. Acepta los términos de servicio

### 2. Configurar Flujo de Datos Web

1. Selecciona la plataforma **"Web"**
2. Configura el flujo de datos:
   - URL del sitio web: `https://scramconsulting.com` (tu dominio real)
   - Nombre del flujo: `Scram Web`
   - Clic en **"Crear flujo"**

3. **¡IMPORTANTE!** Copia el **ID de Medición** que se muestra:
   ```
   G-XXXXXXXXXX
   ```
   Este ID lo necesitarás en el siguiente paso.

### 3. Configurar Variables de Entorno

1. En la raíz de tu proyecto, crea un archivo llamado `.env.local`:

```bash
cd C:\Users\Usuario\Downloads\scram-web-main\scram-web-main
copy .env.local.example .env.local
```

2. Abre el archivo `.env.local` y reemplaza `G-XXXXXXXXXX` con tu ID de Medición real:

```env
NEXT_PUBLIC_GA_ID=G-TU_ID_REAL_AQUI
```

**Ejemplo:**
```env
NEXT_PUBLIC_GA_ID=G-1234567890
```

### 4. Reiniciar el Servidor de Desarrollo

Para que Next.js cargue las nuevas variables de entorno:

```bash
# Detén el servidor actual (Ctrl + C)
# Inicia el servidor nuevamente
npm run dev
```

### 5. Verificar que Analytics Funciona

#### Opción A: En Google Analytics (Recomendado)

1. Ve a tu cuenta de Google Analytics
2. Ve a **Informes** > **Tiempo real**
3. Abre tu sitio web en otra pestaña: `http://localhost:3003`
4. Deberías ver tu visita en tiempo real en Google Analytics

#### Opción B: Usando las Herramientas de Desarrollo del Navegador

1. Abre tu sitio: `http://localhost:3003`
2. Abre las DevTools (F12)
3. Ve a la pestaña **"Network"** (Red)
4. Filtra por `google-analytics` o `gtag`
5. Recarga la página
6. Deberías ver peticiones a `www.google-analytics.com`

### 6. Configuración Adicional (Opcional)

#### Mejorar el Seguimiento de Eventos

El tracking básico ya está configurado. Para eventos personalizados, puedes crear funciones como:

```typescript
// Ejemplo de evento personalizado
export const trackEvent = (eventName: string, eventParams?: any) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
};
```

#### Excluir Tráfico Interno

Para excluir tu propio tráfico en producción:

1. En Google Analytics, ve a **Admin** > **Flujos de datos**
2. Haz clic en tu flujo de datos web
3. Desplázate hasta **"Configuración de etiquetado"**
4. Haz clic en **"Definir tráfico interno"**
5. Agrega tu IP o rango de IPs

## 🚀 Despliegue a Producción

Cuando despliegues a producción (Vercel, Netlify, etc.):

### Vercel

1. Ve a tu proyecto en Vercel
2. Ve a **Settings** > **Environment Variables**
3. Agrega la variable:
   - **Name:** `NEXT_PUBLIC_GA_ID`
   - **Value:** `G-TU_ID_REAL`
   - **Environments:** Marca Production, Preview, Development
4. Redeploy tu sitio

### Netlify

1. Ve a tu sitio en Netlify
2. Ve a **Site settings** > **Environment variables**
3. Agrega la variable:
   - **Key:** `NEXT_PUBLIC_GA_ID`
   - **Value:** `G-TU_ID_REAL`
4. Redeploy tu sitio

## 📊 Métricas Importantes a Monitorear

Una vez configurado, podrás ver:

- **Usuarios en tiempo real**
- **Páginas más visitadas**
- **Fuentes de tráfico** (Google, redes sociales, directo)
- **Ubicación geográfica** de los visitantes
- **Dispositivos** (móvil, desktop, tablet)
- **Conversiones y eventos personalizados**

## 🔒 Seguridad

⚠️ **IMPORTANTE:**
- Nunca compartas tu archivo `.env.local` en Git
- El archivo `.env.local` ya está en `.gitignore`
- Las variables `NEXT_PUBLIC_*` son visibles en el frontend (esto es normal para GA)

## ❓ Solución de Problemas

### No veo datos en Google Analytics

1. Verifica que el ID de medición sea correcto en `.env.local`
2. Reinicia el servidor de desarrollo
3. Verifica en las DevTools que se estén haciendo las peticiones a Google
4. Espera 24-48 horas para que se completen los informes completos (tiempo real funciona inmediatamente)

### Error: "GA_MEASUREMENT_ID is undefined"

- Asegúrate de haber creado el archivo `.env.local`
- Verifica que la variable se llame exactamente `NEXT_PUBLIC_GA_ID`
- Reinicia el servidor de desarrollo

## 📚 Recursos Adicionales

- [Documentación de Google Analytics 4](https://support.google.com/analytics/answer/10089681)
- [Next.js + Google Analytics](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
- [Google Tag Manager (alternativa avanzada)](https://tagmanager.google.com/)

---

✅ **¡Listo!** Google Analytics 4 está configurado en tu sitio web.
