"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/registry/dga/ui/button"

type PackageManager = "pnpm" | "npm" | "yarn" | "bun"

type Variant = "add" | "init"

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


export function InstallCommand({
  commands,
    componentName,
  variant = "add",
}: {
  commands?: Commands
        componentName?: string
  variant?: Variant
}) {
  const resolvedCommands =
  commands ??
  (variant === "init"
    ? buildInitCommands()
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

        <Button
          variant="ghost"
          size="icon-xs"
          onClick={copy}
          className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        </Button>
      </div>

      {/* Code */}
      <pre className="px-4 py-3 text-sm overflow-x-auto">
        <code>{command}</code>
      </pre>
    </div>
  )
}
