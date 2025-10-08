import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Canaan Pharmacy</span>
                <span className="text-xs text-background/70 leading-tight">People First. Always.</span>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Your trusted healthcare partner in Addis Ababa for over 25 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="#home" className="text-sm text-background/70 hover:text-background transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-sm text-background/70 hover:text-background transition-colors">
                About Us
              </Link>
              <Link href="#services" className="text-sm text-background/70 hover:text-background transition-colors">
                Services
              </Link>
              <Link href="#contact" className="text-sm text-background/70 hover:text-background transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a
                  href="tel:+251909196651"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  +251 909 196 651
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a
                  href="mailto:canaanpharmacymain@gmail.com"
                  className="text-sm text-background/70 hover:text-background transition-colors break-all"
                >
                  canaanpharmacymain@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <div className="text-sm text-background/70">
                  <div>Sunday – Monday</div>
                  <div>8 AM – 10 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a
                  href="https://maps.app.goo.gl/W7wqvSDeYM63Ypbi8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Summit Safari 30-meter road, In front of Awash Bank, Addis Ababa
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">© {currentYear} Canaan Pharmacy. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a
                href="https://wa.me/251909196651"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/+251909196651"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Telegram
              </a>
              <span className="text-sm text-background/70">TikTok & YouTube (Coming Soon)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
