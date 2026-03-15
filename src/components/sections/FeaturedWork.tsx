"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const projects = [
  {
    title: "Digital Creators Platform",
    description:
      "Clean, minimalistic platform using TailwindCSS and Shadcn where creators manage content, payment links, and revenue analytics",
    image: "💳",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: "MERN Stack",
    features: [
      "Content management system",
      "Payment link generation",
      "Revenue analytics dashboard",
      "User authentication & authorization",
    ],
  },
]

export function FeaturedWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setHoveredIndex(index)
  }

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-lime-500">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing real-world applications built with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <Card className="overflow-hidden relative">
                {/* Spotlight effect */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(132, 204, 22, 0.15), transparent 40%)`,
                    }}
                  />
                )}

                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
                  {/* Project Image/Icon */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-full aspect-square max-w-md">
                      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 to-lime-500/5 rounded-2xl" />
                      <div className="relative h-full flex items-center justify-center text-9xl">
                        {project.image}
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-lime-500/20 rounded-full blur-3xl" />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col justify-center space-y-6">
                    <div>
                      <div className="inline-block px-4 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-500 text-sm font-medium mb-4">
                        {project.category}
                      </div>
                      <CardTitle className="text-3xl md:text-4xl mb-4 group-hover:text-lime-500 transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-lime-500">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400">
                            <span className="text-lime-500 mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-gray-500 uppercase tracking-wider">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm hover:border-lime-500/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* More projects teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            More projects coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  )
}
