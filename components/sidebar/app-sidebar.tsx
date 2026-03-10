"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
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
import { useState } from "react"

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
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" asChild>
            <Link href="/">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-primary-foreground">
                <Image
                  src="/images/App Icon.png"
                  alt="DGA UI"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">DGA UI</span>
                <span className="text-xs text-muted-foreground">Documentation</span>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SearchForm onSearch={setQuery} />
      </SidebarHeader>

      <SidebarContent
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 30px, black calc(100% - 60px), transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 60px, black calc(100% - 60px), transparent 100%)",
        }}
      >
        <SidebarGroup className="mt-5">
          <SidebarGroupLabel className="font-bold text-color-[var(--text-text-display)]">Getting Started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"}>
                  <Link href="/">Introduction</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-[var(--text-text-display)]">Installation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/installation/nextjs"}>
                  <Link href="/installation/nextjs">Next.js</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/installation/vite"}>
                  <Link href="/installation/vite">Vite</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/installation/laravel"}>
                  <Link href="/installation/laravel">Laravel</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-[var(--text-text-display)]">Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filtered.map((component) => (
                <SidebarMenuItem key={component.slug}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === `/${component.slug}`}
                  >
                    <Link href={`/${component.slug}`}>
                      {component.name}
                    </Link>
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