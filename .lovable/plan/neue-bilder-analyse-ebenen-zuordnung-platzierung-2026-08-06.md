# Neue Bilder: Analyse, Ebenen-Zuordnung, Platzierung

## Analyse der 10 Bilder (einzeln)

| # | Datei | Motiv | Stimmung | Farbpalette | Umfeld | Ebene |
|---|---|---|---|---|---|---|
| 1 | IMG_0143 | Boxhandschuhe am Ringseil über Schlucht | still, vor dem Kampf | Oxblood, Kalkweiß, Gewitterblau | reales Umfeld | ATMOSPHERE |
| 2 | IMG_0144 | Ski + Stöcke im Schneehang | leer, kalt, reduziert | Ice, Grau, Weiß | reales Umfeld | ATMOSPHERE |
| 3 | IMG_0142 | Klettergurt, Karabiner, Seil auf Felsplatte | rau, funktional | Fels-Grau, Petrol, Sand | reales Umfeld | ATMOSPHERE |
| 4 | IMG_0140 | Tennisschläger hinter Zaunnetz | nostalgisch, Court | Netzschwarz, Court-Grün, Wolkenweiß | reales Umfeld | ATMOSPHERE |
| 5 | IMG_0139 | Blick über Bergkamm, Schuhspitzen im Bild | Nebel, Anstieg, POV | Nebelweiß, Moosgrün, Blaugrau | reales Umfeld | ATMOSPHERE |
| 6 | IMG_0110 | Bogen und Zielscheibe in Steppe | Präzision, Weite | Ocker, Teal, Staubblau | reales Umfeld | ATMOSPHERE |
| 7 | IMG_0107 | Rennrad am Pass | Gegenlicht, Reduktion | Titanium, Asphaltgrau, Fels | reales Umfeld | ATMOSPHERE |
| 8 | IMG_0108 | Freibad-Becken vor Bergmassiv | kühl, morgens, ruhig | Ice-Türkis, Beton, Dunst | reales Umfeld | ATMOSPHERE |
| 9 | IMG_0109 | Hürden auf Tartanbahn vor Wolkenfront | Spannung vor dem Start | Tartanrot, Kalkweiß, Sturmgrau | reales Umfeld | ATMOSPHERE |
| 10 | IMG_0106 | Kletterwand mit Crashpads | Werkstatt-Nüchternheit | Fels-Beige, Signalblau, Weiß | reales Umfeld | ATMOSPHERE |

**Ergebnis der Zuordnung:** Alle 10 Bilder sind ATMOSPHERE — reale Orte, keine Produkte, gedämpftes Naturlicht. **Kein Bild ist STUDIO** (kein Void/Titanium-Freisteller, kein klinisches Setup) und **kein Bild ist CURATED** (kein warmer Materialkontrast, keine Hand/Handwerk-Nähe; das Kletterequipment in IMG_0142 ist technisch-kühl, nicht handwerklich-warm).

**Daraus folgt:** Nichts davon geht auf Cosmetics-/Fabrics-Produktseiten (STUDIO-Ebene) und nichts auf /accessories (CURATED-Ebene). Wo Platzierungsbedarf STUDIO oder CURATED verlangt, wird nichts eingebaut — stattdessen unten als offene Lücke ausgewiesen.

## Geprüfter Platzierungsbedarf pro Seite

- **Homepage:** Zwischen den 6 Linien-Kacheln gibt es aktuell keine Section-Divider-Bilder → echte Lücke, ATMOSPHERE passt.
- **/products (Cosmetics):** `hamamelis-mist` und `pre-shave-oil` haben keine `mockupImages`. Das ist aber eine STUDIO-Lücke → keines der neuen Bilder wird dort eingesetzt.
- **/shield-layer (Fabrics):** Alle vier Produkte haben vollständige `lifestyleImages` (5 je Produkt). Kein Bedarf, kein Überschreiben.
- **/accessories:** Bildsprache "sourced, not engineered" (CURATED) → kein neues Bild passt, nichts wird eingebaut.
- **/architects-club (Community):** Seite ist derzeit vollständig textbasiert, ohne ein einziges Bild → größte Lücke, ATMOSPHERE ist genau die richtige Ebene.
- **/contact und Manifest-Block:** je ein ruhiger Anker möglich, sofern noch kein Bild vorhanden.

