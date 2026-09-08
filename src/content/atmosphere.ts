import atmosRing from "@/assets/zl-atmos-ring.jpg.asset.json";
import atmosSnow from "@/assets/zl-atmos-snow.jpg.asset.json";
import atmosRock from "@/assets/zl-atmos-rock.jpg.asset.json";
import atmosCourt from "@/assets/zl-atmos-court.jpg.asset.json";
import atmosRidge from "@/assets/zl-atmos-ridge.jpg.asset.json";
import atmosTarget from "@/assets/zl-atmos-target.jpg.asset.json";
import atmosPass from "@/assets/zl-atmos-pass.jpg.asset.json";
import atmosPool from "@/assets/zl-atmos-pool.jpg.asset.json";
import atmosTrack from "@/assets/zl-atmos-track.jpg.asset.json";
import atmosWall from "@/assets/zl-atmos-wall.jpg.asset.json";

import type { Locale } from "@/i18n/config";

/**
 * ATMOSPHERE layer of the three-tier image system:
 * real places, no products, muted natural light.
 * Used for homepage section dividers, manifest and community anchors.
 * Never on Cosmetics/Fabrics product pages (STUDIO) or Accessories (CURATED).
 */
export type AtmosphereKey =
  | "ring"
  | "snow"
  | "rock"
  | "court"
  | "ridge"
  | "target"
  | "pass"
  | "pool"
  | "track"
  | "wall";

export const ATMOSPHERE_IMAGES: Record<AtmosphereKey, string> = {
  ring: atmosRing.url,
  snow: atmosSnow.url,
  rock: atmosRock.url,
  court: atmosCourt.url,
  ridge: atmosRidge.url,
  target: atmosTarget.url,
  pass: atmosPass.url,
  pool: atmosPool.url,
  track: atmosTrack.url,
  wall: atmosWall.url,
};

export const ATMOSPHERE_ALT: Record<AtmosphereKey, Record<Locale, string>> = {
  ring: {
    de: "Boxhandschuhe am Ringseil über einer Schlucht",
    en: "Boxing gloves hanging from ring ropes above a canyon",
    fr: "Gants de boxe suspendus aux cordes d’un ring au-dessus d’un canyon",
    it: "Guantoni da boxe appesi alle corde del ring sopra un canyon",
    nl: "Boxhandschoenen aan de ringtouwen boven een kloof",
    es: "Guantes de boxeo colgados de las cuerdas del ring sobre un cañón",
  },
  snow: {
    de: "Ski und Stöcke in einem leeren Schneehang",
    en: "Skis and poles set in an empty snow slope",
    fr: "Skis et bâtons plantés dans une pente enneigée déserte",
    it: "Sci e bastoncini in un pendio innevato deserto",
    nl: "Ski's en stokken in een lege sneeuwhelling",
    es: "Esquís y bastones en una ladera nevada vacía",
  },
  rock: {
    de: "Klettergurt, Karabiner und Seil auf einer Felsplatte",
    en: "Climbing harness, carabiners and rope on a rock ledge",
    fr: "Baudrier, mousquetons et corde sur une dalle rocheuse",
    it: "Imbrago, moschettoni e corda su una placca di roccia",
    nl: "Klimgordel, karabiners en touw op een rotsplaat",
    es: "Arnés, mosquetones y cuerda sobre una placa de roca",
  },
  court: {
    de: "Tennisschläger hinter einem Zaunnetz am Platz",
    en: "Tennis racket behind the fence netting of a court",
    fr: "Raquette de tennis derrière le filet de clôture d’un court",
    it: "Racchetta da tennis dietro la rete di recinzione di un campo",
    nl: "Tennisracket achter het hekwerk van een baan",
    es: "Raqueta de tenis detrás de la red perimetral de una pista",
  },
  ridge: {
    de: "Blick über einen nebligen Bergkamm",
    en: "View along a misty mountain ridge",
    fr: "Vue le long d’une crête de montagne dans la brume",
    it: "Vista lungo una cresta di montagna nella nebbia",
    nl: "Uitzicht over een nevelige bergkam",
    es: "Vista a lo largo de una cresta de montaña con niebla",
  },
  target: {
    de: "Bogen und Zielscheibe in weiter Steppe",
    en: "Bow and target board in an open steppe",
    fr: "Arc et cible dans une steppe ouverte",
    it: "Arco e bersaglio in una steppa aperta",
    nl: "Boog en schietschijf in een open steppe",
    es: "Arco y diana en una estepa abierta",
  },
  pass: {
    de: "Rennrad auf einer Passstraße im Gegenlicht",
    en: "Road bike on a mountain pass in backlight",
    fr: "Vélo de route sur un col de montagne en contre-jour",
    it: "Bici da corsa su un passo di montagna in controluce",
    nl: "Racefiets op een bergpas in tegenlicht",
    es: "Bicicleta de carretera en un puerto de montaña a contraluz",
  },
  pool: {
    de: "Freibadbecken vor einem Bergmassiv im Morgendunst",
    en: "Open-air pool in front of a mountain range in morning haze",
    fr: "Piscine en plein air devant un massif dans la brume matinale",
    it: "Piscina all’aperto davanti a un massiccio nella foschia mattutina",
    nl: "Buitenbad voor een bergmassief in ochtendnevel",
    es: "Piscina al aire libre ante un macizo entre la bruma matinal",
  },
  track: {
    de: "Hürden auf einer Tartanbahn vor einer Wolkenfront",
    en: "Hurdles on a running track before a cloud front",
    fr: "Haies sur une piste d’athlétisme devant un front nuageux",
    it: "Ostacoli su una pista di atletica davanti a un fronte nuvoloso",
    nl: "Hordes op een atletiekbaan voor een wolkenfront",
    es: "Vallas en una pista de atletismo ante un frente de nubes",
  },
  wall: {
    de: "Kletterwand mit ausgelegten Crashpads",
    en: "Climbing wall with crash pads laid out below",
    fr: "Mur d’escalade avec des tapis de réception au sol",
    it: "Parete d’arrampicata con materassini stesi a terra",
    nl: "Klimwand met crashpads op de grond",
    es: "Muro de escalada con colchonetas dispuestas en el suelo",
  },
};
