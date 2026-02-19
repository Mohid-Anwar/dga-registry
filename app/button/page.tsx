"use client"

import * as React from "react"
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

import { useAppDirection } from "@/components/direction-context"
import { Button } from "@/registry/dga/ui/button"

export default function ButtonDemo() {
  const { direction, setDirection } = useAppDirection()

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12">
      {/* RTL/LTR Toggle */}
      <div className="mb-6 flex gap-4">
        <Button
          variant={direction === "rtl" ? "default" : "outline"}
          size="sm"
          onClick={() => setDirection("rtl")}
        >
          RTL
        </Button>
        <Button
          variant={direction === "ltr" ? "default" : "outline"}
          size="sm"
          onClick={() => setDirection("ltr")}
        >
          LTR
        </Button>
      </div>

      <h1 className="mb-2 text-3xl font-bold">Button Component Demo</h1>
      <p className="text-muted-foreground mb-10 max-w-2xl text-center">
        All variants and sizes of the <strong>Button</strong> component,
        including icon-only buttons and buttons with leading/trailing icons.
      </p>

      {/* ═══════════════════════════════════════════
          1 — All Variants (default + disabled)
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">1. Variants</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Each variant shown in its default and disabled state.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          <Button variant="default">Default</Button>
          <Button variant="default" disabled>
            Default Disabled
          </Button>

          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" disabled>
            Secondary Disabled
          </Button>

          <Button variant="outline">Outline</Button>
          <Button variant="outline" disabled>
            Outline Disabled
          </Button>

          <Button variant="destructive">Destructive</Button>
          <Button variant="destructive" disabled>
            Destructive Disabled
          </Button>

          <Button variant="destructive-secondary">Danger Secondary</Button>
          <Button variant="destructive-secondary" disabled>
            Danger Sec Disabled
          </Button>

          <Button variant="ghost">Ghost</Button>
          <Button variant="ghost" disabled>
            Ghost Disabled
          </Button>

          <Button variant="link">Link</Button>
          <Button variant="link" disabled>
            Link Disabled
          </Button>

          <Button variant="black">Black</Button>
          <Button variant="black" disabled>
            Black Disabled
          </Button>

          <Button variant="on-color">On-Color</Button>
          <Button variant="on-color" disabled>
            On-Color Disabled
          </Button>

          <Button variant="transparent">Transparent</Button>
          <Button variant="transparent" disabled>
            Transparent Disabled
          </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2 — Sizes
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">2. Sizes</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Text buttons in xs, sm, default, and lg sizes.
        </p>
        <div className="flex flex-wrap items-end gap-3">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3 — Buttons with Leading Icon
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">3. Leading Icon</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Icon placed before the label. Available in all sizes.
        </p>
        <div className="flex flex-wrap items-end gap-3">
          <Button size="xs">
            <Mail width={12} height={12} /> Mail
          </Button>
          <Button size="sm">
            <Download width={14} height={14} /> Download
          </Button>
          <Button>
            <Upload width={16} height={16} /> Upload
          </Button>
          <Button size="lg">
            <Search width={18} height={18} /> Search
          </Button>
        </div>

        <p className="text-muted-foreground mt-6 mb-3 text-sm">
          Leading icon across variants.
        </p>
        <div className="flex flex-wrap items-end gap-3">
          <Button variant="default">
            <Plus width={16} height={16} /> Add New
          </Button>
          <Button variant="secondary">
            <Settings width={16} height={16} /> Settings
          </Button>
          <Button variant="outline">
            <Share2 width={16} height={16} /> Share
          </Button>
          <Button variant="destructive">
            <Trash2 width={16} height={16} /> Delete
          </Button>
          <Button variant="destructive-secondary">
            <Trash2 width={16} height={16} /> Remove
          </Button>
          <Button variant="black">
            <ArrowRight width={16} height={16} /> Continue
          </Button>
          <Button variant="ghost">
            <Pencil width={16} height={16} /> Edit
          </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4 — Buttons with Trailing Icon
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">4. Trailing Icon</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Icon placed after the label — useful for dropdowns, navigation,
          expand/collapse, etc.
        </p>
        <div className="flex flex-wrap items-end gap-3">
          <Button>
            Next <ArrowRight width={16} height={16} />
          </Button>
          <Button variant="secondary">
            Options <ChevronDown width={16} height={16} />
          </Button>
          <Button variant="outline">
            More <ChevronDown width={16} height={16} />
          </Button>
          <Button variant="ghost">
            Expand <ChevronDown width={16} height={16} />
          </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5 — Icon-Only Buttons (all icon sizes)
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">5. Icon-Only Buttons</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Dedicated icon sizes: icon-xs (24px), icon-sm (32px), icon (36px),
          icon-lg (40px).
        </p>

        {/* Size comparison row */}
        <div className="mb-6 flex flex-wrap items-end gap-4">
          <div className="flex flex-col items-center gap-1">
            <Button size="icon-xs" variant="default">
              <Plus width={12} height={12} />
            </Button>
            <span className="text-muted-foreground text-[10px]">icon-xs</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Button size="icon-sm" variant="default">
              <Plus width={14} height={14} />
            </Button>
            <span className="text-muted-foreground text-[10px]">icon-sm</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Button size="icon" variant="default">
              <Plus width={16} height={16} />
            </Button>
            <span className="text-muted-foreground text-[10px]">icon</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Button size="icon-lg" variant="default">
              <Plus width={18} height={18} />
            </Button>
            <span className="text-muted-foreground text-[10px]">icon-lg</span>
          </div>
        </div>

        {/* Variant grid */}
        <p className="text-muted-foreground mb-3 text-sm">
          Icon buttons across variants (default icon size).
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="icon" variant="default">
            <Plus width={16} height={16} />
          </Button>
          <Button size="icon" variant="secondary">
            <Settings width={16} height={16} />
          </Button>
          <Button size="icon" variant="outline">
            <Search width={16} height={16} />
          </Button>
          <Button size="icon" variant="destructive">
            <Trash2 width={16} height={16} />
          </Button>
          <Button size="icon" variant="destructive-secondary">
            <X width={16} height={16} />
          </Button>
          <Button size="icon" variant="ghost">
            <Pencil width={16} height={16} />
          </Button>
          <Button size="icon" variant="black">
            <ArrowRight width={16} height={16} />
          </Button>
          <Button size="icon" variant="transparent">
            <Heart width={16} height={16} />
          </Button>
        </div>

        {/* Disabled icon buttons */}
        <p className="text-muted-foreground mt-6 mb-3 text-sm">
          Disabled icon buttons.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="icon" variant="default" disabled>
            <Plus width={16} height={16} />
          </Button>
          <Button size="icon" variant="secondary" disabled>
            <Settings width={16} height={16} />
          </Button>
          <Button size="icon" variant="outline" disabled>
            <Search width={16} height={16} />
          </Button>
          <Button size="icon" variant="destructive" disabled>
            <Trash2 width={16} height={16} />
          </Button>
          <Button size="icon" variant="ghost" disabled>
            <Pencil width={16} height={16} />
          </Button>
          <Button size="icon" variant="black" disabled>
            <ArrowRight width={16} height={16} />
          </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6 — Loading State
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">6. Loading / Spinner</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Use a spinning icon with <code className="text-xs">animate-spin</code>{" "}
          and disable the button.
        </p>
        <div className="flex flex-wrap items-end gap-3">
          <Button disabled>
            <Loader2 width={16} height={16} className="animate-spin" /> Please
            wait
          </Button>
          <Button variant="secondary" disabled>
            <Loader2 width={16} height={16} className="animate-spin" /> Loading
          </Button>
          <Button variant="outline" disabled>
            <Loader2 width={16} height={16} className="animate-spin" />{" "}
            Processing
          </Button>
          <Button size="icon" disabled>
            <Loader2 width={16} height={16} className="animate-spin" />
          </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7 — Combination (icon + text + icon)
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">
          7. Leading + Trailing Icons
        </h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Both a leading and trailing icon in one button.
        </p>
        <div className="flex flex-wrap items-end gap-3">
          <Button>
            <Check width={16} height={16} /> Confirm{" "}
            <ArrowRight width={16} height={16} />
          </Button>
          <Button variant="secondary">
            <Mail width={16} height={16} /> Send{" "}
            <ArrowRight width={16} height={16} />
          </Button>
          <Button variant="outline">
            <Download width={16} height={16} /> Export{" "}
            <ChevronDown width={16} height={16} />
          </Button>
        </div>
      </section>
    </div>
  )
}
