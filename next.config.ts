import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.weglot.com'],
  },

  env: {
    ENABLE_WEGLOT: process.env.ENABLE_WEGLOT,
    NEXT_PUBLIC_WEGLOT_API_KEY: process.env.NEXT_PUBLIC_WEGLOT_API_KEY,
  },
};

export default nextConfig;
