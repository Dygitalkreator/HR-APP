import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LocaleProvider";
import { AtmosphereBand } from "@/components/site/AtmosphereBand";


export const Route = createFileRoute("/architects-club")({
  head: () => ({
    meta: [
      { title: "ZONES CLUB — Access by invitation" },
      { name: "description", content: "No fee, no subscription. Access to the ZONES CLUB is released by curation: early access to new lots, refill priority and lab dossiers." },
      { property: "og:title", content: "ZONES CLUB — Access by invitation" },
      { property: "og:description", content: "No price. Only access. Numbered memberships, limited per lot." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClubPage,
});

function ClubPage() {
  const t = useT();
  const [sent, setSent] = useState(false);
  const tiersRef = useReveal<HTMLDivElement>();
  const howRef = useReveal<HTMLDivElement>();

  return (
    <main className="bg-void pt-32 md:pt-40">
      <header className="border-b border-line">
        <div className="mx-auto max-w-[1600px] px-6 pb-20 md:px-12 md:pb-24">
          <p className="label">{t.clubPage.eyebrow}</p>
          <h1 className="mt-6 font-display text-[clamp(56px,11vw,200px)] leading-[0.88] tracking-wider">
            {t.clubPage.titleA}
            <br />
            <span className="text-mist">{t.clubPage.titleB}</span>
          </h1>
          <p className="mt-10 max-w-xl text-silver md:text-lg">{t.clubPage.lead}</p>
        </div>
      </header>

      <AtmosphereBand image="ring" ratio="aspect-[16/9] md:aspect-[21/9]" caption="ATMOSPHERE · ACCESS BY INVITATION">
        <p className="mt-4 max-w-xl font-display text-[clamp(24px,3vw,48px)] leading-[1.02] tracking-wider text-primary-foreground">{t.clubPage.titleA}</p>
      </AtmosphereBand>




      {/* How access works */}
      <section className="border-b border-line bg-titanium py-20 md:py-28">
        <div ref={howRef} className="reveal mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="label">{t.clubPage.howLabel}</p>
          <h2 className="mt-5 font-display text-[clamp(32px,4.5vw,64px)] leading-[0.95] tracking-wider">{t.clubPage.howTitle}</h2>
          <div className="mt-12 grid gap-px bg-line-mid md:grid-cols-3">
            {t.clubPage.howSteps.map((s) => (
              <div key={s.n} className="bg-void p-8 md:p-10">
                <span className="font-display text-5xl leading-none text-alpine md:text-6xl">{s.n}</span>
                <h3 className="mt-6 font-display text-2xl tracking-wider">{s.t}</h3>
                <p className="mt-4 text-sm text-silver md:text-base">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="border-b border-line bg-void py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="label">{t.clubPage.tiersLabel}</p>
          <h2 className="mt-5 font-display text-[clamp(32px,4.5vw,64px)] leading-[0.95] tracking-wider">{t.clubPage.tiersTitle}</h2>
        </div>
        <div ref={tiersRef} className="reveal mx-auto mt-12 grid max-w-[1600px] gap-px bg-line-mid md:grid-cols-3">
          {t.clubPage.tiers.map((tier) => (
            <div key={tier.name} className="bg-void p-8 md:p-12">
              <p className="label !text-alpine">◆ {tier.status}</p>
              <h3 className="mt-5 font-display text-4xl tracking-wider md:text-5xl">{tier.name}</h3>
              <ul className="mt-8 space-y-3 font-mono text-sm text-silver">
                {tier.perks.map((p) => (
                  <li key={p} className="flex gap-3 border-b border-line pb-3">
                    <span className="text-alpine">◆</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Access request */}
      <section id="request" className="border-b border-line bg-titanium py-20 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-12">
          <div className="md:col-span-5">
            <p className="label">{t.clubPage.formLabel}</p>
            <h2 className="mt-5 font-display text-[clamp(32px,4vw,56px)] leading-[0.95] tracking-wider">{t.clubPage.formTitle}</h2>
            <p className="mt-6 text-silver">{t.clubPage.formLead}</p>
            <p className="label mt-12">{t.clubPage.transparencyLabel}</p>
            <ul className="mt-4 space-y-3 font-mono text-xs text-silver">
              {t.clubPage.transparency.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="text-alpine">·</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="border border-line-mid p-8 md:col-span-7 md:p-12"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="label">{t.clubPage.name}</span>
                <input required type="text" className="mt-2 w-full border border-line-mid bg-void px-4 py-3 text-silver outline-none focus:border-alpine" />
              </label>
              <label className="block">
                <span className="label">{t.clubPage.email}</span>
                <input required type="email" className="mt-2 w-full border border-line-mid bg-void px-4 py-3 text-silver outline-none focus:border-alpine" />
              </label>
            </div>
            <label className="mt-6 block">
              <span className="label">{t.clubPage.interest}</span>
              <input required type="text" className="mt-2 w-full border border-line-mid bg-void px-4 py-3 text-silver outline-none focus:border-alpine" />
            </label>
            <label className="mt-6 block">
              <span className="label">
                {t.clubPage.referral} · {t.clubPage.referralHint}
              </span>
              <input type="text" className="mt-2 w-full border border-line-mid bg-void px-4 py-3 text-silver outline-none focus:border-alpine" />
            </label>
            <button type="submit" className="mt-8 inline-flex items-center gap-3 bg-alpine px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-silver hover:text-void">
              {sent ? t.clubPage.sent : t.clubPage.submit}
            </button>
            {sent && <p className="mt-5 text-sm text-silver">{t.clubPage.sentNote}</p>}
          </form>
        </div>
      </section>

      <section id="contact" className="border-b border-line bg-titanium py-20 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 md:px-12">
          <div className="md:col-span-5">
            <p className="label">{t.contactPage.channels}</p>
            <h2 className="mt-4 font-display text-3xl tracking-wider">
              {t.contactPage.titleA} <span className="text-mist">{t.contactPage.titleB}</span>
            </h2>
          </div>
          <ul className="space-y-8 md:col-span-7">
            <li>
              <p className="label">{t.contactPage.mail}</p>
              <a href="mailto:lab@zoneslab.com" className="mt-2 block font-display text-2xl tracking-wider hover:text-alpine">lab@zoneslab.com</a>
            </li>
            <li>
              <p className="label">{t.contactPage.press}</p>
              <a href="mailto:press@zoneslab.com" className="mt-2 block font-display text-2xl tracking-wider hover:text-alpine">press@zoneslab.com</a>
            </li>
            <li>
              <p className="label">{t.contactPage.address}</p>
              <p className="mt-2 font-mono text-sm text-silver">
                Zones Lab GmbH<br />
                Maximilianstrasse 14<br />
                80539 München · Bavaria · DE
              </p>
            </li>
            <li className="flex flex-wrap gap-6 border-t border-line-mid pt-6 text-[10px] uppercase tracking-[0.22em] text-mist">
              <Link to="/contact" hash="imprint" className="hover:text-alpine">{t.footer.imprint}</Link>
              <Link to="/contact" hash="privacy" className="hover:text-alpine">{t.footer.privacy}</Link>
              <Link to="/contact" hash="terms" className="hover:text-alpine">{t.footer.terms}</Link>
              <Link to="/contact" className="hover:text-alpine">{t.common.contactLab}</Link>
            </li>
          </ul>
        </div>
      </section>

      <AtmosphereBand image="wall" ratio="aspect-[4/3] md:aspect-[21/9]" caption="ATMOSPHERE · COLLECTIVE GROUND" />

      <section className="bg-void py-20 md:py-28">


        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <h2 className="font-display text-[clamp(32px,5vw,72px)] leading-[0.95] tracking-wider">
            {t.clubPage.closingTitleA}
            <br />
            <span className="text-mist">{t.clubPage.closingTitleB}</span>
          </h2>
          <p className="mt-8 max-w-xl text-silver">{t.clubPage.closingLead}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#request" className="inline-flex items-center gap-3 bg-alpine px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-silver hover:text-void">
              {t.clubPage.submit}
            </a>
            <Link to="/contact" className="inline-flex items-center gap-3 border border-line-mid px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-silver transition-colors hover:border-alpine hover:text-white">
              {t.common.contactLab}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
