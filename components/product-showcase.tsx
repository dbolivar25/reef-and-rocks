"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCollectionModal } from "@/lib/collection-context";

interface Product {
  id: number;
  name: string;
  description: string;
  priceRange: string;
  emoji: string;
  gradientFrom: string;
  gradientTo: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Ocean Stone Pendants",
    description: "Wire-wrapped beach stones with natural patterns and textures",
    priceRange: "$10-25",
    emoji: "💎",
    gradientFrom: "from-blue-100",
    gradientTo: "to-blue-200",
  },
  {
    id: 2,
    name: "Shell Pendants",
    description: "Delicate shells paired with natural fibers and beads",
    priceRange: "$10-25",
    emoji: "🐚",
    gradientFrom: "from-amber-100",
    gradientTo: "to-orange-200",
  },
  {
    id: 3,
    name: "Beachside Bracelets",
    description: "Smooth sea glass wrapped in sterling silver wire",
    priceRange: "$7-10",
    emoji: "🌊",
    gradientFrom: "from-emerald-100",
    gradientTo: "to-teal-200",
  },
];

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
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div
                  className={`aspect-square bg-gradient-to-br ${product.gradientFrom} ${product.gradientTo} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-6xl">{product.emoji}</p>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">
                      {product.priceRange}
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

