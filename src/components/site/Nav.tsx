import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useT } from "@/i18n/LocaleProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import CartButton from "./CartButton";

export default function Nav() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const shopLinks = [
    { to: "/products", label: t.nav.products },
    { to: "/shield-layer", label: t.nav.shield },
    { to: "/superfood", label: "Superfood" },
    { to: "/accessories", label: t.nav.accessories },
    { to: "/art", label: t.nav.art },
  ];

  const topLinks = [
    { to: "/smart", label: t.nav.smart },
    { to: "/journal", label: t.nav.journal },
    { to: "/architects-club", label: t.nav.club },
  ];

  const shopActive = shopLinks.some((l) => location.pathname.startsWith(l.to));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setShopOpen(false);
    setMobileShopOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (shopRef.current && !shopRef.current.contains(e.target as Node)) setShopOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShopOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const linkClass = "text-[15px] font-medium text-silver transition-colors hover:text-alpine";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open || shopOpen ? "bg-void/85 backdrop-blur-xl border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1600px] items-center justify-between px-6 md:h-[84px] md:px-12">
        <Link to="/" className="font-display text-[22px] tracking-[0.14em] md:text-[26px]">
          ZONES LAB<span className="text-mist">™</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          <div
            ref={shopRef}
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button
              type="button"
              aria-expanded={shopOpen}
              aria-haspopup="true"
              onClick={() => setShopOpen(true)}
              className={`flex items-center gap-1.5 py-2 text-[15px] font-medium transition-colors hover:text-alpine ${
                shopActive ? "text-alpine" : "text-silver"
              }`}
            >
              {t.nav.shop}
              <span className={`text-[10px] transition-transform ${shopOpen ? "rotate-180" : ""}`}>▾</span>
            </button>

            {shopOpen && (
              <div className="absolute left-0 top-full min-w-[220px] border border-line bg-void/95 backdrop-blur-xl">
                <div className="flex flex-col py-2">
                  {shopLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="px-5 py-2.5 text-[14px] font-medium text-silver transition-colors hover:bg-white/5 hover:text-alpine"
                      activeProps={{ className: "px-5 py-2.5 text-[14px] font-medium text-alpine bg-white/5" }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {topLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={linkClass}
              activeProps={{ className: "text-[15px] font-medium text-alpine border-b border-alpine pb-0.5" }}
            >
              {l.label}
            </Link>
          ))}

          <LanguageSwitcher />

          <CartButton label={t.nav.shop} />
        </div>

        <button
          aria-label={t.nav.menu}
          className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`h-px w-6 bg-silver transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-silver transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-void/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1 px-6 py-6">
            <button
              type="button"
              aria-expanded={mobileShopOpen}
              onClick={() => setMobileShopOpen((o) => !o)}
              className="flex min-h-[44px] items-center justify-between text-xl font-medium text-silver"
            >
              {t.nav.shop}
              <span className={`text-sm transition-transform ${mobileShopOpen ? "rotate-180" : ""}`}>▾</span>
            </button>

            {mobileShopOpen && (
              <div className="mb-2 flex flex-col border-l border-line pl-4">
                {shopLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="flex min-h-[44px] items-center text-base font-medium text-mist hover:text-alpine"
                    activeProps={{ className: "flex min-h-[44px] items-center text-base font-medium text-alpine" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            {topLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="flex min-h-[44px] items-center text-xl font-medium text-silver"
              >
                {l.label}
              </Link>
            ))}

            <LanguageSwitcher mobile />
            <CartButton label={t.nav.shop} className="mt-4 justify-center py-3" />
          </div>
        </div>
      )}
    </nav>
  );
}
