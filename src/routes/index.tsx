import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import heroImg from "@/assets/zl-hero-court.jpg";
import bundleImg from "@/assets/zl-bundle.jpg";
import superfoodImg from "@/assets/superfood-hero-kaffee.jpg";
import { products, BUNDLE, type Product } from "@/content/products";
import { signatureProduct } from "@/content/signature";
import { EDITORIAL_ALT, EDITORIAL_IMAGES } from "@/content/editorial";
import { journalArticles } from "@/content/journal";
import { homeFunnelCopy } from "@/content/homeFunnel";
import { homeBriefCopy } from "@/content/homeBrief";
import { ART_HERO } from "@/content/art";
import { useCart } from "@/lib/cart";
import { useT, useLocale } from "@/i18n/LocaleProvider";
import { RevealSection } from "@/components/site/RevealSection";
import { EditorialChapter, EvidenceStrip } from "@/components/site/EditorialEvidence";
import { RoutineFinder } from "@/components/site/RoutineFinder";
import { AtmosphereBand } from "@/components/site/AtmosphereBand";
import { ZoneMap } from "@/components/site/ZoneMap";
import { CursorGlow } from "@/components/motion/CursorGlow";
import { StaggerWords } from "@/components/motion/StaggerWords";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { HoverMedia } from "@/components/motion/HoverMedia";
import { HeroSignature } from "@/components/motion/HeroSignature";
import { useSharedTransitionName, useViewTransitionLinkProps } from "@/lib/viewTransition";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { ScrollTone } from "@/components/motion/ScrollTone";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { useAddToCart } from "@/hooks/useAddToCart";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZONES LAB™ — Applied Performance Systems" },
      { name: "description", content: "Sechs Linien im ZONES LAB™ System: AX Cosmetics, OLF-01 Signature, ZONES Fabrics, Superfood Kaffee, kuratierte Accessories und die Art Collaboration ZONES × REZA." },
      { property: "og:title", content: "ZONES LAB™ — Applied Performance Systems" },
      { property: "og:description", content: "Sechs präzise Linien für Haut, Duft, Faser, Kaffee, Ritual und Kunst." },
      { name: "twitter:description", content: "Sechs präzise Linien für Haut, Duft, Faser, Kaffee, Ritual und Kunst." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative overflow-hidden bg-void text-foreground">
      {/* Motion-Budget Homepage (max. 3 scroll-linked): 1) ScrollProgress
          2) ParallaxLayer (Hero + Atmosphere-Bänder, IO-gated) 3) ScrollTone */}
      <ScrollProgress />
      <ScrollTone />
      <Hero />
      <LineSelector />
      <AtmosphereBand image="pool" ratio="aspect-[21/9]" caption="ATMOSPHERE · ZONES LAB SYSTEM" parallax />
      <QualityIndex />
      <AtmosphereBand image="track" ratio="aspect-[21/9]" caption="ATMOSPHERE · AX PROTOCOL" parallax />
      <Protocol />
      {/* Motion Phase 3.2 — Zone-Map (Hover/Klick, nicht scroll-linked) */}
      <ZoneMap />
      <HeroProducts />
      <StartGuide />
      <AtmosphereBand image="ridge" ratio="aspect-[21/9]" caption="ATMOSPHERE · FULL SYSTEM" parallax />
      <BundleOffer />
      <LifestyleRitual />
      <ArtCollab />
      <AtmosphereBand image="court" ratio="aspect-[21/9]" caption="ATMOSPHERE · ZONES JOURNAL" parallax />
      <JournalTeaser />
      <ClubCapture />

      <FinalCta />
    </main>
  );
}

const chapterLabel = (value: string) => value.split(" / ").slice(-1)[0];


