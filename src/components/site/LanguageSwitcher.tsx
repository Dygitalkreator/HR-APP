import { useState, useEffect, useRef } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { LOCALES, LOCALE_META } from "@/i18n/config";

export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  if (mobile) {
    return (
      <div className="mt-6 flex flex-wrap gap-2">
        {LOCALES.map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`px-3 py-2 text-[10px] uppercase tracking-[0.22em] border ${
              locale === l ? "border-alpine bg-alpine text-white" : "border-line-mid text-silver"
            }`}
          >
            {LOCALE_META[l].flag} {LOCALE_META[l].label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="label flex items-center gap-1.5 transition-colors hover:text-alpine"
        aria-label="Language"
      >
        <span>{LOCALE_META[locale].flag}</span>
        <span>{LOCALE_META[locale].label}</span>
        <span className="text-mist">▾</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-3 min-w-[140px] border border-line-mid bg-void/95 backdrop-blur-xl">
          {LOCALES.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLocale(l);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-[10px] uppercase tracking-[0.22em] transition-colors hover:bg-titanium ${
                locale === l ? "text-alpine" : "text-silver"
              }`}
            >
              <span>{LOCALE_META[l].flag}</span>
              <span>{LOCALE_META[l].label}</span>
              <span className="ml-auto text-[9px] text-mist">{LOCALE_META[l].native}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
