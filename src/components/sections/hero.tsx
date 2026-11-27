"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[340px] w-[340px] rounded-full bg-blue-500 opacity-15 blur-[120px]"></div>
        <div className="absolute left-1/3 right-0 top-20 -z-10 m-auto h-[280px] w-[280px] rounded-full bg-indigo-500 opacity-15 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Top badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur-sm shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700 tracking-wide">
                {portfolioData.personalInfo.availability}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/70 text-blue-800 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>Oracle Cloud 2025 AI Certified</span>
            </div>
          </motion.div>

          {/* Intro name & title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex items-center gap-2 text-lg md:text-xl font-medium text-gray-600 mb-4"
          >
            <span>Hello, I&apos;m</span>
            <span className="font-semibold text-gray-900">{portfolioData.personalInfo.name}</span>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="hidden sm:inline text-blue-600 font-semibold">{portfolioData.personalInfo.role}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[4.75rem] font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.08]"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-gray-900">Generative AI</span> & autonomous agent workflows.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed"
          >
            {portfolioData.personalInfo.longDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/#work"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all hover:shadow-lg hover:shadow-black/20 active:scale-95"
            >
              Explore AI Projects
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-black border border-gray-200 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 transition-all hover:border-gray-300 active:scale-95"
            >
              Get In Touch
            </Link>
            <div className="flex items-center gap-2 ml-2">
              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full border border-gray-200 hover:border-black hover:text-black text-gray-600 transition-colors bg-white shadow-2xs"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full border border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-600 transition-colors bg-white shadow-2xs"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
