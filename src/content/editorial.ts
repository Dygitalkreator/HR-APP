import editorialManifesto from "@/assets/zl-editorial-manifesto.jpg";
import editorialMacroOil from "@/assets/zl-editorial-macro-oil.jpg";
import editorialPhasePrep from "@/assets/zl-editorial-phase-prep.jpg";
import editorialPhaseEngage from "@/assets/zl-editorial-phase-engage.jpg";
import editorialPhaseRecover from "@/assets/zl-editorial-phase-recover.jpg";
import editorialPhaseFinish from "@/assets/zl-editorial-phase-finish.jpg";
import editorialBand1 from "@/assets/zl-editorial-band-1.jpg";
import editorialBand2 from "@/assets/zl-editorial-band-2.jpg";
import editorialFabrics from "@/assets/zl-editorial-fabrics.jpg";
import editorialClub from "@/assets/zl-editorial-club.jpg";
import editorialCollection from "@/assets/zl-editorial-collection.jpg";
import editorialZone from "@/assets/zl-editorial-zone.jpg";
import editorialContact from "@/assets/zl-editorial-contact.jpg";
import archiveSignature from "@/assets/zl-archive-signature.jpg.asset.json";
import archiveFabrics from "@/assets/zl-archive-fabrics.jpg.asset.json";
import archiveAccessories from "@/assets/zl-archive-accessories.jpg.asset.json";
import archiveCosmetics from "@/assets/zl-archive-cosmetics.jpg.asset.json";

import type { Locale } from "@/i18n/config";

export type LocalizedText = Record<Locale, string>;

export const EDITORIAL_IMAGES = {
  manifesto: editorialManifesto,
  macroOil: editorialMacroOil,
  phasePrep: editorialPhasePrep,
  phaseEngage: editorialPhaseEngage,
  phaseRecover: editorialPhaseRecover,
  phaseFinish: editorialPhaseFinish,
  band1: editorialBand1,
  band2: editorialBand2,
  fabrics: editorialFabrics,
  club: editorialClub,
  collection: editorialCollection,
  zone: editorialZone,
  contact: editorialContact,
  archiveSignature: archiveSignature.url,
  archiveFabrics: archiveFabrics.url,
  archiveAccessories: archiveAccessories.url,
  archiveCosmetics: archiveCosmetics.url,
} as const;

export type EditorialKey = keyof typeof EDITORIAL_IMAGES;

