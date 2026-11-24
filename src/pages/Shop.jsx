import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import products from "@/data/products";
import { usePageTitle } from "@/hooks/usePageTitle";

function Shop() {
  usePageTitle("Shop");

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Shop All Coffee
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Every bag roasted to order, shipped fresh within 48 hours of
          roasting.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Card key={p.id} className="flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
            <ImagePlaceholder
              src={p.image}
              label={p.name}
              className="aspect-[4/3] w-full"
              iconClassName="h-10 w-10"
            />
            <CardContent className="flex flex-1 flex-col p-5">
              <h3 className="font-medium">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              <div className="mt-auto pt-4 flex items-center justify-between gap-3">
                <span className="font-semibold tabular-nums">${p.price.toFixed(2)}</span>
                <Link
                  to={`/shop/${p.id}`}
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  View Product
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Shop;
