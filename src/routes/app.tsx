import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { IMG } from "@/lib/roga-content";

const title = "The Roga App — Mindfulness sessions, breathwork and focus modes";
const description =
  "Control your device, track your progress and explore expert-curated sessions for stress, sleep and focus in the free Roga app.";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: IMG.meditating },
      { name: "twitter:image", content: IMG.meditating },
    ],
  }),
  component: AppPage,
});

const MODES = [
  {
    name: "Calm",
    body: "Bring your stress down within minutes with a gentle 20-minute wind-down session.",
  },
  { name: "Sleep", body: "Wind down before bed and fall asleep faster with slower pulse patterns." },
  { name: "Focus", body: "Zone in during deep work with a stimulation pattern tuned for attention." },
  { name: "Breathwork", body: "Guided breathing paced to your session to deepen the vagal response." },
];

function AppPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow">The App</p>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-6xl">
            A world of mindfulness content
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Access expert-curated sessions and series tailored to help you reduce stress, boost
            focus and enhance relaxation. Create personalized sessions tailored to your needs.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <img src={IMG.appStore} alt="Download on the App Store" className="h-12 w-auto" />
            <img src={IMG.playStore} alt="Get it on Google Play" className="h-12 w-auto" />
          </div>
        </div>
        <img
          src={IMG.meditating}
          alt="Woman meditating with a Roga device"
          className="w-full rounded-3xl object-cover"
        />
      </section>

      <section className="container-page py-16">
        <h2 className="text-3xl md:text-4xl">Pick your mode</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MODES.map((m) => (
            <div key={m.name} className="rounded-3xl border border-border p-6">
              <h3 className="text-2xl">{m.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page grid items-center gap-12 py-16 lg:grid-cols-2">
        <img
          src={IMG.smiling}
          alt="Woman using Roga device smiling"
          className="w-full rounded-3xl object-cover"
          loading="lazy"
        />
        <div>
          <h2 className="text-3xl md:text-4xl">See your progress</h2>
          <p className="mt-5 text-muted-foreground">
            Every session is logged so you can watch your streaks, session minutes and how your
            stress responds over the weeks.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Session history and streaks",
              "Adjustable intensity, saved per mode",
              "Guided series for sleep, stress and focus",
              "Works with both Charcoal and Sky Blue devices",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <img src={IMG.check} alt="" className="mt-0.5 size-5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <Link to="/shop" className="btn-base btn-primary mt-8 hover:brightness-110">
            Get your device
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
