"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  {
    title: "4+ Years",
    subtitle: "Professional Experience",
    icon: "💼",
  },
  {
    title: "B.Tech",
    subtitle: "Electronics & Communication",
    icon: "🎓",
  },
  {
    title: "Certifications",
    subtitle: "ReactJS, HTML/CSS",
    icon: "📜",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            About <span className="text-lime-500">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A developer dedicated to building high-performance digital experiences
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <h3 className="text-3xl font-bold mb-2 text-lime-500">
                    {stat.title}
                  </h3>
                  <p className="text-gray-400">{stat.subtitle}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Bio Card - Spans full width on mobile, 2 columns on larger screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:col-span-2 lg:col-span-3"
          >
            <Card className="group hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-lime-500/20 border-2 border-lime-500/50 flex items-center justify-center text-5xl">
                      🚀
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-4">My Approach</h3>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      A developer dedicated to building high-performance digital experiences. 
                      I combine <span className="text-lime-500 font-semibold">clean, scalable code</span> with 
                      modern design to help businesses turn ideas into powerful online realities. 
                      Every project is an opportunity to create something exceptional that not only 
                      looks great but performs flawlessly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  )
}
