import { useState } from "react";
import { IMG, PRODUCT } from "@/lib/roga-content";

const GALLERY = [
  IMG.heroWoman,
  IMG.deviceOverview,
  IMG.deviceBenefits,
  IMG.study,
  IMG.pouch,
  IMG.inTheBox,
  IMG.lifestyle1,
  IMG.earHooks,
];

export function BuyCard() {
  const [active, setActive] = useState(0);
  const [variant, setVariant] = useState<"Charcoal" | "Sky Blue">("Charcoal");

  return (
    <section className="py-20">
      <div className="container-page grid items-start gap-12 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-3xl border border-border bg-surface">
            <img
              src={GALLERY[active]}
              alt="Roga device"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
            {GALLERY.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View image ${i + 1}`}
                className={`size-20 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                  i === active ? "border-primary" : "border-border opacity-70 hover:opacity-100"
                }`}
              >
                <img src={src} alt="" className="size-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <h2 className="text-3xl md:text-4xl">{PRODUCT.name}</h2>
          <div className="mt-3 flex items-center gap-3">
            <img src={IMG.stars} alt="4.6 star rating" className="h-5 w-auto" />
            <a href="#testimonial-landing" className="text-sm text-muted-foreground underline">
              {PRODUCT.rating} | Join {PRODUCT.users} Users
            </a>
          </div>
          <p className="mt-5 text-3xl font-bold">${PRODUCT.price.toFixed(2)}</p>

          <ul className="mt-6 space-y-3">
            {PRODUCT.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <img src={IMG.check} alt="" className="mt-0.5 size-5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <p className="text-sm font-semibold">Colour: {variant}</p>
            <div className="mt-3 flex gap-3">
              {(["Charcoal", "Sky Blue"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
                    variant === v
                      ? "border-primary bg-accent text-accent-foreground"
                      : "border-border hover:bg-muted"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="btn-base btn-primary mt-6 w-full hover:brightness-110"
          >
            Get {variant} Device — ${PRODUCT.price}
          </button>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Badge icon={IMG.medal} label="Clinically Proven Results" />
            <Badge icon={IMG.shield} label="Rigorously Safety Tested" />
            <Badge icon={IMG.rotateColored} label="60-day free returns" />
          </div>

          <div className="mt-8 space-y-3 rounded-2xl bg-surface p-5">
            <Perk icon={IMG.truck} label="Free Shipping within the US" />
            <Perk icon={IMG.rotate} label="30-day money back guarantee" />
            <Perk icon={IMG.card} label="HSA/FSA eligible with up to 30% off" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-border p-4 text-center">
      <img src={icon} alt="" className="size-8" />
      <p className="text-xs font-semibold">{label}</p>
    </div>
  );
}

function Perk({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <img src={icon} alt="" className="size-5" />
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
