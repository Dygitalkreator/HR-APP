import { createFileRoute, Link } from "@tanstack/react-router";
import smartImg from "@/assets/zl-smart.jpg";
import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LocaleProvider";
import { products } from "@/content/products";
import { EvidenceStrip } from "@/components/site/EditorialEvidence";

export const Route = createFileRoute("/smart")({
  head: () => ({
    meta: [
      { title: "Smart — Waterless by Design · ZONES LAB™" },
      { name: "description", content: "Soda-in-Oil (SiO) Matrix · Waterless · Aluminum-free · Hormone friendly · Microbiome friendly. Bio-engineered High Performance from Bavaria." },
      { property: "og:title", content: "Smart — Waterless by Design · ZONES LAB™" },
      { property: "og:description", content: "Waterless. Aluminum-free. Bio-engineered. High Performance that happens to be sustainable." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: smartImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: smartImg },
    ],
  }),
  component: SmartPage,
});

function SmartPage() {
  const t = useT();
  const s = t.smartPage;

  return (
    <main className="bg-void text-foreground">
      <Hero img={smartImg} eyebrow={s.eyebrow} titleA={s.titleA} titleB={s.titleB} lead={s.lead} />
      <Efficiency
        eyebrow={s.efficiencyEyebrow}
        title={s.efficiencyTitle}
        body={s.efficiencyBody}
        chartTitle={s.waterlessChartTitle}
        usLabel={s.waterlessUsLabel}
        themLabel={s.waterlessThemLabel}
        note={s.waterlessNote}
      />
      <Science
        eyebrow={s.scienceEyebrow}
        title={s.scienceTitle}
        body={s.scienceBody}
        caption={s.matrixCaption}
        layers={[s.matrixLipid, s.matrixSoda, s.matrixMineral, s.matrixPeptide]}
      />
      <SystemEvidence />
      <Sustainability
        eyebrow={s.sustainabilityEyebrow}
        title={s.sustainabilityTitle}
        body={s.sustainabilityBody}
        stats={s.sustainabilityStats}
      />
      <CrossSell eyebrow={s.crossEyebrow} title={s.crossTitle} lead={s.crossLead} />
      <Closing title={s.closingTitle} lead={s.closingLead} cta={s.closingCta} />
    </main>
  );
}

function Hero({ img, eyebrow, titleA, titleB, lead }: { img: string; eyebrow: string; titleA: string; titleB: string; lead: string }) {
  const t = useT();
  return (
    <section className="relative grain min-h-[88svh] overflow-hidden border-b border-line">
      <div className="absolute inset-0">
        <img src={img} alt="Soda crystal suspended in golden lipid carrier" className="h-full w-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/55 to-void" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-[1600px] flex-col px-6 pb-16 pt-32 md:px-12 md:pt-40">
        <div className="flex items-center gap-3">
          <span className="block h-1.5 w-1.5 rounded-full bg-alpine pulse-ring" />
          <span className="label">{eyebrow}</span>
        </div>
        <div className="mt-auto">
          <h1 className="font-display text-[clamp(48px,11vw,180px)] leading-[0.88] tracking-[0.01em]">
            {titleA}
            <br />
            <span className="text-mist">{titleB}</span>
          </h1>
          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <p className="md:col-span-7 max-w-2xl text-balance text-lg text-silver md:text-xl">{lead}</p>
            <div className="md:col-span-3 md:col-start-10 md:text-right">
              <p className="label">Buzz · System</p>
              <p className="mt-2 font-mono text-xs text-silver">
                Waterless · SiO Matrix
                <br />
                LipidShield Complex™
                <br />
                Bio-Engineered
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/products" className="inline-flex items-center gap-3 bg-alpine px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-silver hover:text-void">
              {t.common.viewPortfolio}
            </Link>
            <Link to="/protocol" className="inline-flex items-center gap-3 border border-line-mid px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-silver transition-colors hover:border-alpine hover:text-foreground">
              {t.common.readTechnology}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Efficiency({ eyebrow, title, body, chartTitle, usLabel, themLabel, note }: { eyebrow: string; title: string; body: string; chartTitle: string; usLabel: string; themLabel: string; note: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-b border-line bg-titanium py-32 md:py-48">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 md:px-12">
        <div className="md:col-span-5">
          <p className="label">{eyebrow}</p>
          <h2 className="mt-6 font-display text-[clamp(40px,6vw,80px)] leading-[0.95] tracking-wider">{title}</h2>
          <p className="mt-8 text-silver md:text-lg">{body}</p>
        </div>
        <div ref={ref} className="reveal md:col-span-7">
          <p className="label">{chartTitle}</p>
          <div className="mt-8 space-y-8">
            <BarRow label={usLabel} value={0} display="0 %" tone="alpine" />
            <BarRow label={themLabel} value={100} display="H₂O BASE" tone="mist" />
          </div>
          <p className="mt-8 font-mono text-[11px] text-mist">{note}</p>
        </div>
      </div>
    </section>
  );
}

function BarRow({ label, value, display, tone }: { label: string; value: number; display: string; tone: "alpine" | "mist" }) {
  const fill = tone === "alpine" ? "bg-alpine" : "bg-mist";
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="label">{label}</span>
        <span className="font-display text-2xl tracking-wider">{display}</span>
      </div>
      <div className="mt-3 h-2 w-full overflow-hidden bg-void/60">
        <div className={`h-full ${fill} transition-[width] duration-[1400ms] ease-out`} style={{ width: `${Math.max(value, 1.5)}%` }} />
      </div>
    </div>
  );
}

function Science({ eyebrow, title, body, caption, layers }: { eyebrow: string; title: string; body: string; caption: string; layers: string[] }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-b border-line bg-void py-32 md:py-48">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 md:px-12">
        <div ref={ref} className="reveal md:col-span-6">
          <MatrixGraph layers={layers} caption={caption} />
        </div>
        <div className="md:col-span-6 md:pt-12">
          <p className="label">{eyebrow}</p>
          <h2 className="mt-6 font-display text-[clamp(40px,6vw,80px)] leading-[0.95] tracking-wider">{title}</h2>
          <p className="mt-8 max-w-xl text-silver md:text-lg">{body}</p>
        </div>
      </div>
    </section>
  );
}

