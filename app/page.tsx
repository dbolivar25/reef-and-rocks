import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Mail, MapPin, Instagram, ArrowRight, Sparkles, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/reef-and-rocks-logo.png"
                alt="Reef and Rocks"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#collection" className="text-sm font-medium hover:text-primary transition-colors">Collection</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4 mr-2" />
                Follow Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-accent/20" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Handcrafted with Love</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
              Jewelry Crafted by Nature
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Uniquely picked stones & shells transformed into wearable art.
              Each piece tells a story of the ocean&apos;s treasures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
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
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" 
              fill="currentColor" 
              className="text-background" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Our Story</Badge>
              <h2 className="text-4xl font-bold mb-6">Where Ocean Meets Artistry</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Reef & Rocks Jewelry Boutique was born from a deep love for the ocean and its endless treasures. 
                Each piece in our collection is carefully handcrafted using stones and shells personally selected 
                from beaches around the world.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe that jewelry should tell a story – your story. Every stone we wrap, every shell we 
                polish carries with it the whispers of waves and the warmth of sun-soaked shores.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">100% Handmade</h4>
                  <p className="text-sm text-muted-foreground">Every piece crafted with care</p>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Natural Materials</h4>
                  <p className="text-sm text-muted-foreground">Authentic stones & shells</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-6xl">🐚</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <p className="font-semibold">Sustainable & Ethical</p>
                <p className="text-sm text-muted-foreground">Responsibly sourced materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="collection" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Featured Collection</Badge>
            <h2 className="text-4xl font-bold mb-4">Nature&apos;s Finest Treasures</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each piece is one-of-a-kind, just like the natural elements that inspire them
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <Card className="group hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-6xl">💎</p>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Ocean Stone Pendants</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Wire-wrapped beach stones with natural patterns and textures
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">$45-85</span>
                    <Button size="sm" variant="outline">
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Card 2 */}
            <Card className="group hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-6xl">🐚</p>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Shell Drop Earrings</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Delicate shells paired with natural fibers and beads
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">$35-65</span>
                    <Button size="sm" variant="outline">
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Card 3 */}
            <Card className="group hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-6xl">🌊</p>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Beach Glass Rings</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Smooth sea glass wrapped in sterling silver wire
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">$55-95</span>
                    <Button size="sm" variant="outline">
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View Full Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Get in Touch</Badge>
              <h2 className="text-4xl font-bold mb-4">Let&apos;s Create Something Beautiful</h2>
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
                  <a href="mailto:reefandrockjewelry@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
                  <a href="https://instagram.com/reef.and.rocks.jewelry" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
              <h3 className="text-2xl font-bold mb-4">Join Our Reef & Rocks Family</h3>
              <p className="text-muted-foreground mb-6">
                Get exclusive access to new collections and special offers
              </p>
              <Button size="lg">
                Shop Our Latest Collection
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/reef-and-rocks-logo.png"
                alt="Reef and Rocks"
                width={80}
                height={40}
                className="h-8 w-auto"
              />
              <span className="text-sm text-muted-foreground">© 2024 Reef & Rocks Jewelry</span>
            </div>
            <p className="text-sm text-muted-foreground italic">
              🌿 Jewelry crafted by nature, uniquely picked stones & shells 🐚
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}