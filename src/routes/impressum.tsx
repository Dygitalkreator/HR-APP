import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [
    { title: "Impressum — ZONES LAB™" },
    { name: "description", content: "Impressumsstruktur und Anbieterangaben von ZONES LAB." },
    { property: "og:title", content: "Impressum — ZONES LAB™" },
    { property: "og:description", content: "Impressumsstruktur und Anbieterangaben von ZONES LAB." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return <LegalPage eyebrow="Legal · § 5 TMG" title="IMPRESSUM" sections={[
    { title: "Anbieter", content: <p>[PLATZHALTER: Firma]<br />Rechtsform: [PLATZHALTER]</p> },
    { title: "Anschrift", content: <p>[PLATZHALTER: Straße, PLZ, Ort]</p> },
    { title: "Vertretung", content: <p>Vertretungsberechtigte Person: [PLATZHALTER]</p> },
    { title: "Kontakt", content: <p>E-Mail: [PLATZHALTER]<br />Telefon: [PLATZHALTER]</p> },
    { title: "Registerangaben", content: <p>Handelsregister: [PLATZHALTER]<br />Registernummer: [PLATZHALTER]</p> },
    { title: "Umsatzsteuer", content: <p>USt-IdNr.: [PLATZHALTER]</p> },
    { title: "Redaktionell verantwortlich", content: <p>Verantwortlich nach § 18 Abs. 2 MStV: [PLATZHALTER]</p> },
  ]} />;
}