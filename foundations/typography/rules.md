# Typography Rules

## DO

- Use semantic typography tokens: `var(--text-h1-size)`, `var(--text-body-weight)`, etc.
- Apply full role property set (family, size, weight, line-height, letter-spacing)
- Use `text-body` (16px) for clinical reading content
- Use `text-label` for all form labels
- Use `text-code` for patient IDs, order numbers, aligned numeric data
- Use `text-overline` with `text-transform` from token (uppercase)
- Build hierarchy with size and weight — pair with `color-text-*` tokens for color

## DO NOT

- Import from `foundations/typography/primitives/` in components
- Use raw font sizes: `text-sm`, `text-lg`, `text-2xl`, `16px`, `1rem`
- Use raw font weights: `font-bold`, `font-medium`, `font-weight: 600`
- Use Geist, Inter, system-ui, or any font other than IBM Plex
- Use color alone to create heading hierarchy (blue h1, gray h2)
- Use `text-caption` for clinical values, dosages, or patient data
- Use `text-overline` for readable sentences
- Use `font-weight: 300` (light) for functional UI text

## Role Selection Guide

| Content | Role |
|---------|------|
| Page title | `h1` |
| Section in page | `h2` |
| Subsection | `h3` |
| Card/dialog title | `title` |
| Paragraph, description | `body` |
| Clinical summary intro | `body-large` |
| Helper text, compact cells | `body-small` |
| Input/checkbox label | `label` |
| "Last updated 3 min ago" | `caption` |
| "PATIENTS" above heading | `overline` |
| Patient ID `MRN-28491` | `code` |

## CSS Utility Pattern (Technical Setup)

```css
.text-h1 {
  font-family: var(--text-h1-font-family);
  font-size: var(--text-h1-size);
  font-weight: var(--text-h1-weight);
  line-height: var(--text-h1-line-height);
  letter-spacing: var(--text-h1-letter-spacing);
  text-transform: var(--text-h1-text-transform);
}
```

Components use `.text-h1` — never individual primitive variables.
