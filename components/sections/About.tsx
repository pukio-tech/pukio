import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { Target, Eye } from "lucide-react";

export function About() {
  const pillars = [
    {
      title: "Análisis Previo de Requerimientos",
      desc: "No iniciamos ningún proyecto sin comprender a fondo la lógica de negocio. Evitamos el 'desarrollo a ciegas' con especificaciones claras.",
    },
    {
      title: "Cotizaciones Transparentes",
      desc: "Estructuras de costos claras, sin cargos ocultos, basadas en el esfuerzo técnico real y la infraestructura necesaria.",
    },
    {
      title: "Atención Directa de Ingenieros",
      desc: "Eliminamos las capas de gestión comercial que diluyen la comunicación. El cliente habla directamente con los ingenieros a cargo del proyecto.",
    },
    {
      title: "Infraestructura Robusta",
      desc: "Priorizamos la estabilidad y la escalabilidad, utilizando estándares de industria para asegurar que cada sitio o software resista el crecimiento.",
    },
  ];

  return (
    <section id="nosotros" className="relative py-28 bg-white dark:bg-[#070B14] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Story & Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-6 flex flex-col items-start">
            <SectionHeader
              eyebrow="Identidad & Filosofía"
              title={
                <>
                  Una empresa de ingeniería{" "}
                  <span className="text-cyan-600 dark:text-cyan-400">cercana y directa</span>
                </>
              }
              lead="Nacimos para romper el modelo tradicional de intermediación comercial. En Pukio Tech, la ingeniería de software y la infraestructura se gestionan con rigor técnico y total transparencia."
            />

            <div className="mt-8 space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">¿Por qué Pukio?</strong>{" "}
                En la cosmovisión andina, el <em className="text-cyan-600 dark:text-cyan-400 not-italic font-semibold">&ldquo;pukyu&rdquo;</em> es el manantial de donde brota el agua limpia y vital. Para nosotros, representa el origen de soluciones tecnológicas cristalinas, fluidas y sólidas para que los negocios operen sin fricción.
              </p>
              <p>
                Con sede central en <strong className="text-slate-900 dark:text-white font-semibold">Chiclayo, Perú</strong> y operaciones remotas para el mercado nacional e internacional, conectamos directamente a las empresas con los desarrolladores y sysadmins que construyen la solución.
              </p>
            </div>

            <div className="mt-8">
              <Button
                variant="primary"
                size="md"
                withArrow
                href="#contacto"
              >
                Conocer a nuestro equipo técnico
              </Button>
            </div>
          </div>

          {/* Right Column: Misión y Visión Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="rounded-3xl bg-slate-50 dark:bg-gradient-to-br dark:from-[#0F172A] dark:to-[#121B33] border border-slate-200 dark:border-slate-800 p-8 hover:border-cyan-400/40 transition-all duration-300 shadow-sm dark:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Nuestra Misión
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Desarrollar productos de software y ecosistemas cloud de alta calidad utilizando herramientas de vanguardia, atendiendo las exigencias de un mercado globalizado y respaldados por valores de compromiso y transparencia a largo plazo.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 dark:bg-gradient-to-br dark:from-[#0F172A] dark:to-[#121B33] border border-slate-200 dark:border-slate-800 p-8 hover:border-cyan-400/40 transition-all duration-300 shadow-sm dark:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Nuestra Visión
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Consolidarnos como el referente tecnológico líder en desarrollo de software y administración cloud en el norte del Perú y con proyección internacional, ofreciendo soluciones que compitan con los más altos estándares mundiales.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Value Pillars from Dossier */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
              Pilares de Nuestra Propuesta de Valor
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Principios innegociables con los que diseñamos, desarrollamos y desplegamos cada línea de código.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-slate-50/80 dark:bg-[#0B132B]/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 shadow-sm transition-colors"
              >
                <div>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold mb-3 block">
                    0{i + 1} //
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Facts Strip */}
        <div className="rounded-3xl bg-slate-100/90 dark:bg-[#0B132B]/80 border border-slate-200 dark:border-slate-800 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 shadow-sm">
          <div>
            <span className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block mb-1">
              Qué Hacemos
            </span>
            <p className="text-sm text-slate-800 dark:text-white font-medium">
              Web, eCommerce, Software a medida, VPS y Servidores DNS.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block mb-1">
              Cómo Trabajamos
            </span>
            <p className="text-sm text-slate-800 dark:text-white font-medium">
              Consultoría sin costo, cotización con precio cerrado y entregas continuas.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block mb-1">
              Sede y Cobertura
            </span>
            <p className="text-sm text-slate-800 dark:text-white font-medium">
              Chiclayo, Perú · Modalidad Remota e Híbrida para todo el mundo.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block mb-1">
              Contacto Directo
            </span>
            <p className="text-sm text-slate-800 dark:text-white font-medium">
              contacto@pukio.lat · Sin ejecutivos de venta intermediarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
