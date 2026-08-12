"use client"

import { Checkbox } from "@/registry/dga/ui/checkbox"
import { FormField } from "@/registry/dga/ui/form-field"

interface CheckboxOption {
  value: string
  label: string
}

interface CheckboxGroupFieldProps {
  label: string
  name: string
  required?: boolean
  error?: string
  options: CheckboxOption[]
  selected: string[]
  onChange: React.Dispatch<React.SetStateAction<string[]>>
}

export function CheckboxGroupField({
  label,
  name,
  required,
  error,
  options,
  selected,
  onChange,
}: CheckboxGroupFieldProps) {
  const handleToggle = (value: string, checked: boolean) => {
    onChange((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    )
  }

  return (
    <FormField
      label={label}
      name={name}
      required={required}
      error={error}
      className="gap-3"
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-start gap-4"
          >
            <Checkbox
              checked={selected.includes(option.value)}
              onCheckedChange={(checked) =>
                handleToggle(option.value, checked === true)
              }
              aria-invalid={!!error}
            />
            <span className="text-heading text-base leading-6 font-medium">
              {option.label}
            </span>
          </label>
        ))}
      </div>

      {/* Hidden inputs to serialize selected values into FormData */}
      {selected.map((value) => (
        <input key={value} type="hidden" name={name} value={value} />
      ))}
    </FormField>
  )
}
