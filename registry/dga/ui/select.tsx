"use client"

import * as React from "react"
import {
  ArrowDown01Icon,
  ArrowUp01Icon,
  Tick01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Select as SelectPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

import "@/styles/select.css"

/*
 * Select — Wrapper that fixes Radix's controlled/uncontrolled & placeholder issues:
 * ─────────────────────────────────────────────────────────────────────────────────
 * Problem: Radix renders a hidden native <select> when `name` is provided.
 * Toggling its value between undefined ↔ string triggers React's
 * "switching controlled to uncontrolled" warning. The placeholder sentinel
 * value (`__placeholder__`) also leaks into form submissions.
 *
 * Solution (ref: https://github.com/shadcn-ui/ui/issues/2054):
 * 1. Intercept `name` — render our own <input type="hidden"> with the clean value.
 *    Radix never receives `name`, so it never renders its hidden native <select>.
 * 2. Pass `value ?? undefined` to Radix — keeps it always controlled when
 *    consumer passes a string (including ""). Radix shows the placeholder
 *    from SelectValue when no SelectItem matches the current value.
 * 3. Strip SELECT_PLACEHOLDER_VALUE in onValueChange — consumers always
 *    receive "" for empty, never the sentinel.
 */
function Select({
  onValueChange,
  value,
  name,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return (
    <>
      {name && (
        <input type="hidden" name={name} value={(value as string) ?? ""} />
      )}
      <SelectPrimitive.Root
        data-slot="select"
        value={(value as string) ?? undefined}
        onValueChange={(newValue) => {
          onValueChange?.(newValue === SELECT_PLACEHOLDER_VALUE ? "" : newValue)
        }}
        {...props}
      />
    </>
  )
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

/*
 * SelectTrigger — Open-state behavior:
 * ─────────────────────────────────────
 * 1. Arrow icon rotates 180° on open via `[[data-state=open]_&]:rotate-180`
 * 2. Bottom underline animates from center dot → full-width 2px line on open.
 *    Uses `transition-all duration-300 ease-out` for smooth expansion.
 * 3. On error (`aria-invalid`), the underline shows permanently in red
 *    via `[[aria-invalid=true]_&]:w-full` + error color.
 *
 * Design ref: DGA Dropdown Input (Figma node 3534:50240)
 * The underline uses `--form-field-border-pressed` (open state) and
 * `--form-field-border-error` (aria-invalid/error state) tokens.
 */
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-fit items-center justify-between gap-2 rounded-[var(--radius-radius4,4px)] border border-[var(--form-field-border-default,#9DA4AE)] bg-[var(--form-field-background-default,#FFF)] px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          className="size-4 opacity-50 transition-transform duration-200 [[data-state=open]_&]:rotate-180"
        />
      </SelectPrimitive.Icon>
      {/* Animated bottom underline: dot → full-width line on open, red on error */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[var(--form-field-border-pressed,#0C111B)] transition-all duration-300 ease-out [[aria-invalid=true]_&]:w-full [[aria-invalid=true]_&]:bg-[var(--form-field-border-error,#B42318)] [[data-state=open]_&]:w-full"
      />
    </SelectPrimitive.Trigger>
  )
}

/*
 * SelectContent — Positioning & scroll behavior:
 * ───────────────────────────────────────────────
 * - `position="popper"` (default): Dropdown appears BELOW the trigger
 *   without overlapping it, unlike `item-aligned` which covers the trigger.
 * - `sideOffset={4}`: 4px gap between trigger and dropdown.
 * - `avoidCollisions` enabled (default): Radix flips to top when near
 *   viewport edge so the dropdown always has room to display items.
 * - `max-h` uses `--radix-select-content-available-height` (computed by Radix
 *   based on actual viewport space) so the dropdown never overflows the screen.
 * - `onCloseAutoFocus` prevented to avoid scroll jump on close.
 *
 * Scroll lock: Radix applies `data-scroll-locked` to <body> which hides
 * the page scrollbar. This is overridden globally in `globals.css`.
 * See the comment there for full explanation.
 *
 * Design ref: DGA Dropdown Input (Figma node 3534:50240)
 */
function SelectContent({
  className,
  children,
  position = "popper",
  align = "start",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 rtl:data-[side=left]:translate-x-1 rtl:data-[side=right]:-translate-x-1",
          className
        )}
        position={position}
        align={align}
        sideOffset={sideOffset}
        onCloseAutoFocus={(e) => e.preventDefault()}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 ps-2 pe-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span
        data-slot="select-item-indicator"
        className="absolute end-2 flex size-3.5 items-center justify-center"
      >
        <SelectPrimitive.ItemIndicator>
          <HugeiconsIcon icon={Tick01Icon} className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <HugeiconsIcon icon={ArrowUp01Icon} className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <HugeiconsIcon icon={ArrowDown01Icon} className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

/*
 * SelectPlaceholderItem — Reset option to return to unselected state:
 * ───────────────────────────────────────────────────────────────────
 * Radix Select does not natively support "un-selecting". To allow users
 * to revert to the placeholder, include this item in SelectContent.
 * The Select wrapper handles placeholder stripping automatically —
 * consumers receive "" when the placeholder item is selected.
 *
 * @example
 * const [value, setValue] = useState('');
 *
 * <Select name="color" value={value} onValueChange={setValue}>
 *   <SelectTrigger>
 *     <SelectValue placeholder="Select" />
 *   </SelectTrigger>
 *   <SelectContent>
 *     <SelectPlaceholderItem>Select</SelectPlaceholderItem>
 *     <SelectItem value="a">Option A</SelectItem>
 *     <SelectItem value="b">Option B</SelectItem>
 *   </SelectContent>
 * </Select>
 */
const SELECT_PLACEHOLDER_VALUE = "__placeholder__"

function SelectPlaceholderItem({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof SelectPrimitive.Item>, "value"> & {
  value?: string
}) {
  return (
    <SelectPrimitive.Item
      data-slot="select-placeholder-item"
      value={props.value ?? SELECT_PLACEHOLDER_VALUE}
      className={cn(
        "text-muted-foreground focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 ps-2 pe-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectPlaceholderItem,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SELECT_PLACEHOLDER_VALUE,
}
