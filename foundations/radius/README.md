# Medmo Radius System

Framework-agnostic border radius tokens. Subtle scale — base 8px.

## Scale

| Token | Value | Use |
|-------|-------|-----|
| `radius-none` | 0 | Tables, flush panels |
| `radius-sm` | 4px | Checkbox, badges |
| `radius-md` | 6px | Compact controls |
| `radius-lg` | 8px | **Default** — buttons, inputs, cards |
| `radius-xl` | 12px | Dialogs, popovers |
| `radius-2xl` | 16px | Special containers |
| `radius-full` | pill | Avatars, pills |

## Architecture

```
Primitives (internal)     Semantic (components)              Future
─────────────────────     ─────────────────────              ──────
radius-4               →  radius-sm                     →   badge-radius
radius-8               →  radius-lg / radius-button     →   button-border-radius
radius-12              →  radius-xl / radius-dialog     →   dialog-border-radius
```

## Rules

Prefer `--radius-{context}` over scale. Never `--radius-4` px primitives in components.

## Documentation

`docs/design-system/foundations/radius.mdx`
