import type { Locale } from "@/i18n/config";

import prepImage from "@/assets/zl-editorial-phase-prep.jpg";
import engageImage from "@/assets/zl-editorial-phase-engage.jpg";
import recoverImage from "@/assets/zl-editorial-phase-recover.jpg";
import finishImage from "@/assets/zl-editorial-phase-finish.jpg";
import oilImage from "@/assets/zl-editorial-macro-oil.jpg";
import manifestoImage from "@/assets/zl-editorial-manifesto.jpg";
import fabricsImage from "@/assets/zl-editorial-fabrics.jpg";
import tracksuitImage from "@/assets/zl-wear-tracksuit-lifestyle-1.jpg";
import boxersImage from "@/assets/zl-wear-boxers-lifestyle-2.jpg";
import towelImage from "@/assets/zl-wear-towelset-lifestyle-1.jpg";
import superfoodImage from "@/assets/superfood-hero-kaffee.jpg";
import accessoriesImage from "@/assets/accessory-shave-ritual-set.jpg";
import smartImage from "@/assets/zl-smart.jpg";
import sensitiveImage from "@/assets/zl-sensitive.jpg";
import oatImage from "@/assets/zl-oat-reset.jpg";
import sheaImage from "@/assets/zl-shea-barrier.jpg";

export type JournalCategory = "cosmetics" | "fabrics" | "superfood" | "accessories" | "technology" | "hygiene";
export type JournalCtaLine = "products" | "fabrics" | "superfood" | "accessories";

export type JournalText = {
  title: string;
  excerpt: string;
  dek: string;
  sections: { heading: string; body: string }[];
  takeaways: string[];
  ctaText: string;
};

export type JournalArticle = {
  slug: string;
  date: string;
  readTime: number;
  image: string;
  /** Reused editorial asset — final photography pending. */
  imagePlaceholder: boolean;
  category: JournalCategory;
  cta: JournalCtaLine;
  /** Full article copy. DE/EN are authored; further locales can be added incrementally. */
  text: Partial<Record<Locale, JournalText>>;
};

export const CTA_ROUTES: Record<JournalCtaLine, string> = {
  products: "/products",
  fabrics: "/shield-layer",
  superfood: "/superfood",
  accessories: "/accessories",
};

/** Falls back DE → EN so a missing translation never breaks a route. */
export function getJournalText(article: JournalArticle, locale: Locale): JournalText {
  return article.text[locale] ?? article.text.de ?? (article.text.en as JournalText);
}

export const journalIntro: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    subline: string;
    lead: string;
    latest: string;
    all: string;
    read: string;
    minutes: string;
    back: string;
    filterLabel: string;
    filterAll: string;
    empty: string;
    takeaways: string;
    related: string;
    ctaEyebrow: string;
    ctaAction: string;
    placeholder: string;
    translationNote: string;
    count: string;
  }
> = {
  de: {
    eyebrow: "Journal · Lab Notes",
    title: "THE ZONES JOURNAL",
    subline: "Beobachtungen, Protokolle, Feldnotizen.",
    lead: "Dieses Journal ist ein öffentlich zugängliches Lab-Notebook. Wir dokumentieren hier, was wir prüfen, verwerfen und für belegbar halten. Keine Kampagnentexte, sondern Notizen zu Formulierung, Material, Herkunft und Anwendung.",
    latest: "Neueste Ausgabe",
    all: "Alle Feldnotizen",
    read: "Artikel lesen",
    minutes: "Min. Lesezeit",
    back: "Zurück zum Journal",
    filterLabel: "Kategorie",
    filterAll: "Alle",
    empty: "Keine Artikel in dieser Kategorie.",
    takeaways: "Takeaways",
    related: "Verwandte Notizen",
    ctaEyebrow: "Passende Linie",
    ctaAction: "Linie ansehen",
    placeholder: "Bildplatzhalter",
    translationNote: "Volltext derzeit auf Deutsch und Englisch.",
    count: "Notizen",
  },
  en: {
    eyebrow: "Journal · Lab notes",
    title: "THE ZONES JOURNAL",
    subline: "Observations, protocols, field notes.",
    lead: "This journal is a publicly readable lab notebook. We document what we test, what we discard and what we consider evidenced. No campaign copy — notes on formulation, material, origin and use.",
    latest: "Latest issue",
    all: "All field notes",
    read: "Read article",
    minutes: "min read",
    back: "Back to journal",
    filterLabel: "Category",
    filterAll: "All",
    empty: "No articles in this category.",
    takeaways: "Takeaways",
    related: "Related notes",
    ctaEyebrow: "Matching line",
    ctaAction: "View line",
    placeholder: "Image placeholder",
    translationNote: "Full text currently available in German and English.",
    count: "Notes",
  },
  fr: {
    eyebrow: "Journal · Notes de labo",
    title: "THE ZONES JOURNAL",
    subline: "Observations, protocoles, notes de terrain.",
    lead: "Ce journal est un carnet de laboratoire ouvert. Nous y documentons ce que nous testons, écartons et considérons comme démontré. Pas de discours publicitaire : des notes sur la formulation, la matière, l’origine et l’usage.",
    latest: "Dernière édition",
    all: "Toutes les notes",
    read: "Lire l’article",
    minutes: "min de lecture",
    back: "Retour au journal",
    filterLabel: "Catégorie",
    filterAll: "Toutes",
    empty: "Aucun article dans cette catégorie.",
    takeaways: "À retenir",
    related: "Notes liées",
    ctaEyebrow: "Ligne associée",
    ctaAction: "Voir la ligne",
    placeholder: "Image provisoire",
    translationNote: "Texte intégral actuellement en allemand et en anglais.",
    count: "Notes",
  },
  it: {
    eyebrow: "Journal · Note di laboratorio",
    title: "THE ZONES JOURNAL",
    subline: "Osservazioni, protocolli, note sul campo.",
    lead: "Questo journal è un quaderno di laboratorio accessibile a tutti. Documentiamo ciò che testiamo, ciò che scartiamo e ciò che riteniamo dimostrato. Nessun testo pubblicitario: note su formulazione, materiale, origine e uso.",
    latest: "Ultima edizione",
    all: "Tutte le note",
    read: "Leggi l’articolo",
    minutes: "min di lettura",
    back: "Torna al journal",
    filterLabel: "Categoria",
    filterAll: "Tutte",
    empty: "Nessun articolo in questa categoria.",
    takeaways: "Punti chiave",
    related: "Note correlate",
    ctaEyebrow: "Linea collegata",
    ctaAction: "Vedi la linea",
    placeholder: "Immagine provvisoria",
    translationNote: "Testo integrale attualmente in tedesco e inglese.",
    count: "Note",
  },
  nl: {
    eyebrow: "Journal · Labnotities",
    title: "THE ZONES JOURNAL",
    subline: "Observaties, protocollen, veldnotities.",
    lead: "Dit journal is een openbaar leesbaar labjournaal. We documenteren wat we testen, wat we verwerpen en wat we onderbouwd achten. Geen campagnetekst, maar notities over formulering, materiaal, herkomst en gebruik.",
    latest: "Nieuwste editie",
    all: "Alle veldnotities",
    read: "Lees artikel",
    minutes: "min leestijd",
    back: "Terug naar journal",
    filterLabel: "Categorie",
    filterAll: "Alle",
    empty: "Geen artikelen in deze categorie.",
    takeaways: "Kernpunten",
    related: "Verwante notities",
    ctaEyebrow: "Bijpassende lijn",
    ctaAction: "Bekijk lijn",
    placeholder: "Beeldplaatshouder",
    translationNote: "Volledige tekst momenteel in het Duits en Engels.",
    count: "Notities",
  },
  es: {
    eyebrow: "Journal · Notas de laboratorio",
    title: "THE ZONES JOURNAL",
    subline: "Observaciones, protocolos, notas de campo.",
    lead: "Este journal es un cuaderno de laboratorio de acceso público. Documentamos lo que probamos, lo que descartamos y lo que consideramos demostrado. Sin lenguaje publicitario: notas sobre formulación, material, origen y uso.",
    latest: "Última edición",
    all: "Todas las notas",
    read: "Leer artículo",
    minutes: "min de lectura",
    back: "Volver al journal",
    filterLabel: "Categoría",
    filterAll: "Todas",
    empty: "No hay artículos en esta categoría.",
    takeaways: "Puntos clave",
    related: "Notas relacionadas",
    ctaEyebrow: "Línea asociada",
    ctaAction: "Ver línea",
    placeholder: "Imagen provisional",
    translationNote: "Texto completo actualmente en alemán e inglés.",
    count: "Notas",
  },
};

export const journalCategoryLabels: Record<Locale, Record<JournalCategory, string>> = {
  de: { cosmetics: "AX Cosmetics", fabrics: "Fabrics", superfood: "Superfood", accessories: "Accessories", technology: "Technologie", hygiene: "Körperhygiene" },
  en: { cosmetics: "AX Cosmetics", fabrics: "Fabrics", superfood: "Superfood", accessories: "Accessories", technology: "Technology", hygiene: "Body hygiene" },
  fr: { cosmetics: "AX Cosmetics", fabrics: "Fabrics", superfood: "Superfood", accessories: "Accessoires", technology: "Technologie", hygiene: "Hygiène corporelle" },
  it: { cosmetics: "AX Cosmetics", fabrics: "Fabrics", superfood: "Superfood", accessories: "Accessori", technology: "Tecnologia", hygiene: "Igiene del corpo" },
  nl: { cosmetics: "AX Cosmetics", fabrics: "Fabrics", superfood: "Superfood", accessories: "Accessoires", technology: "Technologie", hygiene: "Lichaamshygiëne" },
  es: { cosmetics: "AX Cosmetics", fabrics: "Fabrics", superfood: "Superfood", accessories: "Accesorios", technology: "Tecnología", hygiene: "Higiene corporal" },
};

export const journalCategoryOrder: JournalCategory[] = ["cosmetics", "fabrics", "superfood", "accessories", "technology", "hygiene"];

