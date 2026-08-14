"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { DirectionProvider } from "@/registry/dga/ui/direction"
import { Lightbox, type LightboxImage } from "@/registry/dga/ui/lightbox"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/dga/ui/tooltip"

const images: LightboxImage[] = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&q=80",
    alt: "Mountain landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&q=80",
    alt: "Forest path",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&q=80",
    alt: "Mountain lake",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&q=80",
    alt: "Sunlit forest",
  },
]

/**
 * Clickable thumbnail. The tooltip is what tells a reader the image opens the
 * overlay — nothing else about a static thumbnail says so.
 */
function Thumbnail({
  image,
  hint,
  imageClassName,
  onClick,
}: {
  image: LightboxImage
  hint: string
  imageClassName?: string
  onClick: () => void
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="cursor-pointer overflow-hidden rounded-lg transition-opacity hover:opacity-90"
          onClick={onClick}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.thumbnail}
            alt={image.alt}
            className={cn("aspect-square w-full object-cover", imageClassName)}
          />
        </button>
      </TooltipTrigger>
      <TooltipContent>{hint}</TooltipContent>
    </Tooltip>
  )
}

/* ═══════════════════════════════════════════
   1 — Basic Gallery
═══════════════════════════════════════════ */
export function LightboxBasic() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <div className="bg-background rounded-lg border p-6">
      <TooltipProvider>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {images.map((image, i) => (
            <Thumbnail
              key={image.src}
              image={image}
              hint="Click to open"
              onClick={() => {
                setIndex(i)
                setOpen(true)
              }}
            />
          ))}
        </div>
      </TooltipProvider>

      <Lightbox
        images={images}
        open={open}
        index={index}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — Single Image
═══════════════════════════════════════════ */
export function LightboxSingleImage() {
  const [open, setOpen] = useState(false)
  const single = [images[0]]

  return (
    <div className="bg-background rounded-lg border p-6">
      <TooltipProvider>
        <Thumbnail
          image={single[0]}
          hint="Click to open"
          imageClassName="aspect-video w-full max-w-xs"
          onClick={() => setOpen(true)}
        />
      </TooltipProvider>

      <Lightbox
        images={single}
        open={open}
        index={0}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — RTL Support
═══════════════════════════════════════════ */
const imagesAr: LightboxImage[] = [
  { ...images[0], alt: "منظر جبلي" },
  { ...images[1], alt: "ممر في الغابة" },
  { ...images[2], alt: "بحيرة جبلية" },
  { ...images[3], alt: "غابة مضاءة بالشمس" },
]

export function LightboxRtl() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    /* Tooltip resolves direction from context, so the provider is what makes
       its arrow and offset mirror — the wrapper's `dir` alone won't do it. */
    <DirectionProvider dir="rtl">
      <div className="bg-background rounded-lg border p-6" dir="rtl">
        <p className="text-muted-foreground mb-3 text-sm">
          اختر صورة لعرضها بالحجم الكامل.
        </p>
        <TooltipProvider>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {imagesAr.map((image, i) => (
              <Thumbnail
                key={image.src}
                image={image}
                hint="اضغط للعرض"
                onClick={() => {
                  setIndex(i)
                  setOpen(true)
                }}
              />
            ))}
          </div>
        </TooltipProvider>

        <Lightbox
          images={imagesAr}
          open={open}
          index={index}
          onClose={() => setOpen(false)}
        />
      </div>
    </DirectionProvider>
  )
}
