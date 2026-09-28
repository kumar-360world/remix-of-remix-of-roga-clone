import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LOGO =
  "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/673f48bdd14e9d1fb839de1e_Roga-logo.svg";

const nav = [
  { label: "Product", to: "/device" },
  { label: "App", to: "/app" },
  { label: "Science", to: "/science" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="container-page">
        <div className="flex items-center justify-between rounded-full border border-border/60 bg-background/80 px-5 py-3 shadow-sm backdrop-blur-xl">
          <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <img src={LOGO} alt="Roga logo" className="h-7 w-auto" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/shop" className="btn-base btn-primary hidden hover:brightness-110 md:inline-flex">
              Shop
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-3xl border border-border bg-background p-4 shadow-lg md:hidden">
            <div className="flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/shop"
                onClick={() => setOpen(false)}
                className="btn-base btn-primary mt-2 w-full"
              >
                Shop
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
