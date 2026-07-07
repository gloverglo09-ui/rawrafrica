export function LogoBadge({ className, id }: { className?: string; id?: string }) {
  const uid = id ?? "badge";
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Carmela Coffee monogram">
      <defs>
        <path id={`arc-${uid}`} d="M 14,60 A 46,46 0 1 1 106,60" fill="none" />
      </defs>
      <circle cx="60" cy="60" r="58" fill="#FBF3E6" stroke="#3C2415" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="#C1622A" strokeWidth="1.5" strokeDasharray="2 4" />
      <text fontSize="11" fontWeight="600" letterSpacing="3" fill="#3C2415">
        <textPath href={`#arc-${uid}`} startOffset="50%" textAnchor="middle">
          CARMELA COFFEE
        </textPath>
      </text>
      <text
        x="60"
        y="76"
        textAnchor="middle"
        fontSize="42"
        fontFamily="var(--font-display)"
        fontWeight="600"
        fill="#C1622A"
      >
        C
      </text>
      <path
        d="M60 84c-6 4-6 10 0 13 6-3 6-9 0-13Z"
        fill="#7C8A5B"
        transform="translate(0 -2)"
      />
      <text x="60" y="98" textAnchor="middle" fontSize="7" letterSpacing="2" fill="#3C2415" opacity="0.75">
        PARKLAND
      </text>
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-2 ${className ?? ""}`}>
      <span
        className="text-2xl sm:text-3xl leading-none"
        style={{ fontFamily: "var(--font-display)", color: "#3C2415" }}
      >
        Carmela
      </span>
      <span
        className="text-[10px] sm:text-xs tracking-[0.3em] font-semibold uppercase self-center"
        style={{ color: "#C1622A" }}
      >
        Coffee
      </span>
    </span>
  );
}
