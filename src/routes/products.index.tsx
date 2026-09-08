import { createFileRoute, Link } from "@tanstack/react-router";
import { productsByPriority, BUNDLE, type Product } from "@/content/products";
import bundleImg from "@/assets/zl-bundle.jpg";
import { useReveal } from "@/hooks/useReveal";
import { useEffect, useState } from "react";
import { useAddToCart } from "@/hooks/useAddToCart";
import { useMagnetic } from "@/hooks/useMagnetic";
import { HoverMedia } from "@/components/motion/HoverMedia";
import { useSharedTransitionName, useViewTransitionLinkProps } from "@/lib/viewTransition";
import { useT, useLocale } from "@/i18n/LocaleProvider";
import { RoutineFinder } from "@/components/site/RoutineFinder";
import { EDITORIAL_IMAGES } from "@/content/editorial";
import { Button } from "@/components/ui/button";
import { signatureProduct, type SignatureVariant } from "@/content/signature";
import { CrossSell } from "@/components/site/CrossSell";
type ProtocolPhase = Product["step"];
type CollectionFilter = "All" | ProtocolPhase | "Signature";

const PHASES: ProtocolPhase[] = ["PREP", "ENGAGE", "RECOVER", "FINISH"];
const FILTERS: CollectionFilter[] = ["All", ...PHASES, "Signature"];

