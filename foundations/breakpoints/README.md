# Medmo Breakpoint System

Framework-agnostic responsive tokens. Viewport behavior + container + layout semantics.

## Viewport Tiers

| Semantic | Alias | Min-width | Layout mode |
|----------|-------|-----------|-------------|
| *(narrow base)* | — | < 640px | Stacked, scroll tables |
| Compact | sm | 640px | Toolbar row, comfortable padding |
| Medium | md | 768px | Two-column forms, drawer sidebar |
| Expanded | lg | 1024px | Persistent sidebar, worklists |
| Large | xl | 1280px | Full desktop clinical workflow |
| Wide | 2xl | 1536px | Max content cap |

## Architecture

```
Primitives (internal)          Semantic (components/templates)     Future
─────────────────────          ───────────────────────────────     ──────
breakpoint-expanded         →  layout-content-width           →   list-page-max-width
container-lg-max            →  container-lg                   →   data-table-wrapper-max
spacing-16/24               →  layout-page-padding            →   page-shell-padding
```

## Semantic Categories

| Category | Tokens | Use |
|----------|--------|-----|
| **Container** | xs, sm, md, lg, xl | Max-width caps for content regions |
| **Layout** | page-padding, content-width, reading-width, dashboard-width | Page shell behavior |

## Rules

Components consume ONLY `--container-*` and `--layout-*`. Never `--breakpoint-*` or raw px.

## Dependencies

- `breakpoints.css` references `--spacing-16` and `--spacing-24` from Spacing — load spacing first.

## Documentation

`docs/design-system/foundations/breakpoints.mdx`
