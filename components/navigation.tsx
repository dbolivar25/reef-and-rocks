"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 bg-background/80 backdrop-blur-md ${!mobileMenuOpen ? "border-b" : ""}`}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/#" className="block">
              <Image
                src="/reef-and-rocks-logo.png"
                alt="Reef and Rocks"
                width={180}
                height={90}
                className="h-16 md:h-18 w-auto hover:drop-shadow-[0_0_8px_rgba(8,145,178,0.1)] transition-all"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/#collection"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Collection
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link
                href="https://www.instagram.com/reef.and.rocks.jewelry/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4 mr-2" />
                Follow Us
              </Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden border-b overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/#about"
                className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#collection"
                className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Collection
              </Link>
              <Link
                href="/#contact"
                className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <Link
                    href="https://www.instagram.com/reef.and.rocks.jewelry/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Instagram className="h-4 w-4 mr-2" />
                    Follow Us
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
