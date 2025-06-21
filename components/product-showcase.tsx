"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCollectionModal } from "@/lib/collection-context";
import { productCategories } from "@/lib/products";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";

export function ProductShowcase() {
  const { openModal } = useCollectionModal();

  return (
    <section id="collection" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Featured Collection
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Nature&apos;s Finest Treasures
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each piece is one-of-a-kind, just like the natural elements that
            inspire them
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <Card
              key={category.id}
              className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden">
                  <ImageWithSkeleton
                    src={category.featuredImage}
                    alt={category.name}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">
                      {category.priceRange}
                    </span>
                    <Button size="sm" variant="outline" onClick={openModal}>
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" onClick={openModal}>
            View Full Collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

