import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

export function RevealSection({ children, className, id, ariaLabel }: { children: ReactNode; className?: string; id?: string; ariaLabel?: string }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id={id} aria-label={ariaLabel} className={`reveal ${className ?? ""}`}>
      {children}
    </section>
  );
}