const REFILL_SLUGS = new Set(["hamamelis-mist", "pre-shave-oil"]);
const PHASE_IMAGES: Record<ProtocolPhase, string> = {
  PREP: EDITORIAL_IMAGES.phasePrep,
  ENGAGE: EDITORIAL_IMAGES.phaseEngage,
  RECOVER: EDITORIAL_IMAGES.phaseRecover,
  FINISH: EDITORIAL_IMAGES.phaseFinish,
};
const BUNDLE_COMPARE_AT = BUNDLE.items.reduce((total, item) => {
  const product = productsByPriority.find((candidate) => candidate.name === item);
  return total + (product?.price ?? 0);
}, 0);

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — ZONES LAB™ AX Protocol" },
      { name: "description", content: "SODA-IN-OIL DEODORANT BALM · NEURO-CALM DEODORANT BALM · RESET PEELING BALM · FINISHING POWDER · HAMAMELIS MIST · PRE-SHAVE OIL · LIP SCULPT BALM. The functional modules of the AX Protocol." },
      { property: "og:title", content: "Products — ZONES LAB™" },
      { property: "og:description", content: "Seven engineered modules. One barrier-aligned system." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [filter, setFilter] = useState<CollectionFilter>("All");
  const [activePhase, setActivePhase] = useState<ProtocolPhase>("PREP");
  const addToCart = useAddToCart();
  const bundleMagnetic = useMagnetic<HTMLButtonElement>();
  const t = useT();
  const { locale } = useLocale();
  const editorial = {
    de: { modules: "Module", signature: "Außerhalb des Protokolls", signatureLead: "OLF-01 gehört zur Kosmetikwelt, bleibt aber bewusst außerhalb der AX-Nummerierung: gleiche technische Haltung, eine olfaktorische Aufgabe.", phase: "Protokollphase" },
    en: { modules: "Modules", signature: "Outside the protocol", signatureLead: "OLF-01 belongs to the cosmetics world while deliberately staying outside AX numbering: the same technical attitude, an olfactory purpose.", phase: "Protocol phase" },
    fr: { modules: "Modules", signature: "Hors protocole", signatureLead: "OLF-01 appartient à l’univers cosmétique tout en restant hors de la numérotation AX : même rigueur technique, vocation olfactive.", phase: "Phase du protocole" },
    it: { modules: "Moduli", signature: "Fuori dal protocollo", signatureLead: "OLF-01 appartiene al mondo cosmetico ma resta volutamente fuori dalla numerazione AX: stesso rigore tecnico, funzione olfattiva.", phase: "Fase del protocollo" },
    nl: { modules: "Modules", signature: "Buiten het protocol", signatureLead: "OLF-01 hoort bij de cosmeticawereld maar blijft bewust buiten de AX-nummering: dezelfde technische houding, een olfactorische functie.", phase: "Protocolfase" },
    es: { modules: "Módulos", signature: "Fuera del protocolo", signatureLead: "OLF-01 pertenece al universo cosmético, aunque queda deliberadamente fuera de la numeración AX: la misma actitud técnica, una función olfativa.", phase: "Fase del protocolo" },
  }[locale];
  const visiblePhases = filter === "All" ? PHASES : filter === "Signature" ? [] : [filter];
  const showSignature = filter === "All" || filter === "Signature";
  const filterCount = (item: CollectionFilter) =>
    item === "All"
      ? productsByPriority.length + signatureProduct.variants.length
      : item === "Signature"
        ? signatureProduct.variants.length
        : productsByPriority.filter((product) => product.step === item).length;


  useEffect(() => {
    if (typeof window === "undefined") return;
    const handle = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
       if (hash === "powder") setFilter("FINISH");
       if (hash === "lip-sculpt") setFilter("RECOVER");
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };
    handle();
    window.addEventListener("hashchange", handle);
    return () => window.removeEventListener("hashchange", handle);
  }, []);

  useEffect(() => {
    if (filter !== "All" || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const phase = visible?.target.getAttribute("data-phase") as ProtocolPhase | null;
        if (phase) setActivePhase(phase);
      },
      { rootMargin: "-22% 0px -58% 0px", threshold: [0, 0.2, 0.5] },
    );
    PHASES.forEach((phase) => {
      const section = document.getElementById(`phase-${phase.toLowerCase()}`);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [filter]);

  const filterLabel = (item: CollectionFilter) => item === "All" ? t.productsPage.categories.all : item === "Signature" ? t.nav.signature : item;

  return (
    <main className="bg-void pt-32 md:pt-40">
      <header className="border-b border-line">
        <div className="mx-auto max-w-[1600px] px-6 pb-20 md:px-12">
          <p className="label">{t.productsPage.eyebrow}</p>
          <h1 className="mt-6 font-display text-[clamp(56px,11vw,180px)] leading-[0.9] tracking-wider">
            {t.productsPage.titleA}
            <br />
            <span className="text-mist">{t.productsPage.titleB}</span>
          </h1>
          <p className="mt-10 max-w-xl text-silver md:text-lg">{t.productsPage.lead}</p>

          <div className="mt-10 max-w-5xl">
            <RoutineFinder />
          </div>
        </div>
      </header>

      <div data-filter-bar className="sticky top-16 z-30 border-b border-line bg-void/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] gap-2 overflow-x-auto px-6 py-3 md:px-12 md:py-4">
          {FILTERS.map((item) => {
            const isActive = filter === item || (filter === "All" && item === activePhase);
            return (
            <Button
              key={item}
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setFilter(item);
                if (item !== "All" && item !== "Signature") setActivePhase(item);
              }}
              aria-pressed={filter === item}
              className={`label h-auto shrink-0 rounded-none px-4 py-2 shadow-none transition-colors ${isActive ? "border-alpine bg-alpine text-primary-foreground" : "border-line-mid bg-transparent hover:border-alpine hover:bg-transparent hover:!text-silver"}`}
            >
              {filterLabel(item)} <span className="opacity-60">{String(filterCount(item)).padStart(2, "0")}</span>
            </Button>
          )})}
        </div>
      </div>

      <div className="bg-titanium">
        {visiblePhases.map((phase, phaseIndex) => {
          const phaseProducts = productsByPriority.filter((product) => product.step === phase);
          const phaseCopy = t.home.protocolSteps[PHASES.indexOf(phase)];
          return (
            <section key={phase} id={`phase-${phase.toLowerCase()}`} data-phase={phase} aria-labelledby={`heading-${phase.toLowerCase()}`} className="scroll-mt-32 border-b border-line py-16 md:py-24">
              <div className="mx-auto max-w-[1600px] px-6 md:px-12">
                <div className="mb-10 grid gap-px bg-line-mid lg:grid-cols-12">
                  <div className="relative min-h-[340px] overflow-hidden bg-void lg:col-span-7">
                    <img src={PHASE_IMAGES[phase]} alt="" className="absolute inset-0 h-full w-full object-cover saturate-[0.72]" loading="lazy" decoding="async" />
                    <div className="editorial-shade absolute inset-0" />
                    <p className="label absolute bottom-6 left-6 !text-primary-foreground/75">0{phaseIndex + 1} · AX PROTOCOL</p>
                  </div>
                  <div className="flex min-w-0 flex-col bg-void p-7 lg:col-span-5 lg:p-10">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4"><p className="label text-mist">{editorial.phase} · 0{phaseIndex + 1}</p><p className="label shrink-0">{String(phaseProducts.length).padStart(2, "0")}</p></div>
                    <h2 id={`heading-${phase.toLowerCase()}`} className="mt-auto text-balance font-display text-[clamp(44px,6vw,82px)] leading-none">{phase}</h2>
                    <p className="mt-5 max-w-md text-silver">{phaseCopy?.d}</p>
                    <div className="mt-7 border-t border-line pt-5"><p className="label">{String(phaseProducts.length).padStart(2, "0")} {editorial.modules}</p></div>
                  </div>
                </div>
                <div className="grid gap-px bg-line-mid sm:grid-cols-2">
                  {phaseProducts.map((product) => (
                    <ProductCard key={product.slug} p={product} t={t} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {showSignature && (
          <section aria-labelledby="category-signature" className="border-b border-line bg-void py-16 md:py-24">
            <div className="mx-auto max-w-[1600px] px-6 md:px-12">
              <div className="mb-10 grid gap-px bg-line-mid lg:grid-cols-12">
                <div className="relative min-h-[380px] overflow-hidden lg:col-span-7"><img src={signatureProduct.variants[0].img} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" /><div className="editorial-shade absolute inset-0" /><p className="label absolute bottom-6 left-6 !text-primary-foreground/75">AX COSMETICS · OLF-01</p></div>
                 <div className="flex flex-col bg-void p-7 lg:col-span-5 lg:p-10"><p className="label text-heritage">{editorial.signature}</p><h2 id="category-signature" className="mt-auto font-display text-[clamp(48px,6vw,82px)] leading-none">{t.nav.signature}</h2><p className="mt-5 text-silver">{editorial.signatureLead}</p><div className="mt-8 border-t border-line pt-5"><span className="label">OLF-01 · 02 RANGES · 20% PARFUM · 10 ML</span></div></div>
              </div>
              <div className="grid gap-px bg-line-mid sm:grid-cols-2">
                {signatureProduct.variants.map((variant) => (
                  <SignatureCard key={variant.id} variant={variant} t={t} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>



      <section id="bundle" className="border-b border-line bg-void py-24 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-px bg-line-mid px-0 md:grid-cols-12 md:px-0">
          <div className="md:col-span-7 bg-void">
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img src={bundleImg} alt="The AX Protocol Bundle" className="h-full w-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="md:col-span-5 bg-titanium p-10 md:p-16">
            <p className="label !text-alpine">{t.productsPage.bundleEyebrow} · {BUNDLE.slug}</p>
            <h2 className="mt-6 font-display text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-wider">{t.bundle.name}</h2>
            <p className="mt-6 text-silver">{t.bundle.short}</p>
            <ul className="mt-8 grid grid-cols-2 gap-px bg-line-mid">
              {BUNDLE.items.map((it) => (
                <li key={it} className="bg-titanium p-4 font-mono text-[11px] text-silver">◆ {it}</li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-baseline gap-6">
              <span className="font-display text-2xl text-mist line-through decoration-line-mid">€{BUNDLE_COMPARE_AT}</span>
              <span className="font-display text-5xl">€{BUNDLE.price}</span>
              <span className="label">{t.productsPage.bundleSaves(BUNDLE.saves)}</span>
            </div>
            <Button
              type="button"
              {...bundleMagnetic}
              onClick={(event) => addToCart(event, { id: BUNDLE.slug, kind: "bundle", name: BUNDLE.name, price: BUNDLE.price, img: bundleImg, meta: BUNDLE.items.join(" · ") })}
              className="mt-10 h-auto rounded-none bg-alpine px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-primary-foreground shadow-none hover:bg-silver hover:text-void"
            >
              {t.common.addBundleToCart}
            </Button>
          </div>
        </div>
      </section>
      <CrossSell lines={["fabrics", "superfood"]} />
    </main>
  );
}

type ProductCardProps = {
  p: Product;
  t: ReturnType<typeof useT>;
};

function ProductCard({ p, t }: ProductCardProps) {
  const ref = useReveal<HTMLElement>();
  const addToCart = useAddToCart();
  const magnetic = useMagnetic<HTMLButtonElement>();
  const tp = t.products[p.slug as keyof typeof t.products];
  const isRefill = REFILL_SLUGS.has(p.slug);
  const hoverImage = p.mockupImages?.[0];
  // Phase 3.6 — Shared-Element: Karten-Bild morpht zum Detail-Hero
  const vtName = useSharedTransitionName("product", p.slug);
  const vt = useViewTransitionLinkProps();
  return (
    <article id={p.slug} ref={ref} className="reveal group relative flex flex-col bg-void scroll-mt-32">
      <Link {...vt} to="/products/$slug" params={{ slug: p.slug }} className="block">
        <HoverMedia src={p.img} hoverSrc={hoverImage} alt={p.name} vtName={vtName} className="aspect-[4/5] w-full border-b border-line">
          {isRefill && (
            <p data-refill-badge className="label absolute left-4 top-4 border border-alpine bg-void/85 px-3 py-2 text-alpine backdrop-blur">
              ↻ {t.productsPage.refillBadge} · {t.productsPage.refillAction}
            </p>
          )}
        </HoverMedia>
      </Link>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <p className="label">{p.sku} · {p.step}</p>
          <span className="font-mono text-[13px] text-mist">{p.volume}</span>
        </div>
        <h2 className="mt-3 font-display text-[32px] leading-none tracking-wider md:text-[40px]">{p.name}</h2>
        <p className="mt-3 text-base text-silver line-clamp-2">{tp.short}</p>
        <div className="card-cta mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
          <div><span className="font-display text-3xl">€{p.price}</span><p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-mist">{t.common.preorder}</p></div>
          <div className="flex gap-2">
            <Button
              {...magnetic}
              type="button"
              onClick={(event) => addToCart(event, { id: p.slug, kind: "product", name: p.name, price: p.price, img: p.img, meta: `${p.sku} · ${p.volume}` })}
              className="h-auto rounded-none bg-alpine px-5 py-3 text-[12px] font-medium tracking-wide text-primary-foreground shadow-none hover:bg-silver hover:text-void"
            >
              {t.common.addToCart}
            </Button>
            <Button asChild variant="outline" className="h-auto rounded-none border-line-mid bg-transparent px-5 py-3 text-[12px] font-medium tracking-wide text-silver shadow-none hover:border-alpine hover:bg-transparent hover:text-alpine">
              <Link to="/products/$slug" params={{ slug: p.slug }}>{t.common.learnMore}</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

function SignatureCard({ variant, t }: { variant: SignatureVariant; t: ProductCardProps["t"] }) {
  const copy = t.signature.variants[variant.id];
  const addToCart = useAddToCart();
  const magnetic = useMagnetic<HTMLButtonElement>();
  const hoverImage = signatureProduct.variants.find((v) => v.id !== variant.id)?.img;
  const vt = useViewTransitionLinkProps();
  const vtName = useSharedTransitionName("signature", variant.id === signatureProduct.variants[0].id ? signatureProduct.slug : undefined);

  return (
    <article className="group flex flex-col bg-void">
      <Link {...vt} to="/signature/$slug" params={{ slug: signatureProduct.slug }} className="block border-b border-line">
        <HoverMedia src={variant.img} hoverSrc={hoverImage} alt={`${signatureProduct.name} — ${copy.name}`} vtName={vtName} className="aspect-[4/5] w-full" />
      </Link>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <p className="label">{signatureProduct.sku} · {copy.name}</p>
          <span className="font-mono text-[13px] text-mist">{signatureProduct.volume}</span>
        </div>
        <h3 className="mt-3 font-display text-[32px] leading-none tracking-wider md:text-[40px]">{signatureProduct.name}</h3>
        <p className="mt-3 text-base text-silver line-clamp-2">{copy.tagline}</p>
        <div className="card-cta mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
          <div><span className="font-display text-3xl">€{signatureProduct.price}</span><p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-mist">{t.common.preorder}</p></div>
          <div className="flex gap-2">
            <Button {...magnetic} type="button" onClick={(event) => addToCart(event, { id: `${signatureProduct.slug}-${variant.id}`, kind: "product", name: signatureProduct.name, price: signatureProduct.price, img: variant.img, meta: `${signatureProduct.sku} · ${copy.name} · ${signatureProduct.volume}` })} className="h-auto rounded-none bg-alpine px-5 py-3 text-[12px] font-medium tracking-wide text-primary-foreground shadow-none hover:bg-silver hover:text-void">{t.common.addToCart}</Button>
            <Button asChild variant="outline" className="h-auto rounded-none border-line-mid bg-transparent px-5 py-3 text-[12px] font-medium tracking-wide text-silver shadow-none hover:border-alpine hover:bg-transparent hover:text-alpine">
              <Link to="/signature/$slug" params={{ slug: signatureProduct.slug }}>{t.common.learnMore}</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

type SystemCoreCardProps = Pick<ProductCardProps, "p" | "t">;

function SystemCoreCard({ p, t }: SystemCoreCardProps) {
  const tp = t.products[p.slug as keyof typeof t.products];
  const addToCart = useAddToCart();
  const magnetic = useMagnetic<HTMLButtonElement>();
  const hoverImage = p.mockupImages?.[0];

  return (
    <article data-system-core-product={p.slug} className="group flex flex-col bg-void">
      <Link to="/products/$slug" params={{ slug: p.slug }} className="block border-b border-line">
        <HoverMedia src={p.img} hoverSrc={hoverImage} alt={p.name} className="aspect-[5/4] w-full md:aspect-[4/3]" />
      </Link>
      <div className="flex flex-1 flex-col p-7 md:p-10">
        <div className="flex items-center justify-between gap-4">
          <p className="label text-alpine">{p.sku} · {p.step}</p>
          <span className="font-mono text-[12px] text-mist">{p.volume}</span>
        </div>
        <h3 className="mt-5 max-w-xl font-display text-[clamp(36px,4vw,64px)] leading-[0.92] tracking-wider">{p.name}</h3>
        <p className="mt-5 max-w-xl text-silver md:text-lg">{tp.short}</p>
        <div className="card-cta mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <div><span className="font-display text-4xl">€{p.price}</span><p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-mist">{t.common.preorder}</p></div>
          <div className="flex flex-wrap gap-2">
            <Button
              {...magnetic}
              type="button"
              onClick={(event) => addToCart(event, { id: p.slug, kind: "product", name: p.name, price: p.price, img: p.img, meta: `${p.sku} · ${p.volume}` })}
              className="h-auto rounded-none bg-alpine px-5 py-3 text-[12px] tracking-wide text-primary-foreground shadow-none hover:bg-silver hover:text-void"
            >
              {t.common.addToCart}
            </Button>
            <Button asChild variant="outline" className="h-auto rounded-none border-line-mid bg-transparent px-5 py-3 text-[12px] tracking-wide text-silver shadow-none hover:border-alpine hover:bg-transparent hover:text-alpine">
              <Link to="/products/$slug" params={{ slug: p.slug }}>{t.common.learnMore}</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

