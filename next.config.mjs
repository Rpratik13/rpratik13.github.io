/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/',
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
