import productIntense from "@/assets/zl-intense.jpg";
import productSensitive from "@/assets/zl-sensitive.jpg";
import productReset from "@/assets/zl-reset.jpg";
import productPowder from "@/assets/zl-powder.jpg";
import productLipSculpt from "@/assets/zl-lip-sculpt.jpg";
import productHamamelisMist from "@/assets/zl-hamamelis-mist.jpg";
import productPreShaveOil from "@/assets/zl-pre-shave-oil.jpg";

import mkIntense1 from "@/assets/zl-intense-mockup-1.jpg";
import mkIntense2 from "@/assets/zl-intense-mockup-2.jpg";
import mkIntense3 from "@/assets/zl-intense-mockup-3.jpg";
import mkIntense4 from "@/assets/zl-intense-mockup-4.jpg";
import mkIntense5 from "@/assets/zl-intense-mockup-5.jpg";
import mkSensitive1 from "@/assets/zl-sensitive-mockup-1.jpg";
import mkSensitive2 from "@/assets/zl-sensitive-mockup-2.jpg";
import mkSensitive3 from "@/assets/zl-sensitive-mockup-3.jpg";
import mkSensitive4 from "@/assets/zl-sensitive-mockup-4.jpg";
import mkSensitive5 from "@/assets/zl-sensitive-mockup-5.jpg";
import mkReset1 from "@/assets/zl-reset-mockup-1.jpg";
import mkReset2 from "@/assets/zl-reset-mockup-2.jpg";
import mkReset3 from "@/assets/zl-reset-mockup-3.jpg";
import mkReset4 from "@/assets/zl-reset-mockup-4.jpg";
import mkReset5 from "@/assets/zl-reset-mockup-5.jpg";
import mkPowder1 from "@/assets/zl-powder-mockup-1.jpg";
import mkPowder2 from "@/assets/zl-powder-mockup-2.jpg";
import mkPowder3 from "@/assets/zl-powder-mockup-3.jpg";
import mkPowder4 from "@/assets/zl-powder-mockup-4.jpg";
import mkPowder5 from "@/assets/zl-powder-mockup-5.jpg";
import mkLipSculpt1 from "@/assets/zl-lip-sculpt-mockup-1.jpg";
import mkLipSculpt2 from "@/assets/zl-lip-sculpt-mockup-2.jpg";
import mkLipSculpt3 from "@/assets/zl-lip-sculpt-mockup-3.jpg";
import mkLipSculpt4 from "@/assets/zl-lip-sculpt-mockup-4.jpg";
import mkLipSculpt5 from "@/assets/zl-lip-sculpt-mockup-5.jpg";

import productOatReset from "@/assets/zl-oat-reset.jpg";
import productSheaBarrier from "@/assets/zl-shea-barrier.jpg";
import productPomegranateGlow from "@/assets/zl-pomegranate-glow.jpg";
import mkOat1 from "@/assets/zl-oat-reset-mockup-1.jpg";
import mkOat2 from "@/assets/zl-oat-reset-mockup-2.jpg";
import mkOat3 from "@/assets/zl-oat-reset-mockup-3.jpg";
import mkOat4 from "@/assets/zl-oat-reset-mockup-4.jpg";
import mkOat5 from "@/assets/zl-oat-reset-mockup-5.jpg";
import mkShea1 from "@/assets/zl-shea-barrier-mockup-1.jpg";
import mkShea2 from "@/assets/zl-shea-barrier-mockup-2.jpg";
import mkShea3 from "@/assets/zl-shea-barrier-mockup-3.jpg";
import mkShea4 from "@/assets/zl-shea-barrier-mockup-4.jpg";
import mkShea5 from "@/assets/zl-shea-barrier-mockup-5.jpg";
import mkPom1 from "@/assets/zl-pomegranate-glow-mockup-1.jpg";
import mkPom2 from "@/assets/zl-pomegranate-glow-mockup-2.jpg";
import mkPom3 from "@/assets/zl-pomegranate-glow-mockup-3.jpg";
import mkPom4 from "@/assets/zl-pomegranate-glow-mockup-4.jpg";
import mkPom5 from "@/assets/zl-pomegranate-glow-mockup-5.jpg";

export type ProductCategory = "Performance" | "Sensitive" | "Prep" | "Repair" | "Finish" | "Recovery";


