"use client"

import { useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha"

import { useMedia } from "@/hooks/use-media"

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""

interface RecaptchaWidgetProps {
  lang: string
  sitekey?: string
  ref?: React.Ref<ReCAPTCHA>
  onChange?: (token: string | null) => void
  onExpired?: () => void
  onErrored?: () => void
}

export function RecaptchaWidget({
  lang,
  sitekey = RECAPTCHA_SITE_KEY,
  ref,
  onChange,
  onExpired,
  onErrored,
}: RecaptchaWidgetProps) {
  const internalRef = useRef<ReCAPTCHA>(null)
  const resolvedRef = ref ?? internalRef

  const isCompact = useMedia("(max-width: 374px)")

  return (
    <ReCAPTCHA
      key={isCompact ? "compact" : "normal"}
      ref={resolvedRef}
      sitekey={sitekey}
      hl={lang}
      size={isCompact ? "compact" : "normal"}
      onChange={onChange}
      onExpired={onExpired}
      onErrored={onErrored}
    />
  )
}
