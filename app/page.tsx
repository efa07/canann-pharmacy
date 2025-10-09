import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"


export const metadata = {
  title: "Canaan Pharmacy | People First. Always.",
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


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
