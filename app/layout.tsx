import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

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

export const metadata: Metadata = {
  title: "Canaan Pharmacy - People First. Always. | Addis Ababa",
  description:
    "For over 25 years, Canaan Pharmacy has been a trusted healthcare partner in Addis Ababa, Ethiopia. Quality medications, expert advice, and community care.",
  keywords: "pharmacy, Addis Ababa, Ethiopia, medications, healthcare, Canaan Pharmacy",
  openGraph: {
    title: "Canaan Pharmacy - People First. Always.",
    description: "Trusted healthcare partner in Addis Ababa for over 25 years",
    type: "website",
  },
    generator: 'v0.app'
}

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
      </body>
    </html>
  )
}
