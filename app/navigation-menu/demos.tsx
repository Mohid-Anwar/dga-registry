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
    <div className="bg-background rounded-lg border p-6" dir={dir}>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-muted-foreground text-sm">
          {lang === "ar" ? "عرض باللغة العربية" : "Displaying in English"}
        </p>
        <button
          type="button"
          onClick={toggleLanguage}
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm transition-colors"
        >
          {lang === "ar" ? "English" : "العربية"}
        </button>
      </div>
      <div className="border-border h-16 rounded-md border">
        <NavigationMenuRtl dir={dir} lang={lang} />
      </div>
    </div>
  )
}
