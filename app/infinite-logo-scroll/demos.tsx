"use client"

import { InformationCircleIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"

import {
  InfiniteLogoScroll,
  type LogoItem,
} from "@/registry/dga/ui/infinite-logo-scroll"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/dga/ui/popover"

const LOGOS: LogoItem[] = [
  {
    id: 1,
    image: "https://placehold.co/240x65.png?text=Acme",
    href: "#",
    alt: "Acme",
  },
  {
    id: 2,
    image: "https://placehold.co/240x65.png?text=Globex",
    href: "#",
    alt: "Globex",
  },
  {
    id: 3,
    image: "https://placehold.co/240x65.png?text=Initech",
    href: "#",
    alt: "Initech",
  },
  {
    id: 4,
    image: "https://placehold.co/240x65.png?text=Umbrella",
    href: "#",
    alt: "Umbrella",
  },
  {
    id: 5,
    image: "https://placehold.co/240x65.png?text=Soylent",
    href: "#",
    alt: "Soylent",
  },
  {
    id: 6,
    image: "https://placehold.co/240x65.png?text=Hooli",
    href: "#",
    alt: "Hooli",
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
            <code>next/image</code> or another framework&apos;s optimized
            image component.
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
            width={240}
            height={65}
            className="h-full w-auto max-w-40 min-w-10 object-contain md:max-w-60 md:min-w-15"
          />
        )}
      />
    </div>
  )
}
