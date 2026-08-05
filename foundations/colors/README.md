# Medmo Color System

Framework-agnostic color foundations for the Medmo Design System.

## Architecture

```
Primitives (internal)  →  Semantic Tokens (components)  →  CSS Variables (runtime)
   primary-800              color-action-primary              --color-action-primary
   neutral-800              color-text-primary                --color-text-primary
```

## Rules

1. **Components consume ONLY semantic tokens** (`--color-*`, `--focus-*`)
2. **Primitives are internal** — never import `primitives/` in component code
3. **Light and dark are designed together** — same token names, different values
4. **Every feedback color has 4 tokens**: background, border, text, foreground
5. **Focus is centralized** — never define focus styles per component

## Surface Hierarchy

| Level | Token | Light | Use |
|-------|-------|-------|-----|
| 0 | `color-background` | neutral-50 | Page canvas |
| 1 | `color-surface` | white | Cards, panels |
| 2 | `color-surface-raised` | white | Nested containers |
| 3 | `color-surface-floating` | white | Dropdowns, popovers |
| 4 | `color-overlay` | neutral-950 @ 40% | Modal backdrop |

## Brand Color

`#242F50` = `primary-800` = `color-action-primary` (light)

Never modify without design team authorization.

## Files

| File | Purpose |
|------|---------|
| `primitives/` | Raw color scales (internal) |
| `semantic/` | Token → primitive mappings |
| `focus/` | Focus ring tokens |
| `colors.css` | Runtime CSS custom properties |
| `contrast-matrix.ts` | Validated WCAG pairs |
| `contract.ts` | Allowed token name registry |

## Documentation

See `docs/design-system/foundations/colors.mdx`
