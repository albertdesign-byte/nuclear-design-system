# Iconography Rules

## Public API

| Token | Value | Role |
|-------|-------|------|
| `icon-sm` | 14px | Compact only |
| `icon-md` | 16px | **Default** |
| `icon-lg` | 20px | Standalone |
| `icon-xl` | 24px | Grid base — rare |
| `icon-size` | → md | System default |
| `icon-stroke` | 2 | Universal stroke |

**Lucide only.** Gap spacing: `--space-inline-xs` / `--space-inline-sm` (Spacing).

## Color

Always `currentColor` on SVG — inherits text/icon color from parent semantic color token.

## DO

- Lucide icons with `strokeWidth={2}` / `var(--icon-stroke)`
- `width/height: var(--icon-md)` or size prop mapped to tokens
- Icon + text: always pair with visible text OR `aria-label` on icon-only control
- Button: icon-md + gap `space-inline-sm`
- Input prefix: icon-md + gap `space-inline-xs`
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

New size needs 3+ components + cannot map to sm/md/lg/xl → DS review. Default answer: use icon-md.
