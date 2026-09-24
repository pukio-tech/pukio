import React from "react";

interface WaveDividerProps {
  className?: string;
  flip?: boolean;
}

export function WaveDivider({ className = "", flip = false }: WaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden select-none pointer-events-none py-4 ${className} ${
        flip ? "transform rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-16 text-cyan-500/20"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="pukioWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
            <stop offset="25%" stopColor="#06B6D4" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="1" />
            <stop offset="75%" stopColor="#14B8A6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>

          <filter id="pukioGlow" x="-10%" y="-50%" width="120%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient background glow path */}
        <path
          d="M0 32C180 50 360 14 540 32C720 50 900 14 1080 32C1260 50 1380 20 1440 32"
          stroke="url(#pukioWaveGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#pukioGlow)"
          opacity="0.6"
        />

        {/* Crisp foreground wave */}
        <path
          d="M0 32C180 50 360 14 540 32C720 50 900 14 1080 32C1260 50 1380 20 1440 32"
          stroke="url(#pukioWaveGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Secondary out-of-phase harmonic ripple */}
        <path
          d="M0 22C160 8 320 44 480 22C640 4 800 40 960 22C1120 4 1280 38 1440 22"
          stroke="#06B6D4"
          strokeWidth="1"
          strokeDasharray="4 8"
          strokeOpacity="0.3"
        />
      </svg>
    </div>
  );
}
