"use client"

import { StarIcon } from "@hugeicons/core-free-icons"
import { toast } from "sonner"

import { useIsMobile } from "@/hooks/use-mobile"
import { useToasterPosition } from "@/components/docs/toaster-position-context"
import { Button } from "@/registry/dga/ui/button"
import {
  showToast,
  toastError,
  toastInfo,
  toastNeutral,
  toastSuccess,
  toastWarning,
  type MobilePosition,
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

const MOBILE_POSITIONS: MobilePosition[] = ["top", "bottom"]

export function SonnerPositions() {
  const { position, setPosition, mobilePosition, setMobilePosition } =
    useToasterPosition()
  /* Same 768px breakpoint the Toaster itself uses to pick which position
     applies, so the disabled state always matches real behavior. */
  const isMobile = useIsMobile()

  return (
    <div className="bg-background space-y-4 rounded-lg border p-6">
      <div className="space-y-2">
        <p className="text-muted-foreground text-xs font-medium">
          Desktop position {isMobile && "(inactive at this width)"}
        </p>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
          {POSITIONS.map((pos) => (
            <Button
              key={pos}
              size="sm"
              disabled={isMobile}
              className="min-w-0 px-2 text-xs"
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
      </div>
      <div className="space-y-2">
        <p className="text-muted-foreground text-xs font-medium">
          Mobile position {!isMobile && "(inactive at this width)"}
        </p>
        <div className="grid grid-cols-2 gap-2">
          {MOBILE_POSITIONS.map((pos) => (
            <Button
              key={pos}
              size="sm"
              disabled={!isMobile}
              className="min-w-0 px-2 text-xs"
              variant={mobilePosition === pos ? "default" : "outline"}
              onClick={() => {
                if (pos !== mobilePosition) {
                  toast.dismiss()
                  setMobilePosition(pos)
                  setTimeout(
                    () => toastInfo(`Mobile position: ${pos}`, "Positioning"),
                    150
                  )
                } else {
                  toastInfo(`Mobile position: ${pos}`, "Positioning")
                }
              }}
            >
              {pos}
            </Button>
          ))}
        </div>
      </div>
      <div className="bg-muted rounded-md p-3">
        <code className="text-sm">{`<Toaster position="${position}" mobilePosition="${mobilePosition}" />`}</code>
      </div>
      <p className="text-muted-foreground text-xs">
        In RTL mode, left↔right positions are auto-flipped. Only one group
        applies at a time — resize across the mobile breakpoint (768px) and the
        other set becomes selectable.
      </p>
    </div>
  )
}

/* ═══════════════════════════════════════════
   6 — RTL Support
═══════════════════════════════════════════ */
export function SonnerRtl() {
  return (
    <div className="bg-background flex flex-wrap gap-3 rounded-lg border p-6">
      <Button
        className="bg-[var(--background-background-success)] text-white hover:bg-[var(--colors-green700)]"
        onClick={() => toastSuccess("تم حفظ التغييرات بنجاح.", "نجاح")}
      >
        نجاح
      </Button>
      <Button
        className="bg-[var(--background-background-error)] text-white hover:bg-[var(--colors-red700)]"
        onClick={() => toastError("حدث خطأ غير متوقع.", "خطأ")}
      >
        خطأ
      </Button>
      <Button
        className="bg-[var(--background-background-info)] text-white hover:bg-[var(--colors-blue700)]"
        onClick={() => toastInfo("يتوفر تحديث جديد.", "معلومات")}
      >
        معلومات
      </Button>
    </div>
  )
}
