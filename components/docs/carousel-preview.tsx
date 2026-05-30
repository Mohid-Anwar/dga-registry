export function CarouselPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex items-center justify-center px-12 py-12">
        {children}
      </div>
    </div>
  )
}
