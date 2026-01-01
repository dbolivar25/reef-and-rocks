"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCollectionModal } from "@/lib/collection-context";
import { productCategories } from "@/lib/products";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { SectionHeader } from "@/components/section-header";

export function ProductShowcase() {
  const { openModal } = useCollectionModal();

  return (
    <section id="collection" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Featured Collection"
          title="Nature's Finest Treasures"
          description="Each piece is one-of-a-kind, just like the natural elements that inspire them"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <Card
              key={category.id}
              className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden relative"
            >
              <div
                className={`absolute inset-x-0 top-0 h-[5%] bg-gradient-to-b ${category.gradientFrom} to-transparent opacity-100`}
              />
              <CardContent className="p-0 relative">
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
                  <h3 className="font-semibold text-lg mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">
                      {category.priceRange}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        if (
                          category.name.includes("Shell") ||
                          category.name.includes("Pearl")
                        ) {
                          openModal("shell-pearl");
                        } else if (
                          category.name.includes("Stone") ||
                          category.name.includes("Crystal")
                        ) {
                          openModal("stone-crystal");
                        } else if (
                          category.name.includes("Bracelet") ||
                          category.name.includes("Bangle")
                        ) {
                          openModal("bracelet-bangle");
                        } else {
                          openModal("all");
                        }
                      }}
                    >
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" onClick={() => openModal("all")}>
            View Full Collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
