import { TESTIMONIALS } from "@/lib/roga-content";

export function Testimonials({ limit }: { limit?: number }) {
  const items = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;
  return (
    <section id="testimonial-landing" className="py-20">
      <div className="container-page">
        <p className="eyebrow text-center">Trusted by users across the globe</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl md:text-4xl">
          Real people, real calm
        </h2>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {items.map((t) => (
            <article
              key={t.handle}
              className="break-inside-avoid overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <img src={t.cover} alt="" className="h-56 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-lg leading-snug">&ldquo;{t.title}&rdquo;</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.quote}</p>
                <div className="mt-5 flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="size-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.handle}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
