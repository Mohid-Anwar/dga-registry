"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/dga/ui/tabs"

function DemoContent({ value }: { value: string }) {
  return (
    <div className="mt-4 rounded-md border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
      Content for <span className="font-semibold text-foreground">{value}</span> tab.
    </div>
  )
}

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
      <DemoContent value="account" />
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
      <DemoContent value="account" />
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
          <TabsTrigger key={t} value={t}>{t}</TabsTrigger>
        ))}
      </TabsList>
      <DemoContent value="Account" />
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
          <TabsTrigger key={t} value={t}>{t}</TabsTrigger>
        ))}
      </TabsList>
      <DemoContent value="Account" />
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
          <TabsTrigger key={t} value={t}>{t}</TabsTrigger>
        ))}
      </TabsList>
      <DemoContent value="Account" />
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
          <TabsTrigger key={t} value={t}>{t}</TabsTrigger>
        ))}
      </TabsList>
      <DemoContent value="Account" />
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
          <TabsTrigger key={t} value={t}>{t}</TabsTrigger>
        ))}
      </TabsList>
      <DemoContent value="Account" />
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
          <TabsTrigger key={t} value={t}>{t}</TabsTrigger>
        ))}
      </TabsList>
      <DemoContent value="Account" />
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
      <DemoContent value="account" />
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
      <DemoContent value="account" />
    </Tabs>
  )
}
