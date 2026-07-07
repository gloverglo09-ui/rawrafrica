"use client";

import { motion } from "motion/react";
import { CeramicCup } from "@/components/cups/CeramicCup";
import { ToGoCup } from "@/components/cups/ToGoCup";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#FBF3E6]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-2 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#3C2415]/15 bg-white/50 px-3 py-1 text-xs font-semibold text-[#3C2415]">
            <span className="text-[#C99A3C]">★★★★★</span>
            {site.rating} · {site.reviewCount.toLocaleString()} reviews
          </div>
          <h1
            className="text-4xl leading-[1.05] text-[#3C2415] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Farm-to-cup coffee, made for slowing down.
          </h1>
          <p className="mt-5 max-w-md text-base text-[#3C2415]/75 sm:text-lg">
            {site.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#order"
              className="rounded-full bg-[#3C2415] px-6 py-3 text-sm font-semibold text-[#FBF3E6] shadow-sm transition hover:bg-[#2c1a0f]"
            >
              Order for Pickup
            </a>
            <a
              href={site.uberEatsHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#3C2415]/20 px-6 py-3 text-sm font-semibold text-[#3C2415] transition hover:border-[#3C2415]/50"
            >
              Uber Eats
            </a>
            <a
              href={site.doorDashHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#3C2415]/20 px-6 py-3 text-sm font-semibold text-[#3C2415] transition hover:border-[#3C2415]/50"
            >
              DoorDash
            </a>
          </div>
        </motion.div>

        <div className="relative flex items-end justify-center gap-4 sm:gap-8">
          <CeramicCup className="w-[46%] max-w-[220px] drop-shadow-xl" />
          <ToGoCup className="w-[36%] max-w-[170px] drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
}
