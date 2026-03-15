"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    title: "Custom Web Applications",
    description: "End-to-end MERN/Next.js development",
    icon: "🌐",
    details: [
      "Responsive & performant UIs",
      "Scalable backend architecture",
      "Database design & optimization",
      "RESTful & GraphQL APIs",
    ],
  },
  {
    title: "GenAI Automation",
    description: 'Building "smart" applications with LLM integrations',
    icon: "🤖",
    details: [
      "AI-powered chatbots",
      "Intelligent automation workflows",
      "LLM API integrations (OpenAI, Anthropic)",
      "Custom AI solutions",
    ],
  },
  {
    title: "API Integration",
    description: "Seamlessly connecting complex third-party services and REST/GraphQL APIs",
    icon: "🔌",
    details: [
      "Third-party API integrations",
      "Webhook implementations",
      "Real-time data synchronization",
      "Microservices architecture",
    ],
  },
]

export function Services() {
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
            Specialized <span className="text-lime-500">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Card className="h-full group hover:scale-105 transition-all duration-300 overflow-hidden relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 to-lime-500/0 group-hover:from-lime-500/10 group-hover:to-transparent transition-all duration-300" />
                
                <CardHeader className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-lime-500 transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-400 text-sm mt-2">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + i * 0.1, duration: 0.4 }}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <span className="text-lime-500 mt-0.5">▹</span>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
