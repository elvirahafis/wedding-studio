---
name: Botanical Editorial Wedding
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e4e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#4b463f'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f0ed'
  outline: '#7c766e'
  outline-variant: '#cdc5bc'
  surface-tint: '#615e5a'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1d1b18'
  on-primary-container: '#87837f'
  inverse-primary: '#cbc5c0'
  secondary: '#6c5b4d'
  on-secondary: '#ffffff'
  secondary-container: '#f2dcca'
  on-secondary-container: '#706051'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca730'
  on-tertiary-container: '#4f3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e7e1dc'
  primary-fixed-dim: '#cbc5c0'
  on-primary-fixed: '#1d1b18'
  on-primary-fixed-variant: '#494643'
  secondary-fixed: '#f5decd'
  secondary-fixed-dim: '#d8c3b2'
  on-secondary-fixed: '#25190f'
  on-secondary-fixed-variant: '#534437'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2df'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 54px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '400'
    lineHeight: 32px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.12em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.14em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.16em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-desktop: 4rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system expresses a union of Modern Editorial Minimalism and Warm Botanical Luxury. Conceived for an elite wedding designer’s personal celebration, it bridges the quiet restraint of high-fashion print monographs with the delicate tactility of bespoke paper goods.

The experience evokes intimacy, quiet luxury, curation, and reverence. The UI avoids celebratory tropes like loud glitter, whimsical scripts, or saturated pastels. Instead, it prioritizes breathability, generous negative space, intentional rhythm, and meticulous typographic hierarchy. Interaction models lean mobile-first, ensuring an effortlessly refined guest touchpoint on modern handheld screens (~390px viewport width).

## Colors

The palette is rooted in textural neutrals reminiscent of handmade deckled cotton paper and raw linen, grounded by deep charcoal typography and warmed by subtle champagne and antique gold elements.

- **Primary (`#1C1A17`)**: Deep Charcoal Black. Applied to major display typography, high-priority interactive states, and solid primary buttons. Replaces harsh pure black to retain editorial softness.
- **Secondary (`#8C7A6B`)**: Warm Muted Taupe. Used for secondary metadata, subtle framing outlines, subheaders, and icon strokes.
- **Tertiary (`#D4AF37`)**: Golden Ochre. Reserved for delicate micro-accents, event monograms, status confirmations, and subtle focus indicators.
- **Neutral Canvas (`#FAF8F5`)**: Warm Ivory. Serves as the global backdrop, establishing an organic, warm paper foundation.
- **Surface Elevation (`#F5F2EB`)**: Champagne Alabaster. Applied to secondary cards, frosted overlays, and input containers to build depth without synthetic gray scales.
- **Hairline Border (`#E8E2D8`)**: Low-contrast boundary tone designed for 0.5px and 1px dividers.

## Typography

The type system creates contrast between romantic editorial serif headings and functional sans-serif body copy.

- **Playfair Display** introduces high-contrast elegance with sweeping terminals, evoking vintage stationery and classic lookbooks. Headlines lean on regular and medium weights (`400`, `500`) to retain delicacy rather than boldness.
- **Plus Jakarta Sans** provides geometric clarity, ensuring schedules, dress codes, travel logistics, and form fields remain legible on mobile displays.
- **Labels and Eyebrows** rely on uppercase styling with generous letter-spacing (`0.12em` to `0.16em`) to anchor layouts and structure content sections cleanly.

## Layout & Spacing

The layout is built mobile-first, prioritizing standard modern mobile widths (~390px to 428px) while transitioning gracefully to tablet and desktop viewports.

- **Mobile Rhythm**: A single fluid column bounded by `1.25rem` margins. The content hierarchy flows vertically, using rhythmic spacing increments of `3.5rem` (`space-xl`) between narrative chapters (e.g., The Couple, Weekend Itinerary, RSVP, Travel & Accommodations).
- **Tablet & Desktop Reflow**: Beyond 768px, content moves into an asymmetrical 12-column grid system with 2rem gutters. Centered editorial columns cap at a maximum content width of 960px to preserve comfortable line lengths and high-fashion book proportions.
- **Vertical Air**: Component gaps inside cards adhere strictly to `space-sm` (`0.75rem`) and `space-md` (`1.25rem`), preserving open margins while maintaining clear visual grouping.

