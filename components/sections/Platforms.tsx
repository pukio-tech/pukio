"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
import {
  Globe2,
  ExternalLink,
  MapPin,
  Building2,
  Database,
  Sparkles,
  Layers,
  Search,
  CheckCircle2,
  BarChart3,
  Compass,
  FileText,
  ShieldCheck,
} from "lucide-react";

interface PlatformsProps {
  onOpenBriefing?: (serviceName?: string) => void;
}

export function Platforms({ onOpenBriefing }: PlatformsProps) {
  const [activePreviewTab, setActivePreviewTab] = useState<"turismo" | "empresas" | "geo">("turismo");
  const platform = siteConfig.platforms[0];

  const sampleDepartments = [
    { name: "Lambayeque (Chiclayo)", items: "142 Atractivos", status: "Fichas completas" },
    { name: "Cusco", items: "318 Atractivos", status: "Georreferenciado" },
    { name: "Lima Metropolitana", items: "285 Atractivos", status: "Inventario activo" },
    { name: "Arequipa", items: "196 Atractivos", status: "Fichas completas" },
  ];

  const sampleCompanies = [
    { name: "Sector Turismo & Hotelería", count: "+12,400 registros", tag: "MINCETUR / SUNAT" },
    { name: "Empresas de Tecnología & Servicios", count: "+8,900 registros", tag: "Verificado" },
    { name: "Comercio & Agroindustria Norte", count: "+15,200 registros", tag: "Geolocalizado" },
  ];

  return (
    <section id="plataformas" className="relative py-28 overflow-hidden transition-colors duration-200">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Ecosistema & Plataformas Propias"
          title={
            <>
              Tecnología en producción{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400">
                al servicio del país
              </span>
            </>
          }
          lead="No solo desarrollamos software para clientes: investigamos, creamos y desplegamos infraestructura de datos públicos accesible para todos. Conoce las plataformas activas de nuestro laboratorio Pukio Labs."
          className="mb-16"
        />

        {/* Featured Platform Hero Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-white to-slate-50/80 dark:from-[#0E1628]/95 dark:to-[#070B14]/90 border border-slate-200/90 dark:border-cyan-500/30 p-6 sm:p-10 shadow-[0_20px_60px_-15px_rgba(6,182,212,0.12)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6),0_0_35px_rgba(6,182,212,0.15)] overflow-hidden">
          {/* Top Decorative Grid Pattern Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Col: Platform Description & Actions */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* Live Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  {platform.badge}
                </span>

                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  open data · 25 departamentos
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
                {platform.name}
              </h3>

              <p className="text-sm sm:text-base font-medium text-cyan-700 dark:text-cyan-400 mb-4 font-mono">
                {platform.tagline}
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {platform.fullDescription}
              </p>

              {/* Feature Bullet Points */}
              <div className="w-full space-y-2.5 mb-8">
                {platform.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-normal">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap items-center gap-1.5 mb-8">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-2">
                  Tecnologías:
                </span>
                {platform.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-md font-sans"
                >
                  <Globe2 className="w-4 h-4" />
                  <span>{platform.externalUrlText}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Button
                  variant="outline"
                  size="md"
                  onClick={() => onOpenBriefing && onOpenBriefing("Plataforma de Datos / Software a Medida")}
                >
                  Crear Plataforma para mi Empresa
                </Button>
              </div>
            </div>

            {/* Right Col: Interactive Platform Preview Console */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white dark:bg-[#070B14] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
                {/* Simulated Browser Bar */}
                <div className="px-4 py-3 bg-slate-100 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
                  </div>

                  {/* Browser URL Input Box */}
                  <div className="flex-1 max-w-sm mx-auto flex items-center gap-2 px-3 py-1 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-600 dark:text-cyan-400">
                    <Globe2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span className="truncate">opendata.pukio.lat</span>
                    <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-300">
                      HTTP/3
                    </span>
                  </div>

                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-500 transition-colors p-1"
                    title="Abrir en pestaña nueva"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Simulated App Console Navigation Tabs */}
                <div className="grid grid-cols-3 border-b border-slate-200 dark:border-slate-800 text-xs font-mono bg-slate-50 dark:bg-slate-950/50">
                  <button
                    type="button"
                    onClick={() => setActivePreviewTab("turismo")}
                    className={`py-2.5 px-3 flex items-center justify-center gap-1.5 font-medium transition-colors ${
                      activePreviewTab === "turismo"
                        ? "bg-white dark:bg-[#070B14] text-cyan-700 dark:text-cyan-400 border-b-2 border-cyan-500 font-semibold"
                        : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Turismo Oficial</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActivePreviewTab("empresas")}
                    className={`py-2.5 px-3 flex items-center justify-center gap-1.5 font-medium transition-colors ${
                      activePreviewTab === "empresas"
                        ? "bg-white dark:bg-[#070B14] text-cyan-700 dark:text-cyan-400 border-b-2 border-cyan-500 font-semibold"
                        : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Empresas & RUC</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActivePreviewTab("geo")}
                    className={`py-2.5 px-3 flex items-center justify-center gap-1.5 font-medium transition-colors ${
                      activePreviewTab === "geo"
                        ? "bg-white dark:bg-[#070B14] text-cyan-700 dark:text-cyan-400 border-b-2 border-cyan-500 font-semibold"
                        : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>25 Departamentos</span>
                  </button>
                </div>

                {/* Interactive Preview Content Area */}
                <div className="p-5 sm:p-6 bg-white dark:bg-[#070B14]">
                  {activePreviewTab === "turismo" && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div className="flex items-center gap-2">
                          <Compass className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                          <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                            Inventario Nacional de Recursos Turísticos
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
                          MINCETUR Oficial
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sampleDepartments.map((dept) => (
                          <div
                            key={dept.name}
                            className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/40 transition-colors"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-semibold text-slate-900 dark:text-white">
                                {dept.name}
                              </span>
                              <span className="w-2 h-2 rounded-full bg-cyan-500" />
                            </div>
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                              <span>{dept.items}</span>
                              <span className="text-emerald-600 dark:text-emerald-400">{dept.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-3 rounded-xl bg-cyan-50/50 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-900/50 flex items-center justify-between text-xs">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          Georreferenciación con coordenadas satelitales y fichas técnicas
                        </span>
                        <a
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono font-semibold text-cyan-700 dark:text-cyan-400 hover:underline flex items-center gap-1 shrink-0 ml-2"
                        >
                          Ver mapa &rarr;
                        </a>
                      </div>
                    </div>
                  )}

                  {activePreviewTab === "empresas" && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                          <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                            Directorio Empresarial y Consulta RUC
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                          SUNAT / Registros
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {sampleCompanies.map((sec) => (
                          <div
                            key={sec.name}
                            className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between"
                          >
                            <div>
                              <div className="text-xs font-semibold text-slate-900 dark:text-white">
                                {sec.name}
                              </div>
                              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                                {sec.count}
                              </div>
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-700">
                              {sec.tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activePreviewTab === "geo" && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                          <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                            25 Departamentos del Perú Integrados
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">100% Cobertura</span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-2 border border-slate-800">
                        <div className="flex items-center justify-between text-cyan-400">
                          <span>GET /api/v1/departamentos/lambayeque</span>
                          <span className="text-emerald-400 font-bold">200 OK (14ms)</span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          {`{ "region": "Lambayeque", "capital": "Chiclayo", "recursos_turisticos": 142, "status": "activo" }`}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                          <div className="text-xl font-bold font-mono text-cyan-600 dark:text-cyan-400">25 / 25</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">Regiones Mapeadas</div>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                          <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400">0.0s</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">Costo de Consulta</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom Stats Row inside Preview */}
                  <div className="grid grid-cols-4 gap-2 pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 text-center font-mono">
                    {platform.stats.map((s) => (
                      <div key={s.label}>
                        <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                          {s.value}
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 truncate">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Banner: Custom Data Platforms & Dashboards for Organizations */}
        <div className="mt-10 rounded-2xl bg-slate-100/80 dark:bg-[#0B132B]/60 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                ¿Tu empresa o institución necesita una plataforma de datos a la medida?
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-normal mt-1">
                Construimos portales de datos abiertos, dashboards geoespaciales, pipelines ETL y APIs privadas con la misma arquitectura de alto rendimiento.
              </p>
            </div>
          </div>

          <Button
            variant="primary"
            size="md"
            withArrow
            className="shrink-0 w-full md:w-auto"
            onClick={() => onOpenBriefing && onOpenBriefing("Plataforma de Datos e Inteligencia")}
          >
            Cotizar Plataforma a Medida
          </Button>
        </div>
      </div>
    </section>
  );
}
