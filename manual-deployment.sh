#!/bin/bash

# ========================================
# SCRIPT DE DESPLIEGUE MANUAL
# Scram Consulting Website
# ========================================
#
# INSTRUCCIONES:
# 1. Conecta al servidor: ssh root@34.59.193.54
# 2. Copia y pega todo este script en el terminal
# 3. Presiona Enter para ejecutar
#
# ========================================

set -e

echo "🚀 Iniciando despliegue de Scram Consulting Website..."
echo "📍 Servidor: prod-server (34.59.193.54)"
echo "📁 Ruta: /srv/scram-frontend"
echo "🌐 Dominio: scram2k.com"
echo ""

# Verificar que estamos en el servidor correcto
if [ ! -f /etc/hostname ]; then
    echo "❌ Error: No se puede verificar el hostname del servidor"
    exit 1
fi

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}=====================================${NC}"
echo -e "${BLUE}   PASO 1: Preparar directorio${NC}"
echo -e "${BLUE}=====================================${NC}"

# Crear directorio si no existe
if [ ! -d "/srv/scram-frontend" ]; then
    echo -e "${YELLOW}📂 Creando directorio /srv/scram-frontend...${NC}"
    mkdir -p /srv/scram-frontend
    echo -e "${GREEN}✅ Directorio creado${NC}"
else
    echo -e "${GREEN}✅ Directorio ya existe${NC}"
fi

cd /srv/scram-frontend
echo -e "${GREEN}✅ Cambiado a /srv/scram-frontend${NC}"

echo ""
echo -e "${BLUE}=====================================${NC}"
echo -e "${BLUE}   PASO 2: Clonar/Actualizar repo${NC}"
echo -e "${BLUE}=====================================${NC}"

# Clonar o actualizar repositorio
if [ -d ".git" ]; then
    echo -e "${YELLOW}📥 Actualizando repositorio existente...${NC}"
    git fetch origin
    git reset --hard origin/master
    git pull origin master
    echo -e "${GREEN}✅ Repositorio actualizado${NC}"
else
    echo -e "${YELLOW}📥 Clonando repositorio por primera vez...${NC}"
    git clone https://github.com/armando-entersys/Scram-Web.git .
    echo -e "${GREEN}✅ Repositorio clonado${NC}"
fi

echo ""
echo -e "${BLUE}=====================================${NC}"
echo -e "${BLUE}   PASO 3: Configurar variables${NC}"
echo -e "${BLUE}=====================================${NC}"

# Verificar archivo .env.production
if [ ! -f ".env.production" ]; then
    echo -e "${YELLOW}⚠️  Creando .env.production desde template...${NC}"
    cat > .env.production << 'ENVEOF'
# Variables de entorno para producción
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_BING_VERIFICATION=
NEXT_PUBLIC_YANDEX_VERIFICATION=
NEXT_PUBLIC_SITE_URL=https://scram2k.com
ENVEOF
    echo -e "${GREEN}✅ Archivo .env.production creado${NC}"
    echo -e "${YELLOW}⚠️  IMPORTANTE: Edita /srv/scram-frontend/.env.production con tus valores reales${NC}"
    echo -e "${YELLOW}   Ejecuta: nano /srv/scram-frontend/.env.production${NC}"
else
    echo -e "${GREEN}✅ Archivo .env.production ya existe${NC}"
fi

echo ""
echo -e "${BLUE}=====================================${NC}"
echo -e "${BLUE}   PASO 4: Verificar Docker${NC}"
echo -e "${BLUE}=====================================${NC}"

# Verificar Docker
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker no está instalado${NC}"
    echo -e "${YELLOW}   Instala Docker siguiendo: https://docs.docker.com/engine/install/${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Docker instalado: $(docker --version)${NC}"

# Verificar Docker Compose
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo -e "${RED}❌ Docker Compose no está instalado${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Docker Compose instalado${NC}"

# Verificar red de Traefik
if ! docker network ls | grep -q traefik-public; then
    echo -e "${YELLOW}⚠️  Red traefik-public no existe. Creándola...${NC}"
    docker network create traefik-public
    echo -e "${GREEN}✅ Red traefik-public creada${NC}"
