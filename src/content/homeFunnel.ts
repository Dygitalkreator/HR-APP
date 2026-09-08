import type { Locale } from "@/i18n/config";

type HomeFunnelCopy = {
  lines: { eyebrow: string; title: string; body: string; cta: string }[];
  lineEyebrow: string;
  lineTitle: string;
  lineLead: string;
  trustEyebrow: string;
  trustTitle: string;
  trustLead: string;
  evidence: { value: string; label: string }[];
  protocolEyebrow: string;
  protocolTitle: string;
  protocolLead: string;
  protocolCta: string;
  module: string;
  productsEyebrow: string;
  productsTitle: string;
  productsLead: string;
  bundleEyebrow: string;
  bundleTitle: string;
  bundleLead: string;
  perModule: string;
  ritualTitle: string;
  clubEyebrow: string;
  clubTitle: string;
  clubLead: string;
  clubPlaceholder: string;
  clubCta: string;
  clubSuccess: string;
  journalEyebrow: string;
  journalTitle: string;
  journalCta: string;
  journalCards: { eyebrow: string; title: string; body: string }[];
  finalTitle: string;
  finalCta: string;
};

export const homeFunnelCopy: Record<Locale, HomeFunnelCopy> = {
  de: {
    lineEyebrow: "002 / Sechs Linien", lineTitle: "EIN LAB. SECHS ANWENDUNGEN.", lineLead: "Wähle nach Funktion: Hautsystem, Duft, Faser, Herkunft, Objekt oder Kunst.",
    lines: [
      { eyebrow: "01 · Applied Lipid Science", title: "AX COSMETICS", body: "Wasserfreie Hautsysteme für Belastung, Reibung und Regeneration.", cta: "Kollektion öffnen" },
      { eyebrow: "02 · Applied Scent Architecture", title: "OLF-01 SIGNATURE", body: "Ein Akkord. Zwei Radien. Parfumstärke in Öl.", cta: "Signature öffnen" },
      { eyebrow: "03 · Applied Fiber Science", title: "ZONES FABRICS", body: "Material und Konstruktion für Transit, Ruhe und Bewegung.", cta: "Fabrics öffnen" },
      { eyebrow: "04 · Applied Origin Science", title: "ZONES SUPERFOOD", body: "Kaffee mit nachvollziehbarer Herkunft.", cta: "Superfood öffnen" },
      { eyebrow: "05 · Applied Object Culture", title: "ACCESSORIES", body: "Kuratierte Werkzeuge und Objekte für das tägliche Ritual.", cta: "Accessoires öffnen" }, { eyebrow: "06 · Applied Art Collaboration", title: "ZONES × REZA", body: "Eine Zusammenarbeit in Vorbereitung. Details folgen.", cta: "Art Collab öffnen" }
    ],
    trustEyebrow: "003 / Qualitätsbeweis", trustTitle: "SPEZIFIKATION VOR VERSPRECHEN.", trustLead: "Formulierung, Primärverpackung, Charge und Herkunft werden nicht dekorativ erzählt, sondern in jedem Dossier nachvollziehbar ausgewiesen.",
    evidence: [{ value: "WATERLESS", label: "Formulierung" }, { value: "MIRON VIOLETTGLAS", label: "Primärverpackung" }, { value: "LOT 0419", label: "Chargenindex" }, { value: "BAVARIA", label: "Entwicklung" }],
    protocolEyebrow: "004 / AX Protocol", protocolTitle: "VIER PHASEN. EIN SYSTEM.", protocolLead: "PREP bereitet vor. ENGAGE übernimmt Funktion. RECOVER stabilisiert. FINISH kontrolliert Reibung und Feuchtigkeit.", protocolCta: "Vollständiges Protokoll ansehen", module: "Module",
    productsEyebrow: "005 / Einstieg", productsTitle: "KURATIERT FÜR DEN ERSTEN SCHRITT.", productsLead: "Vier präzise Zugänge in die ZONES Welt — direkt wählbar, ohne Umweg.",
    bundleEyebrow: "006 / Systementscheidung", bundleTitle: "DAS VOLLSTÄNDIGE PROTOKOLL.", bundleLead: "Vier Phasen im Set. Ein Rabatt für Systementscheidungen, keiner für Einzelkäufe.", perModule: "Ersparnis pro Modul",
    ritualTitle: "NICHT ROUTINE. RITUAL.",
    clubEyebrow: "008 / Early Access", clubTitle: "FÜR FRÜHE ENTSCHEIDER.", clubLead: "Zugang zu Entwicklungs-Updates, limitierten Chargen und der Journal-Redaktion vor Veröffentlichung.", clubPlaceholder: "E-Mail-Adresse", clubCta: "Club beitreten", clubSuccess: "Willkommen im Vorabzugang. Wir melden uns zur nächsten Charge.",
    journalEyebrow: "009 / Journal", journalTitle: "WISSEN, BEVOR ES PRODUKT WIRD.", journalCta: "Journal lesen",
    journalCards: [
      { eyebrow: "Formulierung", title: "WATERLESS / MIRON", body: "Warum weniger Wasser und lichtschützendes Glas eine technische Entscheidung sind." },
      { eyebrow: "Systemlogik", title: "DAS AX PROTOKOLL", body: "Wie vier Phasen aus einzelnen Produkten ein lesbares System machen." },
      { eyebrow: "Herkunft", title: "BAVARIA / ECUADOR", body: "Entwicklung im Lab, Herkunft im Nebelwald — und was Rückverfolgbarkeit bedeutet." },
    ],
    finalTitle: "BEREIT FÜR DAS SYSTEM?", finalCta: "Kollektion ansehen",
  },
  en: {
    lineEyebrow: "002 / Six lines", lineTitle: "ONE LAB. SIX APPLICATIONS.", lineLead: "Choose by function: skin system, scent, fibre, origin, object or art.",
    lines: [
      { eyebrow: "01 · Applied Lipid Science", title: "AX COSMETICS", body: "Waterless skin systems for load, friction and recovery.", cta: "Open collection" },
      { eyebrow: "02 · Applied Scent Architecture", title: "OLF-01 SIGNATURE", body: "One accord. Two radii. Parfum strength in oil.", cta: "Open Signature" },
      { eyebrow: "03 · Applied Fiber Science", title: "ZONES FABRICS", body: "Material and construction for transit, rest and movement.", cta: "Open Fabrics" },
      { eyebrow: "04 · Applied Origin Science", title: "ZONES SUPERFOOD", body: "Coffee, selected by processing and grade.", cta: "Open Superfood" },
      { eyebrow: "05 · Applied Object Culture", title: "ACCESSORIES", body: "Curated tools and objects for the daily ritual.", cta: "Open Accessories" }, { eyebrow: "06 · Applied Art Collaboration", title: "ZONES × REZA", body: "A collaboration in preparation. Details to follow.", cta: "Open Art Collab" }
    ],
    trustEyebrow: "003 / Quality proof", trustTitle: "SPECIFICATION BEFORE PROMISE.", trustLead: "Formulation, primary packaging, batch and origin are not decorative claims. They are made traceable in every dossier.",
    evidence: [{ value: "WATERLESS", label: "Formulation" }, { value: "MIRON VIOLET GLASS", label: "Primary packaging" }, { value: "LOT 0419", label: "Batch index" }, { value: "BAVARIA", label: "Development" }],
    protocolEyebrow: "004 / AX Protocol", protocolTitle: "FOUR PHASES. ONE SYSTEM.", protocolLead: "PREP prepares. ENGAGE performs. RECOVER stabilises. FINISH controls friction and moisture.", protocolCta: "View complete protocol", module: "Modules",
    productsEyebrow: "005 / Entry points", productsTitle: "CURATED FOR THE FIRST STEP.", productsLead: "Four precise entries into the ZONES world — directly selectable, without detours.",
    bundleEyebrow: "006 / System choice", bundleTitle: "THE COMPLETE PROTOCOL.", bundleLead: "Four phases in one set. A saving for system decisions, never for single purchases.", perModule: "Saving per module",
    ritualTitle: "NOT ROUTINE. RITUAL.",
    clubEyebrow: "008 / Early access", clubTitle: "FOR EARLY DECISION-MAKERS.", clubLead: "Access development updates, limited batches and Journal editorial before publication.", clubPlaceholder: "Email address", clubCta: "Join the club", clubSuccess: "Welcome to early access. We will write before the next batch.",
    journalEyebrow: "009 / Journal", journalTitle: "KNOWLEDGE BEFORE PRODUCT.", journalCta: "Read the Journal",
    journalCards: [{ eyebrow: "Formulation", title: "WATERLESS / MIRON", body: "Why less water and light-protective glass are technical choices." }, { eyebrow: "System logic", title: "THE AX PROTOCOL", body: "How four phases turn individual products into a readable system." }, { eyebrow: "Origin", title: "BAVARIA / LAB", body: "Lab development, sourcing discipline and what traceability actually means." }],
    finalTitle: "READY FOR THE SYSTEM?", finalCta: "View collection",
  },
  fr: {
    lineEyebrow: "002 / Six lignes", lineTitle: "UN LAB. SIX APPLICATIONS.", lineLead: "Choisissez par fonction : peau, parfum, fibre, origine, objet ou art.",
    lines: [{ eyebrow: "01 · Applied Lipid Science", title: "AX COSMETICS", body: "Systèmes sans eau pour charge, friction et récupération.", cta: "Voir la collection" }, { eyebrow: "02 · Applied Scent Architecture", title: "OLF-01 SIGNATURE", body: "Un accord. Deux rayons. Force parfum en huile.", cta: "Voir Signature" }, { eyebrow: "03 · Applied Fiber Science", title: "ZONES FABRICS", body: "Matière et construction pour transit, repos et mouvement.", cta: "Voir Fabrics" }, { eyebrow: "04 · Applied Origin Science", title: "ZONES SUPERFOOD", body: "Café d’origine traçable.", cta: "Voir Superfood" }, { eyebrow: "05 · Applied Object Culture", title: "ACCESSORIES", body: "Outils et objets sélectionnés pour le rituel quotidien.", cta: "Voir les accessoires" }, { eyebrow: "06 · Applied Art Collaboration", title: "ZONES × REZA", body: "Une collaboration en préparation. Détails à venir.", cta: "Voir Art Collab" }],
    trustEyebrow: "003 / Preuve de qualité", trustTitle: "LA SPÉCIFICATION AVANT LA PROMESSE.", trustLead: "Formule, emballage primaire, lot et origine sont traçables dans chaque dossier, jamais réduits à un décor.", evidence: [{ value: "SANS EAU", label: "Formule" }, { value: "VERRE VIOLET MIRON", label: "Emballage" }, { value: "LOT 0419", label: "Indice de lot" }, { value: "BAVIÈRE", label: "Développement" }],
    protocolEyebrow: "004 / Protocole AX", protocolTitle: "QUATRE PHASES. UN SYSTÈME.", protocolLead: "PREP prépare. ENGAGE agit. RECOVER stabilise. FINISH contrôle friction et humidité.", protocolCta: "Voir le protocole complet", module: "Modules",
    productsEyebrow: "005 / Entrées", productsTitle: "SÉLECTIONNÉS POUR LE PREMIER PAS.", productsLead: "Quatre accès précis à l’univers ZONES, directement sélectionnables.", bundleEyebrow: "006 / Choix système", bundleTitle: "LE PROTOCOLE COMPLET.", bundleLead: "Quatre phases en set. Une économie pour le système, jamais pour l’achat isolé.", perModule: "Économie par module", ritualTitle: "PAS UNE ROUTINE. UN RITUEL.",
    clubEyebrow: "008 / Accès anticipé", clubTitle: "POUR CEUX QUI DÉCIDENT TÔT.", clubLead: "Accédez aux développements, lots limités et à la rédaction du Journal avant publication.", clubPlaceholder: "Adresse e-mail", clubCta: "Rejoindre le club", clubSuccess: "Bienvenue en accès anticipé. Nous écrirons avant le prochain lot.",
    journalEyebrow: "009 / Journal", journalTitle: "LE SAVOIR AVANT LE PRODUIT.", journalCta: "Lire le Journal", journalCards: [{ eyebrow: "Formulation", title: "SANS EAU / MIRON", body: "Pourquoi moins d’eau et un verre protecteur sont des choix techniques." }, { eyebrow: "Logique système", title: "LE PROTOCOLE AX", body: "Comment quatre phases composent un système lisible." }, { eyebrow: "Origine", title: "BAVIÈRE / ÉQUATEUR", body: "Développement au lab, origine en forêt de nuages et traçabilité." }], finalTitle: "PRÊT POUR LE SYSTÈME ?", finalCta: "Voir la collection",
  },
  it: {
    lineEyebrow: "002 / Sei linee", lineTitle: "UN LAB. SEI APPLICAZIONI.", lineLead: "Scegli per funzione: pelle, profumo, fibra, origine, oggetto o arte.", lines: [{ eyebrow: "01 · Applied Lipid Science", title: "AX COSMETICS", body: "Sistemi senz’acqua per carico, attrito e recupero.", cta: "Apri collezione" }, { eyebrow: "02 · Applied Scent Architecture", title: "OLF-01 SIGNATURE", body: "Un accordo. Due raggi. Forza parfum in olio.", cta: "Apri Signature" }, { eyebrow: "03 · Applied Fiber Science", title: "ZONES FABRICS", body: "Materiale e costruzione per transito, riposo e movimento.", cta: "Apri Fabrics" }, { eyebrow: "04 · Applied Origin Science", title: "ZONES SUPERFOOD", body: "Caffè di origine tracciabile.", cta: "Apri Superfood" }, { eyebrow: "05 · Applied Object Culture", title: "ACCESSORIES", body: "Strumenti e oggetti selezionati per il rituale quotidiano.", cta: "Apri accessori" }, { eyebrow: "06 · Applied Art Collaboration", title: "ZONES × REZA", body: "Una collaborazione in preparazione. Dettagli a seguire.", cta: "Apri Art Collab" }],
    trustEyebrow: "003 / Prova di qualità", trustTitle: "SPECIFICA PRIMA DELLA PROMESSA.", trustLead: "Formula, packaging, lotto e origine sono tracciabili in ogni dossier, non semplici elementi decorativi.", evidence: [{ value: "WATERLESS", label: "Formula" }, { value: "VETRO VIOLA MIRON", label: "Packaging" }, { value: "LOT 0419", label: "Indice lotto" }, { value: "BAVIERA", label: "Sviluppo" }], protocolEyebrow: "004 / Protocollo AX", protocolTitle: "QUATTRO FASI. UN SISTEMA.", protocolLead: "PREP prepara. ENGAGE agisce. RECOVER stabilizza. FINISH controlla attrito e umidità.", protocolCta: "Vedi il protocollo completo", module: "Moduli", productsEyebrow: "005 / Ingresso", productsTitle: "SELEZIONATI PER IL PRIMO PASSO.", productsLead: "Quattro accessi precisi al mondo ZONES, selezionabili direttamente.", bundleEyebrow: "006 / Scelta di sistema", bundleTitle: "IL PROTOCOLLO COMPLETO.", bundleLead: "Quattro fasi in un set. Un risparmio per la scelta del sistema, mai sul singolo acquisto.", perModule: "Risparmio per modulo", ritualTitle: "NON ROUTINE. RITUALE.", clubEyebrow: "008 / Accesso anticipato", clubTitle: "PER CHI DECIDE PRIMA.", clubLead: "Accedi ad aggiornamenti, lotti limitati e redazione del Journal prima della pubblicazione.", clubPlaceholder: "Indirizzo e-mail", clubCta: "Entra nel club", clubSuccess: "Benvenuto nell’accesso anticipato. Scriveremo prima del prossimo lotto.", journalEyebrow: "009 / Journal", journalTitle: "CONOSCENZA PRIMA DEL PRODOTTO.", journalCta: "Leggi il Journal", journalCards: [{ eyebrow: "Formula", title: "WATERLESS / MIRON", body: "Perché meno acqua e vetro protettivo sono scelte tecniche." }, { eyebrow: "Logica", title: "IL PROTOCOLLO AX", body: "Come quattro fasi creano un sistema leggibile." }, { eyebrow: "Origine", title: "BAVIERA / ECUADOR", body: "Sviluppo in lab, origine nella foresta nebulare e tracciabilità." }], finalTitle: "PRONTO PER IL SISTEMA?", finalCta: "Vedi la collezione",
  },
  nl: {
    lineEyebrow: "002 / Zes lijnen", lineTitle: "ÉÉN LAB. ZES TOEPASSINGEN.", lineLead: "Kies op functie: huid, geur, vezel, herkomst, object of kunst.", lines: [{ eyebrow: "01 · Applied Lipid Science", title: "AX COSMETICS", body: "Watervrije huidsystemen voor belasting, wrijving en herstel.", cta: "Open collectie" }, { eyebrow: "02 · Applied Scent Architecture", title: "OLF-01 SIGNATURE", body: "Eén akkoord. Twee radii. Parfumsterkte in olie.", cta: "Open Signature" }, { eyebrow: "03 · Applied Fiber Science", title: "ZONES FABRICS", body: "Materiaal en constructie voor transit, rust en beweging.", cta: "Open Fabrics" }, { eyebrow: "04 · Applied Origin Science", title: "ZONES SUPERFOOD", body: "Koffie met traceerbare herkomst.", cta: "Open Superfood" }, { eyebrow: "05 · Applied Object Culture", title: "ACCESSORIES", body: "Geselecteerde hulpmiddelen voor het dagelijkse ritueel.", cta: "Open accessoires" }, { eyebrow: "06 · Applied Art Collaboration", title: "ZONES × REZA", body: "Een samenwerking in voorbereiding. Details volgen.", cta: "Open Art Collab" }], trustEyebrow: "003 / Kwaliteitsbewijs", trustTitle: "SPECIFICATIE VÓÓR BELOFTE.", trustLead: "Formule, verpakking, batch en herkomst zijn in elk dossier traceerbaar, niet decoratief.", evidence: [{ value: "WATERLESS", label: "Formule" }, { value: "MIRON VIOLETGLAS", label: "Verpakking" }, { value: "LOT 0419", label: "Batchindex" }, { value: "BEIEREN", label: "Ontwikkeling" }], protocolEyebrow: "004 / AX Protocol", protocolTitle: "VIER FASEN. ÉÉN SYSTEEM.", protocolLead: "PREP bereidt voor. ENGAGE werkt. RECOVER stabiliseert. FINISH beheerst wrijving en vocht.", protocolCta: "Bekijk volledig protocol", module: "Modules", productsEyebrow: "005 / Instap", productsTitle: "GESELECTEERD VOOR DE EERSTE STAP.", productsLead: "Vier directe ingangen tot de ZONES-wereld.", bundleEyebrow: "006 / Systeemkeuze", bundleTitle: "HET VOLLEDIGE PROTOCOL.", bundleLead: "Vier fasen in één set. Voordeel voor de systeemkeuze, niet voor losse aankopen.", perModule: "Voordeel per module", ritualTitle: "GEEN ROUTINE. RITUEEL.", clubEyebrow: "008 / Vroege toegang", clubTitle: "VOOR VROEGE BESLISSERS.", clubLead: "Toegang tot ontwikkeling, beperkte batches en de Journal-redactie vóór publicatie.", clubPlaceholder: "E-mailadres", clubCta: "Word lid", clubSuccess: "Welkom bij vroege toegang. We schrijven voor de volgende batch.", journalEyebrow: "009 / Journal", journalTitle: "KENNIS VÓÓR PRODUCT.", journalCta: "Lees het Journal", journalCards: [{ eyebrow: "Formule", title: "WATERLESS / MIRON", body: "Waarom minder water en beschermend glas technische keuzes zijn." }, { eyebrow: "Systeemlogica", title: "HET AX PROTOCOL", body: "Hoe vier fasen één leesbaar systeem vormen." }, { eyebrow: "Herkomst", title: "BEIEREN / ECUADOR", body: "Labontwikkeling, nevelwoud en traceerbaarheid." }], finalTitle: "KLAAR VOOR HET SYSTEEM?", finalCta: "Bekijk collectie",
  },
  es: {
    lineEyebrow: "002 / Seis líneas", lineTitle: "UN LAB. SEIS APLICACIONES.", lineLead: "Elige por función: piel, aroma, fibra, origen, objeto o arte.", lines: [{ eyebrow: "01 · Applied Lipid Science", title: "AX COSMETICS", body: "Sistemas sin agua para carga, fricción y recuperación.", cta: "Abrir colección" }, { eyebrow: "02 · Applied Scent Architecture", title: "OLF-01 SIGNATURE", body: "Un acorde. Dos radios. Fuerza parfum en aceite.", cta: "Abrir Signature" }, { eyebrow: "03 · Applied Fiber Science", title: "ZONES FABRICS", body: "Material y construcción para tránsito, descanso y movimiento.", cta: "Abrir Fabrics" }, { eyebrow: "04 · Applied Origin Science", title: "ZONES SUPERFOOD", body: "Café de origen trazable.", cta: "Abrir Superfood" }, { eyebrow: "05 · Applied Object Culture", title: "ACCESSORIES", body: "Herramientas y objetos seleccionados para el ritual diario.", cta: "Abrir accesorios" }, { eyebrow: "06 · Applied Art Collaboration", title: "ZONES × REZA", body: "Una colaboración en preparación. Detalles próximamente.", cta: "Abrir Art Collab" }], trustEyebrow: "003 / Prueba de calidad", trustTitle: "ESPECIFICACIÓN ANTES QUE PROMESA.", trustLead: "Fórmula, envase, lote y origen son trazables en cada dossier, no meros elementos decorativos.", evidence: [{ value: "WATERLESS", label: "Fórmula" }, { value: "VIDRIO VIOLETA MIRON", label: "Envase" }, { value: "LOT 0419", label: "Índice de lote" }, { value: "BAVIERA", label: "Desarrollo" }], protocolEyebrow: "004 / Protocolo AX", protocolTitle: "CUATRO FASES. UN SISTEMA.", protocolLead: "PREP prepara. ENGAGE actúa. RECOVER estabiliza. FINISH controla fricción y humedad.", protocolCta: "Ver protocolo completo", module: "Módulos", productsEyebrow: "005 / Entrada", productsTitle: "SELECCIONADOS PARA EL PRIMER PASO.", productsLead: "Cuatro accesos directos al mundo ZONES.", bundleEyebrow: "006 / Elección de sistema", bundleTitle: "EL PROTOCOLO COMPLETO.", bundleLead: "Cuatro fases en un set. Ahorro para la decisión de sistema, nunca para compras individuales.", perModule: "Ahorro por módulo", ritualTitle: "NO RUTINA. RITUAL.", clubEyebrow: "008 / Acceso anticipado", clubTitle: "PARA QUIEN DECIDE ANTES.", clubLead: "Acceso a desarrollo, lotes limitados y redacción del Journal antes de publicar.", clubPlaceholder: "Correo electrónico", clubCta: "Unirse al club", clubSuccess: "Bienvenido al acceso anticipado. Escribiremos antes del próximo lote.", journalEyebrow: "009 / Journal", journalTitle: "CONOCIMIENTO ANTES DEL PRODUCTO.", journalCta: "Leer el Journal", journalCards: [{ eyebrow: "Fórmula", title: "WATERLESS / MIRON", body: "Por qué menos agua y vidrio protector son decisiones técnicas." }, { eyebrow: "Sistema", title: "EL PROTOCOLO AX", body: "Cómo cuatro fases forman un sistema legible." }, { eyebrow: "Origen", title: "BAVIERA / ECUADOR", body: "Desarrollo en lab, bosque nublado y trazabilidad." }], finalTitle: "¿LISTO PARA EL SISTEMA?", finalCta: "Ver colección",
  },
};