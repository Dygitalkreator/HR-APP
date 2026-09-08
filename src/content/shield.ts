import wearTracksuit from "@/assets/zl-wear-tracksuit.jpg";
import wearBoxers from "@/assets/zl-wear-boxers.jpg";
import wearZoneTee from "@/assets/zl-wear-zonetee.jpg";
import wearTowelSet from "@/assets/zl-wear-towelset.jpg";

import towelLs1 from "@/assets/zl-wear-towelset-lifestyle-1.jpg";
import towelLs2 from "@/assets/zl-wear-towelset-lifestyle-2.jpg";
import towelLs3 from "@/assets/zl-wear-towelset-lifestyle-3.jpg";
import towelLs4 from "@/assets/zl-wear-towelset-lifestyle-4.jpg";
import towelLs5 from "@/assets/zl-wear-towelset-lifestyle-5.jpg";


import tracksuitLs1 from "@/assets/zl-wear-tracksuit-lifestyle-1.jpg";
import tracksuitLs2 from "@/assets/zl-wear-tracksuit-lifestyle-2.jpg";
import tracksuitLs3 from "@/assets/zl-wear-tracksuit-lifestyle-3.jpg";
import tracksuitLs4 from "@/assets/zl-wear-tracksuit-lifestyle-4.jpg";
import tracksuitLs5 from "@/assets/zl-wear-tracksuit-lifestyle-5.jpg";

import boxersLs1 from "@/assets/zl-wear-boxers-lifestyle-1.jpg";
import boxersLs2 from "@/assets/zl-wear-boxers-lifestyle-2.jpg";
import boxersLs3 from "@/assets/zl-wear-boxers-lifestyle-3.jpg";
import boxersLs4 from "@/assets/zl-wear-boxers-lifestyle-4.jpg";
import boxersLs5 from "@/assets/zl-wear-boxers-lifestyle-5.jpg";

import zoneTeeLs1 from "@/assets/zl-wear-zonetee-lifestyle-1.jpg";
import zoneTeeLs2 from "@/assets/zl-wear-zonetee-lifestyle-2.jpg";
import zoneTeeLs3 from "@/assets/zl-wear-zonetee-lifestyle-3.jpg";
import zoneTeeLs4 from "@/assets/zl-wear-zonetee-lifestyle-4.jpg";
import zoneTeeLs5 from "@/assets/zl-wear-zonetee-lifestyle-5.jpg";

export interface ShieldColor {
  id: string;
  label: string;
  img: string;
  swatch: string;
}

export interface ShieldItem {
  slug: string;
  sku: string;
  name: string;
  tagline: string;
  img: string;
  tech: string;
  status: string;
  origin: string;
  description: string;
  benefits: string[];
  price: number;
  colors?: ShieldColor[];
  lifestyleImages?: string[];
}

export const shieldItems: ShieldItem[] = [
  {
    slug: "tracksuit",
    sku: "FB-01",
    name: "OVERSIZED TRACKSUIT · HOODIE + PANTS",
    tagline: "Unisex, oversized, in heavyweight cotton.",
    img: wearTracksuit,
    tech: "480 gsm Organic Cotton · Oversized Unisex Cut",
    status: "Available · Lot 0419",
    origin: "Bavaria · DE",
    description:
      "An oversized hoodie and matching pants in 480 gsm organic cotton, brushed on the inside. Drop shoulder, relaxed leg, deliberately roomy — cut the same for every body. Pre-shrunk, built to be worn every evening as the off-duty layer of the protocol.",
    benefits: [
      "480 gsm organic cotton",
      "Oversized unisex cut · drop shoulder",
      "Brushed inner face",
      "Pre-shrunk · washable at 40°C",
    ],
    price: 166,
    lifestyleImages: [tracksuitLs1, tracksuitLs2, tracksuitLs3, tracksuitLs4, tracksuitLs5],
  },
  {
    slug: "zone-boxers",
    sku: "FB-02",
    name: "ZONE BOXERS · COTTON-SILK",
    tagline: "Friction-free boxers for the reactive zone.",
    img: wearBoxers,
    tech: "Cotton-Silk Blend · Flat-Seam Construction",
    status: "Available · Lot 0419",
    origin: "Bavaria · DE",
    description:
      "A unisex boxer short in a cotton-silk blend, cut with a relaxed leg and soft covered waistband — engineered to reduce mechanical friction rather than mask it. Silk carries the low-friction surface across the reactive zone; organic cotton underneath manages moisture and breathability. Flat-seam construction throughout — no chafe points, no elastic pressure lines. Built for sport, for travel, and for skin under daily load.",
    benefits: [
      "Cotton-silk blend · reduced surface friction",
      "Relaxed unisex boxer cut · covered waistband",
      "Flat-seam construction · no chafe",
      "Sport & sensitive-skin profile",
    ],
    price: 27,
    lifestyleImages: [boxersLs1, boxersLs2, boxersLs3, boxersLs4, boxersLs5],
  },
  {
    slug: "zone-tee",
    sku: "FB-03",
    name: "ZONE TEE · BASE LAYER",
    tagline: "Oversized unisex base layer with axillary gusset.",
    img: wearZoneTee,
    tech: "Axillary Gusset Construction · Moisture-Managing Jersey",
    status: "Available · Lot 0419",
    origin: "Bavaria · DE",
    description:
      "An oversized unisex tee built as a true base layer: a dedicated gusset panel at the axillary zone manages moisture exactly where the AX Protocol operates on the skin below. Heavyweight jersey, drop shoulder, deliberately roomy cut. Wear it under the tracksuit, under any layer, or on its own.",
    benefits: [
      "Underarm gusset panel",
      "Oversized unisex fit · drop shoulder",
      "Moisture-managing heavyweight jersey",
      "Pre-shrunk · washable at 40°C",
    ],
    price: 88,
    lifestyleImages: [zoneTeeLs1, zoneTeeLs2, zoneTeeLs3, zoneTeeLs4, zoneTeeLs5],
  },
  {
    slug: "towel-set",
    sku: "FB-04",
    name: "TOWEL SET · BATH SHEET + SPORT TOWEL",
    tagline: "Neutral white cotton, big size plus sport format.",
    img: wearTowelSet,
    tech: "700 gsm Long-Staple Cotton Terry · Flag Patch",
    status: "Available · Lot 0419",
    origin: "Bavaria · DE",
    description:
      "A two-piece towel set in neutral white long-staple cotton: an oversized bath sheet at 100 × 180 cm and a small sport towel at 40 × 90 cm for the gym bag, the court or the travel case. 700 gsm double-turned terry, low-lint, quick-drying, with a reinforced hem carrying the woven ZONES FABRICS flag patch in white and gold — the same mark as the tracksuit, the boxers and the tee.",
    benefits: [
      "700 gsm long-staple cotton terry",
      "Bath sheet 100 × 180 cm + sport towel 40 × 90 cm",
      "Neutral white · woven ZONES FABRICS flag patch",
      "Low-lint · quick-drying · washable at 60 °C",
    ],
    price: 140,
    lifestyleImages: [towelLs1, towelLs2, towelLs3, towelLs4, towelLs5],
  },
];


export const getShieldBySlug = (slug: string) =>
  shieldItems.find((s) => s.slug === slug);
