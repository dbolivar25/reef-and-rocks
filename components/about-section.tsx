import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4">
              Our Story
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Where Ocean Meets Artistry
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Reef & Rocks Jewelry Boutique was born from a deep love for the
              ocean and its endless treasures. Each piece in our collection is
              carefully handcrafted using stones and shells personally
              selected from beaches around the world.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We believe that jewelry should tell a story – your story. Every
              stone we wrap, every shell we polish carries with it the
              whispers of waves and the warmth of sun-soaked shores.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-1">100% Handmade</h4>
                <p className="text-sm text-muted-foreground">
                  Every piece crafted with care
                </p>
              </div>
              <div className="bg-secondary/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-1">Natural Materials</h4>
                <p className="text-sm text-muted-foreground">
                  Authentic stones & shells
                </p>
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
              <p className="text-sm text-muted-foreground">
                Responsibly sourced materials
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}