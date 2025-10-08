"use client"
import { Card } from "@/components/ui/card"
import { Heart, Shield, Users, BookOpen, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import PharmacyFacts from "./pharmacyfact"
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

  // Define simple animation variants for reusability
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const containerStagger = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1, // Delay between children animations
      },
    },
  }

  // Motion-enabled Card so we can apply motion props to the Card component
  const MotionCard = motion(Card)

  return (
    // 2. Wrap the main section with motion.section and set a small initial fade-up
    <motion.section
      id="about"
      className="py-24 bg-muted/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        {/* 3. Animate the header block */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          variants={containerStagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Use motion.h2 and motion.p for the individual elements */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            variants={fadeIn}
          >
            A Pharmacy That Puts People Before Prescriptions
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed text-pretty"
            variants={fadeIn}
          >
            For more than two decades, Canaan Pharmacy has been a steady, practical partner for families in Addis Ababa.
            We started as a small counter with a big goal: to make healthcare feel clear, honest, and accessible. Today,
            that goal still guides every decision we make.
          </motion.p>
        </motion.div>

        {/* Image + How We're Different */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* 4. Animate the Image section */}
          <motion.div
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/ethiopian-pharmacy-team-smiling-welcoming-customer.jpg"
              alt="Canaan Pharmacy team"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* 5. Animate the Differences section (Right Column) */}
          <motion.div
            variants={containerStagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 className="text-3xl font-bold text-foreground mb-6" variants={fadeIn}>How We're Different</motion.h3>
            <motion.div className="space-y-4 mb-8" variants={containerStagger}>
              {differences.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={fadeIn} // Each item fades in with stagger
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground/80">{item}</p>
                </motion.div>
              ))}
            </motion.div>

            <MotionCard
              className="bg-primary/10 backdrop-blur-md border-primary/30 p-6 shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold text-foreground mb-3">Our Promise</h4>
              <p className="text-foreground/80 leading-relaxed">
                Simple, respectful healthcare advice. We take the time to listen, explain clearly, and ensure you feel
                confident about your health decisions.
              </p>
            </MotionCard>
          </motion.div>
        </div>
        

        {/* Values Grid */}
        <motion.div
          className="mb-20"
          variants={containerStagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h3 className="text-3xl font-bold text-foreground text-center mb-12" variants={fadeIn}>Our Values</motion.h3>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerStagger}>
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                // 6. Animate each Value Card
                <MotionCard
                  key={index}
                  className="p-6 bg-card/40 backdrop-blur-md hover:bg-card/60 hover:shadow-xl hover:border-white/20 transition-all duration-300"
                  variants={fadeIn} // Apply fade-up/stagger to each card
                  whileHover={{ scale: 1.05 }} // Subtle scale on hover
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </MotionCard>
              )
            })}
          </motion.div>
        </motion.div>

       {/* Quick Facts */}
        <MotionCard
          className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-md border-primary/30 p-8 md:p-12 shadow-xl"
          // Animate the entire card into view
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Header Animation */}
          <motion.h3 
            className="text-3xl font-bold text-foreground text-center mb-10" 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Quick Facts
          </motion.h3>
          <div>
            <PharmacyFacts />
            </div>

        </MotionCard>
      </div>
    </motion.section>
  )
}