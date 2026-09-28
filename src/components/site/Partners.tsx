import { PARTNERS } from "@/lib/roga-content";

export function Partners() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section className="py-20">
      <div className="container-page text-center">
        <h2 className="text-3xl md:text-4xl">Trusted by experts</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Supported by renowned research institutions and organizations.
        </p>
      </div>
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track items-center gap-10 px-5">
          {row.map((p, i) => (
            <img
              key={`${p.name}-${i}`}
              src={p.src}
              alt={p.name}
              className="h-14 w-auto shrink-0 rounded-md object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
