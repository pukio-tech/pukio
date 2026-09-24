import React from "react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-100 dark:bg-[#050810] border-t border-slate-200 dark:border-slate-900 pt-20 pb-12 overflow-hidden transition-colors duration-200">
      {/* Background Ambience & Dot grid */}
      <div className="dot-lens opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-200 dark:border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Logo size="lg" className="mb-4" />
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-normal max-w-sm">
              {siteConfig.slogan} Transformamos la complejidad técnica en ecosistemas de software fluidos y estables.
            </p>
            <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400/80">
              Sede Central: {siteConfig.headquarters}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#servicios" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#metodologia" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Metodología
                </a>
              </li>
              <li>
                <a href="#sectores" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Sectores
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.services.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#servicios"
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors line-clamp-1"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-4">
              Ingeniería Directa
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-mono text-xs"
              >
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </a>

              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono text-xs"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>WhatsApp de Soporte</span>
              </a>

              <div className="pt-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                >
                  <span>Iniciar sesión de análisis</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} {siteConfig.name} ({siteConfig.domain}). Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-700 dark:hover:text-slate-400 transition-colors cursor-pointer">
              Privacidad y Seguridad
            </span>
            <span className="hover:text-slate-700 dark:hover:text-slate-400 transition-colors cursor-pointer">
              Términos del Servicio
            </span>
          </div>
        </div>

        {/* Giant Typographic Watermark */}
        <div
          className="select-none pointer-events-none mt-10 text-center font-black tracking-tighter text-slate-200/80 dark:text-slate-900/40 text-[18vw] leading-none uppercase overflow-hidden"
          aria-hidden="true"
        >
          pukio
        </div>
      </div>
    </footer>
  );
}
