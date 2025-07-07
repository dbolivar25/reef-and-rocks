export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'shell-pearl' | 'stone-crystal' | 'bracelet-bangle';
  image: string;
  emoji: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  description: string;
  priceRange: string;
  emoji: string;
  gradientFrom: string;
  gradientTo: string;
  featuredImage: string;
}

export const products: Product[] = [
  // Necklaces - Shell Collection
  {
    id: 1,
    name: "Natural Scallop Shell Pendant",
    description: "Pink and cream scallop shell on white cord",
    price: "$20",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZPEY5X6pDvVSOmxB6sqMXZy9UHnGlEALeTN71",
    emoji: "🐚",
    gradientFrom: "from-pink-50",
    gradientTo: "to-rose-100",
  },
  {
    id: 2,
    name: "Coral Scallop Shell Necklace",
    description: "Wire-wrapped coral shell with gold accents",
    price: "$18",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZO7FKfRUJxuwpmteKZnI6Q4Hjql3Fg0i8PAMb",
    emoji: "🦪",
    gradientFrom: "from-coral-50",
    gradientTo: "to-orange-100",
  },
  {
    id: 3,
    name: "White Cowrie Shell Pendant",
    description: "Classic cowrie shell with gold cross wire wrap",
    price: "$18",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZIVrxj6Xr127bhajn3IfVEJDU9u6KcTStiMLm",
    emoji: "🐚",
    gradientFrom: "from-stone-50",
    gradientTo: "to-gray-100",
  },
  {
    id: 4,
    name: "Brown Cone Shell Pendant",
    description: "Natural cone shell with white spots",
    price: "$12",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZlzCqsM7IYk6xyVU2h80NRpacqt75mgHfvXCK",
    emoji: "🏖️",
    gradientFrom: "from-amber-50",
    gradientTo: "to-yellow-100",
  },
  {
    id: 5,
    name: "Pink Striped Fan Shell",
    description: "Delicate fan shell wrapped in copper wire",
    price: "$18",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZ5kI0DMAxXHW3tDrLPkbEaZlmUTiynzwKvS5o",
    emoji: "🌺",
    gradientFrom: "from-pink-50",
    gradientTo: "to-fuchsia-100",
  },
  {
    id: 6,
    name: "Orange Conch Shell Necklace",
    description: "Vibrant conch shell piece with gold wire",
    price: "$18",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZZTPswm5Yto8uSgZOiwL9a7p4WcjyRBb2Tk0n",
    emoji: "🍊",
    gradientFrom: "from-orange-50",
    gradientTo: "to-amber-100",
  },
  {
    id: 7,
    name: "White Spiral Shell Pendant",
    description: "Elegant spiral shell wrapped in gold",
    price: "$16",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZkU58Q7EFo4NRzdTSJKfl2tpMHOq35rYkEUA7",
    emoji: "🌀",
    gradientFrom: "from-zinc-50",
    gradientTo: "to-slate-100",
  },
  {
    id: 8,
    name: "Spotted Limpet Shell",
    description: "Natural limpet shell on pink leather cord",
    price: "$16",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZ5GwniOAxXHW3tDrLPkbEaZlmUTiynzwKvS5o",
    emoji: "🎯",
    gradientFrom: "from-pink-50",
    gradientTo: "to-purple-100",
  },
  {
    id: 9,
    name: "White Ribbed Shell Necklace",
    description: "Textured shell on turquoise cord",
    price: "$18",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZvpcmlgWmhrVg4cK3vqU68kAZeLaTHYsSzxFn",
    emoji: "🌊",
    gradientFrom: "from-cyan-50",
    gradientTo: "to-blue-100",
  },

  // Necklaces - Stone Collection
  {
    id: 10,
    name: "Wire-Wrapped Pearl Pendant",
    description: "Freshwater pearl in delicate gold wire",
    price: "$20",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZSWzUHRfPtRwNKC9JpFgvrMe8H6xzhZ4Oails",
    emoji: "💎",
    gradientFrom: "from-yellow-50",
    gradientTo: "to-amber-100",
  },
  {
    id: 11,
    name: "Lapis Lazuli Gold Wire Necklace",
    description: "Deep blue lapis stone on white cord",
    price: "$20",
    category: "stone-crystal",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZmItEWgZGkSrGXVn6TMKpoaih07JE2fyIb5lB",
    emoji: "💙",
    gradientFrom: "from-blue-50",
    gradientTo: "to-indigo-100",
  },
  {
    id: 12,
    name: "Amber Sea Glass Pendant",
    description: "Genuine sea glass wrapped in gold wire",
    price: "$20",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZ2RsFyalBC0xAmoHwYhZGiR3PFVKJulE65gdT",
    emoji: "🟠",
    gradientFrom: "from-amber-50",
    gradientTo: "to-orange-100",
  },
  {
    id: 14,
    name: "Black Obsidian Pendant",
    description: "Polished obsidian on leather cord",
    price: "$20",
    category: "stone-crystal",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZ8sbuwz9SeNfvqXQAabOlgn62FkKGwypcWMZP",
    emoji: "⚫",
    gradientFrom: "from-gray-50",
    gradientTo: "to-slate-100",
  },
  {
    id: 15,
    name: "Rose Quartz Triangle",
    description: "Pink quartz wrapped in copper wire",
    price: "$20",
    category: "stone-crystal",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZIqKxS6OXr127bhajn3IfVEJDU9u6KcTStiML",
    emoji: "🌸",
    gradientFrom: "from-pink-50",
    gradientTo: "to-rose-100",
  },
  {
    id: 16,
    name: "Dark Stone Gold Wire Pendant",
    description: "Mystery stone wrapped in gold",
    price: "$20",
    category: "stone-crystal",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZXxaqClMPI2iYrD49kA8Q3HndtRUcby0K71zv",
    emoji: "🖤",
    gradientFrom: "from-zinc-50",
    gradientTo: "to-gray-100",
  },
  {
    id: 18,
    name: "White Coral Pendant",
    description: "Natural coral piece with gold bail",
    price: "$20",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZEIsJBhrLaWVv2Xwp0QcTN36kOsxq1f7ABolj",
    emoji: "🏝️",
    gradientFrom: "from-stone-50",
    gradientTo: "to-amber-100",
  },

  // More Shell Necklaces
  {
    id: 19,
    name: "White Shell Pieces Pendant",
    description: "Multiple shell fragments wrapped together",
    price: "$16",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZpKYD1j83UGwSi42yIqoN7LgKRVpvZAHchbOW",
    emoji: "🤍",
    gradientFrom: "from-gray-50",
    gradientTo: "to-blue-100",
  },
  {
    id: 20,
    name: "Purple Shell Cross Wire Pendant",
    description: "Purple tinted shell with copper cross pattern",
    price: "$16",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZtN6zo3gwnFL7oQC91c3f6j0SMzyGHdbUODRh",
    emoji: "🟣",
    gradientFrom: "from-purple-50",
    gradientTo: "to-pink-100",
  },
  {
    id: 21,
    name: "White Shell Black Leather Necklace",
    description: "Clean white shell with gold wire wrap",
    price: "$18",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZAjzwSEnuTe4ar91nyvUjoYBZXRlbE5P0scDw",
    emoji: "⚪",
    gradientFrom: "from-gray-50",
    gradientTo: "to-slate-100",
  },
  {
    id: 22,
    name: "Orange Striped Shell Necklace",
    description: "Vibrant striped shell with gold wire",
    price: "$16",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZZsKONj5Yto8uSgZOiwL9a7p4WcjyRBb2Tk0n",
    emoji: "🍑",
    gradientFrom: "from-orange-50",
    gradientTo: "to-pink-100",
  },
  {
    id: 23,
    name: "White Ridged Shell Pendant",
    description: "Textured ridged shell wrapped in gold",
    price: "$14",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZEGnHoBrLaWVv2Xwp0QcTN36kOsxq1f7ABolj",
    emoji: "🏔️",
    gradientFrom: "from-stone-50",
    gradientTo: "to-gray-100",
  },
  {
    id: 24,
    name: "Yellow Ridged Shell Necklace",
    description: "Golden yellow shell with wire wrap",
    price: "$20",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZleaw2Wt7IYk6xyVU2h80NRpacqt75mgHfvXC",
    emoji: "🌟",
    gradientFrom: "from-yellow-50",
    gradientTo: "to-amber-100",
  },
  {
    id: 26,
    name: "Pink Scallop Copper Wire Necklace",
    description: "Delicate pink scallop with copper accents",
    price: "$18",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZMhvaeDqCuIJsASHPtVWorg7c2wYmzxnK4E60",
    emoji: "🌷",
    gradientFrom: "from-pink-50",
    gradientTo: "to-orange-100",
  },
  {
    id: 27,
    name: "Pink White Shell Necklace",
    description: "Two-toned shell wrapped in gold wire",
    price: "$12",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZkDBvkWEFo4NRzdTSJKfl2tpMHOq35rYkEUA7",
    emoji: "🎀",
    gradientFrom: "from-pink-50",
    gradientTo: "to-purple-100",
  },
  {
    id: 28,
    name: "White Textured Coral Pendant",
    description: "Textured coral piece on black leather",
    price: "$20",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZ0zDPTFiFj7xeSEVQX4RA6wNiy2c1fdo3DzmW",
    emoji: "🪸",
    gradientFrom: "from-gray-50",
    gradientTo: "to-zinc-100",
  },
  {
    id: 29,
    name: "Natural Hole Shell Necklace",
    description: "Shell with natural hole, copper wire wrap",
    price: "$12",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZImzk95Xr127bhajn3IfVEJDU9u6KcTStiMLm",
    emoji: "🕳️",
    gradientFrom: "from-olive-50",
    gradientTo: "to-green-100",
  },
  {
    id: 30,
    name: "White Spotted Shell Pendant",
    description: "Spotted pattern shell on black cord",
    price: "$18",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZXKbihyBMPI2iYrD49kA8Q3HndtRUcby0K71z",
    emoji: "⚡",
    gradientFrom: "from-gray-50",
    gradientTo: "to-blue-100",
  },
  {
    id: 31,
    name: "Purple Spotted Shell Necklace",
    description: "Purple and cream spotted shell",
    price: "$20",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZQMgK32OxwyCBI83sf9KdGXeMjWaVZkhT0vN5",
    emoji: "🍇",
    gradientFrom: "from-purple-50",
    gradientTo: "to-pink-100",
  },
  {
    id: 32,
    name: "Textured White Shell Pendant",
    description: "Shell with natural texture patterns",
    price: "$18",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZ1KYoJSjDlxKP8XWfGCRUuHgz2N6bFILhqVyc",
    emoji: "❄️",
    gradientFrom: "from-blue-50",
    gradientTo: "to-gray-100",
  },
  {
    id: 33,
    name: "Striped Limpet Shell Necklace",
    description: "Black and white striped limpet shell",
    price: "$14",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZlTvd2O7IYk6xyVU2h80NRpacqt75mgHfvXCK",
    emoji: "🦓",
    gradientFrom: "from-gray-50",
    gradientTo: "to-slate-100",
  },
  {
    id: 34,
    name: "Gray Cockle Shell Pendant",
    description: "Ridged gray cockle shell with gold wire",
    price: "$20",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZLoL6xfkVm2AfGcZ1DC4auO8dRNb6tpxHhjYe",
    emoji: "🌫️",
    gradientFrom: "from-gray-50",
    gradientTo: "to-blue-100",
  },
  {
    id: 35,
    name: "White Shell Orange Teardrop",
    description: "White shell with orange accent detail",
    price: "$14",
    category: "shell-pearl",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZLHoJdWkVm2AfGcZ1DC4auO8dRNb6tpxHhjYe",
    emoji: "💧",
    gradientFrom: "from-orange-50",
    gradientTo: "to-red-100",
  },

  // Bracelets
  {
    id: 36,
    name: "Turquoise Beads Leather Bracelet",
    description: "Bright turquoise with copper accents",
    price: "$10",
    category: "bracelet-bangle",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZJB2HCKwRXMfwN0pbGZdLIEPUhcqDiQsvjylg",
    emoji: "🌊",
    gradientFrom: "from-cyan-50",
    gradientTo: "to-blue-100",
  },
  {
    id: 37,
    name: "Black Stone Leather Bracelet",
    description: "Single black stone accent on leather",
    price: "$10",
    category: "bracelet-bangle",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZeiw3novn3CrPQvDZfFBAs0y1iTqVhak68o7N",
    emoji: "⚫",
    gradientFrom: "from-gray-50",
    gradientTo: "to-slate-100",
  },
  {
    id: 38,
    name: "Bright Turquoise Glass Bracelet",
    description: "Vibrant glass beads on leather cord",
    price: "$10",
    category: "bracelet-bangle",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZJTVHobRXMfwN0pbGZdLIEPUhcqDiQsvjylg6",
    emoji: "💠",
    gradientFrom: "from-blue-50",
    gradientTo: "to-cyan-100",
  },
  {
    id: 39,
    name: "Rose Quartz Cream Bracelet",
    description: "Pink quartz with cream accent beads",
    price: "$10",
    category: "bracelet-bangle",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZZZErIJ5Yto8uSgZOiwL9a7p4WcjyRBb2Tk0n",
    emoji: "🌸",
    gradientFrom: "from-pink-50",
    gradientTo: "to-rose-100",
  },

  // Bangle
  {
    id: 40,
    name: "Gold Bangle with Jade Beads",
    description: "Thin gold bangle with green jade accents",
    price: "$7",
    category: "bracelet-bangle",
    image: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZaWMUhWbeBWYfil8PJZFpEgq6Gtunjvx0dIs1",
    emoji: "💚",
    gradientFrom: "from-emerald-50",
    gradientTo: "to-green-100",
  },
];

