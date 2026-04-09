import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.prod-images.emergentagent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'customer-assets.emergentagent.com',
      },
    ],
    qualities: [75, 85],
  },
  allowedDevOrigins: [
    'nz-paneer-yogurt.cluster-0.preview.emergentcf.cloud',
    'nz-paneer-yogurt.preview.emergentagent.com',
  ],
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
