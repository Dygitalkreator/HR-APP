import type { CSSProperties } from "react";
/**
 * ZONES LAB — Motion System, Phase 0 (Fundament)
 * ------------------------------------------------------------------
 * Zentrale Quelle für alle Bewegungen der Website. Jede spätere Phase
 * (Sticky-Scroll, Parallax, Blueprint-Overlay, Chart-Reveals) MUSS über
 * dieses Modul laufen, nicht über eigene Ad-hoc-Animationen.
 *
 * Installierte Animationsbasis: keine JS-Lib (kein Framer Motion / GSAP).
 * Bewegung entsteht über CSS-Transitions, CSS-Keyframes (src/styles.css)
 * und IntersectionObserver (useReveal). Dieses Modul kapselt Tokens,
 * Reduced-Motion-Erkennung und Variantenbau, damit ein späterer Wechsel
 * auf eine Lib nur hier stattfinden muss.
 *
 * ==================================================================
 * HARTE REGELN (verbindlich für alle Phasen)
 * ==================================================================
 * 1. Es werden AUSSCHLIESSLICH `transform` und `opacity` animiert.
 *    Niemals direkt width, height, top, left, right, bottom, margin,
 *    padding, background-position oder box-shadow animieren
 *    (Layout/Paint-Thrashing). Größenwirkung über scale, Position über
 *    translate3d, Sichtbarkeit über opacity.
 * 2. Jede Animation respektiert `prefers-reduced-motion: reduce`.
 *    Entweder via usePrefersReducedMotion() oder via reduceSafe()/
 *    motionStyle(). Kein Bypass.
 * 3. Keine Endlos-Animationen in der Nähe von Text-Inhalten.
 * 4. Scroll-gebundene Effekte laufen ausschließlich in
 *    requestAnimationFrame (siehe onScrollFrame) — nie direkt im
 *    scroll-Event mit Layout-Reads.
 *
 * ==================================================================
 * MOTION-BUDGET (verbindliche Doku, kein Laufzeit-Enforcement)
 * ==================================================================
 * - Maximal 3 gleichzeitig aktive scroll-linked Animationen pro Seite.
 *   "Scroll-linked" = Wert wird kontinuierlich aus der Scrollposition
 *   berechnet (Parallax, Sticky-Progress, Blueprint-Overlay-Fortschritt,
 *   Scrub-Charts).
 * - Nicht gezählt werden: einmalige Reveal-Effekte (IntersectionObserver,
 *   .reveal / .clip-reveal), Hover-Transitions, CSS-Keyframes ohne
 *   Scrollbindung.
 * - Budgetverteilung pro Seite (Richtwert für die Folgephasen):
 *     1x Sticky-Scroll-Sequenz (Hero oder Systemkapitel)
 *     1x Parallax-Ebene (Bild/Atmosphere-Band)
 *     1x Blueprint-/Progress-Overlay
 *   Wird ein vierter Effekt gebraucht, muss ein bestehender entfernt
 *   oder in einen einmaligen Reveal überführt werden.
 * - Pro Viewport sollten nie mehr als 2 dieser 3 gleichzeitig sichtbar
 *   sein; Effekte außerhalb des Viewports werden abgemeldet
 *   (IntersectionObserver-Gate).
 * - Bei prefers-reduced-motion gilt das Budget 0: scroll-linked
 *   Animationen werden komplett deaktiviert, Endzustand wird gesetzt.
 */

import { useEffect, useState } from "react";

/* ------------------------------------------------------------------ */
/* Tokens                                                              */
/* ------------------------------------------------------------------ */

/** Easing-Kurven — identisch zu den in styles.css genutzten Werten. */
export const EASE = {
  /** Ruhiges Ausschwingen, Standard für Reveals. */
  editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
  /** Kurze UI-Rückmeldung (Hover, Buttons). */
  ui: "cubic-bezier(0.4, 0, 0.2, 1)",
  linear: "linear",
} as const;

/** Dauern in ms. Editorialer Rhythmus: langsam und kontrolliert. */
export const DURATION = {
  instant: 0,
  fast: 200,
  ui: 300,
  medium: 700,
  slow: 1100,
  cinematic: 1400,
} as const;

export type MotionDuration = keyof typeof DURATION;
export type MotionEase = keyof typeof EASE;

/* ------------------------------------------------------------------ */
/* Reduced Motion                                                      */
/* ------------------------------------------------------------------ */

const QUERY = "(prefers-reduced-motion: reduce)";

/** SSR-sicherer Einmal-Check (false auf dem Server). */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(QUERY).matches;
}

/**
 * Globaler Reduced-Motion-Hook. Startet bewusst mit `false`, damit
 * Server- und Client-Render identisch sind, und aktualisiert sich nach
 * der Hydration sowie bei Systemwechsel.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia(QUERY);
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/** Gibt `value` zurück — oder `fallback`, wenn Bewegung reduziert ist. */
export function reduceSafe<T>(reduced: boolean, value: T, fallback: T): T {
  return reduced ? fallback : value;
}

