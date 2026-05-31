"use client"

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react"
import {
  Alert01Icon,
  AlertCircleIcon,
  Cancel01Icon,
  CheckmarkCircle01Icon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Toaster as Sonner,
  toast,
  type ToasterProps as SonnerToasterProps,
} from "sonner"

import { useDirection } from "@/registry/dga/ui/direction"

// ─── Types ───────────────────────────────────────────────────────────────────

export type Position =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"

type ToastVariant = "error" | "warning" | "success" | "info" | "neutral"

// ─── Icon type ───────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconDefinition = any

// ─── Default icons per variant ───────────────────────────────────────────────

const DEFAULT_ICONS: Record<
  ToastVariant,
  { icon: IconDefinition; iconType: "solid" | "stroke" }
> = {
  error: { icon: AlertCircleIcon, iconType: "solid" },
  warning: { icon: Alert01Icon, iconType: "solid" },
  success: { icon: CheckmarkCircle01Icon, iconType: "solid" },
  info: { icon: InformationCircleIcon, iconType: "solid" },
  neutral: { icon: InformationCircleIcon, iconType: "stroke" },
}

// ─── Variant configuration (from Figma design tokens) ────────────────────────

interface VariantConfig {
  bg: string
  textColor: string
  borderHex: string
  borderOpacity: number
}

