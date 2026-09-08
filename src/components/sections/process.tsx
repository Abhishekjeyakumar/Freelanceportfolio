"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            How I Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.15 }}
            className="text-xl text-gray-500"
          >
            A systematic approach to building reliable and scalable software.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-[2px] bg-gray-100 -z-10" />
          
          {portfolioData.process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl font-extrabold text-black mb-8 border-4 border-gray-100 shadow-md group-hover:border-blue-500 group-hover:text-blue-600 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-xl">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
