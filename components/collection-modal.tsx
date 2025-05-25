"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useCollectionModal } from "@/lib/collection-context";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  emoji: string;
  gradientFrom: string;
  gradientTo: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Ocean Stone Pendant",
    description: "Wire-wrapped beach stone",
    price: "$65",
    emoji: "💎",
    gradientFrom: "from-blue-50",
    gradientTo: "to-blue-100",
  },
  {
    id: 2,
    name: "Shell Drop Earrings",
    description: "Delicate shells with silver",
    price: "$45",
    emoji: "🐚",
    gradientFrom: "from-amber-50",
    gradientTo: "to-orange-100",
  },
  {
    id: 3,
    name: "Sea Glass Ring",
    description: "Smooth sea glass wrapped",
    price: "$75",
    emoji: "🌊",
    gradientFrom: "from-emerald-50",
    gradientTo: "to-teal-100",
  },
  {
    id: 4,
    name: "Pearl & Coral Bracelet",
    description: "Natural pearls with coral",
    price: "$95",
    emoji: "🦪",
    gradientFrom: "from-pink-50",
    gradientTo: "to-rose-100",
  },
  {
    id: 5,
    name: "Starfish Pendant",
    description: "Preserved in clear resin",
    price: "$55",
    emoji: "⭐",
    gradientFrom: "from-yellow-50",
    gradientTo: "to-amber-100",
  },
  {
    id: 6,
    name: "Abalone Shell Earrings",
    description: "Iridescent with gold",
    price: "$85",
    emoji: "🌈",
    gradientFrom: "from-purple-50",
    gradientTo: "to-pink-100",
  },
  {
    id: 7,
    name: "Moonstone Ring",
    description: "Beach-found moonstone",
    price: "$95",
    emoji: "🌙",
    gradientFrom: "from-slate-50",
    gradientTo: "to-gray-100",
  },
  {
    id: 8,
    name: "Driftwood Bracelet",
    description: "Smooth driftwood beads",
    price: "$65",
    emoji: "🪵",
    gradientFrom: "from-stone-50",
    gradientTo: "to-zinc-100",
  },
  {
    id: 9,
    name: "Sand Dollar Pendant",
    description: "Preserved sand dollar",
    price: "$55",
    emoji: "🏖️",
    gradientFrom: "from-yellow-50",
    gradientTo: "to-orange-100",
  },
];

export function CollectionModal() {
  const { isOpen, closeModal } = useCollectionModal();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="!max-w-none w-[90vw] h-[90vh] p-0 overflow-hidden">
        <DialogTitle className="sr-only">Our Collection</DialogTitle>
        <DialogDescription className="sr-only">
          Browse our handcrafted jewelry collection
        </DialogDescription>
        <div className="h-full flex flex-col">
          {/* Header with properly aligned close button */}
          <div className="relative p-8 pb-6 border-b">
            <h2 className="text-2xl font-medium text-center">Our Collection</h2>
          </div>

          {/* Products Grid - max 3 columns with huge spacing */}
          <div className="flex-1 overflow-y-auto p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
              <AnimatePresence>
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group hover:shadow-xl transition-shadow duration-300 h-full">
      <CardContent className="p-0 h-full flex flex-col">
        <div
          className={`aspect-[16/9] bg-gradient-to-br ${product.gradientFrom} ${product.gradientTo} relative overflow-hidden`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-8xl">{product.emoji}</p>
          </div>
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-semibold text-lg mb-2 truncate">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-2xl font-bold">{product.price}</span>
            <Button size="sm" variant="outline">
              <ShoppingBag className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

