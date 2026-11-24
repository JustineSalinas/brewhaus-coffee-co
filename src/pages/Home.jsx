import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Truck, Award } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import products from "@/data/products";
import { cn } from "@/lib/utils";

const highlights = [
  { icon: Leaf, label: "Ethically sourced, direct-trade farms" },
  { icon: Truck, label: "Roasted and shipped within 48 hours" },
  { icon: Award, label: "Award-winning small-batch roasts" },
];

function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 md:grid-cols-2 md:items-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-primary">
              SMALL-BATCH · ETHICALLY SOURCED
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Coffee worth <br className="hidden sm:block" />
              waking up for.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Hand-roasted in micro-batches and shipped within 48 hours of
              roasting. Discover beans that taste like where they came from.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className={cn(buttonVariants({ size: "lg" }), "gap-1.5")}>
                Shop Our Coffee
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className={buttonVariants({ size: "lg", variant: "outline" })}>
                Our Story
              </Link>
            </div>
          </div>
          <ImagePlaceholder
            className="animate-fade-in-up mx-auto aspect-square w-full max-w-sm rounded-2xl shadow-xl shadow-black/5 md:mx-0"
            iconClassName="h-16 w-16"
          />
        </div>
      </section>

      <section className="border-b border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </div>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Featured Roasts
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The three bags our customers reorder the most.
            </p>
          </div>
          <Link
            to="/shop"
            className={cn(buttonVariants({ variant: "ghost" }), "hidden gap-1.5 sm:inline-flex")}
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Card key={p.id} className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/20">
              <ImagePlaceholder className="aspect-[4/3] w-full" iconClassName="h-10 w-10" />
              <CardContent className="flex flex-1 flex-col p-5">
                <h3 className="font-medium">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                <div className="mt-auto pt-4 flex items-center justify-between gap-3">
                  <span className="font-semibold">${p.price.toFixed(2)}</span>
                  <Link
                    to={`/shop/${p.id}`}
                    className={buttonVariants({ variant: "outline", size: "sm" })}
                  >
                    View
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link to="/shop" className={buttonVariants()}>
            Browse Full Shop
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
