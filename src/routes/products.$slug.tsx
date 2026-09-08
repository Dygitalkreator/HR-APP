import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProductBySlug, products, type Product } from "@/content/products";
import { useAddToCart } from "@/hooks/useAddToCart";
import { StaggerWords } from "@/components/motion/StaggerWords";
import { StickyStory } from "@/components/motion/StickyStory";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { BlueprintOverlay } from "@/components/motion/BlueprintOverlay";
import { deriveCallouts } from "@/lib/blueprint";
import { ExplodedView } from "@/components/motion/ExplodedView";
import { StaggerList } from "@/components/motion/StaggerList";
import { useSharedTransitionName } from "@/lib/viewTransition";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useT } from "@/i18n/LocaleProvider";
import { IngredientMatrix } from "@/components/site/IngredientMatrix";
import { SystemClaims } from "@/components/site/SystemClaims";

const STEPS: Product["step"][] = ["PREP", "ENGAGE", "RECOVER", "FINISH"];


export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — ZONES LAB™` },
          { name: "description", content: loaderData.short },
          { property: "og:title", content: `${loaderData.name} — ZONES LAB™` },
          { property: "og:description", content: loaderData.short },
          { property: "og:image", content: loaderData.img },
          { name: "twitter:image", content: loaderData.img },
          { property: "og:type", content: "product" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Product — ZONES LAB™" }],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: loaderData.name,
              sku: loaderData.sku,
              description: loaderData.short,
              image: loaderData.img,
              category: loaderData.category,
              brand: { "@type": "Brand", name: "Zones Lab" },
              offers: { "@type": "Offer", priceCurrency: "EUR", price: loaderData.price, availability: "https://schema.org/PreOrder" },
            }),
          },
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Products", item: "/products" },
                { "@type": "ListItem", position: 3, name: loaderData.name, item: `/products/${loaderData.slug}` },
              ],
            }),
          },
        ]
      : [],
  }),
  component: ProductDetail,
  notFoundComponent: () => <NotFound />,
  errorComponent: ({ error }) => <ErrorView message={error.message} />,
});

function NotFound() {
  const t = useT();
  return (
    <main className="bg-void px-6 pb-32 pt-40 text-center">
      <p className="label">404 / SKU</p>
      <h1 className="mt-6 font-display text-6xl tracking-wider">{t.common.skuNotFound}</h1>
      <Link to="/products" className="mt-10 inline-block bg-alpine px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-white">
        {t.common.backPortfolio}
      </Link>
    </main>
  );
}

function ErrorView({ message }: { message: string }) {
  const t = useT();
  return (
    <main className="bg-void px-6 pb-32 pt-40 text-center">
      <p className="label">Error</p>
      <h1 className="mt-6 font-display text-4xl tracking-wider">{t.common.signalLost}</h1>
      <p className="mt-4 text-mist">{message}</p>
    </main>
  );
}

function ProductDetail() {
  const p = Route.useLoaderData() as Product;
  const addItem = useAddToCart();
  const magnetic = useMagnetic<HTMLButtonElement>();
  const t = useT();
  const tp = t.products[p.slug as keyof typeof t.products];
  const isSystemCore = p.slug === "intense" || p.slug === "sensitive";
  const isRefill = p.slug === "hamamelis-mist" || p.slug === "pre-shave-oil";
  const idx = products.findIndex((x) => x.slug === p.slug);
  const next = products[(idx + 1) % products.length];
  const tn = t.products[next.slug as keyof typeof t.products];
  const related = products.filter((x) => x.slug !== p.slug).sort((a, b) => (a.step === p.step ? -1 : 0) - (b.step === p.step ? -1 : 0)).slice(0, 3);

  // Motion Phase 3.1 — Call-outs dynamisch aus tech / spec / composition
  const callouts = deriveCallouts({
    tech: p.tech,
    spec: tp.spec,
    composition: tp.composition,
    volume: p.volume,
    labels: { tech: t.blueprint.tech, material: t.blueprint.material, measure: t.blueprint.measure },
  });

  // Motion Phase 3.6 — Shared-Element (Grid-Karte → Hero)
  const vtName = useSharedTransitionName("product", p.slug);

  const addToCart = (event?: { currentTarget: Element }) =>
    addItem(event ?? null, { id: p.slug, kind: "product", name: p.name, price: p.price, img: p.img, meta: `${p.sku} · ${p.volume}` });

  return (
    <main className="bg-void pt-32 md:pt-40">
      {/* Motion-Budget Produktdetail (max. 3 scroll-linked): 1) ScrollProgress
          2) StickyStory-Crossfade 3) BlueprintOverlay (Phase 3.1).
          Auf den Flaggschiffen (Intense/Sensitive) übernimmt die Exploded-View
          (Phase 3.4) den dritten Slot; das Blueprint-Overlay läuft dort
          bewusst statisch (staticOnly), damit das Budget gehalten wird. */}
      <ScrollProgress />
      <article>
        <header className="border-b border-line">
          <div className="mx-auto max-w-[1600px] px-6 pb-16 md:px-12">
            <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-2">
              <Link to="/" className="hover:!text-alpine">{t.nav.home}</Link>
              <span className="text-line-mid">/</span>
              <Link to="/products" className="hover:!text-alpine">{t.nav.products}</Link>
              <span className="text-line-mid">/</span>
              <span className="!text-silver">{p.sku}</span>
            </nav>
            {isSystemCore && (
              <p data-system-core-badge className="label mt-10 w-fit bg-alpine px-3 py-2 text-primary-foreground">
                ◆ {t.productsPage.startHere} · {t.productsPage.systemCore}
              </p>
            )}
            {isRefill && (
              <p data-refill-badge className="label mt-10 w-fit border border-alpine px-3 py-2 text-alpine">
                ↻ {t.productsPage.refillBadge} · {t.productsPage.refillAction}
              </p>
            )}
            <p className={`label !text-alpine ${isSystemCore || isRefill ? "mt-5" : "mt-10"}`}>◆ {p.step} · {p.category}</p>
            <StaggerWords as="h1" text={p.name} className="mt-6 block font-display text-[clamp(48px,11vw,180px)] leading-[0.9] tracking-wider text-balance" />
            <p className="mt-6 font-display text-2xl text-mist tracking-wider">{tp.tagline}</p>
            <p className="mt-8 max-w-2xl text-silver md:text-xl">{tp.short}</p>
            <div className="mt-12 flex flex-wrap items-center gap-6 font-mono text-[11px] text-mist">
              <span>{p.sku}</span>
              <span className="h-px w-8 bg-line-mid" />
              <span data-product-status>{p.status}</span>
              <span className="h-px w-8 bg-line-mid" />
              <span>{t.common.zone} · {tp.zone}</span>
            </div>
            <p data-product-signoff className="mt-4 font-mono text-[11px] tracking-[0.14em] text-mist">
              {p.signOff}
            </p>
          </div>
        </header>

        <div className="border-b border-line bg-titanium">
          <div className="mx-auto grid max-w-[1600px] gap-px bg-line-mid md:grid-cols-12">
            <div className="md:col-span-7 bg-titanium">
              {/* Motion Phase 3.1 — Blueprint-Overlay ersetzt hier die Hero-Parallax-Ebene (Budget) */}
              <BlueprintOverlay
                src={p.img}
                alt={`${p.name} — ${p.sku}`}
                title={t.blueprint.title}
                callouts={callouts}
                className="relative aspect-[4/5] w-full"
                eager
                vtName={vtName}
                staticOnly={isSystemCore}
              />
            </div>
            <div className="md:col-span-5 bg-void p-10 md:p-14">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl">€{p.price}</span>
                <span className="font-mono text-[11px] text-mist">{p.volume}</span>
              </div>
              <button
                {...magnetic}
                type="button"
                onClick={addToCart}
                className="mt-8 w-full bg-alpine px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-silver hover:text-void"
              >
                {t.common.addToCart} →
              </button>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-mist">{t.common.preorder}</p>
              <div className="hairline my-10" />
              <p className="label">{t.common.heroMechanism}</p>
              <p className="mt-4 text-lg leading-relaxed text-silver">{tp.hero}</p>
              <div className="hairline my-10" />
              <p className="label">{t.common.techComplex}</p>
              <p className="mt-3 font-display text-2xl tracking-wider">{p.tech}</p>
              <div className="hairline my-10" />
              <p className="label">{t.common.specs}</p>
              <dl className="mt-4 grid grid-cols-2 gap-px bg-line-mid">
                {tp.spec.map((s) => (
                  <div key={s.label} className="bg-void p-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">{s.label}</dt>
                    <dd className="mt-2 font-display text-xl tracking-wider">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* mockup gallery */}
        {p.mockupImages && p.mockupImages.length > 0 && (
          <section className="border-b border-line bg-void py-16 md:py-24">
            <div className="mx-auto max-w-[1600px] px-6 md:px-12">
              <p className="label">◆ {p.sku}</p>
              <h2 className="mt-4 font-display text-[clamp(24px,3.4vw,44px)] tracking-wider">{p.name}</h2>
              <div className="mt-8 flex snap-x snap-mandatory items-start gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-px md:overflow-visible md:pb-0">
                {p.mockupImages.map((src, i) => (
                  <div key={src} className="w-[78%] shrink-0 snap-start bg-void md:w-auto">
                    <div className="aspect-[4/5] overflow-hidden border border-line-mid">
                      <img src={src} alt={`${p.name} — ${i + 1}`} className="h-full w-full object-cover" loading="lazy" decoding="async" width={1024} height={1280} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}


        {/* Position im Protokoll */}
        <section className="border-b border-line bg-void py-20">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <p className="label">{t.common.inProtocol}</p>
            <ol className="mt-8 grid gap-px bg-line-mid md:grid-cols-4">
              {STEPS.map((s, i) => {
                const active = s === p.step;
                return (
                  <li key={s} className={`p-6 md:p-8 ${active ? "bg-alpine text-white" : "bg-void"}`}>
                    <span className={`font-mono text-[10px] tracking-[0.2em] ${active ? "text-white/70" : "text-mist"}`}>
                      0{i + 1}
                    </span>
                    <p className="mt-3 font-display text-2xl tracking-wider">{s}</p>
                    {active && <p className="mt-3 text-sm leading-relaxed text-white/85">{tp.protocol}</p>}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* 2.2 — Sticky-Scroll Storytelling: Bild bleibt stehen, Text scrollt */}
        <section className="border-b border-line bg-void py-24 md:py-32">
          <StickyStory
            eyebrow={`${p.sku} · ${p.step}`}
            alt={`${p.name} — ${p.sku}`}
            images={[p.img, ...(p.mockupImages ?? [])].slice(0, 4)}
            chapters={[
              {
                id: "claim",
                content: (
                  <div>
                    <p className="label">{t.common.claim}</p>
                    <h2 className="mt-6 font-display text-3xl leading-tight tracking-wider md:text-4xl">{tp.claim}</h2>
                    <div className="mt-8 space-y-5">
                      {tp.description.split("\n\n").map((para) => (
                        <p key={para.slice(0, 24)} className="text-silver">
                          {para}
                        </p>
                      ))}
                    </div>
                    {tp.highlights && tp.highlights.length > 0 && (
                      <div className="mt-12 border border-line-mid p-6 md:p-8">
                        {tp.highlightsTitle && (
                          <p className="font-display text-xl leading-tight tracking-wider">{tp.highlightsTitle}</p>
                        )}
                        <ul className="mt-6 space-y-3">
                          {tp.highlights.map((h) => (
                            <li key={h} className="flex gap-3 text-sm text-silver">
                              <span className="text-alpine">◆</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ),
              },
              {
                id: "composition",
                content: (
                  <div>
                    <p className="label">{t.common.composition}</p>
                    {/* Phase 3.5 — gestaffelter Ingredient-Reveal */}
                    <StaggerList
                      items={tp.composition}
                      className="mt-6 space-y-3 font-mono text-sm text-silver"
                      itemClassName="flex gap-3 border-b border-line pb-3"
                    >
                      {(c) => (
                        <>
                          <span className="text-alpine">◆</span>
                          {c}
                        </>
                      )}
                    </StaggerList>
                  </div>
                ),
              },
              {
                id: "protocol",
                content: (
                  <div>
                    <p className="label">{t.common.protocolLabel}</p>
                    <p className="mt-6 text-silver">{tp.protocol}</p>
                    <div className="hairline my-10" />
                    <p className="label">{t.common.techComplex}</p>
                    <p className="mt-3 font-display text-2xl tracking-wider">{p.tech}</p>
                  </div>
                ),
              },
            ]}
          />
        </section>

        {/* Phase 3.4 — Exploded-View (nur Flaggschiffe, geometrische Linien-
            Illustration im Blueprint-Stil; es existieren keine zerlegten Assets) */}
        {isSystemCore && (
          <section className="border-b border-line bg-titanium py-24 md:py-32">
            <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-12 md:px-12">
              <div className="md:col-span-5">
                <p className="label">{t.exploded.eyebrow}</p>
                <h2 className="mt-6 font-display text-3xl leading-tight tracking-wider md:text-4xl">{t.exploded.title}</h2>
                <p className="mt-6 text-silver">{t.exploded.lead}</p>
                <p className="label mt-8 !text-alpine">◆ {t.exploded.hint} ↓</p>
              </div>
              <div className="md:col-span-7">
                <ExplodedView
                  title={t.blueprint.title}
                  parts={[
                    { id: "cap", label: t.exploded.cap, value: p.volume },
                    { id: "body", label: t.exploded.body, value: tp.spec?.[0] ? `${tp.spec[0].label} · ${tp.spec[0].value}` : p.tech },
                    { id: "core", label: t.exploded.core, value: p.tech },
                  ]}
                />
              </div>
            </div>
          </section>
        )}

        {tp.consumer && (
          <section className="border-b border-line bg-titanium py-24 md:py-32">
            <div className="mx-auto max-w-[1200px] px-6 md:px-12">
              <p className="label">{t.common.inPlainWords}</p>
              <p className="mt-6 font-display text-2xl leading-snug tracking-wider md:text-3xl">{tp.consumer.intro}</p>
              <div className="mt-16 grid gap-px bg-line-mid md:grid-cols-2">
                <div className="bg-void p-8 md:p-10">
                  <p className="label !text-alpine">◆ {t.common.whatItIs}</p>
                  <p className="mt-4 text-silver leading-relaxed">{tp.consumer.what}</p>
                </div>
                <div className="bg-void p-8 md:p-10">
                  <p className="label !text-alpine">◆ {t.common.howToUse}</p>
                  <p className="mt-4 text-silver leading-relaxed">{tp.consumer.how}</p>
                </div>
                <div className="bg-void p-8 md:p-10">
                  <p className="label !text-alpine">◆ {t.common.whoItsFor}</p>
                  <p className="mt-4 text-silver leading-relaxed">{tp.consumer.who}</p>
                </div>
                <div className="bg-void p-8 md:p-10">
                  <p className="label !text-alpine">◆ {t.common.whatYouGet}</p>
                  <p className="mt-4 text-silver leading-relaxed">{tp.consumer.result}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Wirkstoffe (INCI → Klartext → Nutzen) */}
        <IngredientMatrix composition={tp.composition} />

        {/* System-Claims mit Definition */}
        <SystemClaims />


        {tp.faq && tp.faq.length > 0 && (
          <section className="border-b border-line bg-void py-24 md:py-32">
            <div className="mx-auto max-w-[1000px] px-6 md:px-12">
              <p className="label">{t.common.faqTitle}</p>
              <h2 className="mt-6 font-display text-[clamp(32px,4vw,56px)] leading-[0.95] tracking-wider">{t.common.faqTitle}</h2>
              <div className="mt-12 divide-y divide-line">
                {tp.faq.map((f) => (
                  <details key={f.q} className="group py-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                      <span className="font-display text-xl leading-snug tracking-wider">{f.q}</span>
                      <span className="mt-1 font-mono text-alpine transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 max-w-2xl text-silver">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Weitere Module */}
        <section className="border-b border-line bg-void py-24">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="flex flex-wrap items-baseline justify-between gap-6">
              <p className="label">{t.common.relatedModules}</p>
              <Link to="/products" className="label hover:!text-alpine">{t.common.backToCollection} →</Link>
            </div>
            <div className="mt-10 grid gap-px bg-line-mid md:grid-cols-3">
              {related.map((r) => {
                const tr = t.products[r.slug as keyof typeof t.products];
                return (
                  <Link key={r.slug} to="/products/$slug" params={{ slug: r.slug }} className="group bg-void">
                    <div className="aspect-[4/5] overflow-hidden bg-titanium">
                      <img src={r.img} alt={r.name} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
                    </div>
                    <div className="p-6">
                      <p className="label">{r.step} · {r.sku}</p>
                      <h3 className="mt-3 font-display text-2xl tracking-wider group-hover:text-alpine">{r.name}</h3>
                      <p className="mt-3 line-clamp-2 text-sm text-silver">{tr.short}</p>
                      <p className="mt-4 font-mono text-[11px] text-mist">€{r.price} · {r.volume}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </article>

      <section className="bg-void pb-24 md:pb-0">
        <Link to="/products/$slug" params={{ slug: next.slug }} className="group mx-auto grid max-w-[1600px] gap-px bg-line-mid md:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden bg-titanium md:aspect-[16/10]">
            <img src={next.img} alt={next.name} className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]" loading="lazy" decoding="async" />
          </div>
          <div className="flex flex-col justify-center bg-titanium p-10 md:p-16">
            <p className="label">{t.productDetail.nextModule} · {next.step}</p>
            <h2 className="mt-6 font-display text-[clamp(32px,4vw,56px)] leading-[0.95] tracking-wider">{next.name}</h2>
            <p className="mt-6 max-w-md text-silver">{tn.short}</p>
            <span className="label mt-10 group-hover:!text-alpine">{t.common.openDossier}</span>
          </div>
        </Link>
      </section>

      {/* Sticky Buy Bar (Mobile) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line-mid bg-void/95 backdrop-blur md:hidden">
        <div className="flex items-center gap-4 px-5 py-3">
          <div className="min-w-0">
            <p className="truncate font-display text-lg tracking-wider">{p.name}</p>
            <p className="font-mono text-[10px] text-mist">€{p.price} · {p.volume}</p>
          </div>
          <button
            type="button"
            onClick={addToCart}
            className="ml-auto shrink-0 bg-alpine px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-white"
          >
            {t.common.addToCart}
          </button>
        </div>
      </div>
    </main>
  );
}
