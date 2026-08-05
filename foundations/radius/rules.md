# Radius Rules

## Architecture

- **Primitive:** px steps (`--radius-4`, …, `--radius-pill`) — internal only
- **Semantic scale:** `--radius-sm` … `--radius-full`, `--radius` (base = lg)
- **Semantic context:** `--radius-button`, `--radius-input`, … — preferred in components
- **Future:** component tokens (`button-border-radius`) map from context tokens

## DO

- Prefer context tokens: `var(--radius-button)`, `var(--radius-checkbox)`
- Use `--radius-lg` as default when no context applies
- Use `--radius-none` for flush table wrappers and nested full-bleed content
- Use `--radius-full` only for avatars and pills

## DO NOT

- Hardcode `rounded-[4px]`, `border-radius: 6px`, `rounded-lg` (Tailwind) in component source
- Use primitive `--radius-8` in components (use `--radius-lg` or `--radius-input`)
- Apply `--radius-2xl` to everyday controls — reads decorative
- Use `--radius-full` on cards, dialogs, or tables
- Exceed `--radius-xl` on overlay surfaces without approval

## Selection Guide

| Element | Token |
|---------|-------|
| Checkbox | `radius-checkbox` / `radius-sm` |
| Badge | `radius-badge` / `radius-sm` |
| Input, Select, Textarea | `radius-input` / `radius-lg` |
| Button | `radius-button` / `radius-lg` |
| Card | `radius-card` / `radius-lg` |
| Dialog, Popover, Dropdown | `radius-dialog` / `radius-xl` |
| Avatar | `radius-avatar` / `radius-full` |
| Table wrapper | `radius-none` |

## Audit fixes addressed

- Checkbox `rounded-[4px]` → `var(--radius-checkbox)`
- Legacy `--radius: 0.625rem` (10px) → `0.5rem` (8px) via `--radius-lg`

## Future: Component Tokens

```
radius-button → button-border-radius
radius-input  → input-border-radius
radius-card   → card-border-radius
```
