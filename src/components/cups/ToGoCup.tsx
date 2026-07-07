"use client";

import { motion } from "motion/react";
import { Steam } from "./Steam";

export function ToGoCup({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 260"
      className={className}
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      whileHover={{ rotate: 2, scale: 1.03 }}
    >
      <motion.g
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <Steam x={[-10, 10]} className="translate-x-[100px] translate-y-[6px]" />

        {/* lid */}
        <path d="M46 40h108l-6 20H52Z" fill="#3C2415" />
        <rect x="40" y="34" width="120" height="12" rx="6" fill="#3C2415" />
        <ellipse cx="100" cy="40" rx="10" ry="3" fill="#FBF3E6" opacity="0.6" />

        {/* cup body */}
        <path
          d="M52 60h96l-14 168a10 10 0 0 1-10 9H76a10 10 0 0 1-10-9Z"
          fill="#FBF3E6"
          stroke="#3C2415"
          strokeWidth="3"
        />

        {/* sleeve */}
        <path d="M44 130h112l-6 46H50Z" fill="#C1622A" stroke="#3C2415" strokeWidth="2.5" />
        <path
          d="M44 130h112"
          stroke="#3C2415"
          strokeWidth="2.5"
        />
        <path
          d="M50 176h100"
          stroke="#3C2415"
          strokeWidth="2.5"
        />

        {/* sleeve logo */}
        <g transform="translate(66 136) scale(0.62)">
          <circle cx="60" cy="60" r="52" fill="#FBF3E6" stroke="#3C2415" strokeWidth="3" />
          <text
            x="60"
            y="74"
            textAnchor="middle"
            fontSize="40"
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
