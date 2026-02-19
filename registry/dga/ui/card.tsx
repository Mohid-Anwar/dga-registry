import * as React from "react"

import { cn } from "@/lib/utils"

/* ──────────────────────────────────────────────
   Card – root container
   Figma specs:
     bg:      var(--background-background-card)
     border:  1px solid var(--border-border-neutral-primary)
     radius:  16px  (rounded-2xl)
     padding: 16px  (p-4)
     gap:     24px  (gap-6) between children
     shadow:  shadow-md
   ────────────────────────────────────────────── */
function Card({
  className,
  disabled,
  ...props
}: React.ComponentProps<"div"> & { disabled?: boolean }) {
  return (
    <div
      data-slot="card"
      data-disabled={disabled ? "" : undefined}
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border p-4 shadow-md",
        "transition-shadow",
        disabled &&
          "pointer-events-none border-[var(--border-border-disabled)] bg-[var(--global-background-disabled)] text-[var(--global-text-default-disabled)] opacity-50",
        className
      )}
      {...props}
    />
  )
}

/* ──────────────────────────────────────────────
   CardHeader
   Padding removed – Card itself owns the padding.
   ────────────────────────────────────────────── */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

/* ──────────────────────────────────────────────
   CardTitle
   Figma: Bold / 18px / line-height 28px / text-display color
   ────────────────────────────────────────────── */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-lg leading-7 font-bold text-[var(--text-text-display)]",
        className
      )}
      {...props}
    />
  )
}

/* ──────────────────────────────────────────────
   CardDescription
   Figma: Regular / 16px / line-height 24px / text-display color
   ────────────────────────────────────────────── */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-base leading-6 text-[var(--text-text-primary-paragraph)]",
        className
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

/* ──────────────────────────────────────────────
   CardContent
   No extra px – Card p-4 handles spacing consistently.
   ────────────────────────────────────────────── */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

/* ──────────────────────────────────────────────
   CardFooter
   Figma: Actions row with gap-4 (16px)
   ────────────────────────────────────────────── */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center gap-4 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
