import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/superfood-hero-kaffee.jpg";
import { superfoodProducts } from "@/content/superfood";
import { EditorialChapter } from "@/components/site/EditorialEvidence";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/LocaleProvider";
import { useReveal } from "@/hooks/useReveal";
import { useAddToCart } from "@/hooks/useAddToCart";
import { HoverMedia } from "@/components/motion/HoverMedia";
import { CrossSell, TrustBand } from "@/components/site/CrossSell";
import { pageFunnelCopy } from "@/content/pageFunnel";
import { CursorGlow } from "@/components/motion/CursorGlow";
import { StaggerWords } from "@/components/motion/StaggerWords";

export const Route = createFileRoute("/superfood/")({
  head: () => ({
    meta: [
      { title: "ZONES SUPERFOOD — Spezialitäten-Kaffee" },
      { name: "description", content: "Spezialitäten-Kaffee von ZONES SUPERFOOD — ganze Bohne, gemahlen und lösliche Sticks, ausgewählt nach Verarbeitung und Qualitätsstufe." },
      { property: "og:title", content: "ZONES SUPERFOOD — Spezialitäten-Kaffee" },
      { property: "og:description", content: "Spezialitäten-Kaffee — Auswahl nach Verarbeitung und Qualitätsstufe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ZONES SUPERFOOD — Spezialitäten-Kaffee" },
      { name: "twitter:description", content: "Spezialitäten-Kaffee aus Ecuador — ganze Bohne, gemahlen und als Instant Sticks." },
    ],
  }),
  component: SuperfoodPage,
});

