"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  Mail01Icon,
  Search01Icon,
  SquareLock02Icon,
  UserIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/registry/dga/ui/button"
import { Input } from "@/registry/dga/ui/input"

/* ═══════════════════════════════════════════
   1 — Basic Input States
═══════════════════════════════════════════ */
export function InputBasicStates() {
  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Default</label>
          <Input placeholder="Enter text..." />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">With Value</label>
          <Input defaultValue="This input has a value" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Disabled</label>
          <Input placeholder="Disabled input" disabled />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Invalid</label>
          <Input
            placeholder="Invalid input"
            aria-invalid="true"
            defaultValue="invalid@incomplete"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Read Only</label>
          <Input defaultValue="Read-only value" readOnly />
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — Input Types
═══════════════════════════════════════════ */
export function InputTypes() {
  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Text</label>
          <Input type="text" placeholder="Enter text" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="email@example.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Password</label>
          <Input type="password" placeholder="Enter password" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Number</label>
          <Input type="number" placeholder="Enter number" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Tel</label>
          <Input type="tel" placeholder="+1 (555) 000-0000" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">URL</label>
          <Input type="url" placeholder="https://example.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Date</label>
          <Input type="date" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Time</label>
          <Input type="time" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Search</label>
          <Input type="search" placeholder="Search..." />
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — Input with Icons
═══════════════════════════════════════════ */
export function InputWithIcons() {
  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Search with Icon</label>
          <div className="relative">
            <HugeiconsIcon icon={Search01Icon} className="text-muted-foreground absolute start-3 top-1/2 size-4 -translate-y-1/2"  />
            <Input className="ps-9" placeholder="Search..." />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Email with Icon</label>
          <div className="relative">
            <HugeiconsIcon icon={Mail01Icon} className="text-muted-foreground absolute start-3 top-1/2 size-4 -translate-y-1/2"  />
            <Input
              type="email"
              className="ps-9"
              placeholder="email@example.com"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Password with Icon</label>
          <div className="relative">
            <HugeiconsIcon icon={SquareLock02Icon} className="text-muted-foreground absolute start-3 top-1/2 size-4 -translate-y-1/2"  />
            <Input
              type="password"
              className="ps-9"
              placeholder="Enter password"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Username with Icon</label>
          <div className="relative">
            <HugeiconsIcon icon={UserIcon} className="text-muted-foreground absolute start-3 top-1/2 size-4 -translate-y-1/2"  />
            <Input className="ps-9" placeholder="Username" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   4 — Form Examples
═══════════════════════════════════════════ */
export function InputForms() {
  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="space-y-8">
        {/* Login Form */}
        <div className="border-border rounded-lg border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold">Login Form</h3>
          <form className="space-y-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="login-email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="login-email"
                type="email"
                placeholder="email@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="login-password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="login-password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
        </div>

        {/* Registration Form */}
        <div className="border-border rounded-lg border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold">Registration Form</h3>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="first-name" className="text-sm font-medium">
                  First Name
                </label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="last-name" className="text-sm font-medium">
                  Last Name
                </label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="reg-email" className="text-sm font-medium">
                Email Address
              </label>
              <Input
                id="reg-email"
                type="email"
                placeholder="email@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   5 — Input Sizing
═══════════════════════════════════════════ */
export function InputSizing() {
  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Full Width (default)</label>
          <Input placeholder="Full width input" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Custom Width (50%)</label>
          <Input className="w-1/2" placeholder="Half width input" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Custom Width (300px)</label>
          <Input
            className="w-[300px]"
            placeholder="Fixed width (300px) input"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Inline Inputs</label>
          <div className="flex gap-2">
            <Input className="flex-1" placeholder="Input 1" />
            <Input className="flex-1" placeholder="Input 2" />
            <Input className="flex-1" placeholder="Input 3" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   6 — File Upload
═══════════════════════════════════════════ */
export function InputFileUpload() {
  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Single File</label>
          <Input type="file" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Multiple Files</label>
          <Input type="file" multiple />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Accept Images Only</label>
          <Input type="file" accept="image/*" />
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   7 — Advanced Patterns
═══════════════════════════════════════════ */
export function InputAdvanced() {
  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Input with Button</label>
          <div className="flex gap-2">
            <Input placeholder="Enter your email" />
            <Button>Subscribe</Button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Search with Action Button
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <HugeiconsIcon icon={Search01Icon} className="text-muted-foreground absolute start-3 top-1/2 size-4 -translate-y-1/2"  />
              <Input className="ps-9" placeholder="Search stations..." />
            </div>
            <Button variant="outline">
              <HugeiconsIcon icon={Search01Icon} className="size-4"  />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Input Group</label>
          <div className="flex">
            <span className="bg-muted border-input text-muted-foreground inline-flex items-center rounded-s-md border border-e-0 px-3 text-sm">
              https://
            </span>
            <Input
              className="rounded-s-none"
              placeholder="example.com"
              type="url"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Input with Suffix Text
          </label>
          <div className="flex">
            <Input
              className="rounded-e-none"
              placeholder="Enter amount"
              type="number"
            />
            <span className="bg-muted border-input text-muted-foreground inline-flex items-center rounded-e-md border border-s-0 px-3 text-sm">
              SAR
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
