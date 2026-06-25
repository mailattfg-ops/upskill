import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export", // Enables static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