function Hero() {
  const t = useT();
  const { locale } = useLocale();
  const hero = homeBriefCopy[locale].hero;
  return (
    <section className="grain relative min-h-[92svh] overflow-hidden border-b border-line">
      {/* 2.1 — Bildmehrebenen: Hintergrund langsam, Wash-Ebene schneller */}
      <ParallaxLayer speed={-0.2} max={90} className="absolute inset-0">
        <img src={heroImg} alt="Vintage-Sandplatz der ZONES LAB Markenwelt" className="absolute inset-0 h-full w-full scale-[1.14] object-cover opacity-60 saturate-[0.72]" loading="eager" fetchPriority="high" decoding="async" />
      </ParallaxLayer>
      <ParallaxLayer speed={0.06} max={40} className="absolute inset-0">
        <div className="hero-wash absolute inset-0" />
      </ParallaxLayer>
      {/* Phase 3.3 — Signature-Element: einmaliger Linien-Aufbau, danach Ruhe */}
      <HeroSignature className="absolute right-[-14%] top-1/2 h-[78vmin] w-[78vmin] -translate-y-1/2 opacity-70 md:right-[2%] md:h-[62vmin] md:w-[62vmin]" />
      <CursorGlow />
      <div className="relative mx-auto grid min-h-[92svh] max-w-[1600px] content-end gap-8 px-6 pb-8 pt-24 md:grid-cols-12 md:gap-12 md:px-12 md:pb-14 md:pt-36">
        <div className="md:col-span-9">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 shrink-0 bg-heritage" />
            <span className="label">{t.home.systemOnline}</span>
          </div>
          <h1 className="mt-6 font-display text-[clamp(62px,12vw,196px)] leading-[0.78] md:mt-8">
            <StaggerWords as="span" className="block" text={hero.line1} />
            <StaggerWords as="span" className="block" text={hero.line2} delay={180} />
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-silver md:mt-8 md:text-xl">{hero.subline}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-8">
            <MagneticButton asChild className="h-12 rounded-none bg-alpine px-7 text-xs uppercase text-primary-foreground shadow-none hover:bg-heritage"><Link to="/products">{hero.primary} →</Link></MagneticButton>
            <Button asChild variant="outline" className="h-12 rounded-none border-line-mid bg-void/70 px-7 text-xs uppercase text-silver shadow-none hover:border-alpine hover:bg-void"><Link to="/protocol">{hero.secondary} →</Link></Button>
            <Button asChild variant="outline" className="h-12 rounded-none border-line-mid bg-void/70 px-7 text-xs uppercase text-silver shadow-none hover:border-alpine hover:bg-void"><Link to="/accessories">{hero.tertiary} →</Link></Button>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-line-mid pt-5 sm:flex-row sm:items-center sm:justify-between md:col-span-12">
          <span className="label">AX COSMETICS · OLF-01 SIGNATURE · ZONES FABRICS · SUPERFOOD · ACCESSORIES · ZONES × REZA</span>
          <span className="label shrink-0">{t.common.scroll} ↓</span>
        </div>
      </div>
    </section>
  );
}

function LineSelector() {
  const { locale } = useLocale();
  const copy = homeFunnelCopy[locale];
  const cards = [
    { to: "/products", image: EDITORIAL_IMAGES.archiveCosmetics, alt: EDITORIAL_ALT.archiveCosmetics[locale], featured: true },
    { to: "/signature/$slug", params: { slug: signatureProduct.slug }, image: signatureProduct.variants[0].img, alt: signatureProduct.name },
    { to: "/shield-layer", image: EDITORIAL_IMAGES.archiveFabrics, alt: EDITORIAL_ALT.archiveFabrics[locale] },
    { to: "/superfood", image: superfoodImg, alt: "ZONES Superfood" },
    { to: "/accessories", image: EDITORIAL_IMAGES.archiveAccessories, alt: EDITORIAL_ALT.archiveAccessories[locale] },
    { to: "/art", image: ART_HERO, alt: "ZONES × REZA — Art Collaboration in Vorbereitung" },
  ];
  return (
    <RevealSection className="border-b border-line bg-void py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <EditorialChapter index="002" eyebrow={chapterLabel(copy.lineEyebrow)} title={copy.lineTitle} lead={copy.lineLead} />
        <div className="mt-12 grid gap-px bg-line-mid md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => {
            const text = copy.lines[index];
            const className = `group relative flex min-h-[430px] flex-col overflow-hidden bg-alpine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-alpine ${card.featured ? "md:min-h-[620px] xl:col-span-2 xl:row-span-2" : ""}`;
            const content = <><img src={card.image} alt={card.alt} className="absolute inset-0 h-full w-full object-cover saturate-[0.76] transition-transform duration-[1400ms] group-hover:scale-[1.04]" loading="lazy" decoding="async" /><div className="editorial-shade absolute inset-0" /><div className="relative mt-auto flex min-h-[235px] flex-col p-6 text-primary-foreground md:p-8"><p className="label !text-primary-foreground/80">{text.eyebrow}</p><h3 className={`mt-4 text-balance font-display leading-none ${card.featured ? "text-5xl md:text-7xl" : "text-4xl"}`}>{text.title}</h3><p className="mt-4 max-w-lg text-sm text-primary-foreground">{text.body}</p><span className="route-card-link mt-auto border-t border-primary-foreground/30 pt-5 !text-primary-foreground">{text.cta} →</span></div></>;
            return card.params ? <Link key={text.title} to="/signature/$slug" params={card.params} className={className}>{content}</Link> : <Link key={text.title} to={card.to} className={className}>{content}</Link>;
          })}
        </div>
      </div>
    </RevealSection>
  );
}

