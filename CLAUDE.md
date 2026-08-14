# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A custom [shadcn](https://ui.shadcn.com/docs/registry) component registry ("dga") that replicates the Digital Government Authority (Saudi Arabia) design system, plus a Next.js documentation/demo site for it. Consumers install components via `shadcn add https://dga-registry.vercel.app/r/{name}.json`, the same way they'd install from the official shadcn registry.

## Commands

```bash
pnpm dev              # Next.js dev server (Turbopack)
pnpm build            # runs registry:build, then next build
pnpm registry:build   # shadcn build — regenerates public/r/*.json from the committed registry.json
pnpm lint             # next lint
pnpm format           # prettier --write .
pnpm format:check     # prettier --check .
```

There is no test suite. `public/r/` is gitignored (rebuilt output); `registry.json` at the repo root IS committed.

**`shadcn build` reads `registry.json` as its input — it never reads `registry/dga/registry.ts`.** Despite `components.json` having `"style": "dga"`, there is no automatic TS→JSON step in this shadcn version (3.8.4): `shadcn build` errors immediately if `registry.json` is missing rather than falling back to the `.ts` source. In practice this means **every time you add/change an entry in a `_registry.ts` file, you must also hand-add the equivalent entry to `registry.json`** (same fields, but file `path`s get the `registry/dga/` prefix, e.g. `ui/badge.tsx` → `registry/dga/ui/badge.tsx`) — then run `pnpm registry:build` to regenerate `public/r/*.json` from that updated `registry.json`. Skipping the manual `registry.json` edit means the component silently never gets built into `public/r/`, even though it's listed correctly in `_registry.ts`.

## Architecture

### Two halves of the repo

1. **Documentation/demo site** (`app/`, `components/`) — a normal Next.js App Router site. Every documented component gets a route folder under `app/<slug>/` containing `page.mdx` (docs prose) and `demos.tsx` (live preview components used inside the MDX).
2. **The registry itself** (`registry/dga/`) — the actual distributable source code. This is what gets published and what consumers `shadcn add`. Nothing in here should import from `app/` or `components/`; it must stand alone since it's copied verbatim into consumer projects.

### Framework-agnostic check for `registry/dga/`

"Stand-alone" means **portable across React frameworks** (Next.js, Vite, CRA, RSC-less setups), not literally framework-free — depending on React itself, or on `"use client"` as an RSC boundary marker, is fine. Before adding or editing a file in `registry/dga/`, check it against these:

- **No Next-specific runtime APIs or globals.** `process.env.NEXT_PUBLIC_*`, `next/navigation`, `next/image`, etc. don't exist (or don't behave the same way) in a Vite/CRA consumer. Runtime config (site keys, feature flags, base URLs) belongs in a required prop the consumer supplies — never a hardcoded env-var lookup with a silent fallback like `?? ""`, since that fails at runtime instead of at compile time in a non-Next app.
- **No imports from `app/` or `components/`** (already covered above) — those are this repo's Next docs site, not registry code.
- **Browser-only workarounds shouldn't assume a specific host/library shape.** If a component papers over a third-party quirk (a CSS selector targeting another library's DOM structure, a specific CDN domain, etc.), prefer the least specific match that still works — e.g. match on a stable path fragment rather than a single hardcoded domain, since the same resource can legitimately be served from more than one host.
- **SSR-safety for anything reading `window`/`document`.** Guard direct access (e.g. in a `useState` initializer) with `typeof window !== "undefined"`, even inside a `"use client"` file — the component may still be imported by a framework that server-renders on first pass.

None of this requires avoiding React itself or hooks — see `registry/dga/hooks/use-media.ts` for the intended shape of a portable client hook (SSR-guarded, no framework-specific API).

### The registry build pipeline

