import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-button-primary-default text-primary-foreground hover:bg-button-primary-hovered active:bg-button-primary-pressed data-[state=open]:bg-button-primary-selected focus-visible:bg-button-primary-focused",
        destructive:
          "bg-button-danger-primary-default text-white hover:bg-button-danger-primary-hovered active:bg-button-danger-primary-pressed data-[state=open]:bg-button-danger-primary-selected focus-visible:bg-button-danger-primary-focused focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        "destructive-secondary":
          "bg-button-danger-secondary-default text-button-danger-primary-default hover:bg-button-danger-secondary-hovered active:bg-button-danger-secondary-pressed data-[state=open]:bg-button-danger-secondary-selected focus-visible:bg-button-danger-secondary-focused border border-border-error-light",
        outline:
          "border border-border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-button-neutral-default text-text-default hover:bg-button-neutral-hovered active:bg-button-neutral-pressed data-[state=open]:bg-button-neutral-selected focus-visible:bg-button-neutral-focused border border-border-neutral-primary",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        black:
          "bg-button-black-default text-white hover:bg-button-black-hovered active:bg-button-black-pressed data-[state=open]:bg-button-black-selected focus-visible:bg-button-black-focused",
        "on-color":
          "bg-button-oncolor-default text-text-default hover:bg-button-oncolor-hovered active:bg-button-oncolor-pressed data-[state=open]:bg-button-oncolor-selected focus-visible:bg-button-oncolor-focused",
        transparent:
          "bg-button-transparent-default hover:bg-button-transparent-hovered active:bg-button-transparent-pressed data-[state=open]:bg-button-transparent-selected focus-visible:bg-button-transparent-focused text-primary",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
