import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useLocale } from "@/i18n/LocaleProvider";
import { EDITORIAL_ALT, EDITORIAL_IMAGES, type EditorialKey } from "@/content/editorial";

/** Editorial image block with a duotone wash — used as a section anchor. */
export function MediaBanner({
  image,
  ratio = "aspect-[21/9]",
  children,
  align = "end",
}: {
  image: EditorialKey;
  ratio?: string;
  children?: ReactNode;
  align?: "start" | "center" | "end";
}) {
  const { locale } = useLocale();
  const alignClass = align === "center" ? "items-center" : align === "start" ? "items-start" : "items-end";
  return (
    <section className="relative grain overflow-hidden border-t border-line bg-void">
      <div className={`relative ${ratio} w-full`}>
        <img
          src={EDITORIAL_IMAGES[image]}
          alt={EDITORIAL_ALT[image][locale]}
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, color-mix(in oklab, var(--zl-void) 92%, transparent) 0%, color-mix(in oklab, var(--zl-void) 55%, transparent) 45%, color-mix(in oklab, var(--zl-void) 18%, transparent) 100%)",
          }}
        />
        {children ? (
          <div className={`absolute inset-0 flex ${alignClass}`}>
            <div className="mx-auto w-full max-w-[1600px] px-6 pb-10 md:px-12 md:pb-14">{children}</div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

/** Text column next to a tall editorial image. */
export function MediaSplit({
  image,
  flip = false,
  children,
  surface = "bg-void",
}: {
  image: EditorialKey;
  flip?: boolean;
  children: ReactNode;
  surface?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  const { locale } = useLocale();
  return (
    <section className={`border-t border-line ${surface}`}>
      <div ref={ref} className="reveal mx-auto grid max-w-[1600px] gap-px bg-line-mid md:grid-cols-2">
        <figure className={`overflow-hidden ${surface} ${flip ? "md:order-2" : ""}`}>
          <div className="clip-reveal aspect-[4/3] w-full overflow-hidden md:aspect-auto md:h-full">
            <img
              src={EDITORIAL_IMAGES[image]}
              alt={EDITORIAL_ALT[image][locale]}
              width={1536}
              height={1152}
              className="h-full w-full object-cover transition-transform duration-[1800ms] hover:scale-[1.04]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </figure>
        <div className={`${surface} p-10 md:p-16`}>{children}</div>
      </div>
    </section>
  );
}
