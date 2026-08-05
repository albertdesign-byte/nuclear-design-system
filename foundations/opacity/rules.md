# Opacity Rules

## Token creation principle

Before adding an opacity token:

> "¿Este token representa una decisión de diseño reutilizable o simplemente un valor?"

- Value only → primitive (`--opacity-20` internal)
- Shared intent → semantic (`--opacity-subtle`) or preset (`--opacity-skeleton-*`)

Try to **reduce** before adding. One consumer → probably should not exist.

## Public API (complete list)

| Token | Value | Intent |
|-------|-------|--------|
| `opacity-subtle` | 0.2 | Alpha wash with semantic colors |
| `opacity-muted` | 0.6 | Decorative reduced presence |
| `opacity-skeleton-from` | 0.5 | Skeleton pulse min |
| `opacity-skeleton-to` | 1 | Skeleton pulse max |

**That is the entire API.** No more opacity tokens without DS approval.

## Opacity Philosophy (design rules — not tokens)

### Owned by Colors — do NOT use opacity tokens

| Need | Use instead |
|------|-------------|
| Modal backdrop | `color-overlay` |
| Focus ring | `color-focus-ring`, `--focus-ring-width` |
| Disabled state | `color-disabled-background`, `color-disabled-text`, `color-disabled-border` |
| Hover background | `color-surface-hover` |
| Muted body text | `color-text-muted`, `color-text-secondary` |

### When opacity IS appropriate

- Pairing `--opacity-subtle` with a **color token** for invalid rings (`color-destructive` at 20%)
- `--opacity-muted` on **decorative** icons (`aria-hidden="true"`) — never clinical data text
- Skeleton pulse range with `motion-skeleton`

### Anti-patterns (audit fixes)

| Pattern | Fix |
|---------|-----|
| `disabled:opacity-50` | `color-disabled-*` tokens |
| `text-foreground/60` for data | `color-text-secondary` |
| `bg-black/40` overlay | `color-overlay` |
| `ring-ring/50` | `color-focus-ring` |
| Random `opacity-37` | Not allowed — use semantic or color |

## DO

- `color-mix(in oklch, var(--color-error-border) var(--opacity-subtle), transparent)` for invalid ring wash
- `opacity: var(--opacity-muted)` on decorative SVG with `aria-hidden`
- Skeleton: animate between `opacity-skeleton-from` and `opacity-skeleton-to` via `motion-skeleton`

## DO NOT

- Create `opacity-disabled`, `opacity-overlay`, `opacity-focus`
- Apply opacity to text that must meet WCAG contrast
- Use opacity as primary disabled indicator
- Add new opacity steps without Foundation review

## Future

If a new alpha intent appears in 3+ components, propose ONE semantic token — not a scale expansion.
