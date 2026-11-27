import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ServicesSection } from "@/components/sections/services";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { ProcessSection } from "@/components/sections/process";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <ProjectsSection />
        <ExperienceSection />
        <ProcessSection />
        <AboutSection />
        <Suspense fallback={<div className="py-24 text-center text-gray-500">Loading contact form...</div>}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
