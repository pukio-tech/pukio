"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Terminal, ShieldCheck, Zap } from "lucide-react";
import { HeroShowcase } from "@/components/sections/HeroShowcase";

interface HeroProps {
  onOpenBriefing?: () => void;
}

export function Hero({ onOpenBriefing }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="dot-lens" />
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Origin Badge */}
            <div className="mb-6 flex flex-wrap items-center gap-2.5">
              <Badge pulse pulseColor="cyan">
                PUKYU · MANANTIAL DE INGENIERÍA
              </Badge>
              <span className="hidden sm:inline-block text-xs font-mono text-slate-500 dark:text-slate-400">
                Chiclayo, Perú → Global
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              Software hecho para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400">
                escalar
              </span>
              , con ingeniería directa y sin intermediarios.
            </h1>

            {/* Lead description from Dossier */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Inspirados en el concepto quechua del <em className="text-cyan-700 dark:text-cyan-300 not-italic font-semibold">&ldquo;pukyu&rdquo;</em> (manantial), somos la fuente de tecnología confiable para negocios que buscan transformar la complejidad técnica en soluciones fluidas, transparentes y robustas.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Button
                variant="primary"
                size="lg"
                withArrow
                onClick={onOpenBriefing}
              >
                Iniciar Briefing Técnico
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#servicios"
              >
                Explorar Servicios
              </Button>
            </div>

            {/* Mini Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80 w-full max-w-xl text-xs font-mono text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>Atención directa</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>99.9% Disponibilidad</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>Código limpio & VPS</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Performance Architecture Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroShowcase onOpenBriefing={onOpenBriefing} />
          </div>
        </div>

        {/* Scroll Cue indicator */}
        <div className="mt-16 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 text-xs font-mono select-none">
          <span className="mb-2 tracking-widest uppercase">Explorar</span>
          <div className="w-5 h-8 rounded-full border border-slate-300 dark:border-slate-700 flex items-start justify-center p-1">
            <span className="w-1 h-2 rounded-full bg-cyan-500 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
