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
};

export default nextConfig;
