import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { useT } from "@/i18n/LocaleProvider";
import { products } from "@/content/products";
import type { ShieldColor } from "@/content/shield";
import { StaggerList } from "@/components/motion/StaggerList";
import { BlueprintOverlay } from "@/components/motion/BlueprintOverlay";
import { deriveCallouts } from "@/lib/blueprint";
import { useSharedTransitionName } from "@/lib/viewTransition";

export interface ObjectDetailItem {
  slug: string;
  sku: string;
  name: string;
  img: string;
  price: number;
  spec: string;
  status?: string;
  origin?: string;
  colors?: ShieldColor[];
  lifestyleImages?: string[];
}

export interface ObjectDetailCopy {
  tagline: string;
  description: string;
  features: string[];
}

interface Props {
  kind: "shield";
  item: ObjectDetailItem;
  copy: ObjectDetailCopy;
  siblings: { slug: string; sku: string; name: string; img: string; price: number }[];
  siblingCopy: Record<string, { tagline: string }>;
  sectionLabel: string;
}

export function ObjectDetail({ kind, item, copy, siblings, siblingCopy, sectionLabel }: Props) {
  const { add } = useCart();
  const t = useT();
  const [color, setColor] = useState(item.colors?.[0]?.id ?? null);
  const active = item.colors?.find((c) => c.id === color) ?? null;
  const img = active?.img ?? item.img;
  const listPath = "/shield-layer";
  const detailPath = "/shield-layer/$slug";
  const crossProducts = products.slice(0, 3);
  // Phase 3.6 — gleicher Name wie die Grid-Karte auf /shield-layer
  const vtName = useSharedTransitionName("shield", item.slug);

  const callouts = deriveCallouts({
    tech: item.spec.includes("·") ? item.spec.split("·").slice(1).join(" · ") : item.spec,
    benefits: copy.features,
    labels: { tech: t.blueprint.tech, material: t.blueprint.material, measure: t.blueprint.measure },
  });

  const addToCart = () =>
    add({
      id: active ? `${kind}-${item.slug}-${active.id}` : `${kind}-${item.slug}`,
      kind,
      name: active ? `${item.name} · ${active.label}` : item.name,
      price: item.price,
      img,
      meta: item.sku,
    });

  return (
    <main className="bg-void pt-28 md:pt-36">
      {/* breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-line">
        <ol className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-3 px-6 py-5 font-mono text-[11px] text-mist md:px-12">
          <li><Link to="/" className="transition-colors hover:text-alpine">ZONES</Link></li>
          <li aria-hidden>/</li>
          <li><Link to={listPath} className="transition-colors hover:text-alpine">{sectionLabel}</Link></li>
          <li aria-hidden>/</li>
          <li className="text-silver">{item.name}</li>
        </ol>
      </nav>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-16 md:grid-cols-12 md:gap-16 md:px-12 md:py-24">
          <div className="md:col-span-6">
            {/* Motion Phase 3.1 — Blueprint-Overlay auf dem Hauptobjektfoto */}
            <BlueprintOverlay
              vtName={vtName}
              src={img}
              alt={active ? `${item.name} — ${active.label}` : item.name}
              title={t.blueprint.title}
              callouts={callouts}
              className="relative aspect-[4/5] w-full border border-line-mid"
              eager
            />
            {item.colors && (
              <div className="mt-4 flex gap-3">
                {item.colors.map((c) => (
                  <button key={c.id} type="button" onClick={() => setColor(c.id)} aria-pressed={color === c.id} className={`aspect-square w-20 overflow-hidden border transition-colors ${color === c.id ? "border-alpine" : "border-line-mid hover:border-silver"}`}>
                    <img src={c.img} alt={c.label} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="md:col-span-6">
            <p className="label !text-alpine">◆ {item.sku}</p>
            <h1 className="mt-6 font-display text-[clamp(40px,7vw,88px)] leading-[0.95] tracking-wider">{item.name}</h1>
            <p className="mt-4 font-display text-xl text-mist tracking-wider">{copy.tagline}</p>
            <p className="mt-8 max-w-md text-silver md:text-lg">{copy.description}</p>
            <p className="mt-6 font-mono text-xs text-mist">{item.spec}</p>
            {(item.status || item.origin) && (
              <div className="mt-6 flex flex-wrap items-center gap-6 font-mono text-[11px] text-mist">
                <span>{item.sku}</span>
                {item.status && (
                  <>
                    <span className="h-px w-8 bg-line-mid" />
                    <span data-product-status>{item.status}</span>
                  </>
                )}
                {item.origin && (
                  <>
                    <span className="h-px w-8 bg-line-mid" />
                    <span data-product-origin>{item.origin}</span>
                  </>
                )}
              </div>
            )}

            {item.colors && (
              <div className="mt-10">
                <p className="label">{t.common.colorLabel}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {item.colors.map((c) => (
                    <button key={c.id} type="button" onClick={() => setColor(c.id)} aria-pressed={color === c.id} className={`flex items-center gap-3 border px-4 py-3 font-mono text-[11px] tracking-[0.14em] transition-colors ${color === c.id ? "border-alpine bg-titanium text-alpine" : "border-line-mid text-silver hover:border-silver"}`}>
                      <span className="h-4 w-4 border border-line-mid" style={{ background: c.swatch }} />
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Phase 3.5 — gestaffelter Bauteile-/Feature-Reveal */}
            <StaggerList
              items={copy.features}
              className="mt-10 grid gap-px bg-line-mid sm:grid-cols-2"
              itemClassName="bg-void p-4 font-mono text-[12px] text-silver"
            >
              {(f) => <>◆ {f}</>}
            </StaggerList>

            <div className="mt-10 flex flex-wrap items-baseline gap-6">
              <span className="font-display text-4xl">€{item.price}</span>
              <span className="label">{t.common.preorder}</span>
            </div>
            <button type="button" onClick={addToCart} className="mt-8 inline-flex items-center gap-3 bg-alpine px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-silver hover:text-void">
              {t.common.addToCart} →
            </button>
          </div>
        </div>
      </section>

      {/* lifestyle gallery — Fabrics only */}
      {kind === "shield" && item.lifestyleImages && item.lifestyleImages.length > 0 && (
        <section className="border-b border-line bg-void py-16 md:py-24">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <p className="label">{sectionLabel}</p>
            <h2 className="mt-4 font-display text-[clamp(24px,3.4vw,44px)] tracking-wider">{item.name}</h2>
            <div className="mt-8 flex snap-x snap-mandatory items-start gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-px md:overflow-visible md:pb-0">
              {item.lifestyleImages.map((src, i) => (
                <div key={src} className="w-[78%] shrink-0 snap-start bg-void md:w-auto">

                  <div className="aspect-[4/5] overflow-hidden border border-line-mid">
                    <img src={src} alt={`${item.name} — ${i + 1}`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* siblings */}
      {siblings.length > 0 && (
        <section className="border-b border-line bg-titanium py-20 md:py-28">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <p className="label">{sectionLabel}</p>
            <h2 className="mt-4 font-display text-[clamp(28px,4vw,52px)] tracking-wider">{t.common.relatedModules}</h2>
            <div className="mt-10 grid grid-cols-2 gap-px bg-line-mid md:grid-cols-3">
              {siblings.map((s) => (
                <Link key={s.slug} to={detailPath} params={{ slug: s.slug }} className="group bg-void p-4 transition-colors hover:bg-titanium md:p-6">
                  <div className="aspect-[4/5] overflow-hidden border border-line-mid">
                    <img src={s.img} alt={s.name} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" loading="lazy" decoding="async" />
                  </div>
                  <p className="label mt-4 !text-alpine">◆ {s.sku}</p>
                  <p className="mt-2 font-display text-lg leading-tight tracking-wider">{s.name}</p>
                  <p className="mt-1 font-mono text-[11px] text-mist">{siblingCopy[s.slug]?.tagline}</p>
                  <p className="mt-3 font-mono text-xs text-silver">€{s.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* cross-sell into the protocol */}
      <section className="bg-void py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="label">{t.common.inProtocol}</p>
          <h2 className="mt-4 font-display text-[clamp(28px,4vw,52px)] tracking-wider">{t.smartPage.crossTitle}</h2>
          <div className="mt-10 grid grid-cols-2 gap-px bg-line-mid md:grid-cols-3">
            {crossProducts.map((p) => (
              <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group bg-void p-4 transition-colors hover:bg-titanium md:p-6">
                <div className="aspect-[4/5] overflow-hidden border border-line-mid">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" loading="lazy" decoding="async" />
                </div>
                <p className="label mt-4 !text-alpine">◆ {p.sku}</p>
                <p className="mt-2 font-display text-lg leading-tight tracking-wider">{p.name}</p>
                <p className="mt-3 font-mono text-xs text-silver">€{p.price}</p>
              </Link>
            ))}
          </div>
          <Link to={listPath} className="mt-12 inline-flex items-center gap-3 border border-line-mid px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-silver transition-colors hover:border-alpine hover:text-alpine">
            {t.common.backToCollection}
          </Link>
        </div>
      </section>
    </main>
  );
}
