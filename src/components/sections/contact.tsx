"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/actions/contact";
import { Loader2, CheckCircle2, AlertCircle, Mail, Phone, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Inquiry type selection is required"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0).optional(),
});

type FormData = z.infer<typeof formSchema>;

const serviceOptions = [
  "Full-Time AI Engineer Opportunity",
  "RAG System / Semantic Search",
  "LangGraph AI Agent Workflow",
  "Model Context Protocol (FastMCP)",
  "AI Chatbot & Knowledge Base",
  "Machine Learning & Data Modeling",
  "Full-Stack Web Development",
  "Academic / Research Collaboration",
  "Other Inquiry",
];

const budgetOptions = [
  "Full-Time Role / Hiring",
  "Contract / Project",
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Discuss upon consultation",
];

export function ContactSection() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
      honeypot: "",
    },
  });

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      const match = serviceOptions.find(
        (opt) => opt.toLowerCase().includes(serviceParam.toLowerCase()) || serviceParam.toLowerCase().includes(opt.toLowerCase())
      );
      if (match) {
        setValue("service", match);
      }
    }
  }, [searchParams, setValue]);

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    setSubmitResult(null);

    const result = await submitContact(values);

    if (result.success) {
      setSubmitResult({
        success: true,
        message: "Thank you! Your message has been received. Lakshmi Priya will get back to you shortly.",
      });
      reset();
    } else {
      setSubmitResult({ success: false, message: result.error || "Failed to submit. Please try again." });
    }

    setIsSubmitting(false);
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left Column: Direct info */}
          <div className="lg:col-span-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900"
            >
              Let&apos;s Connect & Build.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              Interested in hiring an AI Engineer, collaborating on Generative AI / RAG projects, or discussing new opportunities? Drop a message below or reach out directly.
            </motion.p>

            <div className="space-y-4 pt-2 border-t border-gray-100">
              <a 
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-black group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase">Email</div>
                  <div className="font-semibold text-gray-900">{portfolioData.personalInfo.email}</div>
                </div>
              </a>

              <a 
                href={`tel:${portfolioData.personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-black group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase">Phone</div>
                  <div className="font-semibold text-gray-900">{portfolioData.personalInfo.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase">Location</div>
                  <div className="font-semibold text-gray-900">{portfolioData.personalInfo.location}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-black hover:text-black transition-colors bg-white shadow-2xs"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors bg-white shadow-2xs"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-200 shadow-xs"
          >
            {submitResult && submitResult.success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Message Received!</h3>
                <p className="text-gray-600 text-lg max-w-md">{submitResult.message}</p>
                <Button 
                  className="mt-8 rounded-full"
                  variant="outline"
                  onClick={() => setSubmitResult(null)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="hidden" aria-hidden="true">
                  <Input {...register("honeypot")} tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-gray-900">Your Name *</label>
                    <Input placeholder="e.g. Priya Sharma" {...register("name")} className="bg-white border-gray-200" />
                    {errors.name && <p className="text-sm text-red-500 font-medium">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-gray-900">Your Email *</label>
                    <Input placeholder="e.g. recruiter@company.com" type="email" {...register("email")} className="bg-white border-gray-200" />
                    {errors.email && <p className="text-sm text-red-500 font-medium">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-gray-900">Phone / WhatsApp</label>
                    <Input placeholder="+91 98765 43210" {...register("phone")} className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-gray-900">Organization / Company</label>
                    <Input placeholder="Company / University" {...register("company")} className="bg-white border-gray-200" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-gray-900">Inquiry Type *</label>
                    <select 
                      className="flex h-9 w-full rounded-md border border-gray-200 bg-white px-3 py-1 text-base shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900 md:text-sm text-gray-900"
                      {...register("service")}
                    >
                      <option value="" disabled>Select inquiry type</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-sm text-red-500 font-medium">{errors.service.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none text-gray-900">Opportunity / Budget Scope</label>
                    <select 
                      className="flex h-9 w-full rounded-md border border-gray-200 bg-white px-3 py-1 text-base shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900 md:text-sm text-gray-900"
                      {...register("budget")}
                    >
                      <option value="" disabled>Select scope</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-gray-900">Message *</label>
                  <Textarea 
                    placeholder="Describe your role requirements, project goals, or questions..." 
                    className="min-h-[140px] bg-white border-gray-200 resize-y" 
                    {...register("message")} 
                  />
                  {errors.message && <p className="text-sm text-red-500 font-medium">{errors.message.message}</p>}
                </div>

                {submitResult && !submitResult.success && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3 text-red-700">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p className="text-sm">{submitResult.message}</p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full sm:w-auto px-8 py-6 text-base font-medium rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