/* ------------------------------------------------------------------ */
/* Varianten                                                           */
/* ------------------------------------------------------------------ */

/**
 * Eine Variante beschreibt ausschließlich transform + opacity.
 * `from` = Ausgangszustand, `to` = Endzustand.
 */
export type MotionVariant = {
  opacity?: number;
  /** px */
  y?: number;
  /** px */
  x?: number;
  /** 1 = keine Skalierung */
  scale?: number;
};

export type MotionSpec = {
  from: MotionVariant;
  to: MotionVariant;
  duration?: MotionDuration;
  ease?: MotionEase;
  /** ms */
  delay?: number;
};

/** Kuratierte Standardvarianten. Neue Effekte hier ergänzen, nicht inline bauen. */
export const VARIANTS = {
  fadeIn: { from: { opacity: 0 }, to: { opacity: 1 }, duration: "medium", ease: "editorial" },
  fadeUp: { from: { opacity: 0, y: 24 }, to: { opacity: 1, y: 0 }, duration: "slow", ease: "editorial" },
  fadeDown: { from: { opacity: 0, y: -24 }, to: { opacity: 1, y: 0 }, duration: "slow", ease: "editorial" },
  slideInLeft: { from: { opacity: 0, x: -40 }, to: { opacity: 1, x: 0 }, duration: "slow", ease: "editorial" },
  slideInRight: { from: { opacity: 0, x: 40 }, to: { opacity: 1, x: 0 }, duration: "slow", ease: "editorial" },
  scaleIn: { from: { opacity: 0, scale: 0.96 }, to: { opacity: 1, scale: 1 }, duration: "medium", ease: "editorial" },
  imageRise: { from: { opacity: 0, y: 32, scale: 1.04 }, to: { opacity: 1, y: 0, scale: 1 }, duration: "cinematic", ease: "editorial" },
} satisfies Record<string, MotionSpec>;

export type VariantName = keyof typeof VARIANTS;

function transformOf(v: MotionVariant): string | undefined {
  const parts: string[] = [];
  if (v.x !== undefined || v.y !== undefined) {
    parts.push(`translate3d(${v.x ?? 0}px, ${v.y ?? 0}px, 0)`);
  }
  if (v.scale !== undefined) parts.push(`scale(${v.scale})`);
  return parts.length ? parts.join(" ") : undefined;
}

/**
 * Baut inline-Styles für eine Variante. Nur transform/opacity/transition.
 * Bei `reduced` wird immer der Endzustand ohne Transition geliefert.
 */
export function motionStyle(
  variant: VariantName | MotionSpec,
  state: "from" | "to",
  reduced = false,
): CSSProperties {
  const spec: MotionSpec = typeof variant === "string" ? VARIANTS[variant] : variant;
  const target = reduced ? spec.to : spec[state];
  const duration = DURATION[spec.duration ?? "medium"];
  const ease = EASE[spec.ease ?? "editorial"];

  return {
    opacity: target.opacity,
    transform: transformOf(target),
    transition: reduced
      ? "none"
      : `opacity ${duration}ms ${ease} ${spec.delay ?? 0}ms, transform ${duration}ms ${ease} ${spec.delay ?? 0}ms`,
    willChange: reduced ? undefined : "transform, opacity",
  };
}

/** Gestaffelte Verzögerung für Listen; 0 bei reduzierter Bewegung. */
export function stagger(index: number, step = 80, reduced = false): number {
  return reduced ? 0 : index * step;
}

/* ------------------------------------------------------------------ */
/* Scroll-Helfer (Budget beachten: max. 3 pro Seite)                   */
/* ------------------------------------------------------------------ */

/**
 * rAF-gedrosselter Scroll-Listener. Der Callback darf ausschließlich
 * transform/opacity schreiben und keine Layout-Werte lesen.
 * Bei reduzierter Bewegung wird nichts registriert.
 */
export function onScrollFrame(cb: () => void, reduced = false): () => void {
  if (typeof window === "undefined" || reduced) return () => {};
  let raf = 0;
  const handler = () => {
    if (raf) return;
    raf = window.requestAnimationFrame(() => {
      raf = 0;
      cb();
    });
  };
  window.addEventListener("scroll", handler, { passive: true });
  handler();
  return () => {
    window.removeEventListener("scroll", handler);
    if (raf) window.cancelAnimationFrame(raf);
  };
}

/** Normalisiert einen Wert auf 0…1. */
export function progress(value: number, start: number, end: number): number {
  if (end === start) return 0;
  return Math.min(1, Math.max(0, (value - start) / (end - start)));
}

/** Lineare Interpolation für Scroll-Scrubbing. */
export function lerp(from: number, to: number, t: number): number {
  return from + (to - from) * t;
}
