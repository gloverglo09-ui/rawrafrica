import { LogoBadge } from "@/components/Logo";
import { site } from "@/lib/site";

export function LocationFooter() {
  return (
    <footer id="location" className="bg-[#3C2415] py-14 text-[#FBF3E6]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <LogoBadge className="h-16 w-16" id="footer" />
          <p className="mt-4 max-w-xs text-sm text-[#FBF3E6]/70">{site.tagline}</p>
        </div>

        <div className="text-sm">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#C99A3C]">
            Visit
          </h3>
          <a
            href={site.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="block text-[#FBF3E6]/85 transition hover:text-white"
          >
            {site.address}
          </a>
          <a href={site.phoneHref} className="mt-2 block text-[#FBF3E6]/85 transition hover:text-white">
            {site.phone}
          </a>
          <a
            href={site.website}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-[#FBF3E6]/85 transition hover:text-white"
          >
            carmelacoffee.com
          </a>
        </div>

        <div className="text-sm">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#C99A3C]">
            Hours
          </h3>
          <ul className="space-y-1.5 text-[#FBF3E6]/85">
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-6">
                <span>{h.days}</span>
                <span>{h.hours}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={site.uberEatsHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#FBF3E6]/25 px-3 py-1.5 text-xs font-semibold transition hover:border-[#FBF3E6]/60"
            >
              Uber Eats
            </a>
            <a
              href={site.doorDashHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#FBF3E6]/25 px-3 py-1.5 text-xs font-semibold transition hover:border-[#FBF3E6]/60"
            >
              DoorDash
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-5 text-xs text-[#FBF3E6]/40 sm:px-8">
        © {new Date().getFullYear()} Carmela Coffee — Parkland. All rights reserved.
      </div>
    </footer>
  );
}
