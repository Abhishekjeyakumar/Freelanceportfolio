import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 py-14 mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight inline-block mb-3 text-white">
              {portfolioData.personalInfo.name}
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed text-sm mb-4">
              {portfolioData.personalInfo.role} specializing in Generative AI, RAG architectures, LangGraph agents, and MCP integrations.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={15} />
                <span>{portfolioData.personalInfo.email}</span>
              </a>
              <a href={`tel:${portfolioData.personalInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={15} />
                <span>{portfolioData.personalInfo.phone}</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-xs uppercase tracking-wider text-gray-200">Navigation</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors text-sm">Expertise</Link></li>
              <li><Link href="/#work" className="text-gray-400 hover:text-white transition-colors text-sm">AI Projects</Link></li>
              <li><Link href="/#experience" className="text-gray-400 hover:text-white transition-colors text-sm">Experience & Education</Link></li>
              <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-xs uppercase tracking-wider text-gray-200">Connect</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={portfolioData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Github size={16} /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Mail size={16} /> Email
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} {portfolioData.personalInfo.name}. All rights reserved. Built with Next.js & Tailwind CSS.
          </p>
          <p className="text-gray-500 text-xs">
            B.E. Computer Science & Engineering • Anna University
          </p>
        </div>
      </div>
    </footer>
  );
}
