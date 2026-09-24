import React from "react";
import { siteConfig } from "@/data/siteConfig";

export function Marquee() {
  const slogans = [
    "Ingeniería de Software Directa",
    "Sin Capas de Intermediarios",
    "Arquitectura Escalable",
    "Código Limpio y Mantenible",
    "Infraestructura Cloud Robusta",
    "Pukio Tech · pukio.lat",
  ];

  const secondaryPhrases = [
    "Next.js & React 19",
    "TypeScript Estricto",
    "Linux SysAdmin & VPS",
    "Docker & Containers",
    "PostgreSQL & Redis",
    "Seguridad & DNS Cloudflare",
    "Optimización Core Web Vitals",
  ];

  return (
    <section className="relative py-14 overflow-hidden border-y border-slate-200 dark:border-slate-800/80 bg-slate-100/70 dark:bg-[#070B14] transition-colors duration-200">
      {/* Ambience Side Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-slate-100 dark:from-[#070B14] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-slate-100 dark:from-[#070B14] to-transparent z-10 pointer-events-none" />

      {/* Row 1: Primary Slogans */}
      <div className="overflow-hidden mb-4">
        <div className="marquee-track flex items-center gap-6" style={{ "--speed": "40s" } as React.CSSProperties}>
          {[...slogans, ...slogans].map((text, i) => (
            <div key={i} className="flex items-center gap-6 shrink-0">
              <span className="text-xl sm:text-2xl font-bold font-sans text-slate-900 dark:text-white tracking-tight">
                {text}
              </span>
              <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Reverse Outline Row */}
      <div className="overflow-hidden mb-6">
        <div
          className="marquee-track-reverse flex items-center gap-6"
          style={{ "--speed": "46s" } as React.CSSProperties}
        >
          {[...secondaryPhrases, ...secondaryPhrases].map((text, i) => (
            <div key={i} className="flex items-center gap-6 shrink-0">
              <span
                className="text-lg sm:text-xl font-bold font-mono tracking-wider text-cyan-800/80 dark:text-transparent"
                style={{
                  WebkitTextStroke: "1px rgba(6, 182, 212, 0.45)",
                }}
              >
                {text}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 3: Technology Badges Chips */}
      <div className="overflow-hidden">
        <div className="marquee-track flex items-center gap-3" style={{ "--speed": "50s" } as React.CSSProperties}>
          {[...siteConfig.marqueeChips, ...siteConfig.marqueeChips].map((chip, i) => (
            <span
              key={i}
              className="shrink-0 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-300 shadow-sm transition-colors"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
