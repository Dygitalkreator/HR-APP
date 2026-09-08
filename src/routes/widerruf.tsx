import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/widerruf")({
  head: () => ({ meta: [
    { title: "Widerrufsrecht — ZONES LAB™" },
    { name: "description", content: "Muster-Widerrufsbelehrung und Muster-Widerrufsformular für ZONES LAB." },
    { property: "og:title", content: "Widerrufsrecht — ZONES LAB™" },
    { property: "og:description", content: "Muster-Widerrufsbelehrung und Muster-Widerrufsformular." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: WiderrufPage,
});

function WiderrufPage() {
  return <LegalPage eyebrow="Legal · Verbraucherrecht" title="WIDERRUFSBELEHRUNG" intro="Muster nach Art. 246a § 1 Abs. 2 EGBGB, Anlage 1 und Anlage 2." sections={[
    { title: "Widerrufsrecht", content: <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.</p> },
    { title: "Ausübung des Widerrufs", content: <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns<br /><br />[PLATZHALTER: Firmenname]<br />[PLATZHALTER: Anschrift]<br />[PLATZHALTER: Telefonnummer]<br />[PLATZHALTER: E-Mail-Adresse]<br /><br />mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das unten stehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p> },
    { title: "Folgen des Widerrufs", content: <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p> },
    { title: "Rücksendung der Waren", content: <p>Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist. Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.<br /><br />Sie tragen die unmittelbaren Kosten der Rücksendung der Waren. Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.</p> },
    { title: "Muster-Widerrufsformular", content: <p>(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)<br /><br />An [PLATZHALTER: Firmenname, Anschrift, E-Mail-Adresse]:<br /><br />Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*):<br /><br />[PLATZHALTER: Waren/Dienstleistung]<br /><br />Bestellt am (*) / erhalten am (*): [PLATZHALTER]<br />Name des/der Verbraucher(s): [PLATZHALTER]<br />Anschrift des/der Verbraucher(s): [PLATZHALTER]<br />Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): [PLATZHALTER]<br />Datum: [PLATZHALTER]<br /><br />(*) Unzutreffendes streichen.</p> },
  ]} />;
}
