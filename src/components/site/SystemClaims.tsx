import { Link } from "@tanstack/react-router";
import { SYSTEM_CLAIMS } from "@/content/ingredients";
import { useLocale } from "@/i18n/LocaleProvider";

/** Globale System-Claims mit defensiver Definition (Claim- & Testmatrix). */
export function SystemClaims() {
  const { locale, t } = useLocale();

  return (
    <section className="border-b border-line bg-titanium py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-wrap items-baseline justify-between gap-6">
          <div>
            <p className="label">{t.common.standardsTitle}</p>
            <h2 className="mt-5 font-display text-[clamp(26px,3.2vw,44px)] leading-[1] tracking-wider">
              {t.common.claimsHead}
            </h2>
          </div>
          <Link to="/smart" className="label hover:!text-alpine">
            {t.common.readTechnology}
          </Link>
        </div>

        <dl className="mt-12 grid gap-px bg-line-mid sm:grid-cols-2 lg:grid-cols-4">
          {SYSTEM_CLAIMS.map((c) => (
            <div key={c.id} className="bg-void p-6 md:p-7">
              <dt className="font-display text-xl leading-snug tracking-wider">
                <span className="mr-2 text-alpine">◆</span>
                {c.label[locale]}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-silver">{c.proof[locale]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
