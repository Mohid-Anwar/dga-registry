/** Strips the file's leading `import` statements (single- or multi-line). */
function stripLeadingImports(text: string): string {
  const lines = text.split("\n")
  let i = 0
  let inImport = false

  while (i < lines.length) {
    const line = lines[i]

    if (inImport) {
      i++
      if (/from\s+["'][^"']+["']\s*;?\s*$/.test(line.trim())) inImport = false
      continue
    }

    if (/^import\b/.test(line)) {
      const closesOnSameLine = /from\s+["'][^"']+["']\s*;?\s*$/.test(
        line.trim()
      )
      if (!closesOnSameLine) inImport = true
      i++
      continue
    }

    if (line.trim() === "") {
      i++
      continue
    }

    break
  }

  return lines.slice(i).join("\n")
}

/**
 * Strips a doc page's leading imports, `metadata` export, and JSX wrapper
 * tags from its raw MDX source, leaving plain markdown suitable for pasting
 * into an LLM chat or reading as text. Content inside fenced or inline code
 * spans is left untouched, since example code often contains its own
 * `import` statements and JSX that must be preserved verbatim.
 *
 * Self-closing demo tags (e.g. `<BreadcrumbDefault />`) are replaced with
 * their actual source from `demos.tsx` as a fenced code block, when
 * available in `demoSources` — otherwise they're stripped like any other
 * JSX wrapper tag.
 */
export function stripMdxToPlainText(
  source: string,
  demoSources: Record<string, string> = {}
): string {
  const protectedSpans: string[] = []
  let working = source.replace(/```[\s\S]*?```|`[^`\n]+`/g, (match) => {
    protectedSpans.push(match)
    return ` SPAN${protectedSpans.length - 1} `
  })

  working = stripLeadingImports(working)
  working = working
    .replace(/^export const metadata = \{[\s\S]*?\n\}\n?/m, "")
    .replace(/<([A-Z][\w.]*)(?:\s[^>]*)?\/>/g, (_match, tagName) => {
      const demoSource = demoSources[tagName]
      if (!demoSource) return ""
      const block = `\n\n\`\`\`tsx\n${demoSource}\n\`\`\`\n\n`
      protectedSpans.push(block)
      return ` SPAN${protectedSpans.length - 1} `
    })
    .replace(/<\/?[A-Z][\w.]*(?:\s[^>]*)?>/g, "")

  working = working.replace(/ SPAN(\d+) /g, (_, i) => protectedSpans[Number(i)])

  return working.replace(/\n{3,}/g, "\n\n").trim()
}
