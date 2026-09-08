import coffeeImg from "@/assets/superfood-kaffee.jpg";
import type { Locale } from "@/i18n/config";

/** ZONES SUPERFOOD is a single-category line: specialty coffee. */
export type SuperfoodCategory = "kaffee";

export interface SuperfoodProduct {
  sku: string;
  slug: string;
  category: SuperfoodCategory;
  name: string;
  format: string;
  /** Quality grade / processing note incl. documented origin (real supply relationship). */
  grade: string;
  price: number;
  img: string;
  /** Short, declarative positioning line. */
  tagline: Record<Locale, string>;
  /** Language-neutral closing formula (no Bavaria claim — origin is Ecuador). */
  signOff: string;
  description: Record<Locale, string>;
}

const SIGN_OFF = "Batch-Coded. Specialty Grade.";


export const superfoodProducts: SuperfoodProduct[] = [
  {
    sku: "SF-11", slug: "whole-bean", category: "kaffee", name: "WHOLE BEAN", format: "250 g", grade: "Specialty Grade · Ecuador · Anden", price: 19, img: coffeeImg,
    signOff: SIGN_OFF,
    tagline: {
      de: "Kaffee, ausgewählt nach Aufbereitung und Grade.",
      en: "Coffee, selected by processing and grade.",
      fr: "Café sélectionné selon le procédé et le grade.",
      it: "Caffè selezionato per lavorazione e grade.",
      nl: "Koffie, geselecteerd op verwerking en grade.",
      es: "Café seleccionado por proceso y grado.",
    },
    description: {
      de: "Spezialitätenkaffee, als ganze Bohne geröstet für klare Süße und ruhige Säure.",
      en: "Specialty coffee, roasted whole for clear sweetness and measured acidity.",
      fr: "Café de spécialité torréfié en grains pour une douceur nette et une acidité mesurée.",
      it: "Caffè specialty in grani, tostato per dolcezza nitida e acidità misurata.",
      nl: "Specialty coffee, als hele boon gebrand voor heldere zoetheid en beheerste zuren.",
      es: "Café de especialidad en grano, tostado para un dulzor claro y acidez medida.",
    },
  },
  {
    sku: "SF-12", slug: "ground-coffee", category: "kaffee", name: "GROUND", format: "250 g", grade: "Specialty Grade · Ecuador · Anden", price: 19, img: coffeeImg,
    signOff: SIGN_OFF,
    tagline: {
      de: "Frisch gemahlen, kein zweiter Schritt nötig.",
      en: "Freshly ground, no second step needed.",
      fr: "Fraîchement moulu, sans étape supplémentaire.",
      it: "Macinato fresco, senza un secondo passaggio.",
      nl: "Vers gemalen, geen tweede stap nodig.",
      es: "Recién molido, sin un segundo paso.",
    },
    description: {
      de: "Frisch gemahlen und abgestimmt auf Filter und French Press.",
      en: "Freshly ground and calibrated for filter and French press.",
      fr: "Fraîchement moulu et calibré pour filtre et cafetière à piston.",
      it: "Macinato fresco e calibrato per filtro e French press.",
      nl: "Vers gemalen en afgestemd op filter en cafetière.",
      es: "Recién molido y calibrado para filtro y prensa francesa.",
    },
  },
  {
    sku: "SF-13", slug: "instant-sticks", category: "kaffee", name: "INSTANT STICKS", format: "10 × 2.5 g", grade: "Specialty Grade · Soluble · Ecuador · Anden", price: 16, img: coffeeImg,
    signOff: SIGN_OFF,
    tagline: {
      de: "Löslich, portioniert, unterwegs einsatzbereit.",
      en: "Soluble, portioned, ready for the road.",
      fr: "Soluble, portionné, prêt en déplacement.",
      it: "Solubile, porzionato, pronto in viaggio.",
      nl: "Oplosbaar, geportioneerd, klaar voor onderweg.",
      es: "Soluble, porcionado, listo para el camino.",
    },
    description: {
      de: "Zehn einzeln dosierte Sticks aus löslichem Spezialitätenkaffee — für unterwegs.",
      en: "Ten individually dosed sticks of soluble specialty coffee — made portable.",
      fr: "Dix sticks dosés de café de spécialité soluble — format nomade.",
      it: "Dieci stick monodose di caffè specialty solubile — da portare con sé.",
      nl: "Tien afzonderlijk gedoseerde sticks oplosbare specialty coffee — voor onderweg.",
      es: "Diez sticks monodosis de café de especialidad soluble — para llevar.",
    },
  },
];

export function getSuperfoodProducts(category: SuperfoodCategory = "kaffee") {
  return superfoodProducts.filter((product) => product.category === category);
}

export function getSuperfoodProduct(slug: string) {
  return superfoodProducts.find((product) => product.slug === slug);
}
