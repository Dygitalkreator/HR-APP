import shaveRitualSetImage from "@/assets/accessory-shave-ritual-set.jpg";
import wetRazorImage from "@/assets/accessory-wet-razor.jpg";
import soapTrayImage from "@/assets/accessory-soap-tray-porcelain.jpg";
import soapDishImage from "@/assets/accessory-soap-dish-melamine.jpg";

export type AccessorySlug = "shave-ritual-set" | "wet-razor" | "soap-tray-porcelain" | "soap-dish-melamine";
export type RazorVariantId = "makalu" | "k2" | "watzmann" | "zugspitze";

export interface AccessoryVariant {
  id: RazorVariantId;
  name: string;
  tagline: string;
}

export interface Accessory {
  slug: AccessorySlug;
  name: string;
  tagline: string;
  description: string;
  composition?: string[];
  variants?: AccessoryVariant[];
  price: number;
  volume: string;
  /** Curated sourcing note — no in-house batch production. */
  origin: string;
  img: string;
}

export const accessories: Accessory[] = [
  {
    slug: "shave-ritual-set",
    name: "SHAVE RITUAL SET",
    tagline: "Sourced, not engineered. The complete pre-shave ritual, held in olive wood.",
    description: "A four-piece shaving set in hand-grained olive wood: brush stand, porcelain shaving bowl, badger-hair brush, and a wet razor. Each piece grained differently — no two sets identical. Pairs naturally with PRE-SHAVE OIL as the physical ritual around the formula.",
    composition: ["Olive wood stand + stainless holder", "Porcelain shaving bowl, oval, 10cm", "Badger-hair shaving brush", "Wet razor with olive wood handle (M3 blade compatible)"],
    price: 94,
    volume: "4-piece set",
    origin: "Handcrafted · Europe",
    img: shaveRitualSetImage,
  },
  {
    slug: "wet-razor",
    name: "WET RAZOR",
    tagline: "A handle grained by nature, not two alike.",
    description: "A wet razor with an olive wood handle — the simplest entry into the shaving ritual. Four style variants, each with its own grain and profile.",
    variants: [
      { id: "makalu", name: "MAKALU", tagline: "The standard profile." },
      { id: "k2", name: "K2", tagline: "A refined silhouette." },
      { id: "watzmann", name: "WATZMANN", tagline: "Evenly cut — ready for engraving." },
      { id: "zugspitze", name: "ZUGSPITZE", tagline: "An elegant pairing of wood and steel." },
    ],
    price: 32,
    volume: "13 cm",
    origin: "Handcrafted · Europe",
    img: wetRazorImage,
  },
  {
    slug: "soap-tray-porcelain",
    name: "SOAP TRAY · PORCELAIN",
    tagline: "Porcelain rests on olive wood. Nothing else.",
    description: "A porcelain soap tray on an olive wood base, joined invisibly for easy cleaning. Pairs with any of the three Recovery soaps — keeps the bar dry between uses.",
    composition: ["Porcelain tray", "Olive wood base", "14 × 7 × 4 cm"],
    price: 28,
    volume: "14 × 7 × 4 cm",
    origin: "Handcrafted · Europe",
    img: soapTrayImage,
  },
  {
    slug: "soap-dish-melamine",
    name: "SOAP DISH · MELAMINE",
    tagline: "Practical first. Dishwasher-safe, olive wood insert.",
    description: "A melamine soap dish with an olive wood insert that lets the bar dry between uses. The more practical of the two soap-dish options — dishwasher-safe, food-grade melamine.",
    composition: ["Melamine tray, dishwasher-safe", "Olive wood insert", "15.5 × 7.5 × 3 cm"],
    price: 28,
    volume: "15.5 × 7.5 × 3 cm",
    origin: "Handcrafted · Europe",
    img: soapDishImage,
  },
];

export const getAccessoryBySlug = (slug: string) => accessories.find((item) => item.slug === slug);