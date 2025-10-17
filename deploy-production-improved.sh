#!/bin/bash

# Script mejorado de deploy para Next.js en producción
# Soluciona problemas de caché y asegura builds limpios

set -e  # Salir si hay algún error

echo "================================================"
echo "🚀 INICIANDO DEPLOY A PRODUCCIÓN"
echo "================================================"
echo ""

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuración
SERVER="prod-server"
ZONE="us-central1-c"
PROJECT_PATH="/srv/scram-frontend"

echo -e "${YELLOW}📥 Paso 1: Obteniendo últimos cambios del repositorio${NC}"
gcloud compute ssh $SERVER --zone=$ZONE --command="cd $PROJECT_PATH && git pull origin master"
echo -e "${GREEN}✅ Repositorio actualizado${NC}"
echo ""

echo -e "${YELLOW}🧹 Paso 2: Limpiando caché de Next.js${NC}"
gcloud compute ssh $SERVER --zone=$ZONE --command="cd $PROJECT_PATH && rm -rf .next node_modules/.cache"
echo -e "${GREEN}✅ Caché eliminado${NC}"
echo ""

echo -e "${YELLOW}🔄 Paso 3: Actualizando versión${NC}"
gcloud compute ssh $SERVER --zone=$ZONE --command="cd $PROJECT_PATH && /usr/bin/node update-version.js || echo 'Nota: versión se actualizará en el build'"
echo -e "${GREEN}✅ Versión lista para actualizar${NC}"
echo ""

echo -e "${YELLOW}🏗️  Paso 4: Reconstruyendo contenedor Docker${NC}"
gcloud compute ssh $SERVER --zone=$ZONE --command="cd $PROJECT_PATH && docker compose down"
echo "   Contenedor detenido"
gcloud compute ssh $SERVER --zone=$ZONE --command="cd $PROJECT_PATH && docker compose build --no-cache"
echo "   Imagen reconstruida"
gcloud compute ssh $SERVER --zone=$ZONE --command="cd $PROJECT_PATH && docker compose up -d"
echo -e "${GREEN}✅ Contenedor iniciado${NC}"
echo ""

echo -e "${YELLOW}⏳ Esperando que el servidor esté listo...${NC}"
sleep 10

echo -e "${YELLOW}🔍 Paso 5: Verificando estado del servidor${NC}"
gcloud compute ssh $SERVER --zone=$ZONE --command="docker compose -f $PROJECT_PATH/docker-compose.yml ps"
echo ""

echo -e "${YELLOW}📋 Mostrando logs recientes:${NC}"
gcloud compute ssh $SERVER --zone=$ZONE --command="docker compose -f $PROJECT_PATH/docker-compose.yml logs --tail=20 scram-frontend"
echo ""

echo "================================================"
echo -e "${GREEN}✅ DEPLOY COMPLETADO EXITOSAMENTE${NC}"
echo "================================================"
echo ""
echo "🌐 URLs para verificar:"
echo "   - https://scram2k.com"
echo "   - https://scram2k.com/soluciones-seguridad-electronica"
echo "   - https://scram2k.com/l-ads-seguridad-electronica"
echo ""
echo "💡 Nota: Los usuarios activos recibirán notificación de"
echo "   nueva versión en los próximos 30 segundos"
echo ""
