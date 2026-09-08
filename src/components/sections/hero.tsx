"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
        <div className="absolute left-1/3 right-0 top-20 -z-10 m-auto h-[250px] w-[250px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-700 tracking-wide">
              {portfolioData.personalInfo.availability}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.05]"
          >
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">intelligent</span> products that solve real problems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed"
          >
            {portfolioData.personalInfo.longDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all hover:shadow-lg hover:shadow-black/20 active:scale-95"
            >
              Start a Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#work"
              className="inline-flex items-center justify-center gap-2 bg-white text-black border border-gray-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all hover:border-gray-300 active:scale-95"
            >
              View My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
