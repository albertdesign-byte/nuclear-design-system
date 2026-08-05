# Medmo Shadow System

Framework-agnostic box-shadow tokens. **No Elevation foundation.**

## Public API

| Token | Role |
|-------|------|
| `shadow-none` | Default — flat |
| `shadow-xs` | Hover lift |
| `shadow-sm` | Resting raised surface |
| `shadow-md` | Floating panel |
| `shadow-lg` | Modal / dialog |
| `shadow-xl` | Maximum float (rare) |

## Depth without "Elevation"

Depth = Colors surfaces + ring borders + shadow when needed. Not a token name.

## Architecture

```
Primitives (internal)          Semantic (public API only)
─────────────────────          ───────────────────────────
shadow-layer-md             →  shadow-md
```

## Rules

Components consume ONLY `--shadow-*`. Never `--shadow-layer-*`.

## Documentation

`docs/design-system/foundations/shadows.mdx`
