# Frill-UI: Modular Architecture Documentation

## Overview

The Frill-UI codebase has been refactored into a **modular CSS architecture** that separates concerns and eliminates code duplication. All pages now reference shared CSS files instead of maintaining identical inline styles.

## Project Structure

```
files/
├── index.html              # Home page
├── about.html              # About Us page
├── business.html           # Business Plan page
├── contact.html            # Contact page
├── README.md               # Project info
├── css/
│   ├── variables.css       # Global CSS variables, colors, and resets
│   ├── nav.css             # Navigation component styles
│   ├── footer.css          # Footer component styles
│   ├── typography.css      # Heading, paragraph, and text styles
│   ├── buttons.css         # Button component styles
│   ├── components.css      # Reusable components (cards, grids, tables, forms)
│   ├── hero.css            # Hero section animations and styles
│   ├── home.css            # Home page specific styles
│   ├── about.css           # About page specific styles
│   ├── business.css        # Business page specific styles
│   └── contact.css         # Contact page specific styles
└── components/             # Future: JavaScript components and partials
```

## CSS Files Breakdown

### `variables.css`
**Purpose:** Define global design tokens for consistency

**Contents:**
- CSS Custom Properties for colors (purple, magenta, cream, etc.)
- Typography font families
- Spacing scale (space-xs through space-3xl)
- Border radius values
- Transition/animation timings
- Universal reset and body styles

**Import order:** First in all HTML files

### `nav.css`
**Purpose:** Navigation bar styling

**Contents:**
- Fixed navbar layout and positioning
- Logo and link styles
- Hover and active states
- Mobile responsive adjustments

**Pages:** All 4 pages

### `footer.css`
**Purpose:** Footer styling

**Contents:**
- Footer container and background
- Logo styling
- Navigation links within footer
- Responsive padding

**Pages:** All 4 pages

### `typography.css`
**Purpose:** Text and heading styles

**Contents:**
- Heading (h1-h6) styles
- Paragraph styles
- Labels and eyebrow text
- Links and emphasis styles
- Responsive typography scaling

**Pages:** All 4 pages

### `buttons.css`
**Purpose:** Button component styles

**Contents:**
- Primary buttons (solid background)
- Secondary buttons (outline)
- Button groups and layouts
- Hover and active states
- Mobile button adjustments

**Pages:** All 4 pages

### `components.css`
**Purpose:** Reusable UI components

**Contents:**
- Page hero section styles
- Content section layout
- Card components
- Grid layouts (2-column, 3-column, auto-fit)
- Tables and data display
- Form groups and inputs
- Badge component

**Pages:** All 4 pages

### `hero.css`
**Purpose:** Home page hero section

**Contents:**
- Hero container and decorative background circles
- Hero text animations (fadeUp)
- Responsive hero adjustments
- Button group within hero

**Pages:** index.html only

### `home.css`
**Purpose:** Home page specific styles

**Contents:**
- Features strip styling
- Products grid and cards
- "Why Frill" feature cards
- Button outline variant

**Pages:** index.html only

### `about.css`
**Purpose:** About page specific styles

**Contents:**
- About split layout (2 columns)
- Visual placeholder styling
- Vision & Mission card grid
- Value proposition cards
- Competitor comparison table

**Pages:** about.html only

### `business.css`
**Purpose:** Business page specific styles

**Contents:**
- Business model card layout
- Revenue stream table
- SMART goal grid with colored borders
- Hosting infrastructure cards
- Technology stack grid

**Pages:** business.html only

### `contact.css`
**Purpose:** Contact page specific styles

**Contents:**
- Contact information grid
- Form styling (inputs, textarea, selects)
- Team member cards with gradient avatars
- Organizational chart styling
- Growth phases timeline cards

**Pages:** contact.html only

## CSS Import Order

Each HTML file imports CSS in this order:

```html
<link rel="stylesheet" href="css/variables.css" />    <!-- 1. Variables first -->
<link rel="stylesheet" href="css/nav.css" />
<link rel="stylesheet" href="css/footer.css" />
<link rel="stylesheet" href="css/typography.css" />
<link rel="stylesheet" href="css/buttons.css" />
<link rel="stylesheet" href="css/components.css" />
<link rel="stylesheet" href="css/[page-specific].css" />  <!-- 2. Page-specific last -->
```

This cascade order ensures:
- Global variables are available to all files
- Shared components override reset styles
- Page-specific styles have highest priority

## Key Design Tokens

### Colors
```css
--purple: #3B1F5E (primary)
--magenta: #C2185B (accent)
--cream: #FAF7FF (light background)
--white: #ffffff
--text-muted: #a78bcb
--text-dark: #4a3060
```

### Spacing Scale
```css
--space-xs: 0.25rem
--space-sm: 0.5rem
--space-md: 1rem
--space-lg: 1.5rem
--space-xl: 2rem
--space-2xl: 3rem
--space-3xl: 4rem
```

### Typography
- Display: `Playfair Display` (serif)
- Body: `DM Sans` (sans-serif)

## Reusable Components

### Grid Systems
- `.grid-2`: 2-column equal width
- `.grid-3`: 3-column equal width
- `.grid-auto`: Auto-fit responsive grid (minmax 280px)

### Cards
- `.card`: White background with hover effect
- `.card-dark`: Purple background
- `.card-magenta`: Magenta background

### Tables
- `.data-table`: Styled table with consistent theme
- `.comp-table` (about.html): Competitive analysis table
- `.rev-table` (business.html): Revenue breakdown table

### Forms
- `.form-group`: Wrapper for labeled inputs
- `.form-group input/textarea/select`: Styled inputs
- `.btn-submit`: Form submission button

## Benefits of This Architecture

✅ **No Duplication**: CSS written once, reused everywhere  
✅ **Easy Maintenance**: Change nav in one place affects all pages  
✅ **Scalability**: Add new pages by importing shared + new CSS  
✅ **Consistency**: Design tokens ensure color, spacing harmony  
✅ **Performance**: Shared CSS files are cached by browsers  
✅ **Responsiveness**: Media queries in relevant component files  
✅ **Developer Experience**: Clear file organization, easy to find styles  

## Adding New Pages

To create a new page while maintaining modularity:

1. **Create the HTML file** (e.g., `features.html`)
2. **Import shared CSS** in the `<head>`:
   ```html
   <link rel="stylesheet" href="css/variables.css" />
   <link rel="stylesheet" href="css/nav.css" />
   <link rel="stylesheet" href="css/footer.css" />
   <link rel="stylesheet" href="css/typography.css" />
   <link rel="stylesheet" href="css/buttons.css" />
   <link rel="stylesheet" href="css/components.css" />
   ```
3. **Create page-specific CSS** if needed (e.g., `css/features.css`)
4. **Use existing component classes** from `components.css`
5. **Follow the spacing and color variables** for consistency

## Future Enhancements

- **JavaScript Modules**: Move interactive logic to `js/` folder
- **CSS Preprocessor**: Consider SCSS for nested selectors and mixins
- **Component Library**: Expand `components/` folder with HTML snippets
- **Build Tool**: Use webpack/Parcel for CSS minification and optimization
- **Atomic CSS**: Consider Tailwind CSS for even more modularity

## Migration Notes

- Previous inline styles have been removed from all HTML files
- All style declarations now live in dedicated CSS files
- No visual changes — functionality and appearance remain identical
- File sizes are slightly smaller due to CSS deduplication

---

**Last Updated:** February 27, 2026  
**Project:** Frill-UI | Custom Clothing Platform  
**Author:** Hashim Ali Khan
