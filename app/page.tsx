"use client";
import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";

import { Button } from "@/registry/dga/ui/button";
import { useDirection } from "@/registry/dga/ui/direction";

function MyComponent() {
  const direction = useDirection();
  return <div>Current direction: {direction}</div>;
}

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
        <Button>Click me</Button>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        {/* Example usage of Direction and Button from shadcn style */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[100px] relative">
          <h2 className="text-sm text-muted-foreground sm:pl-3 mb-2">
            shadcn style primitives
          </h2>
          <MyComponent />
        </div>
        {/* ...existing code... */}
      </main>
    </div>
  );
}
