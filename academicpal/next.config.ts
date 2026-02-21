/**
 * AcademicPal - Next.js TypeScript Configuration
 * Next.js 16 with Turbopack, PWA support, and remote image patterns
 */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {},
};

module.exports = withPWA(nextConfig);
