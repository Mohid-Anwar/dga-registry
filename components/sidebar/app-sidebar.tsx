"use client"

import { useLayoutEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { SearchForm } from "@/components/sidebar/search-form"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/registry/dga/ui/sidebar"

type Component = {
  name: string
  slug: string
}

const navLabelClass =
  "text-muted-foreground/90 text-[11px] font-semibold tracking-wide uppercase"

const navLinkClass =
  "text-foreground/70 border-s-2 border-transparent hover:bg-muted/70 hover:text-foreground data-[active=true]:border-primary data-[active=true]:bg-primary/10 data-[active=true]:font-semibold data-[active=true]:text-accent-foreground"

const SIDEBAR_SCROLL_KEY = "sidebar:scroll"

export function AppSidebar({ components }: { components: Component[] }) {
  const pathname = usePathname()
  const [query, setQuery] = useState("")
  const scrollWrapperRef = useRef<HTMLDivElement>(null)

  const filtered = components.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  )

  // AppSidebar remounts on every route change (each page.mdx wraps itself in
  // <DocsLayout> rather than using a persistent Next.js layout), so the
  // scroll position has to be restored manually instead of surviving for free.
  useLayoutEffect(() => {
    const content = scrollWrapperRef.current?.querySelector<HTMLDivElement>(
      '[data-sidebar="content"]'
    )
    if (!content) return

    const saved = sessionStorage.getItem(SIDEBAR_SCROLL_KEY)
    if (saved) content.scrollTop = Number(saved)

    const handleScroll = () =>
      sessionStorage.setItem(SIDEBAR_SCROLL_KEY, String(content.scrollTop))

    content.addEventListener("scroll", handleScroll)
    return () => content.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#006838] to-[#004d2a]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M10 8L6 12L10 16"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M14 8L18 12L14 16"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">DGA Components</span>
                  <span className="text-muted-foreground text-xs">
                    Documentation
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm onSearch={setQuery} />
      </SidebarHeader>

      <div
        ref={scrollWrapperRef}
        className="relative flex min-h-0 flex-1 flex-col"
      >
        <SidebarContent className="pb-10">
          <SidebarGroup className="mt-5">
            <SidebarGroupLabel className={navLabelClass}>
              Getting Started
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/"}
                    className={navLinkClass}
                  >
                    <Link href="/">Introduction</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/changelog"}
                    className={navLinkClass}
                  >
                    <Link href="/changelog">Changelog</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className={navLabelClass}>
              Installation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/installation/nextjs"}
                    className={navLinkClass}
                  >
                    <Link href="/installation/nextjs">Next.js</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/installation/vite"}
                    className={navLinkClass}
                  >
                    <Link href="/installation/vite">Vite</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/installation/laravel"}
                    className={navLinkClass}
                  >
                    <Link href="/installation/laravel">Laravel</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className={navLabelClass}>
              Components
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {filtered.map((component) => (
                  <SidebarMenuItem key={component.slug}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === `/${component.slug}`}
                      className={navLinkClass}
                    >
                      <Link href={`/${component.slug}`}>{component.name}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <div className="from-sidebar pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b to-transparent" />
        <div className="from-sidebar pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t to-transparent" />
      </div>

      <SidebarRail />
    </Sidebar>
  )
}
