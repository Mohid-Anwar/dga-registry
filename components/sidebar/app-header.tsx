"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/registry/dga/ui/breadcrumb"
import { Separator } from "@/registry/dga/ui/separator"
import { SidebarTrigger } from "@/registry/dga/ui/sidebar"
import { Kbd } from "@/registry/dga/ui/kbd"
import { Toggle } from "@/registry/dga/ui/toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/dga/ui/tooltip"

export function AppHeader() {
  const pathname = usePathname()
  const [isDark, setIsDark] = useState(false)

  const segments = pathname.split("/").filter(Boolean)

  const format = (segment: string) =>
    segment
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ")

  // Stable reference — safe to use as useEffect dependency
  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle("dark", next)
      return next
    })
  }, [])

  // Sync initial state from DOM on mount
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
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

  return (
    <TooltipProvider>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />

        <Separator orientation="vertical" className="h-4" />

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">DGA Registry</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {segments.length > 0 && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{format(segments[0])}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-2">
          {/* Search hint */}
          <span className="hidden items-center gap-1 text-sm text-muted-foreground md:flex">
            Press <Kbd>⌘</Kbd><Kbd>K</Kbd> to search
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
                {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
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