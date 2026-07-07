import { site } from "@/lib/site";
import { formatPrice } from "@/lib/menu";
import type { MenuItem } from "@/lib/menu";

type CartLine = { item: MenuItem; qty: number };

export type CustomerDetails = {
  name: string;
  phone: string;
  pickupTime: string;
  notes: string;
};

export function buildOrderMailto(lines: CartLine[], customer: CustomerDetails, subtotal: number) {
  const itemLines = lines
    .map((l) => `  ${l.qty} x ${l.item.name} — ${formatPrice(l.item.price)}`)
    .join("\n");

  const body = [
    `New pickup order from the Carmela Coffee website`,
    ``,
    `Name: ${customer.name}`,
    `Phone: ${customer.phone}`,
    `Requested pickup time: ${customer.pickupTime || "ASAP"}`,
    ``,
    `Order:`,
    itemLines,
    ``,
    `Estimated subtotal: ${formatPrice(subtotal)}`,
    customer.notes ? `\nNotes: ${customer.notes}` : "",
  ].join("\n");

  const subject = `New order — ${customer.name || "Website order"}`;

  return `mailto:${site.orderEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body
  )}`;
}
