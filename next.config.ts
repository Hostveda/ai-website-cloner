import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disables Next.js 16 file-tracing bug on Vercel
  outputFileTracingExcludes: {
    '*': [],
  },
  experimental: {
    // Ensures Webpack is prioritized for production builds
    turbo: undefined,
  },
};

export default nextConfig;
