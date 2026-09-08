"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              About Me
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              {portfolioData.personalInfo.about}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Core Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.techStack.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white border border-gray-200 text-black text-sm font-medium rounded-full shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-8">Why work with me?</h3>
            <div className="space-y-6">
              {portfolioData.whyWorkWithMe.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-1">{reason.title}</h4>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
