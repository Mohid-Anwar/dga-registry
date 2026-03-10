import { cookies } from "next/headers"
import { getUIComponents } from "@/lib/get-components"
import { DocsShell } from "@/components/docs/docs-shell"

export async function DocsLayout({ children }: { children: React.ReactNode }) {
  const components = getUIComponents()
  const cookieStore = await cookies()
  const sidebarOpen = cookieStore.get("sidebar:open")?.value !== "false"

  return (
    <DocsShell components={components} sidebarDefaultOpen={sidebarOpen}>
      {children}
    </DocsShell>
  )
}