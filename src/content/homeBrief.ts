import type { Locale } from "@/i18n/config";

export type HomeBriefCopy = {
  hero: { line1: string; line2: string; subline: string; primary: string; secondary: string; tertiary: string };
  quality: { eyebrow: string; title: string; lead: string; items: { label: string; text: string }[] };
  start: {
    eyebrow: string;
    title: string;
    lead: string;
    question: string;
    yes: string;
    no: string;
    restart: string;
    sensitive: { title: string; body: string; cta: string };
    intense: { title: string; body: string; cta: string };
  };
  art: { eyebrow: string; badge: string; title: string; lead: string; cta: string };
};

export const homeBriefCopy: Record<Locale, HomeBriefCopy> = {
  de: {
    hero: {
      line1: "Ein Lab.",
      line2: "Sechs Anwendungen.",
      subline: "Reale Innovation. Im Labor entwickelt. Odor Control ist die nächste große Disziplin.",
      primary: "Underarm Skincare",
      secondary: "Zones verstehen",
      tertiary: "Zones Essentials",
    },
    quality: {
      eyebrow: "003 / Quality Index",
      title: "SPEZIFIKATION VOR VERSPRECHEN.",
      lead: "Vier Angaben, die jede Formel und jede Charge begleiten.",
      items: [
        { label: "WATERLESS", text: "Formuliert ohne Wasser — mehr Wirkstoff pro Volumen, weniger Konservierung." },
        { label: "PROTECTED", text: "Miron Violettglas schützt lichtempfindliche Bestandteile über die Laufzeit." },
        { label: "BATCH-CODED", text: "Jede Einheit trägt einen Chargenindex und bleibt rückverfolgbar." },
        { label: "THE VARIANT LAB", text: "Jede Formel existiert in abgestuften Varianten für unterschiedliche Hautlagen." },
      ],
    },
    start: {
      eyebrow: "005 / Entscheidungshilfe",
      title: "WOMIT SOLLTEST DU STARTEN?",
      lead: "Eine Frage genügt für den Einstieg in die ENGAGE-Phase.",
      question: "Reagiert deine Haut empfindlich?",
      yes: "Ja",
      no: "Nein",
      restart: "Erneut wählen",
      sensitive: { title: "AX-02 NEURO-CALM", body: "Duftfrei und zurückhaltend kalibriert — für Haut, die Ruhe braucht.", cta: "AX-02 ansehen" },
      intense: { title: "AX-01 SODA-IN-OIL", body: "pH-moduliert und für normale bis hohe Alltagsbelastung ausgelegt.", cta: "AX-01 ansehen" },
    },
    art: {
      eyebrow: "007 / Art Collaboration",
      badge: "In Progress",
      title: "ZONES × REZA",
      lead: "Eine Zusammenarbeit in Vorbereitung. Details folgen.",
      cta: "Mehr erfahren",
    },
  },
  en: {
    hero: {
      line1: "One Lab.",
      line2: "Six Applications.",
      subline: "Real innovation. Developed in the lab. Odor control is the next great discipline.",
      primary: "Underarm Skincare",
      secondary: "Understand Zones",
      tertiary: "Zones Essentials",
    },
    quality: {
      eyebrow: "003 / Quality Index",
      title: "SPECIFICATION BEFORE PROMISE.",
      lead: "Four data points that accompany every formula and every batch.",
      items: [
        { label: "WATERLESS", text: "Formulated without water — more active per volume, less preservation." },
        { label: "PROTECTED", text: "Miron violet glass shields light-sensitive components over shelf life." },
        { label: "BATCH-CODED", text: "Every unit carries a batch index and stays traceable." },
        { label: "THE VARIANT LAB", text: "Each formula exists in graded variants for different skin conditions." },
      ],
    },
    start: {
      eyebrow: "005 / Guidance",
      title: "WHERE SHOULD YOU START?",
      lead: "One question is enough to enter the ENGAGE phase.",
      question: "Does your skin react sensitively?",
      yes: "Yes",
      no: "No",
      restart: "Choose again",
      sensitive: { title: "AX-02 NEURO-CALM", body: "Fragrance-free and calibrated with restraint — for skin that needs calm.", cta: "View AX-02" },
      intense: { title: "AX-01 SODA-IN-OIL", body: "pH-modulated and built for normal to high daily demand.", cta: "View AX-01" },
    },
    art: {
      eyebrow: "007 / Art Collaboration",
      badge: "In Progress",
      title: "ZONES × REZA",
      lead: "A collaboration in preparation. Details to follow.",
      cta: "Learn more",
    },
  },
  fr: {
    hero: {
      line1: "Un Lab.",
      line2: "Six Applications.",
      subline: "Innovation réelle. Développée en laboratoire. Le contrôle des odeurs est la prochaine grande discipline.",
      primary: "Underarm Skincare",
      secondary: "Comprendre Zones",
      tertiary: "Zones Essentials",
    },
    quality: {
      eyebrow: "003 / Quality Index",
      title: "LA SPÉCIFICATION AVANT LA PROMESSE.",
      lead: "Quatre indications qui accompagnent chaque formule et chaque lot.",
      items: [
        { label: "WATERLESS", text: "Formulé sans eau — plus d’actif par volume, moins de conservation." },
        { label: "PROTECTED", text: "Le verre violet Miron protège les composants sensibles à la lumière." },
        { label: "BATCH-CODED", text: "Chaque unité porte un indice de lot et reste traçable." },
        { label: "THE VARIANT LAB", text: "Chaque formule existe en variantes graduées selon l’état de la peau." },
      ],
    },
    start: {
      eyebrow: "005 / Orientation",
      title: "PAR OÙ COMMENCER ?",
      lead: "Une question suffit pour entrer dans la phase ENGAGE.",
      question: "Votre peau réagit-elle de façon sensible ?",
      yes: "Oui",
      no: "Non",
      restart: "Choisir à nouveau",
      sensitive: { title: "AX-02 NEURO-CALM", body: "Sans parfum, calibré avec retenue — pour une peau qui demande du calme.", cta: "Voir AX-02" },
      intense: { title: "AX-01 SODA-IN-OIL", body: "pH modulé, conçu pour une sollicitation quotidienne normale à élevée.", cta: "Voir AX-01" },
    },
    art: {
      eyebrow: "007 / Art Collaboration",
      badge: "In Progress",
      title: "ZONES × REZA",
      lead: "Une collaboration en préparation. Détails à venir.",
      cta: "En savoir plus",
    },
  },
  it: {
    hero: {
      line1: "Un Lab.",
      line2: "Sei Applicazioni.",
      subline: "Innovazione reale. Sviluppata in laboratorio. Il controllo degli odori è la prossima grande disciplina.",
      primary: "Underarm Skincare",
      secondary: "Capire Zones",
      tertiary: "Zones Essentials",
    },
    quality: {
      eyebrow: "003 / Quality Index",
      title: "LA SPECIFICA PRIMA DELLA PROMESSA.",
      lead: "Quattro dati che accompagnano ogni formula e ogni lotto.",
      items: [
        { label: "WATERLESS", text: "Formulato senza acqua — più attivo per volume, meno conservanti." },
        { label: "PROTECTED", text: "Il vetro viola Miron protegge i componenti fotosensibili nel tempo." },
        { label: "BATCH-CODED", text: "Ogni unità porta un indice di lotto e resta tracciabile." },
        { label: "THE VARIANT LAB", text: "Ogni formula esiste in varianti graduate per condizioni cutanee diverse." },
      ],
    },
    start: {
      eyebrow: "005 / Orientamento",
      title: "DA DOVE INIZIARE?",
      lead: "Una domanda basta per entrare nella fase ENGAGE.",
      question: "La tua pelle reagisce in modo sensibile?",
      yes: "Sì",
      no: "No",
      restart: "Scegli di nuovo",
      sensitive: { title: "AX-02 NEURO-CALM", body: "Senza profumo, calibrato con misura — per pelli che chiedono calma.", cta: "Vedi AX-02" },
      intense: { title: "AX-01 SODA-IN-OIL", body: "pH modulato, pensato per una richiesta quotidiana da normale a elevata.", cta: "Vedi AX-01" },
    },
    art: {
      eyebrow: "007 / Art Collaboration",
      badge: "In Progress",
      title: "ZONES × REZA",
      lead: "Una collaborazione in preparazione. Dettagli in arrivo.",
      cta: "Scopri di più",
    },
  },
  nl: {
    hero: {
      line1: "Één Lab.",
      line2: "Zes Toepassingen.",
      subline: "Echte innovatie. Ontwikkeld in het lab. Odor control is de volgende grote discipline.",
      primary: "Underarm Skincare",
      secondary: "Zones begrijpen",
      tertiary: "Zones Essentials",
    },
    quality: {
      eyebrow: "003 / Quality Index",
      title: "SPECIFICATIE VÓÓR BELOFTE.",
      lead: "Vier gegevens die elke formule en elke batch begeleiden.",
      items: [
        { label: "WATERLESS", text: "Zonder water geformuleerd — meer werkstof per volume, minder conservering." },
        { label: "PROTECTED", text: "Miron violetglas beschermt lichtgevoelige bestanddelen gedurende de looptijd." },
        { label: "BATCH-CODED", text: "Elke eenheid draagt een batchindex en blijft traceerbaar." },
        { label: "THE VARIANT LAB", text: "Elke formule bestaat in gegradeerde varianten voor verschillende huidcondities." },
      ],
    },
    start: {
      eyebrow: "005 / Hulp bij de keuze",
      title: "WAARMEE MOET JE STARTEN?",
      lead: "Eén vraag volstaat om de ENGAGE-fase te betreden.",
      question: "Reageert je huid gevoelig?",
      yes: "Ja",
      no: "Nee",
      restart: "Opnieuw kiezen",
      sensitive: { title: "AX-02 NEURO-CALM", body: "Parfumvrij en terughoudend gekalibreerd — voor huid die rust nodig heeft.", cta: "AX-02 bekijken" },
      intense: { title: "AX-01 SODA-IN-OIL", body: "pH-gemoduleerd en gebouwd voor normale tot hoge dagelijkse belasting.", cta: "AX-01 bekijken" },
    },
    art: {
      eyebrow: "007 / Art Collaboration",
      badge: "In Progress",
      title: "ZONES × REZA",
      lead: "Een samenwerking in voorbereiding. Details volgen.",
      cta: "Meer weten",
    },
  },
  es: {
    hero: {
      line1: "Un Lab.",
      line2: "Seis Aplicaciones.",
      subline: "Innovación real. Desarrollada en el laboratorio. El control del olor es la próxima gran disciplina.",
      primary: "Underarm Skincare",
      secondary: "Entender Zones",
      tertiary: "Zones Essentials",
    },
    quality: {
      eyebrow: "003 / Quality Index",
      title: "LA ESPECIFICACIÓN ANTES DE LA PROMESA.",
      lead: "Cuatro datos que acompañan cada fórmula y cada lote.",
      items: [
        { label: "WATERLESS", text: "Formulado sin agua — más activo por volumen, menos conservación." },
        { label: "PROTECTED", text: "El vidrio violeta Miron protege los componentes fotosensibles." },
        { label: "BATCH-CODED", text: "Cada unidad lleva un índice de lote y permanece trazable." },
        { label: "THE VARIANT LAB", text: "Cada fórmula existe en variantes graduadas para distintos estados de la piel." },
      ],
    },
    start: {
      eyebrow: "005 / Orientación",
      title: "¿CON QUÉ DEBERÍAS EMPEZAR?",
      lead: "Una pregunta basta para entrar en la fase ENGAGE.",
      question: "¿Tu piel reacciona de forma sensible?",
      yes: "Sí",
      no: "No",
      restart: "Elegir de nuevo",
      sensitive: { title: "AX-02 NEURO-CALM", body: "Sin perfume y calibrado con contención — para piel que necesita calma.", cta: "Ver AX-02" },
      intense: { title: "AX-01 SODA-IN-OIL", body: "pH modulado y pensado para una exigencia diaria normal a alta.", cta: "Ver AX-01" },
    },
    art: {
      eyebrow: "007 / Art Collaboration",
      badge: "In Progress",
      title: "ZONES × REZA",
      lead: "Una colaboración en preparación. Detalles próximamente.",
      cta: "Saber más",
    },
  },
};
