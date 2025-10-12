# React Template Project

A modern, scalable React application built with Next.js, featuring a well-structured component architecture and enterprise-ready tooling.

## Architecture Principles

This project follows several key architectural principles to ensure maintainability, scalability, and developer experience:

### 1. Feature-Based Organization

Components are organized by feature rather than file type, keeping related functionality together.

### 2. Co-location Principle

Related files (components, styles, hooks, utilities) are placed in the same directory for better maintainability.

### 3. Single Responsibility

Each component and module has a clear, focused purpose with minimal dependencies.

### 4. Atomic Design Influence

Components are structured from atomic elements (icons) to complex organisms (layouts).

### 5. Index File Pattern

Clean imports using `index.tsx` files as entry points for each component directory.

### 6. SOLID Principles

The codebase adheres to SOLID design principles for maintainable and extensible code:

- **Single Responsibility** - Each component, hook, and service has one clear purpose
- **Open/Closed** - Components are open for extension through composition, closed for modification
- **Liskov Substitution** - Service implementations can be substituted without breaking functionality
- **Interface Segregation** - Specific, focused interfaces rather than large, monolithic ones
- **Dependency Inversion** - Components depend on abstractions (hooks, stores) not concrete implementations

### 7. File Naming Consistency

Consistent naming conventions across the entire codebase:

- **Components** - PascalCase with `index.tsx` as main export (`Header/index.tsx`)
- **Hooks** - camelCase starting with `use` (`useHeader.ts`, `useNavigation.ts`)
- **Interfaces** - PascalCase with `.interface.ts` suffix (`header.interface.ts`)
- **Enums** - camelCase with `.enum.ts` suffix (`sideNav.enum.ts`)
- **Services** - camelCase with `.service.ts` suffix (`template.service.ts`)
- **Styles** - kebab-case with `.module.scss` suffix (`header.module.scss`)
- **Utils** - camelCase descriptive names (`generateToast.ts`, `parseArray.ts`)
- **Constants** - camelCase descriptive names (`appTitle.ts`, `language.ts`)

## Project Structure

```
src/
├── component/                    # Reusable UI components
│   ├── Auth/                    # Authentication components
│   │   ├── index.tsx
│   │   ├── auth.module.scss
│   │   └── hooks.ts
│   ├── Header/                  # Header with user controls
│   │   ├── index.tsx
│   │   ├── header.module.scss
│   │   ├── LanguageSwitcher.tsx
│   │   ├── ThemeSwitcher.tsx
│   │   └── useHeader.ts
│   ├── Sidebar/                 # Navigation sidebar
│   │   ├── index.tsx
│   │   └── sidebar.module.scss
│   └── icons/                   # SVG icon components
│       ├── index.ts
│       └── SignoutIcon.tsx
├── common/                      # Shared constants and configurations
│   ├── appTitle.ts
│   ├── language.ts
│   └── sideMenu.ts
├── context/                     # React context providers
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
├── enum/                        # TypeScript enums
│   ├── request.enum.ts
│   ├── service.enum.ts
│   └── sideNav.enum.ts
├── hooks/                       # Custom React hooks
│   ├── useNavigation.ts
│   ├── useStoredTheme.ts
│   └── useLanguageState.ts
├── interface/                   # TypeScript interfaces
│   ├── header.interface.ts
│   ├── store.interface.ts
│   └── userData.interface.ts
├── Layout/                      # Layout components
│   ├── index.tsx
│   └── layout.module.scss
├── lib/                         # Third-party configurations
│   ├── i18n.ts
│   └── url.builder.ts
├── pages/                       # Next.js pages (routing)
│   ├── dashboard/
│   ├── login/
│   └── _app.tsx
├── services/                    # API service functions
│   ├── api.service.ts
│   └── template.service.ts
├── store/                       # Zustand state management
│   └── useCounterStore.ts
├── styles/                      # Global styles and themes
│   └── globals.scss
└── utils/                       # Helper functions
    ├── pattern/
    ├── generateToast.ts
    └── parseArray.ts
```

## Technology Stack & Rationale

### Core Framework

- **Next.js 15** - Full-stack React framework with SSR, routing, and optimization
- **React 19** - Latest React with concurrent features and improved performance
- **TypeScript** - Type safety and better developer experience

