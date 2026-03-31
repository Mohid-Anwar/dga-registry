import type { MetadataRoute } from "next"
import { getUIComponents } from "@/lib/get-components"

const BASE_URL = "https://dga-registry.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const components = getUIComponents()

  const componentRoutes: MetadataRoute.Sitemap = components.map(
    (component) => ({
      url: `${BASE_URL}/${component.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  )

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/installation/nextjs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/installation/vite`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/installation/laravel`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...componentRoutes,
  ]
}
