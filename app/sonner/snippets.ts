/**
 * Code samples for the Sonner docs page.
 *
 * These live in a `.ts` file rather than inline in `page.mdx` because a blank
 * line inside a template literal terminates MDX's ESM block — everything after
 * it gets parsed as markdown and Prettier strips the indentation. Inline
 * `code={`...`}` is fine in MDX only when the snippet has no blank lines.
 */

export const rootLayoutSnippet = `import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}`

export const triggerSnippet = `// Trigger a toast from any component
import { toastSuccess } from "@/components/ui/sonner"

toastSuccess("Changes saved successfully.", "Success")`

export const showToastSnippet = `import { showToast } from "@/components/ui/sonner"

showToast.error("Something went wrong.")
showToast.warning("Check your input.", "Warning")
showToast.success("Saved!", "Done")
showToast.info("Update available.")
showToast.neutral("3 pending items.")`

export const customIconSnippet = `import { StarIcon } from "@hugeicons/core-free-icons"

import { toastInfo } from "@/components/ui/sonner"

toastInfo("You earned a gold star!", "Achievement", {
  icon: StarIcon,
  iconType: "solid",
})`

export const positionPropSnippet = `<Toaster position="bottom-right" mobilePosition="top" />`

export const rtlLayoutSnippet = `import { DirectionProvider } from "@/components/ui/direction"
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <DirectionProvider dir="rtl">
          {children}
          <Toaster position="top-right" />
        </DirectionProvider>
      </body>
    </html>
  )
}`

export const toasterOffsetSnippet = `import {
  SetToasterOffset,
  Toaster,
  ToasterOffsetProvider,
} from "@/components/ui/sonner"

function Layout({ children }) {
  return (
    <ToasterOffsetProvider>
      <SetToasterOffset value={64} />
      {children}
      <Toaster />
    </ToasterOffsetProvider>
  )
}`

export const useToasterOffsetSnippet = `import { useEffect, useRef } from "react"

import { useToasterOffset } from "@/components/ui/sonner"

function AppHeader() {
  const headerRef = useRef<HTMLElement>(null)
  const { setOffset } = useToasterOffset()

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

  return <header ref={headerRef}>...</header>
}`
