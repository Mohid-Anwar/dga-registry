"use client"

import * as React from "react"
import { NavigationMenuRtl } from "./component"

export function NavigationMenuDemo() {
  const [lang, setLang] = React.useState<"ar" | "en">("ar")
  const dir = lang === "ar" ? "rtl" : "ltr"

  const toggleLanguage = () => {
    setLang(lang === "ar" ? "en" : "ar")
  }

  return (
    <div className="rounded-lg border bg-background p-6" dir={dir}>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {lang === "ar" ? "عرض باللغة العربية" : "Displaying in English"}
        </p>
        <button
          type="button"
          onClick={toggleLanguage}
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {lang === "ar" ? "English" : "العربية"}
        </button>
      </div>
      <div className="h-16 rounded-md border border-border">
        <NavigationMenuRtl dir={dir} lang={lang} />
      </div>
    </div>
  )
}
