"use client"

import { useEffect, useState } from "react"
import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  createHighlighter,
  type BundledLanguage,
  type Highlighter,
} from "shiki"

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  highlightLines?: number[]
}

export interface Token {
  content: string
  color?: string
}

const THEME = "github-dark-default"

let highlighterPromise: Promise<Highlighter> | null = null
function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [THEME],
      langs: ["tsx", "typescript", "json", "bash", "css"],
    })
  }
  return highlighterPromise
}

/** Tokenizes `code` for syntax-highlighted rendering; returns un-colored lines until the highlighter loads. */
export function useHighlightedLines(
  code: string,
  language: string
): Token[][] {
  const [tokenLines, setTokenLines] = useState<Token[][] | null>(null)

  useEffect(() => {
    let cancelled = false
    getHighlighter().then((highlighter) => {
      if (cancelled) return
      const { tokens } = highlighter.codeToTokens(code, {
        lang: language as BundledLanguage,
        theme: THEME,
      })
      setTokenLines(
        tokens.map((line) =>
          line.map((token) => ({ content: token.content, color: token.color }))
        )
      )
    })
    return () => {
      cancelled = true
    }
  }, [code, language])

  return tokenLines ?? code.split("\n").map((line) => [{ content: line }])
}

export function CodeLines({
  lines,
  showLineNumbers = false,
  highlightLines = [],
}: {
  lines: Token[][]
  showLineNumbers?: boolean
  highlightLines?: number[]
}) {
  return (
    <>
      {lines.map((lineTokens, i) => (
        <span
          key={i}
          className={`flex ${
            highlightLines.includes(i + 1) ? "-mx-4 bg-zinc-800/60 px-4" : ""
          }`}
        >
          {showLineNumbers && (
            <span className="mr-4 w-4 shrink-0 text-right text-zinc-500 select-none">
              {i + 1}
            </span>
          )}
          <span>
            {lineTokens.map((token, j) => (
              <span
                key={j}
                style={token.color ? { color: token.color } : undefined}
              >
                {token.content}
              </span>
            ))}
          </span>
          {i < lines.length - 1 && "\n"}
        </span>
      ))}
    </>
  )
}

export function CodeBlock({
  code,
  language = "tsx",
  filename,
  showLineNumbers = false,
  highlightLines = [],
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const lines = useHighlightedLines(code, language)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="my-4 rounded-xl border bg-zinc-950 text-zinc-100">
      {/* Header */}
      {filename && (
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
          <span className="text-xs font-medium text-zinc-400">{filename}</span>
          <button
            onClick={copy}
            className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
          >
            {copied ? (
              <>
                <HugeiconsIcon icon={Tick02Icon} className="size-3.5" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <HugeiconsIcon icon={Copy01Icon} className="size-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Code */}
      <div className="relative">
        {!filename && (
          <button
            onClick={copy}
            aria-label="Copy code"
            className="absolute top-2 right-2 z-10 flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
          >
            {copied ? (
              <HugeiconsIcon icon={Tick02Icon} className="size-3.5" />
            ) : (
              <HugeiconsIcon icon={Copy01Icon} className="size-3.5" />
            )}
          </button>
        )}

        <pre className="overflow-x-auto px-4 py-3 text-sm">
          <code>
            <CodeLines
              lines={lines}
              showLineNumbers={showLineNumbers}
              highlightLines={highlightLines}
            />
          </code>
        </pre>
      </div>
    </div>
  )
}
