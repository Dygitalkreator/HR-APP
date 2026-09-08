import { useEffect, useRef, useState } from "react";
import { onScrollFrame, progress } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/useMotion";
import type { BlueprintCallout } from "@/lib/blueprint";

/**
 * Motion Phase 3.1 — Blueprint-Overlay-Reveal (scroll-linked, Budget-relevant).
 *
 * Legt eine technische Ingenieurs-Zeichnung (dünne Alpine/weiße Linien) über
 * das Hauptproduktfoto. Annotations-Linien zeigen auf Material-Call-outs, die
 * dynamisch aus den Produktdaten kommen (siehe src/lib/blueprint.ts).
 *
 * Regeln:
 * - Nur transform + opacity werden animiert (Linien via scaleX, Punkte via scale).
 * - Scrollwert ausschließlich in requestAnimationFrame (onScrollFrame).
 * - IntersectionObserver-Gate: außerhalb des Viewports kein Listener.
 * - prefers-reduced-motion: kein Listener, statischer Endzustand (p = 1).
 *
 * Motion-Budget: ersetzt auf Produktdetailseiten die Hero-Parallax-Ebene,
 * damit weiterhin maximal 3 scroll-linked Effekte pro Seite laufen.
 */

type Anchor = { x: number; y: number; side: "left" | "right" };

/** Feste Ankerpunkte in % — technische, nicht zufällige Anordnung. */
const ANCHORS: Anchor[] = [
  { x: 30, y: 20, side: "left" },
  { x: 56, y: 38, side: "right" },
  { x: 34, y: 62, side: "left" },
  { x: 54, y: 82, side: "right" },
];

export function BlueprintOverlay({
  src,
  alt,
  callouts,
  title,
  className,
  imgClassName,
  eager = false,
  vtName,
  staticOnly = false,
}: {
  src: string;
  alt: string;
  callouts: BlueprintCallout[];
  /** kleine Kopfzeile der Zeichnung, z. B. "Konstruktionszeichnung" */
  title?: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  /** Phase 3.6 — view-transition-name des Hero-Bildes. */
  vtName?: string;
  /** Phase 3.4-Budget: Zeichnung ohne Scrollbindung, direkt im Endzustand. */
  staticOnly?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (reduced || staticOnly) {
      setP(1);
      return;
    }

    let detach: (() => void) | null = null;

    const start = () => {
      if (detach) return;
      detach = onScrollFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        // 0 = Sektion betritt Viewport von unten, 1 = Sektion gut sichtbar
        const raw = progress(rect.top, vh * 0.9, vh * 0.15);
        setP((prev) => (Math.abs(prev - raw) > 0.01 ? raw : prev));
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
  }, [reduced, staticOnly]);

  // Phase 3.6 — Shared-Element-Name erst nach dem Mount (Hydration-Sicherheit).
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    el.style.viewTransitionName = vtName ?? "";
  }, [vtName]);

  const items = callouts.slice(0, ANCHORS.length);
  const still = reduced || staticOnly;
  const dur = still ? "0ms" : "500ms";

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className ?? ""}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={imgClassName ?? "absolute inset-0 h-full w-full object-cover"}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        {...(eager ? { fetchPriority: "high" as const } : {})}
      />

      {/* Raster / Achsen der Zeichnung */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ opacity: p * 0.5, transition: `opacity ${dur} linear` }}
      >
        <g stroke="currentColor" className="text-alpine" strokeWidth="0.12" fill="none">
          <line x1="10" y1="0" x2="10" y2="100" />
          <line x1="90" y1="0" x2="90" y2="100" />
          <line x1="0" y1="50" x2="100" y2="50" />
          <line x1="50" y1="0" x2="50" y2="100" strokeDasharray="1.5 2" />
          <rect x="10" y="8" width="80" height="84" strokeDasharray="2 2.5" />
        </g>
      </svg>

      {/* Kopfzeile der Zeichnung */}
      {title && (
        <span
          className="pointer-events-none absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[0.24em] text-alpine md:left-6 md:top-6 md:text-[10px]"
          style={{ opacity: p, transition: `opacity ${dur} linear` }}
        >
          ◆ {title}
        </span>
      )}

      {/* Annotations-Call-outs */}
      {items.map((c, i) => {
        const a = ANCHORS[i]!;
        const local = still ? 1 : Math.min(1, Math.max(0, (p - i * 0.1) / 0.45));
        const right = a.side === "right";
        return (
          <div
            key={`${c.label}-${c.value}`}
            className="pointer-events-none absolute flex items-center gap-2"
            style={{
              left: `${a.x}%`,
              top: `${a.y}%`,
              flexDirection: right ? "row" : "row-reverse",
              transformOrigin: right ? "left center" : "right center",
              opacity: local,
              transition: `opacity ${dur} linear`,
            }}
          >
            <span className="block h-[7px] w-[7px] shrink-0 rounded-full border border-alpine bg-void/90" />
            <span
              className="block h-px w-10 bg-alpine md:w-16"
              style={{
                transform: `scaleX(${local.toFixed(3)})`,
                transformOrigin: right ? "left center" : "right center",
                transition: `transform ${dur} linear`,
              }}
            />
            <span
              className={`block max-w-[6rem] bg-void/90 px-2 py-1 backdrop-blur-sm md:max-w-[11rem] ${right ? "text-left" : "text-right"}`}
            >
              <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-ice md:text-[9px]">
                {c.label}
              </span>
              <span className="mt-0.5 block font-mono text-[9px] leading-tight tracking-[0.06em] text-white md:text-[11px]">
                {c.value}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
