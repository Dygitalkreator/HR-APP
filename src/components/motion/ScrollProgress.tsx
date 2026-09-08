import { useEffect, useRef } from "react";
import { onScrollFrame } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/useMotion";

/**
 * Motion Phase 2.3 — Scroll-Progress-Navigation (scroll-linked, Budget-relevant).
 *
 * Dünne Linie am oberen Viewport-Rand. Animiert wird ausschließlich
 * `transform: scaleX()`; kein width/left. Bei prefers-reduced-motion wird
 * nichts registriert und die Linie nicht gerendert (Budget 0).
 */
export function ScrollProgress({ label }: { label?: string }) {
  const barRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    const bar = barRef.current;
    if (!bar || reduced) return;
    return onScrollFrame(() => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      bar.style.transform = `scaleX(${p.toFixed(4)})`;
    }, false);
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      aria-hidden="true"
      data-scroll-progress
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px bg-line-mid/40"
      data-label={label}
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-alpine"
        style={{ transform: "scaleX(0)", willChange: "transform" }}
      />
    </div>
  );
}
