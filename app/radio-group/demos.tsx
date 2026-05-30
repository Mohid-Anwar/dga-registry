"use client"

import * as React from "react"

import { Button } from "@/registry/dga/ui/button"
import { RadioGroup, RadioGroupItem } from "@/registry/dga/ui/radio-group"

/* ─── 1. Basic Radio Group ─── */
export function RadioGroupBasic() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium">Select Station Type</label>
          <RadioGroup defaultValue="background">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="background" id="r1-background" />
              <label htmlFor="r1-background" className="text-sm">
                Background Station
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="suburban" id="r1-suburban" />
              <label htmlFor="r1-suburban" className="text-sm">
                Suburban Station
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="traffic" id="r1-traffic" />
              <label htmlFor="r1-traffic" className="text-sm">
                Traffic Station
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="industrial" id="r1-industrial" />
              <label htmlFor="r1-industrial" className="text-sm">
                Industrial Station
              </label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium">Disabled Radio Group</label>
          <RadioGroup defaultValue="option1" disabled>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option1" id="disabled-1" />
              <label
                htmlFor="disabled-1"
                className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Option 1 (Selected, Disabled)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option2" id="disabled-2" />
              <label
                htmlFor="disabled-2"
                className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Option 2 (Disabled)
              </label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium">
            Individual Disabled Items
          </label>
          <RadioGroup defaultValue="active">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="active" id="status-active" />
              <label htmlFor="status-active" className="text-sm">
                Active
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="inactive" id="status-inactive" />
              <label htmlFor="status-inactive" className="text-sm">
                Inactive
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem
                value="maintenance"
                id="status-maintenance"
                disabled
              />
              <label
                htmlFor="status-maintenance"
                className="text-sm opacity-70"
              >
                Under Maintenance (Disabled)
              </label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}

/* ─── 2. Radio Group with Descriptions ─── */
export function RadioGroupDescriptions() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">
          Select Data Aggregation Method
        </label>
        <RadioGroup defaultValue="hourly">
          <div className="flex items-start gap-2">
            <RadioGroupItem value="raw" id="agg-raw" className="mt-0.5" />
            <div className="grid gap-1">
              <label htmlFor="agg-raw" className="text-sm font-medium">
                Raw Data
              </label>
              <p className="text-muted-foreground text-xs">
                Unprocessed measurements as recorded by sensors
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <RadioGroupItem value="hourly" id="agg-hourly" className="mt-0.5" />
            <div className="grid gap-1">
              <label htmlFor="agg-hourly" className="text-sm font-medium">
                Hourly Average
              </label>
              <p className="text-muted-foreground text-xs">
                Average values calculated for each hour
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <RadioGroupItem value="daily" id="agg-daily" className="mt-0.5" />
            <div className="grid gap-1">
              <label htmlFor="agg-daily" className="text-sm font-medium">
                Daily Average
              </label>
              <p className="text-muted-foreground text-xs">
                Average values calculated for each day
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <RadioGroupItem value="weekly" id="agg-weekly" className="mt-0.5" />
            <div className="grid gap-1">
              <label htmlFor="agg-weekly" className="text-sm font-medium">
                Weekly Average
              </label>
              <p className="text-muted-foreground text-xs">
                Average values calculated for each week
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

