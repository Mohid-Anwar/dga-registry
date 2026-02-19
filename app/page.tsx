"use client"

import * as React from "react"

import { Button } from "@/registry/dga/ui/button"


export default function Home() {
  const [direction, setDirection] = React.useState("rtl")

  React.useEffect(() => {
    document.documentElement.setAttribute("dir", direction)
  }, [direction])

  // Button data
  const buttons = [
    { label: "Button", enabled: true },
    { label: "Button 2", enabled: false },
    { label: "Button 3", enabled: false },
    { label: "Button 4", enabled: false },
    { label: "Button 5", enabled: false },
    { label: "Button 6", enabled: false },
    { label: "Button 7", enabled: false },
    { label: "Button 8", enabled: false },
    { label: "Button 9", enabled: false },
    { label: "Button 10", enabled: false },
    { label: "Button 11", enabled: false },
    { label: "Button 12", enabled: false },
  ]

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <h1 className="mb-8 text-4xl font-bold">Welcome To DGA Components</h1>
      <div className="flex flex-col gap-6">
        {/* Button grid: 4 per row, 12 total */}
        <div className="grid w-full max-w-lg grid-cols-4 gap-4">
          {buttons.map((btn, idx) => (
            <Button
              key={btn.label}
              disabled={!btn.enabled}
              onClick={
                btn.enabled
                  ? () => (window.location.href = "/button")
                  : undefined
              }
              className="w-full"
            >
              {btn.label}
            </Button>
          ))}
        </div>
        {/* RTL/LTR Switch */}
        <div className="mt-8 flex gap-4">
          <Button
            variant={direction === "rtl" ? "default" : "outline"}
            onClick={() => setDirection("rtl")}
          >
            RTL
          </Button>
          <Button
            variant={direction === "ltr" ? "default" : "outline"}
            onClick={() => setDirection("ltr")}
          >
            LTR
          </Button>
        </div>
        {/* Demo Tabs Section */}
        
      </div>
    </div>
  )
}
