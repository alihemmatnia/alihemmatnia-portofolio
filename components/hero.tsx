"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 navy-gradient opacity-5 dark:opacity-10"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Ali Hemmatnia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Full-Stack Developer & .NET Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Crafting scalable software solutions with 4+ years of experience in enterprise web applications,
            microservices architecture, and modern full-stack development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-3"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-navy-600 text-navy-600 hover:bg-navy-50 dark:hover:bg-navy-900 px-8 py-3 bg-transparent"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://github.com/alihemmatnia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-navy-600 dark:hover:text-gold-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://linkedin.com/in/alihemmatnia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-navy-600 dark:hover:text-gold-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="mailto:ali@hemmatnia.com"
              className="text-muted-foreground hover:text-navy-600 dark:hover:text-gold-400 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="cursor-pointer"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
