import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const toolsPlaceholder = "[PLATZHALTER: abhängig von tatsächlich eingesetzten Tools/Diensten]";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: [
    { title: "Datenschutz — ZONES LAB™" },
    { name: "description", content: "Platzhalterstruktur der Datenschutzhinweise von ZONES LAB nach Art. 13 DSGVO." },
    { property: "og:title", content: "Datenschutz — ZONES LAB™" },
    { property: "og:description", content: "Platzhalterstruktur der Datenschutzhinweise nach Art. 13 DSGVO." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return <LegalPage eyebrow="Legal · Art. 13 DSGVO" title="DATENSCHUTZ" sections={[
    { title: "Verantwortlicher", content: <p>[PLATZHALTER: Verantwortlicher und Kontaktdaten]</p> },
    { title: "Datenerhebung und -verarbeitung", content: <p>{toolsPlaceholder}</p> },
    { title: "Cookies", content: <p>{toolsPlaceholder}</p> },
    { title: "Hosting", content: <p>{toolsPlaceholder}</p> },
    { title: "Kontaktaufnahme", content: <p>{toolsPlaceholder}</p> },
    { title: "Rechte der betroffenen Person", content: <p>{toolsPlaceholder}</p> },
    { title: "Widerspruchsrecht", content: <p>{toolsPlaceholder}</p> },
  ]} />;
}