import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  pulse?: boolean;
  pulseColor?: "cyan" | "green" | "emerald";
  className?: string;
}

export function Badge({
  children,
  pulse = false,
  pulseColor = "cyan",
  className = "",
}: BadgeProps) {
  const pulseColors = {
    cyan: "bg-cyan-500",
    green: "bg-emerald-500",
    emerald: "bg-teal-500",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-700/60 backdrop-blur-md text-slate-700 dark:text-slate-300 shadow-sm ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pulseColors[pulseColor]}`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${pulseColors[pulseColor]}`}
          />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
