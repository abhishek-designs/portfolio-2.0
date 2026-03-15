"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "TypeScript", icon: "📘" },
  { name: "GenAI", icon: "🤖" },
  { name: "MongoDB", icon: "🍃" },
  { name: "AWS", icon: "☁️" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "GraphQL", icon: "◈" },
  { name: "Docker", icon: "🐳" },
]

export function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-lime-500">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Modern technologies for cutting-edge solutions
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

          {/* Marquee */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 pr-8"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* First set */}
              {technologies.map((tech, index) => (
                <div
                  key={`tech-1-${index}`}
                  className="flex-shrink-0 flex items-center gap-4 px-8 py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-lime-500/50 transition-colors group"
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </span>
                  <span className="text-xl font-semibold whitespace-nowrap group-hover:text-lime-500 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {technologies.map((tech, index) => (
                <div
                  key={`tech-2-${index}`}
                  className="flex-shrink-0 flex items-center gap-4 px-8 py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-lime-500/50 transition-colors group"
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </span>
                  <span className="text-xl font-semibold whitespace-nowrap group-hover:text-lime-500 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            And many more tools in my arsenal to bring your vision to life
          </p>
        </motion.div>
      </div>
    </section>
  )
}
