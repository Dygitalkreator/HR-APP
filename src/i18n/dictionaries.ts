import type { Locale } from "./config";

/* =============================================================
   Brand-locked terms — NEVER translated:
   AX PROTOCOL, ZONES LAB, SODA-IN-OIL DEODORANT BALM, NEURO-CALM DEODORANT BALM, RESET PEELING BALM, HAMAMELIS MIST, PRE-SHAVE OIL,
   Lipid-Buffered Dispersion, Hydrophobic Gate, Zero-Shock Technology,
   LipidShield, SHIELD LAYER, Bavarian Alpine, microclimate (kept EN as
   science term), Architects Club, Building Block.
   ============================================================= */

export interface ProductI18n {
  tagline: string;
  short: string;
  hero: string;
  description: string;
  highlightsTitle?: string;
  highlights?: string[];
  protocol: string;
  zone: string;
  claim: string;
  composition: string[];
  spec: { label: string; value: string }[];
  status: string;
  /* consumer-friendly long-form copy (optional, falls not localized yet) */
  consumer?: {
    intro: string;
    what: string;
    how: string;
    who: string;
    result: string;
  };
  faq?: { q: string; a: string }[];
}

export interface ShieldI18n {
  tagline: string;
  description: string;
  benefits: string[];
}

export interface CarryI18n {
  tagline: string;
  description: string;
  features: string[];
}

export interface SignatureI18n {
  tagline: string;
  hero: string;
  description: string;
  protocol: string;
  variantsLabel: string;
  selectVariant: string;
  compositionLabel: string;
  comparisonTitle: string;
  comparisonLead: string;
  comparisonRows: { label: string; broadcast: string; skinClose: string }[];
  variants: Record<"broadcast" | "skin-close", { name: string; tagline: string; description: string }>;
}

export interface AccessoryI18n {
  tagline: string;
  description: string;
  composition: string[];
  variants?: Record<"makalu" | "k2" | "watzmann" | "zugspitze", { name: string; tagline: string }>;
}

export interface Dict {
  /* nav */
  nav: {
    home: string;
    products: string;
    signature: string;
    accessories: string;
    journal: string;
    art: string;
    protocol: string;
    shield: string;
    carry: string;
    smart: string;
    club: string;
    contact: string;
    shop: string;
    menu: string;
    language: string;
  };
  /* footer */
  footer: {
    tagline: string;
    blurb: string;
    system: string;
    lab: string;
    legal: string;
    imprint: string;
    withdrawal: string;
    privacy: string;
    terms: string;
    shippingPayment: string;
    rights: string;
    origin: string;
  };
  blueprint: {
    title: string;
    tech: string;
    material: string;
    measure: string;
  };
  exploded: {
    eyebrow: string;
    title: string;
    lead: string;
    hint: string;
    cap: string;
    body: string;
    core: string;
  };
  zoneMap: {
    eyebrow: string;
    title: string;
    lead: string;
    hint: string;
    zones: { axilla: string; face: string; body: string };
    cta: string;
  };
  /* common */
  common: {
    addToCart: string;
    addedToCart: string;
    learnMore: string;
    openDossier: string;
    next: string;
    back: string;
    viewPortfolio: string;
    enterProtocol: string;
    fullPortfolio: string;
    readTechnology: string;
    enterShield: string;
    joinClub: string;
    contactLab: string;
    returnPortfolio: string;
    openModule: string;
    addBundleToCart: string;
    scroll: string;
    phase: string;
    module: string;
    technology: string;
    claim: string;
    composition: string;
    protocolLabel: string;
    specs: string;
    heroMechanism: string;
    techComplex: string;
    zone: string;
    notFoundTitle: string;
    notFoundLead: string;
    notFoundCta: string;
    signalLost: string;
    skuNotFound: string;
    backPortfolio: string;
    preorder: string;
    colorLabel: string;
    inPlainWords: string;
    whatItIs: string;
    howToUse: string;
    whoItsFor: string;
    whatYouGet: string;
    faqTitle: string;
    relatedModules: string;
    standardsTitle: string;
    inProtocol: string;
    backToCollection: string;
    preorderNow: string;
    ingredientsTitle: string;
    ingredientsHead: string;
    ingredientsLead: string;
    ingredientsNote: string;
    claimsHead: string;
  };
  /* home */
  home: {
    metaTitle: string;
    metaDesc: string;
    systemOnline: string;
    heroLine1: string;
    heroLine2: string;
    heroIntro: string;
    heroRef: string;
    heroPrimary: string;
    heroSecondary: string;
    routeEyebrow: string;
    routeTitle: string;
    routeLead: string;
    routeCards: { eyebrow: string; title: string; body: string; cta: string }[];
    coreTitleA: string;
    coreTitleB: string;
    coreLead: string;
    assortmentTitle: string;
    assortmentLead: string;
    sectionHero: string;
    sectionManifesto: string;
    sectionTech: string;
    sectionProtocol: string;
    sectionPortfolio: string;
    sectionShield: string;
    sectionBundle: string;
    sectionClub: string;
    manifestoTitle: { a: string; alpine: string; b: string };
    manifestoBody1: string;
    manifestoBody2: string;
    manifestoLead: string;
    techTitleA: string;
    techTitleB: string;
    techLead: string;
    techStats: { v: string; k: string; n: string }[];
    protocolTitleA: string;
    protocolTitleB: string;
    protocolSteps: { n: string; t: string; d: string }[];
    portfolioTitleA: string;
    portfolioTitleB: string;
    portfolioLead: string;
    shieldTitlePre: string;
    shieldTitleMid: string;
    shieldTitleEnd: string;
    shieldLead: string;
    bundleSaves: (n: number) => string;
    clubTitleA: string;
    clubTitleB: string;
    clubLead: string;
    archiveEyebrow: string;
    archiveTitle: string;
    archiveLead: string;
    archiveQuoteTitle: string;
    archiveQuoteBody: string;
    archiveItemLabels: string[];
    archiveItemQuotes: string[];
  };
  /* products page */
  productsPage: {
    metaTitle: string;
    metaDesc: string;
    eyebrow: string;
    titleA: string;
    titleB: string;
    lead: string;
    systemCore: string;
    startHere: string;
    refillBadge: string;
    refillAction: string;
    emptyCategory: string;
    categories: { all: string; performance: string; sensitive: string; prep: string; repair: string; recovery: string; finish: string };
    bundleEyebrow: string;
    bundleSaves: (n: number) => string;
    finder: {
      cta: string;
      title: string;
      hint: string;
      close: string;
      reset: string;
      resultLabel: string;
      empty: string;
      zoneLabel: string;
      zone: { axilla: string; face: string; body: string };
      skinLabel: string;
      skin: { robust: string; sensitive: string; dry: string };
      goalLabel: string;
      goal: { fresh: string; recover: string; finish: string };
      reasons: Record<string, string>;
    };
  };
  /* product detail */
  productDetail: {
    nextModule: string;
    metaSuffix: string;
  };
  signature: SignatureI18n;
  accessoriesPage: {
    eyebrow: string;
    title: string;
    lead: string;
    note: string;
    curated: string;
    chooseVariant: string;
    details: string;
    sourcingNote: string;
    related: string;
  };
  /* protocol page */
  protocolPage: {
    metaTitle: string;
    metaDesc: string;
    eyebrow: string;
    titleA: string;
    titleB: string;
    lead: string;
    architecture: string;
    architectureTitleA: string;
    architectureTitleB: string;
    architectureModules: { t: string; d: string }[];
    openPortfolio: string;
    steps: { title: string; body: string }[];
  };
  /* shield page */
  shieldPage: {
    metaTitle: string;
    metaDesc: string;
    eyebrow: string;
    claim: string;
    titleA: string;
    titleB: string;
    lead: string;
    closingTitle: string;
    quickNav: string;
  };
  /* carry page */
  carryPage: {
    metaTitle: string;
    metaDesc: string;
    eyebrow: string;
    titleA: string;
    titleB: string;
    lead: string;
    closingTitle: string;
  };
  /* architects club */
  clubPage: {
    metaTitle: string;
    metaDesc: string;
    eyebrow: string;
    titleA: string;
    titleB: string;
    lead: string;
    howLabel: string;
    howTitle: string;
    howSteps: { n: string; t: string; d: string }[];
    tiersLabel: string;
    tiersTitle: string;
    tiers: { name: string; status: string; perks: string[] }[];
    formLabel: string;
    formTitle: string;
    formLead: string;
    name: string;
    email: string;
    interest: string;
    referral: string;
    referralHint: string;
    submit: string;
    sent: string;
    sentNote: string;
    transparencyLabel: string;
    transparency: string[];
    closingTitleA: string;
    closingTitleB: string;
    closingLead: string;
  };

  /* contact */
  contactPage: {
    metaTitle: string;
    metaDesc: string;
    eyebrow: string;
    titleA: string;
    titleB: string;
    channels: string;
    mail: string;
    press: string;
    address: string;
    openLine: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sent: string;
    imprint: string;
    imprintTitle: string;
    privacy: string;
    privacyTitle: string;
    privacyBody: string;
    terms: string;
    termsTitle: string;
    termsBody: string;
  };
  /* smart page — Waterless / SiO / Standards */
  smartPage: {
    metaTitle: string;
    metaDesc: string;
    eyebrow: string;
    titleA: string;
    titleB: string;
    lead: string;
    efficiencyEyebrow: string;
    efficiencyTitle: string;
    efficiencyBody: string;
    waterlessChartTitle: string;
    waterlessUsLabel: string;
    waterlessThemLabel: string;
    waterlessNote: string;
    scienceEyebrow: string;
    scienceTitle: string;
    scienceBody: string;
    matrixCaption: string;
    matrixLipid: string;
    matrixSoda: string;
    matrixMineral: string;
    matrixPeptide: string;
    standardsEyebrow: string;
    standardsTitle: string;
    standardsLead: string;
    standardsRows: { label: string; note: string }[];
    standardsBetter: string;
    standardsStandard: string;
    sustainabilityEyebrow: string;
    sustainabilityTitle: string;
    sustainabilityBody: string;
    sustainabilityStats: { v: string; k: string }[];
    closingTitle: string;
    closingLead: string;
    closingCta: string;
    crossEyebrow: string;
    crossTitle: string;
    crossLead: string;
  };
  /* products data — keyed by slug */
  products: Record<"intense" | "sensitive" | "reset" | "powder" | "hamamelis-mist" | "pre-shave-oil" | "lip-sculpt" | "oat-reset" | "shea-barrier" | "pomegranate-glow", ProductI18n>;
  /* bundle */
  bundle: { name: string; short: string };
  /* shield items — keyed by slug */
  shield: Record<"tracksuit" | "zone-boxers" | "zone-tee" | "towel-set", ShieldI18n>;
  accessories: Record<"shave-ritual-set" | "wet-razor" | "soap-tray-porcelain" | "soap-dish-melamine", AccessoryI18n>;
  /* carry items — keyed by slug */
  carry: Record<"travel-case" | "hand-clutch", CarryI18n>;
}

const accessoryTranslations: Record<Locale, { page: Dict["accessoriesPage"]; items: Dict["accessories"] }> = {
  de: {
    page: { eyebrow: "Kuratierte Objekte · Europa", title: "ACCESSOIRES", lead: "Handwerk rund um das Ritual — ausgewählt, nicht als Eigenentwicklung ausgegeben.", note: "Olivenholz trägt seine Herkunft sichtbar. Maserung, Farbton und kleine Unterschiede gehören zum Objekt; kein Stück gleicht dem anderen.", curated: "Kuratierte Auswahl", chooseVariant: "Ausführung wählen", details: "Material & Maße", sourcingNote: "Von europäischen Handwerksbetrieben bezogen und von ZONES LAB kuratiert. Keine ZONES-Eigenentwicklung.", related: "Weitere kuratierte Objekte" },
    items: {
      "shave-ritual-set": { tagline: "Ausgewählt, nicht entwickelt. Das vollständige Rasurritual, gehalten in Olivenholz.", description: "Ein vierteiliges Rasierset aus handgemasertem Olivenholz: Pinselständer, Porzellan-Rasierschale, Dachshaarpinsel und Nassrasierer. Jedes Stück ist anders gemasert — keine zwei Sets sind identisch. Eine natürliche Ergänzung zum PRE-SHAVE OIL: das physische Ritual rund um die Formel.", composition: ["Olivenholzständer + Edelstahlhalter", "Ovale Porzellan-Rasierschale, 10 cm", "Rasierpinsel aus Dachshaar", "Nassrasierer mit Olivenholzgriff (M3-kompatibel)"] },
      "wet-razor": { tagline: "Ein von der Natur gemaserter Griff — keiner gleicht dem anderen.", description: "Ein Nassrasierer mit Olivenholzgriff — der einfachste Einstieg ins Rasurritual. Vier Ausführungen, jede mit eigener Maserung und eigenem Profil.", composition: [], variants: { makalu: { name: "MAKALU", tagline: "Das klassische Profil." }, k2: { name: "K2", tagline: "Eine verfeinerte Silhouette." }, watzmann: { name: "WATZMANN", tagline: "Gleichmäßig geschnitten — bereit für eine Gravur." }, zugspitze: { name: "ZUGSPITZE", tagline: "Eine elegante Verbindung aus Holz und Stahl." } } },
      "soap-tray-porcelain": { tagline: "Porzellan ruht auf Olivenholz. Sonst nichts.", description: "Eine Porzellan-Seifenschale auf einem Olivenholzsockel, unsichtbar verbunden und leicht zu reinigen. Passt zu jeder der drei Recovery-Seifen und hält das Stück zwischen den Anwendungen trocken.", composition: ["Porzellanschale", "Olivenholzsockel", "14 × 7 × 4 cm"] },
      "soap-dish-melamine": { tagline: "Praktisch zuerst. Spülmaschinenfest, mit Olivenholzeinsatz.", description: "Eine Melamin-Seifenschale mit Olivenholzeinsatz, auf dem die Seife zwischen den Anwendungen trocknet. Die praktischere der beiden Varianten — spülmaschinenfestes Melamin in Lebensmittelqualität.", composition: ["Melaminschale, spülmaschinenfest", "Olivenholzeinsatz", "15,5 × 7,5 × 3 cm"] },
    },
  },
  en: {
    page: { eyebrow: "Curated objects · Europe", title: "ACCESSORIES", lead: "Craft around the ritual — selected honestly, never presented as our own engineering.", note: "Olive wood keeps its origin visible. Grain, tone and small variations belong to the object; no two pieces are alike.", curated: "Curated selection", chooseVariant: "Choose style", details: "Material & dimensions", sourcingNote: "Sourced from European craftspeople and curated by ZONES LAB. Not developed or manufactured by ZONES.", related: "More curated objects" },
    items: {
      "shave-ritual-set": { tagline: "Sourced, not engineered. The complete pre-shave ritual, held in olive wood.", description: "A four-piece shaving set in hand-grained olive wood: brush stand, porcelain shaving bowl, badger-hair brush, and a wet razor. Each piece grained differently — no two sets identical. Pairs naturally with PRE-SHAVE OIL as the physical ritual around the formula.", composition: ["Olive wood stand + stainless holder", "Porcelain shaving bowl, oval, 10 cm", "Badger-hair shaving brush", "Wet razor with olive wood handle (M3 blade compatible)"] },
      "wet-razor": { tagline: "A handle grained by nature, not two alike.", description: "A wet razor with an olive wood handle — the simplest entry into the shaving ritual. Four style variants, each with its own grain and profile.", composition: [], variants: { makalu: { name: "MAKALU", tagline: "The standard profile." }, k2: { name: "K2", tagline: "A refined silhouette." }, watzmann: { name: "WATZMANN", tagline: "Evenly cut — ready for engraving." }, zugspitze: { name: "ZUGSPITZE", tagline: "An elegant pairing of wood and steel." } } },
      "soap-tray-porcelain": { tagline: "Porcelain rests on olive wood. Nothing else.", description: "A porcelain soap tray on an olive wood base, joined invisibly for easy cleaning. Pairs with any of the three Recovery soaps — keeps the bar dry between uses.", composition: ["Porcelain tray", "Olive wood base", "14 × 7 × 4 cm"] },
      "soap-dish-melamine": { tagline: "Practical first. Dishwasher-safe, olive wood insert.", description: "A melamine soap dish with an olive wood insert that lets the bar dry between uses. The more practical of the two soap-dish options — dishwasher-safe, food-grade melamine.", composition: ["Melamine tray, dishwasher-safe", "Olive wood insert", "15.5 × 7.5 × 3 cm"] },
    },
  },
  fr: {
    page: { eyebrow: "Objets sélectionnés · Europe", title: "ACCESSOIRES", lead: "L’artisanat autour du rituel — sélectionné avec honnêteté, jamais présenté comme notre propre conception.", note: "L’olivier garde son origine visible. Veinage, teinte et petites variations font partie de l’objet ; aucune pièce n’est identique.", curated: "Sélection choisie", chooseVariant: "Choisir le modèle", details: "Matières & dimensions", sourcingNote: "Issu d’artisans européens et sélectionné par ZONES LAB. Ni conçu ni fabriqué par ZONES.", related: "Autres objets sélectionnés" },
    items: {
      "shave-ritual-set": { tagline: "Sélectionné, non conçu. Le rituel de pré-rasage complet, porté par l’olivier.", description: "Un set de rasage quatre pièces en bois d’olivier veiné à la main : support, bol en porcelaine, blaireau et rasoir humide. Chaque pièce a son propre veinage — aucun set n’est identique. Il accompagne naturellement PRE-SHAVE OIL comme rituel physique autour de la formule.", composition: ["Support en olivier + porte-objets inox", "Bol de rasage ovale en porcelaine, 10 cm", "Blaireau en poils de blaireau", "Rasoir à manche en olivier (compatible lame M3)"] },
      "wet-razor": { tagline: "Un manche veiné par la nature, jamais deux identiques.", description: "Un rasoir humide à manche en olivier — l’entrée la plus simple dans le rituel du rasage. Quatre variantes, chacune avec son veinage et son profil.", composition: [], variants: { makalu: { name: "MAKALU", tagline: "Le profil classique." }, k2: { name: "K2", tagline: "Une silhouette affinée." }, watzmann: { name: "WATZMANN", tagline: "Coupe régulière — prêt à graver." }, zugspitze: { name: "ZUGSPITZE", tagline: "Une alliance élégante du bois et de l’acier." } } },
      "soap-tray-porcelain": { tagline: "La porcelaine repose sur l’olivier. Rien d’autre.", description: "Un porte-savon en porcelaine sur une base en olivier, assemblé sans fixation visible et facile à nettoyer. Convient aux trois savons Recovery et garde le pain au sec entre les usages.", composition: ["Coupelle en porcelaine", "Base en olivier", "14 × 7 × 4 cm"] },
      "soap-dish-melamine": { tagline: "Pratique avant tout. Compatible lave-vaisselle, insert en olivier.", description: "Un porte-savon en mélamine avec insert en olivier qui laisse sécher le pain entre les usages. La plus pratique des deux options — mélamine alimentaire compatible lave-vaisselle.", composition: ["Bac en mélamine, compatible lave-vaisselle", "Insert en olivier", "15,5 × 7,5 × 3 cm"] },
    },
  },
  it: {
    page: { eyebrow: "Oggetti selezionati · Europa", title: "ACCESSORI", lead: "Artigianato intorno al rituale — selezionato con onestà, mai presentato come nostro progetto.", note: "L’ulivo mostra la propria origine. Venature, tono e piccole variazioni appartengono all’oggetto; non esistono due pezzi uguali.", curated: "Selezione curata", chooseVariant: "Scegli il modello", details: "Materiali & misure", sourcingNote: "Proveniente da artigiani europei e selezionato da ZONES LAB. Non progettato né prodotto da ZONES.", related: "Altri oggetti selezionati" },
    items: {
      "shave-ritual-set": { tagline: "Selezionato, non progettato. Il rituale pre-rasatura completo, custodito nell’ulivo.", description: "Un set da rasatura in quattro pezzi di ulivo venato a mano: supporto, ciotola in porcellana, pennello in tasso e rasoio. Ogni pezzo ha venature diverse — nessun set è identico. Si abbina naturalmente al PRE-SHAVE OIL come rituale fisico intorno alla formula.", composition: ["Supporto in ulivo + sostegno inox", "Ciotola ovale in porcellana, 10 cm", "Pennello da barba in tasso", "Rasoio con manico in ulivo (compatibile M3)"] },
      "wet-razor": { tagline: "Un manico venato dalla natura, mai due uguali.", description: "Un rasoio con manico in ulivo — l’ingresso più semplice nel rituale della rasatura. Quattro varianti, ciascuna con venatura e profilo propri.", composition: [], variants: { makalu: { name: "MAKALU", tagline: "Il profilo classico." }, k2: { name: "K2", tagline: "Una silhouette raffinata." }, watzmann: { name: "WATZMANN", tagline: "Taglio uniforme — pronto per l’incisione." }, zugspitze: { name: "ZUGSPITZE", tagline: "Un elegante incontro tra legno e acciaio." } } },
      "soap-tray-porcelain": { tagline: "La porcellana poggia sull’ulivo. Nient’altro.", description: "Un portasapone in porcellana su base in ulivo, unito senza fissaggi visibili e facile da pulire. Si abbina ai tre saponi Recovery e mantiene asciutta la saponetta tra gli usi.", composition: ["Vassoio in porcellana", "Base in ulivo", "14 × 7 × 4 cm"] },
      "soap-dish-melamine": { tagline: "Prima la praticità. Lavabile in lavastoviglie, inserto in ulivo.", description: "Un portasapone in melamina con inserto in ulivo che lascia asciugare la saponetta tra gli usi. La scelta più pratica delle due — melamina alimentare lavabile in lavastoviglie.", composition: ["Vassoio in melamina, lavabile in lavastoviglie", "Inserto in ulivo", "15,5 × 7,5 × 3 cm"] },
    },
  },
  nl: {
    page: { eyebrow: "Gecureerde objecten · Europa", title: "ACCESSOIRES", lead: "Ambacht rond het ritueel — eerlijk geselecteerd, nooit gepresenteerd als eigen ontwerp.", note: "Olijfhout houdt zijn herkomst zichtbaar. Nerf, tint en kleine verschillen horen bij het object; geen twee stukken zijn gelijk.", curated: "Gecureerde selectie", chooseVariant: "Kies uitvoering", details: "Materiaal & afmetingen", sourcingNote: "Afkomstig van Europese ambachtslieden en gecureerd door ZONES LAB. Niet ontworpen of vervaardigd door ZONES.", related: "Meer gecureerde objecten" },
    items: {
      "shave-ritual-set": { tagline: "Geselecteerd, niet ontworpen. Het volledige pre-shave-ritueel, gedragen door olijfhout.", description: "Een vierdelige scheerset in handgenerfd olijfhout: standaard, porseleinen scheerkom, dassenharen kwast en nat scheermes. Elk stuk heeft een andere nerf — geen twee sets zijn gelijk. Past vanzelf bij PRE-SHAVE OIL als het fysieke ritueel rond de formule.", composition: ["Olijfhouten standaard + roestvrijstalen houder", "Ovale porseleinen scheerkom, 10 cm", "Scheerkwast van dassenhaar", "Nat scheermes met olijfhouten greep (M3-compatibel)"] },
      "wet-razor": { tagline: "Een greep generfd door de natuur, nooit twee gelijk.", description: "Een nat scheermes met olijfhouten greep — de eenvoudigste toegang tot het scheerritueel. Vier uitvoeringen, elk met een eigen nerf en profiel.", composition: [], variants: { makalu: { name: "MAKALU", tagline: "Het klassieke profiel." }, k2: { name: "K2", tagline: "Een verfijnd silhouet." }, watzmann: { name: "WATZMANN", tagline: "Gelijkmatig gesneden — klaar voor gravure." }, zugspitze: { name: "ZUGSPITZE", tagline: "Een elegante combinatie van hout en staal." } } },
      "soap-tray-porcelain": { tagline: "Porselein rust op olijfhout. Niets anders.", description: "Een porseleinen zeepschaal op een olijfhouten basis, onzichtbaar verbonden en makkelijk te reinigen. Past bij alle drie Recovery-zepen en houdt de zeep droog tussen gebruiksmomenten.", composition: ["Porseleinen schaal", "Olijfhouten basis", "14 × 7 × 4 cm"] },
      "soap-dish-melamine": { tagline: "Praktisch voorop. Vaatwasserbestendig, inzet van olijfhout.", description: "Een melamine zeepschaal met olijfhouten inzet waarop de zeep tussen gebruiksmomenten droogt. De praktischere van de twee — voedselveilig melamine dat in de vaatwasser kan.", composition: ["Melamine schaal, vaatwasserbestendig", "Olijfhouten inzet", "15,5 × 7,5 × 3 cm"] },
    },
  },
  es: {
    page: { eyebrow: "Objetos seleccionados · Europa", title: "ACCESORIOS", lead: "Artesanía alrededor del ritual — seleccionada con honestidad, nunca presentada como desarrollo propio.", note: "El olivo muestra su origen. Veta, tono y pequeñas variaciones forman parte del objeto; no hay dos piezas iguales.", curated: "Selección curada", chooseVariant: "Elegir modelo", details: "Materiales & medidas", sourcingNote: "Procedente de artesanos europeos y seleccionado por ZONES LAB. No diseñado ni fabricado por ZONES.", related: "Más objetos seleccionados" },
    items: {
      "shave-ritual-set": { tagline: "Seleccionado, no diseñado. El ritual preafeitado completo, sostenido en madera de olivo.", description: "Un set de afeitado de cuatro piezas en olivo veteado a mano: soporte, cuenco de porcelana, brocha de pelo de tejón y maquinilla. Cada pieza tiene una veta distinta — no hay dos sets iguales. Combina de forma natural con PRE-SHAVE OIL como ritual físico alrededor de la fórmula.", composition: ["Soporte de olivo + sujeción de acero inoxidable", "Cuenco ovalado de porcelana, 10 cm", "Brocha de pelo de tejón", "Maquinilla con mango de olivo (compatible con cuchilla M3)"] },
      "wet-razor": { tagline: "Un mango veteado por la naturaleza, nunca dos iguales.", description: "Una maquinilla con mango de olivo — la entrada más sencilla al ritual del afeitado. Cuatro variantes, cada una con su propia veta y perfil.", composition: [], variants: { makalu: { name: "MAKALU", tagline: "El perfil clásico." }, k2: { name: "K2", tagline: "Una silueta refinada." }, watzmann: { name: "WATZMANN", tagline: "Corte uniforme — listo para grabar." }, zugspitze: { name: "ZUGSPITZE", tagline: "Una unión elegante de madera y acero." } } },
      "soap-tray-porcelain": { tagline: "La porcelana descansa sobre el olivo. Nada más.", description: "Una jabonera de porcelana sobre base de olivo, unida sin fijaciones visibles y fácil de limpiar. Combina con cualquiera de los tres jabones Recovery y mantiene la pastilla seca entre usos.", composition: ["Bandeja de porcelana", "Base de olivo", "14 × 7 × 4 cm"] },
      "soap-dish-melamine": { tagline: "Primero, lo práctico. Apta para lavavajillas, inserto de olivo.", description: "Una jabonera de melamina con inserto de olivo que deja secar la pastilla entre usos. La opción más práctica de las dos — melamina de grado alimentario apta para lavavajillas.", composition: ["Bandeja de melamina, apta para lavavajillas", "Inserto de olivo", "15,5 × 7,5 × 3 cm"] },
    },
  },
};

/* =================== DE (default) =================== */
const de: Dict = {
  blueprint: { title: "Konstruktionszeichnung", tech: "Technologie", material: "Material", measure: "Maß" },
  exploded: { eyebrow: "Aufbau", title: "Explosionszeichnung.", lead: "Drei Bauteile, ein System. Beim Scrollen fahren Deckel, Korpus und Wirkstoff-Kern auseinander — und fügen sich am Ende wieder zusammen.", hint: "Scrollen", cap: "Deckel", body: "Korpus", core: "Wirkstoff-Kern" },
  zoneMap: { eyebrow: "Zonen", title: "Wähle nach Zone.", lead: "Jede Zone hat eigene Anforderungen. Fahre über eine Zone — das Protokoll zeigt die passenden Module.", hint: "Zone wählen", zones: { axilla: "Achseln", face: "Gesicht & Hals", body: "Körper & Beine" }, cta: "Modul öffnen →" },
  nav: { home: "ZONES", products: "Kollektion", signature: "Signature", accessories: "Accessoires", journal: "Journal", art: "Art Collab", protocol: "System", shield: "Fabrics", club: "Community", contact: "Kontakt", shop: "Shop", menu: "Menü", carry: "Carry", smart: "Technologie", language: "Sprache" },
  footer: {
    tagline: "Applied Lipid Science · Axillarer Mikroklima",
    blurb: "Entwickelt in Bayern. Formuliert, um die Lipidbarriere zu unterstützen und das Mikroklima über tägliche Belastungszyklen hinweg im Gleichgewicht zu halten.",
    system: "System",
    lab: "Labor",
    legal: "Rechtliches",
    imprint: "Impressum",
    withdrawal: "Widerruf",
    privacy: "Datenschutz",
    terms: "AGB",
    shippingPayment: "Versand & Zahlung",
    rights: "Alle Rechte vorbehalten",
    origin: "Made in Bavaria · Clinically Engineered",
  },
  common: {
    addToCart: "In den Warenkorb",
    addedToCart: "zum Warenkorb hinzugefügt (Vorschau)",
    learnMore: "Mehr erfahren",
    openDossier: "Dossier öffnen →",
    next: "Weiter",
    back: "Zurück",
    viewPortfolio: "Portfolio ansehen",
    enterProtocol: "Protokoll betreten →",
    fullPortfolio: "Vollständiges Portfolio →",
    readTechnology: "Technologie lesen →",
    enterShield: "Fabrics entdecken →",
    joinClub: "Zugang anfragen →",
    contactLab: "Labor kontaktieren →",
    returnPortfolio: "Zurück zum AX-Portfolio →",
    openModule: "Modul-Dossier öffnen →",
    addBundleToCart: "Bundle in den Warenkorb →",
    scroll: "Scrollen",
    phase: "Phase",
    module: "Modul",
    technology: "Technologie",
    claim: "Claim",
    composition: "Komposition",
    protocolLabel: "Protokoll",
    specs: "Spezifikationen",
    heroMechanism: "Hero-Mechanismus",
    techComplex: "Tech / Komplex",
    zone: "Zone",
    notFoundTitle: "Signal verloren",
    notFoundLead: "Das angeforderte Protokoll liegt außerhalb dieses Systems.",
    notFoundCta: "Zurück ins Labor",
    signalLost: "Signal verloren",
    skuNotFound: "SKU nicht gefunden",
    backPortfolio: "Zurück zum Portfolio",
    preorder: "Verfügbar · Lot 0419", colorLabel: "Farbe",
    inPlainWords: "Im Klartext",
    whatItIs: "Was ist das?",
    howToUse: "So wendest du es an",
    whoItsFor: "Für wen ist das?",
    whatYouGet: "Das spürst du",
    faqTitle: "Häufige Fragen",
    relatedModules: "Weitere Module", standardsTitle: "Standards", inProtocol: "Im Protokoll", backToCollection: "Zurück zur Kollektion", preorderNow: "Jetzt vorbestellen", ingredientsTitle: "Wirkstoffe", ingredientsHead: "Was drin ist — und warum.", ingredientsLead: "Jeder Rohstoff hat eine Aufgabe. Hier steht die INCI-Bezeichnung, der Klartext-Name und der Nutzen in einem Satz.", ingredientsNote: "INCI-Angaben laut Rezepturstand. Kosmetische Aussagen — keine medizinischen Wirkversprechen.", claimsHead: "Standards, die für jedes Modul gelten.",
  },
  home: {
    metaTitle: "ZONES LAB™ — AX PROTOCOL · Applied Lipid Science",
    metaDesc: "AX PROTOCOL von Zones Lab. Engineered Lipid-Buffered Dispersion zur Unterstützung der Barriereintegrität und Stabilisierung des axillaren Mikroklimas.",
    systemOnline: "System Online · Bayern · 2026",
    heroLine1: "ZONES",
    heroLine2: "LAB™",
    heroIntro: "Sechs Linien, klar geordnet: AX Cosmetics für funktionale Pflege, OLF-01 als Duftsignatur, ZONES Fabrics für textile Performance, Superfood Kaffee für Herkunft, Accessories für das Ritual und ZONES × REZA für die Kunst.",
    heroRef: "Referenz",
    heroPrimary: "System starten",
    heroSecondary: "AX Protocol verstehen",
    routeEyebrow: "002 / Sortiment",
    routeTitle: "Wähle deinen Einstieg.",
    routeLead: "Vier klar getrennte Linien. Jede hat eine eigene Aufgabe — und einen direkten Weg zum passenden Produkt.",
    routeCards: [
      { eyebrow: "Applied Lipid Science", title: "AX COSMETICS", body: "Zehn funktionale Module in vier Phasen — von Vorbereitung bis Finish.", cta: "Kollektion ansehen" },
      { eyebrow: "Parfum · außerhalb des Systems", title: "OLF-01 SIGNATURE", body: "Eine Duftsignatur in zwei Reichweiten. Getragen, nicht dosiert.", cta: "Signature entdecken" },
      { eyebrow: "Applied Fiber Science", title: "ZONES FABRICS", body: "Vier textile Objekte für Haut, Bewegung und Regeneration.", cta: "Fabrics entdecken" },
      { eyebrow: "Sourced in Europe", title: "ACCESSORIES", body: "Kuratierte Objekte aus Olivenholz, Porzellan und Stahl.", cta: "Accessoires ansehen" },
    ],
    coreTitleA: "Dein Einstieg.", coreTitleB: "Zwei Profile.",
    coreLead: "INTENSE für hohe Belastung. SENSITIVE für reaktive Haut. Beide bilden den täglichen Kern des AX Protocol.",
    assortmentTitle: "Drei weitere Welten.",
    assortmentLead: "Duft, Textilien und kuratierte Ritualobjekte — eigenständig positioniert, ohne die Logik des AX Protocol zu verwässern.",
    sectionHero: "001 / Hero",
    sectionManifesto: "002 / Manifest",
    sectionTech: "003 / Lösung",
    sectionProtocol: "004 / Protokoll",
    sectionPortfolio: "005 / Portfolio",
    sectionShield: "006 / Fabrics",
    sectionBundle: "◆ Das System",
    sectionClub: "007 / ZONES CLUB",
    manifestoTitle: { a: "Die Haut zwischen Bewegung und Stille ist ein lebendiges ", alpine: "Mikroklima", b: " — kein Problem, das man zum Schweigen bringt." },
    manifestoBody1: "Konventionelle Systeme schocken die Barriere. Sie maskieren. Sie strippen. Sie zwingen ein einziges Signal durch eine lebende Schnittstelle, die für Nuance entworfen wurde.",
    manifestoBody2: "AX PROTOCOL ist auf Zurückhaltung gebaut. Wasserfreie Architektur, Lipid-Buffered Dispersion und Zero-Shock Technology — formuliert, um die Barriere zu unterstützen, nicht zu übersteuern.",
    manifestoLead: "Das Problem · §01 — §03",
    techTitleA: "Zero-Shock",
    techTitleB: "Technology",
    techLead: "Drei entwickelte Module — Lipid-Buffered Dispersion, das Hydrophobic Gate und das Bavarian Alpine Mineralgitter — arbeiten als eine kontinuierliche Architektur.",
    techStats: [
      { v: "98,4 %", k: "Lipid-Integritätsindex", n: "Tag-14 in vitro" },
      { v: "12 h", k: "Time-Release-Fenster", n: "Gleichgewichtszyklus" },
      { v: "Δ 0,6 °C", k: "Mikroklima-Stabilität", n: "vs. Kontrollprotokoll" },
    ],
    protocolTitleA: "Vier Phasen.",
    protocolTitleB: "Ein Gleichgewicht.",
    protocolSteps: [
      { n: "01", t: "PREP", d: "Mikroklima zurücksetzen. Blank-Canvas-Zustand." },
      { n: "02", t: "ENGAGE", d: "Daily Core. 12-Stunden-Gleichgewichtsfenster." },
      { n: "03", t: "RECOVER", d: "LipidShield verstärkt. Rückkehr zur Baseline." },
      { n: "04", t: "FINISH", d: "Physik statt Biologie. Trocken, seidig, reibungsarm." },
    ],
    portfolioTitleA: "Sieben Module.",
    portfolioTitleB: "Eine Architektur.",
    portfolioLead: "SODA-IN-OIL DEODORANT BALM · NEURO-CALM DEODORANT BALM · RESET PEELING BALM · FINISHING POWDER · HAMAMELIS MIST · PRE-SHAVE OIL · LIP SCULPT BALM. Architektur über den gesamten AX-Protokoll-Zyklus.",
    shieldTitlePre: "ZONES",
    shieldTitleMid: "| FABRICS",
    shieldTitleEnd: "Applied Fiber Science.",
    shieldLead: "Drei unisex Objekte in leicht oversized Schnitt: der Tracksuit in 480 gsm Bio-Baumwolle, die Zone Boxers aus Baumwolle-Seide und das Zone Tee mit axillarem Zwickel.",
    bundleSaves: (n) => `Spart €${n}`,
    clubTitleA: "Kein Preis.",
    clubTitleB: "Nur Zugang.",
    clubLead: "Der ZONES CLUB ist auf Einladung: keine Gebühr, kein Abo. Nummerierte Mitgliedschaften, limitierte Plätze pro Lot — Frühzugang, Refill-Priorität, Lab-Dossiers.",
    archiveEyebrow: "004 / Archiv",
    archiveTitle: "Das visuelle Archiv.",
    archiveLead: "Vier Linien, ein Klima. Was auf die Haut kommt, was darüber getragen wird — und was den Ritualen folgt.",
    archiveQuoteTitle: "Systemische Qualität",
    archiveQuoteBody: "Eine visuelle Sprache für die physische Welt — entwickelt aus Materialforschung, nicht aus Dekoration.",
    archiveItemLabels: ["01. Signature", "02. Fabrics", "03. Accessories", "04. Cosmetics"],
    archiveItemQuotes: ["Heritage", "Applied Fiber Science", "Curated Objects", "The tactile ritual of high performance."],

  },
  productsPage: {
    metaTitle: "Produkte — ZONES LAB™ AX Protocol",
    metaDesc: "Zehn Produkte in vier Phasen: tägliche Deo-Balms, Reset, Recovery-Seifen, Finish Powder, Hamamelis Mist, Pre-Shave Oil und Lip Sculpt Balm.",
    eyebrow: "Portfolio · 2026",
    titleA: "Zehn Produkte.",
    titleB: "Vier klare Phasen.",
    lead: "Starten Sie mit Intense oder Sensitive. Ergänzen Sie danach gezielt für Vorbereitung, Regeneration und Finish — PREP · ENGAGE · RECOVER · FINISH.",
    systemCore: "SYSTEMKERN",
    startHere: "HIER STARTEN",
    refillBadge: "REFILL",
    refillAction: "NACHFÜLLEN",
    emptyCategory: "Keine Produkte in dieser Kategorie.",
    categories: { all: "Alle", performance: "Anwenden", sensitive: "Empfindlich", prep: "Vorbereiten", repair: "Regeneration", recovery: "Recovery Soaps", finish: "Finish" },
    bundleEyebrow: "◆ Bundle",
    bundleSaves: (n) => `Spart €${n}`,
    finder: {
      cta: "Passendes Modul finden",
      title: "Drei Fragen. Zwei bis drei Empfehlungen.",
      hint: "Wählen Sie Zone, Hauttyp und Ziel — wir zeigen die passenden Module.",
      close: "Schließen",
      reset: "Zurücksetzen",
      resultLabel: "Empfehlung",
      empty: "Bitte alle drei Fragen beantworten.",
      zoneLabel: "Zone",
      zone: { axilla: "Achseln", face: "Gesicht & Hals", body: "Körper & Beine" },
      skinLabel: "Haut",
      skin: { robust: "Robust", sensitive: "Empfindlich", dry: "Trocken" },
      goalLabel: "Ziel",
      goal: { fresh: "Frische im Alltag", recover: "Regeneration", finish: "Glättung & Finish" },
      reasons: {
        intense: "Für hohe Belastung — hält das Mikroklima den ganzen Tag stabil.",
        sensitive: "Duftfrei und beruhigend für reaktive Zonen.",
        reset: "Bereitet die Zone vor und entfernt Rückstände in einem Durchgang.",
        powder: "Reduziert Reibung und Feuchte — mechanisch, ohne Wirkstoffe.",
        "lip-sculpt": "Optische Volumen-Illusion durch Lipid-Design — Sculpt statt Stimulation.",
        "hamamelis-mist": "Reines Hamamelis-Hydrolat als tonisierender PREP-Schritt.",
        "pre-shave-oil": "Kontrollierte Gleitfähigkeit und weniger Klingenreibung vor der Rasur.",
      },
    },
  },
  productDetail: { nextModule: "Nächstes Modul", metaSuffix: "ZONES LAB™" },
  signature: {
    tagline: "Eine Formel. Zwei Reichweiten.",
    hero: "OLF-01 ist der Klang der ZONES-Duftarchitektur, wenn sie getragen statt dosiert wird. Dieselbe Engineering-Logik wie beim AX Protocol — Vetiver, Zedernholz, Olibanum — in Parfumstärke statt Spurenkonzentration. Zwei Reichweiten einer Signatur: eine entwickelt, um den Raum zu erreichen, eine entwickelt, um genau dort zu bleiben, wo sie aufgetragen wurde.",
    description: "Das AX Protocol misst OLF-01 in Bruchteilen eines Prozents. Hier wird es mit 20 % getragen — Parfumstärke, kein beiläufig beduftetes Öl. Beide Reichweiten teilen denselben Kernakkord. Was sie trennt, ist der Radius: wie weit die Signatur reicht, bevor sie verblasst.",
    protocol: "Auf Pulspunkte auftragen oder über jedem AX-Protocol-Produkt layern. Anders als die funktionalen Systemmodule hat OLF-01 keine PREP-, ENGAGE-, RECOVER- oder FINISH-Rolle — unabhängig tragen, wann immer die Signatur sprechen soll.",
    variantsLabel: "Reichweite wählen", selectVariant: "Variante auswählen", compositionLabel: "Komposition",
    comparisonTitle: "Welche Reichweite passt zu dir?", comparisonLead: "Gleicher Kernakkord, anderer Radius. Entscheide nach Situation — nicht nach Duftfamilie.",
    comparisonRows: [{ label: "Radius", broadcast: "Raumfüllend", skinClose: "Hautnah" }, { label: "Diffusion", broadcast: "Iso E Super + Ambroxan", skinClose: "Reduziert" }, { label: "Oud-Spur", broadcast: "Enthalten", skinClose: "Ohne" }, { label: "Am besten für", broadcast: "Abend · Auftritt · Präsenz", skinClose: "Tag · Nähe · Zurückhaltung" }],
    variants: {
      broadcast: { name: "BROADCAST", tagline: "Gebaut, um wahrgenommen zu werden. Der volle Akkord, der volle Radius.", description: "Der Motor läuft. Die Oud-Spur bleibt intakt, Iso E Super und Ambroxan tragen den Akkord über den eigenen Radius hinaus — diese Formel beantwortet das ursprüngliche Briefing: Menschen betreten den Duft, bevor sie dich sehen." },
      "skin-close": { name: "SKIN-CLOSE", tagline: "Dieselbe Signatur, nah gehalten. Für Räume, nicht für Laufstege.", description: "Derselbe Akkord, nach innen statt nach außen entwickelt. Die Oud-Spur ist entfernt, der Diffusionsmotor abgeschaltet — übrig bleiben Vetiver, Zedernholz und Olibanum direkt auf der Haut, der Radius in Zentimetern statt Räumen gemessen. Entwickelt für die Stunden zwischen dem Anziehen und dem Schritt vor die Tür, nicht für den Auftritt selbst." },
    },
  },
  accessoriesPage: {
    eyebrow: "Kuratierte Objekte · Europa", title: "ACCESSOIRES", lead: "Handwerk rund um das Ritual — ausgewählt, nicht als Eigenentwicklung ausgegeben.", note: "Olivenholz trägt seine Herkunft sichtbar. Maserung, Farbton und kleine Unterschiede gehören zum Objekt; kein Stück gleicht dem anderen.", curated: "Kuratierte Auswahl", chooseVariant: "Ausführung wählen", details: "Material & Maße", sourcingNote: "Von europäischen Handwerksbetrieben bezogen und von ZONES LAB kuratiert. Keine ZONES-Eigenentwicklung.", related: "Weitere kuratierte Objekte",
  },
  accessories: {
    "shave-ritual-set": { tagline: "Ausgewählt, nicht entwickelt. Das vollständige Rasurritual, gehalten in Olivenholz.", description: "Ein vierteiliges Rasierset aus handgemasertem Olivenholz: Pinselständer, Porzellan-Rasierschale, Dachshaarpinsel und Nassrasierer. Jedes Stück ist anders gemasert — keine zwei Sets sind identisch. Eine natürliche Ergänzung zum PRE-SHAVE OIL: das physische Ritual rund um die Formel.", composition: ["Olivenholzständer + Edelstahlhalter", "Ovale Porzellan-Rasierschale, 10 cm", "Rasierpinsel aus Dachshaar", "Nassrasierer mit Olivenholzgriff (M3-kompatibel)"] },
    "wet-razor": { tagline: "Ein von der Natur gemaserter Griff — keiner gleicht dem anderen.", description: "Ein Nassrasierer mit Olivenholzgriff — der einfachste Einstieg ins Rasurritual. Vier Ausführungen, jede mit eigener Maserung und eigenem Profil.", composition: [], variants: { makalu: { name: "MAKALU", tagline: "Das klassische Profil." }, k2: { name: "K2", tagline: "Eine verfeinerte Silhouette." }, watzmann: { name: "WATZMANN", tagline: "Gleichmäßig geschnitten — bereit für eine Gravur." }, zugspitze: { name: "ZUGSPITZE", tagline: "Eine elegante Verbindung aus Holz und Stahl." } } },
    "soap-tray-porcelain": { tagline: "Porzellan ruht auf Olivenholz. Sonst nichts.", description: "Eine Porzellan-Seifenschale auf einem Olivenholzsockel, unsichtbar verbunden und leicht zu reinigen. Passt zu jeder der drei Recovery-Seifen und hält das Stück zwischen den Anwendungen trocken.", composition: ["Porzellanschale", "Olivenholzsockel", "14 × 7 × 4 cm"] },
    "soap-dish-melamine": { tagline: "Praktisch zuerst. Spülmaschinenfest, mit Olivenholzeinsatz.", description: "Eine Melamin-Seifenschale mit Olivenholzeinsatz, auf dem die Seife zwischen den Anwendungen trocknet. Die praktischere der beiden Varianten — spülmaschinenfestes Melamin in Lebensmittelqualität.", composition: ["Melaminschale, spülmaschinenfest", "Olivenholzeinsatz", "15,5 × 7,5 × 3 cm"] },
  },
  protocolPage: {
    metaTitle: "Das Protokoll & die Technologie — ZONES LAB™",
    metaDesc: "PREP · ENGAGE · RECOVER · FINISH. Vier Phasen, sieben Module. Lipid-Buffered Dispersion, Hydrophobic Gate, Soda-in-Oil Matrix — die vollständige Architektur des AX-Systems.",
    eyebrow: "Das Protokoll · 2026",
    titleA: "Vier Phasen.",
    titleB: "Ein Gleichgewicht.",

    lead: "Das AX-Protokoll ist eine kontinuierliche Architektur — Lipid-Buffered Dispersion, das Hydrophobic Gate und das Bavarian Alpine Mineralgitter wirken als ein Barriere-Framework.",
    architecture: "Architektur",
    architectureTitleA: "Lipid-Buffered Dispersion.",
    architectureTitleB: "Ein kontinuierliches Barriere-Framework.",
    architectureModules: [
      { t: "Hydrophobic Gate", d: "Selektive Passage-Architektur, ausgerichtet an der Oberflächen-Lipidschicht." },
      { t: "Lipid-Buffered Dispersion", d: "Wasserfreie Trägermatrix, die Aktivstoffe ohne Wasser-Schock liefert." },
      { t: "Bavarian Alpine Mineralgitter", d: "Mineralisches Framework, kalibriert auf das axillare Mikroklima." },
    ],
    openPortfolio: "Portfolio öffnen →",
    steps: [
      { title: "Mikroklima zurücksetzen.", body: "AX-03 RESET PEELING BALM entfernt Rückstände und richtet die Oberflächen-Lipidschicht in einem einzigen Durchgang neu aus. Der Blank-Canvas-Zustand — die Voraussetzung für ENGAGE." },
      { title: "Daily Core. 12-Stunden-Gleichgewicht.", body: "AX-01 SODA-IN-OIL DEODORANT BALM oder AX-02 NEURO-CALM DEODORANT BALM führen die Aktivmatrix durch das Hydrophobic Gate. Time-released, wasserfrei, vollständig auf die Barriere abgestimmt." },
      { title: "Vorbereiten und tonisieren.", body: "AX-05 HAMAMELIS MIST bereitet die Haut als reines, alkoholfreies Hydrolat auf die Stabilisierung vor." },
      { title: "Vor der Klinge.", body: "AX-06 PRE-SHAVE OIL schafft mit Argan, Jojoba und Squalan kontrollierte Gleitfähigkeit und reduziert Klingenreibung." },
    ],

  },
  shieldPage: {
    metaTitle: "ZONES FABRICS — Applied Fiber Science",
    metaDesc: "ZONES FABRICS: angewandte Faserwissenschaft für Bewegung und Regeneration. Oversized Tracksuit, Cotton-Silk-Boxer, Base-Layer-Shirt und Towel Set.",
    eyebrow: "ZONES | FABRICS",
    claim: "Applied Fiber Science · Angewandte Faserwissenschaft",
    titleA: "ZONES",
    titleB: "FABRICS",
    lead: "Vier textile Objekte für Bewegung, Ruhe und Regeneration: ein oversized Tracksuit aus 480 gsm Bio-Baumwolle, ein Cotton-Silk-Boxer mit flachen Nähten, ein Base-Layer-Shirt mit Achsel-Gusset und das Towel Set aus 700 gsm Frottee.",
    closingTitle: "Fabrics, die mit der Haut arbeiten.", quickNav: "Direkt zum Produkt",
  },
  carryPage: {
    metaTitle: "ZONES | CARRY — Alltagsobjekte",
    metaDesc: "Pflegeetui und passende Handtasche in sandbeigem Technical Canvas mit schwarzem Leder-Trim.",
    eyebrow: "ZONES | CARRY",
    titleA: "Carry.",
    titleB: "Für unterwegs.",
    lead: "Zwei Objekte, die das Protokoll begleiten: ein Pflegeetui für die Reise und eine passende Handtasche im gleichen Sandbeige. Gebaut, um zu halten.",
    closingTitle: "Carry, das mitgeht.",
  },
  smartPage: {
    metaTitle: "Smart — Waterless by Design · ZONES LAB™",
    metaDesc: "Soda-in-Oil (SiO) Matrix · Waterless · Aluminum-frei · Hormon friendly · Microbiome friendly. High Performance, das zufällig nachhaltig ist.",
    eyebrow: "Smart · Waterless by Design",
    titleA: "High Performance.",
    titleB: "Wasserfrei. Punkt.",
    lead: "Wir strecken unsere Formeln nicht mit Wasser. Jedes Gramm ZONES™ ist pure Performance — effizienter für deine Haut, besser für den Planeten.",
    efficiencyEyebrow: "001 / Efficiency Statement",
    efficiencyTitle: "Waterless by Design.",
    efficiencyBody: "Konventionelle Formeln nutzen Wasser als Träger. Wir bauen anders: ausgewählte Wirkstoffe in einer Soda-in-Oil (SiO) Matrix — wasserfrei und nach Funktion strukturiert.",
    waterlessChartTitle: "Wasseranteil je Gramm Formel",
    waterlessUsLabel: "ZONES™ AX / P [SiO]",
    waterlessThemLabel: "Konventionelles Deo",
    waterlessNote: "Reine Wirkstoffdichte vs. wässrige Verdünnung.",
    scienceEyebrow: "002 / Science Deep-Dive",
    scienceTitle: "Soda-in-Oil (SiO) Matrix.",
    scienceBody: "Unsere SiO-Matrix basiert auf einer Waterless-Technologie. Statt Wasser tragen reine Lipide und bio-engineered Wirkstoffe den LipidShield Complex™ präzise an die Barriere — für aktiven Barrier Repair statt oberflächlichem Maskieren.",
    matrixCaption: "Vier Schichten. Eine Architektur.",
    matrixLipid: "Lipid-Träger · LipidShield Complex™",
    matrixSoda: "Soda-Modul · pH-Regulation",
    matrixMineral: "Bavarian Alpine Mineralgitter",
    matrixPeptide: "Wasserfreie Trägerarchitektur",
    standardsEyebrow: "003 / Standards Checklist",
    standardsTitle: "Was wir nicht sind.",
    standardsLead: "Eine schnelle Übersicht. ZONES™ übertrifft moderne Standards — nicht weil es Trend ist, sondern weil es technisch sauberer ist.",
    standardsRows: [
      { label: "Aluminum-frei", note: "Keine Aluminiumsalze. Keine Pseudo-Trockenheit." },
      { label: "Alkohol-frei", note: "Kein austrocknender Lösungsmittel-Schock." },
      { label: "Waterless", note: "Keine Verdünnung. Maximale Wirkstoffdichte." },
      { label: "Microbiome friendly", note: "Stört das axillare Mikrobiom nicht." },
      { label: "Barrier friendly", note: "Unterstützt Barriereintegrität — aktiver Barrier Repair." },
      { label: "Hormon friendly", note: "Frei von hormonell aktiven Verbindungen." },
      { label: "Komedogen-frei", note: "Verstopft keine Poren — kalibriert für Sport & Last." },
    ],
    standardsBetter: "ZONES™",
    standardsStandard: "Standard-Markt",
    sustainabilityEyebrow: "004 / Sustainability",
    sustainabilityTitle: "Weniger Wasser. Weniger Müll. Mehr Wirkung.",
    sustainabilityBody: "Waterless heißt: weniger Volumen, weniger Verpackung, weniger Transportgewicht — und keine Konservierungsmittel, die Wasser braucht, um stabil zu bleiben. Technologie, die zufällig grün ist.",
    sustainabilityStats: [
      { v: "0 %", k: "Wasser in der Formel" },
      { v: "10", k: "AX Module" },
      { v: "04", k: "Protokollphasen" },
    ],
    closingTitle: "Smart heißt: weniger, präziser, ehrlicher.",
    closingLead: "Keine Eco-Phrasen. Keine Konsumenten-Mathematik. Nur Wirkstoffe, die ihre Arbeit machen.",
    closingCta: "Portfolio öffnen →",
    crossEyebrow: "Objekte · System",
    crossTitle: "Was das System begleitet.",
    crossLead: "Die Formeln arbeiten an der Zone. Fabrics arbeiten am Rest des Tages: Tracksuit, Cotton-Silk-Boxer, Base-Layer-Shirt und Towel Set.",
  },
  clubPage: {
    metaTitle: "ZONES CLUB — Zugang auf Einladung",
    metaDesc: "Kein Beitrag, kein Abo. Zugang zum ZONES CLUB wird kuratiert freigegeben: Early Access auf neue Lots, Refill-Priorität und Lab-Dossiers.",
    eyebrow: "ZONES CLUB · Access by invitation",
    titleA: "Kein Preis.",
    titleB: "Nur Zugang.",
    lead: "Der ZONES CLUB ist nicht käuflich. Zugang wird kuratiert freigegeben — in begrenzter Zahl pro Lot. Jede Mitgliedschaft ist nummeriert, kein Abo, keine Gebühr.",
    howLabel: "Wie Zugang funktioniert",
    howTitle: "Drei Schritte. Kein Checkout.",
    howSteps: [
      { n: "01", t: "Anfrage", d: "Du hinterlässt Name, E-Mail und deine Zone. Kein Konto, keine Zahlung." },
      { n: "02", t: "Prüfung", d: "Wir gleichen Anfragen mit der Kapazität des nächsten Lots ab. Referral-Codes werden priorisiert." },
      { n: "03", t: "Freigabe", d: "Bei Freigabe erhältst du eine nummerierte Mitgliedschaft (Member No. 0001 …) und dein Zugangsfenster." },
    ],
    tiersLabel: "Stufen",
    tiersTitle: "Verdient, nicht gekauft.",
    tiers: [
      { name: "LISTED", status: "Offen für alle", perks: ["Lot-Ankündigungen vor dem Newsletter", "Restock-Alert für dein Modul", "Kein Beitrag, jederzeit abmeldbar"] },
      { name: "MEMBER", status: "Freigeschaltet", perks: ["Early Access auf neue Lots vor öffentlichem Release", "Refill-Priorität bei limitierter Verfügbarkeit", "Lab-Dossier-Digest zu Formulierung und Tests", "Nummerierte Mitgliedschaft"] },
      { name: "INNER LAB", status: "Auf Einladung", perks: ["Nummerierte Lot-0001-Reservierung", "Zugang zu Testchargen vor Marktfreigabe", "Direkte Lab-Linie zur Formulierungsentwicklung", "Mitsprache bei Formulierungs-Iterationen"] },
    ],
    formLabel: "Zugangsanfrage",
    formTitle: "Auf die Liste.",
    formLead: "Wir öffnen Zugang pro Lot in begrenzter Zahl. Anfragen bleiben in der Reihenfolge des Eingangs bestehen.",
    name: "Name",
    email: "E-Mail",
    interest: "Zone / Interesse",
    referral: "Referral-Code",
    referralHint: "optional",
    submit: "Zugang anfragen →",
    sent: "Anfrage registriert ✓",
    sentNote: "Wir melden uns, sobald ein Zugangsfenster frei wird. Keine automatische Zusage.",
    transparencyLabel: "Transparenz",
    transparency: [
      "Kein Beitrag, kein Abo, keine Zahlungsdaten.",
      "Begrenzte Plätze pro Lot — Anfrage ist keine Zusage.",
      "Abmeldung jederzeit mit einer E-Mail.",
      "Keine Weitergabe von Daten an Dritte.",
    ],
    closingTitleA: "Jede Mitgliedschaft ist nummeriert.",
    closingTitleB: "Jeder Zugang ist begrenzt.",
    closingLead: "Der Club wächst mit dem Lab — Lot für Lot, nicht per Kreditkarte. Wer drin ist, sieht Formulierungen, bevor sie Produkte werden.",
  },

  contactPage: {
    metaTitle: "Kontakt & Impressum — ZONES LAB™",
    metaDesc: "Direkte Linie ins Labor. Impressum, Datenschutz und AGB für ZONES LAB™ — entwickelt in Bayern.",
    eyebrow: "Direkte Linie · 2026",
    titleA: "Kontaktiere",
    titleB: "das Labor.",
    channels: "Kanäle",
    mail: "Mail",
    press: "Presse",
    address: "Adresse",
    openLine: "Linie öffnen",
    name: "Name",
    email: "E-Mail",
    subject: "Betreff",
    message: "Nachricht",
    send: "An das Labor senden →",
    sent: "Signal empfangen ✓",
    imprint: "Impressum",
    imprintTitle: "Impressum · § 5 TMG",
    privacy: "Datenschutz",
    privacyTitle: "Datenschutzerklärung",
    privacyBody: "ZONES LAB™ verarbeitet ausschließlich die Daten, die für den Betrieb dieser Seite und die Beantwortung von Lab-Anfragen erforderlich sind. Kein Tracking, kein Profiling. Vollständige DSGVO-Dokumentation auf Anfrage über lab@zoneslab.com.",
    terms: "AGB",
    termsTitle: "Allgemeine Geschäftsbedingungen",
    termsBody: "Alle Produktinformationen sind R&D / Pre-Launch. Finale Claims, Batch-Sheets und Inhaltsstoffdeklarationen werden bei Lot-Release ausgegeben. Bundle-Preise gelten nur für vollständige Protokoll-Kits.",
  },
  products: {
    "oat-reset": {
      tagline: "Milde Recovery-Seife für Haut nach Belastung.",
      short: "Hafer und Shea beruhigen gereizte Haut, ohne sie auszutrocknen.",
      hero: "AX-08 OAT RESET SOAP ist eine milde Recovery-Seife für Haut, die nach Training und Belastung zur Ruhe kommen soll.",
      description: "Hafer und Sheabutter beruhigen gereizte Haut, ohne sie auszutrocknen. Einsatz in der RECOVER-Phase, nach dem Training.",
      highlightsTitle: "Benefits",
      highlights: [
        "Beruhigt gereizte und gestresste Haut nach intensiven Sessions",
        "Lindert Juckreiz und Rötungen",
        "Unterstützt die Hautregeneration",
        "Besonders geeignet bei sensibler und beanspruchter Haut",
        "Cremiger, feiner Schaum – ohne Austrocknung",
      ],
      protocol: "Auf nasser Haut aufschäumen, sanft einmassieren und gründlich abspülen. Ideal nach dem Training oder am Abend als Reset-Ritual.",
      zone: "Körper · Post-Session",
      claim: "Beruhigt gereizte Haut, ohne sie auszutrocknen.",
      composition: [
        "Hafer (Avena Sativa) · Sheabutter",
        "Pflanzliche Öle (Oliven · Raps · Rizinus)",
        "Natürlicher Milch-Honig-Duft",
      ],
      spec: [
        { label: "Volumen", value: "110 g" },
        { label: "Format", value: "Kaltgerührter Block" },
        { label: "Anwendung", value: "Post-Session · abends" },
        { label: "Herkunft", value: "Bayern · DE" },
      ],
      status: "Pre-Launch · Lot 0419",
    },
    "shea-barrier": {
      tagline: "Duftstofffreie Seife mit hohem Sheabutter-Anteil.",
      short: "Ein hoher Anteil nativer Sheabutter für Barriereschutz und Feuchtigkeit.",
      hero: "AX-09 SHEA BARRIER SOAP enthält einen hohen Anteil nativer Sheabutter für Haut, die Barriereschutz braucht — parfümfrei und mild.",
      description: "Unterstützt die Hautbarriere und hält Feuchtigkeit unter Belastung. Einsatz in der RECOVER-Phase, für Gesicht, Körper und Rasur.",
      highlightsTitle: "Benefits",
      highlights: [
        "Stärkt die natürliche Hautbarriere",
        "Intensive Feuchtigkeitsversorgung",
        "Beruhigt trockene und empfindliche Haut",
        "Duftstofffrei – ideal für sensible und reaktive Haut",
        "Für Gesicht, Körper und auch als milde Rasierseife geeignet",
      ],
      protocol: "Auf nasser Haut aufschäumen und einmassieren. Besonders nach dem Sport oder bei trockener, beanspruchter Haut. Gründlich abspülen.",
      zone: "Gesicht · Körper · Rasur",
      claim: "Unterstützt die Hautbarriere, hält Feuchtigkeit.",
      composition: [
        "Hoher Anteil nativer Sheabutter",
        "Olivenöl · Rapsöl",
        "Rizinusöl",
      ],
      spec: [
        { label: "Volumen", value: "110 g" },
        { label: "Format", value: "Kaltgerührter Block" },
        { label: "Profil", value: "Duftstofffrei" },
        { label: "Herkunft", value: "Bayern · DE" },
      ],
      status: "Pre-Launch · Lot 0419",
    },
    "pomegranate-glow": {
      tagline: "Regenerierende Seife mit Granatapfel und Feige.",
      short: "Granatapfel- und Feigenextrakte unterstützen die Erneuerung und ein gesundes Finish.",
      hero: "AX-10 POMEGRANATE GLOW SOAP nutzt Granatapfel- und Feigenextrakte zur Unterstützung der Erneuerung — für Haut, die Tonus will, nicht Stimulation.",
      description: "Antioxidative Unterstützung für einen ausgeglichenen Teint. Einsatz in der RECOVER-Phase, morgens oder abends.",
      highlightsTitle: "Benefits",
      highlights: [
        "Unterstützt die natürliche Hautregeneration",
        "Wirkt straffend und glättend",
        "Antioxidative Wirkung durch Granatapfel",
        "Fördert einen gesunden, strahlenden Teint",
        "Für anspruchsvolle und reife Haut geeignet",
      ],
      protocol: "Sanft aufschäumen, einmassieren und nach kurzer Einwirkzeit abspülen. Am besten morgens oder abends als Glow-Ritual.",
      zone: "Gesicht · Körper · Glow-Ritual",
      claim: "Antioxidative Unterstützung mit straffendem Finish.",
      composition: [
        "Granatapfel-Extrakt (Punica Granatum) · wilde Feige",
        "Sheabutter",
        "Hochwertige pflanzliche Öle",
      ],
      spec: [
        { label: "Volumen", value: "110 g" },
        { label: "Format", value: "Kaltgerührter Block" },
        { label: "Anwendung", value: "morgens · abends" },
        { label: "Herkunft", value: "Bayern · DE" },
      ],
      status: "Pre-Launch · Lot 0419",
    },
    intense: {
      tagline: "Waterless Balm zur täglichen Geruchsregulation.",
      short: "Ein Deodorant im Balsam-Format, pH-moduliert für normalen bis hohen Tagesbedarf.",
      hero: "AX-01 SODA-IN-OIL DEODORANT BALM ist ein wasserfreier Balsam für den täglichen Gebrauch. Eine Lipidmatrix trägt den Wirkkomplex, ohne die Oberflächenschicht der Haut zu stören.",
      description: "Das System arbeitet über kontrollierte pH-Modulation und Molekülbindung, eingebettet in eine lipidische Matrix. Für normale bis erhöhte Belastung. Ohne Aluminium.",
      highlightsTitle: "High Performance, ohne Kompromisse",
      highlights: [
        "Multi-Mechanismus Odor Control (pH · Enzym · Adsorption)",
        "24–36 Stunden Geruchsneutralisation",
        "Dry-touch Finish · keine Okklusion, keine Duftmaske",
        "100 % wasserfrei · aluminiumfrei · parfümfrei · vegan",
      ],
      protocol: "Erbsengroße Menge auf trockene Haut auftragen. Morgens für den ganzen Tag — bei Bedarf nach dem Sport nachlegen.",
      zone: "Axillar · Daily Core",
      claim: "Hält die Hautbalance über den ganzen Tag.",
      composition: [
        "Butyrospermum Parkii (Shea) Butter · Candelilla Cera",
        "Ceramide NP · Heptyl Undecylenate",
        "Limnanthes Alba Seed Oil · Squalane",
        "Magnesium Hydroxide · Sodium Bicarbonate",
        "Tocopherol · Triethyl Citrate · Zinc Ricinoleate",
      ],
      spec: [
        { label: "Volumen", value: "50 ml" },
        { label: "Format", value: "Violetglass-Tiegel" },
        { label: "Zyklus", value: "12 h Gleichgewicht" },
        { label: "Herkunft", value: "Bayern · DE" },
      ],
      status: "Pre-Launch · Lot 0419",
      consumer: {
        intro: "SODA-IN-OIL DEODORANT BALM ist das Hochleistungs-Daily für die Achsel: 100 % wasserfrei, aluminiumfrei, parfümfrei und vegan — entwickelt für Menschen mit hoher Geruchsneigung und sensibler Haut.",
        what: "Ein wasserfreier Deo-Balm mit Multi-Mechanismus Odor Control: pH-Modulation, Enzymhemmung und Adsorption geruchsbildender Moleküle. Kein Antitranspirant, keine Duftmaske.",
        how: "Erbsengroße Menge morgens auf trockene Haut auftragen und sanft einmassieren. Bei Bedarf nach dem Sport nachlegen.",
        who: "Für stressige Tage, Sport, Reisen und Hitze — auch bei empfindlicher Haut.",
        result: "Dry-touch Finish ohne Okklusion. 24–36 Stunden Geruchsneutralisation, kein Fettfilm, keine Duftinterferenz.",
      },
      faq: [
        { q: "Ist es ein Deo oder ein Antitranspirant?", a: "Weder noch — es ist ein Mikroklima-Modul. Es blockiert keine Drüsen, sondern hält die Hautoberfläche im Gleichgewicht." },
        { q: "Hinterlässt es Flecken?", a: "Nein. Die anhydrose Formel ist transferfrei auf Stoffen." },
        { q: "Kann ich es täglich nutzen?", a: "Ja, SODA-IN-OIL DEODORANT BALM ist als tägliche Anwendung kalibriert." },
      ],
    },
    sensitive: {
      tagline: "Waterless Balm für empfindliche und reaktive Hautzustände.",
      short: "Dieselbe Präzision im Balsam-Format wie AX-01, ausgelegt auf Haut, die Zurückhaltung braucht.",
      hero: "AX-02 NEURO-CALM DEODORANT BALM ist auf reaktive Haut ausgelegt. Er arbeitet ohne Parfüm und ohne Okklusion.",
      description: "Das System kombiniert geruchsregulierende Wirkung mit beruhigenden Lipiden. Für niedrige bis mittlere Belastung und sensible Haut. Ohne Aluminium.",
      highlightsTitle: "Für empfindliche Haut entwickelt",
      highlights: [
        "Sanfte Geruchsregulation über milde pH-Modulation",
        "Barriere-schützende Lipidmatrix mit Ceramiden & Shea",
        "Nach der Rasur geeignet · kein Brennen, kein Kribbeln",
        "100 % wasserfrei · parfümfrei · alkoholfrei · vegan",
      ],
      protocol: "Erbsengroße Menge auf trockene Haut auftragen und sanft einmassieren. Täglich morgens, auch direkt nach der Rasur.",
      zone: "Axillar · Reaktives Profil",
      claim: "Reduziert Geruchsbildung ohne aggressiven Eingriff.",
      composition: [
        "Butyrospermum Parkii (Shea) Butter · Candelilla Cera",
        "Ceramide NP · Heptyl Undecylenate",
        "Limnanthes Alba Seed Oil · Squalane",
        "Magnesium Hydroxide · Tocopherol",
        "Triethyl Citrate · Zinc Ricinoleate",
      ],
      spec: [
        { label: "Volumen", value: "50 ml" },
        { label: "Format", value: "Violetglass-Tiegel" },
        { label: "Profil", value: "Reaktiv" },
        { label: "Herkunft", value: "Bayern · DE" },
      ],
      status: "Pre-Launch · Lot 0419",
      consumer: {
        intro: "NEURO-CALM DEODORANT BALM ist für Haut entwickelt, die zur Ruhe kommen soll: 100 % wasserfrei, parfümfrei, alkoholfrei und vegan.",
        what: "Ein sanftes Deo-Balm-Modul mit milder pH-Modulation statt Alkalitätsspitzen. Die barriereschützende Lipidmatrix mit Ceramiden und Shea stützt die Haut, während der Geruch reguliert wird.",
        how: "Erbsengroße Menge morgens auf trockene Haut auftragen. Auch direkt nach der Rasur geeignet.",
        who: "Für rasierte, reaktive und empfindliche Achselhaut, die auf konventionelle Deos mit Brennen, Kribbeln oder Rötung reagiert.",
        result: "18–24 Stunden ruhige Geruchsregulation, „comfort-dry“ Finish, keine Duftinterferenz — kein Brennen, kein Kribbeln.",
      },
      faq: [
        { q: "Ist es ein Antitranspirant?", a: "Nein. NEURO-CALM DEODORANT BALM reguliert das Mikroklima, blockiert aber keine Schweißdrüsen." },
        { q: "Funktioniert es nach der Rasur?", a: "Ja — es ist explizit für die post-shave Anwendung kalibriert." },
        { q: "Enthält es Aluminium oder Parfüm?", a: "Nein. Beides nicht." },
      ],
    },
    reset: {
      tagline: "Waterless Peeling Balm zur Vorbereitung der Haut.",
      short: "Eine wasserfreie Zucker-Öl-Textur, die mechanisch arbeitet, nicht über Wirkstoffe.",
      hero: "AX-03 RESET PEELING BALM löst Rückstände und bereitet die Haut auf die nächste Phase vor. Kein täglicher Schritt — ein gezielter.",
      description: "Entfernt überschüssige Rückstände und bereitet die Haut auf die nachfolgenden Phasen vor. Einsatz in der PREP-Phase.",
      highlightsTitle: "Der System-Schritt vor Deo",
      highlights: [
        "Sugar-Polish System™ (55 % Sucrose) · rein mechanisch",
        "Keine Säuren, Enzyme oder Tenside",
        "Barriereerhaltende Öl-DNA (identisch zu den Deo-Modulen)",
        "100 % wasserfrei · vegan · parfümfrei · nur 5 INCI",
      ],
      protocol: "1–2× pro Woche auf trockene oder leicht feuchte Haut einmassieren, mit warmem Wasser abspülen. Anschließend SODA-IN-OIL DEODORANT BALM oder NEURO-CALM DEODORANT BALM auftragen.",
      zone: "Axillar · Pre-Engage",
      claim: "Löst Rückstände in einem Durchgang.",
      composition: [
        "Sucrose (55 %) · Squalane",
        "Limnanthes Alba (Meadowfoam) Seed Oil",
        "Ceramide NP · Tocopherol",
      ],
      spec: [
        { label: "Volumen", value: "75 ml" },
        { label: "Format", value: "Violetglass-Tiegel" },
        { label: "Anwendung", value: "1–2× / Woche" },
        { label: "Herkunft", value: "Bayern · DE" },
      ],
      status: "Pre-Launch · Lot 0419",
      consumer: {
        intro: "RESET PEELING BALM ist der Reset-Schritt vor dem Deo: 100 % wasserfrei, parfümfrei, vegan — mit nur 5 INCI.",
        what: "Ein Öl-Zucker-Balm mit rein mechanischer Wirkung. Keine Säuren, keine Enzyme, keine Tenside — dieselbe barriereerhaltende Öl-DNA wie in den Deo-Modulen.",
        how: "1–2× pro Woche auf trockene oder leicht feuchte Haut einmassieren, warm abspülen, danach das Deo-Modul auftragen.",
        who: "Für Achsel, Intimzone und den ganzen Körper — auch für Arme, Beine, Dekolleté und sensible Hautzonen.",
        result: "Glatte, rückstandsfreie Haut. Deo-Module performen konsistenter, weniger Eigengeruch über die Woche.",
      },
      faq: [
        { q: "Ist das ein Peeling?", a: "Nein, es ist ein mechanischer Reset ohne Säuren oder grobe Schleifkörner — barriereschonend." },
        { q: "Kann ich es nach der Rasur benutzen?", a: "Bitte 24 h Abstand zur Rasur halten." },
        { q: "Wie oft pro Woche?", a: "1–2×. Mehr ist nicht besser." },
      ],
    },
    powder: {
      tagline: "Fein abgestimmtes Puder zur Kontrolle von Feuchtigkeit und Reibung.",
      short: "Ein federleichtes Mineralpuder, das Feuchtigkeit über Physik steuert, nicht über Wirkstoffe.",
      hero: "AX-04 FINISHING POWDER schließt das AX Protocol mit einer rein mechanischen Schicht — ohne Wirkstoffe, ohne Eingriff in die Barriere.",
      description: "Schließt das System ab und reduziert mechanische Belastung im Tagesverlauf. Einsatz in der FINISH-Phase.",
      highlightsTitle: "Trocken. Komfortabel. Unter Kontrolle.",
      highlights: [
        "Absorption Matrix™ mit Kaolin & Arrowroot",
        "Sofortige Mattierung · reduziert Haut-auf-Haut-Reibung",
        "Kein Antitranspirant · keine Drüsenblockade",
        "100 % wasserfrei · vegan · parfümfrei · nur 4 INCI",
      ],
      protocol: "Nach SODA-IN-OIL DEODORANT BALM oder NEURO-CALM DEODORANT BALM dünn auf trockene Haut auftragen. Optional auch ohne Deo verwendbar.",
      zone: "Axillar · Finish-Layer",
      claim: "Reibung reduzieren, nicht die Biologie.",
      composition: [
        "Kaolin · Maranta Arundinacea Root Powder",
        "Magnesium Hydroxide · Tocopherol",
      ],
      spec: [
        { label: "Volumen", value: "40 g" },
        { label: "Format", value: "Violetglass-Dose · Gold-Dial" },
        { label: "Anwendung", value: "Finale Schicht · nach Bedarf" },
        { label: "Herkunft", value: "Bayern · DE" },
      ],
      status: "Pre-Launch · Lot 0419",
      consumer: {
        intro: "FINISHING POWDER ist der Komfort-Abschluss: trocken, mattiert und unter Kontrolle — 100 % wasserfrei, parfümfrei, vegan, nur 4 INCI.",
        what: "Ein Mineralpuder, das Feuchtigkeit bindet und Haut-auf-Haut-Reibung reduziert. Kein Antitranspirant, keine Drüsenblockade.",
        how: "Dünn nach dem Deo-Modul auf trockene Haut auftragen. Auch solo verwendbar.",
        who: "Primär für die Achsel — sekundär für Körperfalten, Innenschenkel und unter der Brust.",
        result: "Sofortige Mattierung, samt-trockenes Tragegefühl, weniger Reibung und Textilhaftung — ohne sichtbare Rückstände.",
      },
      faq: [
        { q: "Verstopft es die Poren?", a: "Nein. Die Mineralmatrix ist nicht-okklusiv und atmungsaktiv." },
        { q: "Kann ich es allein verwenden?", a: "Ja, als Finish entfaltet es die volle Wirkung über SODA-IN-OIL DEODORANT BALM oder NEURO-CALM DEODORANT BALM." },
        { q: "Färbt es Kleidung?", a: "Nein. Klar, partikelfein, rückstandsfrei auf Stoff." },
      ],
    },
    "lip-sculpt": {
      tagline: "Waterless Lippenbalsam mit Lipid-Struktur statt Stimulation.",
      short: "Ein lipidbasierter Lippenbalsam, der formt und glättet — ohne Kribbeln, ohne Reizung.",
      hero: "AX-07 LIP SCULPT BALM ist eine wasserfreie Lippenformel — geformte, sichtbar glattere Lippen ohne Kribbeln, Glanz oder Reizung.",
      description: "Formt und glättet sichtbar, ohne Kribbeln oder Reizung. Für die tägliche Lippenpflege, morgens und abends.",
      highlightsTitle: "Sculpt statt Stimulation",
      highlights: [
        "Soft-Focus Oberfläche · sichtbare Linienglättung",
        "Öl-dispergiertes Hyaluronat für optisches Volumen",
        "Langzeit-Komfort · nicht klebrig",
        "100 % wasserfrei · vegan · palmölfrei · barrierefreundlich",
      ],
      protocol: "Dünn auf die Lippen auftragen, bei Bedarf mehrmals täglich wiederholen. Als Overnight-Treatment vor dem Schlafen etwas großzügiger.",
      zone: "Lippen · Kontur & Grenze",
      claim: "Struktur, nicht Stimulation.",
      composition: [
        "Squalane · Butyrospermum Parkii Butter",
        "Limnanthes Alba Seed Oil · Candelilla Cera",
        "Sodium Hyaluronate (oil-dispersed)",
        "Vanilla Planifolia Fruit Extract · Tocopherol",
      ],
      spec: [
        { label: "Volumen", value: "15 ml" },
        { label: "Format", value: "Violetglass-Tiegel" },
        { label: "Anwendung", value: "AM · PM" },
        { label: "Herkunft", value: "Bayern · DE" },
      ],
      status: "Final · Lot 0419",
      consumer: {
        intro: "LIP SCULPT BALM formt die Lippen optisch — 100 % wasserfrei, vegan, palmölfrei und barrierefreundlich.",
        what: "Ein Soft-Focus-Lippenbalm: eine reduzierte Lipidmatrix mit öl-dispergiertem Hyaluronat für sichtbare Linienglättung und optisches Volumen.",
        how: "Dünn auftragen, bei Bedarf mehrmals täglich. Abends großzügiger als Overnight-Treatment.",
        who: "Für sensible Lippen und alle, die Struktur statt Glanz wollen — alltagstauglich, nicht klebrig.",
        result: "Soft-Focus Oberfläche, sichtbar geglättete Linien, optisch volleres Lippenbild — mit Langzeit-Komfort.",
      },
      faq: [
        { q: "Ist es ein Lipgloss?", a: "Nein. Kein Glanzfilm, sondern ein Struktur-Balsam mit mattem Finish." },
        { q: "Kann ich Lippenstift darüber tragen?", a: "Ja. 2 Minuten einziehen lassen, dann wie gewohnt schminken." },
        { q: "Wie oft am Tag?", a: "Zweimal als Ritual, zusätzlich nach Belastung." },
      ],
    },
    "hamamelis-mist": {
      tagline: "Destilliertes Hamamelis-Hydrolat, alkoholfrei.", short: "Reines Hamamelis-Hydrolat tonisiert und bereitet die Haut vor — ohne Alkohol, Verdünnung oder Zusätze.",
      hero: "AX-05 HAMAMELIS MIST ist ein Toner-Mist aus nur einem Inhaltsstoff: rein destilliert, alkoholfrei und als erster Schritt vor der Stabilisierung entwickelt.",
      description: "Ein Inhaltsstoff, keine Formel — reines Pflanzenwasser als Toner-Schritt vor der Stabilisierung. Einsatz in der PREP-Phase.",
      highlightsTitle: "Rein destilliert", highlights: ["100 % Hamamelis Virginiana Leaf Water", "Ein-Inhaltsstoff-Formel", "Alkoholfreie Destillation", "PREP-Schritt vor Neuro-Calm"],
      protocol: "Auf die gereinigte Haut sprühen, kurz setzen lassen und anschließend NEURO-CALM auftragen.", zone: "Gesicht · Hals · Rasurzone", claim: "Einmal destilliert. Unverändert belassen.", composition: ["Hamamelis Virginiana (Witch Hazel) Leaf Water"],
      spec: [{ label: "Volumen", value: "100 ml" }, { label: "Format", value: "Miron-Violettglas-Sprühflasche" }, { label: "Anwendung", value: "PREP · vor Neuro-Calm" }, { label: "Herkunft", value: "Bayern · DE" }], status: "Pre-Launch · Lot 0419",
    },
    "pre-shave-oil": {
      tagline: "Waterless Ölkomplex zur Reibungsreduktion vor der Klinge.", short: "Ein leichtes Öl-Komplex, das kontrollierte Gleitfähigkeit schafft und Klingenreibung vor der Rasur reduziert.",
      hero: "AX-06 PRE-SHAVE OIL bildet eine kontrollierte Gleitschicht, bevor die Klinge die Haut berührt — weniger Reibung, ohne schweren Film.",
      description: "Argan und Jojoba bilden eine Gleitschicht, Squalan stabilisiert den Film. Einsatz in der PREP-Phase, vor der Rasur.",
      highlightsTitle: "Vor der Klinge", highlights: ["Argan- + Jojobaöl-Komplex", "Squalan-stabilisierte Gleitschicht", "Reduziert Klingenreibung", "PREP-Schritt vor der Rasur"],
      protocol: "Einige Tropfen in die saubere, feuchte Haut einmassieren, rasieren und anschließend den Recovery-Schritt anwenden.", zone: "Gesicht · Hals · Rasurzone", claim: "Der Schritt vor der Klinge.", composition: ["Argania Spinosa Kernel Oil · Simmondsia Chinensis Seed Oil", "Squalane · Tocopherol"],
      spec: [{ label: "Volumen", value: "50 ml" }, { label: "Format", value: "Miron-Violettglas-Pipettenflasche" }, { label: "Anwendung", value: "PREP · vor der Rasur" }, { label: "Herkunft", value: "Bayern · DE" }], status: "Pre-Launch · Lot 0419",
    },
  },
  bundle: { name: "THE AX PROTOCOL", short: "Der Einstieg in das Protokoll: PREP · ENGAGE · RECOVER · FINISH — vier Module, die täglich zusammenspielen. Hamamelis Mist, Pre-Shave Oil und Lip Sculpt Balm lassen sich gezielt ergänzen." },
  shield: {
    "tracksuit": {
      tagline: "Unisex, oversized, aus schwerer Baumwolle.",
      description: "Ein oversized Hoodie mit passender Hose aus 480 g/m² Bio-Baumwolle, innen angeraut. Drop-Shoulder, weites Bein, bewusst großzügig — für jeden Körper gleich geschnitten. Vorgewaschen, gemacht für jeden Abend als Off-Duty-Layer des Protokolls.",
      benefits: ["480 g/m² Bio-Baumwolle", "Oversized Unisex-Schnitt · Drop-Shoulder", "Angeraute Innenseite", "Vorgewaschen · waschbar bei 40 °C"],
    },
    "zone-boxers": {
      tagline: "Reibungsfreie Boxershorts für die reaktive Zone.",
      description: "Eine Unisex-Boxershorts aus Baumwoll-Seiden-Mix, mit lockerem Bein und weichem, eingefasstem Bund — entwickelt, um mechanische Reibung zu reduzieren statt zu überdecken. Seide bringt die reibungsarme Oberfläche über die reaktive Zone, Bio-Baumwolle darunter reguliert Feuchtigkeit und Atmungsaktivität. Durchgehend flache Nähte — keine Scheuerpunkte, keine Druckkanten. Für Sport, für Reisen und für Haut unter täglicher Last.",
      benefits: ["Baumwoll-Seiden-Mix · reduzierte Oberflächenreibung", "Locker geschnittene Unisex-Boxer · eingefasster Bund", "Flachnaht-Konstruktion · kein Scheuern", "Sport- & Sensitive-Skin-Profil"],
    },
    "zone-tee": {
      tagline: "Oversized Unisex-Base-Layer mit Achsel-Gusset.",
      description: "Ein oversized Unisex-Shirt als echter Base Layer: ein eigenes Gusset-Panel in der Achselzone reguliert Feuchtigkeit genau dort, wo das AX-Protokoll auf der Haut darunter arbeitet. Schwerer Jersey, Drop-Shoulder, bewusst weiter Schnitt. Unter dem Tracksuit, unter jedem Layer — oder solo.",
      benefits: ["Achsel-Gusset-Panel", "Oversized Unisex-Fit · Drop-Shoulder", "Feuchtigkeitsregulierender schwerer Jersey", "Vorgewaschen · waschbar bei 40 °C"],
    },
    "towel-set": {
      tagline: "Neutralweiße Baumwolle — Big Size plus Sportformat.",
      description: "Ein zweiteiliges Handtuch-Set aus neutralweißer, langstapeliger Baumwolle: ein übergroßes Badetuch in 100 × 180 cm und ein kleines Sporthandtuch in 40 × 90 cm für Sporttasche, Platz oder Reiseetui. 700 g/m² doppelt gedrehter Frottee, fusselarm, schnell trocknend, mit verstärktem Saum und eingewebtem ZONES FABRICS Flag-Patch in Weiß und Gold — dieselbe Marke wie auf Tracksuit, Boxershorts und Tee.",
      benefits: ["700 g/m² langstapeliger Baumwollfrottee", "Badetuch 100 × 180 cm + Sporthandtuch 40 × 90 cm", "Neutralweiß · eingewebter ZONES FABRICS Flag-Patch", "Fusselarm · schnell trocknend · waschbar bei 60 °C"],
    },
  },
  carry: {
    "travel-case": {
      tagline: "Das Protokoll, gepackt.",
      description: "Ein Pflegeetui mit Reißverschluss aus wasserabweisendem Technical Canvas mit schwarzem Leder-Trim — im gleichen Sandbeige wie die Hand Clutch. Format für das komplette AX-Protokoll, abwischbares Innenfutter, unisex.",
      features: ["Format 24 × 17 × 6 cm", "Wasserabweisendes Technical Canvas", "Schwarzer Leder-Trim · Metall-Zipper", "Abwischbares Futter · fasst das AX-Protokoll"],
    },
    "hand-clutch": {
      tagline: "Kleines Format, volle Haltung.",
      description: "Eine flache Handtasche zum Tragen in der Hand: sandbeiges Technical Canvas, schwarze Lederkanten und -ecken, abnehmbare Lederschlaufe fürs Handgelenk. Innen ein Kartenfach und Platz für ein AX-Modul.",
      features: ["Handformat 26 × 18 × 3 cm", "Technical Canvas · Lederkanten", "Abnehmbare Handgelenkschlaufe", "Kartenfach · Unisex"],
    },
  },
};

/* =================== EN =================== */
const en: Dict = {
  blueprint: { title: "Construction drawing", tech: "Technology", material: "Material", measure: "Measure" },
  exploded: { eyebrow: "Construction", title: "Exploded view.", lead: "Three components, one system. As you scroll, cap, body and active core separate — and reassemble at the end.", hint: "Scroll", cap: "Cap", body: "Body", core: "Active core" },
  zoneMap: { eyebrow: "Zones", title: "Choose by zone.", lead: "Every zone has its own demands. Hover a zone — the protocol shows the matching modules.", hint: "Select a zone", zones: { axilla: "Underarms", face: "Face & Neck", body: "Body & Legs" }, cta: "Open module →" },
  nav: { home: "ZONES", products: "Collection", signature: "Signature", accessories: "Accessories", journal: "Journal", art: "Art Collab", protocol: "System", shield: "Fabrics", club: "Community", contact: "Contact", shop: "Shop", menu: "Menu", carry: "Carry", smart: "Technology", language: "Language" },
  footer: {
    tagline: "Applied Lipid Science · Axillary Microclimate",
    blurb: "Engineered in Bavaria. Formulated to support the lipid barrier and maintain microclimate equilibrium across daily exposure cycles.",
    system: "System", lab: "Lab", legal: "Legal", imprint: "Imprint", withdrawal: "Right of withdrawal", privacy: "Privacy", terms: "Terms", shippingPayment: "Shipping & payment",
    rights: "All rights reserved", origin: "Made in Bavaria · Clinically Engineered",
  },
  common: {
    addToCart: "Add to Cart", addedToCart: "added to cart (preview)", learnMore: "Learn More",
    openDossier: "Open dossier →", next: "Next", back: "Back", viewPortfolio: "View Portfolio",
    enterProtocol: "Enter Protocol →", fullPortfolio: "Full Portfolio →", readTechnology: "Read the technology →",
    enterShield: "Enter Fabrics →", joinClub: "Request access →", contactLab: "Contact the Lab →",
    returnPortfolio: "Return to AX Portfolio →", openModule: "Open module dossier →",
    addBundleToCart: "Add Bundle to Cart →", scroll: "Scroll", phase: "Phase", module: "Module",
    technology: "Technology", claim: "Claim", composition: "Composition", protocolLabel: "Protocol",
    specs: "Specifications", heroMechanism: "Hero Mechanism", techComplex: "Tech / Complex", zone: "Zone",
    notFoundTitle: "Signal lost", notFoundLead: "The protocol you requested is outside this system.",
    notFoundCta: "Return to lab", signalLost: "Signal lost", skuNotFound: "SKU not found",
    backPortfolio: "Back to Portfolio", preorder: "Available · Lot 0419", colorLabel: "Colour",
    inPlainWords: "In plain words", whatItIs: "What it is", howToUse: "How to use", whoItsFor: "Who it's for", whatYouGet: "What you get", faqTitle: "Frequently asked",
    relatedModules: "More Modules", standardsTitle: "Standards", inProtocol: "In the Protocol", backToCollection: "Back to collection", preorderNow: "Pre-order now", ingredientsTitle: "Actives", ingredientsHead: "What is inside — and why.", ingredientsLead: "Every raw material has a job. Here is the INCI name, the plain-language name and the benefit in one sentence.", ingredientsNote: "INCI data as per current formulation. Cosmetic claims — no medical promises.", claimsHead: "Standards that apply to every module.",
  },
  home: {
    metaTitle: "ZONES LAB™ — AX PROTOCOL · Applied Lipid Science",
    metaDesc: "AX PROTOCOL by Zones Lab. Engineered Lipid-Buffered Dispersion designed to support barrier integrity and maintain axillary microclimate equilibrium.",
    systemOnline: "System Online · Bavaria · 2026",
    heroLine1: "ZONES", heroLine2: "LAB™",
    heroIntro: "Six clearly ordered lines: AX Cosmetics for functional care, OLF-01 as a scent signature, ZONES Fabrics for textile performance, Superfood coffee for origin, Accessories for the ritual and ZONES × REZA for the art.",
    heroRef: "Reference",
    heroPrimary: "Start the system", heroSecondary: "Understand AX Protocol",
    routeEyebrow: "002 / Assortment", routeTitle: "Choose your entry.", routeLead: "Four clearly separated lines. Each has its own purpose — and a direct route to the right product.",
    routeCards: [
      { eyebrow: "Applied Lipid Science", title: "AX COSMETICS", body: "Ten functional modules across four phases — from preparation to finish.", cta: "View collection" },
      { eyebrow: "Parfum · outside the system", title: "OLF-01 SIGNATURE", body: "One scent signature in two ranges. Worn, not dosed.", cta: "Discover Signature" },
      { eyebrow: "Applied Fiber Science", title: "ZONES FABRICS", body: "Four textile objects for skin, movement and recovery.", cta: "Discover Fabrics" },
      { eyebrow: "Sourced in Europe", title: "ACCESSORIES", body: "Curated objects in olive wood, porcelain and steel.", cta: "View accessories" },
    ],
    coreTitleA: "Your entry.", coreTitleB: "Two profiles.", coreLead: "INTENSE for high load. SENSITIVE for reactive skin. Both form the daily core of the AX Protocol.",
    assortmentTitle: "Three more worlds.", assortmentLead: "Scent, textiles and curated ritual objects — positioned independently without diluting the AX Protocol.",
    sectionHero: "001 / Hero", sectionManifesto: "002 / Manifesto", sectionTech: "003 / Solution",
    sectionProtocol: "004 / Protocol", sectionPortfolio: "005 / Portfolio", sectionShield: "006 / Fabrics",
    sectionBundle: "◆ The System", sectionClub: "007 / ZONES CLUB",
    manifestoTitle: { a: "The skin between motion and stillness is a working ", alpine: "microclimate", b: " — not a problem to be silenced." },
    manifestoBody1: "Conventional systems shock the barrier. They mask. They strip. They force a single signal through a living interface designed for nuance.",
    manifestoBody2: "AX PROTOCOL is built around restraint. Anhydrous architecture, Lipid-Buffered Dispersion, and Zero-Shock Technology formulated to support the barrier — not override it.",
    manifestoLead: "The Problem · §01 — §03",
    techTitleA: "Zero-Shock", techTitleB: "Technology",
    techLead: "Three engineered modules — Lipid-Buffered Dispersion, the Hydrophobic Gate, and the Bavarian Alpine mineral grid — operating as a single continuous architecture.",
    techStats: [
      { v: "98.4%", k: "Lipid Integrity Index", n: "Day-14 in-vitro" },
      { v: "12 h", k: "Time-Release Window", n: "Equilibrium cycle" },
      { v: "Δ 0.6°C", k: "Microclimate Stability", n: "vs. control protocol" },
    ],
    protocolTitleA: "Four Phases.", protocolTitleB: "One Equilibrium.",
    protocolSteps: [
      { n: "01", t: "PREP", d: "Reset the microclimate. Blank Canvas state." },
      { n: "02", t: "ENGAGE", d: "Daily Core. 12-hour equilibrium window." },
      { n: "03", t: "RECOVER", d: "LipidShield reinforces. Return to baseline." },
      { n: "04", t: "FINISH", d: "Physics, not biology. Dry, silky, low friction." },
    ],
    portfolioTitleA: "Seven Modules.", portfolioTitleB: "One Architecture.",
    portfolioLead: "SODA-IN-OIL DEODORANT BALM · NEURO-CALM DEODORANT BALM · RESET PEELING BALM · FINISHING POWDER · HAMAMELIS MIST · PRE-SHAVE OIL · LIP SCULPT BALM. Architecture across the AX Protocol cycle.",
    shieldTitlePre: "ZONES", shieldTitleMid: "| FABRICS", shieldTitleEnd: "Applied Fiber Science.",
    shieldLead: "Three unisex objects in a slightly oversized cut: the tracksuit in 480 gsm organic cotton, the Zone Boxers in cotton-silk and the Zone Tee with axillary gusset.",
    bundleSaves: (n) => `Saves €${n}`,
    clubTitleA: "No price.", clubTitleB: "Only access.",
    clubLead: "The ZONES CLUB is by invitation: no fee, no subscription. Numbered memberships, limited seats per lot — early access, refill priority, lab dossiers.",
    archiveEyebrow: "004 / Archive",
    archiveTitle: "The visual archive.",
    archiveLead: "Four lines, one climate. What goes on the skin, what is worn over it — and what follows the rituals.",
    archiveQuoteTitle: "Systemic Quality",
    archiveQuoteBody: "A visual language for the physical world — developed from material research, not decoration.",
    archiveItemLabels: ["01. Signature", "02. Fabrics", "03. Accessories", "04. Cosmetics"],
    archiveItemQuotes: ["Heritage", "Applied Fiber Science", "Curated Objects", "The tactile ritual of high performance."],

  },
  productsPage: {
    metaTitle: "Products — ZONES LAB™ AX Protocol",
    metaDesc: "Ten products across four phases: daily deodorant balms, reset, recovery soaps, finish powder, witch hazel mist, pre-shave oil and lip balm.",
    eyebrow: "Portfolio · 2026",
    titleA: "Ten Products.", titleB: "Four Clear Phases.",
    lead: "Start with Intense or Sensitive. Then add only what your routine needs for preparation, recovery and finish — PREP · ENGAGE · RECOVER · FINISH.",
    systemCore: "SYSTEM CORE",
    startHere: "START HERE",
    refillBadge: "REFILL",
    refillAction: "REPLENISH",
    emptyCategory: "No products in this category.",
    categories: { all: "All", performance: "Apply", sensitive: "Sensitive", prep: "Prepare", repair: "Recovery", recovery: "Recovery Soaps", finish: "Finish" },
    bundleEyebrow: "◆ Bundle",
    bundleSaves: (n) => `Saves €${n}`,
    finder: {
      cta: "Find your module",
      title: "Three questions. Two or three recommendations.",
      hint: "Pick zone, skin type and goal — we show the modules that fit.",
      close: "Close",
      reset: "Reset",
      resultLabel: "Recommendation",
      empty: "Please answer all three questions.",
      zoneLabel: "Zone",
      zone: { axilla: "Underarms", face: "Face & neck", body: "Body & legs" },
      skinLabel: "Skin",
      skin: { robust: "Robust", sensitive: "Sensitive", dry: "Dry" },
      goalLabel: "Goal",
      goal: { fresh: "Everyday freshness", recover: "Recovery", finish: "Smoothing & finish" },
      reasons: {
        intense: "Built for high output — keeps the microclimate stable all day.",
        sensitive: "Fragrance-free and calming for reactive zones.",
        reset: "Preps the zone and clears residue in a single pass.",
        powder: "Cuts friction and moisture — mechanically, without actives.",
        "lip-sculpt": "Optical volume illusion through lipid design — sculpt instead of stimulation.",
        "hamamelis-mist": "Pure witch hazel hydrolat as a toning PREP step.",
        "pre-shave-oil": "Controlled slip and reduced blade friction before shaving.",
      },
    },
  },
  productDetail: { nextModule: "Next Module", metaSuffix: "ZONES LAB™" },
  signature: {
    tagline: "One formula. Two ranges.",
    hero: "OLF-01 is what the ZONES scent architecture sounds like worn, not dosed. Same engineering logic as the AX Protocol — vetiver, cedarwood, olibanum — carried at parfum strength instead of trace concentration. Two ranges of one signature: one engineered to reach the room, one engineered to stay exactly where you put it.",
    description: "The AX Protocol measures OLF-01 in fractions of a percent. This carries it at 20% — parfum strength, not a scented afterthought. Both ranges share the same core accord. What separates them is radius: how far the signature is built to travel before it fades.",
    protocol: "Apply to pulse points or layer over any AX Protocol product. Unlike the system's functional modules, this has no PREP, ENGAGE, RECOVER or FINISH role — wear it independently, whenever the signature should speak.",
    variantsLabel: "Choose range", selectVariant: "Select variant", compositionLabel: "Composition",
    comparisonTitle: "Which range fits you?", comparisonLead: "The same core accord, a different radius. Choose by situation — not scent family.",
    comparisonRows: [{ label: "Radius", broadcast: "Room-reaching", skinClose: "Skin-close" }, { label: "Diffusion", broadcast: "Iso E Super + Ambroxan", skinClose: "Reduced" }, { label: "Oud trace", broadcast: "Present", skinClose: "None" }, { label: "Best for", broadcast: "Evening · entrance · presence", skinClose: "Day · proximity · restraint" }],
    variants: {
      broadcast: { name: "BROADCAST", tagline: "Built to be noticed. The full accord, full radius.", description: "The engine runs. Oud trace intact, Iso E Super and Ambroxan carrying the accord past your own perimeter — this is the formula that answers the original brief: people walking into the scent before they see you." },
      "skin-close": { name: "SKIN-CLOSE", tagline: "Same signature, held close. For rooms, not runways.", description: "Same accord, engineered down instead of out. The oud trace is gone, the diffusion engine switched off — what remains is vetiver, cedarwood and olibanum sitting directly on skin, radius measured in centimeters, not rooms. Built for the hours between getting dressed and walking out the door, not for the entrance itself." },
    },
  },
  accessoriesPage: accessoryTranslations.en.page,
  accessories: accessoryTranslations.en.items,
  protocolPage: {
    metaTitle: "The Protocol & Technology — ZONES LAB™",
    metaDesc: "PREP · ENGAGE · RECOVER · FINISH. Four phases, seven modules. Lipid-Buffered Dispersion, Hydrophobic Gate, Soda-in-Oil Matrix — the full architecture of the AX System.",
    eyebrow: "The Protocol · 2026",
    titleA: "Four Phases.", titleB: "One Equilibrium.",

    lead: "The AX Protocol is a single continuous architecture — Lipid-Buffered Dispersion, the Hydrophobic Gate and the Bavarian Alpine mineral grid working as one barrier framework.",
    architecture: "Architecture",
    architectureTitleA: "Lipid-Buffered Dispersion.",
    architectureTitleB: "A continuous barrier framework.",
    architectureModules: [
      { t: "Hydrophobic Gate", d: "Selective passage architecture aligned to the surface lipid layer." },
      { t: "Lipid-Buffered Dispersion", d: "Anhydrous carrier matrix that delivers actives without water-shock." },
      { t: "Bavarian Alpine Mineral Grid", d: "A mineral framework calibrated to the axillary microclimate." },
    ],
    openPortfolio: "Open the Portfolio →",
    steps: [
      { title: "Reset the microclimate.", body: "AX-03 RESET PEELING BALM clears residue and re-aligns the surface lipid layer in a single pass. The Blank Canvas state — the prerequisite for ENGAGE." },
      { title: "Daily Core. 12-hour equilibrium.", body: "AX-01 SODA-IN-OIL DEODORANT BALM or AX-02 NEURO-CALM DEODORANT BALM carries the active matrix through the Hydrophobic Gate. Time-released, anhydrous, fully aligned to the barrier." },
      { title: "Prep and tone.", body: "AX-05 HAMAMELIS MIST prepares skin for stabilisation with a pure, alcohol-free hydrolat." },
      { title: "Before the blade.", body: "AX-06 PRE-SHAVE OIL uses argan, jojoba and squalane for controlled slip and reduced blade friction." },
    ],

  },
  shieldPage: {
    metaTitle: "ZONES FABRICS — Applied Fiber Science",
    metaDesc: "ZONES FABRICS: applied fiber science for movement and regeneration. Oversized tracksuit, cotton-silk boxer, base-layer tee, and towel set.",
    eyebrow: "ZONES | FABRICS",
    claim: "Applied Fiber Science · Textile Engineering",
    titleA: "ZONES",
    titleB: "FABRICS",
    lead: "Four textile objects for movement, rest and regeneration: an oversized tracksuit in 480 gsm organic cotton, a cotton-silk boxer with flat seams, a base-layer tee with an axillary gusset, and the towel set in 700 gsm terry.",
    closingTitle: "Fabrics that work with the skin.", quickNav: "Jump to product",
  },
  carryPage: {
    metaTitle: "ZONES | CARRY — Everyday Objects",
    metaDesc: "Zippered travel care case and matching hand clutch in sand beige technical canvas with black leather trim.",
    eyebrow: "ZONES | CARRY",
    titleA: "Carry.",
    titleB: "For the road.",
    lead: "Two objects that escort the protocol: a travel care case to pack it and a matching hand clutch in the same sand beige. Built to last.",
    closingTitle: "Carry that comes along.",
  },
  smartPage: {
    metaTitle: "Smart — Waterless by Design · ZONES LAB™",
    metaDesc: "Soda-in-Oil (SiO) Matrix · Waterless · Aluminum-free · Hormone friendly · Microbiome friendly. High Performance that happens to be sustainable.",
    eyebrow: "Smart · Waterless by Design",
    titleA: "High Performance.",
    titleB: "Waterless. Period.",
    lead: "We do not dilute our formulas with water. Every gram of ZONES™ is pure performance — more efficient for your skin, better for the planet.",
    efficiencyEyebrow: "001 / Efficiency Statement",
    efficiencyTitle: "Waterless by Design.",
    efficiencyBody: "Conventional formulas use water as a carrier. We build differently: selected actives held in a Soda-in-Oil (SiO) Matrix — waterless and structured by function.",
    waterlessChartTitle: "Water content per gram of formula",
    waterlessUsLabel: "ZONES™ AX / P [SiO]",
    waterlessThemLabel: "Conventional deodorant",
    waterlessNote: "Pure active density vs. aqueous dilution.",
    scienceEyebrow: "002 / Science Deep-Dive",
    scienceTitle: "Soda-in-Oil (SiO) Matrix.",
    scienceBody: "Our SiO Matrix is built on Waterless technology. Instead of water, pure lipids and bio-engineered actives carry the LipidShield Complex™ precisely to the barrier — driving active barrier repair, not surface masking.",
    matrixCaption: "Four layers. One architecture.",
    matrixLipid: "Lipid carrier · LipidShield Complex™",
    matrixSoda: "Soda module · pH regulation",
    matrixMineral: "Bavarian Alpine mineral grid",
    matrixPeptide: "Anhydrous carrier architecture",
    standardsEyebrow: "003 / Standards Checklist",
    standardsTitle: "What we are not.",
    standardsLead: "A quick overview. ZONES™ exceeds modern standards — not because it is trending, but because it is technically cleaner.",
    standardsRows: [
      { label: "Aluminum-free", note: "No aluminum salts. No pseudo-dryness." },
      { label: "Alcohol-free", note: "No solvent shock to the barrier." },
      { label: "Waterless", note: "Zero dilution. Maximum active density." },
      { label: "Microbiome friendly", note: "Does not disturb the axillary microbiome." },
      { label: "Barrier friendly", note: "Supports barrier integrity — active barrier repair." },
      { label: "Hormone friendly", note: "Free from hormonally active compounds." },
      { label: "Non-comedogenic", note: "Does not clog pores — calibrated for sport & load." },
    ],
    standardsBetter: "ZONES™",
    standardsStandard: "Mass market",
    sustainabilityEyebrow: "004 / Sustainability",
    sustainabilityTitle: "Less water. Less waste. More effect.",
    sustainabilityBody: "Waterless means less volume, less packaging, less freight weight — and no preservatives needed to keep water stable. Technology that happens to be green.",
    sustainabilityStats: [
      { v: "0 %", k: "Water in formula" },
      { v: "10", k: "AX modules" },
      { v: "04", k: "Protocol phases" },
    ],
    closingTitle: "Smart means less, sharper, honest.",
    closingLead: "No eco-jargon. No consumer math. Just actives doing their job.",
    closingCta: "Open the portfolio →",
    crossEyebrow: "Objects · System",
    crossTitle: "What escorts the system.",
    crossLead: "The formulas work on the zone. Fabrics work on the rest of the day: tracksuit, cotton-silk boxer, base-layer tee and towel set.",
  },
  clubPage: {
    metaTitle: "ZONES CLUB — Access by invitation",
    metaDesc: "No fee, no subscription. Access to the ZONES CLUB is released by curation: early access to new lots, refill priority and lab dossiers.",
    eyebrow: "ZONES CLUB · Access by invitation",
    titleA: "No price.", titleB: "Only access.",
    lead: "The ZONES CLUB is not for sale. Access is released by curation — in limited numbers per lot. Every membership is numbered: no subscription, no fee.",
    howLabel: "How access works",
    howTitle: "Three steps. No checkout.",
    howSteps: [
      { n: "01", t: "Request", d: "You leave name, email and your zone. No account, no payment." },
      { n: "02", t: "Review", d: "We match requests against the capacity of the next lot. Referral codes get priority." },
      { n: "03", t: "Release", d: "On release you receive a numbered membership (Member No. 0001 …) and your access window." },
    ],
    tiersLabel: "Tiers",
    tiersTitle: "Earned, not bought.",
    tiers: [
      { name: "LISTED", status: "Open to everyone", perks: ["Lot announcements before the newsletter", "Restock alert for your module", "No fee, opt out any time"] },
      { name: "MEMBER", status: "Released", perks: ["Early access to new lots before public release", "Refill priority when availability is limited", "Lab dossier digest on formulation and testing", "Numbered membership"] },
      { name: "INNER LAB", status: "By invitation", perks: ["Numbered Lot 0001 reservation", "Access to test batches before market release", "Direct lab line to formulation development", "A say in formulation iterations"] },
    ],
    formLabel: "Access request",
    formTitle: "Get listed.",
    formLead: "We open access per lot in limited numbers. Requests stay on file in order of arrival.",
    name: "Name", email: "Email", interest: "Zone / interest", referral: "Referral code", referralHint: "optional",
    submit: "Request access →", sent: "Request logged ✓",
    sentNote: "We reach out as soon as an access window opens. No automatic confirmation.",
    transparencyLabel: "Transparency",
    transparency: [
      "No fee, no subscription, no payment data.",
      "Limited seats per lot — a request is not a guarantee.",
      "Opt out any time with one email.",
      "No data shared with third parties.",
    ],
    closingTitleA: "Every membership is numbered.", closingTitleB: "Every access is limited.",
    closingLead: "The club grows with the lab — lot by lot, not by credit card. Those inside see formulations before they become products.",
  },

  contactPage: {
    metaTitle: "Contact & Imprint — ZONES LAB™",
    metaDesc: "Direct line to the lab. Imprint, Privacy and Terms for ZONES LAB™ — engineered in Bavaria.",
    eyebrow: "Direct Line · 2026",
    titleA: "Contact", titleB: "the Lab.",
    channels: "Channels", mail: "Mail", press: "Press", address: "Address",
    openLine: "Open a line", name: "Name", email: "Email", subject: "Subject", message: "Message",
    send: "Send to Lab →", sent: "Signal Received ✓",
    imprint: "Imprint", imprintTitle: "Imprint · § 5 TMG",
    privacy: "Privacy", privacyTitle: "Privacy Policy",
    privacyBody: "ZONES LAB™ processes only the data required to operate this site and respond to lab inquiries. No tracking, no profiling. Full GDPR documentation available on request via lab@zoneslab.com.",
    terms: "Terms", termsTitle: "Terms & Conditions",
    termsBody: "All product information is R&D / pre-launch. Final claims, batch sheets and ingredient declarations are issued at lot release. Bundle pricing applies to complete protocol kits only.",
  },
  products: {
    "oat-reset": {
      tagline: "Mild recovery soap for skin after load.",
      short: "Oat and shea calm irritated skin without stripping it.",
      hero: "AX-08 OAT RESET SOAP is a mild recovery soap for skin that needs to settle after training and load.",
      description: "Oat and shea butter calm irritated skin without drying it out. Used in the RECOVER phase, after training.",
      highlightsTitle: "Benefits",
      highlights: [
        "Calms irritated, stressed skin after intense sessions",
        "Eases itching and redness",
        "Supports skin regeneration",
        "Made for sensitive and stressed skin",
        "Creamy, fine lather — no drying out",
      ],
      protocol: "Lather on wet skin, massage in gently and rinse thoroughly. Ideal after training or in the evening as a reset ritual.",
      zone: "Body · Post-Session",
      claim: "Calms irritated skin without stripping it.",
      composition: [
        "Oat (Avena Sativa) · Shea Butter",
        "Plant oils (olive · rapeseed · castor)",
        "Natural milk & honey scent",
      ],
      spec: [
        { label: "Volume", value: "110 g" },
        { label: "Format", value: "Cold-process block" },
        { label: "Use", value: "Post-session · PM" },
        { label: "Origin", value: "Bavaria · DE" },
      ],
      status: "Pre-launch · Lot 0419",
    },
    "shea-barrier": {
      tagline: "Fragrance-free soap with a high share of shea butter.",
      short: "A high concentration of native shea butter for barrier support and moisture.",
      hero: "AX-09 SHEA BARRIER SOAP carries a high share of native shea butter for skin that needs barrier support — fragrance-free, mild.",
      description: "Supports the skin barrier and holds moisture under load. Used in the RECOVER phase, for face, body and shaving.",
      highlightsTitle: "Benefits",
      highlights: [
        "Strengthens the natural skin barrier",
        "Intensive moisture supply",
        "Calms dry and sensitive skin",
        "Fragrance-free — ideal for sensitive, reactive skin",
        "For face, body and as a mild shaving soap",
      ],
      protocol: "Lather on wet skin and massage in. Especially after sport or on dry, stressed skin. Rinse thoroughly.",
      zone: "Face · Body · Shave",
      claim: "Supports the skin barrier, holds moisture.",
      composition: [
        "High share of native shea butter",
        "Olive oil · Rapeseed oil",
        "Castor oil",
      ],
      spec: [
        { label: "Volume", value: "110 g" },
        { label: "Format", value: "Cold-process block" },
        { label: "Profile", value: "Fragrance-free" },
        { label: "Origin", value: "Bavaria · DE" },
      ],
      status: "Pre-launch · Lot 0419",
    },
    "pomegranate-glow": {
      tagline: "Regenerating soap with pomegranate and fig.",
      short: "Pomegranate and fig extracts support renewal and a healthy finish.",
      hero: "AX-10 POMEGRANATE GLOW SOAP uses pomegranate and fig extracts to support renewal — for skin that wants tone, not stimulation.",
      description: "Antioxidant support for a balanced complexion. Used in the RECOVER phase, morning or evening.",
      highlightsTitle: "Benefits",
      highlights: [
        "Supports natural skin regeneration",
        "Firms and smooths",
        "Antioxidant action from pomegranate",
        "Promotes a healthy, radiant complexion",
        "Suited to demanding and mature skin",
      ],
      protocol: "Lather gently, massage in and rinse off after a short dwell time. Best in the morning or evening as a glow ritual.",
      zone: "Face · Body · Glow Ritual",
      claim: "Antioxidant support with a firming finish.",
      composition: [
        "Pomegranate extract (Punica Granatum) · wild fig",
        "Shea butter",
        "Premium plant oils",
      ],
      spec: [
        { label: "Volume", value: "110 g" },
        { label: "Format", value: "Cold-process block" },
        { label: "Use", value: "AM · PM" },
        { label: "Origin", value: "Bavaria · DE" },
      ],
      status: "Pre-launch · Lot 0419",
    },
    intense: {
      tagline: "Waterless balm for daily odour regulation.",
      short: "A balm-format deodorant, pH-modulated for normal to high daily demand.",
      hero: "AX-01 SODA-IN-OIL DEODORANT BALM is a waterless balm calibrated for daily use. A lipid matrix carries the active complex without disrupting the skin's own surface layer.",
      description: "The system works through controlled pH modulation and molecular binding, embedded in a lipid matrix. For normal to elevated demand. Without aluminium.",
      highlightsTitle: "High performance, no compromise",
      highlights: [
        "Multi-mechanism odour control (pH · enzyme · adsorption)",
        "24–36 hours of odour neutralisation",
        "Dry-touch finish · no occlusion, no fragrance mask",
        "100 % waterless · aluminium-free · fragrance-free · vegan",
      ],
      protocol: "Apply a pea-sized amount to dry skin. In the morning for the whole day — reapply after sport if needed.",
      zone: "Axillary · Daily Core",
      claim: "Maintains skin balance across a full day.",
      composition: [
        "Butyrospermum Parkii (Shea) Butter · Candelilla Cera",
        "Ceramide NP · Heptyl Undecylenate",
        "Limnanthes Alba Seed Oil · Squalane",
        "Magnesium Hydroxide · Sodium Bicarbonate",
        "Tocopherol · Triethyl Citrate · Zinc Ricinoleate",
      ],
      spec: [
        { label: "Volume", value: "50 ml" },
        { label: "Format", value: "Violetglass jar" },
        { label: "Cycle", value: "12 h equilibrium" },
        { label: "Origin", value: "Bavaria · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "SODA-IN-OIL DEODORANT BALM is the high-performance daily for the underarm: 100 % waterless, aluminium-free, fragrance-free and vegan — built for high odour tendency and sensitive skin.",
        what: "A waterless deodorant balm with multi-mechanism odour control: pH modulation, enzyme inhibition and adsorption of odour molecules. No antiperspirant, no fragrance mask.",
        how: "Apply a pea-sized amount to dry skin in the morning and massage in gently. Reapply after sport if needed.",
        who: "For demanding days, sport, travel and heat — also on sensitive skin.",
        result: "Dry-touch finish without occlusion. 24–36 hours of odour neutralisation, no greasy film, no fragrance interference.",
      },
      faq: [
        { q: "Is it a deodorant or an antiperspirant?", a: "Neither — it's a microclimate module. It doesn't block glands, it keeps the skin surface in balance." },
        { q: "Does it stain?", a: "No. The anhydrous formula is transfer-free on fabric." },
        { q: "Can I use it daily?", a: "Yes, SODA-IN-OIL DEODORANT BALM is calibrated for daily use." },
      ],
    },
    sensitive: {
      tagline: "Waterless balm for sensitive and reactive skin conditions.",
      short: "The same balm-format precision as AX-01, calibrated for skin that needs restraint.",
      hero: "AX-02 NEURO-CALM DEODORANT BALM is calibrated for reactive skin. It works without fragrance and without occlusion.",
      description: "The system combines odour regulation with calming lipids. For low to medium demand and sensitive skin. Without aluminium.",
      highlightsTitle: "Engineered for sensitive skin",
      highlights: [
        "Gentle odour control via mild pH modulation",
        "Barrier-protecting lipid matrix with ceramides & shea",
        "Suitable after shaving · no stinging, no tingling",
        "100 % waterless · fragrance-free · alcohol-free · vegan",
      ],
      protocol: "Apply a pea-sized amount to dry skin and massage in gently. Every morning, also directly after shaving.",
      zone: "Axillary · Reactive Profile",
      claim: "Reduces odour formation without aggressive intervention.",
      composition: [
        "Butyrospermum Parkii (Shea) Butter · Candelilla Cera",
        "Ceramide NP · Heptyl Undecylenate",
        "Limnanthes Alba Seed Oil · Squalane",
        "Magnesium Hydroxide · Tocopherol",
        "Triethyl Citrate · Zinc Ricinoleate",
      ],
      spec: [
        { label: "Volume", value: "50 ml" },
        { label: "Format", value: "Violetglass jar" },
        { label: "Profile", value: "Reactive" },
        { label: "Origin", value: "Bavaria · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "NEURO-CALM DEODORANT BALM is made for skin that needs to settle down: 100 % waterless, fragrance-free, alcohol-free and vegan.",
        what: "A gentle deodorant balm using mild pH modulation instead of alkalinity spikes. The barrier-protective lipid matrix with ceramides and shea supports the skin while odour is regulated.",
        how: "Apply a pea-sized amount to dry skin in the morning. Suitable directly after shaving.",
        who: "For shaved, reactive and sensitive underarm skin that reacts to conventional deodorants with stinging, tingling or redness.",
        result: "18–24 hours of calm odour control, a comfort-dry finish, no fragrance interference — no stinging, no tingling.",
      },
      faq: [
        { q: "Is it an antiperspirant?", a: "No. NEURO-CALM DEODORANT BALM regulates the microclimate but does not block sweat glands." },
        { q: "Does it work after shaving?", a: "Yes — it's calibrated specifically for post-shave use." },
        { q: "Does it contain aluminium or fragrance?", a: "No. Neither." },
      ],
    },
    reset: {
      tagline: "Waterless peeling balm to prepare the skin.",
      short: "An anhydrous sugar-oil texture that works mechanically, not actively.",
      hero: "AX-03 RESET PEELING BALM clears residue and prepares the skin before the next phase. Not a daily step — a targeted one.",
      description: "Removes excess residue and prepares the skin for the following phases. Used in the PREP phase.",
      highlightsTitle: "The system step before deodorant",
      highlights: [
        "Sugar-Polish System™ (55 % sucrose) · purely mechanical",
        "No acids, enzymes or surfactants",
        "Barrier-preserving oil DNA (identical to the deodorant modules)",
        "100 % waterless · vegan · fragrance-free · only 5 INCI",
      ],
      protocol: "Massage in 1–2× per week on dry or slightly damp skin, rinse with warm water. Then apply SODA-IN-OIL DEODORANT BALM or NEURO-CALM DEODORANT BALM.",
      zone: "Axillary · Pre-Engage",
      claim: "Clears residue in a single pass.",
      composition: [
        "Sucrose (55 %) · Squalane",
        "Limnanthes Alba (Meadowfoam) Seed Oil",
        "Ceramide NP · Tocopherol",
      ],
      spec: [
        { label: "Volume", value: "75 ml" },
        { label: "Format", value: "Violetglass jar" },
        { label: "Use", value: "1–2× / week" },
        { label: "Origin", value: "Bavaria · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "RESET PEELING BALM is the reset step before your deodorant: 100 % waterless, fragrance-free, vegan — with only 5 INCI.",
        what: "An oil-sugar balm with purely mechanical action. No acids, no enzymes, no surfactants — the same barrier-preserving oil DNA as the deodorant modules.",
        how: "Massage in 1–2× per week on dry or slightly damp skin, rinse warm, then apply your deodorant module.",
        who: "For underarm, intimate zone and the whole body — including arms, legs, décolleté and sensitive areas.",
        result: "Smooth, residue-free skin. The deodorant modules perform more consistently and odour stays lower across the week.",
      },
      faq: [
        { q: "Is this an exfoliator?", a: "No, it's a mechanical reset without acids or harsh grit — barrier-safe." },
        { q: "Can I use it after shaving?", a: "Please leave 24 h after shaving." },
        { q: "How often per week?", a: "1–2×. More is not better." },
      ],
    },
    powder: {
      tagline: "Finely tuned powder for moisture and friction control.",
      short: "A featherweight mineral powder that manages moisture through physics, not active ingredients.",
      hero: "AX-04 FINISHING POWDER closes the AX Protocol with a purely mechanical layer — no active ingredients, no barrier override.",
      description: "Closes the system and reduces mechanical load across the day. Used in the FINISH phase.",
      highlightsTitle: "Dry. Comfortable. Under control.",
      highlights: [
        "Absorption Matrix™ with kaolin & arrowroot",
        "Instant mattifying · reduces skin-on-skin friction",
        "Not an antiperspirant · no gland blocking",
        "100 % waterless · vegan · fragrance-free · only 4 INCI",
      ],
      protocol: "Apply thinly to dry skin after SODA-IN-OIL DEODORANT BALM or NEURO-CALM DEODORANT BALM. Can also be used on its own.",
      zone: "Axillary · Finish Layer",
      claim: "Reduce friction, not biology.",
      composition: [
        "Kaolin · Maranta Arundinacea Root Powder",
        "Magnesium Hydroxide · Tocopherol",
      ],
      spec: [
        { label: "Volume", value: "40 g" },
        { label: "Format", value: "Violetglass doos · gouden dial" },
        { label: "Use", value: "Final layer · on demand" },
        { label: "Origin", value: "Bavaria · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "FINISHING POWDER is the comfort finish: dry, matte and under control — 100 % waterless, fragrance-free, vegan, only 4 INCI.",
        what: "A mineral powder that binds moisture and reduces skin-on-skin friction. No antiperspirant, no gland blocking.",
        how: "Apply thinly to dry skin after your deodorant module. Can be used solo.",
        who: "Primarily for the underarm — secondarily for body folds, inner thighs and under the bust.",
        result: "Instant mattification, velvet-dry wear, less friction and fabric cling — with no visible residue.",
      },
      faq: [
        { q: "Does it clog pores?", a: "No. The mineral matrix is non-occlusive and breathable." },
        { q: "Can I use it on its own?", a: "Yes, but as a finish it works best over SODA-IN-OIL DEODORANT BALM or NEURO-CALM DEODORANT BALM." },
        { q: "Does it stain clothing?", a: "No. Clear, ultra-fine, residue-free on fabric." },
      ],
    },
    "lip-sculpt": {
      tagline: "Waterless lip balm with lipid structure instead of stimulation.",
      short: "A lipid-based lip balm that shapes and smooths without tingling or irritation.",
      hero: "AX-07 LIP SCULPT BALM is a waterless lip formula — shaped, visibly smoother lips without tingling, gloss or irritation.",
      description: "Shapes and visibly smooths, without tingling or irritation. For daily lip care, morning and evening.",
      highlightsTitle: "Sculpt instead of stimulation",
      highlights: [
        "Soft-focus surface · visible line smoothing",
        "Oil-dispersed hyaluronate for optical volume",
        "Long-lasting comfort · not sticky",
        "100 % waterless · vegan · palm-oil-free · barrier-friendly",
      ],
      protocol: "Apply thinly to the lips, repeat several times a day as needed. Apply more generously before sleep as an overnight treatment.",
      zone: "Lips · Contour & Border",
      claim: "Structure, not stimulation.",
      composition: [
        "Squalane · Butyrospermum Parkii Butter",
        "Limnanthes Alba Seed Oil · Candelilla Cera",
        "Sodium Hyaluronate (oil-dispersed)",
        "Vanilla Planifolia Fruit Extract · Tocopherol",
      ],
      spec: [
        { label: "Volume", value: "15 ml" },
        { label: "Format", value: "Violetglass jar" },
        { label: "Use", value: "AM · PM" },
        { label: "Origin", value: "Bavaria · DE" },
      ],
      status: "Final · Lot 0419",
      consumer: {
        intro: "LIP SCULPT BALM shapes the lips optically — 100 % waterless, vegan, palm-oil-free and barrier-friendly.",
        what: "A soft-focus lip balm: a reduced lipid matrix with oil-dispersed hyaluronate for visible line smoothing and optical volume.",
        how: "Apply thinly, repeat during the day as needed. More generously at night as an overnight treatment.",
        who: "For sensitive lips and anyone who wants structure instead of shine — everyday wear, never sticky.",
        result: "A soft-focus surface, visibly smoothed lines and a fuller-looking lip — with long-wear comfort.",
      },
      faq: [
        { q: "Is it a lip gloss?", a: "No. Not a shine film but a structural balm with a matte finish." },
        { q: "Can I wear lipstick over it?", a: "Yes. Let it absorb for 2 minutes, then apply as usual." },
        { q: "How often per day?", a: "Twice as a ritual, plus after exposure." },
      ],
    },
    "hamamelis-mist": {
      tagline: "Distilled witch hazel hydrolat, alcohol-free.", short: "Pure witch hazel hydrolat that tones and prepares skin without alcohol, dilution or additives.", hero: "AX-05 HAMAMELIS MIST is a single-ingredient toner mist: distilled pure, alcohol-free and designed as the first step before stabilisation.",
      description: "One ingredient, not a formula — pure plant water as the toner step before stabilisation. Used in the PREP phase.",
      highlightsTitle: "Distilled pure", highlights: ["100% Hamamelis Virginiana Leaf Water", "Single-ingredient formula", "Alcohol-free distillation", "PREP step before Neuro-Calm"], protocol: "Mist onto clean skin, allow to settle briefly, then follow with NEURO-CALM.", zone: "Face · Neck · Shave Zone", claim: "Distilled once. Left alone.", composition: ["Hamamelis Virginiana (Witch Hazel) Leaf Water"], spec: [{ label: "Volume", value: "100 ml" }, { label: "Format", value: "Miron Violetglass spray bottle" }, { label: "Use", value: "PREP · before Neuro-Calm" }, { label: "Origin", value: "Bavaria · DE" }], status: "Pre-launch · Lot 0419",
    },
    "pre-shave-oil": {
      tagline: "Waterless oil complex to reduce friction before the blade.", short: "A lightweight oil complex that creates controlled slip and reduces blade friction before shaving.", hero: "AX-06 PRE-SHAVE OIL builds a controlled slip layer before the blade reaches the skin, reducing friction without a heavy finish.",
      description: "Argan and jojoba form a glide layer, squalane stabilises the film. Used in the PREP phase, before shaving.", highlightsTitle: "Before the blade", highlights: ["Argan + Jojoba oil complex", "Squalane-stabilised slip layer", "Reduces blade friction", "PREP step before shaving"], protocol: "Massage a few drops into clean, damp skin before shaving, then follow with the recovery step.", zone: "Face · Neck · Shave Zone", claim: "The step before the blade.", composition: ["Argania Spinosa Kernel Oil · Simmondsia Chinensis Seed Oil", "Squalane · Tocopherol"], spec: [{ label: "Volume", value: "50 ml" }, { label: "Format", value: "Miron Violetglass dropper bottle" }, { label: "Use", value: "PREP · before shaving" }, { label: "Origin", value: "Bavaria · DE" }], status: "Pre-launch · Lot 0419",
    },
  },
  bundle: { name: "THE AX PROTOCOL", short: "The way into the protocol: PREP · ENGAGE · RECOVER · FINISH — four modules that work together daily. Hamamelis Mist, Pre-Shave Oil and Lip Sculpt Balm can be added as targeted steps." },
  shield: {
    "tracksuit": {
      tagline: "Unisex, oversized, in heavyweight cotton.",
      description: "An oversized hoodie and matching pants in 480 gsm organic cotton, brushed on the inside. Drop shoulder, relaxed leg, deliberately roomy — cut the same for every body. Pre-shrunk, built to be worn every evening as the off-duty layer of the protocol.",
      benefits: ["480 gsm organic cotton", "Oversized unisex cut · drop shoulder", "Brushed inner face", "Pre-shrunk · washable at 40°C"],
    },
    "zone-boxers": {
      tagline: "Friction-free boxers for the reactive zone.",
      description: "A unisex boxer short in a cotton-silk blend, cut with a relaxed leg and soft covered waistband — engineered to reduce mechanical friction rather than mask it. Silk carries the low-friction surface across the reactive zone; organic cotton underneath manages moisture and breathability. Flat-seam construction throughout — no chafe points, no elastic pressure lines. Built for sport, for travel, and for skin under daily load.",
      benefits: ["Cotton-silk blend · reduced surface friction", "Relaxed unisex boxer cut · covered waistband", "Flat-seam construction · no chafe", "Sport & sensitive-skin profile"],
    },
    "towel-set": {
      tagline: "Neutral white cotton — big size plus sport format.",
      description: "A two-piece towel set in neutral white long-staple cotton: an oversized bath sheet at 100 × 180 cm and a small sport towel at 40 × 90 cm for the gym bag, the court or the travel case. 700 gsm double-turned terry, low-lint, quick-drying, with a reinforced hem carrying the woven ZONES FABRICS flag patch in white and gold — the same mark as the tracksuit, the boxers and the tee.",
      benefits: ["700 gsm long-staple cotton terry", "Bath sheet 100 × 180 cm + sport towel 40 × 90 cm", "Neutral white · woven ZONES FABRICS flag patch", "Low-lint · quick-drying · washable at 60°C"],
    },
    "zone-tee": {
      tagline: "Oversized unisex base layer with axillary gusset.",
      description: "An oversized unisex tee built as a true base layer: a dedicated gusset panel at the axillary zone manages moisture exactly where the AX Protocol operates on the skin below. Heavyweight jersey, drop shoulder, deliberately roomy cut. Wear it under the tracksuit, under any layer, or on its own.",
      benefits: ["Underarm gusset panel", "Oversized unisex fit · drop shoulder", "Moisture-managing heavyweight jersey", "Pre-shrunk · washable at 40°C"],
    },
  },
  carry: {
    "travel-case": {
      tagline: "The protocol, packed.",
      description: "A zippered care case in water-repellent technical canvas with black leather trim — the same sand beige as the Hand Clutch. Sized for the full AX Protocol, wipe-clean lining, unisex.",
      features: ["Format 24 × 17 × 6 cm", "Water-repellent technical canvas", "Black leather trim · metal zip", "Wipe-clean lining · fits the AX Protocol"],
    },
    "hand-clutch": {
      tagline: "Small format, full posture.",
      description: "A flat hand-held clutch: sand beige technical canvas, black leather edges and corners, detachable leather wrist strap. Inside, a card slot and room for one AX module.",
      features: ["Hand format 26 × 18 × 3 cm", "Technical canvas · leather edges", "Detachable wrist strap", "Card slot · unisex"],
    },
  },
};

/* =================== FR =================== */
const fr: Dict = {
  blueprint: { title: "Plan de construction", tech: "Technologie", material: "Matière", measure: "Dimension" },
  exploded: { eyebrow: "Construction", title: "Vue éclatée.", lead: "Trois composants, un système. Au défilement, couvercle, corps et cœur actif se séparent — puis se réassemblent.", hint: "Défiler", cap: "Couvercle", body: "Corps", core: "Cœur actif" },
  zoneMap: { eyebrow: "Zones", title: "Choisissez par zone.", lead: "Chaque zone a ses exigences. Survolez une zone — le protocole affiche les modules adaptés.", hint: "Choisir une zone", zones: { axilla: "Aisselles", face: "Visage & cou", body: "Corps & jambes" }, cta: "Ouvrir le module →" },
  nav: { home: "ZONES", products: "Collection", signature: "Signature", accessories: "Accessoires", journal: "Journal", art: "Collab Art", protocol: "Système", shield: "Fabrics", club: "Community", contact: "Contact", shop: "Boutique", menu: "Menu", carry: "Carry", smart: "Technologie", language: "Langue" },
  footer: {
    tagline: "Applied Lipid Science · Microclimat Axillaire",
    blurb: "Conçu en Bavière. Formulé pour soutenir la barrière lipidique et maintenir l'équilibre du microclimat à travers les cycles d'exposition quotidiens.",
    system: "Système", lab: "Laboratoire", legal: "Mentions légales", imprint: "Mentions légales", withdrawal: "Rétractation", privacy: "Confidentialité", terms: "CGV", shippingPayment: "Livraison & paiement",
    rights: "Tous droits réservés", origin: "Made in Bavaria · Clinically Engineered",
  },
  common: {
    addToCart: "Ajouter au panier", addedToCart: "ajouté au panier (aperçu)", learnMore: "En savoir plus",
    openDossier: "Ouvrir le dossier →", next: "Suivant", back: "Retour", viewPortfolio: "Voir le portfolio",
    enterProtocol: "Entrer dans le protocole →", fullPortfolio: "Portfolio complet →", readTechnology: "Lire la technologie →",
    enterShield: "Découvrir Fabrics →", joinClub: "Demander l'accès →", contactLab: "Contacter le laboratoire →",
    returnPortfolio: "Retour au portfolio AX →", openModule: "Ouvrir le dossier du module →",
    addBundleToCart: "Ajouter le bundle au panier →", scroll: "Défiler", phase: "Phase", module: "Module",
    technology: "Technologie", claim: "Promesse", composition: "Composition", protocolLabel: "Protocole",
    specs: "Spécifications", heroMechanism: "Mécanisme principal", techComplex: "Tech / Complexe", zone: "Zone",
    notFoundTitle: "Signal perdu", notFoundLead: "Le protocole demandé est en dehors de ce système.",
    notFoundCta: "Retour au laboratoire", signalLost: "Signal perdu", skuNotFound: "SKU introuvable",
    backPortfolio: "Retour au portfolio", preorder: "Disponible · Lot 0419", colorLabel: "Couleur",
    inPlainWords: "En clair", whatItIs: "Qu'est-ce que c'est ?", howToUse: "Comment l'utiliser", whoItsFor: "Pour qui ?", whatYouGet: "Ce que vous ressentez", faqTitle: "Questions fréquentes",
    relatedModules: "Autres modules", standardsTitle: "Standards", inProtocol: "Dans le protocole", backToCollection: "Retour à la collection", preorderNow: "Précommander", ingredientsTitle: "Actifs", ingredientsHead: "Ce qu’il y a dedans — et pourquoi.", ingredientsLead: "Chaque matière première a une fonction. Voici le nom INCI, le nom courant et le bénéfice en une phrase.", ingredientsNote: "Données INCI selon la formulation actuelle. Allégations cosmétiques — aucune promesse médicale.", claimsHead: "Des standards valables pour chaque module.",
  },
  home: {
    metaTitle: "ZONES LAB™ — AX PROTOCOL · Applied Lipid Science",
    metaDesc: "AX PROTOCOL par Zones Lab. Lipid-Buffered Dispersion d'ingénierie, conçue pour soutenir l'intégrité de la barrière et maintenir l'équilibre du microclimat axillaire.",
    systemOnline: "Système en ligne · Bavière · 2026",
    heroLine1: "ZONES", heroLine2: "LAB™",
    heroIntro: "Six lignes clairement ordonnées : AX Cosmetics pour le soin fonctionnel, OLF-01 comme signature olfactive, ZONES Fabrics pour la performance textile, Superfood café pour l’origine, Accessories pour le rituel et ZONES × REZA pour l’art.",
    heroRef: "Référence",
    heroPrimary: "Démarrer le système", heroSecondary: "Comprendre AX Protocol",
    routeEyebrow: "002 / Assortiment", routeTitle: "Choisissez votre entrée.", routeLead: "Quatre lignes clairement séparées. Chacune a sa fonction et mène directement au bon produit.",
    routeCards: [
      { eyebrow: "Applied Lipid Science", title: "AX COSMETICS", body: "Dix modules fonctionnels en quatre phases, de la préparation à la finition.", cta: "Voir la collection" },
      { eyebrow: "Parfum · hors système", title: "OLF-01 SIGNATURE", body: "Une signature olfactive en deux portées. Portée, non dosée.", cta: "Découvrir Signature" },
      { eyebrow: "Applied Fiber Science", title: "ZONES FABRICS", body: "Quatre objets textiles pour la peau, le mouvement et la récupération.", cta: "Découvrir Fabrics" },
      { eyebrow: "Sourced in Europe", title: "ACCESSORIES", body: "Objets sélectionnés en olivier, porcelaine et acier.", cta: "Voir les accessoires" },
    ],
    coreTitleA: "Votre entrée.", coreTitleB: "Deux profils.", coreLead: "INTENSE pour les fortes sollicitations. SENSITIVE pour les peaux réactives. Les deux forment le cœur quotidien de l'AX Protocol.",
    assortmentTitle: "Trois autres univers.", assortmentLead: "Parfum, textiles et objets rituels sélectionnés — autonomes, sans diluer la logique de l'AX Protocol.",
    sectionHero: "001 / Hero", sectionManifesto: "002 / Manifeste", sectionTech: "003 / Solution",
    sectionProtocol: "004 / Protocole", sectionPortfolio: "005 / Portfolio", sectionShield: "006 / Fabrics",
    sectionBundle: "◆ Le Système", sectionClub: "007 / ZONES CLUB",
    manifestoTitle: { a: "La peau entre mouvement et immobilité est un ", alpine: "microclimat", b: " vivant — pas un problème à faire taire." },
    manifestoBody1: "Les systèmes conventionnels choquent la barrière. Ils masquent. Ils strippent. Ils forcent un signal unique à travers une interface vivante conçue pour la nuance.",
    manifestoBody2: "AX PROTOCOL est construit autour de la retenue. Architecture anhydre, Lipid-Buffered Dispersion et Zero-Shock Technology — formulés pour soutenir la barrière, pas la dépasser.",
    manifestoLead: "Le Problème · §01 — §03",
    techTitleA: "Zero-Shock", techTitleB: "Technology",
    techLead: "Trois modules d'ingénierie — Lipid-Buffered Dispersion, le Hydrophobic Gate et la grille minérale Bavarian Alpine — opérant comme une seule architecture continue.",
    techStats: [
      { v: "98,4 %", k: "Indice d'intégrité lipidique", n: "Jour 14 in vitro" },
      { v: "12 h", k: "Fenêtre time-release", n: "Cycle d'équilibre" },
      { v: "Δ 0,6 °C", k: "Stabilité du microclimat", n: "vs protocole de contrôle" },
    ],
    protocolTitleA: "Quatre phases.", protocolTitleB: "Un équilibre.",
    protocolSteps: [
      { n: "01", t: "PREP", d: "Réinitialiser le microclimat. État Blank Canvas." },
      { n: "02", t: "ENGAGE", d: "Daily Core. Fenêtre d'équilibre de 12 heures." },
      { n: "03", t: "RECOVER", d: "LipidShield renforce. Retour à la ligne de base." },
      { n: "04", t: "FINISH", d: "La physique, pas la biologie. Sec, soyeux, sans frottement." },
    ],
    portfolioTitleA: "Sept modules.", portfolioTitleB: "Une architecture.",
    portfolioLead: "SODA-IN-OIL DEODORANT BALM · NEURO-CALM DEODORANT BALM · RESET PEELING BALM · FINISHING POWDER · HAMAMELIS MIST · PRE-SHAVE OIL · LIP SCULPT BALM. Architecture sur tout le cycle de l'AX Protocol.",
    shieldTitlePre: "ZONES", shieldTitleMid: "| FABRICS", shieldTitleEnd: "Applied Fiber Science.",
    shieldLead: "Trois objets unisexes à la coupe légèrement oversize : le tracksuit en coton bio 480 g/m², les Zone Boxers en coton-soie et le Zone Tee à gousset axillaire.",
    bundleSaves: (n) => `Économise €${n}`,
    clubTitleA: "Aucun prix.", clubTitleB: "Seulement l'accès.",
    clubLead: "Le ZONES CLUB est sur invitation : sans frais, sans abonnement. Adhésions numérotées, places limitées par lot — accès anticipé, priorité de recharge, dossiers de laboratoire.",
    archiveEyebrow: "004 / Archive",
    archiveTitle: "L’archive visuelle.",
    archiveLead: "Quatre lignes, un climat. Ce qui touche la peau, ce qui la recouvre — et ce qui suit les rituels.",
    archiveQuoteTitle: "Qualité systémique",
    archiveQuoteBody: "Un langage visuel pour le monde physique — développé à partir de la recherche matérielle, pas de la décoration.",
    archiveItemLabels: ["01. Signature", "02. Fabrics", "03. Accessories", "04. Cosmetics"],
    archiveItemQuotes: ["Heritage", "Applied Fiber Science", "Curated Objects", "The tactile ritual of high performance."],

  },
  productsPage: {
    metaTitle: "Produits — ZONES LAB™ AX Protocol",
    metaDesc: "Dix produits en quatre phases : déodorants baumes, reset, savons recovery, poudre de finition, brume d’hamamélis, huile de pré-rasage et baume à lèvres.",
    eyebrow: "Portfolio · 2026",
    titleA: "Dix produits.", titleB: "Quatre phases claires.",
    lead: "Commencez par Intense ou Sensitive. Ajoutez ensuite uniquement ce dont votre routine a besoin — PREP · ENGAGE · RECOVER · FINISH.",
    systemCore: "CŒUR DU SYSTÈME",
    startHere: "COMMENCER ICI",
    refillBadge: "RECHARGE",
    refillAction: "RECHARGER",
    emptyCategory: "Aucun produit dans cette catégorie.",
    categories: { all: "Tous", performance: "Appliquer", sensitive: "Sensible", prep: "Préparer", repair: "Récupération", recovery: "Recovery Soaps", finish: "Finition" },
    bundleEyebrow: "◆ Bundle",
    bundleSaves: (n) => `Économise €${n}`,
    finder: {
      cta: "Trouver votre module",
      title: "Trois questions. Deux ou trois recommandations.",
      hint: "Choisissez la zone, le type de peau et l'objectif — nous affichons les modules adaptés.",
      close: "Fermer",
      reset: "Réinitialiser",
      resultLabel: "Recommandation",
      empty: "Merci de répondre aux trois questions.",
      zoneLabel: "Zone",
      zone: { axilla: "Aisselles", face: "Visage & cou", body: "Corps & jambes" },
      skinLabel: "Peau",
      skin: { robust: "Robuste", sensitive: "Sensible", dry: "Sèche" },
      goalLabel: "Objectif",
      goal: { fresh: "Fraîcheur quotidienne", recover: "Récupération", finish: "Lissage & finition" },
      reasons: {
        intense: "Conçu pour l'effort intense — microclimat stable toute la journée.",
        sensitive: "Sans parfum et apaisant pour les zones réactives.",
        reset: "Prépare la zone et élimine les résidus en un seul passage.",
        powder: "Réduit friction et humidité — mécaniquement, sans actifs.",
        "lip-sculpt": "Illusion optique de volume par design lipidique — sculpter au lieu de stimuler.",
        "hamamelis-mist": "Hydrolat pur d’hamamélis comme étape PREP tonifiante.",
        "pre-shave-oil": "Glisse contrôlée et friction réduite avant le rasage.",
      },
    },
  },
  productDetail: { nextModule: "Module suivant", metaSuffix: "ZONES LAB™" },
  signature: {
    tagline: "Une formule. Deux portées.",
    hero: "OLF-01 est le son de l’architecture olfactive ZONES lorsqu’elle est portée, non dosée. La même logique d’ingénierie que l’AX Protocol — vétiver, bois de cèdre, oliban — à concentration parfum plutôt qu’à l’état de trace. Deux portées d’une même signature : l’une conçue pour atteindre la pièce, l’autre pour rester exactement là où elle est posée.",
    description: "L’AX Protocol mesure OLF-01 en fractions de pour cent. Ici, il est porté à 20 % — force parfum, pas un ajout odorant accessoire. Les deux portées partagent le même accord central. Ce qui les distingue, c’est leur rayon : la distance que la signature est conçue pour parcourir avant de s’estomper.",
    protocol: "Appliquer sur les points de pulsation ou superposer à tout produit AX Protocol. Contrairement aux modules fonctionnels, OLF-01 n’a aucun rôle PREP, ENGAGE, RECOVER ou FINISH — à porter seul, chaque fois que la signature doit s’exprimer.",
    variantsLabel: "Choisir la portée", selectVariant: "Sélectionner la variante", compositionLabel: "Composition",
    comparisonTitle: "Quelle portée vous correspond ?", comparisonLead: "Le même accord central, un rayon différent. Choisissez selon la situation — pas la famille olfactive.",
    comparisonRows: [{ label: "Rayon", broadcast: "Remplit la pièce", skinClose: "Près de la peau" }, { label: "Diffusion", broadcast: "Iso E Super + Ambroxan", skinClose: "Réduite" }, { label: "Trace de oud", broadcast: "Présente", skinClose: "Sans" }, { label: "Idéal pour", broadcast: "Soir · entrée · présence", skinClose: "Jour · proximité · retenue" }],
    variants: {
      broadcast: { name: "BROADCAST", tagline: "Conçu pour être remarqué. L’accord entier, le rayon complet.", description: "Le moteur tourne. La trace de oud reste intacte, Iso E Super et Ambroxan portent l’accord au-delà de votre propre périmètre — voici la formule qui répond au brief original : les autres entrent dans le parfum avant de vous voir." },
      "skin-close": { name: "SKIN-CLOSE", tagline: "La même signature, tenue près. Pour les pièces, pas les podiums.", description: "Le même accord, travaillé vers le bas plutôt que vers l’extérieur. La trace de oud a disparu, le moteur de diffusion est coupé — restent le vétiver, le bois de cèdre et l’oliban directement sur la peau, un rayon mesuré en centimètres, pas en pièces. Conçu pour les heures entre le moment de s’habiller et celui de franchir la porte, pas pour l’entrée elle-même." },
    },
  },
  accessoriesPage: accessoryTranslations.fr.page,
  accessories: accessoryTranslations.fr.items,
  protocolPage: {
    metaTitle: "Le Protocole & la Technologie — ZONES LAB™",
    metaDesc: "PREP · ENGAGE · RECOVER · FINISH. Quatre phases, sept modules. Lipid-Buffered Dispersion, Hydrophobic Gate, matrice Soda-in-Oil — l'architecture complète de l'AX System.",
    eyebrow: "Le Protocole · 2026",
    titleA: "Quatre phases.", titleB: "Un équilibre.",

    lead: "L'AX Protocol est une architecture continue unique — Lipid-Buffered Dispersion, le Hydrophobic Gate et la grille minérale Bavarian Alpine fonctionnent comme un seul cadre de barrière.",
    architecture: "Architecture",
    architectureTitleA: "Lipid-Buffered Dispersion.",
    architectureTitleB: "Un cadre de barrière continu.",
    architectureModules: [
      { t: "Hydrophobic Gate", d: "Architecture de passage sélectif alignée sur la couche lipidique de surface." },
      { t: "Lipid-Buffered Dispersion", d: "Matrice porteuse anhydre qui délivre les actifs sans choc hydrique." },
      { t: "Bavarian Alpine Mineral Grid", d: "Cadre minéral calibré pour le microclimat axillaire." },
    ],
    openPortfolio: "Ouvrir le portfolio →",
    steps: [
      { title: "Réinitialiser le microclimat.", body: "AX-03 RESET PEELING BALM élimine les résidus et réaligne la couche lipidique de surface en un seul passage. L'état Blank Canvas — la condition préalable à ENGAGE." },
      { title: "Daily Core. Équilibre 12 heures.", body: "AX-01 SODA-IN-OIL DEODORANT BALM ou AX-02 NEURO-CALM DEODORANT BALM transporte la matrice active à travers le Hydrophobic Gate. Time-released, anhydre, totalement aligné à la barrière." },
      { title: "Préparer et tonifier.", body: "AX-05 HAMAMELIS MIST prépare la peau à la stabilisation avec un hydrolat pur et sans alcool." },
      { title: "Avant la lame.", body: "AX-06 PRE-SHAVE OIL crée une glisse contrôlée avec argan, jojoba et squalane." },
    ],

  },
  shieldPage: {
    metaTitle: "ZONES FABRICS — Applied Fiber Science",
    metaDesc: "ZONES FABRICS : science appliquée de la fibre pour le mouvement et la régénération. Tracksuit oversize, boxer coton-soie, t-shirt base layer et set de serviettes.",
    eyebrow: "ZONES | FABRICS",
    claim: "Applied Fiber Science · Science appliquée de la fibre",
    titleA: "ZONES",
    titleB: "FABRICS",
    lead: "Quatre objets textiles pour le mouvement, le repos et la régénération : un tracksuit oversize en coton bio 480 g/m², un boxer coton-soie à coutures plates, un t-shirt base layer à gousset axillaire et le set de serviettes en éponge 700 g/m².",
    closingTitle: "Des fabrics qui travaillent avec la peau.", quickNav: "Aller au produit",
  },
  carryPage: {
    metaTitle: "ZONES | CARRY — Objets du quotidien",
    metaDesc: "Étui de soin zippé et pochette à main assortie en toile technique beige sable à bords cuir noir.",
    eyebrow: "ZONES | CARRY",
    titleA: "Carry.",
    titleB: "Pour la route.",
    lead: "Deux objets qui accompagnent le protocole : un étui de soin pour la route et une pochette à main assortie, dans le même beige sable. Faits pour durer.",
    closingTitle: "Le carry qui vous suit.",
  },
  smartPage: {
    metaTitle: "Smart — Waterless by Design · ZONES LAB™",
    metaDesc: "Matrice Soda-in-Oil (SiO) · Waterless · Sans aluminium · Hormone friendly · Microbiome friendly. Haute performance qui se trouve être durable.",
    eyebrow: "Smart · Waterless by Design",
    titleA: "High Performance.",
    titleB: "Sans eau. Point.",
    lead: "Nous ne diluons pas nos formules avec de l'eau. Chaque gramme de ZONES™ est pure performance — plus efficace pour la peau, meilleur pour la planète.",
    efficiencyEyebrow: "001 / Efficiency Statement",
    efficiencyTitle: "Waterless by Design.",
    efficiencyBody: "Les formules conventionnelles utilisent l’eau comme vecteur. Nous construisons autrement : des actifs sélectionnés dans une matrice Soda-in-Oil (SiO), sans eau et structurée par fonction.",
    waterlessChartTitle: "Teneur en eau par gramme de formule",
    waterlessUsLabel: "ZONES™ AX / P [SiO]",
    waterlessThemLabel: "Déodorant conventionnel",
    waterlessNote: "Densité d'actifs pure vs dilution aqueuse.",
    scienceEyebrow: "002 / Science Deep-Dive",
    scienceTitle: "Matrice Soda-in-Oil (SiO).",
    scienceBody: "Notre matrice SiO repose sur une technologie Waterless. Au lieu de l'eau, des lipides purs et des actifs bio-engineered transportent le LipidShield Complex™ jusqu'à la barrière — pour une réparation active, pas un masquage de surface.",
    matrixCaption: "Quatre couches. Une architecture.",
    matrixLipid: "Vecteur lipidique · LipidShield Complex™",
    matrixSoda: "Module Soda · régulation pH",
    matrixMineral: "Grille minérale Bavarian Alpine",
    matrixPeptide: "Architecture porteuse anhydre",
    standardsEyebrow: "003 / Standards Checklist",
    standardsTitle: "Ce que nous ne sommes pas.",
    standardsLead: "Un aperçu rapide. ZONES™ dépasse les standards modernes — par propreté technique, pas par mode.",
    standardsRows: [
      { label: "Sans aluminium", note: "Aucun sel d'aluminium. Aucune pseudo-sécheresse." },
      { label: "Sans alcool", note: "Aucun choc solvant pour la barrière." },
      { label: "Waterless", note: "Zéro dilution. Densité d'actifs maximale." },
      { label: "Microbiome friendly", note: "Ne perturbe pas le microbiome axillaire." },
      { label: "Barrier friendly", note: "Soutient l'intégrité — réparation active." },
      { label: "Hormone friendly", note: "Sans composés hormonalement actifs." },
      { label: "Non comédogène", note: "N'obstrue pas les pores — calibré pour le sport." },
    ],
    standardsBetter: "ZONES™",
    standardsStandard: "Marché de masse",
    sustainabilityEyebrow: "004 / Sustainability",
    sustainabilityTitle: "Moins d'eau. Moins de déchets. Plus d'effet.",
    sustainabilityBody: "Waterless signifie moins de volume, moins d'emballage, moins de poids de transport — et aucun conservateur nécessaire pour stabiliser l'eau. Une technologie qui se trouve être verte.",
    sustainabilityStats: [
      { v: "0 %", k: "Eau dans la formule" },
      { v: "10", k: "Modules AX" },
      { v: "04", k: "Phases du protocole" },
    ],
    closingTitle: "Smart : moins, plus précis, plus honnête.",
    closingLead: "Pas d'éco-jargon. Pas de mathématiques marketing. Seulement des actifs qui font leur travail.",
    closingCta: "Ouvrir le portfolio →",
    crossEyebrow: "Objets · Système",
    crossTitle: "Ce qui accompagne le système.",
    crossLead: "Les formules travaillent sur la zone. Les fabrics travaillent sur le reste de la journée : tracksuit, boxer coton-soie, t-shirt base layer et set de serviettes.",
  },
  clubPage: {
    metaTitle: "ZONES CLUB — Accès sur invitation",
    metaDesc: "Aucune cotisation, aucun abonnement. L'accès au ZONES CLUB est ouvert de façon curatée : accès anticipé aux lots, priorité de recharge et dossiers du lab.",
    eyebrow: "ZONES CLUB · Access by invitation",
    titleA: "Aucun prix.", titleB: "Seulement l'accès.",
    lead: "Le ZONES CLUB ne s'achète pas. L'accès est ouvert de façon curatée, en nombre limité par lot. Chaque adhésion est numérotée : aucun abonnement, aucune cotisation.",
    howLabel: "Comment fonctionne l'accès",
    howTitle: "Trois étapes. Aucun paiement.",
    howSteps: [
      { n: "01", t: "Demande", d: "Vous laissez nom, e-mail et votre zone. Pas de compte, pas de paiement." },
      { n: "02", t: "Examen", d: "Nous confrontons les demandes à la capacité du prochain lot. Les codes de parrainage sont prioritaires." },
      { n: "03", t: "Ouverture", d: "À l'ouverture, vous recevez une adhésion numérotée (Member No. 0001 …) et votre fenêtre d'accès." },
    ],
    tiersLabel: "Niveaux",
    tiersTitle: "Mérité, pas acheté.",
    tiers: [
      { name: "LISTED", status: "Ouvert à tous", perks: ["Annonces de lots avant la newsletter", "Alerte de réassort pour votre module", "Aucune cotisation, désinscription libre"] },
      { name: "MEMBER", status: "Débloqué", perks: ["Accès anticipé aux nouveaux lots avant la sortie publique", "Priorité de recharge en disponibilité limitée", "Digest des dossiers sur la formulation et les tests", "Adhésion numérotée"] },
      { name: "INNER LAB", status: "Sur invitation", perks: ["Réservation numérotée Lot 0001", "Accès aux lots d'essai avant la mise sur le marché", "Ligne directe avec le développement des formules", "Voix dans les itérations de formulation"] },
    ],
    formLabel: "Demande d'accès",
    formTitle: "Sur la liste.",
    formLead: "Nous ouvrons l'accès par lot, en nombre limité. Les demandes sont conservées par ordre d'arrivée.",
    name: "Nom", email: "E-mail", interest: "Zone / intérêt", referral: "Code de parrainage", referralHint: "facultatif",
    submit: "Demander l'accès →", sent: "Demande enregistrée ✓",
    sentNote: "Nous revenons vers vous dès qu'une fenêtre d'accès se libère. Aucune confirmation automatique.",
    transparencyLabel: "Transparence",
    transparency: [
      "Aucune cotisation, aucun abonnement, aucune donnée de paiement.",
      "Places limitées par lot — une demande n'est pas une garantie.",
      "Désinscription à tout moment par simple e-mail.",
      "Aucune donnée transmise à des tiers.",
    ],
    closingTitleA: "Chaque adhésion est numérotée.", closingTitleB: "Chaque accès est limité.",
    closingLead: "Le club grandit avec le lab — lot après lot, pas à la carte bancaire. Ceux qui sont dedans voient les formules avant qu'elles deviennent des produits.",
  },

  contactPage: {
    metaTitle: "Contact & Mentions légales — ZONES LAB™",
    metaDesc: "Ligne directe avec le laboratoire. Mentions légales, confidentialité et CGV pour ZONES LAB™.",
    eyebrow: "Ligne Directe · 2026",
    titleA: "Contacter", titleB: "le Laboratoire.",
    channels: "Canaux", mail: "E-mail", press: "Presse", address: "Adresse",
    openLine: "Ouvrir une ligne", name: "Nom", email: "E-mail", subject: "Sujet", message: "Message",
    send: "Envoyer au laboratoire →", sent: "Signal reçu ✓",
    imprint: "Mentions légales", imprintTitle: "Mentions légales · § 5 TMG",
    privacy: "Confidentialité", privacyTitle: "Politique de confidentialité",
    privacyBody: "ZONES LAB™ ne traite que les données nécessaires pour exploiter ce site et répondre aux demandes du laboratoire. Pas de tracking, pas de profilage. Documentation RGPD complète sur demande via lab@zoneslab.com.",
    terms: "CGV", termsTitle: "Conditions générales",
    termsBody: "Toutes les informations produits sont R&D / pre-launch. Les claims finaux, fiches de lot et déclarations d'ingrédients sont émis lors de la sortie du lot. Les prix bundle s'appliquent uniquement aux kits de protocole complets.",
  },
  products: {
    "oat-reset": {
      tagline: "Savon recovery doux pour la peau après l’effort.",
      short: "L’avoine et le karité apaisent la peau irritée sans la décaper.",
      hero: "AX-08 OAT RESET SOAP est un savon recovery doux pour une peau qui doit revenir au calme après l’entraînement et l’effort.",
      description: "L’avoine et le beurre de karité apaisent la peau irritée sans la dessécher. Utilisation en phase RECOVER, après l’entraînement.",
      highlightsTitle: "Bénéfices",
      highlights: [
        "Apaise la peau irritée et stressée après les sessions intenses",
        "Atténue démangeaisons et rougeurs",
        "Soutient la régénération cutanée",
        "Convient aux peaux sensibles et sollicitées",
        "Mousse fine et crémeuse — sans dessèchement",
      ],
      protocol: "Faire mousser sur peau humide, masser délicatement et rincer abondamment. Idéal après l'entraînement ou le soir comme rituel reset.",
      zone: "Corps · Post-Session",
      claim: "Apaise la peau irritée sans la décaper.",
      composition: [
        "Avoine (Avena Sativa) · Beurre de karité",
        "Huiles végétales (olive · colza · ricin)",
        "Parfum naturel lait & miel",
      ],
      spec: [
        { label: "Volume", value: "110 g" },
        { label: "Format", value: "Bloc saponifié à froid" },
        { label: "Usage", value: "Post-session · soir" },
        { label: "Origine", value: "Bavière · DE" },
      ],
      status: "Pré-lancement · Lot 0419",
    },
    "shea-barrier": {
      tagline: "Savon sans parfum à haute teneur en beurre de karité.",
      short: "Une forte concentration de beurre de karité natif pour soutenir la barrière et l’hydratation.",
      hero: "AX-09 SHEA BARRIER SOAP contient une part élevée de beurre de karité natif pour une peau qui a besoin de soutien barrière — sans parfum, doux.",
      description: "Soutient la barrière cutanée et retient l’hydratation sous contrainte. Utilisation en phase RECOVER, pour le visage, le corps et le rasage.",
      highlightsTitle: "Bénéfices",
      highlights: [
        "Renforce la barrière cutanée naturelle",
        "Hydratation intensive",
        "Apaise les peaux sèches et sensibles",
        "Sans parfum — idéal pour peaux sensibles et réactives",
        "Visage, corps et savon de rasage doux",
      ],
      protocol: "Faire mousser sur peau humide et masser. Particulièrement après le sport ou sur peau sèche et sollicitée. Rincer abondamment.",
      zone: "Visage · Corps · Rasage",
      claim: "Soutient la barrière cutanée, retient l’hydratation.",
      composition: [
        "Forte teneur en beurre de karité natif",
        "Huile d'olive · huile de colza",
        "Huile de ricin",
      ],
      spec: [
        { label: "Volume", value: "110 g" },
        { label: "Format", value: "Bloc saponifié à froid" },
        { label: "Profil", value: "Sans parfum" },
        { label: "Origine", value: "Bavière · DE" },
      ],
      status: "Pré-lancement · Lot 0419",
    },
    "pomegranate-glow": {
      tagline: "Savon régénérant à la grenade et à la figue.",
      short: "Les extraits de grenade et de figue soutiennent le renouvellement et un fini sain.",
      hero: "AX-10 POMEGRANATE GLOW SOAP utilise des extraits de grenade et de figue pour soutenir le renouvellement — pour une peau qui cherche le tonus, pas la stimulation.",
      description: "Soutien antioxydant pour un teint équilibré. Utilisation en phase RECOVER, matin ou soir.",
      highlightsTitle: "Bénéfices",
      highlights: [
        "Soutient la régénération naturelle",
        "Raffermit et lisse",
        "Action antioxydante de la grenade",
        "Favorise un teint sain et lumineux",
        "Convient aux peaux exigeantes et mûres",
      ],
      protocol: "Faire mousser délicatement, masser puis rincer après un court temps de pause. De préférence matin ou soir comme rituel glow.",
      zone: "Visage · Corps · Rituel Glow",
      claim: "Soutien antioxydant, fini raffermissant.",
      composition: [
        "Extrait de grenade (Punica Granatum) · figue sauvage",
        "Beurre de karité",
        "Huiles végétales premium",
      ],
      spec: [
        { label: "Volume", value: "110 g" },
        { label: "Format", value: "Bloc saponifié à froid" },
        { label: "Usage", value: "matin · soir" },
        { label: "Origine", value: "Bavière · DE" },
      ],
      status: "Pré-lancement · Lot 0419",
    },
    intense: {
      tagline: "Baume waterless pour la régulation quotidienne des odeurs.",
      short: "Un déodorant en format baume, à pH modulé, pour une demande quotidienne normale à élevée.",
      hero: "AX-01 SODA-IN-OIL DEODORANT BALM est un baume sans eau calibré pour un usage quotidien. Une matrice lipidique transporte le complexe actif sans perturber la couche de surface de la peau.",
      description: "Le système agit par modulation contrôlée du pH et liaison moléculaire, intégrée dans une matrice lipidique. Pour une demande normale à élevée. Sans aluminium.",
      highlightsTitle: "Haute performance, sans compromis",
      highlights: [
        "Contrôle multi-mécanisme des odeurs (pH · enzyme · adsorption)",
        "24–36 heures de neutralisation des odeurs",
        "Fini dry-touch · sans occlusion, sans masque parfumé",
        "100 % sans eau · sans aluminium · sans parfum · vegan",
      ],
      protocol: "Appliquer une fois par jour sur peau propre et sèche. Utiliser HAMAMELIS MIST avant si une étape PREP tonifiante est souhaitée.",
      zone: "Axillaire · Daily Core",
      claim: "Maintient l’équilibre de la peau toute la journée.",
      composition: [
        "Butyrospermum Parkii (Shea) Butter · Candelilla Cera",
        "Ceramide NP · Heptyl Undecylenate",
        "Limnanthes Alba Seed Oil · Squalane",
        "Magnesium Hydroxide · Sodium Bicarbonate",
        "Tocopherol · Triethyl Citrate · Zinc Ricinoleate",
      ],
      spec: [
        { label: "Volume", value: "50 ml" },
        { label: "Format", value: "Pot Violetglass" },
        { label: "Cycle", value: "12 h équilibre" },
        { label: "Origine", value: "Bavière · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "SODA-IN-OIL DEODORANT BALM est le quotidien haute performance pour l'aisselle. Une architecture lipidique sans eau qui maintient le microclimat cutané en équilibre durant les longues journées exigeantes.",
        what: "Un baume daily-core concentré. Pas un antitranspirant, pas un parfum — une Lipid-Buffered Dispersion qui équilibre la chimie de la sueur, la friction et la charge bactérienne pendant 12 heures.",
        how: "Une fois par jour le matin sur peau propre et sèche. Appliquer une petite quantité dans la zone axillaire — pas besoin de masser.",
        who: "Pour les journées actives, longues heures, voyages, chaleur, sport, costume. Quand un déodorant classique abandonne après 4 heures.",
        result: "Sécheresse immédiate sans occlusion. Au fil de la journée : pas de virage olfactif, moins de friction, pas de résidu collant sur le tissu.",
      },
      faq: [
        { q: "Est-ce un déodorant ou un antitranspirant ?", a: "Ni l'un ni l'autre — c'est un module de microclimat. Il ne bloque pas les glandes, il maintient la surface cutanée en équilibre." },
        { q: "Est-ce que ça tache ?", a: "Non. La formule anhydre est sans transfert sur les tissus." },
        { q: "Puis-je l'utiliser quotidiennement ?", a: "Oui, SODA-IN-OIL DEODORANT BALM est calibré pour un usage quotidien." },
      ],
    },
    sensitive: {
      tagline: "Baume waterless pour les peaux sensibles et réactives.",
      short: "La même précision en format baume que l’AX-01, calibrée pour une peau qui demande de la retenue.",
      hero: "AX-02 NEURO-CALM DEODORANT BALM est calibré pour les peaux réactives. Il agit sans parfum et sans occlusion.",
      description: "Le système associe la régulation des odeurs à des lipides apaisants. Pour une demande faible à moyenne et une peau sensible. Sans aluminium.",
      highlightsTitle: "Conçu pour les peaux sensibles",
      highlights: [
        "Régulation douce des odeurs par modulation légère du pH",
        "Matrice lipidique protectrice avec céramides et karité",
        "Utilisable après le rasage · sans brûlure, sans picotement",
        "100 % sans eau · sans parfum · sans alcool · vegan",
      ],
      protocol: "Appliquer une fois par jour. Convient après rasage et après RESET PEELING BALM.",
      zone: "Axillaire · Profil réactif",
      claim: "Réduit la formation d’odeurs sans intervention agressive.",
      composition: [
        "Butyrospermum Parkii (Shea) Butter · Candelilla Cera",
        "Ceramide NP · Heptyl Undecylenate",
        "Limnanthes Alba Seed Oil · Squalane",
        "Magnesium Hydroxide · Tocopherol",
        "Triethyl Citrate · Zinc Ricinoleate",
      ],
      spec: [
        { label: "Volume", value: "50 ml" },
        { label: "Format", value: "Pot Violetglass" },
        { label: "Profil", value: "Réactif" },
        { label: "Origine", value: "Bavière · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "NEURO-CALM DEODORANT BALM est le soin quotidien pour les zones axillaires réactives. Sans parfum, apaisant, pleinement efficace — pour les peaux qui réagissent aux déodorants conventionnels par picotements, rougeurs ou démangeaisons.",
        what: "Un module daily-core anhydre avec un Neuro-Calm Lipid Buffer. Il abaisse la réactivité de surface, soutient la couche lipidique et stabilise le microclimat — sans occlure.",
        how: "Une fois par jour le matin sur peau propre et sèche. Convient directement après le rasage et après RESET PEELING BALM.",
        who: "Pour les peaux sensibles, réactives ou à tendance eczémateuse. Aussi après le rasage, en cas de chaleur ou phases hormonales avec réactivité accrue.",
        result: "Pas de picotement à l'application. Sur 7–14 jours : peau plus calme, réactivité nettement réduite, protection stable sans lourdeur.",
      },
      faq: [
        { q: "Est-ce un antitranspirant ?", a: "Non. NEURO-CALM DEODORANT BALM régule le microclimat mais ne bloque pas les glandes sudoripares." },
        { q: "Fonctionne-t-il après le rasage ?", a: "Oui — il est calibré spécifiquement pour l'usage post-rasage." },
        { q: "Contient-il de l'aluminium ou du parfum ?", a: "Non. Ni l'un ni l'autre." },
      ],
    },
    reset: {
      tagline: "Baume exfoliant waterless pour préparer la peau.",
      short: "Une texture sucre-huile anhydre qui agit mécaniquement, non par les actifs.",
      hero: "AX-03 RESET PEELING BALM élimine les résidus et prépare la peau avant la phase suivante. Pas un geste quotidien — un geste ciblé.",
      description: "Élimine les résidus superflus et prépare la peau aux phases suivantes. Utilisation en phase PREP.",
      highlightsTitle: "L'étape système avant le déodorant",
      highlights: [
        "Sugar-Polish System™ (55 % sucrose) · purement mécanique",
        "Sans acides, enzymes ni tensioactifs",
        "ADN huileux protecteur (identique aux modules déodorants)",
        "100 % sans eau · vegan · sans parfum · seulement 5 INCI",
      ],
      protocol: "1–2× par semaine. Masser sur peau sèche, rincer, faire suivre par SODA-IN-OIL DEODORANT BALM ou NEURO-CALM DEODORANT BALM.",
      zone: "Axillaire · Pré-Engage",
      claim: "Élimine les résidus en un seul passage.",
      composition: [
        "Sucrose (55 %) · Squalane",
        "Limnanthes Alba (Meadowfoam) Seed Oil",
        "Ceramide NP · Tocopherol",
      ],
      spec: [
        { label: "Volume", value: "75 ml" },
        { label: "Format", value: "Pot Violetglass" },
        { label: "Usage", value: "1–2× / semaine" },
        { label: "Origine", value: "Bavière · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "RESET PEELING BALM est le redémarrage hebdomadaire de votre zone axillaire. Une matrice huile-minéral sans eau qui dissout les résidus de déodorant, sueur et friction en un passage et réaligne la surface cutanée.",
        what: "Un baume pré-traitement massable de fines particules minérales dans un porteur huileux. Pas de mousse, pas de tensioactifs, pas d'agression.",
        how: "1–2× par semaine sur peau sèche, masser 30 secondes, rincer à l'eau tiède. Appliquer SODA-IN-OIL DEODORANT BALM ou NEURO-CALM DEODORANT BALM juste après.",
        who: "Pour qui a besoin de clarté entre deux déodorants, après semaines de sport ou chaleur, ou quand l'aisselle se sent encombrée.",
        result: "Peau immédiatement plus lisse et nette. Meilleure absorption des produits daily-core. Moins d'odeur propre au fil de la semaine.",
      },
      faq: [
        { q: "Est-ce un exfoliant ?", a: "Non, c'est un reset mécanique sans acides ni grains agressifs — sans danger pour la barrière." },
        { q: "Puis-je l'utiliser après le rasage ?", a: "Merci d'attendre 24 h après le rasage." },
        { q: "À quelle fréquence ?", a: "1–2× par semaine. Plus n'est pas mieux." },
      ],
    },
    powder: {
      tagline: "Poudre finement dosée pour contrôler l’humidité et la friction.",
      short: "Une poudre minérale ultralégère qui gère l’humidité par la physique, non par les actifs.",
      hero: "AX-04 FINISHING POWDER clôt l’AX Protocol par une couche purement mécanique — sans actifs, sans contournement de la barrière.",
      description: "Clôt le système et réduit la charge mécanique au fil de la journée. Utilisation en phase FINISH.",
      highlightsTitle: "Sec. Confortable. Sous contrôle.",
      highlights: [
        "Absorption Matrix™ avec kaolin et arrow-root",
        "Matité immédiate · réduit les frottements peau contre peau",
        "Pas un antitranspirant · aucun blocage des glandes",
        "100 % sans eau · vegan · sans parfum · seulement 4 INCI",
      ],
      protocol: "Appliquer en couche finale par-dessus SODA-IN-OIL DEODORANT BALM ou NEURO-CALM DEODORANT BALM. À adapter selon le climat ou la tenue.",
      zone: "Axillaire · Couche de finition",
      claim: "Réduire la friction, pas la biologie.",
      composition: [
        "Kaolin · Maranta Arundinacea Root Powder",
        "Magnesium Hydroxide · Tocopherol",
      ],
      spec: [
        { label: "Volume", value: "40 g" },
        { label: "Format", value: "Boîtier Violetglass · disque doré" },
        { label: "Usage", value: "Couche finale · à la demande" },
        { label: "Origine", value: "Bavière · DE" },
      ],
      status: "Pré-lancement · Lot 0419",
      consumer: {
        intro: "FINISHING POWDER est la couche finale invisible. Une poudre minérale ultra-légère qui régule physiquement l'humidité et la friction tout au long de la journée — sans actifs, sans perturber le soin en dessous.",
        what: "Une poudre ultra-fine et non parfumée. Elle se pose comme un voile fin sur SODA-IN-OIL DEODORANT BALM ou NEURO-CALM DEODORANT BALM et lie l'humidité excédentaire.",
        how: "Une petite rotation du dial titane, tapoter dans l'aisselle du bout du doigt ou du tampon. Idéal après l'habillage — juste avant réunions, entraînements, voyages.",
        who: "Pour qui est sujet à la sueur, friction ou marques de transfert — surtout par chaleur, vêtements sombres, workwear ou tissus ajustés.",
        result: "Sensation de peau sèche et lisse pendant des heures. Moins de marques de sueur, moins de friction, sans effet poudré.",
      },
      faq: [
        { q: "Bouche-t-il les pores ?", a: "Non. La matrice minérale est non-occlusive et respirante." },
        { q: "Puis-je l'utiliser seul ?", a: "Oui, mais l'effet complet apparaît en couche finale sur SODA-IN-OIL DEODORANT BALM ou NEURO-CALM DEODORANT BALM." },
        { q: "Tache-t-il les vêtements ?", a: "Non. Clair, ultra-fin, sans résidu sur tissu." },
      ],
    },
    "lip-sculpt": {
      tagline: "Baume à lèvres waterless, structure lipidique plutôt que stimulation.",
      short: "Un baume à lèvres lipidique qui dessine et lisse, sans picotement ni irritation.",
      hero: "AX-07 LIP SCULPT BALM est une formule labiale sans eau — des lèvres dessinées, visiblement plus lisses, sans picotement, brillance ni irritation.",
      description: "Redessine et lisse visiblement, sans picotement ni irritation. Pour le soin quotidien des lèvres, matin et soir.",
      highlightsTitle: "Sculpter au lieu de stimuler",
      highlights: [
        "Surface soft-focus · lissage visible des lignes",
        "Hyaluronate dispersé dans l'huile pour un volume optique",
        "Confort longue durée · non collant",
        "100 % sans eau · vegan · sans huile de palme · respecte la barrière",
      ],
      protocol: "Appliquer en fine couche sur les lèvres, renouveler plusieurs fois par jour si besoin. Plus généreusement le soir en traitement de nuit.",
      zone: "Lèvres · Contour & bordure",
      claim: "Structure, pas stimulation.",
      composition: [
        "Squalane · Butyrospermum Parkii Butter",
        "Limnanthes Alba Seed Oil · Candelilla Cera",
        "Sodium Hyaluronate (oil-dispersed)",
        "Vanilla Planifolia Fruit Extract · Tocopherol",
      ],
      spec: [
        { label: "Volume", value: "15 ml" },
        { label: "Format", value: "Pot Violetglass" },
        { label: "Usage", value: "AM · PM" },
        { label: "Origine", value: "Bavière · DE" },
      ],
      status: "Final · Lot 0419",
      consumer: {
        intro: "LIP SCULPT BALM sculpte les lèvres optiquement — 100 % sans eau, vegan, sans huile de palme et respectueux de la barrière.",
        what: "Un baume lèvres soft-focus : une matrice lipidique réduite avec hyaluronate dispersé en huile pour un lissage visible des ridules et un volume optique.",
        how: "Appliquer en fine couche, renouveler dans la journée si besoin. Plus généreusement le soir en traitement de nuit.",
        who: "Pour les lèvres sensibles et pour qui veut de la structure plutôt que de la brillance — usage quotidien, jamais collant.",
        result: "Une surface soft-focus, des ridules visiblement lissées et des lèvres d'aspect plus pleines — avec un confort longue durée.",
      },
      faq: [
        { q: "Est-ce un gloss ?", a: "Non. Pas un film brillant mais un baume structurant au fini mat." },
        { q: "Puis-je mettre du rouge à lèvres par-dessus ?", a: "Oui. Laisser pénétrer 2 minutes, puis maquiller normalement." },
        { q: "Combien de fois par jour ?", a: "Deux fois en rituel, plus après exposition." },
      ],
    },
    "hamamelis-mist": { tagline: "Une brume tonique mono-ingrédient, distillée pure.", short: "Hydrolat pur d’hamamélis qui tonifie et prépare la peau sans alcool, dilution ni additif.", hero: "AX-05 HAMAMELIS MIST est une brume tonique mono-ingrédient, distillée pure et sans alcool.", description: "Un hydrolat mono-ingrédient — Hamamelis Virginiana Leaf Water, sans alcool, distillé une fois et laissé intact. Première étape avant la phase de stabilisation, il prépare et tonifie sans ingrédient superflu, dilution, additif ni parfum ajouté.", highlightsTitle: "Distillé pur", highlights: ["100 % Hamamelis Virginiana Leaf Water", "Formule mono-ingrédient", "Distillation sans alcool", "Étape PREP avant Neuro-Calm"], protocol: "Vaporiser sur peau propre, laisser poser brièvement, puis appliquer NEURO-CALM.", zone: "Visage · Cou · Zone de rasage", claim: "Distillé une fois. Laissé intact.", composition: ["Hamamelis Virginiana (Witch Hazel) Leaf Water"], spec: [{ label: "Volume", value: "100 ml" }, { label: "Format", value: "Flacon spray Miron Violetglass" }, { label: "Usage", value: "PREP · avant Neuro-Calm" }, { label: "Origine", value: "Bavière · DE" }], status: "Pre-launch · Lot 0419" },
    "pre-shave-oil": { tagline: "L’étape avant la lame.", short: "Un complexe huileux léger qui crée une glisse contrôlée et réduit la friction de la lame.", hero: "AX-06 PRE-SHAVE OIL forme une couche de glisse contrôlée avant le passage de la lame.", description: "Une huile pré-rasage légère — argan et jojoba créent la glisse, le squalane stabilise le film et le tocophérol protège du stress oxydatif. Associée à l’étape de récupération post-rasage, elle ferme la boucle de la préparation à la réparation.", highlightsTitle: "Avant la lame", highlights: ["Complexe argan + jojoba", "Film de glisse stabilisé au squalane", "Réduit la friction de la lame", "Étape PREP avant le rasage"], protocol: "Masser quelques gouttes sur peau propre et humide avant le rasage, puis appliquer l’étape de récupération.", zone: "Visage · Cou · Zone de rasage", claim: "L’étape avant la lame.", composition: ["Argania Spinosa Kernel Oil · Simmondsia Chinensis Seed Oil", "Squalane · Tocopherol"], spec: [{ label: "Volume", value: "50 ml" }, { label: "Format", value: "Flacon compte-gouttes Miron Violetglass" }, { label: "Usage", value: "PREP · avant rasage" }, { label: "Origine", value: "Bavière · DE" }], status: "Pre-launch · Lot 0419" },
  },
  bundle: { name: "THE AX PROTOCOL", short: "L'entrée dans le protocole : PREP · ENGAGE · RECOVER · FINISH — quatre modules quotidiens. Hamamelis Mist, Pre-Shave Oil et Lip Sculpt Balm complètent le rituel de façon ciblée." },
  shield: {
    "tracksuit": {
      tagline: "Hydrolat d’hamamélis distillé, sans alcool.",
      description: "Un ingrédient, pas une formule — eau végétale pure comme étape tonique avant la stabilisation. Utilisation en phase PREP.",
      benefits: ["Coton bio 480 g/m²", "Coupe unisexe oversize · épaules tombantes", "Intérieur gratté", "Prérétréci · lavable à 40 °C"],
    },
    "zone-boxers": {
      tagline: "Boxer sans friction pour la zone réactive.",
      description: "Un boxer unisexe en mélange coton-soie, jambe ample et ceinture douce gainée — conçu pour réduire la friction mécanique plutôt que la masquer. La soie apporte la surface à faible friction sur la zone réactive ; le coton bio en dessous gère l’humidité et la respirabilité. Coutures plates sur l’ensemble — aucun point d’irritation, aucune marque de pression. Pour le sport, le voyage et la peau sous charge quotidienne.",
      benefits: ["Mélange coton-soie · friction de surface réduite", "Coupe boxer unisexe ample · ceinture gainée", "Coutures plates · sans irritation", "Profil sport & peau sensible"],
    },
    "towel-set": {
      tagline: "Coton blanc neutre — grand format et format sport.",
      description: "Un ensemble de deux serviettes en coton longues fibres blanc neutre : un drap de bain surdimensionné de 100 × 180 cm et une petite serviette de sport de 40 × 90 cm pour le sac, le court ou la trousse de voyage. Éponge double torsion de 700 g/m², peu pelucheuse, à séchage rapide, ourlet renforcé portant le patch drapeau ZONES FABRICS tissé en blanc et or — la même marque que le tracksuit, le boxer et le tee.",
      benefits: ["Éponge de coton longues fibres 700 g/m²", "Drap de bain 100 × 180 cm + serviette sport 40 × 90 cm", "Blanc neutre · patch drapeau ZONES FABRICS tissé", "Peu pelucheuse · séchage rapide · lavable à 60 °C"],
    },
    "zone-tee": {
      tagline: "Couche de base unisexe oversize avec gousset axillaire.",
      description: "Un t-shirt unisexe oversize pensé comme véritable couche de base : un gousset dédié à la zone axillaire gère l’humidité exactement là où le protocole AX agit sur la peau. Jersey épais, épaules tombantes, coupe volontairement ample. Sous le tracksuit, sous n’importe quelle couche — ou seul.",
      benefits: ["Gousset sous les bras", "Coupe unisexe oversize · épaules tombantes", "Jersey épais régulateur d’humidité", "Prérétréci · lavable à 40 °C"],
    },
  },
  carry: {
    "travel-case": {
      tagline: "Le protocole, prêt à partir.",
      description: "Un étui de soin zippé en toile technique déperlante à bords en cuir noir — le même beige sable que la Hand Clutch. Au format de tout l'AX Protocol, doublure nettoyable, unisexe.",
      features: ["Format 24 × 17 × 6 cm", "Toile technique déperlante", "Bords en cuir noir · zip métal", "Doublure nettoyable · contient l'AX Protocol"],
    },
    "hand-clutch": {
      tagline: "Petit format, pleine allure.",
      description: "Une pochette plate à porter à la main : toile technique beige sable, bords et coins en cuir noir, dragonne en cuir amovible. À l’intérieur, un porte-cartes et la place d’un module AX.",
      features: ["Format main 26 × 18 × 3 cm", "Toile technique · bords cuir", "Dragonne amovible", "Porte-cartes · unisexe"],
    },
  },
};

/* =================== IT =================== */
const it: Dict = {
  blueprint: { title: "Disegno tecnico", tech: "Tecnologia", material: "Materiale", measure: "Misura" },
  exploded: { eyebrow: "Costruzione", title: "Vista esplosa.", lead: "Tre componenti, un sistema. Scorrendo, coperchio, corpo e nucleo attivo si separano — e si ricompongono alla fine.", hint: "Scorri", cap: "Coperchio", body: "Corpo", core: "Nucleo attivo" },
  zoneMap: { eyebrow: "Zone", title: "Scegli per zona.", lead: "Ogni zona ha esigenze proprie. Passa sopra una zona — il protocollo mostra i moduli adatti.", hint: "Scegli una zona", zones: { axilla: "Ascelle", face: "Viso & collo", body: "Corpo & gambe" }, cta: "Apri il modulo →" },
  nav: { home: "ZONES", products: "Collezione", signature: "Signature", accessories: "Accessori", journal: "Journal", art: "Art Collab", protocol: "Sistema", shield: "Fabrics", club: "Community", contact: "Contatti", shop: "Shop", menu: "Menu", carry: "Carry", smart: "Tecnologia", language: "Lingua" },
  footer: {
    tagline: "Applied Lipid Science · Microclima Ascellare",
    blurb: "Sviluppato in Baviera. Formulato per supportare la barriera lipidica e mantenere l'equilibrio del microclima attraverso i cicli di esposizione quotidiani.",
    system: "Sistema", lab: "Laboratorio", legal: "Area legale", imprint: "Note legali", withdrawal: "Recesso", privacy: "Privacy", terms: "Termini", shippingPayment: "Spedizione & pagamento",
    rights: "Tutti i diritti riservati", origin: "Made in Bavaria · Clinically Engineered",
  },
  common: {
    addToCart: "Aggiungi al carrello", addedToCart: "aggiunto al carrello (anteprima)", learnMore: "Scopri di più",
    openDossier: "Apri dossier →", next: "Avanti", back: "Indietro", viewPortfolio: "Vedi il portfolio",
    enterProtocol: "Entra nel protocollo →", fullPortfolio: "Portfolio completo →", readTechnology: "Leggi la tecnologia →",
    enterShield: "Scopri Fabrics →", joinClub: "Richiedi accesso →", contactLab: "Contatta il laboratorio →",
    returnPortfolio: "Torna al portfolio AX →", openModule: "Apri dossier modulo →",
    addBundleToCart: "Aggiungi bundle al carrello →", scroll: "Scorri", phase: "Fase", module: "Modulo",
    technology: "Tecnologia", claim: "Claim", composition: "Composizione", protocolLabel: "Protocollo",
    specs: "Specifiche", heroMechanism: "Meccanismo principale", techComplex: "Tech / Complesso", zone: "Zona",
    notFoundTitle: "Segnale perso", notFoundLead: "Il protocollo richiesto è al di fuori di questo sistema.",
    notFoundCta: "Torna al laboratorio", signalLost: "Segnale perso", skuNotFound: "SKU non trovato",
    backPortfolio: "Torna al portfolio", preorder: "Disponibile · Lot 0419", colorLabel: "Colore",
    inPlainWords: "In parole semplici", whatItIs: "Cos'è", howToUse: "Come si usa", whoItsFor: "Per chi è", whatYouGet: "Cosa noti", faqTitle: "Domande frequenti",
    relatedModules: "Altri moduli", standardsTitle: "Standard", inProtocol: "Nel protocollo", backToCollection: "Torna alla collezione", preorderNow: "Preordina ora", ingredientsTitle: "Attivi", ingredientsHead: "Cosa contiene — e perché.", ingredientsLead: "Ogni materia prima ha un compito. Qui trovi il nome INCI, il nome comune e il beneficio in una frase.", ingredientsNote: "Dati INCI secondo la formulazione attuale. Claim cosmetici — nessuna promessa medica.", claimsHead: "Standard validi per ogni modulo.",
  },
  home: {
    metaTitle: "ZONES LAB™ — AX PROTOCOL · Applied Lipid Science",
    metaDesc: "AX PROTOCOL di Zones Lab. Lipid-Buffered Dispersion ingegnerizzata per supportare l'integrità della barriera e mantenere l'equilibrio del microclima ascellare.",
    systemOnline: "Sistema online · Baviera · 2026",
    heroLine1: "ZONES", heroLine2: "LAB™",
    heroIntro: "Sei linee ordinate con chiarezza: AX Cosmetics per la cura funzionale, OLF-01 come firma olfattiva, ZONES Fabrics per la performance tessile, Superfood caffè per l’origine, Accessories per il rituale e ZONES × REZA per l’arte.",
    heroRef: "Riferimento",
    heroPrimary: "Avvia il sistema", heroSecondary: "Capire AX Protocol",
    routeEyebrow: "002 / Assortimento", routeTitle: "Scegli il tuo ingresso.", routeLead: "Quattro linee chiaramente separate. Ognuna ha un compito e un percorso diretto al prodotto giusto.",
    routeCards: [
      { eyebrow: "Applied Lipid Science", title: "AX COSMETICS", body: "Dieci moduli funzionali in quattro fasi, dalla preparazione al finish.", cta: "Vedi la collezione" },
      { eyebrow: "Parfum · fuori sistema", title: "OLF-01 SIGNATURE", body: "Una firma olfattiva in due raggi. Indossata, non dosata.", cta: "Scopri Signature" },
      { eyebrow: "Applied Fiber Science", title: "ZONES FABRICS", body: "Quattro oggetti tessili per pelle, movimento e recupero.", cta: "Scopri Fabrics" },
      { eyebrow: "Sourced in Europe", title: "ACCESSORIES", body: "Oggetti curati in legno d'ulivo, porcellana e acciaio.", cta: "Vedi accessori" },
    ],
    coreTitleA: "Il tuo ingresso.", coreTitleB: "Due profili.", coreLead: "INTENSE per carichi elevati. SENSITIVE per la pelle reattiva. Entrambi formano il nucleo quotidiano dell'AX Protocol.",
    assortmentTitle: "Altri tre mondi.", assortmentLead: "Profumo, tessuti e oggetti rituali curati — autonomi, senza diluire la logica dell'AX Protocol.",
    sectionHero: "001 / Hero", sectionManifesto: "002 / Manifesto", sectionTech: "003 / Soluzione",
    sectionProtocol: "004 / Protocollo", sectionPortfolio: "005 / Portfolio", sectionShield: "006 / Fabrics",
    sectionBundle: "◆ Il Sistema", sectionClub: "007 / ZONES CLUB",
    manifestoTitle: { a: "La pelle tra movimento e quiete è un ", alpine: "microclima", b: " vivente — non un problema da silenziare." },
    manifestoBody1: "I sistemi convenzionali shockano la barriera. Mascherano. Strippano. Forzano un singolo segnale attraverso un'interfaccia viva progettata per la sfumatura.",
    manifestoBody2: "AX PROTOCOL è costruito sulla misura. Architettura anidra, Lipid-Buffered Dispersion e Zero-Shock Technology — formulati per supportare la barriera, non superarla.",
    manifestoLead: "Il Problema · §01 — §03",
    techTitleA: "Zero-Shock", techTitleB: "Technology",
    techLead: "Tre moduli ingegnerizzati — Lipid-Buffered Dispersion, l'Hydrophobic Gate e la griglia minerale Bavarian Alpine — operanti come un'unica architettura continua.",
    techStats: [
      { v: "98,4 %", k: "Indice integrità lipidica", n: "Giorno 14 in vitro" },
      { v: "12 h", k: "Finestra time-release", n: "Ciclo di equilibrio" },
      { v: "Δ 0,6 °C", k: "Stabilità del microclima", n: "vs protocollo di controllo" },
    ],
    protocolTitleA: "Quattro fasi.", protocolTitleB: "Un equilibrio.",
    protocolSteps: [
      { n: "01", t: "PREP", d: "Resetta il microclima. Stato Blank Canvas." },
      { n: "02", t: "ENGAGE", d: "Daily Core. Finestra di equilibrio di 12 ore." },
      { n: "03", t: "RECOVER", d: "LipidShield rinforza. Ritorno alla baseline." },
      { n: "04", t: "FINISH", d: "Fisica, non biologia. Asciutto, setoso, senza attrito." },
    ],
    portfolioTitleA: "Sette moduli.", portfolioTitleB: "Un'architettura.",
    portfolioLead: "SODA-IN-OIL DEODORANT BALM · NEURO-CALM DEODORANT BALM · RESET PEELING BALM · FINISHING POWDER · HAMAMELIS MIST · PRE-SHAVE OIL · LIP SCULPT BALM. Architettura lungo l'intero ciclo dell'AX Protocol.",
    shieldTitlePre: "ZONES", shieldTitleMid: "| FABRICS", shieldTitleEnd: "Applied Fiber Science.",
    shieldLead: "Tre oggetti unisex dal taglio leggermente oversize: la tuta in cotone biologico 480 gsm, gli Zone Boxers in cotone-seta e la Zone Tee con tassello ascellare.",
    bundleSaves: (n) => `Risparmia €${n}`,
    clubTitleA: "Nessun prezzo.", clubTitleB: "Solo accesso.",
    clubLead: "Lo ZONES CLUB è su invito: nessuna quota, nessun abbonamento. Membership numerate, posti limitati per lot — accesso anticipato, priorità sui refill, dossier di laboratorio.",
    archiveEyebrow: "004 / Archivio",
    archiveTitle: "L’archivio visivo.",
    archiveLead: "Quattro linee, un clima. Ciò che tocca la pelle, ciò che la ricopre — e ciò che segue i rituali.",
    archiveQuoteTitle: "Qualità sistemica",
    archiveQuoteBody: "Un linguaggio visivo per il mondo fisico — sviluppato dalla ricerca sui materiali, non dalla decorazione.",
    archiveItemLabels: ["01. Signature", "02. Fabrics", "03. Accessories", "04. Cosmetics"],
    archiveItemQuotes: ["Heritage", "Applied Fiber Science", "Curated Objects", "The tactile ritual of high performance."],

  },
  productsPage: {
    metaTitle: "Prodotti — ZONES LAB™ AX Protocol",
    metaDesc: "Dieci prodotti in quattro fasi: balsami deodoranti, reset, saponi recovery, finishing powder, hamamelis mist, pre-shave oil e lip balm.",
    eyebrow: "Portfolio · 2026",
    titleA: "Dieci prodotti.", titleB: "Quattro fasi chiare.",
    lead: "Inizia con Intense o Sensitive. Aggiungi poi solo ciò che serve alla tua routine — PREP · ENGAGE · RECOVER · FINISH.",
    systemCore: "CUORE DEL SISTEMA",
    startHere: "INIZIA QUI",
    refillBadge: "RICARICA",
    refillAction: "RICARICARE",
    emptyCategory: "Nessun prodotto in questa categoria.",
    categories: { all: "Tutti", performance: "Applicare", sensitive: "Sensibile", prep: "Preparare", repair: "Recupero", recovery: "Recovery Soaps", finish: "Finish" },
    bundleEyebrow: "◆ Bundle",
    bundleSaves: (n) => `Risparmia €${n}`,
    finder: {
      cta: "Trova il tuo modulo",
      title: "Tre domande. Due o tre consigli.",
      hint: "Scegli zona, tipo di pelle e obiettivo — mostriamo i moduli adatti.",
      close: "Chiudi",
      reset: "Reimposta",
      resultLabel: "Consiglio",
      empty: "Rispondi a tutte e tre le domande.",
      zoneLabel: "Zona",
      zone: { axilla: "Ascelle", face: "Viso & collo", body: "Corpo & gambe" },
      skinLabel: "Pelle",
      skin: { robust: "Robusta", sensitive: "Sensibile", dry: "Secca" },
      goalLabel: "Obiettivo",
      goal: { fresh: "Freschezza quotidiana", recover: "Recupero", finish: "Levigatezza & finish" },
      reasons: {
        intense: "Per carichi elevati — microclima stabile tutto il giorno.",
        sensitive: "Senza profumo e lenitivo per zone reattive.",
        reset: "Prepara la zona ed elimina i residui in un solo passaggio.",
        powder: "Riduce attrito e umidità — meccanicamente, senza attivi.",
        "lip-sculpt": "Illusione ottica di volume grazie al design lipidico — scolpire invece di stimolare.",
        "hamamelis-mist": "Idrolato puro di amamelide come fase PREP tonificante.",
        "pre-shave-oil": "Scorrevolezza controllata e minore attrito prima della rasatura.",
      },
    },
  },
  productDetail: { nextModule: "Modulo successivo", metaSuffix: "ZONES LAB™" },
  signature: {
    tagline: "Una formula. Due portate.",
    hero: "OLF-01 è il suono dell’architettura olfattiva ZONES quando viene indossata, non dosata. La stessa logica ingegneristica dell’AX Protocol — vetiver, legno di cedro, olibano — portata a intensità parfum invece che in concentrazione di tracce. Due portate di una firma: una progettata per raggiungere la stanza, una per restare esattamente dove viene applicata.",
    description: "L’AX Protocol misura OLF-01 in frazioni di percentuale. Qui è portato al 20% — intensità parfum, non un’aggiunta profumata secondaria. Entrambe le portate condividono lo stesso accordo centrale. A separarle è il raggio: quanto lontano la firma è progettata per viaggiare prima di svanire.",
    protocol: "Applicare sui punti di pulsazione o stratificare sopra qualsiasi prodotto AX Protocol. A differenza dei moduli funzionali, OLF-01 non ha un ruolo PREP, ENGAGE, RECOVER o FINISH — indossalo da solo quando vuoi che la firma parli.",
    variantsLabel: "Scegli la portata", selectVariant: "Seleziona variante", compositionLabel: "Composizione",
    comparisonTitle: "Quale portata fa per te?", comparisonLead: "Lo stesso accordo centrale, un raggio diverso. Scegli in base alla situazione, non alla famiglia olfattiva.",
    comparisonRows: [{ label: "Raggio", broadcast: "Riempie la stanza", skinClose: "Vicino alla pelle" }, { label: "Diffusione", broadcast: "Iso E Super + Ambroxan", skinClose: "Ridotta" }, { label: "Traccia di oud", broadcast: "Presente", skinClose: "Assente" }, { label: "Ideale per", broadcast: "Sera · ingresso · presenza", skinClose: "Giorno · vicinanza · discrezione" }],
    variants: {
      broadcast: { name: "BROADCAST", tagline: "Creato per farsi notare. Accordo pieno, raggio completo.", description: "Il motore è acceso. La traccia di oud resta intatta, Iso E Super e Ambroxan portano l’accordo oltre il tuo perimetro — questa è la formula che risponde al brief originale: le persone entrano nel profumo prima di vederti." },
      "skin-close": { name: "SKIN-CLOSE", tagline: "La stessa firma, tenuta vicina. Per le stanze, non per le passerelle.", description: "Lo stesso accordo, progettato verso il basso anziché verso l’esterno. La traccia di oud è rimossa, il motore di diffusione spento — restano vetiver, legno di cedro e olibano direttamente sulla pelle, con un raggio misurato in centimetri, non in stanze. Creato per le ore tra il vestirsi e l’uscire dalla porta, non per l’ingresso in sé." },
    },
  },
  accessoriesPage: accessoryTranslations.it.page,
  accessories: accessoryTranslations.it.items,
  protocolPage: {
    metaTitle: "Il Protocollo & la Tecnologia — ZONES LAB™",
    metaDesc: "PREP · ENGAGE · RECOVER · FINISH. Quattro fasi, sette moduli. Lipid-Buffered Dispersion, Hydrophobic Gate, matrice Soda-in-Oil — l'architettura completa dell'AX System.",
    eyebrow: "Il Protocollo · 2026",
    titleA: "Quattro fasi.", titleB: "Un equilibrio.",

    lead: "L'AX Protocol è un'unica architettura continua — Lipid-Buffered Dispersion, l'Hydrophobic Gate e la griglia minerale Bavarian Alpine operano come un unico framework di barriera.",
    architecture: "Architettura",
    architectureTitleA: "Lipid-Buffered Dispersion.",
    architectureTitleB: "Un framework di barriera continuo.",
    architectureModules: [
      { t: "Hydrophobic Gate", d: "Architettura di passaggio selettivo allineata allo strato lipidico di superficie." },
      { t: "Lipid-Buffered Dispersion", d: "Matrice carrier anidra che veicola gli attivi senza shock idrico." },
      { t: "Bavarian Alpine Mineral Grid", d: "Framework minerale calibrato sul microclima ascellare." },
    ],
    openPortfolio: "Apri il portfolio →",
    steps: [
      { title: "Resetta il microclima.", body: "AX-03 RESET PEELING BALM rimuove i residui e riallinea lo strato lipidico di superficie in un singolo passaggio. Lo stato Blank Canvas — il prerequisito per ENGAGE." },
      { title: "Daily Core. Equilibrio 12 ore.", body: "AX-01 SODA-IN-OIL DEODORANT BALM o AX-02 NEURO-CALM DEODORANT BALM veicolano la matrice attiva attraverso l'Hydrophobic Gate. Time-released, anidra, totalmente allineata alla barriera." },
      { title: "Preparare e tonificare.", body: "AX-05 HAMAMELIS MIST prepara la pelle alla stabilizzazione con un idrolato puro e senza alcol." },
      { title: "Prima della lama.", body: "AX-06 PRE-SHAVE OIL crea scorrevolezza controllata con argan, jojoba e squalano." },
    ],

  },
  shieldPage: {
    metaTitle: "ZONES FABRICS — Applied Fiber Science",
    metaDesc: "ZONES FABRICS: scienza applicata della fibra per movimento e rigenerazione. Tracksuit oversize, boxer cotone-seta, t-shirt base layer e set di spugne.",
    eyebrow: "ZONES | FABRICS",
    claim: "Applied Fiber Science · Scienza applicata della fibra",
    titleA: "ZONES",
    titleB: "FABRICS",
    lead: "Quattro oggetti tessili per movimento, riposo e rigenerazione: un tracksuit oversize in cotone biologico 480 g/m², un boxer cotone-seta con cuciture piatte, una t-shirt base layer con gusset ascellare e il set di spugne in 700 g/m².",
    closingTitle: "Fabrics che lavorano con la pelle.", quickNav: "Vai al prodotto",
  },
  carryPage: {
    metaTitle: "ZONES | CARRY — Oggetti quotidiani",
    metaDesc: "Astuccio da viaggio con zip e pochette abbinata in canvas tecnico beige sabbia con bordi in pelle nera.",
    eyebrow: "ZONES | CARRY",
    titleA: "Carry.",
    titleB: "Per il viaggio.",
    lead: "Due oggetti che accompagnano il protocollo: un astuccio da viaggio per portarlo e una pochette abbinata nello stesso beige sabbia. Fatti per durare.",
    closingTitle: "Carry che viene con te.",
  },
  smartPage: {
    metaTitle: "Smart — Waterless by Design · ZONES LAB™",
    metaDesc: "Matrice Soda-in-Oil (SiO) · Waterless · Senza alluminio · Hormone friendly · Microbiome friendly. Alta performance che è anche sostenibile.",
    eyebrow: "Smart · Waterless by Design",
    titleA: "High Performance.",
    titleB: "Senza acqua. Punto.",
    lead: "Non diluiamo le formule con acqua. Ogni grammo di ZONES™ è pura performance — più efficiente per la pelle, migliore per il pianeta.",
    efficiencyEyebrow: "001 / Efficiency Statement",
    efficiencyTitle: "Waterless by Design.",
    efficiencyBody: "Le formule convenzionali usano l’acqua come vettore. Noi costruiamo diversamente: attivi selezionati in una matrice Soda-in-Oil (SiO), senza acqua e strutturata per funzione.",
    waterlessChartTitle: "Contenuto d'acqua per grammo di formula",
    waterlessUsLabel: "ZONES™ AX / P [SiO]",
    waterlessThemLabel: "Deodorante convenzionale",
    waterlessNote: "Densità di attivi pura vs diluizione acquosa.",
    scienceEyebrow: "002 / Science Deep-Dive",
    scienceTitle: "Matrice Soda-in-Oil (SiO).",
    scienceBody: "La nostra matrice SiO è basata su tecnologia Waterless. Al posto dell'acqua, lipidi puri e attivi bio-engineered trasportano il LipidShield Complex™ alla barriera — per riparazione attiva, non mascheramento.",
    matrixCaption: "Quattro strati. Un'architettura.",
    matrixLipid: "Vettore lipidico · LipidShield Complex™",
    matrixSoda: "Modulo Soda · regolazione pH",
    matrixMineral: "Griglia minerale Bavarian Alpine",
    matrixPeptide: "Architettura vettore anidra",
    standardsEyebrow: "003 / Standards Checklist",
    standardsTitle: "Ciò che non siamo.",
    standardsLead: "Una rapida panoramica. ZONES™ supera gli standard moderni — per pulizia tecnica, non per moda.",
    standardsRows: [
      { label: "Senza alluminio", note: "Nessun sale di alluminio. Nessuna pseudo-secchezza." },
      { label: "Senza alcool", note: "Nessuno shock solvente alla barriera." },
      { label: "Waterless", note: "Zero diluizione. Massima densità di attivi." },
      { label: "Microbiome friendly", note: "Non disturba il microbioma ascellare." },
      { label: "Barrier friendly", note: "Supporta l'integrità — riparazione attiva." },
      { label: "Hormone friendly", note: "Senza composti ormonalmente attivi." },
      { label: "Non comedogenico", note: "Non ostruisce i pori — calibrato per lo sport." },
    ],
    standardsBetter: "ZONES™",
    standardsStandard: "Mercato di massa",
    sustainabilityEyebrow: "004 / Sustainability",
    sustainabilityTitle: "Meno acqua. Meno rifiuti. Più effetto.",
    sustainabilityBody: "Waterless significa meno volume, meno imballaggio, meno peso — e nessun conservante per stabilizzare l'acqua. Tecnologia che è anche verde.",
    sustainabilityStats: [
      { v: "0 %", k: "Acqua nella formula" },
      { v: "10", k: "Moduli AX" },
      { v: "04", k: "Fasi del protocollo" },
    ],
    closingTitle: "Smart: meno, più preciso, più onesto.",
    closingLead: "Niente eco-gergo. Niente matematica di marketing. Solo attivi che fanno il loro lavoro.",
    closingCta: "Apri il portfolio →",
    crossEyebrow: "Oggetti · Sistema",
    crossTitle: "Ciò che accompagna il sistema.",
    crossLead: "Le formule lavorano sulla zona. I fabrics lavorano sul resto della giornata: tracksuit, boxer cotone-seta, t-shirt base layer e set di spugne.",
  },
  clubPage: {
    metaTitle: "ZONES CLUB — Accesso su invito",
    metaDesc: "Nessuna quota, nessun abbonamento. L'accesso al ZONES CLUB viene rilasciato in modo curato: early access ai nuovi lot, priorità di refill e dossier del lab.",
    eyebrow: "ZONES CLUB · Access by invitation",
    titleA: "Nessun prezzo.", titleB: "Solo accesso.",
    lead: "Il ZONES CLUB non si compra. L'accesso viene rilasciato in modo curato, in numero limitato per lot. Ogni membership è numerata: nessun abbonamento, nessuna quota.",
    howLabel: "Come funziona l'accesso",
    howTitle: "Tre passi. Nessun checkout.",
    howSteps: [
      { n: "01", t: "Richiesta", d: "Lasci nome, email e la tua zona. Nessun account, nessun pagamento." },
      { n: "02", t: "Verifica", d: "Confrontiamo le richieste con la capacità del prossimo lot. I codici referral hanno priorità." },
      { n: "03", t: "Rilascio", d: "Al rilascio ricevi una membership numerata (Member No. 0001 …) e la tua finestra di accesso." },
    ],
    tiersLabel: "Livelli",
    tiersTitle: "Guadagnato, non comprato.",
    tiers: [
      { name: "LISTED", status: "Aperto a tutti", perks: ["Annunci dei lot prima della newsletter", "Alert di restock per il tuo modulo", "Nessuna quota, disiscrizione libera"] },
      { name: "MEMBER", status: "Sbloccato", perks: ["Early access ai nuovi lot prima del rilascio pubblico", "Priorità di refill in caso di disponibilità limitata", "Digest dei dossier su formulazione e test", "Membership numerata"] },
      { name: "INNER LAB", status: "Su invito", perks: ["Prenotazione numerata Lot 0001", "Accesso ai batch di test prima del mercato", "Linea diretta con lo sviluppo formulativo", "Voce nelle iterazioni di formulazione"] },
    ],
    formLabel: "Richiesta di accesso",
    formTitle: "In lista.",
    formLead: "Apriamo l'accesso per ogni lot in numero limitato. Le richieste restano valide in ordine di arrivo.",
    name: "Nome", email: "Email", interest: "Zona / interesse", referral: "Codice referral", referralHint: "opzionale",
    submit: "Richiedi accesso →", sent: "Richiesta registrata ✓",
    sentNote: "Ti scriviamo appena si libera una finestra di accesso. Nessuna conferma automatica.",
    transparencyLabel: "Trasparenza",
    transparency: [
      "Nessuna quota, nessun abbonamento, nessun dato di pagamento.",
      "Posti limitati per lot — la richiesta non è una garanzia.",
      "Disiscrizione in qualsiasi momento con una email.",
      "Nessuna condivisione dei dati con terzi.",
    ],
    closingTitleA: "Ogni membership è numerata.", closingTitleB: "Ogni accesso è limitato.",
    closingLead: "Il club cresce con il lab — lot dopo lot, non con la carta di credito. Chi è dentro vede le formulazioni prima che diventino prodotti.",
  },

  contactPage: {
    metaTitle: "Contatti & Note legali — ZONES LAB™",
    metaDesc: "Linea diretta con il laboratorio. Note legali, privacy e termini per ZONES LAB™.",
    eyebrow: "Linea Diretta · 2026",
    titleA: "Contatta", titleB: "il Laboratorio.",
    channels: "Canali", mail: "Mail", press: "Stampa", address: "Indirizzo",
    openLine: "Apri una linea", name: "Nome", email: "E-mail", subject: "Oggetto", message: "Messaggio",
    send: "Invia al laboratorio →", sent: "Segnale ricevuto ✓",
    imprint: "Note legali", imprintTitle: "Note legali · § 5 TMG",
    privacy: "Privacy", privacyTitle: "Informativa sulla privacy",
    privacyBody: "ZONES LAB™ tratta esclusivamente i dati necessari a far funzionare questo sito e rispondere alle richieste del laboratorio. Nessun tracking, nessuna profilazione. Documentazione GDPR completa su richiesta tramite lab@zoneslab.com.",
    terms: "Termini", termsTitle: "Termini e condizioni",
    termsBody: "Tutte le informazioni sui prodotti sono R&D / pre-launch. Claim finali, batch sheet e dichiarazioni degli ingredienti sono emessi al rilascio del lot. I prezzi bundle si applicano solo ai kit di protocollo completi.",
  },
  products: {
    "oat-reset": {
      tagline: "Sapone recovery delicato per la pelle dopo il carico.",
      short: "Avena e karité calmano la pelle irritata senza aggredirla.",
      hero: "AX-08 OAT RESET SOAP è un sapone recovery delicato per una pelle che deve tornare in quiete dopo allenamento e carico.",
      description: "Avena e burro di karité calmano la pelle irritata senza seccarla. Impiego nella fase RECOVER, dopo l’allenamento.",
      highlightsTitle: "Benefici",
      highlights: [
        "Calma la pelle irritata e stressata dopo sessioni intense",
        "Allevia prurito e rossori",
        "Sostiene la rigenerazione cutanea",
        "Adatto a pelli sensibili e sollecitate",
        "Schiuma cremosa e fine — senza secchezza",
      ],
      protocol: "Far schiumare sulla pelle bagnata, massaggiare delicatamente e risciacquare a fondo. Ideale dopo l'allenamento o la sera come rituale reset.",
      zone: "Corpo · Post-Session",
      claim: "Calma la pelle irritata senza aggredirla.",
      composition: [
        "Avena (Avena Sativa) · Burro di karité",
        "Oli vegetali (oliva · colza · ricino)",
        "Profumo naturale latte e miele",
      ],
      spec: [
        { label: "Volume", value: "110 g" },
        { label: "Formato", value: "Blocco a freddo" },
        { label: "Uso", value: "Post-session · sera" },
        { label: "Origine", value: "Baviera · DE" },
      ],
      status: "Pre-lancio · Lot 0419",
    },
    "shea-barrier": {
      tagline: "Sapone senza profumo con alta percentuale di burro di karité.",
      short: "Un’alta concentrazione di burro di karité nativo per il supporto della barriera e l’idratazione.",
      hero: "AX-09 SHEA BARRIER SOAP contiene un’alta quota di burro di karité nativo per una pelle che necessita supporto della barriera — senza profumo, delicato.",
      description: "Sostiene la barriera cutanea e trattiene l’idratazione sotto carico. Impiego nella fase RECOVER, per viso, corpo e rasatura.",
      highlightsTitle: "Benefici",
      highlights: [
        "Rafforza la barriera cutanea naturale",
        "Idratazione intensiva",
        "Calma pelli secche e sensibili",
        "Senza profumo — ideale per pelli sensibili e reattive",
        "Per viso, corpo e come sapone da barba delicato",
      ],
      protocol: "Far schiumare sulla pelle bagnata e massaggiare. Soprattutto dopo lo sport o su pelle secca e sollecitata. Risciacquare a fondo.",
      zone: "Viso · Corpo · Rasatura",
      claim: "Sostiene la barriera cutanea, trattiene l’idratazione.",
      composition: [
        "Alta percentuale di burro di karité nativo",
        "Olio di oliva · olio di colza",
        "Olio di ricino",
      ],
      spec: [
        { label: "Volume", value: "110 g" },
        { label: "Formato", value: "Blocco a freddo" },
        { label: "Profilo", value: "Senza profumo" },
        { label: "Origine", value: "Baviera · DE" },
      ],
      status: "Pre-lancio · Lot 0419",
    },
    "pomegranate-glow": {
      tagline: "Sapone rigenerante con melograno e fico.",
      short: "Gli estratti di melograno e fico sostengono il rinnovamento e un finish sano.",
      hero: "AX-10 POMEGRANATE GLOW SOAP impiega estratti di melograno e fico per sostenere il rinnovamento — per una pelle che cerca tono, non stimolazione.",
      description: "Supporto antiossidante per un incarnato equilibrato. Impiego nella fase RECOVER, mattina o sera.",
      highlightsTitle: "Benefici",
      highlights: [
        "Sostiene la rigenerazione naturale",
        "Rassoda e leviga",
        "Azione antiossidante del melograno",
        "Favorisce un incarnato sano e luminoso",
        "Adatto a pelli esigenti e mature",
      ],
      protocol: "Far schiumare delicatamente, massaggiare e risciacquare dopo un breve tempo di posa. Meglio mattina o sera come rituale glow.",
      zone: "Viso · Corpo · Rituale Glow",
      claim: "Supporto antiossidante con finish rassodante.",
      composition: [
        "Estratto di melograno (Punica Granatum) · fico selvatico",
        "Burro di karité",
        "Oli vegetali pregiati",
      ],
      spec: [
        { label: "Volume", value: "110 g" },
        { label: "Formato", value: "Blocco a freddo" },
        { label: "Uso", value: "mattina · sera" },
        { label: "Origine", value: "Baviera · DE" },
      ],
      status: "Pre-lancio · Lot 0419",
    },
    intense: {
      tagline: "Balsamo waterless per la regolazione quotidiana degli odori.",
      short: "Un deodorante in formato balsamo, a pH modulato, per un fabbisogno quotidiano da normale a elevato.",
      hero: "AX-01 SODA-IN-OIL DEODORANT BALM è un balsamo senz’acqua calibrato per l’uso quotidiano. Una matrice lipidica trasporta il complesso attivo senza alterare lo strato superficiale della pelle.",
      description: "Il sistema agisce tramite modulazione controllata del pH e legame molecolare, in una matrice lipidica. Per esigenze da normali a elevate. Senza alluminio.",
      highlightsTitle: "Alte prestazioni, senza compromessi",
      highlights: [
        "Controllo dell'odore multi-meccanismo (pH · enzimi · adsorbimento)",
        "24–36 ore di neutralizzazione dell'odore",
        "Finish dry-touch · senza occlusione, senza maschera profumata",
        "100 % senz'acqua · senza alluminio · senza profumo · vegan",
      ],
      protocol: "Applicare una volta al giorno su pelle pulita e asciutta. Usare prima HAMAMELIS MIST se serve una fase PREP tonificante.",
      zone: "Ascellare · Daily Core",
      claim: "Mantiene l’equilibrio della pelle per tutta la giornata.",
      composition: [
        "Butyrospermum Parkii (Shea) Butter · Candelilla Cera",
        "Ceramide NP · Heptyl Undecylenate",
        "Limnanthes Alba Seed Oil · Squalane",
        "Magnesium Hydroxide · Sodium Bicarbonate",
        "Tocopherol · Triethyl Citrate · Zinc Ricinoleate",
      ],
      spec: [
        { label: "Volume", value: "50 ml" },
        { label: "Formato", value: "Vasetto Violetglass" },
        { label: "Ciclo", value: "12 h equilibrio" },
        { label: "Origine", value: "Baviera · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "SODA-IN-OIL DEODORANT BALM è il daily ad alte prestazioni per l'ascella. Un'architettura lipidica anidra che mantiene il microclima cutaneo in equilibrio nelle giornate lunghe e impegnative.",
        what: "Un balm daily-core concentrato. Non è un antitraspirante, non è un profumo — una Lipid-Buffered Dispersion che bilancia chimica del sudore, attrito e carica batterica per 12 ore.",
        how: "Una volta al giorno al mattino su pelle pulita e asciutta. Applicare una piccola quantità nella zona ascellare — non serve massaggiare.",
        who: "Per giornate attive, lunghe ore, viaggi, caldo, sport, completo. Quando un deodorante normale cede dopo 4 ore.",
        result: "Asciuttezza immediata senza occlusione. Nel corso della giornata: nessun cambio di odore, meno attrito, nessun residuo appiccicoso sui tessuti.",
      },
      faq: [
        { q: "È un deodorante o un antitraspirante?", a: "Né l'uno né l'altro — è un modulo di microclima. Non blocca le ghiandole, mantiene la superficie cutanea in equilibrio." },
        { q: "Macchia?", a: "No. La formula anidra è senza trasferimento sui tessuti." },
        { q: "Posso usarlo ogni giorno?", a: "Sì, SODA-IN-OIL DEODORANT BALM è calibrato per uso quotidiano." },
      ],
    },
    sensitive: {
      tagline: "Balsamo waterless per pelli sensibili e reattive.",
      short: "La stessa precisione in formato balsamo dell’AX-01, calibrata per una pelle che richiede misura.",
      hero: "AX-02 NEURO-CALM DEODORANT BALM è calibrato per pelli reattive. Agisce senza profumo e senza occlusione.",
      description: "Il sistema unisce la regolazione degli odori a lipidi lenitivi. Per esigenze da basse a medie e pelli sensibili. Senza alluminio.",
      highlightsTitle: "Progettato per pelli sensibili",
      highlights: [
        "Regolazione delicata dell'odore con lieve modulazione del pH",
        "Matrice lipidica protettiva con ceramidi e karité",
        "Adatto dopo la rasatura · senza bruciore, senza formicolio",
        "100 % senz'acqua · senza profumo · senza alcol · vegan",
      ],
      protocol: "Applicare una volta al giorno. Adatto post-rasatura e post-RESET.",
      zone: "Ascellare · Profilo reattivo",
      claim: "Riduce la formazione di odori senza interventi aggressivi.",
      composition: [
        "Butyrospermum Parkii (Shea) Butter · Candelilla Cera",
        "Ceramide NP · Heptyl Undecylenate",
        "Limnanthes Alba Seed Oil · Squalane",
        "Magnesium Hydroxide · Tocopherol",
        "Triethyl Citrate · Zinc Ricinoleate",
      ],
      spec: [
        { label: "Volume", value: "50 ml" },
        { label: "Formato", value: "Vasetto Violetglass" },
        { label: "Profilo", value: "Reattivo" },
        { label: "Origine", value: "Baviera · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "NEURO-CALM DEODORANT BALM è la cura quotidiana per zone ascellari reattive. Senza profumo, lenitivo, pienamente efficace — per pelli che reagiscono ai deodoranti convenzionali con bruciore, rossore o prurito.",
        what: "Un modulo daily-core anidro con Neuro-Calm Lipid Buffer. Riduce la reattività superficiale, sostiene lo strato lipidico e mantiene stabile il microclima — senza occludere.",
        how: "Una volta al giorno al mattino su pelle pulita e asciutta. Adatto subito dopo la rasatura e dopo RESET PEELING BALM.",
        who: "Per pelli sensibili, reattive o tendenti all'eczema. Anche dopo la rasatura, con il caldo o in fasi ormonali con reattività aumentata.",
        result: "Nessun bruciore all'applicazione. In 7–14 giorni: pelle più calma, reattività decisamente ridotta, protezione stabile senza pesantezza.",
      },
      faq: [
        { q: "È un antitraspirante?", a: "No. NEURO-CALM DEODORANT BALM regola il microclima ma non blocca le ghiandole sudoripare." },
        { q: "Funziona dopo la rasatura?", a: "Sì — è calibrato proprio per l'uso post-rasatura." },
        { q: "Contiene alluminio o profumo?", a: "No. Nessuno dei due." },
      ],
    },
    reset: {
      tagline: "Balsamo esfoliante waterless per preparare la pelle.",
      short: "Una texture zucchero-olio anidra che agisce meccanicamente, non tramite attivi.",
      hero: "AX-03 RESET PEELING BALM rimuove i residui e prepara la pelle alla fase successiva. Non un gesto quotidiano — un gesto mirato.",
      description: "Rimuove i residui in eccesso e prepara la pelle alle fasi successive. Impiego nella fase PREP.",
      highlightsTitle: "Il passaggio di sistema prima del deodorante",
      highlights: [
        "Sugar-Polish System™ (55 % sucrosio) · puramente meccanico",
        "Senza acidi, enzimi o tensioattivi",
        "DNA oleoso protettivo (identico ai moduli deodoranti)",
        "100 % senz'acqua · vegan · senza profumo · solo 5 INCI",
      ],
      protocol: "1–2× a settimana. Massaggiare su pelle asciutta, risciacquare, far seguire da SODA-IN-OIL DEODORANT BALM o NEURO-CALM DEODORANT BALM.",
      zone: "Ascellare · Pre-Engage",
      claim: "Rimuove i residui in un solo passaggio.",
      composition: [
        "Sucrose (55 %) · Squalane",
        "Limnanthes Alba (Meadowfoam) Seed Oil",
        "Ceramide NP · Tocopherol",
      ],
      spec: [
        { label: "Volume", value: "75 ml" },
        { label: "Formato", value: "Vasetto Violetglass" },
        { label: "Uso", value: "1–2× / settimana" },
        { label: "Origine", value: "Baviera · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "RESET PEELING BALM è il riavvio settimanale per la zona ascellare. Una matrice olio-minerale anidra che scioglie residui di deodorante, sudore e attrito in un solo passaggio e riallinea la superficie cutanea.",
        what: "Un balm pre-trattamento massaggiabile di fini particelle minerali in un veicolo oleoso. Niente schiuma, niente tensioattivi, niente aggressione.",
        how: "1–2× a settimana su pelle asciutta, massaggiare 30 secondi, risciacquare con acqua tiepida. Applicare SODA-IN-OIL DEODORANT BALM o NEURO-CALM DEODORANT BALM subito dopo.",
        who: "Per chi cerca chiarezza tra cambi di deodorante, dopo settimane di sport o caldo, o quando l'ascella sembra ricoperta.",
        result: "Pelle subito più liscia e pulita. Migliore assorbimento dei prodotti daily-core. Meno odore proprio nel corso della settimana.",
      },
      faq: [
        { q: "È un esfoliante?", a: "No, è un reset meccanico senza acidi né granuli aggressivi — sicuro per la barriera." },
        { q: "Posso usarlo dopo la rasatura?", a: "Aspettare 24 ore dopo la rasatura." },
        { q: "Quante volte a settimana?", a: "1–2×. Di più non è meglio." },
      ],
    },
    powder: {
      tagline: "Polvere calibrata per il controllo di umidità e frizione.",
      short: "Una polvere minerale leggerissima che gestisce l’umidità tramite la fisica, non tramite attivi.",
      hero: "AX-04 FINISHING POWDER chiude l’AX Protocol con uno strato puramente meccanico — senza attivi, senza forzare la barriera.",
      description: "Chiude il sistema e riduce il carico meccanico nel corso della giornata. Impiego nella fase FINISH.",
      highlightsTitle: "Asciutto. Confortevole. Sotto controllo.",
      highlights: [
        "Absorption Matrix™ con caolino e arrowroot",
        "Opacizzazione immediata · riduce lo sfregamento pelle-pelle",
        "Non è un antitraspirante · nessun blocco delle ghiandole",
        "100 % senz'acqua · vegan · senza profumo · solo 4 INCI",
      ],
      protocol: "Applicare come strato finale su SODA-IN-OIL DEODORANT BALM o NEURO-CALM DEODORANT BALM. Regolare in base a clima e outfit.",
      zone: "Ascellare · Strato di finitura",
      claim: "Ridurre l’attrito, non la biologia.",
      composition: [
        "Kaolin · Maranta Arundinacea Root Powder",
        "Magnesium Hydroxide · Tocopherol",
      ],
      spec: [
        { label: "Volume", value: "40 g" },
        { label: "Formato", value: "Barattolo Violetglass · disco oro" },
        { label: "Uso", value: "Strato finale · all'occorrenza" },
        { label: "Origine", value: "Baviera · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "FINISHING POWDER è lo strato finale invisibile. Una polvere minerale leggerissima che regola fisicamente umidità e attrito durante la giornata — senza attivi, senza disturbare la cura sottostante.",
        what: "Una polvere ultrafine e non profumata. Si posa come un velo sottile su SODA-IN-OIL DEODORANT BALM o NEURO-CALM DEODORANT BALM e lega l'umidità in eccesso.",
        how: "Una piccola rotazione del dial in titanio, picchiettare nell'ascella con polpastrello o pad. Ideale dopo essersi vestiti — prima di riunioni, allenamenti, viaggi.",
        who: "Per chi è soggetto a sudore, attrito o aloni di trasferimento — soprattutto con caldo, abiti scuri, workwear o tessuti aderenti.",
        result: "Sensazione di pelle asciutta e liscia per ore. Meno aloni di sudore, meno attrito, nessun effetto incipriato.",
      },
      faq: [
        { q: "Ostruisce i pori?", a: "No. La matrice minerale è non-occlusiva e traspirante." },
        { q: "Posso usarla da sola?", a: "Sì, ma il pieno effetto si ottiene come strato finale su SODA-IN-OIL DEODORANT BALM o NEURO-CALM DEODORANT BALM." },
        { q: "Macchia i tessuti?", a: "No. Trasparente, ultrafine, senza residui sul tessuto." },
      ],
    },
    "lip-sculpt": {
      tagline: "Balsamo labbra waterless, struttura lipidica invece di stimolazione.",
      short: "Un balsamo labbra a base lipidica che definisce e liscia, senza formicolio né irritazione.",
      hero: "AX-07 LIP SCULPT BALM è una formula labbra senz’acqua — labbra definite e visibilmente più liscie, senza formicolio, gloss o irritazione.",
      description: "Definisce e leviga visibilmente, senza formicolio né irritazione. Per la cura quotidiana delle labbra, mattina e sera.",
      highlightsTitle: "Sculpt invece di stimolazione",
      highlights: [
        "Superficie soft-focus · levigatura visibile delle linee",
        "Ialuronato disperso in olio per volume ottico",
        "Comfort di lunga durata · non appiccicoso",
        "100 % senz'acqua · vegan · senza olio di palma · amico della barriera",
      ],
      protocol: "Applicare un velo sulle labbra, ripetere più volte al giorno se necessario. La sera più generosamente come trattamento notte.",
      zone: "Labbra · Contorno e bordo",
      claim: "Struttura, non stimolazione.",
      composition: [
        "Squalane · Butyrospermum Parkii Butter",
        "Limnanthes Alba Seed Oil · Candelilla Cera",
        "Sodium Hyaluronate (oil-dispersed)",
        "Vanilla Planifolia Fruit Extract · Tocopherol",
      ],
      spec: [
        { label: "Volume", value: "15 ml" },
        { label: "Formato", value: "Vasetto Violetglass" },
        { label: "Uso", value: "AM · PM" },
        { label: "Origine", value: "Baviera · DE" },
      ],
      status: "Final · Lot 0419",
      consumer: {
        intro: "LIP SCULPT BALM modella le labbra in modo ottico — 100 % senza acqua, vegan, senza olio di palma e rispettoso della barriera.",
        what: "Un balsamo labbra soft-focus: una matrice lipidica ridotta con ialuronato disperso in olio per levigare visibilmente le linee e dare volume ottico.",
        how: "Applicare un velo, ripetere durante il giorno se serve. La sera più generosamente come trattamento notte.",
        who: "Per labbra sensibili e per chi vuole struttura invece di lucentezza — quotidiano, mai appiccicoso.",
        result: "Superficie soft-focus, linee visibilmente levigate e labbra dall'aspetto più pieno — con comfort di lunga durata.",
      },
      faq: [
        { q: "È un gloss?", a: "No. Non un film lucido ma un balsamo strutturante con finish opaco." },
        { q: "Posso metterci il rossetto sopra?", a: "Sì. Lascia assorbire 2 minuti, poi procedi come sempre." },
        { q: "Quante volte al giorno?", a: "Due volte come rituale, più dopo l'esposizione." },
      ],
    },
    "hamamelis-mist": { tagline: "Una mist tonica mono-ingrediente, distillata pura.", short: "Idrolato puro di amamelide che tonifica e prepara senza alcol, diluizione o additivi.", hero: "AX-05 HAMAMELIS MIST è una mist tonica mono-ingrediente, distillata pura e senza alcol.", description: "Un idrolato mono-ingrediente — Hamamelis Virginiana Leaf Water, senza alcol, distillato una volta e lasciato intatto. Come primo passo prima della stabilizzazione prepara e tonifica senza ingredienti superflui, diluizione, additivi o profumo aggiunto.", highlightsTitle: "Distillato puro", highlights: ["100 % Hamamelis Virginiana Leaf Water", "Formula mono-ingrediente", "Distillazione senza alcol", "Fase PREP prima di Neuro-Calm"], protocol: "Nebulizzare sulla pelle pulita, lasciare assestare e applicare NEURO-CALM.", zone: "Viso · Collo · Zona rasatura", claim: "Distillato una volta. Lasciato intatto.", composition: ["Hamamelis Virginiana (Witch Hazel) Leaf Water"], spec: [{ label: "Volume", value: "100 ml" }, { label: "Formato", value: "Flacone spray Miron Violetglass" }, { label: "Uso", value: "PREP · prima di Neuro-Calm" }, { label: "Origine", value: "Baviera · DE" }], status: "Pre-launch · Lot 0419" },
    "pre-shave-oil": { tagline: "Il passo prima della lama.", short: "Un complesso oleoso leggero per scorrevolezza controllata e minore attrito.", hero: "AX-06 PRE-SHAVE OIL crea uno strato di scorrevolezza controllata prima della lama.", description: "Un olio pre-rasatura leggero: argan e jojoba creano scorrevolezza, lo squalano stabilizza il film e il tocoferolo protegge dallo stress ossidativo. Abbinato al recupero post-rasatura chiude il ciclo dalla preparazione alla riparazione.", highlightsTitle: "Prima della lama", highlights: ["Complesso argan + jojoba", "Strato stabilizzato dallo squalano", "Riduce l’attrito della lama", "Fase PREP prima della rasatura"], protocol: "Massaggiare poche gocce sulla pelle pulita e umida prima della rasatura, poi applicare la fase recovery.", zone: "Viso · Collo · Zona rasatura", claim: "Il passo prima della lama.", composition: ["Argania Spinosa Kernel Oil · Simmondsia Chinensis Seed Oil", "Squalane · Tocopherol"], spec: [{ label: "Volume", value: "50 ml" }, { label: "Formato", value: "Flacone contagocce Miron Violetglass" }, { label: "Uso", value: "PREP · prima della rasatura" }, { label: "Origine", value: "Baviera · DE" }], status: "Pre-launch · Lot 0419" },
  },
  bundle: { name: "THE AX PROTOCOL", short: "L'ingresso nel protocollo: PREP · ENGAGE · RECOVER · FINISH — quattro moduli quotidiani. Hamamelis Mist, Pre-Shave Oil e Lip Sculpt Balm completano il rituale in modo mirato." },
  shield: {
    "tracksuit": {
      tagline: "Idrolato di amamelide distillato, senza alcol.",
      description: "Un ingrediente, non una formula — acqua vegetale pura come passaggio tonico prima della stabilizzazione. Impiego nella fase PREP.",
      benefits: ["Cotone biologico 480 g/m²", "Taglio unisex oversize · spalla scesa", "Interno garzato", "Prerestretto · lavabile a 40 °C"],
    },
    "zone-boxers": {
      tagline: "Boxer senza frizione per la zona reattiva.",
      description: "Un boxer unisex in misto cotone-seta, con gamba ampia e girovita morbido rivestito — progettato per ridurre la frizione meccanica invece di mascherarla. La seta porta la superficie a bassa frizione sulla zona reattiva; il cotone biologico sotto gestisce umidità e traspirabilità. Cuciture piatte su tutto il capo — nessun punto di sfregamento, nessun segno di pressione. Per lo sport, per il viaggio e per la pelle sotto carico quotidiano.",
      benefits: ["Misto cotone-seta · frizione superficiale ridotta", "Taglio boxer unisex morbido · girovita rivestito", "Cuciture piatte · nessuno sfregamento", "Profilo sport & pelle sensibile"],
    },
    "towel-set": {
      tagline: "Cotone bianco neutro — big size più formato sport.",
      description: "Un set di due asciugamani in cotone a fibra lunga bianco neutro: un telo bagno oversize da 100 × 180 cm e un piccolo asciugamano sport da 40 × 90 cm per la borsa, il campo o il beauty da viaggio. Spugna doppia torsione da 700 g/m², a bassa lanugine, ad asciugatura rapida, con orlo rinforzato e patch bandiera ZONES FABRICS tessuta in bianco e oro — lo stesso segno di tracksuit, boxer e tee.",
      benefits: ["Spugna di cotone a fibra lunga 700 g/m²", "Telo bagno 100 × 180 cm + asciugamano sport 40 × 90 cm", "Bianco neutro · patch bandiera ZONES FABRICS tessuta", "Bassa lanugine · asciugatura rapida · lavabile a 60 °C"],
    },
    "zone-tee": {
      tagline: "Base layer unisex oversize con inserto ascellare.",
      description: "Una t-shirt unisex oversize costruita come vero base layer: un pannello dedicato nella zona ascellare gestisce l’umidità esattamente dove il Protocollo AX agisce sulla pelle sottostante. Jersey pesante, spalla scesa, taglio volutamente ampio. Sotto il tracksuit, sotto qualsiasi strato — o da solo.",
      benefits: ["Pannello ascellare", "Vestibilità unisex oversize · spalla scesa", "Jersey pesante che gestisce l’umidità", "Prerestretto · lavabile a 40 °C"],
    },
  },
  carry: {
    "travel-case": {
      tagline: "Il protocollo, pronto in valigia.",
      description: "Un astuccio da viaggio con zip in canvas tecnico idrorepellente e bordi in pelle nera — lo stesso beige sabbia della Hand Clutch. Formato per tutto l'AX Protocol, fodera lavabile, unisex.",
      features: ["Formato 24 × 17 × 6 cm", "Canvas tecnico idrorepellente", "Bordi in pelle nera · zip in metallo", "Fodera pulibile · contiene l'AX Protocol"],
    },
    "hand-clutch": {
      tagline: "Formato piccolo, presenza intera.",
      description: "Una pochette piatta da tenere in mano: canvas tecnico beige sabbia, bordi e angoli in pelle nera, cinturino da polso in pelle rimovibile. Dentro, una tasca per le carte e spazio per un modulo AX.",
      features: ["Formato mano 26 × 18 × 3 cm", "Canvas tecnico · bordi in pelle", "Cinturino da polso rimovibile", "Tasca carte · unisex"],
    },
  },
};

/* =================== NL =================== */
const nl: Dict = {
  blueprint: { title: "Constructietekening", tech: "Technologie", material: "Materiaal", measure: "Maat" },
  exploded: { eyebrow: "Opbouw", title: "Explosietekening.", lead: "Drie onderdelen, één systeem. Bij het scrollen schuiven deksel, romp en werkstofkern uiteen — en komen aan het eind weer samen.", hint: "Scrollen", cap: "Deksel", body: "Romp", core: "Werkstofkern" },
  zoneMap: { eyebrow: "Zones", title: "Kies op zone.", lead: "Elke zone heeft eigen eisen. Beweeg over een zone — het protocol toont de passende modules.", hint: "Kies een zone", zones: { axilla: "Oksels", face: "Gezicht & nek", body: "Lichaam & benen" }, cta: "Module openen →" },
  nav: { home: "ZONES", products: "Collectie", signature: "Signature", accessories: "Accessoires", journal: "Journal", art: "Art Collab", protocol: "Systeem", shield: "Fabrics", club: "Community", contact: "Contact", shop: "Shop", menu: "Menu", carry: "Carry", smart: "Technologie", language: "Taal" },
  footer: {
    tagline: "Applied Lipid Science · Axillair Microklimaat",
    blurb: "Ontwikkeld in Beieren. Geformuleerd om de lipidenbarrière te ondersteunen en het microklimaat in evenwicht te houden tijdens dagelijkse blootstellingscycli.",
    system: "Systeem", lab: "Lab", legal: "Juridisch", imprint: "Colofon", withdrawal: "Herroeping", privacy: "Privacy", terms: "Voorwaarden", shippingPayment: "Verzending & betaling",
    rights: "Alle rechten voorbehouden", origin: "Made in Bavaria · Clinically Engineered",
  },
  common: {
    addToCart: "In winkelwagen", addedToCart: "toegevoegd aan winkelwagen (preview)", learnMore: "Meer info",
    openDossier: "Dossier openen →", next: "Volgende", back: "Terug", viewPortfolio: "Bekijk portfolio",
    enterProtocol: "Protocol betreden →", fullPortfolio: "Volledig portfolio →", readTechnology: "Lees de technologie →",
    enterShield: "Ontdek Fabrics →", joinClub: "Toegang aanvragen →", contactLab: "Lab contacteren →",
    returnPortfolio: "Terug naar AX-portfolio →", openModule: "Moduledossier openen →",
    addBundleToCart: "Bundle in winkelwagen →", scroll: "Scroll", phase: "Fase", module: "Module",
    technology: "Technologie", claim: "Claim", composition: "Samenstelling", protocolLabel: "Protocol",
    specs: "Specificaties", heroMechanism: "Hero-mechanisme", techComplex: "Tech / Complex", zone: "Zone",
    notFoundTitle: "Signaal verloren", notFoundLead: "Het opgevraagde protocol valt buiten dit systeem.",
    notFoundCta: "Terug naar het lab", signalLost: "Signaal verloren", skuNotFound: "SKU niet gevonden",
    backPortfolio: "Terug naar portfolio", preorder: "Beschikbaar · Lot 0419", colorLabel: "Kleur",
    inPlainWords: "In gewone taal", whatItIs: "Wat het is", howToUse: "Zo gebruik je het", whoItsFor: "Voor wie", whatYouGet: "Wat je merkt", faqTitle: "Veelgestelde vragen",
    relatedModules: "Meer modules", standardsTitle: "Standaarden", inProtocol: "In het protocol", backToCollection: "Terug naar collectie", preorderNow: "Nu pre-orderen", ingredientsTitle: "Actieve stoffen", ingredientsHead: "Wat erin zit — en waarom.", ingredientsLead: "Elke grondstof heeft een taak. Hier staan de INCI-naam, de gewone naam en het voordeel in één zin.", ingredientsNote: "INCI-gegevens volgens de huidige formule. Cosmetische claims — geen medische beloftes.", claimsHead: "Standaarden die voor elke module gelden.",
  },
  home: {
    metaTitle: "ZONES LAB™ — AX PROTOCOL · Applied Lipid Science",
    metaDesc: "AX PROTOCOL van Zones Lab. Engineered Lipid-Buffered Dispersion ondersteunt de barrière-integriteit en houdt het axillaire microklimaat in evenwicht.",
    systemOnline: "Systeem online · Beieren · 2026",
    heroLine1: "ZONES", heroLine2: "LAB™",
    heroIntro: "Zes helder geordende lijnen: AX Cosmetics voor functionele verzorging, OLF-01 als geursignatuur, ZONES Fabrics voor textiele performance, Superfood koffie voor herkomst, Accessories voor het ritueel en ZONES × REZA voor de kunst.",
    heroRef: "Referentie",
    heroPrimary: "Start het systeem", heroSecondary: "Begrijp AX Protocol",
    routeEyebrow: "002 / Assortiment", routeTitle: "Kies je ingang.", routeLead: "Vier duidelijk gescheiden lijnen. Elk heeft een eigen taak en een directe route naar het juiste product.",
    routeCards: [
      { eyebrow: "Applied Lipid Science", title: "AX COSMETICS", body: "Tien functionele modules in vier fasen, van voorbereiding tot finish.", cta: "Bekijk collectie" },
      { eyebrow: "Parfum · buiten het systeem", title: "OLF-01 SIGNATURE", body: "Eén geursignatuur in twee reikwijdtes. Gedragen, niet gedoseerd.", cta: "Ontdek Signature" },
      { eyebrow: "Applied Fiber Science", title: "ZONES FABRICS", body: "Vier textiele objecten voor huid, beweging en herstel.", cta: "Ontdek Fabrics" },
      { eyebrow: "Sourced in Europe", title: "ACCESSORIES", body: "Gecureerde objecten in olijfhout, porselein en staal.", cta: "Bekijk accessoires" },
    ],
    coreTitleA: "Jouw ingang.", coreTitleB: "Twee profielen.", coreLead: "INTENSE voor hoge belasting. SENSITIVE voor reactieve huid. Samen vormen ze de dagelijkse kern van het AX Protocol.",
    assortmentTitle: "Nog drie werelden.", assortmentLead: "Geur, textiel en gecureerde ritueelobjecten — zelfstandig gepositioneerd zonder het AX Protocol te verwateren.",
    sectionHero: "001 / Hero", sectionManifesto: "002 / Manifest", sectionTech: "003 / Oplossing",
    sectionProtocol: "004 / Protocol", sectionPortfolio: "005 / Portfolio", sectionShield: "006 / Fabrics",
    sectionBundle: "◆ Het Systeem", sectionClub: "007 / ZONES CLUB",
    manifestoTitle: { a: "De huid tussen beweging en stilte is een levend ", alpine: "microklimaat", b: " — geen probleem dat moet worden gestild." },
    manifestoBody1: "Conventionele systemen schokken de barrière. Ze maskeren. Ze strippen. Ze forceren één signaal door een levend interface dat voor nuance is ontworpen.",
    manifestoBody2: "AX PROTOCOL is gebouwd op terughoudendheid. Watervrije architectuur, Lipid-Buffered Dispersion en Zero-Shock Technology — geformuleerd om de barrière te ondersteunen, niet te overrulen.",
    manifestoLead: "Het Probleem · §01 — §03",
    techTitleA: "Zero-Shock", techTitleB: "Technology",
    techLead: "Drie engineerde modules — Lipid-Buffered Dispersion, de Hydrophobic Gate en het Bavarian Alpine mineraalrooster — werken als één doorlopende architectuur.",
    techStats: [
      { v: "98,4 %", k: "Lipidintegriteitsindex", n: "Dag 14 in vitro" },
      { v: "12 u", k: "Time-release-venster", n: "Evenwichtscyclus" },
      { v: "Δ 0,6 °C", k: "Microklimaatstabiliteit", n: "vs. controleprotocol" },
    ],
    protocolTitleA: "Vier fases.", protocolTitleB: "Eén evenwicht.",
    protocolSteps: [
      { n: "01", t: "PREP", d: "Reset het microklimaat. Blank Canvas-staat." },
      { n: "02", t: "ENGAGE", d: "Daily Core. 12-uurs evenwichtsvenster." },
      { n: "03", t: "RECOVER", d: "LipidShield versterkt. Terug naar baseline." },
      { n: "04", t: "FINISH", d: "Fysica, geen biologie. Droog, zijdezacht, wrijvingsarm." },
    ],
    portfolioTitleA: "Zeven modules.", portfolioTitleB: "Eén architectuur.",
    portfolioLead: "SODA-IN-OIL DEODORANT BALM · NEURO-CALM DEODORANT BALM · RESET PEELING BALM · FINISHING POWDER · HAMAMELIS MIST · PRE-SHAVE OIL · LIP SCULPT BALM. Architectuur door de hele AX-Protocol-cyclus.",
    shieldTitlePre: "ZONES", shieldTitleMid: "| FABRICS", shieldTitleEnd: "Applied Fiber Science.",
    shieldLead: "Drie unisex objecten in een licht oversized pasvorm: het trainingspak in 480 gsm biologisch katoen, de Zone Boxers in katoen-zijde en de Zone Tee met axillair inzetstuk.",
    bundleSaves: (n) => `Bespaart €${n}`,
    clubTitleA: "Geen prijs.", clubTitleB: "Alleen toegang.",
    clubLead: "De ZONES CLUB is op uitnodiging: geen kosten, geen abonnement. Genummerde memberships, beperkte plaatsen per lot — vroege toegang, refill-prioriteit, labdossiers.",
    archiveEyebrow: "004 / Archief",
    archiveTitle: "Het visuele archief.",
    archiveLead: "Vier lijnen, één klimaat. Wat op de huid komt, wat eroverheen draagt — en wat de rituelen volgt.",
    archiveQuoteTitle: "Systemische kwaliteit",
    archiveQuoteBody: "Een visuele taal voor de fysieke wereld — ontwikkeld uit materiaalonderzoek, niet uit decoratie.",
    archiveItemLabels: ["01. Signature", "02. Fabrics", "03. Accessories", "04. Cosmetics"],
    archiveItemQuotes: ["Heritage", "Applied Fiber Science", "Curated Objects", "The tactile ritual of high performance."],

  },
  productsPage: {
    metaTitle: "Producten — ZONES LAB™ AX Protocol",
    metaDesc: "Tien producten in vier fasen: deodorantbalms, reset, recovery soaps, finishing powder, hamamelis mist, pre-shave oil en lip balm.",
    eyebrow: "Portfolio · 2026",
    titleA: "Tien producten.", titleB: "Vier duidelijke fasen.",
    lead: "Begin met Intense of Sensitive. Voeg daarna alleen toe wat je routine nodig heeft — PREP · ENGAGE · RECOVER · FINISH.",
    systemCore: "SYSTEEMKERN",
    startHere: "START HIER",
    refillBadge: "NAVULLING",
    refillAction: "BIJVULLEN",
    emptyCategory: "Geen producten in deze categorie.",
    categories: { all: "Alle", performance: "Toepassen", sensitive: "Gevoelig", prep: "Voorbereiden", repair: "Herstel", recovery: "Recovery Soaps", finish: "Finish" },
    bundleEyebrow: "◆ Bundle",
    bundleSaves: (n) => `Bespaart €${n}`,
    finder: {
      cta: "Vind jouw module",
      title: "Drie vragen. Twee of drie aanbevelingen.",
      hint: "Kies zone, huidtype en doel — wij tonen de passende modules.",
      close: "Sluiten",
      reset: "Opnieuw",
      resultLabel: "Aanbeveling",
      empty: "Beantwoord alle drie de vragen.",
      zoneLabel: "Zone",
      zone: { axilla: "Oksels", face: "Gezicht & hals", body: "Lichaam & benen" },
      skinLabel: "Huid",
      skin: { robust: "Robuust", sensitive: "Gevoelig", dry: "Droog" },
      goalLabel: "Doel",
      goal: { fresh: "Dagelijkse frisheid", recover: "Herstel", finish: "Verzachting & finish" },
      reasons: {
        intense: "Voor hoge belasting — houdt het microklimaat de hele dag stabiel.",
        sensitive: "Parfumvrij en kalmerend voor reactieve zones.",
        reset: "Bereidt de zone voor en verwijdert resten in één beweging.",
        powder: "Vermindert wrijving en vocht — mechanisch, zonder actieven.",
        "lip-sculpt": "Optische volume-illusie door lipidedesign — sculpten in plaats van stimuleren.",
        "hamamelis-mist": "Puur hamamelishydrolaat als tonifiërende PREP-stap.",
        "pre-shave-oil": "Gecontroleerde glide en minder meswrijving vóór het scheren.",
      },
    },
  },
  productDetail: { nextModule: "Volgende module", metaSuffix: "ZONES LAB™" },
  signature: {
    tagline: "Eén formule. Twee bereiken.",
    hero: "OLF-01 is hoe de ZONES-geurarchitectuur klinkt wanneer ze wordt gedragen, niet gedoseerd. Dezelfde technische logica als het AX Protocol — vetiver, cederhout, olibanum — op parfumsterkte in plaats van spoorconcentratie. Twee bereiken van één signatuur: één ontworpen om de kamer te bereiken, één om exact te blijven waar je haar aanbrengt.",
    description: "Het AX Protocol meet OLF-01 in fracties van een procent. Hier wordt het op 20% gedragen — parfumsterkte, geen bijkomstige geurtoevoeging. Beide bereiken delen hetzelfde kernakkoord. Wat ze onderscheidt is radius: hoe ver de signatuur is ontworpen om te reizen voordat ze vervaagt.",
    protocol: "Aanbrengen op polspunten of over elk AX Protocol-product dragen. Anders dan de functionele modules heeft OLF-01 geen PREP-, ENGAGE-, RECOVER- of FINISH-rol — draag het zelfstandig wanneer de signatuur moet spreken.",
    variantsLabel: "Kies bereik", selectVariant: "Selecteer variant", compositionLabel: "Samenstelling",
    comparisonTitle: "Welk bereik past bij jou?", comparisonLead: "Hetzelfde kernakkoord, een andere radius. Kies per situatie — niet per geurfamilie.",
    comparisonRows: [{ label: "Radius", broadcast: "Vult de ruimte", skinClose: "Dicht op de huid" }, { label: "Diffusie", broadcast: "Iso E Super + Ambroxan", skinClose: "Gereduceerd" }, { label: "Oud-spoor", broadcast: "Aanwezig", skinClose: "Zonder" }, { label: "Ideaal voor", broadcast: "Avond · entree · presence", skinClose: "Dag · nabijheid · subtiliteit" }],
    variants: {
      broadcast: { name: "BROADCAST", tagline: "Gebouwd om op te vallen. Het volledige akkoord, de volledige radius.", description: "De motor draait. Het spoor van oud blijft intact, Iso E Super en Ambroxan dragen het akkoord voorbij je eigen perimeter — dit is de formule die de oorspronkelijke briefing beantwoordt: mensen lopen de geur binnen voordat ze je zien." },
      "skin-close": { name: "SKIN-CLOSE", tagline: "Dezelfde signatuur, dichtbij gehouden. Voor kamers, niet voor catwalks.", description: "Hetzelfde akkoord, naar beneden ontworpen in plaats van naar buiten. Het spoor van oud is weg, de diffusiemotor uitgeschakeld — wat overblijft is vetiver, cederhout en olibanum direct op de huid, met een radius gemeten in centimeters, niet in kamers. Gebouwd voor de uren tussen aankleden en de deur uitgaan, niet voor de entree zelf." },
    },
  },
  accessoriesPage: accessoryTranslations.nl.page,
  accessories: accessoryTranslations.nl.items,
  protocolPage: {
    metaTitle: "Het Protocol & de Technologie — ZONES LAB™",
    metaDesc: "PREP · ENGAGE · RECOVER · FINISH. Vier fases, zeven modules. Lipid-Buffered Dispersion, Hydrophobic Gate, Soda-in-Oil-matrix — de volledige architectuur van het AX-System.",
    eyebrow: "Het Protocol · 2026",
    titleA: "Vier fases.", titleB: "Eén evenwicht.",

    lead: "Het AX-Protocol is één doorlopende architectuur — Lipid-Buffered Dispersion, de Hydrophobic Gate en het Bavarian Alpine mineraalrooster werken als één barrièreframework.",
    architecture: "Architectuur",
    architectureTitleA: "Lipid-Buffered Dispersion.",
    architectureTitleB: "Een doorlopend barrièreframework.",
    architectureModules: [
      { t: "Hydrophobic Gate", d: "Selectieve doorgangsarchitectuur, afgestemd op de oppervlakkige lipidenlaag." },
      { t: "Lipid-Buffered Dispersion", d: "Watervrije dragermatrix die actieven aflevert zonder waterschok." },
      { t: "Bavarian Alpine Mineral Grid", d: "Mineraal framework gekalibreerd op het axillaire microklimaat." },
    ],
    openPortfolio: "Open het portfolio →",
    steps: [
      { title: "Reset het microklimaat.", body: "AX-03 RESET PEELING BALM verwijdert residu en richt de oppervlakkige lipidenlaag in één keer opnieuw uit. De Blank Canvas-staat — de voorwaarde voor ENGAGE." },
      { title: "Daily Core. 12-uurs evenwicht.", body: "AX-01 SODA-IN-OIL DEODORANT BALM of AX-02 NEURO-CALM DEODORANT BALM voert de actieve matrix door de Hydrophobic Gate. Time-released, watervrij, volledig afgestemd op de barrière." },
      { title: "Voorbereiden en tonifiëren.", body: "AX-05 HAMAMELIS MIST bereidt de huid voor met een puur, alcoholvrij hydrolaat." },
      { title: "Vóór het mes.", body: "AX-06 PRE-SHAVE OIL creëert gecontroleerde glide met argan, jojoba en squalaan." },
    ],

  },
  shieldPage: {
    metaTitle: "ZONES FABRICS — Applied Fiber Science",
    metaDesc: "ZONES FABRICS: toegepaste vezelwetenschap voor beweging en regeneratie. Oversized tracksuit, cotton-silk boxer, base-layer shirt en towel set.",
    eyebrow: "ZONES | FABRICS",
    claim: "Applied Fiber Science · Toegepaste vezelwetenschap",
    titleA: "ZONES",
    titleB: "FABRICS",
    lead: "Vier textiele objecten voor beweging, rust en regeneratie: een oversized tracksuit in 480 g/m² biologisch katoen, een cotton-silk boxer met platte naden, een base-layer shirt met okselgusset en de towel set in 700 g/m² badstof.",
    closingTitle: "Fabrics die met de huid samenwerken.", quickNav: "Ga naar product",
  },
  carryPage: {
    metaTitle: "ZONES | CARRY — Dagelijkse objecten",
    metaDesc: "Verzorgingsetui met rits en bijpassende clutch in zandbeige technisch canvas met zwart leren bies.",
    eyebrow: "ZONES | CARRY",
    titleA: "Carry.",
    titleB: "Voor onderweg.",
    lead: "Twee objecten die het protocol begeleiden: een verzorgingsetui voor onderweg en een bijpassende clutch in hetzelfde zandbeige. Gemaakt om te blijven.",
    closingTitle: "Carry die meegaat.",
  },
  smartPage: {
    metaTitle: "Smart — Waterless by Design · ZONES LAB™",
    metaDesc: "Soda-in-Oil (SiO) Matrix · Waterless · Aluminiumvrij · Hormoonvriendelijk · Microbioomvriendelijk. High performance die toevallig duurzaam is.",
    eyebrow: "Smart · Waterless by Design",
    titleA: "High Performance.",
    titleB: "Waterless. Punt.",
    lead: "We verdunnen onze formules niet met water. Elke gram ZONES™ is pure performance — efficiënter voor je huid, beter voor de planeet.",
    efficiencyEyebrow: "001 / Efficiency Statement",
    efficiencyTitle: "Waterless by Design.",
    efficiencyBody: "Conventionele formules gebruiken water als drager. Wij bouwen anders: geselecteerde actieve stoffen in een Soda-in-Oil (SiO) Matrix — watervrij en op functie gestructureerd.",
    waterlessChartTitle: "Watergehalte per gram formule",
    waterlessUsLabel: "ZONES™ AX / P [SiO]",
    waterlessThemLabel: "Conventionele deodorant",
    waterlessNote: "Pure actieve dichtheid vs waterige verdunning.",
    scienceEyebrow: "002 / Science Deep-Dive",
    scienceTitle: "Soda-in-Oil (SiO) Matrix.",
    scienceBody: "Onze SiO Matrix is gebouwd op Waterless-technologie. In plaats van water dragen pure lipiden en bio-engineered actieven het LipidShield Complex™ naar de barrière — actief barrièreherstel in plaats van oppervlakkige maskering.",
    matrixCaption: "Vier lagen. Eén architectuur.",
    matrixLipid: "Lipidedrager · LipidShield Complex™",
    matrixSoda: "Soda-module · pH-regulatie",
    matrixMineral: "Bavarian Alpine mineraalrooster",
    matrixPeptide: "Watervrije dragerarchitectuur",
    standardsEyebrow: "003 / Standards Checklist",
    standardsTitle: "Wat we niet zijn.",
    standardsLead: "Snel overzicht. ZONES™ overtreft moderne standaarden — door technische zuiverheid, niet door trend.",
    standardsRows: [
      { label: "Aluminiumvrij", note: "Geen aluminiumzouten. Geen pseudo-droogheid." },
      { label: "Alcoholvrij", note: "Geen oplosmiddelschok voor de barrière." },
      { label: "Waterless", note: "Nul verdunning. Maximale actieve dichtheid." },
      { label: "Microbioomvriendelijk", note: "Verstoort het oksel-microbioom niet." },
      { label: "Barrièrevriendelijk", note: "Ondersteunt integriteit — actief herstel." },
      { label: "Hormoonvriendelijk", note: "Vrij van hormonaal actieve verbindingen." },
      { label: "Niet-comedogeen", note: "Verstopt geen poriën — gekalibreerd voor sport." },
    ],
    standardsBetter: "ZONES™",
    standardsStandard: "Massamarkt",
    sustainabilityEyebrow: "004 / Sustainability",
    sustainabilityTitle: "Minder water. Minder afval. Meer effect.",
    sustainabilityBody: "Waterless betekent minder volume, minder verpakking, minder vrachtgewicht — en geen conserveermiddelen om water stabiel te houden. Technologie die toevallig groen is.",
    sustainabilityStats: [
      { v: "0 %", k: "Water in formule" },
      { v: "10", k: "AX-modules" },
      { v: "04", k: "Protocolfasen" },
    ],
    closingTitle: "Smart betekent: minder, scherper, eerlijker.",
    closingLead: "Geen eco-jargon. Geen marketing-rekenkunde. Alleen actieven die hun werk doen.",
    closingCta: "Open portfolio →",
    crossEyebrow: "Objecten · Systeem",
    crossTitle: "Wat het systeem begeleidt.",
    crossLead: "De formules werken op de zone. Fabrics werken op de rest van de dag: tracksuit, cotton-silk boxer, base-layer shirt en towel set.",
  },
  clubPage: {
    metaTitle: "ZONES CLUB — Toegang op uitnodiging",
    metaDesc: "Geen bijdrage, geen abonnement. Toegang tot de ZONES CLUB wordt gecureerd vrijgegeven: early access op nieuwe lots, refill-prioriteit en lab-dossiers.",
    eyebrow: "ZONES CLUB · Access by invitation",
    titleA: "Geen prijs.", titleB: "Alleen toegang.",
    lead: "De ZONES CLUB is niet te koop. Toegang wordt gecureerd vrijgegeven — in beperkt aantal per lot. Elk lidmaatschap is genummerd: geen abonnement, geen bijdrage.",
    howLabel: "Hoe toegang werkt",
    howTitle: "Drie stappen. Geen checkout.",
    howSteps: [
      { n: "01", t: "Aanvraag", d: "Je laat naam, e-mail en je zone achter. Geen account, geen betaling." },
      { n: "02", t: "Beoordeling", d: "We leggen aanvragen naast de capaciteit van het volgende lot. Referral-codes krijgen prioriteit." },
      { n: "03", t: "Vrijgave", d: "Bij vrijgave krijg je een genummerd lidmaatschap (Member No. 0001 …) en je toegangsvenster." },
    ],
    tiersLabel: "Niveaus",
    tiersTitle: "Verdiend, niet gekocht.",
    tiers: [
      { name: "LISTED", status: "Open voor iedereen", perks: ["Lot-aankondigingen vóór de nieuwsbrief", "Restock-alert voor jouw module", "Geen bijdrage, altijd opzegbaar"] },
      { name: "MEMBER", status: "Vrijgegeven", perks: ["Early access op nieuwe lots vóór publieke release", "Refill-prioriteit bij beperkte voorraad", "Lab-dossier-digest over formulering en tests", "Genummerd lidmaatschap"] },
      { name: "INNER LAB", status: "Op uitnodiging", perks: ["Genummerde Lot 0001-reservering", "Toegang tot testbatches vóór marktvrijgave", "Directe lijn naar de formuleringsontwikkeling", "Inbreng bij formulerings-iteraties"] },
    ],
    formLabel: "Toegangsaanvraag",
    formTitle: "Op de lijst.",
    formLead: "We openen toegang per lot in beperkt aantal. Aanvragen blijven staan op volgorde van binnenkomst.",
    name: "Naam", email: "E-mail", interest: "Zone / interesse", referral: "Referral-code", referralHint: "optioneel",
    submit: "Toegang aanvragen →", sent: "Aanvraag geregistreerd ✓",
    sentNote: "We laten van ons horen zodra er een toegangsvenster vrijkomt. Geen automatische toezegging.",
    transparencyLabel: "Transparantie",
    transparency: [
      "Geen bijdrage, geen abonnement, geen betaalgegevens.",
      "Beperkte plaatsen per lot — een aanvraag is geen toezegging.",
      "Altijd afmelden met één e-mail.",
      "Geen gegevens naar derden.",
    ],
    closingTitleA: "Elk lidmaatschap is genummerd.", closingTitleB: "Elke toegang is beperkt.",
    closingLead: "De club groeit met het lab — lot na lot, niet via creditcard. Wie binnen is, ziet formuleringen voordat ze producten worden.",
  },

  contactPage: {
    metaTitle: "Contact & Colofon — ZONES LAB™",
    metaDesc: "Directe lijn met het lab. Colofon, privacy en voorwaarden voor ZONES LAB™.",
    eyebrow: "Directe Lijn · 2026",
    titleA: "Contacteer", titleB: "het Lab.",
    channels: "Kanalen", mail: "E-mail", press: "Pers", address: "Adres",
    openLine: "Open een lijn", name: "Naam", email: "E-mail", subject: "Onderwerp", message: "Bericht",
    send: "Naar het lab sturen →", sent: "Signaal ontvangen ✓",
    imprint: "Colofon", imprintTitle: "Colofon · § 5 TMG",
    privacy: "Privacy", privacyTitle: "Privacybeleid",
    privacyBody: "ZONES LAB™ verwerkt alleen de gegevens die nodig zijn om deze site te exploiteren en op laboratoriumvragen te reageren. Geen tracking, geen profilering. Volledige AVG-documentatie op verzoek via lab@zoneslab.com.",
    terms: "Voorwaarden", termsTitle: "Algemene voorwaarden",
    termsBody: "Alle productinformatie is R&D / pre-launch. Definitieve claims, batch sheets en ingrediëntdeclaraties worden bij lotrelease uitgegeven. Bundle-prijzen gelden alleen voor complete protocolkits.",
  },
  products: {
    "oat-reset": {
      tagline: "Milde recovery-zeep voor de huid na belasting.",
      short: "Haver en shea kalmeren geïrriteerde huid zonder haar uit te drogen.",
      hero: "AX-08 OAT RESET SOAP is een milde recovery-zeep voor huid die na training en belasting tot rust moet komen.",
      description: "Haver en sheabutter kalmeren geïrriteerde huid zonder uit te drogen. Inzet in de RECOVER-fase, na het trainen.",
      highlightsTitle: "Voordelen",
      highlights: [
        "Kalmeert geïrriteerde, gestreste huid na intensieve sessies",
        "Vermindert jeuk en roodheid",
        "Ondersteunt het huidherstel",
        "Geschikt voor gevoelige en belaste huid",
        "Romig, fijn schuim — zonder uitdroging",
      ],
      protocol: "Op natte huid opschuimen, zacht inmasseren en grondig afspoelen. Ideaal na de training of 's avonds als reset-ritueel.",
      zone: "Lichaam · Post-Session",
      claim: "Kalmeert geïrriteerde huid zonder haar uit te drogen.",
      composition: [
        "Haver (Avena Sativa) · Sheabutter",
        "Plantaardige oliën (olijf · koolzaad · ricinus)",
        "Natuurlijke melk-honinggeur",
      ],
      spec: [
        { label: "Volume", value: "110 g" },
        { label: "Formaat", value: "Koud geroerd blok" },
        { label: "Gebruik", value: "Post-session · avond" },
        { label: "Herkomst", value: "Beieren · DE" },
      ],
      status: "Pre-launch · Lot 0419",
    },
    "shea-barrier": {
      tagline: "Parfumvrije zeep met een hoog aandeel sheabutter.",
      short: "Een hoog aandeel natuurlijke sheabutter voor barrièresteun en vocht.",
      hero: "AX-09 SHEA BARRIER SOAP bevat een hoog aandeel natuurlijke sheabutter voor huid die barrièresteun nodig heeft — parfumvrij en mild.",
      description: "Ondersteunt de huidbarrière en houdt vocht vast onder belasting. Inzet in de RECOVER-fase, voor gezicht, lichaam en scheren.",
      highlightsTitle: "Voordelen",
      highlights: [
        "Versterkt de natuurlijke huidbarrière",
        "Intensieve hydratatie",
        "Kalmeert droge en gevoelige huid",
        "Parfumvrij — ideaal voor gevoelige, reactieve huid",
        "Voor gezicht, lichaam en als milde scheerzeep",
      ],
      protocol: "Op natte huid opschuimen en inmasseren. Vooral na het sporten of bij droge, belaste huid. Grondig afspoelen.",
      zone: "Gezicht · Lichaam · Scheren",
      claim: "Ondersteunt de huidbarrière, houdt vocht vast.",
      composition: [
        "Hoog aandeel natieve sheabutter",
        "Olijfolie · koolzaadolie",
        "Ricinusolie",
      ],
      spec: [
        { label: "Volume", value: "110 g" },
        { label: "Formaat", value: "Koud geroerd blok" },
        { label: "Profiel", value: "Parfumvrij" },
        { label: "Herkomst", value: "Beieren · DE" },
      ],
      status: "Pre-launch · Lot 0419",
    },
    "pomegranate-glow": {
      tagline: "Regenererende zeep met granaatappel en vijg.",
      short: "Granaatappel- en vijgenextracten ondersteunen vernieuwing en een gezond finish.",
      hero: "AX-10 POMEGRANATE GLOW SOAP gebruikt granaatappel- en vijgenextracten ter ondersteuning van de vernieuwing — voor huid die tonus wil, geen stimulatie.",
      description: "Antioxidatieve ondersteuning voor een gebalanceerde teint. Inzet in de RECOVER-fase, ochtend of avond.",
      highlightsTitle: "Voordelen",
      highlights: [
        "Ondersteunt het natuurlijke huidherstel",
        "Verstevigt en verfijnt",
        "Antioxidatieve werking door granaatappel",
        "Bevordert een gezonde, stralende teint",
        "Geschikt voor veeleisende en volwassen huid",
      ],
      protocol: "Zacht opschuimen, inmasseren en na korte inwerktijd afspoelen. Het beste 's ochtends of 's avonds als glow-ritueel.",
      zone: "Gezicht · Lichaam · Glow-ritueel",
      claim: "Antioxidatieve steun met verstevigend finish.",
      composition: [
        "Granaatappelextract (Punica Granatum) · wilde vijg",
        "Sheabutter",
        "Hoogwaardige plantaardige oliën",
      ],
      spec: [
        { label: "Volume", value: "110 g" },
        { label: "Formaat", value: "Koud geroerd blok" },
        { label: "Gebruik", value: "ochtend · avond" },
        { label: "Herkomst", value: "Beieren · DE" },
      ],
      status: "Pre-launch · Lot 0419",
    },
    intense: {
      tagline: "Waterless balm voor dagelijkse geurregulatie.",
      short: "Een deodorant in balsemvorm, pH-gemoduleerd voor een normale tot hoge dagelijkse belasting.",
      hero: "AX-01 SODA-IN-OIL DEODORANT BALM is een watervrije balsem, afgestemd op dagelijks gebruik. Een lipidenmatrix draagt het actieve complex zonder de eigen oppervlaktelaag van de huid te verstoren.",
      description: "Het systeem werkt via gecontroleerde pH-modulatie en moleculaire binding, ingebed in een lipidenmatrix. Voor normale tot hoge belasting. Zonder aluminium.",
      highlightsTitle: "High performance, zonder compromis",
      highlights: [
        "Multi-mechanisme geurcontrole (pH · enzym · adsorptie)",
        "24–36 uur geurneutralisatie",
        "Dry-touch finish · geen occlusie, geen parfummasker",
        "100 % watervrij · aluminiumvrij · parfumvrij · vegan",
      ],
      protocol: "Eenmaal daags op schone, droge huid aanbrengen. Gebruik HAMAMELIS MIST vooraf voor een tonifiërende PREP-stap.",
      zone: "Axillair · Daily Core",
      claim: "Houdt de huidbalans de hele dag in stand.",
      composition: [
        "Butyrospermum Parkii (Shea) Butter · Candelilla Cera",
        "Ceramide NP · Heptyl Undecylenate",
        "Limnanthes Alba Seed Oil · Squalane",
        "Magnesium Hydroxide · Sodium Bicarbonate",
        "Tocopherol · Triethyl Citrate · Zinc Ricinoleate",
      ],
      spec: [
        { label: "Volume", value: "50 ml" },
        { label: "Formaat", value: "Violetglass pot" },
        { label: "Cyclus", value: "12 u evenwicht" },
        { label: "Herkomst", value: "Beieren · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "SODA-IN-OIL DEODORANT BALM is de high-performance daily voor de oksel. Een watervrije lipidearchitectuur die het huidmicroklimaat in balans houdt tijdens lange, veeleisende dagen.",
        what: "Een geconcentreerde daily-core balm. Geen antitranspirant, geen parfum — een Lipid-Buffered Dispersion die zweetchemie, frictie en bacteriële belasting 12 uur in balans houdt.",
        how: "Eén keer per dag 's ochtends op schone, droge huid. Breng een kleine hoeveelheid aan in de okselzone — inwrijven niet nodig.",
        who: "Voor actieve dagen, lange uren, reizen, hitte, sport, pak. Wanneer een normale deodorant na 4 uur opgeeft.",
        result: "Onmiddellijke droogheid zonder occlusie. Door de dag heen: geen geurkanteling, minder frictie, geen plakkerig residu op stof.",
      },
      faq: [
        { q: "Is het een deo of een antitranspirant?", a: "Geen van beide — het is een microklimaatmodule. Het blokkeert geen klieren, het houdt het huidoppervlak in balans." },
        { q: "Geeft het vlekken?", a: "Nee. De anhydrische formule is overdrachtsvrij op stof." },
        { q: "Mag ik het dagelijks gebruiken?", a: "Ja, SODA-IN-OIL DEODORANT BALM is gekalibreerd voor dagelijks gebruik." },
      ],
    },
    sensitive: {
      tagline: "Waterless balm voor gevoelige en reactieve huid.",
      short: "Dezelfde precisie in balsemvorm als AX-01, afgestemd op huid die terughoudendheid vraagt.",
      hero: "AX-02 NEURO-CALM DEODORANT BALM is afgestemd op reactieve huid. Werkt zonder parfum en zonder occlusie.",
      description: "Het systeem combineert geurregulatie met kalmerende lipiden. Voor lage tot middelhoge belasting en gevoelige huid. Zonder aluminium.",
      highlightsTitle: "Ontwikkeld voor gevoelige huid",
      highlights: [
        "Milde geurregulatie via zachte pH-modulatie",
        "Barrièrebeschermende lipidenmatrix met ceramiden en shea",
        "Geschikt na het scheren · geen branden, geen tintelen",
        "100 % watervrij · parfumvrij · alcoholvrij · vegan",
      ],
      protocol: "Eenmaal daags aanbrengen. Geschikt na het scheren en na RESET PEELING BALM.",
      zone: "Axillair · Reactief profiel",
      claim: "Vermindert geurvorming zonder agressieve ingreep.",
      composition: [
        "Butyrospermum Parkii (Shea) Butter · Candelilla Cera",
        "Ceramide NP · Heptyl Undecylenate",
        "Limnanthes Alba Seed Oil · Squalane",
        "Magnesium Hydroxide · Tocopherol",
        "Triethyl Citrate · Zinc Ricinoleate",
      ],
      spec: [
        { label: "Volume", value: "50 ml" },
        { label: "Formaat", value: "Violetglass pot" },
        { label: "Profiel", value: "Reactief" },
        { label: "Herkomst", value: "Beieren · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "NEURO-CALM DEODORANT BALM is de dagelijkse verzorging voor reactieve okselzones. Parfumvrij, kalmerend, volledig effectief — ontworpen voor huid die op conventionele deo's reageert met branden, roodheid of jeuk.",
        what: "Een watervrije daily-core module met een Neuro-Calm Lipid Buffer. Het verlaagt de reactiviteit aan het oppervlak, ondersteunt de lipidelaag en houdt het microklimaat stabiel — zonder occlusie.",
        how: "Eén keer per dag 's ochtends op schone, droge huid. Geschikt direct na het scheren en na RESET PEELING BALM.",
        who: "Voor gevoelige, reactieve of eczeemgevoelige huid. Ook na het scheren, bij hitte of in hormonale fases met verhoogde prikkelbaarheid.",
        result: "Geen branden bij applicatie. Over 7–14 dagen: kalmere huid, duidelijk verminderde reactiviteit, stabiele bescherming zonder zwaarte.",
      },
      faq: [
        { q: "Is het een antitranspirant?", a: "Nee. NEURO-CALM DEODORANT BALM reguleert het microklimaat maar blokkeert geen zweetklieren." },
        { q: "Werkt het na het scheren?", a: "Ja — het is specifiek voor post-shave gebruik gekalibreerd." },
        { q: "Bevat het aluminium of parfum?", a: "Nee. Geen van beide." },
      ],
    },
    reset: {
      tagline: "Waterless peeling balm om de huid voor te bereiden.",
      short: "Een watervrije suiker-olietextuur die mechanisch werkt, niet via actieve stoffen.",
      hero: "AX-03 RESET PEELING BALM verwijdert restanten en bereidt de huid voor op de volgende fase. Geen dagelijkse stap — een gerichte.",
      description: "Verwijdert overtollige resten en bereidt de huid voor op de volgende fases. Inzet in de PREP-fase.",
      highlightsTitle: "De systeemstap vóór de deodorant",
      highlights: [
        "Sugar-Polish System™ (55 % sucrose) · puur mechanisch",
        "Zonder zuren, enzymen of tensiden",
        "Barrièrebehoudende olie-DNA (identiek aan de deomodules)",
        "100 % watervrij · vegan · parfumvrij · slechts 5 INCI",
      ],
      protocol: "1–2× per week. Op droge huid masseren, afspoelen, vervolgen met SODA-IN-OIL DEODORANT BALM of NEURO-CALM DEODORANT BALM.",
      zone: "Axillair · Pre-Engage",
      claim: "Verwijdert restanten in één beweging.",
      composition: [
        "Sucrose (55 %) · Squalane",
        "Limnanthes Alba (Meadowfoam) Seed Oil",
        "Ceramide NP · Tocopherol",
      ],
      spec: [
        { label: "Volume", value: "75 ml" },
        { label: "Formaat", value: "Violetglass pot" },
        { label: "Gebruik", value: "1–2× / week" },
        { label: "Herkomst", value: "Beieren · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "RESET PEELING BALM is de wekelijkse herstart voor je okselzone. Een watervrije olie-mineraalmatrix die in één doorgang resten van deodorant, zweet en frictie oplost en het huidoppervlak heruitlijnt.",
        what: "Een masseerbare pre-treatment balm van fijne mineraaldeeltjes in een oliedrager. Geen schuim, geen tensiden, geen uitdroging.",
        how: "1–2× per week op droge huid, 30 seconden zacht inmasseren, afspoelen met warm water. Direct daarna SODA-IN-OIL DEODORANT BALM of NEURO-CALM DEODORANT BALM aanbrengen.",
        who: "Voor wie helderheid nodig heeft tussen deo's door, na sport- of hittezware weken, of wanneer de oksel aanvoelt als bedekt.",
        result: "Direct gladdere, schonere huid. Betere opname van de daily-core producten. Minder eigen geur over de week.",
      },
      faq: [
        { q: "Is dit een peeling?", a: "Nee, het is een mechanische reset zonder zuren of grove korrels — barrièrevriendelijk." },
        { q: "Mag ik het na het scheren gebruiken?", a: "Houd 24 uur afstand tot het scheren." },
        { q: "Hoe vaak per week?", a: "1–2×. Meer is niet beter." },
      ],
    },
    powder: {
      tagline: "Fijn afgestemd poeder voor vocht- en frictiecontrole.",
      short: "Een verenlicht mineraalpoeder dat vocht via fysica regelt, niet via actieve stoffen.",
      hero: "AX-04 FINISHING POWDER sluit het AX Protocol af met een puur mechanische laag — zonder actieve stoffen, zonder ingreep in de barrière.",
      description: "Sluit het systeem af en vermindert mechanische belasting gedurende de dag. Inzet in de FINISH-fase.",
      highlightsTitle: "Droog. Comfortabel. Onder controle.",
      highlights: [
        "Absorption Matrix™ met kaolien en arrowroot",
        "Directe mattering · vermindert huid-op-huid wrijving",
        "Geen antitranspirant · geen klierblokkade",
        "100 % watervrij · vegan · parfumvrij · slechts 4 INCI",
      ],
      protocol: "Aanbrengen als finale laag over SODA-IN-OIL DEODORANT BALM of NEURO-CALM DEODORANT BALM. Aanpassen aan klimaat en outfit.",
      zone: "Axillair · Finish-laag",
      claim: "Minder wrijving, niet minder biologie.",
      composition: [
        "Kaolin · Maranta Arundinacea Root Powder",
        "Magnesium Hydroxide · Tocopherol",
      ],
      spec: [
        { label: "Volume", value: "40 g" },
        { label: "Formaat", value: "Violetglass doos · gouden dial" },
        { label: "Gebruik", value: "Finale laag · op aanvraag" },
        { label: "Herkomst", value: "Beieren · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "FINISHING POWDER is de onzichtbare slotlaag. Een vederlicht mineraalpoeder dat vocht en frictie gedurende de dag fysiek reguleert — zonder actieve stoffen, zonder de verzorging eronder te verstoren.",
        what: "Een ultrafijn, ongeparfumeerd poeder. Het legt zich als een dunne sluier over SODA-IN-OIL DEODORANT BALM of NEURO-CALM DEODORANT BALM en bindt overtollig vocht.",
        how: "Een kleine draai aan de titanium dial, met vingertop of pad in de oksel deppen. Ideaal na het aankleden — net voor meetings, workouts, reizen.",
        who: "Voor wie gevoelig is voor zweet, frictie of overdrachtsvlekken — vooral bij hitte, donkere kleding, workwear of strakke stoffen.",
        result: "Droog, glad huidgevoel urenlang. Minder zweetvlekken, minder frictie, geen poederige look.",
      },
      faq: [
        { q: "Verstopt het de poriën?", a: "Nee. De mineraalmatrix is niet-occlusief en ademend." },
        { q: "Mag ik het alleen gebruiken?", a: "Ja, maar het volledige effect komt over SODA-IN-OIL DEODORANT BALM of NEURO-CALM DEODORANT BALM als slotlaag." },
        { q: "Geeft het vlekken op kleding?", a: "Nee. Helder, ultrafijn, residuvrij op stof." },
      ],
    },
    "lip-sculpt": {
      tagline: "Waterless lippenbalsem met lipidenstructuur in plaats van stimulatie.",
      short: "Een lipidebasis-lippenbalsem die vormt en verzacht, zonder tintelen of irritatie.",
      hero: "AX-07 LIP SCULPT BALM is een watervrije lippenformule — gevormde, zichtbaar gladdere lippen zonder tintelen, glans of irritatie.",
      description: "Vormt en verzacht zichtbaar, zonder tinteling of irritatie. Voor dagelijkse lipverzorging, ochtend en avond.",
      highlightsTitle: "Sculpt in plaats van stimulatie",
      highlights: [
        "Soft-focus oppervlak · zichtbaar gladdere lijnen",
        "Olie-gedispergeerd hyaluronaat voor optisch volume",
        "Langdurig comfort · niet plakkerig",
        "100 % watervrij · vegan · palmolievrij · barrièrevriendelijk",
      ],
      protocol: "Dun op de lippen aanbrengen, indien nodig meerdere keren per dag herhalen. 's Avonds royaler als overnight-treatment.",
      zone: "Lippen · Contour & rand",
      claim: "Structuur, geen stimulatie.",
      composition: [
        "Squalane · Butyrospermum Parkii Butter",
        "Limnanthes Alba Seed Oil · Candelilla Cera",
        "Sodium Hyaluronate (oil-dispersed)",
        "Vanilla Planifolia Fruit Extract · Tocopherol",
      ],
      spec: [
        { label: "Volume", value: "15 ml" },
        { label: "Formaat", value: "Violetglass pot" },
        { label: "Gebruik", value: "AM · PM" },
        { label: "Herkomst", value: "Beieren · DE" },
      ],
      status: "Final · Lot 0419",
      consumer: {
        intro: "LIP SCULPT BALM modelleert de lippen optisch — 100 % watervrij, vegan, palmolievrij en barrièrevriendelijk.",
        what: "Een soft-focus lippenbalsem: een gereduceerde lipidenmatrix met in olie gedispergeerd hyaluronaat voor zichtbaar gladdere lijntjes en optisch volume.",
        how: "Dun aanbrengen, gedurende de dag herhalen indien nodig. 's Avonds royaler als overnight-treatment.",
        who: "Voor gevoelige lippen en voor wie structuur wil in plaats van glans — dagelijks draagbaar, nooit kleverig.",
        result: "Een soft-focus oppervlak, zichtbaar gladdere lijntjes en een voller uitziende lip — met langdurig comfort.",
      },
      faq: [
        { q: "Is het een lipgloss?", a: "Nee. Geen glansfilm maar een structuurbalsem met matte finish." },
        { q: "Kan ik er lippenstift over dragen?", a: "Ja. Laat 2 minuten intrekken en werk daarna als gewoonlijk." },
        { q: "Hoe vaak per dag?", a: "Twee keer als ritueel, plus na belasting." },
      ],
    },
    "hamamelis-mist": { tagline: "Een toner mist met één ingrediënt, puur gedistilleerd.", short: "Puur hamamelishydrolaat dat de huid tonifieert en voorbereidt zonder alcohol, verdunning of toevoegingen.", hero: "AX-05 HAMAMELIS MIST is een toner mist met één ingrediënt, puur gedistilleerd en alcoholvrij.", description: "Een hydrolaat met één ingrediënt — Hamamelis Virginiana Leaf Water, alcoholvrij, eenmaal gedistilleerd en verder ongemoeid gelaten. Als eerste stap vóór stabilisatie bereidt en tonifieert het zonder onnodige ingrediënten, verdunning, toevoegingen of parfum.", highlightsTitle: "Puur gedistilleerd", highlights: ["100 % Hamamelis Virginiana Leaf Water", "Formule met één ingrediënt", "Alcoholvrije distillatie", "PREP-stap vóór Neuro-Calm"], protocol: "Vernevel op een schone huid, laat kort intrekken en breng daarna NEURO-CALM aan.", zone: "Gezicht · Hals · Scheerzone", claim: "Eenmaal gedistilleerd. Verder ongemoeid.", composition: ["Hamamelis Virginiana (Witch Hazel) Leaf Water"], spec: [{ label: "Volume", value: "100 ml" }, { label: "Formaat", value: "Miron Violetglass sprayflacon" }, { label: "Gebruik", value: "PREP · vóór Neuro-Calm" }, { label: "Oorsprong", value: "Beieren · DE" }], status: "Pre-launch · Lot 0419" },
    "pre-shave-oil": { tagline: "De stap vóór het mes.", short: "Een licht oliecomplex voor gecontroleerde glide en minder meswrijving.", hero: "AX-06 PRE-SHAVE OIL vormt een gecontroleerde glijlaag voordat het mes de huid raakt.", description: "Een lichte pre-shave olie: argan en jojoba creëren glide, squalaan stabiliseert de film en tocoferol beschermt tegen oxidatieve stress. Samen met de post-shave recovery-stap sluit het de cyclus van voorbereiding tot herstel.", highlightsTitle: "Vóór het mes", highlights: ["Argan- + jojobaoliecomplex", "Door squalaan gestabiliseerde glijlaag", "Vermindert meswrijving", "PREP-stap vóór het scheren"], protocol: "Masseer enkele druppels in een schone, vochtige huid vóór het scheren en volg met de recovery-stap.", zone: "Gezicht · Hals · Scheerzone", claim: "De stap vóór het mes.", composition: ["Argania Spinosa Kernel Oil · Simmondsia Chinensis Seed Oil", "Squalane · Tocopherol"], spec: [{ label: "Volume", value: "50 ml" }, { label: "Formaat", value: "Miron Violetglass druppelflacon" }, { label: "Gebruik", value: "PREP · vóór het scheren" }, { label: "Oorsprong", value: "Beieren · DE" }], status: "Pre-launch · Lot 0419" },
  },
  bundle: { name: "THE AX PROTOCOL", short: "De instap in het protocol: PREP · ENGAGE · RECOVER · FINISH — vier dagelijkse modules. Hamamelis Mist, Pre-Shave Oil en Lip Sculpt Balm vullen het ritueel gericht aan." },
  shield: {
    "tracksuit": {
      tagline: "Gedistilleerd hamamelis-hydrolaat, alcoholvrij.",
      description: "Één ingrediënt, geen formule — puur plantenwater als tonerstap voor de stabilisatie. Inzet in de PREP-fase.",
      benefits: ["480 g/m² biologisch katoen", "Oversized unisex pasvorm · drop shoulder", "Geruwde binnenzijde", "Voorgekrompen · wasbaar op 40 °C"],
    },
    "zone-boxers": {
      tagline: "Wrijvingsvrije boxershort voor de reactieve zone.",
      description: "Een unisex boxershort in een katoen-zijdemix, met wijde broekspijp en zachte omzoomde tailleband — ontworpen om mechanische wrijving te verminderen in plaats van te maskeren. Zijde brengt het wrijvingsarme oppervlak over de reactieve zone; biologisch katoen daaronder regelt vocht en ademend vermogen. Volledig platte naden — geen schuurpunten, geen drukranden. Voor sport, voor reizen en voor huid onder dagelijkse belasting.",
      benefits: ["Katoen-zijdemix · minder oppervlaktewrijving", "Ruime unisex boxerpasvorm · omzoomde tailleband", "Platte naden · geen schuren", "Sport- & gevoelige-huidprofiel"],
    },
    "towel-set": {
      tagline: "Neutraal wit katoen — big size plus sportformaat.",
      description: "Een tweedelige handdoekset in neutraal wit langstapelkatoen: een oversized badlaken van 100 × 180 cm en een kleine sporthanddoek van 40 × 90 cm voor de sporttas, de baan of het reisetui. 700 g/m² dubbelgetwijnde badstof, pluisarm, sneldrogend, met versterkte zoom en ingeweven ZONES FABRICS vlagpatch in wit en goud — hetzelfde merkteken als op tracksuit, boxer en tee.",
      benefits: ["700 g/m² langstapel katoenbadstof", "Badlaken 100 × 180 cm + sporthanddoek 40 × 90 cm", "Neutraal wit · ingeweven ZONES FABRICS vlagpatch", "Pluisarm · sneldrogend · wasbaar op 60 °C"],
    },
    "zone-tee": {
      tagline: "Oversized unisex base layer met okselgusset.",
      description: "Een oversized unisex tee als echte base layer: een eigen gussetpaneel in de okselzone regelt vocht precies waar het AX-protocol op de huid eronder werkt. Zware jersey, drop shoulder, bewust ruime pasvorm. Onder de tracksuit, onder elke laag — of los.",
      benefits: ["Okselgussetpaneel", "Oversized unisex fit · drop shoulder", "Vochtregulerende zware jersey", "Voorgekrompen · wasbaar op 40 °C"],
    },
  },
  carry: {
    "travel-case": {
      tagline: "Het protocol, ingepakt.",
      description: "Een verzorgingsetui met rits in waterafstotend technisch canvas met zwart leren bies — hetzelfde zandbeige als de Hand Clutch. Op maat voor het volledige AX Protocol, afneembare voering, unisex.",
      features: ["Formaat 24 × 17 × 6 cm", "Waterafstotend technisch canvas", "Zwart leren bies · metalen rits", "Afneembare voering · past het AX Protocol"],
    },
    "hand-clutch": {
      tagline: "Klein formaat, volledige houding.",
      description: "Een platte handtas om in de hand te dragen: zandbeige technisch canvas, zwarte leren randen en hoeken, afneembaar leren handlusje. Binnenin een kaartvak en ruimte voor één AX-module.",
      features: ["Handformaat 26 × 18 × 3 cm", "Technisch canvas · leren randen", "Afneembaar handlusje", "Kaartvak · unisex"],
    },
  },
};

/* =================== ES =================== */
const es: Dict = {
  blueprint: { title: "Plano técnico", tech: "Tecnología", material: "Material", measure: "Medida" },
  exploded: { eyebrow: "Construcción", title: "Vista despiezada.", lead: "Tres componentes, un sistema. Al desplazarte, tapa, cuerpo y núcleo activo se separan — y se vuelven a unir al final.", hint: "Desplazar", cap: "Tapa", body: "Cuerpo", core: "Núcleo activo" },
  zoneMap: { eyebrow: "Zonas", title: "Elige por zona.", lead: "Cada zona tiene sus exigencias. Pasa el cursor por una zona — el protocolo muestra los módulos adecuados.", hint: "Elegir zona", zones: { axilla: "Axilas", face: "Rostro y cuello", body: "Cuerpo y piernas" }, cta: "Abrir módulo →" },
  nav: { home: "ZONES", products: "Colección", signature: "Signature", accessories: "Accesorios", journal: "Journal", art: "Collab de Arte", protocol: "Sistema", shield: "Fabrics", club: "Community", contact: "Contacto", shop: "Tienda", menu: "Menú", carry: "Carry", smart: "Tecnología", language: "Idioma" },
  footer: {
    tagline: "Applied Lipid Science · Microclima Axilar",
    blurb: "Diseñado en Baviera. Formulado para apoyar la barrera lipídica y mantener el equilibrio del microclima a lo largo de los ciclos diarios de exposición.",
    system: "Sistema", lab: "Laboratorio", legal: "Legal", imprint: "Aviso legal", withdrawal: "Desistimiento", privacy: "Privacidad", terms: "Términos", shippingPayment: "Envío & pago",
    rights: "Todos los derechos reservados", origin: "Made in Bavaria · Clinically Engineered",
  },
  common: {
    addToCart: "Añadir al carrito", addedToCart: "añadido al carrito (vista previa)", learnMore: "Saber más",
    openDossier: "Abrir dossier →", next: "Siguiente", back: "Atrás", viewPortfolio: "Ver portfolio",
    enterProtocol: "Entrar al protocolo →", fullPortfolio: "Portfolio completo →", readTechnology: "Leer la tecnología →",
    enterShield: "Descubrir Fabrics →", joinClub: "Solicitar acceso →", contactLab: "Contactar el laboratorio →",
    returnPortfolio: "Volver al portfolio AX →", openModule: "Abrir dossier del módulo →",
    addBundleToCart: "Añadir bundle al carrito →", scroll: "Desplazar", phase: "Fase", module: "Módulo",
    technology: "Tecnología", claim: "Claim", composition: "Composición", protocolLabel: "Protocolo",
    specs: "Especificaciones", heroMechanism: "Mecanismo principal", techComplex: "Tech / Complejo", zone: "Zona",
    notFoundTitle: "Señal perdida", notFoundLead: "El protocolo solicitado está fuera de este sistema.",
    notFoundCta: "Volver al laboratorio", signalLost: "Señal perdida", skuNotFound: "SKU no encontrado",
    backPortfolio: "Volver al portfolio", preorder: "Disponible · Lot 0419", colorLabel: "Color",
    inPlainWords: "En palabras claras", whatItIs: "Qué es", howToUse: "Cómo se usa", whoItsFor: "Para quién", whatYouGet: "Lo que notas", faqTitle: "Preguntas frecuentes",
    relatedModules: "Más módulos", standardsTitle: "Estándares", inProtocol: "En el protocolo", backToCollection: "Volver a la colección", preorderNow: "Reservar ahora", ingredientsTitle: "Activos", ingredientsHead: "Qué contiene — y por qué.", ingredientsLead: "Cada materia prima tiene una función. Aquí está el nombre INCI, el nombre común y el beneficio en una frase.", ingredientsNote: "Datos INCI según la formulación actual. Claims cosméticos — sin promesas médicas.", claimsHead: "Estándares válidos para todos los módulos.",
  },
  home: {
    metaTitle: "ZONES LAB™ — AX PROTOCOL · Applied Lipid Science",
    metaDesc: "AX PROTOCOL de Zones Lab. Lipid-Buffered Dispersion de ingeniería diseñada para apoyar la integridad de la barrera y mantener el equilibrio del microclima axilar.",
    systemOnline: "Sistema en línea · Baviera · 2026",
    heroLine1: "ZONES", heroLine2: "LAB™",
    heroIntro: "Seis líneas claramente ordenadas: AX Cosmetics para el cuidado funcional, OLF-01 como firma olfativa, ZONES Fabrics para el rendimiento textil, Superfood café para el origen, Accessories para el ritual y ZONES × REZA para el arte.",
    heroRef: "Referencia",
    heroPrimary: "Iniciar el sistema", heroSecondary: "Entender AX Protocol",
    routeEyebrow: "002 / Surtido", routeTitle: "Elige tu entrada.", routeLead: "Cuatro líneas claramente separadas. Cada una tiene una función y una ruta directa al producto adecuado.",
    routeCards: [
      { eyebrow: "Applied Lipid Science", title: "AX COSMETICS", body: "Diez módulos funcionales en cuatro fases, de la preparación al acabado.", cta: "Ver colección" },
      { eyebrow: "Parfum · fuera del sistema", title: "OLF-01 SIGNATURE", body: "Una firma olfativa en dos alcances. Llevada, no dosificada.", cta: "Descubrir Signature" },
      { eyebrow: "Applied Fiber Science", title: "ZONES FABRICS", body: "Cuatro objetos textiles para piel, movimiento y recuperación.", cta: "Descubrir Fabrics" },
      { eyebrow: "Sourced in Europe", title: "ACCESSORIES", body: "Objetos curados en olivo, porcelana y acero.", cta: "Ver accesorios" },
    ],
    coreTitleA: "Tu entrada.", coreTitleB: "Dos perfiles.", coreLead: "INTENSE para alta exigencia. SENSITIVE para piel reactiva. Ambos forman el núcleo diario del AX Protocol.",
    assortmentTitle: "Tres mundos más.", assortmentLead: "Aroma, textiles y objetos rituales curados — independientes, sin diluir la lógica del AX Protocol.",
    sectionHero: "001 / Hero", sectionManifesto: "002 / Manifiesto", sectionTech: "003 / Solución",
    sectionProtocol: "004 / Protocolo", sectionPortfolio: "005 / Portfolio", sectionShield: "006 / Fabrics",
    sectionBundle: "◆ El Sistema", sectionClub: "007 / ZONES CLUB",
    manifestoTitle: { a: "La piel entre el movimiento y la quietud es un ", alpine: "microclima", b: " vivo — no un problema que silenciar." },
    manifestoBody1: "Los sistemas convencionales chocan la barrera. Enmascaran. Despojan. Fuerzan una sola señal a través de una interfaz viva diseñada para el matiz.",
    manifestoBody2: "AX PROTOCOL está construido sobre la contención. Arquitectura anhidra, Lipid-Buffered Dispersion y Zero-Shock Technology — formulados para apoyar la barrera, no para anularla.",
    manifestoLead: "El Problema · §01 — §03",
    techTitleA: "Zero-Shock", techTitleB: "Technology",
    techLead: "Tres módulos de ingeniería — Lipid-Buffered Dispersion, el Hydrophobic Gate y la rejilla mineral Bavarian Alpine — operando como una sola arquitectura continua.",
    techStats: [
      { v: "98,4 %", k: "Índice de integridad lipídica", n: "Día 14 in vitro" },
      { v: "12 h", k: "Ventana time-release", n: "Ciclo de equilibrio" },
      { v: "Δ 0,6 °C", k: "Estabilidad del microclima", n: "vs protocolo de control" },
    ],
    protocolTitleA: "Cuatro fases.", protocolTitleB: "Un equilibrio.",
    protocolSteps: [
      { n: "01", t: "PREP", d: "Resetear el microclima. Estado Blank Canvas." },
      { n: "02", t: "ENGAGE", d: "Daily Core. Ventana de equilibrio de 12 horas." },
      { n: "03", t: "RECOVER", d: "LipidShield refuerza. Vuelta a la baseline." },
      { n: "04", t: "FINISH", d: "Física, no biología. Seco, sedoso, sin fricción." },
    ],
    portfolioTitleA: "Siete módulos.", portfolioTitleB: "Una arquitectura.",
    portfolioLead: "SODA-IN-OIL DEODORANT BALM · NEURO-CALM DEODORANT BALM · RESET PEELING BALM · FINISHING POWDER · HAMAMELIS MIST · PRE-SHAVE OIL · LIP SCULPT BALM. Arquitectura a lo largo del ciclo del AX Protocol.",
    shieldTitlePre: "ZONES", shieldTitleMid: "| FABRICS", shieldTitleEnd: "Applied Fiber Science.",
    shieldLead: "Tres objetos unisex de corte ligeramente oversize: el chándal en algodón orgánico de 480 gsm, los Zone Boxers en algodón-seda y la Zone Tee con refuerzo axilar.",
    bundleSaves: (n) => `Ahorras €${n}`,
    clubTitleA: "Sin precio.", clubTitleB: "Solo acceso.",
    clubLead: "El ZONES CLUB es por invitación: sin cuota, sin suscripción. Membresías numeradas, plazas limitadas por lot — acceso anticipado, prioridad de recarga, dossiers de laboratorio.",
    archiveEyebrow: "004 / Archivo",
    archiveTitle: "El archivo visual.",
    archiveLead: "Cuatro líneas, un clima. Lo que toca la piel, lo que se lleva sobre ella — y lo que sigue a los rituales.",
    archiveQuoteTitle: "Calidad sistémica",
    archiveQuoteBody: "Un lenguaje visual para el mundo físico — desarrollado desde la investigación material, no desde la decoración.",
    archiveItemLabels: ["01. Signature", "02. Fabrics", "03. Accessories", "04. Cosmetics"],
    archiveItemQuotes: ["Heritage", "Applied Fiber Science", "Curated Objects", "The tactile ritual of high performance."],

  },
  productsPage: {
    metaTitle: "Productos — ZONES LAB™ AX Protocol",
    metaDesc: "Diez productos en cuatro fases: bálsamos desodorantes, reset, jabones recovery, finishing powder, hamamelis mist, pre-shave oil y lip balm.",
    eyebrow: "Portfolio · 2026",
    titleA: "Diez productos.", titleB: "Cuatro fases claras.",
    lead: "Empieza con Intense o Sensitive. Después añade solo lo que tu rutina necesite — PREP · ENGAGE · RECOVER · FINISH.",
    systemCore: "NÚCLEO DEL SISTEMA",
    startHere: "EMPIEZA AQUÍ",
    refillBadge: "RECARGA",
    refillAction: "RELLENAR",
    emptyCategory: "No hay productos en esta categoría.",
    categories: { all: "Todos", performance: "Aplicar", sensitive: "Sensible", prep: "Preparar", repair: "Recuperación", recovery: "Recovery Soaps", finish: "Finish" },
    bundleEyebrow: "◆ Bundle",
    bundleSaves: (n) => `Ahorras €${n}`,
    finder: {
      cta: "Encuentra tu módulo",
      title: "Tres preguntas. Dos o tres recomendaciones.",
      hint: "Elige zona, tipo de piel y objetivo — mostramos los módulos adecuados.",
      close: "Cerrar",
      reset: "Reiniciar",
      resultLabel: "Recomendación",
      empty: "Responde a las tres preguntas.",
      zoneLabel: "Zona",
      zone: { axilla: "Axilas", face: "Rostro & cuello", body: "Cuerpo & piernas" },
      skinLabel: "Piel",
      skin: { robust: "Robusta", sensitive: "Sensible", dry: "Seca" },
      goalLabel: "Objetivo",
      goal: { fresh: "Frescura diaria", recover: "Recuperación", finish: "Suavidad & acabado" },
      reasons: {
        intense: "Para alta exigencia — mantiene el microclima estable todo el día.",
        sensitive: "Sin perfume y calmante para zonas reactivas.",
        reset: "Prepara la zona y elimina residuos en una sola pasada.",
        powder: "Reduce fricción y humedad — mecánicamente, sin activos.",
        "lip-sculpt": "Ilusión óptica de volumen mediante diseño lipídico — esculpir en lugar de estimular.",
        "hamamelis-mist": "Hidrolato puro de hamamelis como paso PREP tonificante.",
        "pre-shave-oil": "Deslizamiento controlado y menor fricción antes del afeitado.",
      },
    },
  },
  productDetail: { nextModule: "Siguiente módulo", metaSuffix: "ZONES LAB™" },
  signature: {
    tagline: "Una fórmula. Dos alcances.",
    hero: "OLF-01 es como suena la arquitectura olfativa ZONES cuando se lleva, no cuando se dosifica. La misma lógica de ingeniería que el AX Protocol — vetiver, madera de cedro, olíbano — a intensidad de parfum en lugar de concentración traza. Dos alcances de una firma: uno diseñado para llegar a la sala, otro para quedarse exactamente donde lo aplicas.",
    description: "El AX Protocol mide OLF-01 en fracciones de porcentaje. Aquí se lleva al 20% — intensidad de parfum, no un añadido aromático secundario. Ambos alcances comparten el mismo acorde central. Lo que los separa es el radio: hasta dónde está diseñada la firma para viajar antes de desvanecerse.",
    protocol: "Aplicar en puntos de pulso o superponer sobre cualquier producto AX Protocol. A diferencia de los módulos funcionales, OLF-01 no tiene función PREP, ENGAGE, RECOVER ni FINISH — úsalo de forma independiente cuando quieras que la firma hable.",
    variantsLabel: "Elige el alcance", selectVariant: "Seleccionar variante", compositionLabel: "Composición",
    comparisonTitle: "¿Qué alcance encaja contigo?", comparisonLead: "El mismo acorde central, un radio distinto. Elige según la situación, no la familia olfativa.",
    comparisonRows: [{ label: "Radio", broadcast: "Llena la sala", skinClose: "Cerca de la piel" }, { label: "Difusión", broadcast: "Iso E Super + Ambroxan", skinClose: "Reducida" }, { label: "Traza de oud", broadcast: "Presente", skinClose: "Sin oud" }, { label: "Ideal para", broadcast: "Noche · entrada · presencia", skinClose: "Día · cercanía · discreción" }],
    variants: {
      broadcast: { name: "BROADCAST", tagline: "Creado para hacerse notar. El acorde completo, el radio completo.", description: "El motor está en marcha. La traza de oud permanece intacta, Iso E Super y Ambroxan llevan el acorde más allá de tu propio perímetro — esta es la fórmula que responde al brief original: la gente entra en el aroma antes de verte." },
      "skin-close": { name: "SKIN-CLOSE", tagline: "La misma firma, mantenida cerca. Para salas, no pasarelas.", description: "El mismo acorde, diseñado hacia abajo en lugar de hacia fuera. La traza de oud desaparece, el motor de difusión se apaga — quedan vetiver, madera de cedro y olíbano directamente sobre la piel, con un radio medido en centímetros, no en salas. Creado para las horas entre vestirse y salir por la puerta, no para la entrada en sí." },
    },
  },
  accessoriesPage: accessoryTranslations.es.page,
  accessories: accessoryTranslations.es.items,
  protocolPage: {
    metaTitle: "El Protocolo & la Tecnología — ZONES LAB™",
    metaDesc: "PREP · ENGAGE · RECOVER · FINISH. Cuatro fases, siete módulos. Lipid-Buffered Dispersion, Hydrophobic Gate, matriz Soda-in-Oil — la arquitectura completa del AX System.",
    eyebrow: "El Protocolo · 2026",
    titleA: "Cuatro fases.", titleB: "Un equilibrio.",

    lead: "El AX Protocol es una sola arquitectura continua — Lipid-Buffered Dispersion, el Hydrophobic Gate y la rejilla mineral Bavarian Alpine funcionan como un único marco de barrera.",
    architecture: "Arquitectura",
    architectureTitleA: "Lipid-Buffered Dispersion.",
    architectureTitleB: "Un marco de barrera continuo.",
    architectureModules: [
      { t: "Hydrophobic Gate", d: "Arquitectura de paso selectivo alineada con la capa lipídica de superficie." },
      { t: "Lipid-Buffered Dispersion", d: "Matriz portadora anhidra que entrega activos sin shock hídrico." },
      { t: "Bavarian Alpine Mineral Grid", d: "Marco mineral calibrado para el microclima axilar." },
    ],
    openPortfolio: "Abrir el portfolio →",
    steps: [
      { title: "Resetear el microclima.", body: "AX-03 RESET PEELING BALM retira residuos y realinea la capa lipídica de superficie en un solo paso. El estado Blank Canvas — el requisito previo para ENGAGE." },
      { title: "Daily Core. Equilibrio de 12 horas.", body: "AX-01 SODA-IN-OIL DEODORANT BALM o AX-02 NEURO-CALM DEODORANT BALM lleva la matriz activa a través del Hydrophobic Gate. Time-released, anhidra, totalmente alineada con la barrera." },
      { title: "Preparar y tonificar.", body: "AX-05 HAMAMELIS MIST prepara la piel con un hidrolato puro y sin alcohol." },
      { title: "Antes de la cuchilla.", body: "AX-06 PRE-SHAVE OIL crea deslizamiento controlado con argán, jojoba y escualano." },
    ],

  },
  shieldPage: {
    metaTitle: "ZONES FABRICS — Applied Fiber Science",
    metaDesc: "ZONES FABRICS: ciencia aplicada de la fibra para el movimiento y la regeneración. Tracksuit oversize, bóxer algodón-seda, camiseta base layer y set de toallas.",
    eyebrow: "ZONES | FABRICS",
    claim: "Applied Fiber Science · Ciencia aplicada de la fibra",
    titleA: "ZONES",
    titleB: "FABRICS",
    lead: "Cuatro objetos textiles para el movimiento, el descanso y la regeneración: un tracksuit oversize en algodón orgánico de 480 g/m², un bóxer algodón-seda con costuras planas, una camiseta base layer con gusset axilar y el set de toallas en rizo de 700 g/m².",
    closingTitle: "Fabrics que trabajan con la piel.", quickNav: "Ir al producto",
  },
  carryPage: {
    metaTitle: "ZONES | CARRY — Objetos cotidianos",
    metaDesc: "Estuche de cuidado con cremallera y clutch de mano a juego en lona técnica beige arena con ribete de cuero negro.",
    eyebrow: "ZONES | CARRY",
    titleA: "Carry.",
    titleB: "Para el camino.",
    lead: "Dos objetos que acompañan al protocolo: un estuche de cuidado para el camino y un clutch de mano a juego, en el mismo beige arena. Hechos para durar.",
    closingTitle: "Carry que va contigo.",
  },
  smartPage: {
    metaTitle: "Smart — Waterless by Design · ZONES LAB™",
    metaDesc: "Matriz Soda-in-Oil (SiO) · Waterless · Sin aluminio · Hormone friendly · Microbiome friendly. Alto rendimiento que resulta ser sostenible.",
    eyebrow: "Smart · Waterless by Design",
    titleA: "High Performance.",
    titleB: "Sin agua. Punto.",
    lead: "No diluimos nuestras fórmulas con agua. Cada gramo de ZONES™ es rendimiento puro — más eficiente para tu piel, mejor para el planeta.",
    efficiencyEyebrow: "001 / Efficiency Statement",
    efficiencyTitle: "Waterless by Design.",
    efficiencyBody: "Las fórmulas convencionales usan agua como vehículo. Construimos de otra manera: activos seleccionados en una matriz Soda-in-Oil (SiO), sin agua y estructurada por función.",
    waterlessChartTitle: "Contenido de agua por gramo de fórmula",
    waterlessUsLabel: "ZONES™ AX / P [SiO]",
    waterlessThemLabel: "Desodorante convencional",
    waterlessNote: "Densidad pura de activos vs dilución acuosa.",
    scienceEyebrow: "002 / Science Deep-Dive",
    scienceTitle: "Matriz Soda-in-Oil (SiO).",
    scienceBody: "Nuestra matriz SiO se basa en tecnología Waterless. En lugar de agua, lípidos puros y activos bio-engineered llevan el LipidShield Complex™ a la barrera — reparación activa, no enmascaramiento.",
    matrixCaption: "Cuatro capas. Una arquitectura.",
    matrixLipid: "Vector lipídico · LipidShield Complex™",
    matrixSoda: "Módulo Soda · regulación pH",
    matrixMineral: "Rejilla mineral Bavarian Alpine",
    matrixPeptide: "Arquitectura portadora anhidra",
    standardsEyebrow: "003 / Standards Checklist",
    standardsTitle: "Lo que no somos.",
    standardsLead: "Un vistazo rápido. ZONES™ supera los estándares modernos — por limpieza técnica, no por moda.",
    standardsRows: [
      { label: "Sin aluminio", note: "Sin sales de aluminio. Sin pseudo-sequedad." },
      { label: "Sin alcohol", note: "Sin choque solvente a la barrera." },
      { label: "Waterless", note: "Cero dilución. Máxima densidad de activos." },
      { label: "Microbiome friendly", note: "No altera el microbioma axilar." },
      { label: "Barrier friendly", note: "Apoya la integridad — reparación activa." },
      { label: "Hormone friendly", note: "Libre de compuestos hormonalmente activos." },
      { label: "No comedogénico", note: "No obstruye poros — calibrado para deporte." },
    ],
    standardsBetter: "ZONES™",
    standardsStandard: "Mercado masivo",
    sustainabilityEyebrow: "004 / Sustainability",
    sustainabilityTitle: "Menos agua. Menos residuos. Más efecto.",
    sustainabilityBody: "Waterless significa menos volumen, menos embalaje, menos peso de transporte — y ningún conservante para estabilizar agua. Tecnología que resulta ser verde.",
    sustainabilityStats: [
      { v: "0 %", k: "Agua en la fórmula" },
      { v: "10", k: "Módulos AX" },
      { v: "04", k: "Fases del protocolo" },
    ],
    closingTitle: "Smart: menos, más preciso, más honesto.",
    closingLead: "Sin jerga ecológica. Sin matemáticas de marketing. Solo activos haciendo su trabajo.",
    closingCta: "Abrir el portafolio →",
    crossEyebrow: "Objetos · Sistema",
    crossTitle: "Lo que acompaña al sistema.",
    crossLead: "Las fórmulas trabajan en la zona. Los fabrics trabajan en el resto del día: tracksuit, bóxer algodón-seda, camiseta base layer y set de toallas.",
  },
  clubPage: {
    metaTitle: "ZONES CLUB — Acceso por invitación",
    metaDesc: "Sin cuota, sin suscripción. El acceso al ZONES CLUB se libera de forma curada: acceso anticipado a lots, prioridad de recarga y dossiers del lab.",
    eyebrow: "ZONES CLUB · Access by invitation",
    titleA: "Sin precio.", titleB: "Solo acceso.",
    lead: "El ZONES CLUB no se compra. El acceso se libera de forma curada, en número limitado por lot. Cada membresía está numerada: sin suscripción, sin cuota.",
    howLabel: "Cómo funciona el acceso",
    howTitle: "Tres pasos. Sin checkout.",
    howSteps: [
      { n: "01", t: "Solicitud", d: "Dejas nombre, email y tu zona. Sin cuenta, sin pago." },
      { n: "02", t: "Revisión", d: "Cruzamos las solicitudes con la capacidad del próximo lot. Los códigos de referido tienen prioridad." },
      { n: "03", t: "Liberación", d: "Al liberarse recibes una membresía numerada (Member No. 0001 …) y tu ventana de acceso." },
    ],
    tiersLabel: "Niveles",
    tiersTitle: "Ganado, no comprado.",
    tiers: [
      { name: "LISTED", status: "Abierto a todos", perks: ["Anuncios de lot antes del newsletter", "Alerta de reposición para tu módulo", "Sin cuota, baja en cualquier momento"] },
      { name: "MEMBER", status: "Liberado", perks: ["Acceso anticipado a nuevos lots antes del lanzamiento público", "Prioridad de recarga cuando hay stock limitado", "Digest de dossiers sobre formulación y ensayos", "Membresía numerada"] },
      { name: "INNER LAB", status: "Por invitación", perks: ["Reserva numerada Lot 0001", "Acceso a lotes de prueba antes del mercado", "Línea directa con el desarrollo de formulación", "Voz en las iteraciones de formulación"] },
    ],
    formLabel: "Solicitud de acceso",
    formTitle: "A la lista.",
    formLead: "Abrimos el acceso por lot en número limitado. Las solicitudes se mantienen por orden de llegada.",
    name: "Nombre", email: "Email", interest: "Zona / interés", referral: "Código de referido", referralHint: "opcional",
    submit: "Solicitar acceso →", sent: "Solicitud registrada ✓",
    sentNote: "Te avisamos cuando se libere una ventana de acceso. No hay confirmación automática.",
    transparencyLabel: "Transparencia",
    transparency: [
      "Sin cuota, sin suscripción, sin datos de pago.",
      "Plazas limitadas por lot — solicitar no garantiza acceso.",
      "Baja en cualquier momento con un email.",
      "Ningún dato se comparte con terceros.",
    ],
    closingTitleA: "Cada membresía está numerada.", closingTitleB: "Cada acceso es limitado.",
    closingLead: "El club crece con el lab — lot a lot, no con tarjeta de crédito. Quien está dentro ve las formulaciones antes de que sean productos.",
  },

  contactPage: {
    metaTitle: "Contacto & Aviso legal — ZONES LAB™",
    metaDesc: "Línea directa con el laboratorio. Aviso legal, privacidad y términos para ZONES LAB™.",
    eyebrow: "Línea Directa · 2026",
    titleA: "Contacta", titleB: "el Laboratorio.",
    channels: "Canales", mail: "Correo", press: "Prensa", address: "Dirección",
    openLine: "Abrir una línea", name: "Nombre", email: "Correo electrónico", subject: "Asunto", message: "Mensaje",
    send: "Enviar al laboratorio →", sent: "Señal recibida ✓",
    imprint: "Aviso legal", imprintTitle: "Aviso legal · § 5 TMG",
    privacy: "Privacidad", privacyTitle: "Política de privacidad",
    privacyBody: "ZONES LAB™ procesa únicamente los datos necesarios para operar este sitio y responder a las consultas del laboratorio. Sin tracking, sin profiling. Documentación RGPD completa a petición vía lab@zoneslab.com.",
    terms: "Términos", termsTitle: "Términos y condiciones",
    termsBody: "Toda la información de producto es R&D / pre-launch. Los claims finales, batch sheets y declaraciones de ingredientes se emiten en el lanzamiento del lot. Los precios de bundle se aplican únicamente a kits de protocolo completos.",
  },
  products: {
    "oat-reset": {
      tagline: "Jabón recovery suave para la piel tras el esfuerzo.",
      short: "La avena y la manteca de karité calman la piel irritada sin agredirla.",
      hero: "AX-08 OAT RESET SOAP es un jabón recovery suave para una piel que debe volver a la calma tras el entrenamiento y la carga.",
      description: "La avena y la manteca de karité calman la piel irritada sin resecarla. Uso en la fase RECOVER, después del entrenamiento.",
      highlightsTitle: "Beneficios",
      highlights: [
        "Calma la piel irritada y estresada tras sesiones intensas",
        "Alivia picor y rojeces",
        "Apoya la regeneración cutánea",
        "Apto para piel sensible y castigada",
        "Espuma cremosa y fina — sin sequedad",
      ],
      protocol: "Hacer espuma sobre la piel húmeda, masajear suavemente y aclarar a fondo. Ideal después del entrenamiento o por la noche como ritual reset.",
      zone: "Cuerpo · Post-Session",
      claim: "Calma la piel irritada sin agredirla.",
      composition: [
        "Avena (Avena Sativa) · Manteca de karité",
        "Aceites vegetales (oliva · colza · ricino)",
        "Aroma natural de leche y miel",
      ],
      spec: [
        { label: "Volumen", value: "110 g" },
        { label: "Formato", value: "Bloque en frío" },
        { label: "Uso", value: "Post-session · noche" },
        { label: "Origen", value: "Baviera · DE" },
      ],
      status: "Pre-lanzamiento · Lot 0419",
    },
    "shea-barrier": {
      tagline: "Jabón sin perfume con alta proporción de manteca de karité.",
      short: "Una alta concentración de manteca de karité nativa para apoyar la barrera y la hidratación.",
      hero: "AX-09 SHEA BARRIER SOAP contiene una proporción alta de manteca de karité nativa para una piel que necesita apoyo de barrera — sin perfume y suave.",
      description: "Apoya la barrera cutánea y retiene la hidratación bajo carga. Uso en la fase RECOVER, para rostro, cuerpo y afeitado.",
      highlightsTitle: "Beneficios",
      highlights: [
        "Refuerza la barrera cutánea natural",
        "Hidratación intensiva",
        "Calma la piel seca y sensible",
        "Sin perfume — ideal para piel sensible y reactiva",
        "Para rostro, cuerpo y como jabón de afeitar suave",
      ],
      protocol: "Hacer espuma sobre la piel húmeda y masajear. Especialmente después del deporte o en piel seca y castigada. Aclarar a fondo.",
      zone: "Rostro · Cuerpo · Afeitado",
      claim: "Apoya la barrera cutánea y retiene la hidratación.",
      composition: [
        "Alto contenido de manteca de karité nativa",
        "Aceite de oliva · aceite de colza",
        "Aceite de ricino",
      ],
      spec: [
        { label: "Volumen", value: "110 g" },
        { label: "Formato", value: "Bloque en frío" },
        { label: "Perfil", value: "Sin perfume" },
        { label: "Origen", value: "Baviera · DE" },
      ],
      status: "Pre-lanzamiento · Lot 0419",
    },
    "pomegranate-glow": {
      tagline: "Jabón regenerador con granada e higo.",
      short: "Los extractos de granada e higo apoyan la renovación y un acabado saludable.",
      hero: "AX-10 POMEGRANATE GLOW SOAP emplea extractos de granada e higo para apoyar la renovación — para una piel que busca tono, no estimulación.",
      description: "Apoyo antioxidante para un tono equilibrado. Uso en la fase RECOVER, mañana o noche.",
      highlightsTitle: "Beneficios",
      highlights: [
        "Apoya la regeneración natural de la piel",
        "Reafirma y alisa",
        "Acción antioxidante de la granada",
        "Favorece un tono sano y luminoso",
        "Apto para piel exigente y madura",
      ],
      protocol: "Hacer espuma suavemente, masajear y aclarar tras un breve tiempo de acción. Mejor por la mañana o por la noche como ritual glow.",
      zone: "Rostro · Cuerpo · Ritual Glow",
      claim: "Apoyo antioxidante con acabado reafirmante.",
      composition: [
        "Extracto de granada (Punica Granatum) · higo silvestre",
        "Manteca de karité",
        "Aceites vegetales de alta calidad",
      ],
      spec: [
        { label: "Volumen", value: "110 g" },
        { label: "Formato", value: "Bloque en frío" },
        { label: "Uso", value: "mañana · noche" },
        { label: "Origen", value: "Baviera · DE" },
      ],
      status: "Pre-lanzamiento · Lot 0419",
    },
    intense: {
      tagline: "Bálsamo waterless para la regulación diaria del olor.",
      short: "Un desodorante en formato bálsamo, con pH modulado, para una demanda diaria normal o alta.",
      hero: "AX-01 SODA-IN-OIL DEODORANT BALM es un bálsamo sin agua calibrado para el uso diario. Una matriz lipídica transporta el complejo activo sin alterar la capa superficial de la piel.",
      description: "El sistema actúa mediante modulación controlada del pH y unión molecular, integrada en una matriz lipídica. Para una demanda normal a elevada. Sin aluminio.",
      highlightsTitle: "Alto rendimiento, sin concesiones",
      highlights: [
        "Control del olor multimecanismo (pH · enzima · adsorción)",
        "24–36 horas de neutralización del olor",
        "Acabado dry-touch · sin oclusión, sin máscara de perfume",
        "100 % sin agua · sin aluminio · sin perfume · vegano",
      ],
      protocol: "Aplicar una vez al día sobre piel limpia y seca. Usar HAMAMELIS MIST antes para un paso PREP tonificante.",
      zone: "Axilar · Daily Core",
      claim: "Mantiene el equilibrio de la piel durante todo el día.",
      composition: [
        "Butyrospermum Parkii (Shea) Butter · Candelilla Cera",
        "Ceramide NP · Heptyl Undecylenate",
        "Limnanthes Alba Seed Oil · Squalane",
        "Magnesium Hydroxide · Sodium Bicarbonate",
        "Tocopherol · Triethyl Citrate · Zinc Ricinoleate",
      ],
      spec: [
        { label: "Volumen", value: "50 ml" },
        { label: "Formato", value: "Tarro Violetglass" },
        { label: "Ciclo", value: "12 h equilibrio" },
        { label: "Origen", value: "Baviera · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "SODA-IN-OIL DEODORANT BALM es el daily de alto rendimiento para la axila. Una arquitectura lipídica anhidra que mantiene el microclima cutáneo en equilibrio durante jornadas largas y exigentes.",
        what: "Un bálsamo daily-core concentrado. No es un antitranspirante, no es un perfume — una Lipid-Buffered Dispersion que equilibra química del sudor, fricción y carga bacteriana durante 12 horas.",
        how: "Una vez al día por la mañana sobre piel limpia y seca. Aplicar una pequeña cantidad en la zona axilar — no hace falta masajear.",
        who: "Para días activos, largas horas, viajes, calor, deporte, traje. Cuando un desodorante normal abandona tras 4 horas.",
        result: "Sequedad inmediata sin oclusión. A lo largo del día: sin viraje de olor, menos fricción, sin residuo pegajoso en tejidos.",
      },
      faq: [
        { q: "¿Es un desodorante o un antitranspirante?", a: "Ninguno — es un módulo de microclima. No bloquea las glándulas, mantiene la superficie cutánea en equilibrio." },
        { q: "¿Mancha?", a: "No. La fórmula anhidra no transfiere a los tejidos." },
        { q: "¿Puedo usarlo a diario?", a: "Sí, SODA-IN-OIL DEODORANT BALM está calibrado para uso diario." },
      ],
    },
    sensitive: {
      tagline: "Bálsamo waterless para pieles sensibles y reactivas.",
      short: "La misma precisión en formato bálsamo que el AX-01, calibrada para una piel que necesita contención.",
      hero: "AX-02 NEURO-CALM DEODORANT BALM está calibrado para piel reactiva. Actúa sin perfume y sin oclusión.",
      description: "El sistema combina la regulación del olor con lípidos calmantes. Para una demanda baja a media y piel sensible. Sin aluminio.",
      highlightsTitle: "Diseñado para piel sensible",
      highlights: [
        "Regulación suave del olor mediante modulación leve del pH",
        "Matriz lipídica protectora con ceramidas y karité",
        "Apto después del afeitado · sin escozor, sin hormigueo",
        "100 % sin agua · sin perfume · sin alcohol · vegano",
      ],
      protocol: "Aplicar una vez al día. Apto post-afeitado y post-RESET.",
      zone: "Axilar · Perfil reactivo",
      claim: "Reduce la formación de olor sin intervención agresiva.",
      composition: [
        "Butyrospermum Parkii (Shea) Butter · Candelilla Cera",
        "Ceramide NP · Heptyl Undecylenate",
        "Limnanthes Alba Seed Oil · Squalane",
        "Magnesium Hydroxide · Tocopherol",
        "Triethyl Citrate · Zinc Ricinoleate",
      ],
      spec: [
        { label: "Volumen", value: "50 ml" },
        { label: "Formato", value: "Tarro Violetglass" },
        { label: "Perfil", value: "Reactivo" },
        { label: "Origen", value: "Baviera · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "NEURO-CALM DEODORANT BALM es el cuidado diario para zonas axilares reactivas. Sin perfume, calmante, plenamente eficaz — para pieles que reaccionan a desodorantes convencionales con escozor, rojez o picor.",
        what: "Un módulo daily-core anhidro con Neuro-Calm Lipid Buffer. Reduce la reactividad superficial, sostiene la capa lipídica y mantiene estable el microclima — sin ocluir.",
        how: "Una vez al día por la mañana sobre piel limpia y seca. Apto justo después del afeitado y tras RESET PEELING BALM.",
        who: "Para pieles sensibles, reactivas o con tendencia al eccema. También tras el afeitado, con calor o en fases hormonales con mayor reactividad.",
        result: "Sin escozor en la aplicación. En 7–14 días: piel más calmada, reactividad claramente reducida, protección estable sin pesadez.",
      },
      faq: [
        { q: "¿Es un antitranspirante?", a: "No. NEURO-CALM DEODORANT BALM regula el microclima pero no bloquea las glándulas sudoríparas." },
        { q: "¿Funciona tras el afeitado?", a: "Sí — está calibrado precisamente para el uso post-afeitado." },
        { q: "¿Contiene aluminio o perfume?", a: "No. Ninguno de los dos." },
      ],
    },
    reset: {
      tagline: "Bálsamo exfoliante waterless para preparar la piel.",
      short: "Una textura anhidra de azúcar y aceite que actúa de forma mecánica, no mediante activos.",
      hero: "AX-03 RESET PEELING BALM elimina los residuos y prepara la piel antes de la siguiente fase. No es un paso diario — es un paso puntual.",
      description: "Elimina los residuos excesivos y prepara la piel para las fases siguientes. Uso en la fase PREP.",
      highlightsTitle: "El paso de sistema antes del desodorante",
      highlights: [
        "Sugar-Polish System™ (55 % sacarosa) · puramente mecánico",
        "Sin ácidos, enzimas ni tensioactivos",
        "ADN oleoso protector (idéntico a los módulos desodorantes)",
        "100 % sin agua · vegano · sin perfume · solo 5 INCI",
      ],
      protocol: "1–2× por semana. Masajear sobre piel seca, enjuagar, continuar con SODA-IN-OIL DEODORANT BALM o NEURO-CALM DEODORANT BALM.",
      zone: "Axilar · Pre-Engage",
      claim: "Elimina los residuos en una sola pasada.",
      composition: [
        "Sucrose (55 %) · Squalane",
        "Limnanthes Alba (Meadowfoam) Seed Oil",
        "Ceramide NP · Tocopherol",
      ],
      spec: [
        { label: "Volumen", value: "75 ml" },
        { label: "Formato", value: "Tarro Violetglass" },
        { label: "Uso", value: "1–2× / semana" },
        { label: "Origen", value: "Baviera · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "RESET PEELING BALM es el reinicio semanal para tu zona axilar. Una matriz aceite-mineral anhidra que disuelve restos de desodorante, sudor y fricción en una sola pasada y realinea la superficie cutánea.",
        what: "Un bálsamo pre-tratamiento masajeable de finas partículas minerales en un vehículo oleoso. Sin espuma, sin tensioactivos, sin agresión.",
        how: "1–2× por semana sobre piel seca, masajear 30 segundos, aclarar con agua tibia. Aplicar SODA-IN-OIL DEODORANT BALM o NEURO-CALM DEODORANT BALM inmediatamente después.",
        who: "Para quien necesita claridad entre cambios de desodorante, tras semanas de deporte o calor, o cuando la axila se siente recubierta.",
        result: "Piel inmediatamente más lisa y limpia. Mejor absorción de los productos daily-core. Menos olor propio a lo largo de la semana.",
      },
      faq: [
        { q: "¿Es un exfoliante?", a: "No, es un reset mecánico sin ácidos ni gránulos agresivos — seguro para la barrera." },
        { q: "¿Puedo usarlo tras el afeitado?", a: "Espera 24 horas tras el afeitado." },
        { q: "¿Cuántas veces por semana?", a: "1–2×. Más no es mejor." },
      ],
    },
    powder: {
      tagline: "Polvo finamente calibrado para controlar humedad y fricción.",
      short: "Un polvo mineral ultraligero que gestiona la humedad mediante la física, no mediante activos.",
      hero: "AX-04 FINISHING POWDER cierra el AX Protocol con una capa puramente mecánica — sin activos, sin forzar la barrera.",
      description: "Cierra el sistema y reduce la carga mecánica a lo largo del día. Uso en la fase FINISH.",
      highlightsTitle: "Seco. Cómodo. Bajo control.",
      highlights: [
        "Absorption Matrix™ con caolín y arrurruz",
        "Matificado inmediato · reduce la fricción piel con piel",
        "No es un antitranspirante · sin bloqueo de glándulas",
        "100 % sin agua · vegano · sin perfume · solo 4 INCI",
      ],
      protocol: "Aplicar como capa final sobre SODA-IN-OIL DEODORANT BALM o NEURO-CALM DEODORANT BALM. Ajustar según clima y outfit.",
      zone: "Axilar · Capa de acabado",
      claim: "Reducir la fricción, no la biología.",
      composition: [
        "Kaolin · Maranta Arundinacea Root Powder",
        "Magnesium Hydroxide · Tocopherol",
      ],
      spec: [
        { label: "Volumen", value: "40 g" },
        { label: "Formato", value: "Lata Violetglass · disco dorado" },
        { label: "Uso", value: "Capa final · a demanda" },
        { label: "Origen", value: "Baviera · DE" },
      ],
      status: "Pre-launch · Lot 0419",
      consumer: {
        intro: "FINISHING POWDER es la capa final invisible. Un polvo mineral ultraligero que regula físicamente humedad y fricción a lo largo del día — sin activos, sin perturbar el cuidado debajo.",
        what: "Un polvo ultrafino y sin perfume. Se posa como un velo fino sobre SODA-IN-OIL DEODORANT BALM o NEURO-CALM DEODORANT BALM y fija la humedad excedente.",
        how: "Un pequeño giro del dial de titanio, palmear en la axila con la yema o el pad. Ideal después de vestirse — justo antes de reuniones, entrenos, viajes.",
        who: "Para quien es propenso al sudor, fricción o marcas de transferencia — sobre todo con calor, ropa oscura, workwear o tejidos ajustados.",
        result: "Sensación de piel seca y lisa durante horas. Menos marcas de sudor, menos fricción, sin efecto empolvado.",
      },
      faq: [
        { q: "¿Obstruye los poros?", a: "No. La matriz mineral es no-oclusiva y transpirable." },
        { q: "¿Puedo usarlo solo?", a: "Sí, pero el efecto pleno aparece como capa final sobre SODA-IN-OIL DEODORANT BALM o NEURO-CALM DEODORANT BALM." },
        { q: "¿Mancha la ropa?", a: "No. Transparente, ultrafino, sin residuo en tejido." },
      ],
    },
    "lip-sculpt": {
      tagline: "Bálsamo labial waterless, estructura lipídica en lugar de estimulación.",
      short: "Un bálsamo labial de base lipídica que define y alisa, sin hormigueo ni irritación.",
      hero: "AX-07 LIP SCULPT BALM es una fórmula labial sin agua — labios definidos y visiblemente más lisos, sin hormigueo, brillo ni irritación.",
      description: "Perfila y alisa visiblemente, sin hormigueo ni irritación. Para el cuidado diario de los labios, mañana y noche.",
      highlightsTitle: "Sculpt en lugar de estimulación",
      highlights: [
        "Superficie soft-focus · alisado visible de las líneas",
        "Hialuronato dispersado en aceite para volumen óptico",
        "Confort de larga duración · no pegajoso",
        "100 % sin agua · vegano · sin aceite de palma · respeta la barrera",
      ],
      protocol: "Aplicar una capa fina en los labios y repetir varias veces al día si es necesario. Por la noche, más generosamente como tratamiento overnight.",
      zone: "Labios · Contorno y borde",
      claim: "Estructura, no estimulación.",
      composition: [
        "Squalane · Butyrospermum Parkii Butter",
        "Limnanthes Alba Seed Oil · Candelilla Cera",
        "Sodium Hyaluronate (oil-dispersed)",
        "Vanilla Planifolia Fruit Extract · Tocopherol",
      ],
      spec: [
        { label: "Volumen", value: "15 ml" },
        { label: "Formato", value: "Tarro Violetglass" },
        { label: "Uso", value: "AM · PM" },
        { label: "Origen", value: "Baviera · DE" },
      ],
      status: "Final · Lot 0419",
      consumer: {
        intro: "LIP SCULPT BALM esculpe los labios de forma óptica — 100 % sin agua, vegano, sin aceite de palma y respetuoso con la barrera.",
        what: "Un bálsamo labial soft-focus: una matriz lipídica reducida con hialuronato dispersado en aceite para alisar visiblemente las líneas y dar volumen óptico.",
        how: "Aplicar una capa fina y repetir durante el día si es necesario. Por la noche, más generosamente como tratamiento overnight.",
        who: "Para labios sensibles y para quien quiere estructura en lugar de brillo — uso diario, nunca pegajoso.",
        result: "Superficie soft-focus, líneas visiblemente alisadas y labios de aspecto más lleno — con confort de larga duración.",
      },
      faq: [
        { q: "¿Es un gloss?", a: "No. No es una película de brillo sino un bálsamo estructural con acabado mate." },
        { q: "¿Puedo llevar labial encima?", a: "Sí. Deja que absorba 2 minutos y maquilla como siempre." },
        { q: "¿Cuántas veces al día?", a: "Dos veces como ritual, más tras la exposición." },
      ],
    },
    "hamamelis-mist": { tagline: "Una bruma tónica de un solo ingrediente, destilada pura.", short: "Hidrolato puro de hamamelis que tonifica y prepara sin alcohol, dilución ni aditivos.", hero: "AX-05 HAMAMELIS MIST es una bruma tónica de un solo ingrediente, destilada pura y sin alcohol.", description: "Un hidrolato de un solo ingrediente — Hamamelis Virginiana Leaf Water, sin alcohol, destilado una vez y dejado intacto. Como primer paso antes de la estabilización prepara y tonifica sin ingredientes innecesarios, dilución, aditivos ni perfume añadido.", highlightsTitle: "Destilado puro", highlights: ["100 % Hamamelis Virginiana Leaf Water", "Fórmula de un solo ingrediente", "Destilación sin alcohol", "Paso PREP antes de Neuro-Calm"], protocol: "Pulverizar sobre la piel limpia, dejar reposar brevemente y aplicar NEURO-CALM.", zone: "Rostro · Cuello · Zona de afeitado", claim: "Destilado una vez. Dejado intacto.", composition: ["Hamamelis Virginiana (Witch Hazel) Leaf Water"], spec: [{ label: "Volumen", value: "100 ml" }, { label: "Formato", value: "Frasco spray Miron Violetglass" }, { label: "Uso", value: "PREP · antes de Neuro-Calm" }, { label: "Origen", value: "Baviera · DE" }], status: "Pre-launch · Lot 0419" },
    "pre-shave-oil": { tagline: "El paso antes de la cuchilla.", short: "Un complejo ligero de aceites que crea deslizamiento controlado y reduce la fricción.", hero: "AX-06 PRE-SHAVE OIL crea una capa de deslizamiento controlada antes de que la cuchilla toque la piel.", description: "Un aceite ligero preafeitado: argán y jojoba crean deslizamiento, el escualano estabiliza la película y el tocoferol protege del estrés oxidativo. Junto al paso de recuperación postafeitado cierra el ciclo desde la preparación hasta la reparación.", highlightsTitle: "Antes de la cuchilla", highlights: ["Complejo de argán + jojoba", "Capa estabilizada con escualano", "Reduce la fricción de la cuchilla", "Paso PREP antes del afeitado"], protocol: "Masajear unas gotas sobre la piel limpia y húmeda antes de afeitar y continuar con el paso recovery.", zone: "Rostro · Cuello · Zona de afeitado", claim: "El paso antes de la cuchilla.", composition: ["Argania Spinosa Kernel Oil · Simmondsia Chinensis Seed Oil", "Squalane · Tocopherol"], spec: [{ label: "Volumen", value: "50 ml" }, { label: "Formato", value: "Frasco cuentagotas Miron Violetglass" }, { label: "Uso", value: "PREP · antes del afeitado" }, { label: "Origen", value: "Baviera · DE" }], status: "Pre-launch · Lot 0419" },
  },
  bundle: { name: "THE AX PROTOCOL", short: "La entrada al protocolo: PREP · ENGAGE · RECOVER · FINISH — cuatro módulos diarios. Hamamelis Mist, Pre-Shave Oil y Lip Sculpt Balm completan el ritual de forma específica." },
  shield: {
    "tracksuit": {
      tagline: "Hidrolato de hamamelis destilado, sin alcohol.",
      description: "Un ingrediente, no una fórmula — agua vegetal pura como paso tónico antes de la estabilización. Uso en la fase PREP.",
      benefits: ["Algodón orgánico 480 g/m²", "Corte unisex oversize · hombro caído", "Interior perchado", "Preencogido · lavable a 40 °C"],
    },
    "zone-boxers": {
      tagline: "Bóxer sin fricción para la zona reactiva.",
      description: "Un bóxer unisex en mezcla de algodón y seda, de pierna holgada y cintura suave forrada — diseñado para reducir la fricción mecánica en lugar de disimularla. La seda aporta la superficie de baja fricción sobre la zona reactiva; el algodón orgánico debajo gestiona humedad y transpirabilidad. Costuras planas en todo el conjunto — sin puntos de roce, sin marcas de presión. Para el deporte, el viaje y la piel bajo carga diaria.",
      benefits: ["Mezcla algodón-seda · menor fricción superficial", "Corte bóxer unisex holgado · cintura forrada", "Costuras planas · sin roce", "Perfil deporte & piel sensible"],
    },
    "towel-set": {
      tagline: "Algodón blanco neutro — big size más formato sport.",
      description: "Un set de dos toallas en algodón de fibra larga blanco neutro: una sábana de baño oversize de 100 × 180 cm y una toalla de deporte pequeña de 40 × 90 cm para la bolsa, la pista o el estuche de viaje. Rizo de doble torsión de 700 g/m², de baja pelusa, secado rápido, con dobladillo reforzado y parche bandera ZONES FABRICS tejido en blanco y oro — la misma marca que el tracksuit, el bóxer y la tee.",
      benefits: ["Rizo de algodón de fibra larga 700 g/m²", "Sábana de baño 100 × 180 cm + toalla sport 40 × 90 cm", "Blanco neutro · parche bandera ZONES FABRICS tejido", "Baja pelusa · secado rápido · lavable a 60 °C"],
    },
    "zone-tee": {
      tagline: "Capa base unisex oversize con refuerzo axilar.",
      description: "Una camiseta unisex oversize concebida como verdadera capa base: un panel de refuerzo en la zona axilar gestiona la humedad exactamente donde el Protocolo AX actúa sobre la piel. Jersey grueso, hombro caído, corte deliberadamente amplio. Bajo el tracksuit, bajo cualquier capa — o sola.",
      benefits: ["Panel axilar", "Fit unisex oversize · hombro caído", "Jersey grueso que gestiona la humedad", "Preencogido · lavable a 40 °C"],
    },
  },
  carry: {
    "travel-case": {
      tagline: "El protocolo, listo para viajar.",
      description: "Un estuche de cuidado con cremallera en lona técnica hidrófuga con ribete de cuero negro — el mismo beige arena que la Hand Clutch. Con el formato de todo el AX Protocol, forro lavable, unisex.",
      features: ["Formato 24 × 17 × 6 cm", "Lona técnica hidrófuga", "Ribete de cuero negro · cremallera metálica", "Forro lavable · cabe el AX Protocol"],
    },
    "hand-clutch": {
      tagline: "Formato pequeño, presencia completa.",
      description: "Un clutch plano para llevar en la mano: lona técnica beige arena, bordes y esquinas de cuero negro, correa de muñeca de cuero desmontable. Dentro, una ranura para tarjetas y espacio para un módulo AX.",
      features: ["Formato mano 26 × 18 × 3 cm", "Lona técnica · bordes de cuero", "Correa de muñeca desmontable", "Ranura para tarjetas · unisex"],
    },
  },
};

export const dict: Record<Locale, Dict> = { de, en, fr, it, nl, es };
