"use client";

import { motion } from "framer-motion";

const capabilities = [
  "Generative AI & LLMs",
  "RAG Pipelines",
  "LangGraph Agents",
  "Model Context Protocol (FastMCP)",
  "ChromaDB Vector DB",
  "Infosys Springboard AI Intern",
  "Oracle Cloud 2025 AI Certified"
];

export function TrustStrip() {
  return (
    <section className="bg-black py-8 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-60"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 md:gap-x-12"
        >
          {capabilities.map((item, index) => (
            <div key={index} className="flex items-center gap-6 md:gap-10">
              <span className="text-gray-300 font-medium tracking-wide uppercase text-xs md:text-sm">
                {item}
              </span>
              {index < capabilities.length - 1 && (
                <span className="hidden md:inline-block text-gray-700 text-sm">•</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
