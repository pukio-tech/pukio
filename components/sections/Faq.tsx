"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/siteConfig";
import { ChevronDown } from "lucide-react";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-28 bg-slate-50/80 dark:bg-[#090F1F]/70 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Stretches with grid to provide full scrolling track for sticky child */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-28 flex flex-col items-start">
              <SectionHeader
                eyebrow="Resolución de Dudas"
                title={
                  <>
                    Lo que nos preguntan{" "}
                    <span className="text-cyan-600 dark:text-cyan-400">antes de empezar</span>
                  </>
                }
                lead="La claridad técnica y comercial es nuestra prioridad. Aquí respondemos las dudas más frecuentes sobre costos, metodología y garantías."
              />

              <div className="mt-8 p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-sm w-full">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  ¿Tienes una consulta específica o requerimiento a medida?
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Escríbenos directamente o inicia un briefing técnico y recibirás una respuesta de nuestros ingenieros en menos de 24 horas.
                </p>
                <a
                  href="#contacto"
                  className="text-xs font-mono text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 font-semibold inline-flex items-center gap-1"
                >
                  Escribir al equipo técnico &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {siteConfig.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white dark:bg-[#0F172A] border-cyan-500/70 dark:border-cyan-500/40 shadow-md ring-1 ring-cyan-500/20"
                      : "bg-white/80 dark:bg-[#0B132B]/40 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/30"
                          : "bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/60 font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
