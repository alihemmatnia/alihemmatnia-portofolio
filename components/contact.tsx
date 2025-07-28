"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your next project or collaboration opportunity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-navy-700 dark:text-gold-400">
                Let's Connect
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always interested in discussing new opportunities,
                innovative projects, and collaborations. Whether you have a
                project in mind or just want to chat about technology, feel free
                to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-navy-200 dark:border-navy-800">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-navy-100 dark:bg-navy-900 rounded-lg">
                      <Mail className="h-6 w-6 text-navy-600 dark:text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a
                        href="mailto:ali.hemmatnia@gmail.com"
                        className="text-muted-foreground hover:text-navy-600 dark:hover:text-gold-400 transition-colors"
                      >
                        ali.hemmatnia@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-navy-200 dark:border-navy-800">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-navy-100 dark:bg-navy-900 rounded-lg">
                      <MapPin className="h-6 w-6 text-navy-600 dark:text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground">Urmia, Iran</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://linkedin.com/in/alihemmatnia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-4 bg-navy-100 dark:bg-navy-900 rounded-lg hover:bg-navy-200 dark:hover:bg-navy-800 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-navy-600 dark:text-gold-400" />
                  <span className="text-navy-600 dark:text-gold-400 font-medium">
                    LinkedIn
                  </span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://github.com/alihemmatnia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-4 bg-navy-100 dark:bg-navy-900 rounded-lg hover:bg-navy-200 dark:hover:bg-navy-800 transition-colors"
                >
                  <Github className="h-5 w-5 text-navy-600 dark:text-gold-400" />
                  <span className="text-navy-600 dark:text-gold-400 font-medium">
                    GitHub
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-navy-200 dark:border-navy-800">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-700 dark:text-gold-400">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="border-navy-200 dark:border-navy-800 focus:border-navy-600 dark:focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="border-navy-200 dark:border-navy-800 focus:border-navy-600 dark:focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project discussion"
                      className="border-navy-200 dark:border-navy-800 focus:border-navy-600 dark:focus:border-gold-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="border-navy-200 dark:border-navy-800 focus:border-navy-600 dark:focus:border-gold-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-navy-600 hover:bg-navy-700 text-white"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
