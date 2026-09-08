import { useCallback } from "react";
import { useCart, type CartItem } from "@/lib/cart";
import { flyToCart } from "@/lib/cartFlight";
import { usePrefersReducedMotion } from "@/lib/motion";

/**
 * Add-to-Cart mit visuellem Feedback (Flugbahn + Badge-Puls).
 * Fachlogik bleibt unverändert in useCart(); hier kommt nur Motion dazu.
 */
export function useAddToCart() {
  const { add } = useCart();
  const reduced = usePrefersReducedMotion();

  return useCallback(
    (event: { currentTarget: Element } | null, item: Omit<CartItem, "qty"> & { qty?: number }) => {
      flyToCart(event?.currentTarget, item.img, reduced);
      add(item);
    },
    [add, reduced],
  );
}
