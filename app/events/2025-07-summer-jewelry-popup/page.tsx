import { Instagram, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PopupEvent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 via-background to-muted/30">
      {/* Background texture */}
      <div className="fixed inset-0 opacity-10">
        <Image
          src="/underwater-watercolor.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative flex items-center justify-center min-h-screen p-4">
        <div className="max-w-2xl w-full mx-auto py-16">
          {/* Event Poster Style Layout */}
          <div className="bg-card/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-8 md:p-12 text-center">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                You&apos;re Invited to a
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                Jewelry Pop-Up Event
              </h1>
              <div className="h-1 w-24 bg-primary mx-auto mt-4" />
            </div>

            {/* Body Content */}
            <div className="p-8 md:p-12 space-y-8">
              {/* Date & Time Block */}
              <div className="text-center space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  Saturday, July 12
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  10 AM - 3 PM
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-2xl">🐚</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* About */}
              <div className="text-center space-y-4">
                <h2 className="text-xl font-semibold">
                  Reef & Rocks Jewelry Boutique
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                  Join 14-year-old artisan Sarah Bolivar for an exclusive showcase 
                  of handcrafted jewelry. Each piece is lovingly created using 
                  hand-picked stones and shells, transformed into unique wearable art.
                </p>
              </div>

              {/* Location */}
              <div className="bg-muted/50 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm uppercase tracking-wide">Location</span>
                </div>
                <p className="font-medium text-lg">
                  1440 Falkirk Ln<br />
                  Kennesaw, GA 30152
                </p>
              </div>

              {/* Instagram */}
              <div className="text-center space-y-4 pt-4">
                <p className="text-sm text-muted-foreground">
                  Follow Sarah&apos;s jewelry journey
                </p>
                <Link
                  href="https://www.instagram.com/reef.and.rocks.jewelry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Instagram className="h-5 w-5" />
                  @reef.and.rocks.jewelry
                </Link>
              </div>

              {/* Featured Images */}
              <div className="grid grid-cols-3 gap-2 pt-4">
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src="/product-images/natural-scallop-shell-pendant-white-cord-8c4d2.jpeg"
                    alt="Shell pendant"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src="/product-images/wire-wrapped-pearl-pendant-necklace-3e7c4.jpeg"
                    alt="Pearl pendant"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src="/product-images/leather-bracelet-turquoise-beads-copper-7c3e1.jpeg"
                    alt="Turquoise bracelet"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-muted/30 p-6 text-center">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Clock className="h-4 w-4" />
                See you there!
              </p>
            </div>
          </div>

          {/* Small print */}
          <p className="text-center text-xs text-muted-foreground mt-8">
            Hand-crafted jewelry • Ocean-inspired designs • One-of-a-kind pieces
          </p>
        </div>
      </div>
    </div>
  );
}