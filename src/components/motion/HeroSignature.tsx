import { useEffect, useRef, useState } from "react";
import { DURATION, EASE, stagger } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/useMotion";

/**
 * Motion Phase 3.3 — Hero-Signature-Element.
 *
 * Zentrale, linienbasierte Konstellation im Stil der Zone-Map (Phase 3.2):
 * ein technisches Zonen-Diagramm aus Achsen, Ringen und Knotenpunkten, das
 * sich beim Laden EINMALIG aufbaut und danach vollständig in Ruhe verharrt.
 *
 * Regeln:
 * - kein Loop, keine Endlos-Animation, keine Scrollbindung
 *   (damit Budget-neutral gegenüber den 3 scroll-linked Effekten der Seite).
 * - animiert werden ausschließlich opacity und transform (scale / scaleX).
 * - prefers-reduced-motion: sofort Endzustand, kein Aufbau.
 */

/** Knoten der Konstellation in viewBox-Koordinaten (0–100). */
const NODES = [
  { x: 50, y: 50, r: 2.6 },
  { x: 22, y: 30, r: 1.5 },
  { x: 78, y: 26, r: 1.5 },
  { x: 30, y: 74, r: 1.5 },
  { x: 72, y: 70, r: 1.5 },
  { x: 50, y: 14, r: 1.1 },
  { x: 50, y: 88, r: 1.1 },
] as const;

const SPOKES = [
  { x2: 22, y2: 30 },
  { x2: 78, y2: 26 },
  { x2: 30, y2: 74 },
  { x2: 72, y2: 70 },
  { x2: 50, y2: 14 },
  { x2: 50, y2: 88 },
] as const;

export function HeroSignature({ className = "" }: { className?: string }) {
  const reduced = usePrefersReducedMotion();
  const [built, setBuilt] = useState(false);
  const raf = useRef(0);

  useEffect(() => {
    if (reduced) {
      setBuilt(true);
      return;
    }
    // Aufbau nach dem ersten Frame starten, damit die Transition greift.
    raf.current = window.requestAnimationFrame(() => setBuilt(true));
    return () => window.cancelAnimationFrame(raf.current);
  }, [reduced]);

  const on = built || reduced;
  const t = (index: number, duration: number = DURATION.slow) =>
    reduced
      ? { transition: "none" as const }
      : {
          transition: `opacity ${duration}ms ${EASE.editorial} ${stagger(index, 90)}ms, transform ${duration}ms ${EASE.editorial} ${stagger(index, 90)}ms`,
        };

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      data-hero-signature
      data-built={on ? "true" : "false"}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible" fill="none">
        {/* Ringe — bauen sich von innen nach außen auf */}
        {[14, 26, 38].map((r, i) => (
          <circle
            key={r}
            cx="50"
            cy="50"
            r={r}
            className="text-alpine"
            stroke="currentColor"
            strokeWidth="0.18"
            strokeDasharray={i === 1 ? "1.2 2.2" : undefined}
            style={{
              opacity: on ? 0.5 - i * 0.1 : 0,
              transform: on ? "scale(1)" : "scale(0.82)",
              transformOrigin: "50% 50%",
              ...t(i, DURATION.cinematic),
            }}
          />
        ))}

        {/* Speichen — wachsen aus dem Zentrum */}
        {SPOKES.map((s, i) => (
          <line
            key={`${s.x2}-${s.y2}`}
            x1="50"
            y1="50"
            x2={s.x2}
            y2={s.y2}
            className="text-ice"
            stroke="currentColor"
            strokeWidth="0.14"
            style={{
              opacity: on ? 0.4 : 0,
              transform: on ? "scale(1)" : "scale(0.2)",
              transformOrigin: "50% 50%",
              ...t(i + 2),
            }}
          />
        ))}

        {/* Horizontale Referenzachse */}
        <line
          x1="4"
          y1="50"
          x2="96"
          y2="50"
          className="text-alpine"
          stroke="currentColor"
          strokeWidth="0.12"
          strokeDasharray="2 3"
          style={{
            opacity: on ? 0.35 : 0,
            transform: on ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "50% 50%",
            ...t(1, DURATION.cinematic),
          }}
        />

        {/* Knotenpunkte */}
        {NODES.map((n, i) => (
          <circle
            key={`${n.x}-${n.y}`}
            cx={n.x}
            cy={n.y}
            r={n.r}
            className={i === 0 ? "text-heritage" : "text-ice"}
            fill="currentColor"
            style={{
              opacity: on ? (i === 0 ? 0.9 : 0.55) : 0,
              transform: on ? "scale(1)" : "scale(0)",
              transformOrigin: `${n.x}% ${n.y}%`,
              ...t(i + 4, DURATION.medium),
            }}
          />
        ))}
      </svg>
    </div>
  );
}
