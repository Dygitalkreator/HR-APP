import { createFileRoute, Link } from "@tanstack/react-router";
import { ART_BRAND, ART_HERO, artCopy } from "@/content/art";
import { RevealSection } from "@/components/site/RevealSection";
import { useLocale } from "@/i18n/LocaleProvider";

export const Route = createFileRoute("/art")({
  head: () => ({
    meta: [
      { title: "ZONES × REZA — Art Collaboration in Vorbereitung" },
      {
        name: "description",
        content: "ZONES × REZA: eine Art Collaboration in Vorbereitung. Details folgen.",
      },
      { property: "og:title", content: "ZONES × REZA — Art Collaboration" },
      { property: "og:description", content: "A collaboration in preparation. Details to follow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArtPage,
});

function ArtPage() {
  const { locale } = useLocale();
  const copy = artCopy[locale];

  return (
    <main className="min-h-screen bg-void">
      <section className="relative flex min-h-[70vh] items-end overflow-hidden border-b border-line md:min-h-[78vh]">
        <img
          src={ART_HERO}
          alt=""
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-void/40" />

        <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 pt-32 md:px-12 md:pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-heritage md:text-[11px]">
              ◆ {copy.subline}
            </p>
            <span className="border border-line-mid px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
              {copy.badge}
            </span>
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(44px,10vw,140px)] leading-[0.88]">{ART_BRAND}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-silver md:text-lg">{copy.lead}</p>
        </div>
      </section>

      <RevealSection className="border-b border-line" ariaLabel={copy.status}>
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-24">
          <dl className="grid gap-px bg-line-mid sm:grid-cols-2">
            <div className="bg-void p-6 md:p-8">
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">01 · {copy.status}</dt>
              <dd className="mt-5 font-display text-2xl leading-none text-silver md:text-3xl">{copy.statusValue}</dd>
            </div>
            <div className="bg-void p-6 md:p-8">
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">02 · Collab</dt>
              <dd className="mt-5 font-display text-2xl leading-none text-silver md:text-3xl">{ART_BRAND}</dd>
            </div>
          </dl>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-mist">{copy.note}</p>
          <Link to="/products" className="route-card-link mt-10 inline-flex border-t border-line pt-4">
            {copy.back} →
          </Link>
        </div>
      </RevealSection>
    </main>
  );
}
