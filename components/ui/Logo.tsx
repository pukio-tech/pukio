import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon" | "minimal";
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", variant = "full", size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const pixelSizes = {
    sm: 32,
    md: 40,
    lg: 48,
  };

  const textSizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Pukio Isotipo with /logo.png */}
      <div
        className={`relative ${iconSizes[size]} flex items-center justify-center rounded-xl bg-white dark:bg-white/95 border border-slate-200/80 dark:border-cyan-500/30 p-1 shadow-sm shadow-slate-200/50 dark:shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] group-hover:scale-105 transition-all duration-300 shrink-0`}
      >
        <Image
          src="/logo.png"
          alt="Pukio Tech Logo"
          width={pixelSizes[size]}
          height={pixelSizes[size]}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {variant !== "icon" && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-bold tracking-tight text-slate-900 dark:text-white font-sans transition-colors ${textSizes[size]}`}
            >
              pukio
            </span>
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/25 font-semibold tracking-wider">
              tech
            </span>
          </div>
          {variant === "full" && (
            <span className="text-[9px] font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase mt-0.5">
              Software & Cloud
            </span>
          )}
        </div>
      )}
    </div>
  );
}
