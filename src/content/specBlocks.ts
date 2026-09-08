import type { Locale } from "@/i18n/config";

/**
 * Unified spec-block format across all product lines.
 * `positioning` = one italic sentence: why the product exists.
 * `description` = the running text shown on the detail page (overrides the legacy copy).
 * `specs` = scannable label/value pairs.
 */
export type SpecKey =
  | "format"
  | "phase"
  | "for"
  | "freeFrom"
  | "material"
  | "process"
  | "origin"
  | "roast";

export type L = Record<Locale, string>;

export interface SpecRow {
  key: SpecKey;
  value: L;
}

export interface SpecBlock {
  positioning: L;
  description?: L;
  specs: SpecRow[];
}

export const SPEC_LABELS: Record<SpecKey, L> = {
  format: { de: "Format", en: "Format", fr: "Format", it: "Formato", nl: "Formaat", es: "Formato" },
  phase: { de: "Phase", en: "Phase", fr: "Phase", it: "Fase", nl: "Fase", es: "Fase" },
  for: { de: "Für", en: "For", fr: "Pour", it: "Per", nl: "Voor", es: "Para" },
  freeFrom: { de: "Frei von", en: "Free from", fr: "Sans", it: "Senza", nl: "Vrij van", es: "Sin" },
  material: { de: "Material", en: "Material", fr: "Matière", it: "Materiale", nl: "Materiaal", es: "Material" },
  process: { de: "Verarbeitung", en: "Construction", fr: "Fabrication", it: "Lavorazione", nl: "Verwerking", es: "Elaboración" },
  origin: { de: "Herkunft", en: "Origin", fr: "Origine", it: "Origine", nl: "Herkomst", es: "Origen" },
  roast: { de: "Röstprofil", en: "Roast profile", fr: "Profil de torréfaction", it: "Profilo di tostatura", nl: "Brandprofiel", es: "Perfil de tueste" },
};

const same = (value: string): L => ({ de: value, en: value, fr: value, it: value, nl: value, es: value });

const ANDES: L = {
  de: "Ecuador · Anden",
  en: "Ecuador · Andes",
  fr: "Équateur · Andes",
  it: "Ecuador · Ande",
  nl: "Ecuador · Andes",
  es: "Ecuador · Andes",
};

const ROAST_MEDIUM: L = {
  de: "Fine Aroma, mittel",
  en: "Fine aroma, medium",
  fr: "Fine aroma, moyen",
  it: "Fine aroma, medio",
  nl: "Fine aroma, medium",
  es: "Fine aroma, medio",
};

const HANDMADE_EU: L = {
  de: "handgefertigt, Europa",
  en: "handmade, Europe",
  fr: "fait main, Europe",
  it: "fatto a mano, Europa",
  nl: "handgemaakt, Europa",
  es: "hecho a mano, Europa",
};

const OLIVE_STEEL: L = {
  de: "Olivenholz, Edelstahl",
  en: "Olive wood, stainless steel",
  fr: "Bois d’olivier, acier inoxydable",
  it: "Legno d’ulivo, acciaio inox",
  nl: "Olijfhout, roestvrij staal",
  es: "Madera de olivo, acero inoxidable",
};

const SOAP_USE: L = {
  de: "die 3 Recovery-Seifen",
  en: "the 3 Recovery soaps",
  fr: "les 3 savons Recovery",
  it: "i 3 saponi Recovery",
  nl: "de 3 Recovery-zepen",
  es: "los 3 jabones Recovery",
};

