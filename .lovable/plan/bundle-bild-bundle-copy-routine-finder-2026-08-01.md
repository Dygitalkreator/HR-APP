# Bundle-Bild, Bundle-Copy & Routine-Finder

## 1. Bundle-Bild neu

Das aktuelle `src/assets/zl-bundle.jpg` passt nicht mehr zur neuen Produktserie (Travertin-Sockel, Milchglas, gebürstetes Metall).

- Neues Bild in exakt derselben Bildsprache wie die 8 Produktbilder: sandbeiger Ton-in-Ton-Hintergrund, Travertin-Fläche, weiches Seitenlicht
- Motiv: die vier Bundle-Objekte als Gruppe — zwei Stick-Zylinder, ein breiter Tiegel, eine Pipettenflasche, alle in Milchglas mit gebürsteten Metalldetails
- Kein Text, keine Requisiten, keine Hände
- Ersetzt den bestehenden Pfad `src/assets/zl-bundle.jpg` 1:1, im 16:10-taugliches Format (1600×1000), da die Bundle-Sektion `aspect-[16/10]` nutzt

## 2. Bundle-Inhalt bleibt, Copy wird präzise

Zusammensetzung unverändert: DEO STICK SPORT · DEO STICK SENSITIVE · PEELING BALM · REPAIR SERUM, €198, Ersparnis €40.

Nur die Texte werden klarer:
- Statt „Das vollständige Vier-Modul-System" eine nutzenorientierte Zeile: was das Set abdeckt (Vorbereiten → Anwenden → Regeneration) und für wen es der richtige Einstieg ist
- Ergänzender Hinweis, dass die weiteren Module (Powder, Calm Balm, Shea Balm, Glow Oil) einzeln dazu passen — verhindert den Eindruck, das Set sei „alles"
- Alt-Text und Head-Metadaten der Kollektion an das neue Bild angepasst
- Übersetzt in DE, EN, FR, IT, NL, ES

## 3. Routine-Finder (3 Fragen)

Neuer Block auf `/products`, direkt zwischen Filterzeile und Raster, dezent und einklappbar — keine zweite Seite, kein Modal.

Drei Fragen, je 2–3 Antwortmöglichkeiten:
1. Zone: Achseln / Gesicht & Hals / Körper & Beine
2. Haut: robust / empfindlich-reaktiv / trocken
3. Ziel: Frische im Alltag / Regeneration / Glättung & Finish

Ergebnis: 2–3 empfohlene Module als kompakte Karten mit je einem Satz Begründung, plus Add-to-Cart und Link zum Dossier. Kein Score-Theater — eine transparente Zuordnungslogik über die vorhandenen Felder `step`, `category` und `zone`.

```text
┌─ Passendes Modul finden ──────────── [ ausklappen ] ─┐
│  Zone     [Achseln] [Gesicht] [Körper]              │
│  Haut     [robust] [empfindlich] [trocken]          │
│  Ziel     [Frische] [Regeneration] [Finish]         │
├──────────────────────────────────────────────────────┤
│  Empfehlung:  AX-02 · AX-04 · AX-05                 │
└──────────────────────────────────────────────────────┘
```

- Zustand nur lokal in der Komponente, keine Persistenz
- Ohne Auswahl bleibt der Block ein einzeiliger Button — das Raster rückt nicht weg
- Alle Labels, Fragen und Begründungen in allen 6 Sprachen

## Technische Details

- Neue Komponente `src/components/site/RoutineFinder.tsx`, eingebunden in `src/routes/products.index.tsx`
- Empfehlungslogik als reine Funktion in `src/content/products.ts` (`recommendProducts(answers)`), damit sie testbar bleibt und keine Duplikate im UI entstehen
- `BUNDLE` in `src/content/products.ts`: nur `short`-Text angepasst, Slug, Preis und Items unverändert (bestehende Warenkörbe bleiben gültig)
- i18n-Keys: `productsPage.finder.*` neu, `bundle.short` überarbeitet
- Keine neuen Dependencies

## Verifikation

- Playwright-Screenshots von `/products` auf Desktop (1440) und Mobile (390): Bundle-Sektion mit neuem Bild, Finder zu und offen
- Alle drei Antwortkombinationen je Frage durchklicken, Empfehlungen auf Plausibilität prüfen
- Add-to-Cart aus dem Finder und aus der Bundle-Sektion, Warenkorb-Summe prüfen
- Sprachumschalter über alle 6 Sprachen, Konsole auf Fehler prüfen, Typecheck