## Elevation & Depth

Depth is conveyed through tactile transparency and whisper-soft shadows rather than dramatic multi-layered drop shadows.

- **Layer 0 (Canvas)**: Background ivory tint (`#FAF8F5`).
- **Layer 1 (Card & Section Containers)**: Elevated paper panels finished in `#F5F2EB` with a delicate `1px` border in `#E8E2D8`.
- **Frosted Glassmorphism**: Navigation headers, sticky RSVP footers, and modal backdrops leverage translucent warm white surfaces (`rgba(250, 248, 245, 0.85)`) coupled with a `16px` backdrop blur (`backdrop-filter: blur(16px)`).
- **Ambient Diffusion**: Where elevated interaction is required (floating actions, dialogs), use a custom warm shadow: `0 12px 36px -4px rgba(28, 26, 23, 0.04), 0 4px 12px -2px rgba(140, 122, 107, 0.03)`.

## Shapes

The design system maintains an intentional softly structured architecture, utilizing `roundedness: 1` (subtle 0.25rem to 0.75rem radiuses). 

- **Containers & Cards**: Styled with soft, crisp radiuses (`0.25rem` to `0.5rem`), evoking cut artboard and fine paper edges rather than bubble-like or pill-heavy aesthetics.
- **Interactive Buttons & Badges**: Retain a disciplined, restrained boundary. Buttons employ a subtle `0.25rem` radius or razor-flat borders where high-fashion aesthetic requires.
- **Image Frames**: Styled with sharp or hairline-framed soft corners, occasionally utilizing arched caps (border-radius: `120px 120px 0 0`) for architectural hero portraits and botanical imagery.

## Components

### Buttons
- **Primary**: Solid Deep Charcoal (`#1C1A17`) background, Warm Ivory (`#FAF8F5`) text, letter-spaced uppercase sans-serif (`label-lg`), height `48px`, padding `0 1.5rem`, `0.25rem` border radius. Active state transitions to `#36322C`.
- **Secondary / Outlined**: Transparent background, `1px` solid border (`#8C7A6B`), Charcoal text. Hover/focus activates a wash of `rgba(140, 122, 107, 0.08)`.
- **Ghost / Text**: Deep Charcoal text with an animated 1px underline positioned 4px beneath the baseline.

### Cards & Itinerary Modules
- Base card utilizes `#F5F2EB` background framed with a `1px` border in `#E8E2D8`.
- Internal card padding uses `space-md` on mobile and `space-lg` on desktop.
- Timeline items feature fine vertical hairline connections (`#C5A880`) paired with tiny botanical or geometric markers.

### Input Fields & Selectors
- Background is set to an off-white paper fill (`#FFFFFF` with 50% opacity or `#FAF8F5`).
- Bottom border only or full hairline outline (`1px` `#E8E2D8`), shifting to `#8C7A6B` on hover and `#1C1A17` on focus.
- Labels sit above inputs in uppercase `label-md` tracking. Error states appear in muted sienna rather than harsh primary red.

### Checkboxes & Radios
- Square or circular frame (`18px`) bordered with `1px` `#8C7A6B`.
- Checked state fills with `#1C1A17` containing a refined ivory checkmark or inner dot.

### Chips & Filter Tags
- Subtle pill or soft rectangle (`0.25rem` radius), height `32px`, bordered with `#E8E2D8`, utilizing `body-sm` typography for guest dietary options and multi-day itinerary toggles.

### Specialized Editorial Components
- **Monogram Crest**: Clean vector seal with hairline gold accents (`#D4AF37`) anchored at the top of the mobile viewport.
- **Hairline Ornament**: Delicate centered botanical glyph or horizontal hairline rule (`#E8E2D8`) separating narrative milestones.
- **Sticky RSVP Bar**: Bottom-anchored glassmorphic strip on mobile viewports providing quick access to the response flow without obscuring editorial imagery.