function MatrixGraph({ layers, caption }: { layers: string[]; caption: string }) {
  // Concentric layered architecture diagram
  return (
    <figure>
      <div className="aspect-square w-full border border-line-mid bg-titanium p-6">
        <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Soda-in-Oil Matrix architecture">
          {/* outer mineral grid hex */}
          <g stroke="currentColor" strokeOpacity="0.18" fill="none">
            {[180, 150, 120, 90].map((r, i) => (
              <circle key={i} cx="200" cy="200" r={r} strokeDasharray={i === 0 ? "2 6" : i === 1 ? "1 4" : "0"} />
            ))}
          </g>
          {/* peptide nodes */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            const x = (200 + Math.cos(a) * 180).toFixed(4);
            const y = (200 + Math.sin(a) * 180).toFixed(4);
            return <circle key={i} cx={x} cy={y} r="3" className="fill-alpine" />;
          })}
          {/* mineral grid markers */}
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i / 8) * Math.PI * 2 + 0.2;
            const x = (200 + Math.cos(a) * 150 - 3).toFixed(4);
            const y = (200 + Math.sin(a) * 150 - 3).toFixed(4);
            return <rect key={i} x={x} y={y} width="6" height="6" className="fill-mist" />;
          })}
          {/* soda crystal */}
          <polygon points="200,160 230,200 200,240 170,200" className="fill-silver/60 stroke-silver" strokeWidth="1.2" />
          {/* lipid carrier core */}
          <circle cx="200" cy="200" r="45" className="fill-heritage/70" />
          <circle cx="200" cy="200" r="45" className="stroke-alpine" strokeWidth="1.2" fill="none" />
          {/* labels */}
          <text x="200" y="34" textAnchor="middle" className="fill-silver" style={{ font: "600 9px ui-monospace, monospace", letterSpacing: "0.18em", textTransform: "uppercase" }}>SiO MATRIX</text>
        </svg>
      </div>
      <figcaption className="mt-6 grid gap-3 md:grid-cols-2">
        {layers.map((l, i) => (
          <div key={l} className="flex items-baseline gap-3 border-t border-line pt-3">
            <span className="font-mono text-[10px] text-mist">0{i + 1}</span>
            <span className="font-display text-sm tracking-wider text-silver">{l}</span>
          </div>
        ))}
        <p className="md:col-span-2 mt-4 font-mono text-[11px] text-mist">{caption}</p>
      </figcaption>
    </figure>
  );
}

