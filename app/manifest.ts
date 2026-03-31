import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DGA Registry",
    short_name: "DGA Registry",
    description:
      "A collection of UI components and utilities for building Saudi data governance applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#006838",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
