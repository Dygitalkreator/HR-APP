import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getSuperfoodProduct, superfoodProducts, type SuperfoodProduct } from "@/content/superfood";
import { useLocale, useT } from "@/i18n/LocaleProvider";
import { useAddToCart } from "@/hooks/useAddToCart";
import { useMagnetic } from "@/hooks/useMagnetic";
import { BlueprintOverlay } from "@/components/motion/BlueprintOverlay";
import { deriveCallouts } from "@/lib/blueprint";
import { useSharedTransitionName } from "@/lib/viewTransition";
import { StaggerWords } from "@/components/motion/StaggerWords";
import { StaggerList } from "@/components/motion/StaggerList";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/superfood/$slug")({
  loader: ({ params }) => {
    const product = getSuperfoodProduct(params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — ZONES SUPERFOOD` },
          { name: "description", content: loaderData.description.de },
          { property: "og:title", content: `${loaderData.name} — ZONES SUPERFOOD` },
          { property: "og:description", content: loaderData.description.de },
          { property: "og:type", content: "product" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Produkt nicht gefunden — ZONES SUPERFOOD" }, { name: "robots", content: "noindex" }],
    scripts: loaderData
      ? [{
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: loaderData.name,
            sku: loaderData.sku,
            description: loaderData.description.en,
            brand: { "@type": "Brand", name: "ZONES SUPERFOOD" },
            offers: { "@type": "Offer", priceCurrency: "EUR", price: loaderData.price, availability: "https://schema.org/InStock" },
          }),
        }]
      : [],
  }),
  component: SuperfoodDetail,
});

const LABELS = {
  de: { line: "ZONES SUPERFOOD", grade: "Qualität", format: "Format", add: "In den Warenkorb", details: "Angaben", more: "Weitere Formate", vat: "INKL. MWST.", brew: "Zubereitung" },
  en: { line: "ZONES SUPERFOOD", grade: "Grade", format: "Format", add: "Add to cart", details: "Details", more: "More formats", vat: "INCL. VAT", brew: "Preparation" },
  fr: { line: "ZONES SUPERFOOD", grade: "Qualité", format: "Format", add: "Ajouter au panier", details: "Détails", more: "Autres formats", vat: "TVA INCLUSE", brew: "Préparation" },
  it: { line: "ZONES SUPERFOOD", grade: "Qualità", format: "Formato", add: "Aggiungi al carrello", details: "Dettagli", more: "Altri formati", vat: "IVA INCLUSA", brew: "Preparazione" },
  nl: { line: "ZONES SUPERFOOD", grade: "Kwaliteit", format: "Formaat", add: "In winkelmand", details: "Gegevens", more: "Meer formaten", vat: "INCL. BTW", brew: "Bereiding" },
  es: { line: "ZONES SUPERFOOD", grade: "Calidad", format: "Formato", add: "Añadir al carrito", details: "Detalles", more: "Más formatos", vat: "IVA INCLUIDO", brew: "Preparación" },
} as const;

function SuperfoodDetail() {
  const product = Route.useLoaderData() as SuperfoodProduct;
  const { locale } = useLocale();
  const t = useT();
  const addItem = useAddToCart();
  const magnetic = useMagnetic<HTMLButtonElement>();
  const copy = LABELS[locale];
  const vtName = useSharedTransitionName("superfood", product.slug);

  const specs = [`${copy.grade} · ${product.grade}`, `${copy.format} · ${product.format}`, `SKU · ${product.sku}`];

  const callouts = deriveCallouts({
    tech: product.grade,
    volume: product.format,
    labels: { tech: t.blueprint.tech, material: t.blueprint.material, measure: t.blueprint.measure },
  });

  const addToCart = (event?: { currentTarget: Element }) =>
    addItem(event ?? null, {
      id: `superfood-${product.slug}`,
      kind: "superfood",
      name: product.name,
      price: product.price,
      img: product.img,
      meta: `${product.format} · ${product.grade}`,
    });

  return (
    <main className="bg-void pt-28 md:pt-36">
      <nav aria-label="Breadcrumb" className="border-b border-line">
        <ol className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-3 px-6 py-5 font-mono text-[11px] text-mist md:px-12">
          <li><Link to="/" className="transition-colors hover:text-alpine">{t.nav.home}</Link></li><li aria-hidden>/</li>
          <li><Link to="/superfood" className="transition-colors hover:text-alpine">{copy.line}</Link></li><li aria-hidden>/</li>
          <li className="text-silver">{product.name}</li>
        </ol>
      </nav>

      <article className="border-b border-line">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-16 md:grid-cols-12 md:gap-16 md:px-12 md:py-24">
          <div className="md:col-span-7">
            <BlueprintOverlay
              vtName={vtName}
              src={product.img}
              alt={product.name}
              title={t.blueprint.title}
              callouts={callouts}
              className="relative aspect-[4/5] border border-line-mid"
              eager
            />
          </div>

          <div className="md:col-span-5 md:pt-6">
            <p className="label !text-alpine">◆ {product.sku} · {copy.line}</p>
            <StaggerWords as="h1" text={product.name} className="mt-6 block font-display text-[clamp(46px,7vw,92px)] leading-[0.92] tracking-wider" />
            <p className="mt-5 font-display text-2xl leading-tight tracking-wider text-mist">{product.tagline[locale]}</p>
            <p className="mt-8 text-silver md:text-lg">{product.description[locale]}</p>

            <div className="mt-10">
              <p className="label">{copy.details}</p>
              <StaggerList items={specs} className="mt-4 grid gap-px bg-line-mid" itemClassName="bg-void p-4 font-mono text-[12px] text-silver">
                {(line) => <>◆ {line}</>}
              </StaggerList>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-[11px] text-mist">
              <span>{product.sku}</span>
              <span className="h-px w-8 bg-line-mid" />
              <span data-superfood-grade>{product.grade}</span>
            </div>
            <p data-superfood-signoff className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-mist">{product.signOff}</p>

            <div className="mt-10 flex items-baseline justify-between gap-6">
              <span className="font-display text-5xl">€{product.price}</span>
              <span className="font-mono text-xs text-mist">{product.format} · {copy.vat}</span>
            </div>

            <Button data-superfood-add {...magnetic} type="button" onClick={addToCart} className="mt-8 h-auto w-full rounded-none bg-alpine px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-primary-foreground shadow-none hover:bg-silver hover:text-void">
              {copy.add} →
            </Button>
          </div>
        </div>
      </article>

      <section className="bg-titanium py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="label">{copy.line}</p>
          <h2 className="mt-4 font-display text-[clamp(32px,5vw,64px)] tracking-wider">{copy.more}</h2>
          <div className="mt-10 grid grid-cols-2 gap-px bg-line-mid md:grid-cols-3">
            {superfoodProducts.filter((other) => other.slug !== product.slug).map((other) => (
              <Link key={other.sku} to="/superfood/$slug" params={{ slug: other.slug }} className="group bg-void p-4 md:p-6">
                <div className="aspect-[4/5] overflow-hidden border border-line-mid">
                  <img src={other.img} alt={other.name} width={1000} height={1250} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
                </div>
                <h3 className="mt-4 font-display text-2xl leading-none tracking-wider">{other.name}</h3>
                <p className="mt-3 font-mono text-xs text-silver">€{other.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
