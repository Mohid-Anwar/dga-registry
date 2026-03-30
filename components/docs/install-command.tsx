"use client"

import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Copy01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"
type PackageManager = "pnpm" | "npm" | "yarn" | "bun"
type Variant = "add" | "init" | "init-next" | "init-next-monorepo" | "init-laravel" | "init-vite" | "init-vite-monorepo" | "globals" | "globals-laravel" | "globals-vite" | "css-import" | "laravel-new"

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

function buildNextInitCommands(rtl = false, monorepo = false): Commands {
  const rtlFlag = rtl ? " --rtl" : ""
  const monoFlag = monorepo ? " --monorepo" : ""
  return {
    pnpm: `pnpm dlx shadcn@latest init --preset b0 --template next${rtlFlag}${monoFlag}`,
    npm: `npx shadcn@latest init --preset b0 --template next${rtlFlag}${monoFlag}`,
    yarn: `yarn dlx shadcn@latest init --preset b0 --template next${rtlFlag}${monoFlag}`,
    bun: `bunx --bun shadcn@latest init --preset b0 --template next${rtlFlag}${monoFlag}`,
  }
}

function buildLaravelInitCommands(rtl = false): Commands {
  const rtlFlag = rtl ? " --rtl" : ""
  return {
    pnpm: `pnpm dlx shadcn@latest init --preset b0 --template laravel${rtlFlag}`,
    npm: `npx shadcn@latest init --preset b0 --template laravel${rtlFlag}`,
    yarn: `yarn dlx shadcn@latest init --preset b0 --template laravel${rtlFlag}`,
    bun: `bunx --bun shadcn@latest init --preset b0 --template laravel${rtlFlag}`,
  }
}

function buildViteInitCommands(rtl = false, monorepo = false): Commands {
  const rtlFlag = rtl ? " --rtl" : ""
  const monoFlag = monorepo ? " --monorepo" : ""
  return {
    pnpm: `pnpm dlx shadcn@latest init --preset b0 --template vite${rtlFlag}${monoFlag}`,
    npm: `npx shadcn@latest init --preset b0 --template vite${rtlFlag}${monoFlag}`,
    yarn: `yarn dlx shadcn@latest init --preset b0 --template vite${rtlFlag}${monoFlag}`,
    bun: `bunx --bun shadcn@latest init --preset b0 --template vite${rtlFlag}${monoFlag}`,
  }
}

// Single-command (no tabs), used for the globals.css import note
const GLOBALS_IMPORT = `@import "../styles/tokens.css";`
const GLOBALS_LARAVEL_IMPORT = `@import "../../styles/tokens.css";`
const GLOBALS_VITE_IMPORT = `@import "../styles/tokens.css";`

export function InstallCommand({
  commands,
  componentName,
  variant = "add",
  rtl = false,
  filename,
  code,
}: {
  commands?: Commands
  componentName?: string
  variant?: Variant
  rtl?: boolean
  filename?: string
  code?: string
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

  // globals-laravel variant
  if (variant === "globals-laravel") {
    return (
      <div className="my-4 rounded-xl border bg-zinc-950 text-zinc-100">
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
          <span className="text-xs font-medium text-zinc-400">
            resources/css/app.css
          </span>
        </div>
        <pre className="overflow-x-auto px-4 py-3 text-sm">
          <code>{GLOBALS_LARAVEL_IMPORT}</code>
        </pre>
      </div>
    )
  }

  // globals-vite variant
  if (variant === "globals-vite") {
    return (
      <div className="my-4 rounded-xl border bg-zinc-950 text-zinc-100">
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
          <span className="text-xs font-medium text-zinc-400">
            src/index.css
          </span>
        </div>
        <pre className="overflow-x-auto px-4 py-3 text-sm">
          <code>{GLOBALS_VITE_IMPORT}</code>
        </pre>
      </div>
    )
  }

  // css-import variant: show a plain code block with custom filename
  if (variant === "css-import" && filename && code) {
    return (
      <div className="my-4 rounded-xl border bg-zinc-950 text-zinc-100">
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
          <span className="text-xs font-medium text-zinc-400">
            {filename}
          </span>
        </div>
        <pre className="overflow-x-auto px-4 py-3 text-sm">
          <code>{code}</code>
        </pre>
      </div>
    )
  }

  // laravel-new variant: single non-tabbed command
  if (variant === "laravel-new") {
    return (
      <div className="my-4 rounded-xl border bg-zinc-950 text-zinc-100">
        <pre className="overflow-x-auto px-4 py-3 text-sm">
          <code>laravel new my-app --react</code>
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
      : variant === "init-next-monorepo"
      ? buildNextInitCommands(rtl, true)
      : variant === "init-laravel"
      ? buildLaravelInitCommands(rtl)
      : variant === "init-vite"
      ? buildViteInitCommands(rtl)
      : variant === "init-vite-monorepo"
      ? buildViteInitCommands(rtl, true)
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
          {copied ? <HugeiconsIcon icon={Tick02Icon} className="size-3.5"  /> : <HugeiconsIcon icon={Copy01Icon} className="size-3.5"  />}
        </button>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto px-4 py-3 text-sm">
        <code>{command}</code>
      </pre>
    </div>
  )
}