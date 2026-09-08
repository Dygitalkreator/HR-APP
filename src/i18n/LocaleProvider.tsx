import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, LOCALES, isLocale, type Locale } from "./config";
import { dict, type Dict } from "./dictionaries";

interface Ctx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
}

const LocaleCtx = createContext<Ctx | null>(null);
const STORAGE_KEY = "zl.locale";

function detect(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const url = new URL(window.location.href);
  const q = url.searchParams.get("lang");
  if (isLocale(q)) return q;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (isLocale(stored)) return stored;
  const nav = navigator.language.slice(0, 2).toLowerCase();
  if (isLocale(nav)) return nav;
  return DEFAULT_LOCALE;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    setLocaleState(detect());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = (l: Locale) => {
    if (!LOCALES.includes(l)) return;
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
      const url = new URL(window.location.href);
      url.searchParams.set("lang", l);
      window.history.replaceState({}, "", url.toString());
    } catch {}
  };

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, t: dict[locale] }),
    [locale],
  );

  return <LocaleCtx.Provider value={value}>{children}</LocaleCtx.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleCtx);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useT() {
  return useLocale().t;
}
