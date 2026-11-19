import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Ship the (small, Tailwind) CSS inside the HTML instead of as
    // render-blocking <link> files: removes a round trip before first paint,
    // which is what mobile PageSpeed (slow 4G) penalises most.
    inlineCss: true,
  },
  images: {
    qualities: [55, 75],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      {
        // Old alias. A real 308 instead of a page that renders redirect(), so
        // crawlers don't index a canonical-less duplicate of the home page.
        source: "/digital-card",
        destination: "/card",
        permanent: true,
      },
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
