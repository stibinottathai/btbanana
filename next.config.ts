import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      {
        source: "/banana-for-chips",
        destination: "/products/nendran-banana",
        permanent: true,
      },
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
