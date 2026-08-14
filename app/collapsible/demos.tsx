"use client"

import * as React from "react"
import { ArrowDown01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/registry/dga/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/dga/ui/collapsible"

/* ═══════════════════════════════════════════
   1 — Basic Collapsible
═══════════════════════════════════════════ */
export function CollapsibleBasic() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <Collapsible className="w-full max-w-md">
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            Station Details
            <HugeiconsIcon
              icon={ArrowDown01Icon}
              className="size-4 transition-transform duration-200 [[data-state=open]_&]:rotate-180"
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 rounded-md border p-4 text-sm">
          Prince Sultan Humanity City station monitors PM2.5, PM10, NO₂, and O₃
          levels across the Riyadh region, reporting hourly averages to the
          central network.
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — FAQ List (multiple independent collapsibles)
═══════════════════════════════════════════ */
const FAQS = [
  {
    question: "How often is air quality data updated?",
    answer:
      "Station readings are refreshed every 15 minutes and hourly averages are published on the hour.",
  },
  {
    question: "What pollutants are monitored?",
    answer:
      "PM2.5, PM10, NO₂, SO₂, O₃, and CO are tracked across all background and traffic stations.",
  },
  {
    question: "Can I export historical data?",
    answer:
      "Yes — use the Data Query form to select a station, time range, and pollutant, then export as CSV.",
  },
]

export function CollapsibleFAQ() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col gap-2">
        {FAQS.map((faq) => (
          <Collapsible key={faq.question} className="rounded-md border">
            <CollapsibleTrigger asChild>
              <button
                type="button"
                className="flex w-full items-center justify-between p-4 text-start text-sm font-medium"
              >
                {faq.question}
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  className="text-muted-foreground size-4 shrink-0 transition-transform duration-200 [[data-state=open]_&]:rotate-180"
                />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="text-muted-foreground px-4 pb-4 text-sm">
              {faq.answer}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — Controlled Collapsible
═══════════════════════════════════════════ */
export function CollapsibleControlled() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="bg-background rounded-lg border p-6">
      <Collapsible
        open={open}
        onOpenChange={setOpen}
        className="w-full max-w-md"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Advanced Filters</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Hide" : "Show"}
          </Button>
        </div>
        <CollapsibleContent className="mt-3 flex flex-col gap-2 rounded-md border p-4 text-sm">
          <p>Region: Riyadh</p>
          <p>Station Type: Background</p>
          <p>Time Range: Last 7 Days</p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

/* ═══════════════════════════════════════════
   4 — Default Open
═══════════════════════════════════════════ */
export function CollapsibleDefaultOpen() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <Collapsible defaultOpen className="w-full max-w-md">
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            System Status
            <HugeiconsIcon
              icon={ArrowDown01Icon}
              className="size-4 transition-transform duration-200 [[data-state=open]_&]:rotate-180"
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 rounded-md border p-4 text-sm">
          All 24 monitoring stations are online. Last sync: 2 minutes ago.
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

/* ═══════════════════════════════════════════
   5 — RTL Support
═══════════════════════════════════════════ */
export function CollapsibleRtl() {
  return (
    <div className="bg-background rounded-lg border p-6" dir="rtl">
      <Collapsible defaultOpen className="w-full max-w-md">
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            تفاصيل المحطة
            <HugeiconsIcon
              icon={ArrowDown01Icon}
              className="size-4 transition-transform duration-200 [[data-state=open]_&]:rotate-180"
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 rounded-md border p-4 text-sm">
          ترصد محطة مدينة الأمير سلطان الإنسانية مستويات الجسيمات الدقيقة وثاني
          أكسيد النيتروجين والأوزون في منطقة الرياض، وتُبلّغ بالمعدلات كل ساعة.
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
