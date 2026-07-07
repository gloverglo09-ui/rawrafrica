"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { menu, formatPrice } from "@/lib/menu";
import { useCart } from "@/context/CartContext";
import { site } from "@/lib/site";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menu[0].id);
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const category = menu.find((c) => c.id === activeCategory)!;

  const handleAdd = (itemId: string) => {
    const item = category.items.find((i) => i.id === itemId);
    if (!item) return;
    addItem(item);
    setJustAdded(itemId);
    setTimeout(() => setJustAdded((cur) => (cur === itemId ? null : cur)), 900);
  };

  return (
    <section id="menu" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C1622A]">Menu</p>
          <h2
            className="mt-2 text-3xl text-[#3C2415] sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Menu highlights
          </h2>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {menu.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-[#3C2415] transition"
            >
              {activeCategory === c.id && (
                <motion.span
                  layoutId="menu-tab"
                  className="absolute inset-0 rounded-full bg-[#FBF3E6] ring-1 ring-[#3C2415]/10"
                  transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                />
              )}
              <span className="relative">{c.name}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {category.items.map((item) => (
              <div
                key={item.id}
                className="group flex items-start justify-between gap-4 rounded-2xl border border-[#3C2415]/10 p-5 transition hover:border-[#C1622A]/40 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-[#3C2415]">{item.name}</h3>
                    {item.popular && (
                      <span className="rounded-full bg-[#C99A3C]/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#a8781f]">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-[#3C2415]/65">{item.description}</p>
                  <p className="mt-2 text-sm font-semibold text-[#C1622A]">{formatPrice(item.price)}</p>
                </div>

                {item.catering ? (
                  <a
                    href={site.phoneHref}
                    className="shrink-0 rounded-full border border-[#3C2415]/20 px-3 py-2 text-xs font-semibold text-[#3C2415] transition hover:border-[#3C2415]/50"
                  >
                    Call
                  </a>
                ) : (
                  <motion.button
                    whileTap={{ scale: 0.92 }}
                    onClick={() => handleAdd(item.id)}
                    className="relative shrink-0 rounded-full bg-[#3C2415] px-3 py-2 text-xs font-semibold text-[#FBF3E6] transition hover:bg-[#2c1a0f]"
                  >
                    {justAdded === item.id ? "Added ✓" : "Add"}
                  </motion.button>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
