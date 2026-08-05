# Breakpoints Rules

## Architecture

- **Primitive:** min-width values (`--breakpoint-compact`, …) and container max primitives
- **Semantic:** `--container-*`, `--layout-*` — the only tokens for components/templates
- **Future:** component tokens (`data-table-min-width`, `form-max-width`) map from semantic layout

## Canonical Names

Use semantic viewport names in documentation and design reviews:

| Semantic | Tailwind alias | Min-width |
|----------|----------------|-----------|
| Compact | sm | 640px |
| Medium | md | 768px |
| Expanded | lg | 1024px |
| Large | xl | 1280px |
| Wide | 2xl | 1536px |

Base (narrow): `< 640px` — implicit mobile tier, not a CSS token.

## DO

- Use `--layout-page-padding` for page shell horizontal inset
- Use `--layout-content-width` as default page content max-width wrapper
- Use `--layout-reading-width` for clinical notes, consent, help text
- Use `--layout-dashboard-width` for dashboard and stat grid shells
- Use `--container-xs` … `--container-xl` when a specific cap is needed inside a layout
- Reference semantic breakpoint names in MDX, specs, and design reviews
- Use `@media (min-width: var(--breakpoint-expanded))` in custom CSS when needed

## DO NOT

- Use raw px in components: `max-width: 1024px`, `padding: 24px`
- Use Tailwind aliases in Medmo documentation (reserve for Technical Setup mapping)
- Use `--breakpoint-*` in component styles (media queries and tooling only)
- Use `--container-xl` for reading prose (use `--layout-reading-width`)
- Use `--container-xs` for full page layouts or data tables
- Stretch tables to 100vw on wide monitors without horizontal scroll consideration
- Add breakpoints beyond Wide without Design System approval

## Selection Guide

| Scenario | Token |
|----------|-------|
| Page horizontal gutter | `layout-page-padding` |
| Default page content wrapper | `layout-content-width` |
| Clinical notes / long text | `layout-reading-width` |
| Dashboard / coordinator view | `layout-dashboard-width` |
| Modal form | `container-xs` or `container-sm` |
| Auth / registration | `container-sm` |
| Settings section | `container-md` |
| Patient list / worklist | `container-lg` inside `layout-content-width` |
| Dashboard max canvas | `container-xl` / `layout-dashboard-width` |

## Clinical Dense Layouts

- Below Expanded: tables scroll horizontally — do not hide columns without priority rules
- At Expanded+: persistent filters; min column width via table component tokens (future)
- Use `space-table` (Spacing) for cell padding — not layout tokens
- Density mode (future) reduces spacing, not breakpoint tiers

## Dashboards

- Shell: `layout-dashboard-width` + `layout-page-padding`
- Stat grids: respect `container-xl` cap at Wide
- Sidebar: overlay below Expanded, persistent at Expanded+

## Forms

- Narrow base: single column always
- Medium+: two columns allowed for short fields (name / DOB)
- Max width: `container-sm` (simple) or `container-md` (multi-section)
- Never full `container-xl` for form content

## Tables

- Wrapper: `layout-content-width` or `layout-dashboard-width`
- Below Expanded: horizontal scroll on table container, sticky first column (Pattern phase)
- At Expanded+: show priority columns; defer optional columns to expandable rows
- Never set table `width: 100vw`

## Future: Component Tokens

```
layout-content-width → page-content-max-width (template token)
container-lg         → list-page-max-width (template token)
layout-reading-width → clinical-note-max-width (domain pattern)
```
