"use client"

import * as React from "react"

import { Button } from "@/registry/dga/ui/button"
import { CheckboxGroupField } from "@/registry/dga/ui/checkbox-group-field"

const STATION_TYPES = [
  { value: "background", label: "Background Station" },
  { value: "suburban", label: "Suburban Station" },
  { value: "traffic", label: "Traffic Station" },
  { value: "industrial", label: "Industrial Station" },
]

const POLLUTANTS = [
  { value: "pm25", label: "PM2.5 (Particulate Matter)" },
  { value: "pm10", label: "PM10 (Particulate Matter)" },
  { value: "no2", label: "NO₂ (Nitrogen Dioxide)" },
  { value: "so2", label: "SO₂ (Sulfur Dioxide)" },
  { value: "o3", label: "O₃ (Ozone)" },
  { value: "co", label: "CO (Carbon Monoxide)" },
]

/* ═══════════════════════════════════════════
   1 — Basic Checkbox Group Field
═══════════════════════════════════════════ */
export function CheckboxGroupFieldBasic() {
  const [selected, setSelected] = React.useState<string[]>([])

  return (
    <div className="bg-background rounded-lg border p-6">
      <CheckboxGroupField
        label="Station Types"
        name="station-types"
        options={STATION_TYPES}
        selected={selected}
        onChange={setSelected}
      />
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — Required with Error State
═══════════════════════════════════════════ */
export function CheckboxGroupFieldError() {
  const [selected, setSelected] = React.useState<string[]>([])
  const error = selected.length === 0 ? "Select at least one pollutant" : undefined

  return (
    <div className="bg-background rounded-lg border p-6">
      <CheckboxGroupField
        label="Pollutants to Monitor"
        name="pollutants"
        required
        error={error}
        options={POLLUTANTS}
        selected={selected}
        onChange={setSelected}
      />
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — Form Example
═══════════════════════════════════════════ */
export function CheckboxGroupFieldForm() {
  const [stationTypes, setStationTypes] = React.useState<string[]>([])
  const [pollutants, setPollutants] = React.useState<string[]>([])
  const [error, setError] = React.useState<string>()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(pollutants.length === 0 ? "Select at least one pollutant" : undefined)
  }

  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="border-border bg-card rounded-lg border p-6">
        <h3 className="mb-4 text-lg font-semibold">Monitoring Configuration</h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <CheckboxGroupField
            label="Station Types"
            name="station-types"
            options={STATION_TYPES}
            selected={stationTypes}
            onChange={setStationTypes}
          />

          <CheckboxGroupField
            label="Pollutants to Monitor"
            name="pollutants"
            required
            error={error}
            options={POLLUTANTS}
            selected={pollutants}
            onChange={setPollutants}
          />

          <div className="flex gap-2 pt-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Save Configuration</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
