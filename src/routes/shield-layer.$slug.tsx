import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { shieldItems, getShieldBySlug } from "@/content/shield";
import { useT } from "@/i18n/LocaleProvider";
import { ObjectDetail } from "@/components/site/ObjectDetail";

export const Route = createFileRoute("/shield-layer/$slug")({
  loader: ({ params }) => {
    const item = getShieldBySlug(params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — ZONES FABRICS` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.name} — ZONES FABRICS` },
          { property: "og:description", content: loaderData.description },
          { property: "og:image", content: loaderData.img },
          { name: "twitter:image", content: loaderData.img },
          { property: "og:type", content: "product" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "ZONES FABRICS object — ZONES LAB™" }, { name: "robots", content: "noindex" }],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: loaderData.name,
              sku: loaderData.sku,
              description: loaderData.description,
              image: loaderData.img,
              material: loaderData.tech,
              brand: { "@type": "Brand", name: "Zones Lab" },
              offers: { "@type": "Offer", priceCurrency: "EUR", price: loaderData.price, availability: "https://schema.org/PreOrder" },
            }),
          },
        ]
      : [],
  }),
  component: ShieldDetail,
  notFoundComponent: () => <ShieldNotFound />,
});

function ShieldNotFound() {
  const t = useT();
  return (
    <main className="bg-void px-6 pb-32 pt-40 text-center">
      <p className="label">404 / SKU</p>
      <h1 className="mt-6 font-display text-6xl tracking-wider">{t.common.skuNotFound}</h1>
      <Link to="/shield-layer" className="mt-10 inline-block bg-alpine px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-white">
        {t.common.backToCollection}
      </Link>
    </main>
  );
}

function ShieldDetail() {
  const item = Route.useLoaderData();
  const t = useT();
  const copy = t.shield[item.slug as keyof typeof t.shield];
  const siblings = shieldItems.filter((s) => s.slug !== item.slug);
  const siblingCopy = Object.fromEntries(
    siblings.map((s) => [s.slug, { tagline: t.shield[s.slug as keyof typeof t.shield].tagline }]),
  );

  return (
    <ObjectDetail
      kind="shield"
      item={{ slug: item.slug, sku: item.sku, name: item.name, img: item.img, price: item.price, spec: `${t.common.techComplex} · ${item.tech}`, status: item.status, origin: item.origin, colors: item.colors, lifestyleImages: item.lifestyleImages }}
      copy={{ tagline: copy.tagline, description: copy.description, features: copy.benefits }}
      siblings={siblings.map((s) => ({ slug: s.slug, sku: s.sku, name: s.name, img: s.img, price: s.price }))}
      siblingCopy={siblingCopy}
      sectionLabel={t.nav.shield}
    />
  );
}
