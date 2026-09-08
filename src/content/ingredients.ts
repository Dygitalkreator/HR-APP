import type { Locale } from "@/i18n/config";

/**
 * Wirkstoff- & Claim-Wissen, gespiegelt aus dem ZONES R&D System (Notion):
 * - "Inhaltsstoffe & INCI" → INCI-Name, Trivialname, Funktion, Nutzen
 * - "Claim- & Testmatrix" → System Claims (global) inkl. defensiver Definition
 *
 * Rollen-Labels und Claims liegen in allen 6 Sprachen vor.
 * Nutzen-Sätze liegen in DE + EN vor (EN dient als Fallback für FR/IT/NL/ES),
 * analog zu den Notion-Shop-Texten.
 */

export type IngredientRole =
  | "barrier"
  | "soothing"
  | "deodorizing"
  | "absorbent"
  | "antioxidant"
  | "texture"
  | "hydration"
  | "exfoliant"
  | "pigment";

export const ROLE_LABELS: Record<Locale, Record<IngredientRole, string>> = {
  de: {
    barrier: "Barriere",
    soothing: "Beruhigend",
    deodorizing: "Geruchskontrolle",
    absorbent: "Absorbierend",
    antioxidant: "Antioxidativ",
    texture: "Textur",
    hydration: "Feuchtigkeit",
    exfoliant: "Peeling",
    pigment: "Glow",
  },
  en: {
    barrier: "Barrier",
    soothing: "Soothing",
    deodorizing: "Odour control",
    absorbent: "Absorbent",
    antioxidant: "Antioxidant",
    texture: "Texture",
    hydration: "Hydration",
    exfoliant: "Exfoliant",
    pigment: "Glow",
  },
  fr: {
    barrier: "Barrière",
    soothing: "Apaisant",
    deodorizing: "Contrôle des odeurs",
    absorbent: "Absorbant",
    antioxidant: "Antioxydant",
    texture: "Texture",
    hydration: "Hydratation",
    exfoliant: "Exfoliant",
    pigment: "Éclat",
  },
  it: {
    barrier: "Barriera",
    soothing: "Lenitivo",
    deodorizing: "Controllo odori",
    absorbent: "Assorbente",
    antioxidant: "Antiossidante",
    texture: "Texture",
    hydration: "Idratazione",
    exfoliant: "Esfoliante",
    pigment: "Glow",
  },
  nl: {
    barrier: "Barrière",
    soothing: "Kalmerend",
    deodorizing: "Geurcontrole",
    absorbent: "Absorberend",
    antioxidant: "Antioxidant",
    texture: "Textuur",
    hydration: "Hydratatie",
    exfoliant: "Peeling",
    pigment: "Glow",
  },
  es: {
    barrier: "Barrera",
    soothing: "Calmante",
    deodorizing: "Control de olor",
    absorbent: "Absorbente",
    antioxidant: "Antioxidante",
    texture: "Textura",
    hydration: "Hidratación",
    exfoliant: "Exfoliante",
    pigment: "Glow",
  },
};

export interface Ingredient {
  /** INCI-Name laut R&D-System */
  inci: string;
  /** Trivialname / Klartext */
  common: { de: string; en: string };
  role: IngredientRole;
  /** Ein Satz Nutzen — konsumentenverständlich */
  benefit: { de: string; en: string };
  /** Normalisierte Suchbegriffe für das Matching gegen die INCI-Liste */
  match: string[];
}

