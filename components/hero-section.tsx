"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import Image from "next/image";
import { useCollectionModal } from "@/lib/collection-context";

export function HeroSection() {
  const { openModal } = useCollectionModal();

  return (
    <section className="relative overflow-hidden">
      {/* Custom watercolor background */}
      <div className="absolute inset-0">
        <Image
          src="/hero-watercolor.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-background/30" />

      <div className="relative container mx-auto px-4 pt-24 pb-48 md:pt-32 md:pb-64">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Handcrafted with Love</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
            Jewelry Crafted by Nature
          </h1>
          <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
            Uniquely picked stones & shells transformed into wearable art.
            Each piece tells a story of the ocean&apos;s treasures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" onClick={openModal}>
              Shop Our Collection
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="mr-2 h-4 w-4" />
              Custom Orders
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    </section>
  );
}