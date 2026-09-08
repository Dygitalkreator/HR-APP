import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/motion";

/**
 * Cursor-reaktives Umgebungslicht: sehr subtiler radialer Glow in der
 * Alpine-Akzentfarbe folgt dem Cursor über Hero-Flächen.
 * Nur Desktop (pointer: fine), aus bei prefers-reduced-motion.
 * Der Glow ist ein absolut positioniertes Overlay; bewegt wird
 * ausschließlich per translate3d (kein background-position, kein Layout).
 */
export function CursorGlow({ className = "", children }: { className?: string; children?: ReactNode }) {
  const reduced = usePrefersReducedMotion();
  const [fine, setFine] = useState(false);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const frame = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(pointer: fine)");
    setFine(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setFine(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const active = fine && !reduced;

  useEffect(() => {
    if (!active) return;
    const host = hostRef.current;
    if (!host) return;
    const onMove = (event: PointerEvent) => {
      const glow = glowRef.current;
      if (!glow) return;
      const rect = host.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        glow.style.opacity = "0.08";
      });
    };
    const onLeave = () => {
      const glow = glowRef.current;
      if (glow) glow.style.opacity = "0";
    };
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [active]);

  return (
    <div ref={hostRef} aria-hidden={!children} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {active && (
        <div
          ref={glowRef}
          className="absolute -left-[320px] -top-[320px] h-[640px] w-[640px] opacity-0"
          style={{
            background: "radial-gradient(circle, color-mix(in oklab, var(--zl-ice) 60%, transparent) 0%, transparent 68%)",
            opacity: 0,
            transition: "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)",
            mixBlendMode: "screen",
            willChange: "transform, opacity",
          }}
        />
      )}
      {children}
    </div>
  );
}
