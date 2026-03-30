"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight02Icon,
  Tick02Icon,
  ArrowDown01Icon,
  Download04Icon,
  FavouriteIcon,
  Loading03Icon,
  Mail01Icon,
  PencilEdit01Icon,
  PlusSignIcon,
  Search01Icon,
  Settings01Icon,
  Share01Icon,
  Delete02Icon,
  Upload04Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/registry/dga/ui/button"

/* ═══════════════════════════════════════════
   1 — All Variants (default + disabled)
═══════════════════════════════════════════ */
export function ButtonVariants() {
  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
        <Button  variant="default">Default</Button>
        <Button variant="default" disabled>Default Disabled</Button>

        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" disabled>Secondary Disabled</Button>

        <Button variant="outline">Outline</Button>
        <Button variant="outline" disabled>Outline Disabled</Button>

        <Button variant="destructive">Destructive</Button>
        <Button variant="destructive" disabled>Destructive Disabled</Button>

        <Button variant="destructive-secondary">Danger Secondary</Button>
        <Button variant="destructive-secondary" disabled>Danger Sec Disabled</Button>

        <Button variant="ghost">Ghost</Button>
        <Button variant="ghost" disabled>Ghost Disabled</Button>

        <Button variant="link">Link</Button>
        <Button variant="link" disabled>Link Disabled</Button>

        <Button variant="black">Black</Button>
        <Button variant="black" disabled>Black Disabled</Button>

        <Button variant="on-color">On-Color</Button>
        <Button variant="on-color" disabled>On-Color Disabled</Button>

        <Button variant="transparent">Transparent</Button>
        <Button variant="transparent" disabled>Transparent Disabled</Button>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — Sizes
═══════════════════════════════════════════ */
export function ButtonSizes() {
  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="flex flex-wrap items-end gap-3">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — Leading Icon
═══════════════════════════════════════════ */
export function ButtonLeadingIcon() {
  return (
    <div className="rounded-lg border bg-background p-6 space-y-6">
      <div className="flex flex-wrap items-end gap-3">
        <Button size="xs"><HugeiconsIcon icon={Mail01Icon} width={12} height={12}  /> Mail</Button>
        <Button size="sm"><HugeiconsIcon icon={Download04Icon} width={14} height={14}  /> Download</Button>
        <Button><HugeiconsIcon icon={Upload04Icon} width={16} height={16}  /> Upload</Button>
        <Button size="lg"><HugeiconsIcon icon={Search01Icon} width={18} height={18}  /> Search</Button>
      </div>
      <div className="flex flex-wrap items-end gap-3">
        <Button variant="default"><HugeiconsIcon icon={PlusSignIcon} width={16} height={16}  /> Add New</Button>
        <Button variant="secondary"><HugeiconsIcon icon={Settings01Icon} width={16} height={16}  /> Settings</Button>
        <Button variant="outline"><HugeiconsIcon icon={Share01Icon} width={16} height={16}  /> Share</Button>
        <Button variant="destructive"><HugeiconsIcon icon={Delete02Icon} width={16} height={16}  /> Delete</Button>
        <Button variant="destructive-secondary"><HugeiconsIcon icon={Delete02Icon} width={16} height={16}  /> Remove</Button>
        <Button variant="black"><HugeiconsIcon icon={ArrowRight02Icon} width={16} height={16}  /> Continue</Button>
        <Button variant="ghost"><HugeiconsIcon icon={PencilEdit01Icon} width={16} height={16}  /> Edit</Button>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   4 — Trailing Icon
═══════════════════════════════════════════ */
export function ButtonTrailingIcon() {
  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="flex flex-wrap items-end gap-3">
        <Button>Next <HugeiconsIcon icon={ArrowRight02Icon} width={16} height={16}  /></Button>
        <Button variant="secondary">Options <HugeiconsIcon icon={ArrowDown01Icon} width={16} height={16}  /></Button>
        <Button variant="outline">More <HugeiconsIcon icon={ArrowDown01Icon} width={16} height={16}  /></Button>
        <Button variant="ghost">Expand <HugeiconsIcon icon={ArrowDown01Icon} width={16} height={16}  /></Button>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   5 — Icon-Only Buttons
═══════════════════════════════════════════ */
export function ButtonIconOnly() {
  return (
    <div className="rounded-lg border bg-background p-6 space-y-6">
      {/* Size comparison */}
      <div className="flex flex-wrap items-end gap-4">
        <div className="flex flex-col items-center gap-1">
          <Button size="icon-xs" variant="default"><HugeiconsIcon icon={PlusSignIcon} width={12} height={12}  /></Button>
          <span className="text-muted-foreground text-[10px]">icon-xs</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Button size="icon-sm" variant="default"><HugeiconsIcon icon={PlusSignIcon} width={14} height={14}  /></Button>
          <span className="text-muted-foreground text-[10px]">icon-sm</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Button size="icon" variant="default"><HugeiconsIcon icon={PlusSignIcon} width={16} height={16}  /></Button>
          <span className="text-muted-foreground text-[10px]">icon</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Button size="icon-lg" variant="default"><HugeiconsIcon icon={PlusSignIcon} width={18} height={18}  /></Button>
          <span className="text-muted-foreground text-[10px]">icon-lg</span>
        </div>
      </div>

      {/* All variants */}
      <div className="flex flex-wrap items-center gap-3">
        <Button size="icon" variant="default"><HugeiconsIcon icon={PlusSignIcon} width={16} height={16}  /></Button>
        <Button size="icon" variant="secondary"><HugeiconsIcon icon={Settings01Icon} width={16} height={16}  /></Button>
        <Button size="icon" variant="outline"><HugeiconsIcon icon={Search01Icon} width={16} height={16}  /></Button>
        <Button size="icon" variant="destructive"><HugeiconsIcon icon={Delete02Icon} width={16} height={16}  /></Button>
        <Button size="icon" variant="destructive-secondary"><HugeiconsIcon icon={Cancel01Icon} width={16} height={16}  /></Button>
        <Button size="icon" variant="ghost"><HugeiconsIcon icon={PencilEdit01Icon} width={16} height={16}  /></Button>
        <Button size="icon" variant="black"><HugeiconsIcon icon={ArrowRight02Icon} width={16} height={16}  /></Button>
        <Button size="icon" variant="transparent"><HugeiconsIcon icon={FavouriteIcon} width={16} height={16}  /></Button>
      </div>

      {/* Disabled */}
      <div className="flex flex-wrap items-center gap-3">
        <Button size="icon" variant="default" disabled><HugeiconsIcon icon={PlusSignIcon} width={16} height={16}  /></Button>
        <Button size="icon" variant="secondary" disabled><HugeiconsIcon icon={Settings01Icon} width={16} height={16}  /></Button>
        <Button size="icon" variant="outline" disabled><HugeiconsIcon icon={Search01Icon} width={16} height={16}  /></Button>
        <Button size="icon" variant="destructive" disabled><HugeiconsIcon icon={Delete02Icon} width={16} height={16}  /></Button>
        <Button size="icon" variant="ghost" disabled><HugeiconsIcon icon={PencilEdit01Icon} width={16} height={16}  /></Button>
        <Button size="icon" variant="black" disabled><HugeiconsIcon icon={ArrowRight02Icon} width={16} height={16}  /></Button>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   6 — Loading State
═══════════════════════════════════════════ */
export function ButtonLoading() {
  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="flex flex-wrap items-end gap-3">
        <Button disabled><HugeiconsIcon icon={Loading03Icon} width={16} height={16} className="animate-spin"  /> Please wait</Button>
        <Button variant="secondary" disabled><HugeiconsIcon icon={Loading03Icon} width={16} height={16} className="animate-spin"  /> Loading</Button>
        <Button variant="outline" disabled><HugeiconsIcon icon={Loading03Icon} width={16} height={16} className="animate-spin"  /> Processing</Button>
        <Button size="icon" disabled><HugeiconsIcon icon={Loading03Icon} width={16} height={16} className="animate-spin"  /></Button>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   7 — Leading + Trailing Icons
═══════════════════════════════════════════ */
export function ButtonCombo() {
  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="flex flex-wrap items-end gap-3">
        <Button><HugeiconsIcon icon={Tick02Icon} width={16} height={16}  /> Confirm <HugeiconsIcon icon={ArrowRight02Icon} width={16} height={16}  /></Button>
        <Button variant="secondary"><HugeiconsIcon icon={Mail01Icon} width={16} height={16}  /> Send <HugeiconsIcon icon={ArrowRight02Icon} width={16} height={16}  /></Button>
        <Button variant="outline"><HugeiconsIcon icon={Download04Icon} width={16} height={16}  /> Export <HugeiconsIcon icon={ArrowDown01Icon} width={16} height={16}  /></Button>
      </div>
    </div>
  )
}
