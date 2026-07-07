# Carmela Coffee — Parkland

Marketing + ordering site for Carmela Coffee's Parkland location. Built with Next.js, Tailwind CSS, and [motion](https://motion.dev) for animation.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What's here

- `src/components/cups/` — animated ceramic mug and to-go cup illustrations with the Carmela logo
- `src/components/MenuSection.tsx` — tabbed menu with click-to-add ordering
- `src/components/CartDrawer.tsx` + `src/lib/order.ts` — cart and checkout flow. Submitting builds a pre-filled `mailto:` to `site.orderEmail` (see `src/lib/site.ts`) so the order lands in the café's inbox without any backend.
- Uber Eats / DoorDash links live in `src/lib/site.ts` — update there if the store listings change.

## Notes for going live

- Menu prices in `src/lib/menu.ts` are estimates — replace with real pricing.
- `site.orderEmail` in `src/lib/site.ts` is a placeholder — set it to the café's real inbox.
- For fully automatic order emails (no mail client popup), swap the `mailto:` flow in `src/lib/order.ts` for a server action or API route backed by a provider like Resend.
