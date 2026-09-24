import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/siteConfig";
import { CheckCircle2, Search, FileText, Code2, Rocket } from "lucide-react";

export function Methodology() {
  const stepIcons = [Search, FileText, Code2, Rocket];

  return (
    <section id="metodologia" className="relative py-28 bg-slate-50/70 dark:bg-[#090F1F]/60 border-t border-slate-200 dark:border-transparent transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Proceso de Trabajo"
          title={
            <>
              De la idea a producción,{" "}
              <span className="text-cyan-600 dark:text-cyan-400">sin sorpresas</span>
            </>
          }
          lead="Nuestra metodología elimina los desvíos y los costos ocultos. Sabes exactamente qué se construye, en qué plazo y con qué inversión técnica."
          align="center"
          className="mb-16"
        />

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {siteConfig.methodology.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];

            return (
              <div
                key={step.num}
                className="relative rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#0F172A] dark:to-[#0A1020] border border-slate-200 dark:border-slate-800 p-7 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.12)] dark:hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] shadow-sm transition-all duration-300 group"
              >
                {/* Step indicator top */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white dark:group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-200 dark:text-slate-700 group-hover:text-cyan-500/50 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-700 dark:text-cyan-400 font-semibold mb-3">
                    {step.badge}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Progress indicator tick */}
                {/* <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Fase garantizada</span>
                </div> */}
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 rounded-2xl bg-white dark:bg-[#0B132B]/80 border border-cyan-500/30 dark:border-cyan-500/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md dark:shadow-none">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Compromiso de Alcance y Cotización Cerrada
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                No iniciamos la codificación sin un acuerdo técnico milimétrico. Si surgen cambios, se evalúan con total transparencia.
              </p>
            </div>
          </div>

          <a
            href="#contacto"
            className="shrink-0 text-sm font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 flex items-center gap-1 font-mono transition-colors"
          >
            Agendar sesión de análisis &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
