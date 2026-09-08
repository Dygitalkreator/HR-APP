# RECOVERY SOAPS — drei neue Produktseiten

Die drei Seifen kommen als eigene Kategorie **Recovery Soaps** in die Kollektion und nutzen das bestehende Produkt-Dossier-Layout (gleiche Hierarchie, gleiche Buttons, Add-to-Cart, Galerie, FAQ-freundliche Sektionen). Kein neues Layout, keine Abweichung vom bestehenden Stil.

## Produkte

| SKU | Slug | Name | Tagline | Preis |
| --- | --- | --- | --- | --- |
| AX-08 | `oat-reset` | OAT RESET SOAP | Calm after intensity. | 28 € |
| AX-09 | `shea-barrier` | SHEA BARRIER SOAP | Protect what performs. | 28 € |
| AX-10 | `pomegranate-glow` | POMEGRANATE GLOW SOAP | Recover. Radiate. | 28 € |

Alle drei: Phase **RECOVER**, Kategorie **Recovery**, 110 g Block, Herkunft Bayern · DE, Status „Pre-launch · Lot 0419".
Inhalt exakt nach Vorgabe: Beschreibung, Benefits (als Highlights-Liste), Key Actives (als Composition), Anwendung (als Protocol/Ritual).

## Bilder

Pro Seife:
- 1 Hauptaufnahme: Seifenblock, cleanes Premium-Setting, ZONES-Palette (Deep Navy, Off-White, Warm Beige).
- 5 Galeriebilder im bestehenden Mockup-Rhythmus: Clean White, Hero ¾, Makro-Textur, Lifestyle (Burberry-Outdoor / Sol-de-Janeiro-Licht: warmes Streiflicht, Vintage-Court/Leinen), Flat-Lay.

Keine Schrift-Renderings im Bild außer der etablierten Wortmarke-Optik; fehlerhafte Generierungen werden ersetzt.

## Integration in den Shop

- Neue Filter-Chip „Recovery Soaps" auf der Kollektionsseite; Sortierung bleibt phasenbasiert (PREP → ENGAGE → RECOVER → FINISH), Seifen erscheinen in RECOVER.
- Karten im bestehenden 3-Spalten-Raster mit Add-to-Cart.
- Detailseiten laufen über die bestehende Route `/products/$slug` — also `/products/oat-reset`, `/products/shea-barrier`, `/products/pomegranate-glow`, verlinkt aus Kollektion, „Verwandte Module" und Phasen-Timeline.
- Meta/OG-Daten der Kollektionsseite um die drei Module erweitert.

## Technisch

- `src/content/products.ts`: `ProductCategory` um `"Recovery"` erweitern, drei Produkt-Objekte inkl. Asset-Imports und `mockupImages` ergänzen.
- `src/routes/products.index.tsx`: `CATEGORIES` und `catLabel` um Recovery erweitern.
- `src/i18n/dictionaries.ts`: `products`-Record-Typ um die drei Slugs erweitern, Einträge (tagline, short, hero, description, highlights, protocol, zone, claim, composition, spec, status, consumer, faq) in DE, EN, FR, IT, NL, ES; Kategorie-Label `recovery` in allen 6 Sprachen.
- Verifikation der drei Seiten und der Kollektionsseite per Playwright (Desktop + Mobile, Bild-Status 200).
