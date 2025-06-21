"use client"

import { useEffect, useRef } from "react"

export default function CreativeStaticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Fill deep green background
    ctx.fillStyle = "#081b14"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Wave layers
    const drawWaveLayer = (color: string, offsetY: number, alpha: number, waveHeight: number) => {
      ctx.beginPath()
      ctx.moveTo(0, offsetY)

      const waveLength = canvas.width / 3

      for (let i = 0; i <= canvas.width; i += waveLength) {
        const cp1x = i + waveLength / 2
        const cp1y = offsetY + waveHeight
        const endX = i + waveLength
        const endY = offsetY

        ctx.quadraticCurveTo(cp1x, cp1y, endX, endY)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()

      ctx.fillStyle = `rgba(${color}, ${alpha})`
      ctx.fill()
    }

    drawWaveLayer("22, 163, 74", canvas.height * 0.3, 0.07, 60)
    drawWaveLayer("34, 197, 94", canvas.height * 0.5, 0.05, 80)
    drawWaveLayer("16, 185, 129", canvas.height * 0.7, 0.04, 100)
    drawWaveLayer("5, 150, 105", canvas.height * 0.85, 0.03, 120)

    // ✨ Glowing Blobs
    const drawBlob = (x: number, y: number, r: number, opacity: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, r)
      gradient.addColorStop(0, `rgba(34, 197, 94, ${opacity})`)
      gradient.addColorStop(1, "transparent")
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    drawBlob(canvas.width * 0.2, canvas.height * 0.3, 100, 0.12)
    drawBlob(canvas.width * 0.8, canvas.height * 0.6, 120, 0.1)

    // 🟢 Transparent Rings
    const drawRing = (x: number, y: number, r: number, opacity: number, thickness: number) => {
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
      ctx.lineWidth = thickness
      ctx.stroke()
    }

    drawRing(canvas.width * 0.7, canvas.height * 0.25, 40, 0.05, 4)
    drawRing(canvas.width * 0.35, canvas.height * 0.65, 60, 0.06, 6)

    // 🟢 Dotted Grid
    const drawDotGrid = (startX: number, startY: number, cols: number, rows: number, spacing: number) => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.04)"
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          ctx.beginPath()
          ctx.arc(startX + i * spacing, startY + j * spacing, 1.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    drawDotGrid(canvas.width - 160, 100, 8, 6, 12)
    drawDotGrid(80, canvas.height - 140, 6, 5, 14)

    // 🌌 Soft vignette for depth
    const radialOverlay = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      100,
      canvas.width / 2,
      canvas.height / 2,
      canvas.width * 0.7
    )
    radialOverlay.addColorStop(0, "rgba(0,0,0,0)")
    radialOverlay.addColorStop(1, "rgba(0,0,0,0.2)")
    ctx.fillStyle = radialOverlay
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "#081b14" }}
    />
  )
}
