# Empowering U

Empowering U is a React-based business services website for helping entrepreneurs and businesses in India with registration, compliance, business support, and growth services.

The project combines a component-driven React frontend with Tailwind CSS for layout and responsive utilities, CSS Modules for component-specific styling, Motion for page transitions and animation, and Supabase for dynamic service/commerce data.

## Features

- Responsive marketing website for business services
- Homepage with:
  - Hero section
  - Business pathway cards
  - Trust/benefit bar
  - Service catalogue preview
  - Process section
  - Call-to-action section
- Service catalogue with:
  - Category filtering
  - Responsive product cards
  - Dynamic service pricing/status from Supabase
  - Individual service pages
- Individual service pages with:
  - Product hero
  - Service overview
  - Process/journey
  - Required documents
  - FAQs
- Campaign landing pages:
  - Start Your Business
  - Grow Your Business
- Contact page with:
  - Hero
  - Contact form
  - Process information
  - FAQs
  - CTA
- Responsive mobile navigation with an off-canvas sliding menu
- Active navigation highlighting
- Page transitions using Motion
- Reduced-motion support through Motion's `reducedMotion="user"` configuration
- Reusable buttons, cards, headings, containers, forms, process components, and illustration components
- SVG illustrations imported as React components through SVGR
- Centralized design tokens for colors, typography, spacing, radii, shadows, and motion
- Supabase-backed service/commerce data

## Tech Stack

### Frontend

- React 19
- React Router DOM 7
- Vite
- Tailwind CSS 4
- CSS Modules
- Motion
- Lucide React
- Phosphor Icons
- Montserrat via `@fontsource/montserrat`
- `clsx`

### Backend / Data

- Supabase
- `@supabase/supabase-js`

Supabase is currently used to retrieve active service/commerce information such as:

- price
- price type
- currency
- merchant product ID
- merchant price ID
- active/inactive status

Static service content remains in the frontend data layer and is merged with the corresponding Supabase record at runtime.

### Development tooling

- ESLint
- Prettier
- SVGR
- Vite React plugin
- Tailwind Vite plugin

## Project Structure

```text
empowering-u/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── app/
│   │   ├── App.jsx
│   │   └── routes.jsx
│   │
│   ├── assets/
│   │   ├── logos
│   │   ├── illustrations
│   │   └── other static assets
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Catalogue/
│   │   ├── CataloguePage/
│   │   ├── CampaignPage/
│   │   ├── Contact/
│   │   ├── Checkout/
│   │   ├── NotFound/
│   │   └── UIDesign/
│   │
│   ├── shared/
│   │   ├── components/
│   │   ├── data/
│   │   ├── Illustration/
│   │   ├── lib/
│   │   ├── motion/
│   │   └── styles/
│   │
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## Architecture

The application follows a page → section → component → data/asset pattern.

For example, an individual service page follows approximately:

```text
Route
  ↓
CataloguePage
  ↓
getService(slug)
  ├── static service definition
  └── Supabase commerce data
  ↓
ProductPageTemplate
  ├── ProductHero
  ├── OverviewSection
  ├── ProcessSection
  ├── DocumentsRequiredSection
  └── FAQSection
