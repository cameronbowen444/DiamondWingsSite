// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/",
        permanent: true,
      },
      {
        source: "/fleet",
        destination: "/",
        permanent: true,
      },
      {
        source: "/reservations",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;