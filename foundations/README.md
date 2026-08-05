# Medmo Foundations

Framework-agnostic design tokens for the Medmo Design System.

This folder contains **design decisions only** — no React components, no framework configuration, no providers.

## What lives here

| Category | Purpose |
|----------|---------|
| `colors/` | Palette, scales, semantic color tokens |
| `typography/` | IBM Plex Sans Condensed, semantic type roles |
| `spacing/` | 4px grid, layout, component spacing, containers |
| `radius/` | Border radius scale |
| `shadows/` | Box-shadow tokens (shadow-none … shadow-xl). Visual depth is a design rule — documented here, not a separate elevation API |
| `motion/` | Durations, easings, transition presets (6 presets — primary API) |
| `opacity/` | Minimal alpha modifiers — Colors owns overlay, focus, disabled |
| `z-index/` | Interaction priority stack — 7 semantic layers (0–60) |
| `iconography/` | Lucide-only — 4 sizes, 1 stroke, usage rules (not just sizes) |
| `breakpoints/` | Responsive breakpoints and container widths |
| `tokens/` | Aggregated exports (CSS, TypeScript, contract) |
| `density/` | *(planned)* Comfortable, Compact, Dense modes |
| `data-visualization/` | *(planned)* Clinical business state colors |

## What does NOT live here

- ThemeProvider, Toaster, TooltipProvider → Technical Setup (`src/app/`)
- Tailwind `@theme` mapping → Technical Setup (`src/app/globals.css`)
- React components → Primitives (`src/components/ui/`)
- Font loading via `next/font` → Technical Setup

## File convention

Each foundation category follows the same structure:

```
category/
├── scale.ts       # Primitive values (typed)
├── tokens.ts      # Semantic token mappings
└── category.css   # CSS custom properties export
```

## Consumption

**Rule:** Import only from Token Aggregation — never from individual foundation folders.

```css
/* Technical Setup imports this — never redefines values */
@import "../../foundations/tokens/index.css";
```

```typescript
import { medmoContracts, medmoResolve } from "@medmo/tokens"
```

See [`foundations/tokens/README.md`](./tokens/README.md), [`package-boundaries.md`](./tokens/package-boundaries.md), and [`docs/design-system/foundations/tokens.mdx`](../docs/design-system/foundations/tokens.mdx).

## Implementation order

1. Colors ✓
2. Typography ✓
3. Spacing ✓
4. Breakpoints ✓
5. Radius ✓
6. Shadows ✓
7. Motion ✓
8. Opacity ✓
9. Z-Index ✓
10. Iconography ✓
11. Token Aggregation ✓
12. Hardening ✓

## Documentation

- Philosophy: `docs/design-system/principles/` (includes [Motion Philosophy](../docs/design-system/principles/motion-philosophy.mdx))
- Foundation docs: `docs/design-system/foundations/` — **[Design Intent standard](../docs/design-system/foundations/README.mdx)**
- Roadmap: `docs/design-system/000-roadmap.mdx`

## Token creation principle

Less tokens, more intention. See [`token-principle.ts`](./token-principle.ts).

Before adding any token: *"Does this represent a reusable design decision or merely a value?"*

---

| Layer | Purpose | Blueprint |
|-------|---------|-----------|
| Interaction Tokens | Action hover/pressed/disabled on top of semantic | `blueprint.mdx` |
| Data Visualization Tokens | Pending, Escalated, Completed — clinical states | `blueprint.mdx` |
| Density | Global Comfortable / Compact / Dense scaling | `blueprint.mdx` |

## Future evolution

This folder is structured to migrate to `packages/foundations` (npm package `@medmo/foundations`) when multiple applications need independent token versioning. See `docs/design-system/blueprint.mdx` → "Evolución futura: packages/foundations".

**Current decision:** Keep at repo root. Migrate when 2+ separate repos consume tokens.
