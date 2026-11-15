import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The portfolio is hosted on the root GitHub Pages domain.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
