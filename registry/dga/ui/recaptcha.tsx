"use client"

import { useEffect, useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha"

import { useMedia } from "@/hooks/use-media"

const RECAPTCHA_MODAL_FIX_ID = "dga-recaptcha-modal-fix"

/* The reCAPTCHA challenge iframe is appended to document.body, outside any
   Dialog's DOM subtree, so a modal that sets pointer-events: none on body
   siblings (radix-ui/primitives#1385) makes it unclickable. Scoped styles
   can't reach a node mounted outside the component tree, so the override
   is injected as a global stylesheet at runtime instead of shipped as CSS
   the consumer has to remember to add to their own globals.

   Reading `.nonce` (not getAttribute, which CSP hides from serialization)
   off any existing nonced element lets this inline <style> pass a strict
   style-src CSP that only allow-lists a nonce. Without a nonce/hash and
   without 'unsafe-inline', the browser drops the rule silently — consumers
   under that policy must add it to their own global stylesheet instead. */
function useRecaptchaModalFix() {
  useEffect(() => {
    // Injected once per document and intentionally never removed: with
    // multiple widgets mounted, unmounting one would strip the fix out
    // from under the others still relying on it.
    if (document.getElementById(RECAPTCHA_MODAL_FIX_ID)) return

    const nonce = document.querySelector<HTMLElement & { nonce: string }>(
      "[nonce]"
    )?.nonce

    const style = document.createElement("style")
    style.id = RECAPTCHA_MODAL_FIX_ID
    if (nonce) style.nonce = nonce
    style.textContent = `
      body > div:has(iframe[src*="recaptcha/api2/bframe"]) {
        pointer-events: auto !important;
      }
    `
    document.head.appendChild(style)
  }, [])
}

interface RecaptchaWidgetProps {
  lang: string
  sitekey: string
  ref?: React.Ref<ReCAPTCHA>
  onChange?: (token: string | null) => void
  onExpired?: () => void
  onErrored?: () => void
}

export function RecaptchaWidget({
  lang,
  sitekey,
  ref,
  onChange,
  onExpired,
  onErrored,
}: RecaptchaWidgetProps) {
  const internalRef = useRef<ReCAPTCHA>(null)
  const resolvedRef = ref ?? internalRef

  const isCompact = useMedia("(max-width: 374px)")

  useRecaptchaModalFix()

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
