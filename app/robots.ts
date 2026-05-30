import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/r/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/r/"],
      },
    ],
    sitemap: "https://dga-registry.vercel.app/sitemap.xml",
    host: "https://dga-registry.vercel.app",
  }
}
