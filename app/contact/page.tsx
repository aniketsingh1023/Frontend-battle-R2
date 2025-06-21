"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  Globe,
  Sparkles,
  CheckCircle,
  User,
  MessageSquare,
} from "lucide-react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@inlighntech.com",
    secondary: "support@inlighntech.com",
    description: "Get detailed responses within 24 hours",
    color: "from-blue-500 to-cyan-600",
    available: "24/7",
  },
  {
    icon: Phone,
    title: "Call Us",
    primary: "+1 (555) 123-4567",
    secondary: "+1 (555) 987-6543",
    description: "Speak directly with our team",
    color: "from-green-500 to-emerald-600",
    available: "Mon-Fri 9AM-6PM",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    primary: "+1 (555) 123-4567",
    secondary: "Quick responses guaranteed",
    description: "Instant messaging support",
    color: "from-green-400 to-emerald-500",
    available: "24/7",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "123 Tech Street",
    secondary: "Silicon Valley, CA 94000",
    description: "Schedule an in-person meeting",
    color: "from-purple-500 to-violet-600",
    available: "By Appointment",
  },
]

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>

      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Hero Section with Cool Title Animation */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Background Text Effect */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute inset-0 text-7xl md:text-8xl font-black text-white blur-sm"
              >
                CONTACT
              </motion.h1>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative text-5xl md:text-7xl font-black text-white"
              >
                Contact{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400">
                  Us
                </span>
              </motion.h1>
            </motion.div>

            {/* Sparkle Effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -top-4 -right-4"
            >
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -bottom-4 -left-4"
            >
              <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            </motion.div>

            {/* Animated Accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.4 }}
              className="mt-6 h-2 w-40 mx-auto bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 rounded-full"
            />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-xl md:text-2xl text-emerald-200 max-w-4xl mx-auto leading-relaxed"
          >
            Have questions about our programs? We're here to help you start your tech journey.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-black/40 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Send us a Message</h2>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mb-6 relative"
                    >
                      <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-50 animate-pulse" />
                      <CheckCircle className="w-10 h-10 text-white relative z-10" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-green-400 mb-3">Message Sent Successfully! 🎉</h3>
                    <p className="text-emerald-200 text-lg">
                      Thank you for reaching out! We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-lg font-semibold text-emerald-300 mb-3">
                          Full Name
                        </label>
                        <div className="relative">
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="bg-black/30 border-emerald-500/30 text-white placeholder-emerald-300/50 text-lg py-6 pl-12 pr-4 rounded-xl focus:border-emerald-400 focus:ring-emerald-400/20"
                          />
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-400" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-lg font-semibold text-emerald-300 mb-3">
                          Email Address
                        </label>
                        <div className="relative">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            className="bg-black/30 border-emerald-500/30 text-white placeholder-emerald-300/50 text-lg py-6 pl-12 pr-4 rounded-xl focus:border-emerald-400 focus:ring-emerald-400/20"
                          />
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-400" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-lg font-semibold text-emerald-300 mb-3">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="bg-black/30 border-emerald-500/30 text-white placeholder-emerald-300/50 text-lg py-6 px-4 rounded-xl focus:border-emerald-400 focus:ring-emerald-400/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-lg font-semibold text-emerald-300 mb-3">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your interests and questions..."
                        rows={6}
                        className="bg-black/30 border-emerald-500/30 text-white placeholder-emerald-300/50 text-lg p-4 rounded-xl focus:border-emerald-400 focus:ring-emerald-400/20 resize-none"
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="mr-3"
                            >
                              <Send className="w-5 h-5" />
                            </motion.div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="mr-3 w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-black/40 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${method.color} shadow-lg relative overflow-hidden flex-shrink-0`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        <method.icon className="w-7 h-7 text-white relative z-10" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                            {method.title}
                          </h3>
                          <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs">
                            {method.available}
                          </Badge>
                        </div>
                        <p className="text-emerald-400 font-semibold text-lg">{method.primary}</p>
                        <p className="text-emerald-300 mb-2">{method.secondary}</p>
                        <p className="text-emerald-200/80 text-sm">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Card className="bg-black/40 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Office Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-emerald-500/20 last:border-b-0"
                      >
                        <span className="text-emerald-300 font-medium">{schedule.day}</span>
                        <span className="text-emerald-200">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Interactive Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-black/40 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-emerald-900/20 via-cyan-900/20 to-teal-900/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10" />
                    <div className="text-center relative z-10">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      >
                        <MapPin className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                      </motion.div>
                      <h4 className="text-xl font-bold text-white mb-2">Visit Our Office</h4>
                      <p className="text-emerald-300 font-medium">123 Tech Street</p>
                      <p className="text-emerald-200">Silicon Valley, CA 94000</p>
                      <Button
                        variant="outline"
                        className="mt-4 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        View on Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Quick{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Answers</span>
          </h2>
          <p className="text-xl text-emerald-200 mb-12">
            Can't find what you're looking for? Check out our FAQ or reach out directly.
          </p>
          <div className="flex justify-center gap-6">
            <Button className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-semibold px-8 py-3">
              View FAQ
            </Button>
            <Button variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3">
              Schedule Call
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  )
}
