"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="relative">
        {/* Progress circle */}
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="4" />
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="rgb(16, 185, 129)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={176}
            strokeDashoffset={176 - (176 * scrollProgress) / 100}
            transition={{ duration: 0.1 }}
          />
        </svg>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="absolute inset-0 flex items-center justify-center bg-emerald-600/80 hover:bg-emerald-600 text-white rounded-full backdrop-blur-sm transition-all hover:scale-110"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  )
}
