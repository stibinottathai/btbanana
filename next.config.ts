import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "btbanana.com",
          },
        ],
        destination: "https://www.btbanana.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
