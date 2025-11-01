# Mandala Foods - Production-Grade Next.js Application

A production-ready Next.js 14+ application for Mandala Foods, built with TypeScript, Tailwind CSS, and a domain-driven architecture designed for seamless future tRPC integration.

## 🎯 Project Overview

**Project Name:** Mandala Foods Website
**Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS v4
**Architecture:** Domain-Driven Design (DDD), Clean Architecture
**Future Integration:** Ready for tRPC + Prisma/Drizzle + Admin Panel

## ✨ Features

- 🚀 **Next.js 14+ App Router** with TypeScript strict mode
- 🎨 **Tailwind CSS v4** with comprehensive design system
- 📱 **Fully Responsive** mobile-first design
- ♿ **WCAG 2.1 AA Compliant** accessibility
- 🔍 **SEO Optimized** with metadata, Open Graph, and JSON-LD structured data
- 🏗️ **Domain-Driven Design** for maintainable, scalable code
- 🔌 **Service Layer Abstraction** ready for API integration
- 📊 **Production-Ready** with proper error handling
- 🎯 **Type-Safe** end-to-end TypeScript coverage

## 📁 Project Structure

```
mandala-foods-app/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx            # Homepage
│   │   ├── who-we-are/         # Who We Are page
│   │   ├── our-approach/       # Our Approach page
│   │   ├── our-stories/        # Our Stories page
│   │   ├── recipe-corner/      # Recipe Corner page
│   │   ├── not-found.tsx       # 404 page
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   └── robots.ts           # Robots.txt
│   │
│   ├── components/             # React components
│   │   ├── layout/             # Navbar, Footer
│   │   ├── sections/           # Page sections
│   │   └── ui/                 # Base UI components
│   │
│   ├── domains/                # Domain layer (DDD)
│   │   ├── navigation/         # Navigation logic
│   │   ├── content/            # Content service
│   │   └── seo/                # SEO metadata
│   │
│   ├── lib/                    # Utilities
│   ├── config/                 # Configuration
│   └── styles/                 # Global styles
│
└── public/                     # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🏗️ Architecture

### Domain-Driven Design

The project follows DDD with interface-based services:

```typescript
// Content flows through abstraction layer
interface IContentService {
  getHomePageContent(): Promise<HomePageContent>;
}

// Phase 1: Static implementation
class StaticContentService implements IContentService { }

// Phase 2: tRPC implementation (future - drop-in replacement!)
class TRPCContentService implements IContentService { }
```

This makes future API integration trivial!

## 🎨 Design System

### Typography
- Responsive with `clamp()`
- System font + Inter
- Proper hierarchy

### Components
- Button, Card, Container
- Heading, Text, Link
- Section components

## 📱 Pages

1. **Homepage** - Video hero, products, story, mission, impact
2. **Who We Are** - Story, values, team
3. **Our Approach** - Circle of change, impact
4. **Our Stories** - Farmer & HORECA stories
5. **Recipe Corner** - Recipes

## 🔍 SEO Features

✅ Dynamic metadata
✅ Open Graph tags
✅ JSON-LD structured data
✅ Semantic HTML5
✅ Sitemap & robots.txt

## 📦 Next Steps

### Add Content
1. Replace placeholder images in `public/`
2. Update content in `src/domains/content/data/`

### Phase 2 (Future)
1. Set up tRPC backend
2. Add Prisma/Drizzle ORM
3. Build admin panel
4. Implement blog posts

## 📝 Scripts

```bash
npm run dev          # Development
npm run build        # Production build
npm start            # Production server
npm run lint         # Lint code
```

## 🎯 Success Criteria

✅ Builds without errors
✅ All pages navigable
✅ Dropdowns work on hover
✅ SEO metadata complete
✅ Type-safe code
✅ Ready for tRPC integration
✅ Clean architecture

**Ready for production! 🚀**

---

Built with ❤️ for Mandala Foods