export const EDITORIAL_ALT: Record<EditorialKey, LocalizedText> = {
  manifesto: {
    de: "Leerer Sandplatz im Vintage-Licht, Kalklinie und langer Schatten",
    en: "Empty clay court in vintage light, chalk line and long shadow",
    fr: "Court en terre battue vide, ligne à la chaux et longue ombre",
    it: "Campo in terra rossa vuoto, linea di gesso e ombra lunga",
    nl: "Leeg gravelveld in vintage licht, kalklijn en lange schaduw",
    es: "Pista de tierra batida vacía, línea de cal y sombra larga",
  },
  macroOil: {
    de: "Makro: goldener Öltropfen auf Travertin mit Sodastaub",
    en: "Macro: golden oil droplet on travertine with soda dust",
    fr: "Macro : goutte d'huile dorée sur travertin et poussière de soude",
    it: "Macro: goccia d'olio dorata su travertino e polvere di soda",
    nl: "Macro: gouden oliedruppel op travertijn met sodapoeder",
    es: "Macro: gota de aceite dorada sobre travertino con polvo de soda",
  },
  phasePrep: {
    de: "Gefaltetes weißes Leinentuch und Bürste auf Steinbank",
    en: "Folded white linen towel and brush on a stone bench",
    fr: "Serviette en lin blanc pliée et brosse sur un banc de pierre",
    it: "Telo di lino bianco piegato e spazzola su panca di pietra",
    nl: "Gevouwen witte linnen doek en borstel op een stenen bank",
    es: "Toalla de lino blanco doblada y cepillo sobre banco de piedra",
  },
  phaseEngage: {
    de: "Historischer Holzschläger an sonnenbeschienener Putzwand",
    en: "Vintage wooden racket against a sunlit stucco wall",
    fr: "Raquette en bois vintage contre un mur crépi ensoleillé",
    it: "Racchetta di legno vintage su muro intonacato al sole",
    nl: "Vintage houten racket tegen een zonnige stucwand",
    es: "Raqueta de madera vintage contra un muro enlucido al sol",
  },
  phaseRecover: {
    de: "Glaskaraffe und Glas Wasser im Schatten auf Steinablage",
    en: "Glass pitcher and a glass of water in shade on a stone ledge",
    fr: "Carafe en verre et verre d'eau à l'ombre sur une pierre",
    it: "Caraffa di vetro e bicchiere d'acqua all'ombra su pietra",
    nl: "Glazen kan en glas water in de schaduw op een stenen rand",
    es: "Jarra de cristal y vaso de agua a la sombra sobre piedra",
  },
  phaseFinish: {
    de: "Frisch gekreidete weiße Linie auf trockenem Sandplatz",
    en: "Freshly chalked white line on dry clay",
    fr: "Ligne blanche fraîchement tracée sur terre battue sèche",
    it: "Linea bianca appena tracciata sulla terra rossa asciutta",
    nl: "Vers gekalkte witte lijn op droog gravel",
    es: "Línea blanca recién marcada sobre tierra batida seca",
  },
  band1: {
    de: "Schwere Baumwollteile gefaltet im Clubhaus-Regal neben Milchglastiegel",
    en: "Heavyweight cotton pieces folded on a clubhouse shelf beside a frosted jar",
    fr: "Pièces en coton épais pliées sur une étagère de club, près d'un pot dépoli",
    it: "Capi in cotone pesante piegati su una mensola del club accanto a un vaso opaco",
    nl: "Zware katoenen stukken gevouwen op een clubhuisschap naast een matglazen pot",
    es: "Prendas de algodón grueso dobladas en un estante del club junto a un tarro mate",
  },
  band2: {
    de: "Weißes Baumwolltuch über einer Holzbank im Sonnenlicht",
    en: "White cotton towel draped over a wooden bench in sunlight",
    fr: "Serviette en coton blanc posée sur un banc en bois au soleil",
    it: "Telo di cotone bianco su una panca di legno al sole",
    nl: "Witte katoenen doek over een houten bank in het zonlicht",
    es: "Toalla de algodón blanco sobre un banco de madera al sol",
  },
  fabrics: {
    de: "Schwerer Baumwoll-Tracksuit und Tee auf Travertinbank",
    en: "Heavyweight cotton tracksuit and tee on a travertine bench",
    fr: "Survêtement en coton épais et tee-shirt sur un banc en travertin",
    it: "Tuta in cotone pesante e t-shirt su panca in travertino",
    nl: "Zware katoenen trainingspak en tee op een travertijnbank",
    es: "Chándal de algodón grueso y camiseta sobre banco de travertino",
  },
  club: {
    de: "Leere Clubhaus-Veranda mit Blick auf den Sandplatz",
    en: "Empty clubhouse veranda overlooking the clay court",
    fr: "Véranda de club vide donnant sur le court en terre battue",
    it: "Veranda del club vuota con vista sul campo in terra rossa",
    nl: "Leeg clubhuisterras met uitzicht op het gravelveld",
    es: "Terraza vacía del club con vistas a la pista de tierra",
  },
  collection: {
    de: "Reihe unbeschrifteter Milchglastiegel mit Metalldeckeln",
    en: "Row of unlabelled frosted glass jars with metal lids",
    fr: "Rangée de pots en verre dépoli sans étiquette à couvercles métalliques",
    it: "Fila di vasi in vetro opaco senza etichetta con coperchi metallici",
    nl: "Rij matglazen potten zonder label met metalen deksels",
    es: "Fila de tarros de vidrio mate sin etiqueta con tapas metálicas",
  },
  zone: {
    de: "Makro: helles Mineralpulver diagonal über ockerfarbenem Sand",
    en: "Macro: pale mineral powder swept diagonally across ochre clay",
    fr: "Macro : poudre minérale claire en diagonale sur terre ocre",
    it: "Macro: polvere minerale chiara in diagonale sulla terra ocra",
    nl: "Macro: licht mineraalpoeder diagonaal over okerkleurig zand",
    es: "Macro: polvo mineral claro en diagonal sobre tierra ocre",
  },
  contact: {
    de: "Messingschlüssel auf cremefarbenem Kuvert im Fensterlicht",
    en: "Brass key on a cream envelope in window light",
    fr: "Clé en laiton sur une enveloppe crème à la lumière de la fenêtre",
    it: "Chiave di ottone su busta crema nella luce della finestra",
    nl: "Messing sleutel op een crème envelop in het venslicht",
    es: "Llave de latón sobre un sobre crema con luz de ventana",
  },
  archiveSignature: {
    de: "Vintage-Sandplatz mit Holzschläger am Netzpfosten",
    en: "Vintage clay court with wooden racket leaning on net post",
    fr: "Court en terre battue vintage avec raquette en bois contre le poteau",
    it: "Campo in terra rossa vintage con racchetta di legno appoggiata al palo",
    nl: "Vintage gravelveld met houten racket tegen netpaal",
    es: "Pista de tierra batida vintage con raqueta de madera contra el poste",
  },
  archiveFabrics: {
    de: "Makro-Aufnahme schwerer, cremefarbener Baumwollfalten",
    en: "Macro shot of heavy cream cotton pleats and weave",
    fr: "Macro de plis de coton épais couleur crème et tissage",
    it: "Macro di pesanti pieghe di cotone color crema e tessitura",
    nl: "Macro van zware crèmekleurige katoenen plooien en weefsel",
    es: "Macro de pesados pliegues de algodón color crema y tejido",
  },
  archiveAccessories: {
    de: "Cognacfarbene Leder-Sporttasche und Olivenholz-Rasur-Accessoires",
    en: "Cognac leather sports bag and olive wood shaving accessories",
    fr: "Sac de sport en cuir cognac et accessoires de rasage en olivier",
    it: "Borsa sportiva in pelle cognac e accessori da barba in ulivo",
    nl: "Cognackleurige leren sporttas en scheeraccessoires van olijfhout",
    es: "Bolsa de deporte de cuero coñac y accesorios de afeitado en olivo",
  },
  archiveCosmetics: {
    de: "Milchglas-Kosmetikflaschen und Aluminiumtuben auf einer Holzbank",
    en: "Frosted glass cosmetic bottles and aluminum tubes on a wooden bench",
    fr: "Flacons de cosmétiques en verre dépoli et tubes en aluminium sur un banc en bois",
    it: "Flaconi in vetro opaco e tubi in alluminio su una panca di legno",
    nl: "Matglazen cosmeticaflacons en aluminium tubes op een houten bank",
    es: "Frascos de cosméticos de vidrio mate y tubos de aluminio sobre un banco de madera",
  },
};

