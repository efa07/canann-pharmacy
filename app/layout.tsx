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
  icons: {
  icon: [
    { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/favicon.ico', sizes: 'any' },
  ],
  apple: '/apple-touch-icon.png',
  shortcut: '/favicon.ico',
},

   
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
        <Toaster position="top-right" richColors expand={true} />
      </body>
    </html>
  )
}
