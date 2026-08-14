/** Maps each `export function Name() { ... }` in a demos.tsx source to its full source text. */
export function extractDemoSources(source: string): Record<string, string> {
  const sources: Record<string, string> = {}
  const regex = /export function ([A-Za-z0-9_]+)\s*\([^)]*\)\s*\{/g

  let match: RegExpExecArray | null
  while ((match = regex.exec(source))) {
    const name = match[1]
    const start = match.index
    let depth = 0
    let i = start + match[0].length - 1

    do {
      if (source[i] === "{") depth++
      else if (source[i] === "}") depth--
      i++
    } while (depth > 0 && i < source.length)

    sources[name] = source.slice(start, i).trim()
  }

  return sources
}
