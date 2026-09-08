import type { Locale } from "@/i18n/config";

export interface LineCopy {
  headline: string;
  subline: string;
  intro: string;
  /** second paragraph: system classification / product logic / origin block */
  note: string;
  closing: string;
}

export type LineKey = "cosmetics" | "fabrics" | "coffee" | "accessories";

export const lineCopy: Record<Locale, Record<LineKey, LineCopy>> = {
  de: {
    cosmetics: {
      headline: "AX Cosmetics",
      subline: "Waterless Underarm Systems",
      intro: "Kein klassisches Deodorant. Ein Hautsystem. Entwickelt für Belastung, Reibung und Regeneration. Waterless. Spezifiziert. Nachvollziehbar.",
      note: "AX Cosmetics ist das Herzstück von ZONES LAB™. Vier Phasen — PREP, ENGAGE, RECOVER, FINISH — bilden ein lesbares Protocol. Jedes Modul hat eine klare technische Aufgabe. Nichts ist Füllstoff.",
      closing: "Das AX Protocol ist kein Ritual aus Gewohnheit. Es ist eine Entscheidung für Präzision.",
    },
    fabrics: {
      headline: "ZONES Fabrics",
      subline: "Applied Fiber Science",
      intro: "Material und Konstruktion für Transit, Ruhe und Bewegung. Vier textile Objekte. Klar in der Funktion. Spezifiziert in Herkunft und Verarbeitung.",
      note: "Jedes Stück ist nach Grammatur, Konstruktion und Hautkontakt spezifiziert — nicht nach Saison.",
      closing: "Fabrics sind Teil des Systems. Sie arbeiten mit der Haut, nicht gegen sie.",
    },
    coffee: {
      headline: "Kaffee",
      subline: "ZONES SUPERFOOD · Applied Origin Science",
      intro: "Single-Origin aus den Anden Ecuadors. Klar in der Herkunft, ruhig in der Röstung, präzise in der Anwendung. Kein Blend. Keine Überarbeitung. Nur das, was die Lage hergibt.",
      note: "Herkunft als Spezifikation. Der Andean Lot stammt aus Höhenlagen der ecuadorianischen Anden. Die Bohnen werden als Single-Origin verarbeitet — ohne Vermischung. Das Ergebnis: klare Süße, kontrollierte Säure, ruhiges Profil.",
      closing: "Teil von ZONES SUPERFOOD. Herkunft als Modul — nachvollziehbar, begrenzt, spezifiziert.",
    },
    accessories: {
      headline: "Accessories",
      subline: "Applied Object Culture",
      intro: "Kuratierte Werkzeuge und Objekte für das tägliche Ritual. Weniger Komplexität. Mehr Präzision. Jedes Objekt hat eine klare Aufgabe.",
      note: "Material, Form und Haptik sind spezifiziert. Keine Dekoration. Nur Funktion in ruhiger Form.",
      closing: "Accessories sind kein System. Sie sind die Objekte, die das System tragen.",
    },
  },
  en: {
    cosmetics: {
      headline: "AX Cosmetics",
      subline: "Waterless Underarm Systems",
      intro: "Not a classic deodorant. A skin system. Developed for load, friction and regeneration. Waterless. Specified. Verifiable.",
      note: "AX Cosmetics is the core of ZONES LAB™. Four phases — PREP, ENGAGE, RECOVER, FINISH — form a readable protocol. Every module has a clear technical task. Nothing is filler.",
      closing: "The AX Protocol is not a ritual out of habit. It is a decision for precision.",
    },
    fabrics: {
      headline: "ZONES Fabrics",
      subline: "Applied Fiber Science",
      intro: "Material and construction for transit, rest and movement. Four textile objects. Clear in function. Specified in origin and construction.",
      note: "Each piece is specified by weight, construction and skin contact — not by season.",
      closing: "Fabrics are part of the system. They work with the skin, not against it.",
    },
    coffee: {
      headline: "Coffee",
      subline: "ZONES SUPERFOOD · Applied Origin Science",
      intro: "Single origin from the Ecuadorian Andes. Clear in origin, calm in the roast, precise in use. No blend. No overworking. Only what the site gives.",
      note: "Origin as specification. The Andean lot comes from high altitudes in the Ecuadorian Andes. The beans are processed as single origin — without blending. The result: clear sweetness, controlled acidity, a calm profile.",
      closing: "Part of ZONES SUPERFOOD. Origin as a module — traceable, limited, specified.",
    },
    accessories: {
      headline: "Accessories",
      subline: "Applied Object Culture",
      intro: "Curated tools and objects for the daily ritual. Less complexity. More precision. Every object has a clear task.",
      note: "Material, form and hand feel are specified. No decoration. Only function in a quiet form.",
      closing: "Accessories are not a system. They are the objects that carry the system.",
    },
  },
  fr: {
    cosmetics: {
      headline: "AX Cosmetics",
      subline: "Waterless Underarm Systems",
      intro: "Pas un déodorant classique. Un système cutané. Conçu pour la charge, la friction et la récupération. Waterless. Spécifié. Vérifiable.",
      note: "AX Cosmetics est le cœur de ZONES LAB™. Quatre phases — PREP, ENGAGE, RECOVER, FINISH — forment un protocole lisible. Chaque module a une tâche technique claire. Rien n'est du remplissage.",
      closing: "L'AX Protocol n'est pas un rituel par habitude. C'est un choix de précision.",
    },
    fabrics: {
      headline: "ZONES Fabrics",
      subline: "Applied Fiber Science",
      intro: "Matière et construction pour le transit, le repos et le mouvement. Quatre objets textiles. Clairs en fonction. Spécifiés en origine et fabrication.",
      note: "Chaque pièce est spécifiée par grammage, construction et contact peau — non par saison.",
      closing: "Fabrics font partie du système. Ils travaillent avec la peau, pas contre elle.",
    },
    coffee: {
      headline: "Café",
      subline: "ZONES SUPERFOOD · Applied Origin Science",
      intro: "Single origin des Andes équatoriennes. Clair d'origine, calme à la torréfaction, précis à l'usage. Aucun assemblage. Aucune surcharge. Seulement ce que donne la parcelle.",
      note: "L'origine comme spécification. Le lot andin provient des hauteurs des Andes équatoriennes. Les grains sont traités en single origin — sans mélange. Résultat : douceur nette, acidité contrôlée, profil calme.",
      closing: "Partie de ZONES SUPERFOOD. L'origine comme module — traçable, limitée, spécifiée.",
    },
    accessories: {
      headline: "Accessories",
      subline: "Applied Object Culture",
      intro: "Outils et objets sélectionnés pour le rituel quotidien. Moins de complexité. Plus de précision. Chaque objet a une tâche claire.",
      note: "Matière, forme et toucher sont spécifiés. Aucune décoration. Seulement la fonction, sous une forme calme.",
      closing: "Les accessories ne sont pas un système. Ce sont les objets qui portent le système.",
    },
  },
  it: {
    cosmetics: {
      headline: "AX Cosmetics",
      subline: "Waterless Underarm Systems",
      intro: "Non un deodorante classico. Un sistema per la pelle. Sviluppato per carico, attrito e recupero. Waterless. Specificato. Verificabile.",
      note: "AX Cosmetics è il cuore di ZONES LAB™. Quattro fasi — PREP, ENGAGE, RECOVER, FINISH — formano un protocollo leggibile. Ogni modulo ha un compito tecnico chiaro. Nulla è riempitivo.",
      closing: "L'AX Protocol non è un rituale per abitudine. È una scelta di precisione.",
    },
    fabrics: {
      headline: "ZONES Fabrics",
      subline: "Applied Fiber Science",
      intro: "Materiale e costruzione per transito, riposo e movimento. Quattro oggetti tessili. Chiari nella funzione. Specificati in origine e lavorazione.",
      note: "Ogni pezzo è specificato per grammatura, costruzione e contatto con la pelle — non per stagione.",
      closing: "I Fabrics fanno parte del sistema. Lavorano con la pelle, non contro.",
    },
    coffee: {
      headline: "Caffè",
      subline: "ZONES SUPERFOOD · Applied Origin Science",
      intro: "Single origin dalle Ande ecuadoriane. Chiaro nell'origine, calmo nella tostatura, preciso nell'uso. Nessun blend. Nessuna forzatura. Solo ciò che dà la zona.",
      note: "L'origine come specifica. Il lotto andino proviene dalle alte quote delle Ande ecuadoriane. I chicchi sono lavorati come single origin — senza miscele. Il risultato: dolcezza nitida, acidità controllata, profilo calmo.",
      closing: "Parte di ZONES SUPERFOOD. L'origine come modulo — tracciabile, limitata, specificata.",
    },
    accessories: {
      headline: "Accessories",
      subline: "Applied Object Culture",
      intro: "Strumenti e oggetti selezionati per il rituale quotidiano. Meno complessità. Più precisione. Ogni oggetto ha un compito chiaro.",
      note: "Materiale, forma e tatto sono specificati. Nessuna decorazione. Solo funzione, in forma quieta.",
      closing: "Gli accessories non sono un sistema. Sono gli oggetti che lo sostengono.",
    },
  },
  nl: {
    cosmetics: {
      headline: "AX Cosmetics",
      subline: "Waterless Underarm Systems",
      intro: "Geen klassieke deodorant. Een huidsysteem. Ontwikkeld voor belasting, wrijving en herstel. Waterless. Gespecificeerd. Navolgbaar.",
      note: "AX Cosmetics is het hart van ZONES LAB™. Vier fases — PREP, ENGAGE, RECOVER, FINISH — vormen een leesbaar protocol. Elke module heeft een duidelijke technische taak. Niets is vulling.",
      closing: "Het AX Protocol is geen ritueel uit gewoonte. Het is een keuze voor precisie.",
    },
    fabrics: {
      headline: "ZONES Fabrics",
      subline: "Applied Fiber Science",
      intro: "Materiaal en constructie voor transit, rust en beweging. Vier textiele objecten. Helder in functie. Gespecificeerd in herkomst en verwerking.",
      note: "Elk stuk is gespecificeerd op gramgewicht, constructie en huidcontact — niet op seizoen.",
      closing: "Fabrics zijn deel van het systeem. Ze werken met de huid, niet tegen de huid.",
    },
    coffee: {
      headline: "Koffie",
      subline: "ZONES SUPERFOOD · Applied Origin Science",
      intro: "Single origin uit de Ecuadoraanse Andes. Helder in herkomst, rustig in de branding, precies in gebruik. Geen blend. Geen bewerking te veel. Alleen wat de locatie geeft.",
      note: "Herkomst als specificatie. Het Andean lot komt uit de hoge lagen van de Ecuadoraanse Andes. De bonen worden als single origin verwerkt — zonder vermenging. Het resultaat: heldere zoetheid, beheerste zuren, een rustig profiel.",
      closing: "Onderdeel van ZONES SUPERFOOD. Herkomst als module — navolgbaar, beperkt, gespecificeerd.",
    },
    accessories: {
      headline: "Accessories",
      subline: "Applied Object Culture",
      intro: "Gecureerde gereedschappen en objecten voor het dagelijkse ritueel. Minder complexiteit. Meer precisie. Elk object heeft een duidelijke taak.",
      note: "Materiaal, vorm en haptiek zijn gespecificeerd. Geen decoratie. Alleen functie in rustige vorm.",
      closing: "Accessories zijn geen systeem. Ze zijn de objecten die het systeem dragen.",
    },
  },
  es: {
    cosmetics: {
      headline: "AX Cosmetics",
      subline: "Waterless Underarm Systems",
      intro: "No es un desodorante clásico. Es un sistema para la piel. Desarrollado para carga, fricción y recuperación. Waterless. Especificado. Verificable.",
      note: "AX Cosmetics es el núcleo de ZONES LAB™. Cuatro fases — PREP, ENGAGE, RECOVER, FINISH — forman un protocolo legible. Cada módulo tiene una tarea técnica clara. Nada es relleno.",
      closing: "El AX Protocol no es un ritual por costumbre. Es una decisión por la precisión.",
    },
    fabrics: {
      headline: "ZONES Fabrics",
      subline: "Applied Fiber Science",
      intro: "Material y construcción para el tránsito, el descanso y el movimiento. Cuatro objetos textiles. Claros en función. Especificados en origen y elaboración.",
      note: "Cada pieza se especifica por gramaje, construcción y contacto con la piel — no por temporada.",
      closing: "Fabrics forman parte del sistema. Trabajan con la piel, no contra ella.",
    },
    coffee: {
      headline: "Café",
      subline: "ZONES SUPERFOOD · Applied Origin Science",
      intro: "Single origin de los Andes de Ecuador. Claro en el origen, sereno en el tueste, preciso en el uso. Sin blend. Sin sobreproceso. Solo lo que da la finca.",
      note: "El origen como especificación. El lote andino proviene de altitudes de los Andes ecuatorianos. Los granos se procesan como single origin — sin mezclas. El resultado: dulzor claro, acidez controlada, perfil sereno.",
      closing: "Parte de ZONES SUPERFOOD. El origen como módulo — trazable, limitado, especificado.",
    },
    accessories: {
      headline: "Accessories",
      subline: "Applied Object Culture",
      intro: "Herramientas y objetos seleccionados para el ritual diario. Menos complejidad. Más precisión. Cada objeto tiene una tarea clara.",
      note: "Material, forma y tacto están especificados. Sin decoración. Solo función en forma serena.",
      closing: "Los accessories no son un sistema. Son los objetos que sostienen el sistema.",
    },
  },
};