function SystemEvidence() {
  const phases = (["PREP", "ENGAGE", "RECOVER", "FINISH"] as const).map((step) => ({ value: String(products.filter((product) => product.step === step).length).padStart(2, "0"), label: step }));
  return (
    <section className="technical-grid border-b border-line bg-titanium py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-12"><div className="md:col-span-6"><p className="label text-heritage">03 / SYSTEM EVIDENCE</p><h2 className="mt-6 font-display text-[clamp(48px,7vw,104px)] leading-[0.88]">FUNCTION BEFORE CLAIM.</h2></div><p className="self-end text-silver md:col-span-5 md:col-start-8 md:text-lg">Ten modules are mapped by task, phase, formula, volume and batch. The visual system describes architecture—not clinical outcomes.</p></div>
        <div className="mt-12"><EvidenceStrip items={phases} /></div>
        <div className="mt-px grid gap-px bg-line-mid sm:grid-cols-2 lg:grid-cols-5">{products.map((product) => <Link key={product.slug} to="/products/$slug" params={{ slug: product.slug }} className="group bg-void p-5 transition-colors hover:bg-carbon"><p className="label">{product.sku} · {product.step}</p><p className="mt-4 font-display text-2xl leading-none">{product.name}</p><p className="mt-4 font-mono text-[10px] text-mist">{product.volume} · {product.status}</p></Link>)}</div>
      </div>
    </section>
  );
}

function Sustainability({ eyebrow, title, body, stats }: { eyebrow: string; title: string; body: string; stats: { v: string; k: string }[] }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-b border-line bg-void py-32 md:py-48">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 md:px-12">
        <div className="md:col-span-5">
          <p className="label">{eyebrow}</p>
          <h2 className="mt-6 font-display text-[clamp(40px,6vw,80px)] leading-[0.95] tracking-wider">{title}</h2>
          <p className="mt-8 max-w-md text-silver md:text-lg">{body}</p>
        </div>
        <div ref={ref} className="reveal md:col-span-7">
          <div className="grid gap-px bg-line-mid md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.k} className="bg-void p-8">
                <p className="font-display text-[56px] leading-none tracking-wider text-white">{s.v}</p>
                <p className="label mt-4">{s.k}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CrossSell({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  const t = useT();
  const ref = useReveal<HTMLDivElement>();
  const cards = products.slice(0, 4).map((i) => ({ slug: i.slug, sku: i.sku, name: i.name, img: i.img, price: i.price, tagline: i.tech }));
  return (
    <section className="border-b border-line bg-titanium py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="label">{eyebrow}</p>
            <h2 className="mt-6 font-display text-[clamp(36px,5vw,72px)] leading-[0.95] tracking-wider">{title}</h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 max-w-xl self-end text-silver md:text-lg">{lead}</p>
        </div>
        <div ref={ref} className="reveal mt-14 grid grid-cols-2 gap-px bg-line-mid md:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.slug}
              to="/products/$slug"
              params={{ slug: c.slug }}
              className="group bg-void p-4 transition-colors hover:bg-titanium md:p-6"
            >
              <div className="aspect-[4/5] overflow-hidden border border-line-mid">
                <img src={c.img} alt={c.name} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" loading="lazy" decoding="async" />
              </div>
              <p className="label mt-4 !text-alpine">◆ {c.sku} · AX COSMETICS</p>
              <p className="mt-2 font-display text-lg leading-tight tracking-wider">{c.name}</p>
              <p className="mt-1 font-mono text-[11px] text-mist">{c.tagline}</p>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="font-mono text-xs text-silver">€{c.price}</span>
                 <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist transition-colors group-hover:text-foreground">{t.common.learnMore} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing({ title, lead, cta }: { title: string; lead: string; cta: string }) {
  return (
    <section className="border-b border-line bg-titanium py-32 md:py-48">
      <div className="mx-auto max-w-[1200px] px-6 text-center md:px-12">
        <h2 className="font-display text-[clamp(40px,7vw,96px)] leading-[0.95] tracking-wider">{title}</h2>
        <p className="mx-auto mt-8 max-w-xl text-silver md:text-lg">{lead}</p>
        <Link to="/products" className="mt-12 inline-flex items-center gap-3 bg-alpine px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-silver hover:text-void">
          {cta}
        </Link>
      </div>
    </section>
  );
}
