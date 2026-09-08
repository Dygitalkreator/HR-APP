import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import wearHeroImg from "@/assets/zl-wear-hero.jpg";
import { shieldItems, type ShieldItem } from "@/content/shield";
import { useReveal } from "@/hooks/useReveal";
import { useAddToCart } from "@/hooks/useAddToCart";
import { useMagnetic } from "@/hooks/useMagnetic";
import { HoverMedia } from "@/components/motion/HoverMedia";
import { useSharedTransitionName, useViewTransitionLinkProps } from "@/lib/viewTransition";
import { useT, useLocale } from "@/i18n/LocaleProvider";
import { MediaBanner } from "@/components/site/MediaSplit";
import { Button } from "@/components/ui/button";
import { EditorialChapter, EvidenceStrip, ImageCaption } from "@/components/site/EditorialEvidence";
import { CrossSell, TrustBand } from "@/components/site/CrossSell";
import { pageFunnelCopy } from "@/content/pageFunnel";
import { CursorGlow } from "@/components/motion/CursorGlow";


export const Route = createFileRoute("/shield-layer/")({
  head: () => ({
    meta: [
      { title: "ZONES FABRICS — Applied Fiber Science" },
      { name: "description", content: "ZONES FABRICS: applied fiber science for movement and regeneration. Oversized tracksuit, cotton-silk boxer, base-layer tee, and towel set." },
      { property: "og:title", content: "ZONES FABRICS — Applied Fiber Science" },
      { property: "og:description", content: "Applied fiber science: oversized tracksuit, cotton-silk boxer, base-layer tee and towel set in 700 gsm terry." },
      { name: "twitter:title", content: "ZONES FABRICS — Applied Fiber Science" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: wearHeroImg },
      { name: "twitter:image", content: wearHeroImg },
    ],
  }),
  component: ShieldPage,
});

