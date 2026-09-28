import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { BuyCard } from "@/components/site/BuyCard";
import { Testimonials } from "@/components/site/Testimonials";
import { IMG } from "@/lib/roga-content";

const title = "Shop the Roga Device — $249 with 60-day free returns";
const description =
  "Buy the Roga vagus nerve stimulator in Charcoal or Sky Blue. Free US shipping, 30-day money back guarantee and HSA/FSA eligible.";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: IMG.inTheBox },
      { name: "twitter:image", content: IMG.inTheBox },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="container-page pt-12">
        <p className="eyebrow">Shop</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Get your Roga device</h1>
      </div>
      <BuyCard />

      <section className="container-page">
        <div className="grid gap-6 rounded-[2rem] bg-surface p-8 md:grid-cols-3 lg:p-12">
          {[
            ["In the box", "Roga device, charging cable, travel pouch and quick-start guide."],
            ["Shipping", "Free within the US. Orders ship within 2 business days."],
            ["Returns", "60-day free returns and a 30-day money back guarantee."],
          ].map(([t, b]) => (
            <div key={t}>
              <h3 className="text-xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <SiteFooter />
    </div>
  );
}
