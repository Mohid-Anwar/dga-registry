export function ComponentPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border bg-background p-6">{children}</div>
  )
}
