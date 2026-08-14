"use client"

import { Tick02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Tag } from "@/registry/dga/ui/tag"

/* ═══════════════════════════════════════════
   1 — All Variants
═══════════════════════════════════════════ */
export function TagVariants() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-wrap items-center gap-3">
        <Tag variant="success">Success</Tag>
        <Tag variant="info">Info</Tag>
        <Tag variant="warning">Warning</Tag>
        <Tag variant="error">Error</Tag>
        <Tag variant="neutral">Neutral</Tag>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — Outline Variants
═══════════════════════════════════════════ */
export function TagOutlineVariants() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-wrap items-center gap-3">
        <Tag variant="success-outline">Success</Tag>
        <Tag variant="info-outline">Info</Tag>
        <Tag variant="warning-outline">Warning</Tag>
        <Tag variant="error-outline">Error</Tag>
        <Tag variant="neutral-outline">Neutral</Tag>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — On Color
═══════════════════════════════════════════ */
export function TagOnColor() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg bg-neutral-800 p-6">
      <Tag variant="on-color">On Color</Tag>
      <Tag variant="on-color-outline">On Color Outline</Tag>
    </div>
  )
}

/* ═══════════════════════════════════════════
   4 — Sizes
═══════════════════════════════════════════ */
export function TagSizes() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-wrap items-end gap-3">
        <Tag size="sm">Small</Tag>
        <Tag size="md">Medium</Tag>
        <Tag size="lg">Large</Tag>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   5 — Rounded
═══════════════════════════════════════════ */
export function TagRounded() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-wrap items-center gap-3">
        <Tag variant="info" rounded={false}>
          Rounded Off
        </Tag>
        <Tag variant="info" rounded>
          Rounded Full
        </Tag>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   6 — With Icons
═══════════════════════════════════════════ */
export function TagWithIcons() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-wrap items-center gap-3">
        <Tag variant="success">
          <HugeiconsIcon icon={Tick02Icon} /> Verified
        </Tag>
        <Tag variant="info-outline">
          <HugeiconsIcon icon={Tick02Icon} /> Active
        </Tag>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   7 — RTL Support
═══════════════════════════════════════════ */
export function TagRtl() {
  return (
    <div className="bg-background space-y-4 rounded-lg border p-6" dir="rtl">
      <div className="flex flex-wrap items-center gap-3">
        <Tag variant="success">مكتمل</Tag>
        <Tag variant="info">قيد المراجعة</Tag>
        <Tag variant="warning">تحذير</Tag>
        <Tag variant="error">مرفوض</Tag>
        <Tag variant="neutral">مسودة</Tag>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Tag variant="success">
          <HugeiconsIcon icon={Tick02Icon} /> موثّق
        </Tag>
        <Tag variant="info-outline">
          <HugeiconsIcon icon={Tick02Icon} /> نشط
        </Tag>
      </div>
    </div>
  )
}
