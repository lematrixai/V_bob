import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: false,
  },
  eslintConfig: {
    ignorePatterns: ["node_modules", ".next/cache", ".env.*"],
  },


};

export default nextConfig;
