import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "tcgplayer-cdn.tcgplayer.com",
      },
      {
        protocol: "https",
        hostname: "images.pokemontcg.io",
      },
      {
        protocol: "https",
        hostname: "www.pokeperustore.pe",
      },
      {
        protocol: "https",
        hostname: "production-tailoy-repo-magento-statics.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
