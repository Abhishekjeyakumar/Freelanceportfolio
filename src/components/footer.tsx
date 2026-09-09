import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 py-12 mt-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight inline-block mb-4 text-white">
              {portfolioData.personalInfo.name}
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              {portfolioData.personalInfo.role} building intelligent software, automation and digital products.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-100">Navigation</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link href="/#work" className="text-gray-400 hover:text-white transition-colors text-sm">Work</Link></li>
              <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-100">Connect</h3>
            <ul className="flex flex-col gap-3">
              <li><a href={portfolioData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">GitHub</a></li>
              <li><a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">LinkedIn</a></li>
              <li><a href={`mailto:${portfolioData.personalInfo.email}`} className="text-gray-400 hover:text-white transition-colors text-sm">Email</a></li>
              <li><a href={portfolioData.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {currentYear} {portfolioData.personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
