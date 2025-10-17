# 🌐 Configuración de Subdominio para Google Ads

## Objetivo
Configurar `seguridad-electronica.scram2k.com` para mostrar la landing `/l-ads-seguridad-electronica` con separación completa de SEO y métricas.

---

## 📋 Checklist de Implementación

### 1. ✅ Configuración de DNS

Añadir en tu proveedor de DNS (CloudFlare, GoDaddy, etc.):

```
Tipo: A
Nombre: seguridad-electronica
Contenido: [IP del servidor - obtener con: gcloud compute instances list]
TTL: Auto o 3600
Proxy: Activado (si usas CloudFlare)
```

**O si usas CNAME:**
```
Tipo: CNAME
Nombre: seguridad-electronica
Contenido: scram2k.com
TTL: Auto o 3600
```

---

### 2. ✅ Actualizar Docker Compose en Producción

Reemplazar `/srv/scram-frontend/docker-compose.yml` con el contenido de `docker-compose.prod.yml`:

```bash
# En el servidor de producción
cd /srv/scram-frontend
cp docker-compose.yml docker-compose.yml.backup
# Copiar el nuevo docker-compose.prod.yml como docker-compose.yml
docker compose down
docker compose up -d
```

---

### 3. ✅ Verificar Certificado SSL

Traefik generará automáticamente el certificado SSL para el subdominio. Verificar en:

```bash
docker logs traefik | grep "seguridad-electronica"
```

---

### 4. 🔒 Protección SEO Implementada

**Separación completa para evitar penalizaciones:**

#### Robots Meta Tags (Automático)
- Landing desde subdominio: `noindex, nofollow`
- Landing desde ruta principal: `noindex` (ya configurado)
- Página de servicio: `index, follow`

#### Canonical Tags
- Subdominio → `https://seguridad-electronica.scram2k.com/`
- Ruta principal → `https://www.scram2k.com/l-ads-seguridad-electronica`

#### Headers HTTP
- `x-is-subdomain: true` - Detecta tráfico desde subdominio
- `x-subdomain-type: ads-landing` - Identifica tipo de campaña

---

### 5. 📊 Tracking Analytics Separado

**Configurar en Google Analytics/GTM:**

1. **Crear Property Separada** (Recomendado)
   - Nombre: "SCRAM - Ads Landing Seguridad"
   - ID: Nuevo GA4 Property ID
   - Dominio: `seguridad-electronica.scram2k.com`

2. **O Usar Filtros en Property Existente**
   - Filtrar por hostname
   - Crear segmento: `hostname == seguridad-electronica.scram2k.com`

3. **Variables GTM para Detección**
   ```javascript
   // Variable personalizada en GTM
   function() {
     return window.location.hostname.startsWith('seguridad-electronica.');
   }
   ```

---

### 6. 🎯 Google Ads Configuration

**Configurar conversiones separadas:**

```
Dominio de destino: seguridad-electronica.scram2k.com
URL final: https://seguridad-electronica.scram2k.com/
```

**Ventajas:**
- ✅ Métricas 100% separadas del sitio principal
- ✅ No afecta SEO del dominio principal
- ✅ Tracking preciso de campañas Ads
- ✅ A/B testing más claro
- ✅ Presupuesto y ROI más fácil de medir

---

## 🧪 Testing

### Verificación Local (Desarrollo)

Editar `C:\Windows\System32\drivers\etc\hosts`:

```
127.0.0.1 seguridad-electronica.scram2k.test
```

Luego acceder a: `http://seguridad-electronica.scram2k.test:3000`

### Verificación en Producción

```bash
# 1. Verificar DNS propagación
nslookup seguridad-electronica.scram2k.com

# 2. Verificar HTTPS
curl -I https://seguridad-electronica.scram2k.com

# 3. Verificar headers de protección SEO
curl -I https://seguridad-electronica.scram2k.com | grep -i "robot\|canonical"

# 4. Verificar Next.js middleware
curl -H "Host: seguridad-electronica.scram2k.com" https://scram2k.com/ -v
```

---

## 🔍 Validaciones de SEO

### Herramientas de Verificación

1. **Google Search Console**
   - Verificar que el subdominio NO se indexa
   - Confirmar que el dominio principal no tiene contenido duplicado

2. **Screaming Frog SEO Spider**
   - Crawlear ambos dominios por separado
   - Verificar robots meta tags

3. **Ahrefs / SEMrush**
   - Monitorear que no hay penalizaciones por contenido duplicado

---

## 📈 Métricas Esperadas

### KPIs Separados

**Dominio Principal (scram2k.com):**
- Tráfico orgánico
- Autoridad de dominio
- Rankings SEO

**Subdominio Ads (seguridad-electronica.scram2k.com):**
- Tráfico de pago (Google Ads)
- Conversiones de campañas
- Cost per lead (CPL)
- Return on ad spend (ROAS)

---

## ⚠️ Importante

**NO hacer:**
- ❌ Indexar el subdominio en Google Search Console
- ❌ Crear enlaces desde el sitio principal al subdominio
- ❌ Usar el mismo GA4 Property sin filtros
- ❌ Mezclar URLs en sitemaps

**SÍ hacer:**
- ✅ Mantener noindex en el subdominio
- ✅ Usar tracking separado
- ✅ Monitorear métricas por separado
- ✅ A/B testing en el subdominio sin afectar el principal

---

## 🆘 Troubleshooting

### Problema: Certificado SSL no genera

```bash
# Ver logs de Traefik
docker logs traefik --tail 100 -f

# Forzar renovación
docker exec traefik traefik healthcheck
```

### Problema: DNS no resuelve

```bash
# Verificar propagación DNS
dig seguridad-electronica.scram2k.com
nslookup seguridad-electronica.scram2k.com 8.8.8.8
```

### Problema: Contenido duplicado detectado

- Verificar robots meta tag: `<meta name="robots" content="noindex, nofollow">`
- Verificar canonical tag apunta al subdominio
- Verificar en Google Search Console que no está indexado

---

## 📞 Soporte

Para dudas sobre la configuración, revisar:
- Middleware: `src/middleware.ts`
- Component SEO: `src/components/SubdomainSEO.tsx`
- Docker config: `docker-compose.prod.yml`
