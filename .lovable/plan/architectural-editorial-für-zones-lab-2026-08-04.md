# Architectural Editorial für ZONES LAB

## Zielbild

Die Landingpage und die vier Hauptseiten werden zu einem zusammenhängenden Editorial-System: große, thematisch präzise Bildstrecken, ruhige Magazin-Kompositionen, klar lesbare Produktwege und belastbare Zahlen-/Faktenmodule. Die gewählte Richtung bleibt verbindlich:

- **Farbwelt:** Alpine Heritage (`#FAFAFA`, `#0F2A3F`, `#A8C8E0`, `#B46A45`)
- **Typografie:** Bebas Neue für Headlines, Barlow für Fließtext, JetBrains Mono für technische Daten
- **Layout:** Architectural Editorial / Editorial Magazine
- **Qualitätsregel:** Keine erfundenen Zertifikate, Studienwerte, Wirksamkeitsprozente oder Nachhaltigkeitsversprechen

## 1. Landingpage: drei klare Markenblöcke

- Den aktuellen Vierer-Einstieg auf exakt drei visuelle Säulen reduzieren:
  1. **AX Cosmetics** – alle AX-Produkte plus OLF-01 Signature Body Oil
  2. **ZONES Fabrics** – Applied Fiber Science
  3. **Accessories** – kuratierte europäische Ritualobjekte
- OLF-01 nicht länger als eigenständige Markenwelt zeigen, sondern als Duft-/Signature-Erweiterung innerhalb von AX Cosmetics führen.
- Die drei Säulen als große, magazinartige Bildflächen mit Bild, kurzer Einordnung, Umfang und eindeutigem CTA aufbauen.
- Hero-, Qualitäts- und Protokollabschnitte so nachschärfen, dass die Landingpage nicht erneut dieselben Marken- oder Systemaussagen wiederholt.
- SEO-Titel und Beschreibung an die neue Drei-Bereiche-Architektur anpassen.

## 2. Collections: System, Kategorie und Produktbild verbinden

- Den bestehenden Shop-Einstieg von einem Filter-plus-Katalog zu einer redaktionellen Systemübersicht weiterentwickeln.
- Einstieg mit AX-Systemgrafik und den vier Phasen **PREP · ENGAGE · RECOVER · FINISH**; Produktanzahlen und Zuordnung werden aus den vorhandenen Produktdaten abgeleitet.
- Jede Kategorie erhält einen eigenen Magazin-Auftakt aus thematischem Bild/Makro, kurzer Aufgabe im Protokoll und anschließendem unverändert zweispaltigem Produktraster.
- OLF-01 wird am Ende als **Signature innerhalb AX Cosmetics** präsentiert: eigener visueller Spread, zwei Varianten, klare Kennzeichnung „außerhalb des AX-Nummernsystems", aber keine vierte Markenwelt.
- Routine Finder, Filter, Add-to-Cart und Produktlinks bleiben vollständig erhalten.

## 3. Fabrics: Materialbelege statt reiner Lifestyle-Strecke

- Den starken Lifestyle-Bestand in eine klar kuratierte Bilddramaturgie überführen: Hero, Materialmakro, getragenes Produkt, Konstruktion/Detail, Produktangebot.
- Ein „Material Dossier" ergänzt nachvollziehbare Spezifikationen aus den vorhandenen Produktdaten, etwa Materialmischung, 480-gsm-Angabe und konkrete Konstruktionsdetails.
- Keine fiktiven Laborprüfungen wie Zugfestigkeit, Atmungsaktivitätswerte oder Organic-Content-Prozente.
- Pro Produkt eine kompakte visuelle Spezifikationsleiste und ein Detail-/Lifestyle-Wechsel; Variantenwahl, Add-to-Cart und Detailseiten bleiben erhalten.
- Der lange Bild-Marquee wird in eine bewusst gesetzte Editorial-Bildstrecke überführt, damit Bilder nicht wie ein dekoratives Band, sondern wie Qualitätsbelege wirken.

