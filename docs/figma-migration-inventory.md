# Nuclear DS — Figma Migration Inventory

Discovery only. Code is the source of truth. Nothing in this document was created, renamed, or reorganized in Figma. No components, tokens, variants, or states were invented.

**Figma file (read-only):** [Nuclear-DS](https://www.figma.com/design/sc8cV7BNdyenGNDMT7sbQq/Nuclear-DS?node-id=0-1)  
**File key:** `sc8cV7BNdyenGNDMT7sbQq`  
**Inspected node:** `0:1` (Cover)

---

## 1. Source of Truth

| Layer | Role in this inventory |
| --- | --- |
| TypeScript under `foundations/` | Canonical token values and names |
| CSS under `foundations/**/*.css` | Runtime mirror of those tokens |
| `src/components/{name}/` | Canonical component implementation |
| Live docs (`src/app/docs/`) + `components-registry.ts` | Documentation index — secondary |
| Storybook `*.stories.tsx` | Examples and controls — secondary |
| Figma file `sc8cV7BNdyenGNDMT7sbQq` | Target for a later migration — empty of Nuclear DS content today |

**Precedence when sources disagree:** CODE IMPLEMENTATION > STORYBOOK / DOCS REGISTRY > ASSUMPTIONS.

Conflicts are listed in §13 and §14 instead of being resolved here.

**Out of scope for this pass:** creating Figma pages, variables, styles, or components; changing the design system; proposing new variants or a11y states that are not in code.

---

## 2. Foundations

Ten token families exist on disk. Five of them are registered in `foundations/tokens/registry.ts` (`tokenFamilies`). The other five exist as CSS + TypeScript contracts and are imported by `foundations/tokens/index.css`, but are **not** listed in `tokenFamilies`.

| Family | On disk | In `tokenFamilies` | Live docs page | MDX | Storybook CSF |
| --- | --- | --- | --- | --- | --- |
| Colors | yes | yes | `/docs/foundations/colors` | `docs/design-system/foundations/colors.mdx` | Registry claims `Foundations/Colors`. **No `*.stories.tsx` found.** |
| Typography | yes | yes | `/docs/foundations/typography` | `docs/design-system/foundations/typography.mdx` | Same — CSF claimed, file missing |
| Spacing | yes | yes | `/docs/foundations/spacing` | `docs/design-system/foundations/spacing.mdx` | Same |
| Radius | yes | yes | `/docs/foundations/radius` | `docs/design-system/foundations/radius.mdx` | Same |
| Shadows | yes | yes | `/docs/foundations/shadows` | `docs/design-system/foundations/shadows.mdx` | Same |
| Breakpoints | yes | **no** | **no live page** | UNCONFIRMED dedicated MDX | none |
| Motion | yes | **no** | **no live page** | `docs/design-system/foundations/motion.mdx` | none |
| Opacity | yes | **no** | **no live page** | UNCONFIRMED | none |
| Z-index | yes | **no** | **no live page** | UNCONFIRMED | none |
| Iconography | yes | **no** | `/docs/foundations/icons` | UNCONFIRMED dedicated MDX | none |

Additional live foundation pages that are **guidelines, not token families:**

| Page | Path |
| --- | --- |
| Overview | `/docs/foundations` |
| Disabled State Guidelines | `/docs/foundations/disabled-state` |

**Architecture notes from code (not invented):**

- Public consumer entry: `foundations/tokens/` (`index.ts`, `registry.ts`, `css-export.ts`, `public/contracts.ts`).
- Apps import CSS only via `foundations/tokens/index.css`, wired first in `src/app/globals.css`.
- `foundations/tokens/layers.ts` marks `technicalSetup` and `components` as `status: "pending"`. Tailwind `@theme` mapping **does exist** in `src/app/theme.css`. Whether “pending” is stale is UNCONFIRMED.
- Components are instructed to consume **semantic** CSS variables, not primitives.

**Icon library (implemented):** Lucide (`lucide-react`). Color is `currentColor`. Stroke token `--icon-stroke` = `2`. Default size `--icon-size` aliases `--icon-sm` (16px).

---

## 3. Tokens

### 3.1 Counts

| Category | Count | Notes |
| --- | --- | --- |
| Foundation families on disk | 10 | See §2 |
| Unique CSS custom properties in foundation CSS | **302** | 11 CSS files; 365 declarations including light/dark redefinitions of the same names |
| Color primitives (TypeScript only, no CSS vars) | **68** | `white`, `black`, plus 11-step scales × 6 palettes |
| Semantic color CSS vars (contract) | 44 + 2 focus metrics | Plus 2 CSS-only timeline colors (see conflicts) |
| Public semantic names in `allPublicCssVariables` | see families below | Does **not** include primitive `--spacing-*`, `--z-layer-*`, etc. |

### 3.2 Color primitives

**Defined in:** `foundations/colors/primitives/`  
**Used as:** referenced by semantic tokens (`"neutral-50"`, `"primary-800"`, …). Components must not import this file (`primitives/index.ts` says so).  
**Aliases:** none (these are the leaf values).

#### Base (`base.ts`)

| Name | Hex | OKLCH | Usage (from source) |
| --- | --- | --- | --- |
| white | `#FFFFFF` | `100% 0 0` | Card surfaces, floating panels, input backgrounds on light mode |
| black | `#000000` | `0% 0 0` | Reserved — prefer `neutral-950` for dark backgrounds |

#### Primary (`primary.scale.ts`) — hue ≈ 268.7, brand anchor step 800 = `#242F50`

| Step | Hex | OKLCH |
| --- | --- | --- |
| 50 | `#F4F7FC` | `97.5% 0.008 268.7` |
| 100 | `#E9EDF7` | `94.5% 0.014 268.7` |
| 200 | `#D6DCEC` | `89.5% 0.022 268.7` |
| 300 | `#BBC4DA` | `82% 0.032 268.7` |
| 400 | `#939EB9` | `70% 0.042 268.7` |
| 500 | `#687494` | `56% 0.052 268.7` |
| 600 | `#455173` | `44% 0.058 268.7` |
| 700 | `#303B5D` | `36% 0.061 268.7` |
| 800 | `#242F50` | `31.24% 0.0613 268.7` |
| 900 | `#1A2340` | `26.5% 0.056 268.7` |
| 950 | `#0E152D` | `20.5% 0.048 268.7` |

#### Neutral (`neutral.scale.ts`)

| Step | Hex | OKLCH |
| --- | --- | --- |
| 50 | `#F9FAFB` | `98.5% 0.002 268.7` |
| 100 | `#F4F5F8` | `97% 0.004 268.7` |
| 200 | `#E8E9EE` | `93.5% 0.006 268.7` |
| 300 | `#D5D7DD` | `88% 0.008 268.7` |
| 400 | `#B5B7BE` | `78% 0.010 268.7` |
| 500 | `#898C94` | `64% 0.012 268.7` |
| 600 | `#656971` | `52% 0.014 268.7` |
| 700 | `#494D56` | `42% 0.016 268.7` |
| 800 | `#343842` | `34% 0.018 268.7` |
| 900 | `#222630` | `27% 0.020 268.7` |
| 950 | `#121620` | `20% 0.022 268.7` |

#### Success (`success.scale.ts`)

| Step | Hex | OKLCH |
| --- | --- | --- |
| 50 | `#EDF8F2` | `97% 0.015 162` |
| 100 | `#DAF0E4` | `93.5% 0.028 162` |
| 200 | `#BEE1CE` | `88% 0.045 162` |
| 300 | `#9CCAB2` | `80% 0.060 162` |
| 400 | `#75AD91` | `70% 0.072 162` |
| 500 | `#528F72` | `60% 0.078 162` |
| 600 | `#39775B` | `52% 0.080 162` |
| 700 | `#28654A` | `46% 0.078 162` |
| 800 | `#1B543C` | `40% 0.072 162` |
| 900 | `#0F422D` | `34% 0.065 162` |
| 950 | `#073120` | `28% 0.055 162` |

#### Warning (`warning.scale.ts`)

| Step | Hex | OKLCH |
| --- | --- | --- |
| 50 | `#FFF5E9` | `97.5% 0.020 72` |
| 100 | `#FEE9D0` | `94.5% 0.040 72` |
| 200 | `#FAD8AF` | `90% 0.065 72` |
| 300 | `#EABF8A` | `83% 0.085 72` |
| 400 | `#D2A061` | `74% 0.100 72` |
| 500 | `#B8843D` | `65% 0.108 72` |
| 600 | `#9F6B1E` | `57% 0.110 72` |
| 700 | `#875806` | `50% 0.105 72` |
| 800 | `#724800` | `44% 0.095 72` |
| 900 | `#5E3900` | `38% 0.085 72` |
| 950 | `#4A2B00` | `32% 0.075 72` |

#### Error (`error.scale.ts`)

| Step | Hex | OKLCH |
| --- | --- | --- |
| 50 | `#FDF4F3` | `97.5% 0.010 29` |
| 100 | `#FDE7E3` | `94.5% 0.025 29` |
| 200 | `#FACFC8` | `89% 0.050 29` |
| 300 | `#F4B1A6` | `82% 0.080 29` |
| 400 | `#E68679` | `72% 0.120 29` |
| 500 | `#D15D4F` | `62% 0.150 29` |
| 600 | `#BB3D31` | `54% 0.165 29` |
| 700 | `#AA2018` | `48% 0.175 29` |
| 800 | `#940403` | `42% 0.170 29` |
| 900 | `#7B0000` | `36% 0.155 29` |
| 950 | `#610000` | `30% 0.135 29` |

#### Info (`info.scale.ts`)

| Step | Hex | OKLCH |
| --- | --- | --- |
| 50 | `#EFF5FF` | `97% 0.015 261` |
| 100 | `#DDEAFF` | `93.5% 0.035 261` |
| 200 | `#C0D9FF` | `88% 0.065 261` |
| 300 | `#99BFFF` | `80% 0.100 261` |
| 400 | `#6B9DF5` | `70% 0.140 261` |
| 500 | `#417CE4` | `60% 0.170 261` |
| 600 | `#2564D4` | `53% 0.185 261` |
| 700 | `#1153C6` | `48% 0.190 261` |
| 800 | `#0142AD` | `42% 0.180 261` |
| 900 | `#003291` | `36% 0.165 261` |
| 950 | `#002374` | `30% 0.145 261` |

### 3.3 Semantic colors (light CSS values)

**Defined in:** `foundations/colors/semantic/light.ts` + `dark.ts`; CSS `foundations/colors/colors.css`  
**Used as:** `var(--color-*)` in component styles.  
**Aliases:** each semantic token references a primitive (column “Alias”).

Light-mode CSS values below are the first declaration in `colors.css` (runtime). Dark theme redefines the same names.

| CSS name | Light CSS value | Aliases primitive | Category |
| --- | --- | --- | --- |
| `--color-background` | `oklch(98.5% 0.002 268.7)` | `neutral-50` | surface |
| `--color-surface` | `oklch(100% 0 0)` | `white` | surface |
| `--color-surface-raised` | `oklch(100% 0 0)` | `white` | surface |
| `--color-surface-floating` | `oklch(100% 0 0)` | `white` | surface |
| `--color-surface-muted` | `oklch(97% 0.004 268.7)` | `neutral-100` | surface |
| `--color-surface-hover` | `oklch(93.5% 0.006 268.7)` | `neutral-200` | surface |
| `--color-surface-active` | `oklch(97.5% 0.008 268.7)` | `primary-50` | surface |
| `--color-overlay` | `oklch(20% 0.022 268.7 / 40%)` | `neutral-950` + 40% alpha | surface |
| `--color-text-primary` | `oklch(34% 0.018 268.7)` | `neutral-800` | text |
| `--color-text-secondary` | `oklch(52% 0.014 268.7)` | `neutral-600` | text |
| `--color-text-muted` | `oklch(64% 0.012 268.7)` | `neutral-500` | text |
| `--color-text-disabled` | `oklch(78% 0.010 268.7)` | `neutral-400` | text |
| `--color-text-inverse` | `oklch(98.5% 0.002 268.7)` | `neutral-50` | text |
| `--color-text-link` | `oklch(31.24% 0.0613 268.7)` | `primary-800` | text |
| `--color-text-link-hover` | `oklch(36% 0.061 268.7)` | `primary-700` | text |
| `--color-border` | `oklch(78% 0.010 268.7)` | `neutral-400` | border |
| `--color-border-subtle` | `oklch(88% 0.008 268.7)` | `neutral-300` | border |
| `--color-border-strong` | `oklch(64% 0.012 268.7)` | `neutral-500` | border |
| `--color-action-primary` | `oklch(31.24% 0.0613 268.7)` | `primary-800` | action |
| `--color-action-primary-hover` | `oklch(36% 0.061 268.7)` | `primary-700` | action |
| `--color-action-primary-active` | `oklch(26.5% 0.056 268.7)` | `primary-900` | action |
| `--color-action-primary-text` | `oklch(100% 0 0)` | `white` | action |
| `--color-focus-ring` | `oklch(31.24% 0.0613 268.7 / 50%)` | `primary-800` + 50% alpha | focus |
| `--focus-ring-width` | `3px` | none | focus |
| `--focus-ring-offset` | `2px` | none | focus |
| `--color-disabled-background` | `oklch(97% 0.004 268.7)` | `neutral-100` | disabled |
| `--color-disabled-border` | `oklch(88% 0.008 268.7)` | `neutral-300` | disabled |
| `--color-disabled-text` | `oklch(78% 0.010 268.7)` | `neutral-400` | disabled |
| `--color-success-background` | `oklch(97% 0.015 162)` | success-50 | feedback |
| `--color-success-border` | `oklch(80% 0.060 162)` | success-300 | feedback |
| `--color-success-text` | `oklch(46% 0.078 162)` | success-700 | feedback |
| `--color-success-foreground` | `oklch(52% 0.080 162)` | success-600 | feedback |
| `--color-warning-background` | `oklch(97.5% 0.020 72)` | warning-50 | feedback |
| `--color-warning-border` | `oklch(83% 0.085 72)` | warning-300 | feedback |
| `--color-warning-text` | `oklch(50% 0.105 72)` | warning-700 | feedback |
| `--color-warning-foreground` | `oklch(57% 0.110 72)` | warning-600 | feedback |
| `--color-error-background` | `oklch(97.5% 0.010 29)` | error-50 | feedback |
| `--color-error-border` | `oklch(82% 0.080 29)` | error-300 | feedback |
| `--color-error-text` | `oklch(48% 0.175 29)` | error-700 | feedback |
| `--color-error-foreground` | `oklch(54% 0.165 29)` | error-600 | feedback |
| `--color-info-background` | `oklch(97% 0.015 261)` | info-50 | feedback |
| `--color-info-border` | `oklch(80% 0.100 261)` | info-300 | feedback |
| `--color-info-text` | `oklch(48% 0.190 261)` | info-700 | feedback |
| `--color-info-foreground` | `oklch(53% 0.185 261)` | info-600 | feedback |

**CSS-only (not in TS color contract):**

| CSS name | Light CSS value | Used by |
| --- | --- | --- |
| `--color-timeline-card-header-priority` | `oklch(95.5% 0.020 15)` | Timeline Card |
| `--color-timeline-card-priority-badge` | `oklch(96.5% 0.018 15)` | Timeline Card |

Exact primitive aliases for those two are UNCONFIRMED (they are not in `semanticColorCssNames`).

### 3.4 Typography

**Defined in:** `foundations/typography/`  
**CSS:** `foundations/typography/typography.css`

#### Font families

| Name | Value | Alias |
| --- | --- | --- |
| `--font-family-sans` | `"IBM Plex Sans Condensed", sans-serif` | none |
| `--font-family-component` | `"Poppins", sans-serif` | none |
| `--font-family-mono` | `var(--font-family-sans)` | aliases sans |

Semantic text roles use `--font-family-component` except `--text-code-*`, which uses `--font-family-mono`.

`src/app/theme.css` maps `--font-heading` → `--font-family-sans` (IBM Plex), while heading **roles** (`--text-h1-*` …) use Poppins. See §13.

#### Font sizes (primitives)

| Name | Value |
| --- | --- |
| `--font-size-2xs` | `0.6875rem` |
| `--font-size-xs` | `0.75rem` |
| `--font-size-sm` | `0.875rem` |
| `--font-size-base` | `1rem` |
| `--font-size-lg` | `1.125rem` |
| `--font-size-xl` | `1.25rem` |
| `--font-size-2xl` | `1.5rem` |
| `--font-size-3xl` | `1.875rem` |
| `--font-size-4xl` | `2.25rem` |

#### Font weights

| Name | Value |
| --- | --- |
| `--font-weight-light` | `300` |
| `--font-weight-regular` | `400` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |

#### Line heights

| Name | Value |
| --- | --- |
| `--line-height-tight` | `1.25` |
| `--line-height-snug` | `1.375` |
| `--line-height-normal` | `1.5` |
| `--line-height-relaxed` | `1.625` |

#### Letter spacing

| Name | Value |
| --- | --- |
| `--letter-spacing-tight` | `-0.025em` |
| `--letter-spacing-normal` | `0em` |
| `--letter-spacing-wide` | `0.025em` |
| `--letter-spacing-wider` | `0.05em` |

#### Semantic type roles (12)

Each role expands to six CSS variables: `font-family`, `size`, `weight`, `line-height`, `letter-spacing`, `text-transform`. All alias the primitives above.

| Role | Family | Size | Weight | Line height | Tracking | Transform |
| --- | --- | --- | --- | --- | --- | --- |
| display | component | 4xl | semibold | tight | tight | none |
| h1 | component | 3xl | semibold | tight | tight | none |
| h2 | component | 2xl | semibold | snug | tight | none |
| h3 | component | xl | semibold | snug | normal | none |
| title | component | lg | medium | snug | normal | none |
| body-large | component | lg | regular | relaxed | normal | none |
| body | component | base | regular | normal | normal | none |
| body-small | component | sm | regular | normal | normal | none |
| label | component | sm | medium | normal | normal | none |
| caption | component | xs | regular | normal | normal | none |
| overline | component | 2xs | medium | normal | wider | uppercase |
| code | mono | sm | regular | normal | normal | none |

**Usage (from `roles.ts` purpose strings):** display = major page title; h1 = page heading; h2 = section; h3 = subsection; title = component-level title; body-* = copy; label = control labels; caption = metadata; overline = uppercase eyebrow; code = monospace.

### 3.5 Spacing

**Defined in:** `foundations/spacing/`  
**CSS:** `foundations/spacing/spacing.css`

#### Primitives (`--spacing-{px}`)

| Name | Value |
| --- | --- |
| `--spacing-2` | `0.125rem` |
| `--spacing-4` | `0.25rem` |
| `--spacing-6` | `0.375rem` |
| `--spacing-8` | `0.5rem` |
| `--spacing-12` | `0.75rem` |
| `--spacing-16` | `1rem` |
| `--spacing-20` | `1.25rem` |
| `--spacing-24` | `1.5rem` |
| `--spacing-28` | `1.75rem` |
| `--spacing-32` | `2rem` |
| `--spacing-36` | `2.25rem` |
| `--spacing-40` | `2.5rem` |
| `--spacing-44` | `2.75rem` |
| `--spacing-48` | `3rem` |
| `--spacing-56` | `3.5rem` |
| `--spacing-64` | `4rem` |
| `--spacing-72` | `4.5rem` |
| `--spacing-80` | `5rem` |
| `--spacing-96` | `6rem` |

#### Semantic — inline

| Name | Aliases |
| --- | --- |
| `--space-inline-xs` | `--spacing-4` |
| `--space-inline-sm` | `--spacing-8` |
| `--space-inline-md` | `--spacing-12` |
| `--space-inline-lg` | `--spacing-16` |

#### Semantic — stack

| Name | Aliases |
| --- | --- |
| `--space-stack-xs` | `--spacing-4` |
| `--space-stack-sm` | `--spacing-8` |
| `--space-stack-md` | `--spacing-16` |
| `--space-stack-lg` | `--spacing-24` |
| `--space-stack-xl` | `--spacing-32` |

#### Semantic — context

| Name | Aliases |
| --- | --- |
| `--space-page` | `--spacing-24` |
| `--space-section` | `--spacing-48` |
| `--space-card` | `--spacing-16` |
| `--space-form` | `--spacing-16` |
| `--space-touch-target-min` | `--spacing-44` |
| `--space-table` | `--spacing-8` |
| `--space-dialog` | `--spacing-24` |
| `--space-form-label` | `--spacing-4` |
| `--space-form-group` | `--spacing-32` |
| `--space-card-gap` | `--spacing-16` |
| `--space-button-icon-gap` | `--spacing-6` |
| `--space-button-padding-sm` | `--spacing-12` |
| `--space-button-padding-md` | `--spacing-12` |
| `--space-button-padding-lg` | `--spacing-16` |
| `--space-button-padding-xl` | `--spacing-20` |
| `--space-button-padding-xxl` | `--spacing-24` |

### 3.6 Radius

| Primitive | Value | Semantic alias |
| --- | --- | --- |
| `--radius-0` | `0` | `--radius-none` |
| `--radius-4` | `0.25rem` | `--radius-sm` |
| `--radius-6` | `0.375rem` | `--radius-md` |
| `--radius-8` | `0.5rem` | `--radius-lg` |
| `--radius-12` | `0.75rem` | `--radius-xl` |
| `--radius-16` | `1rem` | `--radius-2xl` |
| `--radius-pill` | `9999px` | `--radius-full` |

| Context token | Aliases |
| --- | --- |
| `--radius` | `--radius-lg` (default) |
| `--radius-checkbox` | `--radius-sm` |
| `--radius-badge` | `--radius-sm` |
| `--radius-input` | `--radius-lg` |
| `--radius-button` | `--radius-lg` |
| `--radius-card` | `--radius-lg` |
| `--radius-dialog` | `--radius-xl` |
| `--radius-avatar` | `--radius-full` |

**Note:** Button styles use `rounded-[var(--radius-full)]`, not `--radius-button`. That is an implementation fact, not a recommendation.

### 3.7 Shadows / effects

Light CSS (`foundations/shadows/shadows.css`):

| Primitive | Value | Semantic |
| --- | --- | --- |
| `--shadow-layer-none` | `none` | `--shadow-none` |
| `--shadow-layer-xs` | `0 1px 2px 0 rgb(18 22 32 / 4%)` | `--shadow-xs` |
| `--shadow-layer-sm` | `0 1px 3px 0 rgb(18 22 32 / 6%), 0 1px 2px -1px rgb(18 22 32 / 4%)` | `--shadow-sm` |
| `--shadow-layer-md` | `0 4px 6px -1px rgb(18 22 32 / 6%), 0 2px 4px -2px rgb(18 22 32 / 4%)` | `--shadow-md` |
| `--shadow-layer-lg` | `0 8px 16px -4px rgb(18 22 32 / 8%), 0 4px 6px -4px rgb(18 22 32 / 4%)` | `--shadow-lg` |
| `--shadow-layer-xl` | `0 16px 32px -8px rgb(18 22 32 / 10%), 0 8px 16px -8px rgb(18 22 32 / 6%)` | `--shadow-xl` |

Dark-mode shadow layers exist in the same CSS file (redefinitions). Exact dark values: see `shadows.css` / `shadowDefinitionsDark`.

### 3.8 Breakpoints

Documented implicit base: viewports `< 640px` (`narrowViewportBase.maxPx = 639`). Not a CSS token.

| Primitive | Value | Semantic name | Tailwind alias in `theme.css` |
| --- | --- | --- | --- |
| `--breakpoint-compact` | `40rem` | compact | `--breakpoint-sm: 40rem` |
| `--breakpoint-medium` | `48rem` | medium | `--breakpoint-md: 48rem` |
| `--breakpoint-expanded` | `64rem` | expanded | `--breakpoint-lg: 64rem` |
| `--breakpoint-large` | `80rem` | large | `--breakpoint-xl: 80rem` |
| `--breakpoint-wide` | `96rem` | wide | `--breakpoint-2xl: 96rem` |

| Container | Primitive max | Public alias |
| --- | --- | --- |
| `--container-xs-max` | `30rem` | `--container-xs` |
| `--container-sm-max` | `40rem` | `--container-sm` |
| `--container-md-max` | `48rem` | `--container-md` |
| `--container-lg-max` | `64rem` | `--container-lg` |
| `--container-xl-max` | `80rem` | `--container-xl` |

| Layout | Value |
| --- | --- |
| `--layout-page-padding` | `var(--spacing-16)` |
| `--layout-content-width` | `100%` |
| `--layout-reading-width` | `min(100%, 42rem)` |
| `--layout-dashboard-width` | `100%` |

### 3.9 Opacity

| Primitive | Value | Semantic |
| --- | --- | --- |
| `--opacity-20` | `0.2` | `--opacity-subtle` |
| `--opacity-60` | `0.6` | `--opacity-muted` |

Presets: `--opacity-skeleton-from` = `0.5`, `--opacity-skeleton-to` = `1`.

Contract explicitly **rejects** opacity tokens for disabled / overlay / focus / hover (those belong to Colors).

### 3.10 Motion

| Primitive | Value |
| --- | --- |
| `--motion-duration-100` | `100ms` |
| `--motion-duration-150` | `150ms` |
| `--motion-duration-200` | `200ms` |
| `--motion-duration-300` | `300ms` |
| `--motion-ease-raw-in` | `cubic-bezier(0.4, 0, 1, 1)` |
| `--motion-ease-raw-out` | `cubic-bezier(0, 0, 0.2, 1)` |
| `--motion-ease-raw-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` |

| Semantic | Aliases |
| --- | --- |
| `--motion-fast` | `--motion-duration-100` |
| `--motion-moderate` | `--motion-duration-150` |
| `--motion-default` | `--motion-duration-200` |
| `--motion-slow` | `--motion-duration-300` |
| `--motion-ease-in` | `--motion-ease-raw-in` |
| `--motion-ease-out` | `--motion-ease-raw-out` |
| `--motion-ease-in-out` | `--motion-ease-raw-in-out` |

Extras: `--motion-dropdown-offset` = `4px`; `--motion-modal-scale-from` = `0.98`; `--motion-modal-scale-to` = `1` (**CSS present; not in TS `allSemanticMotionTokens`**); `--motion-skeleton-cycle` = `2s`.

Presets `--motion-hover`, `--motion-dropdown`, `--motion-modal`, `--motion-toast`, `--motion-accordion`, `--motion-skeleton` alias the matching `--motion-*-transition` shorthands.

### 3.11 Z-index

| Primitive | Value | Semantic |
| --- | --- | --- |
| `--z-layer-0` | `0` | `--z-base` |
| `--z-layer-10` | `10` | `--z-sticky` |
| `--z-layer-20` | `20` | `--z-dropdown` |
| `--z-layer-30` | `30` | `--z-popover` |
| `--z-layer-40` | `40` | `--z-tooltip` |
| `--z-layer-50` | `50` | `--z-toast` |
| `--z-layer-60` | `60` | `--z-modal` |

### 3.12 Iconography

| Primitive | Value | Semantic |
| --- | --- | --- |
| `--icon-size-12` | `0.75rem` | `--icon-xs` |
| `--icon-size-16` | `1rem` | `--icon-sm` |
| `--icon-size-20` | `1.25rem` | `--icon-md` |
| `--icon-size-24` | `1.5rem` | `--icon-lg` |
| `--icon-size-32` | `2rem` | `--icon-xl` |

`--icon-size` → `--icon-sm`. `--icon-stroke` = `2`.

### 3.13 Tailwind / shadcn aliases (`src/app/theme.css`)

These do **not** invent new values. They alias Foundation tokens for Tailwind utilities:

`--color-foreground` → `--color-text-primary`; `--color-card` → `--color-surface`; `--color-primary` → `--color-action-primary`; `--color-destructive` → `--color-error-foreground`; `--color-ring` → `--color-focus-ring`; `--radius-4xl` → `--radius-full`; `--spacing` → `--spacing-4`; breakpoint `sm`…`2xl` duplicated as static lengths.

---

## 4. Component Inventory

**Implemented reusable directories** with `src/components/*/index.ts`: **52**.  
Excludes `docs/`, `ui/` (re-exports), Storybook-only folders, and product docs chrome.

Registry categories in code: `Inputs`, `Navigation`, `Feedback`, `Data Display`, `Overlay`, `Layout`.

### 4.1 Implemented and listed in `components-registry.ts` (stable)

| Component | Folder | Registry category | Storybook CSF | Live docs |
| --- | --- | --- | --- | --- |
| Button | `button/` | Inputs | Components/Button | `/docs/components/button` |
| Checkbox | `checkbox/` | Inputs | Components/Checkbox | `/docs/components/checkbox` |
| Date Picker | `date-picker/` | Inputs | Components/Date Picker | `/docs/components/date-picker` |
| Date Range Picker | `date-range-picker/` | Inputs | Components/Date Range Picker | `/docs/components/date-range-picker` |
| Day Toggle Group | `day-toggle-group/` | Inputs | Components/Day Toggle Group | `/docs/components/day-toggle-group` |
| Dropzone | `dropzone/` | Inputs | Components/Dropzone | `/docs/components/dropzone` |
| Input | `input/` | Inputs | Components/Input | `/docs/components/input` |
| Radio Group | `radio-group/` | Inputs | Components/Radio Group | `/docs/components/radio-group` |
| Select | `select/` | Inputs | Components/Select | `/docs/components/select` |
| Switch | `switch/` | Inputs | Components/Switch | `/docs/components/switch` |
| Textarea | `textarea/` | Inputs | Components/Textarea | `/docs/components/textarea` |
| Text Link | `text-link/` | Inputs | Components/Text Link | `/docs/components/text-link` |
| Label | `label/` | Inputs | Components/Label | `/docs/components/label` |
| Field Error | `field-error/` | Inputs | Components/Field Error | `/docs/components/field-error` |
| Global Search Bar | `global-search-bar/` | Navigation | Components/Global Search Bar | `/docs/components/global-search-bar` |
| Command | `command/` | Navigation | Components/Command | `/docs/components/command` |
| Tabs | `tabs/` | Navigation | Components/Tabs | `/docs/components/tabs` |
| Accordion | `accordion/` | Navigation | Components/Accordion | `/docs/components/accordion` |
| App Footer | `app-footer/` | Navigation | Components/App Footer | `/docs/components/app-footer` |
| Alert | `alert/` | Feedback | Components/Alert | `/docs/components/alert` |
| Sonner | `sonner/` | Feedback | Components/Sonner | `/docs/components/sonner` |
| Spinner | `spinner/` | Feedback | Components/Spinner | `/docs/components/spinner` |
| Skeleton | `skeleton/` | Feedback | Components/Skeleton | `/docs/components/skeleton` |
| Tooltip | `tooltip/` | Feedback | Components/Tooltip | `/docs/components/tooltip` |
| Avatar | `avatar/` | Data Display | Components/Avatar | `/docs/components/avatar` |
| Badge | `badge/` | Data Display | Components/Badge | `/docs/components/badge` |
| Card | `card/` | Data Display | Components/Card | `/docs/components/card` |
| Chip | `chip/` | Data Display | Components/Chip | `/docs/components/chip` |
| Table | `table/` | Data Display | Components/Table | `/docs/components/table` |
| Data Table | `data-table/` | Data Display | Components/Data Table | `/docs/components/data-table` |
| Timeline | `timeline/` | Data Display | Components/Timeline | `/docs/components/timeline` |
| Timeline Card | `timeline-card/` | Data Display | Components/Timeline Card | `/docs/components/timeline-card` |
| Stage Flow Badge | `stage-flow-badge/` | Data Display | Components/Stage Flow Badge | `/docs/components/stage-flow-badge` |
| Deposit Summary | `deposit-summary/` | Data Display | Components/Deposit Summary | `/docs/components/deposit-summary` |
| Payment Form | `payment-form/` | Data Display | Components/Payment Form | `/docs/components/payment-form` |
| Dialog | `dialog/` | Overlay | Components/Dialog | `/docs/components/dialog` |
| Alert Dialog | `alert-dialog/` | Overlay | Components/Alert Dialog | `/docs/components/alert-dialog` |
| Dropdown Menu | `dropdown-menu/` | Overlay | Components/Dropdown Menu | `/docs/components/dropdown-menu` |
| Popover | `popover/` | Overlay | Components/Popover | `/docs/components/popover` |
| Logo | `brand/` | Layout | Components/Logo | `/docs/components/logo` |
| Dashboard Panel | `dashboard-panel/` | Layout | Components/Dashboard Panel | `/docs/components/dashboard-panel` |
| Scroll Area | `scroll-area/` | Layout | Components/Scroll Area | `/docs/components/scroll-area` |
| Separator | `separator/` | Layout | Components/Separator | `/docs/components/separator` |
| User Profile Block | `user-profile-block/` | Layout | Components/User Profile Block | `/docs/components/user-profile-block` |

**Count: 44** stable registry components that exist in code.

All `figma:` fields in the registry are empty strings (51 occurrences of the key, all `""`).

### 4.2 Implemented in code, not in `components-registry.ts`

These exist as `src/components/{name}/` with `index.ts`. Some appear in `templates-registry.ts` instead.

| Component | Folder | Also listed in |
| --- | --- | --- |
| App Header | `app-header/` | Storybook `Components/App Header`; used by App Shell |
| App Sidebar | `app-sidebar/` | Storybook `Components/App Sidebar` |
| App Shell | `app-shell/` | `templates-registry` → `/docs/templates/app-shell` |
| Dashboard Grid | `dashboard-grid/` | Storybook `Components/Dashboard Grid` |
| Field Description | `field-description/` | Storybook `Components/Field Description`; used by *Field composites |
| Input Button Group | `input-button-group/` | Storybook `Components/Input Button Group` |
| Multi-Step Flow Layout | `multi-step-flow-layout/` | `templates-registry` |
| Search Results | `search-results/` | `templates-registry` |

**Count: 8.**

### 4.3 Registry `planned` — no implementation folder

| Title | Category | Related to (registry only) |
| --- | --- | --- |
| Calendar | Inputs | Date Picker, Date Range Picker |
| Attachment | Inputs | Dropzone |
| Breadcrumb | Navigation | Text Link |
| Bubble | Feedback | Alert |
| Aspect Ratio | Layout | Card |

**Count: 5.** These are documentation placeholders (`href: "#"`, `status: "planned"`). They are **not** components to migrate as if they existed.

### 4.4 Templates (not extra visual primitives)

From `templates-registry.ts`:

| Title | Status |
| --- | --- |
| AppShell | implemented (`app-shell/`) |
| MultiStepFlowLayout | implemented |
| SearchResults | implemented |
| Detail View | `comingSoon: true` — **no implementation** |

### 4.5 Patterns (composition recipes, not new components)

From `patterns-registry.ts` + `src/stories/patterns/`:

Patients intake chrome, Patients step, Form field, Exclusive choice, Multi-select choice, Optional skip, Follow-up details, Document upload, Conditional reveal, In-step notice, Operational app chrome, Workspace tabs, Worklist table, Scan search.

These reuse existing components. They are not additional Figma component sets unless a later pass decides to document pattern frames. This inventory does not invent those frames.

### 4.6 `src/components/ui/`

Re-export shims of the real components (e.g. `ui/button.tsx`). Not a second component library.

---

## 5. Component Variants & States

Only axes and states that exist in implementation (mostly CVA `variants` / props / `data-*` / ARIA that the component sets).

### 5.1 Variant axes (CVA / typed unions)

| Component | Axis | Values | Default in CVA | Default in component function |
| --- | --- | --- | --- | --- |
| Button | variant | primary, secondary, outline, ghost | primary | (CVA) |
| Button | intent | default, danger | default | (CVA) |
| Button | size | sm, md, lg, xl, xxl, icon-sm, icon-md, icon-lg, icon-xl, icon-xxl | md | (CVA) |
| Checkbox | size | sm, md, lg | **lg** | **md** — CONFLICT |
| Radio item | size | sm, md, lg | lg | types say `@default "lg"` |
| Switch | size | sm, md, lg | md | md |
| Input | size | sm, md, lg, xl, xxl | md | md |
| Select trigger | size | sm, md, lg, xl, xxl | md | md |
| Textarea | size | sm, md, lg | md | md |
| Spinner | size | sm, md, lg | md | md |
| Avatar / fallback / badge / group count | size | sm, md, lg | md | md |
| Badge | variant | default, secondary, destructive, outline, ghost, link | default | default |
| Badge | size | sm, md, lg | md | md |
| Chip | variant | default, outline, muted | default | default |
| Alert | variant | info, success, warning, error, **default** (deprecated→info), **destructive** (deprecated→error) | info | info |
| Stage Flow Badge | variant | default, success, warning, neutral | **success** | (CVA) |
| Card | size | default, sm | default | default |
| Tabs list | variant | default, line, folder | default | default |
| App Footer | variant | default, patients | default | default |
| App Footer | device | mobile, tablet, desktop | desktop | desktop |
| Timeline Card header | tone | default, priority | default | default |
| Day Toggle button | selected | true, false | false | false |
| Logo lockup | size | md, lg | md | md |
| Logo lockup | variant | default, inverse | default | default |
| Input group addon | align | start, end | start | start |
| Input group addon | icon | true, false | false | false |
| Label | invalid | true, false | false | false |
| Checkbox/Radio field label | invalid | true, false | false | false |

**Named variant values across those axes: 94.**  
**Variant axes: 28.**

Tabs also use Base UI orientation (`data-horizontal` / `data-vertical`) — vertical is implemented in styles, not a CVA `variant` key.

Separator orientation: horizontal / vertical (primitive prop, stories exist).

### 5.2 States that actually exist in code

Do not treat Storybook story names as extra states. The following are implemented:

| State | Where it exists |
| --- | --- |
| Disabled | Button, Checkbox, Radio, Switch, Input, Textarea, Select, Dropzone, Text Link, Accordion, Day Toggle, Payment Form, Dropdown items, Dialog actions, Command input, etc. Shared classes in `src/lib/disabled-styles.ts` |
| Hover | Buttons, links, chips, badges-as-anchor, surfaces (`--color-surface-hover`, `--color-action-primary-hover`, `--color-text-link-hover`) |
| Focus-visible | Shared focus ring tokens on interactive controls |
| Active / pressed | Button `active:` + `--color-action-primary-active`; Day Toggle `aria-pressed`; `aria-expanded` on Button |
| Loading | Button (`loading`, `aria-busy`); InputField (`loading` + Spinner); Select stories/loading; Dropzone (`loading`, `aria-busy`); Spinner itself |
| Invalid / error | `aria-invalid`, FieldError, Alert error variant, Dropzone error, Input/Select/Checkbox/Radio fields |
| Checked | Checkbox, Radio, Switch |
| Indeterminate | Checkbox (`MinusIcon`) |
| Open / closed | Dialog, Alert Dialog, Popover, Dropdown, Tooltip, Command dialog, Accordion, Alert `open`/`defaultOpen` |
| Dismissible | Alert (`dismissible`); Chip (`onRemove`) |
| Empty | Dropzone empty surface; Card story `EmptyState`; Search Results `PreSearch`; Day Toggle `Empty`; Payment Form `Empty` story |
| Dragging | Dropzone (`data-dragging`) |
| Read-only | Input (stories + Input group `[readonly]` styles); Select `ReadOnly` story |
| Required | InputField / SelectField `required`; Input stories |
| Full width | Button `fullWidth`; Input `fullWidth` default true |
| Fallback (no image) | Avatar Fallback |
| Collapsed | App Sidebar story `Collapsed` — implemented sidebar prop UNCONFIRMED beyond story; AppSidebar has collapsed story |

---

## 6. Component Properties

DS-specific public props (not every inherited HTML/Base UI attribute). Defaults from types or function params.

### 6.1 Primitives / controls

| Component | Property | Kind | Default | Notes |
| --- | --- | --- | --- | --- |
| Button | variant | enum | primary | |
| Button | intent | enum | default | |
| Button | size | enum | md | |
| Button | loading | boolean | false | sets aria-busy |
| Button | loadingLabel | text | — | SR label while loading |
| Button | fullWidth | boolean | false | |
| Button | disabled | boolean | false | |
| Button | children | slot/text | — | |
| Checkbox | size | enum | **function md / CVA lg** | conflict |
| Checkbox | disabled | boolean | false | |
| Checkbox | checked / indeterminate | Base UI | — | |
| Radio item | size | enum | lg | |
| Radio item | disabled | boolean | false | |
| Switch | size | enum | md | |
| Switch | disabled | boolean | — | |
| Input | size | enum | md | |
| Input | fullWidth | boolean | true | |
| Input | disabled | boolean | — | |
| Select trigger | size | enum | md | |
| Textarea | size | enum | md | |
| Label | invalid | boolean | false | |
| Label | children | text | — | |
| Field Error | children | text | — | optional icon in styles/usage |
| Field Description | children | text | — | `ComponentProps<"p">` only |
| Spinner | size | enum | md | `role="status"`, `aria-label="Loading"` |
| Text Link | href + Next Link props | — | — | navigation, not Button |
| Chip | variant | enum | default | |
| Chip | onRemove | function | — | shows dismiss control |
| Chip | removeLabel | text | — | |
| Badge | variant | enum | default | |
| Badge | size | enum | md | |
| Alert | variant | enum | info | |
| Alert | open | boolean | — | |
| Alert | defaultOpen | boolean | true | |
| Alert | dismissible | boolean | — | |
| Alert | closeLabel | text | — | |
| Alert | onOpenChange | function | — | |
| Alert | onDismiss | function | — | |
| Stage Flow Badge | variant | enum | success (CVA) | |
| Card | size | enum | default | plus Header/Title/Description/Action/Content/Media/Footer slots |
| Tabs list | variant | enum | default | |
| Avatar | size | enum | md | Image / Fallback / Badge / Group |
| Logo lockup | size | enum | md | |
| Logo lockup | variant | enum | default | |
| App Footer | variant | enum | default | |
| App Footer | device | enum | desktop | |
| App Footer | links | array `{label, href, external?}` | — | |
| App Footer | copyright | text | — | |
| App Footer | logoHref | text | — | |
| Dropzone | label | text | required | |
| Dropzone | file | File \| null | — | |
| Dropzone | accept | text | — | |
| Dropzone | maxSize | number | — | bytes |
| Dropzone | error | text | — | |
| Dropzone | disabled | boolean | — | |
| Dropzone | loading | boolean | false | |
| Dropzone | dragging | boolean | false | |
| InputField | label | text/node | required | |
| InputField | description | node | — | FieldDescription |
| InputField | helperText | node | — | FieldDescription |
| InputField | error | node | — | FieldError |
| InputField | invalid | boolean | false | |
| InputField | required | boolean | — | |
| InputField | prefix / suffix | node | — | |
| InputField | startIcon / endIcon | node | — | |
| InputField | loading | boolean | — | Spinner |
| SelectField / Searchable / MultiSelect | label, description, helperText, error, … | mixed | — | same field shell |
| DatePicker | (see `date-picker.types.ts`) | mixed | — | calendar + field |
| DateRangePicker | (see types) | mixed | — | |
| Day Toggle Group | value / defaultValue | days | — | |
| Day Toggle Group | disabled | boolean | — | |
| Global Search Bar | placeholder / shortcut flags | mixed | — | see source |
| Input Button Group | placeholder, buttonLabel, size, buttonVariant, onButtonClick | mixed | — | Input + Button |
| User Profile Block | name, metadata, avatar, settings slot | mixed | — | see source |
| App Shell | sidebar | slot | required | |
| App Shell | header | slot | optional | |
| App Shell | children | slot | required | |
| App Sidebar | nav links `{href, label, icon?}` | mixed | — | |
| App Header | search / actions slots | mixed | — | |
| Data Table | columns, data, selection, menus | mixed | — | |
| Payment Form | domain fields | mixed | — | product form |
| Deposit Summary | amount rows | mixed | — | |
| Dialog | overlay primitives + `showCloseButton` (from types) | mixed | — | |
| Tooltip | side / content | mixed | — | Base UI |
| Command | dialog + list primitives | mixed | — | |

Exact exhaustive listing of every Base UI inherited prop is omitted on purpose (would duplicate `@base-ui/react`). The table above is the Nuclear-specific surface.

**Approximate count of named Nuclear-specific properties (typed unions, booleans, text, slots, callbacks across the 52 folders): ~170.** Inherited HTML/Base UI props are additional and not counted.

### 6.2 Boolean / text / instance properties (Figma-oriented view of what already exists)

| Figma-like property type | Examples that exist in code |
| --- | --- |
| Variant | Button variant/intent/size; Badge variant/size; Alert variant; Tabs variant; Chip variant |
| Boolean | disabled, loading, fullWidth, invalid, required, dismissible, dragging, onRemove presence |
| Text | label, helperText, error, closeLabel, loadingLabel, removeLabel, copyright, placeholder |
| Instance swap | startIcon/endIcon, prefix/suffix, Alert icon slot, Button children icons (Lucide) |
| Nested instances | Field composites (Label, Input, FieldDescription, FieldError, Spinner) |

---

## 7. Component Composition

Classification of parts: **P** = primitive (this folder’s root control), **R** = other reusable Nuclear component, **T** = text, **I** = icon, **C** = structural container.

### 7.1 Form field shell (shared)

Used by InputField, CheckboxField, CheckboxGroupField, RadioField, RadioGroupField, SelectField, SearchableSelectField, MultiSelectField:

```
*Field
├── Label                          R
├── FieldDescription (description) R  (optional)
├── Control                        P  (Input / Checkbox / Radio / Select / …)
├── FieldDescription (helperText)  R  (optional)
└── FieldError                     R  (optional)
```

Date Picker / Dropzone use FieldError directly (and Dropzone’s own trigger), not necessarily the full *Field wrapper.

### 7.2 Selected compositions

```
Button
├── children (T and/or I)
└── Spinner                         R  when loading

InputField
├── Label
├── FieldDescription
├── InputGroup                      C  when prefix/suffix/icons/loading
│   ├── addon (T or I)
│   ├── Input                       P
│   └── Spinner                     R  when loading
├── FieldDescription
└── FieldError

Input Button Group
├── Input                           R
└── Button                          R

Checkbox
├── CheckboxPrimitive               P
└── CheckIcon | MinusIcon           I  (Lucide)

Dropzone
├── trigger surface                 C
│   ├── Spinner | file UI           R / T / I
│   └── label                       T
└── FieldError                      R

Select
├── SelectTrigger                   P
│   ├── value text                  T
│   └── chevron                     I
├── SelectContent                   C  (portal)
│   └── Option(s)                   P
└── (field wrapper as above)

Alert
├── icon slot                       I  (optional)
├── AlertTitle                      T
├── AlertDescription                T
├── action slot                     R  (often Button)
└── close Button                    R  when dismissible

Dialog / Alert Dialog
├── overlay / popup                 C
├── title / description             T
├── body slot                       C
└── footer                          C
    ├── Button (cancel)             R
    └── Button (action)             R

Dropdown Menu
├── DropdownMenuButton / IconButton R (Button)
└── menu popup                      C
    ├── Item                        P  (optional I + T)
    ├── Separator                   R
    └── (destructive item styling)

Avatar
├── Image                           P
├── Fallback                        T
└── Badge                           P  (optional)

User Profile Block
├── Avatar                          R
├── name                            T
└── metadata / settings             T / R

Card
├── Media                           C
├── Header                          C
│   ├── Title                       T
│   ├── Description                 T
│   └── Action                      R
├── Content                         C
└── Footer                          C

Data Table
├── Table                           R
├── Checkbox                        R  (selection)
├── Badge / Button / Dropdown       R  (cells / row actions)
└── empty content                   slot (when used)

App Shell
├── App Sidebar                     R
└── body                            C
    ├── App Header                  R  (optional)
    └── main                        C  (children)

App Header
├── slots (search, actions, profile) R / C
└── Global Search Bar / User Profile Block often composed here

App Footer
├── Logo                            R
├── Text Link(s)                    R
└── copyright                       T

Global Search Bar
├── Input                           R
└── kbd / shortcut                  T  (optional)

Command
├── dialog                          C
├── input                           P
└── list / items / groups           P

Timeline
└── Timeline Card(s)                R

Timeline Card
├── header (tone)                   C
├── tags / priority badge           T / C
└── content                         C

Payment Form
├── InputField / SelectField        R
├── Button                          R
└── Deposit Summary (related, not always nested)

Multi-Step Flow Layout
├── Logo                            R
├── progress / nav                  C  (Buttons)
├── content slot                    C
└── App Footer                      R

Search Results
├── toolbar slot                    C
├── Global Search Bar               R  (typical)
└── results slot                    C  (often Data Table)
```

---

## 8. Component Hierarchy

The repository **does not implement Atomic Design as an architecture**. Organization is:

1. **Foundations** — `foundations/` tokens  
2. **Components** — `src/components/*` grouped by registry category  
3. **Templates** — App Shell, Multi-Step Flow Layout, Search Results  
4. **Patterns** — docs + Storybook recipes  
5. **Screens** — Storybook `Screens/Operational/Dashboard`, `Screens/Operational/Tasks`

A post-hoc Atomic Design mapping would be an invention if treated as the system’s own structure. The following is **only** a reading of composition depth, not a proposed re-architecture:

| Depth (observed) | Examples | Atomic Design label? |
| --- | --- | --- |
| Tokens | colors, type, space, … | Foundations — **yes, this matches code** |
| Single control / mark | Button, Input, Checkbox, Label, Spinner, Separator, Badge, Chip, Logo mark | Could be called atoms — **not named that in code** |
| Control + field chrome | InputField, CheckboxField, SelectField, Dropzone | Could be called molecules — **not named that** |
| Chrome / products | App Shell, Data Table, Payment Form, Multi-Step Flow, Search Results, Timeline | Templates / complex — **code already uses “Templates” for some** |

**Do not force** Payment Form, Deposit Summary, or product templates into “atoms.”

---

## 9. Design System Architecture

```
foundations/
  colors/ typography/ spacing/ breakpoints/ radius/ shadows/
  motion/ opacity/ z-index/ iconography/
  tokens/          ← public API + index.css
src/app/
  globals.css      ← imports foundation CSS, Tailwind, shadcn, theme.css
  theme.css        ← @theme aliases only
  docs/            ← live documentation (Next.js App Router)
src/components/
  {component}/     ← implementation, styles, types, stories, playground
  ui/              ← re-exports
  docs/            ← docs app UI + registries
src/lib/           ← cn, disabled-styles, form-field, component-font-family
docs/design-system/  ← MDX foundations + component notes
.storybook/        ← Storybook config (present)
```

**Registries:** `components-registry.ts`, `foundations-registry.ts`, `templates-registry.ts`, `patterns-registry.ts`.

**Naming conventions (observed):**

- Folders: kebab-case (`date-picker`, `field-error`)
- CSS variables: `--{family}-{role}` (`--color-text-primary`, `--space-stack-sm`)
- Components: PascalCase exports
- Storybook: `Components/{Title}` matching registry `storybook` field when present
- Docs routes: `/docs/components/{kebab}`

**Exports:** each component `index.ts`. `ui/` mirrors some of them.

**Shared utilities:** `src/lib/utils.ts` (`cn`), `disabled-styles.ts`, `form-field.ts`, `component-font-family.ts`.

**Primitives library:** Base UI (`@base-ui/react/*`). Icons: Lucide. Variants: `class-variance-authority`. Styling: Tailwind v4 + CSS variables.

**Storybook vs live docs:** both exist. Live docs are the product documentation site. Storybook hosts CSF stories and pattern/screen stories.

---

## 10. Storybook Inventory

### 10.1 Component stories

Nearly every implemented component folder has `{name}.stories.tsx`. Typical stories: `Playground` (controls), `Default`, plus variants/sizes/states (Disabled, Error, Loading, InteractionStates, HealthcareExamples, etc.).

CSF titles follow `Components/{Registry Title}` for registry-listed components. Templates use `Templates/AppShell`, `Templates/MultiStepFlowLayout`, `Templates/SearchResults`.

### 10.2 Pattern stories (`src/stories/patterns/`) — 14 files

Patients intake chrome, Patients step, Form field, Exclusive choice, Multi-select choice, Optional skip, Follow-up details, Document upload, Conditional reveal, In-step notice, Operational app chrome, Workspace tabs, Worklist table, Scan search.

### 10.3 Screen stories — 2 files

- `Screens/Operational/Dashboard`
- `Screens/Operational/Tasks`

### 10.4 Foundations stories

`tokenFamilies` lists `storybook: "Foundations/Colors"` (and Spacing, Typography, Radius, Shadows). **No matching `*.stories.tsx` files exist.** Live docs pages exist instead. This is a documentation conflict, not a missing token family.

### 10.5 Controls vs code

Storybook `argTypes` generally mirror typed props. CODE wins if a control shows a state the component does not implement — none of that was used to invent states here.

---

## 11. Existing Figma Inventory

Read-only MCP inspection of `sc8cV7BNdyenGNDMT7sbQq`.

| Object type | Count | Detail |
| --- | --- | --- |
| Pages | **1** | `Cover` (`0:1`) |
| Frames / child nodes on Cover | **0** | metadata: empty canvas |
| Local components | **0** | none observed |
| Local component sets | **0** | none observed |
| Local variable collections | **0** | `get_variable_defs` on Cover: no selection / empty page |
| Local paint / text / effect / grid styles | **0** | none observed on Cover |
| Code Connect mappings in repo | **0** | all registry `figma:` fields empty |

**Subscribed libraries on the file (community kits — not Nuclear DS):**

1. Material 3 Design Kit  
2. Simple Design System  
3. iOS 18 and iPadOS 18  
4. iOS and iPadOS 26  
5. iOS and iPadOS 27  
6. watchOS 26  
7. visionOS 26  
8. macOS 26  
9. macOS 27  

These libraries are **environment subscriptions**. They are not Nuclear tokens or components. They must not be treated as existing Nuclear Figma inventory.

Account-wide `search_design_system` can return Relume / Lapzo / other org libraries. Those are **not** this file. UNCONFIRMED whether any of those libraries are enabled for publishing into this file beyond the nine listed above.

**Naming conventions in this Figma file:** none for Nuclear DS (empty Cover). File URL name is `Nuclear-DS`.

---

## 12. Code → Figma Mapping

**Proposal only. Do not create these structures yet.**

Names follow existing code and registry categories — not a new taxonomy.

### 12.1 Foundations / tokens

| Code | Proposed Figma |
| --- | --- |
| `foundations/colors/primitives` | Foundations / Colors / Primitives / {primary,neutral,success,warning,error,info,base} |
| `foundations/colors/semantic` | Foundations / Colors / Semantic / {Surface,Text,Border,Action,Focus,Disabled,Feedback} |
| `--focus-ring-*` | Foundations / Colors / Focus |
| `foundations/typography/primitives` | Foundations / Typography / Primitives |
| `--text-{role}-*` | Foundations / Typography / Roles / {display,h1,…} |
| `--spacing-*` | Foundations / Spacing / Primitives |
| `--space-inline-*` / `--space-stack-*` / `--space-*` | Foundations / Spacing / Semantic |
| `--radius-*` | Foundations / Radius |
| `--shadow-*` | Foundations / Shadows |
| `--breakpoint-*` / `--container-*` / `--layout-*` | Foundations / Breakpoints |
| `--motion-*` | Foundations / Motion |
| `--opacity-*` | Foundations / Opacity |
| `--z-*` | Foundations / Z-index |
| `--icon-*` + Lucide | Foundations / Icons |
| Disabled State Guidelines page | Foundations / Disabled state (documentation, not a token set) |

Light / dark: code already has two semantic themes. Figma modes would map to `light.ts` / `dark.ts` when variables are created later.

### 12.2 Components

| Code | Proposed Figma |
| --- | --- |
| `src/components/button` | Components / Inputs / Button |
| `src/components/input` (+ InputField) | Components / Inputs / Input |
| `src/components/checkbox` (+ fields) | Components / Inputs / Checkbox |
| `src/components/radio-group` | Components / Inputs / Radio Group |
| `src/components/select` | Components / Inputs / Select |
| `src/components/switch` | Components / Inputs / Switch |
| `src/components/textarea` | Components / Inputs / Textarea |
| `src/components/label` | Components / Inputs / Label |
| `src/components/field-error` | Components / Inputs / Field Error |
| `src/components/field-description` | Components / Inputs / Field Description |
| `src/components/text-link` | Components / Inputs / Text Link |
| `src/components/dropzone` | Components / Inputs / Dropzone |
| `src/components/date-picker` | Components / Inputs / Date Picker |
| `src/components/date-range-picker` | Components / Inputs / Date Range Picker |
| `src/components/day-toggle-group` | Components / Inputs / Day Toggle Group |
| `src/components/input-button-group` | Components / Inputs / Input Button Group |
| Navigation / Feedback / Data Display / Overlay / Layout folders | Components / {same registry category} / {Name} |
| `src/components/brand` | Components / Layout / Logo |
| `src/components/app-shell` | Templates / App Shell |
| `src/components/multi-step-flow-layout` | Templates / Multi-Step Flow Layout |
| `src/components/search-results` | Templates / Search Results |
| Patterns | Patterns / {existing pattern title} (optional later; not components) |

**Do not map** Calendar, Attachment, Breadcrumb, Bubble, Aspect Ratio, or Detail View until they exist in code.

**Do not map** subscribed Material / Apple / SDS kits into Nuclear pages.

---

## 13. Gap Analysis

### Code → Figma Missing

Almost the entire design system:

- All 10 foundation families and ~302 CSS variables + 68 color primitives  
- All 52 implemented components and their variants/states  
- Templates (App Shell, Multi-Step Flow, Search Results)  
- Icons (Lucide set as used in components)  
- Light/dark semantic themes  
- Documentation structures (optional later)

Figma today has an empty Cover page only.

### Figma → Code Missing

Nuclear-specific: **nothing** (Cover is empty).

Present in Figma but **not** Nuclear code:

- Nine subscribed community UI kits (Material 3, Simple Design System, Apple OS kits)  
- Any assets those kits expose if a designer inserts them later  

Those kits must not be treated as Nuclear DS components.

### Conflicts

| ID | What differs |
| --- | --- |
| C1 | **Checkbox default size:** `checkbox.tsx` defaults `size = "md"`; `checkbox.styles.ts` `defaultVariants.size` is `"lg"`. Types document `@default "md"`. |
| C2 | **Stage Flow Badge default variant:** CVA default is `"success"`, not `"default"`. |
| C3 | **Alert deprecated variants:** `default` and `destructive` still exist in CVA and types; they duplicate `info` and `error`. |
| C4 | **Skeleton `aria-busy`:** `components-registry` lists it; `skeleton.tsx` does not set `aria-busy`. |
| C5 | **Spinner `aria-busy`:** registry lists it; `spinner.tsx` sets `role="status"` and `aria-label="Loading"`, not `aria-busy`. |
| C6 | **Payment Form category:** registry category is Data Display; implementation is a product payment form (template-like). |
| C7 | **Payment Form registry token** `--color-border-default` does not exist; code token is `--color-border`. |
| C8 | **Timeline colors** `--color-timeline-card-header-priority` and `--color-timeline-card-priority-badge` exist in CSS, not in TS `semanticColorCssNames`. |
| C9 | **`--motion-modal-scale-to`** exists in CSS; not in TS `allSemanticMotionTokens`. |
| C10 | **`tokenFamilies` vs disk:** breakpoints, motion, opacity, z-index, iconography are implemented but not in `tokenFamilies`. |
| C11 | **Foundation Storybook CSF** claimed in `registry.ts`; no foundation story files. |
| C12 | **Heading font alias:** `theme.css` `--font-heading` → IBM Plex Sans (`--font-family-sans`); semantic `--text-h1-*` etc. use Poppins (`--font-family-component`). |
| C13 | **Button radius token vs style:** `--radius-button` aliases `--radius-lg`; Button component uses `--radius-full`. |
| C14 | **`layers.ts` status `"pending"`** for technicalSetup/components vs existing `theme.css` and component consumption of CSS vars. |
| C15 | **8 implemented components** missing from `components-registry.ts` (App Header, App Sidebar, App Shell, Dashboard Grid, Field Description, Input Button Group, Multi-Step Flow Layout, Search Results). Three of those are in `templates-registry`. |
| C16 | **5 planned registry entries** have no code. |
| C17 | **Figma subscribed kits** vs Nuclear code: Material/Apple/SDS ≠ Nuclear. If someone uses those kits, they will not match this codebase. |
| C18 | **Badge `link` variant** exists; product rule in Button docs is that Button is not a Link. Badge-as-link is a separate implemented variant, not Button-as-Link. |

---

## 14. Unconfirmed Items

| Item | Why unconfirmed |
| --- | --- |
| Exact dark-theme CSS values for every semantic color | Light values listed from first CSS declaration; dark block exists in the same files but was not fully tabulated here |
| Exact dark shadow layer values | Present in CSS / `shadowDefinitionsDark`; not copied line-by-line |
| File-level Figma variables hidden off Cover | Cover is empty; `get_variable_defs` required a selection. No evidence of local variables; still theoretically possible elsewhere in the file |
| Plugin API document name vs URL name `Nuclear-DS` | URL name used; Plugin API has previously reported `"Document"` |
| Whether `layers.ts` `"pending"` is stale | `@theme` bridge exists |
| App Sidebar collapsed behavior beyond the Storybook story | Story exists; full prop surface not fully tabulated |
| Complete Lucide icon subset used across all components | Library is Lucide; an exhaustive per-component icon census was not frozen |
| Date Picker / Dropzone working-tree vs last commit | Inventory describes **files on disk now**. Some of these folders may still be uncommitted relative to `main` |
| Public CSS variable count vs 302 unique names | 302 includes primitives + semantics; `allPublicCssVariables` is the smaller public semantic set |
| Relume / Lapzo search hits | Account libraries, not this file’s local inventory |
| Detail View template | Registry `comingSoon` only |
| Calendar as a standalone component | Planned only; date pickers exist |

---

## 15. Recommended Migration Order

No new design decisions. Safest order to copy **what already exists**:

1. **Foundations**  
   Color primitives → semantic colors (light/dark) → typography primitives + roles → spacing → radius → shadows → breakpoints → opacity → motion → z-index → icon sizes/stroke.  
   Skip inventing tokens. Include CSS-only timeline colors as they exist.

2. **Basic components** (few or no Nuclear dependencies)  
   Label, Field Description, Field Error, Spinner, Skeleton, Separator, Text Link, Logo, Button, Input, Textarea, Checkbox, Radio, Switch, Badge, Chip, Avatar.

3. **Components that depend on basics**  
   Input group / Input Field / Input Button Group, Select (+ fields), Dropzone, Date Picker, Date Range Picker, Day Toggle Group, Alert, Tooltip, Popover, Dialog, Alert Dialog, Dropdown Menu, Tabs, Accordion, Card, Table, Global Search Bar, Command, Stage Flow Badge, User Profile Block, App Footer.

4. **Complex components / templates**  
   Data Table, Timeline + Timeline Card, Dashboard Panel + Dashboard Grid, App Header, App Sidebar, App Shell, Search Results, Multi-Step Flow Layout, Deposit Summary, Payment Form.

5. **Documentation**  
   Map live docs / Storybook examples as reference frames only after components exist. Do not migrate planned-only registry items. Optionally add pattern frames using existing components only.

6. **Final QA**  
   Compare each Figma variant/state/property to this inventory and to code. Resolve conflicts C1–C18 by **matching code**, not docs, unless a later review explicitly chooses otherwise. Remove or ignore subscribed third-party kits so they cannot be mistaken for Nuclear.

---

*End of discovery inventory. No Figma or design-system implementation changes were made.*
