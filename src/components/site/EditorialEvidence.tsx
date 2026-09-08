import type { ReactNode } from "react";
import { StaggerWords } from "@/components/motion/StaggerWords";

export function EditorialChapter({ index, eyebrow, title, lead, aside }: { index: string; eyebrow: string; title: string; lead?: string; aside?: ReactNode }) {
  return (
    <div className="grid gap-8 md:grid-cols-12 md:items-end">
      <div className="min-w-0 md:col-span-7">
        <p className="label text-heritage">{index} / {eyebrow}</p>
        <StaggerWords as="h2" text={title} className="mt-5 text-balance font-display text-[clamp(48px,7vw,104px)] leading-[0.88]" />
      </div>

      <div className="min-w-0 md:col-span-4 md:col-start-9">
        {lead && <p className="text-silver md:text-lg">{lead}</p>}
        {aside}
      </div>
    </div>
  );
}

export function EvidenceStrip({ items, inverted = false }: { items: { value: string; label: string }[]; inverted?: boolean }) {
  return (
    <dl className={`grid gap-px ${inverted ? "bg-primary-foreground/20" : "bg-line-mid"} sm:grid-cols-2 lg:grid-cols-4`}>
      {items.map((item, index) => (
        <div key={`${item.value}-${item.label}`} className={inverted ? "bg-alpine p-5 md:p-7" : "bg-void p-5 md:p-7"}>
          <dt className={`font-mono text-[10px] uppercase tracking-[0.18em] ${inverted ? "text-primary-foreground/55" : "text-mist"}`}>0{index + 1} · {item.label}</dt>
          <dd className={`mt-5 font-display text-3xl leading-none md:text-4xl ${inverted ? "text-primary-foreground" : "text-silver"}`}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ImageCaption({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <p className={`label absolute bottom-5 left-5 right-5 ${dark ? "!text-primary-foreground/80" : ""}`}>{children}</p>;
}