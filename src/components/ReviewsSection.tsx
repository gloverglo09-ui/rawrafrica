"use client";

import { motion } from "motion/react";
import { reviews, site } from "@/lib/site";

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[#FBF3E6] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C1622A]">Reviews</p>
          <h2
            className="mt-2 text-3xl text-[#3C2415] sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {site.rating} stars from {site.reviewCount.toLocaleString()} guests
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <p className="text-sm leading-relaxed text-[#3C2415]/80">&ldquo;{r.quote}&rdquo;</p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#C1622A]">
                {r.context}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
