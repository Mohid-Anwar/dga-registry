"use client"

import * as React from "react"

import { Button } from "@/registry/dga/ui/button"
import { FileUploadField } from "@/registry/dga/ui/file-upload-field"

const LABELS = {
  title: "Upload station calibration certificate",
  description: "PDF, JPG, or PNG, up to 2 MB",
  browse: "Browse files",
  remove: "Remove",
  invalidType: "File type not supported",
  tooLarge: "File exceeds the 2 MB limit",
  invalidExtension: "File extension not supported",
}

/* ═══════════════════════════════════════════
   1 — Basic Upload
═══════════════════════════════════════════ */
export function FileUploadFieldBasic() {
  const [file, setFile] = React.useState<File | null>(null)

  return (
    <div className="bg-background mt-4 rounded-lg border p-6">
      <div className="flex flex-col gap-4">
        <FileUploadField
          name="certificate"
          labels={LABELS}
          onFileChange={setFile}
        />
        {file && (
          <p className="text-muted-foreground text-sm">
            Selected: <strong>{file.name}</strong>
          </p>
        )}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — Error State
═══════════════════════════════════════════ */
export function FileUploadFieldError() {
  return (
    <div className="bg-background rounded-lg border p-6">
      <FileUploadField
        name="certificate-error"
        labels={LABELS}
        error="A calibration certificate is required"
      />
    </div>
  )
}

/* ═══════════════════════════════════════════
   3 — Custom Validation Rules
═══════════════════════════════════════════ */
export function FileUploadFieldCustomRules() {
  const [file, setFile] = React.useState<File | null>(null)

  return (
    <div className="bg-background rounded-lg border p-6">
      <div className="flex flex-col gap-4">
        <FileUploadField
          name="station-photo"
          labels={{
            title: "Upload station photo",
            description: "JPG or PNG only, up to 5 MB",
            browse: "Browse files",
            remove: "Remove",
            invalidType: "Only JPG or PNG images are accepted",
            tooLarge: "File exceeds the 5 MB limit",
            invalidExtension: "Only .jpg, .jpeg, or .png files are accepted",
          }}
          maxSize={5 * 1024 * 1024}
          acceptedMimeTypes={["image/jpeg", "image/png"]}
          acceptedExtensions={[".jpg", ".jpeg", ".png"]}
          onFileChange={setFile}
        />
        {file && (
          <p className="text-muted-foreground text-sm">
            Selected: <strong>{file.name}</strong>
          </p>
        )}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   4 — Form Example
═══════════════════════════════════════════ */
export function FileUploadFieldForm() {
  const [certificate, setCertificate] = React.useState<File | null>(null)
  const [error, setError] = React.useState<string>()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(certificate ? undefined : "A calibration certificate is required")
  }

  return (
    <div className="bg-background mt-4 rounded-lg border p-6">
      <div className="border-border bg-card rounded-lg border p-6">
        <h3 className="mb-4 text-lg font-semibold">Station Registration</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <FileUploadField
            name="certificate"
            labels={LABELS}
            error={error}
            onFileChange={setCertificate}
          />

          <div className="flex gap-2 pt-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Register Station</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   5 — RTL Support
═══════════════════════════════════════════ */
const LABELS_AR = {
  title: "ارفع شهادة معايرة المحطة",
  description: "ملفات PDF أو JPG أو PNG، بحد أقصى ٢ ميجابايت",
  browse: "استعراض الملفات",
  remove: "إزالة",
  invalidType: "نوع الملف غير مدعوم",
  tooLarge: "حجم الملف يتجاوز ٢ ميجابايت",
  invalidExtension: "امتداد الملف غير مدعوم",
}

export function FileUploadFieldRtl() {
  const [file, setFile] = React.useState<File | null>(null)

  return (
    <div className="bg-background rounded-lg border p-6" dir="rtl">
      <div className="flex flex-col gap-4">
        <FileUploadField
          name="certificate-rtl"
          labels={LABELS_AR}
          onFileChange={setFile}
        />
        {file && (
          <p className="text-muted-foreground text-sm">
            الملف المحدد: <strong>{file.name}</strong>
          </p>
        )}
      </div>
    </div>
  )
}
