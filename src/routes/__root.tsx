import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import Nav from "../components/site/Nav";
import Footer from "../components/site/Footer";
import { LocaleProvider, useT } from "../i18n/LocaleProvider";
import { CartProvider } from "../lib/cart";
import CartDrawer from "../components/site/CartDrawer";

function NotFoundComponent() {
  const t = useT();
  return (
    <div className="flex min-h-screen items-center justify-center bg-void px-4">
      <div className="max-w-md text-center">
        <p className="label">Error · 404</p>
        <h1 className="mt-4 font-display text-[120px] leading-none tracking-wider">404</h1>
        <h2 className="mt-2 font-display text-2xl tracking-wider text-silver">{t.common.notFoundTitle}</h2>
        <p className="mt-4 text-sm text-mist">{t.common.notFoundLead}</p>
        <Link
          to="/"
          className="mt-8 inline-block bg-silver px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-void"
        >
          {t.common.notFoundCta}
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ZONES LAB™ — Cosmetics, Fabrics & Superfood" },
      {
        name: "description",
        content:
          "ZONES LAB™ verbindet sechs präzise Linien: Cosmetics, Signature, Fabrics, Superfood Kaffee, Accessories und Kunst.",
      },
      { name: "author", content: "ZONES LAB" },
      { property: "og:title", content: "ZONES LAB™ — Cosmetics, Fabrics & Superfood" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#FAFAFA" },
      { name: "twitter:title", content: "ZONES LAB™ — Cosmetics, Fabrics & Superfood" },
      { property: "og:description", content: "Sechs präzise Produktlinien: Cosmetics, Signature, Fabrics, Superfood Kaffee, Accessories und Kunst." },
      { name: "twitter:description", content: "Sechs präzise Produktlinien: Cosmetics, Signature, Fabrics, Superfood Kaffee, Accessories und Kunst." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/718b66af-6c43-4200-a28a-9c8958641c33" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/718b66af-6c43-4200-a28a-9c8958641c33" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600&family=Bebas+Neue&family=JetBrains+Mono:wght@300;400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => (
    <LocaleProvider>
      <NotFoundComponent />
    </LocaleProvider>
  ),
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body className="bg-void text-foreground antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LocaleProvider>
      <CartProvider>
        <Nav />
        <Outlet />
        <Footer />
        <CartDrawer />
      </CartProvider>
    </LocaleProvider>
  );
}
