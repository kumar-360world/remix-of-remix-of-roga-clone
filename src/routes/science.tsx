import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Partners } from "@/components/site/Partners";
import { IMG, STUDY_STATS } from "@/lib/roga-content";

const title = "The Science behind Roga — Peer-reviewed vagus nerve stimulation";
const description =
  "47% reduction in anxiety, 22% better sleep and 48% more vagus nerve activity. See the clinical results behind Roga.";

export const Route = createFileRoute("/science")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: IMG.study },
      { name: "twitter:image", content: IMG.study },
    ],
  }),
  component: SciencePage,
});

function SciencePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-page py-16 text-center lg:py-24">
        <p className="eyebrow">The Science</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-5xl leading-[1.05] md:text-6xl">
          Clinically studied, peer-reviewed
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Roga stimulates the auricular branch of the vagus nerve, the body&apos;s main
          parasympathetic pathway. Activating it shifts you out of fight-or-flight and into rest and
          digest.
        </p>
      </section>

      <section className="container-page">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STUDY_STATS.map((s) => (
            <div key={s.label} className="rounded-3xl bg-surface p-8">
              <p className="text-5xl font-bold text-primary">{s.value}</p>
              <p className="mt-2 text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <img
          src={IMG.study}
          alt="Scientific study results of Roga"
          className="mt-8 w-full rounded-3xl bg-surface object-contain"
          loading="lazy"
        />
      </section>

      <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-2">
        <img
          src={IMG.man}
          alt="Man using the Roga device"
          className="w-full rounded-3xl object-cover"
          loading="lazy"
        />
        <div>
          <h2 className="text-3xl md:text-4xl">How stimulation works</h2>
          <ol className="mt-6 space-y-5">
            {[
              [
                "Gentle pulses behind the ear",
                "Dry electrodes deliver a low-intensity current to the auricular branch of the vagus nerve.",
              ],
              [
                "Signals travel to the brainstem",
                "The nerve carries the signal to the nucleus tractus solitarius, which regulates arousal and mood.",
              ],
              [
                "Your nervous system shifts gear",
                "Heart rate variability rises, alpha power increases and the stress response quiets down.",
              ],
            ].map(([t, b], i) => (
              <li key={t} className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-accent-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link to="/shop" className="btn-base btn-primary mt-8 hover:brightness-110">
            Try Roga for 60 days
          </Link>
        </div>
      </section>

      <Partners />

      <SiteFooter />
    </div>
  );
}
