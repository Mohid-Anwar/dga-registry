"use client"

import * as React from "react"
import {
  ActivityIcon,
  Building02Icon,
  GlobeIcon,
  MapPinIcon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/registry/dga/ui/button"
import { DirectionProvider } from "@/registry/dga/ui/direction"
import { FormField } from "@/registry/dga/ui/form-field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectPlaceholderItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/dga/ui/select"
import { toastSuccess } from "@/registry/dga/ui/sonner"

/* ─── 1. Basic Select ─── */
export function SelectBasic() {
  return (
    <div className="bg-background rounded-lg border p-6">
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
    </div>
  )
}

/* ─── 2. Select Sizes ─── */
export function SelectSizes() {
  return (
    <div className="bg-background rounded-lg border p-6">
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
    </div>
  )
}

/* ─── 3. Grouped Select ─── */
export function SelectGrouped() {
  return (
    <div className="bg-background rounded-lg border p-6">
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
                <SelectItem value="voc">
                  VOC (Volatile Organic Compounds)
                </SelectItem>
                <SelectItem value="h2s">H₂S (Hydrogen Sulfide)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

/* ─── 4. Select with Icons ─── */
export function SelectWithIcons() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Select Station Type</label>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="background">
                <HugeiconsIcon icon={MapPinIcon} className="size-4" />
                Background
              </SelectItem>
              <SelectItem value="traffic">
                <HugeiconsIcon icon={ActivityIcon} className="size-4" />
                Traffic
              </SelectItem>
              <SelectItem value="industrial">
                <HugeiconsIcon icon={Building02Icon} className="size-4" />
                Industrial
              </SelectItem>
              <SelectItem value="suburban">
                <HugeiconsIcon icon={UserMultipleIcon} className="size-4" />
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
                <HugeiconsIcon icon={GlobeIcon} className="size-4" />
                English
              </SelectItem>
              <SelectItem value="ar">
                <HugeiconsIcon icon={GlobeIcon} className="size-4" />
                العربية (Arabic)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

/* ─── 5. Validation States ─── */
export function SelectValidation() {
  const [value, setValue] = React.useState("")
  const error = value === "" ? "Please select a station type" : undefined

  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col gap-4">
        <FormField
          label="Station Type"
          name="station-type"
          required
          error={error}
        >
          <Select name="station-type" value={value} onValueChange={setValue}>
            <SelectTrigger
              id="station-type"
              className="w-[280px]"
              aria-invalid={!!error}
            >
              <SelectValue placeholder="Select a station type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="background">Background</SelectItem>
              <SelectItem value="suburban">Suburban</SelectItem>
              <SelectItem value="traffic">Traffic</SelectItem>
            </SelectContent>
          </Select>
        </FormField>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Always Invalid</label>
          <Select>
            <SelectTrigger className="w-[280px]" aria-invalid>
              <SelectValue placeholder="This trigger is always invalid" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

/* ─── 6. Controlled Select ─── */
export function SelectControlled() {
  const [selectedStation, setSelectedStation] = React.useState("")
  const [selectedPollutant, setSelectedPollutant] = React.useState("")

  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Select Station</label>
          <Select value={selectedStation} onValueChange={setSelectedStation}>
            <SelectTrigger className="w-[320px]">
              <SelectValue placeholder="Select a station" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pshc">Prince Sultan Humanity City</SelectItem>
              <SelectItem value="al-hair">Al Hair</SelectItem>
              <SelectItem value="diplomatic">Diplomatic Quarter</SelectItem>
              <SelectItem value="corniche">Jeddah Corniche</SelectItem>
            </SelectContent>
          </Select>
          {selectedStation && (
            <p className="text-muted-foreground text-sm">
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
            <p className="text-muted-foreground text-sm">
              Selected: <strong>{selectedPollutant}</strong>
            </p>
          )}
        </div>

        {selectedStation && selectedPollutant && (
          <div className="bg-card mt-2 rounded-md border p-4">
            <h3 className="mb-2 text-sm font-semibold">Selection Summary</h3>
            <p className="text-sm">
              Viewing <strong>{selectedPollutant}</strong> data for{" "}
              <strong>{selectedStation}</strong> station
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── 7. Form Examples ─── */
export function SelectForms() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="space-y-8">
        {/* Station Configuration Form */}
        <div className="border-border bg-card rounded-lg border p-6">
          <h3 className="mb-4 text-lg font-semibold">Station Configuration</h3>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              toastSuccess("Configuration saved.", "Saved")
            }}
          >
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
        <div className="border-border bg-card rounded-lg border p-6">
          <h3 className="mb-4 text-lg font-semibold">Data Query</h3>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              toastSuccess("Query submitted.", "Fetching data")
            }}
          >
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
    </div>
  )
}

/* ─── 8. Width Variations ─── */
export function SelectWidths() {
  return (
    <div className="bg-background rounded-lg border p-6">
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
    </div>
  )
}

/* ─── 9. Placeholder Option (clearable) ─── */
export function SelectPlaceholderOption() {
  const [value, setValue] = React.useState("")

  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Region</label>
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a region" />
            </SelectTrigger>
            <SelectContent>
              <SelectPlaceholderItem>Select a region</SelectPlaceholderItem>
              <SelectItem value="riyadh">Riyadh</SelectItem>
              <SelectItem value="jeddah">Jeddah</SelectItem>
              <SelectItem value="dammam">Dammam</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <p className="text-muted-foreground text-sm">
          Selected value:{" "}
          <strong>{value === "" ? "(empty string)" : value}</strong>
        </p>
      </div>
    </div>
  )
}

/* ─── 10. RTL Support ─── */
export function SelectRtl() {
  return (
    <DirectionProvider dir="rtl">
      <div className="bg-background rounded-lg border p-6" dir="rtl">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">نوع المحطة</label>
            <Select dir="rtl">
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="اختر نوع المحطة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="background">خلفية</SelectItem>
                <SelectItem value="suburban">ضاحية</SelectItem>
                <SelectItem value="traffic">مرورية</SelectItem>
                <SelectItem value="industrial">صناعية</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">المنطقة</label>
            <Select dir="rtl">
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="اختر المنطقة" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>المناطق الرئيسية</SelectLabel>
                  <SelectItem value="riyadh">الرياض</SelectItem>
                  <SelectItem value="jeddah">جدة</SelectItem>
                  <SelectItem value="dammam">الدمام</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>المناطق المقدسة</SelectLabel>
                  <SelectItem value="makkah">مكة المكرمة</SelectItem>
                  <SelectItem value="madinah">المدينة المنورة</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </DirectionProvider>
  )
}
