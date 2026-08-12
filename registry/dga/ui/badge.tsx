import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border border-transparent font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline",
        /* ── DGA Chip variants ── */
        "chip-primary":
          "bg-(--background-background-primary50) text-(--text-text-primary-sa-flag) hover:bg-(--background-background-primary200) cursor-pointer",
        "chip-primary-active":
          "bg-(--background-background-primary50) border-(--background-background-nav-header) text-(--text-text-primary-sa-flag) cursor-pointer",
        "chip-primary-selected":
          "bg-(--background-background-primary) text-(--text-text-oncolor-primary) cursor-pointer",
        "chip-primary-pressed":
          "bg-(--background-background-primary400) text-(--button-button-background-primary-pressed) cursor-pointer",
        "chip-neutral":
          "bg-(--chip-chip-background-neutral-default) text-(--text-text-default) hover:bg-(--chip-chip-background-neutral-hovered) cursor-pointer",
        "chip-neutral-selected":
          "bg-(--chip-chip-background-neutral-selected) text-(--text-text-oncolor-primary) cursor-pointer",
        "chip-on-color":
          "bg-(--chip-chip-background-on-color-default) text-(--text-text-default) hover:bg-(--chip-chip-background-on-color-hovered) cursor-pointer",
        "chip-on-color-selected":
          "bg-(--chip-chip-background-on-color-selected) text-(--text-text-default) cursor-pointer",
        "chip-disabled":
          "bg-(--global-background-disabled) text-(--global-text-default-disabled) cursor-not-allowed",
      },
      size: {
        default: "px-2 py-0.5 text-xs gap-1",
        sm: "h-5 px-2.5 py-0 text-xs gap-1",
        md: "h-6 px-3 py-0 text-xs gap-1",
        lg: "h-8 px-3 py-0 text-base gap-1",
      },
      rounded: {
        full: "rounded-full",
        sm: "rounded-(--radius-radius4)",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "full",
    },
  }
)

function Badge({
  className,
  variant = "default",
  size,
  rounded,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant, size, rounded }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
