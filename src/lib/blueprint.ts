/**
 * Motion Phase 3.1 — Blueprint-Callouts.
 *
 * Erzeugt die Annotations-Texte für das Blueprint-Overlay dynamisch aus den
 * vorhandenen Produktdaten (spec / tech / composition / benefits / volume).
 * Es wird NICHTS pro Produkt hartcodiert: die Reihenfolge der Quellen ist
 * fest, der Inhalt kommt immer aus dem übergebenen Datensatz.
 *
 * Priorität:
 *   1. spec-Einträge (label/value) — bereits kuratiert und übersetzt
 *   2. tech (als "Technologie"-Callout, erste zwei Segmente)
 *   3. benefits / composition (erste Segmente, gekürzt)
 *   4. volume als Fallback-Maß
 */

export interface BlueprintCallout {
  /** kurzer Kopf, z. B. "Format" */
  label: string;
  /** Wert / Material-Beschreibung, z. B. "Miron Violetglass" */
  value: string;
}

const MAX = 4;

/** Kürzt lange Strings sauber am Wortende. */
function clip(input: string, max = 46): string {
  const s = input.trim().replace(/\s+/g, " ");
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const at = cut.lastIndexOf(" ");
  return `${(at > 18 ? cut.slice(0, at) : cut).trim()}…`;
}

/** Splittet "A · B · C" oder "A, B" in Segmente. */
function segments(input: string): string[] {
  return input
    .split(/·|\||,|\/(?!\d)/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export interface BlueprintSource {
  spec?: { label: string; value: string }[];
  tech?: string;
  benefits?: string[];
  composition?: string[];
  volume?: string;
  /** Labels für generierte Callouts (i18n) */
  labels: {
    tech: string;
    material: string;
    measure: string;
  };
}

export function deriveCallouts(src: BlueprintSource): BlueprintCallout[] {
  const out: BlueprintCallout[] = [];
  const seen = new Set<string>();

  const push = (label: string, value: string) => {
    if (out.length >= MAX) return;
    const v = clip(value);
    const key = v.toLowerCase();
    if (!v || seen.has(key)) return;
    seen.add(key);
    out.push({ label: label.toUpperCase(), value: v });
  };

  // 1. Technologie zuerst — das ist der Kern der Zeichnung.
  if (src.tech) {
    const segs = segments(src.tech).slice(0, 2);
    if (segs.length) push(src.labels.tech, segs[0]!);
    if (segs[1]) push(src.labels.tech, segs[1]!);
  }

  // 2. Kuratierte Specs (Format, Volumen, Zyklus, Herkunft …)
  for (const s of src.spec ?? []) push(s.label, s.value);

  // 3. Benefits / Komposition als Material-Callouts
  for (const b of src.benefits ?? []) push(src.labels.material, segments(b)[0] ?? b);
  for (const c of src.composition ?? []) push(src.labels.material, segments(c)[0] ?? c);

  // 4. Maß als Rückfall
  if (src.volume) push(src.labels.measure, src.volume);

  return out.slice(0, MAX);
}
