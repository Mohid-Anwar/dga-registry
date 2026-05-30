"use client"

import { useState } from "react"
import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  highlightLines?: number[]
}

export function CodeBlock({
  code,
  language = "tsx",
  filename,
  showLineNumbers = false,
  highlightLines = [],
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const lines = code.split("\n")

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
            {showLineNumbers
              ? lines.map((line, i) => (
                  <span
                    key={i}
                    className={`flex ${
                      highlightLines.includes(i + 1)
                        ? "-mx-4 bg-zinc-800/60 px-4"
                        : ""
                    }`}
                  >
                    <span className="mr-4 w-4 shrink-0 text-right text-zinc-600 select-none">
                      {i + 1}
                    </span>
                    <span>{line}</span>
                    {i < lines.length - 1 && "\n"}
                  </span>
                ))
              : code}
          </code>
        </pre>
      </div>
    </div>
  )
}
