import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '',       // <-- Change this to an empty string
  assetPrefix: '',    // <-- Change this to an empty string
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.1.4', '10.11.129.178', 'localhost', '127.0.0.1'],
};

export default nextConfig;
