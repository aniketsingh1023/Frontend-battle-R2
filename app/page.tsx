"use client"

import { useEffect } from "react"
import { useLoading } from "@/components/loading-context"
import HomePage from "@/components/homepage"

export default function Home() {
  const { setLoading } = useLoading()

  useEffect(() => {
    setLoading(true)

    const loadData = async () => {
      try {
        // Preload critical images
        await Promise.all([
          new Promise((resolve) => {
            const img = new Image()
            img.src = "/bg-image.jpeg"
            img.onload = resolve
            img.onerror = resolve
          }),
        ])
      } finally {
        // Keep loader visible for at least 3 seconds for the animation
        setTimeout(() => {
          setLoading(false)
        }, 3000)
      }
    }

    loadData()
  }, [setLoading])

  return <HomePage />
}
