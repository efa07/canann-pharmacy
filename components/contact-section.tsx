"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"
import { toast } from "sonner"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

 const [loading, setLoading] = useState(false)


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)
  toast.loading("Sending your message...")

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    toast.dismiss() 

    if (res.ok) {
      toast.success("✅ Message sent successfully!")
      setFormData({ name: "", email: "", message: "" })
    } else {
      const data = await res.json()
      toast.error(`❌ Failed to send message: ${data.error || "Unknown error"}`)
    }
  } catch (err) {
    console.error("Error sending message:", err)
    toast.dismiss()
    toast.error("⚠️ Something went wrong. Please try again.")
  } finally {
    setLoading(false)
  }
}

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Summit Safari 30-meter road, In front of Awash Bank, Addis Ababa",
      link: "https://maps.app.goo.gl/W7wqvSDeYM63Ypbi8",
      linkText: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+251 909 196 651",
      link: "tel:+251909196651",
      linkText: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@canaanpharmacy.com.et",
      link: "mailto:info@canaanpharmacy.com.et",
      linkText: "Send Email",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Sunday – Monday, 8 AM – 10 PM",
      link: null,
      linkText: null,
    },
  ]

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Get in Touch</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Have a question or need assistance? We're here to help. Reach out through any of the channels below or send
            us a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card
                  key={index}
                  className="p-6 bg-card/40 backdrop-blur-md border-white/10 hover:bg-card/60 hover:shadow-xl hover:border-white/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 backdrop-blur-sm border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                      <p className="text-muted-foreground mb-3 leading-relaxed">{info.content}</p>
                      {info.link && (
                        <a
                          href={info.link}
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-primary hover:text-primary/80 font-medium text-sm transition-colors inline-flex items-center gap-1"
                        >
                          {info.linkText}
                          <span className="text-lg">→</span>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}

            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="flex-1" size="lg" asChild>
                <a href="https://wa.me/+251909196651" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button className="flex-1 bg-transparent" size="lg" variant="outline" asChild>
                <a href="https://t.me/@canaanpharmacy" target="_blank" rel="noopener noreferrer">
                  <Send className="w-5 h-5 mr-2" />
                  Telegram
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card/40 backdrop-blur-md border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

             <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Sending..." : <><Send className="w-5 h-5 mr-2" /> Send Message</>}
             </Button>

            </form>
          </Card>
        </div>

        {/* Map */}
        <div className="mt-16 max-w-6xl mx-auto">
          <Card className="overflow-hidden bg-card/40 backdrop-blur-md border-white/10 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.790612053685!2d38.85116437413459!3d9.009710290223513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b08b638ee25%3A0xe248ba2caabea96!2sCanaan%20Pharmacy!5e0!3m2!1sen!2set!4v1728375060274!5m2!1sen!2set"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Canaan Pharmacy Location"
            />
          </Card>
        </div>
      </div>
    </section>
  )
}
