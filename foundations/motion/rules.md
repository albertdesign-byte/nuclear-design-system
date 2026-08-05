# Motion Rules

## Public API (priority order)

1. **Presets** — `--motion-hover`, `--motion-dropdown`, `--motion-modal`, etc.
2. **Duration/easing semantics** — only when authoring new DS patterns, not app code
3. **Never** primitives `--motion-duration-100`, raw `150ms`, or `cubic-bezier(...)` in components

## Interaction Philosophy (design rules — not tokens)

- Never bounce, elastic, spring, or overshoot
- Never parallax or scroll-driven decoration
- Never infinite animation except skeleton loading
- Hover never changes layout (no transform, scale, translate, width, height, padding)
- Hover only: color, background-color, border-color, opacity, box-shadow
- Focus always visible (Colors focus tokens)
- All motion degrades to instant via `prefers-reduced-motion: reduce`
- User should not consciously notice the animation
- 300ms is the hard maximum for UI transitions (skeleton cycle excepted)

## DO

- `transition: var(--motion-hover)` on interactive surfaces
- `transition: var(--motion-modal)` on dialog content
- Pair dropdown animation with `--motion-dropdown-offset` (4px)
- Pair modal enter with `--motion-modal-scale-from` (0.98)
- Stop skeleton animation when data arrives

## DO NOT

- `transition: all 200ms ease` hardcoded
- `transition-transform` on button hover
- `@keyframes bounce`, `spring()`, framer-motion spring defaults
- Page transition animations
- Shimmer gradients on skeleton
- Durations outside 100/150/200/300ms (except skeleton 2s cycle preset)

## Selection Guide

| Scenario | Token |
|----------|-------|
| Button/card hover | `motion-hover` |
| Select/Dropdown open | `motion-dropdown` + offset |
| Dialog/Sheet | `motion-modal` + scale-from |
| Toast | `motion-toast` |
| Accordion/Collapsible | `motion-accordion` |
| Skeleton pulse | `motion-skeleton` + skeleton-cycle |
| Custom DS pattern | `motion-fast` + `motion-ease-in-out` |

## Future: Component Tokens

```
motion-hover → button-transition (alias)
motion-modal → dialog-transition (alias)
```

Interaction Tokens (blueprint) will compose motion + color — not replace presets.
