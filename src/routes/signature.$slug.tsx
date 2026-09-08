import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getSignatureProduct, type SignatureProduct, type SignatureVariant, type SignatureVariantId } from "@/content/signature";
import { useT } from "@/i18n/LocaleProvider";
import { useAddToCart } from "@/hooks/useAddToCart";
import { useMagnetic } from "@/hooks/useMagnetic";
import { StaggerList } from "@/components/motion/StaggerList";
import { useSharedTransitionName } from "@/lib/viewTransition";
import { BlueprintOverlay } from "@/components/motion/BlueprintOverlay";
import { deriveCallouts } from "@/lib/blueprint";
import { StaggerWords } from "@/components/motion/StaggerWords";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://pixel-perfect-match-460.lovable.app";

export const Route = createFileRoute("/signature/$slug")({
  loader: ({ params }) => {
    const product = getSignatureProduct(params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData, params }) => {
    const title = loaderData ? `${loaderData.name} — ZONES LAB™` : "Signature — ZONES LAB™";
    const description = loaderData?.tagline ?? "The wearable expression of the ZONES scent architecture.";
    const url = `${SITE_URL}/signature/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: loaderData
        ? [{
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: loaderData.name,
              sku: loaderData.sku,
              description,
              brand: { "@type": "Brand", name: "ZONES LAB" },
              offers: { "@type": "Offer", priceCurrency: "EUR", price: loaderData.price, availability: "https://schema.org/PreOrder" },
            }),
          }]
        : [],
    };
  },
  component: SignatureDetail,
});

function SignatureDetail() {
  const product = Route.useLoaderData() as SignatureProduct;
  const t = useT();
  const addItem = useAddToCart();
  const magnetic = useMagnetic<HTMLButtonElement>();
  const copy = t.signature;
  const [selectedId, setSelectedId] = useState<SignatureVariantId>("broadcast");
  const selected = product.variants.find((variant: SignatureVariant) => variant.id === selectedId) ?? product.variants[0];
  const selectedCopy = copy.variants[selected.id];
  // Motion Phase 3.1 — Call-outs aus Variante, Komposition und Volumen
  const callouts = deriveCallouts({
    tech: selectedCopy.name,
    composition: product.composition,
    volume: product.volume,
    labels: { tech: t.blueprint.tech, material: t.blueprint.material, measure: t.blueprint.measure },
  });

  // Phase 3.6 — Shared-Element vom Grid (erste Variante)
  const vtName = useSharedTransitionName("signature", product.slug);

  const addToCart = (event?: { currentTarget: Element }) => {
    addItem(event ?? null, {
      id: `${product.slug}-${selected.id}`,
      kind: "product",
      name: product.name,
      price: product.price,
      img: selected.img,
      meta: `${product.sku} · ${selectedCopy.name} · ${product.volume}`,
    });
  };

  return (
    <main className="bg-void pt-28 md:pt-36">
      <nav aria-label="Breadcrumb" className="border-b border-line">
        <ol className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-3 px-6 py-5 font-mono text-[11px] text-mist md:px-12">
          <li><Link to="/" className="transition-colors hover:text-alpine">{t.nav.home}</Link></li>
          <li aria-hidden>/</li>
          <li className="text-silver">{t.nav.signature}</li>
          <li aria-hidden>/</li>
          <li className="text-silver">{product.sku}</li>
        </ol>
      </nav>

      <article>
        <header className="border-b border-line">
          <div className="mx-auto max-w-[1600px] px-6 py-14 md:px-12 md:py-20">
            <p className="label !text-alpine">◆ {product.sku} · 20% PARFUM STRENGTH</p>
            <StaggerWords as="h1" text={product.name} className="mt-6 block max-w-6xl font-display text-[clamp(48px,10vw,150px)] leading-[0.88] tracking-wider text-balance" />
            <p className="mt-7 font-display text-2xl tracking-wider text-mist md:text-3xl">{copy.tagline}</p>
          </div>
        </header>

        <section className="border-b border-line bg-titanium">
          <div className="mx-auto grid max-w-[1600px] gap-px bg-line-mid md:grid-cols-12">
            <div className="bg-titanium md:col-span-7">
              {/* Motion Phase 3.1 — Blueprint-Overlay */}
              <BlueprintOverlay
                key={selected.img}
                src={selected.img}
                alt={`${product.name} — ${selectedCopy.name}`}
                title={t.blueprint.title}
                callouts={callouts}
                className="relative aspect-[4/5]"
                eager
                vtName={vtName}
              />
            </div>

            <div className="bg-void p-7 sm:p-10 md:col-span-5 md:p-14">
              <div className="flex items-baseline justify-between gap-6">
                <span className="font-display text-5xl">€{product.price}</span>
                <span className="font-mono text-[11px] text-mist">{product.volume}</span>
              </div>

              <fieldset className="mt-10">
                <legend className="label">{copy.variantsLabel}</legend>
                <div className="mt-4 grid gap-3">
                  {product.variants.map((variant: SignatureVariant) => {
                    const variantCopy = copy.variants[variant.id];
                    const active = selectedId === variant.id;
                    return (
                      <label data-signature-variant={variant.id} key={variant.id} className={`block cursor-pointer border p-5 transition-colors ${active ? "border-alpine bg-titanium" : "border-line-mid hover:border-silver"}`}>
                        <input className="sr-only" type="radio" name="signature-variant" value={variant.id} checked={active} onChange={() => setSelectedId(variant.id)} />
                        <span className="flex items-center justify-between gap-4">
                          <span className="font-display text-2xl tracking-wider">{variantCopy.name}</span>
                          <span aria-hidden className={`h-3 w-3 border ${active ? "border-alpine bg-alpine" : "border-line-mid"}`} />
                        </span>
                        <span className="mt-2 block text-sm text-mist">{variantCopy.tagline}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <Button data-signature-add {...magnetic} type="button" onClick={addToCart} className="mt-8 h-auto w-full rounded-none bg-alpine px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-primary-foreground shadow-none hover:bg-silver hover:text-void">
                {t.common.addToCart} · {selectedCopy.name} →
              </Button>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-mist">{t.common.preorder}</p>

              <div className="hairline my-10" />
              <p className="label">{copy.selectVariant} · {selectedCopy.name}</p>
              <p className="mt-4 font-display text-2xl leading-tight tracking-wider">{selectedCopy.tagline}</p>
              <p className="mt-4 text-silver">{selectedCopy.description}</p>
            </div>
          </div>
        </section>

        <section className="border-b border-line py-20 md:py-28">
          <div className="mx-auto grid max-w-[1600px] gap-14 px-6 md:grid-cols-12 md:px-12">
            <div className="md:col-span-6">
              <p className="label">SIGNATURE ARCHITECTURE</p>
              <p className="mt-6 font-display text-3xl leading-tight tracking-wider md:text-5xl">{copy.hero}</p>
              <p className="mt-8 max-w-2xl text-silver md:text-lg">{copy.description}</p>
            </div>
            <div className="md:col-span-3 md:col-start-8">
              <p className="label">{copy.compositionLabel}</p>
              {/* Phase 3.5 — gestaffelter Ingredient-Reveal */}
              <StaggerList items={product.composition} className="mt-6 space-y-4 font-mono text-sm text-silver" itemClassName="border-b border-line pb-4">
                {(ingredient) => <>◆ {ingredient}</>}
              </StaggerList>
              <div className="mt-6 flex flex-wrap items-center gap-6 font-mono text-[11px] text-mist">
                <span>{product.sku}</span>
                <span className="h-px w-8 bg-line-mid" />
                <span data-product-status>{product.status}</span>
                <span className="h-px w-8 bg-line-mid" />
                <span data-product-origin>{product.origin}</span>
              </div>
            </div>

            <div className="md:col-span-3">
              <p className="label">{t.common.howToUse}</p>
              <p className="mt-6 text-silver">{copy.protocol}</p>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-titanium py-20 md:py-28">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <p className="label">TWO RANGES · ONE SIGNATURE</p>
            <h2 className="mt-4 font-display text-[clamp(36px,5vw,72px)] leading-[0.95] tracking-wider">{copy.comparisonTitle}</h2>
            <p className="mt-5 max-w-2xl text-silver md:text-lg">{copy.comparisonLead}</p>
            <div className="mt-10 overflow-x-auto border border-line-mid bg-void">
              <div className="grid min-w-[620px] grid-cols-[1fr_1.25fr_1.25fr]">
                <div className="border-b border-r border-line p-4" />
                <p className="border-b border-r border-line p-4 font-display text-2xl tracking-wider">{copy.variants.broadcast.name}</p>
                <p className="border-b border-line p-4 font-display text-2xl tracking-wider">{copy.variants["skin-close"].name}</p>
                {copy.comparisonRows.map((row) => <div key={row.label} className="contents"><p className="border-b border-r border-line p-4 label text-mist">{row.label}</p><p className="border-b border-r border-line p-4 text-sm text-silver">{row.broadcast}</p><p className="border-b border-line p-4 text-sm text-silver">{row.skinClose}</p></div>)}
              </div>
            </div>
            <div className="mt-8 grid gap-px bg-line-mid md:grid-cols-2">
              {product.variants.map((variant: SignatureVariant) => {
                const variantCopy = copy.variants[variant.id];
                return (
                  <Button key={variant.id} type="button" variant="ghost" onClick={() => setSelectedId(variant.id)} className="group h-auto min-w-0 flex-col items-stretch whitespace-normal rounded-none bg-void p-0 text-left shadow-none hover:bg-void hover:text-current">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img src={variant.img} alt={`${product.name} — ${variantCopy.name}`} width={1024} height={1280} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
                    </div>
                    <div className="p-6 md:p-8">
                      <p className="label !text-alpine">{variant.id === selectedId ? "◆ SELECTED" : "◇"}</p>
                      <h2 className="mt-3 font-display text-4xl tracking-wider">{variantCopy.name}</h2>
                      <p className="mt-3 text-silver">{variantCopy.tagline}</p>
                    </div>
                  </Button>
                );
              })}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}