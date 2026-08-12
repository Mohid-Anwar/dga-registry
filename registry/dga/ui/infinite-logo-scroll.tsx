"use client"

import { useCallback, useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

export interface LogoItem {
  id: number
  image: string
  href: string
  alt?: string
  width?: number
  height?: number
}

interface InfiniteLogoScrollProps {
  items: LogoItem[]
  direction?: "left" | "right"
  /** Scroll speed in pixels per second */
  speedPxPerSec?: number
  /** Playback rate applied on hover, as a fraction of `speedPxPerSec` */
  hoverRate?: number
  className?: string
  /** Custom renderer for each logo image, e.g. to use `next/image` */
  renderImage?: (item: LogoItem) => React.ReactNode
}

function defaultRenderImage(item: LogoItem) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={item.image}
      alt={item.alt ?? ""}
      width={item.width ?? 240}
      height={item.height ?? 65}
      loading="lazy"
      decoding="async"
      className="h-full w-auto max-w-40 min-w-10 object-contain md:max-w-60 md:min-w-15"
    />
  )
}

export function InfiniteLogoScroll({
  items,
  direction = "left",
  speedPxPerSec = 50,
  hoverRate = 0.15,
  className,
  renderImage = defaultRenderImage,
}: InfiniteLogoScrollProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<Animation | null>(null)

  const basePx = Math.max(speedPxPerSec, 1)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Wait one frame for layout
    const frame = requestAnimationFrame(() => {
      const halfWidth = track.scrollWidth / 2
      if (halfWidth === 0) return

      const duration = (halfWidth / basePx) * 1000

      const anim = track.animate(
        [
          { transform: "translate3d(0,0,0)" },
          { transform: `translate3d(-${halfWidth}px,0,0)` },
        ],
        {
          duration,
          iterations: Infinity,
          easing: "linear",
          direction: direction === "right" ? "reverse" : "normal",
        }
      )

      animRef.current = anim
    })

    return () => {
      cancelAnimationFrame(frame)
      animRef.current?.cancel()
      animRef.current = null
    }
  }, [basePx, direction])

  const onPointerEnter = useCallback(
    (e: React.PointerEvent) => {
      if (e.pointerType === "mouse" && animRef.current)
        animRef.current.playbackRate = Math.max(hoverRate, 0)
    },
    [hoverRate]
  )
  const onPointerLeave = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && animRef.current)
      animRef.current.playbackRate = 1
  }, [])

  if (!items.length) return null

  return (
    <div
      dir="ltr"
      className={cn(
        "relative h-[calc(2.8125rem*1.05)] overflow-hidden md:h-[calc(4.0625rem*1.05)]",
        className
      )}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent" />

      <div ref={trackRef} className="flex h-full w-max will-change-transform">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex h-full items-center gap-6 pe-6 md:gap-10 md:pe-10"
            aria-hidden={copy === 1}
          >
            {items.map((item) => (
              <a
                key={`${copy}-${item.id}`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11.25 shrink-0 items-center transition-transform duration-300 hover:scale-105 md:h-16.25"
              >
                {renderImage(item)}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
