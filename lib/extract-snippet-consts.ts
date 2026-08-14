/** Unescapes the sequences a template literal escapes: `` \` ``, `\$`, `\\`. */
export function unescapeTemplate(raw: string): string {
  return raw.replace(/\\([\\`$])/g, "$1")
}

/**
 * Maps each `export const name = \`…\`` in a `snippets.ts` source to its value.
 *
 * Docs pages keep multi-line code samples in a sibling `snippets.ts` rather
 * than inline in the MDX (a blank line inside a template literal terminates
 * MDX's ESM block), so resolving these identifiers is what lets
 * `<CodeBlock code={someSnippet} />` survive the conversion to markdown.
 */
export function extractSnippetConsts(source: string): Record<string, string> {
  const sources: Record<string, string> = {}
  const regex = /export const ([A-Za-z0-9_$]+)\s*(?::[^=]+)?=\s*`/g

  let match: RegExpExecArray | null
  while ((match = regex.exec(source))) {
    const start = regex.lastIndex
    let i = start
    while (i < source.length && source[i] !== "`") {
      i += source[i] === "\\" ? 2 : 1
    }

    sources[match[1]] = unescapeTemplate(source.slice(start, i))
    regex.lastIndex = i + 1
  }

  return sources
}