function QualityIndex() {
  const { locale } = useLocale();
  const copy = homeBriefCopy[locale].quality;
  return (
    <RevealSection className="border-b border-primary-foreground/20 bg-alpine py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="label !text-primary-foreground/70">{chapterLabel(copy.eyebrow)}</p>
            <h2 className="mt-5 text-balance font-display text-[clamp(46px,7.5vw,104px)] leading-[0.88]">{copy.title}</h2>
          </div>
          <p className="text-primary-foreground/80 md:col-span-4">{copy.lead}</p>
        </div>
        <div className="mt-12 grid gap-px bg-primary-foreground/20 sm:grid-cols-2 xl:grid-cols-4">
          {copy.items.map((item, index) => (
            <div key={item.label} className="bg-alpine p-6 md:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-primary-foreground/60">{String(index + 1).padStart(2, "0")}</span>
                <span className="label !text-primary-foreground/60">ZL / INDEX</span>
              </div>
              <p className="mt-6 font-display text-3xl leading-none md:text-4xl">{item.label}</p>
              <p className="mt-4 text-sm text-primary-foreground/80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

function StartGuide() {
  const { locale } = useLocale();
  const copy = homeBriefCopy[locale].start;
  const [answer, setAnswer] = useState<"sensitive" | "intense" | null>(null);
  const pick = answer ? copy[answer] : null;
  const slug = answer === "sensitive" ? "sensitive" : "intense";
  return (
    <RevealSection className="border-b border-line bg-titanium py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <EditorialChapter index="006" eyebrow={chapterLabel(copy.eyebrow)} title={copy.title} lead={copy.lead} />
        <div className="mt-12 border border-line-mid bg-void p-7 md:p-12">
          <p className="font-display text-3xl leading-tight md:text-5xl">{copy.question}</p>
          {!pick ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button type="button" onClick={() => setAnswer("sensitive")} className="h-12 rounded-none bg-alpine px-8 text-xs uppercase text-primary-foreground shadow-none hover:bg-heritage">{copy.yes}</Button>
              <Button type="button" variant="outline" onClick={() => setAnswer("intense")} className="h-12 rounded-none border-line-mid px-8 text-xs uppercase text-silver shadow-none hover:border-alpine">{copy.no}</Button>
            </div>
          ) : (
            <div className="mt-8 border-t border-line pt-8">
              <h3 className="font-display text-4xl leading-none md:text-5xl">{pick.title}</h3>
              <p className="mt-4 max-w-xl text-silver">{pick.body}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="h-12 rounded-none bg-alpine px-7 text-xs uppercase text-primary-foreground shadow-none hover:bg-heritage"><Link to="/products/$slug" params={{ slug }}>{pick.cta} →</Link></Button>
                <Button type="button" variant="outline" onClick={() => setAnswer(null)} className="h-12 rounded-none border-line-mid px-7 text-xs uppercase text-silver shadow-none hover:border-alpine">{copy.restart}</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </RevealSection>
  );
}

function Protocol() {
  const { locale } = useLocale(); const copy = homeFunnelCopy[locale]; const phases = ["PREP", "ENGAGE", "RECOVER", "FINISH"] as const;
  return <RevealSection className="border-b border-line bg-titanium py-20 md:py-28"><div className="mx-auto max-w-[1600px] px-6 md:px-12"><EditorialChapter index="004" eyebrow={chapterLabel(copy.protocolEyebrow)} title={copy.protocolTitle} lead={copy.protocolLead} /><div className="mt-12"><EvidenceStrip items={phases.map((phase) => ({ value: phase, label: `${String(products.filter((product) => product.step === phase).length).padStart(2, "0")} ${copy.module}` }))} /></div><div className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 md:flex-row md:items-center"><RoutineFinder /><Button asChild className="h-12 rounded-none bg-alpine px-7 text-xs uppercase text-primary-foreground shadow-none hover:bg-heritage"><Link to="/products">{copy.protocolCta} →</Link></Button></div></div></RevealSection>;
}

function HeroProducts() {
  const { locale } = useLocale(); const copy = homeFunnelCopy[locale]; const t = useT(); const addToCart = useAddToCart();
  // Phase 3.6 — Shared-Element-Übergang (nur bei Browser-Support + Motion erlaubt)
  const vt = useViewTransitionLinkProps();
  const modules = ["intense", "sensitive", "reset", "powder"].map((slug) => products.find((product) => product.slug === slug)).filter((product): product is Product => Boolean(product));
  if (modules.length < 4) return null;
  return <RevealSection className="border-b border-line bg-void py-20 md:py-28"><div className="mx-auto max-w-[1600px] px-6 md:px-12"><EditorialChapter index="005" eyebrow={chapterLabel(copy.productsEyebrow)} title={copy.productsTitle} lead={copy.productsLead} /><div className="mt-12 grid gap-px bg-line-mid sm:grid-cols-2 xl:grid-cols-4">{modules.map((product) => <HomeProductCard key={product.slug} vtSlug={product.slug} product={product} hoverImg={product.mockupImages?.[0]} add={(event) => addToCart(event, { id: product.slug, kind: "product", name: product.name, price: product.price, img: product.img, meta: `${product.sku} · ${product.volume}` })} href={<Link {...vt} to="/products/$slug" params={{ slug: product.slug }} className="absolute inset-0" aria-label={product.name} />} buttonLabel={t.common.addToCart} />)}</div></div></RevealSection>;
}


type CardProduct = Pick<Product, "name" | "sku" | "img" | "price" | "volume">;
function HomeProductCard({ product, hoverImg, add, href, buttonLabel, vtSlug }: { vtSlug?: string; product: CardProduct | { name: string; sku: string; img: string; price: number; volume?: string; format?: string }; hoverImg?: string; add: (event: { currentTarget: Element }) => void; href: ReactNode; buttonLabel: string }) {
  const size = "volume" in product ? product.volume : "format" in product ? product.format : "";
  const vtName = useSharedTransitionName("product", vtSlug);
  return <article className="group flex min-w-0 flex-col bg-void"><HoverMedia src={product.img} hoverSrc={hoverImg} alt={product.name} vtName={vtName} className="aspect-[4/5] border-b border-line">{href}</HoverMedia><div className="flex flex-1 flex-col p-6"><div className="flex items-start justify-between gap-3"><p className="label">{product.sku}</p><span className="font-mono text-xs text-mist">{size}</span></div><h3 className="mt-3 text-balance font-display text-3xl leading-none">{product.name}</h3><div className="card-cta mt-auto flex items-center justify-between gap-4 border-t border-line pt-6"><span className="font-display text-3xl">€{product.price}</span><MagneticButton type="button" onClick={add} className="relative z-10 h-auto rounded-none bg-alpine px-4 py-3 text-xs text-primary-foreground shadow-none hover:bg-heritage">{buttonLabel}</MagneticButton></div></div></article>;
}

function BundleOffer() {
  const { locale } = useLocale(); const copy = homeFunnelCopy[locale]; const t = useT(); const addToCart = useAddToCart(); const saving = (BUNDLE.saves / BUNDLE.items.length).toFixed(2).replace(".", locale === "en" ? "." : ",");
  return <RevealSection className="border-b border-line bg-titanium py-20 md:py-28"><div className="mx-auto grid max-w-[1600px] gap-px bg-line-mid md:grid-cols-12"><div className="relative min-h-[420px] overflow-hidden bg-void md:col-span-7"><img src={bundleImg} alt="The AX Protocol Bundle" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-[1.03]" loading="lazy" decoding="async" /></div><div className="flex flex-col bg-void p-7 md:col-span-5 md:p-12"><p className="label text-heritage">{copy.bundleEyebrow}</p><h2 className="mt-5 text-balance font-display text-[clamp(48px,7vw,94px)] leading-[0.9]">{copy.bundleTitle}</h2><p className="mt-6 max-w-lg text-silver">{copy.bundleLead}</p><dl className="mt-8 grid grid-cols-2 gap-px bg-line-mid"><div className="bg-titanium p-5"><dt className="label">SET</dt><dd className="mt-3 font-display text-4xl">€{BUNDLE.price}</dd></div><div className="bg-titanium p-5"><dt className="label">{copy.perModule}</dt><dd className="mt-3 font-display text-4xl">€{saving}</dd></div></dl><ul className="mt-8 space-y-3">{BUNDLE.items.map((item) => <li key={item} className="border-t border-line pt-3 font-mono text-xs text-silver">◆ {item}</li>)}</ul><MagneticButton type="button" onClick={(event) => addToCart(event, { id: BUNDLE.slug, kind: "bundle", name: BUNDLE.name, price: BUNDLE.price, img: bundleImg, meta: BUNDLE.items.join(" · ") })} className="mt-8 h-12 rounded-none bg-alpine px-7 text-xs uppercase text-primary-foreground shadow-none hover:bg-heritage">{t.common.addBundleToCart}</MagneticButton></div></div></RevealSection>;
}

function LifestyleRitual() {
  const { locale } = useLocale(); const copy = homeFunnelCopy[locale];
  return <RevealSection className="border-b border-line bg-void"><div className="mx-auto grid max-w-[1600px] gap-px bg-line-mid md:grid-cols-12"><figure className="relative min-h-[520px] overflow-hidden bg-alpine md:col-span-7"><img src={EDITORIAL_IMAGES.manifesto} alt={EDITORIAL_ALT.manifesto[locale]} className="absolute inset-0 h-full w-full object-cover saturate-[0.76] transition-transform duration-[1800ms] hover:scale-[1.04]" loading="lazy" decoding="async" /><div className="editorial-shade absolute inset-0" /><h2 className="absolute bottom-8 left-6 right-6 text-balance font-display text-[clamp(60px,10vw,150px)] leading-[0.82] text-primary-foreground md:left-10">{copy.ritualTitle}</h2></figure><div className="grid gap-px bg-line-mid sm:grid-cols-3 md:col-span-5 md:grid-cols-1"><figure className="min-h-[260px] overflow-hidden bg-void"><img src={EDITORIAL_IMAGES.band1} alt={EDITORIAL_ALT.band1[locale]} className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-[1.04]" loading="lazy" decoding="async" /></figure><div className="grid grid-cols-2 gap-px bg-line-mid"><figure className="min-h-[260px] overflow-hidden bg-void"><img src={EDITORIAL_IMAGES.band2} alt={EDITORIAL_ALT.band2[locale]} className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-[1.04]" loading="lazy" decoding="async" /></figure><figure className="min-h-[260px] overflow-hidden bg-void"><img src={EDITORIAL_IMAGES.phaseRecover} alt={EDITORIAL_ALT.phaseRecover[locale]} className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-[1.04]" loading="lazy" decoding="async" /></figure></div></div></div></RevealSection>;
}

function ArtCollab() {
  const { locale } = useLocale();
  const copy = homeBriefCopy[locale].art;
  return (
    <RevealSection className="border-b border-line bg-void py-14 md:py-20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid items-center gap-8 border border-line-mid bg-titanium p-6 md:grid-cols-12 md:p-8">
          <figure className="relative aspect-[16/9] overflow-hidden bg-alpine md:col-span-4 md:aspect-[4/3]">
            <img src={ART_HERO} alt={copy.title} className="absolute inset-0 h-full w-full object-cover saturate-[0.7] transition-transform duration-[1600ms] hover:scale-[1.04]" loading="lazy" decoding="async" />
          </figure>
          <div className="md:col-span-8">
            <div className="flex flex-wrap items-center gap-3">
              <p className="label text-heritage">{chapterLabel(copy.eyebrow)}</p>
              <span className="border border-line-mid px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">{copy.badge}</span>
            </div>
            <h2 className="mt-4 text-balance font-display text-[clamp(34px,4.5vw,58px)] leading-[0.92]">{copy.title}</h2>
            <p className="mt-4 max-w-xl text-silver">{copy.lead}</p>
            <Link to="/art" className="route-card-link mt-6 inline-flex border-t border-line pt-4">{copy.cta} →</Link>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

function ClubCapture() {
  const { locale } = useLocale(); const copy = homeFunnelCopy[locale]; const [submitted, setSubmitted] = useState(false); const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };
  return <RevealSection className="border-b border-primary-foreground/20 bg-alpine py-16 text-primary-foreground md:py-20"><div className="mx-auto grid max-w-[1600px] gap-8 px-6 md:grid-cols-12 md:items-end md:px-12"><div className="md:col-span-7"><p className="label !text-primary-foreground/70">{copy.clubEyebrow}</p><h2 className="mt-4 text-balance font-display text-[clamp(48px,7vw,92px)] leading-[0.9]">{copy.clubTitle}</h2><p className="mt-5 max-w-2xl text-primary-foreground/80">{copy.clubLead}</p></div><div className="md:col-span-5">{submitted ? <p role="status" className="border-t border-primary-foreground/30 pt-5 text-primary-foreground">{copy.clubSuccess}</p> : <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row"><label className="sr-only" htmlFor="club-email">{copy.clubPlaceholder}</label><input id="club-email" required type="email" placeholder={copy.clubPlaceholder} className="min-h-12 min-w-0 flex-1 border border-primary-foreground/40 bg-transparent px-4 text-primary-foreground placeholder:text-primary-foreground/65 focus:border-primary-foreground focus:outline-none" /><Button type="submit" className="min-h-12 rounded-none bg-void px-6 text-xs uppercase text-silver shadow-none hover:bg-ice">{copy.clubCta} →</Button></form>}</div></div></RevealSection>;
}

function JournalTeaser() {
  const { locale } = useLocale(); const copy = homeFunnelCopy[locale]; const images = [EDITORIAL_IMAGES.macroOil, EDITORIAL_IMAGES.phaseEngage, superfoodImg];
  return <RevealSection className="border-b border-line bg-titanium py-20 md:py-28"><div className="mx-auto max-w-[1600px] px-6 md:px-12"><EditorialChapter index="009" eyebrow={chapterLabel(copy.journalEyebrow)} title={copy.journalTitle} /><div className="mt-12 grid gap-px bg-line-mid md:grid-cols-3">{copy.journalCards.map((card, index) => <Link key={card.title} to="/journal/$slug" params={{ slug: journalArticles[index].slug }} className="group flex flex-col bg-void"><div className="aspect-[4/3] overflow-hidden"><img src={images[index]} alt="" className="h-full w-full object-cover saturate-[0.76] transition-transform duration-[1400ms] group-hover:scale-[1.04]" loading="lazy" decoding="async" /></div><div className="flex min-h-[250px] flex-col p-6"><p className="label">{card.eyebrow}</p><h3 className="mt-4 font-display text-4xl leading-none">{card.title}</h3><p className="mt-4 text-sm text-silver">{card.body}</p><span className="route-card-link mt-auto border-t border-line pt-5">{copy.journalCta} →</span></div></Link>)}</div><Button asChild variant="outline" className="mt-8 h-12 rounded-none border-line-mid bg-transparent px-7 text-xs uppercase text-silver shadow-none hover:border-alpine hover:bg-transparent"><Link to="/journal">{copy.journalCta} →</Link></Button></div></RevealSection>;
}

function FinalCta() {
  const { locale } = useLocale(); const copy = homeFunnelCopy[locale];
  return <RevealSection className="bg-alpine py-24 text-center text-primary-foreground md:py-36"><div className="mx-auto max-w-[1100px] px-6"><h2 className="text-balance font-display text-[clamp(64px,11vw,160px)] leading-[0.84]">{copy.finalTitle}</h2><Button asChild className="mt-10 h-14 rounded-none bg-void px-8 text-xs uppercase text-silver shadow-none hover:bg-ice"><Link to="/products">{copy.finalCta} →</Link></Button></div></RevealSection>;
}

