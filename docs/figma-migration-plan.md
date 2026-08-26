# Nuclear DS — Figma Migration Plan

CODE → FIGMA specification. Not a redesign. Not an architecture proposal.

**Source of truth:** the Nuclear Design System implementation in this repository.  
**Inventory:** `docs/figma-migration-inventory.md`  
**Target file:** [Nuclear-DS](https://www.figma.com/design/sc8cV7BNdyenGNDMT7sbQq/Nuclear-DS?node-id=0-1) (`sc8cV7BNdyenGNDMT7sbQq`)  
**Current Figma state:** Cover page only (`0:1`). Empty canvas.

This document defines how existing code must be represented in Figma. It does not authorize creating anything in Figma yet.

**Precedence:** CODE IMPLEMENTATION > Storybook / docs registry > this plan’s Figma-mapping notes.

If a mapping is a Figma technical constraint (variant limits, interactive components) rather than a code fact, it is labeled **FIGMA MAPPING** and must not add states or variants that the code does not have.

---

## 0. Mapping rules (apply to every section)

1. **Do not invent** tokens, components, variants, states, or properties.
2. **Do not skip** implemented tokens or components because they are missing from `tokenFamilies` or `components-registry.ts`.
3. **Do not migrate** registry `planned` items (Calendar, Attachment, Breadcrumb, Bubble, Aspect Ratio) or template `comingSoon` (Detail View).
4. **Do not use** subscribed Figma kits (Material 3, Simple Design System, Apple OS kits) as Nuclear components.
5. **CVA / typed unions** → Figma **variant properties** with the same names and values.
6. **Boolean / text / slot props** → Figma **BOOLEAN / TEXT / INSTANCE_SWAP**.
7. **CSS pseudo-classes** (`:hover`, `:focus-visible`, `:active`) → Figma **interactive component** reactions (While hovering / While pressing) using the same tokens. They are not extra CVA axes. Document them on a spec sheet. **FIGMA MAPPING.**
8. **Prop / data states** (`disabled`, `data-checked`, `aria-invalid`, `loading`, `data-dragging`, `read-only`) → Figma variant values or BOOLEAN properties.
9. When CVA axes × prop states would explode a set (example: Button 4 × 2 × 10 × N states), **do not drop states**. Split: published set = CVA axes; spec sheet + interactive reactions = CSS states; BOOLEAN or a second “state” axis only when the code uses a prop. **FIGMA MAPPING, not a product redesign.**
10. Conflicts: §12. Do not silently pick docs over code.

---

## 1. Figma file structure

**Approved architecture (supersedes registry category pages):** **one Nuclear DS component = one Figma page.**

A **page** is one published component. A **Component Set** on that page is that component’s variants. Do **not** create pages for variants or states (`Button Primary`, `Button Disabled`). Do **not** group multiple distinct components onto a category page (`Inputs`, `Feedback`, etc.).

Icons remain on **Foundations**. Nested-only helpers (`_Input Group Addon`, `_Select Item`, `Avatar Badge`, `Avatar Group Count`) live on their parent component’s page — they are not their own pages.

Keep the existing Cover page. Do not rename it unless a later user decision says otherwise.

| # | Page name | Purpose | Content |
| --- | --- | --- | --- |
| 1 | **Cover** | File identity (`0:1`). | Title “Nuclear DS”; source-of-truth note. No components. |
| 2 | **Getting Started** | File how-to, not components. | How to use this file; source of truth; “do not use subscribed kits”. |
| 3 | **Foundations** | Tokens, type, shadows, Lucide icon components. | Variables, text/effect styles, iconography. No published UI components. |
| 4+ | **One page per published component** | Named after the component (`Button`, `Input`, `Label`, …). | Visual library examples + the Component / Component Set (masters parked off-canvas). Create the page when that component is migrated — do not pre-create empty pages for unimplemented components. |

**Page name = Component set name** from §4 (e.g. page `Button` holds set `Button`; page `Logo Lockup` holds set `Logo Lockup`). When §4 lists two published exports (`Checkbox Field` and `Checkbox Group Field`), each gets its own page.

**Not a Figma page:**

| Omitted | Reason |
| --- | --- |
| Inputs / Navigation / Feedback / Data Display / Overlay / Layout / Templates | Registry categories. Not the Figma IA. |
| Utilities / Basics / Form / Patterns | Not code categories for Assets. |
| Variant pages (`Button Primary`, …) | Variants belong on the component page. |
| Planned-only components | No implementation. |
| Nested-only internals | Stay on the parent page. |

### 1.1 Component page contents

Each component page: page title (the component name) → real instances showing confirmed variants/configurations. Masters at x=2000. Nested Lucide icons used only by that component may be parked on the page; shared icons live on Foundations.

### 1.2 Cover contents (no new DS)

Placeholder copy only: file name Nuclear DS; “Code is source of truth”; link to repo implied, not a new brand system. Do not fill Cover with Material/Apple kit frames.

---

## 2. Foundations → Figma

Do **not** turn every CSS custom property into a Figma variable. CSS shorthands, media-query layout strings, z-index stacking, and Tailwind `@theme` aliases are not design-time Figma variables.

### 2.1 Decision: what becomes a Figma object

| Family | Become Figma variables? | Become styles? | Why |
| --- | --- | --- | --- |
| Color primitives | **Yes — Color** | No | Leaf values. Components must not use them directly; designers still need them so semantics can alias. |
| Semantic colors | **Yes — Color**, alias primitives | No | This is what components consume. Light/Dark modes exist in `light.ts` / `dark.ts` / `.dark` CSS. |
| Focus width/offset | **Yes — Number** | No | Used as stroke/ring size. Same in both themes. |
| Typography primitives | **Yes — String** (families), **Number** (size, weight, line-height, tracking) | No | Shared by roles. |
| Typography roles (`--text-{role}-*`) | **No extra 72 variables** | **Yes — 12 Text Styles** | A role is a bundle (family+size+weight+line-height+tracking+transform). Text Styles match that. Bind style properties to primitive variables. |
| Spacing primitives + semantic | **Yes — Number** (semantic aliases primitives) | No | Auto Layout gap/padding. |
| Radius primitives + semantic | **Yes — Number** | No | Corner radius. |
| Shadows | **Yes — Effect variables** in Elevation collection, Light/Dark | Optional Effect Styles only if Effect variables cannot bind; prefer variables | Code has light + dark shadow layers. |
| Breakpoints / container max | **Yes — Number** (documentation + layout frames) | No | Code uses rem. Convert 1rem = 16px for Figma numbers. |
| `--layout-content-width` / `--layout-dashboard-width` = `100%` | **No variable** | No | Figma number variables are not percentages. Use Fill container. |
| `--layout-reading-width` = `min(100%, 42rem)` | **Number 672** (42×16) as max width **plus** Fill | No | Approximate the `min()` in layout, not a second token. |
| Opacity | **Yes — Number** (0–1) | No | Skeleton + subtle/muted. |
| Motion durations | **Yes — Number** (ms) | No | Optional for prototype timing. |
| Motion **transition shorthands**, easings, scale-from/to | **No** | No | CSS-only. Figma prototyping uses separate easing. Document on Foundations as a table. |
| Z-index | **No variables** | No | Figma stacking is layer order. Document the 7 layers as a Foundations table. |
| `--icon-*` sizes + stroke | **Yes — Number** | No | Icon component size / stroke. |
| Tailwind `theme.css` aliases (`--color-foreground`, `--font-heading`, `--radius-4xl`, …) | **No** | No | Aliases for Tailwind, not a second token set. |
| `--font-family-mono` | **Yes — String**, alias `--font-family-sans` | No | Exists in code as an alias. |

### 2.2 Color primitives → Figma

**Collection:** `primitive/color`  
**Mode:** Default only (primitives do not change by theme).  
**Type:** Color. **Scope:** All fills/strokes.  
**Naming:** `primary/800`, `neutral/50`, `base/white`, … matching TS keys.

Values: hex from `foundations/colors/primitives/*` (inventory §3.2). OKLCH is the code canonical; Figma stores sRGB hex. **Limitation:** hex is a conversion of OKLCH, not a second source of truth.

**Count: 68.**

### 2.3 Semantic colors → Figma

**Collection:** `semantic/color`  
**Modes:** `light` | `dark` — both exist and are complete for the contract set (`foundations/colors/semantic/light.ts`, `dark.ts`, `.dark` in `colors.css`).  
**Type:** Color, aliasing `primitive/color`.  
**Alpha:** `--color-overlay` and `--color-focus-ring` include alpha in CSS (`40%`/`60%` overlay, `50%` focus). Store as Color with alpha. Overlay dark uses 60% (`colorCssAlpha`).

| Code CSS | Figma name | Primitive alias (light) | Primitive alias (dark) | Scope |
| --- | --- | --- | --- | --- |
| `--color-background` | `color/background` | `neutral/50` | `neutral/950` | FILL |
| `--color-surface` | `color/surface` | `base/white` | `neutral/900` | FILL |
| `--color-surface-raised` | `color/surface-raised` | `base/white` | `neutral/800` | FILL |
| `--color-surface-floating` | `color/surface-floating` | `base/white` | `neutral/800` | FILL |
| `--color-surface-muted` | `color/surface-muted` | `neutral/100` | `neutral/900` | FILL |
| `--color-surface-hover` | `color/surface-hover` | `neutral/200` | `neutral/800` | FILL |
| `--color-surface-active` | `color/surface-active` | `primary/50` | `primary/950` | FILL |
| `--color-overlay` | `color/overlay` | `neutral/950` @ 40% | `neutral/950` @ 60% | FILL |
| `--color-text-primary` | `color/text-primary` | `neutral/800` | `neutral/100` | FILL (text) |
| `--color-text-secondary` | `color/text-secondary` | `neutral/600` | `neutral/400` | FILL |
| `--color-text-muted` | `color/text-muted` | `neutral/500` | `neutral/500` | FILL |
| `--color-text-disabled` | `color/text-disabled` | `neutral/400` | `neutral/600` | FILL |
| `--color-text-inverse` | `color/text-inverse` | `neutral/50` | `neutral/900` | FILL |
| `--color-text-link` | `color/text-link` | `primary/800` | `primary/400` | FILL |
| `--color-text-link-hover` | `color/text-link-hover` | `primary/700` | `primary/300` | FILL |
| `--color-border` | `color/border` | `neutral/400` | `neutral/700` | STROKE |
| `--color-border-subtle` | `color/border-subtle` | `neutral/300` | `neutral/800` | STROKE |
| `--color-border-strong` | `color/border-strong` | `neutral/500` | `neutral/600` | STROKE |
| `--color-action-primary` | `color/action-primary` | `primary/800` | `primary/700` | FILL |
| `--color-action-primary-hover` | `color/action-primary-hover` | `primary/700` | `primary/600` | FILL |
| `--color-action-primary-active` | `color/action-primary-active` | `primary/900` | `primary/800` | FILL |
| `--color-action-primary-text` | `color/action-primary-text` | `base/white` | `base/white` | FILL |
| `--color-focus-ring` | `color/focus-ring` | `primary/800` @ 50% | `primary/400` @ 50% | STROKE |
| `--color-disabled-background` | `color/disabled-background` | `neutral/100` | `neutral/900` | FILL |
| `--color-disabled-border` | `color/disabled-border` | `neutral/300` | `neutral/800` | STROKE |
| `--color-disabled-text` | `color/disabled-text` | `neutral/400` | `neutral/600` | FILL |
| `--color-success-*` (4) | `color/success-{background,border,text,foreground}` | success-50/300/700/600 | success-950/800/300/600 | FILL/STROKE |
| `--color-warning-*` (4) | same pattern | warning-50/300/700/600 | warning-950/800/300/600 | |
| `--color-error-*` (4) | same pattern | error-50/300/700/600 | error-950/800/300/600 | |
| `--color-info-*` (4) | same pattern | info-50/300/700/600 | info-950/800/300/600 | |
| `--color-timeline-card-header-priority` | `color/timeline-card-header-priority` | CSS-only; light `oklch(95.5% 0.020 15)` | CSS-only; dark `oklch(30% 0.135 29)` | FILL — **no TS alias (C8)** |
| `--color-timeline-card-priority-badge` | `color/timeline-card-priority-badge` | CSS-only; light `oklch(96.5% 0.018 15)` | CSS-only; dark `oklch(32% 0.120 29)` | FILL — **C8** |

Focus numbers (same both modes):

| Code | Figma name | Type | Value |
| --- | --- | --- | --- |
| `--focus-ring-width` | `focus/ring-width` | Number | 3 |
| `--focus-ring-offset` | `focus/ring-offset` | Number | 2 |

**Semantic color variables: 46 colors + 2 numbers = 48.**

### 2.4 Spacing → Figma

**Collection:** `spacing`  
**Mode:** Default.  
**Type:** Number (px). Convert rem: 0.125rem → 2, 0.25rem → 4, … (`--spacing-N` name is already px).

Primitives: `--spacing-2` … `--spacing-96` (19 vars).  
Semantic aliases: `--space-inline-*`, `--space-stack-*`, `--space-*` context (25 vars) aliasing primitives.

**Count: 44.**  
**Scope:** GAP, WIDTH/HEIGHT, padding via Auto Layout.

### 2.5 Radius → Figma

**Collection:** `radius`  
**Mode:** Default.  
**Type:** Number. `--radius-pill` / `--radius-full` = 9999 (Figma “fully rounded” via large number, matching CSS).

Primitives (7) + semantic scale including `--radius` default (8) + context (7) = **22**.

**Scope:** CORNER_RADIUS.

**Button note (C13):** create `--radius-button` as specified. **Do not apply it to Button** — Button uses `--radius-full`.

### 2.6 Typography → Figma

**Collection:** `typography`  
**Mode:** Default (roles do not switch in dark).  
**Variables (25):**

| Code | Figma | Type | Value |
| --- | --- | --- | --- |
| `--font-family-sans` | `font-family/sans` | String | IBM Plex Sans Condensed |
| `--font-family-component` | `font-family/component` | String | Poppins |
| `--font-family-mono` | `font-family/mono` | String | alias sans |
| `--font-size-*` (9) | `font-size/{2xs…4xl}` | Number | px (11, 12, 14, 16, 18, 20, 24, 30, 36) |
| `--font-weight-*` (5) | `font-weight/{light…bold}` | Number | 300–700 |
| `--line-height-*` (4) | `line-height/{tight…relaxed}` | Number | Figma uses px line-height: size × multiplier. **FIGMA MAPPING:** store multiplier as Number (1.25…) and apply as style line-height = size × multiplier when creating the Text Style. |
| `--letter-spacing-*` (4) | `letter-spacing/{tight…wider}` | Number | em × size in px when applying styles |

**Text Styles (12)** — one per `semanticTypography` role. Name: `text/{role}` (`text/display`, `text/h1`, … `text/code`).

| Style | Family var | Size | Weight | Line-height | Tracking | Transform |
| --- | --- | --- | --- | --- | --- | --- |
| `text/display` | component | 4xl | semibold | tight | tight | none |
| `text/h1` | component | 3xl | semibold | tight | tight | none |
| `text/h2` | component | 2xl | semibold | snug | tight | none |
| `text/h3` | component | xl | semibold | snug | normal | none |
| `text/title` | component | lg | medium | snug | normal | none |
| `text/body-large` | component | lg | regular | relaxed | normal | none |
| `text/body` | component | base | regular | normal | normal | none |
| `text/body-small` | component | sm | regular | normal | normal | none |
| `text/label` | component | sm | medium | normal | normal | none |
| `text/caption` | component | xs | regular | normal | normal | none |
| `text/overline` | component | 2xs | medium | normal | wider | UPPERCASE |
| `text/code` | mono | sm | regular | normal | normal | none |

**C12:** heading **roles** use Poppins (`--font-family-component`). `--font-heading` in `theme.css` is IBM Plex and is **not** used to build these styles. Both family variables still exist.

### 2.7 Shadows → Figma

**Collection:** `elevation`  
**Modes:** `light` | `dark` (dark definitions exist for xs–xl; `none` is `none` in both).  
**Type:** Effect.

| Code | Figma | Light | Dark |
| --- | --- | --- | --- |
| `--shadow-none` | `shadow/none` | none | none |
| `--shadow-xs` | `shadow/xs` | inventory / `shadowDefinitions` | `shadowDefinitionsDark` |
| `--shadow-sm` … `xl` | `shadow/{sm…xl}` | same | same |

Do not expose `--shadow-layer-*` as separate designer variables (components must not consume them). Semantic names alias the layer values internally.

**Count: 6.**

### 2.8 Breakpoints → Figma

**Collection:** `breakpoint`  
**Mode:** Default.  
**Type:** Number (px): compact 640, medium 768, expanded 1024, large 1280, wide 1536.  
Container max: xs 480, sm 640, md 768, lg 1024, xl 1280.  
Semantic container aliases = those max values.  
`--layout-page-padding` aliases `--spacing-16` (16).

Implicit mobile base `< 640` is **documentation**, not a variable (`narrowViewportBase`).

**Count: 16** (5 + 5 + 5 + 1). Exclude 100% layout widths.

### 2.9 Opacity → Figma

**Collection:** `opacity`  
`--opacity-20` / `--opacity-subtle` = 0.2; `--opacity-60` / `--opacity-muted` = 0.6; skeleton from 0.5 / to 1.

**Count: 6.**

### 2.10 Motion → Figma

**Collection:** `motion`  
Numbers only: `--motion-fast` 100, `--motion-moderate` 150, `--motion-default` 200, `--motion-slow` 300 (ms).

**Do not create** transition shorthand variables, `--motion-modal-scale-from/to`, `--motion-dropdown-offset` as layout tokens unless a later prototype needs them. Document C9 (`--motion-modal-scale-to` CSS-only) on the Foundations table.

**Count: 4.**

### 2.11 Icon sizes → Figma

**Collection:** `icon`  
`--icon-xs` 12, `sm` 16, `md` 20, `lg` 24, `xl` 32, `--icon-size` alias sm, `--icon-stroke` 2.

**Count: 7.**

### 2.12 Z-index

Foundations **reference table only** (`z/base` … `z/modal`). **0 Figma variables.**

---

## 3. Variable collections

| Collection | Mode(s) | Variables | Primitive vs semantic | Intended scopes |
| --- | --- | --- | --- | --- |
| `primitive/color` | Default | 68 | Primitive | All color |
| `semantic/color` | light, dark | 48 | Semantic aliases (+ 2 CSS-only timeline colors) | Color + 2 numbers (focus) |
| `spacing` | Default | 44 | Primitive + semantic aliases | Gap, size, padding |
| `radius` | Default | 22 | Primitive + semantic | Corner radius |
| `typography` | Default | 25 | Primitive (roles are Text Styles) | Font family/size/weight |
| `elevation` | light, dark | 6 | Semantic | Effects |
| `breakpoint` | Default | 16 | Primitive + semantic | Layout width (docs frames) |
| `opacity` | Default | 6 | Primitive + semantic | Layer opacity |
| `motion` | Default | 4 | Semantic durations | Prototype (optional) |
| `icon` | Default | 7 | Primitive + semantic | Width/height, stroke |

**Collections planned: 10.**  
**Variables planned: 68+48+44+22+25+6+16+6+4+7 = 246.**  
**Text styles planned: 12.**  
**Effect styles planned: 0** (use effect variables). Fallback: 6 effect styles × 2 themes if effect variables cannot encode the multi-layer shadows — **UNCONFIRMED until first Figma write test**.  
**Boolean variables: 0** (no boolean tokens in code).

Dark mode: **supported and complete** for semantic colors and shadows. Not incomplete. Do not invent extra dark tokens. Timeline CSS-only colors have dark CSS values; they still lack TS aliases (C8).

---

## 4. Component migration order

Icons are local Figma components on Foundations, not a Lucide library subscription.

**Figma page** = the published component’s own page (one component = one page). When a row lists two published exports, create two pages.

| Order | Component | Source | Dependencies | Why this point | Figma page | Component set name |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | Foundations + icons | `foundations/**` | — | Tokens before UI | Foundations | (variables/styles/icons) |
| 1 | Label | `src/components/label` | type, color | Field chrome | `Label` | `Label` |
| 2 | Field Description | `field-description` | type, color | Field chrome | `Field Description` | `Field Description` |
| 3 | Field Error | `field-error` | type, color, AlertTriangleIcon | Field chrome | `Field Error` | `Field Error` |
| 4 | Spinner | `spinner` | Loader2Icon, icon size | Loading slot | `Spinner` | `Spinner` |
| 5 | Skeleton | `skeleton` | color, radius, opacity, motion | Placeholder | `Skeleton` | `Skeleton` |
| 6 | Separator | `separator` | border color | Divider | `Separator` | `Separator` |
| 7 | Text Link | `text-link` | color, type | Navigation text | `Text Link` | `Text Link` |
| 8 | Logo / Logo Lockup | `brand/medmo-logo.tsx` | — | Chrome | `Logo`, `Logo Lockup` | `Logo`, `Logo Lockup` |
| 9 | Button | `button` | type, color, radius-full, Spinner, icon slot | Primitive action | `Button` | `Button` |
| 10 | Input | `input` | size tokens, radius-input | Primitive field | `Input` | `Input` |
| 11 | Textarea | `textarea` | Input tokens | Primitive field | `Textarea` | `Textarea` |
| 12 | Checkbox | `checkbox` | icon sizes, Check/Minus | Primitive | `Checkbox` | `Checkbox` |
| 13 | Radio / Radio Group | `radio-group` | icon sizes | Primitive | `Radio`, `Radio Group` | `Radio`, `Radio Group` |
| 14 | Switch | `switch` | icon sizes | Primitive | `Switch` | `Switch` |
| 15 | Badge | `badge` | type, color | Display | `Badge` | `Badge` |
| 16 | Chip | `chip` | XIcon | Display | `Chip` | `Chip` |
| 17 | Avatar / Avatar Group | `avatar` | radius-avatar | Display | `Avatar`, `Avatar Group` | `Avatar`, `Avatar Group` |
| 18 | Scroll Area | `scroll-area` | — | Layout primitive | `Scroll Area` | `Scroll Area` |
| 19 | Input Group | `input/input-group.tsx` | Input | Addons | `Input Group` | `Input Group` |
| 20 | Input Field | `input/input-field.tsx` | 1–4, 10, 19, Spinner | Composed field | `Input Field` | `Input Field` |
| 21 | Input Button Group | `input-button-group` | Input, Button | Composed | `Input Button Group` | `Input Button Group` |
| 22 | Checkbox Field / Group Field | `checkbox/*-field*` | Checkbox, Label, Field Description, Field Error | Composed | `Checkbox Field`, `Checkbox Group Field` | `Checkbox Field`, `Checkbox Group Field` |
| 23 | Radio Field / Group Field | `radio-group/*field*` | Radio, Label, … | Composed | `Radio Field`, `Radio Group Field` | `Radio Field`, `Radio Group Field` |
| 24 | Select | `select` | Input sizes, Check/Chevron icons | Overlay list | `Select` | `Select` |
| 25 | Select Field / Searchable / Multi | `select/*field*` | Select, Chip, field chrome | Composed | `Select Field`, `Searchable Select Field`, `Multi Select Field` | `Select Field`, `Searchable Select Field`, `Multi Select Field` |
| 26 | Dropzone | `dropzone` | Field Error, Spinner, File/ImageUp/X | Composed | `Dropzone` | `Dropzone` |
| 27 | Date Picker | `date-picker` | Input, CalendarIcon, calendar grid | Composed | `Date Picker` | `Date Picker` |
| 28 | Date Range Picker | `date-range-picker` | Date Picker pieces | Composed | `Date Range Picker` | `Date Range Picker` |
| 29 | Day Toggle Group | `day-toggle-group` | Button-like styles | Composed | `Day Toggle Group` | `Day Toggle Group` |
| 30 | Alert | `alert` | Button, XIcon | Feedback | `Alert` | `Alert` |
| 31 | Tooltip | `tooltip` | elevation, z documented | Overlay-ish feedback | `Tooltip` | `Tooltip` |
| 32 | Popover | `popover` | elevation | Overlay | `Popover` | `Popover` |
| 33 | Dialog | `dialog` | Button, XIcon, elevation | Overlay | `Dialog` | `Dialog` |
| 34 | Alert Dialog | `alert-dialog` | Dialog, Button | Overlay | `Alert Dialog` | `Alert Dialog` |
| 35 | Dropdown Menu | `dropdown-menu` | Button, Separator, Check/Chevrons | Overlay | `Dropdown Menu` | `Dropdown Menu` |
| 36 | Tabs | `tabs` | type, color | Nav | `Tabs` | `Tabs` |
| 37 | Accordion | `accordion` | ChevronDown | Nav | `Accordion` | `Accordion` |
| 38 | Card | `card` | type, radius-card, space-card | Display | `Card` | `Card` |
| 39 | Table | `table` | space-table | Display | `Table` | `Table` |
| 40 | Global Search Bar | `global-search-bar` | Input, Command, SearchIcon | Nav | `Global Search Bar` | `Global Search Bar` |
| 41 | Command | `command` | Search/Check icons | Nav | `Command` | `Command` |
| 42 | Stage Flow Badge | `stage-flow-badge` | ChevronRight | Display | `Stage Flow Badge` | `Stage Flow Badge` |
| 43 | User Profile Block | `user-profile-block` | Avatar, Button, Settings2 | Layout | `User Profile Block` | `User Profile Block` |
| 44 | App Footer | `app-footer` | Logo, Text Link | Nav | `App Footer` | `App Footer` |
| 45 | Sonner | `sonner` | toast icons | Feedback | `Sonner` | `Sonner` |
| 46 | Data Table | `data-table` | Table, Checkbox, Dropdown, sort icons | Complex | `Data Table` | `Data Table` |
| 47 | Timeline Card | `timeline-card` | Card tokens, ChevronRight | Complex | `Timeline Card` | `Timeline Card` |
| 48 | Timeline | `timeline` | Timeline Card | Complex | `Timeline` | `Timeline` |
| 49 | Dashboard Panel | `dashboard-panel` | Card-like | Complex | `Dashboard Panel` | `Dashboard Panel` |
| 50 | Dashboard Grid | `dashboard-grid` | Dashboard Panel | Complex | `Dashboard Grid` | `Dashboard Grid` |
| 51 | App Header | `app-header` | slots | Chrome | `App Header` | `App Header` |
| 52 | App Sidebar | `app-sidebar` | Logo, Button, Lucide nav icons, expanded | Chrome | `App Sidebar` | `App Sidebar` |
| 53 | App Shell | `app-shell` | Sidebar, Header | Template | `App Shell` | `App Shell` |
| 54 | Search Results | `search-results` | slots, often Global Search Bar + Data Table | Template | `Search Results` | `Search Results` |
| 55 | Multi-Step Flow Layout | `multi-step-flow-layout` | Logo, Button, App Footer, GlobeIcon | Template | `Multi-Step Flow Layout` | `Multi-Step Flow Layout` |
| 56 | Deposit Summary | `deposit-summary` | type, surface | Complex | `Deposit Summary` | `Deposit Summary` |
| 57 | Payment Form | `payment-form` | Input Field, Button, Deposit Summary | Complex | `Payment Form` | `Payment Form` |

**Do not migrate:** Calendar, Attachment, Breadcrumb, Bubble, Aspect Ratio, Detail View.

---

## 5. Component set specification

### 5.0 Published vs nested

**Publish** the sets listed in §4.  
**Nest, do not publish separately:** Dialog Title/Description/Footer parts (except if they must be swapped), Table Head/Cell (publish `Table` with slots), Select Item (nested in `Select`), Accordion Item (nested), Command Item (nested).

**Subcomponents that are public in code** (Checkbox Field, Input Field, etc.) **are published** because consumers import them.

### 5.1 Label

- **Code:** `Label` — `src/components/label`  
- **Figma:** `Label`  
- **Description:** Form label. `invalid` turns text `--color-error-text`.  
- **Variant axes:** `invalid` = `false` | `true` (CVA). Default `false`.  
- **Properties:** TEXT `Text` (children). BOOLEAN none besides invalid-as-variant.  
- **Not mapped:** native `htmlFor` (implementation detail).

### 5.2 Field Description

- **Figma:** `Field Description`  
- **Source:** `src/components/field-description`  
- **Variants:** none.  
- **Properties:** TEXT `Text`.  
- **States:** none beyond inherited text color `--color-text-muted` (from styles — UNCONFIRMED exact class without re-listing; use existing styles file at implementation time).

### 5.3 Field Error

- **Figma:** `Field Error`  
- **Source:** `field-error.tsx`  
- **Variants:** none.  
- **Properties:** TEXT `Text`; BOOLEAN `Show Icon` (`showIcon`, default `false`) → shows `AlertTriangleIcon`.  
- **States:** visible vs empty = BOOLEAN hide when no text. **Do not add** a success state.

### 5.4 Spinner

- **Figma:** `Spinner`  
- **Axes:** `size` = `sm` | `md` | `lg`. Default `md`.  
- **Properties:** none required (`aria-label` is code a11y, not a visual property).  
- **States:** spinning is inherent. **No** `aria-busy` property (C5).

### 5.5 Skeleton

- **Figma:** `Skeleton`  
- **Variants:** none in code (`ComponentProps<"div">`). Size via layout Fill/Hug, not a size axis.  
- **Properties:** none.  
- **States:** none. **No** `aria-busy` (C4).

### 5.6 Separator

- **Figma:** `Separator`  
- **Axes:** `orientation` = `horizontal` | `vertical`. Default `horizontal`.  
- **Properties:** none.

### 5.7 Text Link

- **Figma:** `Text Link`  
- **Axes:** none in CVA.  
- **Properties:** TEXT `Text`; TEXT `Href` (cannot be a working URL in Figma — store as TEXT for spec). BOOLEAN `Disabled` (`disabled`, default `false`).  
- **States (code):** default, hover (`--color-text-link-hover` + underline), focus-visible (ring), disabled (`aria-disabled`).  
- **FIGMA MAPPING:** interactive hover; `Disabled` variant or BOOLEAN that applies disabled colors.

### 5.8 Logo / Logo Lockup

- **Figma:** `Logo` (mark only — `MedmoLogo`). `Logo Lockup` (`MedmoLogoLockup`).  
- **Lockup axes:** `size` = `md` | `lg` (default `md`); `variant` = `default` | `inverse` (default `default`).  
- **Properties:** none (wordmark is fixed `"medmo"` in code).  
- **Do not** invent a color axis; inverse only changes wordmark to `--color-action-primary-text`.

### 5.9 Button

- **Figma:** `Button`  
- **Axes (CVA):**  
  - `variant`: `primary` | `secondary` | `outline` | `ghost` (default `primary`)  
  - `intent`: `default` | `danger` (default `default`)  
  - `size`: `sm` | `md` | `lg` | `xl` | `xxl` | `icon-sm` | `icon-md` | `icon-lg` | `icon-xl` | `icon-xxl` (default `md`)  
- **Properties:** TEXT `Label` (hidden on icon-* sizes); BOOLEAN `Loading`; BOOLEAN `Full Width`; BOOLEAN `Disabled`; BOOLEAN `Show Start Icon`; BOOLEAN `Show End Icon`; INSTANCE_SWAP `Start Icon`, `End Icon` (Lucide). TEXT `Loading Label` is SR-only — **do not create a visible Figma property**; document as code-only.  
- **States in CSS/props:** default, hover, active, focus-visible, disabled, loading, `aria-invalid`, `aria-expanded`.  
- **FIGMA MAPPING:** published set = three CVA axes (80 combos). Interactive: hover/active. Spec sheet: focus, invalid, expanded, loading+disabled. BOOLEAN Loading shows Spinner, hides label (code behavior).  
- **Radius:** `--radius-full`, not `--radius-button` (C13).

### 5.10 Input

- **Figma:** `Input`  
- **Axes:** `size` = `sm` | `md` | `lg` | `xl` | `xxl` (default `md`).  
- **Properties:** TEXT `Value`; TEXT `Placeholder`; BOOLEAN `Disabled`; BOOLEAN `Full Width` (default true → Fill); **read-only and invalid are states** (see §8).  
- **States in code:** default, placeholder (empty value), focus-visible, disabled, `read-only`, `aria-invalid`. **No hover fill change** on the input itself (only `transition-[var(--motion-hover)]`). **Do not add hover as a distinct visual variant unless a later check finds a hover color.** Current styles: **no hover background**.  
- **Do not add** success, warning, filled-as-separate-token (filled = TEXT non-empty, same styles as default except placeholder).

### 5.11 Textarea

- Same state model as Input.  
- **Axes:** `size` = `sm` | `md` | `lg` (default `md`).  
- **Properties:** TEXT `Value`; TEXT `Placeholder`; BOOLEAN `Disabled`.  
- min-heights: `--spacing-64` / `80` / `96`.

### 5.12 Checkbox

- **Figma:** `Checkbox`  
- **Axes:** `size` = `sm` | `md` | `lg`. **Default in Figma: `md`** (runtime `checkbox.tsx`). CVA `defaultVariants` is `lg` (C1).  
- **Checked axis:** `unchecked` | `checked` | `indeterminate` (`data-checked` / indeterminate).  
- **Properties:** BOOLEAN `Disabled`; BOOLEAN `Invalid` (`aria-invalid`).  
- **States:** hover (border — same `--color-border` unchecked; checked hover keeps primary), focus-visible, disabled (including disabled+checked).  
- Icons: CheckIcon / MinusIcon — nested, not INSTANCE_SWAP (fixed by state).

### 5.13 Radio

- **Figma:** `Radio` (item) + `Radio Group` (stack).  
- **Item axes:** `size` = `sm` | `md` | `lg` (default **`lg`** per types/CVA).  
- **Checked:** `unchecked` | `checked`.  
- **Properties:** BOOLEAN `Disabled`; BOOLEAN `Invalid`.  
- **Radio Group:** no CVA; layout column `gap --space-stack-sm`.

### 5.14 Switch

- **Axes:** `size` = `sm` | `md` | `lg` (default `md`).  
- **Checked:** `unchecked` | `checked`.  
- **Properties:** BOOLEAN `Disabled`; BOOLEAN `Invalid`.  
- Thumb is nested, not a property.

### 5.15 Badge

- **Axes:** `variant` = `default` | `secondary` | `destructive` | `outline` | `ghost` | `link` (default `default`); `size` = `sm` | `md` | `lg` (default `md`).  
- **Properties:** TEXT `Label`; BOOLEAN `Show Icon`; INSTANCE_SWAP `Icon`.  
- **States:** hover exists on `[a]` / ghost / link variants in CSS. Interactive hover only where those classes exist.  
- **C18:** include `link`. This is not Button-as-Link.

### 5.16 Chip

- **Axes:** `variant` = `default` | `outline` | `muted` (default `default`).  
- **Properties:** TEXT `Label`; BOOLEAN `Dismissible` (`onRemove` present); TEXT `Remove Label` (a11y, optional).  
- **States:** default; dismiss control hover/focus when dismissible. **No** selected axis unless added in code (not present).

### 5.17 Avatar / Avatar Group

- **Avatar axes:** `size` = `sm` | `md` | `lg` (default `md`).  
- **Properties:** INSTANCE_SWAP or image fill `Image`; TEXT `Fallback`; BOOLEAN `Show Badge`; Badge is nested `Avatar Badge` with same size axis.  
- **States:** image vs fallback (BOOLEAN `Has Image`).  
- **Avatar Group:** nested Avatars + `Avatar Group Count` (size axis, TEXT count).

### 5.18 Scroll Area

- No CVA. Frame with clip; BOOLEAN not applicable. Spec as a layout container using `--color-border-subtle` if the styles use it.

### 5.19 Input Group

- **Axes:** addon `align` = `start` | `end`; `icon` = `false` | `true`.  
- **Properties:** TEXT `Addon Text`; INSTANCE_SWAP `Addon Icon`; nested Input.  
- **States:** follow nested Input (disabled, invalid, readonly, focus) via `has-[[data-slot=input]…]` in CSS.

### 5.20 Input Field

- **Figma:** `Input Field`  
- **Axes:** inherit Input `size`.  
- **Properties:** TEXT `Label`; TEXT `Description`; TEXT `Value`; TEXT `Placeholder`; TEXT `Helper Text`; TEXT `Error`; BOOLEAN `Required` (visual asterisk UNCONFIRMED — check InputField render for `*` at implementation); BOOLEAN `Invalid`; BOOLEAN `Disabled`; BOOLEAN `Loading`; BOOLEAN `Show Description`; BOOLEAN `Show Helper`; BOOLEAN `Show Error`; BOOLEAN `Show Prefix`; BOOLEAN `Show Suffix`; BOOLEAN `Show Start Icon`; BOOLEAN `Show End Icon`; INSTANCE_SWAP icons; TEXT prefix/suffix.  
- **Composition:** §6.  
- **Required:** if code only sets `aria-required` / HTML `required` with no asterisk, Figma BOOLEAN `Required` has **no visual** — document as code-only. **UNCONFIRMED asterisk** until InputField JSX is applied in Phase 4.

### 5.21 Input Button Group

- **Properties:** TEXT `Placeholder`; TEXT `Button Label`; `size` (InputSize); `buttonVariant` maps to nested Button `variant`.  
- Nested Input + Button.

### 5.22 Checkbox Field / Checkbox Group Field

- Field: nested Checkbox + Label + optional description/helper/error.  
- **Properties:** TEXT `Label`; TEXT `Description`; BOOLEAN `Invalid`; BOOLEAN `Disabled`; BOOLEAN `Required` (same UNCONFIRMED visual); Checkbox checked axis.  
- Group Field: TEXT `Legend`; list of Checkbox Field instances; Field Error.

### 5.23 Radio Field / Radio Group Field

- Same shell as checkbox fields. Radio default size **lg**.

### 5.24 Select

- **Trigger axes:** `size` = `sm` | `md` | `lg` | `xl` | `xxl` (default `md`).  
- **Properties:** TEXT `Value`; TEXT `Placeholder`; BOOLEAN `Disabled`; BOOLEAN `Invalid`; BOOLEAN `Open` (content visible).  
- Nested: ChevronDown/Up, Check on item.  
- **States:** default, focus, disabled, invalid, read-only (story + group styles), loading (field-level Spinner, not trigger CVA).  
- Select Item: TEXT `Label`; BOOLEAN `Selected`; BOOLEAN `Disabled`.

### 5.25 Select Field / Searchable Select Field / Multi Select Field

- Same field chrome as Input Field.  
- Searchable: extra SearchIcon, TEXT `Query`.  
- Multi: nested Chip instances; BOOLEAN dismiss on chips.

### 5.26 Dropzone

- **No CVA axes.**  
- **Properties:** TEXT `Label`; TEXT `Error`; BOOLEAN `Disabled`; BOOLEAN `Loading`; BOOLEAN `Dragging`; BOOLEAN `Has File`.  
- **States (code):** empty, dragging (`data-dragging`), loading (`aria-busy` on trigger), filled (file), error (Field Error), disabled.  
- `accept` / `maxSize` are logic, not visual properties.

### 5.27 Date Picker

- **Properties:** TEXT `Value` (formatted date); TEXT `Placeholder`; `size` (InputSize); BOOLEAN `Disabled`; TEXT `Error`; BOOLEAN `Open` (calendar).  
- Nested CalendarIcon, calendar grid (not the planned Calendar component — in-folder calendar UI).  
- **Do not** publish a separate `Calendar` set (planned only).

### 5.28 Date Range Picker

- **Properties:** TEXT `From` / `To`; TEXT `From Label` / `To Label`; `size`; BOOLEAN `Disabled`; TEXT `From Error` / `To Error`; BOOLEAN `Open`.  
- Nested two fields + calendar.

### 5.29 Day Toggle Group

- **Item axes:** `selected` = `false` | `true`.  
- **Properties:** BOOLEAN `Disabled` (group or item).  
- Group: 7 day instances (code’s day set — use the labels from `day-toggle-group` source at build time; do not invent extra days).

### 5.30 Alert

- **Axes:** `variant` = `info` | `success` | `warning` | `error` | `default` | `destructive`. Default **`info`**. `default`/`destructive` are deprecated aliases (C3) — **REQUIRES USER DECISION** whether Figma exposes them. If yes, they must look identical to info/error.  
- **Properties:** TEXT `Title`; TEXT `Description`; BOOLEAN `Show Icon`; INSTANCE_SWAP `Icon`; BOOLEAN `Dismissible`; BOOLEAN `Show Action`; nested Button action; TEXT `Close Label` (a11y).  
- **States:** `open` true/false = BOOLEAN `Open` (default true). Dismissed = Open false.

### 5.31 Tooltip

- **Properties:** TEXT `Content`; placement from Base UI: include `side` if the component/stories expose `top` | `bottom` | `left` | `right` (stories: Positions, Top, Bottom). Use those values only.  
- **States:** closed vs open (BOOLEAN `Open`).

### 5.32 Popover

- BOOLEAN `Open`; slot Content (instance). Sides from stories (`Sides`).

### 5.33 Dialog

- BOOLEAN `Open`; TEXT `Title`; TEXT `Description`; BOOLEAN `Show Close Button` (`showCloseButton`, default true); slot Body; Footer with Buttons.  
- Overlay uses `--color-overlay` and `--z-modal` (z = layer order in Figma).

### 5.34 Alert Dialog

- Same overlay pattern. Nested Alert Dialog Action / Cancel using Button (including danger intent where code uses it).

### 5.35 Dropdown Menu

- BOOLEAN `Open`; trigger = Button or Icon Button instance.  
- Item: TEXT `Label`; BOOLEAN `Disabled`; BOOLEAN `Destructive` if `variant` exists on item (types: `DropdownMenuItemProps`). INSTANCE_SWAP icon.  
- Nested Separator, Submenu chevron.

### 5.36 Tabs

- **List axes:** `variant` = `default` | `line` | `folder` (default `default`).  
- Orientation: `horizontal` | `vertical` via `data-horizontal` / `data-vertical` — **variant axis `orientation`**.  
- Trigger: BOOLEAN `Selected`; BOOLEAN `Disabled`. TEXT `Label`.  
- **States:** selected, disabled, focus-visible. Hover: confirm in `tabs.styles.ts` at build (subtleInteractiveDisabled implies hover exists on triggers).

### 5.37 Accordion

- Item: BOOLEAN `Open` (expanded); BOOLEAN `Disabled`; TEXT `Title`; slot Content.  
- Multiple open is a group behavior, not a component variant (story `Multiple`).

### 5.38 Card

- **Axes:** `size` = `default` | `sm`.  
- **Properties:** BOOLEAN `Show Media`; `Show Header`; `Show Description`; `Show Action`; `Show Footer`; TEXT title/description; slot Media/Action/Footer.  
- Empty content is a slot state, not a CVA variant (story `EmptyState`).

### 5.39 Table

- Structural: Header / Body / Footer / Row / Head / Cell / Caption as nested components or slots.  
- No CVA. TEXT in cells.

### 5.40 Global Search Bar

- **Properties:** TEXT `Placeholder` (default `"Search everything"`); BOOLEAN `Shortcut Enabled`; TEXT `Shortcut` visual (kbd); BOOLEAN `Open` (command dialog).  
- Nested SearchIcon, Input styles, Command.

### 5.41 Command

- Dialog + input + list. BOOLEAN `Open`; TEXT `Query`; BOOLEAN `Input Disabled` (story `DisabledInput`); empty state TEXT `Empty Message`.

### 5.42 Stage Flow Badge

- **Axes:** `variant` = `default` | `success` | `warning` | `neutral`. **Default `success` (C2).**  
- **Properties:** TEXT `Label`; BOOLEAN `Show Icon` (ChevronRight used in component — if always shown, no BOOLEAN). Check `stage-flow-badge.tsx` at build for optional icon. Inventory: chevron imported — treat as nested icon.

### 5.43 User Profile Block

- **Properties:** TEXT `Name`; TEXT `Subtitle`; BOOLEAN `Show Subtitle`; BOOLEAN `Show Settings` (`onSettingsClick`); image/fallback via nested Avatar.  
- Settings icon: Settings2Icon nested, not swap.

### 5.44 App Footer

- **Axes:** `variant` = `default` | `patients` (default `default`); `device` = `mobile` | `tablet` | `desktop` (default `desktop`).  
- **Properties:** TEXT `Copyright`; TEXT `Logo Href` (spec only); links as nested Text Link instances (repeatable). Patients variant uses extra nav structure from styles (`patientsFooterNavigationClassName`).

### 5.45 Sonner

- Toast row: map Sonner types used in `sonner.tsx` icons: success (`CircleCheckIcon`), info (`InfoIcon`), loading (`Loader2Icon`), error (`OctagonXIcon`), warning (`TriangleAlertIcon`).  
- **Axes:** those toast types **only if** the Toaster classNames distinguish them — use `sonner.styles.ts` at build. Stories: Default, Variants, Loading.  
- **Do not invent** extra toast types.

### 5.46 Data Table

- Nested Table, Checkbox, sort icons (`ArrowUpWideNarrowIcon`, `ArrowDownWideNarrowIcon`, `ChevronDownIcon`), Dropdown Menu, XIcon.  
- Properties are data-driven: not a small BOOLEAN set. Publish a **configurable example** with: BOOLEAN `Show Selection`; BOOLEAN `Show Sort`; BOOLEAN `Show Row Menu`; BOOLEAN `Empty` (empty slot).  
- Column API is code-only (`DataTableProps`) — **cannot map 1:1** to Figma props. Limitation: Figma shows a representative table, not a generic data engine.

### 5.47 Timeline Card

- **Header axes:** `tone` = `default` | `priority` (default `default`).  
- **Properties:** TEXT title/time; BOOLEAN `Show Tags`; BOOLEAN `Show Priority`; slot content.  
- Priority colors: CSS-only tokens (C8).

### 5.48 Timeline

- List of Timeline Card instances. No extra CVA on `Timeline` root.

### 5.49 Dashboard Panel / 5.50 Dashboard Grid

- Panel: heading + slot body (Card-like).  
- Grid: items with span — inventory listed span variants on Dashboard Grid Item. Use **only** spans that exist in `dashboard-grid` styles/types at build (`Default`, `FullSpan` stories).

### 5.51 App Header

- **Properties:** TEXT `Title`; BOOLEAN `Show Search`; BOOLEAN `Show Actions`; slots Search / Actions (instances).

### 5.52 App Sidebar

- **Properties:** BOOLEAN `Expanded` (`expanded` / `defaultExpanded` — **confirmed** in `app-sidebar.types.ts`); nested Logo; nav items: TEXT `Label`; INSTANCE_SWAP `Icon`; BOOLEAN `Active`.  
- Collapse icons: `PanelLeftCloseIcon` / `PanelLeftOpenIcon` nested.

### 5.53 App Shell

- Slots: `Sidebar` (required instance), `Header` (optional BOOLEAN `Show Header`), `Main` slot.

### 5.54 Search Results

- Slots: toolbar, search, results. BOOLEAN `Pre Search` vs results (stories `PreSearch`, `WithResults`).

### 5.55 Multi-Step Flow Layout

- Nested Logo, progress Buttons, content slot, App Footer. GlobeIcon in source.  
- Properties: progress index as TEXT or a finite step BOOLEAN set **only matching the layout’s actual step UI** (inspect at Phase 5). Do not invent a stepper component.

### 5.56 Deposit Summary

- TEXT rows for amounts/labels from `deposit-summary.types.ts`. No extra visual variants beyond what that file defines.

### 5.57 Payment Form

- Composed Input Fields + Button + optional Stripe badge (story `WithoutStripeBadge` → BOOLEAN `Show Stripe Badge`). BOOLEAN `Disabled`; Empty story → empty field values, not a new variant.  
- **Page:** Data Display unless C6 says otherwise.  
- Token: `--color-border`, never `--color-border-default` (C7).

---

## 6. Component composition

Nested **instances** = published Nuclear components. **Text** = TEXT property. **Icons** = local Lucide components via INSTANCE_SWAP or fixed nested instance. **Frames** = Auto Layout only.

```
Label                          [text]
Field Description              [text]
Field Error
├── AlertTriangleIcon          [icon, if Show Icon]
└── message                    [text]

Spinner                        [icon Loader2]

Button
├── Start Icon                 [instance swap, optional]
├── Label                      [text] OR Spinner [instance] if loading
└── End Icon                   [instance swap, optional]

Input                          [text value / placeholder]
Input Group                    [frame]
├── Addon                      [text or icon]
└── Input                      [instance]

Input Field                    [frame, column, gap --space-stack-xs]
├── Label                      [instance]
├── Field Description          [instance, optional]
├── Input or Input Group       [instance]
├── Field Description helper   [instance, optional]
└── Field Error                [instance, optional]

Checkbox
└── Check | Minus              [fixed icon by state]

Checkbox Field                 [row, gap --spacing-6, min-height --space-touch-target-min]
├── Checkbox                   [instance]
└── column                     [frame, gap --space-stack-xs]
    ├── Label                  [instance]
    └── Field Description      [instance, optional]

Dropzone
├── trigger                    [frame]
│   ├── File | ImageUp | Spinner | X
│   └── Label                  [text]
└── Field Error                [instance]

Select
├── Trigger                    [frame]
│   ├── Value                  [text]
│   └── Chevron                [icon]
└── Content                    [frame, elevation shadow/md]
    └── Option
        ├── Check              [icon if selected]
        └── Label              [text]

Alert
├── Icon                       [instance swap]
├── Title / Description        [text]
├── Action                     [Button instance]
└── Close                      [Button / XIcon]

Dialog
├── Overlay                    [frame, color/overlay]
└── Popup                      [frame, radius-dialog, shadow-xl, space-dialog]
    ├── Title / Description
    ├── Body                   [slot]
    └── Footer                 [Buttons]

App Shell
├── App Sidebar                [instance]
└── body
    ├── App Header             [instance, optional]
    └── Main                   [slot]

User Profile Block
├── Avatar                     [instance]
├── Name / Subtitle            [text]
└── Settings Button            [Button instance + Settings2]
```

Remaining compositions match inventory §7.2. Payment Form / Data Table / Templates are **structural frames of instances**, not new primitives.

---

## 7. Auto Layout

Use **only** spacing / radius / size tokens. Do not invent 10px gaps.

| Component | Parent | Direction | Gap | Padding | Sizing | Align |
| --- | --- | --- | --- | --- | --- | --- |
| Label | hug | — | — | 0 | Hug | — |
| Field stack (`formFieldGroupClassName`) | column | vertical | `--space-stack-xs` (4) | 0 | Fill X, Hug Y | start |
| Checkbox Field | row | horizontal | `--spacing-6` (6) | 0 | Fill X, min-h `--space-touch-target-min` (44) | start/center |
| Checkbox Field content | column | vertical | `--space-stack-xs` | 0 | Fill | start |
| Checkbox group list | column | vertical | `--space-stack-sm` (8) | 0 | Fill | start |
| Option row (`formOptionRowClassName`) | row | horizontal | `--space-inline-sm` (8) | 0 | Fill | start |
| Button (text sizes) | row | horizontal | `--space-button-icon-gap` (6) | X: `--space-button-padding-*`; Y: hug | Hug or Fill if fullWidth; height `--spacing-28`…`56` | center |
| Button icon-* | — | — | 0 | 0 | Fixed `--spacing-28`…`56` square | center |
| Input | row | horizontal | — | X `--space-inline-sm/md/lg` by size | Fill if fullWidth; height `--spacing-28`…`56` | center |
| Input Group | row | horizontal | 0 | 0 | Fill; overflow clip | stretch |
| Chip | row | horizontal | `--space-inline-xs` (4) | X `--space-inline-sm`; Y `--space-stack-xs` | Hug, max Fill | center |
| Badge | row | horizontal | `--space-inline-xs` | by size | Hug | center |
| Alert | grid ~ column | vertical / icon+content | `--space-stack-xs`; icon gap `--space-inline-sm`; left border `--spacing-4` | X `--space-inline-md`; Y `--space-stack-sm` | Fill X | start |
| Card | column | vertical | `--space-card` / `--space-card-gap` | `--space-card` (16) | Fill | start |
| Dialog popup | column | vertical | `--space-dialog` | `--space-dialog` (24) | Hug/Fill with max | start |
| Logo Lockup | row | horizontal | `--space-inline-sm` | 0 | Hug | center |
| App Footer | by variant/device | see `app-footer.styles.ts` | `--space-page` where used | `--space-page` | Fill X | — |
| App Shell | row | horizontal | 0 | 0 | Fill | stretch |
| Tabs list default | row or column | by orientation | `--spacing-4` | `--spacing-4` | Hug | center |
| Table | — | — | `--space-table` (8) cell padding | — | Fill | — |
| User Profile Block | row | horizontal | `--space-inline-sm` | 0 | Hug/Fill | center |
| Switch | — | — | — | 0 | Hug (track size from icon tokens) | center |
| Dropzone trigger | column | vertical | `--space-stack-sm` (confirm in dropzone.styles) | use file values | Fill | center |
| Textarea | — | — | — | X/Y from size | Fill X; min-h 64/80/96 | start |

**Hug vs Fill:** controls hug by default; Input `fullWidth` default true → Fill X; Button `fullWidth` false → Hug; overlays hug content with max width UNCONFIRMED per dialog styles (use `--layout-reading-width` only if code does).

---

## 8. States

CSS hover/focus/active = interactive + spec sheet. Prop/data states = variants or BOOLEAN.

| Component | States that exist in code | Do not add |
| --- | --- | --- |
| Button | default, hover, active, focus-visible, disabled, loading, aria-invalid, aria-expanded | success |
| Input / Textarea | default, placeholder, focus-visible, disabled, read-only, aria-invalid | hover fill, success, warning |
| Input Field | all Input + loading + error text + optional helper | — |
| Checkbox / Radio / Switch | unchecked, checked, (checkbox indeterminate), hover, focus-visible, disabled, disabled+checked, aria-invalid | — |
| Text Link | default, hover, focus-visible, disabled | — |
| Chip | default; dismissible; dismiss hover/focus | selected |
| Badge | default; hover on link/ghost/`[a]` | — |
| Alert | variant colors; open/closed; dismissible | extra intents |
| Dropzone | empty, dragging, loading, filled, error, disabled | success as a named variant (filled is success-like but code calls it has-file) |
| Select | default, open, disabled, invalid, read-only, loading (field) | — |
| Date Picker | default, open, disabled, error | Calendar as separate DS component |
| Day Toggle | selected true/false, disabled, empty group | — |
| Tabs / Accordion | selected/expanded, disabled, focus | — |
| Dialog / Popover / Tooltip / Dropdown / Command | open/closed; nested disabled actions | — |
| Skeleton / Spinner | inherent | aria-busy BOOLEAN |
| App Sidebar | expanded true/false; nav active | — |
| Search Results | pre-search, with results | — |
| Payment Form | default, empty values, disabled | — |
| Card | optional empty slot | empty CVA variant |
| Logo Lockup | default, inverse | — |
| Stage Flow Badge | variant only | extra states |
| Sonner | types used in Toaster icons + loading | extra types |

---

## 9. Icons

| Fact | Value |
| --- | --- |
| Library | Lucide (`lucide-react`), `foundations/iconography/semantics.ts` `iconLibrary` |
| Color | `currentColor` |
| Stroke | `--icon-stroke` = 2 |
| Default size | `--icon-sm` (16) |
| Docs catalog (8) | Users, FlaskConical, ClipboardList, Upload, Download, Search, Settings, Bell |
| Figma representation | **Local components** on Foundations, named after Lucide export (`SearchIcon`). **Not** an external Figma Lucide library (would drift). INSTANCE_SWAP where code accepts children/icons. Fixed nested instance where code hardcodes the icon. |

**Hardcoded in DS components (migrate these as local components):**  
AlertTriangle, Loader2, Check, Minus, X, ChevronDown, ChevronUp, ChevronRight, ChevronLeft (pickers/nav), Search, Calendar, File, ImageUp, Settings2, PanelLeftClose, PanelLeftOpen, Mail, Phone, Globe, ArrowDownWideNarrow, ArrowUpWideNarrow, CircleCheck, Info, OctagonX, TriangleAlert.

**Passed by consumers (INSTANCE_SWAP, not a closed set):** Button children, App Sidebar `item.icon`, Badge/Alert optional icons, Command items, etc.

**Docs-only Lucide imports** (`src/components/docs/**`) are **not** required in the DS icon page unless also used by a published component.

**Catalog of 8** still appears on Foundations (live Icons page). That is documentation, not a limit on INSTANCE_SWAP.

---

## 10. Code → Figma naming

| Object | Convention | Example |
| --- | --- | --- |
| Pages | Registry category or existing Cover | `Inputs`, `Foundations` |
| Sections on a page | Title Case matching component/docs titles | `Input Field` |
| Variable collections | `lowercase/family` | `semantic/color` |
| Variables | CSS name without `--`, `/` for groups | `color/text-primary` |
| Modes | `light`, `dark`, `Default` | matches `.dark` / `:root` |
| Text styles | `text/{role}` | `text/h1` |
| Effect variables | `shadow/{xs…xl}` | `shadow/md` |
| Components / sets | Pascal Case / Title Case matching export | `Button`, `Field Error` |
| Variant properties | code prop name | `variant`, `size`, `intent` |
| Variant values | code string literals | `primary`, `icon-md` |
| BOOLEAN | Title Case of prop | `Loading`, `Show Icon` |
| TEXT | Title Case | `Label`, `Helper Text` |
| INSTANCE_SWAP | Title Case | `Start Icon` |
| Icon components | Lucide export name | `SearchIcon` |

Do not introduce Atomic Design names (`Atom/Button`) in Assets.

---

## 11. Atomic Design

The repo **does not use** Atomic Design. Figma pages follow **one published component = one page**, not atoms/molecules and not registry category pages.

Post-hoc reading only (not page names):

| Classification | When justified | Examples |
| --- | --- | --- |
| Foundation | Token folders exist | Colors, type, space, … |
| Atom / Basic | Single control, no Nuclear child instances | Label, Input, Checkbox, Spinner, Separator, Button |
| Molecule | Composes those | Input Field, Checkbox Field, Alert, Chip dismiss |
| Organism / Complex | Templates or dense product UI | App Shell, Data Table, Payment Form, Multi-Step Flow |

**UNCONFIRMED / do not force:** Payment Form (registry Data Display vs template-like), Deposit Summary, Sonner (toaster vs component), Command vs Global Search Bar, Dashboard Grid.

---

## 12. Conflict resolution

| Conflict | Code evidence | Other evidence | Decision | Reason | Requires user decision? |
| --- | --- | --- | --- | --- | --- |
| C1 Checkbox default size | `checkbox.tsx` `size = "md"`; types `@default "md"` | CVA `defaultVariants.size = "lg"` | Figma default **`md`**. CVA lg is unused at runtime. | Implementation wins | **No** for Figma. Code cleanup of CVA is out of scope. |
| C2 Stage Flow Badge default | CVA `defaultVariants.variant = "success"` | Variant named `default` also exists | Figma default **`success`** | Implementation wins | **No** |
| C3 Alert deprecated aliases | Types + CVA include `default` and `destructive` | Comments say use info/error | Visuals of aliases = info/error | Both exist in code | **Yes — expose aliases in Figma or omit as deprecated clutter** |
| C4 Skeleton aria-busy | `skeleton.tsx` no `aria-busy` | Registry lists it | No Figma property | Visual unchanged | **No** |
| C5 Spinner aria-busy | Sets `role="status"` `aria-label="Loading"` | Registry lists aria-busy | No Figma property | Visual unchanged | **No** |
| C6 Payment Form category | Lives in `payment-form/`; registry Data Display | It is a product form | Place on **Data Display** page | Follow registry until told otherwise | **Yes — move to Templates?** |
| C7 `--color-border-default` | Token is `--color-border` | Registry typo | Use `--color-border` | Token does not exist | **No** |
| C8 Timeline CSS-only colors | `colors.css` light + `.dark` | Not in `semanticColorCssNames` | Create Figma colors from CSS | They are used | **No** for Figma. TS contract update is out of scope. |
| C9 `--motion-modal-scale-to` | In CSS | Not in TS motion contract | Foundations table only; no required variable | Scale is prototype, not a color/space token | **No** |
| C10 tokenFamilies vs disk | 10 families in CSS import | Registry lists 5 | Migrate all 10 | CSS is runtime | **No** |
| C11 Foundation Storybook missing | No `*.stories.tsx` | `registry.ts` claims CSF | Ignore CSF; use live docs + tokens | Docs bug | **No** |
| C12 Heading font | `--text-h1-*` uses component/Poppins | `theme.css` `--font-heading` → sans | Text styles for roles = **Poppins**. Keep both family variables. | Components consume role tokens | **Yes only if** product wants IBM Plex headings despite role tokens |
| C13 Button radius | `rounded-[var(--radius-full)]` | `--radius-button` → lg | Button uses **full**. Still create `--radius-button` token. | Implementation vs unused context token | **No** |
| C14 layers.ts pending | `theme.css` exists | status pending | Ignore pending for Figma | Implementation exists | **No** |
| C15 8 components not in component registry | Folders + templates registry | Missing from components-registry | Migrate them; pages per §1 | Code exists | **No** |
| C16 5 planned | `href: "#"`, `status: planned` | No folders | **Do not create** | No implementation | **No** |
| C17 Subscribed kits | MCP library list | Not Nuclear | Do not instance them | Would contradict code | **Yes — unsubscribe kits from the file?** |
| C18 Badge link | `badge.styles.ts` `link` | Button is not a Link | Include Badge `link` | Separate component | **No** |

**Components requiring user decisions:** Alert (deprecated variants), Payment Form (page), optional heading font (C12), subscribed kits (C17).

**Token conflicts requiring user decisions:** none that block creating the token set. C12 is the only token-adjacent product choice. C8 is create-from-CSS without TS.

---

## 13. Gap analysis (migration matrix)

| Code | Figma | Action |
| --- | --- | --- |
| Cover page | Cover `0:1` exists, empty | MAP (content only) |
| 10 foundation families | none | CREATE |
| 68 color primitives | none | CREATE |
| Semantic colors + dark | none | CREATE |
| Timeline CSS-only colors | none | CREATE |
| 12 type roles | none | CREATE text styles |
| Spacing / radius / shadow / breakpoint / opacity / icon / motion durations | none | CREATE |
| Z-index | none | VERIFY as table only |
| Motion shorthands / layout 100% | none | MAP as docs, not variables |
| `theme.css` aliases | none | MAP skip |
| Lucide icons used by DS | none | CREATE local components |
| Icon catalog 8 | none | CREATE on Foundations |
| 52 implemented component folders | none | CREATE sets per §4–5 |
| Field Description, Input Button Group, App Header/Sidebar, Dashboard Grid | none | CREATE |
| App Shell, Multi-Step Flow, Search Results | none | CREATE on Templates |
| Planned Calendar, Attachment, Breadcrumb, Bubble, Aspect Ratio, Detail View | none | VERIFY skip |
| Patterns / screens | none | CREATE optional Phase 6 frames only |
| Registry `figma:` empty | — | MAP later Code Connect — out of this plan’s write |
| Subscribed Material/Apple/SDS | present | VERIFY do not use; REQUIRES DECISION to remove |
| Checkbox CVA vs runtime default | — | REQUIRES no Figma choice; use md |
| Alert aliases | — | REQUIRES DECISION |
| Dark semantic + dark shadows | — | CREATE modes |
| Payment Form | — | CREATE on Data Display; REQUIRES DECISION to relocate |
| Data Table generic API | — | CREATE representative instance; limitation documented |
| File-level Figma vars off Cover | UNCONFIRMED empty | VERIFY at first write |
| Effect variables vs effect styles for multi-layer shadows | UNCONFIRMED Figma capability | VERIFY in Phase 1 |

Actions used: CREATE, MAP, VERIFY, REQUIRES DECISION, UNCONFIRMED. No REDESIGN / IMPROVE / MODERNIZE.

---

## 14. Migration phases

### Phase 0 — Discovery

**DONE.** `docs/figma-migration-inventory.md`

### Phase 1 — Foundations

**Includes:** collections in §3; 12 text styles; 6 elevation effects; icon local components (hardcoded set + catalog 8); Foundations page ramps.  
**Dependencies:** none.  
**Expected Figma objects:** 10 collections, 246 variables, 12 text styles, ~30 icon components, Foundations page frames.  
**Validation:** every mapped token present; no `theme.css` duplicates; light/dark semantic switch; Button not yet using `--radius-button`.  
**Risks:** OKLCH→hex drift; effect variable limits; C8 hex for timeline OKLCH.

### Phase 2 — File structure

**Includes:** Cover; Getting Started; Foundations; **one page per migrated published component** (§1). Create a component’s page when that component is migrated. **do not** instance Material/Apple kits.  
**Dependencies:** Phase 1.  
**Expected:** Cover + Getting Started + Foundations + N component pages (N = published components migrated).  
**Validation:** page names match §1; no category pages (`Inputs`, `Feedback`, …); no variant-only pages.  
**Risks:** C17 kits confusing Assets.

### Phase 3 — Basic components

**Includes:** order 1–18 in §4.  
**Dependencies:** Phase 1–2.  
**Expected:** ~20 component sets.  
**Validation:** CVA values only; Button radius full; Checkbox default md; Spinner/Skeleton no aria-busy prop.  
**Risks:** Button 80-variant size.

### Phase 4 — Composed components

**Includes:** order 19–45.  
**Dependencies:** Phase 3.  
**Expected:** field composites, overlays, nav controls, Sonner.  
**Validation:** field shell composition; Alert decision C3 applied; no standalone Calendar set.  
**Risks:** Select/Command density; Alert aliases.

### Phase 5 — Complex components

**Includes:** order 46–57.  
**Dependencies:** Phase 4.  
**Expected:** Data Table, Timeline, dashboard, chrome, templates, Payment Form.  
**Validation:** templates on Templates page; Payment Form C6/C7; sidebar `Expanded`.  
**Risks:** Data Table not a generic engine; Multi-Step internals.

### Phase 6 — Documentation

**Includes:** spec sheets (states, density); optional pattern frames from existing instances only; Getting Started QA checklist.  
**Dependencies:** Phase 5.  
**Expected:** docs frames, not new Assets.  
**Validation:** no planned components; patterns are instances.  
**Risks:** treating patterns as components.

### Phase 7 — QA

**Includes:** §15 checklist; conflict table; kit audit; Code vs Figma pixel/token pass.  
**Dependencies:** Phase 6.  
**Expected:** issue list, not new UI.  
**Validation:** zero invented states; every published property maps to code.  
**Risks:** hex drift; interactive hover missing on some sets.

**Phases: 8** (0 done + 1–7).

---

## 15. Validation rules

1. Every token in §2 that is marked CREATE exists; none of the skip list exists as a duplicate.  
2. No undocumented variables (especially Tailwind aliases and `--shadow-layer-*` as public).  
3. Every implemented folder in inventory §4.1–4.2 has a Figma set or is nested by spec.  
4. No Figma set for planned-only registry items.  
5. Every CVA / typed union value exists as a variant value; no extra values.  
6. Every §8 state is either a variant, BOOLEAN, interactive reaction, or spec-sheet annotation — not omitted.  
7. No invented success/warning/read-only/hover where code has none.  
8. Every published BOOLEAN/TEXT/INSTANCE_SWAP maps to a real public prop or a documented FIGMA MAPPING of `children` / slots.  
9. No hardcoded hex/rgb on components where a semantic variable exists.  
10. Button corners use `radius/full`; fields use `radius/input` except Input `sm` (`radius/md`).  
11. Nested instances stay instances (Label inside Input Field, etc.).  
12. Auto Layout gaps/padding use `spacing` variables only.  
13. `semantic/color` mode switch restyles components without detaching.  
14. Designers can configure published sets from the right panel without detaching for listed properties.  
15. Subscribed kits are not used in Nuclear frames.  
16. Logo wordmark remains `medmo` as in code.  
17. Checkbox default variant `size=md`.  
18. Stage Flow Badge default `variant=success`.

---

## 16. Do not build yet

This file is the specification only.

Do not: modify Figma; create pages, variables, styles, or components; modify or refactor the Design System code.

Next step: review this plan, resolve §12 items marked **Requires user decision? Yes**, then authorize Phase 1.

---

*End of migration plan. No Figma or code changes were made.*
