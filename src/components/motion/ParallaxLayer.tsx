import { useEffect, useRef, type ReactNode } from "react";
import { onScrollFrame } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/useMotion";

/**
 * Motion Phase 2.1 — Parallax-Bildebene (scroll-linked, Budget-relevant).
 *
 * Bewegt den Inhalt beim Scrollen langsamer/schneller als den Dokumentfluss.
 * - Nur transform (translate3d), nie Layout-Properties.
 * - Rechnet ausschließlich in requestAnimationFrame (onScrollFrame).
 * - IntersectionObserver-Gate: außerhalb des Viewports wird der
 *   Scroll-Listener abgemeldet, damit das Motion-Budget pro Viewport
 *   eingehalten wird.
 * - Bei prefers-reduced-motion: kein Listener, Endzustand (0px).
 */
export function ParallaxLayer({
  children,
  /** negativ = langsamer als Scroll (Hintergrund), positiv = schneller (Vordergrund) */
  speed = -0.12,
  /** maximale Auslenkung in px, verhindert Bildkanten */
  max = 80,
  className,
}: {
  children: ReactNode;
  speed?: number;
  max?: number;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || reduced) return;

    let detach: (() => void) | null = null;

    const start = () => {
      if (detach) return;
      detach = onScrollFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        // -1 … 1, 0 = Element-Mitte in Viewport-Mitte
        const rel = (rect.top + rect.height / 2 - vh / 2) / vh;
        const offset = Math.max(-max, Math.min(max, rel * vh * speed));
        el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      }, false);
    };

    const stop = () => {
      detach?.();
      detach = null;
      el.style.transform = "translate3d(0, 0, 0)";
    };

    const io = new IntersectionObserver(
      ([entry]) => (entry?.isIntersecting ? start() : stop()),
      { rootMargin: "10% 0px" },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      stop();
    };
  }, [reduced, speed, max]);

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ willChange: reduced ? undefined : "transform", transform: "translate3d(0,0,0)" }}
    >
      {children}
    </div>
  );
}
