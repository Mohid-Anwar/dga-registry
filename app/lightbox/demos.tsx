"use client"

import { useState } from "react"

import { Lightbox, type LightboxImage } from "@/registry/dga/ui/lightbox"

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

/* ═══════════════════════════════════════════
   1 — Basic Gallery
═══════════════════════════════════════════ */
export function LightboxBasic() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            className="overflow-hidden rounded-lg"
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.thumbnail}
              alt={image.alt}
              className="aspect-square w-full object-cover"
            />
          </button>
        ))}
      </div>

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
      <button
        type="button"
        className="overflow-hidden rounded-lg"
        onClick={() => setOpen(true)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={single[0].thumbnail}
          alt={single[0].alt}
          className="aspect-video w-full max-w-xs object-cover"
        />
      </button>

      <Lightbox
        images={single}
        open={open}
        index={0}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}
