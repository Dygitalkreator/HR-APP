import { useCallback, useEffect, useRef, useState } from "react";
import { DURATION, EASE, usePrefersReducedMotion } from "@/lib/motion";

/**
 * Magnetischer CTA-Effekt: der Button folgt dem Cursor um maximal
 * MAX_OFFSET px und federt beim Verlassen sanft zurück.
 * Nur Desktop (pointer: fine), deaktiviert bei prefers-reduced-motion.
 * Animiert ausschließlich transform (translate3d).
 */
const MAX_OFFSET = 7;

export function useMagnetic<T extends HTMLElement = HTMLElement>(strength = 0.35) {
  const reduced = usePrefersReducedMotion();
  const [finePointer, setFinePointer] = useState(false);
  const ref = useRef<T | null>(null);
  const frame = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(pointer: fine)");
    setFinePointer(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setFinePointer(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const active = finePointer && !reduced;

  useEffect(() => () => { if (frame.current) cancelAnimationFrame(frame.current); }, []);

  const apply = useCallback((x: number, y: number, snapBack: boolean) => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = snapBack
      ? `transform ${DURATION.medium}ms ${EASE.editorial}`
      : `transform ${DURATION.fast}ms ${EASE.ui}`;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }, []);

  const onPointerMove = useCallback(
    (event: React.PointerEvent<T>) => {
      if (!active) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const x = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, dx * strength));
      const y = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, dy * strength));
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        apply(x, y, false);
      });
    },
    [active, apply, strength],
  );

  const onPointerLeave = useCallback(() => {
    if (!active) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    apply(0, 0, true);
  }, [active, apply]);

  return active
    ? { ref, onPointerMove, onPointerLeave, style: { willChange: "transform" as const } }
    : { ref };
}
