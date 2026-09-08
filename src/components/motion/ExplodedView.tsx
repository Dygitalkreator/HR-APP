import { useEffect, useRef, useState } from "react";
import { lerp, onScrollFrame, progress } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/useMotion";

/**
 * Motion Phase 3.4 — Scroll-getriggerte Exploded-View (scroll-linked, Budget-relevant).
 *
 * WICHTIGE EINORDNUNG: Es existieren KEINE in Bauteile zerlegten Produkt-Assets.
 * Statt echte Fotos zu zerschneiden, arbeitet diese Sektion mit einer rein
 * geometrischen Linien-Illustration im Stil des Blueprint-Overlays (Phase 3.1):
 * Deckel (Ellipse + Zylinderring), Korpus (Zylinder mit Achsen) und
 * Wirkstoff-Kern (konzentrische Ringe).
 *
 * Ablauf: 0 → 0.55 fahren die Bauteile auseinander, 0.55 → 1 setzen sie sich
 * am Ende der Sektion wieder exakt zusammen.
 *
 * Regeln:
 * - Scrollwert nur in requestAnimationFrame (onScrollFrame).
 * - IntersectionObserver-Gate: kein Listener außerhalb des Viewports.
 * - animiert werden ausschließlich transform + opacity.
 * - prefers-reduced-motion: kein Listener, statischer Endzustand
 *   (Bauteile leicht getrennt und alle Call-outs sichtbar).
 */

export type ExplodedPart = { id: string; label: string; value: string };

export function ExplodedView({
  parts,
  title,
  className = "",
}: {
  /** genau 3 Bauteile: Deckel, Korpus, Kern */
  parts: [ExplodedPart, ExplodedPart, ExplodedPart];
  title?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      setP(0.42);
      return;
    }

    let detach: (() => void) | null = null;
    const start = () => {
      if (detach) return;
      detach = onScrollFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const raw = progress(rect.top, vh * 0.75, -rect.height + vh * 0.4);
        setP((prev) => (Math.abs(prev - raw) > 0.005 ? raw : prev));
      }, false);
    };
    const stop = () => {
      detach?.();
      detach = null;
    };

    const io = new IntersectionObserver(([entry]) => (entry?.isIntersecting ? start() : stop()), {
      rootMargin: "10% 0px",
    });
    io.observe(el);
    return () => {
      io.disconnect();
      stop();
    };
  }, [reduced]);

  // Dreieckskurve: auseinander bis 0.55, danach wieder zusammen.
  const spread = p <= 0.55 ? p / 0.55 : 1 - (p - 0.55) / 0.45;
  const e = Math.min(1, Math.max(0, spread));
  const dur = reduced ? "0ms" : "90ms";

  const capY = -lerp(0, 120, e);
  const coreY = lerp(0, 116, e);
  const bodyY = lerp(0, -6, e);

  const layer = (y: number): React.CSSProperties => ({
    transform: `translate3d(0, ${y.toFixed(2)}px, 0)`,
    transition: `transform ${dur} linear`,
    willChange: reduced ? undefined : "transform",
  });

  return (
    <div ref={ref} className={`relative ${className}`} data-exploded data-progress={e.toFixed(2)}>
      {title && (
        <span className="pointer-events-none absolute left-0 top-0 font-mono text-[9px] uppercase tracking-[0.24em] text-alpine md:text-[10px]">
          ◆ {title}
        </span>
      )}

      <div className="relative mx-auto aspect-[3/4] w-full max-w-[420px]">
        {/* Referenz-Achse */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" className="text-line-mid" strokeWidth="0.2" strokeDasharray="1.5 2.5" />
        </svg>

        {/* Deckel */}
        <div className="absolute inset-0" style={layer(capY)} aria-hidden="true">
          <svg viewBox="0 0 200 260" className="h-full w-full" fill="none">
            <g stroke="currentColor" className="text-ice" strokeWidth="1.1">
              <ellipse cx="100" cy="86" rx="46" ry="13" />
              <path d="M54 86v16c0 7 20.6 13 46 13s46-6 46-13V86" />
              <ellipse cx="100" cy="86" rx="30" ry="8" className="text-alpine" strokeWidth="0.8" />
            </g>
          </svg>
        </div>

        {/* Korpus */}
        <div className="absolute inset-0" style={layer(bodyY)} aria-hidden="true">
          <svg viewBox="0 0 200 260" className="h-full w-full" fill="none">
            <g stroke="currentColor" className="text-silver" strokeWidth="1.1">
              <ellipse cx="100" cy="118" rx="46" ry="13" />
              <path d="M54 118v52c0 8 20.6 14 46 14s46-6 46-14v-52" />
              <ellipse cx="100" cy="170" rx="46" ry="13" strokeDasharray="3 3" className="text-line-mid" strokeWidth="0.8" />
            </g>
          </svg>
        </div>

        {/* Wirkstoff-Kern */}
        <div className="absolute inset-0" style={layer(coreY)} aria-hidden="true">
          <svg viewBox="0 0 200 260" className="h-full w-full" fill="none">
            <g stroke="currentColor" className="text-alpine" strokeWidth="0.9">
              <circle cx="100" cy="146" r="26" />
              <circle cx="100" cy="146" r="17" strokeDasharray="2 2.5" />
              <circle cx="100" cy="146" r="7" className="text-heritage" strokeWidth="1.4" />
            </g>
          </svg>
        </div>
      </div>

      {/* Bauteil-Call-outs, erscheinen mit dem Auseinanderfahren */}
      <ul className="mt-10 grid gap-px bg-line-mid sm:grid-cols-3">
        {parts.map((part, i) => {
          const local = reduced ? 1 : Math.min(1, Math.max(0, (e - i * 0.12) / 0.4));
          return (
            <li
              key={part.id}
              className="bg-void p-5"
              style={{
                opacity: reduced ? 1 : 0.25 + local * 0.75,
                transform: `translate3d(0, ${(1 - local) * 10}px, 0)`,
                transition: `opacity ${dur} linear, transform ${dur} linear`,
              }}
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-alpine">
                {String(i + 1).padStart(2, "0")} · {part.label}
              </p>
              <p className="mt-2 font-mono text-[11px] leading-relaxed text-silver">{part.value}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
