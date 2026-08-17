# Medmo Iconography

<!-- iconography-contract: sizes=xs,sm,md,lg,xl;default=sm;library=Lucide;stroke=2 -->

Lucide-only. Five semantic sizes. One universal stroke. Usage rules — not just a size chart.

## Source of truth

Executable iconography data is defined only in:

- `scale.ts` — primitive dimensions and the 24px base grid.
- `semantics.ts` — five public roles, default role, Lucide library, stroke, context mappings, and the approved documentation catalog.

`contract.ts`, `tokens.ts`, public tooling, CSS, and documentation derive from or are validated against those files. They must not define an independent size matrix.

## Current contract

- Roles: `icon-xs` through `icon-xl`.
- Product default: `icon-sm` (16px).
- Library: Lucide (`lucide-react`).
- Stroke: `2`.
- Color: `currentColor`.
- Icon-to-text gaps: semantic Spacing tokens.

## Documentation

`docs/design-system/foundations/icons.mdx`