function SuperfoodPage() {
  const { locale } = useLocale();
  const addToCart = useAddToCart();
  const productsRef = useReveal<HTMLDivElement>();
  const originRef = useReveal<HTMLDivElement>();
  const copy = {
    de: { hero: "KAFFEE. VERARBEITUNG. HERKUNFT.", lead: "Spezialitäten-Kaffee aus Ecuador — nach Verarbeitung und Qualitätsstufe ausgewählt.", origin: "Dokumentierte Herkunft.", originLead: "Ecuador · Anden. Wir ordnen jede Auswahl nach Rohstoff, Röstung und Format. Chargen und Zertifizierungen werden für das jeweilige Lot dokumentiert.", discover: "Kaffee entdecken", dossier: "Qualitätsdossier", products: "DREI FORMATE. EIN KAFFEE.", grade: "Qualität", add: "In den Warenkorb", slot: "Editorialer Bildslot · Produktfoto folgt", eyebrow: "COFFEE" },
    en: { hero: "COFFEE. PROCESS. ORIGIN.", lead: "Specialty coffee from Ecuador — selected by processing and quality grade.", origin: "Documented origin.", originLead: "Ecuador · Andes. Each selection is mapped by raw material, roast and format. Lots and certifications are documented for each release.", discover: "Discover coffee", dossier: "Quality dossier", products: "THREE FORMATS. ONE COFFEE.", grade: "Grade", add: "Add to cart", slot: "Editorial image slot · Product photo to follow", eyebrow: "COFFEE" },
    fr: { hero: "CAFÉ. PROCÉDÉ. ORIGINE.", lead: "Café de spécialité d’Équateur — sélectionné selon le procédé et le niveau de qualité.", origin: "Origine documentée.", originLead: "Équateur · Andes. Chaque sélection est classée par matière, torréfaction et format. Lots et certifications sont documentés pour chaque édition.", discover: "Découvrir le café", dossier: "Dossier qualité", products: "TROIS FORMATS. UN CAFÉ.", grade: "Qualité", add: "Ajouter au panier", slot: "Emplacement éditorial · Photo à venir", eyebrow: "CAFÉ" },
    it: { hero: "CAFFÈ. PROCESSO. ORIGINE.", lead: "Caffè specialty dall’Ecuador — selezionato per processo e livello di qualità.", origin: "Origine documentata.", originLead: "Ecuador · Ande. Ogni selezione è ordinata per materia, tostatura e formato. Lotti e certificazioni sono documentati per ogni edizione.", discover: "Scopri il caffè", dossier: "Dossier qualità", products: "TRE FORMATI. UN CAFFÈ.", grade: "Qualità", add: "Aggiungi al carrello", slot: "Slot editoriale · Foto in arrivo", eyebrow: "CAFFÈ" },
    nl: { hero: "KOFFIE. VERWERKING. HERKOMST.", lead: "Specialty coffee uit Ecuador — geselecteerd op verwerking en kwaliteitsniveau.", origin: "Gedocumenteerde herkomst.", originLead: "Ecuador · Andes. Elke selectie wordt geordend op grondstof, branding en formaat. Lots en certificeringen worden per uitgave gedocumenteerd.", discover: "Ontdek koffie", dossier: "Kwaliteitsdossier", products: "DRIE FORMATEN. ÉÉN KOFFIE.", grade: "Kwaliteit", add: "In winkelmand", slot: "Redactioneel beeldslot · Productfoto volgt", eyebrow: "KOFFIE" },
    es: { hero: "CAFÉ. PROCESO. ORIGEN.", lead: "Café de especialidad de Ecuador — seleccionado por proceso y nivel de calidad.", origin: "Origen documentado.", originLead: "Ecuador · Andes. Cada selección se ordena por materia, tueste y formato. Lotes y certificaciones se documentan para cada edición.", discover: "Descubrir el café", dossier: "Dossier de calidad", products: "TRES FORMATOS. UN CAFÉ.", grade: "Calidad", add: "Añadir al carrito", slot: "Espacio editorial · Foto próximamente", eyebrow: "CAFÉ" },
  }[locale];

  return <main className="bg-void pt-28 md:pt-36">
    <header className="relative min-h-[78svh] overflow-hidden border-b border-line">
      <img src={heroImg} alt="Dunkel geröstete Spezialitäten-Kaffeebohnen in einer Titanschale" width={1600} height={1008} className="absolute inset-0 h-full w-full scale-[1.02] object-cover saturate-[0.72] animate-[drift_20s_ease-in-out_infinite]" loading="eager" fetchPriority="high" decoding="async" />
      <div className="hero-wash absolute inset-0" />
      <CursorGlow />
      <div className="relative mx-auto flex min-h-[78svh] max-w-[1600px] flex-col justify-end px-6 py-16 md:px-12 md:py-24">
        <p className="label !text-alpine">ZONES SUPERFOOD · APPLIED ORIGIN SCIENCE</p>
        <StaggerWords as="h1" text={copy.hero} className="mt-6 block max-w-6xl font-display text-[clamp(58px,10vw,156px)] leading-[0.86] tracking-wider text-silver" />
        <p className="mt-8 max-w-2xl font-display text-2xl leading-tight tracking-wider text-silver md:text-4xl">{copy.lead}</p>
        <Button asChild className="mt-8 h-auto w-fit rounded-none bg-alpine px-7 py-4 text-xs uppercase text-primary-foreground shadow-none"><a href="#coffee">{copy.discover} →</a></Button>
      </div>
    </header>

    <section id="coffee" className="scroll-mt-28 border-b border-line py-20 md:py-28">
      <div ref={productsRef} className="reveal mx-auto max-w-[1600px] px-6 md:px-12">
        <EditorialChapter index="01" eyebrow={copy.eyebrow} title={copy.products} lead={copy.lead} />
        <div className="mt-12 grid gap-px bg-line-mid sm:grid-cols-2 lg:grid-cols-3">
          {superfoodProducts.map((product) => <article key={product.sku} className="group flex min-w-0 flex-col bg-void p-5 transition-colors duration-500 hover:bg-titanium md:p-7">
            <Link to="/superfood/$slug" params={{ slug: product.slug }} className="block">
              <HoverMedia src={product.img} alt="" width={1000} height={1200} className="aspect-[4/5] border border-line-mid bg-titanium" imgClassName="opacity-30 grayscale"><div className="absolute inset-0 flex items-center justify-center p-8 text-center"><span className="label max-w-[220px] border border-line-mid bg-void/90 px-4 py-3 text-silver transition-colors duration-500 group-hover:border-alpine">{copy.slot}</span></div></HoverMedia>
            </Link>
            <p className="label mt-6 !text-alpine">{product.sku} · {copy.grade}</p>
            <h2 className="mt-3 font-display text-4xl leading-none tracking-wider text-silver"><Link to="/superfood/$slug" params={{ slug: product.slug }} className="transition-colors hover:text-alpine">{product.name}</Link></h2>
            <p className="mt-4 text-sm leading-relaxed text-mist">{product.description[locale]}</p>

            <dl className="mt-6 grid gap-3 border-y border-line py-4 font-mono text-[11px]"><div className="flex justify-between gap-4"><dt>{copy.grade}</dt><dd className="text-right text-mist">{product.grade}</dd></div><div className="flex justify-between gap-4"><dt>FORMAT</dt><dd className="text-mist">{product.format}</dd></div></dl>
            <div className="card-cta mt-auto flex items-end justify-between gap-4 pt-6"><span className="font-display text-4xl text-silver transition-colors duration-300 group-hover:text-heritage">€{product.price}</span><span className="font-mono text-[10px] text-mist">INCL. VAT</span></div>
            <Button type="button" onClick={(event) => addToCart(event, { id: `superfood-${product.slug}`, kind: "superfood", name: product.name, price: product.price, img: product.img, meta: `${product.format} · ${product.grade}` })} className="mt-5 h-auto w-full rounded-none bg-alpine px-5 py-4 text-xs uppercase text-primary-foreground shadow-none transition-colors hover:bg-silver hover:text-void">{copy.add} →</Button>
          </article>)}
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-titanium py-20 md:py-28">
      <div ref={originRef} className="reveal mx-auto max-w-[1600px] px-6 md:px-12">
        <EditorialChapter index="02" eyebrow="QUALITY DATA" title={copy.origin} lead={copy.originLead} aside={<Button asChild variant="outline" className="mt-7 h-auto rounded-none border-line-mid bg-transparent px-6 py-3 text-xs text-silver shadow-none hover:border-alpine hover:bg-transparent hover:text-alpine"><Link to="/superfood/ursprung">{copy.dossier} →</Link></Button>} />
      </div>
    </section>

    <TrustBand block={pageFunnelCopy[locale].superfoodTrust} />

    <CrossSell lines={["cosmetics", "accessories"]} />
  </main>;
}
