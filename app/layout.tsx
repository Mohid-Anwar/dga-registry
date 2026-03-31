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
  metadataBase: new URL("https://dga-registry.vercel.app"),
  title: {
    default: "DGA Registry",
    template: "%s – DGA Registry",
  },
  description:
    "A collection of UI components and utilities for building Saudi data governance applications. Built on shadcn/ui with DGA design tokens, RTL support, and IBM Plex Sans Arabic.",
  keywords: [
    "DGA",
    "Saudi",
    "design system",
    "UI components",
    "shadcn",
    "RTL",
    "Arabic",
    "React",
    "Next.js",
    "Tailwind CSS",
    "accessibility",
    "data governance",
  ],
  authors: [{ name: "DGA Registry" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dga-registry.vercel.app",
    siteName: "DGA Registry",
    title: "DGA Registry",
    description:
      "Beautifully designed, accessible UI components built on shadcn/ui with DGA design tokens, RTL support, and IBM Plex Sans Arabic typography.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DGA Registry",
    description:
      "Accessible UI components with DGA design tokens, RTL support, and IBM Plex Sans Arabic typography.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
