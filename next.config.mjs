// @type {import('next').NextConfig}
const nextConfig = {
  // Para producción con Docker usamos standalone
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
