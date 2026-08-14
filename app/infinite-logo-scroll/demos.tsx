"use client"

import Image from "next/image"
import { InformationCircleIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import {
  InfiniteLogoScroll,
  type LogoItem,
} from "@/registry/dga/ui/infinite-logo-scroll"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/dga/ui/popover"

/* Real brand marks (Simple Icons, brand colors) served from `public/logos/`.
   Local files rather than a CDN so `next.config.ts` needs no remote host
   allowlisting — see `dangerouslyAllowSVG` there, which the Image Optimization
   API requires before it will serve any SVG. */
const LOGOS: LogoItem[] = [
  {
    id: 1,
    image: "/logos/react.svg",
    href: "https://react.dev",
    alt: "React",
    width: 65,
    height: 65,
  },
  {
    id: 2,
    image: "/logos/typescript.svg",
    href: "https://www.typescriptlang.org",
    alt: "TypeScript",
    width: 65,
    height: 65,
  },
  {
    id: 3,
    image: "/logos/tailwindcss.svg",
    href: "https://tailwindcss.com",
    alt: "Tailwind CSS",
    width: 65,
    height: 65,
  },
  {
    id: 4,
    image: "/logos/vite.svg",
    href: "https://vite.dev",
    alt: "Vite",
    width: 65,
    height: 65,
  },
  {
    id: 5,
    image: "/logos/figma.svg",
    href: "https://www.figma.com",
    alt: "Figma",
    width: 65,
    height: 65,
  },
  {
    id: 6,
    image: "/logos/stripe.svg",
    href: "https://stripe.com",
    alt: "Stripe",
    width: 65,
    height: 65,
  },
  {
    id: 7,
    image: "/logos/supabase.svg",
    href: "https://supabase.com",
    alt: "Supabase",
    width: 65,
    height: 65,
  },
  {
    id: 8,
    image: "/logos/storybook.svg",
    href: "https://storybook.js.org",
    alt: "Storybook",
    width: 65,
    height: 65,
  },
]

/* ═══════════════════════════════════════════
   1 — Default
═══════════════════════════════════════════ */
export function InfiniteLogoScrollDefault() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="text-muted-foreground text-xs">
          Renders a plain <code>&lt;img&gt;</code> by default
        </span>
        <Popover>
          <PopoverTrigger className="text-muted-foreground hover:text-foreground">
            <HugeiconsIcon icon={InformationCircleIcon} size={14} />
          </PopoverTrigger>
          <PopoverContent className="w-72 text-sm">
            This component renders a plain <code>&lt;img&gt;</code> by default
            to stay framework-agnostic. Pass <code>renderImage</code> to use{" "}
            <code>next/image</code> or another framework&apos;s optimized image
            component.
          </PopoverContent>
        </Popover>
      </div>
      <InfiniteLogoScroll items={LOGOS} />
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — Direction
═══════════════════════════════════════════ */
export function InfiniteLogoScrollDirection() {
  return (
    <div className="bg-background space-y-4 rounded-lg border p-6">
      <InfiniteLogoScroll items={LOGOS} direction="left" />
      <InfiniteLogoScroll items={LOGOS} direction="right" />
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — Speed
═══════════════════════════════════════════ */
export function InfiniteLogoScrollSpeed() {
  return (
    <div className="bg-background space-y-4 rounded-lg border p-6">
      <InfiniteLogoScroll items={LOGOS} speedPxPerSec={25} />
      <InfiniteLogoScroll items={LOGOS} speedPxPerSec={100} />
    </div>
  )
}

/* ═══════════════════════════════════════════
   4 — Hover Behavior
═══════════════════════════════════════════ */
export function InfiniteLogoScrollHover() {
  return (
    <div className="bg-background space-y-4 rounded-lg border p-6">
      <InfiniteLogoScroll items={LOGOS} hoverRate={0} />
      <InfiniteLogoScroll items={LOGOS} hoverRate={0.6} />
    </div>
  )
}

/* ═══════════════════════════════════════════
   5 — Custom Image Rendering (Next.js)
═══════════════════════════════════════════ */
export function InfiniteLogoScrollRenderImage() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <InfiniteLogoScroll
        items={LOGOS}
        renderImage={(item) => (
          <Image
            src={item.image}
            alt={item.alt ?? ""}
            width={item.width ?? 240}
            height={item.height ?? 65}
            className="h-full w-auto max-w-40 min-w-10 object-contain md:max-w-60 md:min-w-15"
          />
        )}
      />
    </div>
  )
}

/* ═══════════════════════════════════════════
   6 — RTL Support
═══════════════════════════════════════════ */
export function InfiniteLogoScrollRtl() {
  return (
    <div className="bg-background space-y-4 rounded-lg border p-6" dir="rtl">
      <p className="text-muted-foreground text-sm">شركاؤنا في المنصة</p>
      <InfiniteLogoScroll items={LOGOS} direction="right" />
    </div>
  )
}
