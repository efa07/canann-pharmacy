"use client" // Must include this directive to use Framer Motion in Next.js App Router

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pill, Heart, Sparkles, Baby, ShieldCheck, UserRound, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

export function ServicesSection() {
  const services = [
    {
      icon: Pill,
      title: "Dispensing & Safety Checks",
      description: "Accurate prescription filling with thorough safety reviews to ensure proper medication use.",
    },
    {
      icon: ShieldCheck,
      title: "OTC & First Aid",
      description: "Over-the-counter medications and first aid supplies for everyday health needs.",
    },
    {
      icon: Heart,
      title: "Vitamins & Minerals",
      description: "Quality supplements to support your overall health and wellness goals.",
    },
    {
      icon: Baby,
      title: "Baby Formulas & Care",
      description: "Trusted infant nutrition and care products for your little ones.",
    },
    {
      icon: Sparkles,
      title: "Skincare & Cosmetics",
      description: "Dermatologist-recommended skincare and quality cosmetic products.",
    },
    {
      icon: UserRound,
      title: "Private Consultations",
      description: "One-on-one guidance on medications, health concerns, and wellness planning.",
    },
  ]

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  const containerStagger = {
    initial: "initial",
    animate: "animate",
    variants: {
      initial: {},
      animate: {
        transition: {
          staggerChildren: 0.1, // Delay between children animations
        },
      },
    },
  }

  // Motion-enabled Card to allow motion props on the Card component
  const MotionCard = motion(Card)

  return (
    <motion.section
      id="services"
      className="py-24 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          {...containerStagger}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            Comprehensive Healthcare Services
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed text-pretty"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            From prescription medications to wellness consultations, we provide a full range of pharmacy services
            tailored to your family's needs.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          {...containerStagger}
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <MotionCard
                key={index}
                className="p-8 bg-card/40 backdrop-blur-md border-white/10 hover:bg-card/60 hover:shadow-2xl hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
                variants={fadeIn} // Staggered fade-up
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }} // Subtle lift and shadow on hover
              >
                {/* Icon animation */}
                <motion.div
                  // Updated: Use a consistent, slightly more opaque primary background for better contrast
                  className="w-14 h-14 rounded-2xl bg-primary/30 backdrop-blur-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-white/10"
                  initial={{ rotate: -15, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  {/* Updated: Always use text-primary for the icon color */}
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </MotionCard>
            )
          })}
        </motion.div>

        {/* Coming Soon Section */}
        <MotionCard
          className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-md border-primary/30 p-8 md:p-12 text-center shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
        </MotionCard>
      </div>
    </motion.section>
  )
}