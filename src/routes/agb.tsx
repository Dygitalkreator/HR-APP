import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const placeholder = "[PLATZHALTER: rechtlich zu prüfender Klauseltext]";

export const Route = createFileRoute("/agb")({
  head: () => ({ meta: [
    { title: "AGB — ZONES LAB™" },
    { name: "description", content: "Platzhalterstruktur der Allgemeinen Geschäftsbedingungen von ZONES LAB." },
    { property: "og:title", content: "AGB — ZONES LAB™" },
    { property: "og:description", content: "Platzhalterstruktur der Allgemeinen Geschäftsbedingungen von ZONES LAB." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: AgbPage,
});

function AgbPage() {
  return <LegalPage eyebrow="Legal · Vertragsgrundlagen" title="ALLGEMEINE GESCHÄFTSBEDINGUNGEN" sections={[
    "§ 1 Geltungsbereich", "§ 2 Vertragsschluss", "§ 3 Preise und Versandkosten", "§ 4 Lieferung", "§ 5 Zahlung", "§ 6 Eigentumsvorbehalt", "§ 7 Gewährleistung", "§ 8 Haftung", "§ 9 Schlussbestimmungen",
  ].map((title) => ({ title, content: <p>{placeholder}</p> }))} />;
}