import { DURATION, EASE } from "@/lib/motion";

/**
 * Cart-Feedback: Flugbahn vom geklickten Produktelement zum Warenkorb-Icon.
 * Es wird ein temporäres, fixiertes Bild-Element an <body> gehängt und
 * ausschließlich über transform/opacity animiert (kein Layout-Einfluss,
 * pointer-events: none, aria-hidden). Danach wird ein Event ausgelöst,
 * mit dem das Cart-Badge kurz pulsiert.
 *
 * Bei prefers-reduced-motion entfällt die Flugbahn; nur das
 * Ankunfts-Event wird gefeuert (Badge zählt ohne Bounce hoch).
 */
export const CART_ARRIVE_EVENT = "zl:cart-arrive";
export const CART_TARGET_ATTR = "data-cart-target";

function target(): HTMLElement | null {
  if (typeof document === "undefined") return null;
  return document.querySelector<HTMLElement>(`[${CART_TARGET_ATTR}]`);
}

function announce() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(CART_ARRIVE_EVENT));
}

export function flyToCart(source: Element | null | undefined, img: string | undefined, reduced: boolean) {
  if (typeof document === "undefined") return;
  const dest = target();
  if (reduced || !source || !dest || !img) {
    announce();
    return;
  }

  const from = (source.closest("article, section, [data-fly-source]") ?? source).getBoundingClientRect();
  const to = dest.getBoundingClientRect();

  const size = 84;
  const ghost = document.createElement("img");
  ghost.src = img;
  ghost.alt = "";
  ghost.setAttribute("aria-hidden", "true");
  ghost.style.cssText = [
    "position:fixed",
    `left:${from.left + from.width / 2 - size / 2}px`,
    `top:${from.top + from.height / 2 - size / 2}px`,
    `width:${size}px`,
    `height:${size}px`,
    "object-fit:cover",
    "z-index:120",
    "pointer-events:none",
    "opacity:0.95",
    "will-change:transform,opacity",
    "transform:translate3d(0,0,0) scale(1)",
    `transition:transform ${DURATION.medium}ms ${EASE.editorial}, opacity ${DURATION.medium}ms ${EASE.editorial}`,
  ].join(";");
  document.body.appendChild(ghost);

  const dx = to.left + to.width / 2 - (from.left + from.width / 2);
  const dy = to.top + to.height / 2 - (from.top + from.height / 2);

  requestAnimationFrame(() => {
    ghost.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(0.18)`;
    ghost.style.opacity = "0.15";
  });

  window.setTimeout(() => {
    ghost.remove();
    announce();
  }, DURATION.medium);
}
