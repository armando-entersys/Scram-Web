# Guía de Despliegue con Docker y Traefik

Esta guía explica cómo desplegar el sitio web de Scram Consulting en el servidor de producción usando Docker y Traefik.

## Información del Servidor

- **Nombre:** prod-server
- **IP Externa:** 34.59.193.54
- **IP Interna:** 10.128.0.4
- **Zona:** us-central1-c
- **Máquina:** e2-standard-2
- **Dominio:** scram2k.com → 34.59.193.54
- **Reverse Proxy:** Traefik (ya instalado)
- **Ruta de despliegue:** /srv/scram-frontend

## Requisitos Previos

En el servidor deben estar instalados:
- Docker
- Docker Compose
- Traefik configurado con red `traefik-public`
- Dominio apuntando a la IP externa

## Arquitectura del Despliegue

```
Internet → scram2k.com (34.59.193.54)
    ↓
Traefik (reverse proxy con SSL)
    ↓
Docker Container: scram-frontend (puerto 3000)
    ↓
Next.js App (modo standalone)
```

## Archivos de Configuración

### 1. Dockerfile (Multi-stage build optimizado)
- **Stage 1 (deps):** Instala dependencias de producción
- **Stage 2 (builder):** Build de Next.js
- **Stage 3 (runner):** Imagen final optimizada (~150MB)

### 2. docker-compose.yml
Configuración con labels de Traefik:
- SSL automático con Let's Encrypt
- Redirección HTTP → HTTPS
- Redirección www → no-www
- Variables de entorno

### 3. .dockerignore
Excluye archivos innecesarios del build

### 4. .env.production
Variables de entorno para producción

## Despliegue Automático

### Opción 1: Usando el script deploy.sh (Recomendado)

Desde tu máquina local:

```bash
# Dale permisos de ejecución al script
chmod +x deploy.sh

# Ejecuta el despliegue
./deploy.sh
```

El script hará:
1. Conectar al servidor vía SSH
2. Clonar o actualizar el repositorio en /srv/scram-frontend
3. Crear .env.production si no existe
4. Construir la imagen Docker
5. Iniciar el contenedor con Traefik
6. Verificar que todo funcione

### Opción 2: Despliegue Manual

Conecta al servidor:

```bash
ssh root@34.59.193.54
```

En el servidor:

```bash
# 1. Crear directorio de despliegue
mkdir -p /srv/scram-frontend
cd /srv/scram-frontend

# 2. Clonar el repositorio (primera vez)
git clone https://github.com/armando-entersys/Scram-Web.git .

# O actualizar (despliegues posteriores)
git pull origin master

# 3. Crear archivo .env.production
cp .env.production.example .env.production
nano .env.production  # Editar con valores reales

# 4. Construir y levantar el contenedor
docker-compose build --no-cache
docker-compose up -d

# 5. Verificar logs
docker logs -f scram-frontend
```

## Configuración de Variables de Entorno

Edita `/srv/scram-frontend/.env.production`:

```bash
# Google Analytics (REQUERIDO)
NEXT_PUBLIC_GA_ID=G-TU_ID_REAL

# Verificaciones de Buscadores (OPCIONAL)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=tu-codigo
NEXT_PUBLIC_BING_VERIFICATION=tu-codigo
NEXT_PUBLIC_YANDEX_VERIFICATION=tu-codigo

# URL del Sitio
NEXT_PUBLIC_SITE_URL=https://scram2k.com
```

Después de editar, reinicia el contenedor:

```bash
cd /srv/scram-frontend
docker-compose down
docker-compose up -d
```

## Verificación del Despliegue

### 1. Verificar que el contenedor está corriendo

```bash
docker ps | grep scram-frontend
```

Deberías ver algo como:
```
CONTAINER ID   IMAGE                      STATUS         PORTS      NAMES
abc123def456   scram-frontend_scram-web   Up 2 minutes   3000/tcp   scram-frontend
```

### 2. Ver logs del contenedor

```bash
docker logs -f scram-frontend
```

Deberías ver:
```
> scram-web@0.1.0 start
> next start
Ready on http://0.0.0.0:3000
```

### 3. Verificar conectividad interna

```bash
curl http://localhost:3000
```

Debería devolver HTML del sitio.

### 4. Verificar Traefik

```bash
docker logs traefik | grep scram
```

Debería mostrar el registro del servicio.

### 5. Verificar SSL y dominio

Abre en navegador:
- http://scram2k.com → Debe redirigir a https
- https://scram2k.com → Debe cargar el sitio con SSL
- https://www.scram2k.com → Debe redirigir a scram2k.com