// Product categories for the showcase
export const productCategories: ProductCategory[] = [
  {
    id: 1,
    name: "Shell & Pearl Necklaces",
    description: "Wire-wrapped shells, pearls, and beach treasures",
    priceRange: "$12-20",
    emoji: "🐚",
    gradientFrom: "from-blue-50",
    gradientTo: "to-cyan-100",
    featuredImage: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZPEY5X6pDvVSOmxB6sqMXZy9UHnGlEALeTN71",
  },
  {
    id: 2,
    name: "Stone & Crystal Pendants",
    description: "Natural stones and crystals wrapped in gold and copper",
    priceRange: "$20",
    emoji: "💎",
    gradientFrom: "from-purple-50",
    gradientTo: "to-pink-100",
    featuredImage: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZmItEWgZGkSrGXVn6TMKpoaih07JE2fyIb5lB",
  },
  {
    id: 3,
    name: "Leather Bracelets & Bangles",
    description: "Handcrafted bracelets with natural stone accents",
    priceRange: "$7-10",
    emoji: "🌊",
    gradientFrom: "from-amber-50",
    gradientTo: "to-orange-100",
    featuredImage: "https://2cx1pnlrdg.ufs.sh/f/7vK76TbaYFmZJB2HCKwRXMfwN0pbGZdLIEPUhcqDiQsvjylg",
  },
];

// Helper function to get products by category
export function getProductsByCategory(category: 'shell-pearl' | 'stone-crystal' | 'bracelet-bangle') {
  return products.filter(product => product.category === category);
}

// Helper function to get featured products
export function getFeaturedProducts(limit: number = 6) {
  // Return a selection of diverse products
  const featured = [
    products[0],  // Natural Scallop Shell
    products[10], // Lapis Lazuli Gold Wire Necklace
    products[32], // Turquoise Bracelet
    products[5],  // Orange Conch Shell
    products[12], // Rose Quartz Triangle
    products[36], // Gold Bangle
  ];
  return featured.slice(0, limit);
}

// Helper function to get product by ID
export function getProductById(id: number) {
  return products.find(product => product.id === id);
}