import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n/LocaleProvider";

export default function Footer() {
  const t = useT();
  return (
    <footer className="relative border-t border-line bg-void">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12">
        <div className="grid gap-16 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="font-display text-[28px] tracking-[0.16em]">
              ZONES LAB<span className="text-mist">™</span>
            </div>
            <p className="label mt-4">{t.footer.tagline}</p>
            <p className="mt-8 max-w-md text-sm text-mist">{t.footer.blurb}</p>
          </div>

          <div>
            <p className="label">{t.footer.system}</p>
            <ul className="mt-4 space-y-2 text-sm text-silver">
              <li><Link to="/products" className="hover:text-alpine">{t.nav.products}</Link></li>
              <li><Link to="/protocol" className="hover:text-alpine">{t.nav.protocol}</Link></li>
              <li><Link to="/shield-layer" className="hover:text-alpine">{t.nav.shield}</Link></li>
              <li><Link to="/superfood" className="hover:text-alpine">Superfood</Link></li>
              <li><Link to="/smart" className="hover:text-alpine">{t.nav.smart}</Link></li>
              <li><Link to="/architects-club" className="hover:text-alpine">{t.nav.club}</Link></li>
              <li><Link to="/journal" className="hover:text-alpine">{t.nav.journal}</Link></li>
            </ul>
          </div>

          <div>
            <p className="label">{t.footer.lab}</p>
            <ul className="mt-4 space-y-2 text-sm text-silver">
              <li><Link to="/contact" className="hover:text-alpine">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <p className="label">{t.footer.legal}</p>
            <ul className="mt-4 space-y-2 text-sm text-silver">
              <li><Link to="/impressum" className="hover:text-alpine">{t.footer.imprint}</Link></li>
              <li><Link to="/widerruf" className="hover:text-alpine">{t.footer.withdrawal}</Link></li>
              <li><Link to="/agb" className="hover:text-alpine">{t.footer.terms}</Link></li>
              <li><Link to="/datenschutz" className="hover:text-alpine">{t.footer.privacy}</Link></li>
              <li><Link to="/versand-zahlung" className="hover:text-alpine">{t.footer.shippingPayment}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-[10px] uppercase tracking-[0.22em] text-mist md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Zones Lab GmbH · {t.footer.rights}</span>
          <span>{t.footer.origin}</span>
        </div>
      </div>
    </footer>
  );
}
