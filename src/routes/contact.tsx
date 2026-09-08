import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useT } from "@/i18n/LocaleProvider";
import { MediaBanner } from "@/components/site/MediaSplit";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Imprint — ZONES LAB™" },
      { name: "description", content: "Direct line to the lab. Imprint, Privacy and Terms for ZONES LAB™ — engineered in Bavaria." },
      { property: "og:title", content: "Contact — ZONES LAB™" },
      { property: "og:description", content: "Direct line to the lab." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const t = useT();
  return (
    <main className="bg-void pt-32 md:pt-40">
      <header className="border-b border-line">
        <div className="mx-auto max-w-[1600px] px-6 pb-20 md:px-12">
          <p className="label">{t.contactPage.eyebrow}</p>
          <h1 className="mt-6 font-display text-[clamp(56px,11vw,180px)] leading-[0.9] tracking-wider">
            {t.contactPage.titleA}
            <br />
            <span className="text-mist">{t.contactPage.titleB}</span>
          </h1>
        </div>
      </header>

      <MediaBanner image="contact" ratio="aspect-[21/9]" />



      <section className="border-b border-line bg-titanium py-24 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 md:px-12">
          <div className="md:col-span-5">
            <p className="label">{t.contactPage.channels}</p>
            <ul className="mt-8 space-y-6 text-silver">
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
                <p className="mt-2 font-mono text-sm">
                  Zones Lab GmbH<br />
                  Maximilianstrasse 14<br />
                  80539 München · Bavaria · DE
                </p>
              </li>
            </ul>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="md:col-span-7 border border-line-mid p-8 md:p-12">
            <p className="label">{t.contactPage.openLine}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="label">{t.contactPage.name}</span>
                <input required type="text" className="mt-2 w-full bg-void border border-line-mid px-4 py-3 text-silver focus:border-alpine outline-none" />
              </label>
              <label className="block">
                <span className="label">{t.contactPage.email}</span>
                <input required type="email" className="mt-2 w-full bg-void border border-line-mid px-4 py-3 text-silver focus:border-alpine outline-none" />
              </label>
            </div>
            <label className="mt-6 block">
              <span className="label">{t.contactPage.subject}</span>
              <input type="text" className="mt-2 w-full bg-void border border-line-mid px-4 py-3 text-silver focus:border-alpine outline-none" />
            </label>
            <label className="mt-6 block">
              <span className="label">{t.contactPage.message}</span>
              <textarea required rows={6} className="mt-2 w-full bg-void border border-line-mid px-4 py-3 text-silver focus:border-alpine outline-none" />
            </label>
            <button type="submit" className="mt-8 inline-flex items-center gap-3 bg-alpine px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-silver hover:text-void">
              {sent ? t.contactPage.sent : t.contactPage.send}
            </button>
          </form>
        </div>
      </section>

      <section id="imprint" className="border-b border-line bg-void py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="label">{t.contactPage.imprint}</p>
          <h2 className="mt-4 font-display text-3xl tracking-wider">{t.contactPage.imprintTitle}</h2>
          <div className="mt-6 grid gap-12 font-mono text-sm text-silver md:grid-cols-2">
            <p>
              Zones Lab GmbH<br />
              Maximilianstrasse 14<br />
              80539 München · Bavaria · DE<br /><br />
              Managing Director: J. Architect<br />
              Commercial Register: HRB 000000<br />
              VAT-ID: DE000000000
            </p>
            <p>
              Contact: lab@zoneslab.com<br />
              Responsible per § 18 MStV: Zones Lab GmbH
            </p>
          </div>
        </div>
      </section>

      <section id="privacy" className="border-b border-line bg-titanium py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="label">{t.contactPage.privacy}</p>
          <h2 className="mt-4 font-display text-3xl tracking-wider">{t.contactPage.privacyTitle}</h2>
          <p className="mt-6 max-w-3xl text-silver">{t.contactPage.privacyBody}</p>
        </div>
      </section>

      <section id="terms" className="bg-void py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="label">{t.contactPage.terms}</p>
          <h2 className="mt-4 font-display text-3xl tracking-wider">{t.contactPage.termsTitle}</h2>
          <p className="mt-6 max-w-3xl text-silver">{t.contactPage.termsBody}</p>
        </div>
      </section>
    </main>
  );
}
