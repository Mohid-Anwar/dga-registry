"use client"

import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/dga/ui/breadcrumb"

/* ═══════════════════════════════════════════
   1 — Default
═══════════════════════════════════════════ */
export function BreadcrumbDefault() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — With Custom Separator
═══════════════════════════════════════════ */
export function BreadcrumbCustomSeparator() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Portal</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Analytics</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Reports</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — Collapsed Path
═══════════════════════════════════════════ */
export function BreadcrumbCollapsed() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Knowledge Base</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Article</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

/* ═══════════════════════════════════════════
   4 — Multi-Line Labels
═══════════════════════════════════════════ */
/* Constrained width so the labels actually wrap — the point of the demo.
   BreadcrumbList already carries `flex-wrap wrap-break-word`. */
export function BreadcrumbLongLabels() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="border-border/60 max-w-xs rounded-md border border-dashed p-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Data Governance Portal</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Compliance Monitoring Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Monthly Summary</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <p className="text-muted-foreground mt-3 text-xs">
        The dashed box is a narrow container, included so the wrapping is
        actually visible.
      </p>
    </div>
  )
}

/* ═══════════════════════════════════════════
   5 — AsChild Link
═══════════════════════════════════════════ */
export function BreadcrumbAsChild() {
  return (
    <div className="bg-background rounded-lg border p-6">
      {/* `asChild` with a real router Link — these navigate client-side rather
          than doing a full page load, which a plain <a> would. */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/breadcrumb">Breadcrumb</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>As Child</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="text-muted-foreground mt-3 text-xs">
        These are real links — the first two navigate client-side via{" "}
        <code>next/link</code>.
      </p>
    </div>
  )
}

/* ═══════════════════════════════════════════
   6 — RTL Support
═══════════════════════════════════════════ */
export function BreadcrumbRtl() {
  return (
    <div className="bg-background rounded-lg border p-6" dir="rtl">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">الرئيسية</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">الخدمات</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>التقارير</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
