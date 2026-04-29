import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.env.WIKI_ROOT ?? "/home/ck/wiki",
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