## Was gebaut wird

1. **Neues Asset-Set** in `src/assets/` mit sprechenden Namen, Präfix `zl-atmos-`:
   `zl-atmos-ring.jpg`, `zl-atmos-snow.jpg`, `zl-atmos-rock.jpg`, `zl-atmos-court.jpg`, `zl-atmos-ridge.jpg`, `zl-atmos-target.jpg`, `zl-atmos-pass.jpg`, `zl-atmos-pool.jpg`, `zl-atmos-track.jpg`, `zl-atmos-wall.jpg`
2. **Neue Content-Datei `src/content/atmosphere.ts`**: zentrales Register mit Ebene, Bild und Alt-Text in allen 6 Sprachen — analog zu `editorial.ts`, damit die Ebenen-Logik überprüfbar bleibt.
3. **Homepage (`src/routes/index.tsx`)**: schmale Divider-Bänder (feste Aspect-Ratio, `loading="lazy"`, `editorial-shade`-Overlay, Reveal wie bestehende Sektionen) zwischen den Linien-Kacheln und vor AX Protocol / Bundle / Club. Bestehende Bildfelder bleiben unberührt.
4. **/architects-club**: Hero-Bild plus ein ruhiger Sektions-Anker.
5. **/contact**: ein Anker-Bild, sofern dort noch keins gesetzt ist.

Preise, Produktdaten, Warenkorb und Routing bleiben unverändert. Kein bestehendes `img`, `mockupImages` oder `lifestyleImages` wird überschrieben.

## Geplante Zuordnung

| Bild | Ziel | Warum |
|---|---|---|
| zl-atmos-track | Homepage Divider vor AX Protocol | Startlinien-Spannung passt zur Protokoll-Logik |
| zl-atmos-ridge | Homepage Divider vor Bundle | Anstieg als Bild für System statt Einzelprodukt |
| zl-atmos-pool | Homepage Divider nach Linien-Kacheln | kühle Ice-Palette, Bindeglied zur Markenfarbwelt |
| zl-atmos-court | Homepage Divider vor Journal | Court-Heritage, greift Hero-Motiv auf |
| zl-atmos-ring | /architects-club Hero | Zugang statt Zahlung, "vor dem Kampf"-Stille |
| zl-atmos-wall | /architects-club Sektions-Anker | Kollektiv-Ort ohne Gesichter |
| zl-atmos-pass | /contact Anker | ruhiges Gegenlicht, kein Produktbezug |
| zl-atmos-snow | Register, Reserve | im System registriert, aktuell keine passende Lücke |
| zl-atmos-rock | Register, Reserve | technisch-kühl; nicht CURATED, daher nicht /accessories |
| zl-atmos-target | Register, Reserve | starke Ocker-Note, würde Divider-Rhythmus brechen |

Nicht platziert und warum: die drei Reserve-Bilder haben keine offene ATMOSPHERE-Lücke. Auf `hamamelis-mist`, `pre-shave-oil` und /accessories wird bewusst nichts gesetzt, weil dort STUDIO- bzw. CURATED-Bilder gebraucht werden — die kann ich auf Wunsch separat generieren.

## Technisches

- Uploads werden per Lovable-Assets-CDN-Pointer (`.asset.json`) in `src/assets/` eingebunden, nicht als Binaries im Repo.
- Alt-Texte für alle neuen Bilder in 6 Sprachen in `src/content/atmosphere.ts`.
- Abschluss: Typecheck sowie Playwright-Check Desktop 1280 und Mobile 440 für `/`, `/architects-club`, `/contact` in DE und EN, inklusive Konsolen-Log, plus die Abschlusstabelle.