else
    echo -e "${GREEN}✅ Red traefik-public existe${NC}"
fi

echo ""
echo -e "${BLUE}=====================================${NC}"
echo -e "${BLUE}   PASO 5: Detener contenedor${NC}"
echo -e "${BLUE}=====================================${NC}"

# Detener contenedor anterior si existe
echo -e "${YELLOW}🛑 Deteniendo contenedor anterior...${NC}"
docker-compose down 2>/dev/null || docker compose down 2>/dev/null || true
echo -e "${GREEN}✅ Contenedor detenido${NC}"

echo ""
echo -e "${BLUE}=====================================${NC}"
echo -e "${BLUE}   PASO 6: Construir imagen${NC}"
echo -e "${BLUE}=====================================${NC}"

echo -e "${YELLOW}🏗️  Construyendo imagen Docker (esto puede tardar 2-5 minutos)...${NC}"
if docker-compose build --no-cache; then
    echo -e "${GREEN}✅ Imagen construida exitosamente${NC}"
elif docker compose build --no-cache; then
    echo -e "${GREEN}✅ Imagen construida exitosamente${NC}"
else
    echo -e "${RED}❌ Error al construir la imagen${NC}"
    exit 1
fi

echo ""
echo -e "${BLUE}=====================================${NC}"
echo -e "${BLUE}   PASO 7: Iniciar contenedor${NC}"
echo -e "${BLUE}=====================================${NC}"

echo -e "${YELLOW}🚀 Iniciando contenedor...${NC}"
if docker-compose up -d; then
    echo -e "${GREEN}✅ Contenedor iniciado${NC}"
elif docker compose up -d; then
    echo -e "${GREEN}✅ Contenedor iniciado${NC}"
else
    echo -e "${RED}❌ Error al iniciar el contenedor${NC}"
    exit 1
fi

echo -e "${YELLOW}⏳ Esperando que el contenedor esté listo (10 segundos)...${NC}"
sleep 10

echo ""
echo -e "${BLUE}=====================================${NC}"
echo -e "${BLUE}   PASO 8: Verificación${NC}"
echo -e "${BLUE}=====================================${NC}"

# Verificar estado del contenedor
if docker ps | grep -q scram-frontend; then
    echo -e "${GREEN}✅ Contenedor corriendo correctamente${NC}"
    echo ""
    docker ps | grep scram-frontend
else
    echo -e "${RED}❌ Error: El contenedor no está corriendo${NC}"
    echo -e "${YELLOW}📋 Últimos logs del contenedor:${NC}"
    docker logs scram-frontend 2>&1 | tail -20
    exit 1
fi

echo ""
echo -e "${BLUE}=====================================${NC}"
echo -e "${BLUE}   PASO 9: Logs del contenedor${NC}"
echo -e "${BLUE}=====================================${NC}"

echo -e "${YELLOW}📊 Últimos 30 logs:${NC}"
docker logs --tail 30 scram-frontend

echo ""
echo -e "${GREEN}=====================================${NC}"
echo -e "${GREEN}   ✅ DESPLIEGUE COMPLETADO${NC}"
echo -e "${GREEN}=====================================${NC}"
echo ""
echo -e "${GREEN}🌐 Tu sitio debería estar disponible en:${NC}"
echo -e "${BLUE}   https://scram2k.com${NC}"
echo ""
echo -e "${YELLOW}📝 Comandos útiles:${NC}"
echo -e "   Ver logs:      ${BLUE}docker logs -f scram-frontend${NC}"
echo -e "   Reiniciar:     ${BLUE}cd /srv/scram-frontend && docker-compose restart${NC}"
echo -e "   Detener:       ${BLUE}cd /srv/scram-frontend && docker-compose down${NC}"
echo -e "   Ver estado:    ${BLUE}docker ps | grep scram-frontend${NC}"
echo -e "   Ver recursos:  ${BLUE}docker stats scram-frontend${NC}"
echo ""
echo -e "${YELLOW}⚠️  Recuerda configurar el Google Analytics ID en:${NC}"
echo -e "   ${BLUE}/srv/scram-frontend/.env.production${NC}"
echo ""
echo -e "${GREEN}¡Despliegue finalizado exitosamente! 🎉${NC}"
