"use client"

import {
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  Heart,
  Loader2,
  Mail,
  Pencil,
  Plus,
  Search,
  Settings,
  Share2,
  Trash2,
  Upload,
  X,
} from "lucide-react"

import { Button } from "@/registry/dga/ui/button"

/* ═══════════════════════════════════════════
   1 — All Variants (default + disabled)
═══════════════════════════════════════════ */
export function ButtonVariants() {
  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        <Button variant="default">Default</Button>
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
        <Button size="xs"><Mail width={12} height={12} /> Mail</Button>
        <Button size="sm"><Download width={14} height={14} /> Download</Button>
        <Button><Upload width={16} height={16} /> Upload</Button>
        <Button size="lg"><Search width={18} height={18} /> Search</Button>
      </div>
      <div className="flex flex-wrap items-end gap-3">
        <Button variant="default"><Plus width={16} height={16} /> Add New</Button>
        <Button variant="secondary"><Settings width={16} height={16} /> Settings</Button>
        <Button variant="outline"><Share2 width={16} height={16} /> Share</Button>
        <Button variant="destructive"><Trash2 width={16} height={16} /> Delete</Button>
        <Button variant="destructive-secondary"><Trash2 width={16} height={16} /> Remove</Button>
        <Button variant="black"><ArrowRight width={16} height={16} /> Continue</Button>
        <Button variant="ghost"><Pencil width={16} height={16} /> Edit</Button>
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
        <Button>Next <ArrowRight width={16} height={16} /></Button>
        <Button variant="secondary">Options <ChevronDown width={16} height={16} /></Button>
        <Button variant="outline">More <ChevronDown width={16} height={16} /></Button>
        <Button variant="ghost">Expand <ChevronDown width={16} height={16} /></Button>
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
          <Button size="icon-xs" variant="default"><Plus width={12} height={12} /></Button>
          <span className="text-muted-foreground text-[10px]">icon-xs</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Button size="icon-sm" variant="default"><Plus width={14} height={14} /></Button>
          <span className="text-muted-foreground text-[10px]">icon-sm</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Button size="icon" variant="default"><Plus width={16} height={16} /></Button>
          <span className="text-muted-foreground text-[10px]">icon</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Button size="icon-lg" variant="default"><Plus width={18} height={18} /></Button>
          <span className="text-muted-foreground text-[10px]">icon-lg</span>
        </div>
      </div>

      {/* All variants */}
      <div className="flex flex-wrap items-center gap-3">
        <Button size="icon" variant="default"><Plus width={16} height={16} /></Button>
        <Button size="icon" variant="secondary"><Settings width={16} height={16} /></Button>
        <Button size="icon" variant="outline"><Search width={16} height={16} /></Button>
        <Button size="icon" variant="destructive"><Trash2 width={16} height={16} /></Button>
        <Button size="icon" variant="destructive-secondary"><X width={16} height={16} /></Button>
        <Button size="icon" variant="ghost"><Pencil width={16} height={16} /></Button>
        <Button size="icon" variant="black"><ArrowRight width={16} height={16} /></Button>
        <Button size="icon" variant="transparent"><Heart width={16} height={16} /></Button>
      </div>

      {/* Disabled */}
      <div className="flex flex-wrap items-center gap-3">
        <Button size="icon" variant="default" disabled><Plus width={16} height={16} /></Button>
        <Button size="icon" variant="secondary" disabled><Settings width={16} height={16} /></Button>
        <Button size="icon" variant="outline" disabled><Search width={16} height={16} /></Button>
        <Button size="icon" variant="destructive" disabled><Trash2 width={16} height={16} /></Button>
        <Button size="icon" variant="ghost" disabled><Pencil width={16} height={16} /></Button>
        <Button size="icon" variant="black" disabled><ArrowRight width={16} height={16} /></Button>
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
        <Button disabled><Loader2 width={16} height={16} className="animate-spin" /> Please wait</Button>
        <Button variant="secondary" disabled><Loader2 width={16} height={16} className="animate-spin" /> Loading</Button>
        <Button variant="outline" disabled><Loader2 width={16} height={16} className="animate-spin" /> Processing</Button>
        <Button size="icon" disabled><Loader2 width={16} height={16} className="animate-spin" /></Button>
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
        <Button><Check width={16} height={16} /> Confirm <ArrowRight width={16} height={16} /></Button>
        <Button variant="secondary"><Mail width={16} height={16} /> Send <ArrowRight width={16} height={16} /></Button>
        <Button variant="outline"><Download width={16} height={16} /> Export <ChevronDown width={16} height={16} /></Button>
      </div>
    </div>
  )
}
