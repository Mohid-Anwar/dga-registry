"use client"

import { useState } from "react"

import { AppHeader } from "@/components/sidebar/app-header"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { CommandMenu } from "@/components/sidebar/command-menu"
import { SidebarInset, SidebarProvider } from "@/registry/dga/ui/sidebar"

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
      <SidebarInset className="min-w-0 overflow-hidden">
        <AppHeader />
        <main className="min-w-0 flex-1 overflow-x-hidden overflow-y-auto">
          <div className="mx-auto max-w-full px-6 py-10">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
