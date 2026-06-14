---
name: Andean Heritage
colors:
  surface: '#fcf9f3'
  surface-dim: '#dcdad4'
  surface-bright: '#fcf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ed'
  surface-container: '#f0eee8'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e5e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#57423d'
  inverse-surface: '#31312d'
  inverse-on-surface: '#f3f0ea'
  outline: '#8a716c'
  outline-variant: '#dec0b9'
  surface-tint: '#a43c23'
  primary: '#933018'
  on-primary: '#ffffff'
  primary-container: '#b3472d'
  on-primary-container: '#ffe5df'
  inverse-primary: '#ffb4a3'
  secondary: '#455f88'
  on-secondary: '#ffffff'
  secondary-container: '#b6d0ff'
  on-secondary-container: '#3f5882'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca72f'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad2'
  primary-fixed-dim: '#ffb4a3'
  on-primary-fixed: '#3d0700'
  on-primary-fixed-variant: '#84250e'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#adc7f7'
  on-secondary-fixed: '#001b3c'
  on-secondary-fixed-variant: '#2d476f'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fcf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e5e2dc'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is rooted in the "Traditional & Authentic" spirit of Cusco, blending the warmth of Andean hospitality with premium modern functionality. It evokes an emotional response of "Sanctuary"—a place of comfort, history, and grounded luxury.

The style is **Modern Cultural**, a refined interpretation of traditional aesthetics. It takes the clean, structured layout principles of modern SaaS/Travel platforms—as seen in the reference image—and infuses them with rich textures and organic warmth. Key characteristics include:
- **Textural Depth:** Subtle use of Inca stone masonry patterns and textile weave textures to break flat surfaces.
- **Organic Geometry:** Arched imagery and soft-cornered containers that mirror colonial architecture.
- **Premium Craft:** Gold accents and high-contrast typography that signal a high-end, curated experience.

## Colors

The palette is inspired by the sun-drenched landscape of the Sacred Valley:
- **Primary (Terracotta):** Used for primary actions, highlight headings, and brand-defining UI elements. It represents the clay tiles and earth of Cusco.
- **Secondary (Andean Blue):** A deep, nocturnal blue used for footer backgrounds, high-contrast text, and secondary UI containers to provide a grounding force.
- **Tertiary (Inca Gold):** Reserved for accents, stars, icons, and premium "call-out" details.
- **Neutral (Parchment):** A warm, off-white base color that provides a more comfortable reading experience than pure white, evoking the feel of high-quality paper or lime-washed walls.

## Typography

This design system utilizes a high-contrast pairing to balance heritage with clarity. 
- **Libre Caslon Text** is used for all headlines and display elements. Its classic serif proportions provide an authoritative and literary feel, essential for a "Traditional" brand narrative.
- **Manrope** serves as the functional workhorse. As a clean, modern sans-serif, it ensures high legibility for booking details, descriptions, and UI labels, keeping the experience feeling "Modern" and "Comfortable."
- For mobile, display sizes scale down aggressively to maintain readability without overwhelming the viewport.

## Layout & Spacing

The system employs a **Fluid Grid** model with generous white space to evoke a feeling of "Luxury" and "Room to breathe." 

- **Grid:** A 12-column grid for desktop with 24px gutters.
- **Rhythm:** Spacing follows an 8px base unit. Section vertical padding is intentionally large (96px to 128px) to separate different narrative "chapters" of the landing page.
- **Reflow:** On mobile, margins shrink to 16px, and multi-column card layouts collapse into a single-column vertical stack. 
- **Feature Layout:** Emulate the "arch" image masks from the reference to break the rigid grid and introduce architectural movement.

## Elevation & Depth

Depth is achieved through **Tonal Layers** and **Subtle Textures** rather than heavy shadows.
- **Surface Levels:** The base layer is Parchment. Cards use a pure white surface with a very soft, Terracotta-tinted ambient shadow (4% opacity) to feel lifted but integrated.
- **Textural Backdrops:** Use low-opacity SVG patterns of "Stone Masonry" or "Andean Weave" behind specific sections (like the 'Our News' or 'Testimonials' sections) to create visual interest without clutter.
- **Flat Accents:** Borders are used sparingly; where they exist, they are 1px and colored in light Terracotta or Gold to define boundaries elegantly.

## Shapes

The shape language balances the "Stone" (rectilinear) and "Arch" (circular) motifs of Cusco.
- **Primary Radius:** 0.5rem (8px) for buttons, input fields, and cards, providing a modern, approachable feel.
- **Feature Radius:** Large, 100vh rounded tops (Arches) are used for hero images and featured gallery blocks to reference colonial and cathedral architecture.
- **Interactive Elements:** Buttons are slightly more rounded than containers to feel distinct and touch-friendly.

## Components

- **Buttons:** Primary buttons use a solid Terracotta background with White text. Secondary buttons use a Terracotta outline with a Parchment fill.
- **Search Bar:** A floating "Reservation Bar" (as seen in the reference) with a white background, 8px radius, and gold-tinted icons for "Guests" and "Dates."
- **Cards:** Hotel and News cards feature a "Full-Bleed" image top with a 12px corner radius. Typography inside cards should be left-aligned with ample padding (24px).
- **Cultural Accents:** Use a 4px "Inca Ribbon" (a thin geometric pattern) as a divider between sections or as a top-border for the footer.
- **Input Fields:** Minimalist design with a 1px bottom-border or subtle 8px rounded outline. Focus states should use the Gold accent color.
- **Chips/Badges:** Small, Secondary Blue backgrounds with Gold text for "Special Offers" or "Available" status.