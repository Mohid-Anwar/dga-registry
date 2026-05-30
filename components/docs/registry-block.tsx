"use client"

import { useState } from "react"
import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

const REGISTRY_CONFIG = {
  registries: {
    "@dga": "https://dga-registry.vercel.app/r/{name}.json",
  },
}

export function RegistryBlock() {
  const [copied, setCopied] = useState(false)
  const code = JSON.stringify(REGISTRY_CONFIG, null, 2)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="my-4 rounded-xl border bg-zinc-950 text-zinc-100">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
        <span className="text-xs font-medium text-zinc-400">
          components.json
        </span>
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

      {/* Code */}
      <pre className="overflow-x-auto px-4 py-3 text-sm">
        <code>
          <span className="text-zinc-400">{"{}"[0]}</span>
          {"\n"}
          <span className="text-zinc-400">{"  "}</span>
          <span className="text-blue-400">"registries"</span>
          <span className="text-zinc-400">{": {"}</span>
          {"\n"}
          <span className="text-zinc-400">{"    "}</span>
          <span className="text-green-400">"@dga"</span>
          <span className="text-zinc-400">{": "}</span>
          <span className="text-amber-300">
            "https://dga-registry.vercel.app/r/{"{name}"}.json"
          </span>
          {"\n"}
          <span className="text-zinc-400">{"  }"}</span>
          {"\n"}
          <span className="text-zinc-400">{"}"}</span>
        </code>
      </pre>
    </div>
  )
}