export interface Product {
  slug: string;
  img: string;
  sku: string;
  name: string;
  tagline: string;
  short: string;
  category: ProductCategory;
  priority: number;
  step: "PREP" | "ENGAGE" | "RECOVER" | "FINISH";
  zone: string;
  price: number; // EUR
  volume: string;
  tech: string;
  claim: string;
  hero: string;
  description: string;
  signOff: string;
  protocol: string;
  composition: string[];
  benefits?: string[];
  spec: { label: string; value: string }[];
  status: string;
  mockupImages?: string[];

}


const STEP_ORDER: Record<Product["step"], number> = { PREP: 0, ENGAGE: 1, RECOVER: 2, FINISH: 3 };

const rawProducts: Product[] = [
  {
    slug: "intense",
    img: productIntense,
    sku: "AX-01",
    name: "SODA-IN-OIL DEODORANT BALM",
    tagline: "Waterless balm for daily odour regulation.",
    short: "A balm-format deodorant, pH-modulated for normal to high daily demand.",
    category: "Performance",
    priority: 1,
    step: "ENGAGE",
    zone: "Axillary · Daily Core",
    price: 46,
    volume: "50 ml",
    tech: "Waterless Balm · pH-Modulation",
    claim: "Maintains skin balance across a full day.",
    hero: "AX-01 SODA-IN-OIL DEODORANT BALM is a waterless balm calibrated for daily use. A lipid matrix carries the active complex without disrupting the skin's own surface layer.",
    description:
      "The system works through controlled pH modulation and molecular binding, embedded in a lipid matrix. For normal to elevated demand. Without aluminium.",
    signOff: "Waterless. Batch-Coded. Developed in Bavaria.",
    protocol: "Apply once daily to clean, dry skin. Use HAMAMELIS MIST first when a toned PREP step is needed.",
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
    status: "Available · Lot 0419",
    mockupImages: [mkIntense1, mkIntense2, mkIntense3, mkIntense4, mkIntense5],
  },
  {
    slug: "sensitive",
    img: productSensitive,
    sku: "AX-02",
    name: "NEURO-CALM DEODORANT BALM",
    tagline: "Waterless balm for sensitive and reactive skin conditions.",
    short: "The same balm-format precision as AX-01, calibrated for skin that needs restraint.",
    category: "Sensitive",
    priority: 2,
    step: "ENGAGE",
    zone: "Axillary · Reactive Profile",
    price: 46,
    volume: "50 ml",
    tech: "Waterless Balm · Fragrance-Free Formulation",
    claim: "Reduces odour formation without aggressive intervention.",
    hero: "AX-02 NEURO-CALM DEODORANT BALM is calibrated for reactive skin. It works without fragrance and without occlusion.",
    description:
      "The system combines odour regulation with calming lipids. For low to medium demand and sensitive skin. Without aluminium.",
    signOff: "Waterless. Batch-Coded. Developed in Bavaria.",
    protocol: "Apply once daily. Suitable post-shave, post-RESET.",
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
    status: "Available · Lot 0419",
    mockupImages: [mkSensitive1, mkSensitive2, mkSensitive3, mkSensitive4, mkSensitive5],
  },
  {
    slug: "reset",
    img: productReset,
    sku: "AX-03",
    name: "RESET PEELING BALM",
    tagline: "Waterless peeling balm to prepare the skin.",
    short: "An anhydrous sugar-oil texture that works mechanically, not actively.",
    category: "Prep",
    priority: 4,
    step: "PREP",
    zone: "Axillary · Pre-Engage",
    price: 44,
    volume: "75 ml",
    tech: "Anhydrous Sugar-Oil Complex",
    claim: "Clears residue in a single pass.",
    hero: "AX-03 RESET PEELING BALM clears residue and prepares the skin before the next phase. Not a daily step — a targeted one.",
    description:
      "Removes excess residue and prepares the skin for the following phases. Used in the PREP phase.",
    signOff: "Waterless. Batch-Coded. Developed in Bavaria.",
    protocol: "1–2× per week. Massage onto dry skin, rinse, follow with SODA-IN-OIL DEODORANT BALM or NEURO-CALM DEODORANT BALM.",
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
    status: "Available · Lot 0419",
    mockupImages: [mkReset1, mkReset2, mkReset3, mkReset4, mkReset5],
  },
  {
    slug: "powder",
    img: productPowder,
    sku: "AX-04",
    name: "FINISHING POWDER",
    tagline: "Finely tuned powder for moisture and friction control.",
    short: "A featherweight mineral powder that manages moisture through physics, not active ingredients.",
    category: "Finish",
    priority: 5,
    step: "FINISH",
    zone: "Axillary · Finish Layer",
    price: 44,
    volume: "40 g",
    tech: "Mineral Powder · Mechanical Moisture Control",
    claim: "Reduce friction, not biology.",
    hero: "AX-04 FINISHING POWDER closes the AX Protocol with a purely mechanical layer — no active ingredients, no barrier override.",
    description:
      "Closes the system and reduces mechanical load across the day. Used in the FINISH phase.",
    signOff: "Batch-Coded. Developed in Bavaria.",
    protocol: "Apply as a final layer over SODA-IN-OIL DEODORANT BALM or NEURO-CALM DEODORANT BALM. Adjust to climate, outfit or transfer needs.",
    composition: [
      "Kaolin · Maranta Arundinacea Root Powder",
      "Magnesium Hydroxide · Tocopherol",
    ],
    spec: [
      { label: "Volume", value: "40 g" },
      { label: "Format", value: "Violetglass tin · gold dial" },
      { label: "Use", value: "Final layer · on demand" },
      { label: "Origin", value: "Bavaria · DE" },
    ],
    status: "Available · Lot 0419",
    mockupImages: [mkPowder1, mkPowder2, mkPowder3, mkPowder4, mkPowder5],
  },
  {
    slug: "hamamelis-mist",
    img: productHamamelisMist,
    sku: "AX-05",
    name: "HAMAMELIS MIST · 100% HYDROLAT",
    tagline: "Distilled witch hazel hydrolat, alcohol-free.",
    short: "Pure witch hazel hydrolat that tones and prepares the skin without alcohol, dilution or additives.",
    category: "Prep",
    priority: 6,
    step: "PREP",
    zone: "Face · Neck · Shave Zone",
    price: 24,
    volume: "100 ml",
    tech: "100% Witch Hazel Hydrolat · Alcohol-Free Distillation",
    claim: "Distilled once. Left alone.",
    hero: "AX-05 HAMAMELIS MIST is a single-ingredient toner mist: distilled pure, alcohol-free and designed as the first step before stabilisation.",
    description:
      "One ingredient, not a formula — pure plant water as the toner step before stabilisation. Used in the PREP phase.",
    signOff: "Alcohol-Free. Batch-Coded. Developed in Bavaria.",
    protocol: "Mist onto clean skin before NEURO-CALM. Allow to settle briefly, then continue with the stabilising step.",
    composition: ["Hamamelis Virginiana (Witch Hazel) Leaf Water"],
    benefits: ["100% Hamamelis Virginiana Leaf Water", "Single-ingredient formula", "Alcohol-free distillation", "PREP step before Neuro-Calm"],
    spec: [
      { label: "Volume", value: "100 ml" },
      { label: "Format", value: "Miron Violetglass spray bottle" },
      { label: "Use", value: "PREP · before Neuro-Calm" },
      { label: "Origin", value: "Bavaria · DE" },
    ],
    status: "Available · Lot 0419",
  },
  {
    slug: "pre-shave-oil",
    img: productPreShaveOil,
    sku: "AX-06",
    name: "PRE-SHAVE OIL",
    tagline: "Waterless oil complex to reduce friction before the blade.",
    short: "A lightweight oil complex that creates controlled slip and reduces blade friction before shaving.",
    category: "Prep",
    priority: 7,
    step: "PREP",
    zone: "Face · Neck · Shave Zone",
    price: 26,
    volume: "50 ml",
    tech: "Argan · Jojoba · Squalane Complex",
    claim: "The step before the blade.",
    hero: "AX-06 PRE-SHAVE OIL builds a controlled slip layer before the blade reaches the skin, reducing friction without a heavy finish.",
    description:
      "Argan and jojoba form a glide layer, squalane stabilises the film. Used in the PREP phase, before shaving.",
    signOff: "Waterless. Batch-Coded. Developed in Bavaria.",
    protocol: "Massage a few drops into clean, damp skin before shaving. Shave as usual, then follow with the AX Protocol recovery step.",
    composition: ["Argania Spinosa Kernel Oil · Simmondsia Chinensis Seed Oil", "Squalane · Tocopherol"],
    benefits: ["Argan + Jojoba oil complex", "Squalane-stabilised slip layer", "Reduces blade friction", "PREP step before shaving"],
    spec: [
      { label: "Volume", value: "50 ml" },
      { label: "Format", value: "Miron Violetglass dropper bottle" },
      { label: "Use", value: "PREP · before shaving" },
      { label: "Origin", value: "Bavaria · DE" },
    ],
    status: "Available · Lot 0419",
  },
  {
    slug: "lip-sculpt",
    img: productLipSculpt,
    sku: "AX-07",
    name: "LIP SCULPT BALM",
    tagline: "Waterless lip balm with lipid structure instead of stimulation.",
    short: "A lipid-based lip balm that shapes and smooths without tingling or irritation.",
    category: "Repair",
    priority: 3,
    step: "RECOVER",
    zone: "Lips · Contour & Border",
    price: 29,
    volume: "15 ml",
    tech: "Waterless Lip Formula · Oil-Dispersed Hyaluronate",
    claim: "Structure, not stimulation.",
    hero: "AX-07 LIP SCULPT BALM is a waterless lip formula — shaped, visibly smoother lips without tingling, gloss or irritation.",
    description:
      "Shapes and visibly smooths, without tingling or irritation. For daily lip care, morning and evening.",
    signOff: "Waterless. Batch-Coded. Developed in Bavaria.",
    protocol: "Apply thinly to the lips, repeat several times a day as needed. Apply more generously before sleep as an overnight treatment.",
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
    mockupImages: [mkLipSculpt1, mkLipSculpt2, mkLipSculpt3, mkLipSculpt4, mkLipSculpt5],
  },
  {
    slug: "oat-reset",
    img: productOatReset,
    sku: "AX-08",
    name: "OAT RESET SOAP",
    tagline: "Mild recovery soap for skin after load.",
    short: "Oat and shea calm irritated skin without stripping it.",
    category: "Recovery",
    priority: 8,
    step: "RECOVER",
    zone: "Body · Post-Session",
    price: 28,
    volume: "110 g",
    tech: "Oat & Shea Formula",
    claim: "Calms irritated skin without stripping it.",
    hero: "AX-08 OAT RESET SOAP is a mild recovery soap for skin that needs to settle after training and load.",
    description:
      "Oat and shea butter calm irritated skin without drying it out. Used in the RECOVER phase, after training.",
    signOff: "Batch-Coded. Developed in Bavaria.",
    protocol: "Lather on wet skin, massage in gently and rinse thoroughly. Ideal after training or in the evening as a reset ritual.",
    composition: [
      "Avena Sativa (Oat) · Butyrospermum Parkii (Shea) Butter",
      "Plant oils (olive · rapeseed · castor)",
      "Natural milk & honey scent",
    ],
    spec: [
      { label: "Volume", value: "110 g" },
      { label: "Format", value: "Cold-process block" },
      { label: "Use", value: "Post-session · PM" },
      { label: "Origin", value: "Bavaria · DE" },
    ],
    status: "Available · Lot 0419",
    mockupImages: [mkOat1, mkOat2, mkOat3, mkOat4, mkOat5],
  },
  {
    slug: "shea-barrier",
    img: productSheaBarrier,
    sku: "AX-09",
    name: "SHEA BARRIER SOAP",
    tagline: "Fragrance-free soap with a high share of shea butter.",
    short: "A high concentration of native shea butter for barrier support and moisture.",
    category: "Recovery",
    priority: 9,
    step: "RECOVER",
    zone: "Face · Body · Shave",
    price: 28,
    volume: "110 g",
    tech: "High-Shea Formula · Fragrance-Free",
    claim: "Supports the skin barrier, holds moisture.",
    hero: "AX-09 SHEA BARRIER SOAP carries a high share of native shea butter for skin that needs barrier support — fragrance-free, mild.",
    description:
      "Supports the skin barrier and holds moisture under load. Used in the RECOVER phase, for face, body and shaving.",
    signOff: "Fragrance-Free. Batch-Coded. Developed in Bavaria.",
    protocol: "Lather on wet skin and massage in. Especially after sport or on dry, stressed skin. Rinse thoroughly.",
    composition: [
      "High share of native Butyrospermum Parkii (Shea) Butter",
      "Olea Europaea (Olive) Oil · Brassica Napus (Rapeseed) Oil",
      "Ricinus Communis (Castor) Oil",
    ],
    spec: [
      { label: "Volume", value: "110 g" },
      { label: "Format", value: "Cold-process block" },
      { label: "Profile", value: "Fragrance-free" },
      { label: "Origin", value: "Bavaria · DE" },
    ],
    status: "Available · Lot 0419",
    mockupImages: [mkShea1, mkShea2, mkShea3, mkShea4, mkShea5],
  },
  {
    slug: "pomegranate-glow",
    img: productPomegranateGlow,
    sku: "AX-10",
    name: "POMEGRANATE GLOW SOAP",
    tagline: "Regenerating soap with pomegranate and fig.",
    short: "Pomegranate and fig extracts support renewal and a healthy finish.",
    category: "Recovery",
    priority: 10,
    step: "RECOVER",
    zone: "Face · Body · Glow Ritual",
    price: 28,
    volume: "110 g",
    tech: "Pomegranate & Fig Formula",
    claim: "Antioxidant support with a firming finish.",
    hero: "AX-10 POMEGRANATE GLOW SOAP uses pomegranate and fig extracts to support renewal — for skin that wants tone, not stimulation.",
    description:
      "Antioxidant support for a balanced complexion. Used in the RECOVER phase, morning or evening.",
    signOff: "Batch-Coded. Developed in Bavaria.",
    protocol: "Lather gently, massage in and rinse off after a short dwell time. Best in the morning or evening as a glow ritual.",
    composition: [
      "Punica Granatum (Pomegranate) Extract · Wild Fig",
      "Butyrospermum Parkii (Shea) Butter",
      "Premium plant oils",
    ],
    spec: [
      { label: "Volume", value: "110 g" },
      { label: "Format", value: "Cold-process block" },
      { label: "Use", value: "AM · PM" },
      { label: "Origin", value: "Bavaria · DE" },
    ],
    status: "Available · Lot 0419",
    mockupImages: [mkPom1, mkPom2, mkPom3, mkPom4, mkPom5],
  },
];


