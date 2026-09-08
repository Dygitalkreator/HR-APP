import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePrefersReducedMotion, DURATION, EASE, stagger } from "@/lib/motion";

/**
 * Wortweiser Headline-Aufbau beim Eintritt in den Viewport.
 * Animiert opacity + translate3d (+ filter: blur als Schärfe-Übergang —
 * keine Layout-Property, daher budget- und regelkonform).
 * Respektiert prefers-reduced-motion über den Phase-0-Hook.
 */
export function StaggerWords({
  text,
  as: Tag = "span",
  className = "",
  step = 70,
  delay = 0,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  step?: number;
  delay?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const words = text.split(" ");
  const on = visible || reduced;

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden={false}
          style={{
            display: "inline-block",
            whiteSpace: "pre",
            opacity: on ? 1 : 0,
            transform: on ? "translate3d(0,0,0)" : "translate3d(0,0.35em,0)",
            filter: on ? "blur(0px)" : "blur(6px)",
            transition: reduced
              ? "none"
              : `opacity ${DURATION.slow}ms ${EASE.editorial} ${delay + stagger(index, step, reduced)}ms, transform ${DURATION.slow}ms ${EASE.editorial} ${delay + stagger(index, step, reduced)}ms, filter ${DURATION.slow}ms ${EASE.editorial} ${delay + stagger(index, step, reduced)}ms`,
            willChange: reduced ? undefined : "transform, opacity, filter",
          }}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}

/** Variante für mehrzeilige Headlines mit eigenem Markup dazwischen. */
export function StaggerLines({ lines, className = "", as = "h1", step = 70 }: { lines: string[]; className?: string; as?: "h1" | "h2"; step?: number }) {
  const Tag = as;
  let offset = 0;
  return (
    <Tag className={className}>
      {lines.map((line, index) => {
        const delay = offset * step;
        offset += line.split(" ").length;
        return (
          <span key={`${line}-${index}`} className="block">
            <StaggerWords text={line} step={step} delay={delay} />
          </span>
        );
      })}
    </Tag>
  );
}

export function MotionWords({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
