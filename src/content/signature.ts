import broadcastImage from "@/assets/olf-01-broadcast.jpg.asset.json";
import skinCloseImage from "@/assets/olf-01-skin-close.jpg.asset.json";

export type SignatureVariantId = "broadcast" | "skin-close";

export interface SignatureVariant {
  id: SignatureVariantId;
  name: string;
  tagline: string;
  description: string;
  img: string;
}

export interface SignatureProduct {
  slug: string;
  sku: string;
  name: string;
  tagline: string;
  hero: string;
  description: string;
  protocol: string;
  volume: string;
  price: number;
  status: string;
  origin: string;
  composition: string[];
  variants: SignatureVariant[];
}

export const signatureProduct: SignatureProduct = {
  slug: "olf-01-signature-body-oil",
  sku: "OLF-01",
  name: "OLF-01 · SIGNATURE BODY OIL",
  tagline: "One formula. Two ranges.",
  hero: "OLF-01 is what the ZONES scent architecture sounds like worn, not dosed. Same engineering logic as the AX Protocol — vetiver, cedarwood, olibanum — carried at parfum strength instead of trace concentration. Two ranges of one signature: one engineered to reach the room, one engineered to stay exactly where you put it.",
  description: "The AX Protocol measures OLF-01 in fractions of a percent. This carries it at 20% — parfum strength, not a scented afterthought. Both ranges share the same core accord. What separates them is radius: how far the signature is built to travel before it fades.",
  protocol: "Apply to pulse points or layer over any AX Protocol product. Unlike the system's functional modules, this has no PREP/ENGAGE/RECOVER/FINISH role — wear it independently, whenever the signature should speak.",
  volume: "10 ml",
  price: 40,
  status: "Available · Lot 0419",
  origin: "Bavaria · DE",
  composition: ["Simmondsia Chinensis (Jojoba) Seed Oil (80%)", "Parfum (OLF-01 Signature Accord, 20%)"],
  variants: [
    {
      id: "broadcast",
      name: "BROADCAST",
      tagline: "Built to be noticed. The full accord, full radius.",
      description: "The engine runs. Oud trace intact, Iso E Super and Ambroxan carrying the accord past your own perimeter — this is the formula that answers the original brief: people walking into the scent before they see you.",
      img: broadcastImage.url,
    },
    {
      id: "skin-close",
      name: "SKIN-CLOSE",
      tagline: "Same signature, held close. For rooms, not runways.",
      description: "Same accord, engineered down instead of out. The oud trace is gone, the diffusion engine switched off — what remains is vetiver, cedarwood and olibanum sitting directly on skin, radius measured in centimeters, not rooms. Built for the hours between getting dressed and walking out the door, not for the entrance itself.",
      img: skinCloseImage.url,
    },
  ],
};

export function getSignatureProduct(slug: string) {
  return slug === signatureProduct.slug ? signatureProduct : undefined;
}