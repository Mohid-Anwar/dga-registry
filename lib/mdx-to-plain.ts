import { unescapeTemplate } from "@/lib/extract-snippet-consts"
import {
  resolveInstallCommands,
  resolveInstallSnippet,
  type InstallCommandProps,
  type InstallVariant,
} from "@/lib/install-commands"

/**
 * Index just past the `/>` closing the self-closing JSX tag at `start`.
 *
 * Skips quoted spans so a `>` inside a prop value — extremely common in a
 * `code` prop holding JSX — doesn't end the tag early. Returns `-1` if the
 * tag never closes.
 */
function findSelfClosingTagEnd(source: string, start: number): number {
  let quote: string | null = null

  for (let i = start; i < source.length; i++) {
    const char = source[i]

    if (quote) {
      if (char === "\\") i++
      else if (char === quote) quote = null
      continue
    }

    if (char === '"' || char === "'" || char === "`") quote = char
    else if (char === "/" && source[i + 1] === ">") return i + 2
  }

  return -1
}

/** Pulls `language`, `filename`, and the resolved `code` out of one `<CodeBlock … />`. */
function parseCodeBlockTag(tag: string, snippets: Record<string, string>) {
  const language = /\blanguage=["']([^"']*)["']/.exec(tag)?.[1] ?? "tsx"
  const filename = /\bfilename=["']([^"']*)["']/.exec(tag)?.[1]

  const propStart = tag.indexOf("code={")
  if (propStart === -1) return null

  const valueStart = propStart + "code={".length
  let code: string | undefined

  if (tag[valueStart] === "`") {
    let i = valueStart + 1
    while (i < tag.length && tag[i] !== "`") i += tag[i] === "\\" ? 2 : 1
    code = unescapeTemplate(tag.slice(valueStart + 1, i))
  } else {
    // `code={someSnippet}` — an identifier imported from a sibling snippets.ts
    const identifier = /^\s*([A-Za-z0-9_$]+)\s*\}/.exec(
      tag.slice(valueStart)
    )?.[1]
    code = identifier ? snippets[identifier] : undefined
  }

  return code === undefined ? null : { language, filename, code }
}

/** Pulls the props off one `<InstallCommand … />`. */
function parseInstallCommandTag(tag: string): InstallCommandProps {
  const attr = (name: string) =>
    new RegExp(`\\b${name}=["']([^"']*)["']`).exec(tag)?.[1]

  return {
    componentName: attr("componentName"),
    variant: attr("variant") as InstallVariant | undefined,
    filename: attr("filename"),
    code: attr("code"),
    // Written bare in the MDX: `<InstallCommand variant="init-next" rtl />`
    rtl: /\brtl(?:=\{true\}|="true")?(?=[\s/>])/.test(tag),
  }
}

function fence(code: string, language: string, filename?: string): string {
  const info = filename ? `${language} title="${filename}"` : language
  return `\n\n\`\`\`${info}\n${code}\n\`\`\`\n\n`
}

/**
 * Replaces every `<TagName … />` with whatever `render` returns for its raw tag
 * text — an empty string drops it.
 *
 * Scanned rather than regex-matched as a whole: these tags carry props holding
 * `>` and newlines, which end a `[^>]*` attribute match mid-tag and leave a
 * mangled fragment behind.
 */
function replaceSelfClosingTag(
  source: string,
  tagName: string,
  render: (tag: string) => string
): string {
  const openTag = new RegExp(`<${tagName}(?=[\\s/>])`, "g")
  let out = ""
  let cursor = 0
  let match: RegExpExecArray | null

  while ((match = openTag.exec(source))) {
    const close = findSelfClosingTagEnd(source, match.index)
    if (close === -1) continue

    out +=
      source.slice(cursor, match.index) +
      render(source.slice(match.index, close))
    cursor = close
    openTag.lastIndex = close
  }

  return out + source.slice(cursor)
}

/**
 * Rewrites the two docs components that carry code into fenced markdown blocks.
 *
 * Every sample on a docs page goes through `CodeBlock` rather than a markdown
 * fence (see CLAUDE.md — `mdxRs` can't run the rehype highlighter), and every
 * install command through `InstallCommand`. Without this pass the markdown view
 * drops both, leaving an "## Installation" heading with nothing under it.
 *
 * `InstallCommand` resolves through the same `lib/install-commands` helpers the
 * component uses, so the copied markdown can't drift from the rendered page.
 * It emits the pnpm command — the tab the docs page opens on.
 */
function replaceCodeComponents(
  source: string,
  snippets: Record<string, string>
): string {
  const withCode = replaceSelfClosingTag(source, "CodeBlock", (tag) => {
    const parsed = parseCodeBlockTag(tag, snippets)
    return parsed ? fence(parsed.code, parsed.language, parsed.filename) : ""
  })

  return replaceSelfClosingTag(withCode, "InstallCommand", (tag) => {
    const props = parseInstallCommandTag(tag)

    const snippet = resolveInstallSnippet(props)
    if (snippet) return fence(snippet.code, snippet.language, snippet.filename)

    const commands = resolveInstallCommands(props)
    const command = commands.pnpm ?? Object.values(commands)[0]
    return command ? fence(command, "bash") : ""
  })
}

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
 * JSX wrapper tag. `<CodeBlock />` and `<InstallCommand />` become fenced code
 * blocks too, with identifier `code` props resolved against `snippetSources`.
 */
export function stripMdxToPlainText(
  source: string,
  demoSources: Record<string, string> = {},
  snippetSources: Record<string, string> = {}
): string {
  // Before anything else, so the fences this emits get protected below.
  const withFences = replaceCodeComponents(source, snippetSources)

  const protectedSpans: string[] = []
  let working = withFences.replace(/```[\s\S]*?```|`[^`\n]+`/g, (match) => {
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
