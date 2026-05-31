import type { NextConfig } from "next"
import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  poweredByHeader: false,

  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [65],
    minimumCacheTTL: 31536000,
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [],
  },
  experimental: {
    // Use Rust MDX compiler with GFM support (tables, strikethrough, etc.)
    mdxRs: {
      mdxType: "gfm",
    },
    cssChunking: true,
  },
}

const withMDX = createMDX({
  // No JS remarkPlugins here — mdxRs handles GFM natively
  extension: /\.(md|mdx)$/,
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
