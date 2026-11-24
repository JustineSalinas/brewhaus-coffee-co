import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, ShoppingCart } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import products from "@/data/products";
import { cn } from "@/lib/utils";

function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <Link to="/shop" className={cn(buttonVariants(), "mt-6")}>
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Link
        to="/shop"
        className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "group mb-8 -ml-2 gap-1.5")}
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        Back to Shop
      </Link>

      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        <ImagePlaceholder
          className="aspect-square w-full rounded-2xl shadow-xl shadow-black/5"
          iconClassName="h-16 w-16"
        />

        <div>
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {product.tagline}
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            {product.name}
          </h1>
          <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" strokeWidth={1.75} />
            {product.origin}
          </div>

          <p className="mt-6 text-2xl font-semibold">${product.price.toFixed(2)}</p>

          <Separator className="my-6" />

          <p className="text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
            <Link to="/shop" className={buttonVariants({ size: "lg", variant: "outline" })}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