- `registry/dga/ui/_registry.ts`, `registry/dga/hooks/_registry.ts`, `registry/dga/internal/_registry.ts`, `registry/dga/lib/_registry.ts` each export an array of `Registry["items"]` (from `shadcn/schema`) describing one category of files, their `dependencies`, and `registryDependencies` (other registry items they need).
- `registry/dga/registry.ts` imports and merges all four arrays (plus the `index`/`style` base entries) into one `registry` object, validated against `registryItemSchema`, and filters out `DEPRECATED_ITEMS`.
- `registry/dga/registry.ts` imports and merges all four `_registry.ts` arrays (plus the `index`/`style` base entries) into one `registry` object, validated against `registryItemSchema`. This is a type-checked reference for what _should_ be in `registry.json` — see the `shadcn build` caveat above for why it isn't the literal build input.
- **When adding, renaming, or removing a registry file, you must add/update its entry in the corresponding `_registry.ts` file, AND mirror that entry into the committed `registry.json`** — an item missing from either one won't make it into `public/r/` and won't be installable.

### Wiring up a new UI component end-to-end

Adding a new component to both the registry and the docs site requires all of:

1. `registry/dga/ui/<name>.tsx` — the component source (must be self-contained; only import from other files inside `registry/dga/`).
2. An entry for it in `registry/dga/ui/_registry.ts` (name, `type: "registry:ui"`, `dependencies`, `registryDependencies`, `files`) — **and the matching entry hand-added to `registry.json`** (see the `shadcn build` caveat above).
3. `app/<name>/page.mdx` and `app/<name>/demos.tsx` — docs page and live demo components, following the pattern in `app/badge/`.
4. Run `pnpm registry:build` to regenerate `public/r/<name>.json`.
5. If the component imports a hook or lib helper via its alias path (e.g. `@/hooks/use-mobile`, `@/lib/utils`) rather than `@/registry/dga/...`, make sure a matching file exists at the root `hooks/`/`lib/` folder too — see "Root `hooks/`/`lib/` mirrors" below.

### Docs page conventions

**Every code snippet in a docs page must be syntax highlighted — always use `<CodeBlock />`, never a triple-backtick fence.** `next.config.ts` runs MDX through `mdxRs` (the Rust compiler), which does not support JS rehype plugins, so `rehype-pretty-code`/Shiki can't be wired into the MDX pipeline. A fenced block therefore renders through the plain `pre` override in `app/mdx-components.tsx` — a dark box with uniform `text-zinc-50`, i.e. monochrome. `components/docs/code-block.tsx` is the only path that highlights (it runs Shiki client-side). Props: `code` (required), `language` (default `"tsx"`), `filename`, `showLineNumbers`, `highlightLines`.

**Where to put the snippet string:** inline `code={`...`}` is fine _only_ when the snippet contains no blank lines. A blank line inside a template literal terminates MDX's ESM block — everything after it is parsed as markdown, and Prettier then strips the indentation out of your code sample. For any multi-line snippet with blank lines (imports separated from a function body, etc.), put it in a sibling `snippets.ts` and import it — see `app/sonner/snippets.ts` and `app/direction/snippets.ts`.

