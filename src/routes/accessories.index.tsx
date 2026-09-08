import { createFileRoute, Link } from "@tanstack/react-router";
import { accessories } from "@/content/accessories";
import { useT } from "@/i18n/LocaleProvider";
import { useAddToCart } from "@/hooks/useAddToCart";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { HoverMedia } from "@/components/motion/HoverMedia";
import { useSharedNameFactory, useViewTransitionLinkProps } from "@/lib/viewTransition";
import { Button } from "@/components/ui/button";
import { EditorialChapter, ImageCaption } from "@/components/site/EditorialEvidence";
import { useLocale } from "@/i18n/LocaleProvider";
import { RevealSection } from "@/components/site/RevealSection";
import { CrossSell, TrustBand } from "@/components/site/CrossSell";
import { pageFunnelCopy } from "@/content/pageFunnel";
import { CursorGlow } from "@/components/motion/CursorGlow";

export const Route = createFileRoute("/accessories/")({
  head: () => ({
    meta: [
      { title: "Accessories — Curated European Craft | ZONES LAB™" },
      { name: "description", content: "A curated selection of olive-wood shaving objects and soap dishes, sourced from European makers." },
      { property: "og:title", content: "Accessories — Curated European Craft | ZONES LAB™" },
      { property: "og:description", content: "Hand-grained olive wood and practical objects, honestly sourced and selected." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AccessoriesPage,
});

function AccessoriesPage() {
  const t = useT();
  // Phase 3.6 — Shared-Element: Grid-Karte → Detail-Hero
  const vtNameFor = useSharedNameFactory();
  const vtLink = useViewTransitionLinkProps();
  const { locale } = useLocale();
  const addToCart = useAddToCart();
  const editorial = {
    de: { eyebrow: "Objekt & Herkunft", title: "MATERIAL BLEIBT SICHTBAR.", lead: "Diese Objekte werden kuratiert, nicht als eigene Entwicklung ausgegeben. Olivenholz zeigt Maserung und Varianz; Porzellan und Melamin erfüllen unterschiedliche Aufgaben im Ritual.", curated: "Kuratiert", origin: "Europa", materials: "Materialien", objects: "Objekte" },
    en: { eyebrow: "Object & origin", title: "MATERIAL STAYS VISIBLE.", lead: "These objects are curated, never presented as our own engineering. Olive wood shows grain and variation; porcelain and melamine serve different roles in the ritual.", curated: "Curated", origin: "Europe", materials: "Materials", objects: "Objects" },
    fr: { eyebrow: "Objet & origine", title: "LA MATIÈRE RESTE VISIBLE.", lead: "Ces objets sont sélectionnés, jamais présentés comme notre propre ingénierie. L’olivier montre son grain; porcelaine et mélamine ont des rôles distincts.", curated: "Sélection", origin: "Europe", materials: "Matières", objects: "Objets" },
    it: { eyebrow: "Oggetto & origine", title: "IL MATERIALE RESTA VISIBILE.", lead: "Questi oggetti sono selezionati, non presentati come nostra progettazione. L’ulivo mostra venature e variazioni; porcellana e melamina hanno funzioni diverse.", curated: "Selezionati", origin: "Europa", materials: "Materiali", objects: "Oggetti" },
    nl: { eyebrow: "Object & herkomst", title: "MATERIAAL BLIJFT ZICHTBAAR.", lead: "Deze objecten zijn gecureerd en worden niet als eigen ontwikkeling gepresenteerd. Olijfhout toont nerf en variatie; porselein en melamine vervullen verschillende rollen.", curated: "Gecureerd", origin: "Europa", materials: "Materialen", objects: "Objecten" },
    es: { eyebrow: "Objeto & origen", title: "EL MATERIAL PERMANECE VISIBLE.", lead: "Estos objetos se seleccionan, nunca se presentan como ingeniería propia. El olivo muestra veta y variación; porcelana y melamina cumplen funciones distintas.", curated: "Selección", origin: "Europa", materials: "Materiales", objects: "Objetos" },
  }[locale];

  return (
    <main className="bg-void pt-28 md:pt-36">
      <header className="relative min-h-[78svh] overflow-hidden border-b border-line">
        <img src={accessories[0].img} alt="Olive wood shaving and ritual accessories" className="absolute inset-0 h-full w-full object-cover saturate-[0.72]" loading="eager" fetchPriority="high" decoding="async" />
        <div className="hero-wash absolute inset-0" />
        <CursorGlow />
        <div className="relative mx-auto flex min-h-[78svh] max-w-[1600px] flex-col justify-end px-6 py-16 md:px-12 md:py-24">
          <p className="label !text-alpine">◆ {t.accessoriesPage.eyebrow}</p>
          <h1 className="mt-6 max-w-6xl font-display text-[clamp(56px,11vw,180px)] leading-[0.88] tracking-wider">{t.accessoriesPage.title}</h1>
          <p className="mt-8 max-w-2xl font-display text-2xl leading-tight tracking-wider text-mist md:text-4xl">{t.accessoriesPage.lead}</p>
          <p className="mt-7 max-w-2xl text-silver md:text-lg">{t.accessoriesPage.note}</p>
        </div>
      </header>

      <RevealSection className="border-b border-line bg-titanium py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <EditorialChapter index="01" eyebrow={editorial.eyebrow} title={editorial.title} lead={editorial.lead} />
          <div className="mt-px grid gap-px bg-line-mid md:grid-cols-12">
            <div className="relative min-h-[480px] overflow-hidden bg-void md:col-span-8"><img src={accessories[0].img} alt={accessories[0].name} className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" /><div className="editorial-shade absolute inset-0" /><ImageCaption dark>OLIVE WOOD · PORCELAIN · STEEL · FOUR-PIECE RITUAL</ImageCaption></div>
            <div className="grid min-h-[480px] gap-px bg-line-mid md:col-span-4">{accessories.slice(2).map((item) => <div key={item.slug} className="relative overflow-hidden bg-void"><img src={item.img} alt={item.name} className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" /><div className="editorial-shade absolute inset-0" /><ImageCaption dark>{item.volume} · {item.name}</ImageCaption></div>)}</div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="border-b border-line py-16 md:py-24">
        <div className="mx-auto mb-10 grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-end gap-6 px-6 md:px-12">
          <div className="min-w-0">
            <p className="label text-alpine">01—04 · {t.accessoriesPage.curated}</p>
            <h2 className="mt-4 font-display text-[clamp(34px,5vw,64px)] leading-none tracking-wider">{t.accessoriesPage.related}</h2>
          </div>
          <span className="shrink-0 font-mono text-xs text-mist">04 OBJECTS</span>
        </div>
        <div className="mx-auto grid max-w-[1600px] gap-px bg-line-mid px-6 sm:grid-cols-2 md:px-12 lg:grid-cols-4">
          {accessories.map((item) => {
            const copy = t.accessories[item.slug];
            return (
              <article key={item.slug} className="group flex min-w-0 flex-col bg-void p-4 transition-colors hover:bg-titanium md:p-6">
                <Link to="/accessories/$slug" params={{ slug: item.slug }} {...vtLink} className="block">
                  <HoverMedia vtName={vtNameFor("accessory", item.slug)} src={item.img} hoverSrc={accessories.find((other) => other.slug !== item.slug)?.img} alt={item.name} width={1024} height={1280} className="aspect-[4/5] border border-line-mid" />
                </Link>
                 <p className="label mt-5 !text-alpine">◆ 0{accessories.indexOf(item) + 1} · {t.accessoriesPage.curated}</p>
                <h3 className="mt-3 font-display text-3xl leading-none tracking-wider">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{copy.tagline}</p>
                 <dl className="mt-5 border-t border-line pt-4"><dt className="label">MATERIAL / FORMAT</dt><dd className="mt-2 text-xs text-silver">{item.composition?.slice(0, 2).join(" · ") ?? item.volume}</dd></dl>
                <div className="card-cta mt-auto grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-t border-line pt-5">
                  <div className="min-w-0">
                    <p className="font-display text-3xl">€{item.price}</p>
                    <p className="mt-1 truncate font-mono text-[10px] text-mist">{item.volume}</p>
                  </div>
                  <Button asChild variant="outline" className="h-auto shrink-0 rounded-none border-line-mid bg-transparent px-4 py-3 text-xs text-silver shadow-none hover:border-alpine hover:bg-transparent hover:text-alpine">
                    <Link to="/accessories/$slug" params={{ slug: item.slug }} {...vtLink}>{t.common.learnMore}</Link>
                  </Button>
                </div>
                {!item.variants && (
                  <MagneticButton
                    type="button"
                    onClick={(event) => addToCart(event, { id: `accessory-${item.slug}`, kind: "accessory", name: item.name, price: item.price, img: item.img, meta: item.volume })}
                    className="mt-2 h-auto w-full rounded-none bg-alpine px-5 py-3 text-xs text-primary-foreground shadow-none hover:bg-silver hover:text-void"
                  >
                    {t.common.addToCart}
                  </MagneticButton>
                )}
              </article>
            );
          })}
        </div>
      </RevealSection>
      <TrustBand block={pageFunnelCopy[locale].accessoriesOrigin} inverted={false} />

      <CrossSell lines={["cosmetics", "fabrics"]} />
    </main>
  );
}