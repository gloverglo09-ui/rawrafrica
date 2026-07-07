"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/menu";
import { buildOrderMailto, type CustomerDetails } from "@/lib/order";
import { site } from "@/lib/site";

const emptyCustomer: CustomerDetails = { name: "", phone: "", pickupTime: "", notes: "" };

export function CartDrawer() {
  const { lines, isOpen, closeCart, removeItem, setQty, subtotal, clear } = useCart();
  const [customer, setCustomer] = useState<CustomerDetails>(emptyCustomer);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = lines.length > 0 && customer.name.trim() && customer.phone.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    const href = buildOrderMailto(lines, customer, subtotal);
    window.location.href = href;
    setSubmitted(true);
  };

  const handleClose = () => {
    closeCart();
    if (submitted) {
      clear();
      setCustomer(emptyCustomer);
      setSubmitted(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[#FBF3E6] shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="flex items-center justify-between border-b border-[#3C2415]/10 px-6 py-4">
              <h2 className="text-lg font-semibold text-[#3C2415]" style={{ fontFamily: "var(--font-display)" }}>
                Your order
              </h2>
              <button
                onClick={handleClose}
                aria-label="Close cart"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#3C2415] hover:bg-[#3C2415]/10"
              >
                ×
              </button>
            </div>

            {submitted ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
                <div className="text-4xl">☕</div>
                <h3 className="text-xl font-semibold text-[#3C2415]">Order sent!</h3>
                <p className="text-sm text-[#3C2415]/70">
                  Your email app should have opened with your order addressed to {site.name}. Send it
                  and we&apos;ll start preparing your pickup.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-4 rounded-full bg-[#3C2415] px-5 py-2.5 text-sm font-semibold text-[#FBF3E6]"
                >
                  Done
                </button>
              </div>
            ) : lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-2 px-8 text-center text-[#3C2415]/60">
                <div className="text-4xl">🛍️</div>
                <p className="text-sm">Your cart is empty. Add something tasty from the menu.</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <ul className="space-y-4">
                    {lines.map(({ item, qty }) => (
                      <li key={item.id} className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-[#3C2415]">{item.name}</p>
                          <p className="text-xs text-[#3C2415]/60">{formatPrice(item.price)} each</p>
                          <div className="mt-2 flex items-center gap-2">
                            <button
                              onClick={() => setQty(item.id, qty - 1)}
                              className="h-6 w-6 rounded-full border border-[#3C2415]/20 text-xs"
                              aria-label={`Decrease ${item.name} quantity`}
                            >
                              −
                            </button>
                            <span className="w-4 text-center text-sm">{qty}</span>
                            <button
                              onClick={() => setQty(item.id, qty + 1)}
                              className="h-6 w-6 rounded-full border border-[#3C2415]/20 text-xs"
                              aria-label={`Increase ${item.name} quantity`}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-[#3C2415]">
                            {formatPrice((item.price ?? 0) * qty)}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="mt-2 text-xs text-[#C1622A] hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <form onSubmit={handleSubmit} className="border-t border-[#3C2415]/10 px-6 py-4">
                  <div className="mb-3 flex justify-between text-sm font-semibold text-[#3C2415]">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      required
                      placeholder="Your name"
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      className="col-span-2 rounded-lg border border-[#3C2415]/15 bg-white px-3 py-2 text-sm outline-none focus:border-[#C1622A]"
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Phone number"
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      className="col-span-2 rounded-lg border border-[#3C2415]/15 bg-white px-3 py-2 text-sm outline-none focus:border-[#C1622A]"
                    />
                    <input
                      placeholder="Pickup time (e.g. 4:30 PM)"
                      value={customer.pickupTime}
                      onChange={(e) => setCustomer({ ...customer, pickupTime: e.target.value })}
                      className="col-span-2 rounded-lg border border-[#3C2415]/15 bg-white px-3 py-2 text-sm outline-none focus:border-[#C1622A]"
                    />
                    <textarea
                      placeholder="Notes (optional)"
                      value={customer.notes}
                      onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                      rows={2}
                      className="col-span-2 rounded-lg border border-[#3C2415]/15 bg-white px-3 py-2 text-sm outline-none focus:border-[#C1622A]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="mt-4 w-full rounded-full bg-[#3C2415] py-3 text-sm font-semibold text-[#FBF3E6] transition disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Email order to {site.name}
                  </button>
                  <p className="mt-2 text-center text-[10px] text-[#3C2415]/50">
                    Opens your email app with the order pre-filled — hit send to notify the café.
                  </p>
                </form>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
