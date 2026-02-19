"use client"

import * as React from "react"

import { Button } from "@/registry/dga/ui/button"
import { useDirection } from "@/registry/dga/ui/direction"

function DirectionPreview() {
  const direction = useDirection()
  return (
    <div className="text-muted-foreground mb-4 text-sm">
      Current direction: <span className="font-mono">{direction}</span>
    </div>
  )
}

export default function ButtonDemo() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="mb-4 text-3xl font-bold">Button Component Demo</h1>
      <p className="text-muted-foreground mb-6 max-w-xl text-center">
        All variants of <span className="font-bold">Button</span> with
        documentation. The direction context is provided by{" "}
        <span className="font-mono">DirectionProvider</span> and can be accessed
        using <span className="font-mono">useDirection</span>.
      </p>
      <DirectionPreview />
      <div className="mb-8 grid w-full max-w-lg grid-cols-2 gap-4 md:grid-cols-3">
        <Button variant="default">Default</Button>
        <Button variant="default" disabled>
          Disabled
        </Button>
        <Button variant="destructive">Danger Primary</Button>
        <Button variant="destructive" disabled>
          Disabled
        </Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
        <Button variant="outline">Outline</Button>
        <Button variant="outline" disabled>
          Disabled
        </Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="ghost" disabled>
          Disabled
        </Button>
        <Button variant="black">Black Button</Button>
        <Button variant="black" disabled>
          Disabled
        </Button>
      </div>
      <div className="bg-muted w-full max-w-2xl rounded p-4 text-xs">
        <h2 className="mb-2 font-semibold">DirectionProvider Usage</h2>
        <pre className="bg-background overflow-x-auto rounded p-2">
          <code>{`import { DirectionProvider } from "@/registry/dga/ui/direction"

<html dir="rtl">
  <body>
    <DirectionProvider direction="rtl">
      {/* Your app content */}
    </DirectionProvider>
  </body>
</html>`}</code>
        </pre>
        <h2 className="mt-4 mb-2 font-semibold">useDirection Hook</h2>
        <pre className="bg-background overflow-x-auto rounded p-2">
          <code>{`import { useDirection } from "@/registry/dga/ui/direction"

function MyComponent() {
  const direction = useDirection()
  return <div>Current direction: {direction}</div>
}`}</code>
        </pre>
      </div>
    </div>
  )
}
