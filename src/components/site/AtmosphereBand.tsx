import type { ReactNode } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { ATMOSPHERE_ALT, ATMOSPHERE_IMAGES, type AtmosphereKey } from "@/content/atmosphere";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";

/**
 * ATMOSPHERE divider band — real place, no product, muted natural light.
 * Used between homepage sections and as a page anchor.
 *
 * `parallax` aktiviert Motion Phase 2.1: die Bildebene bewegt sich beim
 * Scrollen langsamer als der Vordergrund-Content (IO-gated, reduced-motion-safe).
 */
export function AtmosphereBand({
  image,
  ratio = "aspect-[21/9]",
  caption,
  children,
  parallax = false,
}: {
  image: AtmosphereKey;
  ratio?: string;
  caption?: string;
  children?: ReactNode;
  parallax?: boolean;
}) {
  const { locale } = useLocale();
  const media = (
    <img
      src={ATMOSPHERE_IMAGES[image]}
      alt={ATMOSPHERE_ALT[image][locale]}
      width={1920}
      height={1080}
      className="absolute inset-0 h-full w-full scale-[1.12] object-cover saturate-[0.74]"
      loading="lazy"
      decoding="async"
    />
  );
  return (
    <section className="relative grain overflow-hidden border-b border-line bg-void">
      <div className={`relative ${ratio} w-full`}>
        {parallax ? (
          <ParallaxLayer speed={-0.16} max={70} className="absolute inset-0">
            {media}
          </ParallaxLayer>
        ) : (
          media
        )}
        <div className="editorial-shade absolute inset-0" />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{
            backgroundImage:
              "linear-gradient(to top, color-mix(in oklab, var(--zl-void) 88%, transparent) 0%, transparent 100%)",
          }}
        />


        {caption || children ? (
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-[1600px] px-6 pb-8 md:px-12 md:pb-12">
              {caption ? <p className="label !text-primary-foreground/80">◆ {caption}</p> : null}
              {children}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
