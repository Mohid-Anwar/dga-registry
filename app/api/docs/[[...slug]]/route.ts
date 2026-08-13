import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

import { extractDemoSources } from "@/lib/extract-demo-sources"
import { getDocSlugs } from "@/lib/get-doc-slugs"
import { stripMdxToPlainText } from "@/lib/mdx-to-plain"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug?: string[] }> }
) {
  const { slug: segments = [] } = await params

  const slug = segments.join("/")

  if (!getDocSlugs().includes(slug)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }

  const routeDir = path.join(process.cwd(), "app", ...segments)

  const source = fs.readFileSync(path.join(routeDir, "page.mdx"), "utf-8")

  const demosPath = path.join(routeDir, "demos.tsx")
  const demoSources = fs.existsSync(demosPath)
    ? extractDemoSources(fs.readFileSync(demosPath, "utf-8"))
    : {}

  return new NextResponse(stripMdxToPlainText(source, demoSources), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
