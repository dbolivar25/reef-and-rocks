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
import { ShoppingBag, X } from "lucide-react";
import { useCollectionModal, type CategoryFilter } from "@/lib/collection-context";
import { products, type Product } from "@/lib/products";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { generateProductInquiryEmail } from "@/lib/mailto-utils";
import { cn } from "@/lib/utils";

export function CollectionModal() {
  const { isOpen, closeModal, selectedCategory, setCategory } = useCollectionModal();
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  // Category labels and counts
  const categories: { value: CategoryFilter; label: string; count: number }[] = [
    { value: 'all', label: 'All', count: products.length },
    { value: 'shell-pearl', label: 'Shells & Pearls', count: products.filter(p => p.category === 'shell-pearl').length },
    { value: 'stone-crystal', label: 'Stones & Crystals', count: products.filter(p => p.category === 'stone-crystal').length },
    { value: 'bracelet-bangle', label: 'Bracelets & Bangles', count: products.filter(p => p.category === 'bracelet-bangle').length },
  ];

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
      <DialogContent className="!max-w-none w-[90vw] h-[90vh] p-0 overflow-hidden flex flex-col [&>button]:hidden">
        <DialogTitle className="sr-only">Our Collection</DialogTitle>
        <DialogDescription className="sr-only">
          Browse our handcrafted jewelry collection
        </DialogDescription>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="px-4 md:px-8 py-6 border-b flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-medium">Our Collection</h2>
            <button
              onClick={closeModal}
              className="h-8 w-8 rounded-full flex items-center justify-center transition-all hover:bg-muted/80"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </div>

          {/* Products container with floating filters */}
          <div className="flex-1 relative overflow-hidden">
            {/* Floating filter buttons */}
            <div className="absolute top-0 left-0 right-0 z-10 pt-4 flex justify-center">
              <div className="mx-4 md:mx-8 max-w-full overflow-x-auto scrollbar-hide rounded-full">
                <div className="bg-background/80 backdrop-blur-sm rounded-full p-1 inline-flex gap-1 shadow-md border border-border/50 flex-shrink-0">
                    {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setCategory(category.value)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-shrink-0",
                        "hover:scale-105 active:scale-95",
                        selectedCategory === category.value
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted/80"
                      )}
                    >
                      {category.label} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Products Grid with top padding for filters */}
            <div className="h-full overflow-y-auto px-4 md:px-16 pb-4 md:pb-16 pt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
                <AnimatePresence>
                  {filteredProducts.map((product, index) => (
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
