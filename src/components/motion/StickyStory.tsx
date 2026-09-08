import { useEffect, useRef, useState, type ReactNode } from "react";
import { onScrollFrame } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/useMotion";

export type StickyStoryChapter = {
  id: string;
  content: ReactNode;
};

/**
 * Motion Phase 2.2 — Sticky-Scroll Storytelling (scroll-linked, Budget-relevant).
 *
 * Linke Spalte (Bild) bleibt sticky stehen, rechte Spalte scrollt durch.
 * Der aktive Textabschnitt bestimmt, welches Bild sichtbar ist — Crossfade
 * über `opacity` (kein display/visibility-Sprung, keine Layout-Properties).
 *
 * Bei prefers-reduced-motion: kein Scroll-Listener, kein Sticky-Verhalten,
 * es bleibt ein normaler zweispaltiger Block mit dem Primärbild.
 */
export function StickyStory({
  images,
  alt,
  chapters,
  eyebrow,
}: {
  images: string[];
  alt: string;
  chapters: StickyStoryChapter[];
  eyebrow?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const frames = images.length > 0 ? images : [];

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || reduced || frames.length < 2) return;

    let detach: (() => void) | null = null;

    const start = () => {
      if (detach) return;
      detach = onScrollFrame(() => {
        const nodes = Array.from(
          wrap.querySelectorAll<HTMLElement>("[data-sticky-chapter]"),
        );
        if (!nodes.length) return;
        const anchor = (window.innerHeight || 1) * 0.45;
        let best = 0;
        let bestDist = Infinity;
        nodes.forEach((node, i) => {
          const rect = node.getBoundingClientRect();
          const dist = Math.abs(rect.top + rect.height / 2 - anchor);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        });
        setActive((prev) => (prev === best ? prev : best));
      }, false);
    };

    const stop = () => {
      detach?.();
      detach = null;
    };

    const io = new IntersectionObserver(
      ([entry]) => (entry?.isIntersecting ? start() : stop()),
      { rootMargin: "0px" },
    );
    io.observe(wrap);
    return () => {
      io.disconnect();
      stop();
    };
  }, [reduced, frames.length]);

  const frameFor = (index: number) => frames[Math.min(index, frames.length - 1)];

  return (
    <div ref={wrapRef} className="mx-auto grid max-w-[1600px] gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-12">
      <div className="md:col-span-6">
        <div className={reduced ? "" : "md:sticky md:top-28"}>
          {eyebrow ? <p className="label mb-5">◆ {eyebrow}</p> : null}
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-line-mid bg-titanium">
            {frames.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={i === 0 ? alt : `${alt} — ${i + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                style={{
                  opacity: reduced ? (i === 0 ? 1 : 0) : frameFor(active) === src ? 1 : 0,
                  transition: reduced ? "none" : "opacity 900ms cubic-bezier(0.16, 1, 0.3, 1)",
                  willChange: reduced ? undefined : "opacity",
                }}
              />
            ))}
          </div>
          {!reduced && frames.length > 1 ? (
            <div className="mt-4 flex gap-2" aria-hidden="true">
              {frames.map((src, i) => (
                <span
                  key={src}
                  className="h-px flex-1 origin-left bg-line-mid"
                  style={{
                    transform: "scaleY(1)",
                    opacity: frameFor(active) === src ? 1 : 0.35,
                    backgroundColor:
                      frameFor(active) === src ? "var(--zl-alpine)" : undefined,
                    transition: "opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="md:col-span-6">
        <div className="space-y-16 md:space-y-28">
          {chapters.map((chapter) => (
            <div key={chapter.id} data-sticky-chapter={chapter.id}>
              {chapter.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
