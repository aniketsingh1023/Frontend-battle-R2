"use client"

import {
  Award,
  Users,
  Briefcase,
  Clock,
  Shield,
  Star,
  Sparkles,
  TrendingUp,
  Calendar,
  Target,
  Trophy,
  Gift,
  MessageSquare,
  Play,
  QrCode,
  Globe,
  Database,
  Zap,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

const features = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description:
      "Our programs meet international quality standards, ensuring you receive world-class education that's recognized globally.",
    image: "/download.jpeg",
    color: "from-yellow-500 to-amber-600",
    stats: "100% Certified",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description:
      "Learn directly from industry professionals with years of real-world experience and proven track records.",
    image: "/exprt.jpeg",
    color: "from-blue-500 to-cyan-600",
    stats: "50+ Mentors",
  },
  {
    icon: Briefcase,
    title: "Hands-on Learning",
    description:
      "Work on real projects that mirror actual industry challenges and requirements, building your portfolio.",
    image: "/handson.jpeg",
    color: "from-purple-500 to-violet-600",
    stats: "200+ Projects",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description:
      "Study at your own pace with our flexible online and offline learning options designed for working professionals.",
    image: "/flexible.jpeg",
    color: "from-green-500 to-emerald-600",
    stats: "24/7 Access",
  },
  {
    icon: Shield,
    title: "Job Guarantee",
    description:
      "We guarantee job placement assistance with our extensive network of partner companies and dedicated career support.",
    image: "/job.jpeg",
    color: "from-red-500 to-pink-600",
    stats: "99% Placement",
  },

]

const participationSteps = [
  {
    step: 1,
    title: "Eligibility Check",
    description: "If you're in your last month of internship, you're eligible!",
    detail: "You'll receive a Google Form to apply for this prestigious title!",
    color: "from-emerald-400 to-cyan-400",
  },
  {
    step: 2,
    title: "Skill Assessment Test",
    description: "Take a skill assessment test to prove your expertise!",
    detail: "Demonstrate your technical knowledge and problem-solving abilities",
    color: "from-purple-500 to-violet-600",
  },
  {
    step: 3,
    title: "Submit Projects",
    description: "Submit your best projects related to your domain!",
    detail: "Showcase your creativity and technical implementation skills",
    color: "from-orange-500 to-red-500",
  },
]

const internProjects = [
  {
    title: "PDF Protector - Project Report",
    author: "Sudhir S",
    id: "ITD0356",
    image: "/project.jpeg",
    type: "Security Tool",
  },
  {
    title: "Amazon Sales Dashboard 2024",
    author: "Data Analytics Team",
    description: "Comprehensive sales analytics with interactive visualizations",
    image: "/placeholder.svg?height=300&width=400",
    type: "Data Analytics",
  },
  {
    title: "Nova - Voice-Activated AI Assistant",
    author: "Athira Prasad Nair",
    organization: "Inlighn Tech",
    email: "athiranair358@gmail.com",
    submissionDate: "20-04-2025",
    image: "/placeholder.svg?height=300&width=400",
    type: "AI/ML Project",
  },
]

const testimonials = [
  {
    name: "Niha Anjum",
    role: "Frontend Developer",
    company: "TechCorp",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    feedback:
      "I really appreciate the hands-on approach, even in the early stages - there are plenty of projects that make the concepts more practical and engaging. The video explanations are clear and easy to follow, which helps a lot, especially when diving into technical topics. One thing I've noticed is that the internship focuses more on videos than on PDF notes. This is great for visual learners like me, though having a few quick-reference guides could make revision even easier.",
  },
  {
    name: "Garima Pandey S",
    role: "Data Analyst Intern",
    company: "DataTech Solutions",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    feedback:
      "I gained valuable hands-on experience that enhanced my skills by developing interactive dashboards using Jupyter Notebook, SQL, MS Excel. The platform at Inlighn Tech offers excellent resources to improve both skills and knowledge.",
  },
]

const challengeRewards = [
  {
    title: "A Stipend Reward of ₹15,000!",
    color: "from-orange-400 to-red-500",
  },
  {
    title: "An Exclusive Inlighn Tech Welcome Kit & Swag Pack!",
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Special Recognition on Our Platform!",
    color: "from-orange-400 to-red-500",
  },
]

