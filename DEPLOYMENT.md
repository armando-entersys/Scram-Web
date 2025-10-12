# Guía de Despliegue a Producción

Esta guía te ayudará a desplegar el sitio web de Scram Consulting a producción.

## Opciones de Despliegue Recomendadas

### 1. Vercel (Recomendado - Más Fácil)

Vercel es la plataforma oficial para Next.js y ofrece despliegue gratuito con SSL automático.

#### Pasos para Desplegar en Vercel:

1. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con tu cuenta de GitHub

2. **Importar el repositorio**
   - Click en "Add New Project"
   - Selecciona el repositorio: `armando-entersys/Scram-Web`
   - Click en "Import"

3. **Configurar variables de entorno**
   - En la sección "Environment Variables", agrega:

   ```
   NEXT_PUBLIC_GA_ID=G-TU_ID_REAL
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=tu-codigo-verificacion
   NEXT_PUBLIC_BING_VERIFICATION=tu-codigo-verificacion
   NEXT_PUBLIC_YANDEX_VERIFICATION=tu-codigo-verificacion
   NEXT_PUBLIC_SITE_URL=https://scramconsulting.com
   ```

4. **Configurar el dominio personalizado**
   - Una vez desplegado, ve a "Settings" > "Domains"
   - Agrega tu dominio: `scramconsulting.com`
   - Sigue las instrucciones para configurar los DNS

5. **Deploy**
   - Click en "Deploy"
   - Espera 2-3 minutos
   - ¡Tu sitio estará en vivo!

#### DNS Configuration para Vercel

Agrega estos registros en tu proveedor de DNS:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

### 2. Netlify

#### Pasos para Desplegar en Netlify:

1. **Crear cuenta en Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Regístrate con tu cuenta de GitHub

2. **Importar el repositorio**
   - Click en "Add new site" > "Import an existing project"
   - Selecciona GitHub
   - Selecciona el repositorio: `armando-entersys/Scram-Web`

3. **Configurar el build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `20`

4. **Configurar variables de entorno**
   - Ve a "Site settings" > "Environment variables"
   - Agrega las mismas variables que en Vercel

5. **Deploy**
   - Click en "Deploy site"
   - Espera 2-3 minutos

6. **Configurar dominio personalizado**
   - Ve a "Domain settings"
   - Agrega tu dominio personalizado

---

### 3. VPS/Servidor Propio (Avanzado)

Si prefieres un servidor propio (Digital Ocean, AWS, Azure, etc.):

#### Requisitos:
- Node.js 20 o superior
- PM2 para proceso en background
- Nginx como reverse proxy
- SSL con Let's Encrypt

#### Pasos:

1. **Clonar el repositorio en el servidor**
```bash
git clone https://github.com/armando-entersys/Scram-Web.git
cd Scram-Web
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Crear archivo de variables de entorno**
```bash
cp .env.production.example .env.production
# Edita .env.production con tus valores reales
nano .env.production
```

4. **Build del proyecto**
```bash
npm run build
```

5. **Instalar PM2**
```bash
npm install -g pm2
```

6. **Iniciar con PM2**
```bash
pm2 start npm --name "scram-web" -- start
pm2 save
pm2 startup
```

7. **Configurar Nginx**

Crear archivo: `/etc/nginx/sites-available/scramconsulting.com`

```nginx
server {
    listen 80;
    server_name scramconsulting.com www.scramconsulting.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

8. **Habilitar el sitio**
```bash
sudo ln -s /etc/nginx/sites-available/scramconsulting.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

9. **Configurar SSL con Let's Encrypt**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d scramconsulting.com -d www.scramconsulting.com
```

---

## Variables de Entorno Requeridas

Para que el sitio funcione correctamente en producción, necesitas configurar estas variables:

### Obligatorias:

- **NEXT_PUBLIC_GA_ID**: ID de Google Analytics 4 (ej: G-1234567890)
- **NEXT_PUBLIC_SITE_URL**: URL de tu sitio en producción

### Opcionales (pero recomendadas):

- **NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION**: Código de verificación de Google Search Console
- **NEXT_PUBLIC_BING_VERIFICATION**: Código de verificación de Bing Webmaster Tools
- **NEXT_PUBLIC_YANDEX_VERIFICATION**: Código de verificación de Yandex Webmaster

---

## Checklist Pre-Deployment

Antes de hacer el deployment, verifica:

- [ ] Google Analytics configurado con ID real
- [ ] Variables de entorno configuradas
- [ ] Dominio configurado en el proveedor de DNS
- [ ] SSL/HTTPS habilitado
- [ ] Sitemap.xml generado (`https://tudominio.com/sitemap.xml`)
- [ ] Robots.txt configurado (`https://tudominio.com/robots.txt`)
- [ ] Probar el sitio en localhost: `npm run build && npm start`
- [ ] Verificar que no hay errores en la consola

---

## Post-Deployment

Después de desplegar:

1. **Verificar Google Analytics**
   - Abre tu sitio en producción
   - Ve a Google Analytics > Tiempo Real
   - Verifica que aparece tu visita

2. **Enviar sitemap a Google**
   - Ve a [Google Search Console](https://search.google.com/search-console)
   - Agrega tu propiedad: `https://scramconsulting.com`
   - Envía el sitemap: `https://scramconsulting.com/sitemap.xml`

3. **Verificar rendimiento**
   - Ve a [PageSpeed Insights](https://pagespeed.web.dev/)
   - Analiza tu sitio
   - Verifica que tiene buenas puntuaciones

4. **Configurar monitoreo**
   - Configura alertas en Google Analytics
   - Configura UptimeRobot o similar para monitoreo 24/7

---

## Actualización del Sitio

Para actualizar el sitio después del deployment inicial:

### En Vercel/Netlify (Automático):
1. Haz cambios en tu código local
2. Commit y push a GitHub:
   ```bash
   git add .
   git commit -m "Descripción de cambios"
   git push
   ```
3. Vercel/Netlify detectará el push y desplegará automáticamente

### En VPS (Manual):
```bash
cd Scram-Web
git pull
npm install
npm run build
pm2 restart scram-web
```

---

## Solución de Problemas

### El sitio no carga:
- Verifica que las variables de entorno estén configuradas
- Revisa los logs en Vercel/Netlify
- Verifica que el build fue exitoso

### Google Analytics no funciona:
- Verifica que el ID sea correcto (formato: G-XXXXXXXXXX)
- Abre DevTools > Network y busca peticiones a `google-analytics.com`
- Espera 24-48 horas para datos completos (tiempo real funciona inmediatamente)

### Error 404 en páginas:
- Verifica que el routing de Next.js esté configurado correctamente
- Asegúrate de que el servidor esté sirviendo el directorio `.next` correcto

---

## Contacto de Soporte

Si tienes problemas con el deployment:
- Revisa la documentación de Next.js: https://nextjs.org/docs/deployment
- Revisa la documentación de Vercel: https://vercel.com/docs
- Contacta al equipo de desarrollo

---

✅ **¡Listo!** Tu sitio de Scram Consulting estará en producción.