### 6. Verificar certificado SSL

```bash
curl -I https://scram2k.com
```

Debe mostrar `HTTP/2 200` sin errores de certificado.

## Comandos Útiles

### Ver logs en tiempo real
```bash
docker logs -f scram-frontend
```

### Reiniciar el contenedor
```bash
cd /srv/scram-frontend
docker-compose restart
```

### Detener el contenedor
```bash
cd /srv/scram-frontend
docker-compose down
```

### Reconstruir desde cero
```bash
cd /srv/scram-frontend
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Ver uso de recursos
```bash
docker stats scram-frontend
```

### Entrar al contenedor
```bash
docker exec -it scram-frontend sh
```

### Ver red de Traefik
```bash
docker network inspect traefik-public
```

## Actualización del Sitio

Para actualizar el sitio después de cambios en el código:

```bash
ssh root@34.59.193.54
cd /srv/scram-frontend
git pull origin master
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

O simplemente ejecuta desde tu máquina local:
```bash
./deploy.sh
```

## Troubleshooting

### El contenedor no inicia

```bash
# Ver logs detallados
docker logs scram-frontend

# Ver eventos del contenedor
docker events --filter container=scram-frontend
```

### Error "network traefik-public not found"

La red de Traefik no existe. Créala:

```bash
docker network create traefik-public
```

### El sitio no carga (502 Bad Gateway)

1. Verifica que el contenedor esté corriendo:
```bash
docker ps | grep scram-frontend
```

2. Verifica los logs:
```bash
docker logs scram-frontend
```

3. Verifica que el puerto 3000 esté respondiendo:
```bash
docker exec scram-frontend wget -O- http://localhost:3000
```

### SSL no funciona

1. Verifica que Traefik esté configurado con Let's Encrypt
2. Verifica que el dominio apunte correctamente a la IP
3. Espera unos minutos para que se genere el certificado
4. Revisa logs de Traefik:
```bash
docker logs traefik | grep -i "scram\|certificate"
```

### Cambios en .env.production no se aplican

Recuerda reiniciar el contenedor después de editar:
```bash
cd /srv/scram-frontend
docker-compose down
docker-compose up -d
```

### Error de permisos

Asegúrate de ejecutar los comandos como root o con sudo.

## Backup

### Backup del código
El código está en GitHub, no necesitas backup adicional.

### Backup de configuración
```bash
# Desde el servidor
cd /srv/scram-frontend
cp .env.production .env.production.backup-$(date +%Y%m%d)
```

## Monitoreo

### Logs persistentes
Los logs se pueden consultar con `docker logs scram-frontend`

### Métricas
```bash
docker stats scram-frontend
```

### Uptime
```bash
docker ps --filter name=scram-frontend --format "{{.Status}}"
```

## Rollback

Si algo sale mal, vuelve a la versión anterior:

```bash
ssh root@34.59.193.54
cd /srv/scram-frontend
git log --oneline  # Ver commits
git reset --hard COMMIT_HASH  # Volver a versión anterior
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## Performance

### Caché de Docker
Para limpiar caché de Docker y liberar espacio:

```bash
docker system prune -a --volumes
```

### Optimización de imagen
La imagen actual usa multi-stage build y está optimizada:
- Tamaño final: ~150MB
- Solo incluye archivos necesarios para producción
- Corre como usuario no-root (nextjs)

## Seguridad

### El contenedor corre como usuario no-root
Usuario: `nextjs` (UID 1001)

### Variables de entorno
Las variables sensibles están en `.env.production` que NO se sube a Git.

### SSL/TLS
Traefik maneja automáticamente los certificados Let's Encrypt.

## Soporte

Si tienes problemas:

1. Revisa los logs: `docker logs -f scram-frontend`
2. Revisa esta documentación
3. Contacta al equipo de desarrollo

---

## Checklist de Despliegue Inicial

- [ ] Servidor tiene Docker y Docker Compose instalados
- [ ] Traefik está corriendo con red `traefik-public`
- [ ] Dominio scram2k.com apunta a 34.59.193.54
- [ ] SSH configurado para acceso al servidor
- [ ] .env.production configurado con valores reales
- [ ] Google Analytics ID configurado
- [ ] Deploy ejecutado exitosamente
- [ ] Sitio carga en https://scram2k.com
- [ ] SSL funciona correctamente
- [ ] Redirecciones funcionan (www → no-www, http → https)
- [ ] Google Analytics verificado en producción

---

✅ **¡Listo!** Tu sitio web está desplegado en producción con Docker y Traefik.
