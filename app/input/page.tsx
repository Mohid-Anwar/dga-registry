"use client"

import * as React from "react"
import { Mail, Search, Lock, User, Calendar, Phone } from "lucide-react"

import { useAppDirection } from "@/components/direction-context"
import { Button } from "@/registry/dga/ui/button"
import { Input } from "@/registry/dga/ui/input"

export default function InputDemo() {
  const { direction, setDirection } = useAppDirection()

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12">
      {/* RTL/LTR Toggle */}
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

      <h1 className="mb-2 text-3xl font-bold">Input Component Demo</h1>
      <p className="text-muted-foreground mb-10 max-w-2xl text-center">
        All variants and states of the <strong>Input</strong> component,
        including different input types, states, and use cases.
      </p>

      {/* ═══════════════════════════════════════════
          1 — Basic Input States
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">1. Basic States</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Default, disabled, and invalid states.
        </p>
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
      </section>

      {/* ═══════════════════════════════════════════
          2 — Input Types
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">2. Input Types</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Different HTML input types supported.
        </p>
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
            <label className="text-sm font-medium">DateTime-Local</label>
            <Input type="datetime-local" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Month</label>
            <Input type="month" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Week</label>
            <Input type="week" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Search</label>
            <Input type="search" placeholder="Search..." />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3 — Input with Icons (using wrapper divs)
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">3. Input with Icons</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Examples of inputs styled with icons using wrapper divs.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Search with Icon</label>
            <div className="relative">
              <Search className="text-muted-foreground absolute start-3 top-1/2 size-4 -translate-y-1/2" />
              <Input className="ps-9" placeholder="Search..." />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email with Icon</label>
            <div className="relative">
              <Mail className="text-muted-foreground absolute start-3 top-1/2 size-4 -translate-y-1/2" />
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
              <Lock className="text-muted-foreground absolute start-3 top-1/2 size-4 -translate-y-1/2" />
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
              <User className="text-muted-foreground absolute start-3 top-1/2 size-4 -translate-y-1/2" />
              <Input className="ps-9" placeholder="Username" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4 — Form Examples
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">4. Form Examples</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Real-world form scenarios using the Input component.
        </p>

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
              <div className="flex flex-col gap-2">
                <label htmlFor="reg-password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="reg-password"
                  type="password"
                  placeholder="Create a password"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="confirm-password"
                  className="text-sm font-medium"
                >
                  Confirm Password
                </label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                />
              </div>
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
          </div>

          {/* Station Information Form */}
          <div className="border-border rounded-lg border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold">
              Station Information Form
            </h3>
            <form className="space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="station-name" className="text-sm font-medium">
                  Station Name
                </label>
                <Input
                  id="station-name"
                  placeholder="e.g., Prince Sultan Humanity City"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="latitude" className="text-sm font-medium">
                    Latitude
                  </label>
                  <Input
                    id="latitude"
                    type="number"
                    step="0.000001"
                    placeholder="24.751314"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="longitude" className="text-sm font-medium">
                    Longitude
                  </label>
                  <Input
                    id="longitude"
                    type="number"
                    step="0.000001"
                    placeholder="46.868278"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="altitude" className="text-sm font-medium">
                  Altitude (meters)
                </label>
                <Input id="altitude" type="number" placeholder="579" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <Input
                  id="description"
                  placeholder="Brief description of the station"
                />
              </div>
              <div className="flex gap-2">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="submit">Save Station</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5 — Input Sizing
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">5. Input Sizing</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Inputs with different width constraints.
        </p>
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
      </section>

      {/* ═══════════════════════════════════════════
          6 — File Upload
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">6. File Upload</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          File input with custom styling.
        </p>
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
      </section>

      {/* ═══════════════════════════════════════════
          7 — Advanced Patterns
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">7. Advanced Patterns</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Complex input patterns and combinations.
        </p>
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
                <Search className="text-muted-foreground absolute start-3 top-1/2 size-4 -translate-y-1/2" />
                <Input className="ps-9" placeholder="Search stations..." />
              </div>
              <Button variant="outline">
                <Search className="size-4" />
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
      </section>
    </div>
  )
}
