import { NextResponse } from "next/server"

import { getUIComponents } from "@/lib/get-components"
import { SITE_URL } from "@/lib/registry-config"

export async function GET() {
  const components = getUIComponents()

  const componentLinks = components
    .map((c) => `- [${c.name}](${SITE_URL}/${c.slug})`)
    .join("\n")

  const content = `# DGA Components

> A shadcn/ui-compatible component registry implementing the Digital Government Authority (Saudi Arabia) Platforms Code design system — production-ready, accessible, RTL-aware React components for Next.js, Vite, Laravel, Astro, and TanStack.

Install any component with the shadcn CLI: \`npx shadcn@latest add ${SITE_URL}/r/<component-name>.json\`. Every component ships with DGA design tokens, full RTL/Arabic support, and WCAG 2.1 AA accessibility. Full docs, live demos, and props reference for each component at ${SITE_URL}.

## Docs

- [Install (Next.js)](${SITE_URL}/installation/nextjs)
- [Install (Vite)](${SITE_URL}/installation/vite)
- [Install (Laravel)](${SITE_URL}/installation/laravel)
- [Changelog](${SITE_URL}/changelog)

## Components

${componentLinks}

## Optional

- [Full documentation (single file, plain text)](${SITE_URL}/llms-full.txt)
`

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
