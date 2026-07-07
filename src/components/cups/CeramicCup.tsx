"use client";

import { motion } from "motion/react";
import { Steam } from "./Steam";

export function CeramicCup({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 240 220"
      className={className}
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: -2, scale: 1.03 }}
    >
      <motion.g
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Steam x={[-18, 0, 18]} className="translate-x-[120px] translate-y-[30px]" />

        {/* saucer */}
        <ellipse cx="120" cy="188" rx="88" ry="12" fill="#3C2415" opacity="0.12" />
        <ellipse cx="120" cy="184" rx="80" ry="10" fill="#FBF3E6" stroke="#3C2415" strokeWidth="2" />

        {/* handle */}
        <path
          d="M188 100c26 0 26 46 0 46"
          fill="none"
          stroke="#3C2415"
          strokeWidth="9"
          strokeLinecap="round"
        />

        {/* cup body */}
        <path
          d="M52 92h136l-10 74a18 18 0 0 1-18 16H80a18 18 0 0 1-18-16Z"
          fill="#FBF3E6"
          stroke="#3C2415"
          strokeWidth="3"
        />
        {/* coffee surface */}
        <ellipse cx="120" cy="94" rx="68" ry="10" fill="#6B4226" />
        <ellipse cx="120" cy="92" rx="68" ry="9" fill="#3C2415" stroke="#3C2415" strokeWidth="3" />

        {/* logo decal */}
        <g transform="translate(84 118) scale(0.62)">
          <circle cx="60" cy="60" r="58" fill="#FBF3E6" stroke="#3C2415" strokeWidth="3" />
          <text
            x="60"
            y="76"
            textAnchor="middle"
            fontSize="46"
            fontFamily="var(--font-display)"
            fontWeight="600"
            fill="#C1622A"
          >
            C
          </text>
        </g>
      </motion.g>
    </motion.svg>
  );
}