export const journalArticles: JournalArticle[] = [
  {
    slug: "spray-stick-roll-on-balm",
    date: "2026-08-05",
    readTime: 5,
    image: oilImage,
    imagePlaceholder: true,
    category: "cosmetics",
    cta: "products",
    text: {
      de: {
        title: "SPRAY, STICK, ROLL-ON ODER BALM — WARUM DIE FORM ENTSCHEIDET",
        excerpt: "Deodorant und Antitranspirant lösen unterschiedliche Probleme. Die Darreichungsform entscheidet mit, bevor die Formel überhaupt wirkt.",
        dek: "Zwei unterschiedliche Eingriffe, oft in einem Produkt vermischt, ohne dass die Form das offenlegt.",
        sections: [
          { heading: "Zwei unterschiedliche Eingriffe", body: "Deodorant und Antitranspirant lösen unterschiedliche Probleme. Deodorant reguliert Geruch — es arbeitet gegen die Bakterien, die Schweiß erst riechen lassen. Antitranspirant verschließt die Schweißdrüsen selbst, meist mit Aluminiumsalzen. Zwei unterschiedliche Eingriffe, oft in einem Produkt vermischt, ohne dass die Form das offenlegt." },
          { heading: "Die Form ist nicht nebensächlich", body: "Die Form ist dabei nicht nebensächlich. Ein Spray verteilt sich unkontrolliert und großflächig — Präzision ist kaum möglich, die Dosis schwer zu steuern. Ein Stick reibt sich mechanisch in die Haut, oft mit Reibung, die auf gereizter Haut selbst zum Problem wird. Ein Roll-on liegt näher an der Haut, bleibt aber ein flüssiges System mit eigener Formulierungslogik. Ein Balm ist keine dieser Kompromisslösungen: er wird mit der Körperwärme aktiviert, lässt sich exakt dosieren und dort auftragen, wo er gebraucht wird — nicht großflächig, sondern zonenspezifisch." },
          { heading: "Warum das AX Protocol auf Balm setzt", body: "Das ist der Grund, warum das AX Protocol auf Balm-Formate setzt. Nicht aus Ästhetik, sondern weil die Form die Präzision und die Hautverträglichkeit mitbestimmt, bevor die eigentliche Formel überhaupt wirkt." },
          { heading: "Waterless als zweite Entscheidung", body: "Waterless kommt als zweite Entscheidung dazu. Wasser in einer Formel bedeutet Konservierungsmittel, Verdünnung, Instabilität über die Zeit. Eine waterless Formel trägt mehr Wirkstoff auf weniger Volumen — konzentrierter, kontrollierter." },
          { heading: "Vom Einzelprodukt zum Protocol", body: "Beides zusammen — Balm-Form und waterless Formulierung — ist kein Einzelprodukt-Versprechen, sondern ein systemischer Ansatz: PREP, ENGAGE, RECOVER, FINISH, aufeinander abgestimmt statt vier zufällige Produkte nebeneinander. Symptombehandlung reagiert auf das, was gerade auffällt. Ein Protocol ist etwas anderes: die Entscheidung, das Problem an der Wurzel zu adressieren, in jeder Phase, mit dem jeweils richtigen Format." },
        ],
        takeaways: [
          "Deodorant reguliert Geruch, Antitranspirant verschließt die Drüse — zwei verschiedene Eingriffe.",
          "Spray dosiert ungenau, Stick erzeugt Reibung, Roll-on bleibt ein flüssiges System.",
          "Balm wird durch Körperwärme aktiviert und lässt sich zonenspezifisch dosieren.",
          "Waterless bedeutet mehr Wirkstoff auf weniger Volumen und weniger Konservierung.",
        ],
        ctaText: "Das AX Protocol ordnet Balm-Formate in vier Phasen: PREP, ENGAGE, RECOVER, FINISH.",
      },
      en: {
        title: "SPRAY, STICK, ROLL-ON OR BALM — WHY THE FORMAT DECIDES",
        excerpt: "Deodorant and antiperspirant solve different problems. The format shapes the outcome before the formula does anything.",
        dek: "Two different interventions, often mixed into one product, without the format making that visible.",
        sections: [
          { heading: "Two different interventions", body: "Deodorant and antiperspirant solve different problems. Deodorant regulates odour — it works against the bacteria that make sweat smell in the first place. Antiperspirant closes the sweat glands themselves, usually with aluminium salts. Two different interventions, often mixed into one product, without the format making that visible." },
          { heading: "Format is not a detail", body: "The format is not incidental. A spray disperses widely and without control — precision is barely possible, the dose hard to steer. A stick is rubbed mechanically into the skin, often with friction that becomes its own problem on irritated skin. A roll-on sits closer to the skin but remains a liquid system with its own formulation logic. A balm is none of these compromises: it is activated by body warmth, dosed exactly and applied where it is needed — zone-specific rather than broad." },
          { heading: "Why the AX Protocol uses balms", body: "That is why the AX Protocol works in balm formats. Not for aesthetics, but because the format co-determines precision and skin tolerance before the formula itself takes effect." },
          { heading: "Waterless as the second decision", body: "Waterless is the second decision. Water in a formula means preservatives, dilution and instability over time. A waterless formula carries more active per volume — more concentrated, more controlled." },
          { heading: "From single product to protocol", body: "Together — balm format and waterless formulation — this is not a single-product promise but a systemic approach: PREP, ENGAGE, RECOVER, FINISH, calibrated to one another instead of four unrelated products side by side. Treating symptoms reacts to whatever is currently noticeable. A protocol is something else: the decision to address the problem at its root, in every phase, with the right format each time." },
        ],
        takeaways: [
          "Deodorant regulates odour, antiperspirant closes the gland — two different interventions.",
          "Spray doses imprecisely, stick creates friction, roll-on remains a liquid system.",
          "A balm is activated by body warmth and can be dosed zone by zone.",
          "Waterless means more active per volume and less preservation.",
        ],
        ctaText: "The AX Protocol organises balm formats across four phases: PREP, ENGAGE, RECOVER, FINISH.",
      },
    },
  },
  {
    slug: "deo-hautbarriere",
    date: "2026-08-04",
    readTime: 6,
    image: engageImage,
    imagePlaceholder: true,
    category: "cosmetics",
    cta: "products",
    text: {
      de: {
        title: "WARUM DIE MEISTEN DEOS DEINE HAUTBARRIERE ANGREIFEN",
        excerpt: "Klassische Antitranspirantien versprechen Kontrolle. Was sie dabei mit der Haut machen, wird selten erklärt.",
        dek: "Trockenheit ist kein Beleg für Hautgesundheit. Sie ist oft nur das sichtbare Ergebnis eines mechanisch blockierten Systems.",
        sections: [
          { heading: "Was Kontrolle technisch bedeutet", body: "Aluminiumsalze wirken, indem sie mit Proteinen im Schweißkanal ein Gel bilden und den Ausgang temporär verengen. Das reduziert messbar die abgegebene Flüssigkeitsmenge. Es ist ein mechanischer Eingriff, kein pflegender. Parallel senken die eingesetzten Salze den pH-Wert der Hautoberfläche deutlich in den sauren Bereich. Für robuste Haut ist das oft folgenlos. Für rasierte, gereizte oder chronisch beanspruchte Zonen ist es ein zusätzlicher Stressfaktor, der auf eine bereits geschwächte Barriere trifft." },
          { heading: "Die Kombination ist das Problem", body: "Selten schädigt ein einzelner Inhaltsstoff die Barriere. Kritisch wird die Summe: Rasur am Morgen, alkoholhaltige Basis, Duftstoffe, enges Textil, Wärme, Reibung über acht Stunden. Alkohol entzieht Lipide, Reibung entfernt Zellmaterial mechanisch, Duftstoffe können auf vorgeschädigter Haut sensibilisieren. Das Resultat sind Brennen, Rötung und dunkler werdende Zonen – Reaktionen, die häufig fälschlich als Reinigungsproblem interpretiert werden. Der Körper antwortet dann mit einer Verdickung der Hornschicht, was die Haut rauer und empfindlicher zugleich macht." },
          { heading: "Der Umweg über Geruch", body: "Schweiß selbst ist praktisch geruchlos. Geruch entsteht erst, wenn Hautbakterien Bestandteile des Schweißes zersetzen. Wer die Barriere schädigt, verändert auch das Milieu, in dem diese Bakterien leben – und verschiebt die Zusammensetzung oft in eine Richtung, die mehr Geruch produziert, nicht weniger. Der sinnvollere Ansatz setzt eine Stufe früher an: Reibung reduzieren, Feuchtigkeit physikalisch managen, Lipide zuführen, statt die Drüse zu verschließen. Die Zielgröße ist ein stabiles Milieu, nicht ein trockenes Feld." },
        ],
        takeaways: [
          "Trockenheit ist ein mechanischer Effekt, kein Zeichen für eine intakte Barriere.",
          "Die Kombination aus Rasur, Alkohol, Duftstoff und Reibung belastet stärker als jeder Einzelfaktor.",
          "Geruch entsteht bakteriell – ein gestörtes Milieu kann ihn verstärken.",
          "Rasiere abends, nicht direkt vor dem Auftragen.",
        ],
        ctaText: "Das AX Protocol arbeitet über Reibung, Feuchtigkeitsmanagement und Lipide statt über Drüsenverschluss.",
      },
      en: {
        title: "WHY MOST DEODORANTS ATTACK YOUR SKIN BARRIER",
        excerpt: "Classic antiperspirants promise control. What they do to skin is rarely explained.",
        dek: "Dryness is not evidence of healthy skin. It is often just the visible result of a mechanically blocked system.",
        sections: [
          { heading: "What control means technically", body: "Aluminium salts work by forming a gel with proteins inside the sweat duct, temporarily narrowing the outlet. This measurably reduces the volume released. It is a mechanical intervention, not a caring one. In parallel, those salts push surface pH noticeably into the acidic range. On robust skin this is often uneventful. On shaved, irritated or chronically stressed zones it is an additional stressor landing on an already weakened barrier." },
          { heading: "The combination is the problem", body: "A single ingredient rarely damages the barrier. The sum is what matters: a morning shave, an alcohol base, fragrance, tight textile, heat and friction across eight hours. Alcohol removes lipids, friction removes cell material mechanically, fragrance can sensitise pre-damaged skin. The result is burning, redness and darkening zones — reactions frequently misread as a cleaning problem. The body then answers by thickening the horny layer, which makes skin rougher and more sensitive at the same time." },
          { heading: "The detour through odour", body: "Sweat itself is practically odourless. Odour appears only when skin bacteria break down its components. Damaging the barrier also changes the environment those bacteria live in — often shifting it toward more odour, not less. The more sensible approach starts one step earlier: reduce friction, manage moisture physically, supply lipids, instead of sealing the gland. The target is a stable milieu, not a dry field." },
        ],
        takeaways: [
          "Dryness is a mechanical effect, not proof of an intact barrier.",
          "Shave, alcohol, fragrance and friction combined stress skin more than any single factor.",
          "Odour is bacterial — a disturbed milieu can amplify it.",
          "Shave in the evening, not immediately before application.",
        ],
        ctaText: "The AX Protocol works through friction, moisture management and lipids instead of gland occlusion.",
      },
    },
  },
  {
    slug: "waterless-entscheidung",
    date: "2026-08-01",
    readTime: 5,
    image: oilImage,
    imagePlaceholder: true,
    category: "cosmetics",
    cta: "products",
    text: {
      de: {
        title: "WATERLESS IST KEIN TREND",
        excerpt: "Warum wir Wasser bewusst weglassen – und was das für Stabilität, Wirkstoffdichte und Hautgefühl bedeutet.",
        dek: "In den meisten Kosmetikprodukten ist der erste Inhaltsstoff Wasser. Das ist eine Entscheidung – nur selten eine begründete.",
        sections: [
          { heading: "Wasser ist ein Formulierungsproblem", body: "Sobald Wasser in einer Formulierung ist, entsteht ein Lebensraum. Mikroorganismen brauchen es, deshalb braucht jede wasserhaltige Formulierung ein Konservierungssystem. Dazu kommen Emulgatoren, um Öl- und Wasserphase zusammenzuhalten. Beides erfüllt einen technischen Zweck, aber keiner davon pflegt die Haut. Eine wasserfreie Basis lässt diese Hilfsstoffe strukturell weg – nicht aus Purismus, sondern weil sie ohne Wasserphase schlicht nicht nötig sind." },
          { heading: "Dichte statt Volumen", body: "Wasser verdünnt. Ein Produkt mit 70 Prozent Wasseranteil transportiert 70 Prozent Volumen, das nach dem Auftragen verdunstet. Ohne Wasserphase besteht dieselbe Menge aus Lipiden, Wachsen und funktionalen Feststoffen. Das ändert die Anwendung: Man braucht spürbar weniger Produkt pro Anwendung, und der aufgetragene Film bleibt auch unter Wärme und Bewegung geschlossen. Der Vergleich über Milliliter wird dadurch irreführend – relevant ist, was pro Anwendung tatsächlich auf der Haut ankommt." },
          { heading: "Was man dafür in Kauf nimmt", body: "Wasserfreie Formulierungen sind nicht in jeder Hinsicht bequemer. Sie brauchen Körperwärme, um sich verteilen zu lassen, und sie fühlen sich in den ersten Sekunden dichter an als eine Emulsion. Wer den schnellen, kühlen Frischeeffekt sucht, wird ihn hier nicht finden. Wir halten diesen Kompromiss für vertretbar, weil er Stabilität ohne Konservierungssystem ermöglicht und Reibung dort reduziert, wo Textil auf beanspruchte Haut trifft." },
        ],
        takeaways: [
          "Ohne Wasserphase entfallen Konservierungssystem und Emulgatoren strukturell.",
          "Weniger Produktmenge pro Anwendung – Milliliter sind kein guter Vergleichsmaßstab.",
          "Kurz zwischen den Fingern anwärmen, dann dünn auftragen.",
          "Wer sofortige kühle Frische erwartet, sollte das bewusst abwägen.",
        ],
        ctaText: "Alle AX-Formulierungen sind wasserfrei aufgebaut und in Miron-Violettglas abgefüllt.",
      },
      en: {
        title: "WATERLESS IS NOT A TREND",
        excerpt: "Why we deliberately leave water out — and what that means for stability, active density and skin feel.",
        dek: "In most cosmetic products the first ingredient is water. That is a decision — rarely a justified one.",
        sections: [
          { heading: "Water is a formulation problem", body: "The moment water enters a formulation, a habitat appears. Microorganisms need it, so every water-based formulation needs a preservative system. Emulsifiers follow, to hold oil and water phases together. Both serve a technical purpose, but neither cares for skin. A waterless base removes these auxiliaries structurally — not out of purism, but because without a water phase they are simply unnecessary." },
          { heading: "Density instead of volume", body: "Water dilutes. A product that is 70 percent water carries 70 percent volume that evaporates after application. Without a water phase, the same amount consists of lipids, waxes and functional solids. That changes use: you need noticeably less product per application, and the applied film stays closed under heat and movement. Comparing by millilitres becomes misleading — what matters is what actually reaches skin per use." },
          { heading: "What you accept in return", body: "Waterless formulations are not more convenient in every respect. They need body warmth to spread and feel denser in the first seconds than an emulsion. Anyone looking for a fast, cooling freshness effect will not find it here. We consider the trade-off reasonable because it enables stability without a preservative system and reduces friction where textile meets stressed skin." },
        ],
        takeaways: [
          "No water phase means preservative systems and emulsifiers become structurally unnecessary.",
          "Less product per application — millilitres are a poor comparison metric.",
          "Warm briefly between fingers, then apply thinly.",
          "If you expect instant cooling freshness, weigh that consciously.",
        ],
        ctaText: "Every AX formulation is built waterless and filled into Miron violet glass.",
      },
    },
  },
  {
    slug: "ax-protocol-prep",
    date: "2026-07-29",
    readTime: 7,
    image: prepImage,
    imagePlaceholder: true,
    category: "cosmetics",
    cta: "products",
    text: {
      de: {
        title: "WARUM PREP WICHTIGER IST ALS DAS DEO",
        excerpt: "Vier Phasen. Ein System. Warum die Reihenfolge entscheidet und wie du es im Alltag umsetzt.",
        dek: "Die meisten Routinen bestehen aus Produkten. Ein Protokoll besteht aus Reihenfolge.",
        sections: [
          { heading: "PREP definiert die Ausgangslage", body: "Jede Anwendung trifft auf einen Zustand: Hautfeuchte, Temperatur, mechanische Vorbelastung durch Rasur oder Textil. PREP heißt, diesen Zustand herzustellen statt ihn hinzunehmen. Konkret: lauwarm reinigen, vollständig trocknen lassen, Haut abkühlen. Wer auf warme, feuchte Haut aufträgt, verteilt Produkt auf einem Wasserfilm – es zieht schlechter ein und wird durch Textil schneller abgetragen. Der Unterschied ist nicht kosmetisch, er ist mechanisch messbar an der Standzeit des Films." },
          { heading: "ENGAGE, RECOVER, FINISH", body: "ENGAGE ist die eigentliche funktionale Anwendung – dort, wo Belastung, Geruch oder Reibung tatsächlich entstehen, nicht flächig. RECOVER adressiert die Erholung: Lipide, Beruhigung, Wiederaufbau nach Belastungstagen, oft abends sinnvoller als morgens. FINISH ist die mechanische Schlussschicht, die Feuchtigkeit und Reibung zwischen Haut und Textil managt. Jede Phase hat eine eigene Aufgabe. Werden zwei Phasen mit demselben Produkt bedient, fehlt in der Regel eine davon." },
          { heading: "Die Reihenfolge im Alltag", body: "Ein realistischer Ablauf braucht keine zehn Minuten. Abends rasieren, damit die Haut über Nacht regeneriert. Morgens lauwarm reinigen, vollständig trocknen, kurz abkühlen lassen. Dann ENGAGE punktuell, FINISH nur dort, wo Textil reibt. RECOVER nach Sport, Hitze oder langen Reisetagen – nicht routinemäßig zusätzlich. Wer merkt, dass eine Phase nichts verändert, lässt sie weg. Ein Protokoll ist kein Pflichtprogramm, sondern eine nachvollziehbare Reihenfolge." },
        ],
        takeaways: [
          "PREP entscheidet über die Wirkung aller folgenden Schritte.",
          "Vollständig trocknen und abkühlen lassen, bevor etwas aufgetragen wird.",
          "ENGAGE punktuell, FINISH nur an Reibungszonen.",
          "Rasur am Vorabend statt unmittelbar vor der Anwendung.",
        ],
        ctaText: "Die Kollektion ist nach den vier Phasen sortiert: PREP · ENGAGE · RECOVER · FINISH.",
      },
      en: {
        title: "WHY PREP MATTERS MORE THAN THE DEODORANT",
        excerpt: "Four phases. One system. Why sequence decides the outcome and how to run it daily.",
        dek: "Most routines consist of products. A protocol consists of sequence.",
        sections: [
          { heading: "PREP defines the starting point", body: "Every application meets a state: skin moisture, temperature, mechanical load from shaving or textile. PREP means creating that state instead of accepting it. Concretely: cleanse lukewarm, dry completely, let skin cool. Applying to warm, damp skin spreads product across a film of water — it absorbs worse and is removed faster by textile. The difference is not cosmetic; it is measurable in how long the film holds." },
          { heading: "ENGAGE, RECOVER, FINISH", body: "ENGAGE is the functional application — where load, odour or friction actually occurs, not across whole areas. RECOVER addresses recovery: lipids, calming, rebuilding after demanding days, often more useful in the evening. FINISH is the mechanical closing layer managing moisture and friction between skin and textile. Each phase has its own task. When one product serves two phases, one of them is usually missing." },
          { heading: "Sequence in everyday use", body: "A realistic routine does not take ten minutes. Shave in the evening so skin recovers overnight. In the morning, cleanse lukewarm, dry fully, let skin cool briefly. Then ENGAGE locally, FINISH only where textile rubs. RECOVER after sport, heat or long travel days — not as a routine addition. If a phase changes nothing for you, drop it. A protocol is not a mandatory programme; it is a traceable sequence." },
        ],
        takeaways: [
          "PREP determines the effect of every following step.",
          "Dry completely and cool down before applying anything.",
          "ENGAGE locally, FINISH only on friction zones.",
          "Shave the evening before, not right before application.",
        ],
        ctaText: "The collection is sorted along the four phases: PREP · ENGAGE · RECOVER · FINISH.",
      },
    },
  },
  {
    slug: "aluminium-duft-alkohol",
    date: "2026-07-25",
    readTime: 6,
    image: finishImage,
    imagePlaceholder: true,
    category: "cosmetics",
    cta: "products",
    text: {
      de: {
        title: "ALUMINIUM, DUFTSTOFFE, ALKOHOL",
        excerpt: "Pauschale Verbote helfen nicht. Eine klare, differenzierte Einordnung.",
        dek: "„Frei von“ ist keine Formulierungsleistung. Entscheidend ist, was stattdessen im Produkt arbeitet.",
        sections: [
          { heading: "Aluminium: Wirkung ja, Notwendigkeit nein", body: "Aluminiumsalze reduzieren die Schweißabgabe zuverlässig – das ist unstrittig. Die Diskussion um systemische Risiken ist wissenschaftlich weniger eindeutig, als beide Lager behaupten. Unsere Entscheidung dagegen ist deshalb keine Gesundheitswarnung, sondern eine funktionale: Der Verschluss der Drüse löst das eigentliche Problem nicht, weil Geruch bakteriell entsteht und Reibung mechanisch. Wer diese beiden Größen adressiert, braucht die Blockade nicht. Wer nur Trockenheit will, wird mit Antitranspirantien schneller ans Ziel kommen." },
          { heading: "Duftstoffe: nicht per se problematisch", body: "Duftstoffe sind die häufigste Ursache für Kontaktsensibilisierungen in der Kosmetik. Das macht sie nicht grundsätzlich falsch – es macht sie auf vorgeschädigter Haut riskant. Auf intakter Haut sind moderate Konzentrationen für die meisten Menschen unproblematisch. Auf frisch rasierter, geröteter oder unter Textil gereizter Haut ist die Toleranz deutlich niedriger. Die relevante Frage ist also nicht „Duft ja oder nein“, sondern „auf welchem Hautzustand“." },
          { heading: "Alkohol: kommt auf den Typ an", body: "Kurzkettiger Alkohol wirkt kühlend, verdunstet schnell und entzieht dabei Lipide. In hoher Konzentration und täglicher Anwendung auf beanspruchte Zonen ist das ungünstig. Fettalkohole wie Cetylalkohol sind chemisch etwas völlig anderes und wirken pflegend, werden aber im INCI-Lesen häufig verwechselt. Deshalb ist die Liste allein kein Urteil. Sinnvoller ist der Blick auf Konzentration, Anwendungszone und Häufigkeit – drei Angaben, die kaum ein Label liefert." },
        ],
        takeaways: [
          "„Frei von“ sagt nichts über die Qualität der Formulierung aus.",
          "Duftstoffe sind vor allem auf vorgeschädigter Haut kritisch.",
          "Fettalkohole und kurzkettiger Alkohol sind nicht dasselbe.",
          "Konzentration, Zone und Häufigkeit sind wichtiger als das reine Vorhandensein.",
        ],
        ctaText: "Unsere Formulierungen dokumentieren Funktion pro Inhaltsstoff statt Ausschlusslisten.",
      },
      en: {
        title: "ALUMINIUM, FRAGRANCE, ALCOHOL",
        excerpt: "Blanket bans do not help. A clear, differentiated assessment.",
        dek: "\"Free from\" is not a formulation achievement. What matters is what works in the product instead.",
        sections: [
          { heading: "Aluminium: effective, but not necessary", body: "Aluminium salts reliably reduce sweat output — that is undisputed. The debate around systemic risk is scientifically less clear than either camp claims. Our decision against them is therefore not a health warning but a functional one: occluding the gland does not solve the actual problem, because odour is bacterial and friction is mechanical. Address those two variables and the blockade becomes unnecessary. If dryness alone is the goal, antiperspirants get there faster." },
          { heading: "Fragrance: not inherently problematic", body: "Fragrance is the most common cause of contact sensitisation in cosmetics. That does not make it inherently wrong — it makes it risky on pre-damaged skin. On intact skin, moderate concentrations are unproblematic for most people. On freshly shaved, reddened or textile-irritated skin, tolerance drops sharply. The relevant question is not \"fragrance yes or no\" but \"on which skin condition\"." },
          { heading: "Alcohol: depends on the type", body: "Short-chain alcohol cools, evaporates quickly and removes lipids while doing so. At high concentration and daily use on stressed zones that is unfavourable. Fatty alcohols such as cetyl alcohol are chemically something entirely different and behave as conditioning agents, yet they are frequently confused when reading INCI lists. The list alone is not a verdict. More useful is concentration, application zone and frequency — three figures almost no label provides." },
        ],
        takeaways: [
          "\"Free from\" says nothing about formulation quality.",
          "Fragrance is mainly critical on pre-damaged skin.",
          "Fatty alcohols and short-chain alcohol are not the same thing.",
          "Concentration, zone and frequency matter more than mere presence.",
        ],
        ctaText: "Our formulations document function per ingredient instead of exclusion lists.",
      },
    },
  },
  {
    slug: "t-shirt-hautpflege",
    date: "2026-07-21",
    readTime: 5,
    image: fabricsImage,
    imagePlaceholder: true,
    category: "fabrics",
    cta: "fabrics",
    text: {
      de: {
        title: "DEIN T-SHIRT IST TEIL DEINER HAUTPFLEGE",
        excerpt: "Was zwischen Stoff und Haut passiert, beeinflusst Barrierestatus, Reibung und Mikroklima.",
        dek: "Pflege endet nicht am Produkt. Sie endet dort, wo acht Stunden Textil auf Haut treffen.",
        sections: [
          { heading: "Die längste Anwendung des Tages", body: "Ein Deo wirkt Sekunden auf der Oberfläche, ein Kleidungsstück liegt zehn bis sechzehn Stunden auf. In dieser Zeit bestimmt es, wie schnell Feuchtigkeit abtransportiert wird, wie warm die Zone bleibt und wie oft Faser über Haut reibt. Wer eine Formulierung sorgfältig auswählt und danach ein enges Synthetikshirt darüber zieht, hat den größeren Faktor unbeachtet gelassen. Textil ist die längste Anwendung des Tages – nur wird sie selten so behandelt." },
          { heading: "Reibung ist kumulativ", body: "Einzelne Reibbewegungen sind irrelevant. Über einen Tag summieren sie sich auf tausende Zyklen an Achsel, Nacken und Innenschenkel. Auf intakter Haut bleibt das folgenlos. Auf frisch rasierter oder bereits geröteter Haut entfernt jede Bewegung minimal Zellmaterial. Das Ergebnis zeigt sich nicht sofort, sondern nach Tagen als Rauheit, Brennen oder Verfärbung. Flache Nähte, glatte Oberflächen und ein Schnitt, der nicht spannt, senken diese Last messbar." },
          { heading: "Mikroklima statt Materialromantik", body: "Der entscheidende Wert ist, wie lange Feuchtigkeit direkt auf der Haut steht. Dichte, schwere Baumwolle nimmt viel auf, gibt aber langsam ab. Leichte, offene Konstruktionen transportieren schneller. Beides kann richtig sein – je nachdem, ob es um einen Bürotag, eine Reise oder Regeneration geht. Wichtig ist, das Kleidungsstück nach der Situation zu wählen und nicht nach dem Etikett." },
        ],
        takeaways: [
          "Textil ist die längste Hautanwendung des Tages.",
          "Reibung wirkt kumulativ, nicht punktuell.",
          "Flache Nähte und nicht spannende Schnitte senken die Belastung.",
          "Kleidung nach Situation wählen, nicht nach Faseretikett.",
        ],
        ctaText: "ZONES FABRICS dokumentiert Gewicht, Konstruktion und Charge pro Stück.",
      },
      en: {
        title: "YOUR T-SHIRT IS PART OF YOUR SKINCARE",
        excerpt: "What happens between fabric and skin affects barrier status, friction and microclimate.",
        dek: "Care does not end with the product. It ends where eight hours of textile meet skin.",
        sections: [
          { heading: "The longest application of the day", body: "A deodorant acts on the surface for seconds; a garment sits there for ten to sixteen hours. During that time it determines how fast moisture is moved away, how warm the zone stays and how often fibre rubs across skin. Choosing a formulation carefully and then pulling a tight synthetic shirt over it leaves the larger factor unaddressed. Textile is the longest application of the day — it is simply rarely treated as one." },
          { heading: "Friction is cumulative", body: "A single rubbing motion is irrelevant. Across a day they accumulate into thousands of cycles at underarm, neck and inner thigh. On intact skin this passes without consequence. On freshly shaved or already reddened skin, each motion removes a minimal amount of cell material. The result appears not immediately but after days, as roughness, burning or discolouration. Flat seams, smooth surfaces and a cut that does not pull reduce that load measurably." },
          { heading: "Microclimate instead of material romance", body: "The decisive value is how long moisture sits directly on skin. Dense, heavy cotton absorbs a lot but releases slowly. Light, open constructions transport faster. Both can be correct — depending on whether the day means office, travel or recovery. What matters is choosing the garment for the situation, not for the label." },
        ],
        takeaways: [
          "Textile is the longest skin application of your day.",
          "Friction acts cumulatively, not at single points.",
          "Flat seams and non-pulling cuts lower the load.",
          "Choose clothing by situation, not by fibre label.",
        ],
        ctaText: "ZONES FABRICS documents weight, construction and batch for every piece.",
      },
    },
  },
  {
    slug: "synthetik-vs-naturfaser",
    date: "2026-07-17",
    readTime: 6,
    image: tracksuitImage,
    imagePlaceholder: true,
    category: "fabrics",
    cta: "fabrics",
    text: {
      de: {
        title: "SYNTHETIK VS. NATURFASER UNTER BELASTUNG",
        excerpt: "Ein direkter Vergleich unter realen Bedingungen – ohne Marketing-Romantik.",
        dek: "Keine der beiden Faserfamilien gewinnt pauschal. Sie verlieren nur an unterschiedlichen Stellen.",
        sections: [
          { heading: "Was Synthetik gut kann", body: "Polyester und Polyamid nehmen kaum Feuchtigkeit in die Faser auf und transportieren sie über die Konstruktion an die Oberfläche. Dadurch bleiben sie unter Belastung leichter, trocknen schneller und behalten ihre Form. Für kurze, intensive Einheiten ist das ein realer Vorteil. Der Nachteil zeigt sich mit der Zeit: Die glatte, oleophile Oberfläche bindet Hautfette und geruchsbildende Bakterien stärker, weshalb Geruch dort auch nach dem Waschen häufiger zurückkehrt." },
          { heading: "Was Naturfaser gut kann", body: "Baumwolle nimmt ein Vielfaches ihres Gewichts an Feuchtigkeit auf. Das puffert Schwankungen und fühlt sich in Ruhe angenehmer an. Unter Dauerbelastung kehrt sich das um: Gesättigte Baumwolle bleibt schwer, kühlt aus und hält Feuchtigkeit direkt an der Haut – genau die Bedingung, unter der Reibung am meisten Schaden anrichtet. Für Reise, Regeneration und Alltag ist sie stark, für lange nasse Belastung nicht." },
          { heading: "Die ehrliche Antwort", body: "Der Faserstreit ist meist eine Ablenkung von den relevanten Variablen: Konstruktion, Gewicht, Nahtführung und Passform. Ein locker gestricktes Synthetikteil mit flachen Nähten belastet die Haut weniger als ein enges Baumwollshirt mit versteifter Naht. Wir wählen deshalb pro Anwendungsfall und dokumentieren Gewicht und Konstruktion, statt eine Faser zur Ideologie zu erklären." },
        ],
        takeaways: [
          "Synthetik transportiert schneller, bindet aber Geruch dauerhafter.",
          "Baumwolle puffert gut, bleibt unter Dauerbelastung aber nass und schwer.",
          "Konstruktion und Passform wirken stärker als die Faserwahl.",
          "Wähle nach Belastungsdauer, nicht nach Materialideologie.",
        ],
        ctaText: "Jedes FABRICS-Stück nennt Gewicht, Konstruktion und Einsatzfall.",
      },
      en: {
        title: "SYNTHETICS VS NATURAL FIBRE UNDER LOAD",
        excerpt: "A direct comparison under real conditions — without marketing romance.",
        dek: "Neither fibre family wins outright. They simply fail in different places.",
        sections: [
          { heading: "What synthetics do well", body: "Polyester and polyamide absorb almost no moisture into the fibre and move it through the construction to the surface. They stay lighter under load, dry faster and hold their shape. For short, intense sessions that is a real advantage. The downside emerges over time: the smooth, oleophilic surface binds skin oils and odour-forming bacteria more strongly, which is why odour returns there more often even after washing." },
          { heading: "What natural fibre does well", body: "Cotton absorbs multiples of its own weight in moisture. That buffers fluctuation and feels better at rest. Under sustained load the picture reverses: saturated cotton stays heavy, cools down and holds moisture directly against skin — precisely the condition under which friction causes the most damage. It is strong for travel, recovery and everyday wear, weak for long wet load." },
          { heading: "The honest answer", body: "The fibre debate usually distracts from the relevant variables: construction, weight, seam routing and fit. A loosely knitted synthetic piece with flat seams stresses skin less than a tight cotton shirt with a stiffened seam. We therefore select per use case and document weight and construction instead of turning a fibre into an ideology." },
        ],
        takeaways: [
          "Synthetics transport faster but retain odour more persistently.",
          "Cotton buffers well but stays wet and heavy under sustained load.",
          "Construction and fit outweigh fibre choice.",
          "Choose by duration of load, not by material ideology.",
        ],
        ctaText: "Every FABRICS piece states weight, construction and intended use case.",
      },
    },
  },
  {
    slug: "superfood-systemunterstuetzung",
    date: "2026-07-13",
    readTime: 5,
    image: superfoodImage,
    imagePlaceholder: true,
    category: "superfood",
    cta: "superfood",
    text: {
      de: {
        title: "SUPERFOOD IST KEIN SNACK",
        excerpt: "Warum funktionale Ernährung mehr ist als ein Trend und wie sie zu einem Ritual wird.",
        dek: "Eine einzelne Tasse Kaffee verändert nichts. Ein wiederholter Ablauf über Monate schon.",
        sections: [
          { heading: "Der Begriff ist unscharf – die Angaben müssen es nicht sein", body: "„Superfood“ ist kein regulierter Begriff und deshalb als Qualitätsversprechen wertlos. Belastbar sind nur konkrete, überprüfbare Angaben: Verarbeitung, Format, Qualitätsstufe, Charge. Eine dokumentierte Fermentation oder ein definiertes Röstprofil wären beispielsweise nachprüfbare Aussagen. „Antioxidantienreich“ ist keine. Wir weisen deshalb nur aus, was für die jeweilige Charge belegt ist, und verzichten auf Wirkversprechen, die sich in einem Lebensmittel nicht seriös belegen lassen." },
          { heading: "Systemunterstützung heißt Wiederholung", body: "Funktionale Ernährung wirkt nicht über Intensität, sondern über Frequenz. Entscheidend ist, ob etwas dauerhaft in den Tag passt. Ein aufwendiges Ritual, das nach zwei Wochen aufhört, ist wirkungsloser als ein einfacher, täglich wiederholter Ablauf. Deshalb formulieren wir Produkte so, dass sie in eine bestehende Routine passen – Kaffee am Morgen, Ritual am Abend – statt eine zusätzliche Disziplin zu verlangen." },
          { heading: "Was Ernährung nicht leistet", body: "Ernährung ersetzt keine Hautpflege und keine medizinische Behandlung. Sie verändert die Bedingungen, unter denen der Körper arbeitet – langsam und individuell unterschiedlich. Wer nach zwei Wochen keine sichtbare Veränderung feststellt, macht nichts falsch. Der ehrliche Rahmen ist ein Zeitraum von Monaten, keine Sofortwirkung. Alles andere wäre eine Behauptung, die wir nicht belegen können." },
        ],
        takeaways: [
          "„Superfood“ als Begriff sagt nichts – Verarbeitung und Charge schon.",
          "Frequenz schlägt Intensität: täglich einfach statt selten aufwendig.",
          "In bestehende Routinen integrieren statt neue Disziplin aufbauen.",
          "Realistischer Bewertungszeitraum sind Monate, keine Tage.",
        ],
        ctaText: "ZONES SUPERFOOD weist Verarbeitung, Qualitätsstufe und Format pro Produkt aus.",
      },
      en: {
        title: "SUPERFOOD IS NOT A SNACK",
        excerpt: "Why functional nutrition is more than a trend and how it becomes a ritual.",
        dek: "A single cup of coffee changes nothing. A repeated sequence across months does.",
        sections: [
          { heading: "The term is vague — the data need not be", body: "\"Superfood\" is not a regulated term and therefore worthless as a quality promise. Only concrete, checkable data holds: processing, format, quality grade, lot. A documented fermentation or a defined roast profile would, for example, be verifiable statements. \"Rich in antioxidants\" is not. We therefore state only what is documented for the specific lot and avoid efficacy claims that cannot be seriously evidenced in a food." },
          { heading: "System support means repetition", body: "Functional nutrition works through frequency, not intensity. What decides the outcome is whether something fits permanently into the day. An elaborate ritual abandoned after two weeks is less effective than a simple sequence repeated daily. We therefore formulate products to fit an existing routine — coffee in the morning, ritual in the evening — instead of demanding an additional discipline." },
          { heading: "What nutrition does not do", body: "Nutrition replaces neither skincare nor medical treatment. It changes the conditions the body works under — slowly and with individual variation. If you see no visible change after two weeks, you are not doing anything wrong. The honest frame is months, not instant effect. Anything else would be a claim we cannot support." },
        ],
        takeaways: [
          "The term \"superfood\" says nothing — processing and lot do.",
          "Frequency beats intensity: simple daily over rare and elaborate.",
          "Integrate into existing routines instead of building new discipline.",
          "A realistic evaluation window is months, not days.",
        ],
        ctaText: "ZONES SUPERFOOD states processing, quality grade and format for every product.",
      },
    },
  },
  {
    slug: "rituale-objekte",
    date: "2026-07-09",
    readTime: 4,
    image: accessoriesImage,
    imagePlaceholder: true,
    category: "accessories",
    cta: "accessories",
    text: {
      de: {
        title: "RITUALE BRAUCHEN KEINE 12 SCHRITTE",
        excerpt: "Weniger Komplexität, mehr Präzision. Warum Material und Form die Anwendung verändern.",
        dek: "Ein Ritual scheitert selten an Motivation. Es scheitert an Reibungsverlusten im Ablauf.",
        sections: [
          { heading: "Objekte steuern Verhalten", body: "Ob ein Ablauf durchgehalten wird, hängt weniger von Vorsätzen ab als von der physischen Umgebung. Eine Seife, die auf einer ablaufenden Schale trocknen kann, hält länger und bleibt hygienischer. Ein Rasierer mit spürbarem Gewicht führt sich ruhiger und verleitet weniger zu Druck. Das sind keine Lifestyle-Argumente, sondern mechanische: Form und Masse verändern die Bewegung, und die Bewegung verändert das Ergebnis auf der Haut." },
          { heading: "Weniger Schritte, klarere Entscheidungen", body: "Lange Routinen erzeugen Entscheidungslast. Jeder zusätzliche Schritt ist ein Punkt, an dem abgebrochen wird. Vier durchdachte Schritte, die täglich stattfinden, sind belastbarer als zwölf, die selten vollständig ablaufen. Der Gewinn liegt nicht im Verzicht selbst, sondern in der Wiederholbarkeit. Wer eine Routine reduziert, sollte deshalb zuerst prüfen, welcher Schritt tatsächlich eine Veränderung bewirkt hat." },
          { heading: "Ausgewählt, nicht entwickelt", body: "Diese Objekte stammen aus europäischen Werkstätten. Wir geben sie nicht als eigene Entwicklung aus – wir wählen sie aus, prüfen Material und Verarbeitung und benennen die Herkunft. Olivenholz, Porzellan und Stahl sind hier keine Dekoration, sondern Materialentscheidungen mit klaren Eigenschaften: Feuchtigkeitsverhalten, Reinigbarkeit, Lebensdauer." },
        ],
        takeaways: [
          "Physische Objekte beeinflussen die Ausführung stärker als Vorsätze.",
          "Ablaufende Seifenschalen verlängern Haltbarkeit und Hygiene.",
          "Vier tägliche Schritte schlagen zwölf sporadische.",
          "Material ist eine Funktionsentscheidung, keine Dekoration.",
        ],
        ctaText: "Accessories sind kuratierte Objekte aus europäischen Werkstätten – mit genannter Herkunft.",
      },
      en: {
        title: "RITUALS DO NOT NEED 12 STEPS",
        excerpt: "Less complexity, more precision. Why material and form change the application.",
        dek: "A ritual rarely fails on motivation. It fails on friction inside the sequence.",
        sections: [
          { heading: "Objects steer behaviour", body: "Whether a routine is sustained depends less on intent than on the physical environment. A soap that can drain and dry lasts longer and stays more hygienic. A razor with perceptible weight guides itself more calmly and invites less pressure. These are not lifestyle arguments but mechanical ones: form and mass change the movement, and the movement changes the result on skin." },
          { heading: "Fewer steps, clearer decisions", body: "Long routines create decision load. Every additional step is a point where people stop. Four considered steps performed daily are more robust than twelve rarely completed. The gain is not in reduction itself but in repeatability. When shortening a routine, first check which step actually produced a change." },
          { heading: "Sourced, not engineered", body: "These objects come from European workshops. We do not present them as our own engineering — we select them, check material and workmanship, and name the origin. Olive wood, porcelain and steel are not decoration here but material decisions with clear properties: moisture behaviour, cleanability, service life." },
        ],
        takeaways: [
          "Physical objects influence execution more than intentions do.",
          "Draining soap trays extend both durability and hygiene.",
          "Four daily steps beat twelve sporadic ones.",
          "Material is a functional decision, not decoration.",
        ],
        ctaText: "Accessories are curated objects from European workshops — origin always named.",
      },
    },
  },
  {
    slug: "batch-nummern",
    date: "2026-07-05",
    readTime: 5,
    image: manifestoImage,
    imagePlaceholder: true,
    category: "technology",
    cta: "products",
    text: {
      de: {
        title: "BATCH-NUMMERN SIND KEIN MARKETING",
        excerpt: "Warum wir Chargen transparent machen und was das über eine Marke aussagt.",
        dek: "Eine Chargennummer ist die kleinste überprüfbare Einheit einer Behauptung.",
        sections: [
          { heading: "Was eine Charge dokumentiert", body: "Eine Charge verbindet ein konkretes Produkt mit einem konkreten Herstellungsvorgang: Rohstofflieferung, Datum, Menge, Prüfergebnisse. Ohne diese Verknüpfung ist jede Aussage über Qualität allgemein und damit nicht überprüfbar. Mit ihr lässt sich eine Reklamation zurückverfolgen, ein Rohstoff isolieren und ein Fehler eingrenzen. Das ist zunächst ein internes Werkzeug – aber es entscheidet, ob eine Marke im Zweifelsfall handlungsfähig ist oder nur beteuern kann." },
          { heading: "Warum wir sie sichtbar machen", body: "Die meisten Hersteller führen Chargen, kommunizieren sie aber nicht. Wir zeigen sie, weil sie eine Aussage möglich macht, die sonst fehlt: Diese Angabe gilt für dieses Lot – nicht für eine Produktidee. Zertifizierungen nennen wir nur dort, wo sie für die jeweilige Charge tatsächlich vorliegen. Das ist unbequemer als ein pauschales Siegel auf allen Produkten, aber es ist die einzige Form, in der eine Angabe belastbar bleibt." },
          { heading: "Was das für dich bedeutet", body: "Praktisch heißt das: Du kannst Rückfragen mit einer Nummer stellen statt mit einer Produktbezeichnung. Du kannst zwei Bestellungen vergleichen, wenn dir eine Veränderung auffällt. Und du kannst erkennen, ob eine Marke bereit ist, ihre Aussagen auf eine überprüfbare Ebene zu stellen. Wer keine Charge nennt, kann auch nichts widerrufen." },
        ],
        takeaways: [
          "Eine Chargennummer macht Qualitätsaussagen überhaupt erst prüfbar.",
          "Zertifizierungen gelten pro Lot, nicht pro Produktidee.",
          "Bei Rückfragen immer Lot-Nummer angeben.",
          "Fehlende Chargenangabe bedeutet fehlende Rückverfolgbarkeit.",
        ],
        ctaText: "Jedes Produkt ist mit Verfügbarkeit und Lot ausgezeichnet – aktuell Lot 0419.",
      },
      en: {
        title: "BATCH NUMBERS ARE NOT MARKETING",
        excerpt: "Why we make batches transparent and what that says about a brand.",
        dek: "A batch number is the smallest verifiable unit of a claim.",
        sections: [
          { heading: "What a batch documents", body: "A batch links a specific product to a specific manufacturing event: raw material delivery, date, quantity, test results. Without that link, any statement about quality stays generic and unverifiable. With it, a complaint can be traced, a raw material isolated and a fault contained. It is first of all an internal tool — but it decides whether a brand can act in case of doubt or only reassure." },
          { heading: "Why we show them", body: "Most manufacturers keep batch records but never communicate them. We show them because they enable a statement that otherwise cannot exist: this figure applies to this lot, not to a product idea. We name certifications only where they actually exist for that batch. That is less convenient than a blanket seal across all products, but it is the only form in which a claim stays robust." },
          { heading: "What it means for you", body: "Practically: you can ask questions with a number instead of a product name. You can compare two orders if you notice a change. And you can tell whether a brand is willing to put its claims on a verifiable level. A brand that names no batch has nothing to retract." },
        ],
        takeaways: [
          "A batch number is what makes quality claims verifiable at all.",
          "Certifications apply per lot, not per product idea.",
          "Always quote the lot number when asking questions.",
          "No batch reference means no traceability.",
        ],
        ctaText: "Every product carries availability and lot — currently Lot 0419.",
      },
    },
  },
  {
    slug: "qualitaet-ist-spezifikation",
    date: "2026-07-01",
    readTime: 6,
    image: smartImage,
    imagePlaceholder: true,
    category: "technology",
    cta: "products",
    text: {
      de: {
        title: "QUALITÄT IST EINE SPEZIFIKATION",
        excerpt: "Formulierung, Material, Charge, Anwendung. Wie wir Qualität nachvollziehbar machen.",
        dek: "„Hochwertig“ ist kein Wert. Eine Zahl mit Einheit und Prüfmethode ist einer.",
        sections: [
          { heading: "Vier Ebenen statt eines Gefühls", body: "Wir beschreiben Qualität auf vier Ebenen: Formulierung (was ist drin und mit welcher Funktion), Material (Gewicht, Konstruktion, Herkunft), Charge (wann, wie viel, geprüft womit) und Anwendung (in welcher Zone, wie oft, in welcher Reihenfolge). Erst zusammen ergeben diese vier Angaben ein überprüfbares Bild. Fehlt eine Ebene, bleibt ein Spielraum, in den sich beliebige Behauptungen setzen lassen – meist genau dort, wo eine Marke keine Daten hat." },
          { heading: "Was eine gute Angabe ausmacht", body: "Eine belastbare Angabe hat drei Bestandteile: einen Wert, eine Einheit und den Kontext ihrer Erhebung. „480 GSM“ ist eine Angabe. „Schwere Baumwolle“ ist eine Empfindung. „Flat Seam“ beschreibt eine Konstruktion. „Angenehm zu tragen“ beschreibt eine Hoffnung. Der Unterschied ist nicht sprachlicher Stil, sondern die Frage, ob jemand die Aussage widerlegen könnte. Was nicht widerlegbar ist, ist auch nicht belegbar." },
          { heading: "Wo wir bewusst nichts sagen", body: "Es gibt Bereiche, in denen wir keine Zahl nennen, weil wir keine belastbare haben. Wirkversprechen zu Hautbild, Geruchsdauer oder Mikrobiom formulieren wir deshalb zurückhaltend. Das kostet Überzeugungskraft im Vergleich zu Wettbewerbern, die diese Zahlen frei behaupten. Wir halten es trotzdem für die richtige Entscheidung: Eine Marke, die überall eine Zahl hat, hat meistens keine Prüfmethode." },
        ],
        takeaways: [
          "Qualität braucht vier Ebenen: Formulierung, Material, Charge, Anwendung.",
          "Wert + Einheit + Erhebungskontext = belastbare Angabe.",
          "Was nicht widerlegbar formuliert ist, ist nicht belegt.",
          "Fehlende Angaben sind aussagekräftiger als schöne Adjektive.",
        ],
        ctaText: "Technologie und Spezifikationen sind pro Produkt dokumentiert.",
      },
      en: {
        title: "QUALITY IS A SPECIFICATION",
        excerpt: "Formulation, material, batch, application. How we make quality traceable.",
        dek: "\"High quality\" is not a value. A number with a unit and a test method is.",
        sections: [
          { heading: "Four levels instead of a feeling", body: "We describe quality on four levels: formulation (what is inside and with which function), material (weight, construction, origin), batch (when, how much, tested how) and application (which zone, how often, in what sequence). Only together do these four produce a verifiable picture. If one level is missing, a gap remains into which arbitrary claims can be placed — usually exactly where a brand has no data." },
          { heading: "What makes a good figure", body: "A robust figure has three parts: a value, a unit and the context of measurement. \"480 GSM\" is a figure. \"Heavy cotton\" is a sensation. \"Flat seam\" describes a construction. \"Comfortable to wear\" describes a hope. The difference is not linguistic style but whether someone could disprove the statement. What cannot be disproven cannot be evidenced either." },
          { heading: "Where we deliberately say nothing", body: "There are areas where we quote no number because we have no robust one. Claims about skin appearance, odour duration or microbiome are therefore phrased conservatively. That costs persuasive power against competitors who assert those numbers freely. We still consider it the right call: a brand with a number for everything usually has no test method." },
        ],
        takeaways: [
          "Quality needs four levels: formulation, material, batch, application.",
          "Value + unit + measurement context = a robust figure.",
          "A claim that cannot be disproven is not evidenced.",
          "Missing figures are more telling than pleasant adjectives.",
        ],
        ctaText: "Technology and specifications are documented per product.",
      },
    },
  },
  {
    slug: "intimhygiene-reinigung",
    date: "2026-06-27",
    readTime: 6,
    image: sensitiveImage,
    imagePlaceholder: true,
    category: "hygiene",
    cta: "products",
    text: {
      de: {
        title: "REINIGUNG NACH DEM TOILETTENGANG",
        excerpt: "Toilettenpapier allein reicht oft nicht aus. Was die Bakterienlast tatsächlich senkt und warum trockenes Reiben mehr reizen als reinigen kann.",
        dek: "Ein sachlicher Blick auf einen Vorgang, über den selten präzise gesprochen wird.",
        sections: [
          { heading: "Warum trockenes Papier begrenzt wirkt", body: "Trockenes Toilettenpapier arbeitet rein mechanisch: Es nimmt auf und reibt ab. Rückstände in Hautfalten werden dabei nur teilweise erfasst, und mit zunehmendem Druck steigt die mechanische Belastung der empfindlichen Perianalhaut. Diese Region hat eine dünne Hornschicht und reagiert auf wiederholte Reibung mit Rötung, Brennen und kleinen Einrissen. Genau diese Mikroverletzungen sind es, die anschließend jucken und die Anfälligkeit für Reizungen erhöhen – nicht die verbliebene Restmenge selbst." },
          { heading: "Was die Belastung sachlich senkt", body: "Fachlich empfohlen ist eine Reinigung mit klarem, lauwarmem Wasser: Bidet, Duschstrahl oder befeuchtetes Papier ohne Duft- und Konservierungsstoffe. Wasser löst Rückstände, ohne zusätzlichen Druck zu erfordern. Wichtig ist das anschließende Trocknen: tupfen, nicht reiben, und vollständig trocken werden lassen, bevor Textil aufliegt. Feuchtigkeit unter Kleidung begünstigt Mazeration – aufgeweichte Haut ist mechanisch belastbarer verletzlich und anfälliger für Reizungen. Auf Seife in dieser Zone sollte man weitgehend verzichten; sie entfernt Lipide und verschiebt den pH-Wert." },
          { heading: "Feuchttücher: der häufige Fehler", body: "Feuchttücher fühlen sich gründlich an, enthalten aber häufig Konservierungsstoffe und Duftkomponenten, die zu den bekanntesten Auslösern von Kontaktekzemen in dieser Region gehören. Wer sie täglich nutzt und über Wochen Juckreiz entwickelt, sollte sie zuerst weglassen. Bei anhaltenden Beschwerden, Blutungen oder wiederkehrenden Entzündungen gehört die Abklärung in ärztliche Hände – dieser Text ersetzt keine Diagnose." },
        ],
        takeaways: [
          "Trockenes Reiben reizt eher, als dass es reinigt.",
          "Klares lauwarmes Wasser, danach tupfen statt reiben.",
          "Vollständig trocknen lassen, bevor Kleidung aufliegt.",
          "Parfümierte Feuchttücher bei Juckreiz als Erstes weglassen.",
        ],
        ctaText: "Für sensible Zonen: AX-02 SENSITIVE und der HAMAMELIS MIST aus der PREP-Phase.",
      },
      en: {
        title: "CLEANSING AFTER USING THE TOILET",
        excerpt: "Toilet paper alone is often not enough. What actually reduces bacterial load and why dry rubbing can irritate more than it cleans.",
        dek: "A factual look at a process that is rarely discussed precisely.",
        sections: [
          { heading: "Why dry paper has limits", body: "Dry toilet paper works purely mechanically: it absorbs and abrades. Residue inside skin folds is only partly captured, and as pressure increases so does mechanical load on the sensitive perianal skin. This region has a thin horny layer and responds to repeated friction with redness, burning and small fissures. Those micro-injuries are what itch afterwards and raise susceptibility to irritation — not the remaining residue itself." },
          { heading: "What reduces the load", body: "Professional guidance points to cleansing with clear, lukewarm water: bidet, shower spray or paper moistened with water, without fragrance or preservatives. Water dissolves residue without requiring additional pressure. Drying matters just as much: pat, do not rub, and let the area dry fully before textile touches it. Moisture under clothing encourages maceration — softened skin is more vulnerable and more prone to irritation. Soap should largely be avoided in this zone; it removes lipids and shifts pH." },
          { heading: "Wet wipes: the common mistake", body: "Wet wipes feel thorough but frequently contain preservatives and fragrance components that rank among the best-known triggers of contact eczema in this region. If you use them daily and develop itching over weeks, remove them first. For persistent symptoms, bleeding or recurring inflammation, seek medical assessment — this text does not replace a diagnosis." },
        ],
        takeaways: [
          "Dry rubbing tends to irritate rather than clean.",
          "Clear lukewarm water, then pat dry instead of rubbing.",
          "Let the area dry fully before clothing touches it.",
          "If itching occurs, drop fragranced wet wipes first.",
        ],
        ctaText: "For sensitive zones: AX-02 SENSITIVE and the HAMAMELIS MIST from the PREP phase.",
      },
    },
  },
  {
    slug: "unterwaesche-wechseln",
    date: "2026-06-23",
    readTime: 5,
    image: boxersImage,
    imagePlaceholder: true,
    category: "hygiene",
    cta: "fabrics",
    text: {
      de: {
        title: "WIE OFT UNTERWÄSCHE WIRKLICH GEWECHSELT WERDEN SOLLTE",
        excerpt: "Feuchtigkeit, Wärme und Textil schaffen ein Milieu, das Haut und Mikrobiom belasten kann.",
        dek: "Die Antwort ist unspektakulär: täglich. Interessanter ist, warum ein Tag die richtige Grenze ist.",
        sections: [
          { heading: "Was in 24 Stunden passiert", body: "Unterwäsche nimmt im Verlauf eines Tages Schweiß, Hautzellen, Talg und geringe Mengen an Körperausscheidungen auf. In Kombination mit Körperwärme und eingeschränkter Belüftung entsteht ein feuchtwarmes Milieu, in dem sich Bakterien und Hefepilze deutlich schneller vermehren als auf trockener Haut. Wird dasselbe Textil am Folgetag erneut getragen, startet der Tag nicht bei null, sondern mit einer bereits erhöhten Ausgangslast direkt auf empfindlicher Haut." },
          { heading: "Warum „jeden zweiten Tag“ problematisch ist", body: "Der Zwei-Tage-Rhythmus wirkt sparsam, verlängert aber genau die Phase, in der Feuchtigkeit an der Haut steht. Für die meisten Menschen bleibt das folgenlos. Wer jedoch zu Follikulitis, Intertrigo, Pilzinfektionen oder Reizungen im Leistenbereich neigt, verschiebt damit die Bedingungen in eine ungünstige Richtung. Nach Sport, bei Hitze oder starkem Schwitzen ist ein Wechsel noch am selben Tag sinnvoll – nicht aus Etikette, sondern weil nasses Textil auf Haut die Reibungsbelastung deutlich erhöht." },
          { heading: "Waschen und Material", body: "Baumwolle nimmt Feuchtigkeit auf und ist im Alltag gut geeignet; enge Synthetik hält sie eher an der Haut. Waschen bei 40 °C entfernt den Großteil der Belastung, bei akuten Hautproblemen oder Pilzinfektionen sind 60 °C oder ein Hygienespüler sinnvoll. Vollständiges Trocknen ist wichtiger, als viele annehmen: Restfeuchte im Schrank begünstigt Keimwachstum im Textil selbst." },
        ],
        takeaways: [
          "Täglich wechseln – nach Sport oder Hitze auch zweimal.",
          "Nasses Textil auf Haut erhöht Reibung und Reizungsrisiko.",
          "Bei Hautproblemen bei 60 °C waschen oder Hygienespüler nutzen.",
          "Wäsche vollständig trocknen, bevor sie in den Schrank kommt.",
        ],
        ctaText: "FABRICS führt Gewicht und Konstruktion pro Stück – relevant für Feuchtigkeit und Reibung.",
      },
      en: {
        title: "HOW OFTEN UNDERWEAR SHOULD ACTUALLY BE CHANGED",
        excerpt: "Moisture, warmth and textile create an environment that can stress skin and microbiome.",
        dek: "The answer is unspectacular: daily. What is interesting is why one day is the right limit.",
        sections: [
          { heading: "What happens in 24 hours", body: "Over a day, underwear collects sweat, skin cells, sebum and small amounts of bodily residue. Combined with body heat and limited ventilation, this creates a warm, humid environment in which bacteria and yeasts multiply considerably faster than on dry skin. Wearing the same textile again the next day means the day does not start at zero but with an already elevated load sitting directly on sensitive skin." },
          { heading: "Why \"every other day\" is a problem", body: "A two-day rhythm looks economical but extends exactly the phase in which moisture sits against skin. For most people this stays uneventful. Anyone prone to folliculitis, intertrigo, fungal infection or groin irritation shifts conditions in an unfavourable direction. After sport, in heat or with heavy sweating, changing the same day is sensible — not out of etiquette but because wet textile on skin markedly increases friction load." },
          { heading: "Washing and material", body: "Cotton absorbs moisture and works well day to day; tight synthetics tend to hold it against skin. Washing at 40 °C removes most of the load; with acute skin problems or fungal infection, 60 °C or a hygiene rinse is advisable. Complete drying matters more than many assume: residual moisture in the wardrobe encourages microbial growth in the textile itself." },
        ],
        takeaways: [
          "Change daily — twice after sport or in heat.",
          "Wet textile on skin raises friction and irritation risk.",
          "With skin problems, wash at 60 °C or use a hygiene rinse.",
          "Dry laundry fully before storing it.",
        ],
        ctaText: "FABRICS states weight and construction per piece — relevant to moisture and friction.",
      },
    },
  },
  {
    slug: "fuesse-duschen",
    date: "2026-06-19",
    readTime: 5,
    image: recoverImage,
    imagePlaceholder: true,
    category: "hygiene",
    cta: "accessories",
    text: {
      de: {
        title: "DIE MEISTEN DUSCHEN NUR BIS ZU DEN KNIEN",
        excerpt: "Füße werden nass, aber selten gründlich gereinigt. Was das für Geruch und Hautbelastung bedeutet.",
        dek: "Wasser, das an einem Körperteil vorbeiläuft, ist keine Reinigung.",
        sections: [
          { heading: "Warum gerade Füße auffallen", body: "Die Fußsohle hat die höchste Schweißdrüsendichte des Körpers – mehrere hundert pro Quadratzentimeter. In geschlossenen Schuhen entsteht daraus über Stunden ein feuchtwarmes Milieu. Geruch entsteht auch hier nicht durch Schweiß selbst, sondern durch Bakterien, die ihn zersetzen. Wenn beim Duschen nur Wasser über die Füße läuft, werden Zehenzwischenräume und Nagelfalz praktisch nicht erreicht – genau die Bereiche, in denen sich Feuchtigkeit und Zellmaterial sammeln." },
          { heading: "Was konkret zu tun ist", body: "Füße gehören einzeln gewaschen: mit der Hand oder einem Waschstück gezielt über Sohle, Ballen, Ferse und vor allem zwischen die Zehen. Danach ist das Trocknen der entscheidende Schritt, und er wird am häufigsten ausgelassen. Zehenzwischenräume müssen vollständig trocken sein, bevor Socken angezogen werden – Restfeuchte dort ist die klassische Vorbedingung für Fußpilz. Ein separates, häufig gewechseltes Handtuch für die Füße ist sinnvoll, ebenso wechselnde Schuhe, damit ein Paar zwischen zwei Tagen vollständig durchtrocknen kann." },
          { heading: "Nicht übertreiben", body: "Häufiges heißes Duschen mit stark schäumenden Reinigern entfernt Lipide und trocknet die ohnehin dicke, aber empfindliche Hornhaut aus. Rissige Fersen entstehen häufiger durch Übertreiben als durch Vernachlässigung. Sinnvoll ist gezielte Reinigung, gründliches Trocknen und danach eine dünne Lipidschicht auf trockene Haut – nicht zwischen die Zehen. Bei Verfärbung der Nägel, anhaltendem Juckreiz oder offenen Stellen ist eine ärztliche Abklärung angezeigt." },
        ],
        takeaways: [
          "Füße aktiv waschen, nicht nur überspülen lassen.",
          "Zehenzwischenräume vollständig trocknen, bevor Socken folgen.",
          "Schuhe im Wechsel tragen, damit sie durchtrocknen können.",
          "Lipide auf Ferse und Sohle – nicht zwischen die Zehen.",
        ],
        ctaText: "Objekte für ein reduziertes Ritual: Seifenschalen mit Ablauf halten Seife trocken.",
      },
      en: {
        title: "MOST PEOPLE ONLY SHOWER DOWN TO THE KNEES",
        excerpt: "Feet get wet but are rarely cleaned thoroughly. What that means for odour and skin load.",
        dek: "Water running past a body part is not cleansing.",
        sections: [
          { heading: "Why feet stand out", body: "The sole has the highest sweat gland density on the body — several hundred per square centimetre. Inside closed shoes this produces a warm, humid environment over hours. Odour here too comes not from sweat itself but from bacteria breaking it down. If showering only means water running across the feet, the spaces between toes and the nail folds are practically untouched — precisely where moisture and cell material accumulate." },
          { heading: "What to do concretely", body: "Feet need to be washed individually: by hand or with a soap bar, deliberately across sole, ball, heel and above all between the toes. Drying is then the decisive step, and it is the one most often skipped. The spaces between toes must be fully dry before socks go on — residual moisture there is the classic precondition for athlete's foot. A separate, frequently changed towel for feet is sensible, as is rotating shoes so a pair can dry completely between wears." },
          { heading: "Do not overdo it", body: "Frequent hot showers with strongly foaming cleansers strip lipids and dry out the thick but sensitive callus layer. Cracked heels arise more often from excess than from neglect. What works is targeted cleansing, thorough drying and then a thin lipid layer on dry skin — not between the toes. With nail discolouration, persistent itching or open areas, seek medical assessment." },
        ],
        takeaways: [
          "Wash feet actively, do not just rinse them.",
          "Dry between the toes completely before putting on socks.",
          "Rotate shoes so each pair can dry through.",
          "Lipids on heel and sole — not between the toes.",
        ],
        ctaText: "Objects for a reduced ritual: draining soap trays keep soap dry.",
      },
    },
  },
  {
    slug: "haare-waschen-frequenz",
    date: "2026-06-15",
    readTime: 6,
    image: oatImage,
    imagePlaceholder: true,
    category: "hygiene",
    cta: "products",
    text: {
      de: {
        title: "WARUM TÄGLICHES HAAREWASCHEN OFT MEHR SCHADET",
        excerpt: "Regelmäßiges Waschen gilt als Hygienestandard – dabei kann es die Kopfhaut und ihr Mikrobiom stärker belasten als nötig.",
        dek: "Die Kopfhaut ist Haut. Sie folgt denselben Regeln wie der Rest des Körpers – nur wird sie selten so behandelt.",
        sections: [
          { heading: "Was beim Waschen tatsächlich passiert", body: "Tenside lösen Talg, Schmutz und Rückstände – sie unterscheiden dabei aber nicht zwischen überschüssigem und funktional notwendigem Fett. Der Talgfilm der Kopfhaut ist Teil der Barriere und Lebensgrundlage eines stabilen Mikrobioms. Wird er täglich vollständig entfernt, reagiert die Kopfhaut mit Trockenheit, Spannungsgefühl oder – bei manchen Menschen – mit verstärkter Talgproduktion. Der Eindruck, die Haare würden „schneller fetten“, ist deshalb nicht immer Einbildung, aber auch keine feste Regel: Die individuelle Varianz ist groß." },
          { heading: "Frequenz ist individuell, nicht moralisch", body: "Eine allgemeingültige Zahl gibt es nicht. Feines, schnell fettendes Haar bei sportlicher Aktivität verträgt tägliches Waschen oft gut; dickes, lockiges oder trockenes Haar meist deutlich seltener. Sinnvoller als eine Regel ist ein Kriterium: Wasche, wenn Kopfhaut oder Haar es erfordern – nicht nach Kalender. Wer die Frequenz reduzieren will, sollte das schrittweise tun und der Kopfhaut einige Wochen Anpassung geben, statt nach vier Tagen abzubrechen." },
          { heading: "Wie gewaschen wird, zählt mehr als wie oft", body: "Mehrere Faktoren belasten stärker als die Frequenz selbst: sehr heißes Wasser, kräftiges Rubbeln mit den Fingernägeln, große Shampoomengen und tägliches Hitzestyling. Sinnvoll sind lauwarmes Wasser, eine kleine Menge Shampoo, Massage mit den Fingerkuppen, gründliches Ausspülen und lufttrocknen, wo möglich. Bei anhaltender Schuppung, Rötung oder Juckreiz liegt oft ein behandelbares dermatologisches Bild vor – das ist keine Frage der Waschfrequenz." },
        ],
        takeaways: [
          "Es gibt keine allgemeingültige Waschfrequenz – nur individuelle Kriterien.",
          "Lauwarmes Wasser und Fingerkuppen statt Nägel und Hitze.",
          "Frequenz schrittweise reduzieren, mehrere Wochen Anpassung einplanen.",
          "Anhaltende Schuppung oder Rötung dermatologisch abklären lassen.",
        ],
        ctaText: "Für Reinigung ohne unnötige Entfettung: die RECOVER-Seifen der Kollektion.",
      },
      en: {
        title: "WHY DAILY HAIR WASHING OFTEN DOES MORE HARM",
        excerpt: "Regular washing counts as a hygiene standard — yet it can stress the scalp and its microbiome more than necessary.",
        dek: "The scalp is skin. It follows the same rules as the rest of the body — it is just rarely treated that way.",
        sections: [
          { heading: "What washing actually does", body: "Surfactants dissolve sebum, dirt and residue — but they do not distinguish between excess and functionally necessary lipids. The scalp's sebum film is part of the barrier and the basis of a stable microbiome. Removing it entirely every day makes the scalp respond with dryness, tightness or — in some people — increased sebum production. The impression that hair \"gets greasy faster\" is therefore not always imagined, but it is not a fixed rule either: individual variance is large." },
          { heading: "Frequency is individual, not moral", body: "There is no universally valid number. Fine, quickly greasing hair in an active routine often tolerates daily washing well; thick, curly or dry hair usually needs it far less. More useful than a rule is a criterion: wash when scalp or hair require it, not by calendar. If you want to reduce frequency, do it gradually and give the scalp several weeks to adapt instead of stopping after four days." },
          { heading: "How you wash matters more than how often", body: "Several factors stress the scalp more than frequency itself: very hot water, vigorous scrubbing with fingernails, large amounts of shampoo and daily heat styling. What works is lukewarm water, a small amount of shampoo, massage with fingertips, thorough rinsing and air drying where possible. Persistent flaking, redness or itching usually indicates a treatable dermatological condition — that is not a question of wash frequency." },
        ],
        takeaways: [
          "There is no universal wash frequency — only individual criteria.",
          "Lukewarm water and fingertips instead of nails and heat.",
          "Reduce frequency gradually; allow several weeks of adaptation.",
          "Have persistent flaking or redness assessed dermatologically.",
        ],
        ctaText: "For cleansing without unnecessary lipid stripping: the RECOVER soaps in the collection.",
      },
    },
  },
  {
    slug: "handtuch-keimlast",
    date: "2026-06-11",
    readTime: 5,
    image: towelImage,
    imagePlaceholder: true,
    category: "hygiene",
    cta: "accessories",
    text: {
      de: {
        title: "DEIN HANDTUCH IST KEIMBELASTETER, ALS DU DENKST",
        excerpt: "Feuchtes Reiben, alte Handtücher und falsche Aufbewahrung belasten das Hautmikrobiom unnötig.",
        dek: "Ein Handtuch ist ein feuchtes, warmes Textil mit organischem Material darauf. Das ist eine präzise Beschreibung eines Nährbodens.",
        sections: [
          { heading: "Warum Handtücher zum Problem werden", body: "Nach dem Abtrocknen enthält ein Handtuch Feuchtigkeit, abgelöste Hautzellen und Hautfette. Hängt es anschließend zusammengeknüllt in einem schlecht belüfteten Badezimmer, bleibt es über Stunden feucht – Bedingungen, unter denen sich Bakterien und Schimmelpilze vermehren. Der muffige Geruch nach einigen Tagen ist kein Kosmetikproblem, sondern ein Hinweis auf mikrobielle Aktivität im Textil. Wer sich damit abtrocknet, verteilt diese Last zurück auf frisch gereinigte Haut." },
          { heading: "Praktische Richtwerte", body: "Körperhandtücher sollten nach etwa drei Verwendungen gewaschen werden, Handtücher am Waschbecken deutlich häufiger, da sie mehrfach täglich und oft mit unvollständig gereinigten Händen benutzt werden. Waschen bei 60 °C entfernt den Großteil relevanter Keime; 30 °C reicht dafür nicht zuverlässig aus. Entscheidend ist zusätzlich, das Handtuch nach jeder Nutzung ausgebreitet aufzuhängen, sodass es vollständig trocknen kann. Bei Hautinfektionen, offenen Stellen oder Fußpilz gilt: eigenes Handtuch, täglicher Wechsel, keine gemeinsame Nutzung." },
          { heading: "Die Technik des Abtrocknens", body: "Kräftiges Reiben auf feuchter Haut kombiniert zwei ungünstige Faktoren: aufgeweichte Hornschicht und mechanische Belastung. Tupfen ist in beanspruchten Zonen die bessere Methode – Achsel, Leiste, Zehenzwischenräume und frisch rasierte Bereiche. Anschließend kurz an der Luft nachtrocknen lassen, bevor Kleidung oder Pflege folgt. Das kostet dreißig Sekunden und reduziert genau die Reibungslast, die viele mit Produkten zu kompensieren versuchen." },
        ],
        takeaways: [
          "Körperhandtuch nach etwa drei Nutzungen wechseln, Gästehandtuch häufiger.",
          "Bei 60 °C waschen; 30 °C reicht nicht zuverlässig.",
          "Ausgebreitet aufhängen, damit es vollständig trocknet.",
          "In beanspruchten Zonen tupfen statt reiben.",
        ],
        ctaText: "Objekte, die Trocknung und Hygiene erleichtern, findest du in den Accessories.",
      },
      en: {
        title: "YOUR TOWEL CARRIES MORE MICROBES THAN YOU THINK",
        excerpt: "Damp rubbing, old towels and poor storage put unnecessary load on the skin microbiome.",
        dek: "A towel is a damp, warm textile with organic material on it. That is a precise description of a growth medium.",
        sections: [
          { heading: "Why towels become a problem", body: "After drying off, a towel holds moisture, shed skin cells and skin lipids. If it then hangs bunched up in a poorly ventilated bathroom, it stays damp for hours — conditions under which bacteria and moulds multiply. The musty smell after a few days is not a cosmetic issue but an indicator of microbial activity in the textile. Drying yourself with it redistributes that load onto freshly cleaned skin." },
          { heading: "Practical guidance", body: "Body towels should be washed after roughly three uses; hand towels at the basin considerably more often, since they are used several times a day and frequently with incompletely cleaned hands. Washing at 60 °C removes most relevant microbes; 30 °C does not do so reliably. Equally important is hanging the towel spread out after every use so it can dry completely. With skin infections, open areas or athlete's foot: own towel, daily change, never shared." },
          { heading: "The technique of drying", body: "Vigorous rubbing on damp skin combines two unfavourable factors: a softened horny layer and mechanical load. Patting is the better method in stressed zones — underarm, groin, between the toes and freshly shaved areas. Let the skin air-dry briefly afterwards before clothing or care follows. It costs thirty seconds and reduces exactly the friction load many people try to compensate with products." },
        ],
        takeaways: [
          "Change body towels after about three uses, hand towels more often.",
          "Wash at 60 °C; 30 °C is not reliable.",
          "Hang spread out so the towel dries completely.",
          "Pat instead of rubbing in stressed zones.",
        ],
        ctaText: "Objects that support drying and hygiene are in the Accessories line.",
      },
    },
  },
];

export function getJournalArticle(slug: string) {
  return journalArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: JournalArticle, count = 3) {
  const sameCategory = journalArticles.filter((entry) => entry.slug !== article.slug && entry.category === article.category);
  const others = journalArticles.filter((entry) => entry.slug !== article.slug && entry.category !== article.category);
  return [...sameCategory, ...others].slice(0, count);
}
