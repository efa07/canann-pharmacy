"use client"

import { Button } from "@/components/ui/button"
import { MapPin, MessageCircle } from "lucide-react" 
import Image from "next/image"
import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const headingContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 120,
    },
  },
}

export function HeroSection() {
  const headingText = "People First. Always."
  const headingWords = headingText.split(" ")

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden pt-20 md:pt-24"
    >
      {/* Background with subtle zoom animation */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <Image
          src="/warm-friendly-ethiopian-pharmacist-helping-custome.jpg"
          alt="Canaan Pharmacy - Caring service"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </motion.div>

      {/* Foreground Content */}
      <div className="scale-98 container relative z-10 mx-auto px-6 text-center md:text-left flex flex-col justify-center items-center md:items-start h-full">
        <motion.div
          className="max-w-3xl text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center gap-3 mb-8 rounded-full border border-primary/40 
                       bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 
                       px-6 py-2 backdrop-blur-md shadow-lg shadow-primary/10"
          >
            <span className="text-base font-semibold text-primary tracking-wide drop-shadow-sm">
              Serving Addis Ababa for 25+ Years
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="mb-6 text-5xl md:text-7xl font-extrabold leading-tight text-foreground tracking-tight"
            variants={headingContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mb-10 text-lg md:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
            Your trusted healthcare partner in Addis Ababa — providing quality
            medications, expert advice, and genuine care for every member of
            your family.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12"
          >
            <Button size="lg" className="text-base font-semibold" asChild>
              <a href="#contact">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-semibold bg-transparent backdrop-blur-sm border border-primary/40 hover:from-primary/25 hover:to-secondary/25"
              asChild
            >
              <a
                href="https://maps.app.goo.gl/W7wqvSDeYM63Ypbi8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Find Us on Maps
              </a>
            </Button>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-auto"
            variants={containerVariants}
          >
            {[
              { value: "25+", label: "Years of Service" },
              { value: "7", label: "Days a Week" },
              { value: "14", label: "Hours Daily" },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  transition: { duration: 0.25 },
                }}
                className="rounded-3xl p-6 bg-gradient-to-br from-primary/15 via-secondary/15 to-primary/15 
                           border border-primary/40 shadow-lg backdrop-blur-md 
                           hover:from-primary/25 hover:to-secondary/25 transition-all duration-300"
              >
                <div className="text-4xl font-extrabold text-primary mb-1">
                  {card.value}
                </div>
                <div className="text-base font-medium text-foreground/90">
                  {card.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
