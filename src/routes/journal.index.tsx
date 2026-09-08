import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { getJournalText, journalArticles, journalCategoryLabels, journalCategoryOrder, journalIntro, type JournalCategory } from "@/content/journal";
import { RevealSection } from "@/components/site/RevealSection";
import { useLocale } from "@/i18n/LocaleProvider";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "The ZONES Journal — Lab Notes & Observations" },
      { name: "description", content: "Ein öffentlich zugängliches Lab-Notebook: Beobachtungen und Protokolle zu Formulierung, Material, Herkunft und Körperhygiene." },
      { property: "og:title", content: "The ZONES Journal — Lab Notes" },
      { property: "og:description", content: "Observations, protocols and field notes on formulation, material, origin and hygiene." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JournalPage,
});

function JournalPage() {
  const { locale } = useLocale();
  const intro = journalIntro[locale];
  const labels = journalCategoryLabels[locale];
  const [active, setActive] = useState<JournalCategory | "all">("all");

  const visible = useMemo(
    () => (active === "all" ? journalArticles : journalArticles.filter((article) => article.category === active)),
    [active],
  );

  return (
    <main className="bg-void pt-24 md:pt-28">
      <header className="border-b border-line py-14 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="label !text-heritage">◆ {intro.eyebrow}</p>
          <h1 className="mt-5 max-w-6xl font-display text-[clamp(58px,11vw,180px)] leading-[0.82]">{intro.title}</h1>
          <p className="mt-6 font-display text-2xl leading-tight text-silver md:text-4xl">{intro.subline}</p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-mist md:text-lg">{intro.lead}</p>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-mist">{intro.translationNote}</p>
        </div>
      </header>

      <div className="sticky top-[64px] z-30 border-b border-line bg-void/95 backdrop-blur md:top-[72px]">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-2 px-6 py-4 md:px-12">
          <span className="label mr-3 hidden md:inline">{intro.filterLabel}</span>
          {(["all", ...journalCategoryOrder] as const).map((key) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key as JournalCategory | "all")}
                aria-pressed={isActive}
                className={`min-h-9 border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-alpine ${
                  isActive ? "border-silver bg-silver text-void" : "border-line-mid text-mist hover:border-alpine hover:text-silver"
                }`}
              >
                {key === "all" ? intro.filterAll : labels[key as JournalCategory]}
              </button>
            );
          })}
          <span className="ml-auto hidden font-mono text-[10px] uppercase tracking-[0.18em] text-mist md:inline">
            {String(visible.length).padStart(2, "0")} {intro.count}
          </span>
        </div>
      </div>

      <RevealSection className="py-16 md:py-24" ariaLabel={intro.all}>
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          {visible.length === 0 ? (
            <p className="text-mist">{intro.empty}</p>
          ) : (
            <div className="grid gap-px bg-line-mid md:grid-cols-2 xl:grid-cols-3">
              {visible.map((article, index) => {
                const copy = getJournalText(article, locale);
                return (
                  <Link
                    key={article.slug}
                    to="/journal/$slug"
                    params={{ slug: article.slug }}
                    className="group flex flex-col bg-void focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-alpine"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={article.image} alt="" aria-hidden="true" className="h-full w-full object-cover saturate-[0.76] transition-transform duration-[1400ms] group-hover:scale-[1.04]" loading="lazy" decoding="async" />
                      <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-void/10 to-transparent" />
                      {article.imagePlaceholder && (
                        <span className="absolute left-4 top-4 border border-primary-foreground/40 bg-void/70 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-primary-foreground/90">
                          {intro.placeholder}
                        </span>
                      )}
                      <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/90">
                        {String(index + 1).padStart(3, "0")}
                      </span>
                    </div>
                    <div className="flex min-h-[290px] flex-1 flex-col p-6 md:p-8">
                      <div className="flex items-center justify-between gap-4">
                        <p className="label !text-heritage">{journalCategoryLabels[locale][article.category]}</p>
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">{article.readTime} {intro.minutes}</span>
                      </div>
                      <h2 className="mt-5 font-display text-3xl leading-[0.95] md:text-4xl">{copy.title}</h2>
                      <p className="mt-4 text-sm leading-relaxed text-silver">{copy.excerpt}</p>
                      <span className="route-card-link mt-auto border-t border-line pt-5">{intro.read} →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </RevealSection>
    </main>
  );
}
