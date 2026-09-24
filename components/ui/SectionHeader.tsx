import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
  children,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
        {title}
      </h2>

      {lead && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
          {lead}
        </p>
      )}

      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
