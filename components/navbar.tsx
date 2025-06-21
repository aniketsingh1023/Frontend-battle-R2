"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLoading } from "@/components/loading-context"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { loading } = useLoading()

  // Don't render navbar while loading
  if (loading) return null

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/verify", label: "Verify Certificate" },
    { href: "/special", label: "What's Special" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <nav className="fixed top-4 right-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 shadow-md">
      <div className="flex items-center space-x-6">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-white/80 hover:text-teal-300 transition">
              {link.label}
            </Link>
          ))}
          <Button className="bg-teal-500 hover:bg-teal-600 text-sm px-4 py-1.5 rounded-full">Login to Portal</Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-48 right-0 bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-4 flex flex-col items-start space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-white/80 hover:text-teal-300 transition"
            >
              {link.label}
            </Link>
          ))}
          <Button
            className="w-full bg-green-700 hover:bg-green-500-600 text-sm px-4 py-2 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Login to Portal
          </Button>
        </div>
      )}
    </nav>
  )
}
