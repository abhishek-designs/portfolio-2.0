"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-radial from-lime-500/10 via-transparent to-transparent opacity-50 blur-3xl" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20 backdrop-blur-xl"
            >
              <span className="w-2 h-2 bg-lime-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-lime-500">Available for new projects</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              I build{" "}
              <span className="text-lime-500 relative">
                high-performance
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-lime-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  style={{ originX: 0 }}
                />
              </span>{" "}
              digital experiences that drive growth.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl"
            >
              <span className="text-white font-semibold">Abhishek Kalyane</span> | Senior Software Engineer specializing in Next.js, GenAI, and scalable Full-Stack solutions.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Let's Connect</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-lime-400 to-lime-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* Portrait Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-lime-500/20 blur-3xl rounded-full" />
              
              {/* Portrait container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-lime-500/30 bg-gradient-to-br from-lime-500/10 to-transparent backdrop-blur-xl">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-lime-500/20 border-2 border-lime-500/50 flex items-center justify-center">
                      <span className="text-6xl">👨‍💻</span>
                    </div>
                    <p className="text-sm text-gray-400">Professional portrait placeholder</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-lime-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lime-500/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-lime-500/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-lime-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
