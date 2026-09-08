import type { ReactNode } from "react";

const notice = "Dieser Text ist eine Platzhalter-Struktur und muss vor Live-Schaltung des Shops von einem Rechtsanwalt/Steuerberater geprüft und vervollständigt werden.";

interface LegalSection {
  title: string;
  content: ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro?: string;
  sections: LegalSection[];
}

export function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <main className="bg-void pt-32 md:pt-40">
      <header className="border-b border-line">
        <div className="mx-auto max-w-[1600px] px-6 pb-16 md:px-12 md:pb-20">
          <p className="label">{eyebrow}</p>
          <h1 className="mt-6 max-w-6xl font-display text-[clamp(52px,10vw,150px)] leading-[0.9] tracking-wider text-balance">{title}</h1>
          {intro && <p className="mt-8 max-w-3xl text-silver md:text-lg">{intro}</p>}
        </div>
      </header>

      <section className="border-b border-line bg-titanium py-10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div data-legal-notice className="border-l-4 border-alpine bg-void p-6 md:p-8">
            <p className="label !text-alpine">◆ Wichtiger Hinweis</p>
            <p className="mt-4 max-w-4xl font-medium text-silver">{notice}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-4xl divide-y divide-line">
          {sections.map((section, index) => (
            <section key={section.title} className="grid gap-5 py-10 first:pt-0 md:grid-cols-[90px_1fr] md:gap-10">
              <p className="font-mono text-[11px] text-mist">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 className="font-display text-3xl tracking-wider md:text-4xl">{section.title}</h2>
                <div className="mt-5 space-y-4 whitespace-pre-line text-silver">{section.content}</div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}