export const products: Product[] = [...rawProducts].sort(
  (a, b) => STEP_ORDER[a.step] - STEP_ORDER[b.step],
);

export const productsByPriority: Product[] = [...rawProducts].sort(
  (a, b) => a.priority - b.priority,
);



export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const BUNDLE = {
  slug: "ax-protocol-bundle",
  name: "THE AX PROTOCOL",
  short: "The way into the protocol: prepare, apply, recover — four modules that work together daily.",
  price: 160,
  saves: 20,
  items: ["SODA-IN-OIL DEODORANT BALM", "NEURO-CALM DEODORANT BALM", "RESET PEELING BALM", "FINISHING POWDER"] as const,
};

/* ---------- routine finder ---------- */

export type FinderZone = "axilla" | "face" | "body";
export type FinderSkin = "robust" | "sensitive" | "dry";
export type FinderGoal = "fresh" | "recover" | "finish";

export interface FinderAnswers {
  zone: FinderZone;
  skin: FinderSkin;
  goal: FinderGoal;
}

export const ZONE_MATCH: Record<FinderZone, string[]> = {
  axilla: ["intense", "sensitive", "reset", "powder"],
  face: ["hamamelis-mist", "pre-shave-oil", "lip-sculpt", "sensitive"],
  body: ["reset", "powder", "oat-reset"],
};

