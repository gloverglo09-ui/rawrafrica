"use client";

import { motion } from "motion/react";

const paths = [
  "M0,40 C6,30 -6,20 0,10 C6,0 -6,-10 0,-20",
  "M0,40 C6,30 -6,20 0,10 C6,0 -6,-10 0,-20",
  "M0,40 C6,30 -6,20 0,10 C6,0 -6,-10 0,-20",
];

export function Steam({ x = [-14, 0, 14], className }: { x?: number[]; className?: string }) {
  return (
    <g className={className}>
      {x.map((offset, i) => (
        <motion.path
          key={i}
          d={paths[i % paths.length]}
          transform={`translate(${offset}, 0)`}
          fill="none"
          stroke="#3C2415"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ opacity: 0, pathLength: 0.6, y: 8 }}
          animate={{ opacity: [0, 0.45, 0], y: [8, -18, -30] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.55,
          }}
        />
      ))}
    </g>
  );
}