export const EDITORIAL_COPY = {
  bandEyebrow: {
    de: "Bildarchiv · Serie 04",
    en: "Image archive · series 04",
    fr: "Archive visuelle · série 04",
    it: "Archivio immagini · serie 04",
    nl: "Beeldarchief · serie 04",
    es: "Archivo visual · serie 04",
  } satisfies LocalizedText,
  bandQuote: {
    de: "Leistung altert nicht. Sie wird Handschrift.",
    en: "Performance does not age. It becomes signature.",
    fr: "La performance ne vieillit pas. Elle devient signature.",
    it: "La performance non invecchia. Diventa firma.",
    nl: "Prestatie verouderd niet. Het wordt handschrift.",
    es: "El rendimiento no envejece. Se convierte en firma.",
  } satisfies LocalizedText,
  bandCaption: {
    de: "Zwei Zweige, ein Klima: was auf die Haut kommt und was darüber getragen wird.",
    en: "Two branches, one climate: what goes on the skin and what is worn over it.",
    fr: "Deux branches, un climat : ce qui va sur la peau et ce qui la couvre.",
    it: "Due rami, un clima: ciò che va sulla pelle e ciò che la copre.",
    nl: "Twee takken, één klimaat: wat op de huid komt en wat eroverheen gaat.",
    es: "Dos ramas, un clima: lo que va sobre la piel y lo que se lleva encima.",
  } satisfies LocalizedText,
  zoneStatement: {
    de: "Physik vor Wirkstoff. Reibung vor Duft.",
    en: "Physics before actives. Friction before fragrance.",
    fr: "La physique avant les actifs. La friction avant le parfum.",
    it: "Fisica prima degli attivi. Frizione prima del profumo.",
    nl: "Fysica voor actieve stoffen. Frictie voor parfum.",
    es: "Física antes que activos. Fricción antes que fragancia.",
  } satisfies LocalizedText,
  gallery: {
    de: "Bildstrecke",
    en: "Image series",
    fr: "Série d'images",
    it: "Serie di immagini",
    nl: "Beeldserie",
    es: "Serie de imágenes",
  } satisfies LocalizedText,
} as const;
