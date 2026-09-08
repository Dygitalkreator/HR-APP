import { useEffect, useRef, useState, type ReactNode } from "react";
import { motionStyle, stagger } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/useMotion";

/**
 * Motion Phase 3.5 — gestaffelter Bauteile-/Ingredient-Reveal.
 *
 * Die Einträge einer Composition-/Spec-Liste erscheinen nicht gleichzeitig,
 * sondern nacheinander (stagger() aus src/lib/motion.ts) und formen so
 * gemeinsam die vollständige Liste.
 *
 * Regeln:
 * - einmaliger Reveal via IntersectionObserver — NICHT scroll-linked,
 *   damit das Motion-Budget (max. 3 scroll-linked pro Seite) unberührt bleibt.
 * - nur opacity + transform (translate3d).
 * - prefers-reduced-motion: alles sofort im Endzustand, keine Transition.
 */
export function StaggerList({
  items,
  as: Tag = "ul",
  className = "",
  itemClassName = "",
  step = 90,
  offset = 14,
  children,
}: {
  /** Stabile Keys der Einträge (z. B. INCI-Strings). */
  items: string[];
  as?: "ul" | "ol" | "div";
  className?: string;
  itemClassName?: string;
  /** Versatz pro Eintrag in ms. */
  step?: number;
  /** Start-Versatz in px (translateY). */
  offset?: number;
  /** Render-Funktion pro Eintrag. */
  children: (item: string, index: number) => ReactNode;
}) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const on = visible || reduced;
  const Item = Tag === "div" ? "div" : "li";

  return (
    <Tag ref={ref as never} className={className} data-stagger-list data-stagger-on={on ? "true" : "false"}>
      {items.map((item, i) => (
        <Item
          key={item}
          data-stagger-item
          data-stagger-delay={stagger(i, step, reduced)}
          className={itemClassName}
          style={motionStyle(
            {
              from: { opacity: 0, y: offset },
              to: { opacity: 1, y: 0 },
              duration: "medium",
              ease: "editorial",
              delay: stagger(i, step, reduced),
            },
            on ? "to" : "from",
            reduced,
          )}
        >
          {children(item, i)}
        </Item>
      ))}
    </Tag>
  );
}
