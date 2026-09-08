import { createFileRoute, Link } from "@tanstack/react-router";
import manifestoImg from "@/assets/zl-manifesto.jpg";
import { useReveal } from "@/hooks/useReveal";
import { products, type Product } from "@/content/products";
import { useT, useLocale } from "@/i18n/LocaleProvider";
import { EDITORIAL_ALT, EDITORIAL_IMAGES, type EditorialKey } from "@/content/editorial";

const PHASE_IMAGE_KEYS: EditorialKey[] = ["phasePrep", "phaseEngage", "phaseRecover", "phaseFinish"];



export const Route = createFileRoute("/protocol")({
  head: () => ({
    meta: [
      { title: "The System — PREP · ENGAGE · RECOVER · FINISH — ZONES LAB™" },
      { name: "description", content: "Four phases, seven modules. Lipid-Buffered Dispersion, Hydrophobic Gate, Soda-in-Oil Matrix — the full architecture of the AX System." },
      { property: "og:title", content: "The System — ZONES LAB™" },
      { property: "og:description", content: "Four phases. One equilibrium. PREP · ENGAGE · RECOVER · FINISH." },
      { property: "og:image", content: manifestoImg },
      { property: "twitter:image", content: manifestoImg },
    ],
  }),
  component: ProtocolPage,
});

const PHASES = [
  { n: "01", t: "PREP" as const, tech: "Lipid-Buffered Dispersion · Blank Canvas Reset" },
  { n: "02", t: "ENGAGE" as const, tech: "Zero-Shock Technology · Hydrophobic Gate" },
  { n: "03", t: "RECOVER" as const, tech: "LipidShield Complex™ · Time-Release" },
  { n: "04", t: "FINISH" as const, tech: "Soda-in-Oil (SiO) Matrix · Friction Control" },
];

function PhaseSection({
  phase,
  index,
  step,
  modules,
  t,
  imageKey,
}: {
  phase: (typeof PHASES)[number];
  index: number;
  step: { title: string; body: string };
  modules: Product[];
  t: ReturnType<typeof useT>;
  imageKey: EditorialKey;
}) {
  const ref = useReveal<HTMLDivElement>();
  const { locale } = useLocale();
  return (
    <section className={`border-b border-line ${index % 2 ? "bg-void" : "bg-titanium"} py-20 md:py-32`}>
      <div ref={ref} className="reveal mx-auto grid max-w-[1600px] gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-12">
        <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
          <span className="font-display text-[120px] leading-none text-alpine md:text-[240px]">{phase.n}</span>
          <p className="label mt-4 md:mt-6">
            {t.common.phase} · {phase.t}
          </p>
          <figure className="clip-reveal mt-8 aspect-[4/3] w-full overflow-hidden border border-line-mid">
            <img
              src={EDITORIAL_IMAGES[imageKey]}
              alt={EDITORIAL_ALT[imageKey][locale]}
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-[1800ms] hover:scale-[1.05]"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="mt-8 border border-line-mid p-6">
            <p className="label">{t.common.technology}</p>
            <p className="mt-3 font-display text-lg tracking-wider md:text-xl">{phase.tech}</p>
          </div>
        </div>

        <div className="md:col-span-7">
          <h2 className="font-display text-[clamp(32px,5vw,72px)] leading-[0.95] tracking-wider">{step.title}</h2>
          <p className="mt-6 max-w-xl text-silver md:mt-8 md:text-lg">{step.body}</p>

          <p className="label mt-10">
            {t.common.module} · {modules.length}
          </p>
          <div className="mt-4 grid gap-px bg-line-mid sm:grid-cols-2">
            {modules.map((p) => {
              const tp = t.products[p.slug as keyof typeof t.products];
              return (
                <Link
                  key={p.slug}
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="group block bg-void p-6 transition-colors hover:bg-titanium"
                >
                  <p className="label !text-alpine">
                    {p.sku} · {p.step}
                  </p>
                  <h3 className="mt-3 font-display text-xl leading-tight tracking-wider">{p.name}</h3>
                  <p className="mt-3 line-clamp-3 text-sm text-silver">{tp?.short ?? p.short}</p>
                  <span className="label mt-5 inline-block group-hover:!text-alpine">{t.common.openModule}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProtocolPage() {
  const t = useT();
  return (
    <main className="bg-void pt-32 md:pt-40">
      <header className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0">
          <img src={manifestoImg} alt="Lipid dispersion" className="h-full w-full object-cover opacity-50" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/60 to-void" />
        </div>
        <div className="relative mx-auto max-w-[1600px] px-6 pb-20 md:px-12 md:pb-24">
          <p className="label">{t.protocolPage.eyebrow}</p>
          <h1 className="mt-6 font-display text-[clamp(56px,11vw,200px)] leading-[0.88] tracking-wider">
            {t.protocolPage.titleA}
            <br />
            <span className="text-mist">{t.protocolPage.titleB}</span>
          </h1>
          <p className="mt-10 max-w-xl text-silver md:text-lg">{t.protocolPage.lead}</p>
          <div className="mt-10 flex flex-wrap gap-px bg-line-mid">
            {PHASES.map((p) => (
              <span key={p.t} className="bg-void px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-silver">
                {p.n} · {p.t}
              </span>
            ))}
          </div>
        </div>
      </header>

      {PHASES.map((phase, i) => (
        <PhaseSection
          key={phase.t}
          phase={phase}
          index={i}
          step={t.protocolPage.steps[i]}
          modules={products.filter((p) => p.step === phase.t)}
          t={t}
          imageKey={PHASE_IMAGE_KEYS[i % PHASE_IMAGE_KEYS.length]}

        />
      ))}

      <section className="bg-void py-20 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="label">{t.protocolPage.architecture}</p>
          <h2 className="mt-6 font-display text-[clamp(36px,5vw,88px)] leading-[0.95] tracking-wider">
            {t.protocolPage.architectureTitleA}
            <br />
            <span className="text-mist">{t.protocolPage.architectureTitleB}</span>
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {t.protocolPage.architectureModules.map((b) => (
              <div key={b.t} className="border border-line-mid p-8">
                <p className="label !text-alpine">◆ {t.common.module}</p>
                <h3 className="mt-4 font-display text-2xl tracking-wider">{b.t}</h3>
                <p className="mt-4 text-silver">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap gap-4">
            <Link to="/products" className="inline-flex items-center gap-3 bg-alpine px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-silver hover:text-void">
              {t.protocolPage.openPortfolio}
            </Link>
            <Link to="/smart" className="inline-flex items-center gap-3 border border-line-mid px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-silver transition-colors hover:border-alpine hover:text-white">
              {t.common.readTechnology}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
