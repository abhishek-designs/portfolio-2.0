"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Abhishek Kalyane. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <a
              href="mailto:akalyane980@gmail.com"
              className="text-gray-400 hover:text-lime-500 transition-colors"
              aria-label="Email"
            >
              📧
            </a>
            <a
              href="https://linkedin.com/in/abhishek-kalyane-b4840a1b4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-lime-500 transition-colors"
              aria-label="LinkedIn"
            >
              💼
            </a>
            <a
              href="https://github.com/abhishek-designs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-lime-500 transition-colors"
              aria-label="GitHub"
            >
              💻
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Built with <span className="text-lime-500">❤️</span> using Next.js & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
