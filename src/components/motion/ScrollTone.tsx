import { useEffect, useRef } from "react";
import { onScrollFrame } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/useMotion";

/**
 * Motion Phase 2.4 — Scroll-gekoppelter Farbton-Shift (scroll-linked, Budget-relevant).
 *
 * Legt zwei fixierte, sehr schwache Farbschleier (Titanium, Alpine) über die
 * Seite und blendet sie abhängig vom Scroll-Fortschritt weich ineinander.
 * Animiert wird ausschließlich `opacity` — keine Hintergrundfarbe, kein
 * background-position. Bei prefers-reduced-motion wird nichts gerendert.
 *
 * Stops (Übergangspunkte, 0…1 des Dokuments):
 *   0.00  Void        (Hero)
 *   0.30  Titanium    (Cosmetics / Fabrics)
 *   0.60  Alpine      (Signature / Accessories)
 *   1.00  Void        (Journal / Club)
 */
export function ScrollTone({
  titaniumMax = 0.5,
  alpineMax = 0.32,
}: {
  titaniumMax?: number;
  alpineMax?: number;
}) {
  const titaniumRef = useRef<HTMLDivElement>(null);
  const alpineRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const a = titaniumRef.current;
    const b = alpineRef.current;
    if (!a || !b || reduced) return;

    // dreieckige Rampen -> weiche Übergänge ohne harte Sprünge
    const ramp = (p: number, start: number, peak: number, end: number) => {
      if (p <= start || p >= end) return 0;
      return p < peak ? (p - start) / (peak - start) : 1 - (p - peak) / (end - peak);
    };

    return onScrollFrame(() => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      a.style.opacity = (ramp(p, 0, 0.3, 0.68) * titaniumMax).toFixed(3);
      b.style.opacity = (ramp(p, 0.34, 0.6, 1.001) * alpineMax).toFixed(3);
    }, false);
  }, [reduced, titaniumMax, alpineMax]);

  if (reduced) return null;

  return (
    <div aria-hidden="true" data-scroll-tone className="pointer-events-none fixed inset-0 z-0">
      <div
        ref={titaniumRef}
        className="absolute inset-0"
        style={{
          opacity: 0,
          willChange: "opacity",
          backgroundImage:
            "linear-gradient(to bottom, color-mix(in oklab, var(--zl-titanium) 70%, transparent) 0%, transparent 70%)",
        }}
      />
      <div
        ref={alpineRef}
        className="absolute inset-0"
        style={{
          opacity: 0,
          willChange: "opacity",
          backgroundImage:
            "radial-gradient(120% 80% at 50% 100%, color-mix(in oklab, var(--zl-alpine) 12%, transparent) 0%, transparent 68%)",
        }}
      />
    </div>
  );
}
