// @type {import('next').NextConfig}
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Deshabilitar ESLint y TypeScript errors durante build de producción
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configuración de caché mejorada
  generateBuildId: async () => {
    // Generar build ID único basado en timestamp para forzar actualización
    return `build-${Date.now()}`;
  },
  // Headers para controlar caché del navegador
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/version.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
