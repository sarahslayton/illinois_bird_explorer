# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

This project is a website making Illinois bird data accessible to agencies, land managers, and the public. It will include:
- Species ecology and distribution information across the state and throughout the year
- Resources for getting involved in conservation efforts
- Animations and maps showing how bird populations have varied in space and time

## Stack

**Current:** React + Vite frontend (in `frontend/`)
**Planned:** Python + FastAPI backend (not yet implemented — add backend guidance here when work begins)

## Always Do First
– **Load the `frontend-design` skill** at `.claude/skills/frontend-design` before writing any frontend code. No skipping, no exceptions, every single session.

## Project Overview

This is a React + Vite frontend application in the `frontend/` subdirectory. It uses React 19 with Vite as the build tool and ESLint for linting.

## Commands

All commands are run from the `frontend/` directory:

```bash
npm run dev       # Start dev server with HMR
npm run build     # Production build (outputs to dist/)
npm run lint      # Run ESLint
npm run preview   # Serve production build locally
```

No test runner is configured.

## Architecture

- `src/main.jsx` — entry point; mounts `<App>` into `#root`
- `src/App.jsx` — root component with all application logic and layout
- `src/index.css` — global styles with CSS custom properties for light/dark theming
- `src/App.css` — component styles using CSS nesting syntax
- `public/icons.svg` — SVG sprite sheet used for all icons (documentation, social links)

ESLint config (`eslint.config.js`) uses the flat config format with React hooks and refresh plugins.

# Anti-Generic Guardrails
– **Colors:** The default Tailwind palette (indigo-500, blue-600, etc.) is off the table. Build the palette from a custom brand color.
– **Shadows:** Flat `shadow-md` is not an option. Build depth with layered, color-tinted shadows at low opacity.
– **Typography:** Headings and body text get different fonts. Pair a display or serif with a clean sans-serif. Large headings get tight tracking (`-0.03em`), body text gets generous line-height (`1.7`).
– **Gradients:** Stack multiple radial gradients on top of each other. Bring in grain and texture through an SVG noise filter.
– **Animations:** Stick to `transform` and `opacity` only. `transition-all` is never used. Easing should feel spring-like.
– **Interactive states:** hover, focus-visible, and active states are required on every clickable element. No skipping.
– **Images:** Layer a gradient overlay (`bg-gradient-to-t from-black/60`) on top, and apply a color treatment using `mix-blend-multiply`.
– **Spacing:** Every spacing decision follows consistent tokens. Random Tailwind steps are not acceptable.
– **Depth:** Build with a surface hierarchy in mind (base → elevated → floating). Everything sitting flat at the same level is not good enough.

## Placeholder Content
– Any section of AI-generated text that will be replaced with real content later must be preceded by a visible **"Placeholder text"** label rendered on the page (not just a code comment). Use the `.placeholder-label` CSS class for this. Apply it before every generated paragraph, data value, or descriptive block.

## Reference Images
– ONLY use the color palette in the `color_palette/` folder. There is text associated with them that includes suggestions for their use, please abide by them. 
– Before starting any design work, look through the `reference_photos/` folder. It includes screenshots of websites from the University of Illinois. Use these logos, fonts, and other visual features for to guide the development of the website frontend.


