import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Partners } from "@/components/site/Partners";
import { Testimonials } from "@/components/site/Testimonials";
import { BuyCard } from "@/components/site/BuyCard";
import { IMG } from "@/lib/roga-content";

const title = "Roga — Take control of your stress";
const description =
  "A new generation of Vagus Nerve Stimulation to help you reduce stress, sleep better and embrace a calmer life.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: IMG.heroWoman },
      { name: "twitter:image", content: IMG.heroWoman },
    ],
  }),
  component: Home,
});

const PROMISES = [
  { title: "To help you overcome stress", img: IMG.lifestyle1 },
  { title: "To help you sleep better", img: IMG.meditating },
  { title: "To come back to your best self", img: IMG.smiling },
];

const STEPS = [
  {
    step: "Step one",
    title: "Plug In",
    body: "Connect Roga to your phone and place the pads behind your ears.",
    img: IMG.stepPlugIn,
  },
  {
    step: "Step two",
    title: "Turn On",
    body: "Use the Roga app to activate your Vagus Nerve with gentle pulses.",
    img: IMG.stepTurnOn,
  },
  {
    step: "Step three",
    title: "Relax",
    body: "Sit back and relax while you activate your Vagus Nerve, reduce stress and improve your sleep naturally.",
    img: IMG.stepRelax,
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <h1 className="text-5xl leading-[1.05] md:text-7xl">Take control of your stress</h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              New generation of <strong className="text-foreground">Vagus Nerve Stimulation</strong>{" "}
              to help you reduce stress and embrace a calmer life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="btn-base btn-primary hover:brightness-110">
                Shop
              </Link>
              <Link to="/device" className="btn-base btn-outline hover:bg-muted">
                Learn more
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={IMG.heroWoman}
              alt="A lady wearing the blue Roga device"
              className="h-[32rem] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <h2 className="max-w-2xl text-3xl md:text-5xl">We designed Roga for you</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROMISES.map((p) => (
              <div key={p.title} className="overflow-hidden rounded-3xl bg-surface">
                <img src={p.img} alt={p.title} className="h-72 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-xl">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <img
            src={IMG.vns}
            alt="Vagus Nerve Stimulation"
            className="w-full rounded-3xl object-cover"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl md:text-5xl">Activate your Vagus Nerve</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Most users see up to{" "}
              <Link to="/science" className="font-semibold text-primary underline">
                47% reduction
              </Link>{" "}
              in stress symptoms over the first month.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["47%", "less anxiety"],
                ["22%", "better sleep"],
                ["29%", "more focus"],
                ["17%", "higher HRV"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-2xl border border-border p-5">
                  <p className="text-3xl font-bold text-primary">{v}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BuyCard />

      <Partners />

      <Testimonials limit={9} />

      <section className="py-20">
        <div className="container-page">
          <h2 className="text-center text-3xl md:text-5xl">How it works</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.title} className="rounded-3xl bg-surface p-6">
                <img src={s.img} alt={s.title} className="h-56 w-full object-contain" loading="lazy" />
                <p className="eyebrow mt-6">{s.step}</p>
                <h3 className="mt-2 text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Introducing</p>
            <h2 className="mt-3 text-4xl md:text-6xl">The Wearable</h2>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              The smallest and most fashionable{" "}
              <strong className="text-foreground">vagus nerve stimulator</strong> in the world.
            </p>
            <Link to="/device" className="btn-base btn-primary mt-8 hover:brightness-110">
              Learn more
            </Link>
          </div>
          <img
            src={IMG.spinningDevice}
            alt="Spinning Roga device"
            className="mx-auto w-full max-w-md"
            loading="lazy"
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid items-center gap-12 rounded-[2rem] bg-surface p-8 lg:grid-cols-2 lg:p-14">
          <div>
            <p className="eyebrow">Explore</p>
            <h2 className="mt-3 text-3xl md:text-4xl">A World of Mindfulness Content</h2>
            <p className="mt-5 text-muted-foreground">
              Access expert-curated sessions and series tailored to help you reduce stress, boost
              focus and enhance relaxation. Create personalized sessions tailored to your needs.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <img src={IMG.appStore} alt="Download on the App Store" className="h-11 w-auto" />
              <img src={IMG.playStore} alt="Get it on Google Play" className="h-11 w-auto" />
            </div>
          </div>
          <img
            src={IMG.lifestyle5}
            alt="A woman wearing the Roga device"
            className="h-96 w-full rounded-3xl object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
