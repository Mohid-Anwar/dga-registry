"use client"

import * as React from "react"
import {
  HelpCircleIcon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/registry/dga/ui/button"
import { DirectionProvider } from "@/registry/dga/ui/direction"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTitle,
  TooltipTrigger,
} from "@/registry/dga/ui/tooltip"

/* ═══════════════════════════════════════════
   1 — Basic Tooltip
═══════════════════════════════════════════ */
export function TooltipBasic() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>Last synced 2 minutes ago</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — Positions
═══════════════════════════════════════════ */
export function TooltipPositions() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <TooltipProvider>
        <div className="flex flex-col items-center gap-8 py-8">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={8}>
              Station status: online
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={8}>
              Station status: online
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={8}>
              Station status: online
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left" sideOffset={8}>
              Station status: online
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — Long Text (max-width wrap)
═══════════════════════════════════════════ */
export function TooltipLongText() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover for details</Button>
          </TooltipTrigger>
          <TooltipContent>
            Prince Sultan Humanity City station monitors PM2.5, PM10, NO₂, and
            O₃ levels, reporting hourly averages to the central network.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

/* ═══════════════════════════════════════════
   4 — With Title
═══════════════════════════════════════════ */
export function TooltipWithTitle() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="text-muted-foreground inline-flex items-center gap-1 text-sm"
            >
              PM2.5
              <HugeiconsIcon icon={HelpCircleIcon} className="size-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="flex items-start gap-2 text-left">
            <HugeiconsIcon icon={HelpCircleIcon} />
            <div className="flex flex-1 flex-col gap-2">
              <TooltipTitle>Particulate Matter 2.5</TooltipTitle>
              Fine particles 2.5 micrometers or smaller, measured in µg/m³.
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

/* ═══════════════════════════════════════════
   5 — On Icon Buttons
═══════════════════════════════════════════ */
export function TooltipOnIcons() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <TooltipProvider>
        <div className="flex items-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Station info">
                <HugeiconsIcon
                  icon={InformationCircleIcon}
                  className="size-4"
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>View station information</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  )
}

/* ═══════════════════════════════════════════
   6 — RTL Support
═══════════════════════════════════════════ */
export function TooltipRtl() {
  return (
    <DirectionProvider dir="rtl">
      <div className="bg-background rounded-lg border p-6" dir="rtl">
        <TooltipProvider>
          <div className="flex items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">مرّر للعرض</Button>
              </TooltipTrigger>
              <TooltipContent>آخر تحديث قبل دقيقتين</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" aria-label="معلومات">
                  <HugeiconsIcon
                    icon={InformationCircleIcon}
                    className="size-4"
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>عرض معلومات المحطة</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </DirectionProvider>
  )
}
