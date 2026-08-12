"use client"

import * as React from "react"
import { Tooltip as TooltipPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-(--tooltip-tooltip-background-light) text-(--tooltip-tooltip-text-paragraph-light) animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit max-w-[240px] origin-(--radix-tooltip-content-transform-origin) rounded-(--radius-radius4) p-2 text-xs text-balance [&_svg:not([data-slot=tooltip-arrow])]:size-[18px] [&_svg:not([data-slot=tooltip-arrow])]:shrink-0",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow
          data-slot="tooltip-arrow"
          className="bg-(--tooltip-tooltip-background-light) fill-(--tooltip-tooltip-background-light) z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

function TooltipTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="tooltip-title"
      className={cn(
        "text-(--tooltip-tooltip-text-heading-light) text-xs font-semibold",
        className
      )}
      {...props}
    />
  )
}

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipTitle,
  TooltipProvider,
}
