# Design System Specification: The Digital Curator

## 1. Overview & Creative North Star
The "Creative North Star" for this design system is **The Digital Curator**. This isn't just a gallery; it is a high-end editorial showcase that treats code and programming projects as fine art. 

We move beyond the "standard grid" by embracing **Intentional Asymmetry**. To break the template look, the system relies on high-contrast typography scales and overlapping elements where project images might "break" the container boundary slightly. By utilizing massive white space and a "Monochromatic Plus One" palette, we create an environment that feels expensive, quiet, and authoritative.

---

## 2. Colors & Surface Architecture
Our palette is rooted in absolute neutrals to let the work (the code/projects) provide the color.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Borders are a sign of structural weakness in high-end design. Instead, define boundaries through:
- **Tonal Shifts:** Transitioning from `surface` (#F9F9F9) to `surface-container-low` (#F2F4F4).
- **Hard White Space:** Using the Spacing Scale (16 or 20) to create a void that acts as a natural separator.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of premium cardstock.
- **Base Layer:** `surface` (#F9F9F9) – The expansive gallery floor.
- **Section Layer:** `surface-container-low` (#F2F4F4) – Subtle grouping for categories.
- **Component Layer:** `surface-container-lowest` (#FFFFFF) – The "Elevated Paper" look for project cards.

### The "Glass & Gradient" Rule
For floating navigation or active project states, use **Glassmorphism**.
- **Token:** `surface_variant` at 70% opacity + 20px Backdrop Blur.
- **Signature Texture:** Primary CTAs should not be flat black. Use a subtle linear gradient: `primary` (#5F5E5E) to `primary_dim` (#535252) at a 135-degree angle to add "soul" and depth.

---

## 3. Typography: The Editorial Voice
We pair the structural integrity of **Public Sans** (Display) with the functional clarity of **Public Sans** (Body).

- **Display-LG (3.5rem / Public Sans):** Reserved for hero titles. Letter-spacing should be set to -0.02em to create a "tight" editorial feel.
- **Headline-MD (1.75rem / Public Sans):** Use for project titles. High contrast against `on_surface`.
- **Body-MD (0.875rem / Public Sans):** The workhorse. Line height must be generous (1.6) to maintain the "Gallery" breathing room.
- **Label-SM (0.6875rem / Inter):** All-caps with +0.05em tracking for metadata (e.g., "COMMITTED 2 DAYS AGO").

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are forbidden. We use "Ambient Occlusion" logic.

- **The Layering Principle:** To lift a card, place a `surface-container-lowest` (#FFFFFF) card on a `surface-container` (#EBEEEF) background. The contrast is the elevation.
- **Ambient Shadows:** For hover states only. Use `on_surface` at 4% opacity with a 40px blur and 10px Y-offset. It should feel like the card is caught in soft, overhead museum lighting.
- **The Ghost Border Fallback:** If a project image is too light for the background, use the `outline_variant` (#ADB3B4) at **10% opacity**. It must be felt, not seen.

---

## 5. Components

### Project Cards (The Hero)
- **Base:** `surface-container-lowest` (#FFFFFF).
- **Corner Radius:** `full` (9999px) for a soft, modern furniture feel.
- **Interaction:** On hover, apply a `scale(1.02)` and the Ambient Shadow. No borders.
- **Content:** Forbid divider lines. Use Spacing `4` (1.4rem) between the image and the project metadata.

### Pill Buttons (Category Selectors)
- **Shape:** `full` (9999px).
- **Default State:** `secondary_container` (#E2E2E2) with `on_secondary_container` text.
- **Active State:** `tertiary` (#6100EB) - This is our "Electric Violet" signature.
- **Padding:** Vertical `2` (0.7rem), Horizontal `5` (1.7rem).

### Minimal Navigation Bar
- **Styling:** Floating `surface_container_lowest` at 80% opacity with `backdrop-blur`. 
- **Structure:** Centered, compact width. Use `surface_dim` for a 1px "Ghost Border" at 15% opacity on the bottom edge only.

### Programming Language Chips
- **Aesthetic:** Minimalist. Use `primary_fixed` (#E5E2E1) backgrounds with `on_primary_fixed` text. No icons unless they are monochromatic.

---

## 6. Do’s and Don’ts

### Do:
- **Use "Asymmetric Pacing":** In a grid of cards, occasionally let one card span 2 columns to break the visual monotony.
- **Embrace the "Off-White":** Ensure the background is always `#F9F9F9` to reduce eye strain and feel more "editorial" than "tech-spec."
- **Use Tertiary Sparingly:** The Electric Violet (#6100EB) is a surgical tool. Use it only for the "one thing" you want the user to click.

### Don’t:
- **Don't use 100% Black:** Never use #000000. Use the `inverse_surface` (#0C0F0F) for deep blacks to maintain tonal softness.
- **Don't use Divider Lines:** If you feel the need to add a line, increase the `spacing` token by one level instead. 
- **Don't Over-Animate:** Hover states should be "liquid"—smooth, slow (300ms+), and subtle. Avoid "pop" or "bounce" effects.

### Accessibility Note:
While we use subtle "Ghost Borders," ensure that all `on_surface` text against `surface` backgrounds maintains a contrast ratio of at least 4.5:1. Use `on_surface_variant` (#5A6061) only for non-essential metadata.