"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    "Software a la Medida",
  ]);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const availableNeeds = [
    "Páginas Web & eCommerce",
    "Software a la Medida",
    "Mantenimiento & Bugs",
    "Nube & VPS",
    "Servidores & DNS",
    "Otro Requerimiento",
  ];

  const toggleNeed = (need: string) => {
    if (selectedNeeds.includes(need)) {
      if (selectedNeeds.length > 1) {
        setSelectedNeeds(selectedNeeds.filter((n) => n !== need));
      }
    } else {
      setSelectedNeeds([...selectedNeeds, need]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Build preformatted WhatsApp message
    const msg = encodeURIComponent(
      `Hola Pukio Tech!\n\nMi nombre es: ${formData.nombre}\nEmail: ${formData.email}\nEmpresa: ${formData.empresa || "No especificada"}\nTeléfono: ${formData.telefono || "No especificado"}\n\nNecesito asesoría en: ${selectedNeeds.join(", ")}\n\nDetalles del proyecto:\n${formData.mensaje}`
    );

    // Open WhatsApp in new tab
    const waUrl = `https://wa.me/51974000000?text=${msg}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="contacto" className="relative py-28 bg-slate-50/60 dark:bg-[#070B14] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionHeader
                eyebrow="Contacto Directo"
                title={
                  <>
                    Hablemos de tu{" "}
                    <span className="text-cyan-600 dark:text-cyan-400">próximo reto técnico</span>
                  </>
                }
                lead="Nos gusta pensar contigo desde la arquitectura inicial. Escríbenos y coordinamos una sesión de análisis de requerimientos sin costo ni compromiso."
              />

              <div className="mt-10 space-y-6">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 shadow-sm transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">
                      Email Oficial
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {siteConfig.email}
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 shadow-sm transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">
                      WhatsApp & Teléfono
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Canal Directo de Ingeniería
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">
                      Sede Central
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {siteConfig.headquarters} · Modalidad Remota Global
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 hidden lg:block">
              <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                Respuesta en menos de 24 horas laborables.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Form with Needs Chips */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white dark:bg-[#0E1628] border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-xl dark:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                {/* Needs chips selection */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-3">
                    Necesito asesoría o cotización en…
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableNeeds.map((need) => {
                      const isSelected = selectedNeeds.includes(need);
                      return (
                        <button
                          key={need}
                          type="button"
                          onClick={() => toggleNeed(need)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                            isSelected
                              ? "bg-cyan-500 text-slate-950 font-bold border border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                              : "bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isSelected ? "bg-slate-950" : "bg-cyan-500"
                            }`}
                          />
                          {need}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-2"
                    >
                      Nombre completo *
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      required
                      placeholder="Ej. Martín Flores"
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-2"
                    >
                      Correo electrónico *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="nombre@empresa.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-2"
                    >
                      WhatsApp o teléfono (opcional)
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      placeholder="+51 900 000 000"
                      value={formData.telefono}
                      onChange={(e) =>
                        setFormData({ ...formData, telefono: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-2"
                    >
                      Empresa u Organización (opcional)
                    </label>
                    <input
                      id="empresa"
                      type="text"
                      placeholder="Mi Empresa SAC"
                      value={formData.empresa}
                      onChange={(e) =>
                        setFormData({ ...formData, empresa: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-2"
                  >
                    Cuéntanos sobre tu proyecto o necesidad técnica *
                  </label>
                  <textarea
                    id="mensaje"
                    required
                    rows={4}
                    placeholder="Describe qué sistema necesitas desarrollar, qué problemas presenta tu plataforma actual o qué infraestructura requieres..."
                    value={formData.mensaje}
                    onChange={(e) =>
                      setFormData({ ...formData, mensaje: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    withArrow
                    className="w-full sm:w-auto"
                  >
                    Enviar Mensaje Directo
                  </Button>

                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 text-center sm:text-right">
                    Conexión directa con ingenieros.
                  </span>
                </div>

                {submitted && (
                  <div className="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-500/40 flex items-center gap-3 text-cyan-800 dark:text-cyan-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-cyan-600 dark:text-cyan-400" />
                    <span>
                      ¡Gracias por escribirnos! Abriendo conexión con nuestros ingenieros...
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
