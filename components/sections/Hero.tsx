"use client";

import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/siteConfig";
import { ArrowDown, Cpu, Sparkles, Terminal, ShieldCheck, Zap } from "lucide-react";

interface HeroProps {
  onOpenBriefing?: () => void;
}

export function Hero({ onOpenBriefing }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes for the "Pukio Digital Spring" (Manantial)
    const particleCount = 42;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.9,
      vy: (Math.random() - 0.5) * 0.9,
      radius: Math.random() * 2.5 + 1.2,
      baseAlpha: Math.random() * 0.6 + 0.3,
    }));

    let mouse = { x: width / 2, y: height / 2, isHovered: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle hydrodynamic fluid harmonic waves
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const offset = i * 28;
        const colorAlpha = 0.12 - i * 0.03;
        ctx.strokeStyle = `rgba(6, 182, 212, ${colorAlpha})`;

        for (let x = 0; x < width; x += 6) {
          const y =
            height * 0.55 +
            Math.sin(x * 0.008 + time + i * 1.2) * 32 +
            Math.cos(x * 0.004 - time * 0.6) * 18 +
            offset;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Draw and connect particles (network of nodes)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Reaction to mouse proximity
        if (mouse.isHovered) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            p.x -= (dx / dist) * 1.5;
            p.y -= (dy / dist) * 1.5;
          }
        }

        // Connect near particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const alpha = (1 - dist / 90) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${p.baseAlpha})`;
        ctx.shadowColor = "#06B6D4";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

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

          {/* Right Column: Interactive Digital Spring (Canvas + Glass Console) */}
          {/* <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[480px] rounded-3xl bg-white/95 dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-[#0A1020]/90 border border-slate-200 dark:border-slate-700/60 p-5 shadow-[0_20px_50px_rgba(6,182,212,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden group">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 ml-2">
                    pukio-core // telemetry
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-200 dark:border-cyan-800/50">
                  LIVE STREAM
                </span>
              </div>

              <div className="relative w-full h-[280px] sm:h-[300px] rounded-2xl overflow-hidden bg-[#070b14] border border-slate-800/80">
                <canvas
                  ref={canvasRef}
                  className="w-full h-full cursor-crosshair block"
                />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-slate-200">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Flujo de datos activo
                  </span>
                  <span className="text-cyan-400">&lt;100ms latencia</span>
                </div>
              </div>

              <div className="mt-4 pt-3 flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Arquitectura desacoplada</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenBriefing}
                  className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors font-medium flex items-center gap-1 cursor-pointer"
                >
                  Cotizar proyecto &rarr;
                </button>
              </div>
            </div>
          </div> */}
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
