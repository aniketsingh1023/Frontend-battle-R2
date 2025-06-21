"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Target,
  Eye,
  TrendingUp,
  Users,
  Award,
  Star,
  ChevronLeft,
  ChevronRight,
  Shield,
  CheckCircle,
  Lightbulb,
  Rocket,
  Heart,
  Zap,
  Globe,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Building,
} from "lucide-react"
import Link from "next/link"

// Clean Dark Green Background with White Waves
const CleanWaveBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Solid dark green base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2e1a] via-[#0d3520] to-[#0a2e1a]" />

      {/* Subtle white wave patterns */}
      <div className="absolute inset-0 opacity-4">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="whiteWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.06)" />
            </linearGradient>
            <linearGradient id="whiteWave2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.08)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.04)" />
            </linearGradient>
          </defs>

          <motion.path
            d="M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z"
            fill="url(#whiteWave1)"
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
            fill="url(#whiteWave2)"
            animate={{
              d: [
                "M0,500 C400,300 800,700 1200,400 L1200,800 L0,800 Z",
                "M0,600 C400,400 800,200 1200,500 L1200,800 L0,800 Z",
                "M0,500 C400,300 800,700 1200,400 L1200,800 L0,800 Z",
              ],
            }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 5 }}
          />

          <motion.path
            d="M0,200 C350,400 750,50 1200,250 L1200,0 L0,0 Z"
            fill="url(#whiteWave1)"
            animate={{
              d: [
                "M0,200 C350,400 750,50 1200,250 L1200,0 L0,0 Z",
                "M0,150 C350,350 750,0 1200,200 L1200,0 L0,0 Z",
                "M0,200 C350,400 750,50 1200,250 L1200,0 L0,0 Z",
              ],
            }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
          />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
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
  )
}