const selectionRules = [
  {
    icon: Calendar,
    title: "Each intern can apply only ONCE in their final month.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Target,
    title: "Winners will be announced on the last day of every month! 🎉",
    color: "from-red-400 to-pink-500",
  },
  {
    icon: Trophy,
    title: "Top 10 interns will be celebrated with amazing rewards & recognition!",
    color: "from-yellow-400 to-orange-500",
  },
]

const benefits = [
  {
    icon: Gift,
    title: "Top 10 Intern Reward: ₹15,000 stipend + Welcome kit",
    color: "from-orange-400 to-pink-500",
  },
  {
    icon: Zap,
    title: "Offer Letter: Within 30 minutes",
    color: "from-orange-400 to-pink-500",
  },
  {
    icon: Briefcase,
    title: "Industry-Based Projects",
    color: "from-orange-400 to-pink-500",
  },
  {
    icon: QrCode,
    title: "Experience Letter: With QR Code",
    color: "from-orange-400 to-pink-500",
  },
  {
    icon: Database,
    title: "Certificate Verification",
    color: "from-orange-400 to-pink-500",
  },
  {
    icon: Clock,
    title: "Internship Portal Access: Within 5 minutes",
    color: "from-orange-400 to-pink-500",
  },
  {
    icon: MessageSquare,
    title: "Exclusive Job Updates: Shared on WhatsApp",
    color: "from-orange-400 to-pink-500",
  },
  {
    icon: Users,
    title: "Community Forum: Peer & mentor support",
    color: "from-orange-400 to-pink-500",
  },
  {
    icon: Globe,
    title: "Virtual Internship: Work from home with flexible schedule",
    color: "from-orange-400 to-pink-500",
  },
]

const stats = [
  { value: "99%", label: "Job Placement Rate", icon: TrendingUp },
  { value: "500+", label: "Partner Companies", icon: Briefcase },
  { value: "50K+", label: "Alumni Network", icon: Users },
  { value: "4.9/5", label: "Student Rating", icon: Star },
]

