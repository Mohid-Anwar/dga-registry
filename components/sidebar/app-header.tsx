"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

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


export function AppHeader() {
  const pathname = usePathname()

  const segments = pathname
    .split("/")
    .filter(Boolean)

  const format = (segment: string) =>
    segment
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ")

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">

      <SidebarTrigger   className="-ml-1" />

      <Separator
        orientation="vertical"
        className="mr-2 h-4"
      />

      <Breadcrumb>
        <BreadcrumbList>

          {/* Root */}
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">DGA Registry</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {segments.length > 0 && (
            <>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>
                  {format(segments[0])}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}

        </BreadcrumbList>
      </Breadcrumb>
          <div className="ml-auto hidden text-muted-foreground md:block">
  Press ⌘K to search
</div>
    </header>
  )
}