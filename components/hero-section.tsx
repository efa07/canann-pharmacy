import { Button } from "@/components/ui/button"
import { MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/warm-friendly-ethiopian-pharmacist-helping-custome.jpg"
          alt="Canaan Pharmacy - Caring service"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 shadow-lg">
            <span className="text-sm font-medium text-primary">Serving Addis Ababa for 25+ Years</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            People First.
            <br />
            <span className="text-primary">Always.</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed text-pretty max-w-2xl">
            Your trusted healthcare partner in Addis Ababa. Quality medications, expert advice, and genuine care for
            every member of your family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="text-base" asChild>
              <a href="#contact">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
              <a href="https://maps.app.goo.gl/W7wqvSDeYM63Ypbi8" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5 mr-2" />
                Find Us on Maps
              </a>
            </Button>
          </div>

          {/* Quick Info Cards - Enhanced glassmorphism effect */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-card/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-card/70 hover:scale-105 transition-all">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Years of Service</div>
            </div>
            <div className="bg-card/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-card/70 hover:scale-105 transition-all">
              <div className="text-3xl font-bold text-primary mb-2">7</div>
              <div className="text-sm text-muted-foreground">Days a Week</div>
            </div>
            <div className="bg-card/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-card/70 hover:scale-105 transition-all">
              <div className="text-3xl font-bold text-primary mb-2">14</div>
              <div className="text-sm text-muted-foreground">Hours Daily</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  )
}
