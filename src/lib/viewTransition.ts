/**
 * Motion Phase 3.6 — Shared-Element-Seitenübergänge (View Transitions API).
 *
 * Support-Lage im aktuellen Setup:
 * - TanStack Router (v1.168) unterstützt `viewTransition` auf <Link> und
 *   `defaultViewTransition` auf dem Router und ruft intern
 *   document.startViewTransition() auf — es gibt KEINE Vite-spezifische Hürde.
 * - Browser ohne document.startViewTransition (aktuell u. a. Firefox) fallen
 *   automatisch auf normale Navigation zurück; der Router wirft keinen Fehler.
 *   Wir prüfen zusätzlich selbst, damit `view-transition-name` in nicht
 *   unterstützenden Browsern gar nicht gesetzt wird.
 * - prefers-reduced-motion: keine Transition, kein Namens-Tagging.
 *
 * Verwendung: Grid-Karte und Detail-Hero bekommen denselben Namen
 * (`vt-product-<slug>`), damit das Bild von der Karten- zur Hero-Position morpht.
 */

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/useMotion";

/** Feature-Detection der View Transitions API (SSR-sicher). */
export function supportsViewTransitions(): boolean {
  return typeof document !== "undefined" && typeof (document as Document & { startViewTransition?: unknown }).startViewTransition === "function";
}

/**
 * Hydration-sicheres Gate: der Server kennt weder Browser-Support noch
 * Motion-Präferenz, deshalb wird erst nach dem Mount getaggt.
 */
function useEnabled(): boolean {
  const reduced = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && !reduced && supportsViewTransitions();
}

/** Eindeutiger Shared-Element-Name pro Produkt. */
export function sharedName(kind: string, slug: string): string {
  return `vt-${kind}-${slug.replace(/[^a-zA-Z0-9-]/g, "-")}`;
}

/**
 * Liefert den `view-transition-name` nur, wenn Browser-Support besteht und
 * Bewegung nicht reduziert ist — sonst undefined (= normale Navigation).
 */
export function useSharedTransitionName(kind: string, slug: string | undefined): string | undefined {
  const enabled = useEnabled();
  if (!slug || !enabled) return undefined;
  return sharedName(kind, slug);
}

/** Props für <Link>: aktiviert die Transition nur bei Support + Motion erlaubt. */
export function useViewTransitionLinkProps(): { viewTransition?: boolean } {
  return useEnabled() ? { viewTransition: true } : {};
}

/**
 * Fabrik für Listen/Grids: der Hook wird EINMAL im Komponenten-Scope
 * aufgerufen, der Name pro Karte dann innerhalb von .map() erzeugt.
 * Ohne Browser-Support oder bei reduzierter Bewegung: undefined.
 */
export function useSharedNameFactory(): (kind: string, slug: string) => string | undefined {
  const enabled = useEnabled();
  return (kind, slug) => (enabled ? sharedName(kind, slug) : undefined);
}