/* ─── 3. Controlled Radio Group ─── */
export function RadioGroupControlled() {
  const [stationType, setStationType] = React.useState("")
  const [pollutant, setPollutant] = React.useState("")

  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium">Select Station Type</label>
          <RadioGroup value={stationType} onValueChange={setStationType}>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="background" id="controlled-background" />
              <label htmlFor="controlled-background" className="text-sm">
                Background Station
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="suburban" id="controlled-suburban" />
              <label htmlFor="controlled-suburban" className="text-sm">
                Suburban Station
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="traffic" id="controlled-traffic" />
              <label htmlFor="controlled-traffic" className="text-sm">
                Traffic Station
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="industrial" id="controlled-industrial" />
              <label htmlFor="controlled-industrial" className="text-sm">
                Industrial Station
              </label>
            </div>
          </RadioGroup>
          {stationType && (
            <div className="bg-card rounded-md border p-4">
              <p className="text-sm">
                Selected Type: <strong>{stationType}</strong>
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium">Select Pollutant</label>
          <RadioGroup value={pollutant} onValueChange={setPollutant}>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="pm25" id="pollutant-pm25" />
              <label htmlFor="pollutant-pm25" className="text-sm">
                PM2.5 (Particulate Matter)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="pm10" id="pollutant-pm10" />
              <label htmlFor="pollutant-pm10" className="text-sm">
                PM10 (Particulate Matter)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="no2" id="pollutant-no2" />
              <label htmlFor="pollutant-no2" className="text-sm">
                NO₂ (Nitrogen Dioxide)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="so2" id="pollutant-so2" />
              <label htmlFor="pollutant-so2" className="text-sm">
                SO₂ (Sulfur Dioxide)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="o3" id="pollutant-o3" />
              <label htmlFor="pollutant-o3" className="text-sm">
                O₃ (Ozone)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="co" id="pollutant-co" />
              <label htmlFor="pollutant-co" className="text-sm">
                CO (Carbon Monoxide)
              </label>
            </div>
          </RadioGroup>
          {pollutant && (
            <div className="bg-card rounded-md border p-4">
              <p className="text-sm">
                Selected Pollutant: <strong>{pollutant.toUpperCase()}</strong>
              </p>
            </div>
          )}
        </div>

        {stationType && pollutant && (
          <div className="bg-card rounded-md border p-4">
            <h3 className="mb-2 text-sm font-semibold">Query Summary</h3>
            <p className="text-sm">
              Showing <strong>{pollutant.toUpperCase()}</strong> data for{" "}
              <strong>{stationType}</strong> stations
            </p>
            <Button className="mt-3" onClick={() => alert("Fetching data...")}>
              Fetch Data
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── 4. Horizontal Layout ─── */
export function RadioGroupHorizontal() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium">Select Time Range</label>
          <RadioGroup
            defaultValue="24h"
            className="flex flex-row flex-wrap gap-4"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="1h" id="time-1h" />
              <label htmlFor="time-1h" className="text-sm">
                1 Hour
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="24h" id="time-24h" />
              <label htmlFor="time-24h" className="text-sm">
                24 Hours
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="7d" id="time-7d" />
              <label htmlFor="time-7d" className="text-sm">
                7 Days
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="30d" id="time-30d" />
              <label htmlFor="time-30d" className="text-sm">
                30 Days
              </label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium">Status Filter</label>
          <RadioGroup defaultValue="all" className="flex flex-row gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="all" id="filter-all" />
              <label htmlFor="filter-all" className="text-sm">
                All
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="active" id="filter-active" />
              <label htmlFor="filter-active" className="text-sm">
                Active
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="inactive" id="filter-inactive" />
              <label htmlFor="filter-inactive" className="text-sm">
                Inactive
              </label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}

/* ─── 5. Card Style Radio Group ─── */
export function RadioGroupCards() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">Select Data Export Format</label>
        <RadioGroup defaultValue="csv">
          <label
            htmlFor="format-csv"
            className="hover:bg-accent/50 has-[:checked]:border-primary has-[:checked]:bg-accent flex cursor-pointer items-start gap-3 rounded-md border p-4"
          >
            <RadioGroupItem value="csv" id="format-csv" className="mt-0.5" />
            <div className="flex-1">
              <div className="text-sm font-medium">CSV (Comma Separated)</div>
              <p className="text-muted-foreground text-xs">
                Export data in CSV format, compatible with Excel and other
                spreadsheet applications
              </p>
            </div>
          </label>
          <label
            htmlFor="format-json"
            className="hover:bg-accent/50 has-[:checked]:border-primary has-[:checked]:bg-accent flex cursor-pointer items-start gap-3 rounded-md border p-4"
          >
            <RadioGroupItem value="json" id="format-json" className="mt-0.5" />
            <div className="flex-1">
              <div className="text-sm font-medium">JSON</div>
              <p className="text-muted-foreground text-xs">
                Export data in JSON format, ideal for APIs and web applications
              </p>
            </div>
          </label>
          <label
            htmlFor="format-xml"
            className="hover:bg-accent/50 has-[:checked]:border-primary has-[:checked]:bg-accent flex cursor-pointer items-start gap-3 rounded-md border p-4"
          >
            <RadioGroupItem value="xml" id="format-xml" className="mt-0.5" />
            <div className="flex-1">
              <div className="text-sm font-medium">XML</div>
              <p className="text-muted-foreground text-xs">
                Export data in XML format, suitable for enterprise systems
              </p>
            </div>
          </label>
        </RadioGroup>
      </div>
    </div>
  )
}

/* ─── 6. Form Examples ─── */
export function RadioGroupForms() {
  const [region, setRegion] = React.useState("riyadh")
  const [timeRange, setTimeRange] = React.useState("24h")

  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="space-y-8">
        {/* Data Query Form */}
        <div className="border-border bg-card rounded-lg border p-6">
          <h3 className="mb-4 text-lg font-semibold">Data Query Form</h3>
          <form className="space-y-6">
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">Select Region</label>
              <RadioGroup
                value={region}
                onValueChange={setRegion}
                className="grid gap-3 sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="riyadh" id="region-riyadh" />
                  <label htmlFor="region-riyadh" className="text-sm">
                    Riyadh Region
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="jeddah" id="region-jeddah" />
                  <label htmlFor="region-jeddah" className="text-sm">
                    Jeddah Region
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="dammam" id="region-dammam" />
                  <label htmlFor="region-dammam" className="text-sm">
                    Dammam Region
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="makkah" id="region-makkah" />
                  <label htmlFor="region-makkah" className="text-sm">
                    Makkah Region
                  </label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">Time Period</label>
              <RadioGroup value={timeRange} onValueChange={setTimeRange}>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="1h" id="form-time-1h" />
                  <label htmlFor="form-time-1h" className="text-sm">
                    Last Hour
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="24h" id="form-time-24h" />
                  <label htmlFor="form-time-24h" className="text-sm">
                    Last 24 Hours
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="7d" id="form-time-7d" />
                  <label htmlFor="form-time-7d" className="text-sm">
                    Last 7 Days
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="30d" id="form-time-30d" />
                  <label htmlFor="form-time-30d" className="text-sm">
                    Last 30 Days
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="custom" id="form-time-custom" />
                  <label htmlFor="form-time-custom" className="text-sm">
                    Custom Range
                  </label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">Data Quality</label>
              <RadioGroup defaultValue="validated">
                <div className="flex items-start gap-2">
                  <RadioGroupItem
                    value="all"
                    id="quality-all"
                    className="mt-0.5"
                  />
                  <div className="grid gap-1">
                    <label htmlFor="quality-all" className="text-sm">
                      All Data
                    </label>
                    <p className="text-muted-foreground text-xs">
                      Include all measurements regardless of quality flags
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <RadioGroupItem
                    value="validated"
                    id="quality-validated"
                    className="mt-0.5"
                  />
                  <div className="grid gap-1">
                    <label htmlFor="quality-validated" className="text-sm">
                      Validated Only
                    </label>
                    <p className="text-muted-foreground text-xs">
                      Only include quality-checked and validated measurements
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="flex gap-2 pt-2">
              <Button type="button" variant="outline">
                Reset
              </Button>
              <Button type="submit">Query Data</Button>
            </div>
          </form>
        </div>

        {/* Settings Form */}
        <div className="border-border bg-card rounded-lg border p-6">
          <h3 className="mb-4 text-lg font-semibold">Alert Settings</h3>
          <form className="space-y-6">
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">Alert Frequency</label>
              <RadioGroup defaultValue="immediate">
                <div className="flex items-start gap-2">
                  <RadioGroupItem
                    value="immediate"
                    id="freq-immediate"
                    className="mt-0.5"
                  />
                  <div className="grid gap-1">
                    <label htmlFor="freq-immediate" className="text-sm">
                      Immediate
                    </label>
                    <p className="text-muted-foreground text-xs">
                      Receive alerts as soon as thresholds are exceeded
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <RadioGroupItem
                    value="hourly"
                    id="freq-hourly"
                    className="mt-0.5"
                  />
                  <div className="grid gap-1">
                    <label htmlFor="freq-hourly" className="text-sm">
                      Hourly Digest
                    </label>
                    <p className="text-muted-foreground text-xs">
                      Receive a summary of alerts once per hour
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <RadioGroupItem
                    value="daily"
                    id="freq-daily"
                    className="mt-0.5"
                  />
                  <div className="grid gap-1">
                    <label htmlFor="freq-daily" className="text-sm">
                      Daily Summary
                    </label>
                    <p className="text-muted-foreground text-xs">
                      Receive a daily summary of all alerts
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">Severity Threshold</label>
              <RadioGroup defaultValue="moderate">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="low" id="severity-low" />
                  <label htmlFor="severity-low" className="text-sm">
                    Low and above
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="moderate" id="severity-moderate" />
                  <label htmlFor="severity-moderate" className="text-sm">
                    Moderate and above
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="high" id="severity-high" />
                  <label htmlFor="severity-high" className="text-sm">
                    High only
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="critical" id="severity-critical" />
                  <label htmlFor="severity-critical" className="text-sm">
                    Critical only
                  </label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex gap-2 pt-2">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Save Settings</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

/* ─── 7. Grid Layout ─── */
export function RadioGroupGrid() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">Select Station</label>
        <RadioGroup
          defaultValue="pshc"
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="pshc" id="station-pshc" />
            <label htmlFor="station-pshc" className="text-sm">
              Prince Sultan Humanity City
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="al-hair" id="station-al-hair" />
            <label htmlFor="station-al-hair" className="text-sm">
              Al Hair
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="diplomatic" id="station-diplomatic" />
            <label htmlFor="station-diplomatic" className="text-sm">
              Diplomatic Quarter
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="corniche" id="station-corniche" />
            <label htmlFor="station-corniche" className="text-sm">
              Jeddah Corniche
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="north-jeddah" id="station-north-jeddah" />
            <label htmlFor="station-north-jeddah" className="text-sm">
              North Jeddah
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="dammam" id="station-dammam" />
            <label htmlFor="station-dammam" className="text-sm">
              Dammam Center
            </label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