function ShieldCard({ item, index }: { item: ShieldItem; index: number }) {
  const addToCart = useAddToCart();
  const magnetic = useMagnetic<HTMLButtonElement>();
  const t = useT();
  const ref = useReveal<HTMLDivElement>();
  const [color, setColor] = useState(item.colors?.[0]?.id ?? null);
  const active = item.colors?.find((c) => c.id === color) ?? null;
  const img = active?.img ?? item.img;
  const tr = t.shield[item.slug as keyof typeof t.shield];
  const flip = index % 2 === 1;
  // Phase 3.6 — Shared-Element: Grid-Bild → Detail-Hero
  const vtName = useSharedTransitionName("shield", item.slug);
  const vtLink = useViewTransitionLinkProps();

  return (
    <section id={item.slug} className={`scroll-mt-28 border-b border-line ${index % 2 ? "bg-titanium" : "bg-void"} py-24 md:py-32`}>
      <div ref={ref} className={`reveal mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 md:px-12 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className="grid gap-px bg-line-mid md:col-span-7 md:grid-cols-[2fr_1fr]">
          <HoverMedia vtName={vtName} src={img} hoverSrc={item.lifestyleImages?.[0]} alt={active ? `${item.name} — ${active.label}` : item.name} width={1024} height={1280} className="group aspect-[4/5] w-full bg-void md:aspect-auto" />
          <div className="hidden grid-rows-2 gap-px md:grid">
            {(item.lifestyleImages?.slice(1, 3) ?? []).map((source, imageIndex) => <div key={source} className="overflow-hidden bg-void"><img src={source} alt={`${item.name} detail ${imageIndex + 1}`} className="h-full w-full object-cover" loading="lazy" decoding="async" /></div>)}
          </div>
        </div>
        <div className="md:col-span-5 md:pt-12">
          <p className="label !text-alpine">◆ {item.sku}</p>
          <h2 className="mt-6 font-display text-[clamp(40px,6vw,80px)] leading-[0.95] tracking-wider">{item.name}</h2>
          <p className="mt-4 font-display text-xl text-mist tracking-wider">{tr.tagline}</p>
          <p className="mt-8 max-w-md text-silver">{tr.description}</p>
          <p className="mt-4 font-mono text-xs text-mist">{t.common.techComplex} · {item.tech}</p>
          <dl className="mt-8 grid grid-cols-2 gap-px bg-line-mid">
            {item.benefits.slice(0, 4).map((benefit, benefitIndex) => <div key={benefit} className="bg-void p-4"><dt className="label">0{benefitIndex + 1}</dt><dd className="mt-2 text-sm text-silver">{benefit}</dd></div>)}
          </dl>

          {item.colors && (
            <div className="mt-8">
              <p className="label">{t.common.colorLabel}</p>
              <div className="mt-4 flex gap-3">
                {item.colors.map((c) => (
                  <Button
                    key={c.id}
                    type="button"
                    onClick={() => setColor(c.id)}
                    aria-pressed={color === c.id}
                    variant="outline"
                    className={`h-auto rounded-none bg-transparent px-4 py-3 font-mono text-[11px] tracking-[0.14em] shadow-none ${color === c.id ? "border-alpine text-alpine" : "border-line-mid text-silver hover:border-silver hover:bg-transparent"}`}
                  >
                    <span className="h-4 w-4 border border-line-mid" style={{ background: c.swatch }} />
                    {c.label}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="card-cta mt-10 flex flex-wrap items-baseline gap-6">
            <span className="font-display text-4xl">€{item.price}</span>
            <span className="label">{t.common.preorder}</span>
          </div>
          <Button
            {...magnetic}
            type="button"
            onClick={(event) =>
              addToCart(event, {
                id: active ? `shield-${item.slug}-${active.id}` : `shield-${item.slug}`,
                kind: "shield",
                name: active ? `${item.name} · ${active.label}` : item.name,
                price: item.price,
                img,
                meta: item.sku,
              })
            }
            className="mt-8 h-auto rounded-none bg-alpine px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-primary-foreground shadow-none hover:bg-silver hover:text-void"
          >
            {t.common.addToCart} →
          </Button>
          <Button asChild variant="outline" className="mt-3 h-auto rounded-none border-line-mid bg-transparent px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-silver shadow-none hover:border-alpine hover:bg-transparent hover:text-alpine md:ml-4 md:mt-8">
            <Link to="/shield-layer/$slug" params={{ slug: item.slug }} {...vtLink}>{t.common.learnMore} →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ShieldPage() {
  const t = useT();
  const { locale } = useLocale();
  const evidence = [
    { value: "480 GSM", label: shieldItems[0].sku },
    { value: "FLAT SEAM", label: shieldItems[1].sku },
    { value: "GUSSET", label: shieldItems[2].sku },
    { value: "700 GSM", label: shieldItems[3].sku },
  ];
  return (
    <main className="bg-void pt-32 md:pt-40">
      <header className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0">
          <img src={wearHeroImg} alt="ZONES FABRICS oversized tracksuit, cotton-silk boxer, base-layer tee and towel set" className="h-full w-full object-cover opacity-70 scale-[1.04] animate-[drift_20s_ease-in-out_infinite]" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/70 to-void" />
        <CursorGlow />
        </div>
        <div className="relative mx-auto max-w-[1600px] px-6 pb-24 md:px-12">
          <p className="label">{t.shieldPage.eyebrow}</p>
          <h1 className="mt-6 font-display text-[clamp(56px,11vw,200px)] leading-[0.88] tracking-wider">
            {t.shieldPage.titleA}
            <br />
            <span className="text-mist">{t.shieldPage.titleB}</span>
          </h1>
          <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.22em] text-alpine">{t.shieldPage.claim}</p>
          <p className="mt-10 max-w-xl text-silver md:text-lg">{t.shieldPage.lead}</p>
        </div>
      </header>

      <nav aria-label={t.shieldPage.quickNav} className="sticky top-16 z-20 border-b border-line bg-void/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center gap-2 overflow-x-auto px-6 py-3 md:px-12">
          <span className="label mr-3 shrink-0 text-mist">{t.shieldPage.quickNav}</span>
          {shieldItems.map((item) => <a key={item.slug} href={`#${item.slug}`} className="shrink-0 border border-line-mid px-4 py-2 font-mono text-[10px] text-silver transition-colors hover:border-alpine hover:text-alpine">{item.sku} · {item.name.split(" · ")[0]}</a>)}
        </div>
      </nav>

      <TrustBand block={pageFunnelCopy[locale].fabricsTrust} />



      <section className="border-b border-line bg-titanium py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <EditorialChapter index="01" eyebrow="MATERIAL DOSSIER" title="WEIGHT. WEAVE. CONSTRUCTION." lead={t.shieldPage.lead} />
          <div className="mt-12"><EvidenceStrip items={evidence} /></div>
          <div className="mt-px grid gap-px bg-line-mid md:grid-cols-12">
            <div className="relative min-h-[520px] overflow-hidden bg-void md:col-span-8">
              <img src={shieldItems[0].lifestyleImages?.[2] ?? shieldItems[0].img} alt="Heavyweight cotton construction detail" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
              <div className="editorial-shade absolute inset-0" /><ImageCaption dark>FB-01 · 480 GSM ORGANIC COTTON · BRUSHED INNER FACE</ImageCaption>
            </div>
            <div className="grid min-h-[520px] gap-px bg-line-mid md:col-span-4">
              <div className="relative overflow-hidden bg-void"><img src={shieldItems[1].lifestyleImages?.[4] ?? shieldItems[1].img} alt="Cotton-silk textile detail" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" /><div className="editorial-shade absolute inset-0" /><ImageCaption dark>FB-02 · COTTON-SILK · FLAT SEAM</ImageCaption></div>
              <div className="relative overflow-hidden bg-void"><img src={shieldItems[3].lifestyleImages?.[3] ?? shieldItems[3].img} alt="Long-staple cotton terry detail" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" /><div className="editorial-shade absolute inset-0" /><ImageCaption dark>FB-04 · 700 GSM TERRY · 100 × 180 CM</ImageCaption></div>
            </div>
          </div>
        </div>
      </section>

      {shieldItems.map((s, i) => (
        <ShieldCard key={s.slug} item={s} index={i} />
      ))}

      <MediaBanner image="fabrics" ratio="aspect-[21/9]">
        <p className="max-w-xl font-display text-[clamp(24px,3vw,48px)] leading-[1.02] tracking-wider">{t.shieldPage.claim}</p>
      </MediaBanner>


      <section className="bg-void py-24">
        <div className="mx-auto max-w-[1600px] px-6 text-center md:px-12">
          <p className="label">{t.footer.system}</p>
          <h2 className="mt-6 font-display text-[clamp(36px,5vw,72px)] leading-[0.95] tracking-wider">{t.shieldPage.closingTitle}</h2>
          <Button asChild variant="outline" className="mt-10 h-auto rounded-none border-line-mid bg-transparent px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-silver shadow-none hover:border-alpine hover:bg-transparent hover:text-alpine">
            <Link to="/products">{t.common.returnPortfolio}</Link>
          </Button>
        </div>
      </section>
      <CrossSell lines={["cosmetics", "accessories"]} />
    </main>
  );
}
