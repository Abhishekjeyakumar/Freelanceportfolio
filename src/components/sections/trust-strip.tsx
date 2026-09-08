"use client";

import { motion } from "framer-motion";

const capabilities = [
  "AI Development",
  "Automation",
  "RAG",
  "LLMs",
  "Web Apps",
  "Mobile Apps"
];

export function TrustStrip() {
  return (
    <section className="bg-black py-10 overflow-hidden relative">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-16"
        >
          {capabilities.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-gray-300 font-medium tracking-wide uppercase text-sm md:text-base">
                {item}
              </span>
              {index < capabilities.length - 1 && (
                <span className="hidden md:inline-block text-gray-700">•</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
