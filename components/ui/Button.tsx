import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent" | "whatsapp";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 select-none group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#070b14]";

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-3.5 text-base gap-2.5",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#070B14] font-semibold hover:shadow-[0_0_24px_rgba(6,182,212,0.45)] hover:from-cyan-400 hover:to-cyan-300 active:scale-[0.98]",
    secondary:
      "bg-slate-100 dark:bg-[#131c35] text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700/60 hover:bg-slate-200 dark:hover:bg-[#1a2544] hover:border-cyan-500/50 shadow-sm active:scale-[0.98]",
    ghost:
      "bg-transparent text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-slate-700/60 hover:border-cyan-500/50 hover:bg-slate-100/70 dark:hover:bg-white/[0.03] active:scale-[0.98]",
    accent:
      "bg-cyan-50 dark:bg-[#0F172A] text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/40 hover:bg-cyan-100 dark:hover:bg-cyan-950/40 hover:border-cyan-500 shadow-sm dark:hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] active:scale-[0.98]",
    whatsapp:
      "bg-[#10B981] text-white font-semibold hover:bg-[#059669] hover:shadow-[0_0_24px_rgba(16,185,129,0.4)] active:scale-[0.98]",
  };

  const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} target={props.target} rel={props.rel}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
