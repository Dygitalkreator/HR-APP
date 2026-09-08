import type { Locale } from "@/i18n/config";

export type LineKey = "cosmetics" | "fabrics" | "superfood" | "accessories";

type Evidence = { value: string; label: string };

type TrustBlock = { eyebrow: string; title: string; lead: string; evidence: Evidence[] };

export type PageFunnelCopy = {
  crossSellEyebrow: string;
  crossSellTitle: string;
  crossSellCta: string;
  lines: Record<LineKey, { eyebrow: string; title: string; body: string }>;
  fabricsTrust: TrustBlock;
  superfoodTrust: TrustBlock;
  accessoriesOrigin: TrustBlock;
};

export const pageFunnelCopy: Record<Locale, PageFunnelCopy> = {
  de: {
    crossSellEyebrow: "WEITER IM SYSTEM",
    crossSellTitle: "ANGRENZENDE LINIEN.",
    crossSellCta: "Linie ansehen",
    lines: {
      cosmetics: { eyebrow: "01 · APPLIED LIPID SCIENCE", title: "AX COSMETICS", body: "Zehn Module in vier Phasen — wasserfrei formuliert, in Miron-Violettglas abgefüllt." },
      fabrics: { eyebrow: "02 · APPLIED FIBER SCIENCE", title: "ZONES FABRICS", body: "Schwere Baumwolle, Seide und Frottee für Abend, Reise und Regeneration." },
      superfood: { eyebrow: "03 · APPLIED ORIGIN SCIENCE", title: "ZONES SUPERFOOD", body: "Spezialitäten-Kaffee — nach Verarbeitung und Qualitätsstufe ausgewählt." },
      accessories: { eyebrow: "04 · SOURCED, NOT ENGINEERED", title: "ACCESSORIES", body: "Kuratierte Objekte europäischer Werkstätten: Olivenholz, Porzellan, Stahl." },
    },
    fabricsTrust: {
      eyebrow: "MATERIALNACHWEIS",
      title: "GEWICHT IST EINE ANGABE, KEIN GEFÜHL.",
      lead: "Jede Faser wird über Gewicht, Konstruktion und Charge geführt. Keine Behauptung ohne messbare Angabe.",
      evidence: [
        { value: "480 GSM", label: "MATERIAL" },
        { value: "FLAT SEAM", label: "KONSTRUKTION" },
        { value: "LOT 0419", label: "CHARGE" },
        { value: "BAVARIA", label: "HERKUNFT" },
      ],
    },
    superfoodTrust: {
      eyebrow: "HERKUNFTSNACHWEIS",
      title: "HERKUNFT VOR BEHAUPTUNG.",
      lead: "Verarbeitung, Qualitätsstufe und Charge werden pro Produkt ausgewiesen. Herkunft und Zertifizierungen nur dort, wo sie für den jeweiligen Lot belegt sind.",
      evidence: [
        { value: "ECUADOR", label: "URSPRUNG" },
        { value: "ANDEN", label: "KOOPERATIVEN" },
        { value: "LOT 0419", label: "CHARGE" },
        { value: "LOT-LEVEL", label: "RÜCKVERFOLGBARKEIT" },
      ],
    },
    accessoriesOrigin: {
      eyebrow: "KURATIERUNG",
      title: "AUSGEWÄHLT, NICHT ENTWICKELT.",
      lead: "Diese Objekte entstehen in europäischen Werkstätten. Wir geben sie nicht als eigene Entwicklung aus — wir wählen aus und nennen die Herkunft.",
      evidence: [
        { value: "OLIVENHOLZ", label: "MATERIAL" },
        { value: "HANDWERK", label: "FERTIGUNG" },
        { value: "EUROPA", label: "SOURCING" },
        { value: "04", label: "OBJEKTE" },
      ],
    },
  },
  en: {
    crossSellEyebrow: "CONTINUE THE SYSTEM",
    crossSellTitle: "ADJACENT LINES.",
    crossSellCta: "View line",
    lines: {
      cosmetics: { eyebrow: "01 · APPLIED LIPID SCIENCE", title: "AX COSMETICS", body: "Ten modules across four phases — waterless formulation, Miron violet glass." },
      fabrics: { eyebrow: "02 · APPLIED FIBER SCIENCE", title: "ZONES FABRICS", body: "Heavyweight cotton, silk and terry for the evening, the journey and recovery." },
      superfood: { eyebrow: "03 · APPLIED ORIGIN SCIENCE", title: "ZONES SUPERFOOD", body: "Specialty coffee — selected by processing and quality grade." },
      accessories: { eyebrow: "04 · SOURCED, NOT ENGINEERED", title: "ACCESSORIES", body: "Curated objects from European workshops: olive wood, porcelain, steel." },
    },
    fabricsTrust: {
      eyebrow: "MATERIAL EVIDENCE",
      title: "WEIGHT IS A SPEC, NOT A FEELING.",
      lead: "Every fibre is documented by weight, construction and batch. No claim without a measurable figure.",
      evidence: [
        { value: "480 GSM", label: "MATERIAL" },
        { value: "FLAT SEAM", label: "CONSTRUCTION" },
        { value: "LOT 0419", label: "BATCH" },
        { value: "BAVARIA", label: "ORIGIN" },
      ],
    },
    superfoodTrust: {
      eyebrow: "ORIGIN EVIDENCE",
      title: "ORIGIN BEFORE ASSERTION.",
      lead: "Processing, quality grade and lot are stated per product. Origin and certifications only where documented for that lot.",
      evidence: [
        { value: "ECUADOR", label: "ORIGIN" },
        { value: "ANDES", label: "COOPERATIVES" },
        { value: "LOT 0419", label: "BATCH" },
        { value: "LOT-LEVEL", label: "TRACEABILITY" },
      ],
    },
    accessoriesOrigin: {
      eyebrow: "CURATION",
      title: "SOURCED, NOT ENGINEERED.",
      lead: "These objects are made in European workshops. We never present them as our own engineering — we select and we name the origin.",
      evidence: [
        { value: "OLIVE WOOD", label: "MATERIAL" },
        { value: "HANDCRAFT", label: "MAKING" },
        { value: "EUROPE", label: "SOURCING" },
        { value: "04", label: "OBJECTS" },
      ],
    },
  },
  fr: {
    crossSellEyebrow: "SUITE DU SYSTÈME",
    crossSellTitle: "LIGNES VOISINES.",
    crossSellCta: "Voir la ligne",
    lines: {
      cosmetics: { eyebrow: "01 · APPLIED LIPID SCIENCE", title: "AX COSMETICS", body: "Dix modules en quatre phases — formulation sans eau, verre violet Miron." },
      fabrics: { eyebrow: "02 · APPLIED FIBER SCIENCE", title: "ZONES FABRICS", body: "Coton lourd, soie et éponge pour le soir, le voyage et la récupération." },
      superfood: { eyebrow: "03 · APPLIED ORIGIN SCIENCE", title: "ZONES SUPERFOOD", body: "Café de spécialité — sélectionné selon le procédé et le niveau de qualité." },
      accessories: { eyebrow: "04 · SÉLECTIONNÉ, NON CONÇU", title: "ACCESSOIRES", body: "Objets sélectionnés d’ateliers européens : olivier, porcelaine, acier." },
    },
    fabricsTrust: {
      eyebrow: "PREUVE MATIÈRE",
      title: "LE POIDS EST UNE DONNÉE, PAS UNE SENSATION.",
      lead: "Chaque fibre est documentée par grammage, construction et lot. Aucune affirmation sans mesure.",
      evidence: [
        { value: "480 GSM", label: "MATIÈRE" },
        { value: "FLAT SEAM", label: "CONSTRUCTION" },
        { value: "LOT 0419", label: "LOT" },
        { value: "BAVIÈRE", label: "ORIGINE" },
      ],
    },
    superfoodTrust: {
      eyebrow: "PREUVE D’ORIGINE",
      title: "L’ORIGINE AVANT L’AFFIRMATION.",
      lead: "Région, coopérative et lot sont indiqués par produit. Certifications uniquement sur justificatif du lot.",
      evidence: [
        { value: "ÉQUATEUR", label: "ORIGINE" },
        { value: "ANDES", label: "COOPÉRATIVES" },
        { value: "LOT 0419", label: "LOT" },
        { value: "PAR LOT", label: "TRAÇABILITÉ" },
      ],
    },
    accessoriesOrigin: {
      eyebrow: "SÉLECTION",
      title: "SÉLECTIONNÉ, NON CONÇU.",
      lead: "Ces objets sont fabriqués dans des ateliers européens. Nous ne les présentons jamais comme notre ingénierie — nous choisissons et nommons l’origine.",
      evidence: [
        { value: "OLIVIER", label: "MATIÈRE" },
        { value: "ARTISANAT", label: "FABRICATION" },
        { value: "EUROPE", label: "SOURCING" },
        { value: "04", label: "OBJETS" },
      ],
    },
  },
  it: {
    crossSellEyebrow: "CONTINUA NEL SISTEMA",
    crossSellTitle: "LINEE ADIACENTI.",
    crossSellCta: "Vedi la linea",
    lines: {
      cosmetics: { eyebrow: "01 · APPLIED LIPID SCIENCE", title: "AX COSMETICS", body: "Dieci moduli in quattro fasi — formulazione senza acqua, vetro viola Miron." },
      fabrics: { eyebrow: "02 · APPLIED FIBER SCIENCE", title: "ZONES FABRICS", body: "Cotone pesante, seta e spugna per la sera, il viaggio e il recupero." },
      superfood: { eyebrow: "03 · APPLIED ORIGIN SCIENCE", title: "ZONES SUPERFOOD", body: "Caffè specialty — selezionato per processo e livello di qualità." },
      accessories: { eyebrow: "04 · SELEZIONATO, NON PROGETTATO", title: "ACCESSORI", body: "Oggetti selezionati da laboratori europei: ulivo, porcellana, acciaio." },
    },
    fabricsTrust: {
      eyebrow: "PROVA MATERIALE",
      title: "IL PESO È UN DATO, NON UNA SENSAZIONE.",
      lead: "Ogni fibra è documentata per grammatura, costruzione e lotto. Nessuna affermazione senza misura.",
      evidence: [
        { value: "480 GSM", label: "MATERIALE" },
        { value: "FLAT SEAM", label: "COSTRUZIONE" },
        { value: "LOT 0419", label: "LOTTO" },
        { value: "BAVIERA", label: "ORIGINE" },
      ],
    },
    superfoodTrust: {
      eyebrow: "PROVA DI ORIGINE",
      title: "L’ORIGINE PRIMA DELLE AFFERMAZIONI.",
      lead: "Processo, livello di qualità e lotto sono indicati per prodotto. Origine e certificazioni solo se documentate per quel lotto.",
      evidence: [
        { value: "ECUADOR", label: "ORIGINE" },
        { value: "ANDE", label: "COOPERATIVE" },
        { value: "LOT 0419", label: "LOTTO" },
        { value: "PER LOTTO", label: "TRACCIABILITÀ" },
      ],
    },
    accessoriesOrigin: {
      eyebrow: "CURATELA",
      title: "SELEZIONATO, NON PROGETTATO.",
      lead: "Questi oggetti nascono in laboratori europei. Non li presentiamo come nostra progettazione — selezioniamo e dichiariamo l’origine.",
      evidence: [
        { value: "ULIVO", label: "MATERIALE" },
        { value: "ARTIGIANATO", label: "LAVORAZIONE" },
        { value: "EUROPA", label: "SOURCING" },
        { value: "04", label: "OGGETTI" },
      ],
    },
  },
  nl: {
    crossSellEyebrow: "VERDER IN HET SYSTEEM",
    crossSellTitle: "AANGRENZENDE LIJNEN.",
    crossSellCta: "Bekijk lijn",
    lines: {
      cosmetics: { eyebrow: "01 · APPLIED LIPID SCIENCE", title: "AX COSMETICS", body: "Tien modules in vier fasen — watervrij geformuleerd, Miron violetglas." },
      fabrics: { eyebrow: "02 · APPLIED FIBER SCIENCE", title: "ZONES FABRICS", body: "Zwaar katoen, zijde en badstof voor avond, reis en herstel." },
      superfood: { eyebrow: "03 · APPLIED ORIGIN SCIENCE", title: "ZONES SUPERFOOD", body: "Specialty coffee — geselecteerd op verwerking en kwaliteitsniveau." },
      accessories: { eyebrow: "04 · GECUREERD, NIET ONTWIKKELD", title: "ACCESSOIRES", body: "Gecureerde objecten uit Europese ateliers: olijfhout, porselein, staal." },
    },
    fabricsTrust: {
      eyebrow: "MATERIAALBEWIJS",
      title: "GEWICHT IS EEN SPECIFICATIE, GEEN GEVOEL.",
      lead: "Elke vezel is gedocumenteerd op gewicht, constructie en batch. Geen bewering zonder meetbare waarde.",
      evidence: [
        { value: "480 GSM", label: "MATERIAAL" },
        { value: "FLAT SEAM", label: "CONSTRUCTIE" },
        { value: "LOT 0419", label: "BATCH" },
        { value: "BEIEREN", label: "HERKOMST" },
      ],
    },
    superfoodTrust: {
      eyebrow: "HERKOMSTBEWIJS",
      title: "HERKOMST VÓÓR BEWERING.",
      lead: "Verwerking, kwaliteitsniveau en lot staan per product vermeld. Herkomst en certificeringen alleen waar gedocumenteerd voor dat lot.",
      evidence: [
        { value: "ECUADOR", label: "HERKOMST" },
        { value: "ANDES", label: "COÖPERATIES" },
        { value: "LOT 0419", label: "BATCH" },
        { value: "PER LOT", label: "TRACEERBAARHEID" },
      ],
    },
    accessoriesOrigin: {
      eyebrow: "CURATIE",
      title: "GECUREERD, NIET ONTWIKKELD.",
      lead: "Deze objecten komen uit Europese ateliers. We presenteren ze niet als eigen ontwikkeling — we selecteren en noemen de herkomst.",
      evidence: [
        { value: "OLIJFHOUT", label: "MATERIAAL" },
        { value: "AMBACHT", label: "PRODUCTIE" },
        { value: "EUROPA", label: "SOURCING" },
        { value: "04", label: "OBJECTEN" },
      ],
    },
  },
  es: {
    crossSellEyebrow: "SIGUE EN EL SISTEMA",
    crossSellTitle: "LÍNEAS ADYACENTES.",
    crossSellCta: "Ver línea",
    lines: {
      cosmetics: { eyebrow: "01 · APPLIED LIPID SCIENCE", title: "AX COSMETICS", body: "Diez módulos en cuatro fases — formulación sin agua, vidrio violeta Miron." },
      fabrics: { eyebrow: "02 · APPLIED FIBER SCIENCE", title: "ZONES FABRICS", body: "Algodón pesado, seda y rizo para la noche, el viaje y la recuperación." },
      superfood: { eyebrow: "03 · APPLIED ORIGIN SCIENCE", title: "ZONES SUPERFOOD", body: "Café de especialidad — seleccionado por proceso y nivel de calidad." },
      accessories: { eyebrow: "04 · SELECCIONADO, NO DISEÑADO", title: "ACCESORIOS", body: "Objetos seleccionados de talleres europeos: olivo, porcelana, acero." },
    },
    fabricsTrust: {
      eyebrow: "PRUEBA DE MATERIAL",
      title: "EL PESO ES UN DATO, NO UNA SENSACIÓN.",
      lead: "Cada fibra se documenta por gramaje, construcción y lote. Ninguna afirmación sin medida.",
      evidence: [
        { value: "480 GSM", label: "MATERIAL" },
        { value: "FLAT SEAM", label: "CONSTRUCCIÓN" },
        { value: "LOT 0419", label: "LOTE" },
        { value: "BAVIERA", label: "ORIGEN" },
      ],
    },
    superfoodTrust: {
      eyebrow: "PRUEBA DE ORIGEN",
      title: "ORIGEN ANTES QUE AFIRMACIÓN.",
      lead: "Proceso, nivel de calidad y lote se indican por producto. Origen y certificaciones solo donde están documentados para ese lote.",
      evidence: [
        { value: "ECUADOR", label: "ORIGEN" },
        { value: "ANDES", label: "COOPERATIVAS" },
        { value: "LOT 0419", label: "LOTE" },
        { value: "POR LOTE", label: "TRAZABILIDAD" },
      ],
    },
    accessoriesOrigin: {
      eyebrow: "CURADURÍA",
      title: "SELECCIONADO, NO DISEÑADO.",
      lead: "Estos objetos se fabrican en talleres europeos. No los presentamos como ingeniería propia — seleccionamos y nombramos el origen.",
      evidence: [
        { value: "OLIVO", label: "MATERIAL" },
        { value: "ARTESANÍA", label: "FABRICACIÓN" },
        { value: "EUROPA", label: "SOURCING" },
        { value: "04", label: "OBJETOS" },
      ],
    },
  },
};
