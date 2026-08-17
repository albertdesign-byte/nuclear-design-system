import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/docs/components/app-shell",
        destination: "/docs/templates/app-shell",
        permanent: true,
      },
      {
        source: "/docs/templates/intake-shell",
        destination: "/docs/templates/multi-step-flow-layout",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
