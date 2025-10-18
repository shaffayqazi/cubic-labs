import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/cubic-labs',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
