import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  recommendProducts,
  type FinderGoal,
  type FinderSkin,
  type FinderZone,
} from "@/content/products";
import { useCart } from "@/lib/cart";
import { useT } from "@/i18n/LocaleProvider";
import { Button } from "@/components/ui/button";

export function RoutineFinder() {
  const t = useT();
  const f = t.productsPage.finder;
  const { add } = useCart();
  const [open, setOpen] = useState(false);
  const [zone, setZone] = useState<FinderZone | null>(null);
  const [skin, setSkin] = useState<FinderSkin | null>(null);
  const [goal, setGoal] = useState<FinderGoal | null>(null);

  const results = useMemo(
    () => (zone && skin && goal ? recommendProducts({ zone, skin, goal }) : []),
    [zone, skin, goal],
  );

  const chip = (active: boolean) =>
    `label border px-4 py-2 transition-colors ${
      active
        ? "border-alpine bg-alpine !text-primary-foreground"
        : "border-line-mid hover:border-alpine hover:!text-silver"
    }`;

  if (!open) {
    return (
      <Button
        type="button"
        variant="outline"
        onClick={() => setOpen(true)}
        className="label h-auto rounded-none border-line-mid bg-transparent px-4 py-2 shadow-none transition-colors hover:border-alpine hover:bg-transparent hover:!text-silver"
      >
        <span aria-hidden>◆</span>
        {f.cta}
      </Button>
    );
  }

  return (
    <div className="border border-line-mid bg-titanium/40 p-6 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="label !text-alpine">{f.cta}</p>
          <h2 className="mt-3 font-display text-[clamp(24px,3vw,36px)] leading-tight tracking-wider">
            {f.title}
          </h2>
          <p className="mt-3 max-w-lg text-sm text-silver">{f.hint}</p>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => setOpen(false)}
          className="label h-auto rounded-none border-line-mid bg-transparent px-4 py-2 shadow-none transition-colors hover:border-alpine hover:bg-transparent hover:!text-silver"
        >
          {f.close}
        </Button>
      </div>

      <div className="mt-8 space-y-5">
        <Row label={f.zoneLabel}>
          {(
            [
              ["axilla", f.zone.axilla],
              ["face", f.zone.face],
              ["body", f.zone.body],
            ] as [FinderZone, string][]
          ).map(([k, l]) => (
            <Button key={k} type="button" variant="outline" onClick={() => setZone(k)} className={`h-auto rounded-none bg-transparent shadow-none hover:bg-transparent ${chip(zone === k)}`}>
              {l}
            </Button>
          ))}
        </Row>
        <Row label={f.skinLabel}>
          {(
            [
              ["robust", f.skin.robust],
              ["sensitive", f.skin.sensitive],
              ["dry", f.skin.dry],
            ] as [FinderSkin, string][]
          ).map(([k, l]) => (
            <Button key={k} type="button" variant="outline" onClick={() => setSkin(k)} className={`h-auto rounded-none bg-transparent shadow-none hover:bg-transparent ${chip(skin === k)}`}>
              {l}
            </Button>
          ))}
        </Row>
        <Row label={f.goalLabel}>
          {(
            [
              ["fresh", f.goal.fresh],
              ["recover", f.goal.recover],
              ["finish", f.goal.finish],
            ] as [FinderGoal, string][]
          ).map(([k, l]) => (
            <Button key={k} type="button" variant="outline" onClick={() => setGoal(k)} className={`h-auto rounded-none bg-transparent shadow-none hover:bg-transparent ${chip(goal === k)}`}>
              {l}
            </Button>
          ))}
        </Row>
      </div>

      <div className="mt-8 border-t border-line pt-6">
        {results.length === 0 ? (
          <p className="text-sm text-mist">{f.empty}</p>
        ) : (
          <>
            <div className="flex items-center justify-between gap-4">
              <p className="label !text-alpine">{f.resultLabel}</p>
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  setZone(null);
                  setSkin(null);
                  setGoal(null);
                }}
                className="label h-auto rounded-none p-0 transition-colors hover:bg-transparent hover:!text-silver"
              >
                {f.reset}
              </Button>
            </div>
            <ul className="mt-5 grid gap-px bg-line-mid sm:grid-cols-2 lg:grid-cols-3">
              {results.map((p) => (
                <li key={p.slug} className="flex flex-col gap-3 bg-void p-5">
                  <div className="flex items-start gap-4">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-16 w-14 shrink-0 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="min-w-0">
                      <p className="label">
                        {p.sku} · {p.step}
                      </p>
                      <p className="mt-1 font-display text-lg leading-tight tracking-wider">
                        {p.name}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-silver">{f.reasons[p.slug]}</p>
                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
                    <span className="font-display text-xl">€{p.price}</span>
                    <Button
                      type="button"
                      onClick={() =>
                        add({
                          id: p.slug,
                          kind: "product",
                          name: p.name,
                          price: p.price,
                          img: p.img,
                          meta: `${p.sku} · ${p.volume}`,
                        })
                      }
                      className="ml-auto h-auto rounded-none bg-alpine px-4 py-2 text-[11px] font-medium tracking-wide text-primary-foreground shadow-none transition-colors hover:bg-silver hover:text-void"
                    >
                      {t.common.addToCart}
                    </Button>
                    <Link
                      to="/products/$slug"
                      params={{ slug: p.slug }}
                      className="border border-line-mid px-4 py-2 text-[11px] font-medium tracking-wide text-silver transition-colors hover:border-alpine hover:text-alpine"
                    >
                      {t.common.learnMore}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="label w-28 shrink-0 !text-mist">{label}</span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
