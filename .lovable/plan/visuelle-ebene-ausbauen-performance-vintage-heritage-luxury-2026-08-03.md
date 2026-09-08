# Visuelle Ebene ausbauen — Performance · Vintage · Heritage · Luxury

Die Seite ist aktuell typografie-dominant: außer Hero, Produkt-/Fabrics-Galerien, Bundle, Manifesto- und Smart-Bild gibt es kaum Bildmomente. Ziel: eine durchgehende, wiedererkennbare Bildsprache mit deutlich mehr Rhythmus zwischen "Text-Block" und "Bild-Block".

## Bildsprache (verbindlich für alle neuen Assets)

- Vintage-Sportplatz-Welt: Sandplatz-Ocker, Kalkweiß, verwaschenes Grün, Titanium/Void als Kontrast
- Analoger Look: leichtes Korn, gedämpfte Sättigung, weiches Seitenlicht, Kodachrome-Anmutung
- Heritage-Motive: Clubhaus-Details, Handtuch/Leinen, Wasserkrug, Steinbank, Netz, Schatten auf Putz
- Keine Gesichter in Großaufnahme, keine Logos außer ZONES-Patch, kein Stock-Wellness-Look
- Produkt bleibt Held: Kosmetik als stille Objekte in dieser Umgebung

## Wo Bilder hinzukommen

### Landingpage (`/`)
1. **Manifesto**: Full-bleed Bildband hinter/neben dem Statement (Vintage-Court-Detail, stark abgedunkelt, Text darüber)
2. **Technologie/Solution**: zweispaltiges Split — Makro-Textur (Öltropfen auf Stein) neben den Stats
3. **Phasen-Raster (PREP · ENGAGE · RECOVER · FINISH)**: je Karte ein kleines Bild-Thumb, das beim Hover erscheint/aufzoomt
4. **Neuer Editorial-Break** zwischen Kollektion und Fabrics: breiter Bildstreifen (2 Bilder + 1 Zitat), leichter Parallax
5. **Fabrics-Teaser**: ein zusätzliches Stimmungsbild als Sektions-Kopf über dem 3er-Raster
6. **Club/Community-Block**: Hintergrundbild mit Duotone statt reiner Fläche

### Kollektion (`/products`)
- Editorial-Kopfbild über dem Raster (Produktreihe im Vintage-Setting)
- Bild-Break nach der Hälfte des Rasters: 1 Full-Width-Makro als "Zone"-Statement

### Technologie (`/protocol`)
- Pro Phase ein Phasenbild in einem sticky Split-Scroll-Layout (Text scrollt, Bild bleibt)

### Apparel/Fabrics (`/shield-layer`)
- Zusätzliches Wide-Hero-Motiv plus Bild-Marquee-Strip aus vorhandenen Lifestyle-Assets (kein neues Asset nötig)

### Community (`/architects-club`) und Kontakt (`/contact`)
- Je ein ruhiges Heritage-Motiv als Sektions-Anker, damit die Seiten nicht rein textuell wirken

## Visuelle Effekte (bestehende Token/CSS-Sprache)

- `grain`-Overlay und Duotone-Layer (`color-mix` in oklab mit `--zl-void` / Alpine) auf allen neuen Bildern
- Sanfter Parallax bzw. Scale-on-Scroll über `useReveal` erweitert, `prefers-reduced-motion` respektiert
- Hover: langsames `scale-[1.04]` mit 1400 ms wie bereits in den Karten
- Clip-Reveal: Bilder fahren beim Eintritt per `clip-path` von unten auf
- Alle Bilder `loading="lazy"`, `decoding="async"`, feste Aspect-Ratios gegen Layout-Shift

## Technisches

- Ca. 12–14 neue Assets in `src/assets` (Namensschema `zl-editorial-*.jpg`), zentral in einer neuen `src/content/editorial.ts` mit Alt-Texten je Sprache registriert
- Neue Komponenten: `EditorialBand.tsx` (Bild + Zitat + Parallax), `MediaSplit.tsx` (Text/Bild-Split), `ImageMarquee.tsx`
- Alt-Texte und neue Copy-Zeilen in alle 6 Sprachen in `src/i18n/dictionaries.ts`
- Keine Änderung an Produktdaten, Preisen, Warenkorb oder Routing
- Verifikation per Playwright-Screenshots (Desktop 1280 + Mobile 440) für `/`, `/products`, `/protocol`, `/shield-layer`, `/architects-club`
