"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
import { Plus, Minus, CheckCircle2 } from "lucide-react";

interface ServicesProps {
  onSelectServiceForBriefing?: (serviceTitle: string) => void;
}

export function Services({ onSelectServiceForBriefing }: ServicesProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleService = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="servicios" className="relative py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Stretches with grid to provide full scrolling track for sticky child */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-28 flex flex-col items-start">
              <SectionHeader
                eyebrow="Catálogo Especializado"
                title={
                  <>
                    Sistemas sobre los que{" "}
                    <span className="text-cyan-600 dark:text-cyan-400">corre tu negocio</span>
                  </>
                }
                lead="Tu web, tienda o servidor no es un folleto estático: es el núcleo operativo de tu empresa. Lo construimos con estándares de ingeniería de software para que sea rápido, seguro y escalable."
              />

              {/* Orbital Graphic (Customized with official Pukio /logo.png) */}
              <div className="relative w-64 h-64 mx-auto lg:mx-0 mt-12 flex items-center justify-center select-none pointer-events-none">
                {/* Outer Orbit Ring 3 */}
                <div className="absolute inset-0 rounded-full border border-cyan-500/25 dark:border-cyan-500/15 animate-orbit">
                  <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400/40 shadow-[0_0_12px_#06b6d4]" />
                </div>

                {/* Orbit Ring 2 */}
                <div className="absolute inset-6 rounded-full border border-slate-300 dark:border-slate-700/50 animate-orbit-reverse">
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-teal-400/40" />
                </div>

                {/* Orbit Ring 1 */}
                <div className="absolute inset-12 rounded-full border border-cyan-500/35 dark:border-cyan-500/25 animate-orbit">
                  <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Center Core: Pukio Isotipo with Glow */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-white dark:bg-white/95 border border-slate-200 dark:border-cyan-500/40 flex items-center justify-center p-3 shadow-lg shadow-cyan-500/10 dark:shadow-[0_0_35px_rgba(6,182,212,0.35)]">
                  <Image
                    src="/logo.png"
                    alt="Pukio Tech"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 w-full hidden lg:block">
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  ¿Requieres una arquitectura no listada?{" "}
                  <a
                    href="#contacto"
                    className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium"
                  >
                    Consultar con un ingeniero &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Expandable Services List */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {siteConfig.services.map((service, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={service.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white dark:bg-[#0E1628]/95 border-cyan-500/70 dark:border-cyan-500/50 shadow-[0_10px_35px_rgba(6,182,212,0.12)] dark:shadow-[0_10px_35px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/20"
                      : "bg-slate-50/70 dark:bg-[#0B132B]/50 border-slate-200 dark:border-slate-800/80 hover:border-cyan-400/50 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-[#0B132B]/80"
                  }`}
                >
                  {/* Service Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleService(idx)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start sm:items-center gap-5">
                      <span className="font-mono text-xs sm:text-sm font-bold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-700 dark:text-cyan-400">
                        {service.num}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-normal line-clamp-1">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                          : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Service Expanded Content */}
                  {isOpen && (
                    <div className="px-6 pb-7 sm:px-7 pt-2 border-t border-slate-200 dark:border-slate-800/60 animate-fadeIn">
                      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {service.fullDesc}
                      </p>

                      {/* Deliverables checklist */}
                      <div className="mb-6 space-y-3">
                        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                          Entregables y Capacidades
                        </h4>
                        <div className="grid grid-cols-1 gap-2.5">
                          {service.deliverables.map((item) => (
                            <div
                              key={item.title}
                              className="flex items-start gap-3 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-950/60 border border-slate-200/90 dark:border-slate-800/80"
                            >
                              <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                              <div className="text-xs sm:text-sm">
                                <span className="font-semibold text-slate-900 dark:text-white">
                                  {item.title}:
                                </span>{" "}
                                <span className="text-slate-600 dark:text-slate-300 font-normal">
                                  {item.desc}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies row */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/60">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 mr-1">
                            Stack:
                          </span>
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <Button
                          variant="accent"
                          size="sm"
                          withArrow
                          onClick={() => {
                            if (onSelectServiceForBriefing) {
                              onSelectServiceForBriefing(service.title);
                            }
                          }}
                        >
                          Cotizar {service.title}
                        </Button>
                      </div>
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
