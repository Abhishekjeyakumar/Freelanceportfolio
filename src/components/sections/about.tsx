"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { CheckCircle2, Cpu, Code2, Database, Brain, Sparkles, Wrench } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Bio & Skills */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold tracking-wide uppercase"
            >
              <Brain className="w-3.5 h-3.5" />
              Profile & Technical Depth
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900"
            >
              About Lakshmi Priya A
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed mb-10"
            >
              {portfolioData.personalInfo.about}
            </motion.p>
            
            {/* Detailed Skills breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                Technical Skills Breakdown
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2 mb-2 text-sm font-bold text-gray-900">
                    <Brain className="w-4 h-4 text-purple-600" />
                    Generative AI & LLMs
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {portfolioData.technicalSkills.generativeAi.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 bg-purple-50 text-purple-900 border border-purple-100 text-xs rounded-md font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2 mb-2 text-sm font-bold text-gray-900">
                    <Cpu className="w-4 h-4 text-blue-600" />
                    AI Frameworks & Agents
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {portfolioData.technicalSkills.frameworks.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 bg-blue-50 text-blue-900 border border-blue-100 text-xs rounded-md font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-2 text-sm font-bold text-gray-900">
                      <Database className="w-4 h-4 text-emerald-600" />
                      ML, Data & Databases
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[...portfolioData.technicalSkills.mlAndData, ...portfolioData.technicalSkills.apisAndDatabases].slice(0, 8).map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-50 text-gray-700 border border-gray-200 text-xs rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-2 text-sm font-bold text-gray-900">
                      <Wrench className="w-4 h-4 text-orange-600" />
                      Languages & Tools
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[...portfolioData.technicalSkills.programming, ...portfolioData.technicalSkills.tools].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-50 text-gray-700 border border-gray-200 text-xs rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column: Why Work With Me */}
          <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm sticky top-28">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Key Strengths & Approach</h3>
            <p className="text-sm text-gray-500 mb-8">
              Why I stand out as an Artificial Intelligence Engineer:
            </p>
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
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-gray-900 mb-1">{reason.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Direct Email</p>
                <a href={portfolioData.socialLinks.email} className="text-sm font-semibold text-gray-900 hover:text-blue-600">
                  {portfolioData.personalInfo.email}
                </a>
              </div>
              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100"
              >
                Connect on LinkedIn &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