export const SPEC_BLOCKS: Record<string, SpecBlock> = {
  /* ============ AX COSMETICS ============ */
  "ax:intense": {
    positioning: {
      de: "Waterless Balm zur täglichen Geruchsregulation.",
      en: "Waterless balm for daily odour regulation.",
      fr: "Baume waterless pour la régulation quotidienne des odeurs.",
      it: "Balsamo waterless per la regolazione quotidiana degli odori.",
      nl: "Waterless balm voor dagelijkse geurregulatie.",
      es: "Bálsamo waterless para la regulación diaria del olor.",
    },
    description: {
      de: "Das Soda-in-Oil-System arbeitet über kontrollierte pH-Modulation und Molekülbindung — eingebettet in eine lipidische Matrix, die die Haut unterstützt, statt sie zu belasten. Für normale bis erhöhte Belastung. Präzise dosierbar. Ohne Aluminium.",
      en: "The Soda-in-Oil system works through controlled pH modulation and molecular binding — embedded in a lipid matrix that supports the skin instead of loading it. For normal to elevated demand. Precisely dosable. Without aluminium.",
      fr: "Le système Soda-in-Oil agit par modulation contrôlée du pH et liaison moléculaire — dans une matrice lipidique qui soutient la peau au lieu de la solliciter. Pour une exposition normale à élevée. Dosage précis. Sans aluminium.",
      it: "Il sistema Soda-in-Oil agisce con modulazione controllata del pH e legame molecolare — in una matrice lipidica che sostiene la pelle invece di affaticarla. Per carico normale ed elevato. Dosaggio preciso. Senza alluminio.",
      nl: "Het Soda-in-Oil-systeem werkt via gecontroleerde pH-modulatie en molecuulbinding — in een lipidenmatrix die de huid ondersteunt in plaats van belast. Voor normale tot verhoogde belasting. Precies doseerbaar. Zonder aluminium.",
      es: "El sistema Soda-in-Oil actúa mediante modulación controlada del pH y unión molecular — en una matriz lipídica que apoya la piel en lugar de exigirla. Para carga normal a elevada. Dosificación precisa. Sin aluminio.",
    },
    specs: [
      { key: "format", value: { de: "50 ml, Titan-Zylinder", en: "50 ml, titanium cylinder", fr: "50 ml, cylindre titane", it: "50 ml, cilindro titanio", nl: "50 ml, titanium cilinder", es: "50 ml, cilindro de titanio" } },
      { key: "phase", value: same("ENGAGE") },
      { key: "for", value: { de: "normale bis erhöhte Belastung", en: "normal to elevated demand", fr: "exposition normale à élevée", it: "carico normale ed elevato", nl: "normale tot verhoogde belasting", es: "carga normal a elevada" } },
      { key: "freeFrom", value: { de: "Aluminium, Wasser", en: "aluminium, water", fr: "aluminium, eau", it: "alluminio, acqua", nl: "aluminium, water", es: "aluminio, agua" } },
    ],
  },
  "ax:sensitive": {
    positioning: {
      de: "Sanfte, waterless Regulation für reaktive oder empfindliche Haut.",
      en: "Gentle, waterless regulation for reactive or sensitive skin.",
      fr: "Régulation waterless douce pour peaux réactives ou sensibles.",
      it: "Regolazione waterless delicata per pelli reattive o sensibili.",
      nl: "Zachte, waterless regulatie voor reactieve of gevoelige huid.",
      es: "Regulación waterless suave para piel reactiva o sensible.",
    },
    description: {
      de: "Das Neuro-Calm-System reduziert Geruchsbildung ohne aggressive Eingriffe. Formuliert für tägliche Anwendung und Haut, die zur Ruhe kommen soll. Ohne Aluminium. Ohne Duftstoffe. Ohne Reizspitzen.",
      en: "The Neuro-Calm system reduces odour formation without aggressive intervention. Formulated for daily use and for skin that needs to settle. No aluminium. No fragrance. No irritation peaks.",
      fr: "Le système Neuro-Calm réduit la formation d’odeurs sans intervention agressive. Formulé pour un usage quotidien et pour une peau qui doit s’apaiser. Sans aluminium. Sans parfum. Sans pics d’irritation.",
      it: "Il sistema Neuro-Calm riduce la formazione di odori senza interventi aggressivi. Formulato per l’uso quotidiano e per pelli che devono calmarsi. Senza alluminio. Senza profumo. Senza picchi di irritazione.",
      nl: "Het Neuro-Calm-systeem vermindert geurvorming zonder agressief ingrijpen. Geformuleerd voor dagelijks gebruik en voor huid die tot rust moet komen. Zonder aluminium. Zonder parfum. Zonder irritatiepieken.",
      es: "El sistema Neuro-Calm reduce la formación de olor sin intervenciones agresivas. Formulado para uso diario y para piel que necesita calmarse. Sin aluminio. Sin perfume. Sin picos de irritación.",
    },
    specs: [
      { key: "format", value: { de: "50 ml, Frosted-Zylinder", en: "50 ml, frosted cylinder", fr: "50 ml, cylindre dépoli", it: "50 ml, cilindro satinato", nl: "50 ml, frosted cilinder", es: "50 ml, cilindro esmerilado" } },
      { key: "phase", value: same("ENGAGE") },
      { key: "for", value: { de: "reaktive, empfindliche Haut", en: "reactive, sensitive skin", fr: "peaux réactives et sensibles", it: "pelli reattive e sensibili", nl: "reactieve, gevoelige huid", es: "piel reactiva y sensible" } },
      { key: "freeFrom", value: { de: "Aluminium, Duftstoffe, Wasser", en: "aluminium, fragrance, water", fr: "aluminium, parfum, eau", it: "alluminio, profumo, acqua", nl: "aluminium, parfum, water", es: "aluminio, perfume, agua" } },
    ],
  },
  "ax:reset": {
    positioning: {
      de: "Kein Routine-Schritt. Ein Übergang, wenn die Haut ihn braucht.",
      en: "Not a routine step. A transition, when the skin asks for it.",
      fr: "Pas une étape de routine. Une transition, quand la peau le demande.",
      it: "Non un passaggio di routine. Una transizione, quando la pelle lo chiede.",
      nl: "Geen routinestap. Een overgang, wanneer de huid erom vraagt.",
      es: "No es un paso de rutina. Una transición, cuando la piel lo pide.",
    },
    description: {
      de: "Feine Zucker-Öl-Textur, die mechanisch statt aktiv arbeitet — für die Momente vor einer Reizung oder zwischen zwei Phasen des Protocols. Kein tägliches Produkt. Ein gezieltes.",
      en: "A fine sugar-oil texture that works mechanically instead of actively — for the moments before an irritation or between two phases of the protocol. Not a daily product. A deliberate one.",
      fr: "Texture fine sucre-huile qui agit mécaniquement plutôt qu’activement — avant une irritation ou entre deux phases du protocole. Pas un produit quotidien. Un produit ciblé.",
      it: "Texture fine zucchero-olio che agisce meccanicamente e non attivamente — prima di un’irritazione o fra due fasi del protocollo. Non un prodotto quotidiano. Uno mirato.",
      nl: "Fijne suiker-olietextuur die mechanisch werkt in plaats van actief — voor de momenten vóór irritatie of tussen twee fases van het protocol. Geen dagelijks product. Een gericht product.",
      es: "Textura fina de azúcar y aceite que actúa de forma mecánica, no activa — antes de una irritación o entre dos fases del protocolo. No es un producto diario. Es uno preciso.",
    },
    specs: [
      { key: "format", value: { de: "75 g, Titan-Jar", en: "75 g, titanium jar", fr: "75 g, pot titane", it: "75 g, vasetto titanio", nl: "75 g, titanium pot", es: "75 g, tarro de titanio" } },
      { key: "phase", value: same("PREP") },
      { key: "for", value: { de: "intermittierende Anwendung, vor Belastung", en: "intermittent use, before load", fr: "usage intermittent, avant l’effort", it: "uso intermittente, prima del carico", nl: "incidenteel gebruik, vóór belasting", es: "uso intermitente, antes de la carga" } },
      { key: "freeFrom", value: { de: "Wasser, aggressive Tenside", en: "water, harsh surfactants", fr: "eau, tensioactifs agressifs", it: "acqua, tensioattivi aggressivi", nl: "water, agressieve tensiden", es: "agua, tensioactivos agresivos" } },
    ],
  },
  "ax:powder": {
    positioning: {
      de: "Die letzte Phase, mechanisch statt aktiv.",
      en: "The final phase, mechanical instead of active.",
      fr: "La dernière phase, mécanique plutôt qu’active.",
      it: "L’ultima fase, meccanica anziché attiva.",
      nl: "De laatste fase, mechanisch in plaats van actief.",
      es: "La última fase, mecánica en lugar de activa.",
    },
    description: {
      de: "Feines Mineralpulver aus dem Titan-Dial appliziert — reguliert Mikroklima durch Feuchtigkeitsaufnahme, nicht durch Wirkstoffeingriff. Der stille Support-Schritt nach ENGAGE.",
      en: "A fine mineral powder applied from the titanium dial — it regulates microclimate through moisture uptake, not through active intervention. The quiet support step after ENGAGE.",
      fr: "Poudre minérale fine appliquée depuis le dial titane — elle régule le microclimat par absorption d’humidité, non par action de principes actifs. L’étape de soutien silencieuse après ENGAGE.",
      it: "Polvere minerale fine dal dial in titanio — regola il microclima assorbendo umidità, non con principi attivi. Il passaggio di supporto silenzioso dopo ENGAGE.",
      nl: "Fijn mineraalpoeder uit de titanium dial — reguleert het microklimaat door vochtopname, niet door werkstoffen. De stille ondersteunende stap na ENGAGE.",
      es: "Polvo mineral fino aplicado desde el dial de titanio — regula el microclima por absorción de humedad, no por acción de activos. El paso de apoyo silencioso tras ENGAGE.",
    },
    specs: [
      { key: "format", value: { de: "40 g, Titan-Dial", en: "40 g, titanium dial", fr: "40 g, dial titane", it: "40 g, dial in titanio", nl: "40 g, titanium dial", es: "40 g, dial de titanio" } },
      { key: "phase", value: same("FINISH") },
      { key: "for", value: { de: "tägliche Anwendung nach ENGAGE", en: "daily use after ENGAGE", fr: "usage quotidien après ENGAGE", it: "uso quotidiano dopo ENGAGE", nl: "dagelijks gebruik na ENGAGE", es: "uso diario tras ENGAGE" } },
      { key: "freeFrom", value: { de: "Talkum, Wasser", en: "talc, water", fr: "talc, eau", it: "talco, acqua", nl: "talk, water", es: "talco, agua" } },
    ],
  },
  "ax:hamamelis-mist": {
    positioning: {
      de: "Ein Inhaltsstoff. Keine Formel.",
      en: "One ingredient. No formula.",
      fr: "Un ingrédient. Aucune formule.",
      it: "Un ingrediente. Nessuna formula.",
      nl: "Eén ingrediënt. Geen formule.",
      es: "Un ingrediente. Ninguna fórmula.",
    },
    description: {
      de: "Hamamelis Virginiana Leaf Water, alkoholfrei destilliert, unverändert. Der Toner-Schritt vor Stabilisieren — kein Zusatz, der nicht gebraucht wird.",
      en: "Hamamelis Virginiana leaf water, distilled without alcohol, left unchanged. The toner step before stabilising — no additive that isn’t needed.",
      fr: "Eau de feuille d’Hamamelis Virginiana, distillée sans alcool, inchangée. L’étape tonique avant la stabilisation — aucun additif superflu.",
      it: "Acqua di foglie di Hamamelis Virginiana, distillata senza alcol, invariata. Il passaggio tonico prima della stabilizzazione — nessun additivo superfluo.",
      nl: "Hamamelis Virginiana bladwater, alcoholvrij gedistilleerd, ongewijzigd. De tonerstap vóór het stabiliseren — geen overbodig additief.",
      es: "Agua de hoja de Hamamelis Virginiana, destilada sin alcohol, sin modificar. El paso tónico antes de estabilizar — ningún aditivo innecesario.",
    },
    specs: [
      { key: "format", value: { de: "100 ml, Miron-Sprühflasche", en: "100 ml, Miron spray bottle", fr: "100 ml, flacon spray Miron", it: "100 ml, flacone spray Miron", nl: "100 ml, Miron sprayfles", es: "100 ml, frasco spray Miron" } },
      { key: "phase", value: same("PREP") },
      { key: "for", value: { de: "vor ENGAGE, als Toner-Schritt", en: "before ENGAGE, as the toner step", fr: "avant ENGAGE, comme étape tonique", it: "prima di ENGAGE, come passaggio tonico", nl: "vóór ENGAGE, als tonerstap", es: "antes de ENGAGE, como paso tónico" } },
      { key: "freeFrom", value: { de: "Alkohol, Zusatzstoffe", en: "alcohol, additives", fr: "alcool, additifs", it: "alcol, additivi", nl: "alcohol, additieven", es: "alcohol, aditivos" } },
    ],
  },
  "ax:pre-shave-oil": {
    positioning: {
      de: "Der Schritt vor der Klinge.",
      en: "The step before the blade.",
      fr: "L’étape avant la lame.",
      it: "Il passaggio prima della lama.",
      nl: "De stap vóór het mes.",
      es: "El paso antes de la hoja.",
    },
    description: {
      de: "Argan-Jojoba-Squalan-Komplex reduziert mechanische Reibung, bevor sie entsteht. Kein Duft, keine Ablenkung — nur Gleitfähigkeit, präzise dort, wo die Klinge arbeitet.",
      en: "An argan-jojoba-squalane complex reduces mechanical friction before it arises. No fragrance, no distraction — only slip, precisely where the blade works.",
      fr: "Le complexe argan-jojoba-squalane réduit la friction mécanique avant qu’elle n’apparaisse. Sans parfum, sans distraction — juste la glisse, là où la lame travaille.",
      it: "Il complesso argan-jojoba-squalano riduce l’attrito meccanico prima che si formi. Nessun profumo, nessuna distrazione — solo scorrevolezza, dove lavora la lama.",
      nl: "Een argan-jojoba-squalaancomplex vermindert mechanische wrijving voordat die ontstaat. Geen geur, geen afleiding — alleen glijvermogen, precies waar het mes werkt.",
      es: "El complejo argán-jojoba-escualano reduce la fricción mecánica antes de que aparezca. Sin perfume, sin distracción — solo deslizamiento, justo donde trabaja la hoja.",
    },
    specs: [
      { key: "format", value: { de: "50 ml, Miron-Tropfflasche", en: "50 ml, Miron dropper bottle", fr: "50 ml, flacon compte-gouttes Miron", it: "50 ml, flacone contagocce Miron", nl: "50 ml, Miron druppelfles", es: "50 ml, frasco gotero Miron" } },
      { key: "phase", value: same("PREP") },
      { key: "for", value: { de: "vor der Rasur", en: "before shaving", fr: "avant le rasage", it: "prima della rasatura", nl: "vóór het scheren", es: "antes del afeitado" } },
      { key: "freeFrom", value: { de: "Duftstoffe, Silikone", en: "fragrance, silicones", fr: "parfum, silicones", it: "profumo, siliconi", nl: "parfum, siliconen", es: "perfume, siliconas" } },
    ],
  },
  "ax:lip-sculpt": {
    positioning: {
      de: "Reparatur, nicht Dekoration.",
      en: "Repair, not decoration.",
      fr: "Réparation, pas décoration.",
      it: "Riparazione, non decorazione.",
      nl: "Herstel, geen decoratie.",
      es: "Reparación, no decoración.",
    },
    description: {
      de: "Sheabutter, Candelilla-Wachs und Castoröl in einer Formel, die pflegt statt nur zu glänzen. Vanillin und Minze als einzige Aromakomponenten — eigener Track, losgelöst von der Kernsignatur.",
      en: "Shea butter, candelilla wax and castor oil in a formula that cares instead of merely shining. Vanillin and mint as the only aromatic components — its own track, detached from the core signature.",
      fr: "Beurre de karité, cire de candelilla et huile de ricin dans une formule qui soigne au lieu de simplement briller. Vanilline et menthe comme seuls composants aromatiques — une piste à part, détachée de la signature centrale.",
      it: "Burro di karité, cera candelilla e olio di ricino in una formula che cura invece di limitarsi a lucidare. Vanillina e menta come uniche componenti aromatiche — una traccia propria, separata dalla firma centrale.",
      nl: "Sheaboter, candelillawas en ricinusolie in een formule die verzorgt in plaats van alleen glanst. Vanilline en munt als enige aromacomponenten — een eigen spoor, los van de kernsignatuur.",
      es: "Manteca de karité, cera de candelilla y aceite de ricino en una fórmula que cuida en lugar de solo abrillantar. Vainillina y menta como únicos componentes aromáticos — una vía propia, separada de la firma central.",
    },
    specs: [
      { key: "format", value: { de: "15 ml, Frosted-Jar", en: "15 ml, frosted jar", fr: "15 ml, pot dépoli", it: "15 ml, vasetto satinato", nl: "15 ml, frosted pot", es: "15 ml, tarro esmerilado" } },
      { key: "phase", value: same("RECOVER") },
      { key: "for", value: { de: "tägliche Lippenpflege", en: "daily lip care", fr: "soin quotidien des lèvres", it: "cura quotidiana delle labbra", nl: "dagelijkse lipverzorging", es: "cuidado labial diario" } },
      { key: "freeFrom", value: { de: "künstliche Glanzbildner", en: "synthetic shine agents", fr: "agents brillants synthétiques", it: "agenti lucidanti sintetici", nl: "synthetische glansmiddelen", es: "agentes de brillo sintéticos" } },
    ],
  },

  /* ============ ZONES FABRICS ============ */
  "fb:tracksuit": {
    positioning: {
      de: "Ein Arbeitsgerät, kein Statement-Piece.",
      en: "A working tool, not a statement piece.",
      fr: "Un outil de travail, pas une pièce déclarative.",
      it: "Uno strumento di lavoro, non un pezzo dichiarativo.",
      nl: "Een werktuig, geen statement piece.",
      es: "Una herramienta de trabajo, no una pieza de statement.",
    },
    description: {
      de: "Ein zweiteiliges System für Bewegung und Regeneration. Konstruktion und Grammatur sind auf Mikroklima und Freiheit ausgelegt — 480 gsm Bio-Baumwolle, oversized, unisex.",
      en: "A two-piece system for movement and regeneration. Construction and weight are built around microclimate and freedom — 480 gsm organic cotton, oversized, unisex.",
      fr: "Un système en deux pièces pour le mouvement et la récupération. Construction et grammage pensés pour le microclimat et la liberté — coton bio 480 g/m², oversized, unisexe.",
      it: "Un sistema in due pezzi per movimento e recupero. Costruzione e grammatura pensate per microclima e libertà — cotone bio 480 gsm, oversized, unisex.",
      nl: "Een tweedelig systeem voor beweging en herstel. Constructie en gramgewicht zijn afgestemd op microklimaat en bewegingsvrijheid — 480 gsm biokatoen, oversized, unisex.",
      es: "Un sistema de dos piezas para movimiento y recuperación. Construcción y gramaje pensados para el microclima y la libertad — algodón orgánico de 480 gsm, oversized, unisex.",
    },
    specs: [
      { key: "format", value: { de: "Hoodie + Hose, oversized Unisex", en: "Hoodie + pants, oversized unisex", fr: "Hoodie + pantalon, oversized unisexe", it: "Hoodie + pantalone, oversized unisex", nl: "Hoodie + broek, oversized unisex", es: "Hoodie + pantalón, oversized unisex" } },
      { key: "material", value: { de: "480 gsm Bio-Baumwolle", en: "480 gsm organic cotton", fr: "Coton bio 480 g/m²", it: "Cotone bio 480 gsm", nl: "480 gsm biokatoen", es: "Algodón orgánico 480 gsm" } },
      { key: "for", value: { de: "Regeneration, Transit", en: "Regeneration, transit", fr: "Récupération, transit", it: "Recupero, transito", nl: "Herstel, transit", es: "Recuperación, tránsito" } },
      { key: "process", value: { de: "Drop Shoulder, gebürstete Innenseite", en: "Drop shoulder, brushed inner face", fr: "Épaules tombantes, intérieur gratté", it: "Spalla scesa, interno garzato", nl: "Drop shoulder, geborstelde binnenzijde", es: "Hombro caído, interior cepillado" } },
    ],
  },
  "fb:zone-boxers": {
    positioning: {
      de: "Weniger Reibung. Besseres Mikroklima.",
      en: "Less friction. Better microclimate.",
      fr: "Moins de friction. Meilleur microclimat.",
      it: "Meno attrito. Microclima migliore.",
      nl: "Minder wrijving. Beter microklimaat.",
      es: "Menos fricción. Mejor microclima.",
    },
    description: {
      de: "Cotton-Silk-Mischung, flache Nähte, entwickelt für den direkten Hautkontakt unter Belastung und in Ruhe. Lockerer Boxer-Schnitt statt enganliegendem Slip.",
      en: "A cotton-silk blend with flat seams, developed for direct skin contact under load and at rest. A relaxed boxer cut instead of a tight brief.",
      fr: "Mélange coton-soie, coutures plates, conçu pour le contact direct avec la peau, à l’effort comme au repos. Coupe boxer ample plutôt que slip ajusté.",
      it: "Misto cotone-seta, cuciture piatte, sviluppato per il contatto diretto con la pelle sotto carico e a riposo. Taglio boxer morbido invece dello slip aderente.",
      nl: "Katoen-zijdemengsel met platte naden, ontwikkeld voor direct huidcontact onder belasting en in rust. Ruime boxersnit in plaats van een strakke slip.",
      es: "Mezcla algodón-seda con costuras planas, desarrollada para el contacto directo con la piel en carga y en reposo. Corte bóxer holgado en lugar de slip ajustado.",
    },
    specs: [
      { key: "format", value: { de: "Boxer-Schnitt, Unisex", en: "Boxer cut, unisex", fr: "Coupe boxer, unisexe", it: "Taglio boxer, unisex", nl: "Boxersnit, unisex", es: "Corte bóxer, unisex" } },
      { key: "material", value: { de: "Baumwolle-Seide-Mischung", en: "Cotton-silk blend", fr: "Mélange coton-soie", it: "Misto cotone-seta", nl: "Katoen-zijdemengsel", es: "Mezcla algodón-seda" } },
      { key: "for", value: { de: "Sport, sensible Haut", en: "Sport, sensitive skin", fr: "Sport, peaux sensibles", it: "Sport, pelli sensibili", nl: "Sport, gevoelige huid", es: "Deporte, piel sensible" } },
      { key: "process", value: { de: "Flache Naht, kein Chafing", en: "Flat seam, no chafing", fr: "Couture plate, sans frottement", it: "Cucitura piatta, niente sfregamento", nl: "Platte naad, geen schuren", es: "Costura plana, sin rozaduras" } },
    ],
  },
  "fb:zone-tee": {
    positioning: {
      de: "Unsichtbar in der Leistung, sichtbar in der Qualität.",
      en: "Invisible in performance, visible in quality.",
      fr: "Invisible à l’usage, visible dans la qualité.",
      it: "Invisibile nella prestazione, visibile nella qualità.",
      nl: "Onzichtbaar in prestatie, zichtbaar in kwaliteit.",
      es: "Invisible en el rendimiento, visible en la calidad.",
    },
    description: {
      de: "Das fundamentale Layer. Schnitt und Material sind auf Dauergetragen und untere Schichten optimiert — mit Achsel-Gusset-Panel exakt an der Zone, wo das AX Protocol arbeitet.",
      en: "The fundamental layer. Cut and material are optimised for continuous wear and for lower layers — with an axillary gusset panel exactly where the AX Protocol works.",
      fr: "La couche fondamentale. Coupe et matière optimisées pour le port continu et les couches inférieures — avec un gousset axillaire exactement là où agit l’AX Protocol.",
      it: "Lo strato fondamentale. Taglio e materiale ottimizzati per l’uso continuo e per gli strati inferiori — con pannello gusset ascellare esattamente dove lavora l’AX Protocol.",
      nl: "De fundamentele laag. Snit en materiaal zijn geoptimaliseerd voor continu dragen en onderlagen — met okselgussetpaneel precies waar het AX Protocol werkt.",
      es: "La capa fundamental. Corte y material optimizados para el uso continuo y las capas inferiores — con panel gusset axilar exactamente donde trabaja el AX Protocol.",
    },
    specs: [
      { key: "format", value: { de: "Oversized T-Shirt, Unisex", en: "Oversized tee, unisex", fr: "T-shirt oversized, unisexe", it: "T-shirt oversized, unisex", nl: "Oversized T-shirt, unisex", es: "Camiseta oversized, unisex" } },
      { key: "material", value: { de: "Heavyweight Jersey", en: "Heavyweight jersey", fr: "Jersey heavyweight", it: "Jersey heavyweight", nl: "Heavyweight jersey", es: "Jersey heavyweight" } },
      { key: "for", value: { de: "Base Layer, Dauertragen", en: "Base layer, continuous wear", fr: "Couche de base, port continu", it: "Base layer, uso continuo", nl: "Base layer, continu dragen", es: "Capa base, uso continuo" } },
      { key: "process", value: { de: "Achsel-Gusset, Drop Shoulder", en: "Axillary gusset, drop shoulder", fr: "Gousset axillaire, épaules tombantes", it: "Gusset ascellare, spalla scesa", nl: "Okselgusset, drop shoulder", es: "Gusset axilar, hombro caído" } },
    ],
  },
  "fb:towel-set": {
    positioning: {
      de: "Zwei Textilien, eine Logik.",
      en: "Two textiles, one logic.",
      fr: "Deux textiles, une logique.",
      it: "Due tessili, una logica.",
      nl: "Twee textielen, één logica.",
      es: "Dos textiles, una lógica.",
    },
    description: {
      de: "Das Bedsheet für die Nacht, das Sport Towel für die Belastung. Beide spezifiziert nach Saugverhalten, Haptik und Trocknungsverhalten — kein zufälliges Bundle, sondern ein Paar mit klarer Arbeitsteilung.",
      en: "The bath sheet for the night, the sport towel for the load. Both specified by absorbency, hand feel and drying behaviour — not a random bundle but a pair with a clear division of work.",
      fr: "Le drap de bain pour la nuit, la serviette de sport pour l’effort. Tous deux spécifiés par absorption, toucher et séchage — pas un lot au hasard, mais une paire aux rôles clairs.",
      it: "Il telo da bagno per la notte, l’asciugamano sport per il carico. Entrambi specificati per assorbenza, mano e asciugatura — non un bundle casuale, ma una coppia con ruoli chiari.",
      nl: "Het badlaken voor de nacht, de sporthanddoek voor de belasting. Beide gespecificeerd op absorptie, greep en droogtijd — geen willekeurige bundel maar een paar met een duidelijke taakverdeling.",
      es: "La sábana de baño para la noche, la toalla de deporte para la carga. Ambas especificadas por absorción, tacto y secado — no un pack casual, sino un par con reparto claro de funciones.",
    },
    specs: [
      { key: "format", value: { de: "2-teiliges Set", en: "Two-piece set", fr: "Set deux pièces", it: "Set in due pezzi", nl: "Tweedelige set", es: "Set de dos piezas" } },
      { key: "for", value: { de: "Regeneration (Nacht) und Belastung (Sport)", en: "Regeneration (night) and load (sport)", fr: "Récupération (nuit) et effort (sport)", it: "Recupero (notte) e carico (sport)", nl: "Herstel (nacht) en belasting (sport)", es: "Recuperación (noche) y carga (deporte)" } },
      { key: "process", value: { de: "nach Saugverhalten und Trocknungszeit spezifiziert", en: "specified by absorbency and drying time", fr: "spécifié par absorption et temps de séchage", it: "specificato per assorbenza e tempo di asciugatura", nl: "gespecificeerd op absorptie en droogtijd", es: "especificado por absorción y tiempo de secado" } },
    ],
  },

  /* ============ SUPERFOOD · COFFEE ============ */
  "sf:whole-bean": {
    positioning: {
      de: "Für die eigene Mühle und maximale Frische.",
      en: "For your own grinder and maximum freshness.",
      fr: "Pour votre moulin et une fraîcheur maximale.",
      it: "Per il proprio macinino e la massima freschezza.",
      nl: "Voor de eigen molen en maximale versheid.",
      es: "Para tu propio molinillo y máxima frescura.",
    },
    description: {
      de: "Single-Origin-Spezialitätenkaffee als ganze Bohne, geröstet für klare Süße und ruhige Säure.",
      en: "Single-origin specialty coffee as whole bean, roasted for clear sweetness and measured acidity.",
      fr: "Café de spécialité single origin en grains, torréfié pour une douceur nette et une acidité mesurée.",
      it: "Caffè specialty single origin in grani, tostato per dolcezza nitida e acidità misurata.",
      nl: "Single-origin specialty coffee als hele boon, gebrand voor heldere zoetheid en beheerste zuren.",
      es: "Café de especialidad single origin en grano, tostado para un dulzor claro y acidez medida.",
    },
    specs: [
      { key: "format", value: { de: "250 g, ganze Bohne", en: "250 g, whole bean", fr: "250 g, en grains", it: "250 g, in grani", nl: "250 g, hele boon", es: "250 g, en grano" } },
      { key: "origin", value: ANDES },
      { key: "for", value: { de: "eigene Mahlung", en: "grinding at home", fr: "mouture maison", it: "macinatura propria", nl: "zelf malen", es: "molienda propia" } },
      { key: "roast", value: ROAST_MEDIUM },
    ],
  },
  "sf:ground-coffee": {
    positioning: {
      de: "Sofort einsatzbereit, gleichbleibendes Profil.",
      en: "Ready to use, consistent profile.",
      fr: "Prêt à l’emploi, profil constant.",
      it: "Pronto all’uso, profilo costante.",
      nl: "Direct klaar, constant profiel.",
      es: "Listo para usar, perfil constante.",
    },
    description: {
      de: "Derselbe Andean Lot, frisch gemahlen — abgestimmt auf Filter und French Press.",
      en: "The same Andean lot, freshly ground — calibrated for filter and French press.",
      fr: "Le même lot andin, fraîchement moulu — calibré pour filtre et cafetière à piston.",
      it: "Lo stesso lotto andino, macinato fresco — calibrato per filtro e French press.",
      nl: "Hetzelfde Andean lot, vers gemalen — afgestemd op filter en cafetière.",
      es: "El mismo lote andino, recién molido — calibrado para filtro y prensa francesa.",
    },
    specs: [
      { key: "format", value: { de: "250 g, gemahlen", en: "250 g, ground", fr: "250 g, moulu", it: "250 g, macinato", nl: "250 g, gemalen", es: "250 g, molido" } },
      { key: "origin", value: ANDES },
      { key: "for", value: { de: "Filter, French Press", en: "Filter, French press", fr: "Filtre, cafetière à piston", it: "Filtro, French press", nl: "Filter, cafetière", es: "Filtro, prensa francesa" } },
      { key: "roast", value: ROAST_MEDIUM },
    ],
  },
  "sf:instant-sticks": {
    positioning: {
      de: "Präzision statt Ritual, wenn es schnell gehen muss.",
      en: "Precision instead of ritual, when time is short.",
      fr: "La précision plutôt que le rituel, quand il faut faire vite.",
      it: "Precisione invece di rituale, quando serve rapidità.",
      nl: "Precisie in plaats van ritueel, als het snel moet.",
      es: "Precisión en lugar de ritual, cuando hay prisa.",
    },
    description: {
      de: "Zehn einzeln dosierte Sticks aus löslichem Spezialitätenkaffee, dieselbe Herkunft, portioniert für unterwegs.",
      en: "Ten individually dosed sticks of soluble specialty coffee, same origin, portioned for the road.",
      fr: "Dix sticks dosés de café de spécialité soluble, même origine, portionnés pour la route.",
      it: "Dieci stick monodose di caffè specialty solubile, stessa origine, porzionati per il viaggio.",
      nl: "Tien afzonderlijk gedoseerde sticks oplosbare specialty coffee, dezelfde herkomst, geportioneerd voor onderweg.",
      es: "Diez sticks monodosis de café de especialidad soluble, mismo origen, porcionados para el camino.",
    },
    specs: [
      { key: "format", value: { de: "10 × 2,5 g Sticks", en: "10 × 2.5 g sticks", fr: "10 × 2,5 g sticks", it: "10 × 2,5 g stick", nl: "10 × 2,5 g sticks", es: "10 × 2,5 g sticks" } },
      { key: "origin", value: ANDES },
      { key: "for", value: { de: "unterwegs", en: "on the move", fr: "en déplacement", it: "in movimento", nl: "onderweg", es: "en movimiento" } },
      { key: "roast", value: { de: "Fine Aroma, mittel, löslich", en: "Fine aroma, medium, soluble", fr: "Fine aroma, moyen, soluble", it: "Fine aroma, medio, solubile", nl: "Fine aroma, medium, oplosbaar", es: "Fine aroma, medio, soluble" } },
    ],
  },

  /* ============ ACCESSORIES ============ */
  "ac:shave-ritual-set": {
    positioning: {
      de: "Das vollständige Rasur-Ritual, gehalten in Olivenholz.",
      en: "The complete shaving ritual, held in olive wood.",
      fr: "Le rituel de rasage complet, tenu dans le bois d’olivier.",
      it: "Il rituale di rasatura completo, in legno d’ulivo.",
      nl: "Het volledige scheerritueel, gevat in olijfhout.",
      es: "El ritual de afeitado completo, sostenido en madera de olivo.",
    },
    specs: [
      { key: "format", value: { de: "4-teiliges Set", en: "Four-piece set", fr: "Set de quatre pièces", it: "Set di quattro pezzi", nl: "Vierdelige set", es: "Set de cuatro piezas" } },
      { key: "material", value: { de: "Olivenholz, Porzellan, Edelstahl", en: "Olive wood, porcelain, stainless steel", fr: "Bois d’olivier, porcelaine, acier inoxydable", it: "Legno d’ulivo, porcellana, acciaio inox", nl: "Olijfhout, porselein, roestvrij staal", es: "Madera de olivo, porcelana, acero inoxidable" } },
      { key: "for", value: { de: "Rasur-Ritual, mit AX-06", en: "Shaving ritual, with AX-06", fr: "Rituel de rasage, avec AX-06", it: "Rituale di rasatura, con AX-06", nl: "Scheerritueel, met AX-06", es: "Ritual de afeitado, con AX-06" } },
      { key: "origin", value: HANDMADE_EU },
    ],
  },
  "ac:wet-razor": {
    positioning: {
      de: "Ein Griff, gemasert von der Natur, nie zweimal gleich.",
      en: "A handle grained by nature, never twice the same.",
      fr: "Un manche veiné par la nature, jamais deux fois pareil.",
      it: "Un manico venato dalla natura, mai uguale due volte.",
      nl: "Een greep, generfd door de natuur, nooit twee keer hetzelfde.",
      es: "Un mango vetado por la naturaleza, nunca dos veces igual.",
    },
    specs: [
      { key: "format", value: { de: "13 cm, 4 Varianten", en: "13 cm, four variants", fr: "13 cm, 4 variantes", it: "13 cm, 4 varianti", nl: "13 cm, 4 varianten", es: "13 cm, 4 variantes" } },
      { key: "material", value: OLIVE_STEEL },
      { key: "for", value: { de: "Einstieg, M3-kompatibel", en: "Entry level, M3 compatible", fr: "Entrée de gamme, compatible M3", it: "Ingresso, compatibile M3", nl: "Instap, M3-compatibel", es: "Iniciación, compatible M3" } },
      { key: "origin", value: HANDMADE_EU },
    ],
  },
  "ac:soap-tray-porcelain": {
    positioning: {
      de: "Porzellan ruht auf Olivenholz. Sonst nichts.",
      en: "Porcelain rests on olive wood. Nothing else.",
      fr: "La porcelaine repose sur le bois d’olivier. Rien d’autre.",
      it: "La porcellana poggia sul legno d’ulivo. Nient’altro.",
      nl: "Porselein rust op olijfhout. Verder niets.",
      es: "La porcelana descansa sobre madera de olivo. Nada más.",
    },
    specs: [
      { key: "format", value: same("14 × 7 × 4 cm") },
      { key: "material", value: { de: "Porzellan, Olivenholz", en: "Porcelain, olive wood", fr: "Porcelaine, bois d’olivier", it: "Porcellana, legno d’ulivo", nl: "Porselein, olijfhout", es: "Porcelana, madera de olivo" } },
      { key: "for", value: SOAP_USE },
      { key: "origin", value: HANDMADE_EU },
    ],
  },
  "ac:soap-dish-melamine": {
    positioning: {
      de: "Praktisch zuerst. Spülmaschinenfest, Olivenholz-Einleger.",
      en: "Practical first. Dishwasher-safe, olive wood insert.",
      fr: "Le pratique d’abord. Lavable au lave-vaisselle, insert en bois d’olivier.",
      it: "Prima il pratico. Lavabile in lavastoviglie, inserto in legno d’ulivo.",
      nl: "Praktisch eerst. Vaatwasserbestendig, olijfhouten inzet.",
      es: "Lo práctico primero. Apto para lavavajillas, inserto de madera de olivo.",
    },
    specs: [
      { key: "format", value: same("15,5 × 7,5 × 3 cm") },
      { key: "material", value: { de: "Melamin, Olivenholz", en: "Melamine, olive wood", fr: "Mélamine, bois d’olivier", it: "Melamina, legno d’ulivo", nl: "Melamine, olijfhout", es: "Melamina, madera de olivo" } },
      { key: "for", value: SOAP_USE },
      { key: "origin", value: HANDMADE_EU },
    ],
  },
};

export const getSpecBlock = (key: string): SpecBlock | undefined => SPEC_BLOCKS[key];
