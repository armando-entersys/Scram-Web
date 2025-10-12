#!/bin/bash

# Script de despliegue para Scram Consulting Website
# Servidor: prod-server (34.59.193.54)
# Ruta: /srv/scram-frontend

set -e

echo "🚀 Iniciando despliegue de Scram Consulting Website..."

# Variables
SERVER_IP="34.59.193.54"
SERVER_USER="root"
DEPLOY_PATH="/srv/scram-frontend"
REPO_URL="https://github.com/armando-entersys/Scram-Web.git"
CONTAINER_NAME="scram-frontend"

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}📦 Conectando al servidor ${SERVER_IP}...${NC}"

# Verificar conexión SSH
if ! ssh -o ConnectTimeout=5 ${SERVER_USER}@${SERVER_IP} "echo 'Conexión exitosa'" > /dev/null 2>&1; then
    echo -e "${RED}❌ Error: No se puede conectar al servidor${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Conexión al servidor establecida${NC}"

# Ejecutar comandos en el servidor
ssh ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
set -e

echo "📁 Verificando directorio de despliegue..."
if [ ! -d "/srv/scram-frontend" ]; then
    echo "📂 Creando directorio /srv/scram-frontend..."
    mkdir -p /srv/scram-frontend
fi

cd /srv/scram-frontend

echo "🔄 Verificando repositorio Git..."
if [ -d ".git" ]; then
    echo "📥 Actualizando repositorio existente..."
    git fetch origin
    git reset --hard origin/master
    git pull origin master
else
    echo "📥 Clonando repositorio por primera vez..."
    git clone https://github.com/armando-entersys/Scram-Web.git .
fi

echo "🔧 Verificando archivo .env.production..."
if [ ! -f ".env.production" ]; then
    echo "⚠️  Creando .env.production desde template..."
    cp .env.production.example .env.production
    echo "⚠️  IMPORTANTE: Edita /srv/scram-frontend/.env.production con tus valores reales"
fi

echo "🐳 Verificando Docker y Docker Compose..."
if ! command -v docker &> /dev/null; then
    echo "❌ Docker no está instalado"
    exit 1
fi

if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose no está instalado"
    exit 1
fi

echo "🛑 Deteniendo contenedor anterior si existe..."
docker-compose down 2>/dev/null || docker compose down 2>/dev/null || true

echo "🏗️  Construyendo imagen Docker..."
docker-compose build --no-cache || docker compose build --no-cache

echo "🚀 Iniciando contenedor..."
docker-compose up -d || docker compose up -d

echo "⏳ Esperando que el contenedor esté listo..."
sleep 10

echo "🔍 Verificando estado del contenedor..."
if docker ps | grep -q scram-frontend; then
    echo "✅ Contenedor iniciado correctamente"
    docker ps | grep scram-frontend
else
    echo "❌ Error: El contenedor no está corriendo"
    docker logs scram-frontend 2>&1 | tail -20
    exit 1
fi

echo "📊 Logs del contenedor:"
docker logs --tail 50 scram-frontend

ENDSSH

echo -e "${GREEN}✅ Despliegue completado exitosamente!${NC}"
echo -e "${BLUE}🌐 El sitio debería estar disponible en: https://scram2k.com${NC}"
echo -e "${BLUE}📝 Para ver logs: ssh ${SERVER_USER}@${SERVER_IP} 'docker logs -f scram-frontend'${NC}"
