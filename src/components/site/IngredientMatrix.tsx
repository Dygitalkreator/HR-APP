import { ROLE_LABELS, resolveIngredients, type IngredientRole } from "@/content/ingredients";
import { useLocale } from "@/i18n/LocaleProvider";
import { StaggerList } from "@/components/motion/StaggerList";

interface Props {
  composition: string[];
}

/** Wirkstoff-Matrix: INCI · Klartext-Name · Funktion · Nutzen in einem Satz. */
export function IngredientMatrix({ composition }: Props) {
  const { locale, t } = useLocale();
  const items = resolveIngredients(composition);
  if (items.length === 0) return null;

  const roleLabel = (r: IngredientRole) => ROLE_LABELS[locale][r];
  const copy = (o: { de: string; en: string }) => (locale === "de" ? o.de : o.en);

  return (
    <section className="border-b border-line bg-void py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <p className="label">{t.common.ingredientsTitle}</p>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(28px,4vw,52px)] leading-[0.98] tracking-wider text-balance">
          {t.common.ingredientsHead}
        </h2>
        <p className="mt-6 max-w-xl text-silver">{t.common.ingredientsLead}</p>

        {/* Phase 3.5 — gestaffelter Wirkstoff-Reveal (IntersectionObserver, nicht scroll-linked) */}
        <StaggerList
          items={items.map((i) => i.inci)}
          className="mt-14 divide-y divide-line border-y border-line"
          itemClassName="grid gap-4 py-7 md:grid-cols-12 md:gap-8"
        >
          {(inci) => {
            const ing = items.find((i) => i.inci === inci)!;
            return (
              <>
                <div className="md:col-span-4">
                  <p className="font-display text-xl tracking-wider">{copy(ing.common)}</p>
                  <p className="mt-2 font-mono text-[11px] leading-relaxed text-mist">{ing.inci}</p>
                </div>
                <div className="md:col-span-2">
                  <span className="inline-block border border-line-mid px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-alpine">
                    {roleLabel(ing.role)}
                  </span>
                </div>
                <p className="text-silver md:col-span-6">{copy(ing.benefit)}</p>
              </>
            );
          }}
        </StaggerList>

        <p className="mt-8 max-w-xl font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-mist">
          {t.common.ingredientsNote}
        </p>
      </div>
    </section>
  );
}
