# Medmo Spacing System

Framework-agnostic spacing tokens. Grid: **4px base**, **8px component rhythm**.

## Grid Rules

1. Base unit: **4px** — all values are multiples of 4
2. Exception: **2px** hairline only (focus offset, optical tweaks)
3. Component rhythm: **8px** for inline sm, table cells, tight stacks
4. Intermediate steps (12, 20, 28…) for precision without breaking grid

## Architecture

```
Primitives (internal)     Semantic (components)              Future
─────────────────────     ─────────────────────              ──────
spacing-8              →  space-inline-sm               →   Button padding
spacing-16             →  space-stack-md                    Input padding
spacing-16             →  space-card                        Card padding
spacing-8              →  space-table                       Table cell padding
```

## Semantic Categories

| Category | Tokens | Use |
|----------|--------|-----|
| **Inline** | xs, sm, md, lg | Horizontal gaps |
| **Stack** | xs, sm, md, lg, xl | Vertical gaps |
| **Context** | page, section, card, form, table, dialog | Layout-specific |

## Rules

Components consume ONLY `--space-*` variables. Never `--spacing-*` or raw px.

## Documentation

`docs/design-system/foundations/spacing.mdx`
