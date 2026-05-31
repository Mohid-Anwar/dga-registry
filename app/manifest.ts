import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DGA Components – Digital Government Authority Saudi Arabia",
    short_name: "DGA Components",
    description:
      "UI component library based on the DGA Platforms Code design system. React, Next.js, Laravel, Vite, Astro, and TanStack components with RTL support and Arabic typography.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#006838",
    categories: ["developer tools", "design", "government"],
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
