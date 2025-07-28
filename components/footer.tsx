"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy-950 dark:bg-navy-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Ali Hemmatnia</h3>
            <p className="text-gray-300 leading-relaxed">
              Full-Stack Developer passionate about creating scalable solutions and contributing to innovative projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Connect</h4>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://github.com/alihemmatnia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                href="https://linkedin.com/in/alihemmatnia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="mailto:ali@hemmatnia.com"
                className="text-gray-300 hover:text-gold-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-navy-800 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2024 Ali Hemmatnia. Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using Next.js & Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
