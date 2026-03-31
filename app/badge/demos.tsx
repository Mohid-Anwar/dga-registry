"use client"

import {
  Alert02Icon,
  ArrowRight02Icon,
  Cancel01Icon,
  InformationCircleIcon,
  StarIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Badge } from "@/registry/dga/ui/badge"

/* ═══════════════════════════════════════════
   1 — All Variants
═══════════════════════════════════════════ */
export function BadgeVariants() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link">Link</Badge>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — Chip Variants (DGA)
═══════════════════════════════════════════ */
export function BadgeChips() {
  return (
    <div className="bg-background space-y-4 rounded-lg border p-6">
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="chip-primary">Primary Chip</Badge>
        <Badge variant="chip-primary-selected">Primary Selected</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="chip-neutral">Neutral Chip</Badge>
        <Badge variant="chip-neutral-selected">Neutral Selected</Badge>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — Sizes
═══════════════════════════════════════════ */
export function BadgeSizes() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-wrap items-end gap-3">
        <Badge size="default">Default</Badge>
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   4 — With Icons
═══════════════════════════════════════════ */
export function BadgeWithIcons() {
  return (
    <div className="bg-background space-y-4 rounded-lg border p-6">
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="default">
          <HugeiconsIcon icon={Tick02Icon} width={12} height={12} /> Approved
        </Badge>
        <Badge variant="secondary">
          <HugeiconsIcon icon={InformationCircleIcon} width={12} height={12} />{" "}
          Info
        </Badge>
        <Badge variant="destructive">
          <HugeiconsIcon icon={Alert02Icon} width={12} height={12} /> Error
        </Badge>
        <Badge variant="outline">
          <HugeiconsIcon icon={StarIcon} width={12} height={12} /> Featured
        </Badge>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="default">
          Next <HugeiconsIcon icon={ArrowRight02Icon} width={12} height={12} />
        </Badge>
        <Badge variant="destructive">
          Remove <HugeiconsIcon icon={Cancel01Icon} width={12} height={12} />
        </Badge>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   5 — As Link
═══════════════════════════════════════════ */
export function BadgeAsLink() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-wrap items-center gap-3">
        <Badge asChild variant="default">
          <a href="#">Clickable</a>
        </Badge>
        <Badge asChild variant="secondary">
          <a href="#">Secondary Link</a>
        </Badge>
        <Badge asChild variant="outline">
          <a href="#">Outline Link</a>
        </Badge>
      </div>
    </div>
  )
}
