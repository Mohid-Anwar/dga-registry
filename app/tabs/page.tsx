"use client"
import { Button } from "@/registry/dga/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/dga/ui/tabs"
import { useAppDirection } from "@/components/direction-context"

function DemoContent({ value }: { value: string }) {
  return (
    <div className="mt-4 rounded-md border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
      Content for <span className="font-semibold text-foreground">{value}</span> tab.
    </div>
  )
}

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="w-full space-y-3">
      <div>
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="rounded-lg border border-border bg-background p-6">
        {children}
      </div>
    </section>
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
]

export default function TabsPage() {

  const { direction, setDirection } = useAppDirection()
  return (
    <main className="mx-auto min-h-screen max-w-3xl space-y-10 px-6 py-12 w-full">
      <div className="mb-6 flex gap-4">
        <Button
          variant={direction === "rtl" ? "default" : "outline"}
          size="sm"
          onClick={() => setDirection("rtl")}
        >
          RTL
        </Button>
        <Button
          variant={direction === "ltr" ? "default" : "outline"}
          size="sm"
          onClick={() => setDirection("ltr")}
        >
          LTR
        </Button>
      </div>

      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tabs</h1>
        <p className="mt-1 text-muted-foreground">
          All variants — default, line, scrollable, snap, fade edges, vertical.
        </p>
      </div>

      {/* ─── 1. Default ─────────────────────────────────────── */}
      <Section
        title="Default"
        description="variant='default' — centered, equal spacing."
      >
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="fourth">Fourth</TabsTrigger>
          </TabsList>
          <DemoContent value="account" />
        </Tabs>
      </Section>

      {/* ─── 2. Line ────────────────────────────────────────── */}
      <Section
        title="Line"
        description="variant='line' — left-aligned, minimal underline indicator."
      >
        <Tabs defaultValue="account" className="w-full">
          <TabsList variant="line">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="fourth">Fourth</TabsTrigger>
          </TabsList>
          <DemoContent value="account" />
        </Tabs>
      </Section>

      {/* ─── 3. Default + Scrollable ────────────────────────── */}
      <Section
        title="Default + Scrollable"
        description="scrollable — overflow becomes horizontal scroll instead of wrapping."
      >
        <Tabs defaultValue="Account" className="w-full">
          <TabsList scrollable>
            {MANY_TABS.map((t) => (
              <TabsTrigger key={t} value={t}>
                {t}
              </TabsTrigger>
            ))}
          </TabsList>
          <DemoContent value="Account" />
        </Tabs>
      </Section>

      {/* ─── 4. Line + Scrollable ───────────────────────────── */}
      <Section
        title="Line + Scrollable"
        description="variant='line' scrollable — underline style with horizontal scroll."
      >
        <Tabs defaultValue="Account" className="w-full">
          <TabsList variant="line" scrollable>
            {MANY_TABS.map((t) => (
              <TabsTrigger key={t} value={t}>
                {t}
              </TabsTrigger>
            ))}
          </TabsList>
          <DemoContent value="Account" />
        </Tabs>
      </Section>

      {/* ─── 5. Default + Scrollable + Snap ─────────────────── */}
      <Section
        title="Default + Scrollable + Snap"
        description="scrollable snap — each tab locks into place while scrolling."
      >
        <Tabs defaultValue="Account" className="w-full">
          <TabsList scrollable snap>
            {MANY_TABS.map((t) => (
              <TabsTrigger key={t} value={t}>
                {t}
              </TabsTrigger>
            ))}
          </TabsList>
          <DemoContent value="Account" />
        </Tabs>
      </Section>

      {/* ─── 6. Line + Scrollable + Snap ────────────────────── */}
      <Section
        title="Line + Scrollable + Snap"
        description="variant='line' scrollable snap."
      >
        <Tabs defaultValue="Account" className="w-full">
          <TabsList variant="line" scrollable snap>
            {MANY_TABS.map((t) => (
              <TabsTrigger key={t} value={t}>
                {t}
              </TabsTrigger>
            ))}
          </TabsList>
          <DemoContent value="Account" />
        </Tabs>
      </Section>

      {/* ─── 7. Default + Scrollable + Snap + FadeEdges ─────── */}
      <Section
        title="Default + Scrollable + Snap + FadeEdges"
        description="scrollable snap fadeEdges — gradient fades reveal hidden tabs on either side."
      >
        <Tabs defaultValue="Account" className="w-full">
          <TabsList scrollable snap fadeEdges>
            {MANY_TABS.map((t) => (
              <TabsTrigger key={t} value={t}>
                {t}
              </TabsTrigger>
            ))}
          </TabsList>
          <DemoContent value="Account" />
        </Tabs>
      </Section>

      {/* ─── 8. Line + Scrollable + Snap + FadeEdges ─────────── */}
      <Section
        title="Line + Scrollable + Snap + FadeEdges"
        description="variant='line' scrollable snap fadeEdges — full production config."
      >
        <Tabs defaultValue="Account" className="w-full">
          <TabsList variant="line" scrollable snap fadeEdges>
            {MANY_TABS.map((t) => (
              <TabsTrigger key={t} value={t}>
                {t}
              </TabsTrigger>
            ))}
          </TabsList>
          <DemoContent value="Account" />
        </Tabs>
      </Section>

      {/* ─── 9. Vertical — Default ──────────────────────────── */}
      <Section
        title="Vertical — Default"
        description="orientation='vertical' — tabs stack on the left."
      >
        <Tabs defaultValue="account" orientation="vertical" className="w-full">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="fourth">Fourth</TabsTrigger>
          </TabsList>
          <DemoContent value="account" />
        </Tabs>
      </Section>

      {/* ─── 10. Vertical — Line ────────────────────────────── */}
      <Section
        title="Vertical — Line"
        description="orientation='vertical' variant='line'."
      >
        <Tabs defaultValue="account" orientation="vertical" className="w-full">
          <TabsList variant="line">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="fourth">Fourth</TabsTrigger>
          </TabsList>
          <DemoContent value="account" />
        </Tabs>
      </Section>
    </main>
  )
}
