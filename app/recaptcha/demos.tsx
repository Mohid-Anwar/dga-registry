"use client"

import { useState } from "react"

import { RecaptchaWidget } from "@/registry/dga/ui/recaptcha"

/* Google's public test key pair — always validates, and renders a
   "for testing purposes only" watermark on the widget. Never use in
   production; get a real key pair at google.com/recaptcha/admin. */
const TEST_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ??
  "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"

/* ═══════════════════════════════════════════
   1 — Basic
═══════════════════════════════════════════ */
export function RecaptchaBasic() {
  const [token, setToken] = useState<string | null>(null)

  return (
    <div className="bg-background flex flex-col items-center gap-4 rounded-lg border p-6">
      <RecaptchaWidget
        lang="en"
        sitekey={TEST_SITE_KEY}
        onChange={setToken}
        onExpired={() => setToken(null)}
      />
      <p className="text-muted-foreground text-sm">
        {token ? "Verified ✓" : "Not verified"}
      </p>
    </div>
  )
}

/* ═══════════════════════════════════════════
   2 — Arabic (RTL)
═══════════════════════════════════════════ */
export function RecaptchaArabic() {
  return (
    <div className="bg-background flex justify-center rounded-lg border p-6">
      <RecaptchaWidget lang="ar" sitekey={TEST_SITE_KEY} />
    </div>
  )
}