### State Management

- **Zustand** - Lightweight, simple state management
  - Minimal boilerplate compared to Redux
  - Excellent TypeScript support
  - No providers needed, direct store access
  - Perfect for small to medium applications

### UI & Styling

- **PrimeReact** - Enterprise-grade component library

  - Comprehensive component set
  - Built-in accessibility features
  - Theming system with CSS variables
  - Professional design out of the box

- **SCSS** - Enhanced CSS with variables, nesting, and mixins

  - CSS Modules for component-scoped styles
  - Better organization than plain CSS
  - Powerful preprocessing features

- **Tailwind CSS** - Utility-first CSS framework for rapid development

### Data Fetching

- **SWR** - Data fetching with caching, revalidation, and error handling
  - Automatic caching and background updates
  - Built-in error and loading states
  - Optimistic updates and mutations
  - Better UX with stale-while-revalidate strategy

### Internationalization

- **react-i18next** - Internationalization framework
  - Dynamic language switching
  - Namespace organization
  - Lazy loading of translations
  - Pluralization and interpolation support

### HTTP Client

- **Axios** - Promise-based HTTP client
  - Request/response interceptors
  - Automatic JSON parsing
  - Better error handling than fetch
  - Request cancellation support

### Development Tools

- **Biome** - Fast linter and formatter
  - Faster than ESLint + Prettier combination
  - Single tool for linting and formatting
  - Better performance and consistency

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code
npm run format
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Key Features

- **Responsive Design** - Mobile-first approach with PrimeReact components
- **Theme Support** - Light/dark theme switching with CSS variables
- **Internationalization** - Multi-language support with dynamic switching
- **Type Safety** - Full TypeScript coverage with strict configuration
- **Performance** - Optimized with Next.js SSR and SWR caching
- **Accessibility** - WCAG compliant components and proper ARIA labels
- **Developer Experience** - Hot reload, fast linting, and consistent formatting

## Code Quality Standards

### SOLID Principles Implementation

- **Components** - Extract business logic into custom hooks (SRP)
- **Interfaces** - Create specific, focused interfaces (ISP)
- **Services** - Separate concerns (Auth vs User services)
- **Hooks** - Single responsibility for state and side effects
- **Composition** - Prefer composition over inheritance

### Example Structure

```typescript
// ✅ Good - Single responsibility
const useHeader = () => {
  // Only header-related logic
};

// ✅ Good - Focused interface
interface UserButtonProps {
  className: string;
  onClick: (event: React.MouseEvent) => void;
  children: React.ReactNode;
}

// ✅ Good - Specific service
interface IAuthService {
  login(credentials: AuthCredentials): Promise<AuthResponse>;
  logout(): Promise<void>;
}
```

## File Naming Standards

### Strict Naming Conventions
- **Components**: `ComponentName/index.tsx` + `componentName.module.scss`
- **Hooks**: `useFeatureName.ts` (always start with 'use')
- **Interfaces**: `featureName.interface.ts` (descriptive + .interface suffix)
- **Enums**: `featureName.enum.ts` (descriptive + .enum suffix)
- **Services**: `featureName.service.ts` (descriptive + .service suffix)
- **Utils**: `descriptiveName.ts` (camelCase, descriptive)
- **Constants**: `descriptiveName.ts` (camelCase, clear purpose)

### Folder Organization Rules
- **Feature-based grouping** - Related files stay together
- **Index files** - Always use `index.tsx` for main component exports
- **Co-location** - Styles, hooks, and components in same directory
- **Consistent depth** - Avoid deeply nested folder structures

## Contributing

1. **Follow naming conventions** - Use the exact patterns above
2. **Maintain folder structure** - Keep related files together
3. **Use TypeScript** - All new files must be TypeScript
4. **Apply SOLID principles** - Single responsibility, focused interfaces
5. **Extract business logic** - Use custom hooks for component logic
6. **Create specific interfaces** - Avoid large, monolithic interfaces
7. **Add accessibility** - Include proper ARIA labels and attributes
8. **Use CSS modules** - Component-scoped styling only
9. **Run quality checks** - `npm run lint` and `npm run format` before commits

## Deployment

Deploy easily on [Vercel](https://vercel.com/new) or any platform supporting Next.js applications.