// Kinetic Typography Hero Section
const KineticHeroSection = () => {
  const words = ["We", "provide", "the", "best", "industry", "service", "for", "you"]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10 min-h-[60vh] flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background geometric shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-emerald-400/20 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-green-400/20"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-emerald-400/10 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="text-center max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {words.map((word, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
            >
              {/* Main word */}
              <motion.span
                className={`text-4xl md:text-6xl lg:text-8xl font-bold text-white relative inline-block ${
                  word === "best"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400"
                    : word === "industry"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"
                      : word === "service"
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
                        : "text-white"
                }`}
                animate={{
                  scale: [1, 1.05, 1],
                  rotateX: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.5,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 15,
                  transition: { duration: 0.3 },
                }}
              >
                {word}

                {/* Kinetic effects for special words */}
                {word === "best" && (
                  <>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full"
                      animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 1,
                      }}
                    />
                  </>
                )}

                {word === "industry" && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 2,
                    }}
                  />
                )}

                {word === "service" && (
                  <motion.div
                    className="absolute inset-0 border-2 border-purple-400/50 rounded-lg"
                    animate={{
                      borderRadius: ["0.5rem", "2rem", "0.5rem"],
                      borderColor: [
                        "rgba(168, 85, 247, 0.5)",
                        "rgba(236, 72, 153, 0.5)",
                        "rgba(239, 68, 68, 0.5)",
                        "rgba(168, 85, 247, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.span>

              {/* Motion blur effect */}
              <motion.span
                className={`absolute inset-0 text-4xl md:text-6xl lg:text-8xl font-bold opacity-30 blur-sm ${
                  word === "best"
                    ? "text-emerald-400"
                    : word === "industry"
                      ? "text-orange-400"
                      : word === "service"
                        ? "text-purple-400"
                        : "text-white"
                }`}
                animate={{
                  x: [-2, 2, -2],
                  y: [-1, 1, -1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              >
                {word}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Animated underline */}
        <motion.div
          className="mt-8 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: words.length * 0.2 }}
        >
          <motion.div
            className="h-1 bg-gradient-to-r from-emerald-400 via-green-400 via-yellow-400 via-orange-400 to-purple-400 rounded-full"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

// Main Hero Section Component with Side-by-Side Mission & Vision
const HeroSection = () => {
  return (
    <div className="space-y-8">
      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl overflow-hidden text-center max-w-7xl mx-auto"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-400/10 rounded-full -translate-y-20 translate-x-20" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-400/10 rounded-full translate-y-16 -translate-x-16" />

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Save Time and Effort with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 relative">
            INLIGHN TECH
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </span>
        </motion.h1>
      </motion.div>

      {/* Mission & Vision Side by Side - Widened */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden group hover:bg-white/15 transition-all duration-300"
        >
          <div className="absolute top-0 left-0 w-16 h-16 bg-emerald-400/10 rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-green-400/10 rounded-tl-full" />

          <div className="flex items-center mb-6">
            <motion.div
              className="bg-gradient-to-r from-emerald-500 to-green-500 p-4 rounded-2xl shadow-lg mr-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Target className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
          </div>

          <p className="text-emerald-100 text-lg leading-relaxed">
            To empower students and young professionals by providing immersive, real-world learning experiences through
            tailored internship programs. We bridge the gap between academic knowledge and industry demands, equipping
            participants with practical skills and confidence to succeed in the fast-evolving tech industry.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden group hover:bg-white/15 transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-400/10 rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-400/10 rounded-tr-full" />

          <div className="flex items-center mb-6">
            <motion.div
              className="bg-gradient-to-r from-teal-500 to-emerald-500 p-4 rounded-2xl shadow-lg mr-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Eye className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
          </div>

          <p className="text-emerald-100 text-lg leading-relaxed">
            To be the leading EdTech platform that transforms careers by connecting talent with opportunity. We envision
            a world where every student has access to quality industry experience, creating the next generation of tech
            innovators and leaders who drive global progress.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

// Interactive Stats Component - Widened
const StatsSection = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  const stats = [
    { value: "5000+", label: "Students Placed", icon: Users, color: "from-emerald-500 to-green-600" },
    { value: "95%", label: "Success Rate", icon: TrendingUp, color: "from-green-500 to-emerald-600" },
    { value: "500+", label: "Partner Companies", icon: Building, color: "from-teal-500 to-emerald-600" },
    { value: "4.9/5", label: "Student Rating", icon: Star, color: "from-emerald-600 to-green-700" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl overflow-hidden max-w-7xl mx-auto"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full -translate-y-16 translate-x-16" />
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-green-400/10 rounded-full translate-y-14 -translate-x-14" />

      <div className="text-center mb-12 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Impact in Numbers
        </motion.h2>
        <motion.div
          className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${stat.color} p-8 rounded-3xl text-white text-center cursor-pointer transform transition-all duration-300 shadow-xl relative overflow-hidden`}
            whileHover={{ scale: 1.05, y: -8 }}
            onHoverStart={() => setHoveredStat(index)}
            onHoverEnd={() => setHoveredStat(null)}
          >
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              animate={hoveredStat === index ? { x: "100%" } : { x: "-100%" }}
              transition={{ duration: 0.6 }}
            />

            <stat.icon className="w-10 h-10 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-sm opacity-90 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Benefits Section Component - Widened
const BenefitsSection = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Fast-Track Career Growth",
      description: "Accelerate your career with industry-relevant skills and direct connections to top companies.",
    },
    {
      icon: Shield,
      title: "100% Job Guarantee",
      description: "We're so confident in our program that we guarantee job placement or your money back.",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Focused Learning",
      description: "Work on cutting-edge projects that push the boundaries of technology and creativity.",
    },
    {
      icon: Heart,
      title: "Personalized Mentorship",
      description: "Get one-on-one guidance from industry experts who care about your success.",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Access internships and jobs with companies worldwide, not just locally.",
    },
    {
      icon: Zap,
      title: "Instant Impact",
      description: "Start making a difference from day one with real projects that matter.",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl overflow-hidden max-w-7xl mx-auto"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-36 h-36 bg-emerald-400/10 rounded-full -translate-y-18 -translate-x-18" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-400/10 rounded-full translate-y-16 translate-x-16" />

      <div className="text-center mb-12 relative z-10">
        <motion.div className="inline-block bg-emerald-400/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
          WHY CHOOSE INLIGHN TECH
        </motion.div>
        <motion.h2
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Best Beneficial Side of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
            INLIGHNTECH
          </span>
        </motion.h2>
        <motion.div
          className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-300 group shadow-lg hover:shadow-xl relative overflow-hidden"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-400/10 rounded-bl-full" />

            <motion.div
              className="bg-gradient-to-r from-emerald-500 to-green-500 p-4 rounded-2xl w-fit mb-6 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <benefit.icon className="w-7 h-7 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
            <p className="text-emerald-100 leading-relaxed">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Testimonials Carousel Component - Widened
const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      quote:
        "During my Data Analytics internship at INLIGHN TECH, I learned SQL, Power BI, Tableau, and Data Cleaning. The program focused on real-world business intelligence projects, which helped me understand data-driven decision-making. The mentorship and structured learning approach made a significant impact on my skills.",
      author: "Mirunalini R",
      role: "Data Analyst Intern",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "I completed my Data Science internship at INLIGHN TECH, where I gained hands-on experience with Python, Data Visualization, and AI Models. Working on real projects helped me apply my knowledge effectively. The structured guidance and expert mentorship enhanced my problem-solving and analytical skills throughout the experience.",
      author: "Surendra Kumar",
      role: "Data Science Intern",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "The practical approach and real-world projects gave me the confidence to excel in the tech industry. InLighn Tech's comprehensive program prepared me for my current role perfectly.",
      author: "Rahul Kumar",
      role: "Full-Stack Developer at Microsoft",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl overflow-hidden max-w-7xl mx-auto"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-400/10 rounded-full -translate-y-20 translate-x-20" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-green-400/10 rounded-full translate-y-18 -translate-x-18" />

      <div className="text-center mb-12 relative z-10">
        <motion.div className="inline-block bg-orange-400/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
          TESTIMONIALS
        </motion.div>
        <motion.h2
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Interns Say
        </motion.h2>
        <motion.div
          className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-6">
                <div className="bg-gradient-to-br from-teal-800/80 to-emerald-800/80 backdrop-blur-xl border border-teal-600/30 p-10 rounded-3xl text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
                  {/* Decorative corners */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-teal-400/10 rounded-br-full" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-emerald-400/10 rounded-tl-full" />

                  <p className="text-white text-xl leading-relaxed font-medium mb-8 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-center mb-6">
                    <motion.img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-20 h-20 rounded-full mr-6 border-4 border-teal-400/30 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-white text-lg">{testimonial.author}</h4>
                      <p className="text-teal-300">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }}>
                        <Star className="w-6 h-6 text-yellow-400 fill-current mx-1" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-600 to-green-600 text-white p-4 rounded-full hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-600 to-green-600 text-white p-4 rounded-full hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                currentSlide === index ? "bg-emerald-400 scale-125" : "bg-white/30"
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Recognition Section Component - Widened
const RecognitionSection = () => {
  const recognitions = [
    {
      title: "Startup India Recognition",
      description:
        "Officially recognized by the Government of India's Startup India initiative for innovation in education technology.",
      icon: Award,
      badge: "Government Certified",
    },
    {
      title: "ISO 9001:2015 Certified",
      description:
        "International certification for quality management systems, ensuring world-class educational standards.",
      icon: CheckCircle,
      badge: "Quality Assured",
    },
    {
      title: "Top EdTech Platform 2024",
      description:
        "Awarded as the leading educational technology platform for career development and skill enhancement.",
      icon: Star,
      badge: "Industry Leader",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl overflow-hidden max-w-7xl mx-auto"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-400/10 rounded-full -translate-y-16 -translate-x-16" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-400/10 rounded-full translate-y-20 translate-x-20" />

      <div className="text-center mb-12 relative z-10">
        <motion.div className="inline-block bg-orange-400/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
          Our Recognitions
        </motion.div>
        <motion.h2
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Achievements
        </motion.h2>
        <p className="text-emerald-200 text-lg mb-4">Trusted by industry leaders and government bodies</p>
        <motion.div
          className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {recognitions.map((recognition, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -12, scale: 1.02 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-300 text-center group shadow-lg hover:shadow-xl relative overflow-hidden"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-400/10 rounded-bl-full" />

            <div className="relative mb-6">
              <motion.div
                className="bg-gradient-to-r from-emerald-500 to-green-500 p-5 rounded-2xl w-fit mx-auto shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <recognition.icon className="w-10 h-10 text-white" />
              </motion.div>
              <motion.span
                className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                {recognition.badge}
              </motion.span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{recognition.title}</h3>
            <p className="text-emerald-100 leading-relaxed">{recognition.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Footer Component
const Footer = () => (
  <footer className="bg-white/5 backdrop-blur-xl border-t border-white/10 mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-emerald-300 mb-4">InLighn Tech</h3>
          <p className="text-emerald-100 mb-4">
            Connecting talented students with amazing career opportunities. Your dream job is just one click away.
          </p>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <motion.div key={index} whileHover={{ scale: 1.2, y: -2 }} className="cursor-pointer">
                <Icon className="w-6 h-6 text-emerald-200 hover:text-emerald-400 transition-colors duration-300" />
              </motion.div>
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
                <Link
                  href={link.href}
                  className="text-emerald-200 hover:text-emerald-400 transition-colors duration-300"
                >
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
                <Link
                  href="/companies"
                  className="text-emerald-200 hover:text-emerald-400 transition-colors duration-300"
                >
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
              <span className="text-emerald-200">careers@inlighntech.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-200">+91 9368875653</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-200">Bengaluru, Karnataka</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 pt-8 text-center">
        <p className="text-emerald-200">
          © 2024 InLighn Tech. All rights reserved. | Privacy Policy | Terms of Service
        </p>
      </div>
    </div>
  </footer>
)

// Main About Page Component
export default function About() {
  return (
    <div className="min-h-screen relative pt-24 pb-16">
      <CleanWaveBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <KineticHeroSection />
        <HeroSection />
        <StatsSection />
        <BenefitsSection />
        <TestimonialsSection />
        <RecognitionSection />
      </div>

      <Footer />
    </div>
  )
}
