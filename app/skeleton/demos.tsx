"use client"

import { Skeleton } from "@/registry/dga/ui/skeleton"

/* ═══════════════════════════════════════════
   1 — Basic Skeleton
═══════════════════════════════════════════ */
export function SkeletonBasic() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col gap-3">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — Card Skeleton
═══════════════════════════════════════════ */
export function SkeletonCard() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — Profile Skeleton
═══════════════════════════════════════════ */
export function SkeletonProfile() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   4 — Table Skeleton
═══════════════════════════════════════════ */
export function SkeletonTable() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="space-y-3">
        {/* Header */}
        <div className="flex gap-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[80px]" />
        </div>
        {/* Rows */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-4">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[80px]" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   5 — Form Skeleton
═══════════════════════════════════════════ */
export function SkeletonForm() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[60px]" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[80px]" />
          <Skeleton className="h-10 w-full" />
        </div>
        <Skeleton className="h-10 w-[100px]" />
      </div>
    </div>
  )
}
