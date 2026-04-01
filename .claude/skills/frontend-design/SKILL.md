---
name: frontend-design
description: Illinois bird website design system — color palette, typography, U of I branding, and anti-generic UI guardrails. Load before any frontend work.
---

# Frontend Design System — Illinois Bird Data Website

You MUST follow every rule in this file before writing any frontend code. No exceptions.

---

## Step 1: View Reference Assets

Before touching any UI code, read these files to ground yourself visually:

- `reference_photos/` — Screenshots of University of Illinois websites (Ward Lab, ACES). These define the visual register: dark navy headers, Illinois "I" block logo, orange accents, clean academic layout, full-width photo heroes.
- `color_palette/` — Official U of I System brand palette with hex values and usage rules.

---

## Step 2: Color Palette

Use ONLY these colors. Never reach for generic Tailwind palette names (indigo-500, blue-600, etc.).

### Primary
| Name | Hex | Use |
|------|-----|-----|
| U of I Blue | `#13294B` | Nav, footer, headers, primary text on light, serious/authoritative elements |

### Secondary Blues
| Name | Hex | Use |
|------|-----|-----|
| Accent Blue (PMS 2728C) | `#0455A4` | Subheaders, points of interest, link color |
| Deep Blue (PMS 2738C) | `#1F4096` | Knockout headers, section backgrounds, mood |

### Neutrals
| Name | Hex | Use |
|------|-----|-----|
| Light Gray | `#E8E9EA` | Page backgrounds, subtle dividers, card surfaces |
| Mid Gray | `#A5A8AA` | Supporting text, borders, muted UI elements |
| Dark Gray | `#5E6669` | Body text on light backgrounds |

### Accent
| Name | Hex | Use |
|------|-----|-----|
| Illinois Orange | `#FF5F05` | CTAs, buttons, active states, highlights, accent lines |
| Warm Red | `#E84A27` | Alerts, secondary accent |

### CSS Custom Properties to Define
```css
--color-navy:      #13294B;
--color-blue-mid:  #0455A4;
--color-blue-deep: #1F4096;
--color-gray-light:#E8E9EA;
--color-gray-mid:  #A5A8AA;
--color-gray-dark: #5E6669;
--color-orange:    #FF5F05;
--color-red:       #E84A27;
--color-white:     #FFFFFF;
```

---

## Step 3: Typography

Pair a display or serif for headings with a clean sans-serif for body. Mirror the academic weight of the U of I reference sites.

- **Headings:** A serif or slab-serif (e.g., Merriweather, Playfair Display, or similar). Large headings: `letter-spacing: -0.03em`.
- **Body:** A humanist sans-serif (e.g., Source Sans Pro, Inter, or similar). Line-height: `1.7`.
- **Never** use the same font family for headings and body.

---

## Step 4: U of I Branding Elements

Based on the reference photos, the following elements are part of the Illinois identity:

- **Block "I" logo** — The orange University of Illinois block "I" with "ILLINOIS" or "UNIVERSITY OF ILLINOIS" wordmark appears in headers and footers.
- **Dark navy navbar** — Full-width, `#13294B` background, white text.
- **Orange accent line** — A thin horizontal orange rule often separates the nav from content or the footer from page body.
- **Dark navy footer** — Full-width `#13294B` footer with white text, University logo, and navigation links.
- **Orange CTA buttons** — Outlined or filled `#FF5F05` buttons for primary calls-to-action.

---

## Step 5: Anti-Generic Guardrails (Non-Negotiable)

### Colors
Never use the default Tailwind palette. Build every color decision from the palette above.

### Shadows
No flat `shadow-md`. Use layered, color-tinted shadows at low opacity:
```css
box-shadow:
  0 1px 2px rgba(19, 41, 75, 0.06),
  0 4px 12px rgba(19, 41, 75, 0.10),
  0 12px 32px rgba(19, 41, 75, 0.08);
```

### Gradients
Stack multiple radial gradients. Add grain/texture via SVG noise filter. Never use a single flat linear gradient.

### Animations
- `transform` and `opacity` only. Never `transition-all`.
- Easing should feel spring-like: `cubic-bezier(0.34, 1.56, 0.64, 1)` or similar.

### Interactive States
Every clickable element requires: `hover`, `focus-visible`, and `active` states. No exceptions.

### Images
- Layer a gradient overlay: `background: linear-gradient(to top, rgba(0,0,0,0.6), transparent)`
- Apply color treatment with `mix-blend-multiply` and a navy or orange tint where appropriate.

### Spacing
Follow consistent spacing tokens. No random Tailwind steps. Build from a base unit (e.g., `0.25rem` × 4 = `1rem`).

### Depth / Surface Hierarchy
Three levels minimum:
1. **Base** — page background (`#E8E9EA` or white)
2. **Elevated** — cards, panels (white with tinted shadow)
3. **Floating** — modals, dropdowns, tooltips (stronger shadow, slight scale)

Nothing sits flat at the same visual level as everything else.
