"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Advanced ERP System",
      description:
        "Enterprise Resource Planning system built with microservices architecture, featuring real-time communication and optimized caching.",
      technologies: ["ASP.NET Core", "React", "RabbitMQ", "Redis", "SQL Server", "Docker"],
      highlights: ["40% API response time improvement", "Microservices architecture", "Real-time messaging"],
      type: "Team Project",
      category: "Enterprise",
    },
    {
      title: "Contact Center Solution",
      description:
        "Comprehensive contact center platform with call-routing algorithms, real-time analytics, and hybrid database architecture.",
      technologies: [".NET 8", "Kafka", "SQL Server", "MongoDB", "Docker", "Redis"],
      highlights: ["Real-time event streaming", "Call-routing algorithms", "Hybrid database design"],
      type: "Team Project",
      category: "Enterprise",
    },
    {
      title: "Mentorship API",
      description: "RESTful API for mentorship platform with authentication, user management, and matching algorithms.",
      technologies: ["C#", "ASP.NET Core", "Entity Framework", "JWT"],
      highlights: ["Clean Architecture", "JWT Authentication", "Swagger Documentation"],
      type: "Open Source",
      category: "API",
      github: "https://github.com/alihemmatnia",
    },
    {
      title: "Serverless Notes API",
      description:
        "Cloud-native notes application built with Pulumi for infrastructure as code and serverless architecture.",
      technologies: ["TypeScript", "Pulumi", "AWS Lambda", "DynamoDB"],
      highlights: ["Infrastructure as Code", "Serverless Architecture", "Auto-scaling"],
      type: "Open Source",
      category: "Cloud",
      github: "https://github.com/alihemmatnia",
    },
    {
      title: "URL Shortener Service",
      description: "High-performance URL shortening service built with NestJS, featuring analytics and custom domains.",
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker"],
      highlights: ["High Performance", "Analytics Dashboard", "Custom Domains"],
      type: "Open Source",
      category: "Web Service",
      github: "https://github.com/alihemmatnia",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of enterprise solutions and open-source contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-navy-200 dark:border-navy-800 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-navy-100 text-navy-700 dark:bg-navy-900 dark:text-gold-400"
                    >
                      {project.type}
                    </Badge>
                    <Badge variant="outline" className="border-gold-400 text-gold-600 dark:text-gold-400">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-navy-700 dark:text-gold-400 mb-3">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-navy-700 dark:text-gold-400">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-navy-600 dark:bg-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-navy-700 dark:text-gold-400">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-navy-50 text-navy-600 dark:bg-navy-800 dark:text-gold-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {project.github && (
                      <div className="flex space-x-2 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-navy-600 text-navy-600 hover:bg-navy-50 dark:hover:bg-navy-900 bg-transparent"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    )}
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
