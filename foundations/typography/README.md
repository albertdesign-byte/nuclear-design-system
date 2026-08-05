# Medmo Typography System

Framework-agnostic typography tokens. Same architecture as Colors: **Primitive → Semantic → Components**.

## Architecture

```
Primitives (internal)     Semantic Tokens (components)        CSS Variables
─────────────────────     ──────────────────────────────        ───────────────
font-size-3xl          →  text-h1                          →  --text-h1-size
font-weight-semibold   →  text-h1                          →  --text-h1-weight
font-family-sans       →  text-body                        →  --text-body-font-family
```

## Semantic Roles

| Role | Use |
|------|-----|
| `display` | Major page title (max 1/page) |
| `h1` | Page heading |
| `h2` | Section heading |
| `h3` | Subsection heading |
| `title` | Card/dialog titles |
| `body-large` | Emphasized body |
| `body` | Default reading text (16px) |
| `body-small` | Secondary content (14px min) |
| `label` | Form labels |
| `caption` | Timestamps, metadata |
| `overline` | Uppercase category labels |
| `code` | Monospace data/IDs |

## Rules

1. **Components consume ONLY `--text-{role}-*` variables**
2. **Never use `--font-size-*` or `--font-weight-*` in components**
3. **Hierarchy via size + weight + space — not color**
4. **IBM Plex Sans Condensed everywhere except `code` role**

## Files

| File | Purpose |
|------|---------|
| `primitives/` | Size, weight, line-height scales (internal) |
| `semantic/roles.ts` | 12 semantic role definitions |
| `typography.css` | Runtime CSS custom properties |
| `accessibility.ts` | WCAG and clinical readability rules |
| `contract.ts` | Allowed token names |

## Documentation

`docs/design-system/foundations/typography.mdx`
