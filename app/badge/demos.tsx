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
        <Badge variant="chip-primary-active">Primary Active</Badge>
        <Badge variant="chip-primary-selected">Primary Selected</Badge>
        <Badge variant="chip-primary-pressed">Primary Pressed</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="chip-neutral">Neutral Chip</Badge>
        <Badge variant="chip-neutral-selected">Neutral Selected</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-3 rounded-lg bg-neutral-800 p-4">
        <Badge variant="chip-on-color">On Color</Badge>
        <Badge variant="chip-on-color-selected">On Color Selected</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="chip-disabled">Disabled Chip</Badge>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — Rounded
═══════════════════════════════════════════ */
export function BadgeRounded() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="secondary" rounded="full">
          Rounded Full
        </Badge>
        <Badge variant="secondary" rounded="sm">
          Rounded Small
        </Badge>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   4 — Sizes
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
   5 — With Icons
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
   6 — As Link
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
