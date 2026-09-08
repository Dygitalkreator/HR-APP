/**
 * Motion-Hooks — dünne React-Schicht über src/lib/motion.ts.
 * Regeln und Motion-Budget sind dort dokumentiert und verbindlich.
 */

import { useMemo } from "react";
import {
  DURATION,
  EASE,
  motionStyle,
  stagger,
  usePrefersReducedMotion,
  type MotionSpec,
  type VariantName,
} from "@/lib/motion";

export { usePrefersReducedMotion } from "@/lib/motion";

/**
 * Liefert Style-Builder, die reduced-motion automatisch respektieren.
 *
 * const m = useMotion();
 * <div style={m.style("fadeUp", visible ? "to" : "from")} />
 */
export function useMotion() {
  const reduced = usePrefersReducedMotion();

  return useMemo(
    () => ({
      reduced,
      ease: EASE,
      duration: DURATION,
      style: (variant: VariantName | MotionSpec, state: "from" | "to") =>
        motionStyle(variant, state, reduced),
      stagger: (index: number, step?: number) => stagger(index, step, reduced),
    }),
    [reduced],
  );
}
