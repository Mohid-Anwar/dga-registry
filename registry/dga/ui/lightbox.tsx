"use client"

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react"
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Cancel01Icon,
  GridTableIcon,
  PauseIcon,
  PlayIcon,
  ZoomInAreaIcon,
  ZoomOutAreaIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { createPortal } from "react-dom"
import YarlLightbox, {
  type ControllerRef,
  type ZoomRef,
} from "yet-another-react-lightbox"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

import { cn } from "@/lib/utils"

import "@/styles/lightbox.css"

export interface LightboxImage {
  src: string
  thumbnail?: string
  alt?: string
}

interface LightboxProps {
  images: LightboxImage[]
  open: boolean
  index: number
  onClose: () => void
}

const subscribe = () => () => {}
const getSnapshot = () => true
const getServerSnapshot = () => false

export function Lightbox({
  images,
  open,
  index: initialIndex,
  onClose,
}: LightboxProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [currentZoom, setCurrentZoom] = useState(1)
  const [jumpTarget, setJumpTarget] = useState<number | null>(null)
  const [prevOpen, setPrevOpen] = useState(open)
  const [prevIndex, setPrevIndex] = useState(initialIndex)

  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )

  const controllerRef = useRef<ControllerRef>(null)
  const zoomRef = useRef<ZoomRef>(null)

  // Reset state when lightbox opens or index changes (state-during-render pattern)
  if (prevOpen !== open || (open && prevIndex !== initialIndex)) {
    setPrevOpen(open)
    setPrevIndex(initialIndex)
    if (open) {
      setCurrentIndex(initialIndex)
      setSidebarOpen(false)
      setCurrentZoom(1)
      setJumpTarget(null)
    }
  }

  // Execute the jump AFTER React has re-rendered with animation=0
  useEffect(() => {
    if (jumpTarget === null) return
    const ctrl = controllerRef.current
    if (!ctrl) return
    const delta = jumpTarget - currentIndex
    if (delta > 0) ctrl.next({ count: delta })
    else if (delta < 0) ctrl.prev({ count: Math.abs(delta) })
    setJumpTarget(null)
  }, [jumpTarget]) // eslint-disable-line react-hooks/exhaustive-deps

  const slides = useMemo(
    () => images.map((image) => ({ src: image.src, alt: image.alt })),
    [images]
  )

  const handleClose = useCallback(() => {
    setSidebarOpen(false)
    onClose()
  }, [onClose])

  // Sidebar zoom — drives YARL via the zoom ref. Reads current zoom from React
  // state, which is kept in sync via the on.zoom event below.
  const handleSidebarZoom = useCallback(() => {
    const z = zoomRef.current
    if (!z) return
    z.changeZoom(currentZoom > 1 ? 1 : 2)
  }, [currentZoom])

  const goToIndex = useCallback(
    (target: number) => {
      if (target === currentIndex) return
      setJumpTarget(target)
    },
    [currentIndex]
  )

  return (
    <>
      <YarlLightbox
        open={open}
        close={handleClose}
        index={initialIndex}
        slides={slides}
        controller={{ ref: controllerRef }}
        carousel={{ finite: images.length <= 1 }}
        animation={{
          fade: jumpTarget !== null ? 0 : 250,
          swipe: jumpTarget !== null ? 0 : 300,
          navigation: jumpTarget !== null ? 0 : undefined,
        }}
        plugins={images.length > 1 ? [Zoom, Slideshow] : [Zoom]}
        className={cn("dga-lightbox", sidebarOpen && "dga-lightbox--sidebar")}
        on={{
          view: ({ index }) => setCurrentIndex(index),
          zoom: ({ zoom }) => setCurrentZoom(zoom),
        }}
        zoom={{
          ref: zoomRef,
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        slideshow={{
          autoplay: false,
          delay: 3000,
        }}
        toolbar={{
          // 'zoom' is the slot identifier — the Zoom plugin replaces it with
          // ONE button rendered by render.buttonZoom below. Without listing
          // 'zoom' here, the plugin auto-prepends its TWO default buttons
          // (zoom-in + zoom-out magnifiers) → that's the "3 zooms" bug.
          buttons: [
            "zoom",
            ...(images.length > 1
              ? [
                  "slideshow" as const,
                  <button
                    key="grid-toggle"
                    type="button"
                    className="yarl__button"
                    onClick={() => setSidebarOpen(true)}
                    aria-label="Open thumbnails"
                  >
                    <HugeiconsIcon icon={GridTableIcon} size={24} />
                  </button>,
                ]
              : []),
            "close",
          ],
        }}
        render={{
          // Single zoom toggle. props.zoom is the source of truth here — no
          // extra state needed for THIS button. (The sidebar button mirrors
          // the same state via currentZoom.)
          buttonZoom: ({ zoom, zoomIn, zoomOut, disabled }) => (
            <button
              type="button"
              className="yarl__button"
              disabled={disabled}
              onClick={() => (zoom > 1 ? zoomOut() : zoomIn())}
              aria-label={zoom > 1 ? "Zoom out" : "Zoom in"}
            >
              <HugeiconsIcon
                icon={zoom > 1 ? ZoomOutAreaIcon : ZoomInAreaIcon}
                size={24}
              />
            </button>
          ),
          buttonPrev: images.length <= 1 ? () => null : undefined,
          buttonNext: images.length <= 1 ? () => null : undefined,
          iconPrev: () => (
            <HugeiconsIcon icon={ArrowLeft01Icon} size={24} color="#fff" />
          ),
          iconNext: () => (
            <HugeiconsIcon icon={ArrowRight01Icon} size={24} color="#fff" />
          ),
          iconClose: () => <HugeiconsIcon icon={Cancel01Icon} size={24} />,
          iconSlideshowPlay: () => <HugeiconsIcon icon={PlayIcon} size={24} />,
          iconSlideshowPause: () => (
            <HugeiconsIcon icon={PauseIcon} size={24} />
          ),
        }}
      />

      {/* Custom sidebar — portalled to <body>, renders ALL thumbnails (no virtualization) */}
      {mounted &&
        open &&
        sidebarOpen &&
        createPortal(
          <aside
            className="dga-lightbox-sidebar"
            aria-label="Image thumbnails"
            onPointerDown={(e) => e.stopPropagation()}
            onPointerMove={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <header className="dga-lightbox-sidebar__header">
              <button
                type="button"
                className="dga-lightbox-sidebar__btn"
                onClick={handleSidebarZoom}
                aria-label={currentZoom > 1 ? "Zoom out" : "Zoom in"}
              >
                <HugeiconsIcon
                  icon={currentZoom > 1 ? ZoomOutAreaIcon : ZoomInAreaIcon}
                  size={24}
                />
              </button>
              <button
                type="button"
                className="dga-lightbox-sidebar__btn"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close thumbnails"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={24} />
              </button>
            </header>

            <div className="dga-lightbox-sidebar__grid">
              {images.map((image, i) => (
                <button
                  key={image.thumbnail ?? image.src ?? i}
                  type="button"
                  className={cn(
                    "dga-lightbox-sidebar__thumb",
                    i === currentIndex && "dga-lightbox-sidebar__thumb--active"
                  )}
                  onClick={() => goToIndex(i)}
                  aria-label={`Show image ${i + 1} of ${images.length}`}
                  aria-current={i === currentIndex}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.thumbnail || image.src}
                    alt={image.alt ?? ""}
                  />
                </button>
              ))}
            </div>
          </aside>,
          document.body
        )}
    </>
  )
}