```

The shared `MainLayout` provides the global navigation, animated page outlet, and footer.

```text
MainLayout
├── Navbar
├── Animated page outlet
│   └── Current route/page
└── Footer
```

## Routing

Routes are defined in `src/app/routes.jsx`.

| Route | Page |
|---|---|
| `/` | Home |
| `/catalogue` | Service catalogue |
| `/catalogue/:slug` | Individual service page |
| `/contact` | Contact |
| `/start-your-business` | Start Your Business campaign |
| `/grow-your-business` | Grow Your Business campaign |
| `/uidesign` | UI design/reference page |
| `*` | Not Found |

The `/checkout` route exists in the routing file as commented-out code and is not currently active.

## Homepage

The homepage is composed from reusable sections:

```text
Home
├── Hero
├── PathwaySection
├── TrustBar
├── ServicesSection
├── ProcessSection
└── CTASection
```

Homepage content is primarily configured through:

- `src/shared/data/heroConfig.js`
- `src/shared/data/pathway.js`
- `src/shared/data/businessprocess.js`
- `src/shared/data/serviceinfo.js`
- `src/shared/data/ctaConfig.js`

## Service Catalogue

The catalogue contains 23 static service definitions under:

```text
src/shared/data/services/
```

Each service has its own data module. The collection is assembled in:

```text
src/shared/data/services/index.js
```

Catalogue categories are defined in:

```text
src/shared/data/services/catalogueInfo.js
```

Current categories are:

- Registration & Compliance
- Business Planning & Support
- Business Growth

The catalogue UI is composed of:

```text
CatalogueSection
└── CatalogueGrid
    ├── FilterTab
    └── ProductCard
```

The catalogue uses URL search parameters for category filtering.

For example:

```text
/catalogue?category=registration-compliance
```

## Service Data and Supabase

The project intentionally separates **website content** from **commerce data**.

Static service definitions contain the service presentation/content, while Supabase supplies dynamic commerce information.

`src/shared/lib/service.js` exposes:

```js
getService(slug)
getServices()
```

`getService(slug)`:

1. Finds the static service definition.
2. Queries the `services` table in Supabase.
3. Requires the service to be active.
4. Merges database pricing/commerce data with the static definition.

The returned service includes:

```text
price
priceType
commerce
├── currency
├── merchantProductId
└── merchantPriceId
```

This allows service content to remain version-controlled with the frontend while pricing and merchant identifiers can be managed dynamically.

## Supabase Configuration

Supabase is initialized in:

```text
src/shared/lib/supabase.js
```

The frontend expects these Vite environment variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Create a local `.env` file for development.

`.env` files are excluded from Git through `.gitignore`.

Do not commit private keys or service-role credentials to the repository.

## Campaign Pages

There are currently two campaign/bundle pages.

### Start Your Business

Route:

```text
/start-your-business
```

Content is defined in:

```text
src/shared/data/startyourbusinessprocess.js
```

The page includes:

- Campaign hero
- Bundle contents
- Benefits
- Four-step journey
- FAQs

### Grow Your Business

Route:

```text
/grow-your-business
```

Content is defined in:

```text
src/shared/data/growyourbusiness.js
```

The page includes:

- Campaign hero
- Bundle contents
- Benefits
- Four-step growth process
- FAQs

Both pages reuse the same component architecture.

## Product Pages

Individual catalogue services use a shared template:

```text
ProductPageTemplate
├── ProductHero
├── OverviewSection
├── ProcessSection
├── DocumentsRequiredSection
└── FAQSection
```

This keeps individual service pages consistent while allowing each service's data to provide its own:

- title
- description
- illustration
- highlights
- pricing
- overview
- process steps
- required documents
- FAQs

## Component System

Reusable UI components live under:

```text
src/shared/components/
```

Major component groups include:

- Button
- Navbar
- Footer
- Container
- SectionHeading
- Hero variants
- Cards
- Catalogue
- Process sections
- FAQ
- Contact form
- CTA
- TrustBar
- Overview
- Documents Required
- Illustrations

The project favors reusable components with data passed through props rather than duplicating page-specific markup.

## Styling Approach

The project uses both Tailwind CSS and CSS Modules.

### Tailwind is primarily used for

- layout
- flexbox
- grid
- spacing
- responsive breakpoints
- width/height
- positioning
- display utilities

### CSS Modules are primarily used for

- component appearance
- colors and typography specific to components
- hover states
- animations
- keyframes
- complex selectors
- component-specific styling

Global design tokens are located in:

```text
src/shared/styles/tokens.css
```

The project also contains:

```text
src/shared/styles/globals.css
src/shared/styles/reset.css
```

The main CSS entry point imports the global styling layers and Tailwind.

## Design System

Design tokens centralize the site's visual system, including:

- brand colors
- page and surface colors
- typography sizes
- font weights
- line heights
- spacing
- border radii
- shadows
- z-index layers
- animation durations/easing
- focus styling

Montserrat is used as the primary font family.

## Responsive Design

The project uses Tailwind responsive utilities together with component-level CSS media queries.

Common breakpoints include:

- mobile-first base styles
- `sm`
- `md`
- `lg`
- `xl`

Responsive behavior includes:

- stacked mobile layouts
- responsive card grids
- mobile catalogue tabs with horizontal scrolling
- off-canvas mobile navigation
- responsive hero compositions
- responsive process layouts
- responsive campaign sections

The mobile navigation is implemented as a sliding panel rather than a dropdown.

## Navigation

The Navbar is a shared global component.

It provides:

- route-aware active-link highlighting
- desktop navigation
- contact CTA
- mobile hamburger control
- sliding mobile menu
- backdrop
- mobile scroll locking

Navigation data is centralized in:

```text
src/shared/data/navbar.js
```

## Motion and Page Transitions

Motion is configured globally in `App.jsx`:

```jsx
<MotionConfig reducedMotion="user">
```

Page transitions are implemented in `MainLayout.jsx` using:

- `AnimatePresence`
- `motion`
- shared page variants
- shared transition configuration

Motion-related files are located under:

```text
src/shared/motion/
├── MotionProvider.jsx
├── Reveal.jsx
├── transitions.js
└── variants.js
```

The layout resets the scroll position after page transitions complete.

## Illustrations and Assets

Illustrations are organized under:

```text
src/Illustration/
```

They include:

- homepage illustrations
- contact illustrations
- campaign illustrations
- product/service illustrations
- process illustrations
- decorative illustrations

SVG assets are imported as React components where appropriate.

SVGR support is configured through `vite-plugin-svgr`.

Static assets such as logos and supporting illustrations are located under:

```text
src/assets/
```

## Forms

The reusable contact form is located at:

```text
src/shared/components/ContactForm/
```

The form currently manages its field state locally and supports:

- name
- phone
- email
- service
- message

Native browser validation is used for required fields and email format.

Submission is delegated through the `onSubmit` prop, allowing the surrounding page/application to determine how the form data is handled.

## Build and Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

Preview the production build locally:

```bash
npm run preview
```

## Environment Setup

Create a local `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Do not commit the `.env` file.

