"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Etraab Holding",
      location: "Urmia, Iran",
      period: "2020 - Present",
      description: "Leading development of enterprise-level applications and contributing to core products.",
      achievements: [
        "Implemented advanced ERP system using ASP.NET Core, React, RabbitMQ, Redis, and SQL Server",
        "Built contact-center solution in .NET 8 with Redis, Kafka, SQL Server and MongoDB integration",
        "Deployed services using Docker and Nginx for scalable microservices architecture",
        "Optimized Redis caching reducing API response times by ~40%",
        "Developed call-routing algorithms and real-time analytics systems",
      ],
      technologies: ["ASP.NET Core", "React", "Docker", "Redis", "RabbitMQ", "Kafka", "SQL Server", "MongoDB"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building scalable solutions and leading development initiatives
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-navy-200 dark:border-navy-800 mb-8">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-navy-700 dark:text-gold-400 mb-2">{exp.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Building className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-lg">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-navy-700 dark:text-gold-400">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-navy-600 dark:bg-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-navy-700 dark:text-gold-400">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-navy-100 text-navy-700 dark:bg-navy-900 dark:text-gold-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
