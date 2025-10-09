import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Toaster } from "sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata = {
  title: "Canaan Pharmacy",
  description: "Trusted pharmacy in Addis Ababa for 25+ years, providing quality healthcare and personalized service.",
  keywords: [
  "Pharmacy in Addis Ababa",
  "Canaan Pharmacy",
  "Healthcare Ethiopia",
  "Pharmacy near me",
  "Best pharmacy in Ethiopia",
  "Addis Ababa pharmacy",
  "Online pharmacy Ethiopia",
  "Prescription refill Addis Ababa",
  "Pharmaceutical services Ethiopia",
  "Trusted pharmacy Addis Ababa",
  "Medicine delivery Addis Ababa",
  "Generic medicines Ethiopia",
  "Affordable healthcare Ethiopia",
  "Pharmacist consultation Ethiopia",
  "Health and wellness Addis Ababa",
  "Buy medicine online Ethiopia",
  "Canaan Pharmacy Summit",
  "Summit pharmacy Addis Ababa",
  "Medical supplies Ethiopia",
  "Over-the-counter drugs Ethiopia"
],

  openGraph: {
    title: "Canaan Pharmacy",
    description: "People First. Always.",
    url: "https://canaanpharmacy.com.et",
    siteName: "Canaan Pharmacy",
    images: [
      {
        url: "/canaan-pharmacy-logo.png",
        width: 1200,
        height: 630,
        alt: "Canaan Pharmacy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canaan Pharmacy",
    description: "People First. Always.",
    images: ["/canaan-pharmacy-logo.png"],
  },
  alternates: {
    canonical: "https://canaanpharmacy.com.et",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Toaster position="top-right" richColors expand={true} />
      </body>
    </html>
  )
}
