import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { useMagnetic } from "@/hooks/useMagnetic";

/**
 * Primärer CTA mit magnetischem Cursor-Effekt (max. 7px, translate3d).
 * Desktop-only, aus bei prefers-reduced-motion — Logik im Hook.
 */
export function MagneticButton(props: ComponentProps<typeof Button>) {
  const magnetic = useMagnetic<HTMLButtonElement>();
  return <Button {...magnetic} {...props} />;
}
