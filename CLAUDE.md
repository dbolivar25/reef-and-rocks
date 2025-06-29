# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Reef & Rocks is a Next.js 15 e-commerce website showcasing handcrafted jewelry. The site features a product catalog with filtering, collection management, and order inquiry functionality.

## Development Commands

```bash
# Development server with Turbopack (faster builds)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15.3.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom theme
- **UI Components**: Custom components using Radix UI primitives and shadcn/ui patterns
- **State Management**: React Context API
- **Animations**: Framer Motion

### Project Structure
- `/app` - Next.js app router pages and layouts
- `/components` - Reusable React components
- `/components/ui` - Base UI components (shadcn/ui pattern)
- `/lib` - Business logic, data, and utilities
- `/public/product-images` - Product photography assets

### Key Architectural Decisions

1. **Product Data Management**: Products are stored as TypeScript constants in `/lib/products.ts` rather than a database. This includes:
   - Product definitions with title, price, images, categories
   - Helper functions like `getProductsByCategory()`
   - Type definitions for products

2. **State Management**: Collection/cart functionality uses React Context (`CollectionProvider` in `/lib/collection-context.tsx`) to manage selected items across the application.

3. **Component Pattern**: UI components follow the shadcn/ui pattern - composable primitives with Tailwind styling. Components use `cn()` utility for className merging.

4. **Styling System**: 
   - Tailwind CSS v4 with custom theme configuration
   - CSS custom properties defined in `globals.css`
   - Consistent use of design tokens for colors, spacing, animations

5. **SEO Optimization**: Comprehensive metadata setup in layout files with Open Graph tags, structured data, and proper semantic HTML.

## Development Guidelines

### Adding New Products
Products are managed in `/lib/products.ts`. Follow the existing `Product` type structure and add to the `products` array.

### Creating Components
1. UI primitives go in `/components/ui/`
2. Page sections and features go in `/components/`
3. Use the existing component patterns with TypeScript, forwardRef when needed, and Tailwind classes

### Styling Approach
- Use Tailwind utility classes
- Define custom utilities in `globals.css` when needed
- Maintain consistency with existing design tokens
- Mobile-first responsive design

### Event Pages
Event-specific pages (like popup shops) go in `/app/events/[event-name]/` with their own layouts and components as needed.