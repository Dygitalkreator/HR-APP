import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n/LocaleProvider";
import { productsForZone, type FinderZone } from "@/content/products";
import { usePrefersReducedMotion } from "@/hooks/useMotion";

/**
 * Motion Phase 3.2 — Zone-Map als interaktives Diagramm.
 *
 * Abstrakte, rein linienbasierte Körper-Silhouette (Void/Titanium). Hover oder
 * Fokus auf eine Zone hebt die zugehörigen Module hervor — die Zuordnung kommt
 * aus der bestehenden ZONE_MATCH-Logik in src/content/products.ts, sortiert
 * nach Protokollphase (PREP → FINISH).
 *
 * Kein scroll-linked Effekt → nicht Budget-relevant.
 * prefers-reduced-motion: Interaktion bleibt vollständig erhalten, nur die
 * Übergangs-Transitions werden auf 0 ms gesetzt.
 */

const ZONES: { id: FinderZone; hotspot: { cx: number; cy: number; rx: number; ry: number }; label: { x: number; y: number } }[] = [
  { id: "face", hotspot: { cx: 100, cy: 42, rx: 26, ry: 30 }, label: { x: 150, y: 42 } },
  { id: "axilla", hotspot: { cx: 100, cy: 118, rx: 46, ry: 26 }, label: { x: 166, y: 118 } },
  { id: "body", hotspot: { cx: 100, cy: 250, rx: 44, ry: 110 }, label: { x: 158, y: 262 } },
];

export function ZoneMap() {
  const t = useT();
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState<FinderZone>("axilla");
  const items = productsForZone(active);
  const dur = reduced ? "0ms" : "300ms";

  return (
    <section className="border-t border-line bg-void py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <p className="label !text-alpine">◆ {t.zoneMap.eyebrow}</p>
        <h2 className="mt-4 font-display text-[clamp(28px,4.4vw,60px)] leading-[0.95] tracking-wider">
          {t.zoneMap.title}
        </h2>
        <p className="mt-5 max-w-xl text-silver md:text-lg">{t.zoneMap.lead}</p>

        <div className="mt-12 grid gap-px bg-line-mid md:grid-cols-12">
          {/* Liniengrafik */}
          <div className="bg-titanium p-6 md:col-span-5 md:p-10">
            <p className="label">{t.zoneMap.hint}</p>
            <svg
              viewBox="0 0 200 400"
              className="mx-auto mt-6 block h-auto w-full max-w-[320px] text-line-mid"
              role="group"
              aria-label={t.zoneMap.title}
            >
              {/* Raster */}
              <g stroke="currentColor" strokeWidth="0.4" opacity="0.5">
                <line x1="100" y1="4" x2="100" y2="396" strokeDasharray="3 5" />
                <line x1="14" y1="200" x2="186" y2="200" strokeDasharray="3 5" />
              </g>

              {/* Silhouette — reine Linien, kein Foto */}
              <g fill="none" stroke="currentColor" strokeWidth="1" className="text-silver">
                <circle cx="100" cy="40" r="24" />
                <path d="M100 64 v18" />
                <path d="M56 100 C74 86 126 86 144 100" />
                <path d="M62 100 C58 140 56 176 60 214" />
                <path d="M138 100 C142 140 144 176 140 214" />
                <path d="M60 214 C80 226 120 226 140 214" />
                <path d="M56 100 C40 128 34 158 34 190" />
                <path d="M144 100 C160 128 166 158 166 190" />
                <path d="M78 222 C74 280 74 330 78 380" />
                <path d="M122 222 C126 280 126 330 122 380" />
                <path d="M98 226 v152" />
              </g>

              {/* Zonen-Hotspots */}
              {ZONES.map((z) => {
                const on = active === z.id;
                return (
                  <g key={z.id}>
                    <ellipse
                      cx={z.hotspot.cx}
                      cy={z.hotspot.cy}
                      rx={z.hotspot.rx}
                      ry={z.hotspot.ry}
                      fill="currentColor"
                      className={on ? "text-alpine" : "text-line-mid"}
                      fillOpacity={on ? 0.16 : 0}
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeDasharray="2 3"
                      style={{ transition: `fill-opacity ${dur} linear` }}
                    />
                    <line
                      x1={z.hotspot.cx + z.hotspot.rx}
                      y1={z.hotspot.cy}
                      x2={z.label.x}
                      y2={z.label.y}
                      stroke="currentColor"
                      strokeWidth="0.6"
                      className={on ? "text-alpine" : "text-line-mid"}
                    />
                    <circle
                      cx={z.label.x}
                      cy={z.label.y}
                      r="2.5"
                      fill="currentColor"
                      className={on ? "text-alpine" : "text-line-mid"}
                    />
                    {/* Trefferfläche */}
                    <ellipse
                      cx={z.hotspot.cx}
                      cy={z.hotspot.cy}
                      rx={z.hotspot.rx}
                      ry={z.hotspot.ry}
                      fill="transparent"
                      className="cursor-pointer"
                      onMouseEnter={() => setActive(z.id)}
                      onClick={() => setActive(z.id)}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Zonen-Auswahl — Tastatur- und Touch-Zugang */}
            <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label={t.zoneMap.hint}>
              {ZONES.map((z) => {
                const on = active === z.id;
                return (
                  <button
                    key={z.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onMouseEnter={() => setActive(z.id)}
                    onFocus={() => setActive(z.id)}
                    onClick={() => setActive(z.id)}
                    className={`border px-3 py-3 font-mono text-[9px] md:px-4 md:text-[10px] uppercase tracking-[0.18em] ${
                      on ? "border-alpine text-alpine" : "border-line-mid text-silver hover:border-silver"
                    }`}
                    style={{ transition: `color ${dur} linear, border-color ${dur} linear` }}
                  >
                    {t.zoneMap.zones[z.id]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Modul-Liste der aktiven Zone */}
          <div className="bg-void p-6 md:col-span-7 md:p-10">
            <p className="label !text-alpine">◆ {t.zoneMap.zones[active]}</p>
            <ul className="mt-6 grid gap-px bg-line-mid">
              {items.map((p) => (
                <li key={p.slug} className="bg-void">
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="flex items-center gap-5 p-4 hover:bg-titanium"
                    style={{ transition: `background-color ${dur} linear` }}
                  >
                    <span className="h-16 w-16 shrink-0 overflow-hidden border border-line-mid md:h-20 md:w-20">
                      <img src={p.img} alt={p.name} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-alpine">
                        {p.sku} · {p.step}
                      </span>
                      <span className="mt-1 block truncate font-display text-lg tracking-wider">{p.name}</span>
                    </span>
                    <span className="font-mono text-[11px] text-mist">€{p.price}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-3 border border-line-mid px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-silver hover:border-alpine hover:text-alpine"
              style={{ transition: `color ${dur} linear, border-color ${dur} linear` }}
            >
              {t.zoneMap.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
