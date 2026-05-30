import fs from "fs"
import path from "path"

export function getUIComponents() {
  const uiDir = path.join(process.cwd(), "registry/dga/ui")
  const appDir = path.join(process.cwd(), "app")

  const ignored = ["_registry", "sidebar", "sheet", "direction", "utils"]

  const files = fs.readdirSync(uiDir)

  return files
    .filter((file) => {
      if (!file.endsWith(".tsx")) return false

      const name = file.replace(".tsx", "")

      if (ignored.includes(name)) return false

      // Ensure route exists in /app
      const routePath = path.join(appDir, name, "page.mdx")
      return fs.existsSync(routePath)
    })
    .map((file) => {
      const slug = file.replace(".tsx", "")

      return {
        slug,
        name: slug
          .split("-")
          .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
          .join(" "),
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}
