import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { AppDirectionProvider } from "@/components/direction-context"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "DGA Registry",
  description: "A collection of UI components and utilities for building Saudi data governance applications.",
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  let lang = "en"
  const dir = lang === "ar" ? "rtl" : "ltr"
  return (
    <html
      lang={lang}
      dir={dir}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <AppDirectionProvider defaultDirection={dir}>
          {children}
        </AppDirectionProvider>
      </body>
    </html>
  )
}
