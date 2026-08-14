"use client"

import * as React from "react"
import { ArrowLeft02Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/registry/dga/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/registry/dga/ui/carousel"
import { DirectionProvider } from "@/registry/dga/ui/direction"

/* ═══════════════════════════════════════════
   1 — Default
═══════════════════════════════════════════ */
export function CarouselDefault() {
  return (
    <Carousel className="w-full max-w-xs">
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
  return (
    <Carousel className="w-full max-w-sm">
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
  return (
    <Carousel
      opts={{ align: "start" }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
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
  /* `stopOnMouseEnter` pauses and resumes on its own — pairing a manual
     `stop()` with `reset()` never resumes, since `reset()` only restarts the
     timer while autoplay is still running. `stopOnInteraction: false` keeps
     the arrows from killing playback permanently. */
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      opts={{ loop: true }}
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
  const [api, setApi] = React.useState<CarouselApi>()
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
      <Carousel setApi={setApi} className="w-full max-w-xs">
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
  return (
    <Carousel className="w-full max-w-xs">
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

/* ═══════════════════════════════════════════
   7 — RTL Support
═══════════════════════════════════════════ */
export function CarouselRtl() {
  const slides = ["الأولى", "الثانية", "الثالثة", "الرابعة", "الخامسة"]

  return (
    <DirectionProvider dir="rtl">
      <div
        className="bg-background flex justify-center rounded-lg border p-6"
        dir="rtl"
      >
        <Carousel
          className="w-full max-w-xs"
          dir="rtl"
          opts={{ direction: "rtl" }}
        >
          <CarouselContent>
            {slides.map((label, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square flex-col items-center justify-center gap-2 p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        الشريحة {label}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </DirectionProvider>
  )
}
