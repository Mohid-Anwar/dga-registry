"use client"

import { DirectionProvider } from "@/registry/dga/ui/direction"
import { Tabs, TabsList, TabsTrigger } from "@/registry/dga/ui/tabs"

function SampleTabs() {
  return (
    <Tabs defaultValue="one">
      <TabsList variant="line">
        <TabsTrigger value="one">١ الحساب</TabsTrigger>
        <TabsTrigger value="two">٢ كلمة المرور</TabsTrigger>
        <TabsTrigger value="three">٣ الإعدادات</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

/* ═══════════════════════════════════════════
   1 — dir attribute alone vs. with provider
═══════════════════════════════════════════ */
export function DirectionComparison() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="bg-background rounded-lg border p-6" dir="rtl">
        <p className="mb-1 text-xs font-semibold tracking-wide uppercase">
          {'dir="rtl"'} only
        </p>
        <p className="text-muted-foreground mb-4 text-sm">
          Tab ١ lands on the <strong>left</strong>. The component resolved its
          direction to <code>ltr</code> and stamped that on itself, overriding
          the wrapper.
        </p>
        <SampleTabs />
      </div>

      <DirectionProvider dir="rtl">
        <div className="bg-background rounded-lg border p-6" dir="rtl">
          <p className="mb-1 text-xs font-semibold tracking-wide uppercase">
            {'dir="rtl"'} + DirectionProvider
          </p>
          <p className="text-muted-foreground mb-4 text-sm">
            Tab ١ lands on the <strong>right</strong>, where an Arabic reader
            expects it. Arrow-key order follows the same resolved direction.
          </p>
          <SampleTabs />
        </div>
      </DirectionProvider>
    </div>
  )
}
