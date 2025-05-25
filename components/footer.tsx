import Image from "next/image";

export function Footer() {
  return (
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
            <span className="text-sm text-muted-foreground">
              © 2025 Reef & Rocks Jewelry
            </span>
          </div>
          <p className="text-sm text-muted-foreground italic">
            Jewelry crafted by nature, uniquely picked stones & shells 🐚
          </p>
        </div>
      </div>
    </footer>
  );
}