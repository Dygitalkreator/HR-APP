# Landingpage: System, Sortiment und Conversion neu ordnen

## Ziel

Die Landingpage wird von einer langen Produktabfolge zu einer klaren, editorialen Markenreise. Besucher verstehen innerhalb der ersten zwei Scrolls:

1. Was ZONES LAB anbietet.
2. Wie das AX Protocol mit PREP · ENGAGE · RECOVER · FINISH funktioniert.
3. Wo Cosmetics, Signature, Fabrics und Accessories hingehören.
4. Welcher nächste Schritt für sie sinnvoll ist.

## Visuelle Richtung

- **Palette:** Alpine Heritage — Weiß/Navy/Ice mit gedämpftem Sandplatz-Terrakotta als warmer Akzent.
- **Typografie:** Bebas Neue für Headlines, Barlow für Fließtext, bestehende Mono-Schrift nur für Systemdaten und SKUs.
- **Komposition:** Editorial Journey mit der Dynamik der gewählten „Kinetic technical lab"-Richtung: präzise Raster, Statuszeilen, Phasen-Telemetrie und klare Kontraste — übersetzt in die helle ZONES-Welt, nicht in das dunkle Demo-Theme.
- **Bildwelt:** Vintage-Tennisplatz und vorhandene echte Produkt-/Lifestyle-Bilder; keine abstrakten Dekorationen.

## Neue Seitenführung

```text
001  Hero                 Dachmarke + klarer Einstieg
002  Choose your route    AX Protocol / Signature / Fabrics / Accessories
003  AX Protocol          4 Phasen + verständlicher Nutzen
004  System Core          Intense + Sensitive als Startpunkt
005  Editorial Assortment Signature / Fabrics / Accessories
006  Protocol Bundle      Preisvorteil + Add-to-Cart
007  Community            Club-Zugang + Footer-Übergang
```

### 1. Hero

- Vintage-Court bleibt der visuelle Anker.
- Headline und Intro erklären die Dachmarke ohne Fachjargon-Überladung.
- Primär-CTA führt zum System Core bzw. zur Kollektion, Sekundär-CTA zum AX Protocol.
- Kompakte Systemanzeige mit den vier Phasen ersetzt lange Meta-Stacks.

### 2. Frühe Sortimentsorientierung

- Vier eindeutige Einstiege: **AX Cosmetics**, **OLF-01 Signature**, **ZONES Fabrics**, **Accessories**.
- Jede Linie erhält ein reales Bild, einen verständlichen Einzeiler und einen zielgenauen CTA.
- Damit sind Signature und Accessories nicht länger nur über die Navigation auffindbar.

### 3. AX Protocol verständlich machen

- PREP · ENGAGE · RECOVER · FINISH als kompaktes 2×2-Systemmodul im Stil der gewählten Richtung.
- Pro Phase: Zweck in Alltagssprache, Anzahl zugehöriger Produkte und direkter Link.
- Fachbegriffe bleiben als sekundäre Belege, nicht als primäre Erklärung.

### 4. Produkte kuratieren statt alle ausrollen

- Auf der Homepage nur **Intense + Sensitive** als „System Core / Start Here" prominent zeigen.
- Die übrigen 8 Cosmetics-Produkte bleiben vollständig in der Kollektion und über die Phasen erreichbar.
- Fabrics zeigt alle 4 aktuellen Produkte kompakt; Signature und Accessories erhalten fokussierte Editorial-Module.
- Bestehende Preise, Badges und Produktdaten bleiben datengetrieben.

### 5. Conversion früher und klarer

- Bundle vor dem Community-Abschluss platzieren und den Vergleich **€180 → €160** sichtbar machen.
- Add-to-Cart bleibt direkt auf der Landingpage funktionsfähig.
- CTAs verwenden konkrete Ziele wie „System starten", „Kollektion ansehen" und „Fabrics entdecken" statt abstrakter Begriffe.

## Copy-Prinzipien

- **Erst Nutzen, dann Technologie:** z. B. „Kontrolliert Feuchtigkeit und Reibung" vor „Mechanical Finish Matrix".
- **Eine Aussage pro Abschnitt:** keine parallelen Manifest-, Technologie- und Produktclaims mit gleicher visueller Gewichtung.
- **Sortimentslogik konsequent benennen:** AX Protocol = funktionales Cosmetics-System; OLF-01 = Duft; Fabrics = Applied Fiber Science; Accessories = kuratierte Objekte.
- Neue und geänderte Texte werden vollständig in DE, EN, FR, IT, NL und ES gepflegt.

## Technische Umsetzung

- `src/routes/index.tsx` in kleine, fokussierte Landingpage-Komponenten zerlegen und die neue Reihenfolge umsetzen.
- Inhalte direkt aus `products.ts`, `signature.ts`, `shield.ts` und `accessories.ts` beziehen; keine doppelten Produktdaten.
- `src/i18n/dictionaries.ts` um die neue Homepage-Copy in allen sechs Sprachen erweitern und obsolete Home-Keys bereinigen.
- `src/styles.css`: Alpine-Heritage-Akzent und Barlow als semantische Tokens ergänzen; Kinetic-Raster, Phasenfortschritt und reduzierte Reveal-Bewegungen tokenbasiert umsetzen.
- Head-Metadaten auf die vollständige Sortimentsarchitektur aktualisieren.
- Bestehende Navigation, Warenkorb-Logik, Preise und Produktdetailseiten bleiben funktional unverändert.

## Verifikation

- Desktop und Mobile in DE und EN prüfen.
- Hero, Sortimentswege, alle CTAs, Bundle-Add-to-Cart und Sprachwechsel testen.
- Auf Überläufe, Textkollisionen, Bildzuschnitte, reduzierte Bewegung, Konsolenfehler und fehlerhafte Requests prüfen.
- Ziel: deutlich kürzere Mobile-Seite, ohne einen Sortimentszweig zu verstecken.