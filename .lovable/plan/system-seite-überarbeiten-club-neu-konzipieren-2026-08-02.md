# System-Seite überarbeiten + Club neu konzipieren

## Teil 1 — Reiter "System" (/protocol) auf 7 Produkte konsistent machen

Aktueller Stand (geprüft): die Seite hat drei fest verdrahtete Phasen mit hart eingetippten Produktnamen, darunter eine Sektion "Extension Modules", deren Headline "Four engineered add-ons" verspricht, aber nur drei Produkte zeigt (Powder, Glow Oil, Lip Sculpt) — im 4-Spalten-Raster mit Leerstelle. Die Texte dieser Sektion sind hartcodiertes Englisch, also nicht übersetzt.

Umsetzung:

1. **Vier Phasen statt drei** — PREP · ENGAGE · RECOVER · FINISH als vollwertige Sektionen:
   - PREP → AX-03 Peeling Balm
   - ENGAGE → AX-01 Deo Stick Sport / AX-02 Deo Stick Sensitive
   - RECOVER → AX-05 Shea Balm / AX-07 Lip Sculpt Balm
   - FINISH → AX-04 Finish Powder / AX-06 Shea Glow Oil (neue Sektion, eigene Technologie-Zeile)
2. **Produkte nicht mehr hartcodieren**: Phasen-Sektionen lesen ihre Module direkt aus `src/content/products.ts` (Filter über `step`). Damit driftet die Seite bei künftigen Produktänderungen nicht mehr auseinander. Jedes Modul wird als Karte mit SKU, Name, Kurztext und Link zum Dossier gezeigt.
3. **Extension-Sektion entfällt**, da FINISH und Lip jetzt in den Phasen leben. Stattdessen darunter: kompakte Technologie-Sektion (bestehende `architectureModules`) plus Verweis auf /smart und die Kollektion.
4. **Vollständige i18n**: alle neu entstehenden Texte (Phasenüberschriften, FINISH-Body, Labels) als Keys in `src/i18n/dictionaries.ts` für DE, EN, FR, IT, NL, ES. Keine hartcodierten Strings mehr auf der Seite.
5. **Meta/SEO** der Route auf vier Phasen aktualisieren.
6. **Konsistenz-Check**: Phasenzuordnung aller 7 Produkte gegen `products.ts`, Routine-Finder (`GOAL_STEP`) und Produkt-Dossier-Timeline abgleichen, damit alle drei Stellen dieselbe Logik sprechen.

## Teil 2 — Club: "Zugang statt Zahlung"

Das €1-Building-Block-Modell wird komplett entfernt (Route, Texte, Meta, alle 6 Sprachen).

Neues Konzept **ZONES CLUB — Access by invitation**:

- **Kein Preis, kein Kauf.** Zugang wird kuratiert freigegeben. Nummerierte Mitgliedschaft (Member No. 0001 …) als Statuselement statt Geldbetrag.
- **Drei Stufen, verdient statt gekauft**:
  - `LISTED` — Warteliste: Lot-Ankündigungen, Restock-Alert.
  - `MEMBER` — freigeschaltet: Early Access auf neue Lots vor öffentlichem Release, Refill-Priorität, Lab-Dossier-Digest.
  - `INNER LAB` — auf Einladung: nummerierte Lot-0001-Reservierung, Zugang zu Testchargen, direkte Lab-Linie, Mitsprache bei Formulierungs-Iterationen.
- **Seitenstruktur**: Hero → "Wie Zugang funktioniert" (3 Schritte: Anfrage → Prüfung → Freigabe) → Stufen-Raster → Was Mitglieder wirklich bekommen (konkret, ohne Versprechen) → Zugangsanfrage-Formular (Name, E-Mail, Zone/Interesse, optional Referral-Code) → Transparenz-Hinweis (begrenzte Plätze pro Lot, kein Abo, jederzeit Abmeldung).
- **Formular** zunächst als lokale Bestätigung mit klarer Erfolgsmeldung, analog zum bestehenden Kontaktformular — keine Backend-Abhängigkeit. Auf Wunsch später mit Lovable Cloud persistiert (Tabelle für Zugangsanfragen + E-Mail-Benachrichtigung).
- Navigations-Label bleibt "Club".

## Technische Details

- `src/routes/protocol.tsx`: Phasen datengetrieben, Extension-Sektion entfernt, Karten in eigene Komponente ausgelagert (kein Hook in `.map()`).
- `src/routes/architects-club.tsx`: Inhalt und Struktur ersetzt; Route-Pfad bleibt `/architects-club`, damit bestehende Links intakt bleiben.
- `src/i18n/dictionaries.ts`: `protocolPage` um FINISH-Phase erweitert; `clubPage` neu typisiert (Tiers, Access-Schritte, Formular-Labels) — Typ-Interface und alle 6 Sprachblöcke.
- Verifikation: Typecheck plus Browser-Check von /protocol und /architects-club in DE und EN, Desktop und Mobile.
