import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { accessories, getAccessoryBySlug, type Accessory, type RazorVariantId } from "@/content/accessories";
import { useT } from "@/i18n/LocaleProvider";
import { useAddToCart } from "@/hooks/useAddToCart";
import { useMagnetic } from "@/hooks/useMagnetic";
import { StaggerList } from "@/components/motion/StaggerList";
import { BlueprintOverlay } from "@/components/motion/BlueprintOverlay";
import { deriveCallouts } from "@/lib/blueprint";
import { useSharedTransitionName } from "@/lib/viewTransition";
import { StaggerWords } from "@/components/motion/StaggerWords";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/accessories/$slug")({
  loader: ({ params }) => {
    const item = getAccessoryBySlug(params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.name} — Accessories | ZONES LAB™` },
      { name: "description", content: loaderData.description },
      { property: "og:title", content: `${loaderData.name} — Accessories | ZONES LAB™` },
      { property: "og:description", content: loaderData.description },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ] : [{ title: "Accessory not found — ZONES LAB™" }, { name: "robots", content: "noindex" }],
    scripts: loaderData ? [{
      type: "application/ld+json",
      children: JSON.stringify({ "@context": "https://schema.org", "@type": "Product", name: loaderData.name, description: loaderData.description, material: "Olive wood", brand: { "@type": "Brand", name: "Curated by ZONES LAB" }, offers: { "@type": "Offer", priceCurrency: "EUR", price: loaderData.price, availability: "https://schema.org/InStock" } }),
    }] : [],
  }),
  component: AccessoryDetail,
});

function AccessoryDetail() {
  const item = Route.useLoaderData() as Accessory;
  const t = useT();
  const addItem = useAddToCart();
  const magnetic = useMagnetic<HTMLButtonElement>();
  const copy = t.accessories[item.slug];
  // Phase 3.6 — gleicher Name wie die Grid-Karte auf /accessories
  const vtName = useSharedTransitionName("accessory", item.slug);
  const [variantId, setVariantId] = useState<RazorVariantId>("makalu");
  const selectedVariant = item.variants?.find((variant) => variant.id === variantId);
  const variantCopy = selectedVariant ? copy.variants?.[selectedVariant.id] : undefined;

  const callouts = deriveCallouts({
    composition: copy.composition?.length ? copy.composition : item.composition,
    volume: item.volume,
    labels: { tech: t.blueprint.tech, material: t.blueprint.material, measure: t.blueprint.measure },
  });

  const addToCart = (event?: { currentTarget: Element }) => addItem(event ?? null, {
    id: selectedVariant ? `accessory-${item.slug}-${selectedVariant.id}` : `accessory-${item.slug}`,
    kind: "accessory",
    name: selectedVariant ? `${item.name} · ${selectedVariant.name}` : item.name,
    price: item.price,
    img: item.img,
    meta: selectedVariant ? `${selectedVariant.name} · ${item.volume}` : item.volume,
  });

  return (
    <main className="bg-void pt-28 md:pt-36">
      <nav aria-label="Breadcrumb" className="border-b border-line">
        <ol className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-3 px-6 py-5 font-mono text-[11px] text-mist md:px-12">
          <li><Link to="/" className="hover:text-alpine">{t.nav.home}</Link></li><li aria-hidden>/</li>
          <li><Link to="/accessories" className="hover:text-alpine">{t.nav.accessories}</Link></li><li aria-hidden>/</li>
          <li className="text-silver">{item.name}</li>
        </ol>
      </nav>

      <article className="border-b border-line">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-16 md:grid-cols-12 md:gap-16 md:px-12 md:py-24">
          <div className="md:col-span-7">
            {/* Motion Phase 3.1 — Blueprint-Overlay */}
            <BlueprintOverlay
              vtName={vtName}
              src={item.img}
              alt={item.name}
              title={t.blueprint.title}
              callouts={callouts}
              className="relative aspect-[4/5] border border-line-mid"
              eager
            />
          </div>
          <div className="md:col-span-5 md:pt-6">
            <p className="label !text-alpine">◆ {t.accessoriesPage.curated}</p>
            <StaggerWords as="h1" text={item.name} className="mt-6 block font-display text-[clamp(46px,7vw,92px)] leading-[0.92] tracking-wider" />
            <p className="mt-5 font-display text-2xl leading-tight tracking-wider text-mist">{copy.tagline}</p>
            <p className="mt-8 text-silver md:text-lg">{copy.description}</p>

            {item.variants && copy.variants && (
              <fieldset className="mt-10">
                <legend className="label">{t.accessoriesPage.chooseVariant}</legend>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {item.variants.map((variant) => {
                    const active = variant.id === variantId;
                    const translated = copy.variants?.[variant.id];
                    return <label data-accessory-variant={variant.id} key={variant.id} className={`cursor-pointer border p-4 transition-colors ${active ? "border-alpine bg-titanium" : "border-line-mid hover:border-silver"}`}>
                      <input className="sr-only" type="radio" name="razor-variant" checked={active} onChange={() => setVariantId(variant.id)} />
                      <span className="flex items-center justify-between gap-3"><span className="font-display text-2xl tracking-wider">{translated?.name}</span><span className={`h-3 w-3 border ${active ? "border-alpine bg-alpine" : "border-line-mid"}`} /></span>
                      <span className="mt-2 block text-xs text-mist">{translated?.tagline}</span>
                    </label>;
                  })}
                </div>
                {variantCopy && <p className="mt-4 font-mono text-[11px] text-mist">{variantCopy.name} · {variantCopy.tagline}</p>}
              </fieldset>
            )}

            {copy.composition.length > 0 && <div className="mt-10"><p className="label">{t.accessoriesPage.details}</p><StaggerList items={copy.composition} className="mt-4 grid gap-px bg-line-mid sm:grid-cols-2" itemClassName="bg-void p-4 font-mono text-[12px] text-silver">{(line) => <>◆ {line}</>}</StaggerList></div>}

            {/* Kuratierter Herkunfts-Hinweis — bewusst NICHT im Batch-Coded-Mono-Stil der Cosmetics/Fabrics */}
            <p data-accessory-origin className="mt-6 border-l border-line-mid pl-4 font-display text-sm italic tracking-wide text-mist">{item.origin}</p>


            <div className="mt-10 flex items-baseline justify-between gap-6"><span className="font-display text-5xl">€{item.price}</span><span className="font-mono text-xs text-mist">{item.volume}</span></div>
            <Button data-accessory-add {...magnetic} type="button" onClick={addToCart} className="mt-8 h-auto w-full rounded-none bg-alpine px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-primary-foreground shadow-none hover:bg-silver hover:text-void">{t.common.addToCart}{variantCopy ? ` · ${variantCopy.name}` : ""} →</Button>
            <p className="mt-5 text-xs leading-relaxed text-mist">{t.accessoriesPage.sourcingNote}</p>
          </div>
        </div>
      </article>

      <section className="bg-titanium py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="label">{t.nav.accessories}</p><h2 className="mt-4 font-display text-[clamp(32px,5vw,64px)] tracking-wider">{t.accessoriesPage.related}</h2>
          <div className="mt-10 grid grid-cols-2 gap-px bg-line-mid md:grid-cols-3">
            {accessories.filter((other) => other.slug !== item.slug).map((other) => <Link key={other.slug} to="/accessories/$slug" params={{ slug: other.slug }} className="group bg-void p-4 md:p-6"><div className="aspect-[4/5] overflow-hidden border border-line-mid"><img src={other.img} alt={other.name} width={1024} height={1280} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" /></div><h3 className="mt-4 font-display text-2xl leading-none tracking-wider">{other.name}</h3><p className="mt-3 font-mono text-xs text-silver">€{other.price}</p></Link>)}
          </div>
        </div>
      </section>
    </main>
  );
}