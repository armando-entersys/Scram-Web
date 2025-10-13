# Multi-stage build para optimizar el tamaño de la imagen
FROM node:20.13.0-alpine3.19 AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./
# Instalar TODAS las dependencias (incluyendo devDependencies) para el build
RUN npm ci

# Builder stage
FROM node:20.13.0-alpine3.19 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build de Next.js
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Next.js runner (runs in background)
FROM node:20.13.0-alpine3.19 AS nextjs-runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar node_modules y archivos de producción
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.mjs ./next.config.mjs

USER nextjs

# Production image with NGINX
FROM nginx:1.25-alpine AS production

# Install Node.js to run Next.js
RUN apk add --no-cache nodejs npm

# Copy NGINX configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Create app directory
WORKDIR /app

# Copy Next.js app from nextjs-runner
COPY --from=nextjs-runner --chown=nginx:nginx /app /app

# Create startup script
RUN echo '#!/bin/sh' > /start.sh && \
    echo 'cd /app' >> /start.sh && \
    echo 'su -s /bin/sh nginx -c "npm start" &' >> /start.sh && \
    echo 'nginx -g "daemon off;"' >> /start.sh && \
    chmod +x /start.sh

EXPOSE 80

CMD ["/start.sh"]
