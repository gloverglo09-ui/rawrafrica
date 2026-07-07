"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Wordmark } from "@/components/Logo";
import { site } from "@/lib/site";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#order", label: "Order" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#FBF3E6]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="shrink-0">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#3C2415]/80 transition hover:text-[#C1622A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.uberEatsHref}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-[#3C2415]/15 px-3 py-1.5 text-xs font-semibold text-[#3C2415] transition hover:border-[#3C2415]/40 sm:inline-block"
          >
            Uber Eats
          </a>
          <a
            href={site.doorDashHref}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-[#3C2415]/15 px-3 py-1.5 text-xs font-semibold text-[#3C2415] transition hover:border-[#3C2415]/40 sm:inline-block"
          >
            DoorDash
          </a>

          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={openCart}
            className="relative inline-flex items-center gap-2 rounded-full bg-[#3C2415] px-4 py-2 text-xs font-semibold text-[#FBF3E6] shadow-sm transition hover:bg-[#2c1a0f]"
          >
            Order Pickup
            {count > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C1622A] text-[10px]">
                {count}
              </span>
            )}
          </motion.button>

          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#3C2415]/15 md:hidden"
          >
            <span className="text-lg leading-none">{mobileOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/5 px-5 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-[#3C2415]"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 pt-1">
              <a
                href={site.uberEatsHref}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full border border-[#3C2415]/15 px-3 py-1.5 text-center text-xs font-semibold text-[#3C2415]"
              >
                Uber Eats
              </a>
              <a
                href={site.doorDashHref}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full border border-[#3C2415]/15 px-3 py-1.5 text-center text-xs font-semibold text-[#3C2415]"
              >
                DoorDash
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
