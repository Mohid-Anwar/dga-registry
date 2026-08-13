import fs from "fs"
import path from "path"

const IGNORED_DIRS = new Set(["api"])

/** Slugs of every route under `app/` with a `page.mdx`, at any depth (e.g. "installation/nextjs"). Root page (if any) is the empty string "". */
export function getDocSlugs(): string[] {
  const appDir = path.join(process.cwd(), "app")
  const slugs: string[] = []

  if (fs.existsSync(path.join(appDir, "page.mdx"))) {
    slugs.push("")
  }

  function walk(dir: string, prefix: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory() || IGNORED_DIRS.has(entry.name)) continue

      const slug = prefix ? `${prefix}/${entry.name}` : entry.name
      const dirPath = path.join(dir, entry.name)

      if (fs.existsSync(path.join(dirPath, "page.mdx"))) {
        slugs.push(slug)
      }

      walk(dirPath, slug)
    }
  }

  walk(appDir, "")

  return slugs
}