export const INGREDIENTS: Ingredient[] = [
  {
    inci: "Butyrospermum Parkii (Shea) Butter",
    common: { de: "Sheabutter (fest)", en: "Shea butter (solid)" },
    role: "barrier",
    benefit: {
      de: "Stärkt die Hautbarriere und reduziert Feuchtigkeitsverlust — bewährt bei sehr trockener, empfindlicher Haut.",
      en: "Strengthens the skin barrier and reduces moisture loss — proven on very dry, sensitive skin.",
    },
    match: ["butyrospermum parkii (shea) butter", "butyrospermum parkii butter", "shea butter"],
  },
  {
    inci: "Butyrospermum Parkii (Shea) Oil",
    common: { de: "Shea-Öl (flüssige Sheafraktion)", en: "Shea oil (liquid shea fraction)" },
    role: "barrier",
    benefit: {
      de: "Shea-Pflege ohne schweres Gefühl: gleitet leichter, zieht schneller ein.",
      en: "Shea care without the heavy feel: better spread, faster absorption.",
    },
    match: ["butyrospermum parkii (shea) oil", "shea ethyl esters", "shea olein"],
  },
  {
    inci: "Candelilla Cera (Euphorbia Cerifera Wax)",
    common: { de: "Candelillawachs", en: "Candelilla wax" },
    role: "texture",
    benefit: {
      de: "Gibt dem Stick Stand und Temperaturstabilität — seidiges Finish, ohne zu kleben.",
      en: "Gives the stick structure and heat stability — silky finish, never tacky.",
    },
    match: ["candelilla cera", "euphorbia cerifera cera", "euphorbia cerifera wax", "candelilla"],
  },
  {
    inci: "Ceramide NP",
    common: { de: "Ceramid NP (öl-dispergiert)", en: "Ceramide NP (oil-dispersed)" },
    role: "barrier",
    benefit: {
      de: "Hauteigenes Barrierelipid: baut die Lipidstruktur mit auf und verbessert die Verträglichkeit auf Dauer.",
      en: "Skin-identical barrier lipid: rebuilds lipid structure and improves long-term tolerance.",
    },
    match: ["ceramide np", "ceramide ap", "ceramide eop", "ceramide"],
  },
  {
    inci: "Heptyl Undecylenate",
    common: { de: "Heptylundecylenat", en: "Heptyl undecylenate" },
    role: "texture",
    benefit: {
      de: "Sehr leichtes Emollient für den „Dry-Touch"-Effekt — nimmt reichhaltigen Ölphasen die Fettigkeit.",
      en: "Very light emollient for a dry-touch finish — takes the greasiness out of rich oil phases.",
    },
    match: ["heptyl undecylenate"],
  },
  {
    inci: "Limnanthes Alba (Meadowfoam) Seed Oil",
    common: { de: "Meadowfoam-Öl", en: "Meadowfoam seed oil" },
    role: "barrier",
    benefit: {
      de: "Extrem oxidationsstabiles Basisöl: schützt empfindliche Öle und verbessert das Hautgefühl ohne Fettfilm.",
      en: "Extremely oxidation-stable base oil: protects delicate oils and improves skinfeel without a greasy film.",
    },
    match: ["limnanthes alba", "meadowfoam"],
  },
  {
    inci: "Squalane (Olive Origin)",
    common: { de: "Squalan (aus Olive)", en: "Squalane (olive origin)" },
    role: "barrier",
    benefit: {
      de: "Biomimetisches Emollient: glättet, stärkt die Barriere und fühlt sich nicht fettig an.",
      en: "Biomimetic emollient: smooths, supports the barrier and never feels greasy.",
    },
    match: ["squalane", "squalan"],
  },
  {
    inci: "Magnesium Hydroxide",
    common: { de: "Magnesiumhydroxid", en: "Magnesium hydroxide" },
    role: "deodorizing",
    benefit: {
      de: "Milde Geruchsneutralisierung durch Bindung von Fettsäuren — auch für empfindliche Formeln geeignet.",
      en: "Mild odour neutralisation by binding fatty acids — suitable for sensitive formulas.",
    },
    match: ["magnesium hydroxide"],
  },
  {
    inci: "Sodium Bicarbonate (NaHCO₃)",
    common: { de: "Natron", en: "Baking soda" },
    role: "deodorizing",
    benefit: {
      de: "Puffert Säuren und reduziert so Geruchsbildung — Kernbaustein der Soda-in-Oil Tech™.",
      en: "Buffers acids and thereby reduces odour formation — the core of Soda-in-Oil Tech™.",
    },
    match: ["sodium bicarbonate", "natron"],
  },
  {
    inci: "Triethyl Citrate",
    common: { de: "Triethylcitrat", en: "Triethyl citrate" },
    role: "deodorizing",
    benefit: {
      de: "Hemmt geruchsbildende Enzyme der Hautflora und verlängert die Frische — ohne starke Basen.",
      en: "Inhibits odour-forming enzymes of the skin flora and extends freshness — without strong alkalis.",
    },
    match: ["triethyl citrate"],
  },
  {
    inci: "Zinc Ricinoleate",
    common: { de: "Zinkricinoleat", en: "Zinc ricinoleate" },
    role: "deodorizing",
    benefit: {
      de: "Bindet geruchsaktive Moleküle direkt — spürbar schnelle Deo-Performance.",
      en: "Binds odour molecules directly — noticeably fast deodorant performance.",
    },
    match: ["zinc ricinoleate"],
  },
  {
    inci: "Tocopherol (Vitamin E)",
    common: { de: "Vitamin E", en: "Vitamin E" },
    role: "antioxidant",
    benefit: {
      de: "Schützt die Öle vor Oxidation, hält die Formel frisch und wirkt auf der Haut antioxidativ.",
      en: "Protects the oils from oxidation, keeps the formula fresh and works as an antioxidant on skin.",
    },
    match: ["tocopherol", "vitamin e"],
  },
  {
    inci: "Sucrose",
    common: { de: "Zucker", en: "Sugar" },
    role: "exfoliant",
    benefit: {
      de: "Sanftes mechanisches Peeling: die Kristalle schmelzen bei Feuchtigkeit an und wirken dadurch zunehmend milder.",
      en: "Gentle mechanical exfoliation: the crystals melt down with moisture and get milder as you work.",
    },
    match: ["sucrose", "zucker"],
  },
  {
    inci: "Kaolin (White Clay)",
    common: { de: "Weiße Tonerde", en: "White clay" },
    role: "absorbent",
    benefit: {
      de: "Sanfter Mineral-Absorber für Mattierung und ein weiches Soft-Matte-Finish.",
      en: "Gentle mineral absorber for mattifying and a soft-matte finish.",
    },
    match: ["kaolin"],
  },
  {
    inci: "Maranta Arundinacea (Arrowroot) Root Powder",
    common: { de: "Pfeilwurzelstärke", en: "Arrowroot powder" },
    role: "absorbent",
    benefit: {
      de: "Natürliche Stärke für Feuchtigkeitsaufnahme und ein trocken-seidiges Hautgefühl.",
      en: "Natural starch for moisture uptake and a dry-silky skinfeel.",
    },
    match: ["maranta arundinacea", "arrowroot"],
  },
  {
    inci: "Silica",
    common: { de: "Kieselsäure", en: "Silica" },
    role: "absorbent",
    benefit: {
      de: "Mikrosphären für Slip und Soft-Focus: weniger Klebrigkeit, mehr Premium-Finish.",
      en: "Microspheres for slip and soft focus: less tack, more premium finish.",
    },
    match: ["silica"],
  },
  {
    inci: "Zeolite",
    common: { de: "Zeolith", en: "Zeolite" },
    role: "absorbent",
    benefit: {
      de: "Mineralischer Absorber: bindet Geruch und Feuchtigkeit für längere Frische.",
      en: "Mineral absorber: binds odour and moisture for longer freshness.",
    },
    match: ["zeolite", "zeolith"],
  },
  {
    inci: "Zinc Oxide",
    common: { de: "Zinkoxid", en: "Zinc oxide" },
    role: "absorbent",
    benefit: {
      de: "Mineralischer Performance-Booster in niedriger Dosierung: unterstützt Absorption und Dry-Touch.",
      en: "Mineral performance booster at low dosage: supports absorption and dry touch.",
    },
    match: ["zinc oxide"],
  },
  {
    inci: "Avena Sativa (Oat) Kernel Flour",
    common: { de: "Hafermehl", en: "Oat kernel flour" },
    role: "soothing",
    benefit: {
      de: "Beruhigt und reduziert das Reibungsgefühl — weiches, gepflegtes Finish.",
      en: "Soothes and reduces the feeling of friction — soft, cared-for finish.",
    },
    match: ["avena sativa", "oat kernel flour", "hafermehl"],
  },
  {
    inci: "Argania Spinosa Kernel Oil",
    common: { de: "Arganöl", en: "Argan oil" },
    role: "barrier",
    benefit: {
      de: "Regeneratives Pflegeöl mit natürlichem Vitamin E und Phytosterolen — unterstützt Regeneration und Barriere.",
      en: "Regenerative care oil with natural vitamin E and phytosterols — supports regeneration and the barrier.",
    },
    match: ["argania spinosa"],
  },
  {
    inci: "Calendula CO₂ Extract",
    common: { de: "Ringelblumen-Extrakt", en: "Calendula extract" },
    role: "soothing",
    benefit: {
      de: "Beruhigt gestresste Haut und unterstützt die Recovery nach Rasur oder Reibung.",
      en: "Calms stressed skin and supports recovery after shaving or friction.",
    },
    match: ["calendula"],
  },
  {
    inci: "Bisabolol",
    common: { de: "Bisabolol (aus Kamille)", en: "Bisabolol (from chamomile)" },
    role: "soothing",
    benefit: {
      de: "Beruhigt Rötungen und mildert Rasur- oder Reibungsstress ab.",
      en: "Calms redness and buffers shaving or friction stress.",
    },
    match: ["bisabolol"],
  },
  {
    inci: "Oenothera Biennis (Evening Primrose) Oil",
    common: { de: "Nachtkerzenöl", en: "Evening primrose oil" },
    role: "soothing",
    benefit: {
      de: "GLA-reiches Repair-Öl: beruhigt und nimmt trockener Haut das Spannungsgefühl.",
      en: "GLA-rich repair oil: calms and takes the tightness out of dry skin.",
    },
    match: ["oenothera biennis", "evening primrose"],
  },
  {
    inci: "Helianthus Annuus Seed Oil",
    common: { de: "Sonnenblumenöl", en: "Sunflower seed oil" },
    role: "barrier",
    benefit: {
      de: "Leichtes, linolsäurereiches Trägeröl für Barriere-Balance und ein weiches Hautgefühl.",
      en: "Light, linoleic-acid-rich carrier oil for barrier balance and a soft skinfeel.",
    },
    match: ["helianthus annuus"],
  },
  {
    inci: "Hydrolyzed Hyaluronic Acid (and) Hydrogenated Lecithin",
    common: { de: "Hyaluron (öl-dispergiert)", en: "Hyaluronic acid (oil-dispersed)" },
    role: "hydration",
    benefit: {
      de: "Bringt Feuchtigkeit auch in eine wasserfreie Formel — für Komfort statt Spannungsgefühl.",
      en: "Delivers hydration even in a waterless formula — comfort instead of tightness.",
    },
    match: ["hyaluronic acid", "sodium hyaluronate", "hyaluron"],
  },
  {
    inci: "Vanilla Planifolia Fruit Extract",
    common: { de: "Vanille-Extrakt", en: "Vanilla extract" },
    role: "antioxidant",
    benefit: {
      de: "Antioxidative Note mit sehr zurückhaltender, natürlicher Sensorik.",
      en: "Antioxidant note with a very restrained, natural sensory profile.",
    },
    match: ["vanilla planifolia"],
  },
  {
    inci: "Mica / Iron Oxides",
    common: { de: "Mineralischer Schimmer", en: "Mineral shimmer" },
    role: "pigment",
    benefit: {
      de: "Feiner mineralischer Goldschimmer für einen natürlichen Glow — rein optisch, ohne Wirkstofffunktion.",
      en: "Fine mineral gold shimmer for a natural glow — purely optical, no active function.",
    },
    match: ["mica", "iron oxides", "ci 77019", "ci 77491"],
  },
  {
    inci: "Glyceryl Stearate Citrate",
    common: { de: "Glycerylstearatcitrat", en: "Glyceryl stearate citrate" },
    role: "texture",
    benefit: {
      de: "Verteilt die Mineralpulver gleichmäßig in der Ölmatrix — kein Grieseln, homogenes Auftragsgefühl.",
      en: "Distributes the mineral powders evenly in the oil matrix — no grittiness, homogeneous application.",
    },
    match: ["glyceryl stearate citrate"],
  },
];

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();

