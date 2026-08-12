import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tagVariants = cva(
  "inline-flex items-center justify-center gap-1 border whitespace-nowrap shrink-0 [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        success:
          "bg-(--tag-tag-background-success-light) border-(--tag-tag-border-success-light) text-(--tag-tag-text-success)",
        "success-outline":
          "bg-transparent border-(--tag-tag-border-success) text-(--tag-tag-text-success)",
        info: "bg-(--tag-tag-background-info-light) border-(--tag-tag-border-info-light) text-(--tag-tag-text-info)",
        "info-outline":
          "bg-transparent border-(--tag-tag-border-info) text-(--tag-tag-text-info)",
        warning:
          "bg-(--tag-tag-background-warning-light) border-(--tag-tag-border-warning-light) text-(--tag-tag-text-warning)",
        "warning-outline":
          "bg-transparent border-(--tag-tag-border-warning) text-(--tag-tag-text-warning)",
        error:
          "bg-(--tag-tag-background-error-light) border-(--tag-tag-border-error-light) text-(--tag-tag-text-error)",
        "error-outline":
          "bg-transparent border-(--tag-tag-border-error) text-(--tag-tag-text-error)",
        neutral:
          "bg-(--tag-tag-background-neutral-light) border-(--border-border-neutral-secondary) text-(--tag-tag-text-neutral)",
        "neutral-outline":
          "bg-transparent border-(--tag-tag-border-neutral) text-(--tag-tag-text-neutral)",
        "on-color":
          "bg-(--tag-tag-background-on-color) border-transparent text-(--text-text-oncolor-primary)",
        "on-color-outline":
          "bg-transparent border-(--tag-tag-border-on-color) text-(--text-text-oncolor-primary)",
      },
      size: {
        sm: "h-5 px-2 text-[10px] leading-3.5 font-semibold [&>svg]:size-2.5",
        md: "h-6 px-2 text-xs font-medium [&>svg]:size-3.5",
        lg: "h-8 px-3 text-base font-medium [&>svg]:size-4.5",
      },
      rounded: {
        false: "rounded-(--radius-radius4)",
        true: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "success",
      size: "md",
      rounded: false,
    },
  }
)

function Tag({
  className,
  variant,
  size,
  rounded,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof tagVariants>) {
  return (
    <span
      data-slot="tag"
      className={cn(tagVariants({ variant, size, rounded }), className)}
      {...props}
    />
  )
}

export { Tag, tagVariants }
