import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdni.iconscout.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com', // Add this block
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;