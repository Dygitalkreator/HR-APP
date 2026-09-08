import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import { CART_ARRIVE_EVENT, CART_TARGET_ATTR } from "@/lib/cartFlight";
import { usePrefersReducedMotion } from "@/lib/motion";
import { useMagnetic } from "@/hooks/useMagnetic";

/**
 * Shared cart trigger. `variant="solid"` = main nav, `variant="ghost"` = slim headers.
 * Ist gleichzeitig Ziel der Flugbahn-Animation (data-cart-target) und pulsiert
 * nach Ankunft kurz (scale-Bounce). Reduced-Motion: kein Puls, kein Magnet.
 */
export default function CartButton({
  label,
  variant = "solid",
  className = "",
}: {
  label: string;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const { count, openCart } = useCart();
  const reduced = usePrefersReducedMotion();
  const magnetic = useMagnetic<HTMLButtonElement>(0.25);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || reduced) return;
    const onArrive = () => setPulse((n) => n + 1);
    window.addEventListener(CART_ARRIVE_EVENT, onArrive);
    return () => window.removeEventListener(CART_ARRIVE_EVENT, onArrive);
  }, [reduced]);

  const base =
    "relative inline-flex items-center gap-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-alpine";
  const styles =
    variant === "solid"
      ? "bg-alpine px-5 py-2.5 text-[13px] font-medium tracking-wide text-primary-foreground hover:bg-silver hover:text-void"
      : "border border-line-mid px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-silver hover:border-alpine hover:text-alpine";

  return (
    <button
      {...magnetic}
      type="button"
      onClick={openCart}
      aria-label={`${label} (${count})`}
      {...{ [CART_TARGET_ATTR]: true }}
      className={`${base} ${styles} ${className}`}
    >
      <ShoppingBag size={variant === "solid" ? 16 : 14} aria-hidden strokeWidth={1.5} />
      <span className={variant === "solid" ? "" : "hidden sm:inline"}>{label}</span>
      <span
        key={pulse}
        className={`${pulse && !reduced ? "cart-bounce " : ""}${
          variant === "solid" ? "font-mono text-[12px]" : "font-mono text-[10px] text-mist"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
