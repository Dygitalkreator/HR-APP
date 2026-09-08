# Miron Violetglass Relaunch der Cosmetics-Bildwelt

Alle 7 AX-Cosmetics-Produkte (ohne die 3 Recovery Soaps) werden visuell auf authentisches Miron Violetglass umgestellt — tiefviolettes, fast schwarz-purpurnes Biophotonik-Glas, minimalistische Labels in Weiß/Champagne-Gold, heller Naturstein, weiches Studiolicht, botanische Akzente.

## Betroffene Produkte und Gefäßformen

| SKU | Produkt | Neues Violetglass-Format |
|---|---|---|
| AX-01 | Soda-in-Oil Deodorant Balm | Violetglass Wide-Mouth Jar, gebürstet-goldener Deckel |
| AX-02 | Neuro-Calm Deodorant Balm | Violetglass Wide-Mouth Jar, mattschwarzer Deckel |
| AX-03 | Reset Peeling Balm | Großer Violetglass Jar, schwarzer Deckel |
| AX-04 | Finishing Powder | Violetglass Puder-Tin/Dial, Gold-Akzent |
| AX-05 | Multi-Zone Balm | Violetglass Cream Jar, Gold-Deckel |
| AX-06 | Multi-Oil Balm | Rechteckige Violetglass Bottle (Virgo-Style) mit Pumpe |
| AX-07 | Lip Sculpt Balm | Kleiner Violetglass Serum-/Balm-Tiegel, Gold |

Die Seifen (AX-08 bis AX-10) bleiben unverändert — Blockform auf Travertin.

## Bilder (42 neu)

Pro Produkt 1 Hauptbild + 5 Galeriebilder, konsistente Serie:
1. Clean White — Produkt frei auf Weiß, Kantenglühen des Violetglass sichtbar
2. Hero ¾ — Naturstein/Rohmarmor, weiches diffuses Licht, dezente Reflexion
3. Macro — Glasoberfläche, Textur des Produkts, Label-Detail
4. Lifestyle — Naturstein-Setting mit botanischem Akzent (Rosmarinzweig, getrocknete Blüten, grünes Blatt)
5. Flat-Lay — Set-Kontext mit weiteren Violetglass-Formen und Botanik

Zusätzlich ein Line-up-Shot des kompletten Sets (alle 7 Gefäße gemeinsam auf Rohmarmor) als Kollektions-Motiv.

Qualitätsregeln: keine KI-Fantasieschriftzüge, keine Fremdmarken, kein Holz statt Stein, Violettton konsistent über alle 42 Bilder. Fehlerhafte Renderings werden gezielt neu generiert.

## Texte und Specs

Format- und Materialangaben werden auf Violetglass umgestellt — in `src/content/products.ts` und in allen 6 Sprachen (DE, EN, FR, IT, NL, ES):
- „Titanium cylinder / jar / dial", „Frosted cylinder / jar", „Pump bottle · glass" → Violetglass-Entsprechungen (z. B. „Violetglass jar · gold lid", „Violetglass bottle · pump").
- Materialbezüge in Hero-/Beschreibungstexten, die explizit Titan oder Frosted Glas nennen, werden angeglichen. Wirkversprechen, Preise, Volumina, Namen und Slugs bleiben unverändert.
- Optional als kleiner Zusatz-Spec-Eintrag: „Glass · Miron Violetglass (biophotonic)".

## Technische Umsetzung

- Neue Assets ersetzen die bestehenden Dateinamen (`src/assets/zl-<slug>.jpg`, `zl-<slug>-mockup-1..5.jpg`), damit Imports in `src/content/products.ts` unverändert bleiben.
- Line-up-Shot als neues Asset, eingesetzt im Kollektions-Banner (`src/routes/products.index.tsx`) und ggf. im Editorial-Registry.
- Spec-Werte in `src/content/products.ts` und `src/i18n/dictionaries.ts` (7 Produktblöcke × 6 Sprachen).
- Abschließende Prüfung der Kollektions- und Detailseiten auf Desktop und Mobile.
