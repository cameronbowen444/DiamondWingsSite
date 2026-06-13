import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/fleet",
        destination: "/#fleet",
        permanent: true,
      },
      {
        source: "/reservations",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/#contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;