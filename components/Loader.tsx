"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { useLoading } from "@/components/loading-context"

export default function InternshipLoader() {
  const [progress, setProgress] = useState(0)
  const { loading, setLoading } = useLoading()

  useEffect(() => {
    if (!loading) return

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 1000) // Hide loader after animation
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(timer)
  }, [loading, setLoading])

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-[#03170e] z-50 flex flex-col items-center justify-center gap-6 overflow-hidden">
      {/* Loading text with zoom effect */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: progress < 100 ? 1 + (progress / 100) * 0.3 : 15,
          opacity: progress < 100 ? 1 : 0,
        }}
        transition={{
          duration: progress < 100 ? 0.5 : 1,
          ease: progress < 100 ? "easeOut" : "easeIn",
        }}
        className="relative flex flex-col items-center gap-4"
      >
        <motion.div className="text-4xl font-bold text-white flex items-center relative">
          Grab Your Internship
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              repeatDelay: 0.5,
              times: [0, 0.5, 1],
            }}
            className="ml-1"
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              repeatDelay: 0.5,
              times: [0.2, 0.7, 1.2],
            }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              repeatDelay: 0.5,
              times: [0.4, 0.9, 1.4],
            }}
          >
            .
          </motion.span>
          {/* Floating sparkles around text */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              ease: "easeInOut",
            }}
            className="absolute -top-3 -right-3 text-yellow-400"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2.5,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-3 -left-3 text-yellow-400"
          >
            <Sparkles className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-emerald-900 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="text-emerald-300 text-lg font-medium">{progress}%</div>
      </motion.div>
    </div>
  )
}
