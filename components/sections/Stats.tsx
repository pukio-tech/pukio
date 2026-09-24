import React from "react";
import { siteConfig } from "@/data/siteConfig";

export function Stats() {
  return (
    <section className="relative py-12 bg-slate-50/80 dark:bg-[#0B132B]/60 border-y border-slate-200 dark:border-slate-800/80 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800/80">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center md:items-start text-center md:text-left ${
                idx > 0 ? "pt-6 md:pt-0 md:pl-6" : ""
              }`}
            >
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-cyan-800 to-cyan-600 dark:from-white dark:via-cyan-200 dark:to-cyan-400 font-mono tracking-tight">
                  {stat.value}
                </span>
              </div>
              <span className="text-sm font-semibold text-slate-800 dark:text-white tracking-normal">
                {stat.label}
              </span>
              <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400/80 mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
