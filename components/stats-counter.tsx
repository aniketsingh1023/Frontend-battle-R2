"use client"

import { useState, useEffect } from "react"
import { Users, Trophy, Building, Star } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 5000,
    label: "Active Students",
    suffix: "+",
  },
  {
    icon: Trophy,
    value: 98,
    label: "Success Rate",
    suffix: "%",
  },
  {
    icon: Building,
    value: 50,
    label: "Partner Companies",
    suffix: "+",
  },
  {
    icon: Star,
    value: 4.9,
    label: "Average Rating",
    suffix: "/5",
  },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < value) {
          return prev + Math.ceil(value / 100)
        }
        return value
      })
    }, 50)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass glass-hover p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 hover:glow-teal group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 mb-4 group-hover:animate-pulse">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-teal-400 mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
