import { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignores all ESLint errors during builds
  },
};

export default nextConfig;