export default function SpecialPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentProject, setCurrentProject] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
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
      <section className="py-32 px-6 relative z-10" ref={containerRef}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute inset-0 text-7xl md:text-8xl font-black text-white blur-sm"
                style={{ y }}
              >
                SPECIAL
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
                  What Makes Us{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400">
                    SPECIAL
                  </span>
                </h1>
              </motion.div>
            </motion.div>

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

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.4 }}
              className="mt-6 h-2 w-40 mx-auto bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 rounded-full"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            style={{ opacity }}
            className="text-xl md:text-2xl text-emerald-200 max-w-4xl mx-auto leading-relaxed"
          >
            Discover the unique features and benefits that set Inlighn Tech apart from other education platforms
          </motion.p>
        </div>
      </section>

      {/* Features Timeline */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <motion.div className="flex-1" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="bg-black/40 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 overflow-hidden group">
                  <CardContent className="p-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mr-4 shadow-lg relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          <feature.icon className="w-8 h-8 text-white relative z-10" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                            {feature.title}
                          </h3>
                          <div className="text-emerald-400 font-semibold text-sm mt-1">{feature.stats}</div>
                        </div>
                      </div>

                      <p className="text-emerald-200/80 text-lg leading-relaxed">{feature.description}</p>

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-6 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="flex-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/25">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={400}
                      height={300}
                      className="w-full h-auto transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How to Participate Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-6 text-lg px-6 py-2">
            PARTICIPATION
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Participate?
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 via-purple-500 to-orange-500 rounded-full hidden lg:block" />

          <div className="space-y-16">
            {participationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <Card className="bg-black/40 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl mr-4`}
                        >
                          {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-emerald-200 text-lg mb-3">{step.description}</p>
                      <p className="text-emerald-300/80">{step.detail}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Circle */}
                <div className="hidden lg:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} border-4 border-black/40`}
                  />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interns of the Month Challenge */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-6 text-lg px-6 py-2">
            EPIC OPPORTUNITY 🎉✨
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interns of the Month{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Challenge</span>
          </h2>
          <p className="text-xl text-emerald-200 max-w-4xl mx-auto mb-8">
            Inlighn Tech is bringing you an EPIC opportunity with the "Interns of the Month Challenge"! 🎉✨
          </p>
          <p className="text-lg text-emerald-300 max-w-3xl mx-auto">
            Every single month, we're recognizing 10 OUTSTANDING interns who have shown exceptional dedication,
            innovation, and top-tier performance! 🏆
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {challengeRewards.map((reward, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative"
            >
              <Card className={`bg-gradient-to-br ${reward.color} border-0 overflow-hidden group`}>
                <CardContent className="p-8 text-center relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Gift className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{reward.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rules & Selection Process */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-red-500/20 text-red-300 border-red-500/30 mb-6 text-lg px-6 py-2">PROCESS</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            RULES &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">
              SELECTION PROCESS
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {selectionRules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-black/40 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 h-full">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${rule.color} flex items-center justify-center mx-auto mb-6`}
                  >
                    <rule.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <p className="text-emerald-200 text-lg leading-relaxed">{rule.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Interns' Projects */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-6 text-lg px-6 py-2">
            PROJECTS 🎉
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            OUR INTERNS'{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">PROJECTS</span>
          </h2>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
            Because here at Inlighn Tech, we believe in REWARDING EXCELLENCE! ✨✨
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/20">
              <Image
                src={internProjects[currentProject].image || "/placeholder.svg"}
                alt={internProjects[currentProject].title}
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mb-4">
                {internProjects[currentProject].type}
              </Badge>
              <h3 className="text-3xl font-bold text-white mb-4">{internProjects[currentProject].title}</h3>
              <div className="space-y-3 text-emerald-200">
                <p>
                  <span className="text-emerald-400">Developed By:</span> {internProjects[currentProject].author}
                </p>
                {internProjects[currentProject].organization && (
                  <p>
                    <span className="text-emerald-400">Organization:</span>{" "}
                    {internProjects[currentProject].organization}
                  </p>
                )}
                {internProjects[currentProject].email && (
                  <p>
                    <span className="text-emerald-400">Email:</span> {internProjects[currentProject].email}
                  </p>
                )}
                {internProjects[currentProject].submissionDate && (
                  <p>
                    <span className="text-emerald-400">Submission Date:</span>{" "}
                    {internProjects[currentProject].submissionDate}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            {internProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject ? "bg-emerald-400" : "bg-emerald-400/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feedback from Interns */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Feedback from Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Interns</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-black/40 backdrop-blur-xl border border-emerald-500/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <Image
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <p className="text-emerald-200 text-lg leading-relaxed mb-6">
                        "{testimonials[currentTestimonial].feedback}"
                      </p>

                      <div>
                        <h4 className="text-xl font-bold text-emerald-400">{testimonials[currentTestimonial].name}</h4>
                        <p className="text-emerald-300">{testimonials[currentTestimonial].role}</p>
                        <p className="text-emerald-300/80">{testimonials[currentTestimonial].company}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-emerald-400" : "bg-emerald-400/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Knowledge Through Videos */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-6 text-lg px-6 py-2">VIDEOS</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Knowledge Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Videos</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-black/40 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 overflow-hidden group">
            <CardContent className="p-0 relative">
              <div className="relative">
                <Image
                  src="/knowledge.jpeg"
                  alt="LMS Setup & Access Guide"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">LMS Setup & Access: A Step-by-Step Guide</h3>
                <p className="text-emerald-200">Presented by Inlighn Tech</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-6 text-lg px-6 py-2">
            BENEFITS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            PERKS &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">BENEFITS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className={`bg-gradient-to-r ${benefit.color} border-0 overflow-hidden group`}>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-semibold">{benefit.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/40 backdrop-blur-xl rounded-3xl p-12 border border-emerald-500/20 hover:border-emerald-400/30 transition-all duration-500"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Impact
              </span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 w-24 mx-auto bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 mb-4 group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300"
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors"
                >
                  {stat.value}
                </motion.div>
                <div className="text-emerald-200/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Experience the Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-emerald-200 mb-12"
          >
            Join thousands of students who have transformed their careers with our unique approach to tech education
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-2xl"
          >
            Start Your Journey Today
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  )
}
