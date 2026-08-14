import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

import { extractDemoSources } from "@/lib/extract-demo-sources"
import { getDocSlugs } from "@/lib/get-doc-slugs"
import { stripMdxToPlainText } from "@/lib/mdx-to-plain"
import { SITE_URL } from "@/lib/registry-config"

export async function GET() {
  const slugs = getDocSlugs().sort()

  const sections = slugs.map((slug) => {
    const routeDir = path.join(process.cwd(), "app", ...slug.split("/"))
    const source = fs.readFileSync(path.join(routeDir, "page.mdx"), "utf-8")

    const demosPath = path.join(routeDir, "demos.tsx")
    const demoSources = fs.existsSync(demosPath)
      ? extractDemoSources(fs.readFileSync(demosPath, "utf-8"))
      : {}

    const url = slug ? `${SITE_URL}/${slug}` : SITE_URL
    return `<!-- ${url} -->\n\n${stripMdxToPlainText(source, demoSources)}`
  })

  const content = sections.join("\n\n---\n\n")

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
