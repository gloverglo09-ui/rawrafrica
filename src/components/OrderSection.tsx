"use client";

import { motion } from "motion/react";
import { useCart } from "@/context/CartContext";
import { site } from "@/lib/site";

export function OrderSection() {
  const { openCart, count } = useCart();

  return (
    <section id="order" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C1622A]">Order</p>
          <h2
            className="mt-2 text-3xl text-[#3C2415] sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            However you like it
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <motion.button
            whileHover={{ y: -4 }}
            onClick={openCart}
            className="rounded-2xl border-2 border-[#3C2415] bg-[#FBF3E6] p-6 text-left transition"
          >
            <p className="text-2xl">🛍️</p>
            <h3 className="mt-3 font-semibold text-[#3C2415]">Pickup — order here</h3>
            <p className="mt-1 text-sm text-[#3C2415]/65">
              Build your order from the menu and we&apos;ll get it ready for pickup.
              {count > 0 && ` (${count} in cart)`}
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-[#C1622A]">
              Open cart →
            </span>
          </motion.button>

          <motion.a
            whileHover={{ y: -4 }}
            href={site.uberEatsHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-[#3C2415]/10 p-6 transition hover:border-[#3C2415]/30"
          >
            <p className="text-2xl">🚗</p>
            <h3 className="mt-3 font-semibold text-[#3C2415]">Delivery via Uber Eats</h3>
            <p className="mt-1 text-sm text-[#3C2415]/65">
              Order delivery straight from Uber Eats.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-[#C1622A]">
              Open Uber Eats →
            </span>
          </motion.a>

          <motion.a
            whileHover={{ y: -4 }}
            href={site.doorDashHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-[#3C2415]/10 p-6 transition hover:border-[#3C2415]/30"
          >
            <p className="text-2xl">🛵</p>
            <h3 className="mt-3 font-semibold text-[#3C2415]">Delivery via DoorDash</h3>
            <p className="mt-1 text-sm text-[#3C2415]/65">
              Order delivery straight from DoorDash.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-[#C1622A]">
              Open DoorDash →
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
