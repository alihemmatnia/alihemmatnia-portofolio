"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Server, PenToolIcon as Tool } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: ["C#", "ASP.NET Core (.NET 8)", "Node.js (NestJS)", "React", "TypeScript", "Python", "JavaScript"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["Microsoft SQL Server", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "DevOps & Infrastructure",
      icon: Server,
      skills: ["Docker", "Nginx", "Microservices", "DDD Principles", "System Architecture"],
    },
    {
      title: "Tools & Platforms",
      icon: Tool,
      skills: ["RabbitMQ", "Kafka", "Git", "RESTful APIs", "GraphQL", "Pulumi"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise in modern technologies and development practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-navy-200 dark:border-navy-800 h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-navy-100 dark:bg-navy-900 rounded-lg w-fit">
                    <category.icon className="h-8 w-8 text-navy-600 dark:text-gold-400" />
                  </div>
                  <CardTitle className="text-lg text-navy-700 dark:text-gold-400">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-navy-50 text-navy-700 dark:bg-navy-800 dark:text-gold-300 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <Card className="border-navy-200 dark:border-navy-800 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-navy-600 dark:text-gold-400 mb-2">4+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </CardContent>
          </Card>

          <Card className="border-navy-200 dark:border-navy-800 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-navy-600 dark:text-gold-400 mb-2">86</div>
              <div className="text-muted-foreground">StackOverflow Reputation</div>
            </CardContent>
          </Card>

          <Card className="border-navy-200 dark:border-navy-800 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-navy-600 dark:text-gold-400 mb-2">10+</div>
              <div className="text-muted-foreground">Open Source Projects</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
