# Color System Rules

## DO

- Use semantic tokens: `var(--color-text-primary)`
- Use focus tokens: `var(--color-focus-ring)`, `var(--focus-ring-width)`, `var(--focus-ring-offset)`
- Pair backgrounds with their documented text tokens (see contrast-matrix.ts)
- Use `color-success-background` + `color-success-text` together for status indicators
- Use `color-{feedback}-foreground` only with white/inverse text on top

## DO NOT

- Import from `foundations/colors/primitives/` in component code
- Use raw hex values in components (`#242F50`, `#FFFFFF`)
- Use Tailwind color utilities with hardcoded palette (`bg-blue-600`, `text-gray-500`)
- Use `opacity` for disabled states — use `color-disabled-*` tokens
- Define focus styles per component — use global focus tokens
- Use `color-action-primary` for backgrounds, text, or borders
- Use primary brand color for info banners — use `color-info-*` tokens
- Use semantic feedback text colors on foreground solids — use white text instead

## Surface Selection Guide

| UI Element | Token |
|------------|-------|
| Page background | `color-background` |
| Card | `color-surface` |
| Card header (nested) | `color-surface-raised` |
| Dropdown / Popover | `color-surface-floating` |
| Dialog backdrop | `color-overlay` |
| Sidebar | `color-surface-muted` |
| Table row hover | `color-surface-hover` |
| Selected nav item | `color-surface-active` |

## Feedback Selection Guide

| Need | Tokens |
|------|--------|
| Subtle status banner | `background` + `text` + `border` |
| Status badge (outline) | `border` + `text` |
| Status badge (solid) | `foreground` + white text |
| Invalid form field | `error-border` + `error-text` + `error-background` (subtle tint) |
