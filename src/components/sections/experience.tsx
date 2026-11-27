"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, GraduationCap, Award, Calendar, CheckCircle2, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Background & Credentials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Experience & Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Real-world AI internship experience, academic background in Computer Science, and recognized industry certifications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work / Internship Experience */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-black" />
              Internship Experience
            </h3>

            <div className="space-y-6">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-gray-100">
                        <div>
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-2">
                            {exp.type}
                          </span>
                          <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                          <p className="text-gray-600 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-md self-start sm:self-center border border-gray-100">
                          <Calendar className="w-3.5 h-3.5 text-gray-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-xs font-medium bg-gray-50 border border-gray-200 text-gray-700 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="lg:col-span-5 space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-black" />
                Education
              </h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-gray-200 shadow-sm bg-gradient-to-br from-white to-gray-50/50">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-100 text-blue-800">
                        {portfolioData.education.period}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-green-100 text-green-800">
                        {portfolioData.education.score}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-1">
                      {portfolioData.education.degree}
                    </h4>
                    <p className="text-sm font-medium text-gray-600 mb-4">
                      {portfolioData.education.institution}
                    </p>

                    <div className="text-xs text-gray-500 bg-white p-3 rounded-lg border border-gray-100">
                      Focus Areas: Artificial Intelligence, Data Structures & Algorithms, Database Systems, Software Engineering.
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-black" />
                Certifications
              </h3>

              <div className="space-y-3">
                {portfolioData.certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:border-gray-300 transition-colors">
                      <div className="p-2 rounded-lg bg-gray-50 border border-gray-100 text-black shrink-0 mt-0.5">
                        <BadgeCheck className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-gray-900 leading-snug">
                            {cert.title}
                          </h4>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-medium text-gray-600">{cert.issuer}</span>
                          <span className="text-gray-300">•</span>
                          <span className="text-xs text-gray-400">{cert.badge}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
