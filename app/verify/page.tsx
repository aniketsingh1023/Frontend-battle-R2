"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, Search, Shield, Award, Calendar, User, BookOpen, Star, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function VerifyPage() {
  const [certificateCode, setCertificateCode] = useState("")
  const [verificationResult, setVerificationResult] = useState<"success" | "error" | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleVerify = async () => {
    setIsLoading(true)
    setVerificationResult(null)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Dummy logic: codes starting with 'INLI' are valid
    if (certificateCode.toUpperCase().startsWith("INLI")) {
      setVerificationResult("success")
    } else {
      setVerificationResult("error")
    }

    setIsLoading(false)
  }

  const certificateData = {
    student: "John Doe",
    program: "Full Stack Development",
    completionDate: "March 15, 2024",
    grade: "A+",
    instructor: "Dr. Sarah Johnson",
    duration: "12 Weeks",
    certificateId: certificateCode.toUpperCase(),
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

      {/* Main Content */}
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Hero Section with Cool Title Animation */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mb-8"
            >
              {/* Background Text Effect */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute inset-0 text-7xl md:text-8xl font-black text-white blur-sm"
              >
                VERIFY
              </motion.h1>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative text-5xl md:text-7xl font-black text-white"
              >
                Verify{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400">
                  Certificate
                </span>
              </motion.h1>
            </motion.div>

            {/* Shield Icon with Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 blur-md"
                />
                <div className="relative bg-black/40 backdrop-blur-xl rounded-full p-6 border border-emerald-500/30">
                  <Shield className="w-12 h-12 text-emerald-400" />
                </div>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xl text-emerald-200 max-w-2xl mx-auto"
            >
              Enter your certificate code to verify its authenticity and view detailed information
            </motion.p>
          </div>

          {/* Verification Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Card className="bg-black/40 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Input Section */}
                  <div className="space-y-4">
                    <label htmlFor="certificate-code" className="block text-lg font-semibold text-emerald-300">
                      Certificate Code
                    </label>
                    <div className="relative">
                      <Input
                        id="certificate-code"
                        type="text"
                        placeholder="Enter certificate code (e.g., INLI-2024-001)"
                        value={certificateCode}
                        onChange={(e) => setCertificateCode(e.target.value)}
                        className="bg-black/30 border-emerald-500/30 text-white placeholder-emerald-300/50 text-lg py-6 pl-12 pr-4 rounded-xl focus:border-emerald-400 focus:ring-emerald-400/20"
                      />
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-400" />
                    </div>
                  </div>

                  {/* Verify Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={handleVerify}
                      disabled={!certificateCode || isLoading}
                      className="w-full bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="mr-3"
                          >
                            <Search className="w-5 h-5" />
                          </motion.div>
                          Verifying Certificate...
                        </>
                      ) : (
                        <>
                          <Search className="mr-3 w-5 h-5" />
                          Verify Certificate
                        </>
                      )}
                    </Button>
                  </motion.div>

                  {/* Results Section */}
                  <AnimatePresence mode="wait">
                    {verificationResult && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className={`p-8 rounded-2xl backdrop-blur-xl border-2 ${
                          verificationResult === "success"
                            ? "bg-green-500/10 border-green-400/30"
                            : "bg-red-500/10 border-red-400/30"
                        }`}
                      >
                        {verificationResult === "success" ? (
                          <div className="space-y-6">
                            {/* Success Header */}
                            <div className="flex items-center space-x-4">
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, type: "spring" }}
                                className="relative"
                              >
                                <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-50" />
                                <CheckCircle className="relative w-12 h-12 text-green-400" />
                              </motion.div>
                              <div>
                                <h3 className="text-2xl font-bold text-green-400 mb-1">Certificate Verified ✓</h3>
                                <p className="text-emerald-200">
                                  This certificate is authentic and officially recognized.
                                </p>
                              </div>
                            </div>

                            {/* Certificate Details */}
                            <div className="grid md:grid-cols-2 gap-6">
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="space-y-4"
                              >
                                <div className="flex items-center space-x-3 p-4 bg-black/20 rounded-xl">
                                  <User className="w-5 h-5 text-emerald-400" />
                                  <div>
                                    <span className="text-emerald-300 text-sm">Student Name</span>
                                    <p className="text-white font-semibold">{certificateData.student}</p>
                                  </div>
                                </div>

                                <div className="flex items-center space-x-3 p-4 bg-black/20 rounded-xl">
                                  <BookOpen className="w-5 h-5 text-emerald-400" />
                                  <div>
                                    <span className="text-emerald-300 text-sm">Program</span>
                                    <p className="text-white font-semibold">{certificateData.program}</p>
                                  </div>
                                </div>

                                <div className="flex items-center space-x-3 p-4 bg-black/20 rounded-xl">
                                  <Calendar className="w-5 h-5 text-emerald-400" />
                                  <div>
                                    <span className="text-emerald-300 text-sm">Completion Date</span>
                                    <p className="text-white font-semibold">{certificateData.completionDate}</p>
                                  </div>
                                </div>
                              </motion.div>

                              <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-4"
                              >
                                <div className="flex items-center space-x-3 p-4 bg-black/20 rounded-xl">
                                  <Star className="w-5 h-5 text-emerald-400" />
                                  <div>
                                    <span className="text-emerald-300 text-sm">Final Grade</span>
                                    <p className="text-white font-semibold">{certificateData.grade}</p>
                                  </div>
                                </div>

                                <div className="flex items-center space-x-3 p-4 bg-black/20 rounded-xl">
                                  <Award className="w-5 h-5 text-emerald-400" />
                                  <div>
                                    <span className="text-emerald-300 text-sm">Certificate ID</span>
                                    <p className="text-white font-semibold">{certificateData.certificateId}</p>
                                  </div>
                                </div>

                                <div className="flex items-center space-x-3 p-4 bg-black/20 rounded-xl">
                                  <Sparkles className="w-5 h-5 text-emerald-400" />
                                  <div>
                                    <span className="text-emerald-300 text-sm">Duration</span>
                                    <p className="text-white font-semibold">{certificateData.duration}</p>
                                  </div>
                                </div>
                              </motion.div>
                            </div>

                            {/* Additional Actions */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                              className="flex gap-4 pt-4"
                            >
                              <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                                Download Certificate
                              </Button>
                              <Button
                                variant="outline"
                                className="flex-1 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                              >
                                Share Certificate
                              </Button>
                            </motion.div>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-4">
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.5, type: "spring" }}
                              className="relative"
                            >
                              <div className="absolute inset-0 bg-red-400 rounded-full blur-md opacity-50" />
                              <XCircle className="relative w-12 h-12 text-red-400" />
                            </motion.div>
                            <div>
                              <h3 className="text-2xl font-bold text-red-400 mb-1">Certificate Invalid</h3>
                              <p className="text-emerald-200 mb-4">
                                This certificate code is not valid, has expired, or doesn't exist in our records.
                              </p>
                              <div className="text-sm text-emerald-300">
                                <p>• Double-check the certificate code for typos</p>
                                <p>• Ensure the certificate hasn't expired</p>
                                <p>• Contact support if you believe this is an error</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-12 text-center"
          >
            <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20">
              <h3 className="text-lg font-semibold text-emerald-300 mb-3">Need Help?</h3>
              <p className="text-emerald-200/80 mb-4">
                If you're having trouble verifying your certificate or need assistance, our support team is here to
                help.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10">
                  Contact Support
                </Button>
                <Button variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10">
                  FAQ
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  )
}
