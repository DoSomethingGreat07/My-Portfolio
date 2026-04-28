import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For GitHub Pages deployment
  output: "export", // static export
  // assetPrefix and basePath can be set if deploying to a subpath, e.g. /my-portfolio
  // assetPrefix: process.env.GITHUB_PAGES ? "/<REPO_NAME>/" : undefined,
  // basePath: process.env.GITHUB_PAGES ? "/<REPO_NAME>" : undefined,
};

export default nextConfig;