## 4. Accessories: Herkunft, Material und Handwerk sichtbar machen

- Einen bildstarken Hero ergänzen, der Olivenholz, Porzellan/Melamin und Rasur-Ritual als Materialwelt zeigt.
- Vor dem Produktraster einen „Object & Origin"-Spread einsetzen: kuratiert statt selbst entwickelt, europäischer Bezug, natürliche Maserungsvarianz und Materialpflege.
- Produktkarten weiterhin kaufbar halten, aber stärker als Objekt-Dossiers strukturieren: Material, Maße/Umfang, Herkunftshinweis, Preis und klarer Detailzugang.
- Bestehende Bilder durch thematische Makro-/Handwerksausschnitte im Editorial-Rhythmus ergänzen; keine unbestätigten Werkstätten oder Herkunftsorte erfinden.

## 5. Technology: belastbare Datenvisualisierung

- Die bestehende Technology-Seite als technischen Kern des Systems behalten, aber Diagramme visuell vereinheitlichen und inhaltlich prüfen.
- Visualisieren:
  - wasserfreie vs. wasserbasierte Formulierungsarchitektur, nur mit sauber qualifizierter Vergleichsbasis,
  - Schichten/Funktionslogik der Soda-in-Oil-Matrix,
  - Zuordnung der Technologie-Claims zu den AX-Modulen,
  - Verpackungs-, INCI-, Volumen- und Chargentransparenz als nachvollziehbare Qualitätskette.
- Unsupported Claims, pauschale Vergleichshäkchen und nicht belegte Prozentwerte entfernen oder als konzeptionelle Architektur statt Messresultat darstellen.
- SVGs und Charts vollständig auf semantische Design-Tokens umstellen; keine hart codierten Fremdfarben.
- Die Fabrics-Cross-Sell-Fläche durch einen systemlogischen Übergang zu AX Cosmetics/Collections ersetzen, damit Technology nicht thematisch abdriftet.

## 6. Gemeinsames UI-System und Inhalte

- Wiederverwendbare Editorial-Bausteine für Kapitelkopf, Bild-Caption, Faktenleiste, Spezifikationsmatrix und Diagrammlegende erstellen.
- Bestehende Farben und Schriften beibehalten; keine visuelle Abkehr in dunkles Noir oder Serif-Luxus.
- Alle neuen sichtbaren Texte sauber in den vorhandenen sechs Sprachen pflegen.
- Neue Bilder nur dort erzeugen, wo vorhandene Assets Material, Anwendung oder Kategorie nicht glaubwürdig zeigen; bestehende hochwertige Bilder werden bevorzugt.
- Animationen bleiben langsam und kontrolliert: Bild-Reveals, dezente Crop-Bewegung und Chart-Zeichnung; `prefers-reduced-motion` bleibt berücksichtigt.

## Technische Umsetzung und Prüfung

- Betroffene Routen: Landingpage, Collections, Fabrics, Accessories und Technology; Produktdaten, Warenkorb und Detailrouten bleiben funktional unverändert.
- Metadaten jeder betroffenen Route werden einzigartig und passend aktualisiert.
- Die gemeldete Build-Meldung war ein temporärer Infrastrukturfehler ohne konkreten Quellcode-Stacktrace; nach der Umsetzung wird ein frischer Build als eigenständige Prüfung ausgeführt.
- Visuelle QA mit Playwright auf Desktop und Mobile: drei Landing-Blöcke, responsive Editorial-Spreads, Diagramm-Lesbarkeit, keine Überlappungen, kein horizontaler Overflow, funktionierende Filter/Links/Add-to-Cart.
- Abschließend Fakten-Audit gegen die im Projekt hinterlegten Produkt- und Materialspezifikationen; erfundene Werte aus dem Design-Prototyp werden ausdrücklich nicht übernommen.