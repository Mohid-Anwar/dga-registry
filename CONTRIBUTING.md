# Contributing

Thanks for your interest in contributing to the DGA registry. This document covers how to set up the project, the conventions the codebase follows, and how to submit changes.

## Getting started

```bash
pnpm install
pnpm dev
```

This starts the Next.js docs/demo site at `http://localhost:3000` with Turbopack.

## Project structure

This repo has two halves — see [CLAUDE.md](CLAUDE.md) for the full architecture notes:

- **`registry/dga/`** — the actual distributable component source. This is what consumers install via `shadcn add`. It must stand alone (portable across React frameworks) and must not import from `app/` or `components/`.
- **`app/`, `components/`** — the Next.js documentation/demo site for the registry.

## Making changes

### Fixing or improving an existing component

1. Edit the file under `registry/dga/ui/` (or `hooks/`, `lib/`, `internal/`).
2. If the component has a docs page, update the matching `app/<name>/demos.tsx` and/or `page.mdx` so the docs stay accurate.
3. Run `pnpm format` and `pnpm lint` before committing.

### Adding a new UI component

Adding a component end-to-end requires all of:

1. `registry/dga/ui/<name>.tsx` — the component source, self-contained (only imports from other files inside `registry/dga/`).
2. An entry in `registry/dga/ui/_registry.ts` (`name`, `type: "registry:ui"`, `dependencies`, `registryDependencies`, `files`) — **and a matching entry hand-added to the root `registry.json`**, since `shadcn build` reads `registry.json` directly and never the `.ts` source. File paths in `registry.json` get the `registry/dga/` prefix (e.g. `ui/badge.tsx` → `registry/dga/ui/badge.tsx`).
3. `app/<name>/page.mdx` and `app/<name>/demos.tsx` for docs, following the pattern in `app/badge/`.
4. Run `pnpm registry:build` to regenerate `public/r/<name>.json`.
5. If the component imports a hook/lib helper via its alias path (`@/hooks/...`, `@/lib/...`) rather than `@/registry/dga/...`, mirror that file at the root `hooks/`/`lib/` folder too.

Only list a `registryDependency` if the component's own source file actually imports it — not because a demo happens to combine it with another component.

### Design tokens and styling

- Design tokens live in `styles/tokens.css`. Registry items that need token CSS ship it as a `registry:component` file with a `target`.
- Use `HugeiconsIcon` from `@hugeicons/react` for new components — not other icon packages.
- Don't introduce ad-hoc utility classes that reference tokens that don't exist in `@theme inline` (e.g. `text-error` isn't a real class — use `text-[var(--text-text-error)]` or `text-(--token-name)` to reach a CSS variable directly).

## Before submitting a PR

```bash
pnpm format:check   # or `pnpm format` to auto-fix
pnpm lint
pnpm build          # runs registry:build, then next build
```

There is no automated test suite — verify UI changes manually in the dev server (check both LTR and RTL where relevant, via the `## RTL Support` section on docs pages).

## Pull requests

- Keep PRs focused on a single component or fix where possible.
- Describe _why_ the change is needed, not just what changed.
- Link any related issue.
- Make sure `registry.json` and `public/r/*.json` are consistent with the `_registry.ts` files you touched — a mismatch means the component silently won't build.

## Code style

- Formatting is enforced by Prettier (`pnpm format`) with `@ianvs/prettier-plugin-sort-imports` — don't hand-order imports.
- Follow the existing patterns in neighboring files (component structure, `data-slot` attributes, `cn()` usage) rather than introducing new conventions.

## Reporting issues

Open an issue with a clear description, reproduction steps, and — for visual bugs — a screenshot or recording.
