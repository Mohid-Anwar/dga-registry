"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

type PackageManager = "pnpm" | "npm" | "yarn" | "bun"
type Variant = "add" | "init" | "init-next" | "init-laravel" | "globals"

type Commands = Partial<Record<PackageManager, string>>

const REGISTRY_BASE = "https://dga-registry.vercel.app/r"

function buildCommands(componentName: string): Commands {
  const url = `${REGISTRY_BASE}/${componentName}.json`
  return {
    pnpm: `pnpm dlx shadcn@latest add ${url}`,
    npm: `npx shadcn@latest add ${url}`,
    yarn: `yarn dlx shadcn@latest add ${url}`,
    bun: `bunx --bun shadcn@latest add ${url}`,
  }
}

function buildInitCommands(): Commands {
  return {
    pnpm: "pnpm dlx shadcn@latest init",
    npm: "npx shadcn@latest init",
    yarn: "yarn shadcn@latest init",
    bun: "bunx --bun shadcn@latest init",
  }
}

function buildNextInitCommands(rtl = false): Commands {
  const rtlFlag = rtl ? " --rtl" : ""
  return {
    pnpm: `pnpm dlx shadcn@latest init -t next --radix${rtlFlag}`,
    npm: `npx shadcn@latest init -t next --radix${rtlFlag}`,
    yarn: `yarn dlx shadcn@latest init -t next --radix${rtlFlag}`,
    bun: `bunx --bun shadcn@latest init -t next --radix${rtlFlag}`,
  }
}

function buildLaravelInitCommands(rtl = false): Commands {
  const rtlFlag = rtl ? " --rtl" : ""
  return {
    pnpm: `pnpm dlx shadcn@latest init -t laravel --radix${rtlFlag}`,
    npm: `npx shadcn@latest init -t laravel --radix${rtlFlag}`,
    yarn: `yarn dlx shadcn@latest init -t laravel --radix${rtlFlag}`,
    bun: `bunx --bun shadcn@latest init -t laravel --radix${rtlFlag}`,
  }
}

// Single-command (no tabs), used for the globals.css import note
const GLOBALS_IMPORT = `@import "../styles/tokens.css";`

export function InstallCommand({
  commands,
  componentName,
  variant = "add",
  rtl = false,
}: {
  commands?: Commands
  componentName?: string
  variant?: Variant
  rtl?: boolean
}) {
  // globals variant: just show a plain code block (no PM tabs)
  if (variant === "globals") {
    return (
      <div className="my-4 rounded-xl border bg-zinc-950 text-zinc-100">
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
          <span className="text-xs font-medium text-zinc-400">
            app/globals.css
          </span>
        </div>
        <pre className="overflow-x-auto px-4 py-3 text-sm">
          <code>{GLOBALS_IMPORT}</code>
        </pre>
      </div>
    )
  }

  const resolvedCommands =
    commands ??
    (variant === "init"
      ? buildInitCommands()
      : variant === "init-next"
      ? buildNextInitCommands(rtl)
      : variant === "init-laravel"
      ? buildLaravelInitCommands(rtl)
      : componentName
      ? buildCommands(componentName)
      : {})

  const managers = Object.keys(resolvedCommands) as PackageManager[]
  const [active, setActive] = useState<PackageManager>(managers[0])
  const [copied, setCopied] = useState(false)

  const command = resolvedCommands[active] ?? ""

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
          className="flex items-center justify-center rounded-md p-1.5 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        </button>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto px-4 py-3 text-sm">
        <code>{command}</code>
      </pre>
    </div>
  )
}