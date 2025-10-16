import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
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
  title: "Canaan Pharmacy | Trusted Pharmacy in Addis Ababa, Ethiopia",
  description:
    "Canaan Pharmacy in Addis Ababa has been serving the community for over 25 years. We provide high-quality medications, expert healthcare advice, and personalized service you can trust.",
  keywords: [
    "pharmacy in Addis Ababa",
    "Canaan Pharmacy",
    "Ethiopia healthcare",
    "medications Addis Ababa",
    "trusted pharmacy",
    "Canaan Pharmacy Ethiopia",
  ],
  openGraph: {
    title: "Canaan Pharmacy | Trusted Pharmacy in Addis Ababa",
    description:
      "Your reliable healthcare partner in Addis Ababa for over 25 years. Visit Canaan Pharmacy for trusted service and quality medications.",
    url: "https://canaanpharmacy.com.et",
    siteName: "Canaan Pharmacy",
    images: [
      {
        url: "/canaan-pharmacy-logo.png", 
        width: 1200,
        height: 630,
        alt: "Canaan Pharmacy storefront in Addis Ababa",
      },
    ],
    locale: "en_ET",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canaan Pharmacy | Trusted Pharmacy in Addis Ababa",
    description:
      "Providing quality medications and expert healthcare advice for over 25 years in Addis Ababa, Ethiopia.",
    images: ["/canaan-pharmacy-logo.png"], 
    
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  metadataBase: new URL("https://canaanpharmacy.com.et"),
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
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      name: "Canaan Pharmacy",
      image: "https://canaanpharmacy.com.et/canaan-pharmacy-logo.png",
      "@id": "https://canaanpharmacy.com.et",
      url: "https://canaanpharmacy.com.et",
      telephone: "+251909196651", 
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Summit Safari 30-meter road,In front of Awash Bank",
        addressLocality: "Addis Ababa",
        addressCountry: "ET",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 9.009770312293963,
        longitude: 38.853163934578646
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "08:00",
          closes: "22:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          opens: "08:00",
          closes: "22:30",
        },
      ],
    }),
  }}
/>

        <Toaster position="top-right" richColors expand={true} />
      </body>
    </html>
  )
}
