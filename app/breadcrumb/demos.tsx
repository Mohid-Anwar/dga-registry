"use client"

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
export function BreadcrumbLongLabels() {
  return (
    <div className="bg-background rounded-lg border p-6">
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
  )
}

/* ═══════════════════════════════════════════
   5 — AsChild Link
═══════════════════════════════════════════ */
export function BreadcrumbAsChild() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a href="#">Home</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a href="#">Settings</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Preferences</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
