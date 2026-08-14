"use client"

import * as React from "react"

import { Button } from "@/registry/dga/ui/button"
import { DirectionProvider } from "@/registry/dga/ui/direction"
import { FormField } from "@/registry/dga/ui/form-field"
import { Input } from "@/registry/dga/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/dga/ui/select"

/* ═══════════════════════════════════════════
   1 — Basic Form Field
═══════════════════════════════════════════ */
export function FormFieldBasic() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col gap-4">
        <FormField label="Station Name" name="station-name">
          <Input
            id="station-name"
            name="station-name"
            placeholder="e.g. Al Hair"
          />
        </FormField>

        <FormField label="Contact Email" name="contact-email" required>
          <Input
            id="contact-email"
            name="contact-email"
            type="email"
            placeholder="you@example.com"
          />
        </FormField>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — Error State
═══════════════════════════════════════════ */
export function FormFieldError() {
  const [value, setValue] = React.useState("")
  const error =
    value.length > 0 && value.length < 3
      ? "Must be at least 3 characters"
      : undefined

  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col gap-4">
        <FormField
          label="Station Code"
          name="station-code"
          required
          error={error}
        >
          <Input
            id="station-code"
            name="station-code"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-invalid={!!error}
            placeholder="e.g. RUH-01"
          />
        </FormField>

        <FormField label="Notes" name="notes" error="This field is required">
          <Input
            id="notes"
            name="notes"
            aria-invalid
            placeholder="Optional notes"
          />
        </FormField>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — Wrapping Non-Input Controls
═══════════════════════════════════════════ */
export function FormFieldSelect() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col gap-4">
        <FormField label="Region" name="region" required>
          <Select name="region">
            <SelectTrigger id="region" className="w-full">
              <SelectValue placeholder="Select a region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="riyadh">Riyadh</SelectItem>
              <SelectItem value="jeddah">Jeddah</SelectItem>
              <SelectItem value="dammam">Dammam</SelectItem>
            </SelectContent>
          </Select>
        </FormField>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   4 — Full Form Example
═══════════════════════════════════════════ */
export function FormFieldForm() {
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const nextErrors: Record<string, string> = {}
    if (!data.get("station-name"))
      nextErrors["station-name"] = "Station name is required"
    if (!data.get("contact-email"))
      nextErrors["contact-email"] = "Contact email is required"
    setErrors(nextErrors)
  }

  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="border-border bg-card rounded-lg border p-6">
        <h3 className="mb-4 text-lg font-semibold">Register a Station</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <FormField
            label="Station Name"
            name="station-name"
            required
            error={errors["station-name"]}
          >
            <Input
              id="station-name"
              name="station-name"
              aria-invalid={!!errors["station-name"]}
              placeholder="e.g. Diplomatic Quarter"
            />
          </FormField>

          <FormField
            label="Contact Email"
            name="contact-email"
            required
            error={errors["contact-email"]}
          >
            <Input
              id="contact-email"
              name="contact-email"
              type="email"
              aria-invalid={!!errors["contact-email"]}
              placeholder="you@example.com"
            />
          </FormField>

          <div className="flex gap-2 pt-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   5 — RTL Support
═══════════════════════════════════════════ */
export function FormFieldRtl() {
  return (
    <DirectionProvider dir="rtl">
      <div className="bg-background rounded-lg border p-6" dir="rtl">
        <div className="flex flex-col gap-4">
          <FormField label="اسم المحطة" name="station-name-rtl" required>
            <Input
              id="station-name-rtl"
              name="station-name-rtl"
              placeholder="مثال: الحائر"
            />
          </FormField>

          <FormField
            label="رمز المحطة"
            name="station-code-rtl"
            required
            error="يجب ألا يقل عن ٣ أحرف"
          >
            <Input
              id="station-code-rtl"
              name="station-code-rtl"
              aria-invalid
              placeholder="مثال: RUH-01"
            />
          </FormField>

          <FormField label="المنطقة" name="region-rtl" required>
            <Select dir="rtl" name="region-rtl">
              <SelectTrigger id="region-rtl" className="w-full">
                <SelectValue placeholder="اختر المنطقة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="riyadh">الرياض</SelectItem>
                <SelectItem value="jeddah">جدة</SelectItem>
                <SelectItem value="dammam">الدمام</SelectItem>
              </SelectContent>
            </Select>
          </FormField>
        </div>
      </div>
    </DirectionProvider>
  )
}
