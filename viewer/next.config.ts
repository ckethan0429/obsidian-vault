import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.env.WIKI_ROOT ?? "/home/ck/wiki",
};

export default nextConfig;
