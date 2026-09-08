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
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Service selection is required"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0).optional(),
});

type FormData = z.infer<typeof formSchema>;

const serviceOptions = [
  "AI Chatbot",
  "RAG Application",
  "AI Agent",
  "AI Automation",
  "LLM Fine-tuning",
  "AI Feature Integration",
  "Web Development",
  "Mobile App Development",
  "Portfolio Website",
  "Academic Project",
  "Other",
];

const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Not sure yet",
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
    if (serviceParam && serviceOptions.includes(serviceParam)) {
      setValue("service", serviceParam);
    }
  }, [searchParams, setValue]);

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    setSubmitResult(null);

    const result = await submitContact(values);

    if (result.success) {
      setSubmitResult({ success: true, message: "Thanks! Your project request has been received. I'll get back to you soon." });
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
          <div className="lg:col-span-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Have an idea? Let&apos;s build it.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-500 leading-relaxed mb-8"
            >
              Tell me what you&apos;re trying to build, and I&apos;ll get back to you with the next steps.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100"
          >
            {submitResult && submitResult.success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Request Received!</h3>
                <p className="text-gray-600 text-lg">{submitResult.message}</p>
                <Button 
                  className="mt-8"
                  variant="outline"
                  onClick={() => setSubmitResult(null)}
                >
                  Send another request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <div className="hidden" aria-hidden="true">
                  <Input {...register("honeypot")} tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Name *</label>
                    <Input placeholder="John Doe" {...register("name")} className="bg-white" />
                    {errors.name && <p className="text-sm text-red-500 font-medium">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Email *</label>
                    <Input placeholder="john@example.com" type="email" {...register("email")} className="bg-white" />
                    {errors.email && <p className="text-sm text-red-500 font-medium">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Phone / WhatsApp</label>
                    <Input placeholder="+1 234 567 890" {...register("phone")} className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Company</label>
                    <Input placeholder="Acme Inc." {...register("company")} className="bg-white" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Service *</label>
                    <select 
                      className="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      {...register("service")}
                    >
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-sm text-red-500 font-medium">{errors.service.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Project Budget</label>
                    <select 
                      className="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      {...register("budget")}
                    >
                      <option value="" disabled>Select a budget</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Message *</label>
                  <Textarea 
                    placeholder="Tell me about your project, goals, and timeline..." 
                    className="min-h-[150px] bg-white resize-y" 
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
                    "Send Project Request →"
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
