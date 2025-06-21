"use client"

import {
  Code,
  Database,
  Lock,
  Server,
  Cpu,
  Network,
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Users,
  Building,
  Sparkles,
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

const internships = [
  {
    id: "frontend-dev",
    title: "Frontend Development",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Remote/Hybrid",
    duration: "3 Months",
    stipend: "$2,000/month",
    description: "Build responsive web applications using modern frontend technologies and frameworks",
    icon: Code,
    color: "from-green-500 to-emerald-600",
    spots: 5,
    deadline: "March 15, 2024",
    details: {
      responsibilities: [
        "Develop user interfaces using React and TypeScript",
        "Collaborate with design team to implement UI/UX designs",
        "Optimize applications for maximum speed and scalability",
        "Participate in code reviews and team meetings",
      ],
      requirements: [
        "Knowledge of HTML, CSS, and JavaScript",
        "Familiarity with React or similar frameworks",
        "Understanding of responsive design principles",
        "Strong problem-solving skills",
      ],
      skills: ["React", "TypeScript", "Tailwind CSS", "Git", "Figma"],
      benefits: [
        "Mentorship from senior developers",
        "Real-world project experience",
        "Certificate of completion",
        "Potential full-time offer",
      ],
      applicationProcess: "Submit resume and portfolio. Selected candidates will have a technical interview.",
      startDate: "April 1, 2024",
    },
  },
  {
    id: "data-analyst",
    title: "Data Analytics",
    company: "DataInsights Inc",
    location: "New York, NY",
    type: "On-site",
    duration: "4 Months",
    stipend: "$2,500/month",
    description: "Analyze large datasets to derive actionable business insights using modern analytics tools",
    icon: Database,
    color: "from-blue-500 to-cyan-600",
    spots: 3,
    deadline: "March 20, 2024",
    details: {
      responsibilities: [
        "Clean and preprocess large datasets",
        "Create data visualizations and dashboards",
        "Perform statistical analysis and modeling",
        "Present findings to stakeholders",
      ],
      requirements: [
        "Strong analytical and mathematical skills",
        "Experience with Python or R",
        "Knowledge of SQL databases",
        "Excellent communication skills",
      ],
      skills: ["Python", "SQL", "Tableau", "Excel", "Statistics"],
      benefits: [
        "Access to industry-standard tools",
        "Training in advanced analytics",
        "Networking opportunities",
        "Performance-based bonus",
      ],
      applicationProcess: "Online application with coding challenge. Final round includes case study presentation.",
      startDate: "April 15, 2024",
    },
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    company: "SecureNet Systems",
    location: "Austin, TX",
    type: "Hybrid",
    duration: "6 Months",
    stipend: "$3,000/month",
    description: "Learn to protect systems and networks from cyber threats in enterprise environments",
    icon: Lock,
    color: "from-purple-500 to-violet-600",
    spots: 2,
    deadline: "March 10, 2024",
    details: {
      responsibilities: [
        "Monitor security systems and networks",
        "Conduct vulnerability assessments",
        "Assist in incident response procedures",
        "Document security policies and procedures",
      ],
      requirements: [
        "Basic understanding of networking concepts",
        "Interest in cybersecurity field",
        "Strong attention to detail",
        "Ability to work in fast-paced environment",
      ],
      skills: ["Network Security", "Penetration Testing", "SIEM Tools", "Risk Assessment"],
      benefits: [
        "Security clearance assistance",
        "Industry certifications",
        "Hands-on security experience",
        "Career guidance",
      ],
      applicationProcess: "Application review followed by technical and behavioral interviews.",
      startDate: "March 25, 2024",
    },
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineering",
    company: "CloudTech Innovations",
    location: "Seattle, WA",
    type: "Remote",
    duration: "3 Months",
    stipend: "$2,800/month",
    description: "Deploy and manage applications in cloud environments using modern DevOps practices",
    icon: Server,
    color: "from-yellow-500 to-amber-600",
    spots: 4,
    deadline: "March 25, 2024",
    details: {
      responsibilities: [
        "Deploy applications on AWS/Azure platforms",
        "Monitor cloud infrastructure performance",
        "Implement CI/CD pipelines",
        "Optimize cloud costs and resources",
      ],
      requirements: [
        "Basic knowledge of cloud platforms",
        "Understanding of containerization",
        "Familiarity with Linux systems",
        "Strong problem-solving abilities",
      ],
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      benefits: [
        "Cloud certification vouchers",
        "Hands-on cloud experience",
        "Industry mentorship",
        "Flexible working hours",
      ],
      applicationProcess: "Technical screening followed by system design interview.",
      startDate: "April 8, 2024",
    },
  },
  {
    id: "ai-ml",
    title: "AI/ML Research",
    company: "AI Research Labs",
    location: "Boston, MA",
    type: "On-site",
    duration: "5 Months",
    stipend: "$3,500/month",
    description: "Research and develop machine learning models and AI systems for real-world applications",
    icon: Cpu,
    color: "from-red-500 to-pink-600",
    spots: 2,
    deadline: "February 28, 2024",
    details: {
      responsibilities: [
        "Develop and train machine learning models",
        "Conduct research on AI algorithms",
        "Analyze and preprocess datasets",
        "Write research papers and documentation",
      ],
      requirements: [
        "Strong mathematical background",
        "Experience with Python and ML libraries",
        "Understanding of statistics and algorithms",
        "Research experience preferred",
      ],
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Jupyter"],
      benefits: [
        "Research publication opportunities",
        "Conference attendance",
        "PhD program recommendations",
        "Cutting-edge technology access",
      ],
      applicationProcess: "Research proposal submission and technical interview with research team.",
      startDate: "March 15, 2024",
    },
  },
  {
    id: "devops",
    title: "DevOps Engineering",
    company: "DevOps Masters",
    location: "Denver, CO",
    type: "Hybrid",
    duration: "4 Months",
    stipend: "$2,600/month",
    description: "Bridge development and operations with modern DevOps practices and automation tools",
    icon: Network,
    color: "from-indigo-500 to-blue-600",
    spots: 3,
    deadline: "March 18, 2024",
    details: {
      responsibilities: [
        "Maintain CI/CD pipelines",
        "Monitor application performance",
        "Automate deployment processes",
        "Collaborate with development teams",
      ],
      requirements: [
        "Basic programming knowledge",
        "Understanding of version control",
        "Interest in automation tools",
        "Good communication skills",
      ],
      skills: ["Git", "Jenkins", "Docker", "Monitoring Tools", "Scripting"],
      benefits: [
        "DevOps certification training",
        "Automation experience",
        "Cross-functional collaboration",
        "Tool expertise development",
      ],
      applicationProcess: "Portfolio review and practical DevOps scenario assessment.",
      startDate: "April 1, 2024",
    },
  },
]

export default function InternshipsPage() {
  const [selectedInternship, setSelectedInternship] = useState<(typeof internships)[0] | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

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

      {/* Hero Section */}
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
                className="absolute inset-0 text-8xl md:text-9xl font-black text-white blur-sm"
                style={{ y }}
              >
                TECH
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-cyan-400"
              >
                TECH
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative mt-4"
            >
              <div className="flex items-center justify-center gap-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="h-1 bg-gradient-to-r from-emerald-400 to-cyan-400"
                />

                <motion.h2
                  initial={{ opacity: 0, letterSpacing: "0.5em" }}
                  animate={{ opacity: 1, letterSpacing: "0.1em" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="text-4xl md:text-6xl font-bold text-white tracking-wider"
                >
                  INTERNSHIPS
                </motion.h2>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="h-1 bg-gradient-to-r from-cyan-400 to-emerald-400"
                />
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1.2 }}
                className="mt-4 h-2 w-32 mx-auto bg-gradient-to-r from-purple-500 via-emerald-400 to-cyan-400 rounded-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute -top-4 -right-4"
            >
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-xl md:text-2xl text-emerald-200 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Launch your career with hands-on experience at leading tech companies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex justify-center gap-12 text-emerald-300"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-emerald-500/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="text-3xl font-bold text-white mb-2"
              >
                {internships.length}
              </motion.div>
              <div className="text-sm uppercase tracking-wider">Open Positions</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-emerald-500/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                className="text-3xl font-bold text-white mb-2"
              >
                {internships.reduce((sum, internship) => sum + internship.spots, 0)}
              </motion.div>
              <div className="text-sm uppercase tracking-wider">Available Spots</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Minimalist Internships Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedInternship(internship)}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-emerald-400/30 transition-all duration-500 overflow-hidden h-full"
              >
                <div className="p-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${internship.color} flex items-center justify-center shadow-lg`}
                    >
                      <internship.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <div className="text-right">
                      <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mb-2">
                        {internship.spots} spots
                      </Badge>
                      <div className="text-2xl font-bold text-emerald-400">{internship.stipend}</div>
                      <div className="text-sm text-emerald-300/80">per month</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                        {internship.title}
                      </h3>
                      <p className="text-xl text-emerald-400 font-semibold mb-4">{internship.company}</p>
                      <p className="text-emerald-200/80 text-lg leading-relaxed">{internship.description}</p>
                    </div>

                    {/* Key Info */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center text-emerald-300">
                          <MapPin className="w-5 h-5 mr-3 text-emerald-400" />
                          <span className="text-sm">{internship.location}</span>
                        </div>
                        <div className="flex items-center text-emerald-300">
                          <Clock className="w-5 h-5 mr-3 text-emerald-400" />
                          <span className="text-sm">{internship.duration}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center text-emerald-300">
                          <Building className="w-5 h-5 mr-3 text-emerald-400" />
                          <span className="text-sm">{internship.type}</span>
                        </div>
                        <div className="flex items-center text-emerald-300">
                          <Calendar className="w-5 h-5 mr-3 text-emerald-400" />
                          <span className="text-sm">Apply by {internship.deadline}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                      className="flex items-center justify-between pt-6 border-t border-white/10"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-emerald-400 font-semibold text-lg">View Details</span>
                      <ArrowRight className="w-6 h-6 text-emerald-400 group-hover:translate-x-2 transition-transform duration-300" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Enhanced Modal */}
      <Dialog open={!!selectedInternship} onOpenChange={() => setSelectedInternship(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-black/95 backdrop-blur-xl border-emerald-500/30 text-white">
          {selectedInternship && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader className="pb-8">
                <div className="flex items-start gap-8">
                  <motion.div
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className={`flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${selectedInternship.color} shadow-xl`}
                  >
                    <selectedInternship.icon className="w-12 h-12 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <DialogTitle className="text-4xl font-bold text-white mb-3">{selectedInternship.title}</DialogTitle>
                    <p className="text-2xl text-emerald-400 font-semibold mb-4">{selectedInternship.company}</p>
                    <div className="flex flex-wrap gap-6 text-emerald-300">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        {selectedInternship.location}
                      </div>
                      <div className="flex items-center">
                        <Building className="w-5 h-5 mr-2" />
                        {selectedInternship.type}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        {selectedInternship.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        {selectedInternship.spots} positions
                      </div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-right"
                  >
                    <div className="text-3xl font-bold text-emerald-400">{selectedInternship.stipend}</div>
                    <div className="text-emerald-300">Monthly Stipend</div>
                  </motion.div>
                </div>
              </DialogHeader>

              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">Overview</h3>
                  <p className="text-emerald-200 text-lg leading-relaxed">{selectedInternship.description}</p>
                </div>

                <Separator className="bg-emerald-500/30" />

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold text-emerald-400 mb-6">Key Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span className="text-emerald-300">Start Date:</span>
                        <span className="text-white font-semibold">{selectedInternship.details.startDate}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span className="text-emerald-300">Application Deadline:</span>
                        <span className="text-white font-semibold">{selectedInternship.deadline}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span className="text-emerald-300">Duration:</span>
                        <span className="text-white font-semibold">{selectedInternship.duration}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-emerald-300">Available Positions:</span>
                        <span className="text-white font-semibold">{selectedInternship.spots}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-emerald-400 mb-6">Skills You'll Learn</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedInternship.details.skills.map((skill, index) => (
                        <Badge
                          key={index}
                          className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-4 py-2"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Separator className="bg-emerald-500/30" />

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold text-emerald-400 mb-6">Responsibilities</h3>
                    <ul className="space-y-3">
                      {selectedInternship.details.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                          <span className="text-emerald-200 leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-emerald-400 mb-6">Requirements</h3>
                    <ul className="space-y-3">
                      {selectedInternship.details.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                          <span className="text-emerald-200 leading-relaxed">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-6">What You'll Get</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedInternship.details.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-emerald-200 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-6">Application Process</h3>
                  <p className="text-emerald-200 text-lg leading-relaxed">
                    {selectedInternship.details.applicationProcess}
                  </p>
                </div>

                <div className="flex gap-6 pt-8">
                  <Button className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-bold py-4 text-lg">
                    Apply Now
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8"
                  >
                    Save for Later
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Launch Your Tech Career?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-emerald-200 mb-12"
          >
            Join hundreds of students who kickstarted their careers through our internship program
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
            Browse All Internships
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
