"use client"

import * as React from "react"
import {
  ArrowLeft02Icon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons"
import Autoplay from "embla-carousel-autoplay"

import { useAppDirection } from "@/components/direction-context"
import { Card, CardContent } from "@/registry/dga/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/dga/ui/carousel"

/* ═══════════════════════════════════════════
   1 — Default
═══════════════════════════════════════════ */
export function CarouselDefault() {
  const { direction } = useAppDirection()

  return (
    <Carousel className="w-full max-w-xs" dir={direction} opts={{ direction }}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

/* ═══════════════════════════════════════════
   2 — Multiple Items
═══════════════════════════════════════════ */
export function CarouselMultiple() {
  const { direction } = useAppDirection()

  return (
    <Carousel className="w-full max-w-sm" dir={direction} opts={{ direction }}>
      <CarouselContent className="-ms-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="ps-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

/* ═══════════════════════════════════════════
   3 — Vertical Orientation
═══════════════════════════════════════════ */
export function CarouselVertical() {
  const { direction } = useAppDirection()

  return (
    <Carousel opts={{ align: "start", direction }} orientation="vertical" className="w-full max-w-xs" dir={direction}>
      <CarouselContent className="-mt-1 h-[200px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

/* ═══════════════════════════════════════════
   4 — Autoplay
═══════════════════════════════════════════ */
export function CarouselAutoplay() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const { direction } = useAppDirection()

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      dir={direction}
      opts={{ direction }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

/* ═══════════════════════════════════════════
   5 — With API
═══════════════════════════════════════════ */
export function CarouselWithApi() {
  const { direction } = useAppDirection()
  const [api, setApi] = React.useState<any>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-w-xs" dir={direction} opts={{ direction }}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   6 — Custom Icons
═══════════════════════════════════════════ */
export function CarouselCustomIcons() {
  const { direction } = useAppDirection()

  return (
    <Carousel className="w-full max-w-xs" dir={direction} opts={{ direction }}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious icon={ArrowLeft02Icon} />
      <CarouselNext icon={ArrowRight02Icon} />
    </Carousel>
  )
}
