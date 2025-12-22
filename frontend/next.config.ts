import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://telemonetize.onrender.com/api/:path*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;