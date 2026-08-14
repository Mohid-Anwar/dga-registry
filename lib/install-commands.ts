import { REGISTRY_BASE } from "@/lib/registry-config"

/**
 * Install commands for the docs `<InstallCommand />` component.
 *
 * These live here rather than inside the component because the markdown view of
 * a page (`lib/mdx-to-plain.ts`) has to render the same commands. Duplicating
 * the strings there would let the two drift silently — the docs site showing one
 * command and "Copy page" handing an assistant another.
 */

export type PackageManager = "pnpm" | "npm" | "yarn" | "bun"

export type InstallVariant =
  | "add"
  | "init"
  | "init-next"
  | "init-next-monorepo"
  | "init-laravel"
  | "init-vite"
  | "init-vite-monorepo"
  | "globals"
  | "globals-laravel"
  | "globals-vite"
  | "css-import"
  | "laravel-new"

export type Commands = Partial<Record<PackageManager, string>>

export const GLOBALS_IMPORT = `@import "../styles/tokens.css";`
export const GLOBALS_LARAVEL_IMPORT = `@import "../../styles/tokens.css";`
export const GLOBALS_VITE_IMPORT = `@import "../styles/tokens.css";`
export const LARAVEL_NEW_COMMAND = "laravel new my-app --react"

export function buildCommands(componentName: string): Commands {
  const url = `${REGISTRY_BASE}/${componentName}.json`
  return {
    pnpm: `pnpm dlx shadcn@latest add ${url}`,
    npm: `npx shadcn@latest add ${url}`,
    yarn: `yarn dlx shadcn@latest add ${url}`,
    bun: `bunx --bun shadcn@latest add ${url}`,
  }
}

export function buildInitCommands(): Commands {
  return {
    pnpm: "pnpm dlx shadcn@latest init",
    npm: "npx shadcn@latest init",
    yarn: "yarn shadcn@latest init",
    bun: "bunx --bun shadcn@latest init",
  }
}

function buildTemplateInitCommands(
  template: "next" | "laravel" | "vite",
  rtl = false,
  monorepo = false
): Commands {
  const flags = `${rtl ? " --rtl" : ""}${monorepo ? " --monorepo" : ""}`
  const args = `init --preset b0 --template ${template}${flags}`
  return {
    pnpm: `pnpm dlx shadcn@latest ${args}`,
    npm: `npx shadcn@latest ${args}`,
    yarn: `yarn dlx shadcn@latest ${args}`,
    bun: `bunx --bun shadcn@latest ${args}`,
  }
}

export function buildNextInitCommands(rtl = false, monorepo = false): Commands {
  return buildTemplateInitCommands("next", rtl, monorepo)
}

export function buildLaravelInitCommands(rtl = false): Commands {
  return buildTemplateInitCommands("laravel", rtl)
}

export function buildViteInitCommands(rtl = false, monorepo = false): Commands {
  return buildTemplateInitCommands("vite", rtl, monorepo)
}

export interface InstallCommandProps {
  commands?: Commands
  componentName?: string
  variant?: InstallVariant
  rtl?: boolean
  filename?: string
  code?: string
}

/** The package-manager-tabbed commands for a given set of props. */
export function resolveInstallCommands({
  commands,
  componentName,
  variant = "add",
  rtl = false,
}: InstallCommandProps): Commands {
  if (commands) return commands

  switch (variant) {
    case "init":
      return buildInitCommands()
    case "init-next":
      return buildNextInitCommands(rtl)
    case "init-next-monorepo":
      return buildNextInitCommands(rtl, true)
    case "init-laravel":
      return buildLaravelInitCommands(rtl)
    case "init-vite":
      return buildViteInitCommands(rtl)
    case "init-vite-monorepo":
      return buildViteInitCommands(rtl, true)
    default:
      return componentName ? buildCommands(componentName) : {}
  }
}

/**
 * The variants rendered as a single plain code block instead of PM tabs.
 * Returns `null` for the tabbed variants — use `resolveInstallCommands` there.
 */
export function resolveInstallSnippet({
  variant = "add",
  filename,
  code,
}: InstallCommandProps): {
  code: string
  language: string
  filename?: string
} | null {
  switch (variant) {
    case "globals":
      return {
        code: GLOBALS_IMPORT,
        language: "css",
        filename: "app/globals.css",
      }
    case "globals-laravel":
      return {
        code: GLOBALS_LARAVEL_IMPORT,
        language: "css",
        filename: "resources/css/app.css",
      }
    case "globals-vite":
      return {
        code: GLOBALS_VITE_IMPORT,
        language: "css",
        filename: "src/index.css",
      }
    case "css-import":
      return filename && code ? { code, language: "bash", filename } : null
    case "laravel-new":
      return { code: LARAVEL_NEW_COMMAND, language: "bash" }
    default:
      return null
  }
}
