"use client"

import * as React from "react"

import { Button } from "@/registry/dga/ui/button"
import { useDirection } from "@/registry/dga/ui/direction"

function MyComponent() {
  const direction = useDirection()
  return <div>Current direction: {direction}</div>
}

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-6xl flex-col gap-8 px-4 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-1 flex-col gap-8">
        {/* Direction Example */}
        <section className="flex flex-col gap-4 rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Direction</h2>
          <MyComponent />
        </section>

        {/* Primary Button Variants */}
        <section className="flex flex-col gap-4 rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Primary Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="default">Default</Button>
            <Button variant="default" disabled>
              Disabled
            </Button>
          </div>
        </section>

        {/* Danger Buttons */}
        <section className="flex flex-col gap-4 rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Danger Buttons</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              <Button variant="destructive">Danger Primary</Button>
              <Button variant="destructive" disabled>
                Disabled
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="destructive-secondary">Danger Secondary</Button>
              <Button variant="destructive-secondary" disabled>
                Disabled
              </Button>
            </div>
          </div>
        </section>

        {/* Neutral & Secondary Buttons */}
        <section className="flex flex-col gap-4 rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Secondary & Neutral</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary">Secondary</Button>
              <Button variant="secondary" disabled>
                Disabled
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline">Outline</Button>
              <Button variant="outline" disabled>
                Disabled
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost">Ghost</Button>
              <Button variant="ghost" disabled>
                Disabled
              </Button>
            </div>
          </div>
        </section>

        {/* Black & On-Color Buttons */}
        <section className="flex flex-col gap-4 rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Black & On-Color</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              <Button variant="black">Black Button</Button>
              <Button variant="black" disabled>
                Disabled
              </Button>
            </div>
            <div className="bg-button-primary-default rounded p-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="on-color">On Primary</Button>
                <Button variant="on-color" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Transparent Buttons */}
        <section className="flex flex-col gap-4 rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Transparent & Link</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              <Button variant="transparent">Transparent</Button>
              <Button variant="transparent" disabled>
                Disabled
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="link">Link Button</Button>
              <Button variant="link" disabled>
                Disabled
              </Button>
            </div>
          </div>
        </section>

        {/* Size Variants */}
        <section className="flex flex-col gap-4 rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Size Variants</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3 border-t pt-4">
            <Button size="icon-xs">S</Button>
            <Button size="icon-sm">M</Button>
            <Button size="icon">L</Button>
            <Button size="icon-lg">XL</Button>
          </div>
        </section>

        {/* Buttons with Icons */}
        <section className="flex flex-col gap-4 rounded-lg border p-4">
          <h2 className="text-lg font-semibold">With Icons & svgs</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="default">
              <svg
                className="size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Item
            </Button>
            <Button variant="secondary">
              Delete
              <svg
                className="size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </Button>
            <Button variant="outline" size="icon">
              <svg
                className="size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
