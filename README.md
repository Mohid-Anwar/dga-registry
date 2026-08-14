<div align="center">

<img src="https://dga-registry.vercel.app/opengraph-image" alt="DGA Components — Digital Government Authority Saudi Arabia UI Library" width="100%" />

# DGA Components

**A [shadcn](https://ui.shadcn.com/docs/registry) component registry that replicates the Digital Government Authority (Saudi Arabia) design system.**

Production-ready, accessible components for React & Next.js — RTL-first, Arabic-typography-ready, and installable straight into your project with a single CLI command.

[**Browse the docs →**](https://dga-registry.vercel.app)

[![Website](https://img.shields.io/badge/docs-dga--registry.vercel.app-006838?style=flat-square)](https://dga-registry.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![shadcn](https://img.shields.io/badge/built%20with-shadcn-000000?style=flat-square)](https://ui.shadcn.com)
[![RTL](https://img.shields.io/badge/RTL-first-006838?style=flat-square)](#rtl--arabic-support)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)

</div>

---

## What is this?

This repo is two things in one:

1. **A distributable component registry** (`registry/dga/`) — the actual source consumers install via the `shadcn` CLI, the same way they'd pull from the official shadcn registry.
2. **A documentation & demo site** (`app/`, `components/`) — the Next.js app you see at [dga-registry.vercel.app](https://dga-registry.vercel.app), with a live, interactive preview for every documented component.

Every component ships as DGA-styled: [Platforms Code](https://www.figma.com/community/file/1392264328585493958) design tokens, `HugeIcons`, and full **right-to-left** layout support out of the box.

## Install a component

No package to add to `dependencies` — components are copied directly into your project, fully editable, the shadcn way:

```bash
pnpm dlx shadcn@latest add https://dga-registry.vercel.app/r/badge.json
```

Swap `badge` for any component name below. You can also register `@dga` as a named registry and install by short name:

```jsonc
// components.json
{
  "registries": {
    "@dga": "https://dga-registry.vercel.app/r/{name}.json",
  },
}
```

```bash
pnpm dlx shadcn@latest add @dga/badge @dga/tag @dga/lightbox
```

Works anywhere the `shadcn` CLI does — Next.js, Vite, Laravel, Astro, TanStack Start, and more.

## Features

- 🎨 **DGA design tokens** — colors, spacing, radii, and shadows lifted directly from the Platforms Code spec (`styles/tokens.css`)
- 🌍 **RTL-first** — every component is direction-aware via a shared `DirectionProvider`, previewable live on each docs page
- 🔤 **Arabic typography** — IBM Plex Sans Arabic wired in as the default font stack
- ♿ **Accessible** — built on Radix UI / Base UI primitives, keyboard-navigable, WCAG-minded
- 🧩 **Copy-paste ownership** — no runtime dependency on this repo; code lands in _your_ project and you own it
- ✍️ **HugeIcons** — a consistent icon system across every component
- 🚀 **Framework-agnostic delivery** — install via the standard `shadcn add` flow into any compatible stack

## Components

**59** registry items in total — UI components, hooks, lib utilities, and themes. The subset below has a live demo + docs page today; the rest are installable now and getting docs pages over time (see [Contributing](#contributing)).

| Component                                                                    | Description                                                  |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [Badge](https://dga-registry.vercel.app/badge)                               | Status indicators, chip variants, sizes, rounded styles      |
| [Breadcrumb](https://dga-registry.vercel.app/breadcrumb)                     | Navigation hierarchy trail                                   |
| [Button](https://dga-registry.vercel.app/button)                             | Multiple variants, sizes, loading states                     |
| [Card](https://dga-registry.vercel.app/card)                                 | Flexible content container                                   |
| [Carousel](https://dga-registry.vercel.app/carousel)                         | Embla-based, swipeable, RTL-aware                            |
| [Checkbox](https://dga-registry.vercel.app/checkbox)                         | Toggle control with RTL support                              |
| [Infinite Logo Scroll](https://dga-registry.vercel.app/infinite-logo-scroll) | Auto-scrolling logo/partner marquee                          |
| [Input](https://dga-registry.vercel.app/input)                               | Text input with Arabic placeholder support                   |
| [Lightbox](https://dga-registry.vercel.app/lightbox)                         | Fullscreen image viewer — zoom, slideshow, thumbnail sidebar |
| [Navigation Menu](https://dga-registry.vercel.app/navigation-menu)           | Multi-level nav with keyboard support                        |
| [Radio Group](https://dga-registry.vercel.app/radio-group)                   | Single-select radio buttons                                  |
| [Recaptcha](https://dga-registry.vercel.app/recaptcha)                       | Google reCAPTCHA v2 with locale support                      |
| [Select](https://dga-registry.vercel.app/select)                             | Dropdown with RTL positioning                                |
| [Skeleton](https://dga-registry.vercel.app/skeleton)                         | Loading placeholders with RTL-aware animation                |
| [Sonner (Toast)](https://dga-registry.vercel.app/sonner)                     | Notification banners, 5 variants, mobile positioning         |
| [Table](https://dga-registry.vercel.app/table)                               | Responsive data table with selection                         |
| [Tabs](https://dga-registry.vercel.app/tabs)                                 | Tabbed content panels                                        |
| [Tag](https://dga-registry.vercel.app/tag)                                   | Status/category labels, outline & on-color variants          |

Plus `accordion`, `alert`, `alert-dialog`, `aspect-ratio`, `avatar`, `button-group`, `calendar`, `chart`, `collapsible`, `command`, `context-menu`, `dialog`, `drawer`, `dropdown-menu`, `empty`, `field`, `form`, `hover-card`, `input-group`, `input-otp`, `item`, `kbd`, `label`, `menubar`, `native-select`, `pagination`, `popover`, `progress`, `resizable`, `scroll-area`, `separator`, `sheet`, `sidebar`, `slider`, `spinner`, `switch`, `textarea`, `toggle`, `toggle-group`, and `tooltip` — all installable today via `shadcn add`. See [`registry.json`](./registry.json) for the definitive, always-current list.

## RTL & Arabic support

Direction handling is centralized in [`registry/dga/ui/direction.tsx`](./registry/dga/ui/direction.tsx), a thin wrapper over Radix's `Direction` primitive. Every docs page has an `## RTL Support` section showing the real component rendered right-to-left with Arabic content.

**Setting `dir="rtl"` alone is not enough.** Direction-aware components (tabs, select, radio group, tooltip, carousel) resolve direction from an explicit `dir` prop, then `DirectionProvider` context, then fall back to `"ltr"` — they never read the DOM `dir` attribute. They then write that resolved value onto their own root element, which **overrides** any `dir` you set on an ancestor.

So `<html dir="rtl">` on its own leaves those components resolving to `"ltr"` and rendering left-to-right — both layout and arrow-key order — regardless of the wrapper. Wrap your app in both:

```tsx
import { DirectionProvider } from "@/components/ui/direction"

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <DirectionProvider dir="rtl">{children}</DirectionProvider>
      </body>
    </html>
  )
}
```

Components that aren't direction-aware (badge, card, skeleton, input, table, collapsible) never write a `dir` of their own, so they inherit from your wrapper and need nothing extra. Anything with keyboard navigation or floating content — select, tabs, tooltip, radio group, dropdown, popover, carousel — needs the provider.

See the [`direction` docs](https://dga-registry.vercel.app/direction) for a side-by-side demo of the difference and the `useDirection` hook.

## Local development

```bash
pnpm install
pnpm dev              # Next.js dev server (Turbopack) → http://localhost:3000
```

| Command               | What it does                                      |
| --------------------- | ------------------------------------------------- |
| `pnpm dev`            | Start the docs/demo site                          |
| `pnpm build`          | `registry:build` then `next build`                |
| `pnpm registry:build` | Regenerate `public/r/*.json` from `registry.json` |
| `pnpm lint`           | `next lint`                                       |
| `pnpm format`         | `prettier --write .`                              |
| `pnpm format:check`   | `prettier --check .`                              |

There's no test suite; `public/r/` is gitignored build output, and `registry.json` at the repo root is the committed source of truth the CLI reads from.

## Project structure

```
app/                    Next.js docs & demo site (one route per component)
├─ <component>/
│  ├─ page.mdx           Docs prose
│  └─ demos.tsx          Live preview components used in the MDX
registry/dga/            The distributable registry — never imports from app/ or components/
├─ ui/                   Component source + per-category _registry.ts manifest
├─ hooks/                Registry hooks (e.g. use-mobile)
├─ lib/                  Registry lib helpers (e.g. cn/utils)
├─ internal/             Internal/composite building blocks (sidebar pieces, etc.)
└─ registry.ts           Type-checked merge of all _registry.ts arrays
registry.json             Committed build input for `shadcn build` → public/r/*.json
styles/tokens.css         DGA design tokens (colors, spacing, shadows)
```

Adding a new component touches four places: the source file, its `_registry.ts` entry, the mirrored entry in `registry.json`, and a docs route under `app/`. See [`CLAUDE.md`](./CLAUDE.md) for the full, exact wiring steps and the gotchas around the `shadcn build` pipeline.

## Contributing

Found a gap in the RTL layout, a missing docs page, or want to port another Platforms Code component? Issues and PRs are welcome. Check [`CLAUDE.md`](./CLAUDE.md) first — it documents the registry build pipeline in detail so a new component doesn't silently fail to ship into `public/r/`.

## Credits

Built on [shadcn/ui](https://ui.shadcn.com). Design tokens and RTL adaptations based on the [Platforms Code](https://www.figma.com/community/file/1392264328585493958) design system published by the Digital Government Authority, Saudi Arabia.

Built by [Mohid Anwar](https://www.linkedin.com/in/mohid-anwar).
