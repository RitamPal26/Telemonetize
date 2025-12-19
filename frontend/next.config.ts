import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://telemonetize.onrender.com/api/:path*", // Proxy to Backend
      },
      {
        source: "/socket.io/:path*",
        destination: "https://telemonetize.onrender.com/socket.io/:path*", // Proxy WebSockets
      },
    ];
  },
};

export default nextConfig;