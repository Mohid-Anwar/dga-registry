"use client"

import { DirectionProvider } from "@/registry/dga/ui/direction"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/dga/ui/tabs"

function DemoContent({ value }: { value: string }) {
  return (
    <div className="border-border bg-muted/30 text-muted-foreground mt-4 rounded-md border p-4 text-sm">
      Content for <span className="text-foreground font-semibold">{value}</span>{" "}
      tab.
    </div>
  )
}

/** One `TabsContent` panel per value, so the body actually swaps on tab change. */
function DemoPanels({ values }: { values: string[] }) {
  return (
    <>
      {values.map((value) => (
        <TabsContent key={value} value={value}>
          <DemoContent value={value} />
        </TabsContent>
      ))}
    </>
  )
}

const BASIC_TABS = ["account", "password", "settings", "fourth"]

const MANY_TABS = [
  "Account",
  "Password",
  "Security",
  "Notifications",
  "Billing",
  "Integrations",
  "API Keys",
  "Audit Log",
  "Account2",
  "Password2",
  "Security2",
  "Notifications2",
  "Billing2",
  "Integrations2",
  "API Keys2",
  "Audit Log2",
]

/* ═══════════════════════════════════════════
   1 — Default
═══════════════════════════════════════════ */
export function TabsDefault() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="fourth">Fourth</TabsTrigger>
      </TabsList>
      <DemoPanels values={BASIC_TABS} />
    </Tabs>
  )
}

/* ═══════════════════════════════════════════
   2 — Line
═══════════════════════════════════════════ */
export function TabsLine() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList variant="line">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="fourth">Fourth</TabsTrigger>
      </TabsList>
      <DemoPanels values={BASIC_TABS} />
    </Tabs>
  )
}

/* ═══════════════════════════════════════════
   3 — Default + Scrollable
═══════════════════════════════════════════ */
export function TabsDefaultScrollable() {
  return (
    <Tabs defaultValue="Account" className="w-full">
      <TabsList scrollable>
        {MANY_TABS.map((t) => (
          <TabsTrigger key={t} value={t}>
            {t}
          </TabsTrigger>
        ))}
      </TabsList>
      <DemoPanels values={MANY_TABS} />
    </Tabs>
  )
}

/* ═══════════════════════════════════════════
   4 — Line + Scrollable
═══════════════════════════════════════════ */
export function TabsLineScrollable() {
  return (
    <Tabs defaultValue="Account" className="w-full">
      <TabsList variant="line" scrollable>
        {MANY_TABS.map((t) => (
          <TabsTrigger key={t} value={t}>
            {t}
          </TabsTrigger>
        ))}
      </TabsList>
      <DemoPanels values={MANY_TABS} />
    </Tabs>
  )
}

/* ═══════════════════════════════════════════
   5 — Default + Scrollable + Snap
═══════════════════════════════════════════ */
export function TabsDefaultScrollableSnap() {
  return (
    <Tabs defaultValue="Account" className="w-full">
      <TabsList scrollable snap>
        {MANY_TABS.map((t) => (
          <TabsTrigger key={t} value={t}>
            {t}
          </TabsTrigger>
        ))}
      </TabsList>
      <DemoPanels values={MANY_TABS} />
    </Tabs>
  )
}

/* ═══════════════════════════════════════════
   6 — Line + Scrollable + Snap
═══════════════════════════════════════════ */
export function TabsLineScrollableSnap() {
  return (
    <Tabs defaultValue="Account" className="w-full">
      <TabsList variant="line" scrollable snap>
        {MANY_TABS.map((t) => (
          <TabsTrigger key={t} value={t}>
            {t}
          </TabsTrigger>
        ))}
      </TabsList>
      <DemoPanels values={MANY_TABS} />
    </Tabs>
  )
}

/* ═══════════════════════════════════════════
   7 — Default + Scrollable + Snap + FadeEdges
═══════════════════════════════════════════ */
export function TabsDefaultFadeEdges() {
  return (
    <Tabs defaultValue="Account" className="w-full">
      <TabsList scrollable snap fadeEdges>
        {MANY_TABS.map((t) => (
          <TabsTrigger key={t} value={t}>
            {t}
          </TabsTrigger>
        ))}
      </TabsList>
      <DemoPanels values={MANY_TABS} />
    </Tabs>
  )
}

/* ═══════════════════════════════════════════
   8 — Line + Scrollable + Snap + FadeEdges
═══════════════════════════════════════════ */
export function TabsLineFadeEdges() {
  return (
    <Tabs defaultValue="Account" className="w-full">
      <TabsList variant="line" scrollable snap fadeEdges>
        {MANY_TABS.map((t) => (
          <TabsTrigger key={t} value={t}>
            {t}
          </TabsTrigger>
        ))}
      </TabsList>
      <DemoPanels values={MANY_TABS} />
    </Tabs>
  )
}

/* ═══════════════════════════════════════════
   9 — Vertical Default
═══════════════════════════════════════════ */
export function TabsVerticalDefault() {
  return (
    <Tabs defaultValue="account" orientation="vertical" className="w-full">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="fourth">Fourth</TabsTrigger>
      </TabsList>
      <DemoPanels values={BASIC_TABS} />
    </Tabs>
  )
}

/* ═══════════════════════════════════════════
   10 — Vertical Line
═══════════════════════════════════════════ */
export function TabsVerticalLine() {
  return (
    <Tabs defaultValue="account" orientation="vertical" className="w-full">
      <TabsList variant="line">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="fourth">Fourth</TabsTrigger>
      </TabsList>
      <DemoPanels values={BASIC_TABS} />
    </Tabs>
  )
}

/* ═══════════════════════════════════════════
   11 — RTL Support
═══════════════════════════════════════════ */
const RTL_TABS = [
  { value: "account", label: "الحساب" },
  { value: "password", label: "كلمة المرور" },
  { value: "settings", label: "الإعدادات" },
  { value: "billing", label: "الفوترة" },
]

export function TabsRtl() {
  return (
    <DirectionProvider dir="rtl">
      <div className="bg-background rounded-lg border p-6" dir="rtl">
        <Tabs defaultValue="account" dir="rtl" className="w-full">
          <TabsList>
            {RTL_TABS.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {RTL_TABS.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="border-border bg-muted/30 text-muted-foreground mt-4 rounded-md border p-4 text-sm">
                محتوى تبويب{" "}
                <span className="text-foreground font-semibold">
                  {tab.label}
                </span>
                .
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DirectionProvider>
  )
}
