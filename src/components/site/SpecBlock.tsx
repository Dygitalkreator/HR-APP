import { useLocale } from "@/i18n/LocaleProvider";
import { getSpecBlock, SPEC_LABELS } from "@/content/specBlocks";

interface Props {
  /** e.g. "ax:intense", "fb:tracksuit", "sf:whole-bean", "ac:wet-razor" */
  id: string;
  className?: string;
  compact?: boolean;
}

/** Unified, scannable spec block: positioning line + label/value pairs. */
export function SpecBlock({ id, className = "", compact = false }: Props) {
  const { locale } = useLocale();
  const block = getSpecBlock(id);
  if (!block) return null;

  return (
    <div data-spec-block={id} className={`mt-8 border-t border-line pt-6 ${className}`}>
      <p className="max-w-md font-display text-lg italic leading-snug tracking-wide text-mist">
        {block.positioning[locale]}
      </p>
      <dl className={`mt-5 grid gap-px bg-line-mid ${compact ? "" : "sm:grid-cols-2"}`}>
        {block.specs.map((row) => (
          <div key={row.key} className="bg-void p-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
              {SPEC_LABELS[row.key][locale]}
            </dt>
            <dd className="mt-2 text-sm leading-snug text-silver">{row.value[locale]}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** The localized running-text description override, when the spec block carries one. */
export function useSpecDescription(id: string) {
  const { locale } = useLocale();
  return getSpecBlock(id)?.description?.[locale];
}
