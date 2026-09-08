import { useLocale } from "@/i18n/LocaleProvider";
import { EDITORIAL_COPY } from "@/content/editorial";

export function ImageMarquee({ images, alt }: { images: readonly string[]; alt: string }) {
  const { locale } = useLocale();
  const loop = [...images, ...images];
  return (
    <section className="overflow-hidden border-t border-line bg-titanium py-10">
      <p className="mx-auto max-w-[1600px] px-6 md:px-12">
        <span className="label">{EDITORIAL_COPY.gallery[locale]}</span>
      </p>
      <div className="marquee mt-6 flex w-max gap-px">
        {loop.map((src, i) => (
          <div key={`${src}-${i}`} className="h-[240px] w-[180px] shrink-0 overflow-hidden bg-void md:h-[320px] md:w-[240px]">
            <img
              src={src}
              alt={i < images.length ? alt : ""}
              aria-hidden={i >= images.length}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
