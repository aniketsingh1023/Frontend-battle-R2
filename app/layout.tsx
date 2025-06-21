import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LoadingProvider } from "@/components/loading-context"
import MouseEffect from "@/components/mouse-effect"
import ScrollProgress from "@/components/scroll-progress"
import Navbar from "@/components/navbar"
import InternshipLoader from "@/components/Loader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "InLighn Tech - Land Your Dream Job",
  description:
    "Connect with top companies and kickstart your career with real-world internships and job opportunities. 95% job placement rate.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <LoadingProvider>
          <InternshipLoader />
          <Navbar />
          <MouseEffect />
          <ScrollProgress />
          {children}
        </LoadingProvider>
      </body>
    </html>
  )
}
