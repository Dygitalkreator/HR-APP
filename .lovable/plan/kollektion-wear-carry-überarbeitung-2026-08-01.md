# Kollektion, Wear & Carry — Überarbeitung

## 1. Kollektion (/products) — UX & UI beruhigen

**Grid:** Bento-Layout (unterschiedlich große Tiles) wird ersetzt durch ein gleichmäßiges Raster:
- Mobile 1 Spalte, Tablet 2, Desktop 3 — alle Karten gleich hoch
- `tileSize`-Logik und `TILE_SPAN` entfallen

**Karten:** von 6 Textzeilen auf das Wesentliche reduziert
```
┌──────────────────────┐
│      Produktbild     │
├──────────────────────┤
│ PREP · AX-03         │  ← eine Metazeile
│ PEELING BALM         │
│ Kurznutzen, 1 Zeile  │
│ €54 · 50 ml   [ + ]  │  ← Preis + Add-to-Cart
└──────────────────────┘
```
Tech-Komplex-Zeile und Doppel-Labels verschwinden von der Karte (bleiben auf der Detailseite). Ganze Karte klickbar → Dossier; „Mehr erfahren" nur noch als dezenter Pfeil.

**Bilder:** Die weißen SKU-Platzhalter werden auf /products und der Startseite durch die vorhandenen Produktbilder (`p.img`) ersetzt, einheitlich `aspect-[4/5]`, `object-cover`. `ProductPlaceholder` bleibt nur als Fallback, wenn kein Bild existiert.

**Filter:** verständlicher benannt und in einer Zeile mit Zählern
- `Alle · Vorbereiten · Anwenden · Empfindlich · Regeneration · Finish` (i18n in allen 6 Sprachen)
- Aktiver Filter klar markiert, keine Sprünge im Layout beim Wechsel

**Rhythmus:** einheitliche Section-Abstände (Header → Filter → Grid → Bundle), Bundle-Sektion optisch klar abgesetzt.

## 2. Wear — neue Produktlinie (Seide / Schlaf)

Bestehende Produkte (Silk-Stitch, Bralette, Briefs) werden komplett ersetzt.

| SKU | Produkt | Material | Preis |
| --- | --- | --- | --- |
| SL-01 | SILK PILLOW SET | 100 % Maulbeerseide 22 Momme, 2 Bezüge | €140 |
| SL-02 | SLEEP SET · DUVET + PILLOW | Baumwolle-Seide-Mix, allergenfrei, waschbar 60° | €320 |
| SL-03 | COOLING SILK MASK | Seide + herausnehmbares Kühl-Gel-Insert (vereisbar) | €65 |

- `src/content/shield.ts` neu bestückt (Slugs: `silk-pillow-set`, `sleep-set`, `cooling-silk-mask`)
- 3 neue Bilder generiert (helles, ruhiges Studio-Stillleben passend zum Navy/Ice-Theme)
- `src/routes/shield-layer.tsx` Copy und Hero-Text auf Schlaf/Seide-Thema
- Seitenaussage: Regeneration im Schlaf als vierte Zone — keine „molecular wear"-Sprache mehr

## 3. Carry — neue Produktlinie

Karabiner und Powder Pen entfallen, Etui wird deutlich günstiger.

| SKU | Produkt | Material | Preis |
| --- | --- | --- | --- |
| CR-01 | TRAVEL CASE | Gewachster Loden, Leder-Trim, wasserabweisend | €120 |
| CR-02 | UMBRELLA | Holzgriff, doppelt bespanntes Canopy, sturmfest | €95 |
| CR-03 | CAP | Ungebleichte Baumwolle, UPF-Panel, verstellbar | €55 |

- `src/content/carry.ts` neu bestückt (Slugs: `travel-case`, `umbrella`, `cap`)
- 3 neue Bilder generiert
- `src/routes/carry.tsx`: Alternating-Layout bleibt, Copy neu

## 4. i18n

- Alte Produktschlüssel unter `shield` / `carry` entfernt, neue in **DE, EN, FR, IT, NL, ES** angelegt (Name, Tagline, Beschreibung, 4 Features/Benefits)
- Neue Filter-Labels in allen 6 Sprachen
- Hero-/Lead-Texte für Wear und Carry in allen 6 Sprachen

## 5. Verifikation

- Preview auf Desktop (1440) und Mobile (390): `/products`, `/shield-layer`, `/carry`
- Add-to-Cart für alle 6 neuen Produkte durchklicken, Warenkorb-Summe prüfen
- Konsole auf Fehler prüfen, Sprachumschalter in allen 6 Sprachen testen
- Typecheck

## Technische Details

- Keine neuen Dependencies
- Alte Asset-Dateien der ersetzten Produkte werden gelöscht, Imports bereinigt
- `tileSize` aus `src/content/products.ts` entfernt (auch auf der Startseite)
- Cart-Keys ändern sich (`shield-*`, `carry-*` Slugs) — bestehende localStorage-Warenkörbe verlieren gelöschte Positionen; das ist bei Preorder-Stand unkritisch
- Alt-Texte und Head-Metadaten der beiden Routen an die neuen Produkte angepasst
