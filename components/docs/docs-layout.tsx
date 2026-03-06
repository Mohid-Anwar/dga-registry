"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const sidebarNav = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", href: "/" },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Button", href: "/button" },
      { label: "Card", href: "/card" },
      { label: "Checkbox", href: "/checkbox" },
      { label: "Input", href: "/input" },
      { label: "Navigation Menu", href: "/navigation-menu" },
      { label: "Radio Group", href: "/radio-group" },
      { label: "Select", href: "/select" },
      { label: "Table", href: "/table" },
      { label: "Tabs", href: "/tabs" },
    ],
  },
]

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r bg-muted/40 md:block">
        <div className="sticky top-0 overflow-y-auto p-6">
          <Link href="/" className="text-lg font-bold tracking-tight">
            DGA Registry
          </Link>
          <nav className="mt-8 flex flex-col gap-6">
            {sidebarNav.map((section) => (
              <div key={section.title}>
                <h4 className="mb-1.5 text-sm font-semibold text-foreground/70">
                  {section.title}
                </h4>
                <div className="flex flex-col gap-0.5">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-muted",
                        pathname === item.href
                          ? "bg-muted font-medium text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="mx-auto max-w-3xl space-y-8 px-6 py-12">
          {children}
        </div>
      </main>
    </div>
  )
}
