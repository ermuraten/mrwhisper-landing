import type { NextConfig } from "next";

// Static export for GitHub Pages. NEXT_PUBLIC_BASE_PATH is "/<repo>" while the site lives at
// <user>.github.io/<repo>, and empty once a custom domain is connected.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  turbopack: { root: __dirname },
};

export default nextConfig;
