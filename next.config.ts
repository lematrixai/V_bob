import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    // This disables ESLint during builds
    ignoreDuringBuilds: true,
  },


};

export default nextConfig;
