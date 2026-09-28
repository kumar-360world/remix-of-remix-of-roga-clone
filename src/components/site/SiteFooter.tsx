import { Link } from "@tanstack/react-router";
import { useState } from "react";

const LOGO =
  "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/673f48bdd14e9d1fb839de1e_Roga-logo.svg";

const APP_STORE =
  "https://cdn.prod.website-files.com/670ea9154c393df171f53836/670ea9154c393df171f53a16_AppStoreAppStore.svg";
const PLAY_STORE =
  "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/6672f9d02ddac3f9e7e4c2ad_PlayStoreGooglePlay.svg";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <img src={LOGO} alt="Roga logo" className="h-8 w-auto brightness-0" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A new generation of Vagus Nerve Stimulation to help you reduce stress and embrace a
              calmer life.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img src={APP_STORE} alt="Download on the App Store" className="h-10 w-auto" />
              <img src={PLAY_STORE} alt="Get it on Google Play" className="h-10 w-auto" />
            </div>
          </div>

          <FooterCol
            title="Product"
            links={[
              { label: "The Wearable", to: "/device" },
              { label: "The App", to: "/app" },
              { label: "Shop", to: "/shop" },
            ]}
          />
          <FooterCol
            title="Learn"
            links={[
              { label: "The Science", to: "/science" },
              { label: "How it works", to: "/device" },
              { label: "Reviews", to: "/shop" },
            ]}
          />

          <div>
            <h4 className="text-sm font-semibold text-foreground">Join the Roga community</h4>
            <p className="mt-3 text-sm text-muted-foreground">
              Exclusive discounts, rewards and surprise swag.
            </p>
            <form
              className="mt-4 flex flex-col gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              <button type="submit" className="btn-base btn-primary hover:brightness-110">
                Subscribe
              </button>
              {sent && (
                <p className="text-sm text-success">You're subscribed, thank you for joining!</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Roga. All rights reserved.</p>
          <p>
            Roga is not a medical device and is not intended to diagnose, treat, cure or prevent any
            disease.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: "/device" | "/app" | "/shop" | "/science" | "/" }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
