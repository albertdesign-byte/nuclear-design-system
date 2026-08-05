# Shadow Rules

## Public API

Only these tokens exist:

```
shadow-none | shadow-xs | shadow-sm | shadow-md | shadow-lg | shadow-xl
```

There is **no** `elevation-*`, `depth-*`, or `z-elevation-*` token layer.

## Depth is a design rule

Visual depth in Medmo is communicated primarily by:

1. **Colors surface hierarchy** — background → surface → surface-raised → surface-floating → overlay
2. **Borders** — `ring-1 ring-foreground/10` (preferred over shadow for cards)
3. **Shadows** — only when tone + border are insufficient

Document depth decisions in component MDX — never as extra token names.

## DO

- Default to `--shadow-none` + ring border for cards
- Use `--shadow-xs` only for hover lift on interactive surfaces
- Pair `--shadow-md` with `color-surface-floating` on dropdowns/popovers
- Pair `--shadow-lg` with `color-overlay` backdrop on dialogs
- Prefer surface tokens before adding shadow

## DO NOT

- Introduce `elevation-sm` or map shadows to an "elevation scale" in code
- Use `--shadow-lg` on static cards at rest
- Use `--shadow-xl` without reviewing if md/lg + surface hierarchy suffices
- Stack heavy shadow + heavy border + strong background contrast (visual noise)
- Hardcode `box-shadow: 0 4px 6px …` in components

## Selection Guide

| Scenario | Shadow | Surface (Colors) |
|----------|--------|------------------|
| Table, form field | none | surface / background |
| Card at rest | none (+ ring) | surface |
| Card hover | xs | surface |
| Card without ring | sm | surface-raised |
| Dropdown, Select menu | md | surface-floating |
| Popover, Tooltip | md | surface-floating |
| Dialog, Sheet | lg | surface on overlay |
| Command palette | xl | surface-floating |

## Future: Component Tokens

```
shadow-md → dropdown-shadow (component token, maps to shadow-md)
shadow-lg → dialog-shadow
```

Component tokens may alias shadow-* — never introduce elevation-*.
