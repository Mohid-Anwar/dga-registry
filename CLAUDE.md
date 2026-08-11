# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A custom [shadcn](https://ui.shadcn.com/docs/registry) component registry ("dga") that replicates the Digital Government Authority (Saudi Arabia) design system, plus a Next.js documentation/demo site for it. Consumers install components via `shadcn add https://dga-registry.vercel.app/r/{name}.json`, the same way they'd install from the official shadcn registry.

## Commands

```bash
pnpm dev              # Next.js dev server (Turbopack)
pnpm build            # runs registry:build, then next build
pnpm registry:build   # shadcn build — regenerates registry.json and public/r/*.json from registry/dga/registry.ts
pnpm lint             # next lint
pnpm format           # prettier --write .
pnpm format:check     # prettier --check .
```

There is no test suite. `public/r/` is gitignored (rebuilt output); `registry.json` at the repo root IS committed and must be regenerated with `pnpm registry:build` whenever a `_registry.ts` file changes.

## Architecture

### Two halves of the repo

1. **Documentation/demo site** (`app/`, `components/`) — a normal Next.js App Router site. Every documented component gets a route folder under `app/<slug>/` containing `page.mdx` (docs prose) and `demos.tsx` (live preview components used inside the MDX).
2. **The registry itself** (`registry/dga/`) — the actual distributable source code. This is what gets published and what consumers `shadcn add`. Nothing in here should import from `app/` or `components/`; it must stand alone since it's copied verbatim into consumer projects.

### The registry build pipeline

- `registry/dga/ui/_registry.ts`, `registry/dga/hooks/_registry.ts`, `registry/dga/internal/_registry.ts`, `registry/dga/lib/_registry.ts` each export an array of `Registry["items"]` (from `shadcn/schema`) describing one category of files, their `dependencies`, and `registryDependencies` (other registry items they need).
- `registry/dga/registry.ts` imports and merges all four arrays (plus the `index`/`style` base entries) into one `registry` object, validated against `registryItemSchema`, and filters out `DEPRECATED_ITEMS`.
- `components.json` has `"style": "dga"`, which is how `shadcn build` (aliased as `pnpm registry:build`) discovers `registry/dga/registry.ts` as the build source. That command resolves dependencies (e.g. expands the `"radix-ui"` meta-package into the specific `@radix-ui/react-*` packages actually used) and writes the consolidated `registry.json` at the repo root plus one JSON file per item under `public/r/`.
- **When adding, renaming, or removing a registry file, you must add/update its entry in the corresponding `_registry.ts` file** — files not listed there are invisible to the build and won't be installable.

### Wiring up a new UI component end-to-end

Adding a new component to both the registry and the docs site requires all of:

1. `registry/dga/ui/<name>.tsx` — the component source (must be self-contained; only import from other files inside `registry/dga/`).
2. An entry for it in `registry/dga/ui/_registry.ts` (name, `type: "registry:ui"`, `dependencies`, `registryDependencies`, `files`).
3. `app/<name>/page.mdx` and `app/<name>/demos.tsx` — docs page and live demo components, following the pattern in `app/badge/`.
4. Run `pnpm registry:build` to regenerate `registry.json` and `public/r/<name>.json`.

The sidebar auto-discovers docs entries: `lib/get-components.ts` lists every `.tsx` file in `registry/dga/ui/` that (a) isn't in its `ignored` list (currently `_registry`, `sidebar`, `sheet`, `direction`, `utils`) and (b) has a matching `app/<name>/page.mdx` route. A component with no doc route simply won't appear in the sidebar, even if it's a valid registry item.

### Styling and design tokens

- `styles/tokens.css` is the DGA design-token source (colors, spacing, shadows — see `DGA Compliance Details.md` for the design spec these implement). It's imported by `app/globals.css` before Tailwind, and shadcn's `@theme inline` bridge in `globals.css` maps generic shadcn variable names (`--color-primary`, etc.) onto the token values.
- Registry items that need token CSS ship it as a `registry:component` file with a `target` (e.g. `badge` ships `styles/tokens.css`, `skeleton` ships `ui/skeleton.css` → `styles/skeleton.css`) so it lands in the right place in a consumer's project.
- Icon library is [Hugeicons](https://hugeicons.com) (`iconLibrary` in `components.json`) via `@hugeicons/react` + `@hugeicons/core-free-icons`. Use `HugeiconsIcon` with an imported icon, not other icon packages, for new registry components (other icon packages present in `dependencies` are legacy/incidental).

### RTL / direction

`rtl: true` in `components.json` — this registry supports Arabic RTL layouts. `registry/dga/ui/direction.tsx` wraps Radix's `Direction` primitive (`DirectionProvider`/`useDirection`); components that need direction-awareness should consume this rather than reading `dir` off the DOM directly. Docs pages typically embed a `<DirectionToggle />` (from `components/docs/`) so RTL behavior can be previewed live.

### Path aliases (`components.json` / `tsconfig.json`)

`@/*` maps to the repo root. Registry-facing aliases: `@/components/ui` → `@/registry/dga/ui` is *not* an actual redirect — inside `registry/dga/`, components import each other via relative/`@/registry/dga/...` paths so the code is portable when copied into a consumer app that uses the standard shadcn `@/components/ui` layout instead.

### Import order

Prettier is configured (`package.json` → `prettier.importOrder`) with `@ianvs/prettier-plugin-sort-imports` to enforce this import grouping: react → next → third-party → `@workspace/*` → `@/types` → `@/config` → `@/lib` → `@/hooks` → `@/components/ui` → `@/components` → `@/registry` → `@/styles` → `@/app` → `@/www` → relative imports. Run `pnpm format` rather than hand-ordering imports.
