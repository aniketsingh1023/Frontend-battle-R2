"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg glow-teal animate-pulse-glow transition-all duration-300 hover:scale-110">
        <MessageCircle size={24} />
      </button>
    </div>
  )
}