const SKIN_CATEGORY: Record<FinderSkin, ProductCategory> = {
  robust: "Performance",
  sensitive: "Sensitive",
  dry: "Repair",
};

const GOAL_STEP: Record<FinderGoal, Product["step"]> = {
  fresh: "ENGAGE",
  recover: "RECOVER",
  finish: "FINISH",
};

export function recommendProducts(a: FinderAnswers, limit = 3): Product[] {
  const scored = products
    .map((p) => {
      let score = 0;
      if (ZONE_MATCH[a.zone].includes(p.slug)) score += 3;
      if (p.category === SKIN_CATEGORY[a.skin]) score += 2;
      if (p.step === GOAL_STEP[a.goal]) score += 2;
      if (a.skin === "sensitive" && p.category === "Performance") score -= 2;
      return { p, score };
    })
    .filter((s) => s.score > 0)
    .sort((x, y) => y.score - x.score);

  return scored
    .slice(0, limit)
    .map((s) => s.p)
    .sort((x, y) => STEP_ORDER[x.step] - STEP_ORDER[y.step]);
}

/** Motion Phase 3.2 — Produkte einer Körperzone (Zone-Map, nach Protokollphase sortiert). */
export function productsForZone(zone: FinderZone): Product[] {
  return products
    .filter((p) => ZONE_MATCH[zone].includes(p.slug))
    .sort((a, b) => STEP_ORDER[a.step] - STEP_ORDER[b.step]);
}
