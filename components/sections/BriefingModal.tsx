"use client";

import React, { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface BriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function BriefingModal({
  isOpen,
  onClose,
  defaultService,
}: BriefingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(
    defaultService || "Software a la Medida"
  );
  const [projectState, setProjectState] = useState("Desde cero / Nuevo proyecto");
  const [timeline, setTimeline] = useState("Estándar (1 a 2 meses)");
  const [formData, setFormData] = useState({
    nombre: "",
    contacto: "",
    detalles: "",
  });

  if (!isOpen) return null;

  const servicesList = [
    "Páginas Web y Tiendas Online",
    "Software a la Medida",
    "Mantenimiento y Reparación de Bugs",
    "Nube y VPS",
    "Servidores y DNS",
    "Consultoría de Arquitectura",
  ];

  const stateOptions = [
    "Desde cero / Nuevo proyecto",
    "Sistema existente que requiere mejoras",
    "Urgencia: corrección de errores o caídas de servidor",
  ];

  const timelineOptions = [
    "Urgente (< 3 semanas)",
    "Estándar (1 a 2 meses)",
    "Fase de planeación / Sin prisa",
  ];

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*Briefing Técnico - Pukio Tech*\n\n` +
        `• *Nombre / Contacto:* ${formData.nombre} (${formData.contacto})\n` +
        `• *Servicio:* ${selectedService}\n` +
        `• *Estado del proyecto:* ${projectState}\n` +
        `• *Plazo estimado:* ${timeline}\n` +
        `• *Detalles:* ${formData.detalles || "Por definir en llamada"}`
    );

    window.open(`https://wa.me/51974000000?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 dark:bg-slate-950/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-[#0E1628] border border-slate-200 dark:border-cyan-500/40 p-6 sm:p-10 shadow-2xl text-slate-900 dark:text-white transition-colors duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider">
              Briefing Técnico · Paso {step} de 3
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {step === 1 && "¿Qué tipo de ingeniería necesitas?"}
            {step === 2 && "Alcance y tiempos previstos"}
            {step === 3 && "Canal de contacto directo"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-normal">
            {step === 1 && "Selecciona la especialidad técnica que mejor describa tu necesidad."}
            {step === 2 && "Indícanos en qué fase se encuentra tu proyecto para estimar recursos."}
            {step === 3 && "Habla directamente con un ingeniero sin pasar por ejecutivos de ventas."}
          </p>
        </div>

        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="space-y-3 mb-8">
            {servicesList.map((srv) => (
              <button
                key={srv}
                type="button"
                onClick={() => setSelectedService(srv)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                  selectedService === srv
                    ? "bg-cyan-50 dark:bg-cyan-950/60 border-cyan-500 dark:border-cyan-400 text-cyan-950 dark:text-white shadow-sm dark:shadow-[0_0_15px_rgba(6,182,212,0.25)] font-medium"
                    : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <span className="text-sm font-semibold">{srv}</span>
                {selectedService === srv && (
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                )}
              </button>
            ))}

            <div className="pt-4 flex justify-end">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => setStep(2)}
              >
                Continuar a Tiempos
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Project State & Timeline */}
        {step === 2 && (
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                Estado del Proyecto
              </label>
              <div className="space-y-2">
                {stateOptions.map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setProjectState(st)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between ${
                      projectState === st
                        ? "bg-cyan-50 dark:bg-cyan-950/60 border-cyan-500 dark:border-cyan-400 text-cyan-950 dark:text-white font-medium"
                        : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <span>{st}</span>
                    {projectState === st && (
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                Plazo Objetivo
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {timelineOptions.map((tl) => (
                  <button
                    key={tl}
                    type="button"
                    onClick={() => setTimeline(tl)}
                    className={`p-3 rounded-xl border text-xs font-mono text-center transition-all cursor-pointer ${
                      timeline === tl
                        ? "bg-cyan-500 text-slate-950 font-bold border-cyan-400"
                        : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    {tl}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setStep(1)}
              >
                Volver
              </Button>
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => setStep(3)}
              >
                Continuar a Contacto
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Form */}
        {step === 3 && (
          <form onSubmit={handleFinish} className="space-y-4 mb-2">
            <div>
              <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                Tu nombre o empresa *
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Roberto Sánchez"
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:border-cyan-500 focus:outline-none placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                WhatsApp o Correo electrónico *
              </label>
              <input
                type="text"
                required
                placeholder="+51 900 000 000 o email@empresa.com"
                value={formData.contacto}
                onChange={(e) =>
                  setFormData({ ...formData, contacto: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:border-cyan-500 focus:outline-none placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                Comentarios breves sobre el proyecto (opcional)
              </label>
              <textarea
                rows={3}
                placeholder="Breve resumen de requerimientos o link a especificaciones..."
                value={formData.detalles}
                onChange={(e) =>
                  setFormData({ ...formData, detalles: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:border-cyan-500 focus:outline-none resize-none placeholder:text-slate-400"
              />
            </div>

            <div className="pt-4 flex items-center justify-between">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setStep(2)}
              >
                Volver
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="md"
                withArrow
              >
                Enviar Briefing a WhatsApp
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
