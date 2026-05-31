"use client"

import { useState } from "react"
import { StarIcon } from "@hugeicons/core-free-icons"
import { toast } from "sonner"

import { useToasterPosition } from "@/components/docs/toaster-position-context"
import { Button } from "@/registry/dga/ui/button"
import {
  showToast,
  toastError,
  toastInfo,
  toastNeutral,
  toastSuccess,
  toastWarning,
  type Position,
} from "@/registry/dga/ui/sonner"

/* ═══════════════════════════════════════════
   1 — All Variants
═══════════════════════════════════════════ */
export function SonnerVariants() {
  return (
    <div className="bg-background flex flex-wrap gap-3 rounded-lg border p-6">
      <Button
        className="bg-[var(--background-background-error)] text-white hover:bg-[var(--colors-red700)]"
        onClick={() => toastError("Something went wrong.", "Error")}
      >
        Error
      </Button>
      <Button
        className="bg-[var(--background-background-warning)] text-white hover:bg-[var(--colors-yellow700)]"
        onClick={() => toastWarning("Please check your input.", "Warning")}
      >
        Warning
      </Button>
      <Button
        className="bg-[var(--background-background-success)] text-white hover:bg-[var(--colors-green700)]"
        onClick={() => toastSuccess("Changes saved successfully.", "Success")}
      >
        Success
      </Button>
      <Button
        className="bg-[var(--background-background-info)] text-white hover:bg-[var(--colors-blue700)]"
        onClick={() => toastInfo("A new update is available.", "Info")}
      >
        Info
      </Button>
      <Button
        className="bg-[var(--colors-neutral700)] text-white hover:bg-[var(--colors-neutral800)]"
        onClick={() => toastNeutral("You have 3 pending items.", "Neutral")}
      >
        Neutral
      </Button>
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — Without Title
═══════════════════════════════════════════ */
export function SonnerWithoutTitle() {
  return (
    <div className="bg-background flex flex-wrap gap-3 rounded-lg border p-6">
      <Button
        variant="default"
        onClick={() => toastSuccess("Your profile has been updated.")}
      >
        Success (no title)
      </Button>
      <Button
        variant="destructive"
        onClick={() => toastError("Failed to delete the record.")}
      >
        Error (no title)
      </Button>
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — Using showToast object
═══════════════════════════════════════════ */
export function SonnerShowToast() {
  return (
    <div className="bg-background flex flex-wrap gap-3 rounded-lg border p-6">
      <Button
        variant="outline"
        onClick={() => showToast.info("Using showToast.info()", "Shorthand")}
      >
        showToast.info()
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          showToast.warning("Using showToast.warning()", "Shorthand")
        }
      >
        showToast.warning()
      </Button>
    </div>
  )
}

/* ═══════════════════════════════════════════
   4 — Custom Icon
═══════════════════════════════════════════ */
export function SonnerCustomIcon() {
  return (
    <div className="bg-background flex flex-wrap gap-3 rounded-lg border p-6">
      <Button
        variant="secondary"
        onClick={() =>
          toastInfo("You earned a gold star!", "Achievement", {
            icon: StarIcon,
            iconType: "solid",
          })
        }
      >
        Custom Icon
      </Button>
    </div>
  )
}

/* ═══════════════════════════════════════════
   5 — Position Demo
═══════════════════════════════════════════ */
const POSITIONS: Position[] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
]

export function SonnerPositions() {
  const { position, setPosition } = useToasterPosition()

  return (
    <div className="bg-background space-y-4 rounded-lg border p-6">
      <div className="grid grid-cols-3 gap-2">
        {POSITIONS.map((pos) => (
          <Button
            key={pos}
            size="sm"
            variant={position === pos ? "default" : "outline"}
            onClick={() => {
              if (pos !== position) {
                toast.dismiss()
                setPosition(pos)
                setTimeout(
                  () => toastInfo(`Position: ${pos}`, "Positioning"),
                  150
                )
              } else {
                toastInfo(`Position: ${pos}`, "Positioning")
              }
            }}
          >
            {pos}
          </Button>
        ))}
      </div>
      <div className="bg-muted rounded-md p-3">
        <code className="text-sm">{`<Toaster position="${position}" />`}</code>
      </div>
      <p className="text-muted-foreground text-xs">
        In RTL mode, left↔right positions are auto-flipped. On mobile, position
        is always <code className="font-mono">bottom-center</code>.
      </p>
    </div>
  )
}
