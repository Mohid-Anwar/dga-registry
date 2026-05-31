"use client"

import { useState } from "react"
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

export function AppSidebar({ components }: { components: Component[] }) {
  const pathname = usePathname()
  const [query, setQuery] = useState("")

  const filtered = components.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  )

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

      <SidebarContent
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 30px, black calc(100% - 60px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 60px, black calc(100% - 60px), transparent 100%)",
        }}
      >
        <SidebarGroup className="mt-5">
          <SidebarGroupLabel className="text-color-[var(--text-text-display)] font-bold">
            Getting Started
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"}>
                  <Link href="/">Introduction</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/changelog"}>
                  <Link href="/changelog">Changelog</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-[var(--text-text-display)]">
            Installation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/installation/nextjs"}
                >
                  <Link href="/installation/nextjs">Next.js</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/installation/vite"}
                >
                  <Link href="/installation/vite">Vite</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/installation/laravel"}
                >
                  <Link href="/installation/laravel">Laravel</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-[var(--text-text-display)]">
            Components
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filtered.map((component) => (
                <SidebarMenuItem key={component.slug}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === `/${component.slug}`}
                  >
                    <Link href={`/${component.slug}`}>{component.name}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
