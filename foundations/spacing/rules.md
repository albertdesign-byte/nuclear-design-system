# Spacing Rules

## Grid

- Base unit: 4px
- Most layout values: multiples of 4
- 6px: approved optical exception for Button icon-to-label spacing
- 2px: hairline exceptions only
- Preferred component rhythm: 8px (`space-inline-sm`, `space-stack-sm`, `space-table`)

## DO

- Use semantic tokens: `var(--space-stack-md)`, `var(--space-card)`
- Use `space-inline-*` for horizontal flex/grid gaps
- Use `space-stack-*` for vertical flex/grid gaps
- Use context tokens for their named purpose (`space-dialog` in dialogs)
- Use `space-form-label` (4px) between label and input
- Use `space-button-icon-gap` (6px) between a Button icon and label
- Use `space-button-padding-*` for Button horizontal padding
- Use `space-section` (48px) between major page regions

## DO NOT

- Use primitive `--spacing-16` in components
- Use raw values: `padding: 16px`, `gap: 1rem`, `p-4` (Tailwind primitive)
- Use `space-page` for card internal padding
- Use `space-table` for form field gaps
- Use `space-section` between form fields (use `space-form`)
- Use 2px for anything except hairline/optical cases

## Selection Guide

| Scenario | Token |
|----------|-------|
| Icon + text in button | `space-button-icon-gap` |
| Button horizontal padding | `space-button-padding-sm/md/lg/xl/xxl` |
| Toolbar actions | `space-inline-md` |
| Label → Input | `space-form-label` or `space-stack-xs` |
| Form fields in group | `space-form` |
| Form section break | `space-form-group` or `space-stack-xl` |
| Card internal padding | `space-card` |
| Cards in grid | `space-card-gap` |
| Table cell padding | `space-table` |
| Dialog body padding | `space-dialog` |
| Page content inset | `space-page` |
| PageHeader → content | `space-section` |

## Future: Component Spacing

```
space-card → card-padding (component token)
space-table → table-cell-padding (component token)
```

Component tokens will map 1:1 from semantic context tokens during Primitives phase.
