import type { NextConfig } from "next"
import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */

  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  images: {
    remotePatterns: [],
  },
  experimental: {
    // Use Rust MDX compiler with GFM support (tables, strikethrough, etc.)
    mdxRs: {
      mdxType: "gfm",
    },
  },
}

const withMDX = createMDX({
  // No JS remarkPlugins here — mdxRs handles GFM natively
  extension: /\.(md|mdx)$/,
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
