/**
 * Code samples for the Direction docs page.
 *
 * These live in a `.ts` file rather than inline in `page.mdx` because a blank
 * line inside a template literal terminates MDX's ESM block — everything after
 * it gets parsed as markdown and Prettier strips the indentation. Inline
 * `code={`...`}` is fine in MDX only when the snippet has no blank lines.
 */

export const rootLayoutSnippet = `import { DirectionProvider } from "@/components/ui/direction"

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <DirectionProvider dir="rtl">{children}</DirectionProvider>
      </body>
    </html>
  )
}`

export const useDirectionSnippet = `import { useDirection } from "@/components/ui/direction"

function BackButton() {
  const dir = useDirection()
  return <Icon name={dir === "rtl" ? "arrow-right" : "arrow-left"} />
}`
