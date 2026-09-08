# Art Collab Seite: Navigation & Redesign

## Ziel
Die Seite `/art` wieder vollständig navigierbar machen (inkl. mobilem Burger-Menü) und das Layout auf Galerie-Qualität heben — ohne die inhaltliche Trennung aufzugeben (kein Cross-Sell, keine Kosmetik-Erwähnung im Seiteninhalt).

## 1. Navigation zurückholen
- Die Ausnahme, die auf `/art` Nav und Footer ausblendet, wird entfernt: Die Seite nutzt dieselbe Hauptnavigation wie der Rest der Website, inklusive Burger-Menü auf Mobil, Sprachumschalter und Cart.
- Der bisherige eigene schlanke Kopf entfällt; das Kennzeichen "ZONES × REZA ART GALLERY" wandert als dezente Zeile direkt über den Hero-Titel.
- Der bisherige Mini-Footer entfällt, es greift der normale Website-Footer (Art Collab bleibt dort verlinkt).

## 2. Hero
- Vollbild-Hero (min. 85vh, mobil 80vh) mit dem Kunst-Bild als Hintergrund, dunklem Verlauf und Titel-Overlay statt Bild-über-Text.
- Overlay-Inhalt: Eyebrow "◆ Collab · Edition 01", Titel, Lead-Satz, Instagram-Link-out, plus Scroll-Hinweis.
- Titelgröße responsiv gedeckelt, damit auf 390px nichts überläuft.
- Attribution- und Spezifikations-Angaben rutschen unter den Hero in eine ruhige Datenzeile.

## 3. Galerie-Grid
- Ruhigeres Raster: 1 Spalte mobil, 2 ab `md`, 3 ab `xl`, mit sichtbaren Abständen statt fugenlosem Blockraster; größere Bildflächen (4:5).
- Karte behält Informationsdichte: Nummer, Titel, "© Reza Amiri", Format, Edition, Preis, CTA.
- Klick auf ein Werk öffnet eine Lightbox (Vollbild-Ansicht mit Titel/Format/Preis, Vor/Zurück, Schließen per Escape und Backdrop-Klick, Fokus-Trap). "Edition sichern" bleibt eigener Button und triggert die Lightbox nicht.
- Platzhalter-Badges bleiben wie bisher erhalten.

## 4. Mobile Feinschliff
- Tap-Targets mind. 44px, größere Zeilenhöhen, konsistentes Spacing (py-14 mobil / py-24 desktop).
- Sticky CTA-Leiste unten auf Mobil ("Edition sichern ab 480 €" → öffnet Werkliste/Cart), verschwindet über der Galerie hinaus nicht störend.
- Grid-Header-Zeile mit `grid-cols-[minmax(0,1fr)_auto]`, `min-w-0`, `truncate`, damit auf schmalen Screens nichts clippt.

## 5. i18n & Qualität
- Neue Strings (Lightbox-Steuerung, Scroll-Hinweis, Sticky-CTA) in allen sechs Sprachen (DE/EN/FR/IT/NL/ES) in `src/content/art.ts`.
- SEO-`head()` der Route bleibt erhalten und wird um `og:image` mit absoluter URL ergänzt, falls verfügbar.
- Abschluss: Screenshots Desktop (1280) und Mobil (390), Kontrastcheck, danach Publish.

## Technische Details
- `src/routes/__root.tsx`: `bare`-Logik für `/art` entfernen, damit `Nav` und `Footer` rendern.
- `src/routes/art.tsx`: eigenen Header/Footer entfernen, Hero als Overlay-Sektion, Galerie-Grid mit Gap, neue Lightbox-Komponente (`src/components/site/ArtLightbox.tsx`), Sticky-Mobile-CTA.
- `src/content/art.ts`: Copy-Interface um Lightbox-/CTA-/Scroll-Strings erweitern, alle sechs Locales füllen.
- Bestehende Cart-Integration (`kind: "art"`) unverändert.