The project `.gitignore` already excludes:

```text
.env
.env.local
.env.*.local
```

## Project Conventions

The codebase generally follows these conventions:

- React components use `.jsx`
- Component-specific styling uses `.module.css`
- Static content/configuration lives under `src/shared/data`
- Reusable UI lives under `src/shared/components`
- Pages compose reusable shared components
- Dynamic service commerce data is retrieved through the shared service layer
- Tailwind handles most layout and responsive utilities
- CSS Modules handle component-specific presentation
- SVG illustrations are kept separate from application components

## Current Commerce Structure

The catalogue is prepared for commerce functionality.

A service can have:

```text
priceType
├── fixed
└── request/variable pricing
```

The product card currently distinguishes between fixed-price and request-quote services.

Fixed-price services use:

```text
Add to Cart
```

while non-fixed services use:

```text
Request Quote
```

Individual service pages also expose commerce identifiers retrieved from Supabase.

The checkout route is currently disabled/commented out, so the commerce layer is present but the full checkout flow is not currently active in the application.

## License

This repository contains the Empowering U website and its associated application code.

See `LICENSE.md` for the repository's license information.

## Development Notes

The project is intentionally structured around reusable sections and data-driven pages. When adding a new service, the preferred architecture is to:

1. Add the static service definition under `src/shared/data/services/`.
2. Register it in `src/shared/data/services/index.js`.
3. Add the corresponding service/commerce record in Supabase.
4. Reuse the existing `ProductPageTemplate`.
5. Add or reuse the appropriate illustration.
6. Add the service to the relevant catalogue category.

This keeps individual service pages consistent while avoiding duplicated page implementations.