const VARIANT_CONFIG: Record<ToastVariant, VariantConfig> = {
  error: {
    bg: "#fef3f2",
    textColor: "#b42318",
    borderHex: "#d92d20",
    borderOpacity: 0.7,
  },
  warning: {
    bg: "#fffaeb",
    textColor: "#b54708",
    borderHex: "#dc6803",
    borderOpacity: 0.6,
  },
  success: {
    bg: "#ecfdf3",
    textColor: "#067647",
    borderHex: "#079455",
    borderOpacity: 0.6,
  },
  info: {
    bg: "#eff8ff",
    textColor: "#175cd3",
    borderHex: "#1570ef",
    borderOpacity: 0.6,
  },
  neutral: {
    bg: "#f9fafb",
    textColor: "#384250",
    borderHex: "#161616",
    borderOpacity: 0.6,
  },
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/** Flip left↔right when direction is RTL */
function flipPosition(pos: Position, dir: string): Position {
  if (dir !== "rtl") return pos
  const map: Partial<Record<Position, Position>> = {
    "top-left": "top-right",
    "top-right": "top-left",
    "bottom-left": "bottom-right",
    "bottom-right": "bottom-left",
  }
  return map[pos] ?? pos
}

// ─── Toast banner component ──────────────────────────────────────────────────

interface ToastBannerProps {
  id: string | number
  variant: ToastVariant
  title?: string
  message: string
  /** Override the default icon for this variant */
  icon?: IconDefinition
  /** Override the default icon type (`"solid"` or `"stroke"`) */
  iconType?: "solid" | "stroke"
  /** Override the default dismiss icon */
  dismissIcon?: IconDefinition
}

function ToastBanner({
  id,
  variant,
  title,
  message,
  icon,
  iconType,
  dismissIcon,
}: ToastBannerProps) {
  const cfg = VARIANT_CONFIG[variant]
  const defaults = DEFAULT_ICONS[variant]
  const borderColor = hexToRgba(cfg.borderHex, cfg.borderOpacity)

  const resolvedIcon = icon ?? defaults.icon
  const resolvedIconType = iconType ?? defaults.iconType
  const resolvedDismissIcon = dismissIcon ?? Cancel01Icon

  return (
    <div
      className="relative flex w-full items-center overflow-hidden rounded-[2px] px-6 py-2"
      style={{ backgroundColor: cfg.bg }}
      role="alert"
      aria-live="assertive"
    >
      <HugeiconsIcon
        icon={resolvedIcon}
        width={24}
        height={24}
        type={resolvedIconType}
        color={cfg.textColor}
        className="me-3 shrink-0"
      />

      <div className="flex min-h-10 min-w-0 flex-1 flex-wrap items-center gap-x-2 gap-y-0.5">
        {title && (
          <span
            className="shrink-0 text-base leading-6 font-bold whitespace-nowrap"
            style={{ color: cfg.textColor }}
          >
            {title}
          </span>
        )}
        <span
          className="text-base leading-6 font-normal"
          style={{ color: cfg.textColor }}
        >
          {message}
        </span>
      </div>

      <button
        onClick={() => toast.dismiss(id)}
        className="ms-3 flex shrink-0 cursor-pointer items-center justify-center rounded-sm p-1.5 transition-opacity hover:opacity-60"
        aria-label="Dismiss notification"
        type="button"
      >
        <HugeiconsIcon
          icon={resolvedDismissIcon}
          width={20}
          height={20}
          color={cfg.textColor}
        />
      </button>

      <div
        className="absolute right-0 bottom-0 left-0 h-0.5"
        style={{ backgroundColor: borderColor }}
      />
    </div>
  )
}

// ─── Typed toast helper functions ────────────────────────────────────────────

const DEFAULT_TITLE = ""
const DEFAULT_DURATION = 6000

interface ToastOptions {
  icon?: IconDefinition
  iconType?: "solid" | "stroke"
  dismissIcon?: IconDefinition
}

export function toastError(
  message: string,
  title = DEFAULT_TITLE,
  options?: ToastOptions
) {
  return toast.custom(
    (id) => (
      <ToastBanner
        id={id}
        variant="error"
        title={title}
        message={message}
        {...options}
      />
    ),
    { duration: DEFAULT_DURATION }
  )
}

export function toastWarning(
  message: string,
  title = DEFAULT_TITLE,
  options?: ToastOptions
) {
  return toast.custom(
    (id) => (
      <ToastBanner
        id={id}
        variant="warning"
        title={title}
        message={message}
        {...options}
      />
    ),
    { duration: DEFAULT_DURATION }
  )
}

export function toastSuccess(
  message: string,
  title = DEFAULT_TITLE,
  options?: ToastOptions
) {
  return toast.custom(
    (id) => (
      <ToastBanner
        id={id}
        variant="success"
        title={title}
        message={message}
        {...options}
      />
    ),
    { duration: DEFAULT_DURATION }
  )
}

export function toastInfo(
  message: string,
  title = DEFAULT_TITLE,
  options?: ToastOptions
) {
  return toast.custom(
    (id) => (
      <ToastBanner
        id={id}
        variant="info"
        title={title}
        message={message}
        {...options}
      />
    ),
    { duration: DEFAULT_DURATION }
  )
}

export function toastNeutral(
  message: string,
  title = DEFAULT_TITLE,
  options?: ToastOptions
) {
  return toast.custom(
    (id) => (
      <ToastBanner
        id={id}
        variant="neutral"
        title={title}
        message={message}
        {...options}
      />
    ),
    { duration: DEFAULT_DURATION }
  )
}

export const showToast = {
  error: toastError,
  warning: toastWarning,
  success: toastSuccess,
  info: toastInfo,
  neutral: toastNeutral,
}

// ─── Toaster offset context ──────────────────────────────────────────────────

interface ToasterOffsetContextValue {
  offset: number
  setOffset: (value: number) => void
}

const ToasterOffsetContext = createContext<ToasterOffsetContextValue>({
  offset: 0,
  setOffset: () => {},
})

/**
 * Wrap around <Toaster /> so child layouts can dynamically set the offset.
 */
function ToasterOffsetProvider({ children }: { children: React.ReactNode }) {
  const [offset, setOffset] = useState(0)
  return (
    <ToasterOffsetContext.Provider value={{ offset, setOffset }}>
      {children}
    </ToasterOffsetContext.Provider>
  )
}

/**
 * Hook to access toaster offset context.
 * Use to measure and set offset from any component (e.g. a header).
 */
function useToasterOffset() {
  return useContext(ToasterOffsetContext)
}

/**
 * Drop into any layout to set the toaster offset (e.g. header height).
 * Resets to 0 on unmount.
 */
function SetToasterOffset({ value }: { value: number }) {
  const { setOffset } = useToasterOffset()
  useEffect(() => {
    setOffset(value)
    return () => setOffset(0)
  }, [value, setOffset])
  return null
}

// ─── Mobile detection ────────────────────────────────────────────────────────

const MOBILE_BREAKPOINT = 768

const MOBILE_QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

function subscribeMobile(callback: () => void) {
  const mql = window.matchMedia(MOBILE_QUERY)
  mql.addEventListener("change", callback)
  return () => mql.removeEventListener("change", callback)
}

function getSnapshotMobile() {
  return window.matchMedia(MOBILE_QUERY).matches
}

function getServerSnapshotMobile() {
  return false
}

function useIsMobile() {
  return useSyncExternalStore(
    subscribeMobile,
    getSnapshotMobile,
    getServerSnapshotMobile
  )
}

// ─── Toaster provider ─────────────────────────────────────────────────────────

interface ToasterProps extends Omit<SonnerToasterProps, "position" | "dir"> {
  /**
   * Toast position (LTR). Left↔right auto-flipped in RTL.
   * On mobile this is overridden to "bottom-center".
   * @default "top-right"
   */
  position?: Position
}

const Toaster = ({ position = "top-right", ...props }: ToasterProps) => {
  const dir = useDirection()
  const { offset } = useContext(ToasterOffsetContext)
  const isMobile = useIsMobile()

  // Mobile → bottom-center, no offset
  const basePosition: Position = isMobile ? "bottom-center" : position
  const resolvedPosition = flipPosition(basePosition, dir)

  const resolvedOffset: SonnerToasterProps["offset"] | undefined = isMobile
    ? undefined
    : offset > 0 && resolvedPosition.startsWith("top")
      ? { top: `${offset}px` }
      : undefined

  const width = isMobile ? "calc(100% - 32px)" : "min(60%, 768px)"

  return (
    <Sonner
      dir={dir as SonnerToasterProps["dir"]}
      position={resolvedPosition}
      offset={resolvedOffset}
      style={
        {
          "--width": width,
        } as React.CSSProperties
      }
      toastOptions={{
        unstyled: true,
        style: { width: "100%" },
      }}
      {...props}
    />
  )
}

export { Toaster, ToasterOffsetProvider, SetToasterOffset, useToasterOffset }
export type { ToasterProps, ToastVariant }
