---
name: High-Impact Utility
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4f4633'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#817661'
  outline-variant: '#d3c5ac'
  surface-tint: '#775a00'
  primary: '#775a00'
  on-primary: '#ffffff'
  primary-container: '#ffc72c'
  on-primary-container: '#6f5400'
  inverse-primary: '#f6bf22'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#5f5f57'
  on-tertiary: '#ffffff'
  tertiary-container: '#d1cfc5'
  on-tertiary-container: '#585850'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdf99'
  primary-fixed-dim: '#f6bf22'
  on-primary-fixed: '#251a00'
  on-primary-fixed-variant: '#5a4300'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e3d8'
  tertiary-fixed-dim: '#c8c7bd'
  on-tertiary-fixed: '#1b1c16'
  on-tertiary-fixed-variant: '#474740'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
  surface-cream: '#FDFBF0'
  pure-black: '#000000'
  pure-white: '#FFFFFF'
  success-green: '#22C55E'
  info-blue: '#3B82F6'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is built for efficiency, clarity, and industrial-grade reliability. It balances a **High-Contrast / Bold** aesthetic with a **Corporate / Modern** underlying structure. The personality is energetic and action-oriented, utilizing a vibrant yellow to signal importance and a deep charcoal to provide grounding and professional authority.

The UI targets operational users who require rapid information processing. It avoids unnecessary decorative elements, instead using generous whitespace and clear visual hierarchies to guide the eye toward critical actions and data points. The emotional response is one of confidence—providing the user with a powerful toolset that feels both playful in its color and dead-serious in its utility.

## Colors

The palette is anchored by a high-visibility **Primary Yellow**, reserved for primary actions, critical statuses, and brand accents. The **Secondary Charcoal** (almost black) is used for typography and high-contrast UI elements to ensure maximum legibility.

**Surface Cream** is the default background color, providing a softer alternative to pure white that reduces eye strain while maintaining high contrast against the charcoal text. Use **Pure Black** sparingly for heavy borders or primary headings to add weight. Functional colors like success-green and info-blue are desaturated slightly to prevent clashing with the vibrant primary yellow.

## Typography

This system uses a pairing of **Plus Jakarta Sans** for headlines and **Inter** for body and UI elements. Plus Jakarta Sans provides a friendly, modern geometric feel that complements the rounded corners of the UI, while Inter offers clinical precision for data-heavy views.

Headlines should utilize tight letter-spacing and heavy weights to command attention. For body text, standard weights provide a neutral tone. Labels and utility text use semi-bold or bold weights to remain legible even at small sizes against colored backgrounds.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a 12-column structure on desktop. It prioritizes "logical grouping" through the use of container blocks with distinct padding.

- **Desktop:** 12 columns, 24px gutter, 64px outside margins.
- **Tablet:** 8 columns, 16px gutter, 32px outside margins.
- **Mobile:** 4 columns, 16px gutter, 16px outside margins.

Vertical rhythm is maintained using an 8px base unit. Generous whitespace (LG and XL units) is encouraged between major sections to prevent the high-contrast color palette from feeling overwhelming.

## Elevation & Depth

Visual hierarchy is primarily achieved through **Tonal Layers** and **Low-Contrast Outlines**. Instead of heavy shadows, this system uses subtle "ghost borders" (1px solid #000000 at 5-10% opacity) to define surfaces.

For active states or "floating" elements like modals, use a hard-edged shadow or a crisp 2px border to maintain the bold, utility-focused aesthetic. Surfaces should stack logically:
1. **Base:** Surface Cream (#FDFBF0).
2. **Cards/Containers:** Pure White (#FFFFFF) with a subtle outline.
3. **Popovers/Modals:** Pure White (#FFFFFF) with a 4px black shadow offset (no blur) for a slightly retro, "tactile" feel.

## Shapes

The shape language is consistently **Rounded**. A 0.5rem (8px) base radius is applied to standard components like input fields and buttons. Larger containers, such as dashboard cards and featured sections, use the `rounded-lg` (16px) or `rounded-xl` (24px) values to create a softer, more approachable feel that balances the aggressive high-contrast colors.

Icons should follow this logic, using rounded terminals and junctions to ensure they feel part of the same visual family.

## Components

### Buttons
Primary buttons are high-impact: Solid Primary Yellow with Charcoal text, using `bold` typography. They should have a 1px inner stroke of a slightly darker gold to provide depth. Secondary buttons use a Charcoal border with no fill.

### Input Fields
Fields should have a Pure White background with a 1px Charcoal border. On focus, the border weight increases to 2px. Labels sit above the field in `label-bold` Charcoal.

### Cards
Cards use a Pure White background and 16px corner radius. A very light border (Charcoal at 10% opacity) defines the edge. Header areas within cards can be tinted with Surface Cream to separate metadata from content.

### Chips & Tags
Used for status and categorization. They should be pill-shaped with a light tint of the status color (e.g., light green background with dark green text) to ensure they don't compete with the Primary Yellow action buttons.

### Lists
Lists use clean dividers (1px Cream) and generous vertical padding (16px). Interactive list items should show a subtle Primary Yellow left-accent bar on hover.