**Every docs page must survive conversion to plain markdown.** "Copy page" and "View as Markdown" (`components/docs/copy-page-menu.tsx` → `app/api/docs/[[...slug]]/route.ts`) re-serve each page as markdown for LLM consumption, via `lib/mdx-to-plain.ts`. That converter understands exactly three things: prose/tables, `<CodeBlock />` (rewritten to a fenced block, with `code={identifier}` resolved against the page's `snippets.ts`), and self-closing demo tags whose function is found in the page's `demos.tsx` (inlined as its source). **Anything else — a custom wrapper component, a demo defined outside `demos.tsx`, a `code` prop that isn't a template literal or a bare `snippets.ts` identifier — is silently dropped from the markdown view.** So when adding a new docs construct, either keep it to those three shapes or teach `lib/mdx-to-plain.ts` about it; there's no error to warn you, the content just disappears. Verify with `curl localhost:3000/api/docs/<slug>`.

Each documented component page also ends with an `## RTL Support` section — see "RTL / direction" below.

The sidebar auto-discovers docs entries: `lib/get-components.ts` lists every `.tsx` file in `registry/dga/ui/` that (a) isn't in its `ignored` list (currently `_registry`, `sidebar`, `sheet`, `utils`) and (b) has a matching `app/<name>/page.mdx` route. A component with no doc route simply won't appear in the sidebar, even if it's a valid registry item.

### Styling and design tokens

- `styles/tokens.css` is the DGA design-token source (colors, spacing, shadows — see `DGA Compliance Details.md` for the design spec these implement). It's imported by `app/globals.css` before Tailwind, and shadcn's `@theme inline` bridge in `globals.css` maps generic shadcn variable names (`--color-primary`, etc.) onto the token values.
- Registry items that need token CSS ship it as a `registry:component` file with a `target` (e.g. `badge` ships `styles/tokens.css`, `skeleton` ships `ui/skeleton.css` → `styles/skeleton.css`) so it lands in the right place in a consumer's project.
- Icon library is [Hugeicons](https://hugeicons.com) (`iconLibrary` in `components.json`) via `@hugeicons/react` + `@hugeicons/core-free-icons`. Use `HugeiconsIcon` with an imported icon, not other icon packages, for new registry components (other icon packages present in `dependencies` are legacy/incidental).

### RTL / direction

`rtl: true` in `components.json` — this registry supports Arabic RTL layouts. `registry/dga/ui/direction.tsx` wraps Radix's `Direction` primitive (`DirectionProvider`/`useDirection`); components that need direction-awareness should consume this rather than reading `dir` off the DOM directly. Each docs page ends with an `## RTL Support` section rendering a static demo (`<NameRtl />` in that page's `demos.tsx`) with `dir="rtl"` and Arabic sample text. For direction-aware components (tabs, select, radio-group, tooltip, carousel), wrap that demo in `<DirectionProvider dir="rtl">` as well: those components resolve direction from prop → context → `"ltr"` and then write the resolved value as `dir` on their own root, which **overrides** the wrapper — so without the provider they render fully LTR, not just behave that way. Components that aren't direction-aware (badge, card, table, collapsible, checkbox) write no `dir` and inherit the wrapper normally.

### Path aliases (`components.json` / `tsconfig.json`)

`@/*` maps to the repo root. Registry-facing aliases: `@/components/ui` → `@/registry/dga/ui` is _not_ an actual redirect — inside `registry/dga/`, components import each other via relative/`@/registry/dga/...` paths so the code is portable when copied into a consumer app that uses the standard shadcn `@/components/ui` layout instead.

### Root `hooks/`/`lib/` mirrors

`registry/dga/hooks/use-mobile.ts` and `registry/dga/lib/utils.ts` deliberately import as if they'd already been installed into a consumer project (`@/hooks/use-mobile`, `@/lib/utils` — not `@/registry/dga/...`), matching what `shadcn add` actually rewrites those imports to for a real consumer. That means for _this_ repo's own docs/demo site to resolve those same imports (since `@/*` → repo root here), a byte-identical copy must exist at the root `hooks/`/`lib/` folders — e.g. `hooks/use-mobile.ts` mirrors `registry/dga/hooks/use-mobile.ts`. There's no sync script; **keep both copies in sync by hand** whenever one changes.

Registry `ui/` files don't need this treatment — they import each other via `@/registry/dga/ui/...` directly (see above), and docs demos do the same, so there's no root `components/ui/` mirror.

### Import order

Prettier is configured (`package.json` → `prettier.importOrder`) with `@ianvs/prettier-plugin-sort-imports` to enforce this import grouping: react → next → third-party → `@workspace/*` → `@/types` → `@/config` → `@/lib` → `@/hooks` → `@/components/ui` → `@/components` → `@/registry` → `@/styles` → `@/app` → `@/www` → relative imports. Run `pnpm format` rather than hand-ordering imports.
