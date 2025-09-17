# Overview

This is a modern landing page design for Markit.one, a SaaS platform that showcases multiple productivity tools including FormEase, QRBee, and HackHire. The application is built as a Next.js static website with a focus on visual appeal, featuring gradient backgrounds, animations, and a comprehensive UI component library. The design emphasizes modern aesthetics with dark themes, glassmorphism effects, and smooth transitions to create an engaging user experience.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses Next.js 15 with React 19 in App Router mode, configured for standalone output deployment. The architecture follows a component-based design with a clear separation between UI components and page-specific components. The main page structure includes a Hero section, Products showcase, and Footer with CTA elements.

## Styling and Design System
The project implements a comprehensive design system using Tailwind CSS with custom color variables and themes. It includes a complete shadcn/ui component library providing over 40 pre-built, accessible UI components. The design emphasizes dark themes with gradient backgrounds, animated elements, and glassmorphism effects for a modern aesthetic.

## Component Structure
The UI components are organized in a modular structure under `/src/app/components/ui/`, with each component following Radix UI primitives for accessibility. Page-specific components like Hero, ProductCard, and Footer are placed at `/src/app/components/` level. All components use TypeScript with proper type definitions and className merging utilities.

## Development Configuration
The project is configured with TypeScript, ESLint, and modern build tools. Next.js is set up with standalone output mode, disabled powered-by headers, and React Strict Mode. The build process includes Turbopack configuration with canvas module aliasing for compatibility.

## Static Site Generation
The application is designed as a static landing page without dynamic data fetching or server-side functionality. All content is statically generated at build time, making it suitable for deployment on static hosting platforms or CDNs.

# External Dependencies

## UI Framework Dependencies
- **@radix-ui/* packages**: Comprehensive collection of headless UI primitives for accessibility and keyboard navigation
- **lucide-react**: Icon library providing consistent iconography throughout the application
- **class-variance-authority**: Utility for creating type-safe component variants
- **clsx**: Conditional className utility for dynamic styling

## Styling Dependencies
- **tailwindcss**: Utility-first CSS framework for styling
- **next-themes**: Theme switching functionality (though currently only dark theme is implemented)

## Form and Interaction Libraries
- **react-hook-form**: Form state management and validation
- **react-day-picker**: Date picker component
- **input-otp**: OTP input functionality
- **cmdk**: Command palette component

## Carousel and Layout
- **embla-carousel-react**: Carousel/slider functionality
- **react-resizable-panels**: Resizable panel layouts
- **recharts**: Chart and data visualization components

## Development Tools
- **TypeScript**: Type safety and enhanced developer experience
- **Next.js**: React framework with App Router and static generation capabilities