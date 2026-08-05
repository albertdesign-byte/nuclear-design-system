# Internal — deliberately NOT exported

This document lists what **Token Aggregation excludes** from the public API.
Applications, components, and tooling must not import these paths or symbols.

> **Rule:** If it is not exported from `foundations/tokens/index.ts`, it is internal.

---

## Per-foundation exclusions

### Colors (`foundations/colors/`)

| Internal | Why |
|----------|-----|
| `primitives/` | Raw OKLCH steps — semantic `--color-*` only in components |
| `resolvePrimitive*` | Implementation detail |
| `primitiveColorNames`, `colorScale` | Scale math, not design intent |
| Individual `colors.css` import | Use `foundations/tokens/index.css` |

**Public via aggregation:** contracts, `toCssOklch`, `contrastMatrix`, `surfaceArchitecture`, `lightSemantic`, `darkSemantic`, `focus`

---

### Typography (`foundations/typography/`)

| Internal | Why |
|----------|-----|
| `primitives/` | `--font-size-*`, `--font-weight-*` forbidden in components |
| `resolvePrimitive*` | Internal |
| `primitiveTypographyNames` | Lint reference only |

**Public via aggregation:** `allSemanticTypographyTokens`, `semanticTypographyRoles`, `resolveSemanticTypography`, `semanticTypography`

---

### Spacing (`foundations/spacing/`)

| Internal | Why |
|----------|-----|
| `primitives/` | `--spacing-*` numeric scale |
| `resolvePrimitiveSpacing` | Internal |

**Public via aggregation:** `--space-*` contract, `resolveInlineSpacing`, `resolveStackSpacing`, `resolveContextSpacing`

---

### Breakpoints (`foundations/breakpoints/`)

| Internal | Why |
|----------|-----|
| `primitives/` | Raw pixel breakpoints |
| Tailwind `@screen` aliases in CSS | Mapped in Technical Setup (Fase 3) |

**Public via aggregation:** semantic tier names, container/layout tokens, resolve helpers

---

### Radius (`foundations/radius/`)

| Internal | Why |
|----------|-----|
| `--radius-pill` | Circular geometry implementation |
| Primitive step definitions | Components use `--radius-md`, not `--radius-step-3` |

**Public via aggregation:** scale + context tokens, `--radius` base alias

---

### Shadows (`foundations/shadows/`)

| Internal | Why |
|----------|-----|
| `primitives/` | Layer stack math (`--shadow-layer-*`) |
| Elevation API | Eliminated — depth is a design rule, not tokens |

**Public via aggregation:** `shadow-none` … `shadow-xl` only

---

### Motion (`foundations/motion/`)

| Internal | Why |
|----------|-----|
| `durationPrimitives`, raw ms maps | Presets are primary API |
| Individual property tokens in CSS | Bundled in `--motion-{preset}-*` |

**Public via aggregation:** 6 presets, duration/easing roles, resolve helpers

---

### Opacity (`foundations/opacity/`)

| Internal | Why |
|----------|-----|
| `--opacity-step-*` | Numeric alpha ladder |
| Disabled/overlay opacity | Owned by Colors foundation |

**Public via aggregation:** `opacity-subtle`, `opacity-muted`, skeleton preset

---

### Z-Index (`foundations/z-index/`)

| Internal | Why |
|----------|-----|
| `--z-layer-*` | Primitive step names |
| `layerToPrimitive` | Mapping implementation |

**Public via aggregation:** 7 semantic layers (`--z-base` … `--z-modal`)

---

### Iconography (`foundations/iconography/`)

| Internal | Why |
|----------|-----|
| Raw px scale tables | Use `--icon-size-*` semantic roles |
| Lucide import paths | Technical Setup concern |

**Public via aggregation:** 4 sizes, 1 stroke, context mappings, usage rules

---

## Aggregation internals

These files exist inside `foundations/tokens/` but are **not** re-exported from `index.ts`:

| Path | Role |
|------|------|
| `index.ts` | Default public API |
| `index.css` | CSS runtime |
| `contracts.ts` | `@medmo/tokens/contracts` |
| `resolve.ts` | `@medmo/tokens/resolve` |
| `tooling.ts` | `@medmo/tokens/tooling` |
| `public/contracts.ts` | Implementation — consume via entry points |
| `public/resolve.ts` | Implementation — consume via entry points |
| `public/types.ts` | Implementation — consume via `index.ts` |
| `public/constants.ts` | Essentials only — authoring in `tooling.ts` |
| `public/tooling.ts` | DS authoring exports |

---

## Stability boundary

| Can change without semver major | Requires semver major |
|--------------------------------|----------------------|
| Internal file paths | Public CSS variable names in contracts |
| Primitive values (if semantic output unchanged) | Removing/renaming exported TS symbols |
| Foundation folder structure | `allPublicCssVariables` entries |
| Implementation of resolve helpers | Breaking resolve function signatures |

---

## Enforcement (future)

During Technical Setup and component work, lint rules should block:

```typescript
// ❌ Forbidden
import { semanticSpacing } from "../../foundations/spacing/semantic"
import "../../foundations/colors/colors.css"

// ✅ Required
import { semanticSpacing } from "../../foundations/tokens"
import "../../foundations/tokens/index.css"
```
