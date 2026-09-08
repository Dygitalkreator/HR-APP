import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CTA_ROUTES, getJournalArticle, getJournalText, getRelatedArticles, journalCategoryLabels, journalIntro, type JournalArticle } from "@/content/journal";
import { useLocale } from "@/i18n/LocaleProvider";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const article = getJournalArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => {
    const copy = loaderData?.text.en ?? loaderData?.text.de;
    return {
      meta: copy ? [
        { title: `${copy.title} — The ZONES Journal` },
        { name: "description", content: copy.excerpt },
        { property: "og:title", content: `${copy.title} — The ZONES Journal` },
        { property: "og:description", content: copy.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ] : [{ title: "Journal article unavailable — ZONES LAB™" }, { name: "robots", content: "noindex" }],
    };
  },
  component: JournalArticlePage,
});

function JournalArticlePage() {
  const article = Route.useLoaderData() as JournalArticle;
  const { locale } = useLocale();
  const copy = getJournalText(article, locale);
  const intro = journalIntro[locale];
  const labels = journalCategoryLabels[locale];
  const related = getRelatedArticles(article, 3);

  return (
    <main className="bg-void pt-24 md:pt-28">
      <article>
        <header className="border-b border-line">
          <div className="mx-auto max-w-[1600px] px-6 py-14 md:px-12 md:py-20">
            <Link to="/journal" className="label transition-colors hover:text-heritage">← {intro.back}</Link>
            <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-9">
                <p className="label !text-heritage">◆ {labels[article.category]}</p>
                <h1 className="mt-5 max-w-6xl font-display text-[clamp(46px,8vw,120px)] leading-[0.86]">{copy.title}</h1>
              </div>
              <div className="md:col-span-3">
                <time className="label">{article.date}</time>
                <p className="mt-3 text-sm text-mist">{article.readTime} {intro.minutes}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="relative mx-auto max-w-[1600px] overflow-hidden border-x border-line md:aspect-[16/8]">
          <img src={article.image} alt="" aria-hidden="true" className="h-full min-h-[380px] w-full object-cover saturate-[0.8]" fetchPriority="high" decoding="async" />
          {article.imagePlaceholder && (
            <span className="absolute left-5 top-5 border border-primary-foreground/40 bg-void/70 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-primary-foreground/90">{intro.placeholder}</span>
          )}
        </div>

        <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-16 md:grid-cols-12 md:px-12 md:py-24">
          <aside className="md:col-span-3">
            <p className="label">FIELD NOTE · {article.slug.toUpperCase()}</p>
            <div className="mt-6 h-px bg-line-mid" />
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">{labels[article.category]}</p>
          </aside>
          <div className="md:col-span-7 md:col-start-5">
            <p className="font-display text-2xl leading-tight text-silver md:text-4xl">{copy.dek}</p>
            <div className="mt-14 space-y-14">
              {copy.sections.map((section, index) => (
                <section key={section.heading} className="grid gap-5 border-t border-line pt-7 sm:grid-cols-[64px_1fr]">
                  <span className="font-mono text-xs text-heritage">0{index + 1}</span>
                  <div>
                    <h2 className="font-display text-3xl leading-none md:text-4xl">{section.heading}</h2>
                    <p className="mt-5 text-lg leading-relaxed text-silver">{section.body}</p>
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-16 border border-line-mid bg-titanium p-7 md:p-10">
              <p className="label !text-heritage">◆ {intro.takeaways}</p>
              <ul className="mt-6 space-y-4">
                {copy.takeaways.map((item, index) => (
                  <li key={item} className="grid gap-4 border-t border-line pt-4 sm:grid-cols-[48px_1fr]">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">0{index + 1}</span>
                    <span className="text-silver">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14 border-t border-line pt-8">
              <p className="label">{intro.ctaEyebrow}</p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-silver">{copy.ctaText}</p>
              <Link to={CTA_ROUTES[article.cta]} className="route-card-link mt-6 inline-block">{intro.ctaAction} →</Link>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-line bg-titanium py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="label">{intro.related}</p>
          <div className="mt-7 grid gap-px bg-line-mid md:grid-cols-3">
            {related.map((entry) => {
              const text = getJournalText(entry, locale);
              return (
                <Link key={entry.slug} to="/journal/$slug" params={{ slug: entry.slug }} className="group flex flex-col bg-void focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-alpine">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={entry.image} alt="" aria-hidden="true" loading="lazy" decoding="async" className="h-full w-full object-cover saturate-[0.76] transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
                  </div>
                  <div className="flex min-h-[230px] flex-col p-6">
                    <p className="label !text-heritage">{labels[entry.category]}</p>
                    <h3 className="mt-4 font-display text-3xl leading-none">{text.title}</h3>
                    <p className="mt-4 text-sm text-silver">{text.excerpt}</p>
                    <span className="route-card-link mt-auto border-t border-line pt-5">{intro.read} →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
