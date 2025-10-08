import { Card } from "@/components/ui/card"
import { Heart, Shield, Users, BookOpen, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Trust",
      description: "Building lasting relationships through honest, transparent care",
    },
    {
      icon: Shield,
      title: "Professionalism",
      description: "Expert guidance and quality service in every interaction",
    },
    {
      icon: Users,
      title: "Community",
      description: "A local partner invested in your family's wellbeing",
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Staying current with healthcare advances to serve you better",
    },
  ]

  const differences = [
    "Straight talk, no hard selling",
    "Local & reachable",
    "Loyalty programs (Canaan Care & Canaan Care Plus)",
    "Personalized healthcare advice",
  ]

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            A Pharmacy That Puts People Before Prescriptions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            For more than two decades, Canaan Pharmacy has been a steady, practical partner for families in Addis Ababa.
            We started as a small counter with a big goal: to make healthcare feel clear, honest, and accessible. Today,
            that goal still guides every decision we make.
          </p>
        </div>

        {/* Image + How We're Different */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/ethiopian-pharmacy-team-smiling-welcoming-customer.jpg"
              alt="Canaan Pharmacy team"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">How We're Different</h3>
            <div className="space-y-4 mb-8">
              {differences.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground/80">{item}</p>
                </div>
              ))}
            </div>

            <Card className="bg-primary/10 backdrop-blur-md border-primary/30 border-white/10 p-6 shadow-xl">
              <h4 className="text-xl font-semibold text-foreground mb-3">Our Promise</h4>
              <p className="text-foreground/80 leading-relaxed">
                Simple, respectful healthcare advice. We take the time to listen, explain clearly, and ensure you feel
                confident about your health decisions.
              </p>
            </Card>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="p-6 bg-card/40 backdrop-blur-md border-white/10 hover:bg-card/60 hover:shadow-xl hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Quick Facts */}
        <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-md border-primary/30 border-white/10 p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-foreground text-center mb-10">Quick Facts</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm font-medium text-foreground mb-1">Years of Experience</div>
              <div className="text-xs text-muted-foreground">Serving the community since 1998</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">7+</div>
              <div className="text-sm font-medium text-foreground mb-1">Core Services</div>
              <div className="text-xs text-muted-foreground">From prescriptions to consultations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm font-medium text-foreground mb-1">Ethical Standards</div>
              <div className="text-xs text-muted-foreground">Licensed and regulated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">3</div>
              <div className="text-sm font-medium text-foreground mb-1">Languages Spoken</div>
              <div className="text-xs text-muted-foreground">Amharic, English, Oromiffa</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
