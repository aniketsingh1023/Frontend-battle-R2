"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Users,
  Building,
  Star,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Quote,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const TYPING_WORDS = ["Dream Job", "Career", "Future", "Success"]
const TYPING_SPEED = 120
const DELETING_SPEED = 60
const PAUSE_DURATION = 1500

// Hero Section Component
const HeroSection = () => {
  const [displayText, setDisplayText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const typeText = useCallback(() => {
    const currentWord = TYPING_WORDS[currentWordIndex]
    let charIndex = 0
    let deleting = false
    let timeout: NodeJS.Timeout

    const type = () => {
      if (!deleting && charIndex <= currentWord.length) {
        setDisplayText(currentWord.substring(0, charIndex))
        charIndex++
        timeout = setTimeout(type, TYPING_SPEED)
      } else if (!deleting) {
        deleting = true
        timeout = setTimeout(type, PAUSE_DURATION)
      } else if (charIndex >= 0) {
        setDisplayText(currentWord.substring(0, charIndex))
        charIndex--
        timeout = setTimeout(type, DELETING_SPEED)
      } else {
        deleting = false
        setCurrentWordIndex((prev) => (prev + 1) % TYPING_WORDS.length)
        timeout = setTimeout(type, 300)
      }
    }

    setIsTyping(true)
    timeout = setTimeout(type, 500)
    return () => clearTimeout(timeout)
  }, [currentWordIndex])

  useEffect(() => {
    if (!mounted) return
    const cleanup = typeText()
    return cleanup
  }, [typeText, mounted])

  if (!mounted) {
    return (
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#03170e]">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            Land Your <span className="text-emerald-400">Dream Job</span>
          </h1>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image Div - Same height as hero section */}
      <div className="absolute inset-0 min-h-screen w-full">
        <Image
          src="/bg-image.jpeg"
          alt="Students working on internships"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/75" />
        {/* Brand gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-transparent to-teal-900/20" />
      </div>

      {/* Content positioned over background */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Company Logo */}
        <div className="absolute top-8 left-8 z-20">
          <Image src="/inlighn-tech-logo.png" alt="InLighn Tech Logo" width={80} height={80} className="rounded-full" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] z-[1]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-[120px] z-[1]" />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto w-full pt-24 pb-16 md:pt-32 md:pb-24 relative z-10 text-center space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Land Your{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-300 to-cyan-400">
                  {displayText}
                </span>
                <span
                  className={`absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-10 md:h-12 bg-green-400 ml-1 transition-opacity duration-300 ${isTyping ? "opacity-100" : "opacity-0"}`}
                />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed"
            >
              Connect with top companies and kickstart your career with{" "}
              <span className="font-semibold text-green-300">real-world internships</span> and job opportunities that
              match your skills and ambitions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            >
              <Link href="/programs">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group"
                >
                  <span className="flex items-center relative z-10">
                    Find Internships{" "}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white font-bold text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                Browse Jobs
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 pt-8 md:pt-12"
          >
            {[
              { value: "5000+", label: "Students Placed", icon: <Users className="w-5 h-5" /> },
              { value: "500+", label: "Partner Companies", icon: <Building className="w-5 h-5" /> },
              { value: "4.8/5", label: "Success Rate", icon: <Star className="w-5 h-5" /> },
              { value: "95%", label: "Job Placement", icon: <CheckCircle className="w-5 h-5" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-md border border-emerald-400/10 rounded-xl p-4 md:p-6 text-center transition-all hover:border-emerald-400/30"
              >
                <div className="flex justify-center text-emerald-400 mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-emerald-200 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center items-start p-1">
              <div className="w-1 h-3 bg-emerald-400 rounded-full" />
            </div>
            <span className="text-xs text-emerald-300 mt-2">Explore More</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Why Choose Us Section with Geometric Patterns
const WhyChooseUs = () => (
  <section className="relative py-16 sm:py-20 overflow-hidden">
    {/* Custom Dark Green Background with Geometric Patterns */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a2e1a] via-[#0d3520] to-[#081b14]">
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-emerald-400/30 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border-2 border-green-400/20"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-40 w-20 h-20 bg-emerald-400/10 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-teal-400/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-900/10 via-transparent to-green-900/10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#081b14] to-transparent" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Why Choose InLighn Tech?</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {[
          {
            icon: Briefcase,
            title: "Real Industry Experience",
            description:
              "Work on live projects with top companies and gain hands-on experience that employers value most.",
          },
          {
            icon: GraduationCap,
            title: "Expert Mentorship",
            description: "Learn from industry professionals who guide you through every step of your career journey.",
          },
          {
            icon: Award,
            title: "Certified Programs",
            description: "Complete industry-recognized certifications that boost your resume and career prospects.",
          },
          {
            icon: TrendingUp,
            title: "Career Growth",
            description: "95% of our students land jobs within 6 months of completing their internship programs.",
          },
          {
            icon: Target,
            title: "Personalized Matching",
            description: "Our AI-powered system matches you with opportunities that align with your skills and goals.",
          },
          {
            icon: Zap,
            title: "Fast-Track Placement",
            description: "Skip the long application processes with our direct connections to hiring managers.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-emerald-900/20 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-emerald-700/30 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10 group"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-lg mr-4 group-hover:rotate-6 transition-transform">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
            <p className="text-emerald-200">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// Success Stories Section with Flowing Waves
const SuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const stories = [
    {
      quote:
        "InLighn Tech helped me land my dream internship at Google! The mentorship and real-world projects prepared me perfectly for the tech industry.",
      author: "Priya Sharma",
      role: "Software Engineer at Google",
      company: "Google",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "From a computer science student to a full-stack developer at Microsoft - InLighn Tech made it possible with their comprehensive training program.",
      author: "Rahul Kumar",
      role: "Full-Stack Developer at Microsoft",
      company: "Microsoft",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "The data science internship program was incredible. I learned industry-standard tools and landed a job at Amazon within 3 months!",
      author: "Ananya Patel",
      role: "Data Scientist at Amazon",
      company: "Amazon",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "InLighn Tech's career guidance and networking opportunities opened doors I never thought possible. Now I'm working at my dream startup!",
      author: "Arjun Singh",
      role: "Product Manager at Flipkart",
      company: "Flipkart",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(stories.length / 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(stories.length / 2)) % Math.ceil(stories.length / 2))
  }

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Custom Dark Green Background with Flowing Waves */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081b14] via-[#0a2e1a] to-[#0d3520]">
        {/* Animated wave layers */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
              <stop offset="100%" stopColor="rgba(5, 150, 105, 0.05)" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0.08)" />
              <stop offset="100%" stopColor="rgba(22, 163, 74, 0.04)" />
            </linearGradient>
          </defs>

          <motion.path
            d="M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z"
            fill="url(#wave1)"
            animate={{
              d: [
                "M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z",
                "M0,300 C300,500 600,100 1200,400 L1200,800 L0,800 Z",
                "M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z",
              ],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          <motion.path
            d="M0,500 C400,300 800,700 1200,400 L1200,800 L0,800 Z"
            fill="url(#wave2)"
            animate={{
              d: [
                "M0,500 C400,300 800,700 1200,400 L1200,800 L0,800 Z",
                "M0,600 C400,400 800,200 1200,500 L1200,800 L0,800 Z",
                "M0,500 C400,300 800,700 1200,400 L1200,800 L0,800 Z",
              ],
            }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 5 }}
          />
        </svg>

        {/* Glowing orbs */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-green-400/15 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-lg sm:text-xl text-emerald-200">Real students, real success stories</p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto mt-4" />
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-emerald-600/80 hover:bg-emerald-600 text-white p-3 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-emerald-600/80 hover:bg-emerald-600 text-white p-3 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Stories Grid */}
          <div className="overflow-hidden mx-12">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(stories.length / 2) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {stories.slice(slideIndex * 2, slideIndex * 2 + 2).map((story, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-emerald-900/25 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-emerald-700/40 hover:border-emerald-500/60 transition-all group"
                      >
                        <div className="flex items-center mb-4">
                          <Image
                            src={story.image || "/placeholder.svg"}
                            alt={story.author}
                            width={60}
                            height={60}
                            className="rounded-full mr-4"
                          />
                          <div>
                            <h4 className="text-white font-bold text-base sm:text-lg">{story.author}</h4>
                            <p className="text-emerald-400 text-xs sm:text-sm">{story.role}</p>
                            <p className="text-emerald-300 text-xs">{story.company}</p>
                            <div className="flex mt-1">
                              {[...Array(story.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-500 mb-4 rotate-180" />
                        <p className="text-emerald-200 italic text-sm sm:text-base leading-relaxed">{story.quote}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(stories.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-emerald-400" : "bg-emerald-400/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section with Grid Patterns and Glowing Effects
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "Software Development",
    experience: "Beginner",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Custom Dark Green Background with Grid Patterns */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0d3520] via-[#0a2e1a] to-[#081b14]">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Glowing effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-80 h-80 bg-green-400/8 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 3 }}
          />
        </div>

        {/* Floating hexagons */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 border border-emerald-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-emerald-900/5 to-[#081b14]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Start Your Journey Today</h2>
          <p className="text-lg sm:text-xl text-emerald-200">Get in touch and let us help you land your dream job</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-emerald-300 mb-2 text-sm sm:text-base">Full Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-emerald-900/20 border border-emerald-700/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 backdrop-blur-sm text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-emerald-300 mb-2 text-sm sm:text-base">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-emerald-900/20 border border-emerald-700/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 backdrop-blur-sm text-sm sm:text-base"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-emerald-300 mb-2 text-sm sm:text-base">Field of Interest</label>
                <select
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  className="w-full bg-emerald-900/20 border border-emerald-700/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 backdrop-blur-sm text-sm sm:text-base"
                >
                  <option>Software Development</option>
                  <option>Data Science</option>
                  <option>Digital Marketing</option>
                  <option>UI/UX Design</option>
                  <option>Product Management</option>
                </select>
              </div>
              <div>
                <label className="block text-emerald-300 mb-2 text-sm sm:text-base">Experience Level</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full bg-emerald-900/20 border border-emerald-700/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 backdrop-blur-sm text-sm sm:text-base"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-emerald-300 mb-2 text-sm sm:text-base">Tell us about your goals</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What kind of role are you looking for? What are your career aspirations?"
                className="w-full bg-emerald-900/20 border border-emerald-700/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 backdrop-blur-sm text-sm sm:text-base"
              />
            </div>
            <Button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full md:w-auto"
            >
              Get Started
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-emerald-900/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-emerald-700/40 h-full"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Ready to Launch Your Career?</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mr-3 sm:mr-4 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm sm:text-base">Headquarters</h4>
                  <p className="text-emerald-200 text-xs sm:text-sm">
                    Office No: V0-301, WebVerk Private, Grand Floor, 36 Infantry Road, Bengaluru, Karnataka
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mr-3 sm:mr-4" />
                <span className="text-emerald-200 text-sm sm:text-base">+91 9368875653</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mr-3 sm:mr-4" />
                <span className="text-emerald-200 text-sm sm:text-base">careers@inlighttech.com</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-emerald-800/20 rounded-lg border border-emerald-600/30">
              <h4 className="text-emerald-400 font-bold mb-2">Quick Stats</h4>
              <ul className="space-y-2 text-emerald-200 text-sm">
                <li>• Average placement time: 3-6 months</li>
                <li>• Starting salary range: ₹3-15 LPA</li>
                <li>• 500+ hiring partners</li>
                <li>• 95% job placement rate</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Footer Component
const Footer = () => (
  <footer className="bg-[#052e16] border-t border-emerald-900/50 mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">InLighn Tech</h3>
          <p className="text-gray-400 mb-4">
            Connecting talented students with amazing career opportunities. Your dream job is just one click away.
          </p>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <Icon
                key={index}
                className="w-6 h-6 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors duration-300"
              />
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">For Students</h4>
          <ul className="space-y-2">
            {[
              { name: "Find Internships", href: "/programs" },
              { name: "Browse Jobs", href: "/jobs" },
              { name: "Career Guidance", href: "/guidance" },
              { name: "Success Stories", href: "/stories" },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">For Companies</h4>
          <ul className="space-y-2">
            {["Post Jobs", "Find Talent", "Partner With Us", "Hire Interns"].map((item) => (
              <li key={item}>
                <Link href="/companies" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-emerald-400" />
              <span className="text-gray-400">careers@inlighntech.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-emerald-400" />
              <span className="text-gray-400">+91 9368875653</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span className="text-gray-400">Bengaluru, Karnataka</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-400">© 2024 InLighn Tech. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </div>
  </footer>
)

// Main HomePage Component
export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <WhyChooseUs />
      <SuccessStories />
      <ContactSection />
      <Footer />
    </div>
  )
}
