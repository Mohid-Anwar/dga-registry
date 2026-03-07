"use client"

import { useState } from "react"
import { SidebarProvider, SidebarInset } from "@/registry/dga/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { AppHeader } from "@/components/sidebar/app-header"
import { CommandMenu } from "@/components/sidebar/command-menu"

type Component = {
  name: string
  slug: string
}

export function DocsShell({
  components,
  children,
  sidebarDefaultOpen = true,
}: {
  components: Component[]
  children: React.ReactNode
  sidebarDefaultOpen?: boolean
}) {
  const [open, setOpen] = useState(sidebarDefaultOpen)

  const handleOpenChange = (value: boolean) => {
    setOpen(value)
    document.cookie = `sidebar:open=${value}; path=/; max-age=${60 * 60 * 24 * 365}`
  }

  return (
    <SidebarProvider open={open} onOpenChange={handleOpenChange}>
      <CommandMenu components={components} />
      <AppSidebar components={components} />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto px-6 py-10">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}