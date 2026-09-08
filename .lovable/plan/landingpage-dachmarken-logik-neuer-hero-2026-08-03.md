# Landingpage: Dachmarken-Logik + neuer Hero

## Ziel

Die Landingpage soll die heutige Systemlogik zeigen: ZONES LAB™ als Dachmarke mit zwei Zweigen — **Cosmetics (AX PROTOCOL · Applied Lipid Science)** und **FABRICS (Applied Fiber Science)**. Dazu ein neuer Hero mit Vintage-Sandplatz-Motiv, und alle veralteten Bilder/Texte raus.

## Was aktuell falsch ist

- Der Wear-Teaser zeigt `zl-wear-hero.jpg` mit dem alten „Silk & Sleep"-Motiv und beschreibt Produkte, die es nicht mehr gibt (Reisekissen, Einmal-Gesichtsmaske). Aktuell sind: OVERSIZED TRACKSUIT, ZONE BOXERS, ZONE TEE.
- Der Hero führt nur „AX PROTOCOL" — die Fabrics-Linie erscheint erst weit unten als Nebensache.
- Die Sektionsnummerierung/Wording („006 / Wear", „Wear entdecken") ist noch auf dem alten Stand vor dem FABRICS-Rebranding.

## Neuer Hero

- Hintergrund: neu generiertes Motiv **Vintage-Sandplatz** — ockerrote Clay-Fläche mit weißen Linien, körniges verblasstes Analog-Filmkorn, stark gedämpft, damit die kühle Void/Titanium-Palette und die Textlesbarkeit erhalten bleiben. Kein Produkt im Bild, nur Platz und Typografie.
- Große Wortmarke **ZONES LAB™** statt „AX PROTOCOL".
- Darunter eine Zweig-Zeile: `COSMETICS · Applied Lipid Science` / `FABRICS · Applied Fiber Science`.
- Zwei CTAs: „Kollektion ansehen" (→ /products) und „Fabrics entdecken" (→ /shield-layer).
- Intro-Text neu: Dachmarken-Aussage statt reiner Kosmetik-Claim.
- Head-Metadaten (title/description/og/twitter) auf die Dachmarke + Doppel-Claim umgestellt, og:image auf das neue Hero-Bild.

## Sektionen neu sortiert

Reihenfolge nach Systemlogik, mit sauberer Nummerierung:

```text
001  Hero              ZONES LAB™ · zwei Zweige
002  Smart-Strip       System-Claims (unverändert)
003  Manifest          (unverändert)
004  Technologie       (unverändert)
005  System            4 Phasen PREP · ENGAGE · RECOVER · FINISH
006  Kollektion        7 Cosmetics-Module
007  Fabrics           3 aktuelle Fabrics-Produkte
008  Bundle + Community
```

- **Fabrics-Sektion**: statt eines veralteten Stimmungsbilds die drei echten Produkte aus `src/content/shield.ts` mit ihren aktuellen Bildern als kleines Raster, Titel „ZONES FABRICS", Claim „Applied Fiber Science", CTA in die Fabrics-Übersicht. Damit kann kein Bild mehr veralten, weil es direkt aus den Produktdaten kommt.
- **Kollektions-Sektion**: Überschrift bekommt den Zweig-Bezug „COSMETICS", damit die Trennung zu Fabrics klar ist. Produktkarten wie bisher aus `products.ts`.

## Aufräumen

- `zl-wear-hero.jpg` wird auf der Landingpage nicht mehr verwendet; wenn es nirgends sonst gebraucht wird, entfällt der Import.
- i18n in allen 6 Sprachen (DE, EN, FR, IT, NL, ES): neue Hero-Keys, Fabrics-Sektionstexte auf Tracksuit/Boxers/Tee umgeschrieben, „Wear"-Wording durch „Fabrics" ersetzt, veraltete Silk-&-Sleep-Sätze entfernt.

## Technische Details

- Neues Asset `src/assets/zl-hero-court.jpg` (1920×1080, Vintage-Clay-Court) generiert; Hero-Overlays (`bg-gradient-to-b` + Radial-Vignette) bleiben, ggf. leicht verstärkt für Kontrast.
- `src/routes/index.tsx`: `Hero()` neu aufgebaut, `ShieldTeaser()` → `FabricsTeaser()` mit Import aus `src/content/shield.ts`, Reihenfolge in `Home()` angepasst, Head-Meta aktualisiert.
- `src/i18n/dictionaries.ts`: Typ-Interface um die neuen Home-Keys erweitert, alle 6 Locale-Blöcke gefüllt; entfernte Keys überall gelöscht, damit der Typecheck vollständig greift.
- Abschluss: Typecheck plus Browser-Check der Landingpage auf Desktop und Mobile in DE und EN, inkl. Konsolen- und Request-Log.
