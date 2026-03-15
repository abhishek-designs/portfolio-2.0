"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset errors
    setErrors({ name: "", email: "", message: "" })

    // Validation
    let hasErrors = false
    const newErrors = { name: "", email: "", message: "" }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      hasErrors = true
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      hasErrors = true
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email"
      hasErrors = true
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      hasErrors = true
    }

    if (hasErrors) {
      setErrors(newErrors)
      return
    }

    // Show success animation
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-lime-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's build something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="relative overflow-hidden">
              {isSubmitted && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 bg-lime-500/20 backdrop-blur-xl z-50 flex items-center justify-center"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-6xl mb-4"
                    >
                      ✓
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-xl font-semibold text-lime-500"
                    >
                      Message sent successfully!
                    </motion.p>
                  </div>
                </motion.div>
              )}

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:akalyane980@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-lime-500/50 transition-all hover:scale-105 group"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform">
                  📧
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-semibold group-hover:text-lime-500 transition-colors">
                    akalyane980@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/abhishek-kalyane-b4840a1b4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-lime-500/50 transition-all hover:scale-105 group"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform">
                  💼
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="text-lg font-semibold group-hover:text-lime-500 transition-colors">
                    Abhishek Kalyane
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/abhishek-designs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-lime-500/50 transition-all hover:scale-105 group"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform">
                  💻
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="text-lg font-semibold group-hover:text-lime-500 transition-colors">
                    abhishek-designs
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
