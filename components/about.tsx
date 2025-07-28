"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating robust, scalable solutions that make a
            difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Full-Stack Developer and .NET Engineer with
                over 4 years of experience in designing and deploying scalable
                software solutions. Currently based in Urmia, Iran, I specialize
                in enterprise web applications and modern development practices.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                At Etraab Holding, I've contributed to major projects including
                advanced ERP systems and contact-center platforms, utilizing
                cutting-edge technologies like ASP.NET Core, React,
                microservices architecture, and containerization with Docker.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about solving complex system challenges,
                optimizing performance, and staying up-to-date with the latest
                technologies in the ever-evolving world of software development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-navy-200 dark:border-navy-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-navy-100 dark:bg-navy-900 rounded-lg">
                    <MapPin className="h-6 w-6 text-navy-600 dark:text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">Urmia, Iran</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-navy-200 dark:border-navy-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-navy-100 dark:bg-navy-900 rounded-lg">
                    <Calendar className="h-6 w-6 text-navy-600 dark:text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Experience</h3>
                    <p className="text-muted-foreground">
                      4+ Years in Software Development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-navy-200 dark:border-navy-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-navy-100 dark:bg-navy-900 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-navy-600 dark:text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Education</h3>
                    <p className="text-muted-foreground">
                      Islamic Azad University, Urmia
                    </p>
                    <p className="text-sm text-muted-foreground">Computer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
