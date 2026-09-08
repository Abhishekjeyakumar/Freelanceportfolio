"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Bot, Database, Cpu, Settings, Sparkles, Workflow, Globe, Smartphone, Layout, GraduationCap, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, React.ReactNode> = {
  bot: <Bot className="w-6 h-6" />,
  database: <Database className="w-6 h-6" />,
  cpu: <Cpu className="w-6 h-6" />,
  settings: <Settings className="w-6 h-6" />,
  sparkles: <Sparkles className="w-6 h-6" />,
  workflow: <Workflow className="w-6 h-6" />,
  globe: <Globe className="w-6 h-6" />,
  smartphone: <Smartphone className="w-6 h-6" />,
  layout: <Layout className="w-6 h-6" />,
  "graduation-cap": <GraduationCap className="w-6 h-6" />,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900"
          >
            What I Build
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            From intelligent AI systems to complete digital products.
          </motion.p>
        </div>

        <div className="space-y-24">
          {portfolioData.services.map((category, categoryIndex) => (
            <div key={category.id}>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold mb-8 pb-4 border-b border-gray-200 flex items-center gap-4 text-gray-900"
              >
                <span className="text-gray-400 font-mono text-lg font-normal">0{categoryIndex + 1}</span>
                {category.category}
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service, serviceIndex) => (
                  <Link href={`/#contact?service=${encodeURIComponent(service.title)}`} key={serviceIndex}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: serviceIndex * 0.1 }}
                      className="h-full relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                      <Card className="relative h-full transition-all duration-500 group-hover:-translate-y-1 bg-white border border-gray-200/60 shadow-sm overflow-hidden">
                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10 pointer-events-none"></div>

                        <CardHeader className="relative z-20">
                          <div className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center mb-4 text-gray-700 group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-sm">
                            {iconMap[service.icon]}
                          </div>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                            <ArrowUpRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </div>
                        </CardHeader>
                        <CardContent className="relative z-20">
                          <CardDescription className="text-gray-600 text-base leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