/**
 * Löst die INCI-Liste eines Produkts (Strings, ggf. mit „·" getrennt)
 * gegen das Wirkstoff-Glossar auf. Reihenfolge = Reihenfolge der INCI-Liste.
 */
export function resolveIngredients(composition: string[]): Ingredient[] {
  const tokens = composition
    .flatMap((line) => line.split("·"))
    .map((t) => norm(t.replace(/\(\s*\d+[.,]?\d*\s*%\s*\)/g, "")));

  const out: Ingredient[] = [];
  for (const token of tokens) {
    if (!token) continue;
    const hit = INGREDIENTS.find((ing) =>
      ing.match.some((m) => token.includes(m) || m.includes(token)),
    );
    if (hit && !out.includes(hit)) out.push(hit);
  }
  return out;
}

/* ---------- System Claims (Claim- & Testmatrix, global) ---------- */

export interface SystemClaim {
  id: string;
  label: Record<Locale, string>;
  /** Defensive Definition — was der Claim konkret bedeutet */
  proof: Record<Locale, string>;
}

export const SYSTEM_CLAIMS: SystemClaim[] = [
  {
    id: "waterless",
    label: {
      de: "Wasserfrei",
      en: "Waterless",
      fr: "Sans eau",
      it: "Senza acqua",
      nl: "Watervrij",
      es: "Sin agua",
    },
    proof: {
      de: "Die Rezeptur enthält keine Wasserphase. Anhydrous Matrix für Stabilität und reduzierte pH-/Konservierungsthemen.",
      en: "The formula contains no water phase. An anhydrous matrix for stability and reduced pH/preservation issues.",
      fr: "La formule ne contient aucune phase aqueuse. Matrice anhydre pour la stabilité et moins de sujets pH/conservation.",
      it: "La formula non contiene fase acquosa. Matrice anidra per stabilità e meno criticità pH/conservazione.",
      nl: "De formule bevat geen waterfase. Anhydrische matrix voor stabiliteit en minder pH-/conserveringsvraagstukken.",
      es: "La fórmula no contiene fase acuosa. Matriz anhidra para estabilidad y menos temas de pH/conservación.",
    },
  },
  {
    id: "aluminium-free",
    label: {
      de: "Aluminiumfrei",
      en: "Aluminium-free",
      fr: "Sans aluminium",
      it: "Senza alluminio",
      nl: "Aluminiumvrij",
      es: "Sin aluminio",
    },
    proof: {
      de: "Kein Aluminiumchlorhydrat, keine aluminiumbasierten Antitranspirant-Salze.",
      en: "No aluminium chlorohydrate, no aluminium-based antiperspirant salts.",
      fr: "Pas de chlorhydrate d'aluminium, aucun sel antitranspirant à base d'aluminium.",
      it: "Nessun cloridrato di alluminio, nessun sale antitraspirante a base di alluminio.",
      nl: "Geen aluminiumchloorhydraat, geen antitranspiratiezouten op aluminiumbasis.",
      es: "Sin clorhidrato de aluminio ni sales antitranspirantes a base de aluminio.",
    },
  },
  {
    id: "antiperspirant-free",
    label: {
      de: "Antitranspirant-frei",
      en: "Antiperspirant-free",
      fr: "Sans antitranspirant",
      it: "Senza antitraspiranti",
      nl: "Zonder antitranspirant",
      es: "Sin antitranspirante",
    },
    proof: {
      de: "Deodorant- und Bodycare-Logik: keine Blockade der Schweißdrüsen, Geruchskontrolle statt Eingriff.",
      en: "Deodorant and bodycare logic: no blocking of sweat glands — odour control instead of intervention.",
      fr: "Logique déodorant/soin : aucun blocage des glandes sudoripares, contrôle des odeurs sans intervention.",
      it: "Logica deodorante/bodycare: nessun blocco delle ghiandole sudoripare, controllo odori senza intervento.",
      nl: "Deodorant- en bodycare-logica: geen blokkade van zweetklieren, geurcontrole zonder ingrijpen.",
      es: "Lógica de desodorante y cuidado corporal: sin bloquear las glándulas sudoríparas, control del olor sin intervenir.",
    },
  },
  {
    id: "alcohol-free",
    label: {
      de: "Alkoholfrei",
      en: "Alcohol-free",
      fr: "Sans alcool",
      it: "Senza alcol",
      nl: "Alcoholvrij",
      es: "Sin alcohol",
    },
    proof: {
      de: "Kein Ethanol als Lösungs- oder Konservierungsmittel — kein Brennen auf frisch rasierter Haut.",
      en: "No ethanol as solvent or preservative — no sting on freshly shaved skin.",
      fr: "Pas d'éthanol comme solvant ou conservateur — aucune brûlure sur peau fraîchement rasée.",
      it: "Nessun etanolo come solvente o conservante — nessun bruciore sulla pelle appena rasata.",
      nl: "Geen ethanol als oplosmiddel of conserveermiddel — geen branden op net geschoren huid.",
      es: "Sin etanol como disolvente o conservante — sin escozor en piel recién afeitada.",
    },
  },
  {
    id: "palm-free",
    label: {
      de: "Palmölfrei",
      en: "Palm-oil-free",
      fr: "Sans huile de palme",
      it: "Senza olio di palma",
      nl: "Palmolievrij",
      es: "Sin aceite de palma",
    },
    proof: {
      de: "Rohstoffauswahl ohne Palmöl und ohne palmölbasierte Derivate in der Rezeptur.",
      en: "Raw-material selection without palm oil and without palm-derived ingredients in the formula.",
      fr: "Sélection de matières premières sans huile de palme ni dérivés de palme.",
      it: "Selezione di materie prime senza olio di palma né derivati del palma.",
      nl: "Grondstofselectie zonder palmolie en zonder palmderivaten in de formule.",
      es: "Selección de materias primas sin aceite de palma ni derivados de palma.",
    },
  },
  {
    id: "fragrance",
    label: {
      de: "Ohne Parfum-Allergene",
      en: "No fragrance allergens",
      fr: "Sans allergènes parfumants",
      it: "Senza allergeni del profumo",
      nl: "Zonder parfumallergenen",
      es: "Sin alérgenos de perfume",
    },
    proof: {
      de: "Kein deklarationspflichtiges Parfum-Allergen in der Rezeptur — für reaktive Zonen entwickelt.",
      en: "No declarable fragrance allergen in the formula — engineered for reactive zones.",
      fr: "Aucun allergène parfumant à déclarer — conçu pour les zones réactives.",
      it: "Nessun allergene del profumo da dichiarare — progettato per zone reattive.",
      nl: "Geen aangifteplichtig parfumallergeen — ontwikkeld voor reactieve zones.",
      es: "Sin alérgenos de perfume declarables — diseñado para zonas reactivas.",
    },
  },
  {
    id: "microbiome",
    label: {
      de: "Mikrobiom-freundlich",
      en: "Microbiome friendly",
      fr: "Respectueux du microbiome",
      it: "Microbiome friendly",
      nl: "Microbioomvriendelijk",
      es: "Respetuoso con el microbioma",
    },
    proof: {
      de: "Geruchskontrolle über pH-Modulation und Adsorption statt über breite antibakterielle Wirkung.",
      en: "Odour control through pH modulation and adsorption instead of broad antibacterial action.",
      fr: "Contrôle des odeurs par modulation du pH et adsorption, sans action antibactérienne large.",
      it: "Controllo degli odori tramite modulazione del pH e adsorbimento, senza azione antibatterica ampia.",
      nl: "Geurcontrole via pH-modulatie en adsorptie in plaats van brede antibacteriële werking.",
      es: "Control del olor mediante modulación del pH y adsorción, sin acción antibacteriana amplia.",
    },
  },
  {
    id: "hormone",
    label: {
      de: "Hormonneutral",
      en: "Hormone neutral",
      fr: "Neutre hormonalement",
      it: "Neutro a livello ormonale",
      nl: "Hormoonneutraal",
      es: "Neutro hormonalmente",
    },
    proof: {
      de: "Keine Rohstoffe mit bekannter hormonaktiver Diskussion — kein Eingriff in körpereigene Regulation.",
      en: "No raw materials under known hormone-activity debate — no interference with the body's own regulation.",
      fr: "Aucune matière première sujette à débat sur l'activité hormonale — aucune interférence avec la régulation naturelle.",
      it: "Nessuna materia prima soggetta a dibattito sull'attività ormonale — nessuna interferenza con la regolazione naturale.",
      nl: "Geen grondstoffen met bekende hormoondiscussie — geen inmenging in de eigen regulatie van het lichaam.",
      es: "Sin materias primas con debate conocido sobre actividad hormonal — sin interferir en la regulación propia del cuerpo.",
    },
  },
];
