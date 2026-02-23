"use client"

import * as React from "react"
import { NavigationMenuRtl } from "./component"

export default function NavigationMenuPage() {
  const [lang, setLang] = React.useState<"ar" | "en">("ar")
  const dir = lang === "ar" ? "rtl" : "ltr"

  const toggleLanguage = () => {
    setLang(lang === "ar" ? "en" : "ar")
  }

  return (
    <div className="min-h-screen p-8" dir={dir}>
      <button
        type="button"
        onClick={toggleLanguage}
        className="fixed top-4 left-4 z-50 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        {lang === "ar" ? "English" : "العربية"}
      </button>
      
      <div className="flex flex-col items-center pt-20">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Navigation Menu</h1>
          <p className="text-muted-foreground">
            A collection of links for navigating websites.
          </p>
        </div>
        <div className="h-16 border border-border rounded-md">
          <NavigationMenuRtl dir={dir} lang={lang} />
        </div>
      </div>
    </div>
  )
}
