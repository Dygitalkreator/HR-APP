import { useReveal } from "@/hooks/useReveal";
import { useLocale } from "@/i18n/LocaleProvider";
import { EDITORIAL_ALT, EDITORIAL_COPY, EDITORIAL_IMAGES, type EditorialKey } from "@/content/editorial";

export function EditorialBand({
  left = "band1",
  right = "band2",
}: {
  left?: EditorialKey;
  right?: EditorialKey;
}) {
  const ref = useReveal<HTMLDivElement>();
  const { locale } = useLocale();

  return (
    <section className="border-t border-line bg-void">
      <div ref={ref} className="reveal mx-auto grid max-w-[1600px] gap-px bg-line-mid md:grid-cols-12">
        <figure className="relative md:col-span-4 overflow-hidden bg-void">
          <div className="clip-reveal aspect-[4/5] w-full overflow-hidden">
            <img
              src={EDITORIAL_IMAGES[left]}
              alt={EDITORIAL_ALT[left][locale]}
              width={1280}
              height={1600}
              className="h-full w-full object-cover transition-transform duration-[1800ms] hover:scale-[1.04]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </figure>

        <div className="flex flex-col justify-between gap-10 bg-titanium p-10 md:col-span-4 md:p-14">
          <p className="label">{EDITORIAL_COPY.bandEyebrow[locale]}</p>
          <blockquote className="font-display text-[clamp(32px,4.2vw,64px)] leading-[0.95] tracking-wider">
            {EDITORIAL_COPY.bandQuote[locale]}
          </blockquote>
          <p className="max-w-sm text-silver">{EDITORIAL_COPY.bandCaption[locale]}</p>
        </div>

        <figure className="relative md:col-span-4 overflow-hidden bg-void">
          <div className="clip-reveal aspect-[4/5] w-full overflow-hidden">
            <img
              src={EDITORIAL_IMAGES[right]}
              alt={EDITORIAL_ALT[right][locale]}
              width={1280}
              height={1600}
              className="h-full w-full object-cover transition-transform duration-[1800ms] hover:scale-[1.04]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
