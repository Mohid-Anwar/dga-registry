"use client"

import { useCallback, useRef, useState } from "react"
import { Cancel01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/dga/ui/button"

const DEFAULT_MAX_SIZE = 2 * 1024 * 1024 // 2 MB
const DEFAULT_MIME_TYPES = ["image/jpeg", "image/png", "application/pdf"]
const DEFAULT_EXTENSIONS = [".jpg", ".jpeg", ".png", ".pdf"]

interface FileUploadLabels {
  title: string
  description: string
  browse: string
  remove: string
  invalidType: string
  tooLarge: string
  invalidExtension: string
}

interface FileUploadFieldProps {
  name: string
  labels: FileUploadLabels
  error?: string
  className?: string
  maxSize?: number
  acceptedMimeTypes?: string[]
  acceptedExtensions?: string[]
  onFileChange?: (file: File | null) => void
}

export function FileUploadField({
  name,
  labels,
  error,
  className,
  maxSize = DEFAULT_MAX_SIZE,
  acceptedMimeTypes = DEFAULT_MIME_TYPES,
  acceptedExtensions = DEFAULT_EXTENSIONS,
  onFileChange,
}: FileUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [clientError, setClientError] = useState("")

  const validateFile = useCallback(
    (file: File): string => {
      if (!acceptedMimeTypes.includes(file.type)) {
        return labels.invalidType
      }
      if (
        !acceptedExtensions.some((ext) => file.name.toLowerCase().endsWith(ext))
      ) {
        return labels.invalidExtension
      }
      if (file.size > maxSize) {
        return labels.tooLarge
      }
      return ""
    },
    [labels, maxSize, acceptedMimeTypes, acceptedExtensions]
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    if (!file) return

    const validationError = validateFile(file)
    if (validationError) {
      setClientError(validationError)
      setSelectedFile(null)
      onFileChange?.(null)
      // Reset the native input so the same file can be re-selected
      if (inputRef.current) inputRef.current.value = ""
      return
    }

    setClientError("")
    setSelectedFile(file)
    onFileChange?.(file)
  }

  const handleRemove = () => {
    setSelectedFile(null)
    setClientError("")
    onFileChange?.(null)
    if (inputRef.current) inputRef.current.value = ""
  }

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  const displayError = clientError || error

  return (
    <div
      className={cn(
        "rounded-r8 bg-surface-neutral flex flex-col gap-4 p-6",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <p className="text-foreground text-base leading-6 font-normal">
          {labels.title}
        </p>
        <p className="text-subtle text-xs leading-4.5">{labels.description}</p>
      </div>

      {selectedFile ? (
        <div className="flex items-center gap-3">
          <span className="text-foreground truncate text-sm leading-5 font-medium">
            {selectedFile.name}
          </span>
          <span className="text-subtle shrink-0 text-xs">
            ({formatSize(selectedFile.size)})
          </span>
          <button
            type="button"
            onClick={handleRemove}
            className="text-error ms-auto flex shrink-0 cursor-pointer items-center gap-1 text-sm transition-opacity hover:opacity-70"
          >
            <HugeiconsIcon icon={Cancel01Icon} className="size-4" />
            {labels.remove}
          </button>
        </div>
      ) : (
        <Button
          type="button"
          size="sm"
          className="w-fit"
          onClick={() => inputRef.current?.click()}
        >
          {labels.browse}
        </Button>
      )}

      <input
        ref={inputRef}
        type="file"
        name={name}
        accept={acceptedExtensions.join(",")}
        className="sr-only"
        onChange={handleChange}
        aria-describedby={displayError ? `${name}-error` : undefined}
      />

      {displayError && (
        <p
          id={`${name}-error`}
          role="alert"
          aria-live="polite"
          className="text-error text-sm"
        >
          {displayError}
        </p>
      )}
    </div>
  )
}
