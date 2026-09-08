import { useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { useLocale } from "@/i18n/LocaleProvider";

type Strings = {
  title: string;
  empty: string;
  emptyHint: string;
  subtotal: string;
  shipping: string;
  shippingNote: string;
  checkout: string;
  email: string;
  name: string;
  pay: string;
  back: string;
  success: string;
  successNote: string;
  continue: string;
  remove: string;
};

const L: Record<string, Strings> = {
  de: {
    title: "Warenkorb",
    empty: "Dein Warenkorb ist leer.",
    emptyHint: "Module hinzufügen, um das AX-Protokoll aufzubauen.",
    subtotal: "Zwischensumme",
    shipping: "Versand",
    shippingNote: "Berechnet im Checkout",
    checkout: "Zur Kasse →",
    email: "E-Mail",
    name: "Name",
    pay: "Bestellung abschließen →",
    back: "Zurück zum Warenkorb",
    success: "Signal empfangen ✓",
    successNote: "Deine Reservierung ist im Lab-Ledger erfasst.",
    continue: "Weiter shoppen",
    remove: "Entfernen",
  },
  en: {
    title: "Cart",
    empty: "Your cart is empty.",
    emptyHint: "Add modules to build the AX Protocol.",
    subtotal: "Subtotal",
    shipping: "Shipping",
    shippingNote: "Calculated at checkout",
    checkout: "Checkout →",
    email: "Email",
    name: "Name",
    pay: "Place reservation →",
    back: "Back to cart",
    success: "Signal received ✓",
    successNote: "Your reservation is logged in the lab ledger.",
    continue: "Continue shopping",
    remove: "Remove",
  },
  fr: {
    title: "Panier",
    empty: "Votre panier est vide.",
    emptyHint: "Ajoutez des modules pour composer le protocole AX.",
    subtotal: "Sous-total",
    shipping: "Livraison",
    shippingNote: "Calculée au paiement",
    checkout: "Paiement →",
    email: "E-mail",
    name: "Nom",
    pay: "Valider la réservation →",
    back: "Retour au panier",
    success: "Signal reçu ✓",
    successNote: "Votre réservation est inscrite au registre du lab.",
    continue: "Continuer les achats",
    remove: "Retirer",
  },
  it: {
    title: "Carrello",
    empty: "Il tuo carrello è vuoto.",
    emptyHint: "Aggiungi i moduli per costruire l'AX Protocol.",
    subtotal: "Subtotale",
    shipping: "Spedizione",
    shippingNote: "Calcolata al checkout",
    checkout: "Checkout →",
    email: "Email",
    name: "Nome",
    pay: "Conferma prenotazione →",
    back: "Torna al carrello",
    success: "Segnale ricevuto ✓",
    successNote: "La tua prenotazione è registrata nel ledger del lab.",
    continue: "Continua lo shopping",
    remove: "Rimuovi",
  },
  nl: {
    title: "Winkelmand",
    empty: "Je winkelmand is leeg.",
    emptyHint: "Voeg modules toe om het AX-protocol op te bouwen.",
    subtotal: "Subtotaal",
    shipping: "Verzending",
    shippingNote: "Berekend bij checkout",
    checkout: "Afrekenen →",
    email: "E-mail",
    name: "Naam",
    pay: "Reservering bevestigen →",
    back: "Terug naar winkelmand",
    success: "Signaal ontvangen ✓",
    successNote: "Je reservering is opgenomen in het lab-grootboek.",
    continue: "Verder winkelen",
    remove: "Verwijderen",
  },
  es: {
    title: "Carrito",
    empty: "Tu carrito está vacío.",
    emptyHint: "Añade módulos para componer el protocolo AX.",
    subtotal: "Subtotal",
    shipping: "Envío",
    shippingNote: "Calculado en el pago",
    checkout: "Pagar →",
    email: "Correo",
    name: "Nombre",
    pay: "Confirmar reserva →",
    back: "Volver al carrito",
    success: "Señal recibida ✓",
    successNote: "Tu reserva está registrada en el ledger del lab.",
    continue: "Seguir comprando",
    remove: "Eliminar",
  },
};

export default function CartDrawer() {
  const { items, subtotal, count, setQty, remove, open, setOpen, clear } = useCart();
  const { locale } = useLocale();
  const s = L[locale] ?? L.en;

  const [step, setStep] = useState<"cart" | "checkout" | "success">("cart");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const close = (o: boolean) => {
    setOpen(o);
    if (!o) setTimeout(() => setStep("cart"), 250);
  };

  return (
    <Sheet open={open} onOpenChange={close}>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 border-l border-line bg-void p-0 text-foreground sm:max-w-md"
      >
        <SheetHeader className="flex flex-row items-center justify-between border-b border-line px-6 py-5">
          <SheetTitle className="font-display text-xl tracking-[0.2em] text-silver">
            {step === "success" ? s.success : `${s.title} · ${count}`}
          </SheetTitle>
        </SheetHeader>

        {/* SUCCESS */}
        {step === "success" && (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 text-center">
            <p className="font-display text-3xl tracking-wider">{s.success}</p>
            <p className="text-sm text-mist">{s.successNote}</p>
            <button
              onClick={() => {
                clear();
                close(false);
              }}
              className="mt-4 bg-alpine px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-white hover:bg-silver hover:text-void"
            >
              {s.continue}
            </button>
          </div>
        )}

        {/* EMPTY */}
        {step !== "success" && items.length === 0 && (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
            <p className="font-display text-2xl tracking-wider">{s.empty}</p>
            <p className="text-sm text-mist">{s.emptyHint}</p>
          </div>
        )}

        {/* CART STEP */}
        {step === "cart" && items.length > 0 && (
          <>
            <div className="flex-1 overflow-y-auto">
              <ul className="divide-y divide-line">
                {items.map((it) => (
                  <li key={it.id} className="flex gap-4 p-6">
                    {it.img && (
                      <img
                        src={it.img}
                        alt={it.name}
                        className="h-20 w-16 flex-none object-cover"
                      />
                    )}
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-display text-base tracking-wider">{it.name}</p>
                          {it.meta && (
                            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                              {it.meta}
                            </p>
                          )}
                        </div>
                        <button
                          aria-label={s.remove}
                          onClick={() => remove(it.id)}
                          className="text-mist hover:text-silver"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-4">
                        <div className="flex items-center border border-line-mid">
                          <button
                            aria-label="-"
                            onClick={() => setQty(it.id, it.qty - 1)}
                            className="p-2 text-silver hover:bg-titanium"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center font-mono text-sm">{it.qty}</span>
                          <button
                            aria-label="+"
                            onClick={() => setQty(it.id, it.qty + 1)}
                            className="p-2 text-silver hover:bg-titanium"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-display text-lg">€{it.price * it.qty}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line bg-titanium px-6 py-5">
              <div className="flex items-baseline justify-between">
                <span className="label">{s.subtotal}</span>
                <span className="font-display text-2xl">€{subtotal}</span>
              </div>
              <div className="mt-2 flex items-baseline justify-between text-mist">
                <span className="label">{s.shipping}</span>
                <span className="font-mono text-[11px]">{s.shippingNote}</span>
              </div>
              <button
                onClick={() => setStep("checkout")}
                className="mt-5 w-full bg-alpine py-4 text-[10px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-silver hover:text-void"
              >
                {s.checkout}
              </button>
            </div>
          </>
        )}

        {/* CHECKOUT STEP */}
        {step === "checkout" && items.length > 0 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep("success");
            }}
            className="flex flex-1 flex-col"
          >
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              <div>
                <label className="label mb-2 block">{s.email}</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-line-mid bg-void px-4 py-3 text-sm text-silver outline-none focus:border-alpine"
                />
              </div>
              <div>
                <label className="label mb-2 block">{s.name}</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-line-mid bg-void px-4 py-3 text-sm text-silver outline-none focus:border-alpine"
                />
              </div>
              <div className="hairline my-4" />
              <ul className="space-y-2">
                {items.map((it) => (
                  <li key={it.id} className="flex justify-between font-mono text-[11px] text-mist">
                    <span>
                      {it.qty}× {it.name}
                    </span>
                    <span>€{it.price * it.qty}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline justify-between border-t border-line pt-4">
                <span className="label">{s.subtotal}</span>
                <span className="font-display text-2xl">€{subtotal}</span>
              </div>
            </div>
            <div className="border-t border-line bg-titanium px-6 py-5">
              <button
                type="submit"
                className="w-full bg-alpine py-4 text-[10px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-silver hover:text-void"
              >
                {s.pay}
              </button>
              <button
                type="button"
                onClick={() => setStep("cart")}
                className="mt-3 w-full py-2 text-[10px] uppercase tracking-[0.22em] text-mist hover:text-silver"
              >
                ← {s.back}
              </button>
            </div>
          </form>
        )}
      </SheetContent>
    </Sheet>
  );
}
