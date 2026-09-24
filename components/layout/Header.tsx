"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface HeaderProps {
  onOpenBriefing?: () => void;
}

export function Header({ onOpenBriefing }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Sectores", href: "#sectores" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#070B14]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" className="group" aria-label="Pukio Tech - Inicio">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors duration-200 hover:text-cyan-600 dark:hover:text-cyan-400 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Light / Dark Mode Toggle */}
          {/* <ThemeToggle /> */}

          <Button
            variant="ghost"
            size="sm"
            href="#contacto"
          >
            Contacto
          </Button>

          {/* <Button
            variant="primary"
            size="sm"
            withArrow
            onClick={onOpenBriefing}
          >
            Iniciar Briefing
          </Button> */}
        </div>

        {/* Mobile menu and toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-cyan-500/40 focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#070B14]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-6 py-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center justify-between py-2 border-b border-slate-200/80 dark:border-slate-800/60"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-500" />
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-3">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBriefing) onOpenBriefing();
                }}
              >
                Iniciar Briefing
              </Button>

              <Button
                variant="whatsapp"
                size="md"
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Directo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
