"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Code2 } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="work" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Selected Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500"
          >
            A few things I&apos;ve built across AI, automation and software development.
          </motion.p>
        </div>

        <div className="space-y-12">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden border-gray-200 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-5 bg-gray-100 p-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-100">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-black text-white text-xs font-medium rounded-full mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <CardContent className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">The Problem</h4>
                        <p className="text-gray-600">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">The Solution</h4>
                        <p className="text-gray-600">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">The Outcome</h4>
                        <p className="text-gray-900 font-medium">{project.outcome}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600 transition-colors"
                      >
                        <ExternalLink size={16} />
                        View Project
                      </a>
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors"
                        >
                          <Code2 size={16} />
                          Source Code
                        </a>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
