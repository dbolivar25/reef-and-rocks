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
import { products, type Product } from "@/lib/products";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { generateProductInquiryEmail } from "@/lib/mailto-utils";

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
      <DialogContent className="!max-w-none w-[90vw] h-[90vh] p-0 overflow-hidden flex flex-col">
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
  const handleInquiry = () => {
    const mailtoUrl = generateProductInquiryEmail(product);
    window.location.href = mailtoUrl;
  };

  return (
    <Card className="group hover:shadow-xl transition-shadow duration-300 h-full overflow-hidden relative">
      {/* Gradient overlay at the top */}
      <div
        className={`absolute inset-x-0 top-0 h-[5%] bg-gradient-to-b ${product.gradientFrom} to-transparent opacity-100`}
      />
      <CardContent className="p-0 h-full flex flex-col relative">
        <div className="aspect-[4/3] relative overflow-hidden">
          <ImageWithSkeleton
            src={product.image}
            alt={product.name}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-4">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-2xl font-bold">{product.price}</span>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={handleInquiry}
              aria-label={`Inquire about ${product.name}`}
            >
              <ShoppingBag className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
