"use client"

import * as React from "react"

import { Button } from "@/registry/dga/ui/button"
import { Checkbox } from "@/registry/dga/ui/checkbox"

/* ═══════════════════════════════════════════
   1 — Basic Checkbox States
═══════════════════════════════════════════ */
export function CheckboxBasicStates() {
  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Checkbox id="unchecked" />
          <label
            htmlFor="unchecked"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Unchecked
          </label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="checked" defaultChecked />
          <label
            htmlFor="checked"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Checked (default)
          </label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="disabled" disabled />
          <label
            htmlFor="disabled"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Disabled (unchecked)
          </label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="disabled-checked" disabled defaultChecked />
          <label
            htmlFor="disabled-checked"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Disabled (checked)
          </label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="invalid" aria-invalid="true" />
          <label
            htmlFor="invalid"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Invalid state
          </label>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — Checkbox with Labels
═══════════════════════════════════════════ */
export function CheckboxWithLabels() {
  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-2">
          <Checkbox id="single-line" className="mt-0.5" />
          <label htmlFor="single-line" className="text-sm">
            Single line label
          </label>
        </div>

        <div className="flex items-start gap-2">
          <Checkbox id="multi-line" className="mt-0.5" />
          <div className="grid gap-1.5">
            <label htmlFor="multi-line" className="text-sm font-medium">
              Multi-line Label
            </label>
            <p className="text-muted-foreground text-sm">
              This checkbox has a descriptive text that explains what
              accepting this option means for the user.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Checkbox id="with-link" className="mt-0.5" />
          <div className="grid gap-1.5">
            <label htmlFor="with-link" className="text-sm font-medium">
              I accept the terms and conditions
            </label>
            <p className="text-muted-foreground text-sm">
              You agree to our{" "}
              <a href="#" className="text-primary underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — Controlled Checkboxes
═══════════════════════════════════════════ */
export function CheckboxControlled() {
  const [termsAccepted, setTermsAccepted] = React.useState(false)

  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Checkbox
            id="terms"
            checked={termsAccepted}
            onCheckedChange={(checked) =>
              setTermsAccepted(checked as boolean)
            }
          />
          <label htmlFor="terms" className="text-sm">
            I accept the terms and conditions
          </label>
        </div>
        <div className="rounded-md border bg-card p-4">
          <p className="text-sm">
            Status:{" "}
            <strong>
              {termsAccepted ? "Terms accepted ✓" : "Terms not accepted"}
            </strong>
          </p>
          <Button
            className="mt-3"
            disabled={!termsAccepted}
            onClick={() => alert("Proceeding with registration!")}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   4 — Checkbox Groups
═══════════════════════════════════════════ */
export function CheckboxGroups() {
  const [notifications, setNotifications] = React.useState({
    email: false,
    sms: false,
    push: false,
  })

  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="flex flex-col gap-6">
        {/* Station Types */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Select Station Types</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="background" />
              <label htmlFor="background" className="text-sm">
                Background Station
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="suburban" />
              <label htmlFor="suburban" className="text-sm">
                Suburban Station
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="traffic" />
              <label htmlFor="traffic" className="text-sm">
                Traffic Station
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="industrial" />
              <label htmlFor="industrial" className="text-sm">
                Industrial Station
              </label>
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Notification Preferences</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Checkbox
                id="email-notif"
                checked={notifications.email}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({
                    ...prev,
                    email: checked as boolean,
                  }))
                }
                className="mt-0.5"
              />
              <div className="grid gap-1">
                <label htmlFor="email-notif" className="text-sm font-medium">
                  Email Notifications
                </label>
                <p className="text-muted-foreground text-xs">
                  Receive email alerts for air quality updates
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Checkbox
                id="sms-notif"
                checked={notifications.sms}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({
                    ...prev,
                    sms: checked as boolean,
                  }))
                }
                className="mt-0.5"
              />
              <div className="grid gap-1">
                <label htmlFor="sms-notif" className="text-sm font-medium">
                  SMS Notifications
                </label>
                <p className="text-muted-foreground text-xs">
                  Get text messages for critical alerts
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Checkbox
                id="push-notif"
                checked={notifications.push}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({
                    ...prev,
                    push: checked as boolean,
                  }))
                }
                className="mt-0.5"
              />
              <div className="grid gap-1">
                <label htmlFor="push-notif" className="text-sm font-medium">
                  Push Notifications
                </label>
                <p className="text-muted-foreground text-xs">
                  Receive push notifications on your device
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 rounded-md border bg-card p-4">
            <p className="text-sm font-medium">Active Notifications:</p>
            <ul className="text-muted-foreground mt-2 text-sm">
              {notifications.email && <li>• Email enabled</li>}
              {notifications.sms && <li>• SMS enabled</li>}
              {notifications.push && <li>• Push enabled</li>}
              {!notifications.email &&
                !notifications.sms &&
                !notifications.push && <li>• None selected</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   5 — Pollutant Selection
═══════════════════════════════════════════ */
export function CheckboxPollutants() {
  const [pollutants, setPollutants] = React.useState<string[]>([])

  const handlePollutantToggle = (pollutant: string) => {
    setPollutants((prev) =>
      prev.includes(pollutant)
        ? prev.filter((p) => p !== pollutant)
        : [...prev, pollutant]
    )
  }

  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id="pm25"
              checked={pollutants.includes("pm25")}
              onCheckedChange={() => handlePollutantToggle("pm25")}
            />
            <label htmlFor="pm25" className="text-sm">
              PM2.5 (Particulate Matter)
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="pm10"
              checked={pollutants.includes("pm10")}
              onCheckedChange={() => handlePollutantToggle("pm10")}
            />
            <label htmlFor="pm10" className="text-sm">
              PM10 (Particulate Matter)
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="no2"
              checked={pollutants.includes("no2")}
              onCheckedChange={() => handlePollutantToggle("no2")}
            />
            <label htmlFor="no2" className="text-sm">
              NO₂ (Nitrogen Dioxide)
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="so2"
              checked={pollutants.includes("so2")}
              onCheckedChange={() => handlePollutantToggle("so2")}
            />
            <label htmlFor="so2" className="text-sm">
              SO₂ (Sulfur Dioxide)
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="o3"
              checked={pollutants.includes("o3")}
              onCheckedChange={() => handlePollutantToggle("o3")}
            />
            <label htmlFor="o3" className="text-sm">
              O₃ (Ozone)
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="co"
              checked={pollutants.includes("co")}
              onCheckedChange={() => handlePollutantToggle("co")}
            />
            <label htmlFor="co" className="text-sm">
              CO (Carbon Monoxide)
            </label>
          </div>
        </div>
        <div className="rounded-md border bg-card p-4">
          <p className="text-sm font-medium">
            Selected Pollutants ({pollutants.length}):
          </p>
          <p className="text-muted-foreground mt-2 text-sm">
            {pollutants.length > 0
              ? pollutants.join(", ").toUpperCase()
              : "None selected"}
          </p>
          <Button
            className="mt-3"
            disabled={pollutants.length === 0}
            onClick={() =>
              alert(`Monitoring: ${pollutants.join(", ").toUpperCase()}`)
            }
          >
            Start Monitoring
          </Button>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   6 — Form Examples
═══════════════════════════════════════════ */
export function CheckboxForms() {
  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="space-y-8">
        {/* User Preferences Form */}
        <div className="border-border rounded-lg border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold">User Preferences</h3>
          <form className="space-y-4">
            <fieldset className="space-y-3">
              <legend className="text-sm font-medium">
                Data Display Options
              </legend>
              <div className="flex items-center gap-2">
                <Checkbox id="show-charts" defaultChecked />
                <label htmlFor="show-charts" className="text-sm">
                  Show charts and graphs
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="show-tables" defaultChecked />
                <label htmlFor="show-tables" className="text-sm">
                  Display data tables
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="show-map" />
                <label htmlFor="show-map" className="text-sm">
                  Show station map view
                </label>
              </div>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="text-sm font-medium">Alert Settings</legend>
              <div className="flex items-center gap-2">
                <Checkbox id="alert-high" defaultChecked />
                <label htmlFor="alert-high" className="text-sm">
                  Alert on high pollution levels
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="alert-moderate" />
                <label htmlFor="alert-moderate" className="text-sm">
                  Alert on moderate pollution levels
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="daily-summary" defaultChecked />
                <label htmlFor="daily-summary" className="text-sm">
                  Send daily summary
                </label>
              </div>
            </fieldset>

            <div className="flex gap-2 pt-2">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Save Preferences</Button>
            </div>
          </form>
        </div>

        {/* Station Registration Form */}
        <div className="border-border rounded-lg border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold">Station Registration</h3>
          <form className="space-y-4">
            <fieldset className="space-y-3">
              <legend className="text-sm font-medium">
                Available Equipment
              </legend>
              <div className="flex items-start gap-2">
                <Checkbox id="equipment-pm" className="mt-0.5" />
                <div className="grid gap-1">
                  <label htmlFor="equipment-pm" className="text-sm">
                    Particulate Matter Analyzer
                  </label>
                  <p className="text-muted-foreground text-xs">
                    PM2.5 and PM10 measurement capability
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox id="equipment-gas" className="mt-0.5" />
                <div className="grid gap-1">
                  <label htmlFor="equipment-gas" className="text-sm">
                    Gas Analyzer
                  </label>
                  <p className="text-muted-foreground text-xs">
                    NO₂, SO₂, O₃, CO measurement capability
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox id="equipment-weather" className="mt-0.5" />
                <div className="grid gap-1">
                  <label htmlFor="equipment-weather" className="text-sm">
                    Weather Station
                  </label>
                  <p className="text-muted-foreground text-xs">
                    Temperature, humidity, wind speed, pressure
                  </p>
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="text-sm font-medium">
                Data Sharing Permissions
              </legend>
              <div className="flex items-center gap-2">
                <Checkbox id="share-public" defaultChecked />
                <label htmlFor="share-public" className="text-sm">
                  Share data publicly
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="share-research" />
                <label htmlFor="share-research" className="text-sm">
                  Allow data use for research
                </label>
              </div>
            </fieldset>

            <div className="flex items-start gap-2 rounded-md border p-4">
              <Checkbox id="station-terms" className="mt-0.5" />
              <div className="grid gap-1">
                <label
                  htmlFor="station-terms"
                  className="text-sm font-medium"
                >
                  I certify that all information is accurate
                </label>
                <p className="text-muted-foreground text-xs">
                  By checking this box, you confirm that the station details
                  and equipment specifications are correct and up to date.
                </p>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Register Station</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   7 — Checkbox in Lists
═══════════════════════════════════════════ */
export function CheckboxInLists() {
  return (
    <div className="rounded-lg border bg-background">
      <div className="flex items-center gap-3 border-b p-4">
        <Checkbox id="select-all" />
        <label htmlFor="select-all" className="text-sm font-semibold">
          Select All Stations
        </label>
      </div>
      <div className="divide-y">
        <div className="flex items-center gap-3 p-4 hover:bg-accent/50">
          <Checkbox id="station-1" />
          <div className="flex-1">
            <label htmlFor="station-1" className="text-sm font-medium">
              Prince Sultan Humanity City
            </label>
            <p className="text-muted-foreground text-xs">
              Riyadh • Background Station
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 hover:bg-accent/50">
          <Checkbox id="station-2" />
          <div className="flex-1">
            <label htmlFor="station-2" className="text-sm font-medium">
              Al Hair
            </label>
            <p className="text-muted-foreground text-xs">
              Riyadh • Suburban Station
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 hover:bg-accent/50">
          <Checkbox id="station-3" />
          <div className="flex-1">
            <label htmlFor="station-3" className="text-sm font-medium">
              Diplomatic Quarter
            </label>
            <p className="text-muted-foreground text-xs">
              Riyadh • Traffic Station
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 hover:bg-accent/50">
          <Checkbox id="station-4" />
          <div className="flex-1">
            <label htmlFor="station-4" className="text-sm font-medium">
              Jeddah Corniche
            </label>
            <p className="text-muted-foreground text-xs">
              Jeddah • Background Station
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
