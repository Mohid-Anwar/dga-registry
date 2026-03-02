"use client"

import * as React from "react"
import { Globe, MapPin, Users, Building2, Activity } from "lucide-react"

import { useAppDirection } from "@/components/direction-context"
import { Button } from "@/registry/dga/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/dga/ui/select"

export default function SelectDemo() {
  const { direction, setDirection } = useAppDirection()
  const [selectedStation, setSelectedStation] = React.useState("")
  const [selectedPollutant, setSelectedPollutant] = React.useState("")

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

      <h1 className="mb-2 text-3xl font-bold">Select Component Demo</h1>
      <p className="text-muted-foreground mb-10 max-w-2xl text-center">
        All variants and states of the <strong>Select</strong> component,
        including different sizes, groups, and use cases.
      </p>

      {/* ═══════════════════════════════════════════
          1 — Basic Select
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">1. Basic Select</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Simple select examples with different options.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Select Station Type</label>
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a station type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="background">Background</SelectItem>
                <SelectItem value="suburban">Suburban</SelectItem>
                <SelectItem value="traffic">Traffic</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Select Region</label>
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="riyadh">Riyadh</SelectItem>
                <SelectItem value="jeddah">Jeddah</SelectItem>
                <SelectItem value="dammam">Dammam</SelectItem>
                <SelectItem value="makkah">Makkah</SelectItem>
                <SelectItem value="madinah">Madinah</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Disabled Select</label>
            <Select disabled>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Disabled select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2 — Select Sizes
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">2. Select Sizes</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Different size variants of the select component.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Default Size</label>
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Default size select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Small Size</label>
            <Select>
              <SelectTrigger size="sm" className="w-[280px]">
                <SelectValue placeholder="Small size select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3 — Select with Groups
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">3. Grouped Select</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Select with grouped options and labels.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              Select Station by Region
            </label>
            <Select>
              <SelectTrigger className="w-[320px]">
                <SelectValue placeholder="Select a station" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Riyadh Region</SelectLabel>
                  <SelectItem value="riyadh-pshc">
                    Prince Sultan Humanity City
                  </SelectItem>
                  <SelectItem value="riyadh-al-hair">Al Hair</SelectItem>
                  <SelectItem value="riyadh-diplomatic">
                    Diplomatic Quarter
                  </SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Jeddah Region</SelectLabel>
                  <SelectItem value="jeddah-corniche">Corniche</SelectItem>
                  <SelectItem value="jeddah-north">North Jeddah</SelectItem>
                  <SelectItem value="jeddah-south">South Jeddah</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Eastern Province</SelectLabel>
                  <SelectItem value="dammam-center">Dammam Center</SelectItem>
                  <SelectItem value="dhahran">Dhahran</SelectItem>
                  <SelectItem value="khobar">Al Khobar</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              Select Pollutant by Category
            </label>
            <Select>
              <SelectTrigger className="w-[320px]">
                <SelectValue placeholder="Select a pollutant" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Particulate Matter</SelectLabel>
                  <SelectItem value="pm25">PM2.5</SelectItem>
                  <SelectItem value="pm10">PM10</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Gases</SelectLabel>
                  <SelectItem value="no2">NO₂ (Nitrogen Dioxide)</SelectItem>
                  <SelectItem value="so2">SO₂ (Sulfur Dioxide)</SelectItem>
                  <SelectItem value="o3">O₃ (Ozone)</SelectItem>
                  <SelectItem value="co">CO (Carbon Monoxide)</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Other</SelectLabel>
                  <SelectItem value="voc">VOC (Volatile Organic Compounds)</SelectItem>
                  <SelectItem value="h2s">H₂S (Hydrogen Sulfide)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4 — Select with Icons
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">4. Select with Icons</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Select items with icon prefixes.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Select Station Type</label>
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="background">
                  <MapPin className="size-4" />
                  Background
                </SelectItem>
                <SelectItem value="traffic">
                  <Activity className="size-4" />
                  Traffic
                </SelectItem>
                <SelectItem value="industrial">
                  <Building2 className="size-4" />
                  Industrial
                </SelectItem>
                <SelectItem value="suburban">
                  <Users className="size-4" />
                  Suburban
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Select Language</label>
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">
                  <Globe className="size-4" />
                  English
                </SelectItem>
                <SelectItem value="ar">
                  <Globe className="size-4" />
                  العربية (Arabic)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5 — Controlled Select
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">5. Controlled Select</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Select with controlled state and value display.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Select Station</label>
            <Select value={selectedStation} onValueChange={setSelectedStation}>
              <SelectTrigger className="w-[320px]">
                <SelectValue placeholder="Select a station" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pshc">
                  Prince Sultan Humanity City
                </SelectItem>
                <SelectItem value="al-hair">Al Hair</SelectItem>
                <SelectItem value="diplomatic">Diplomatic Quarter</SelectItem>
                <SelectItem value="corniche">Jeddah Corniche</SelectItem>
              </SelectContent>
            </Select>
            {selectedStation && (
              <p className="text-sm text-muted-foreground">
                Selected: <strong>{selectedStation}</strong>
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Select Pollutant</label>
            <Select
              value={selectedPollutant}
              onValueChange={setSelectedPollutant}
            >
              <SelectTrigger className="w-[320px]">
                <SelectValue placeholder="Select a pollutant" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pm25">PM2.5</SelectItem>
                <SelectItem value="pm10">PM10</SelectItem>
                <SelectItem value="no2">NO₂</SelectItem>
                <SelectItem value="so2">SO₂</SelectItem>
                <SelectItem value="o3">O₃</SelectItem>
                <SelectItem value="co">CO</SelectItem>
              </SelectContent>
            </Select>
            {selectedPollutant && (
              <p className="text-sm text-muted-foreground">
                Selected: <strong>{selectedPollutant}</strong>
              </p>
            )}
          </div>

          {selectedStation && selectedPollutant && (
            <div className="mt-2 rounded-md border bg-card p-4">
              <h3 className="mb-2 text-sm font-semibold">Selection Summary</h3>
              <p className="text-sm">
                Viewing <strong>{selectedPollutant}</strong> data for{" "}
                <strong>{selectedStation}</strong> station
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6 — Form Examples
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">6. Form Examples</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Real-world form scenarios using the Select component.
        </p>

        <div className="space-y-8">
          {/* Station Configuration Form */}
          <div className="border-border rounded-lg border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold">Station Configuration</h3>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="station-type" className="text-sm font-medium">
                    Station Type
                  </label>
                  <Select>
                    <SelectTrigger id="station-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="background">Background</SelectItem>
                      <SelectItem value="suburban">Suburban</SelectItem>
                      <SelectItem value="traffic">Traffic</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="region" className="text-sm font-medium">
                    Region
                  </label>
                  <Select>
                    <SelectTrigger id="region">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="riyadh">Riyadh</SelectItem>
                      <SelectItem value="jeddah">Jeddah</SelectItem>
                      <SelectItem value="dammam">Dammam</SelectItem>
                      <SelectItem value="makkah">Makkah</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="status" className="text-sm font-medium">
                  Status
                </label>
                <Select>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="maintenance">Under Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="submit">Save Configuration</Button>
              </div>
            </form>
          </div>

          {/* Data Query Form */}
          <div className="border-border rounded-lg border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold">Data Query</h3>
            <form className="space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="query-station" className="text-sm font-medium">
                  Station
                </label>
                <Select>
                  <SelectTrigger id="query-station">
                    <SelectValue placeholder="Select station" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Riyadh Region</SelectLabel>
                      <SelectItem value="pshc">
                        Prince Sultan Humanity City
                      </SelectItem>
                      <SelectItem value="al-hair">Al Hair</SelectItem>
                    </SelectGroup>
                    <SelectSeparator />
                    <SelectGroup>
                      <SelectLabel>Jeddah Region</SelectLabel>
                      <SelectItem value="corniche">Corniche</SelectItem>
                      <SelectItem value="north-jeddah">North Jeddah</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="time-range" className="text-sm font-medium">
                    Time Range
                  </label>
                  <Select>
                    <SelectTrigger id="time-range">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1h">Last Hour</SelectItem>
                      <SelectItem value="24h">Last 24 Hours</SelectItem>
                      <SelectItem value="7d">Last 7 Days</SelectItem>
                      <SelectItem value="30d">Last 30 Days</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="pollutant" className="text-sm font-medium">
                    Pollutant
                  </label>
                  <Select>
                    <SelectTrigger id="pollutant">
                      <SelectValue placeholder="Select pollutant" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pm25">PM2.5</SelectItem>
                      <SelectItem value="pm10">PM10</SelectItem>
                      <SelectItem value="no2">NO₂</SelectItem>
                      <SelectItem value="so2">SO₂</SelectItem>
                      <SelectItem value="o3">O₃</SelectItem>
                      <SelectItem value="co">CO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="aggregation" className="text-sm font-medium">
                  Aggregation
                </label>
                <Select>
                  <SelectTrigger id="aggregation">
                    <SelectValue placeholder="Select aggregation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="raw">Raw Data</SelectItem>
                    <SelectItem value="hourly">Hourly Average</SelectItem>
                    <SelectItem value="daily">Daily Average</SelectItem>
                    <SelectItem value="weekly">Weekly Average</SelectItem>
                    <SelectItem value="monthly">Monthly Average</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full">
                Query Data
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7 — Select Width Variations
      ═══════════════════════════════════════════ */}
      <section className="mb-14 w-full max-w-5xl">
        <h2 className="mb-1 text-xl font-semibold">7. Width Variations</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Select with different width configurations.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Small Width (200px)</label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Medium Width (320px)</label>
            <Select>
              <SelectTrigger className="w-[320px]">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Full Width</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
    </div>
  )
}
