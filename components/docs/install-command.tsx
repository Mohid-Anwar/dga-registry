"use client"

import { useState } from "react"
import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import {
  resolveInstallCommands,
  resolveInstallSnippet,
  type InstallCommandProps,
  type PackageManager,
} from "@/lib/install-commands"

import { CodeBlock, CodeLines, useHighlightedLines } from "./code-block"

export function InstallCommand(props: InstallCommandProps) {
  // Everything hook-dependent is resolved up front: the plain-code-block
  // variants below return early, and hooks can't sit behind an early return.
  // For those variants `resolvedCommands` is `{}` and the hooks idle.
  const resolvedCommands = resolveInstallCommands(props)
  const snippet = resolveInstallSnippet(props)

  const managers = Object.keys(resolvedCommands) as PackageManager[]
  const [active, setActive] = useState<PackageManager>(managers[0])
  const [copied, setCopied] = useState(false)

  const command = resolvedCommands[active] ?? ""
  const lines = useHighlightedLines(command, "bash")

  // The globals/css-import/laravel-new variants are a single plain code block
  // rather than package-manager tabs.
  if (snippet) {
    return (
      <CodeBlock
        code={snippet.code}
        language={snippet.language}
        filename={snippet.filename}
      />
    )
  }

  const copy = async () => {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="my-4 rounded-xl border bg-zinc-950 text-zinc-100">
      {/* Tabs + Copy */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-3 py-2">
        <div className="flex gap-1">
          {managers.map((pkg) => (
            <button
              key={pkg}
              onClick={() => setActive(pkg)}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                active === pkg
                  ? "bg-zinc-800 text-zinc-100"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {pkg}
            </button>
          ))}
        </div>

        <button
          onClick={copy}
          aria-label="Copy command"
          className="flex items-center justify-center rounded-md p-1.5 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
        >
          {copied ? (
            <HugeiconsIcon icon={Tick02Icon} className="size-3.5" />
          ) : (
            <HugeiconsIcon icon={Copy01Icon} className="size-3.5" />
          )}
        </button>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto px-4 py-3 text-sm">
        <code>
          <CodeLines lines={lines} />
        </code>
      </pre>
    </div>
  )
}
