"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { Services } from "@/components/sections/Services";
import { Marquee } from "@/components/sections/Marquee";
import { Methodology } from "@/components/sections/Methodology";
import { Audience } from "@/components/sections/Audience";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { BriefingModal } from "@/components/sections/BriefingModal";

export default function Home() {
  const [briefingOpen, setBriefingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(
    undefined
  );

  const handleOpenBriefing = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setBriefingOpen(true);
  };

  const handleCloseBriefing = () => {
    setBriefingOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#070B14] text-slate-900 dark:text-slate-100 relative transition-colors duration-200">
      {/* Sticky Header */}
      <Header onOpenBriefing={() => handleOpenBriefing()} />

      <main id="main" className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero onOpenBriefing={() => handleOpenBriefing()} />

        {/* Stats Section */}
        <Stats />

        {/* Luminous Wave Divider */}
        <WaveDivider />

        {/* Services Catalog with Orbit Visual & Interactive Accordion */}
        <Services
          onSelectServiceForBriefing={(serviceTitle) =>
            handleOpenBriefing(serviceTitle)
          }
        />

        {/* Infinite Tech & Slogan Marquee */}
        <Marquee />

        {/* Luminous Wave Divider */}
        <WaveDivider flip />

        {/* 4-Step Methodology */}
        <Methodology />

        {/* Target Audience / Sectors */}
        <Audience />

        {/* Luminous Wave Divider */}
        <WaveDivider />

        {/* About, Mission, Vision, and Value Pillars */}
        <About />

        {/* FAQ Section */}
        <Faq />

        {/* Interactive Contact Form with Need Chips */}
        <Contact />
      </main>

      {/* Footer with Giant Watermark */}
      <Footer />

      {/* Interactive 3-Step Briefing Modal */}
      <BriefingModal
        isOpen={briefingOpen}
        onClose={handleCloseBriefing}
        defaultService={selectedService}
      />
    </div>
  );
}
