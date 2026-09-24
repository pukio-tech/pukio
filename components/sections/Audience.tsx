import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/siteConfig";
import { Building2, MapPin, Globe2, ArrowUpRight } from "lucide-react";

export function Audience() {
  const audienceIcons = [Building2, MapPin, Globe2];

  return (
    <section id="sectores" className="relative py-28 overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Mercado & Enfoque"
          title={
            <>
              Diseñado para negocios que{" "}
              <span className="text-cyan-600 dark:text-cyan-400">no pueden detenerse</span>
            </>
          }
          lead="Nuestra arquitectura e infraestructura están calibradas para resolver desafíos técnicos reales en tres niveles clave de operación."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.audiences.map((item, idx) => {
            const Icon = audienceIcons[idx % audienceIcons.length];

            return (
              <div
                key={item.title}
                className="relative rounded-3xl bg-white dark:bg-[#0F172A]/70 border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between hover:border-cyan-500/50 hover:bg-slate-50/50 dark:hover:bg-[#121B33]/80 transition-all duration-300 group shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-600 dark:text-cyan-400">
                  <span className="font-semibold">{item.highlight}</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
