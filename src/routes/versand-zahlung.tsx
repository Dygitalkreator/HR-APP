import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/versand-zahlung")({
  head: () => ({ meta: [
    { title: "Versand & Zahlung — ZONES LAB™" },
    { name: "description", content: "Informationen zu Versand, Lieferzeiten und Zahlungsmethoden bei ZONES LAB." },
    { property: "og:title", content: "Versand & Zahlung — ZONES LAB™" },
    { property: "og:description", content: "Informationen zu Versand, Lieferzeiten und Zahlungsmethoden." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: VersandZahlungPage,
});

function VersandZahlungPage() {
  return <LegalPage eyebrow="Shop · Information" title="VERSAND & ZAHLUNG" sections={[
    { title: "Versandkosten", content: <p>[PLATZHALTER: Versandkosten nach Zielland und Bestellwert]</p> },
    { title: "Lieferzeiten", content: <p>[PLATZHALTER: Lieferzeiten und Bearbeitungsdauer]</p> },
    { title: "Zahlungsmethoden", content: <p>[PLATZHALTER: angebotene Zahlungsmethoden]</p> },
  ]} />;
}
