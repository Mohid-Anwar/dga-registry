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
    default:
      "DGA Components – Digital Government Authority Saudi Arabia UI Library",
    template: "%s – DGA Components | Digital Government Authority",
  },
  description:
    "UI component library based on the Digital Government Authority (DGA) Platforms Code design system. Production-ready React, Next.js, Laravel, Vite, Astro, and TanStack components with full RTL support, Arabic typography, and WCAG accessibility compliance.",
  keywords: [
    "DGA",
    "Digital Government Authority",
    "Platforms Code",
    "Saudi Arabia",
    "هيئة الحكومة الرقمية",
    "Saudi design system",
    "UI components",
    "shadcn",
    "RTL",
    "Arabic",
    "React components",
    "Next.js components",
    "Laravel components",
    "Vite components",
    "Astro components",
    "TanStack components",
    "Tailwind CSS",
    "accessibility",
    "data governance",
    "Saudi government",
    "component library",
    "design tokens",
    "IBM Plex Sans Arabic",
    "WCAG",
    "مكونات واجهة المستخدم",
  ],
  authors: [
    { name: "Mohid Anwar", url: "https://www.linkedin.com/in/mohid-anwar" },
  ],
  creator: "Mohid Anwar",
  publisher: "Mohid Anwar",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    url: "https://dga-registry.vercel.app",
    siteName: "DGA Components",
    title:
      "DGA Components – Digital Government Authority Saudi Arabia UI Library",
    description:
      "Production-ready, accessible UI components based on DGA Platforms Code design system. Built on shadcn/ui with DGA design tokens, full RTL support, and IBM Plex Sans Arabic typography. For React, Next.js, Laravel, Vite, Astro, and TanStack.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DGA Components – Digital Government Authority Saudi Arabia",
    description:
      "UI component library based on DGA Platforms Code. React, Next.js, Laravel, Vite & more with RTL support and Arabic typography.",
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
  alternates: {
    canonical: "https://dga-registry.vercel.app",
    languages: {
      "en-US": "https://dga-registry.vercel.app",
      "ar-SA": "https://dga-registry.vercel.app",
    },
  },
  verification: {
    google: "eqU_RE13gLMhPJlk0j-qNVygQJGMBamIKirglW83qpw",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let lang = "en"
  const dir = lang === "ar" ? "rtl" : "ltr"

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://dga-registry.vercel.app/#author",
        name: "Mohid Anwar",
        url: "https://www.linkedin.com/in/mohid-anwar",
        sameAs: [
          "https://github.com/Mohid-Anwar",
          "https://www.npmjs.com/~mohid-anwar",
          "https://www.linkedin.com/in/mohid-anwar",
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://dga-registry.vercel.app/#organization",
        name: "Digital Government Authority",
        alternateName: ["DGA", "هيئة الحكومة الرقمية"],
        url: "https://dga.gov.sa",
      },
      {
        "@type": "WebSite",
        "@id": "https://dga-registry.vercel.app/#website",
        url: "https://dga-registry.vercel.app",
        name: "DGA Components",
        description:
          "UI component library based on the DGA Platforms Code design system of Saudi Arabia",
        creator: {
          "@id": "https://dga-registry.vercel.app/#author",
        },
        about: {
          "@id": "https://dga-registry.vercel.app/#organization",
        },
        inLanguage: ["en-US", "ar-SA"],
      },
      {
        "@type": "SoftwareApplication",
        name: "DGA Components",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        description:
          "Production-ready React, Next.js, Laravel, Vite, Astro, and TanStack UI components based on DGA Platforms Code design system with RTL support and Arabic typography.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        author: {
          "@id": "https://dga-registry.vercel.app/#author",
        },
      },
    ],
  }

  return (
    <html
      lang={lang}
      dir={dir}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AppDirectionProvider defaultDirection={dir}>
          {children}
        </AppDirectionProvider>
      </body>
    </html>
  )
}
