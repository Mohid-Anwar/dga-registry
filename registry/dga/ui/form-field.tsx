"use client"

import { HelpCircleIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { cn } from "@/lib/utils"

interface FormFieldProps {
  label: string
  name: string
  required?: boolean
  error?: string
  className?: string
  children: React.ReactNode
}

export function FormField({
  label,
  name,
  required,
  error,
  className,
  children,
}: FormFieldProps) {
  const errorId = `${name}-error`

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={name}
        className="flex gap-1 text-sm leading-5 font-semibold"
      >
        {required && (
          <span className="text-[var(--text-text-error,#B42318)]">*</span>
        )}
        <span className="text-foreground">{label}</span>
      </label>

      {children}

      {error && (
        <div
          id={errorId}
          role="alert"
          aria-live="polite"
          className="flex items-center gap-2 py-1"
        >
          <HugeiconsIcon
            icon={HelpCircleIcon}
            className="size-4 text-[var(--text-text-error,#B42318)]"
          />
          <p className="text-sm leading-5 text-[var(--text-text-error,#B42318)]">
            {error}
          </p>
        </div>
      )}
    </div>
  )
}
