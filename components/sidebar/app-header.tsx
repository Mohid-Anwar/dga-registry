"use client"

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Moon02Icon,
  Sun03Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { CopyPageMenu } from "@/components/docs/copy-page-menu"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/dga/ui/breadcrumb"
import { Button } from "@/registry/dga/ui/button"
import { Kbd } from "@/registry/dga/ui/kbd"
import { Separator } from "@/registry/dga/ui/separator"
import { SidebarTrigger } from "@/registry/dga/ui/sidebar"
import { useToasterOffset } from "@/registry/dga/ui/sonner"
import { Toggle } from "@/registry/dga/ui/toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/dga/ui/tooltip"

type Component = {
  name: string
  slug: string
}

/*
 * The theme's source of truth is the `dark` class on <html>, not React state —
 * so it's read as an external store rather than mirrored into state by a mount
 * effect, which would cascade an extra render on every page load.
 */
function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  })
  return () => observer.disconnect()
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark")
}

function getServerThemeSnapshot() {
  return false
}

/**
 * Arrow link to the neighbouring component page, or a disabled stub at either
 * end of the list so the pair never collapses and shifts the toolbar around.
 */
function NeighborLink({
  component,
  direction,
}: {
  component: Component | undefined
  direction: "previous" | "next"
}) {
  const icon = direction === "previous" ? ArrowLeft01Icon : ArrowRight01Icon

  if (!component) {
    return (
      <Button variant="ghost" size="icon-sm" disabled aria-hidden tabIndex={-1}>
        <HugeiconsIcon icon={icon} className="size-4" />
      </Button>
    )
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon-sm" asChild>
          <Link
            href={`/${component.slug}`}
            aria-label={`${direction}: ${component.name}`}
          >
            <HugeiconsIcon icon={icon} className="size-4" />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">{component.name}</TooltipContent>
    </Tooltip>
  )
}

export function AppHeader({ components = [] }: { components?: Component[] }) {
  const pathname = usePathname()
  const isDark = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  )
  const headerRef = useRef<HTMLElement>(null)
  const { setOffset } = useToasterOffset()

  const segments = pathname.split("/").filter(Boolean)
  const slug = segments.join("/")

  // Same order the sidebar lists them in, so the arrows walk it predictably.
  // -1 on non-component pages (installation, changelog, home) — no arrows there.
  const position = components.findIndex((component) => component.slug === slug)

  const format = (segment: string) =>
    segment
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ")

  // Stable reference — safe to use as useEffect dependency. Flipping the class
  // is the whole update; the store subscription above picks the change back up.
  const toggleTheme = useCallback(() => {
    document.documentElement.classList.toggle("dark")
  }, [])

  // Press D to toggle theme — effect only re-runs if toggleTheme changes (never)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName
      if (tag === "INPUT" || tag === "TEXTAREA") return
      if (e.key === "d" || e.key === "D") toggleTheme()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [toggleTheme])

  // Measure header height and set toaster offset
  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      setOffset(Math.round(entry.contentRect.height))
    })
    setOffset(el.offsetHeight)
    observer.observe(el)
    return () => {
      observer.disconnect()
      setOffset(0)
    }
  }, [setOffset])

  return (
    <TooltipProvider>
      <header
        ref={headerRef}
        className="flex h-16 shrink-0 items-center gap-2 border-b px-4"
      >
        <SidebarTrigger className="-ml-1" />

        <Separator orientation="vertical" className="h-4" />

        {/* `min-w-0` + `flex-nowrap` keep the trail on one line: BreadcrumbList
            wraps by default, which in a fixed `h-16` header pushes the text out
            of the bar entirely once the name is long. The root crumb is dropped
            below `lg` — the sidebar already says where you are, and through
            tablet widths the current page needs every pixel. `whitespace-nowrap`
            covers the rest: `flex-nowrap` stops the list wrapping, not the
            label inside it, which is what split "DGA / Registry" over two lines. */}
        <Breadcrumb className="min-w-0 flex-1">
          <BreadcrumbList className="flex-nowrap">
            <BreadcrumbItem className="hidden lg:inline-flex">
              <BreadcrumbLink asChild>
                <Link href="/" className="whitespace-nowrap">
                  DGA Registry
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {segments.length > 0 && (
              <>
                <BreadcrumbSeparator className="hidden lg:block" />
                <BreadcrumbItem className="min-w-0">
                  <BreadcrumbPage className="truncate">
                    {format(segments[0])}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Right side */}
        <div className="ms-auto flex shrink-0 items-center gap-2">
          {position !== -1 && (
            <div className="flex items-center">
              <NeighborLink
                component={components[position - 1]}
                direction="previous"
              />
              <NeighborLink
                component={components[position + 1]}
                direction="next"
              />
            </div>
          )}

          {segments.length > 0 && (
            <>
              <CopyPageMenu slug={slug} />
              <Separator
                orientation="vertical"
                className="hidden h-4 lg:block"
              />
            </>
          )}

          {/* Search hint — the most droppable thing here, so it's the first to
              go. Held back to `lg`: at exactly 768 it used to appear at the same
              moment as the root crumb and the Copy Page label, and the three
              together left nothing for the page title. */}
          <span className="text-muted-foreground hidden items-center gap-1 text-sm lg:flex">
            Press <Kbd>⌘</Kbd>
            <Kbd>K</Kbd> to search
          </span>

          <Separator orientation="vertical" className="hidden h-4 md:block" />

          {/* Theme toggle — tooltip shows the D shortcut */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                pressed={isDark}
                onPressedChange={toggleTheme}
                aria-label="Toggle theme"
                className="size-8 p-0"
              >
                {isDark ? (
                  <HugeiconsIcon icon={Moon02Icon} className="size-4" />
                ) : (
                  <HugeiconsIcon icon={Sun03Icon} className="size-4" />
                )}
              </Toggle>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p className="flex items-center gap-1.5">
                Toggle theme <Kbd>D</Kbd>
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </header>
    </TooltipProvider>
  )
}
