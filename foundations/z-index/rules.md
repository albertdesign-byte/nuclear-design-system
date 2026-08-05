# Z-Index Rules

## Public API (complete list)

| Token | Value | Responsibility |
|-------|-------|----------------|
| `z-base` | 0 | Default content |
| `z-sticky` | 10 | Sticky in-page chrome |
| `z-dropdown` | 20 | Menus, Select, Combobox |
| `z-popover` | 30 | Popover, detached panels |
| `z-tooltip` | 40 | Tooltips |
| `z-toast` | 50 | Toast notifications |
| `z-modal` | 60 | Dialog, Sheet, blocking overlay |

**Seven tokens. Nothing else without Design System approval.**

## Z-index ≠ visual depth

Depth = Colors surfaces + Shadows. Z-index = **who receives the click first**.

## Stacking rules (mandatory)

1. Tooltip **>** Popover **>** Dropdown
2. Modal **>** Toast **>** Tooltip
3. Sticky **<** Dropdown (sticky never beats portaled menus)
4. Sticky **<** Modal (always)
5. Never create new levels from a component
6. Never hardcode numbers (`z-index: 9999`, `z-50`)

## DO

- `z-index: var(--z-modal)` on Dialog portal content
- `z-index: var(--z-dropdown)` on Select/DropdownMenu content
- `z-index: var(--z-sticky)` on sticky TableHead
- Ask token creation question before proposing new layer

## DO NOT

- `z-index: 9999` or Tailwind `z-50` in component source
- New `--z-sidebar`, `--z-drawer`, `--z-command` without DS review
- Use z-index to simulate visual elevation — use Shadows
- Raise toast above modal to "ensure visibility"

## Nested floating UI

Select **inside** Popover: portal content uses `z-popover` (same as parent panel tier) — document in component, do not invent `z-9999`.

Tooltip **inside** Popover: use `z-tooltip` — always wins over popover.

## Token creation principle

New layer needs: (1) distinct interaction priority, (2) 3+ component consumers, (3) cannot reuse existing layer. Otherwise → use existing token.

## Future

Command palette → evaluate `z-modal` (blocking) vs new layer only if justified.
