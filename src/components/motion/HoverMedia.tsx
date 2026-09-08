import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/motion";

/**
 * Einheitliche Produktbild-Mikrointeraktion für ALLE Linien-Grids
 * (Cosmetics, Signature, Fabrics, Superfood, Accessories).
 *
 * - sanfter Bildwechsel auf ein zweites Motiv (mockup/lifestyle), wenn vorhanden
 * - leichte Skalierung (scale 1.02–1.03)
 * - animiert werden nur transform + opacity
 * - bei prefers-reduced-motion: statisches Erstbild, keine Transition
 */
export function HoverMedia({
  src,
  hoverSrc,
  alt,
  className = "",
  imgClassName = "",
  eager = false,
  width,
  height,
  vtName,
  children,
}: {
  src: string;
  hoverSrc?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  width?: number;
  height?: number;
  /** Phase 3.6 — view-transition-name für Shared-Element-Übergang. */
  vtName?: string;
  children?: React.ReactNode;
}) {
  const reduced = usePrefersReducedMotion();
  const swap = Boolean(hoverSrc) && !reduced;
  // Phase 3.6 — view-transition-name wird nach dem Mount imperativ gesetzt,
  // damit SSR-Markup und Hydration identisch bleiben.
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    el.style.viewTransitionName = vtName ?? "";
  }, [vtName]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`h-full w-full object-cover ${
          reduced
            ? ""
            : swap
              ? "transition-[transform,opacity] duration-700 ease-out group-hover:scale-[1.02] group-hover:opacity-0"
              : "transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
        } ${imgClassName}`}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
      {swap && (
        <img
          src={hoverSrc}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full scale-[1.03] object-cover opacity-0 transition-[transform,opacity] duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 ${imgClassName}`}
          loading="lazy"
          decoding="async"
        />
      )}
      {children}
    </div>
  );
}
