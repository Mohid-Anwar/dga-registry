"use client"

import { useAppDirection } from "@/components/direction-context"
import { Button } from "@/registry/dga/ui/button"

export function DirectionToggle() {
  const { direction, setDirection } = useAppDirection()

  return (
    <div className="flex gap-2">
      <Button
        variant={direction === "ltr" ? "default" : "outline"}
        size="sm"
        onClick={() => setDirection("ltr")}
      >
        LTR
      </Button>
      <Button
        variant={direction === "rtl" ? "default" : "outline"}
        size="sm"
        onClick={() => setDirection("rtl")}
      >
        RTL
      </Button>
    </div>
  )
}
