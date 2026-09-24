"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Server,
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  Layers,
  Globe,
  Database,
  ArrowUpRight,
  Code2,
  Sparkles,
} from "lucide-react";

interface HeroShowcaseProps {
  onOpenBriefing?: () => void;
}

export function HeroShowcase({ onOpenBriefing }: HeroShowcaseProps) {
  const [activeTab, setActiveTab] = useState<"pipeline" | "metrics" | "code">("pipeline");

  return (
    <div className="relative w-full max-w-[520px] mx-auto select-none">
      {/* Ambient background glow aura */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-teal-500/15 to-cyan-500/10 rounded-3xl blur-2xl opacity-75 pointer-events-none transition-opacity" />

      {/* Floating Status Pill Top Right */}
      <div className="absolute -top-3.5 -right-2 sm:-right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-emerald-500/30 shadow-lg shadow-emerald-500/10 text-xs font-mono backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-slate-800 dark:text-emerald-300 font-semibold text-[11px]">
          Producción Activa
        </span>
        <span className="text-slate-400 dark:text-slate-500 text-[10px]">· 18ms</span>
      </div>

      {/* Main Glassmorphic Showcase Dashboard */}
      <div className="relative rounded-3xl bg-white/90 dark:bg-slate-900/85 border border-slate-200/90 dark:border-slate-700/60 p-5 sm:p-6 shadow-[0_20px_60px_-15px_rgba(6,182,212,0.12),0_10px_25px_-5px_rgba(0,0,0,0.04)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_35px_rgba(6,182,212,0.12)] backdrop-blur-2xl transition-all duration-300">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white dark:bg-white/95 border border-slate-200 dark:border-cyan-500/30 p-1 flex items-center justify-center shadow-sm shrink-0">
              <Image
                src="/logo.png"
                alt="Pukio Tech"
                width={28}
                height={28}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-xs font-bold text-slate-900 dark:text-white font-sans">
                  Pukio Cloud Core
                </span>
                <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 font-semibold border border-cyan-500/20">
                  v2.4
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                Arquitectura de Alto Rendimiento
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-200 dark:border-cyan-800/60">
            <Zap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>99.98% SLA</span>
          </div>
        </div>

        {/* Interactive View Switcher Tabs */}
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-800 mb-5 text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab("pipeline")}
            className={`py-1.5 px-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer text-center ${
              activeTab === "pipeline"
                ? "bg-white dark:bg-slate-800 text-cyan-700 dark:text-cyan-300 shadow-sm border border-slate-200/80 dark:border-slate-700"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            Pipeline
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("metrics")}
            className={`py-1.5 px-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer text-center ${
              activeTab === "metrics"
                ? "bg-white dark:bg-slate-800 text-cyan-700 dark:text-cyan-300 shadow-sm border border-slate-200/80 dark:border-slate-700"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            Métricas
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("code")}
            className={`py-1.5 px-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer text-center ${
              activeTab === "code"
                ? "bg-white dark:bg-slate-800 text-cyan-700 dark:text-cyan-300 shadow-sm border border-slate-200/80 dark:border-slate-700"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            Config
          </button>
        </div>

        {/* Tab 1: Pipeline Arquitectónico */}
        {activeTab === "pipeline" && (
          <div className="space-y-2.5 animate-fadeIn">
            {/* Step 1: Edge CDN */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    Cloudflare Global CDN & Edge
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    HTTP/3 Anycast · Caché estática distribuida
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-semibold shrink-0">
                &lt; 20ms
              </span>
            </div>

            {/* Step 2: Next.js + React 19 Core */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    Next.js 16 + React 19 + TypeScript
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    SSR & Streaming desacoplado ultra veloz
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 font-semibold shrink-0">
                SSR 0ms
              </span>
            </div>

            {/* Step 3: Database & Cache Layer */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    PostgreSQL + Redis Cache Layer
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    Consultas indexadas y replicación en memoria
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-semibold shrink-0">
                Pool Activo
              </span>
            </div>

            {/* Step 4: Linux VPS & SysAdmin */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    Servidores VPS Linux Dedicados
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    Docker Containers, Nginx Reverse Proxy & DNS
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold shrink-0">
                Linux Root
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Métricas de Calidad Web */}
        {activeTab === "metrics" && (
          <div className="space-y-4 animate-fadeIn">
            {/* Core Web Vitals score rings */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-14 h-14 rounded-full border-3 border-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] mb-1.5">
                  <span className="text-base font-black font-mono text-emerald-600 dark:text-emerald-400">
                    100
                  </span>
                </div>
                <span className="text-[11px] font-bold text-slate-800 dark:text-white">
                  Performance
                </span>
                <span className="text-[10px] font-mono text-slate-400">Lighthouse</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="relative w-14 h-14 rounded-full border-3 border-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] mb-1.5">
                  <span className="text-base font-black font-mono text-cyan-600 dark:text-cyan-400">
                    100
                  </span>
                </div>
                <span className="text-[11px] font-bold text-slate-800 dark:text-white">
                  Accesibilidad
                </span>
                <span className="text-[10px] font-mono text-slate-400">A11y Validado</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="relative w-14 h-14 rounded-full border-3 border-teal-500 flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.3)] mb-1.5">
                  <span className="text-base font-black font-mono text-teal-600 dark:text-teal-400">
                    100
                  </span>
                </div>
                <span className="text-[11px] font-bold text-slate-800 dark:text-white">
                  SEO & Vitals
                </span>
                <span className="text-[10px] font-mono text-slate-400">Core Vitals</span>
              </div>
            </div>

            {/* Metrics Checklist */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">LCP (Render)</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">0.5s</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">FID (Respuesta)</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">&lt; 2ms</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">CLS (Estabilidad)</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">0.00</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">SSL Calificación</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400">A+ Grade</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Arquitectura en Código */}
        {activeTab === "code" && (
          <div className="rounded-2xl bg-slate-950 p-4 border border-slate-800 font-mono text-[11px] leading-relaxed text-slate-300 overflow-x-auto animate-fadeIn shadow-inner">
            <div className="flex items-center gap-1.5 pb-2.5 border-b border-slate-800/80 mb-3 text-slate-500 text-[10px]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-2 text-slate-400">pukio.config.ts</span>
            </div>
            <pre>
              <code>
                <span className="text-cyan-400">export const</span>{" "}
                <span className="text-white">pukioDeployment</span> = {"{\n"}
                {"  "}
                <span className="text-teal-300">arquitectura</span>:{" "}
                <span className="text-emerald-300">&quot;Desacoplada y Escalable&quot;</span>,{"\n"}
                {"  "}
                <span className="text-teal-300">intermediarios</span>:{" "}
                <span className="text-amber-300">0</span>,{" "}
                <span className="text-slate-500">// Ingeniería 100% directa</span>
                {"\n"}
                {"  "}
                <span className="text-teal-300">infraestructura</span>: [
                <span className="text-emerald-300">&quot;Linux VPS&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;Docker&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;DNS Cloudflare&quot;</span>],{"\n"}
                {"  "}
                <span className="text-teal-300">cobertura</span>:{" "}
                <span className="text-emerald-300">&quot;Chiclayo, Perú → Global&quot;</span>,{"\n"}
                {"  "}
                <span className="text-teal-300">soporte</span>:{" "}
                <span className="text-cyan-400">async</span> () =&gt;{" "}
                <span className="text-white">resolveInLessThan24Hours</span>()
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        )}

        {/* Bottom Quick Action Footer */}
        <div className="mt-4 pt-3.5 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Código testeado y certificado</span>
          </div>
          <button
            type="button"
            onClick={onOpenBriefing}
            className="inline-flex items-center gap-1 font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span>Iniciar Proyecto</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating Pill Bottom Left */}
      <div className="absolute -bottom-3.5 -left-2 sm:-left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700 shadow-lg text-xs font-mono backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
        <span className="text-slate-800 dark:text-slate-200 font-medium text-[11px]">
          Ingeniería Directa
        </span>
        <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[10px]">· 1 a 1</span>
      </div>
    </div>
  );
}
