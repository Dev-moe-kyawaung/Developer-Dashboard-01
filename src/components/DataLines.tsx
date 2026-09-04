/** Subtle moving data lines — decorative, not a fake chart. */
export default function DataLines({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-[0.35] ${className}`}
      preserveAspectRatio="none"
      viewBox="0 0 400 120"
      aria-hidden
    >
      <path
        className="animate-data-flow"
        d="M0 80 C40 70 60 40 100 55 S160 100 200 70 S280 20 320 50 S360 90 400 60"
        fill="none"
        stroke="rgba(79,140,255,0.55)"
        strokeWidth="1.2"
      />
      <path
        className="animate-data-flow"
        style={{ animationDuration: "18s", animationDirection: "reverse" }}
        d="M0 50 C50 90 90 20 140 45 S220 95 260 55 S330 15 400 40"
        fill="none"
        stroke="rgba(61,220,132,0.4)"
        strokeWidth="1"
      />
    </svg>
  );
}
