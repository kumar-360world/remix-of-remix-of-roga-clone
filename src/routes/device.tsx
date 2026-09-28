import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Testimonials } from "@/components/site/Testimonials";
import { IMG } from "@/lib/roga-content";

const title = "The Roga Wearable — Vagus Nerve Stimulation device";
const description =
  "The smallest and most fashionable vagus nerve stimulator in the world. Discreet, gel-free and designed to be worn behind the ears.";

export const Route = createFileRoute("/device")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: IMG.deviceOverview },
      { name: "twitter:image", content: IMG.deviceOverview },
    ],
  }),
  component: DevicePage,
});

const SPECS = [
  ["Weight", "18 g"],
  ["Battery", "Powered by your phone"],
  ["Session", "20 minutes"],
  ["Colours", "Charcoal & Sky Blue"],
  ["Gel required", "None"],
  ["Warranty", "2 years"],
];

const FAQ = [
  {
    q: "What does a session feel like?",
    a: "A gentle tingling behind the ears. Most people describe it as a light, warm buzz that fades into the background within a minute.",
  },
  {
    q: "How often should I use Roga?",
    a: "20 minutes a day is the sweet spot. Many users run a session in the evening to wind down or during focused work.",
  },
  {
    q: "Do I need gel or pads?",
    a: "No. Roga's dry electrodes clip behind the ear, so there is no gel, no sticky residue and no consumables to replace.",
  },
  {
    q: "Is it safe?",
    a: "Roga has been rigorously safety tested and studied in partnership with the Canada Centre for Aging & Brain Health Innovation.",
  },
];

function DevicePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow">The Wearable</p>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-6xl">
            The world&apos;s smallest vagus nerve stimulator
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Discreet enough to wear anywhere. Clip it behind your ears, open the app and let gentle
            pulses do the rest.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/shop" className="btn-base btn-primary hover:brightness-110">
              Shop — $249
            </Link>
            <Link to="/science" className="btn-base btn-outline hover:bg-muted">
              See the science
            </Link>
          </div>
        </div>
        <img
          src={IMG.spinningDevice}
          alt="Spinning Roga device"
          className="mx-auto w-full max-w-md"
        />
      </section>

      <section className="container-page grid gap-6 py-10 md:grid-cols-2">
        <img
          src={IMG.deviceOverview}
          alt="The Roga device with the mobile app connected"
          className="w-full rounded-3xl object-cover"
          loading="lazy"
        />
        <img
          src={IMG.deviceBenefits}
          alt="Benefits of the Roga device"
          className="w-full rounded-3xl object-cover"
          loading="lazy"
        />
      </section>

      <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-2">
        <img
          src={IMG.earHooks}
          alt="Ear hooks attached behind the ear"
          className="w-full rounded-3xl object-cover"
          loading="lazy"
        />
        <div>
          <h2 className="text-3xl md:text-4xl">Designed to disappear</h2>
          <p className="mt-5 text-muted-foreground">
            The ear hooks rest on the bone behind your ear, where the vagus nerve branches closest
            to the skin. No gel, no mess, no one notices.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-4">
            {SPECS.map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-border p-4">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{k}</dt>
                <dd className="mt-1 font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-page grid gap-6 py-10 md:grid-cols-2">
        <img
          src={IMG.pouch}
          alt="Sky blue and charcoal pouches"
          className="w-full rounded-3xl bg-surface object-cover"
          loading="lazy"
        />
        <img
          src={IMG.inTheBox}
          alt="What is in the Roga box"
          className="w-full rounded-3xl bg-surface object-cover"
          loading="lazy"
        />
      </section>

      <section className="container-page py-20">
        <h2 className="text-3xl md:text-4xl">Questions, answered</h2>
        <div className="mt-8 divide-y divide-border rounded-3xl border border-border">
          {FAQ.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold marker:hidden">
                {f.q}
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <Testimonials limit={6} />

      <SiteFooter />
    </div>
  );
}
