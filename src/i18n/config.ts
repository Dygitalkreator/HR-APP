export const LOCALES = ["de", "en", "fr", "it", "nl", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "de";

export const LOCALE_META: Record<Locale, { label: string; flag: string; native: string }> = {
  de: { label: "DE", flag: "🇩🇪", native: "Deutsch" },
  en: { label: "EN", flag: "🇬🇧", native: "English" },
  fr: { label: "FR", flag: "🇫🇷", native: "Français" },
  it: { label: "IT", flag: "🇮🇹", native: "Italiano" },
  nl: { label: "NL", flag: "🇳🇱", native: "Nederlands" },
  es: { label: "ES", flag: "🇪🇸", native: "Español" },
};

export const isLocale = (v: unknown): v is Locale =>
  typeof v === "string" && (LOCALES as readonly string[]).includes(v);
