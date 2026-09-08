import { Link } from "@tanstack/react-router";
import superfoodImg from "@/assets/superfood-hero-kaffee.jpg";
import { EDITORIAL_IMAGES } from "@/content/editorial";
import { pageFunnelCopy, type LineKey } from "@/content/pageFunnel";
import { EvidenceStrip } from "@/components/site/EditorialEvidence";
import { RevealSection } from "@/components/site/RevealSection";
import { useLocale } from "@/i18n/LocaleProvider";

const LINE_META: Record<LineKey, { to: string; image: string }> = {
  cosmetics: { to: "/products", image: EDITORIAL_IMAGES.archiveCosmetics },
  fabrics: { to: "/shield-layer", image: EDITORIAL_IMAGES.archiveFabrics },
  superfood: { to: "/superfood", image: superfoodImg },
  accessories: { to: "/accessories", image: EDITORIAL_IMAGES.archiveAccessories },
};

export function CrossSell({ lines }: { lines: [LineKey, LineKey] }) {
  const { locale } = useLocale();
  const copy = pageFunnelCopy[locale];

  return (
    <RevealSection className="border-t border-line bg-void py-16 md:py-24" ariaLabel={copy.crossSellTitle}>
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="label !text-alpine">◆ {copy.crossSellEyebrow}</p>
          <h2 className="font-display text-[clamp(30px,4vw,56px)] leading-none tracking-wider text-silver">{copy.crossSellTitle}</h2>
        </div>
        <div className="mt-10 grid gap-px bg-line-mid md:grid-cols-2">
          {lines.map((key) => {
            const line = copy.lines[key];
            const meta = LINE_META[key];
            return (
              <Link
                key={key}
                to={meta.to}
                className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden bg-void p-7 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-alpine md:min-h-[400px] md:p-10"
              >
                <img src={meta.image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover saturate-[0.7] transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]" loading="lazy" decoding="async" />
                <div className="editorial-shade absolute inset-0 opacity-95 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/55 to-void/15" />
                <div className="relative">
                  <p className="label !text-primary-foreground/90">{line.eyebrow}</p>
                  <h3 className="mt-4 font-display text-[clamp(34px,5vw,64px)] leading-[0.9] tracking-wider text-primary-foreground">{line.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/95">{line.body}</p>
                  <span className="mt-6 inline-block border-t border-primary-foreground/30 pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-primary-foreground transition-transform duration-500 group-hover:translate-x-1">
                    {copy.crossSellCta} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}

export function TrustBand({ block, inverted = true }: { block: { eyebrow: string; title: string; lead: string; evidence: { value: string; label: string }[] }; inverted?: boolean }) {
  if (!inverted) {
    return (
      <RevealSection className="border-b border-line bg-titanium py-20 md:py-28" ariaLabel={block.title}>
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="label text-heritage">{block.eyebrow}</p>
              <h2 className="mt-5 text-balance font-display text-[clamp(40px,6vw,90px)] leading-[0.9] text-silver">{block.title}</h2>
            </div>
            <p className="text-mist md:col-span-4">{block.lead}</p>
          </div>
          <div className="mt-12"><EvidenceStrip items={block.evidence} /></div>
        </div>
      </RevealSection>
    );
  }

  return (
    <RevealSection className="border-b border-primary-foreground/20 bg-alpine py-20 text-primary-foreground md:py-28" ariaLabel={block.title}>
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="label !text-primary-foreground/70">{block.eyebrow}</p>
            <h2 className="mt-5 text-balance font-display text-[clamp(40px,6vw,90px)] leading-[0.9]">{block.title}</h2>
          </div>
          <p className="text-primary-foreground/80 md:col-span-4">{block.lead}</p>
        </div>
        <div className="mt-12"><EvidenceStrip items={block.evidence} inverted /></div>
      </div>
    </RevealSection>
  );
}
