import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pill, Heart, Sparkles, Baby, ShieldCheck, UserRound, ShoppingCart } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Pill,
      title: "Dispensing & Safety Checks",
      description: "Accurate prescription filling with thorough safety reviews to ensure proper medication use.",
      color: "text-primary",
    },
    {
      icon: ShieldCheck,
      title: "OTC & First Aid",
      description: "Over-the-counter medications and first aid supplies for everyday health needs.",
      color: "text-secondary",
    },
    {
      icon: Heart,
      title: "Vitamins & Minerals",
      description: "Quality supplements to support your overall health and wellness goals.",
      color: "text-primary",
    },
    {
      icon: Baby,
      title: "Baby Formulas & Care",
      description: "Trusted infant nutrition and care products for your little ones.",
      color: "text-secondary",
    },
    {
      icon: Sparkles,
      title: "Skincare & Cosmetics",
      description: "Dermatologist-recommended skincare and quality cosmetic products.",
      color: "text-primary",
    },
    {
      icon: UserRound,
      title: "Private Consultations",
      description: "One-on-one guidance on medications, health concerns, and wellness planning.",
      color: "text-secondary",
    },
  ]

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            From prescription medications to wellness consultations, we provide a full range of pharmacy services
            tailored to your family's needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-8 bg-card/40 backdrop-blur-md border-white/10 hover:bg-card/60 hover:shadow-2xl hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-white/10">
                  <Icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Coming Soon Section */}
        <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-md border-primary/30 p-8 md:p-12 text-center shadow-xl">
          <Badge className="mb-4 bg-primary/20 backdrop-blur-sm text-primary border-primary/30 hover:bg-primary/30">
            Coming Soon
          </Badge>
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingCart className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Online Orders</h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're building a convenient online ordering system so you can request medications and products from the
            comfort of your home. Stay tuned for updates!
          </p>
        </Card>
      </div>
    </section>
  )
}
