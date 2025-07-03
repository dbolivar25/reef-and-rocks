import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CollectionProvider } from "@/lib/collection-context";
import { CollectionModal } from "@/components/collection-modal";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reef & Rocks Jewelry | Handcrafted Ocean-Inspired Jewelry",
  description:
    "Uniquely picked stones & shells transformed into wearable art. Handcrafted jewelry inspired by nature and the ocean's treasures.",
  keywords: [
    "handmade jewelry",
    "ocean jewelry",
    "beach jewelry",
    "natural stone jewelry",
    "shell jewelry",
    "wire wrapped jewelry",
    "artisan jewelry",
    "sustainable jewelry",
    "custom jewelry",
    "reef and rocks",
  ],
  authors: [{ name: "Reef & Rocks Jewelry" }],
  creator: "Reef & Rocks Jewelry",
  publisher: "Reef & Rocks Jewelry",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.reef-and-rocks.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Reef & Rocks Jewelry | Handcrafted Ocean-Inspired Jewelry",
    description:
      "Uniquely picked stones & shells transformed into wearable art. Handcrafted jewelry inspired by nature and the ocean's treasures.",
    url: "https://www.reef-and-rocks.com",
    siteName: "Reef & Rocks Jewelry",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reef & Rocks Jewelry - Handcrafted Ocean-Inspired Jewelry",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reef & Rocks Jewelry | Handcrafted Ocean-Inspired Jewelry",
    description:
      "Uniquely picked stones & shells transformed into wearable art. Each piece tells a story of the ocean's treasures.",
    images: ["/og-image.png"],
    creator: "@reefandrocks",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "jewelry",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CollectionProvider>
          <Navigation />
          {children}
          <Footer />
          <CollectionModal />
        </CollectionProvider>
      </body>
    </html>
  );
}
