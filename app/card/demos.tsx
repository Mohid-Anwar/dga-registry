"use client"

import {
  ArrowDown01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/registry/dga/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/dga/ui/card"

const IMG_BG =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80"
const IMG_SUBURBAN =
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"
const IMG_TRAFFIC =
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80"
const IMG_MOBILE =
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80"

/* ═══════════════════════════════════════════
   1 — Image Cards
═══════════════════════════════════════════ */
export function CardImage() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-amber-400">
          <img
            src={IMG_BG}
            alt="Background station"
            className="aspect-video w-full rounded-xl object-cover"
          />
          <CardContent>
            <CardTitle>Background</CardTitle>
            <CardDescription>
              Background stations are not influenced significantly by single
              sources but by an integrated contribution of all sources. (Colored
              Border)
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button size="sm">View More</Button>
          </CardFooter>
        </Card>

        <Card>
          <img
            src={IMG_SUBURBAN}
            alt="Suburban station"
            className="aspect-video w-full rounded-xl object-cover"
          />
          <CardContent>
            <CardTitle>Suburban</CardTitle>
            <CardDescription>
              Suburban station has been identified as located such that its
              pollution level is determined predominantly by emissions from
              nearby residential areas.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button size="sm">View More</Button>
          </CardFooter>
        </Card>

        <Card>
          <img
            src={IMG_TRAFFIC}
            alt="Traffic station"
            className="aspect-video w-full rounded-xl object-cover"
          />
          <CardContent>
            <CardTitle>Traffic</CardTitle>
            <CardDescription>
              Traffic stations have been identified as located such that its
              pollution level is determined predominantly by road traffic
              emissions.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button size="sm">View More</Button>
          </CardFooter>
        </Card>

        <Card>
          <img
            src={IMG_MOBILE}
            alt="Mobile station"
            className="aspect-video w-full rounded-xl object-cover"
          />
          <CardContent>
            <CardTitle>Mobile</CardTitle>
            <CardDescription>
              Industrial stations have been identified as located such that its
              pollution level is influenced predominantly by nearby industrial
              sources.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button size="sm">View More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — Compact Card
═══════════════════════════════════════════ */
export function CardCompact() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="flex-row items-center gap-3">
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            width={24}
            height={24}
            className="shrink-0 text-[var(--icon-icon-primary)]"
          />
          <CardContent className="min-w-0 flex-1 gap-0.5">
            <CardTitle className="text-sm leading-5 font-semibold">
              Card Title
            </CardTitle>
            <CardDescription className="text-xs leading-4">
              Card content placeholder text goes here
            </CardDescription>
          </CardContent>
          <HugeiconsIcon
            icon={ArrowDown01Icon}
            width={20}
            height={20}
            className="shrink-0 text-[var(--icon-icon-default400)]"
          />
        </Card>

        <Card className="flex-row items-center gap-3">
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            width={24}
            height={24}
            className="shrink-0 text-[var(--icon-icon-primary)]"
          />
          <CardContent className="min-w-0 flex-1 gap-0.5">
            <CardTitle className="text-sm leading-5 font-semibold">
              Card Title
            </CardTitle>
            <CardDescription className="text-xs leading-4">
              Card content placeholder text goes here
            </CardDescription>
          </CardContent>
          <HugeiconsIcon
            icon={ArrowDown01Icon}
            width={20}
            height={20}
            className="shrink-0 rotate-180 text-[var(--icon-icon-default400)]"
          />
        </Card>

        <Card disabled className="flex-row items-center gap-3">
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            width={24}
            height={24}
            className="shrink-0"
          />
          <CardContent className="min-w-0 flex-1 gap-0.5">
            <CardTitle className="text-sm leading-5 font-semibold">
              Card Title
            </CardTitle>
            <CardDescription className="text-xs leading-4">
              Card content placeholder text goes here
            </CardDescription>
          </CardContent>
          <HugeiconsIcon
            icon={ArrowDown01Icon}
            width={20}
            height={20}
            className="shrink-0"
          />
        </Card>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — Detail Card
═══════════════════════════════════════════ */
export function CardDetail() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <img
            src={IMG_BG}
            alt="Station image"
            className="aspect-video w-full rounded-xl object-cover"
          />
          <CardContent className="gap-4">
            <h2 className="text-2xl font-semibold text-[var(--text-text-display)]">
              Prince Sultan Humanity City
            </h2>
            <div className="flex flex-col gap-2">
              <CardTitle>Description</CardTitle>
              <CardDescription>
                Located In A Medical Compound Approximately 40km North From The
                Centre Of Riyadh
              </CardDescription>
            </div>
          </CardContent>
          <div className="flex flex-col gap-3">
            <Card className="gap-2 border shadow-none">
              <CardContent className="gap-1">
                <CardTitle className="text-sm font-bold">
                  Coordinates (Latitude/Longitude)
                </CardTitle>
                <CardDescription className="text-sm">
                  24.751314 , 46.868278
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="gap-2 border shadow-none">
              <CardContent className="gap-1">
                <CardTitle className="text-sm font-bold">Altitude</CardTitle>
                <CardDescription className="text-sm">579 m</CardDescription>
              </CardContent>
            </Card>
            <Card className="gap-2 border shadow-none">
              <CardContent className="gap-1">
                <CardTitle className="text-sm font-bold">
                  Kerb Distance
                </CardTitle>
                <CardDescription className="text-sm">--</CardDescription>
              </CardContent>
            </Card>
          </div>
        </Card>

        <Card>
          <img
            src={IMG_SUBURBAN}
            alt="Station image"
            className="aspect-video w-full rounded-xl object-cover"
          />
          <CardContent className="gap-4">
            <h2 className="text-2xl font-semibold text-[var(--text-text-display)]">
              Al Hair
            </h2>
            <div className="flex flex-col gap-2">
              <CardTitle>Description</CardTitle>
              <CardDescription>
                The Monitoring Station Is Situated Within A Purpose Built
                Self-Contained Air Conditioned Enclosure Located In The Arriyadh
                Development Authority Recreational Area
              </CardDescription>
            </div>
          </CardContent>
          <div className="flex flex-col gap-3">
            <Card className="gap-2 border shadow-none">
              <CardContent className="gap-1">
                <CardTitle className="text-sm font-bold">
                  Coordinates (Latitude/Longitude)
                </CardTitle>
                <CardDescription className="text-sm">
                  24.383322 , 46.897128
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="gap-2 border shadow-none">
              <CardContent className="gap-1">
                <CardTitle className="text-sm font-bold">Altitude</CardTitle>
                <CardDescription className="text-sm">498 m</CardDescription>
              </CardContent>
            </Card>
            <Card className="gap-2 border shadow-none">
              <CardContent className="gap-1">
                <CardTitle className="text-sm font-bold">
                  Kerb Distance
                </CardTitle>
                <CardDescription className="text-sm">--</CardDescription>
              </CardContent>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   4 — Selectable Card
═══════════════════════════════════════════ */
export function CardSelectable() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="flex-row items-center gap-3">
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            width={24}
            height={24}
            className="shrink-0 text-[var(--icon-icon-primary)]"
          />
          <CardContent className="min-w-0 flex-1 gap-0.5">
            <CardTitle className="text-sm leading-5 font-semibold">
              Card Title
            </CardTitle>
            <CardDescription className="text-xs leading-4">
              Card content placeholder text goes here
            </CardDescription>
          </CardContent>
          <CardAction>
            <input
              type="checkbox"
              className="size-4 rounded accent-[var(--controls-control-primary-checked)]"
            />
          </CardAction>
        </Card>

        <Card className="flex-row items-center gap-3 border-[var(--border-border-primary)]">
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            width={24}
            height={24}
            className="shrink-0 text-[var(--icon-icon-primary)]"
          />
          <CardContent className="min-w-0 flex-1 gap-0.5">
            <CardTitle className="text-sm leading-5 font-semibold">
              Card Title
            </CardTitle>
            <CardDescription className="text-xs leading-4">
              Card content placeholder text goes here
            </CardDescription>
          </CardContent>
          <CardAction>
            <input
              type="checkbox"
              defaultChecked
              className="size-4 rounded accent-[var(--controls-control-primary-checked)]"
            />
          </CardAction>
        </Card>

        <Card disabled className="flex-row items-center gap-3">
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            width={24}
            height={24}
            className="shrink-0"
          />
          <CardContent className="min-w-0 flex-1 gap-0.5">
            <CardTitle className="text-sm leading-5 font-semibold">
              Card Title
            </CardTitle>
            <CardDescription className="text-xs leading-4">
              Card content placeholder text goes here
            </CardDescription>
          </CardContent>
          <CardAction>
            <input type="checkbox" disabled className="size-4 rounded" />
          </CardAction>
        </Card>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   5 — Card with Actions
═══════════════════════════════════════════ */
export function CardActions() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <HugeiconsIcon
              icon={CheckmarkCircle02Icon}
              width={32}
              height={32}
              className="text-[var(--icon-icon-primary)]"
            />
          </CardHeader>
          <CardContent>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>
              Card content placeholder text goes here
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">
              Action
            </Button>
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <HugeiconsIcon
              icon={CheckmarkCircle02Icon}
              width={32}
              height={32}
              className="text-[var(--icon-icon-primary)]"
            />
          </CardHeader>
          <CardContent>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>
              Card content placeholder text goes here
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">
              Action
            </Button>
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>

        <Card disabled>
          <CardHeader>
            <HugeiconsIcon
              icon={CheckmarkCircle02Icon}
              width={32}
              height={32}
            />
          </CardHeader>
          <CardContent>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>
              Card content placeholder text goes here
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" disabled>
              Action
            </Button>
            <Button size="sm" disabled>
              Action
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   6 — Minimal Card
═══════════════════════════════════════════ */
export function CardMinimal() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="grid gap-6 sm:grid-cols-3">
        <Card>
          <CardContent>
            <CardTitle>Coordinates</CardTitle>
            <CardDescription>24.7136° N, 46.6753° E</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Altitude</CardTitle>
            <CardDescription>612 m</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Kerb Distance</CardTitle>
            <CardDescription>15 m</CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
