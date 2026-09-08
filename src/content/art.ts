import type { Locale } from "@/i18n/config";

import artPlaceholder from "@/assets/art-collab-placeholder.jpg";

/** Neutral placeholder visual — intentionally shows no artwork. */
export const ART_HERO = artPlaceholder;

/** Working title of the future collaboration. No artist, gallery or edition claims. */
export const ART_BRAND = "ZONES × REZA";

export interface ArtCopy {
  eyebrow: string;
  badge: string;
  subline: string;
  lead: string;
  note: string;
  status: string;
  statusValue: string;
  back: string;
}

export const artCopy: Record<Locale, ArtCopy> = {
  de: {
    eyebrow: "Collab / Art",
    badge: "In Progress",
    subline: "Art Collaboration",
    lead: "Eine Zusammenarbeit in Vorbereitung. Details folgen.",
    note: "Es sind noch keine Werke, Formate, Auflagen oder Preise bestätigt.",
    status: "Status",
    statusValue: "Coming Soon",
    back: "Zurück zur Kollektion",
  },
  en: {
    eyebrow: "Collab / Art",
    badge: "In Progress",
    subline: "Art Collaboration",
    lead: "A collaboration in preparation. Details to follow.",
    note: "No works, formats, editions or prices are confirmed yet.",
    status: "Status",
    statusValue: "Coming Soon",
    back: "Back to the collection",
  },
  fr: {
    eyebrow: "Collab / Art",
    badge: "In Progress",
    subline: "Art Collaboration",
    lead: "Une collaboration en préparation. Détails à venir.",
    note: "Aucune œuvre, format, édition ou prix n’est encore confirmé.",
    status: "Statut",
    statusValue: "Coming Soon",
    back: "Retour à la collection",
  },
  it: {
    eyebrow: "Collab / Art",
    badge: "In Progress",
    subline: "Art Collaboration",
    lead: "Una collaborazione in preparazione. Dettagli a seguire.",
    note: "Nessuna opera, formato, edizione o prezzo è ancora confermato.",
    status: "Stato",
    statusValue: "Coming Soon",
    back: "Torna alla collezione",
  },
  nl: {
    eyebrow: "Collab / Art",
    badge: "In Progress",
    subline: "Art Collaboration",
    lead: "Een samenwerking in voorbereiding. Details volgen.",
    note: "Er zijn nog geen werken, formaten, edities of prijzen bevestigd.",
    status: "Status",
    statusValue: "Coming Soon",
    back: "Terug naar de collectie",
  },
  es: {
    eyebrow: "Collab / Art",
    badge: "In Progress",
    subline: "Art Collaboration",
    lead: "Una colaboración en preparación. Detalles próximamente.",
    note: "Aún no hay obras, formatos, ediciones ni precios confirmados.",
    status: "Estado",
    statusValue: "Coming Soon",
    back: "Volver a la colección",
  },
};
