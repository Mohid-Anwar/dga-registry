"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Tabs as TabsPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "px-[3px] border-b-2 border-b-[var(--colors-neutral200)] group-data-[orientation=horizontal]/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-full items-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col",
  {
    variants: {
      variant: {
        default: "bg-transparent justify-center",
        line: "gap-1 bg-transparent justify-start pb-1",
      },
      scrollable: {
        true: "overflow-x-auto overflow-y-hidden whitespace-nowrap justify-start pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        false: "",
      },
      snap: {
        true: "snap-x snap-mandatory scroll-smooth",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      scrollable: false,
      snap: false,
    },
  }
)

function TabsList({
  className,
  variant = "default",
  scrollable,
  snap,
  fadeEdges,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants> & {
    fadeEdges?: boolean
  }) {
  const ref = React.useRef<React.ElementRef<typeof TabsPrimitive.List>>(null)
  const [showLeft, setShowLeft] = React.useState(false)
  const [showRight, setShowRight] = React.useState(false)

  const updateFade = React.useCallback(() => {
    const el = ref.current
    if (!el) return
    setShowLeft(el.scrollLeft > 0)
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }, [])

  React.useEffect(() => {
    if (!fadeEdges) return
    const el = ref.current
    if (!el) return
    updateFade()
    el.addEventListener("scroll", updateFade)
    window.addEventListener("resize", updateFade)
    return () => {
      el.removeEventListener("scroll", updateFade)
      window.removeEventListener("resize", updateFade)
    }
  }, [fadeEdges, updateFade])

  return (
    <div className="relative w-full overflow-hidden">
      {fadeEdges && showLeft && (
        <div className="from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-8 bg-gradient-to-r to-transparent" />
      )}
      <TabsPrimitive.List
        ref={ref}
        data-slot="tabs-list"
        data-variant={variant}
        className={cn(
          tabsListVariants({ variant, scrollable, snap }),
          className
        )}
        {...props}
      />
      {fadeEdges && showRight && (
        <div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-8 bg-gradient-to-l to-transparent" />
      )}
    </div>
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-none snap-start items-center justify-center gap-1.5 border-0 bg-transparent px-3 py-1 text-sm font-medium whitespace-nowrap transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:bg-[color:var(--colors-neutral100)] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
        "data-[state=active]:text-foreground data-[state=active]:bg-transparent",
        "after:absolute after:right-3 after:-bottom-1 after:left-3 after:h-[2px] after:bg-[var(--colors-primary-s-a-flag700,#104631)] after:opacity-0 after:transition-opacity data-[state=active]:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
