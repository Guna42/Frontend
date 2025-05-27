import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [], // Allow images from any domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow images from any hostname
        port: '',
        pathname: '/**', // Allow any path
      },
    ],
  },
  typescript: {
    // Enable type checking during build
    ignoreBuildErrors: false,
  },
  eslint: {
    // Enable ESLint during build
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;