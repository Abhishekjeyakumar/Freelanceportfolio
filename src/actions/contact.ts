"use server";

import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Service selection is required"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Invalid submission").optional(), // Honeypot field
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export async function submitContact(data: ContactFormData) {
  try {
    // 1. Validate data
    const validatedData = contactFormSchema.parse(data);

    // Honeypot check (anti-spam)
    if (validatedData.honeypot && validatedData.honeypot.length > 0) {
      return { success: false, error: "Spam detected." };
    }

    // 2. Save to Supabase
    const { error: dbError } = await supabase
      .from('ContactSubmission')
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          company: validatedData.company,
          service: validatedData.service,
          budget: validatedData.budget,
          message: validatedData.message,
          status: 'NEW',
        }
      ]);

    if (dbError) {
      console.error("Supabase Error:", dbError);
      return { success: false, error: "Failed to save submission. Please try again." };
    }

    // 3. Send Emails via Resend
    // We wrap this in try-catch so it doesn't block if email fails but DB succeeds
    try {
      const resendApiKey = process.env.RESEND_API_KEY;
      if (resendApiKey) {
        const resend = new Resend(resendApiKey);
        const contactEmail = process.env.CONTACT_EMAIL || "contact@example.com";

        // Send to admin (me)
        await resend.emails.send({
          from: "Portfolio <onboarding@resend.dev>", // Replace with verified domain if available
          to: contactEmail,
          subject: `New Project Enquiry: ${validatedData.service}`,
          html: `
            <h2>New Freelance Project Enquiry</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone || 'N/A'}</p>
            <p><strong>Company:</strong> ${validatedData.company || 'N/A'}</p>
            <p><strong>Service:</strong> ${validatedData.service}</p>
            <p><strong>Budget:</strong> ${validatedData.budget || 'N/A'}</p>
            <br/>
            <h3>Message:</h3>
            <p>${validatedData.message}</p>
            <br/>
            <p>Date: ${new Date().toLocaleString()}</p>
          `
        });

        // Send auto-reply to client
        await resend.emails.send({
          from: "Portfolio <onboarding@resend.dev>", // Replace with verified domain if available
          to: validatedData.email,
          subject: "Thank you for reaching out!",
          html: `
            <p>Hi ${validatedData.name},</p>
            <p>Thanks for reaching out. I've received your project enquiry and will get back to you soon.</p>
            <br/>
            <p>Best regards,</p>
            <p>Alex Dev</p>
          `
        });
      } else {
        console.warn("RESEND_API_KEY is not set. Emails were not sent.");
      }
    } catch (emailError) {
      console.error("Resend Error:", emailError);
      // We don't return false here since the DB save was successful
    }

    return { success: true };
  } catch (error) {
    console.error("Form Submission Error:", error);
    if (error instanceof z.ZodError) {
      const zodError = error as any;
      return { success: false, error: zodError.issues ? zodError.issues[0].message : "Validation error" };
    }
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
