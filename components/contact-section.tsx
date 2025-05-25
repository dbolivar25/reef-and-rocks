"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Instagram, Sparkles } from "lucide-react";
import { useCollectionModal } from "@/lib/collection-context";

export function ContactSection() {
  const { openModal } = useCollectionModal();

  return (
    <section id="contact" className="pt-32 pb-48 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Get in Touch
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Let&apos;s Create Something Beautiful
            </h2>
            <p className="text-muted-foreground">
              Have a custom request or want to know more about our collection?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <a
                  href="mailto:reefandrockjewelry@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  reefandrockjewelry@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Follow Us</h3>
                <a
                  href="https://www.instagram.com/reef.and.rocks.jewelry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  @reef.and.rocks.jewelry
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-sm text-muted-foreground">
                  Boutique Store
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Reef & Rocks Family
            </h3>
            <p className="text-muted-foreground mb-6">
              Get exclusive access to new collections and special offers
            </p>
            <Button size="lg" onClick={openModal}>
              Shop Our Latest Collection
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}