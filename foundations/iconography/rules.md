# Iconography Rules

## Public API

| Token | Value | Role |
|-------|-------|------|
| `icon-xs` | 12px | Extra compact |
| `icon-sm` | 16px | **Default** |
| `icon-md` | 20px | Emphasis |
| `icon-lg` | 24px | Standalone |
| `icon-xl` | 32px | Feature focal — rare |
| `icon-size` | → sm | System default |
| `icon-stroke` | 2 | Universal stroke |

**Lucide only.** Button gap: `--space-button-icon-gap` (6px). Other inline gaps use `--space-inline-*`.

## Color

Always `currentColor` on SVG — inherits text/icon color from parent semantic color token.

## DO

- Lucide icons with `strokeWidth={2}` / `var(--icon-stroke)`
- `width/height: var(--icon-sm)` or size prop mapped to tokens
- Icon + text: always pair with visible text OR `aria-label` on icon-only control
- Button: icon-sm + gap `space-button-icon-gap` (6px)
- Input prefix: icon-sm + gap `space-inline-xs`
- Status: icon + text + color token — never icon alone for critical state

## DO NOT

- Mix icon libraries
- Replace clinical labels with icons only
- Decorative icons in data-dense tables
- `size-4`, `w-5 h-5` hardcoded in component source
- strokeWidth 1, 1.5, or 2.5
- icon-xl in every table row
- Icons for marketing/wellness decoration

## When NOT to use icons

- Critical clinical labels (diagnosis, medication) — text only
- Dense table columns where text + color suffice
- Every menu item "for visual interest"
- Duplicate meaning already in heading
- Replacing required form labels

## Token creation principle

New size needs 3+ components + cannot map to xs/sm/md/lg/xl → DS review. Default answer: use icon-sm.
