# Neue Produktbilder — klassischer & cleaner

Alle 8 AX-Produktbilder werden als eine einheitliche Serie neu erzeugt.

## Bildsprache (für alle 8 identisch)

- Hintergrund: Ton-in-Ton Sandbeige, Travertin-/Steinsockel
- Licht: weiches Seitenlicht, ruhige Naturschatten, kein Glanz-Overkill
- Komposition: einzelnes Produkt zentriert, leicht erhöhte Augenhöhe, viel Luft, quadratisch bzw. 4:5-taugliches Motiv
- Verpackung: Milchglas-Korpus mit gebürstetem Metall-Deckel/-Detail, sehr reduzierte dünne Typografie
- Kein Text-Wasserzeichen, keine Requisiten außer minimalem Stein/Stoff-Detail, keine Hände

## Produkte & Gefäßform

| SKU | Produkt | Gefäß |
| --- | --- | --- |
| AX-01 | DEO STICK SPORT | Milchglas-Stick-Zylinder, gebürstete Metallkappe |
| AX-02 | DEO STICK SENSITIVE | gleicher Stick, hellere Kappe zur Unterscheidung |
| AX-03 | PEELING BALM | breiter Milchglas-Tiegel, Metalldeckel |
| AX-04 | REPAIR SERUM | schlanke Milchglas-Pipettenflasche, Metall-Kragen |
| AX-05 | FINISH POWDER | flache Milchglas-Dose mit Metall-Dreh-Deckel |
| AX-06 | CALM BALM | kleiner Milchglas-Tiegel, Metalldeckel |
| AX-07 | SHEA BALM | hoher Milchglas-Tiegel, Metalldeckel, cremiges Produkt sichtbar |
| AX-08 | SHEA GLOW OIL | Milchglas-Pumpflasche, Metallpumpe, warmer Goldschimmer im Öl |

## Umsetzung

- Neue Dateien ersetzen die bestehenden Pfade 1:1 (`src/assets/zl-intense.jpg`, `zl-sensitive.jpg`, `zl-reset.jpg`, `zl-repair.jpg`, `zl-powder.jpg`, `zl-neurocalm.jpg`, `zl-multizone-balm.jpg`, `zl-multioil-balm.jpg`), damit keine Imports angefasst werden müssen
- Format 1024×1280 (4:5), passend zu `aspect-[4/5] object-cover` in Kollektion, Startseite und Dossier
- Wear-, Carry-, Hero-, Bundle- und Smart-Bilder bleiben unverändert

## Verifikation

- Playwright-Screenshots von `/products`, `/` und zwei Dossiers (Shea Balm, Repair Serum) auf Desktop und Mobile
- Prüfung, dass alle 8 Karten im Raster einen konsistenten Bildlook haben (gleicher Hintergrundton, gleiche Lichtrichtung)
