"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("#home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    // Function to update the active link based on the current hash
    const handleHashChange = () => {
      const currentHash = window.location.hash || '#home';
      setActiveLink(currentHash);
    }

    // Set initial active link
    handleHashChange();

    window.addEventListener("scroll", handleScroll)
    // Listen for hash changes (e.g., when clicking a nav link)
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 transition-transform group-hover:scale-105 rounded-full overflow-hidden border border-white/20">
              <Image
                src="/canaan-pharmacy-logo.png"
                alt="Canaan Pharmacy Logo"
                fill
                className="object-contain rounded-md"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground leading-tight">Canaan Pharmacy</span>
              <span className="text-xs text-muted-foreground leading-tight">People First. Always.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium rounded-full px-4 py-2 transition-all duration-300 ${
                    isActive 
                      ? "bg-primary text-white shadow-md" 
                      : "text-foreground/80 hover:text-primary hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+251909196651">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10 bg-background/80 backdrop-blur-xl">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    // UPDATED: Applied active link styling to mobile menu
                    className={`text-base font-medium transition-colors px-4 py-2 rounded-lg mx-2 ${
                      isActive 
                        ? "bg-primary text-white shadow-sm" 
                        : "text-foreground/80 hover:text-primary hover:bg-white/10"
                    }`}
                    onClick={() => {
                      setActiveLink(link.href)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="flex flex-col gap-3 px-4 pt-4 border-t border-white/10 mx-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground/80">Theme</span>
                  <ThemeToggle />
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+251909196651">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}